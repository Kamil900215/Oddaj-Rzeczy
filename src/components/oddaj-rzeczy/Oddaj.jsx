import React from 'react'
import decor from '../../assets/assets/decoration.svg'
import Contact from '../contact/Contact'
import MultiPageForm from './multipageForm/MultiPageForm'

function Oddaj() {
  return (
    <div className='stuffContainer'>
        <div className="topContainer">
    <div className="leftSide"></div>
    <div className="rightSide">
        <div className="title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</div>
        <div className="decor"><img src={decor} alt="" /></div>
        <div className="subTitle">Wystarczą 4 proste kroki:</div>
        <div className="squares">
            <div className="square">   
                <span className="number">1</span>
                <span className="descr">Wybierz rzeczy</span>    
            </div>
            <div className="square">   
                <span className="number">2</span>
                <span className="descr">Spakuj je w worki</span>    
            </div>
            <div className="square">   
                <span className="number">3</span>
                <span className="descr">Wybierz fundację</span>    
            </div>
            <div className="square">   
                <span className="number">4</span>
                <span className="descr">Zamów kuriera</span>    
            </div>
        </div>
    </div>
    </div>
    <div className='pageWarn'>
        <h1 className='waningTitle'>Ważne!</h1>
        <p className='waningP'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
    </div>
    <MultiPageForm />
    <Contact />
    </div>
    
  )
}

export default Oddaj