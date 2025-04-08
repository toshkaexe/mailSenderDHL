import {Router, Response, Request} from "express";
import {emailAdapter} from "../adapter/email-adapter";

import {postValidationBody} from "../validation/postValidation";

export const emailRoute = Router({})

emailRoute.post(
    '/', postValidationBody(),async (req: Request, res: Response) => {
      res.send(200);
      console.log("email", req.body.email, req.body.subject, req.body.message)
       await  emailAdapter.sendEmail("zurix@mail.ru", req.body.subject, req.body.message);

    }
)
