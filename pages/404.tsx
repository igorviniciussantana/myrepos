import styles from "../styles/Error.module.css";
import Text from "../src/components/Text/text";
import Head from "next/head";
import Menu from "../src/components/Menu/menu";
import Button from "../src/components/Button/button";

export default function Error() {
  return (
    <>
      <Head>
        <title>Error 404 | MyRepos</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <div className={styles.container}>
        <Menu />
        <div className={styles.app}>
          <img src="/images/error_icon.svg" className={styles.img} />
          <div className={styles.title}>
            <Text
              value="error"
              color="white"
              weight="700"
              minSize="2"
              mediumSize="6"
            />
            <Text
              value="404"
              color="#52fb02"
              weight="700"
              minSize="2"
              mediumSize="6"
            />
          </div>
          <Text
            value="Página não encontrada, verifique e tente novamente."
            color="#646464"
            weight="400"
            minSize="1.3"
            align="center"
            mediumSize="1"
          />
          <Button value="Voltar para a Página Inicial" click="/"/>
        </div>
      </div>
    </>
  );
}
