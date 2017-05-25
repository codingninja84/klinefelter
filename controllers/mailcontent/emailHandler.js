var nodemailer = require('nodemailer')

module.exports = (function(){
  return {
    sendEmail: function(content) {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });
      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1461@hotmail.com, abshirm@live.com',
        subject: 'New Quote Request',
        html: "" + content + ""
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    }
  }
})()
