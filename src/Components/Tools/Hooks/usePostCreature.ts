import { creaturePostDBparams } from "../../../Models/types"
import { database } from "../../../firebase/config"
import { fileUpload } from "../../../Models/interface";
import { onValue, ref, set } from "firebase/database";
import usePostCreatureImage from "./usePostCreatureImage";


const usePostCreature: (name: string, desc: string, hp: string, attack: string, defence: string, magic: string, image: File) => void= (name, desc, hp, attack, defence, magic, image ) => {
    const getCharAT = name.charAt(0).toUpperCase()
    //const imageFile = image
    const dataToPost = {
        attack, defence, desc, hp, id: `${name.toLowerCase()}ID`, imageURL: `${name.toLowerCase()}`, magic, name,  
    }
    /* POST new data to DB  */
    const postData = () => {
        set(ref(database, `/monsters/names/${name}`), {
            name
          });
        set(ref(database, `/monsters/${getCharAT}/${name}`), {
            ...dataToPost
          });
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePostCreatureImage(image, name)
        // upload image code
        // returns a response object?
    }
   
    /* Fetch array to check matches */
    const dataToCheck = async() => {
    const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/names.json`)
    if(response!.ok) {
    const data = await response.json()
    //console.log(data)
    const usedNames= Object.keys(data)
    console.log(usedNames)
    if(!usedNames.includes(name.toLowerCase())) {
        // post request valid send ===>
        console.log("Theres no match")
        postData()
    } else {
        console.log("There is a match")
        return
    }
    }
    
}
    dataToCheck()
    
   
}

export default usePostCreature;