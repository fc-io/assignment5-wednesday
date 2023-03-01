'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import photo from '../../../public/photo.jpg'

export default function Portfolio() {
  return (
    <div>
      <h1 className={styles.headingPortfolio}>Portfolio</h1>
      <div className={styles.link}>
        <Link href="/portfolio/project1" >
          <Image
            src={photo}
            alt="portfolio"
          />
          <div>
            Project 1: Assignment 1
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/portfolio/project2" >
          <Image
            src={photo}
            alt="portfolio"
          />
          <div>
            Project 2: Assignment 2
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/portfolio/project3" >
          <Image
            src={photo}
            alt="portfolio"
          />
          <div>
            Project 3: Assignment 3
          </div>
        </Link>
      </div>
    </div>
  )
}
