import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  isAdmin: boolean;

  courts: Array<ObjectId>;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  courts: { type: Array<ObjectId>, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
