import React from 'react'

function PickUpAdress({ formValues, setFormValues }) {
  return (
    <div className='pickUpAdressContainer'>
      <div className="leftContainer">
        <label htmlFor="">Ulica: </label>  
        <input type="text" value={formValues.street}
        onChange={(e)=> setFormValues({...formValues, street: e.target.value})}/>
        <label htmlFor="">Miasto: </label>
        <input type="text" value={formValues.city}
        onChange={(e)=> setFormValues({...formValues, city: e.target.value})}/>
        <label htmlFor="">Postcode:</label>
        <input type="text" 
        value={formValues.postCode}
        onChange={(e)=> setFormValues({...formValues, postCode: e.target.value})}/>
        <label htmlFor="">Numer telefonu:</label>
        <input type="text"  
        value={formValues.phone}
        onChange={(e)=> setFormValues({...formValues, phone: e.target.value})}
        />
    </div>
    <div className="rightContainer">
      <label htmlFor="" >Data: </label>
      <input type="date" 
      value={formValues.dateOfPickup}
      onChange={(e)=> setFormValues({...formValues, dateOfPickup: e.target.value})}
      />
      <label htmlFor="">Godzina</label>
      <input type="nuber" 
       value={formValues.timeOfPickup}
       onChange={(e)=> setFormValues({...formValues, timeOfPickup: e.target.value})}
        />
      <label htmlFor="">Uwagi dla kuriera</label>
      <textarea value={formValues.comments}
      onChange={(e)=> setFormValues({...formValues, comments: e.target.value})}></textarea>

    </div>
    </div>
  )
}

export default PickUpAdress