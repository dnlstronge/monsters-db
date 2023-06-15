import React, { useEffect, useState } from 'react'
import classes from "./SearchResults.module.css"
import Search from '../../Search/Search'


export type dataSetProp = {
  status: string
  error: boolean
  isPending: boolean
  message: string
  data: null | any
}

const SearchResults = () => {

  const [searchValid, setSearchIsValid] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [dataSet, setDataSet] = useState({
    status: "",
    error: false,
    isPending: false,
    message: "",
    data: null
  })
  const [list, setList] = useState<string[]>()
  /* State for card */
  const [dataForCard, setDataForCard] = useState<any>()
  const [cardActive, settCardActive] = useState(false)



  /* render card helper */ 
  const renderCard: (name: string )=> void = (name: string) => {
    if(dataSet.data !== null ) {
      setDataForCard(dataSet.data[name])
      settCardActive(true)
    }
    
  }

  /*fetch helper */


  useEffect(() => {
    /* fetch  */
   
    const fetchData = async () => {
      
      const char = searchTerm.charAt(0).toUpperCase()
      try {
        setDataSet({...dataSet, error: false, isPending: true})
        const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${char}/.json`)
        if (response!.ok )  {
          const data = await response.json()
          setDataSet({
            status: response.status.toString(),
            error: false,
            isPending: false,
            message: "Request was successful",
            data: data
          })
          const names = Object.keys(data)
          const mapped = names.map((item) => item.toLocaleLowerCase())
          setList(mapped)
          //console.log(data)
        } else {
          setDataSet({
            status: response.status.toString(),
            error: true,
            isPending: false,
            message: `${response.status} = request was not successful`,
            data: null
          })
        
        }
      } catch (error) {
        setDataSet({
          status: "Request Failure",
          error: true,
          isPending: false,
          message: `${error}`,
          data: null
        })
      }

    }

    if (searchTerm.trim().length > 0 && searchValid) {
    fetchData()
    
  } else {
   // setDataSet({status: "request failed" , error: true, isPending: false, message: "No value entered", data: null })
    return
  }
  setSearchIsValid(false)
  
}, [dataSet, searchTerm, searchValid])
return (

  <div className={classes.container}>
    <Search setTerm={setSearchTerm} activeSearch={setSearchIsValid} error={setDataSet} />
    {dataSet.isPending && !dataSet.error &&
    <div className={classes.loading}>loading...</div>}
    {dataSet.error && 
    <div className={classes.error}>{dataSet.message}</div>}
    <section>
      {cardActive &&
      <div>{dataForCard.name}</div>
      }
    </section>
      {list?.includes(searchTerm.toLowerCase()) ? 
        // do this 
        <div>
          <button>{searchTerm}</button>
        </div>
      :
        // do that
        list?.map((item) => {
          return (
            <div>
              <button onClick={() => {renderCard(item)}}>{item}</button>
            </div>
          )
        })
      }

      

    {/* {
    
    list?.map((item) => {
      return (
        <button key={item}>{item}</button>
      )
    })} */}
  </div>
)
}

export default SearchResults