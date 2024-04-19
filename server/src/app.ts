import express from "express"
import cors from "cors"
import { Request, Response } from 'express';
import CustomerRouter from "./Routes/Customer";
import LoginRouter from "./Routes/CustomerLogin";


const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.use('/customers', CustomerRouter);
app.use('/login', LoginRouter)

export { app }
