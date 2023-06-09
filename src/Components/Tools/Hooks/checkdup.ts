const checkDup = async(name: string) => {
   
    const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/names.json`)
    if(response!.ok) {
    const data = await response.json()
    const usedNames = Object.keys(data)
   return usedNames.includes(name.toLowerCase())
    
} else {
    throw new Error(`Error - ${response.status} - server could not be reached`)
}
}
export default checkDup;