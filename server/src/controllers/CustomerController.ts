import express, { Request, Response } from 'express';
import CustomerModel, { Customer } from '../models/Customer';
import bcrypt from 'bcrypt';

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { password, ...customerData } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newCustomer: Customer = new CustomerModel({
      ...customerData,
      password: hashedPassword,
    });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create customer', });
  }
};


export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await CustomerModel.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve customers' });
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await CustomerModel.findById(req.params.id);
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve customer' });
  }
};

export const updateCustomers = async (req: Request, res: Response) => {
  try {
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCustomer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update customer' });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const deletedCustomer = await CustomerModel.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' });
  }
};

