import { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        company: '',
        email: '',
        link: '',
        km: '',
        message: ''
    })
const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
 }

 const form = useRef()

 const handleSubmit = e => {
     e.preventDefault()
     setErrors(validate(values))
     setIsSubmitting(isSubmitting)  //varför blir den inte true??

     if(isSubmitting) {
        console.log('Sending mail')
        emailjs.sendForm('gina', 'template_gina', form.current, 'user_vToDYJs5h0fUT5PHPf5sd')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
   e.target.reset()
 }

const [checked, setIsChecked] = useState(false)

const handleCheckBox = () => {
  setIsChecked(!checked)
}

const Checkbox = ({ value, onChange }) => {
  return (
  <div>
    <input 
    type='checkbox'
    checked={value}
    onChange={onChange} />
  </div>
  )
}

 useEffect(() => {
     if(Object.keys(errors).length === 0 && isSubmitting) {
         callback()
     }
 }, [errors])

 return { handleChange, values, handleSubmit, form, errors, handleCheckBox, Checkbox, checked }
}

export default useForm