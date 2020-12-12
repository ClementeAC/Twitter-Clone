const Validator = require('validator')

module.exports = function (data) {
    let errors = {}

    //Error deja email vacio
    if (Validator.isEmpty(data.email)){
        errors.email = 'Email is required'
    }

    //Error deja usuario vacio
    if (Validator.isEmpty(data.username)){
        errors.username = 'Username is required'
    }

    //Error deja contraseña vacia
    if (Validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }

    //Error deja la confirmación de contraseña vacia
    if (Validator.isEmpty(data.password2)){
        errors.password2 = 'Please confirm password'
    }

    //Error el campo email no es un email
    if (Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }
    
    //Error el usuario no tiene el tamaño que debe tener
    if (Validator.isLength(data.username, { min: 4, max: 30})) {
        errors.username = 'Username must be at least 4 characters long and no more than 30 characters'
    }

    //Error la contraseña no tiene el tamaño que debe tener
    if (Validator.isLength(data.password, { min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters long and no more than 30 characters'
    }

    if (Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords have to match'
    }

    return {
        errors,
        isValid: true
    }

}