import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import styles from "../../styles/User.module.css";
import Card from "../../components/Card/card";

export default function User() {
  const router = useRouter();
  var userName = router.query.user;

  const [user, setUser] = useState({ userName });
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((userResponse) => userResponse.json())
      .then((userData) => setUser(userData));
  }, [{ userName }]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((reposResponse) => reposResponse.json())
      .then((reposData) => setRepos(reposData));
  }, [{ userName }]);

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
        <Menu />
        <Header avatar={user.avatar_url} name={user.name} login={user.login} />
        <div className={styles.cardsDiv}>
          {repos.map((repo) => {
            return (
              <Card
                title={repo.name}
                key={repo.id}
                description={repo.description}
                img={repo.owner.avatar_url}
                login={repo.owner.login}
                tags={repo.topics.slice(0, 3)}
                link={repo.html_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
