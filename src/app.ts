import cors from 'cors'
import express, {Express, Request, Response} from 'express';
import {emailRoute} from "./emailServer/route/emailRoute";

import bodyParser from "body-parser";

export const RouterPaths = {
  email: '/email',
}

export const app: Express = express();
app.use(express.json())

app.use(cors()) // 👈 обязательно!
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send("Hello Email Server!")
})
// Health check endpoint
app.get('/health', (req, res) => {

})

app.use(RouterPaths.email, emailRoute)