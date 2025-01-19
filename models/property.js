import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "propertyName is required"],
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: Number,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feets: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      Phone: Number,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      defualt: false,
    },
  },
  {
    timestamps: true,
  }
);
const Property = models.Property || model("Property", PropertySchema);
export default Property;
