import React from 'react'
import styles from "./page.module.css"
import Button from '@/app/components/Button/Button'
import Image from 'next/image'
import img from "../../../../public/apps.jpg"
import {items} from "./data"
import { notFound } from 'next/navigation'

const getData=(cat)=>{
  const data=items[cat]
  if(data)return data
  return notFound
}

const Category = ({params}) => {
const data=getData(params.category)
  
  return (
    <div
    className={styles.container}>
      <h1
      className={styles.catTitle}
      >{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Test
          </h1>
          <p className={styles.desc}>
            Desc
          </p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>

        <Image
          className={styles.img}
          fill={true}
          src=""
          alt="Img"
        />

        </div>
      </div>
    </div>
  )
}

export default Category