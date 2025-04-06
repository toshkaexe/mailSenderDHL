import nodemailer from "nodemailer";
import {emailTemplate} from "../../ressource/email.template";

export const emailAdapter = {

  async sendEmail(email: string, subject: string, message: string) {

    let transporter = nodemailer.createTransport({
      service: 'Mail.ru',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWS,
      }
    });

    console.log("email", email, subject, message)

    let info =
        await transporter.sendMail({
          from: "Info <antonanton2025@internet.ru>",
          to: email,
          subject: subject,
          html: message
        })

    console.log(info);
    console.log("333")
    return info;
  }

}