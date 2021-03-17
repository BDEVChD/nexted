import Head from 'next/head';
import axios from "axios";
import {useState, useEffect} from 'react'; 



export default function About({data}) {
  const [state, setState ] = useState({
    name: data.name
  })
  // useEffect(() => {
  //   console.log('component loaded')
  //   axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  //   .then((response)=> {
  //     console.log(response)
  //     setState({
  //       name: response.data.name,
  //       img: response.data.sprites.front_default
  //     })
  //   })
  // }, [])
  return (
    <div >
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a nextjs course" />
      </Head>
    <h1>Pokemon</h1>
    <p>This is the about page</p>
  <h1>{state.name}</h1>

    </div>
  )
}
/** STATIC SITE GENERATION
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const pokemon = await res.json(); 
  //   axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  //   .then((response)=> {
  //     console.log(response)
  //     setState({
  //       name: response.data.name,
  //       img: response.data.sprites.front_default
  //     })
  //   })
  // }, [])
  return {
    props: {
      pokemon
    },
  }
}
 */

 //Server Side 
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}