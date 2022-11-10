import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import styles from "../../styles/User.module.css";
import Card from "../../components/Card/card";

export default function User({user, repos}) {

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

export const getStaticProps = async function (context) {
  const { userName } = context.params;

  const [userResponse, reposResponse] = Promise.all([
    api.get(`/users/${userName}`),
    api.get(`/users/${userName}/repos`),
  ]);

  return {
    props: {
      user: userResponse.data,
      repos: reposResponse.data,
    },
    revalidate: 20,
  };
};
