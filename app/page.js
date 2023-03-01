import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={inter.className}>This is my homepage</h1>
        <div><Link href="/about">Go to About</Link></div>
        <div><Link href="/portfolio">Go to Portfolio</Link></div>
      </div>
    </main>
  )
}
