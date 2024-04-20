import mongoose, { Schema, Document } from 'mongoose';

export interface Inventory extends Document {
  itemName: string;
  outletId: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
  imagepath: string;
}

const InventorySchema: Schema = new Schema({
  itemName: { type: String, required: true },
  outletId: { type: Schema.Types.ObjectId, ref: 'Outlet', required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  imagepath: { type: String, required: true },
});

InventorySchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const InventoryModel = mongoose.model<Inventory>('Inventory', InventorySchema);

export default InventoryModel;
