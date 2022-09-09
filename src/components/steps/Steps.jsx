import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import decor from "../../assets/assets/Decoration.svg";
import supabase from "../supabase/supabaseClient";
const Steps = () => {

    const [isLogged, setIsLogged] = useState(false);

  useEffect(() =>{
    const user =  supabase.auth.user()
    if(user){
     setIsLogged(true);
    }
  }, [])

  return (
    <div className='steps'>
        Wystarczą 4 proste kroki
        <div className="decor"><img src={decor} alt="" /></div>

                <div className="stepsBoxes">
                
                <div className="stepBox">
                    <div className="stepTop"></div>
                    <div className="stepMid">Wybierz rzeczy</div>
                    <hr size="1" width="30px" color=""></hr>
                    <div className="stepBot">ubrania, zabawki, sprzęt i inne</div>
                </div> 

                <div className="stepBox">
                    <div className="stepTop"></div>
                    <div className="stepMid">Spakuj je</div>
                    <hr size="1" width="30px" color=""></hr>
                    <div className="stepBot">skorzystaj z worków na śmieci</div>
                </div> 

                <div className="stepBox">
                    <div className="stepTop"></div>
                    <div className="stepMid">Zdecyduj komu chcesz pomóc</div>
                    <hr size="1" width="30px" color=""></hr>
                    <div className="stepBot">wybierz zaufane miejsce</div>
                </div> 

                <div className="stepBox">
                    <div className="stepTop"></div>
                    <div className="stepMid">Zamów kuriera</div>
                    <hr size="1" width="30px" color=""></hr>
                    <div className="stepBot">kurier przyjedzie w dogodnym terminie</div>
                </div> 
            </div>
            {isLogged ? (<Link to='/oddaj-rzeczy' className='btn'>ODDAJ RZECZY</Link>) : (
            <Link to='/login' className='btn'>
            ODDAJ RZECZY
            </Link>
            )}
        </div>
  )
}

export default Steps