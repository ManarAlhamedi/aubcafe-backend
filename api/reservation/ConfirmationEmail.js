const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "AUBCafe@outlook.com",
        pass: process.env.PASS, 
    }
});



app.post('/OrderConfirmed', (req, res) => {
    // Process the order details
    const {first_name, email, orderItems } = req.body;

    //set up the email message
    const message = {
        from: 'AUBCafe@outlook.com',
        to: email,
        subject: 'Your order has been confirmed!',
        text: `Hi ${first_name}, your order has been confirmed. You ordered: ${orderItems}`
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
});

module.exports = SendEmail;