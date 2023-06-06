import React, { useState, useEffect } from 'react'
import { creatureCardProps } from '../../../Models/types'
import classes from "./CreatureCard.module.css"
import { getImages } from '../../MonsterCard/Images/getImages'

const CreatureCard: React.FC<creatureCardProps> = (props) => {

    // gs://monsterdb-30be5.appspot.com/monsters/agromole.png
    
    const [imageURLstate, setImageURLstate] = useState("")
   
    const findImage = async() => {
        
        try {
            let imageURL = await getImages(`gs://monsterdb-30be5.appspot.com/monsters/${props.imageURL}.png`)
            setImageURLstate(imageURL)
            // setLoadImage(false)
        } catch (error) {
            // setLoadImage(false)
            return //console.log(error)
        }
       
    }
    findImage()
    
        // /* condtional style */
        // const imageLoad = loadImage ? classes.imageLoading : classes.image

  return (
    <div className={classes.container}>
        <h5>{props.name}</h5>
        <img className={classes.image}src={imageURLstate} alt={props.name}/>
    </div>
  )
}

export default CreatureCard