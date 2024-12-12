import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface ICourt extends Document {
  userId: ObjectId;
  name: string;
  address: string;
  description: string;
  price: string;
}

const CourtSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.model<ICourt>('Court', CourtSchema);
