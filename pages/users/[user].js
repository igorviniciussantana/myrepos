import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header/header";
import styles from "../../styles/User.module.css"

export default function User() {
  const router = useRouter();
  const userName = router.query.user;

  const [user, setUser] = useState({ userName });
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((userResponse) => userResponse.json())
      .then((userData) => setUser(userData));
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((reposResponse) => reposResponse.json())
      .then((reposData) => setRepos(reposData));
  });

  return (
    <>
      <Head>
        <title>{user.login} | MyRepos</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg" />
        <meta
          name="description"
          content={
            "Conheça os repositórios de " + user.login + " " + "no GitHub!"
          }
        />
      </Head>
      <div className={styles.containerDynamic}>
        <Header avatar={user.avatar_url} name={user.name} login={"@" + user.login} />
      </div>
    </>
  );
}
