import {body} from "express-validator";
import {inputValidation} from "./input-validation";

export const emailValidation = body("email")
.isString()
.trim()
.isEmail()
.isLength({ min: 5, max: 100 })
.withMessage("Email must be valid and between 5 and 100 characters long")


export const descriptionValidation = body("message" )
.isString()
.trim()
.isLength({min: 1, max: 5000})
.withMessage("Incorrect description!");

export const subjectValidation = body("subject" )
.isString()
.trim()
.isLength({min: 1, max: 100})
.withMessage("Incorrect description!");



export const postValidationBody = ()=>[
  emailValidation,
  descriptionValidation,
  subjectValidation,
  inputValidation
]


