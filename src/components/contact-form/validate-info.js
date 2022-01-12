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
} if (values.km < 0 || values.km >= 1130) {
    errors.km = 'Please choose a valid kilometer'
}

return errors

}