import React from 'react'
import cloth from '../../../../../assets/assets/Icon-1.svg'
import spiningArrows from '../../../../../assets/assets/Icon-4.svg'
function DonateSummary({ formValues, setFormValues }) {
  return (
    <div className='donateSummaryContainer'>
      <h2 className='donate'>Oddajesz:</h2>
        <div className='summary'>
          <img src={cloth} alt="" />{formValues.howManyBags} worki, {formValues.items}, {formValues.whoToDonate} </div>
        <div className="summaryLocalization">
          <img src={spiningArrows} alt="" />
          dla lokalizacji: {formValues.localization}
        </div>
        <div className="summaryAdress">
          <div className="pickUpAdress">
            Ulica {formValues.street}<br/>
            Miasto {formValues.city}<br/>
            Kod pocztowy {formValues.postCode}<br/>
            Numer telefonu {formValues.phone}<br/>
          </div>
          <div className="summaryPickUpDate">
            Data {formValues.dateOfPickup}<br/>
            Godzina {formValues.timeOfPickup}<br/>
            Uwagi dla kuriera {formValues.comments}
          </div>
        </div>
    </div>
    
  )
}

export default DonateSummary