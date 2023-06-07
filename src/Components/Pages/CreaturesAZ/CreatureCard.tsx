import React, { useState, useEffect } from 'react'
import { creatureCardProps } from '../../../Models/types'
import classes from "./CreatureCard.module.css"
import { getImages } from '../../MonsterCard/Images/getImages'
import { isPending } from '@reduxjs/toolkit'

const CreatureCard: React.FC<creatureCardProps> = (props) => {

    // gs://monsterdb-30be5.appspot.com/monsters/agromole.png
    
    const [imageURLstate, setImageURLstate] = useState("")
    const [imageError, setImageError] = useState({
        showError: false,
        message: "No Image found..."
    })
    const [imagePending, setImagePending] = useState(false)
   
    const findImage = async() => {
       
        try {
            let imageURL = await getImages(`gs://monsterdb-30be5.appspot.com/onsters/${props.imageURL}.png`)
            if(imageURL.length > 0) {
          
            setImageURLstate(imageURL)
            } else {
              setImageError({showError: true, message: "No has been image uploaded"})
            }
            
        } catch (error) {
            setImageError({...imageError, showError: true})
            return 
        }
       
    }
    findImage()
  
        // /* condtional style */
        const imageLoad = imageURLstate !== "" ? classes.image : classes.imageHIDE

  return (
    <div className={classes.container}>
        <h5>{props.name}</h5>

        {/* Image Logic */}
       {imageURLstate === "" && !imageError.showError &&
        <p className={classes.pending}>loading image...</p>}
        {imageError.showError && 
        <p className={classes.error}>{imageError.message}</p>}
        {!imageError.showError && !imagePending &&
        <img className={imageLoad} src={imageURLstate} alt={props.name}/>}
        <p>{props.desc}</p>
    </div>
  )
}

export default CreatureCard