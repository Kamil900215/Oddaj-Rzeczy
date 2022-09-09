import React, {useState} from 'react'
import WhatYouDonate from './components/whatyoudonate/WhatYouDonate'
import HowManyBags from './components/howmanybags/HowManyBags'
import Localization from './components/localization/Localization'
import PickUpAdress from './components/pickupadress/PickUpAdress'
import DonateSummary from './components/donatesummary/DonateSummary'
import supabase from "../../supabase/supabaseClient";
function MultiPageForm() {
    const formTitles = [
        'Zaznacz co chcesz oddać:',
        'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:',
        'Lokalizacja:',
        'Podaj adres oraz termin odbioru rzecz przez kuriera',
        'Podsumowanie Twojej darowizny',
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const [formValues, setFormValues] = useState({
        items: '',
        howManyBags: '',
        localization: '',
        whoToDonate: '',
        optionalOrgs: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        dateOfPickup: '',
        timeOfPickup:'',
        comments: '',
    })
   


    const sendForm = async (e) =>{
        e.preventDefault();
        const { data, error } = await supabase
        .from('zloszeniaa')
        .insert([
          { 
            items: `${formValues.items}`,
            howManyBags: `${formValues.howManyBags}`,
            localization: `${formValues.localization}`,
            whoToDonate: `${formValues.whoToDonate}`,
            optionalOrgs: `${formValues.optionalOrgs}`,
            street: `${formValues.street}`,
            city: `${formValues.city}`,
            postCode: `${formValues.postCode}`,
            phone: `${formValues.phone}`,
            dateOfPickup: `${formValues.dateOfPickup}`,
            timeOfPickup: `${formValues.timeOfPickup}`,
            comments: `${formValues.comments}`
         },
        ])
    }
    console.log(formValues)
    
  const displayPage = () => {
    if(currentPage === 0){
        return <WhatYouDonate formValues={formValues} setFormValues={setFormValues}/>
    } else if (currentPage === 1){
        return <HowManyBags formValues={formValues} setFormValues={setFormValues}/>
    } else if (currentPage === 2){
        return <Localization formValues={formValues} setFormValues={setFormValues}/>
    } else if (currentPage === 3){
        return <PickUpAdress formValues={formValues} setFormValues={setFormValues}/>
    } else {
        return <DonateSummary formValues={formValues} setFormValues={setFormValues}/>
    }
  }


  return (
    <div className='form'>
        
        <div className="progress">Krok: {currentPage + 1}/{formTitles.length} </div>
        <div className="formContainer">
            <div className="header">
                <h1>{formTitles[currentPage]}</h1>
            </div>
            <div className="body">
                {displayPage()}
            </div>
            <div className="footer">
                <button style={{display: currentPage === 0 ? 'none' : ''}}
                className='donateBtn'
                onClick={() => {setCurrentPage((current) => current - 1)}}>Wstecz</button>
                {currentPage === formTitles.length - 1 ? (<button className='donateBtn' 
                onClick={sendForm}
                >Wyślij</button>) : (
                <button className='donateBtn'
                onClick={() => {setCurrentPage((current) => current + 1)}}>Dalej</button> 
                )} 
            </div>
        </div>
    </div>
  )
}

export default MultiPageForm