import React from 'react'
import decor from '../../assets/assets/decoration.svg';
import {Link} from 'react-router-dom'

function Logout() {
  return (
    <div className="login">
      
        <div className="title">Wylogowanie nastąpiło pomyślnie!</div>
        <img src={decor} alt="" />
        <Link className='goHome' to='/'>Strona główna</Link>
    </div>
  )
}

export default Logout