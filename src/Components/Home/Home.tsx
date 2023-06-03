import React from 'react'
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div  className={classes.container}>
        <h3 className={classes.title}>Welcome to monsters-db</h3>
        <p>This app allows users to search for fictional monsters</p>
        <section className={classes.testsection}></section>
    </div>
  )
}

export default Home