const { 
    createReservation,
    getReservation,
    getReservationByReservation_ID,
    deleteReservation,
    createCart,
    sendEmail
} = require("./reservation.service");
const nodemailer = require('nodemailer');

module.exports = {
    createReservation: (req, res) => {
        const body = req.body;
        createReservation(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getReservationByReservation_ID: (req, res) => {
    const Reservation_ID = req.params.Reservation_ID;
    getReservationByReservation_ID(Reservation_ID, (err, results) =>  {
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success: 0,
                message: "Record Not Found"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    });
   },

   getReservation: (req, res) => {
    getReservation((err, results) => {
        if(err){
            console.log(err);
            return;
        }
        return res.json({
            success: 1, 
            data: results
        });
    });
   }, 


    deleteReservation: (req, res) => {
        const data = req.body;
        deleteReservation(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
        
            return res.json({
                success: 1,
                message: "Reservation deleted successfully"
            });
        });
    },

    createCart: (req, res) => {
        const body = req.body;
        createCart(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    sendEmail: (req, res) => {
        const transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
                user: "AUBCafe@outlook.com",
                pass: process.env.PASS, 
            }
        });
        
        // Process the order details
        const {email, first_name, dateOfReservation, timeOfReservation} = req.body;

        //set up the email message
        const message = {
            from: 'AUBCafe@outlook.com',
            to: email,
            subject: 'Your order has been confirmed!',
            text: `Hi ${first_name}, your order has been confirmed. \n
            Your order will be ready on ${dateOfReservation} at ${timeOfReservation}`
            
        };
        //send the email
        transporter.sendMail(message, (err, info) => {
            if(err){
                console.log(err);
                res.status(500).send('Error sending email');
            }else{
                console.log('Email sent: ' + info.response);
                res.status(200).send('Email sent')
            }
        });


    }


};