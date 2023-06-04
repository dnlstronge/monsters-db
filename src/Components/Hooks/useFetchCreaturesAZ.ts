
const useFetchCreaturesAZ = async(term: string) => {
    try {
        const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${term}.json`)
        if(response!.ok) {
            const data = await response.json()
            return data;
        } else {
            const message = response.statusText
            throw new Error(`Ooops something went wrong ${message}`)
        }
    } catch (error) {
        const message = "Error - no results found"
        throw new Error(message)
        
    }
}

export { useFetchCreaturesAZ }