import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
// Define the Outlet interface extending the Document interface
export interface Outlet extends Document {
  outletName: string;
  location: string;
  email: string;
  password: string;
  phoneNumber: string;
  imagepath: string;
}

// Define the OutletSchema schema
const OutletSchema: Schema = new Schema({
  outletName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  imagepath: {
    type: String,
    required: true,
    trim: true,
  },
});


// Define and export the Outlet model using the schema
const OutletModel = mongoose.model<Outlet>('Outlet', OutletSchema);

export default OutletModel;
