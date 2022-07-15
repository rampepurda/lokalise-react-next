import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../core-components/Layout'
import CreateAccount from "../ui/forms/create-account";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>react-next and Localise</title>
        <meta name="description" content="localise text to next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Localise how to compiled into React-next</h1>
        <CreateAccount />
      </Layout>
    </>
  )
}

export default Home
