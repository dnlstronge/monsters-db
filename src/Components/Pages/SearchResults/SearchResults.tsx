import React, { useEffect, useState } from 'react'
import classes from "./SearchResults.module.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import Search from '../../Search/Search'

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
            message: "Request was unsuccessful",
            data: null
          })
        }
      } catch (error) {
        setDataSet({
          status: "Request Failure",
          error: false,
          isPending: false,
          message: "Request was unsuccessful",
          data: null
        })
      }

    }

    if (searchTerm.length > 0 && searchValid) {
    fetchData()
  } else {
   return
  }
  setSearchIsValid(false)
  console.log(dataSet)
}, [dataSet, searchTerm, searchValid])
return (

  <>
    <Search setTerm={setSearchTerm} activeSearch={setSearchIsValid} />
  </>

)
}

export default SearchResults