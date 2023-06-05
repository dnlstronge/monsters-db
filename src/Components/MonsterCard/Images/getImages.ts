import useImage from "../../Hooks/useImage"

export const getImages = async() => {
    const images = []
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getImage = await useImage(`gs://monsterdb-30be5.appspot.com/monsters/MonsterTest.png`)
    images.push(getImage)
    console.log(getImage)
    return images;
}


