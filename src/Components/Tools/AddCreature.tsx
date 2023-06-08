
import React, { useState } from "react"
import classes from "./AddCreature.module.css"
import { FormEventHandler } from "react"
import { fileUpload } from "../../Models/interface"



/* Local Types */
type eventObject = React.FormEvent<HTMLInputElement>


const AddCreature = () => {



    const [postCreatureState, setPostCreatureState] = useState(
        {
        magic: "",
        attack: "",
        defence: "",
        desc: "",
        hp: "",
        id: "",
        imageURL: "",
        name: ""
        }
    )
    /* Validation */

    const [formIsValid, setFormIsValid] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(false)
    const [descIsValid, setDescIsValid] = useState(false)
    const [hpIsValid, setHpIsValid] = useState(false)
    const [attackIsValid, setAttackIsValid] = useState(false)
    const [defenceIsValid, setDefenceIsValid] = useState(false)
    const [magicIsValid, setMagicIsValid] = useState(false)
    const [fileToUpload, setFileToUpload] = useState<fileUpload>()

    /* Submit handler */

    const handleSubmit = () => {}

    /* state handlers */

    const handleName = (e: eventObject ) => {
        const regex = /^[A-Za-z]+$/
        const nameToValidate = e.currentTarget.value.trim()
        setPostCreatureState({...postCreatureState, name:nameToValidate })
        if(nameToValidate.length <= 16 && nameToValidate.length > 0
            && nameToValidate.match(regex) 
              ) {
                setNameIsValid(true)
                
              } else {
                setNameIsValid(false)
              }
    }
    const handleDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const descToValidate = e.currentTarget.value
        setPostCreatureState({...postCreatureState, desc: descToValidate})
        if(descToValidate.trim().length > 0) {
          setDescIsValid(true)
          console.log("Set to true fired")
        } else {
          console.log("set to false")
          setDescIsValid(false)
        }
        
    }
    const handleHp = (e: eventObject ) => {
        setPostCreatureState({...postCreatureState, hp: e.currentTarget.value})
        const hpToValidate = Number(e.currentTarget.value)
        const regex = /^[0-9]/
        if(hpToValidate > 0 && e.currentTarget.value.match(regex)) {
            setHpIsValid(true)
        } else {
            setHpIsValid(false)
        }

    }
    const handleAttack = (e: eventObject ) => {
        setPostCreatureState({...postCreatureState, attack: e.currentTarget.value})
        const attackToValidate = Number(e.currentTarget.value)
        if(attackToValidate > 0 && attackToValidate <= 100) {
            setAttackIsValid(true)
        } else {
            setAttackIsValid(false)
        }

    }
    const handleDefence = (e: eventObject ) => {
        setPostCreatureState({...postCreatureState, defence: e.currentTarget.value})
        const defenceToValidate = Number(e.currentTarget.value)
        if(defenceToValidate > 0 && defenceToValidate <= 100) {
            setDefenceIsValid(true)
        } else {
            setDefenceIsValid(false)
        }

    }
    const handleMagic= (e: eventObject ) => {
        setPostCreatureState({...postCreatureState, magic: e.currentTarget.value})
        const magicToValidate = Number(e.currentTarget.value)
        if(magicToValidate > 0 && magicToValidate <= 100) {
            setMagicIsValid(true)
        } else {
            setMagicIsValid(false)
        }

    }
    const handleFileToUpload = (e: React.ChangeEvent<HTMLInputElement> ) => {
      const file = e.currentTarget.files![0]
        setFileToUpload({name: postCreatureState.name, file: file})
    }

    return (
        <>
        <h3 className={classes.heading}>Add a new creature to the database...</h3>
        <form onSubmit={handleSubmit}>
             {/* Name */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="name">Name</label>
                <input className={classes.input} type="text" onChange={handleName}></input>
                 {postCreatureState.name && !nameIsValid &&
                <p className={classes.invalid}>Name should 16 chars or less, and contain only letters</p>}
            </section>
            {/* Image Upload */}
            <section>
                <label>Upload an Image</label>
                <input onChange={handleFileToUpload} type="file"></input>
                <p>An image is required</p>
            </section>
            {/* description */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="desc">Description</label>
                <textarea onChange={handleDesc} className={classes.inputDesc}></textarea>
                {postCreatureState.desc && !descIsValid && 
                <p className={classes.invalid}>Description should not be empty</p>}
            </section>
            {/* Hit points */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="hp">Hit Points</label>
                <input onChange={handleHp} type="number" id="hp"></input>
                {postCreatureState.hp && !hpIsValid && 
                <p className={classes.invalid}>Enter a whole number 1 or greater </p>}
            </section>
            {/* attack */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="attack">Attack</label>
                <input onChange={handleAttack} type="number" id="attack"></input>
                {postCreatureState.attack && !attackIsValid && 
                <p className={classes.invalid}>Enter number between 1-100 </p>}
            </section>
            {/* defence */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="defence">Defence</label>
                <input onChange={handleDefence} type="number" id="defence"></input>
                {postCreatureState.defence && !defenceIsValid && 
                <p className={classes.invalid}>Enter number between 1-100 </p>}
            </section>
            {/* magic */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="magic">Magic</label>
                <input onChange={handleMagic} type="number" id="magic"></input>
                {postCreatureState.magic && !magicIsValid && 
                <p className={classes.invalid}>Enter number between 1-100 </p>}
            </section>
            
            <button type="submit">Submit</button>
        </form>
            </>
    )
     
}

export default AddCreature