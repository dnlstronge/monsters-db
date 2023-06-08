import { ref } from "firebase/storage";
import { projectStorage } from "../../../firebase/config";
import { fileUpload } from "../../../Models/interface";
import { uploadBytes } from "firebase/storage";

const usePostCreatureImage: any = (file: fileUpload, name: string) => {
    const fileData = file.data!
    const storageRef = ref(projectStorage, `/monsters/${name}`)
    uploadBytes(storageRef, fileData).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
}
export default usePostCreatureImage;