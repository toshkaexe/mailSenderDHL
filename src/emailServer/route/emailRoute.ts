import {Router, Response, Request} from "express";
import {emailAdapter} from "../adapter/email-adapter";


export const emailRoute = Router({})

emailRoute.post(
    '/', async (req: Request, res: Response) => {

      //await bussinesService.doOperation()
      res.send(200);
      console.log("email", req.body.email, req.body.subject, req.body.message)
       await  emailAdapter.sendEmail(req.body.email, req.body.subject, req.body.message);

    }
)