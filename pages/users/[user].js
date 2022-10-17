import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function User() {
  const router = useRouter();
  const  userName  = router.query.user;

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


  return (<h1>{user.login}</h1>);
}
