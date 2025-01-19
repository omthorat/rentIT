import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "email already exits"],
      required: [true, "email is required"],
    },
    userName: {
      type: String,
      required: [true, "userName is required"],
    },
    image: {
      type: String,
    },
    bookmark: {
      type: Schema.Types.ObjectId,
      ref: "property",
    },
  },
  {
    timestamps: true,
  }
);
const User = models.User || model("User", UserSchema);
export default User;
