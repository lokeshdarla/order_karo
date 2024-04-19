import express from 'express';
import { getOutlets, getOutletById, updateOutlet, deleteOutlet, createOutlet, loginOutlet } from '../controllers/OutletController';

const OutletRouter = express.Router();

OutletRouter.get('/', getOutlets);
OutletRouter.get('/:id', getOutletById);
OutletRouter.post('/', createOutlet);
OutletRouter.put('/:id', updateOutlet);
OutletRouter.delete('/:id', deleteOutlet);
OutletRouter.post('/login', loginOutlet);




export default OutletRouter;
