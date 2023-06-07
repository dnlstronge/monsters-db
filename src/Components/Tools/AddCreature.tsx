
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
    return (
        <>
        <form>
            <label htmlFor="name"></label>
        </form>
            </>
    )
     
}

export default AddCreature