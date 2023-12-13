// at least 8 chars long 
// has at least one letter
// has at least one number


// has at least one UPPERCASE letter
// has at least one symbol
// has at least one lowercase letter
// is not longer than 20 chars

const checkPassword = (password) => {

   
    const isNotValid = !/[a-z]/g.test(password) || !/[0-9]/g.test(password) || password.length <= 8 || !/[A-Z]/g.test(password) || /!@#$%^&*/g.test(password) || password.length >= 20;
    
    return isNotValid? false : true;
    };
    
    
    module.exports = checkPassword;