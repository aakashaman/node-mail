const nodemailer = require("nodemailer");

async function sendEmail() {
  try {

    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com", 
      port: 587, 
      secure: false, 
      auth: {
        user: "use your email here",
        pass: "use your password here", 
      },
    });

    let info = await transporter.sendMail({
      from: "Aakash.12015092@lpu.in", 
      to: "aakashaman9931@gmail.com", 
      subject: "Hello from Node.js!", 
      text: "This is a test email sent from Node.js.", 
      html: "<b>This is a test email sent from Node.js.</b>", 
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error:", error);
  }
}

sendEmail();
