import React, {useState} from 'react'

function WhatYouDonate({ formValues, setFormValues }) {
  
  return (
    <div className="WhatYouDonateContainer">
      
      <form className='radioInputs'>

        <label className='radioLabel'>
          <input type='radio' name='radio1' 
          value={formValues.items} 
          onChange={()=> setFormValues({...formValues, items:'ubrania, które nadają się do ponownego użycia'})}>
          </input>
          <span></span>
          ubrania, które nadają się do ponownego użycia
        </label>

        <label className='radioLabel'>
          <input type='radio' name='radio1'
          value={formValues.items} 
          onChange={()=> setFormValues({...formValues, items:'ubrania, do wyrzucenia'})}
          ></input>
          <span></span>
          ubrania, do wyrzucenia
          
        </label>

        <label className='radioLabel'>
          <input type='radio' name='radio1'
          value={formValues.items} 
          onChange={()=> setFormValues({...formValues, items:'zabawki'})}
          ></input>
          <span></span>
          zabawki
        </label>

        <label className='radioLabel'>
          <input type='radio' name='radio1'
          value={formValues.items} 
          onChange={()=> setFormValues({...formValues, items:'książki'})}
          ></input>
          książki
          <span></span>
        </label>

        <label className='radioLabel'>
          <input type='radio' name='radio1'
          value={formValues.items} 
          onChange={()=> setFormValues({...formValues, items:'Inne'})}
          ></input>
          <span></span>
          Inne
        </label>

      </form>
    </div>
    )
}

export default WhatYouDonate

