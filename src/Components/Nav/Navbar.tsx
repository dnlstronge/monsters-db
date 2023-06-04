import React, { useState } from "react"
import classes from "./Navbar.module.css"

const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const [showCreaturesAZ, setShowCreatures] = useState(false)
    const [showPlaceAZ, setShowPlaceAZ] = useState(false)
    const [showMiscAZ, setShowMiscAZ] = useState(false)


    /* conditional styles */



    /* handlers */

    const handleExpandCodex = () => {
        setExpand(!expand)
    }
    const handleShowCreaturesAZ = () => {
        setShowCreatures(true)
    }
    return (
        <nav className={classes.container}>

            <div onClick={handleExpandCodex } className={classes.codex}>Codex
                <section className={classes.expandcodex} >
                    <div className={classes.section}>Creatures A-Z</div>
                    <div className={classes.section}>Places A-Z</div>
                    <div className={classes.section}>Misc A-Z</div>
                </section>
            </div>


        </nav>
    )
}

export default Navbar;