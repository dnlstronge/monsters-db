import usePostCreatureImage from "./postCreatureImage";
import { onValue, ref, set } from "firebase/database";
import { database } from "../../../firebase/config";


const postCreature = async(name: string, desc: string, hp: string, attack: string, defence: string, magic: string, image: string ) => {
    const getCharAT = name.charAt(0).toUpperCase()
    //sets image and returns DL url
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    const dataToPost = {
        attack, defence, desc, hp, id: `${name.toLowerCase()}ID`, imageURL: image, magic, name,  
    }
    try {
         /** sets duplicate list */
            const postList = async() => {
                await set(ref(database, `/monsters/names/${name}`), {
                    name
                });
            
                /*Sets actual data */
                await set(ref(database, `/monsters/${getCharAT}/${name}`), {
                    ...dataToPost
                })
                return {
                    status: "success",
                    message: "Upload Successful"
                }
            }
            postList() 
        
        } catch(error) {
            return { status: "failed",
                    message: `${error}`
     }
    }
    return {status: "success", message: "request sent"}
}

export default postCreature