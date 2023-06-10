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
      console.log("checks exists")
      const postImage = await postCreatureImage(image, name)
      console.log("post attempted")
       trypost = await postCreature(name, desc, hp, attack, defence, magic, postImage )
    } else {
        console.log("post failed")
       trypost = {status: "failed", message: "Item already exists in database"}
    }
    return trypost
}

export default usePostCreature;