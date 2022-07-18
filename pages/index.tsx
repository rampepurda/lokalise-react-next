import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../core-components/Layout'
import { CreateAccount } from "../ui/forms/create-account";
import dataListJsonCz from '../config/locals/cz.json'
import dataListJsonEn from '../config/locals/en.json'
import {useEffect, useState} from "react";

const Home: NextPage = () => {
  const [lanType, setLanType] = useState<boolean>(true)
  const getDataJsonEn: any = dataListJsonEn
  const getDataJsonCz: any = dataListJsonCz
  const dataEn: any = getDataJsonEn[0].en[0]
  const dataCz: any = getDataJsonCz[0].cz[0]
  const [langChanger, setLangChanger] = useState<any>(dataEn)
  const langHandle = () => {
    if(lanType) {
      setLangChanger(dataCz)
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

      <Layout>
        <h1>Localise: how to compiled into React-next</h1>
        <nav
          className='lang-changer'
          aria-label='language changer'
        >
          <ul>
            <li role={'button'}>
              Change language to: <span onClick={(e) => {
                e.preventDefault();
                langHandle()
            }}
            >{ lanType ? 'Cz' : 'En'}</span>
            </li>
          </ul>
        </nav>
        <CreateAccount data={ lanType ? langChanger : langChanger } />
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

