import React, { useEffect, useState } from 'react'
import CompanyItem from './components/CompanyItem'
import AddCompany from './components/AddCompany'
import { getCompany, addCompany, updateCompany, deleteCompany } from './API'

const App: React.FC = () => {
  const [companys, setCompanys] = useState<ICompany[]>([])

  useEffect(() => {
    fetchCompanys()
  }, [])

  const fetchCompanys = (): void => {
    getCompany()
    .then(({ data: { companys } }: ICompany[] | any) => setCompanys(companys))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveCompany = (e: React.FormEvent, formData: ICompany): void => {
    e.preventDefault()
    addCompany(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error('Error! Company not saved')
      }
      setCompanys(data.companys)
    })
    .catch((err) => console.log(err))
  }

  const handleUpdateCompany = (company: ICompany): void => {
    updateCompany(company)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('Error! Company not updated')
      }
      setCompanys(data.companys)
    })
    .catch((err) => console.log(err))
  }

  const handleDeleteCompany = (_id: string): void => {
    deleteCompany(_id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error('Error! Company not deleted')
      }
      setCompanys(data.companys)
    })
    .catch((err) => console.log(err))
  }

  return (
      <main className='App'>
        <h1>My Companys</h1>
        <AddCompany saveCompany={handleSaveCompany} />
        {companys.map((company: ICompany) => (
            <CompanyItem
                key={company._id}
                updateCompany={handleUpdateCompany}
                deleteCompany={handleDeleteCompany}
                company={company}
            />
        ))}
      </main>
  )
}

export default App
