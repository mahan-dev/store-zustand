import { model, Model, models, Schema } from "mongoose";
import { DataSchemaTypes } from "@/models/dataModel";

interface ModelSchemaTypes {
  email: string;
  password: string;
  rePassword?: string;
  role: string;
  transactions: [DataSchemaTypes];
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
});

const UserModel: Model<ModelSchemaTypes> =
  models.UserDb || model<ModelSchemaTypes>("UserDb", UserModelSchema);
export default UserModel;
