import { creaturePostDBparams } from "../../../Models/types"



const usePostCreature: (name: string, desc: string, hp: string, attack: string, defence: string, magic: string) => void= (name, desc, hp, attack, defence, magic ) => {

    const usedNames = []
    const dataToCheck = async() => {
    const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/names.json`)
    if(response!.ok) {
    const data = await response.json()
    console.log(data)
    }
}
    const getCharAT = name.charAt(0).toUpperCase()
    const postData = async() => {
        dataToCheck()
        
    }
    postData()
}

export default usePostCreature;