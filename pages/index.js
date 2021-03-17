import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a nextjs course" />
      </Head>
    <h1>Home</h1>
    <p>This is the home page</p>
     
    </div>
  )
}
