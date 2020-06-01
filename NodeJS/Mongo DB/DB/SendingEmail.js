var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bansalsonu891@gmail.com',
    pass: 'sonu$immy'
  }
});

var mailOptions = {
  from: 'bansalsonu891@gmail.com',
  to: 'Bansalsonu12891@gmail.com',
  subject: 'Sending Email using Node',
  text: 'Life is all about the next step'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});