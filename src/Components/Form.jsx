import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import '../style/form.css'

const Form = ({close}) => {

  const initialForm = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    checkbox: false,
  };

  const [form, setForm]=useState(initialForm)

  const [errors, setErrors] = useState({});

   const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]: e.target.value
    });
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      setForm(initialForm);  
      setErrors({});          
    }
   }
  
   const validate = () =>{
    let newError={};

    if(!form.name){
      newError.name = "Name is required";
    }

    if (!form.email) {
      newError.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newError.email = "Enter valid email";
    }

    if(form.password.length<9){
      newError.password = "Min 9 Characters Required";
    }

    if(form.password!==form.confirmPassword){
      newError.confirmPassword = "Password Not Match !";
    }
    
    if(!form.checkbox){
      alert('You must accept the terms')
    }   

    return newError;
   };

  return (
    <div className='singup'>
      <div className="container">
        <div className='head'>
          <p>Create your account</p>
          <MdOutlineCancel className='MdOutlineCancel' onClick={close}/>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='name form'>
        <label>Full name</label>
        <input type='text' name="name" value={form.name} placeholder='Enter Your Name' onChange={handleChange}/>
        <small>{errors.name}</small>
        </div>
        <div className='email form'>
          <label>Email address</label>
          <input type='email'name="email" value={form.email} placeholder='name@email.com' onChange={handleChange}/>
          <small>{errors.email}</small>
        </div>
        <div className='first_pass form'>
          <label>Password</label>
          <input type='password' name="password" value={form.password} placeholder='Create a password' onChange={handleChange}/>
          <small>{errors.password}</small>
        </div>
        <div className='sec_pass form'>
          <label>Confirm password</label>
          <input type='password' name="confirmPassword" value={form.confirmPassword} placeholder='Repeat password' onChange={handleChange}/>
          <small>{errors.confirmPassword}</small>
        </div>
        <div className='check'>
          <input type='checkbox' name='checkbox' checked={form.checkbox} onChange={handleChange}/>
          <label>I agree to the terms and privacy</label>
        </div>
        <button type='submit' className='form_btn'>Sing Up</button>
      </form>
    </div>
    </div>
  )
}

export default Form