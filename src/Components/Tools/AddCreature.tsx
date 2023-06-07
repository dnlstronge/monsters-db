
import React, { useState } from "react"
import classes from "./AddCreature.module.css"
import { FormEventHandler } from "react"

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

    /* Submit handler */

    const handleSubmit = () => {}

    /* state handlers */

    const handleName = (e: React.FormEvent<HTMLInputElement> ) => {
        
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
    const handleDesc = (e: React.FormEvent<HTMLInputElement> ) => {
        const descToValidate = e.currentTarget.value.trim()
        setPostCreatureState({...postCreatureState, desc: descToValidate})
        if(descToValidate.length > 0) {
            setDescIsValid(true)
        } else {
          setDescIsValid(false)
        }
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
             {/* Name */}
            <section className={classes.formSection}>
                <label className={classes.label} htmlFor="name"></label>
                <input className={classes.input} type="text" onChange={handleName}></input>
                 {postCreatureState.name && !nameIsValid &&
                <p className={classes.nameInvalid}>Error - name should 16 chars or less, and contain only letters</p>}
            </section>
            {/* description */}
            <section className={classes.formSection}>
                <label className={classes.label}htmlFor="desc"></label>
                <input className={classes.inputDesc} type="text"></input>
                <p className={classes.nameInvalid}>Error - description should not be empty</p>
            </section>
            
            <label htmlFor="hp"></label>
            <label htmlFor="attack"></label>
            <label htmlFor="defence"></label>
            <button type="submit">Submit</button>
        </form>
            </>
    )
     
}

export default AddCreature