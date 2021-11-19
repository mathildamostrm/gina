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
      <label hmtlFor='name' className='form-label'>Name</label>
      <input 
        type='text'
        id='name'
        placeholder='Enter your name'
        name='name'
        value={values.name}
        onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlFor='company' className='form-label'>Company</label>
      <input 
        id='company'
        type='text'
        placeholder='Enter your company name'
        name='company'
        value={values.compnay}
        onChange={handleChange} />
        {errors.company && <p>{errors.company}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlFor='email' className='form-label'>Email</label>
      <input 
        type='email' 
        id='email'
        placeholder='Enter your email'
        name='email'
        value={values.email}
        onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlFor='link' className='form-label'>Link</label>
      <input 
        type='text'
        id='link'
        placeholder='Link to your website'
        name='link'
        value={values.link} 
        onChange={handleChange}/>
        {errors.link && <p>{errors.link}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlFor='km' className='form-label'>Kilometer</label>
      <input 
        type='text' 
        id='km'
        placeholder='Enter the kilometer you want to sponsor'
        name='km'
        value={values.km}
        onChange={handleChange} />
        {errors.km && <p>{errors.km}</p>}
    </div>

    <div className='form-inputs'>
      <label hmtlFor='message' className='form-label'>Message/Comment</label>
      <textarea 
        id='message'
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

