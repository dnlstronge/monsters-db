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

   
    const attackper = `${props.attack}%`
        return (
            <section>
                 <div className={classes.container}>
                    <p style={attackstyleLeft}></p>
                     <p className={classes.barRight} style={{width: "30%"}}></p>
                </div>
            </section>
           
        )
}

export default StatBar;