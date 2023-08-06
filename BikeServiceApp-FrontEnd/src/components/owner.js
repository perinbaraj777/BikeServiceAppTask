import React from "react";
import {Link} from 'react-router-dom';    //to navigate between the modules
import {useState} from 'react';
import axios from 'axios';          //axios to link the ui and the server


export function Owner(){
    // using useState to store the derived data from backend
const[allBookings,setAllBookings] = useState([""]);
const getAllBookings  =()=>{
axios.get('http://localhost:1000/getAllBookings').then((response)=>setAllBookings(response.data))
}

const[pendingBookings,setPendingBookings] = useState([""]);
const getPendingBookings = ()=>{
    axios.get('http://localhost:1000/getPendingBookings').then((response)=>setPendingBookings(response.data))
}

//updating booking status
const[updateBookingStatusId,SetUpdateBookingStatusId]=useState("")
const[updateBookingStatusStatus,SetUpdateBookingStatusStatus] = useState("");
const modifyBookingStatus =()=>{
    axios.put('http://localhost:1000/updateBookingStatus',{
        Status:updateBookingStatusStatus,
        customerId:updateBookingStatusId
    }).then(()=>console.log('success'))
}  

//geting ready to deliver booking details
const[readyToDeliverBookings,setReadyToDeliverBookings] = useState([""]);
const getReadyToDeliverBookings = ()=>{
    axios.get('http://localhost:1000/getReadyToDeliverBookings').then((response)=>setReadyToDeliverBookings(response.data))
}

//getting completed booking details
const[completedBookings,setCompletedBookings] = useState([""]);
const getCompletedBookings = ()=>{
    axios.get('http://localhost:1000/getCompletedBookings').then((response)=>setCompletedBookings(response.data))
}

//delete an booking detail
const[deleteBooking,SetDeleteBooking]= useState("");
const removeBooking =()=>{
    axios.delete('http://localhost:1000/removeABooking',{
    customerId:deleteBooking
    }).then(()=>console.log('success'))
}  
//delete all booking details

const removeallBooking =()=>{
    axios.delete('http://localhost:1000/removeAllBooking'
    ).then(()=>console.log('success'))
}  
return(
        <>
        <div className='container text-center'>
            <h1>10K BIKE SERVICE  CENTER</h1>
        <div className='container'>
            <h1> ADD NEW BOOKINGS</h1>
           <Link to="/user" ><button>create new booking</button></Link>
           
        </div>
        <div className='container'>
            <h1> VIEW  BOOKING DETAILS</h1>
            <button onClick={getAllBookings}>view all bookings</button>
           {allBookings.map(a=>{
             return <table className="table table-bordered bg-dark text-light text-center">
             <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
            <th><p className="text-dark">CUSTOMER ID:</p>{a.customer_id}</th>
            <th><p className="text-dark">SERVICES:</p>{a.services}</th>
            <th><p className="text-dark">EXPECTED DELIVERY DATE:</p>{a.service_date}</th> 
            <th><p className="text-dark">STATUS:</p>{a.status}</th>                   
            </tr></table>
     
           })}
                   {/* for viewing the pending booking list */}
            <button onClick={getPendingBookings}>view pending bookings</button>
            {pendingBookings.map(a=>{
              return <table className="table table-bordered bg-dark text-light text-center">
            <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
            <th><p className="text-dark">CUSTOMER ID:</p>{a.customer_id}</th>
            <th><p className="text-dark">SERVICES:</p>{a.services}</th>
            <th><p className="text-dark">EXPECTED DELIVERY DATE:</p>{a.service_date}</th>          
            <th><p className="text-dark">STATUS:</p>{a.status}</th>   
            </tr>

              </table>     
            })}
            
            {/* for viewing the ready to deliver booking list */}
            <button onClick={getReadyToDeliverBookings}>view ready to deliver bookings</button>
            {readyToDeliverBookings.map(a=>{
              return <table className="table table-bordered bg-dark text-light text-center">
            <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
            <th><p className="text-dark">CUSTOMER ID:</p>{a.customer_id}</th>
            <th><p className="text-dark">SERVICES:</p>{a.services}</th>
            <th><p className="text-dark">EXPECTED DELIVERY DATE:</p>{a.service_date}</th>          
            <th><p className="text-dark">STATUS:</p>{a.status}</th>     
            </tr>
              </table>     
            })}
            
            {/* for viewing the completed booking list */}
            <button onClick={getCompletedBookings}>view completed bookings</button> 
            {completedBookings.map(a=>{
              return <table className="table table-bordered bg-dark text-light text-center">
            <tr>
            <th ><p className="text-dark">BOOKING ID:</p> {a.booking_id}</th>
            <th><p className="text-dark">CUSTOMER ID:</p>{a.customer_id}</th>
            <th><p className="text-dark">SERVICES:</p>{a.services}</th>
            <th><p className="text-dark">EXPECTED DELIVERY DATE:</p>{a.service_date}</th>          
            <th><p className="text-dark">STATUS:</p>{a.status}</th>     
            </tr>
              </table>     
            })}  
        </div>
        <div className='container'>
             {/* update booking status */}
            <h1>UPDATE BOOKING STATUS</h1>
            <label>BOOKING ID:</label>
            <input type="number"  name="updateBookingStatusId" onChange={(e)=>SetUpdateBookingStatusId(e.target.value)}/>
            <label>SERVICE STATUS:</label>
            <select name="updateBookingStatusStatus" onChange={(e)=>SetUpdateBookingStatusStatus(e.target.value)}>
                <option>pending</option>
                <option>ready to deliver</option>
                <option>completed </option>
            </select>
            <button onClick={modifyBookingStatus}>UPDATE</button>
        </div>
        <div className='container'>
        <h1> DELETE  BOOKING DETAILS</h1>
        <label>BOOKING ID:</label>
            <input type="number" name="deleteBooking" onChange={(e)=>SetDeleteBooking(e.target.value)}/>
        <button onClick={removeBooking}>delete</button><br/>
            <button onClick={removeallBooking}>delete all bookings</button>
           
        </div>
       
        </div>
        </>
    )
}