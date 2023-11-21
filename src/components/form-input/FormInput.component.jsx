import React from 'react'
import './FormInput.css'

function FormInput({label, onChange, id, ...inputProps}) {
  return (
    <div className='formInput'>
      <label htmlFor={label}>{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  )
}

export default FormInput
