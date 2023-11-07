import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat GPT Writer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./next.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1 className={styles.title}>Chat-GPT Writer</h1>
          <h4 className={styles.subtitle}>powered By</h4>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  )
}
