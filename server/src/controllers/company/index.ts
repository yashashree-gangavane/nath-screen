import {Request, Response} from "express"
import {ICompany} from "../../types/ICompany"
import Company from "../../models/Company"

const getCompanys = async (req: Request, res: Response): Promise<void> => {
  try {
    const companys: ICompany[] = await Company.find()
    res.status(200).json({companys})
  } catch (error: any) {
    console.error(error.message)
    throw error
  }
}

const addCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ICompany, "name" | "gstNo" | "address">

    const company: ICompany = new Company({
      name: body.name,
      gstNo: body.gstNo,
      address: body.address,
    })

    const newCompany: ICompany = await company.save()
    const allCompanys: ICompany[] = await Company.find()

    res
    .status(201)
    .json({ message: "Company added", company: newCompany, companys: allCompanys })
  } catch (error) {
    throw error
  }
}

const updateCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateCompany: ICompany | null = await Company.findByIdAndUpdate(
        { _id: id },
        body
    )
    const allCompanys: ICompany[] = await Company.find()
    res.status(200).json({
      message: "Company updated",
      company: updateCompany,
      companys: allCompanys,
    })
  } catch (error) {
    throw error
  }
}

const deleteCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCompany: ICompany | null = await Company.findByIdAndRemove(
        req.params.id
    )
    const allCompanys: ICompany[] = await Company.find()
    res.status(200).json({
      message: "Company deleted",
      company: deletedCompany,
      companys: allCompanys,
    })
  } catch (error) {
    throw error
  }
}

export { getCompanys, addCompany, updateCompany, deleteCompany }