import mongoose, { Schema, Document } from 'mongoose';

interface ICustomer extends Document {
  firstName: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

const CustomerSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

export default mongoose.model<ICustomer>(
  'Customer',
  CustomerSchema
);
