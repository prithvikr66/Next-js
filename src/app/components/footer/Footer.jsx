// "use client"

import React from 'react'
import styles from "./page.module.css"
import {BsGithub,BsLinkedin,BsTwitter} from "react-icons/bs"
const Footer = () => {

  return (
    <div className={styles.container}>
        <div className={styles.text}>@ {new Date().getFullYear()}Random. All Rights Reserved</div>
        <div className={styles.logo}>
        
      <BsGithub />
         
          <BsLinkedin/>
          <BsTwitter/>
          </div>
       
    </div>
    
  )
}

export default Footer