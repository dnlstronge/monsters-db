export const checkAdmin = async() => {
    try {
       const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/adminKey/.json`)
       if (response!.ok ){
        const key = response.json()
        return {
            status: response.status,
            error: false,
            message: key
        }
       } else {
        return {
            status: response.status,
            error: true,
            message: `${response.status} - Key not found`
        }
       }
    } catch (error) {
       return {
        status: "unable to fetch key",
        error: true,
        message: error
       }
    }
}