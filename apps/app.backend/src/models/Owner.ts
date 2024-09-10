import mongoose, { Schema, Document } from 'mongoose';

interface IOwner extends Document {
  name: string;
  email: string;
  phone: string;
}

const OwnerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true }
});

export default mongoose.model<IOwner>('Owner', OwnerSchema);
