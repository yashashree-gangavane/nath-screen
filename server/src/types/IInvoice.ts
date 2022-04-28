import { Document } from "mongoose"

export interface IInvoice extends Document {
  name: string
  description: string
  status: boolean
}