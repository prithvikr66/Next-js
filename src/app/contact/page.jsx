import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import img from "../../../public/contact.png"
import Button from '../components/Button/Button'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      <div className={styles.items}>
        <div className={styles.imgContainer}>  <Image
          src={img}
          alt="loading"
          fill={true}
          className={styles.img}
        >
        </Image>
        </div>

        <form className={styles.form}>

          <input
            type="text"
            placeholder="name"
            className={styles.input}

          />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
             
            />
          <textArea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="message"

          />

          <Button
            url="#"
            text="Send"
          />

        </form>




      </div>






    </div>
  )
}

export default Contact