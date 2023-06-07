import React from "react";
import classes from "./StatBar.module.css"



// TYPE (PROPS)

import { statBarProps } from "../../../Models/types";

const StatBar: React.FC <statBarProps> = (props) => {

    const attackStyleLeft = {
        width: `${props.attack}%`,
        background: "lightgreen",
       
    }
    const defenceStyleLeft = {
        width: `${props.defence}%`,
        background: "lightgreen",
        
    }
    const magicStyleLeft = {
        width: `${props.magic}%`,
        background: "lightblue",
    }

  

        return (
            <>
            <section className={classes.barSection}>
                <label  className={classes.label} htmlFor="attack">Hit Points</label>
                <p>{props.hp}</p>
            </section>
            <section className={classes.barSection}>
                <label className={classes.label} htmlFor="attack"> Attack: </label>
                 <div id="attack" className={classes.container}>
                    <p style={attackStyleLeft}></p>
                    
                </div>
            </section>
            <section className={classes.barSection}>
                <label className={classes.label}  htmlFor="defence"> Defence: </label>
                 <div id="defence" className={classes.container}>
                    <p style={defenceStyleLeft}></p>
                   
                </div>
            </section>
            <section className={classes.barSection}>
                <label className={classes.label}  htmlFor="magic"> Magic:  </label>
                 <div id="magic" className={classes.container}>
                    <p style={magicStyleLeft}></p>
                   
                </div>
            </section>
           </>
        )
}

export default StatBar;