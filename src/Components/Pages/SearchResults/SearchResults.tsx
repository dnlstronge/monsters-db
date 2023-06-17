import React, { useEffect, useState } from 'react'
import classes from "./SearchResults.module.css"
import Search from '../../Search/Search'
import Card from './Card'
import { cardProps } from '../../../Models/types'

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
  const [dataForCard, setDataForCard] = useState<cardProps>({
    name: "",
    desc: "",
    attack: "",
    defence: "",
    hp: "",
    magic: "",
    image: ""
  })
  const [cardActive, settCardActive] = useState(false)



  /* render card helper */
  const renderCard: (
    name: string, desc: string,
    attack: string, defence: string, magic: string,
    hp: string, image: string) => void
    = (name: string, desc: string, attack: string, defence: string, magic: string, hp: string, image: string) => {
      settCardActive(true)
      setDataForCard({
        name, desc, attack, defence, magic, hp, image
      })
    }

  /*fetch helper */


  useEffect(() => {
    /* fetch  */

    const fetchData = async () => {

      const char = searchTerm.charAt(0).toUpperCase()
      try {
        setDataSet({ ...dataSet, error: false, isPending: true })
        const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${char}/.json`)
        if (response!.ok) {
          const data = await response.json()
          // filter based on match also

          const filter: any = Object.entries(data)
          console.log(filter)
          
          if(searchTerm.length > 0) {
            //  let regex = `${searchTerm}`
             let validMatch = filter.filter((item: any) => { return item[0] === searchTerm})
             console.log(filter)
             console.log("made it to if")
             console.log(`Match valid: ${validMatch}`)
             setDataSet({
              status: response.status.toString(),
              error: false,
              isPending: false,
              message: "Request was successful",
              data: validMatch
            })
          } else {
            setDataSet({
              status: response.status.toString(),
              error: false,
              isPending: false,
              message: "Request was successful",
              data: filter
            })
          }
          

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
      <section id="expandresult">
        {cardActive && dataForCard.name.length > 0 &&
        <Card 
          name={dataForCard.name} desc={dataForCard.desc}
          attack={dataForCard.attack} defence={dataForCard.defence}
          magic={dataForCard.magic} hp={dataForCard.hp} image={dataForCard.image}/>}
      </section>
      <section id="results" className={classes.resultsSection}>
        {dataSet.data?.map((item) => {

          return (
            <div onClick={() => {
              renderCard(
                item[1].name, item[1].desc, item[1].attack, item[1].defence, item[1].magic, item[1].hp, item[1].imageURL
              )
            }} key={item[1].id} className={classes.result}>
              <div className={classes.resultBtn} key={item[0]}>{item[0]}</div>
              <img src={item[1].imageURL} className={classes.imageThumb} alt={item[0]} />
            </div>

          )
        })}
      </section>
    </div>
  )
}

export default SearchResults