import { Request, Response, NextFunction, RequestHandler } from 'express';
import OutletModel, { Outlet } from '../models/Outlet';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const createOutlet = async (req: Request, res: Response) => {
  try {
    const { password, ...customerData } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newOutlet: Outlet = new OutletModel({
      ...customerData,
      password: hashedPassword,
    });
    await newOutlet.save();
    res.status(201).json(newOutlet);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create customer', });
  }
};




export const getOutlets = async (req: Request, res: Response) => {
  try {
    const outlets = await OutletModel.find();
    res.status(200).json(outlets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve outlets' });
  }
};

export const getOutletById = async (req: Request, res: Response) => {
  try {
    // Find an outlet by its ID
    const outlet = await OutletModel.findById(req.params.id);

    if (!outlet) {
      // If no outlet is found, return a 404 error
      res.status(404).json({ error: 'Outlet not found' });
      return;
    }

    // Return the outlet as a JSON response
    res.status(200).json(outlet);
  } catch (error) {
    // Handle any errors that occur during retrieval
    res.status(500).json({ error: 'Failed to retrieve outlet' });
  }
};

// Update an outlet by ID
export const updateOutlet = async (req: Request, res: Response) => {
  try {
    // Update the outlet with the specified ID and new data
    const updatedOutlet = await OutletModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedOutlet) {
      // If no outlet is found, return a 404 error
      res.status(404).json({ error: 'Outlet not found' });
      return;
    }

    // Return the updated outlet as a JSON response
    res.status(200).json(updatedOutlet);
  } catch (error) {
    // Handle any errors that occur during the update
    res.status(400).json({ error: 'Failed to update outlet' });
  }
};

// Delete an outlet by ID
export const deleteOutlet = async (req: Request, res: Response) => {
  try {
    const deletedOutlet = await OutletModel.findByIdAndDelete(req.params.id);

    if (!deletedOutlet) {
      res.status(404).json({ error: 'Outlet not found' });
      return;
    }
    res.status(200).json({ message: 'Outlet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete outlet' });
  }
};


const JWT_SECRET = '3863c657-154c-4028-8df6-86373356a5cf-9135cbf0-562b-4230-bb18-b6dbac3fe3d9-ada5cf92-0e7c-49f0-85d0-55417fe2bd3c';

export const loginOutlet = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const outlet: Outlet | null = await OutletModel.findOne({ email });
    if (outlet && await bcrypt.compare(password, outlet.password)) {
      const token = jwt.sign({ id: outlet._id, role: 'outlet' }, JWT_SECRET, {
        expiresIn: '1h',
      });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to login customer' });
  }
};
