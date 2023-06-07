
import React, { useState } from "react"
import classes from "./AddCreature.module.css"

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

    /* Submit handler */

    const handleSubmit = () => {}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <label htmlFor="desc"></label>
            <label htmlFor="hp"></label>
            <label htmlFor="attack"></label>
            <label htmlFor="defence"></label>
            
        </form>
            </>
    )
     
}

export default AddCreature