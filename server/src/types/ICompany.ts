import { Document } from "mongoose"

export interface ICompany extends Document {
  name: string
  gstNo: string
  address: string
}