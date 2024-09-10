import mongoose, { Schema, Document } from 'mongoose';

interface ISportBase extends Document {
  name: string;
  address: string;
  openingHours: string;
  owner: mongoose.Types.ObjectId;
}

const SportBaseSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  openingHours: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }
});

export default mongoose.model<ISportBase>('SportBase', SportBaseSchema);
