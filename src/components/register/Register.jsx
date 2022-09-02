import React from 'react'
import decor from '../../assets/assets/decoration.svg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
function Register() {
  
    


  return (
    <div className="login">
      <div className="title">Załóż konto</div>
      <img src={decor} alt="" />
      <form className='login_form'>
          <label className='forms'>Email
          <input type="email" />
          </label>
          <label className='forms'>Hasło
          <input type="email" />
          </label>
          <label className='forms'>Powtórz hasło
          <input type="email" />
          </label>
          
      </form>
      <div className="bottom_btns">
        
        <div className='bottom_btn'>Zaloguj się</div>
        <Link to='/register'>
          <div className='bottom_btn logme'>Załóż konto</div>
        </Link>
    </div>
    </div>
  )
}


export default Register