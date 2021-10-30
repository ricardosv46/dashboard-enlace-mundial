import { useState } from 'react'

const UseForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm)

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setForm(initialForm)
  }

  return {
    form,
    handleInputChange,
    resetForm
  }
}

export default UseForm
