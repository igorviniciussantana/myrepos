import styles from "../styles/Error.module.css";
import Text from "../components/Text/text";
import Head from "next/head";

export default function Error() {


  return (
    <>
    <Head>
        <title>Error 404 | MyRepos</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg" />
    </Head>
    <div className={styles.container}>
    <Text value="Error" color="white"/> <Text value="404" color="white"/>
    </div>
    </>
  );
}
