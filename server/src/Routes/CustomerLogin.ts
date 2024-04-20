import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import CustomerModel from '../models/Customer';
import { Customer } from '../models/Customer';
const LoginRouter = express.Router();



const JWT_SECRET = '3863c657-154c-4028-8df6-86373356a5cf-9135cbf0-562b-4230-bb18-b6dbac3fe3d9-ada5cf92-0e7c-49f0-85d0-55417fe2bd3c';

export const loginCustomer = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const customer: Customer | null = await CustomerModel.findOne({ email });
    if (customer && await bcrypt.compare(password, customer.password)) {
      const token = jwt.sign({ id: customer._id, role: 'customer', username: customer.username, email: customer.email }, JWT_SECRET, {
        expiresIn: '1h',
      });
      res.status(200).json({ token, username: customer.username });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to login customer' });
  }
};

LoginRouter.post('/', loginCustomer);
export default LoginRouter;
