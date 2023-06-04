import { projectStorage } from "../../firebase/config"
import { ref, getDownloadURL } from "firebase/storage"

const useImage = async(url: string) => {
    const storageRef = ref(projectStorage, url)
    const imageDLurl = await getDownloadURL(storageRef)
    return imageDLurl
}

export default useImage;