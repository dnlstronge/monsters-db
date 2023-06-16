import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { projectStorage } from "../../../firebase/config";
import { fileUpload } from "../../../Models/interface";
import { uploadBytes } from "firebase/storage";
import { useState } from "react";


const postCreatureImage = async (file: File, name: string) => {
   
 
    // progress

   
   
    const getImageUrl = async() => {
        const storageRef = ref(projectStorage, `/monsters/${file.name}`)
        uploadBytes(storageRef, file)
        const imageUrl =  await getDownloadURL(storageRef)
        return imageUrl;
    }
    const fetchURl = await getImageUrl() 
    return fetchURl;
    
};

export default postCreatureImage;