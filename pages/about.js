import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next About Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a nextjs course" />
      </Head>
    <h1>About</h1>
    <p>This is the about page</p>
    <style jsx>
  
    {`body{
      background: purple; 
    }
    h1 {
      color: purple; 
    }

        `}
    </style>
    <img src="/img/goku.png"></img>
    </div>
  )
}
