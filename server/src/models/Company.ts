import { ICompany } from "../types/ICompany"
import { model, Schema } from "mongoose"

const companySchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },

      gstNumber: {
        type: String,
        required: false,
      },

      address: {
        type: String,
        required: false,
      },
    },
    { timestamps: true }
)

export default model<ICompany>("Company", companySchema)