import { model, Model, models, Schema } from "mongoose";

interface DataSchemaTypes extends Document {
  id: number;
  title: string;
  price: number;
  description: string;
  category: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const DataSchema = new Schema<DataSchemaTypes>({
  id: { type: Number },
  title: { type: String },
  price: { type: Number },
  description: { type: String },
  category: { type: Number },
  image: { type: String },
  rating: {
    rate: { type: Number },
    count: { type: Number },
  },
});

const DataModel: Model<DataSchemaTypes> =
  models.zustandStoredDb ||
  model<DataSchemaTypes>("zustandStoredDb", DataSchema);

export default DataModel;
