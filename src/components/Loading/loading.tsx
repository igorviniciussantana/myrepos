import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../Header/header";
import Menu from "../Menu/menu";
import styles from "./loading.module.css";
import Card from "../Card/card";
import Link from "next/link";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Loading() {


  return (
    <>
      <Head>
        <title>Carregando... | MyRepos</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <div className={styles.containerDynamic}>
        <Menu />


        <div className={styles.header}>

        <Skeleton  circle height='100%' baseColor='#1c1b1d' highlightColor="#2a2a2b" containerClassName={styles.image}/>
 
        <p>
        <Skeleton height='100%' baseColor='#1c1b1d' highlightColor="#2a2a2b"/>
        </p>


        <p>
        <Skeleton baseColor='#1c1b1d' highlightColor="#2a2a2b"/>
        </p>

    </div>
        </div>
    </>
  );
}

