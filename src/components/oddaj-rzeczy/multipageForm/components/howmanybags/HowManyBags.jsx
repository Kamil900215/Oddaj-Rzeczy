import React from 'react'

function HowManyBags({ formValues, setFormValues }) {
  return (
    <div className='howManyBagsContainer'>Liczba 60l worków: 

      <select style={{backgroundColor: 'transparent'}} className='bagsDropdown'  
      value={formValues.howManyBags}
      onChange={(e)=> setFormValues({...formValues, howManyBags: e.target.value})}
      >
        <option value='n/a'>Wybierz</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  )
}

export default HowManyBags