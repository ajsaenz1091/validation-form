import React, { useState } from 'react'
import './FormInput.css'

function FormInput({label, errorMessage, onChange, id, ...inputProps}) {
  
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='formInput'>
      <label htmlFor={label}>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
