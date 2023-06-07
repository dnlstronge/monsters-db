import React, { useState, useEffect } from 'react'
import { creatureCardProps } from '../../../Models/types'
import classes from "./CreatureCard.module.css"
import { getImages } from '../../MonsterCard/Images/getImages'

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
            let imageURL = await getImages(`gs://monsterdb-30be5.appspot.com/monsters/${props.imageURL}.png`)
            if(imageURL.length > 0) {
            setImageURLstate(imageURL)
            } else {
                // set error
            }
            
        } catch (error) {
            
            return //console.log(error)
        }
       
    }
    findImage()
    
        // /* condtional style */
        // const imageLoad = loadImage ? classes.imageLoading : classes.image

  return (
    <div className={classes.container}>
        <h5>{props.name}</h5>
        {!imageError && !imagePending &&
        <img className={classes.image}src={imageURLstate} alt={props.name}/>}
        <p>{props.desc}</p>
    </div>
  )
}

export default CreatureCard