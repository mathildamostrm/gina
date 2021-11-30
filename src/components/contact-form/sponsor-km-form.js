import React from 'react'
import useForm from './use-form'
import validate from './validate-info'
import './styles/form.css'

function SponsorKmForm ({ submitForm }) {
  const { handleChange, values, handleSubmit, form, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <div className='form-content-right'>
    <form ref={form} onSubmit={handleSubmit} className='form'>
    <h1>CONTACT ME</h1>
    <div className='form-inputs'>
      <label className='form-label'>NAME</label>
       <input 
        type='text'
        className='form-input'
        placeholder='Enter your name'
        name='name'
        value={values.name}
        onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
    </div>

    <div className='form-inputs'>
      <label className='form-label'>COPMANY</label>
       <input 
        className='form-input'
        type='text'
        placeholder='Enter your company name'
        name='company'
        value={values.compnay}
        onChange={handleChange} />
        {errors.company && <p>{errors.company}</p>}
    </div>

    <div className='form-inputs'>
      <label className='form-label'>EMAIL</label>
       <input 
        type='email'
        className='form-input' 
        placeholder='Enter your email'
        name='email'
        value={values.email}
        onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
    </div>

    <div className='form-inputs'>
      <label className='form-label'>LINK</label>
       <input 
        type='text'
        className='form-input'
        placeholder='Link to your website'
        name='link'
        value={values.link} 
        onChange={handleChange}/>
        {errors.link && <p>{errors.link}</p>}
    </div>

    <div className='form-inputs'>
      <label className='form-label'>KILOMETER</label>
       <input 
        type='text'
        className='form-input' 
        placeholder='Enter the kilometer you wish to sponsor'
        name='km'
        value={values.km}
        onChange={handleChange} />
        {errors.km && <p>{errors.km}</p>}
    </div>

    <div className='form-inputs'>
      <label className='form-label'>Do you have a question or want to leave a comment?</label>
       <textarea 
        className='form-input'
        placeholder='Write here'
        name='message'
        value={values.message}
        onChange={handleChange} />
    </div>

    <div className='form-inputs'>
      <label className='form-label'>
       <div className='terms' onClick={()=> window.open('/terms-and-conditions', '_blank')}><u>ACCEPT TERMS & CONDITIONS</u></div>
       <input 
        type='checkbox'
        onChange={handleChange} />
      </label>
    </div>

     <button className='form-input-btn' type='submit'>SEND</button>
     </form>
    </div>
  )
}

export default SponsorKmForm

