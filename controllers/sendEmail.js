const nodemailer = require('nodemailer');


const sendEmail = async(req,res)=>{

    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'freeman.cormier@ethereal.email',
            pass: process.env.NMPass,
        }
    });
    let info = await transporter.sendMail({
        from :'"Coding addict"<codingaddict@gmail.com>',
        to: "bar@example.com",
        subject: "Hello",
        html: '<h2>SENDING emails with nodejs</h2>'
    });
    res.json(info);

    // res.send('send email func');
}


module.exports= sendEmail;