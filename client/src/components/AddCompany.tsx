import React, { useState } from 'react'

type Props = {
  saveCompany: (e: React.FormEvent, formData: ICompany | any) => void
}

const AddCompany: React.FC<Props> = ({ saveCompany }) => {
  const [formData, setFormData] = useState<ICompany | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
      <form className='Form' onSubmit={(e) => saveCompany(e, formData)}>
        <div>
          <div>
            <label htmlFor='name'>Name</label>
            <input onChange={handleForm} type='text' id='name' />
          </div>
          <div>
            <label htmlFor='gstNo'>GST No</label>
            <input onChange={handleForm} type='text' id='gstNo' />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input onChange={handleForm} type='text' id='address' />
          </div>
        </div>
        <button disabled={formData === undefined ? true: false} >Add Company</button>
      </form>
  )
}

export default AddCompany
