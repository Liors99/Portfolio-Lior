const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors(
    {
        origin: process.env.CLIENT_ADDRESS
    }
));
app.use(express.json());

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'outlook',
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_EMAIL_PASSWORD
    }
});


const port = process.env.PORT || 5000;


const http = require("http").createServer(app);

app.post('/newMessage', (req, res) => {


    const name = String(req.body.name);
    const email = String(req.body.email);
    const message = String(req.body.message);

    let mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Portfolio - A New Message from ' + name + " - " + email,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json('Error : ' + error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json('Email sent: ' + info.response);
        }
    });
})

http.listen(port, () => {
    console.log("Listening on port " + port);
});
