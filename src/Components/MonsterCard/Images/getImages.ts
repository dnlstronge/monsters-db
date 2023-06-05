import useImage from "../../Hooks/useImage"


/* Config :

gs://monsterdb-30be5.appspot.com[xxxxxxxx/xxxxx]

*/
export const getImages = async(url: string) => {
    const images = []
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getImage = await useImage(url)
    images.push(getImage)
    console.log(getImage)
    return getImage;
}


