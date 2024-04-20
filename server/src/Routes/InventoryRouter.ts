import express from 'express';
import InventoryController from '../controllers/InventoryController';

const InventoryRouter = express.Router();

InventoryRouter.get('/', InventoryController.readAllInventoryItems);
InventoryRouter.get('/:outletId', InventoryController.readInventoryItemsByOutletId);
InventoryRouter.get('/:id', InventoryController.readInventoryItemById);
InventoryRouter.post('/', InventoryController.createInventoryItem);
InventoryRouter.put('/:id', InventoryController.updateInventoryItem);
InventoryRouter.delete('/:id', InventoryController.deleteInventoryItem);




export default InventoryRouter;
