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
        setExpand(true)
        setShowCreatures(true)
        setShowMiscAZ(false)
        setShowPlaceAZ(false)
        props.creaturesAZ()
    }

    const handleShowPlaces = () => {
        setExpand(true)
        setShowPlaceAZ(true)
        setShowCreatures(false)
        setShowMiscAZ(false)
    }
    const handleShowMisc = () => {
        setExpand(true)
        setShowMiscAZ(true)
        setShowCreatures(false)
        setShowPlaceAZ(false)
    }
    return (
        <nav className={classes.container}>

            <div onClick={handleExpandCodex} className={classes.codex}>Codex </div>
            {expand && 
                    <div onClick={handleShowCreaturesAZ} className={creaturesStyle}>Creatures A-Z</div>}
            {expand && 
                    <div onClick={handleShowPlaces}className={placeStyle}>Places A-Z</div>}
            {expand && 
                    <div onClick={handleShowMisc} className={miscStyle}>Misc A-Z</div>}
            <div className={classes.tools}>Tools</div>


        </nav>
    )
}

export default Navbar;