import React, { useState } from "react"
import classes from "./Navbar.module.css"
import { Link } from "react-router-dom"

// types 
import { navBarProps } from "../../Models/types"


const Navbar: React.FC<navBarProps> = (props) => {
    /* CODEX */
    const [expand, setExpand] = useState(false)
    const [showCreaturesAZ, setShowCreatures] = useState(false)
    const [showPlaceAZ, setShowPlaceAZ] = useState(false)
    const [showMiscAZ, setShowMiscAZ] = useState(false)

    /* TOOLS  */
    const [expandTools, setExpandTools] = useState(false)
    const [showAddCreature, setShowAddCreatures] = useState(false)
    const [showAddPlaces, setShowAddPlaces] = useState(false)
    const [showAddMisc, setShowAddMisc] = useState(false)

    /* conditional styles */

    const creaturesStyle = showCreaturesAZ ? classes.sectionActive : classes.sectionNotActive
    const placeStyle = showPlaceAZ ? classes.sectionActive : classes.sectionNotActive
    const miscStyle = showMiscAZ ? classes.sectionActive : classes.sectionNotActive
    const addCreaturesStyle = showAddCreature ? classes.sectionActive : classes.sectionNotActive
    const addPlacesStyle = showAddPlaces ? classes.sectionActive : classes.sectionNotActive
    const addMiscStyle = showAddMisc ? classes.sectionActive : classes.sectionNotActive

    /* handlers  - section one */

    const handleExpandCodex = () => {
        setExpand(!expand)
        setExpandTools(false)
        setShowCreatures(false)
        setShowMiscAZ(false)
        setShowPlaceAZ(false)
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

    /* handlers  - section two */
    const handleExpandTools = () => {
        setExpand(false)
        setExpandTools(!expandTools)
        setShowAddCreatures(false)
        setShowAddPlaces(false)
        setShowAddMisc(false)
    }

    const handleShowAddCreature = () => {
        setExpandTools(true)
        setShowAddCreatures(true)
        setShowAddPlaces(false)
        setShowAddMisc(false)
        props.tools()
    }
    const handleShowAddPlaces = () => {
        setExpandTools(true)
        setShowAddCreatures(false)
        setShowAddPlaces(true)
        setShowAddMisc(false)
    }
    const handleShowAddMisc = () => {
        setExpandTools(true)
        setShowAddCreatures(false)
        setShowAddPlaces(false)
        setShowAddMisc(true)
    }

    return (
        <nav className={classes.container}>
           
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/search">Search</Link>


            {/* Codex and drop */}

            <div onClick={handleExpandCodex} className={classes.codex}>Codex </div>
            {expand &&
                <Link style={{textDecoration: "none"}} to="/codex/creaturesaz"><div onClick={handleShowCreaturesAZ} className={creaturesStyle}>Creatures A-Z</div></Link>}

            {expand &&
                <Link style={{textDecoration: "none"}} to="/codex/placesaz">
                    <div onClick={handleShowPlaces} className={placeStyle}>Places A-Z</div>
                </Link>}
            {expand &&
                <Link style={{textDecoration: "none"}} to="/codex/miscaz">
                    <div onClick={handleShowMisc} className={miscStyle}>Misc A-Z</div>
                </Link>}




            {/* tools and drop */}

            <div onClick={handleExpandTools} className={classes.codex}>Tools </div>


            {expandTools &&
                <Link style={{textDecoration: "none"}} to="/tools/addcreature">
                    <div onClick={handleShowAddCreature} className={addCreaturesStyle}>Add Creature </div> </Link>}
            {expandTools &&
            <Link style={{textDecoration: "none"}} to="/placeholder">
                <div onClick={handleShowAddPlaces} className={addPlacesStyle}>Add Places</div>
                </Link>}
            {expandTools &&
             <Link style={{textDecoration: "none"}} to="/placeholder">
                <div onClick={handleShowAddMisc} className={addMiscStyle}>Add Misc</div>
                </Link>}


        </nav>
    )
}

export default Navbar;