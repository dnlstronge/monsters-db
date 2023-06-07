import React, { useState } from "react"
import classes from "./Navbar.module.css"

// types 
import { navBarProps } from "../../Models/types"


const Navbar: React.FC<navBarProps> = (props) => {
    const [expand, setExpand] = useState(false)
    const [expandTools, setExpandTools] = useState(false)
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

    const handleExpandTools = () => {
        setExpandTools(!expandTools)
    }

    return (
        <nav className={classes.container}>
            {/* Codex and drop */}
            <div onClick={handleExpandCodex} className={classes.codex}>Codex </div>
            {expand && 
                    <div onClick={handleShowCreaturesAZ} className={creaturesStyle}>Creatures A-Z</div>}
            {expand && 
                    <div onClick={handleShowPlaces}className={placeStyle}>Places A-Z</div>}
            {expand && 
                    <div onClick={handleShowMisc} className={miscStyle}>Misc A-Z</div>}
            {/* tools and drop */}
            <div onClick={handleExpandTools} className={classes.codex}>Tools </div>
            {expand && 
                    <div onClick={handleShowAddCreature} className={creaturesStyle}>Add Creature </div>}
            {expand && 
                    <div onClick={handleShowPlaces}className={placeStyle}>Add Places</div>}
            {expand && 
                    <div onClick={handleShowMisc} className={miscStyle}>Add Misc</div>}


        </nav>
    )
}

export default Navbar;