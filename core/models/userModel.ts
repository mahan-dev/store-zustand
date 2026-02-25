import { model, Model, models, Schema } from "mongoose";

interface ModelSchemaTypes {
  email: string;
  password: string;
  rePassword?: string;
  role: string;
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

  role: {
    type: String,
  },
});

const UserModel: Model<ModelSchemaTypes> =
  models.UserDb || model<ModelSchemaTypes>("UserDb", UserModelSchema);
export default UserModel;
