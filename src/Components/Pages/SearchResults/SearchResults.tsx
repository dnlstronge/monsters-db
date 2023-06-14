import React, { useEffect, useState } from 'react'
import classes from "./SearchResults.module.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import Search from '../../Search/Search'
import { isPending } from '@reduxjs/toolkit'

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

  /*fetch helper */


  useEffect(() => {
    /* fetch  */
   
    const fetchData = async () => {
      
      const char = searchTerm.charAt(0).toUpperCase()
      try {
        setDataSet({...dataSet, error: false, isPending: true})
        const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${char}/.json`)
        if (response!.ok) {
          const data = await response.json()
          setDataSet({
            status: response.status.toString(),
            error: false,
            isPending: false,
            message: "Request was successful",
            data: data
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
  console.log(dataSet)
}, [dataSet, searchTerm, searchValid])
return (

  <div className={classes.container}>
    <Search setTerm={setSearchTerm} activeSearch={setSearchIsValid} error={setDataSet} />
    {dataSet.isPending && !dataSet.error &&
    <div className={classes.loading}>loading...</div>}
    {dataSet.error && 
    <div className={classes.error}>{dataSet.message}</div>} 
  </div>
)
}

export default SearchResults