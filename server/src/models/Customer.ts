import mongoose, { Schema, Document } from 'mongoose';

export interface Customer extends Document {
  username: string;
  email: string;
  password: string;
  create_at: string;
}

const CustomerSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

const CustomerModel = mongoose.model<Customer>('Customer', CustomerSchema);

export default CustomerModel;
