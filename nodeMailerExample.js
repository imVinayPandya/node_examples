var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'mail@gmail.com',
        pass: 'pass'
    }
}));

transporter.sendMail({
    from: 'mail@your.com',
    to:'receiver@mail.com',
    subject: 'hello',
    text: 'Google SMtp is working'
}, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});



/*
//gamil example is working like a charm
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpass'
    }
});

transporter.sendMail({
    from: 'yuoremail@gmail.com',
    to:'reciever@mail.com',
    subject: 'hello',
    text: 'Thing is working'
}, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});*/
