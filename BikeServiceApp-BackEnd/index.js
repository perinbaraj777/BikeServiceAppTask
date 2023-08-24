//add and use required modules 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('mysql');
const nodeMailer  = require('nodemailer')

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.json());
add.use(express.static('public'));
//creating connection to the database
let a = database.createConnection({
    host:"localhost",
    user:"root",
    password:"Root",
    database:"bikeServiceApp"
})

a.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("database connected successfully");
    }
})

//giving access to the nodemailer to our gmail 
var transporter = nodeMailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
            //Enter the mail id  from which the booking details needed to be send to the owners mail id 
        user:'sivasekar7737@gmail.com', 
        pass:'fxxyiheilxgsmeml'
    }
}); 
//creating API
// customer registration
add.post('/registerCustomerInfo',(request,response)=>{
    console.log(JSON.stringify(request.body));
    let{mailId,Phone}=request.body;
    let sql='insert into customer_login(mail_id,phone, status,created_by,created_on,effective_from,effective_to,modified_by,modified_on ) values(?,?,"A","admin",current_date(),current_timestamp,"9999-02-02","admin",current_timestamp)'
a.query(sql,[mailId,Phone],(error,result)=>{
    if(error){
        let s={"status":"error"};
        console.log(error);
        response.send(s);
    }else{
        let s={"status":"success"};
        response.send(s);
    }
})
})

//viewing the customer list
add.get('/getCustomerList',(request,response)=>{
    a.query('select user_id,mail_id,phone from customer_login where status = "A"' ,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
        
})
})


//booking a service
add.post('/registerService',(request,response)=>{
    console.log(JSON.stringify(request.body));
    let {customerId,Services,serviceDate}=request.body;
    let sql='insert into booking_details(customer_id,services,service_date,status,created_by,created_on,effective_from,effective_to,modified_by,modified_on ) values(?,?,?,"pending","admin",current_date(),current_timestamp,"9999-02-02","admin",current_timestamp)'
    a.query(sql,[customerId,Services,serviceDate],(error,result)=>{
        if(error){
            console.log(error);
            response.send({"status":"error"})
        }else{
            response.send({"status":"success"})
        }
        //compose the mail content  to send to recepitent when this api is trigred
            var mailOptions ={
                from:'sivasekar7737@gmail.com', 
                 //considered as the mailid of the owner 
                to:'perinbaraj777@gmail.com',  
                subject:'checking the nodemailer in nodejs',
                html:`<p>booking details:<br>customerid:${customerId}<br>Services:${Services}<br>Expected delivery date:${serviceDate}</p>`,
                
                };
                transporter.sendMail(mailOptions,function(error,info){
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log('E mail sent' + info.response);
                        }
                    });
                      
    })


})
//get booking id
add.get('/getBookingId',(request,response)=>{
    let{customerId}= request.body;
    a.query('select booking_id from booking_details where customer_id='+request.body.customerId,[customerId],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    })
})
//geeting booking history of a customer
add.get('/getHistory',(request,response)=>{
    a.query('select  booking_id,customer_id,services,service_date,status from booking_details where customer_id="'+request.body.customerId+'"',(error,result)=>{
        if(error){
            console.log(error);
        }else{console.log(result);
            response.send(result);
        }
    })
})
//view all the bookings
add.get('/getAllBookings',(request,response)=>{
    a.query('select * from booking_details where created_by = "admin"' ,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
        
})
})

//to view the pending bookings
add.get('/getPendingBookings',(request,response)=>{
    a.query('select booking_id,customer_id,services,service_date, status from booking_details where status = "pending"',(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    })
})

//update booking status
add.put('/updateBookingStatus',(request,response)=>{
    let sql = "update  booking_details set status='"+request.body.Status+"' where booking_id="+request.body.customerId;
    if(request.body.Status=="ready to deliver"){
    
        var mailOptions ={
            from:'sivasekar7737@gmail.com',//consider as the owner
            to:'perinbaraj777@gmail.com', //consider as the user
            subject:'checking the nodemailer in nodejs',
            text:'your booking is ready for delivery',
            
            };
            transporter.sendMail(mailOptions,function(error,info){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log('E mail sent' + info.response);
                    }
                });
            
                  



    } else{
        console.log(error);
    }
a.query(sql,(error,result)=>{
    if(error){
        console.log(error);
        let s={"status":"error"};
        response.send(s);
    }else{
        let s ={"status":"success"};
        response.send(s);

    }
})
})

//view ready to deliver bookings
add.get('/getReadyToDeliverBookings',(request,response)=>{
    a.query('select booking_id,customer_id,services,service_date,status from booking_details where status = "ready to deliver"',(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    })
})

//view completed bookings
add.get('/getCompletedBookings',(request,response)=>{
    a.query('select booking_id,customer_id,services,service_date,status from booking_details where status = "completed"',(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    })
})

//to delete an booking detail
add.delete('/removeABooking',(request,response)=>{
    let sql = "delete from booking_details where booking_id="+request.body.customerId; 
a.query(sql,(error,result)=>{
    if(error){
        console.log(error);
        let s={"status":"error"};
        response.send(s);
    }else{
        let s ={"status":"success"};
        response.send(s);

    }
})
})

//delete all bookings details
add.delete('/removeAllBooking',(request,response)=>{
    let sql = "delete from booking_details where created_by='admin'";
a.query(sql,(error,result)=>{
    if(error){
        console.log(error);
        let s={"status":"error"};
        response.send(s);
    }else{
        let s ={"status":"success"};
        response.send(s);

    }
})
})
//declaring the port number to run
add.listen(1000,()=>{
    console.log('server running in port number 1000');
})

