import Head from 'next/head';


export default function BlogIndex() {
  return (
    <div className="container">
      <Head>
        <title>Blog Index</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a nextjs course" />
      </Head>
    <h1>Blog Index</h1>
    <p>This is the blog page</p>
   
    </div>
  )
}
