import mongoose, { Schema, Document } from 'mongoose';

interface ICourt extends Document {
  name: string;
  available: boolean;
  sportBase: mongoose.Types.ObjectId;
}

const CourtSchema: Schema = new Schema({
  name: { type: String, required: true },
  available: { type: Boolean, required: true },
  sportBase: { type: Schema.Types.ObjectId, ref: 'SportBase', required: true },
});

export default mongoose.model<ICourt>('Court', CourtSchema);
