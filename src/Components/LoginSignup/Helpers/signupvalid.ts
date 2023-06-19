export const signupvalid = async(username: string, email: string, password:string, confirmPassword:string, ) => {
    let validationObject = {
        invalid: false,
        userNameError: "",
        emailError: "",
        passwordError: "",

    }
    let arrayFromData: string[] = []
    const P1 = password
    const P2 = confirmPassword
    console.log(confirmPassword)
    console.log(password)
    try {
       const checkUsername = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/usernames/.json`)
       const data = await checkUsername.json()
       console.log(data)
       arrayFromData = Object.keys(data)
       // create array from values

    if(arrayFromData.includes(username)) {
        validationObject = {...validationObject, invalid: true, userNameError: "Username already exists" }
    }
    if(username.trim().length === 0) {
        validationObject = {...validationObject, invalid: true, userNameError: "username cannot be empty"}
    }
    if(email.trim().length === 0) {
        validationObject = {...validationObject, invalid: true, emailError: "Please enter a valid email address" }
    }
    if(P1 !== P2) {
        validationObject = {...validationObject, invalid: true, passwordError: "password does not match"}
    }

    } catch (error) {
        console.log(error)
    }
    return validationObject;
    
}