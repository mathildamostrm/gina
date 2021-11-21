export default function validateInfo(values) {
    let errors = {}

if(!values.name.trim()) {
    errors.name = 'Name required'
}

if(!values.company.trim()) {
    errors.company = 'Company name required'
}

if(!values.email) {
    errors.email = 'Email required'
} else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
}

if(!values.link.trim()) {
    errors.link = 'Link required'
}

if(!values.km.trim()) {
    errors.km = 'Please choose a kilometer'
} /*else if(!) {
    errors.km = 'Please choose a kilometer from 1 to 1130'
} */  // TODO: Fix valid km input

return errors

}