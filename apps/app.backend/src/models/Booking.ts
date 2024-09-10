import mongoose, { Schema, Document } from 'mongoose';

interface IBooking extends Document {
  customer: mongoose.Types.ObjectId;
  court: mongoose.Types.ObjectId;
  startTime: Date;
  endTime: Date;
}

const BookingSchema: Schema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  court: {
    type: Schema.Types.ObjectId,
    ref: 'Court',
    required: true,
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

export default mongoose.model<IBooking>(
  'Booking',
  BookingSchema
);
