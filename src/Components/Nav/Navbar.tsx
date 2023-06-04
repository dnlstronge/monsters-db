import React, { useState } from "react"
import classes from "./Navbar.module.css"

// types 
import { navBarProps } from "../../Models/types"


const Navbar: React.FC<navBarProps> = (props) => {
    const [expand, setExpand] = useState(false)
    const [showCreaturesAZ, setShowCreatures] = useState(false)
    const [showPlaceAZ, setShowPlaceAZ] = useState(false)
    const [showMiscAZ, setShowMiscAZ] = useState(false)


    /* conditional styles */

    const creaturesStyle = showCreaturesAZ ? classes.sectionActive : classes.sectionNotActive 
    const placeStyle = showPlaceAZ ? classes.sectionActive : classes.sectionNotActive 
    const miscStyle = showMiscAZ ? classes.sectionActive : classes.sectionNotActive 

    /* handlers */

    const handleExpandCodex = () => {
        setExpand(!expand)
    }
    const handleShowCreaturesAZ = () => {
        setShowCreatures(!showCreaturesAZ)
        props.creaturesAZ()
    }
    return (
        <nav className={classes.container}>

            <div onClick={handleExpandCodex } className={classes.codex}>Codex
                <section className={classes.expandcodex} >
                    <div onClick={handleShowCreaturesAZ} className={creaturesStyle}>Creatures A-Z</div>
                    <div className={classes.section}>Places A-Z</div>
                    <div className={classes.section}>Misc A-Z</div>
                </section>
            </div>


        </nav>
    )
}

export default Navbar;