import React from 'react'
import { Link } from 'react-router-dom'
import decor from '../../assets/assets/decoration.svg'

function Login() {
  return (
    <div className="login">
      <div className="title">Zaloguj się</div>
      <img src={decor} alt="" />
      <form className='login_form'>
          <label className='forms'>Email
          <input type="email" />
          </label>
          <label className='forms'>Hasło
          <input type="password"/>
          </label>
      </form>
      <div className="bottom_btns">
        <Link to='/register'>
        <div className='bottom_btn'>Załóż konto</div>
        </Link>
        <Link to='/login'>
        <div className='bottom_btn logme'>Zaloguj się</div>
        </Link>
    </div>
    </div>
  )
}

export default Login