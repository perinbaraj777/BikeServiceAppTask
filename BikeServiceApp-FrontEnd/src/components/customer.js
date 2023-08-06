import React from 'react';
//imported axios 
//axios is used to access the api created in the backend
import axios from 'axios';
import {useState} from 'react';

export function Customer(){
    //add customer details
    const[uimail,setUimail]=useState("");
    const[uimobile,setUimobile]=useState(""); 
    const addUsers =()=>{
        axios.post('http://localhost:1000/registerCustomerInfo',{
            mailId:uimail,
            Phone:uimobile
        }).then(()=>console.log('success'))
    }

    //getting customer list
    const[allCustomers,setAllCustomers] = useState([""]);
const getAllCustomers  =()=>{
axios.get('http://localhost:1000/getCustomerList').then((response)=>setAllCustomers(response.data))
}


//add booking
const[uicustomerid,setUicustomerid]=useState("");
    const[uiservices,setUiservices]=useState(""); 
    const[uiservicedate,setUiservicedate]=useState(""); 
    const addBooking =()=>{
        axios.post('http://localhost:1000/registerService',{
            customerId:uicustomerid,
            Services:uiservices,
            serviceDate:uiservicedate
        }).then(()=>console.log('success'))
    }

//geting  booking id
const[bookingId,setBookingId] = useState([""]);
const[getbookingnumber,setGetbookingnumber]=useState("");
const getBookingNumber  =()=>{
axios.get('http://localhost:1000/getBookingId',{
    customerId:getbookingnumber
}).then((response)=>setBookingId(response.data))
}
 //to use the track the history of booking of a particular user
const[retriveHistory,setRetriveHistory]= useState([""]);
const[historyid,setHistoryid]=useState("");
const history=()=>{
    axios.get('http://localhost:1000/getHistory',{
        customerId:historyid
    }).then((response)=>setRetriveHistory(response.data))
}

    return(
        <>
        <div className='container'>
            <h1>REGISTRATION</h1>
            <p>please complete the registration before booking your service</p>

            <label>ENTER YOUR MAIL ID:</label>
            <input type="email" name='uimail' onChange={(e)=>setUimail(e.target.value)}/><br/>
            <label>ENTER YOUR NUMBER:</label>
            <input type="number" name='uimobile' onChange={(e)=>setUimobile(e.target.value)}/><br/>
            <button onClick={addUsers}>REGISTER</button>
            <button onClick={getAllCustomers}>VIEW REGISTRATION DETAILS</button>
        {allCustomers.map(a=>{
              return <table className="table table-bordered bg-danger text-light text-center">
            <tr>
            <th ><p className="text-dark">USER ID:</p> {a.user_id}</th>
            <th><p className="text-dark">E-MAIL ID:</p>{a.mail_id}</th>
            <th><p className="text-dark">MOBILE:</p>{a.phone}</th>
                      
            </tr>
              </table>     
            })}
        </div>

        <div className='container'>
            <h1>BOOK A SERVICE</h1>
            <label>ENTER CUSTOMER ID:</label>
            <input type="number" name='uicustomerid' onChange={(e)=>setUicustomerid(e.target.value)}/><br/>
            <label>SERVICES:</label><br/>
            <p>hold ctrl+windows for selecting multiple values</p>
         <select multiple name='uiservices' onChange={(e)=>setUiservices(e.target.value)}>
            <option value="">choose</option>
            <option value="General service check-up">General service check-up</option>
            <option value="Oil change">Oil change</option>
            <option value="Water wash">Water wash</option>
         </select><br/>
         <label>EXPECTED DELIVERY DATE:</label>
        <input type="date" name='uiservicedate' onChange={(e)=>setUiservicedate(e.target.value)}/>

        <button onClick={addBooking}>CONFRIM BOOKING</button><br/>
       
        </div>
        


        <div className='container text-center'>
            <h1>CUSTOMER BOOKING PROFILE</h1>
           
            <label>TRACK YOUR BOOKING:</label>
            <input type="number" placeholder="ENTER YOUR BOOKING ID"/>
            <button>TRACK</button><br/>
            <p>if dont know booking id you can get here:</p>
            <label>ENTER CUSTOMERID</label>
        <input type="number" name='getbookingnumber' onChange={(e)=>setGetbookingnumber(e.target.value)}></input>
        <button onClick={getBookingNumber}>GET BOOKING ID</button>
        {bookingId.map(a=>{
              return <table className="table table-bordered bg-danger text-light text-center">
            <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
                      
            </tr>
              </table>     
            })} 
            <h4>VIEW YOUR BOOKING HISTORY</h4>
            <label>ENTER CUSTOMER ID</label>
            <input type="number" placeholder="customer id" name='historyid' onChange={(e)=>setHistoryid(e.target.value)}/>
            <button onClick={history}>TRACK HISTORY</button>
            {retriveHistory.map(a=>{
              return <table className="table table-bordered bg-danger text-light text-center">
            <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
            <th><p className="text-dark">CUSTOMER ID:</p>{a.customer_id}</th>
            <th><p className="text-dark">SERVICES:</p>{a.services}</th>
            <th><p className="text-dark">EXPECTED DELIVERY DATE:</p>{a.service_date}</th>   
            </tr>
              </table>     
            })}
        </div>
                </>
    )
}