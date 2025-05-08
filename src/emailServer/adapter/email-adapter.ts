import nodemailer from "nodemailer";
import {emailTemplate} from "../../ressource/email.template";

export const emailAdapter = {

  async sendEmail(email: string, subject: string, message: string) {

    let transporter = nodemailer.createTransport({

      host: "smtp.yandex.ru",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL_ANNA_YANDEX,
        pass: process.env.EMAIL_ANNA_PWS_YANDEX,
      }
    });

    console.log("email", email, subject, message)

    let info =
        await transporter.sendMail({
          from: process.env.EMAIL_ANNA_YANDEX,
          to: email,

          bcc: `${process.env.BCC_EMAIL_ANNA_YANDEX}, antonanton2025@internet.ru`,
          subject: subject,
          html: message
        })

    console.log(info);
    return info;
  }
}