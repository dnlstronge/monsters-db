import React from "react";
import classes from "./StatBar.module.css"



// TYPE (PROPS)

import { statBarProps } from "../../../Models/types";

const StatBar: React.FC <statBarProps> = (props) => {

    const attackStyleLeft = {
        width: `${props.attack}%`,
        background: "green",
        height: "0.9rem",
    }
    const defenceStyleLeft = {
        width: `${props.defence}%`,
        background: "green",
        height: "0.9rem",
    }

  

        return (
            <>
            <section className={classes.barSection}>
                <label htmlFor="attack"> Attack: </label>
                 <div id="attack" className={classes.container}>
                    <p style={attackStyleLeft}></p>
                    
                </div>
            </section>
            <section className={classes.barSection}>
                <label htmlFor="defence"> Defence: {props.defence} </label>
                 <div id="defence" className={classes.container}>
                    <p style={defenceStyleLeft}></p>
                   
                </div>
            </section>
           </>
        )
}

export default StatBar;