
import postCreature from "./postCreature";




const usePostCreature: (name: string, desc: string, hp: string, attack: string, defence: string, magic: string, image: string) => 
    Promise<{
    status: string;
    message: string
    }> = async(name, desc, hp, attack, defence, magic, image ) => {
        let trypost = {
            status: "",
            message: ""
        }
    
    const alreadyExists = false
    if(!alreadyExists) {
      //console.log("checks exists")
      //const postImage = await postCreatureImage(image, name)
      //console.log("post attempted")
       trypost = await postCreature(name, desc, hp, attack, defence, magic, image )
    } else {
        console.log("post failed")
       trypost = {status: "failed", message: "Item already exists in database"}
    }
    return trypost
}

export default usePostCreature;