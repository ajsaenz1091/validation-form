import { useState } from 'react';
import './App.css';
import FormInput from './components/form-input/FormInput.component';

function App() {
  const [values, setValues] = useState({
    username:"",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address! Ex: example@gmail.com",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "Password should be 8-10 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: "^(?=.[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA_Z0-9!@#$%^&*]{8,10}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password does not match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]


  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map(input => {
            return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          })}
          <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
