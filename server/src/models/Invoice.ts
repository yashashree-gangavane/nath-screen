import { IInvoice } from "../types/IInvoice"
import { model, Schema } from "mongoose"

const invoiceSchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      status: {
        type: Boolean,
        required: true,
      },
    },
    { timestamps: true }
)

export default model<IInvoice>("Todo", invoiceSchema)