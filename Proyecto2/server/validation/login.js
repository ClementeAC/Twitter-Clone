const Validator = require('validator')

module.exports = function (data) {
    let errors = {}

    //Error deja usuario vacio
    if (!Validator.isEmpty(data.username)){
        errors.username = 'Username field is required'
    }

    //Error deja contraseña vacia
    if (!Validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }



    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}