
import React, { useState, useEffect } from "react"
import classes from "./AddCreature.module.css"
import usePostCreature from "./Hooks/usePostCreature"
import PostSuccess from "../UI/PostSuccess"
import PostFailure from "../UI/PostFailure"


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
    const [submitClick, setSubmitClick] = useState(false)
    const [postResponse, setPostResponse] = useState({status: "", message: ""})

    /* Submit handler */

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitClick(true)
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
            console.log(serverResponse)
            setTimeout(() => {
                setPostResponse({status: "", message: ""})
            }, 2000)
            
        }
    }
   // useEffect(() => {console.log(postResponse)}, [postResponse])

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

    const handleReset = () => {
        setPostCreatureState({
            magic: "",
            attack: "",
            defence: "",
            desc: "",
            hp: "",
            id: "",
            imageURL: "",
            name: ""
        })
        setAttackIsValid(false)
        setDefenceIsValid(false)
        setDescIsValid(false)
        setFormIsValid(false)
        setHpIsValid(false)
        setMagicIsValid(false)
        setNameIsValid(false)
        setSubmitClick(false)
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
        {/* Post success and failure messages */}
            {postResponse.status === "success" &&
            <PostSuccess text={postResponse.message}/>}
            {postResponse.status === "failed" &&
            <PostFailure text={postResponse.message}/>}
            <h3 className={classes.heading}>Add to database...</h3>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="name">Name</label>
                    <input value={postCreatureState.name} className={classes.input} type="text" onChange={handleName}></input>
                    {((postCreatureState.name && !nameIsValid) || (submitClick && !nameIsValid)) &&
                        <p className={classes.invalid}>Name should 16 chars or less, and contain only letters</p>}
                </section>
                {/* Image Upload */}
                <section className={classes.formSection}>
                    <label className={classes.label}>Upload an Image</label>
                    <input className={classes.input} onChange={handleFileToUpload} type="file"></input>
                    {((uploadValid && postCreatureState.name.length )=== 0 || (submitClick && !uploadValid)) &&
                        <p className={classes.invalid}>An image and name is required</p>}
                    {uploadError.isError &&
                        <p className={classes.error}>{uploadError.message}</p>}
                </section>
                {/* description */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="desc">Description</label>
                    <textarea value={postCreatureState.desc} onChange={handleDesc} className={classes.inputDesc}></textarea>
                    {((postCreatureState.desc && !descIsValid) || ( submitClick && !descIsValid)) &&
                        <p className={classes.invalid}>Description should not be empty</p>}
                </section>
                {/* Hit points */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="hp">Hit Points</label>
                    <input value={postCreatureState.hp} className={classes.bottomInput} onChange={handleHp} type="number" id="hp"></input>
                    {postCreatureState.hp && !hpIsValid &&
                        <p className={classes.invalid}>Enter a whole number 1 or greater </p>}
                </section>
                {/* attack */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="attack">Attack</label>
                    <input value={postCreatureState.attack} className={classes.bottomInput} onChange={handleAttack} type="number" id="attack"></input>
                    {((postCreatureState.attack && !attackIsValid) || (submitClick && !attackIsValid)) && 
                        <p className={classes.invalid}>Enter number between 1-100 </p>}
                </section>
                {/* defence */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="defence">Defence</label>
                    <input value={postCreatureState.defence} className={classes.bottomInput} onChange={handleDefence} type="number" id="defence"></input>
                    {((postCreatureState.defence && !defenceIsValid) || (submitClick && !defenceIsValid)) &&
                        <p className={classes.invalid}>Enter number between 1-100 </p>}
                </section>
                {/* magic */}
                <section className={classes.formSection}>
                    <label className={classes.label} htmlFor="magic">Magic</label>
                    <input value={postCreatureState.magic} className={classes.bottomInput} onChange={handleMagic} type="number" id="magic"></input>
                    {((postCreatureState.magic && !magicIsValid )|| (submitClick && !magicIsValid)) &&
                        <p className={classes.invalid}>Enter number between 1-100 </p>}
                </section>

                <button className={classes.btn} type="submit">Submit</button>
                <button type="button" onClick={handleReset} className={classes.btnReset}>Reset</button>
            </form>
        </>
    )

}

export default AddCreature