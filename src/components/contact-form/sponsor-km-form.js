import React from 'react'
import useForm from './use-form'
import validate from './validate-info'
import './form.css'

function SponsorKmForm ({ submitForm }) {
  const { handleChange, values, handleSubmit, form, errors } = useForm(validate, submitForm)

  return (
    <div className='form-content-right'>
    <form ref={form} onSubmit={handleSubmit} className='form'>
    <h1>CONTACT ME</h1>
    <div className='form-inputs'>
      <label hmtlfor='name' className='form-label'>NAME</label>
       <input 
        type='text'
        className='form-input'
        id='name'
        placeholder='Enter your name'
        name='name'
        value={values.name}
        onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlfor='company' className='form-label'>COPMANY</label>
       <input 
        id='company'
        className='form-input'
        type='text'
        placeholder='Enter your company name'
        name='company'
        value={values.compnay}
        onChange={handleChange} />
        {errors.company && <p>{errors.company}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlfor='email' className='form-label'>EMAIL</label>
       <input 
        type='email'
        className='form-input' 
        id='email'
        placeholder='Enter your email'
        name='email'
        value={values.email}
        onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlfor='link' className='form-label'>LINK</label>
       <input 
        type='text'
        className='form-input'
        id='link'
        placeholder='Link to your website'
        name='link'
        value={values.link} 
        onChange={handleChange}/>
        {errors.link && <p>{errors.link}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlfor='km' className='form-label'>KILOMETER</label>
       <input 
        type='text'
        className='form-input' 
        id='km'
        placeholder='Enter the kilometer you want to sponsor'
        name='km'
        value={values.km}
        onChange={handleChange} />
        {errors.km && <p>{errors.km}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlfor='message' className='form-label'>MESSAGE</label>
       <textarea 
        id='message'
        className='form-input'
        placeholder='Want to add a message/comment?'
        name='message'
        value={values.message}
        onChange={handleChange} />
    </div>

     <button className='form-input-btn' type='submit'>SEND</button>
     </form>
    </div>
  )
}

export default SponsorKmForm

