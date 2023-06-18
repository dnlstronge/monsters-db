/* helper function for fethcing username  */


const fetchUserName = async(uid: string) => {

    try {
        console.log("fetch fires")
        console.log(uid)
        const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`)
        if(response!.ok) {
         const username = await response.json()
         return {
             status: response.status,
             error: false,
             message: "success",
             data: username.username
         }
        } else {
           return {
             status: response.status,
             error: true,
             message: "No user data found",
             data: null
         }
        }
    } catch (error) {
        return {
            status: "Failed - no response from server",
            error: true,
            message: error,
            data: null
        }
    }
   
    
    } 
    
    export default fetchUserName;