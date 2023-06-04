import React, { useState, useEffect } from 'react'
import classes from "./MonsterCard.module.css"
import useImage from '../Hooks/useImage'

type monsterProps = {
    name: string,
    imageURL: string
}

const MonsterCard: React.FC<monsterProps> = (props) => {
 
   

  return (
    <div className={classes.container}>
        <p>{props.name}</p>
        <img src={props.imageURL} alt={props.name}/>

    </div>
  )
}

export default MonsterCard