import React, {useState, useEffect} from 'react'
import decor from '../../assets/assets/Decoration.svg'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import supabase from "../supabase/supabaseClient";
function Home() {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() =>{
    const user =  supabase.auth.user()
    if(user){
     setIsLogged(true);
    }
  }, [])

  return (
    <div className="container">
      <div className="homeImg"></div>
      <div className="homeRight">
        <div className="siteTitle">Zacznij pomagać! 
        <p> Oddaj niechciane rzeczy w zaufane ręce</p>
        <div className='decoration'><img src={decor} alt="" /></div>
        <div className="senditems">
          {isLogged ? (<>
          <Link to='/oddaj-rzeczy'><button className='btn'>ODDAJ RZECZY</button></Link>
          <Link to='/login'><button className='btn'>ZORGANIZUJ ZBIÓRKĘ</button></Link>
          </>) : (
            <>
          <Link to='/login'><button className='btn'>ODDAJ RZECZY</button></Link>
          <Link to='/login'><button className='btn'>ZORGANIZUJ ZBIÓRKĘ</button></Link>
          </>)}
        </div>
        </div>
      </div>
    </div>
   
    
  )
}



export default Home