import "./style/App.css"
import LandingPage from './landingPage/LandingPage'
import Login from "./login/Login"
import Register from "./register/Register"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Link as Scroll} from 'react-scroll';
// import supabase from "./supabase/supabaseClient";

function App() {

  

  return (
    
      <Router>
        <nav className="navigation">
          <div className="account_items">
            <Link className="account_item" to='/login'> Zaloguj </Link>
            <Link className="account_item create" to='/register'> Załóż konto </Link>
          </div>
          <div className="nav_btns">
            <Link to='/'>
            <button className="nav_btn">Start</button>
            </Link>
            <Scroll to="stats" smooth={true} duration={500}>
            <button className="nav_btn">O co chodzi?</button>
            </Scroll>
            <Scroll to="aboutus" smooth={true} duration={500}>
            <button className="nav_btn">O nas</button>
            </Scroll>
            <Scroll to='help' smooth={true} duration={500}>
            <button className="nav_btn">Fundacja i organizacje</button>
            </Scroll>
            <Scroll to='contact' smooth={true} duration={500}>
            <button className="nav_btn">Kontakt</button>
            </Scroll>
          </div>
        </nav>
        
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
     </Router>
  )
}

export default App
