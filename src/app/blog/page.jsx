import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'


async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok)
  throw new Error("Failed to Fetch Data")

  return res.json()
}


const Blog = async() => {
  const data=await getData()
  return (
    <div className={styles.mainContainer}>
    {data.map((item)=>(
      <Link href="/blog/${}" className={styles.container}
      key={item.id}
      >
      <div className={styles.imgContainer}>
        <Image
          src=""
          alt=""
          width={400}
          height={250}
          className={styles.img}
        />
      </div>
      <div
      className={styles.content}>
        <h1 className={styles.title}>
          {item.title}
        </h1>
        <p className={styles.desc}>
          {item.body}
        </p>
      </div>

      </Link>
       ))}
       </div>
  )
}

export default Blog