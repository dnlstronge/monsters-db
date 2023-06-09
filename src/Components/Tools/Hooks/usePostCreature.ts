import { creaturePostDBparams } from "../../../Models/types"
import { database } from "../../../firebase/config"
import { fileUpload } from "../../../Models/interface";
import { onValue, ref, set } from "firebase/database";
import usePostCreatureImage from "./postCreatureImage";
import { useState } from "react";
import postCreature from "./postCreature";
import checkDup from "./checkdup";
import postCreatureImage from "./postCreatureImage";


const usePostCreature: (name: string, desc: string, hp: string, attack: string, defence: string, magic: string, image: File) => 
    Promise<{
    status: string;
    message: string
    }> = async(name, desc, hp, attack, defence, magic, image ) => {
        let trypost = {
            status: "",
            message: ""
        }
    
    const alreadyExists = await checkDup(name)
    if(!alreadyExists) {
      const postImage = await postCreatureImage(image, name)
       trypost = await postCreature(name, desc, hp, attack, defence, magic, postImage )
    } else {
       trypost = {status: "failed", message: "Item already exists in database"}
    }
    return trypost
}

export default usePostCreature;