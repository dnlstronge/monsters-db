import React, { useState, useEffect } from 'react'
import classes from "./MonsterCard.module.css"
import useImage from '../Hooks/useImage'

type monsterProps = {
    name: string,
    imageURL: string
    description: string
}

const MonsterCard: React.FC<monsterProps> = (props) => {
 
   

  return (
    <div className={classes.container}>
        <h5 className={classes.heading}>{props.name}</h5>
        <section className={classes.imageanddesc}>
            <img className={classes.image} height="150px" width="150px" src={props.imageURL} alt={props.name}/>
            <aside className={classes.aside}>{props.description}</aside>
        </section>
       
    </div>
  )
}

export default MonsterCard