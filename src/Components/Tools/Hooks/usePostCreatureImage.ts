import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { projectStorage } from "../../../firebase/config";
import { fileUpload } from "../../../Models/interface";
import { uploadBytes } from "firebase/storage";
import { useState } from "react";


const usePostCreatureImage = (file: File, name: string) => {
   
 
    // progress

   
    const storageRef = ref(projectStorage, `/monsters/${file.name}`)
    uploadBytes(storageRef, file)
    
    
};

export default usePostCreatureImage;