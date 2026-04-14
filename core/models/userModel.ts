import { model, Model, models, ObjectId, Schema, Types } from "mongoose";
import { ProductDetailTypes } from "@/types/products/types";

export interface ModelSchemaTypes {
  email: string;
  password: string;
  rePassword?: string;
  role: string;
  transactions: [ProductDetailTypes];
  _id: ObjectId;
  userId: object;
}

const UserModelSchema = new Schema<ModelSchemaTypes>({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  rePassword: {
    type: String,
    required: false,
  },
  transactions: {
    type: [Object],
  },

  role: {
    type: String,
  },
  userId: {
    type: Types.ObjectId,
    ref: "transactions",
  },
});

const UserModel: Model<ModelSchemaTypes> =
  models.UserDb || model<ModelSchemaTypes>("UserDb", UserModelSchema);
export default UserModel;
