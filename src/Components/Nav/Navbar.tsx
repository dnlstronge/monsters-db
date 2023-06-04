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
        setExpand(true)
    }
    const handleShowCreaturesAZ = () => {
        setShowCreatures(!showCreaturesAZ)
        props.creaturesAZ()
    }

    const handleShowPlaces = () => {
        setShowPlaceAZ(!showPlaceAZ)
    }
    const handleShowMisc = () => {
        setShowMiscAZ(!showMiscAZ)
    }
    return (
        <nav className={classes.container}>

            <div onClick={handleExpandCodex} className={classes.codex}>Codex
            {expand && 
                <section className={classes.expandcodex} >
                    <div onClick={handleShowCreaturesAZ} className={creaturesStyle}>Creatures A-Z</div>
                    <div onClick={handleShowPlaces}className={placeStyle}>Places A-Z</div>
                    <div onClick={handleShowMisc} className={miscStyle}>Misc A-Z</div>
                </section>}
            </div>
            <div className={classes.tools}>Tools</div>


        </nav>
    )
}

export default Navbar;