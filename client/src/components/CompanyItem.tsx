import React from "react"

type Props = CompanyProps & {
  updateCompany: (company: ICompany) => void
  deleteCompany: (_id: string) => void
}

const Company: React.FC<Props> = ({company, updateCompany, deleteCompany}) => {
  return (
      <div className="Card">
        <div className="Card--text">
          <h1>{company.name}</h1>
          <span>{company.gstNo}</span>
          <span>{company.address}</span>
        </div>
        <div className="Card--button">
          <button
              onClick={() => updateCompany(company)}
          >
            Complete
          </button>
          <button
              onClick={() => deleteCompany(company._id)}
              className="Card--button__delete"
          >
            Delete
          </button>
        </div>
      </div>
  )
}

export default Company