import React from "react"
import classes from "./Tools.module.css"
import AddCreature from "./AddCreature"

const CreatureTool = () => {
    return (
        <div className={classes.container}>
           <AddCreature />
        </div>
    )
}
export default CreatureTool;