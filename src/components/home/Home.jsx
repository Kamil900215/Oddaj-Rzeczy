import React from 'react'
import decor from '../../assets/assets/Decoration.svg'


function Home() {

  return (
  // popraw style usuń to co niepotrzebne
    <div className="container">
      <div className="homeImg"></div>
      <div className="homeRight">
        <div className="siteTitle">Zacznij pomagać! 
        <p> Oddaj niechciane rzeczy w zaufane ręce</p>
        <div className='decoration'><img src={decor} alt="" /></div>
        <div className="senditems">
          <button className='btn'>ODDAJ RZECZY</button>
          <button className='btn'>ZORGANIZUJ ZBIÓRKĘ</button>
        </div>
        </div>
      </div>
    </div>
   
    
  )
}



export default Home