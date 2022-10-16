import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "../components/Text/text";
import Image from "next/image";
import Menu from "../components/Menu/menu";
import Button from "../components/Button/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyRepos | Página Inicial</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg" />
        <meta
          name="description"
          content="Veja seus repositórios no GitHub de uma forma mais bonita e interativa!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <div className={styles.bgImage}></div>

        <div className={styles.page}>
          <Menu />
          <div className={styles.app}>
            <Text
              value="Insira seu nome de usuário
do GitHub"
              align="center"
              color="white"
              minSize="1.5" mediumSize="5"
              weight="700"
            />
            <Button value="Acessar minha página" />
          </div>
        </div>
      </div>
    </>
  );
}
