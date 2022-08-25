import type {NextPage} from 'next';
import Head from 'next/head';
import Link from "next/link";
import Layout from '../core-components/Layout';
//import {CreateAccount} from "../ui/forms/create-account";
import {CreateAccount} from '../ui/forms/create-account/create-account';
import dataListJsonCn from '../locale/zh_CN.json';
import dataListJsonEn from '../locale/en.json';
import {useEffect, useState} from "react";


const Home: NextPage = () => {
  const [lanType, setLanType] = useState<boolean>(true)
  const getDataJsonEn: any = dataListJsonEn
  const getDataJsonCn: any = dataListJsonCn
  const dataEn: any = getDataJsonEn
  const dataCn: any = getDataJsonCn
  const [langChanger, setLangChanger] = useState<any>(dataEn)
  const langHandle = () => {
    if(lanType) {
      setLangChanger(dataCn)
      setLanType(false)
    } else {
      setLanType(true)
      setLangChanger(dataEn)
    }
  }

  useEffect(() => {
  },[lanType])

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

