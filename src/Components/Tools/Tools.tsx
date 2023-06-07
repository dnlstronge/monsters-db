import React from "react"
import classes from "./Tools.module.css"

const Tools = () => {
    return (
        <div className={classes.container}>
            <button>Add Creature</button>
            <button>Add Place</button>
            <button>Add Misc</button>
        </div>
    )
}
export default Tools;