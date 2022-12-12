import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import styles from "../../styles/User.module.css";
import Card from "../../components/Card/card";
import  api  from "../../api/api";
import { GetStaticProps } from "next";
import Loading from "../../components/Loading/loading";


interface IUser{
login: string;
name: string;
avatar_url: string;
}


interface IRepos{
name: string;
id: number;
owner: IUser;
description: string;
html_url: string;
topics: string[];
pushed_at: string;
}


interface UserProps{
  user: IUser;
  repos: IRepos[];
}

export default function User({ user, repos } : UserProps) {

  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading/>;
  }

const sortRepos = repos.sort((a,b) => {return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()})

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
          {sortRepos.map((repo) => {
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};


export const getStaticProps : GetStaticProps = async (context) => {
  const username = context.params?.username; 

   const userResponse = await api.get(`/users/${username}`)
   const reposResponse = await api.get(`/users/${username}/repos`)

  return {
    props: {
      user: userResponse.data,
      repos: reposResponse.data,
    },
    revalidate: 20
  };
};