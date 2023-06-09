
import React, { useState, useEffect } from "react"
import classes from "./AddCreature.module.css"
import { FormEventHandler } from "react"
import { fileUpload } from "../../Models/interface"
import usePostCreature from "./Hooks/usePostCreature"



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
    const [fileToUpload, setFileToUpload] = useState<File>()
    const [uploadValid, setUploadValid] = useState(false)
    const [uploadError, setUploadError] = useState({
        isError: false,
        message: ""
    })
    const [postResponse, setPostResponse] = useState <any>()

    /* Submit handler */

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formIsValid) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
           const serverResponse = await usePostCreature(
                postCreatureState.name,
                postCreatureState.desc,
                postCreatureState.hp,
                postCreatureState.attack,
                postCreatureState.defence,
                postCreatureState.magic,
                fileToUpload!)
               
            // issue post to db
            // issue post file to storage
            setPostResponse(serverResponse)
            
        }
    }
    useEffect(() => {console.log(postResponse)}, [postResponse])

    /* state handlers */

    const handleName = (e: eventObject) => {
        const regex = /^[A-Za-z]+$/
        const nameToValidate = e.currentTarget.value.trim()
        setPostCreatureState({ ...postCreatureState, name: nameToValidate })
        if (nameToValidate.length <= 16 && nameToValidate.length > 0
            && nameToValidate.match(regex)
        ) {
            setNameIsValid(true)

        } else {
            setNameIsValid(false)
        }
    }
    const handleDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const descToValidate = e.currentTarget.value
        setPostCreatureState({ ...postCreatureState, desc: descToValidate })
        if (descToValidate.trim().length > 0) {
            setDescIsValid(true)
        } else {
            setDescIsValid(false)
        }

    }
    const handleHp = (e: eventObject) => {
        setPostCreatureState({ ...postCreatureState, hp: e.currentTarget.value })
        const hpToValidate = Number(e.currentTarget.value)
        const regex = /^[0-9]/
        if (hpToValidate > 0 && e.currentTarget.value.match(regex)) {
            setHpIsValid(true)
        } else {
            setHpIsValid(false)
        }

    }
    const handleAttack = (e: eventObject) => {
        setPostCreatureState({ ...postCreatureState, attack: e.currentTarget.value })
        const attackToValidate = Number(e.currentTarget.value)
        if (attackToValidate > 0 && attackToValidate <= 100) {
            setAttackIsValid(true)
        } else {
            setAttackIsValid(false)
        }

    }
    const handleDefence = (e: eventObject) => {
        setPostCreatureState({ ...postCreatureState, defence: e.currentTarget.value })
        const defenceToValidate = Number(e.currentTarget.value)
        if (defenceToValidate > 0 && defenceToValidate <= 100) {
            setDefenceIsValid(true)
        } else {
            setDefenceIsValid(false)
        }

    }
    const handleMagic = (e: eventObject) => {
        setPostCreatureState({ ...postCreatureState, magic: e.currentTarget.value })
        const magicToValidate = Number(e.currentTarget.value)
        if (magicToValidate > 0 && magicToValidate <= 100) {
            setMagicIsValid(true)
        } else {
            setMagicIsValid(false)
        }

    }
    const handleFileToUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.currentTarget.files![0]

        try {
            setFileToUpload(file)
            setUploadValid(true)

        } catch (error) {
            setUploadValid(false)
            setUploadError({ isError: true, message: `${error}` })


        }


    }



    /* Form Validator side effect */

    useEffect(() => {
        if (
            nameIsValid &&
            descIsValid &&
            defenceIsValid &&
            attackIsValid &&
            magicIsValid &&
            hpIsValid &&
            uploadValid
        ) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [nameIsValid, descIsValid, defenceIsValid, attackIsValid, magicIsValid, hpIsValid, uploadValid])

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
                <section className={classes.formSection}>
                    <label className={classes.label}>Upload an Image</label>
                    <input className={classes.input} onChange={handleFileToUpload} type="file"></input>
                    {uploadValid && postCreatureState.name.length === 0 &&
                        <p className={classes.invalid}>An image and name is required</p>}
                    {uploadError.isError &&
                        <p className={classes.error}>{uploadError.message}</p>}
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