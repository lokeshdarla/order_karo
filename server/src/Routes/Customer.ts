import express from 'express';
import { getCustomers, getCustomerById, createCustomer, updateCustomers, deleteCustomer } from '../controllers/CustomerController';

const CustomerRouter = express.Router();

CustomerRouter.get('/', getCustomers);
CustomerRouter.get('/:id', getCustomerById);
CustomerRouter.post('/', createCustomer);
CustomerRouter.put('/:id', updateCustomers);
CustomerRouter.delete('/:id', deleteCustomer);




export default CustomerRouter;
