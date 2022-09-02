import React, { useState, useEffect } from 'react'
import decor from '../../assets/assets/Decoration.svg'
import fcb from '../../assets/assets/Facebook.svg'
import ig from '../../assets/assets/Instagram.svg'


function Contact() {

   const initialValues = {
    name: '',
    email: '',
    message: ''
   }
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({})
   const [isSubmit, setIsSubmit] = useState(false)

   const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
   }
   
   const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    fetch ('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formValues),  
    })
    .then(response => {
        if (response.ok) {
          setIsSubmit(true);
          return response.json();
        } else {
          setIsSubmit(false);
          throw Error('error');
        }
      }
    )
    .then(data => {
       
        console.log(data);
    }).catch (error => console.log('error'))
    }
    
   useEffect( () => {
    
    if(Object.keys(formErrors).length === 0 && isSubmit){
        
    }
   }, [formErrors])

// errors
   const validate = (values) => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!values.name) {
        errors.name = 'Imię jest wymagane'
    }
    //  else if() {
    // include
    // }

    if(!values.email) {
        errors.email = 'email jest wymagany'
    } else if (!regex.test(values.email)) {
        errors.email = 'email nie jest poprawny'
    }

    if(!values.message) {
        errors.message = 'Wpisz wiadomość'
    } 
    if (values.message.length < 120) {
        errors.message = 'Wiadomość musi zawierać minimum 120 znaków'
    }
    return errors;
   }

  return (
    <div className='contactContainer' id='contact'>
        
        <div className='contactImg'></div>

        <div className="contactRight">
            <div className="text">
                Skontaktuj się z nami
                <div className="decor"><img src={decor} alt="" />
            </div>
            
        </div>
        {Object.keys(formErrors).length === 0 && isSubmit ? ( <div className='submitSuccess'>Wiadomość wysłana! <br/> Wkrótce się skontaktujemy</div>) : ('')}
        <div>
         
        
        <div className="contactForm">
            
            <form className='form' action="" onSubmit={handleSubmit}>

                <label className='nameLabel labels' htmlFor="">Wpisz swoje imię</label>
                <label className='emailLabel labels' htmlFor="">Podaj adres e-mail</label>

                <input 
                type="text" 
                name="name" 
                placeholder='Imię' 
                className='inputs name'
                value={formValues.name}
                onChange={handleChange}
                />
                <p className='nameError error'>{formErrors.name}</p>
                <input 
                type="text" 
                name="email"
                placeholder='Adres email' 
                className='inputs email' 
                value={formValues.email}
                onChange={handleChange}
                />
                <p className='emailError error'>{formErrors.email}</p>
                <label className='messageLabel labels' htmlFor="">Wpisz swoją wiadomość</label>

                <textarea name="message" 
                id="message" 
                cols="37" 
                rows="6" 
                maxLength="500" 
                className='textarea message ' 
                placeholder='Wpisz treść wiadomości' 
                value={formValues.message}
                onChange={handleChange}
                ></textarea>
                <p className='messageError error'>{formErrors.message}</p>
                <button className='submitContact'>Wyślij</button>
            </form>
            <a href="https://www.facebook.com/"><img src={fcb} alt="" className='fcbIcon'/></a>
            <a href="https://www.instagram.com/"><img src={ig} alt="" className='igIcon'/></a>
        </div>
        </div>
       
    </div>
   </div>
  )
}

export default Contact