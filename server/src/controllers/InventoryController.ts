import InventoryModel from '../models/InventoryModel';
import { Request, Response } from 'express';
const InventoryController = {
  createInventoryItem: async (req: Request, res: Response) => {
    try {
      const itemData = req.body;
      const newItem = await InventoryModel.create(itemData);
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error creating inventory item:', error);
      res.status(500).json({ error: 'Failed to create inventory item' });
    }
  },
  readAllInventoryItems: async (req: Request, res: Response) => {
    try {
      const items = await InventoryModel.find();
      res.status(200).json(items);
    } catch (error) {
      console.error('Error reading inventory items:', error);
      res.status(500).json({ error: 'Failed to read inventory items' });
    }
  },

  // Read a single inventory item by ID
  readInventoryItemById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const item = await InventoryModel.findById(id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ error: 'Inventory item not found' });
      }
    } catch (error) {
      console.error('Error reading inventory item:', error);
      res.status(500).json({ error: 'Failed to read inventory item' });
    }
  },

  readInventoryItemsByOutletId: async (req: Request, res: Response) => {
    try {
      const { outletId } = req.params;
      const items = await InventoryModel.find({ outletId });

      if (items && items.length > 0) {
        res.status(200).json(items);
      } else {
        res.status(404).json({ error: 'No inventory items found for the specified outlet ID' });
      }
    } catch (error) {
      console.error('Error reading inventory items by outlet ID:', error);
      res.status(500).json({ error: 'Failed to read inventory items' });
    }
  },

  // Update an inventory item
  updateInventoryItem: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedItem = await InventoryModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (updatedItem) {
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ error: 'Inventory item not found' });
      }
    } catch (error) {
      console.error('Error updating inventory item:', error);
      res.status(500).json({ error: 'Failed to update inventory item' });
    }
  },

  // Delete an inventory item
  deleteInventoryItem: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedItem = await InventoryModel.findByIdAndDelete(id);
      if (deletedItem) {
        res.status(200).json({ message: 'Inventory item deleted' });
      } else {
        res.status(404).json({ error: 'Inventory item not found' });
      }
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      res.status(500).json({ error: 'Failed to delete inventory item' });
    }
  },
};

export default InventoryController;
