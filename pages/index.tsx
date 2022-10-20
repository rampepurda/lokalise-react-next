import type { NextPage } from 'next'
import Head from 'next/head'
import '../i18n'
import Layout from '../core-components/Layout'
import { CreateAccount } from '../ui/forms/create-account/create-account'
import { useEffect } from "react"

const Home: NextPage = () => {

  useEffect(() => {
  },[])

  return (
    <>
      <Head>
        <title>react-next and Localise</title>
        <meta name="description" content="localise text to next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Localise: how to compiled into React-next</h1>
      </header>

      <Layout>
        {/* ...testing purpose */}
        <CreateAccount />
      </Layout>
    </>
  )
}

export default Home

export const getData = async () => {
  try {
    const res = await fetch(``);
    const dataJson = await res.json();

    if (!res) {
      throw new Error(`Failed reason is: ${res}`)
    }
    return { props: { dataJson },}
  }
    catch (err: any) {
      alert(`${err.message}`)
  }
}

