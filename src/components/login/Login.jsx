import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import decor from '../../assets/assets/decoration.svg';
import supabase from "../supabase/supabaseClient";



function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
  email: '',
  password: ''
});
const [errors, setErrors] = useState({});
const [isSubmited, setIsSubmited] = useState(false);



useEffect((e) =>{
  const user =  supabase.auth.user()
  console.log(user)
  if(user){
    
  }

}, [])


const handleChange = (e) => {
  const {name, value} = e.target;
  setFormValues({...formValues, [name]:value})
}



const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors(validate(formValues));
  setIsSubmited(true);
  let { user, error } = await supabase.auth.signIn({
    email: `${formValues.email}`,
    password: `${formValues.password}`,
  })
  console.log(user)
  navigate(`/ `); 
  location.reload();

}

useEffect((e)=>{
  if(Object.keys(errors).length === 0 && isSubmited){
   
  }
}, [errors])


const validate = (values) => {
  const error = {};
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(!values.email){
    error.email = 'Email jest wymagany';
  } else if(!regex.test(values.email)){
    error.email = 'Adres jest niepoprawny'
  }
  if(!values.password){
    error.password = 'Hasło jest wymagane';
  } else if(values.password.length < 6){
    error.password = 'Hasło musi zawierać 6 znaków';
  }
  return error;
}

  return (
    <div className="login">
      
      <div className="title">Zaloguj się</div>
      <img src={decor} alt="" />
      <form className='login_form' onSubmit={handleSubmit}>
        <div className="form_bacground">
          <label className='forms'>Email
          <input 
          type="email" 
          name='email'
          value={formValues.email}
          onChange={handleChange}
          />
          <p className='formError'>{errors.email}</p>
          </label>
          <label className='forms'>Hasło
          <input 
          type="password"
          name='password'
          value={formValues.password}
          onChange={handleChange}
          />
          <p className='formError'>{errors.password}</p>
          </label>
          </div>
          <div className="buttons">
            
              <button className='bottom_btn'>
                <Link to='/register' className='link'>
                Zarejestruj się</Link></button>
                
              <button className='bottom_btn logme' type="submit" >
                Zaloguj się
              </button>   
          </div>
      </form>    
    </div>
  )
}

export default Login