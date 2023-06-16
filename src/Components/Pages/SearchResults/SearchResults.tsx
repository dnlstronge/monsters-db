import React, { useEffect, useState } from 'react'
import classes from "./SearchResults.module.css"
import Search from '../../Search/Search'


export type dataSetProp = {
  status: string
  error: boolean
  isPending: boolean
  message: string
  data: null | any[]
}

const SearchResults = () => {

  const [searchValid, setSearchIsValid] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [dataSet, setDataSet] = useState<dataSetProp>({
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
          const filter = Object.entries(data)
          console.log(filter)
          setDataSet({
            status: response.status.toString(),
            error: false,
            isPending: false,
            message: "Request was successful",
            data: filter
          })
          
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
    <section id="results">
      {dataSet.data?.map((item) => {
        
        return (
          <div key={item[1].id} className={classes.result}>
            <button className={classes.resultBtn} key={item[0]}>{item[0]}</button>
            <img src={item[1].imageURL} className={classes.imageThumb} alt={item[0]}/>
          </div>
          
        )
      })}
    </section>
      

      

  </div>
)
}

export default SearchResults