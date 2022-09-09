import React, { useState, useEffect } from 'react'
import decor from '../../assets/assets/decoration.svg'
import { Link } from 'react-router-dom';
import supabase from '../supabase/supabaseClient';
function Register() {

  const [formValue, setFormValues] = useState({
    email: '',
    password:'',
    passwordRetype: '',
  });
  const [error, setError] = useState({})
  const [submit, setSubmit] = useState(false)

  const handleChange = (e) => { 
    const {name, value} = e.target;
    setFormValues({...formValue, [name]:value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(formValue));
    setSubmit(true)
    let { email, password } = await supabase.auth.signUp({
  email: `${formValue.email}`,
  password: `${formValue.password}`
})


  }

  useEffect(()=> {
    
    if(Object.keys(error).length === 0 && submit){
      console.log(error)
      
    }
  }, [error])


  const validate = (values) => {
    const error = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if(!values.email) {
      error.email = 'Email jest wymagany';
    } else if(!regex.test(values.email)){
      error.email = 'Email jest nieprawidłowy'
    }
    if(!values.password) {
      error.password = 'Hasło jest wymagane';
    } else if(values.password < 6){
      error.password = 'Hasło powinno zawierać minimum 6 znaków'
    }
    if(!values.passwordRetype) {
      error.passwordRetype = 'Powtórz hasło';
    } else if(values.password != values.passwordRetype){
      error.passwordRetype = 'hasła nie są takie same'
    }
    return error;
  }

  return (
   <div className="register">
    <div className="registerTitle">
      Załóż konto
    </div>
    <img src={decor} alt="" />
    {Object.keys(error).length === 0 && submit ? (<div>Konto założone</div>) : (<div>bład</div>) }
    
    <form action="" className='registerForm' onSubmit={handleSubmit}>
      <div className="regContainer">
      <label htmlFor="" className='regContent'>Email
      <input type="text" 
      name='email'
      value={formValue.email}
      onChange={handleChange}
      /></label>
      <span className='regError'>{error.email}</span>
      <label htmlFor="" className='regContent'>Hasło
      <input type="password" className='' 
      name='password'
      value={formValue.password}
      onChange={handleChange}
      /></label>
      <span className='regError'>{error.password}</span>
      <label htmlFor="" className='regContent'>Powtórz hasło
      <input type="password" className='' 
       name='passwordRetype'
       value={formValue.passwordRetype}
       onChange={handleChange}
      /></label>
      <span className='regError'>{error.passwordRetype}</span>
      </div>
      <div className="regBtns">
        <button className='regBtn' type='button'>
          <Link to='/login' className='log'> Zaloguj się </Link>
          </button>
        <button className='regBtn btnRegister' type="submit">Załóż konto</button>
      </div>
    </form>
   </div>
  )
}


export default Register