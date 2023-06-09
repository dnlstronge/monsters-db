import { creaturePostDBparams } from "../../../Models/types"
import { database } from "../../../firebase/config"
import { fileUpload } from "../../../Models/interface";
import { onValue, ref, set } from "firebase/database";
import usePostCreatureImage from "./usePostCreatureImage";
import { useState } from "react";
import postCreature from "./postCreature";
import checkDup from "./checkdup";


const usePostCreature: (name: string, desc: string, hp: string, attack: string, defence: string, magic: string, image: File) => 
    Promise<{
    status: string;
    message: string
    } | undefined> = async(name, desc, hp, attack, defence, magic, image ) => {
    const alreadyExists = await checkDup(name)
    if(!alreadyExists) {
        postCreature(name, desc, hp, attack, defence, magic, image )
    } else {
        return {
            status: "failed",
            message: "Entry already exists in Database"
        }
    }
    
}

export default usePostCreature;