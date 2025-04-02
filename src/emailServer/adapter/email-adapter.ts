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
    console.log("11111")
    console.log("email", email, subject, message)
    console.log("22222")
    let info =
        await transporter.sendMail({
          from: "Info <antonanton2025@internet.ru>",
          to: email,
          subject: "Your Order Has Been Shipped – Tracking Information Inside",
          html: emailTemplate
        })

    console.log(info);
    console.log("333")
    return info;
  }

}