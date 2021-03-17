import Head from 'next/head';
import axios from "axios";
import {useState, useEffect} from 'react'; 



export default function About() {
  useEffect(() => {
    console.log('component loaded')
  }, [])
  return (
    <div >
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a nextjs course" />
      </Head>
    <h1>Pokemon</h1>
    <p>This is the about page</p>
     
    </div>
  )
}
