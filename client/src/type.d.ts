interface ICompany {
  _id: string
  name: string
  gstNo?: string
  address?: string
  createdAt?: string
  updatedAt?: string
}

interface CompanyProps {
  company: ICompany
}

type ApiDataType = {
  name: string
  gstNo?: string
  address?: string
  companys: ICompany[]
  company?: ICompany
}