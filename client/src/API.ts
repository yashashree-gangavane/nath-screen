import axios, {AxiosResponse} from "axios"

const baseUrl: string = "http://localhost:4000"

export const getCompany = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    return await axios.get(
        baseUrl + "/company"
    )
  } catch (error:any) {
    throw new Error(error)
  }
}

export const addCompany = async (
    formData: ICompany
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const company: Omit<ICompany, "_id"> = {
      name: formData.name,
      gstNo: formData.gstNo,
      address: formData.address
    }
    return await axios.post(
        baseUrl + "/add-company",
        company
    )
  } catch (error:any) {
    throw new Error(error)
  }
}

export const updateCompany = async (
    company: ICompany
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const companyUpdate: Pick<ICompany, "address"> = {
      address: "Aurangabad",
    }
    return await axios.put(
        `${baseUrl}/edit-company/${company._id}`,
        companyUpdate
    )
  } catch (error:any) {
    throw new Error(error)
  }
}

export const deleteCompany = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    return await axios.delete(
        `${baseUrl}/delete-company/${_id}`
    )
  } catch (error:any) {
    throw new Error(error)
  }
}