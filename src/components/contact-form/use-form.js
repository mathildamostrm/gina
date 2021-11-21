import { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        company: '',
        email: '',
        link: '',
        km: '',
        message: '',
    })
const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)
const [agree, setAgree] = useState(false)

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
     setAgree(!agree)
     setIsSubmitting(true)

     if(isSubmitting && setAgree) {
        emailjs.sendForm('gina', 'template_gina', form.current, 'user_vToDYJs5h0fUT5PHPf5sd')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
     }

   e.target.reset()
 }

 useEffect(() => {
     if(Object.keys(errors).length === 0 && isSubmitting) {
         callback()
     }
 }, [errors])

 return { handleChange, values, handleSubmit, form, errors }
}

export default useForm