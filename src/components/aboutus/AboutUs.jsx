import React from 'react'
import decor from '../../assets/assets/Decoration.svg';
import aboutImg from '../../assets/assets/People.jpg';
import sign from '../../assets/assets/Signature.svg';
function AboutUs() {
  return (
    <div className='aboutus' id='aboutus'>
  
        <div className="aboutusText">
            <p className='aboutusTitle'>O nas</p>
            <div className='decor'><img src={decor} alt="" /></div>
            <p className='aboutusDesc'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <p className="signature"><img src={sign} alt="" /></p>
        </div>
        <div className="aboutusImg">
            <img src={aboutImg} alt="" />
        </div>
    </div>
  )
}

export default AboutUs