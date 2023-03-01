import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>This is my homepage</h1>
        <div><Link href="/about">Go to About</Link></div>
        <div><Link href="/portfolio">Go to Portfolio</Link></div>
        <div><Link href="/ping">Go to Ping</Link></div>
        <div><Link href="/pong">Go to Pong</Link></div>
      </div>
    </main>
  )
}
