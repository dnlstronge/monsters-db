import React, { useState, useEffect } from 'react'
import { creatureCardProps } from '../../../Models/types'
import classes from "./CreatureCard.module.css"
import StatBar from './StatBar'

const CreatureCard: React.FC<creatureCardProps> = (props) => {

    // gs://monsterdb-30be5.appspot.com/monsters/agromole.png

  return (
    <>
    
    <div className={classes.container}>
        <h5 className={classes.heading}>{props.name}</h5>
        <img className={classes.image} src={props.imageURL} alt={props.name}></img>
        <section className={classes.statbar}>
            <StatBar attack={props.attack} defence={props.defence} hp={props.hp} magic={props.magic}/>
        </section>
        <p>{props.desc}</p>
        
    </div>
    
    </>
  )
}

export default CreatureCard