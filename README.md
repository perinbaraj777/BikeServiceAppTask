"# BikeServiceAppTask" 
Project Description:
                                 Bike service application

1. This application is for owners of Bike service stations. It helps the owners to list all
the services they offer. 
2. This project consists of two modules likely 1.Owners Module 2.Customers Module
3.Customers can register for an account with their email address and mobile
number. 
3. They can choose a service. Book the service at a particular date.
4. Once the customer booked a service, The service Station Owner receives an email notification with details about the service requested by the customer.
5. Once the service is completed, the owner will mark the specific booking (of a customer) as
“ ready for delivery”
6. The customer will receive an email saying that his bike is ready
for delivery.
7. Once delivered,the owner will mark the booking as
“completed” 
8. The Owner can create / edit / delete all his services and their details,
    - View the list of all pending bookings
    - View the list of all ready for delivery bookings 
    - View the list of completed bookings 
    - View details of each booking
9. The User can see the status of his booking and see all his previous bookings

API s in owner module:
1. To get all booking details  - get('http://localhost:1000/getAllBookings')
2. To get the pending booking -get('http://localhost:1000/getPendingBookings')
3. To update the booking detail- put('http://localhost:1000/updateBookingStatus')
4. To get the ready to delevier bookings list-get('http://localhost:1000/getReadyToDeliverBookings')
5. To get completed bookings listget('http://localhost:1000/getCompletedBookings')
6. To delete a booking- delete('http://localhost:1000/removeABooking')
7. To delete a booking- delete('http://localhost:1000/removeAllBooking')


CUSTOMER MODULE API:
1. To register new customer- post('http://localhost:1000/registerCustomerInfo')
2. To view customer detail-get('http://localhost:1000/getCustomerList')
3. To Book a service -post('http://localhost:1000/registerService',)
4. To get booking id -get('http://localhost:1000/getBookingId',)
5. To get booking history-get('http://localhost:1000/getHistory')

OWNER MODULE:
![Screenshot (392)](https://github.com/perinbaraj777/BikeServiceAppTask/assets/127020379/00892267-8f2e-4b75-b69a-efddb564fe62)



API AND OUTPUTS IN OWNER MODULE:
view all booking-'http://localhost:1000/getAllBookings'

![Screenshot (393)](https://github.com/perinbaraj777/BikeServiceAppTask/assets/127020379/26b55dda-f50b-4170-91c7-4e65d6ec3878)

 
 view pending booking-http://localhost:1000/getPendingBookings
![Screenshot (394)](https://github.com/perinbaraj777/BikeServiceApp/assets/127020379/a65fde99-2735-4f68-b9d1-33fb1c342da6)

CUSTOMER MODULE:
![Screenshot (395)](https://github.com/perinbaraj777/BikeServiceApp/assets/127020379/93b93df2-92a7-433b-b1ef-39806180c6ab)

view history of the booking-http://localhost:1000/getHistory
![Screenshot (396)](https://github.com/perinbaraj777/BikeServiceApp/assets/127020379/9d04083c-3530-4fd1-81b6-8225126cd71c)


MAIL OF BOOKING DETAILS AND UPDATE STATUS UPDATE
![Screenshot (397)](https://github.com/perinbaraj777/BikeServiceAppTask/assets/127020379/39d13fa4-17f2-49c3-b9f4-5bee580737d0)


LANGAUGES:
frontend: Reactjs
backend: Nodejs
database:MYSQL

Process of Execution:
1.download the project 
2.open the BikeServiceApp-BackEnd folder where the api's are created in the index.js file
3.open the index.js file  then in terminal  run the code
to run " npm run dev " or "node index.js"
4.all the API's are full functionable to test API in the postman "localhost:1000/"api"
USER INTERFACE:
1.i have also created user interface  and connected the api with axios 
2.the ui is very understandable to use and perform the api 
3.inorder to view the code  the source code is in the folder name "BikeServiceApp-Front End(BikeServiceApp-BackEnd)",
4.you can find the front end code in the folder "src" 
5.run the code in app.js 
6. to run "npm start"
