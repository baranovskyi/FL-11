let userEmail = prompt('enter your email');
let six = 6;
let five = 5;
if (userEmail === null) {
    alert('Canceled.')    
} else {
    if (userEmail.length < six) {
        alert("I don't know any emails having name length less than 6 symbols")
    } else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
        let userPass = prompt('enter your password');
        if (userPass === null || userPass === '') {
            alert('Canceled.')
        } else {
            if (userEmail === 'user@gmail.com') {
                if (userPass === 'UserPass') {
                    let changePass = confirm('Do you want to change your password?');
                    if (changePass === false) {
                        alert('You have failed the change.')
                    } else {
                        let oldPass = prompt('Write the old password');
                        if (oldPass === userPass) {
                            let newPass = prompt('Enter you new password');
                            if (newPass.length < five) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let confirmPass = prompt('Enter the password again');
                                if (confirmPass !== newPass) {
                                    alert('You wrote the wrong password.');
                                } else {
                                    alert('You have successfully changed your password.');
                                }
                            }
                        } else { 
                            alert('Wrong password');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
             if (userEmail === 'admin@gmail.com') {
                if (userPass === 'AdminPass') {
                    let changePass = confirm('Do you want to change your password?');
                    if (changePass === false) {
                        alert('You have failed the change.')
                    } else {
                        let oldPass = prompt('Write the old password');
                        if (oldPass === userPass) {
                            let newPass = prompt('Enter you new password');
                            if (newPass.length < five) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let confirmPass = prompt('Enter the password again');
                                if (confirmPass !== newPass) {
                                    alert('You wrote the wrong password.');
                                } else {
                                    alert('You have successfully changed your password.');
                                }
                            }
                        } else { 
                            alert('Wrong password');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            } 
        }
    } else {
        alert('I don’t know you');
    }
}

