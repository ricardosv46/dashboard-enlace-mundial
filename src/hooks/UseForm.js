import { useState } from 'react'

const UseForm = (initialForm = {}, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  console.log(setLoading, setResponse, errors)
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleBlur = (e) => {
    handleInputChange(e)
    setErrors(validateForm(form))
  }
  const handleSubtmit = () => { }
  const resetForm = () => {
    setForm(initialForm)
  }

  return {
    form,
    errors,
    loading,
    response,
    handleSubtmit,
    handleBlur,
    handleInputChange,
    resetForm,
    setForm
  }
}

export default UseForm
