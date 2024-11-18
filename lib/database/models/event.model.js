const mongoose = require("mongoose");
const { Schema, SchemaTypes, model, models } = mongoose;

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDate: { type: Date, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: Number },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: SchemaTypes.ObjectId, ref: "Category" },
  organizer: { type: SchemaTypes.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
