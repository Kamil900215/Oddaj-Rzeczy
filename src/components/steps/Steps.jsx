import React from 'react'
import decor from "../../assets/assets/Decoration.svg";

const Steps = () => {
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
            <button className='btn'>ODDAJ RZECZY</button>
        </div>
  )
}

export default Steps