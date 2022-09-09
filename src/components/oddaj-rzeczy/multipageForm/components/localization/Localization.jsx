import React from 'react'

function Localization({ formValues, setFormValues }) {
  return (
    <div>
      <select className='localizationDropdown'
      value={formValues.localization}
      onChange={(e)=> setFormValues({...formValues, localization: e.target.value})}>
        <option value="N/A"> - Wybierz - </option>
        <option>Poznań</option>
        <option>Warszawa</option>
        <option>Kraków</option>
        <option>Wrocław</option>
        <option>Katowice</option>
      </select>
      <div className="whoToHelp">
        <h1 className="whoToHelpTitle">Komu chcesz pomóc?</h1>
      <div className="inputsContainer">
        <label className='localInput'>
            <input name='radio2' type="radio"
            value={formValues.whoToDonate} 
            onChange={()=> setFormValues({...formValues, whoToDonate:'Dzieciom'})}
            />
            Dzieciom
          </label>
          <label className='localInput'>
            <input  name='radio2' type="radio"
             value={formValues.whoToDonate} 
             onChange={()=> setFormValues({...formValues, whoToDonate:'samotnym matkom'})}
            />
            samotnym matkom
          </label>
          <label className='localInput'>
            <input name='radio2' type="radio"
             value={formValues.whoToDonate} 
             onChange={()=> setFormValues({...formValues, whoToDonate:'bezdomnym'})}
            />
            bezdomnym
          </label>
          <label className='localInput'>
            <input name='radio2' type="radio"
             value={formValues.whoToDonate} 
             onChange={()=> setFormValues({...formValues, whoToDonate:'niepełnosprawnym'})}
            />
            niepełnosprawnym
          </label>
          <label className='localInput'>
            <input name='radio2' type="radio"
            value={formValues.whoToDonate} 
            onChange={()=> setFormValues({...formValues, whoToDonate:' osobom starszym'})}
            />
            osobom starszym
          </label>
        </div>
      </div>
      <div className="optionalFundName">
        <div className="optionalFundNameTitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
        <input type='text' value={formValues.optionalOrgs}
      onChange={(e)=> setFormValues({...formValues, optionalOrgs: e.target.value})}></input>
      </div>
    </div>
  )
}

export default Localization