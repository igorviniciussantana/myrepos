import styles from "./header.module.css";
import Link from "next/link";
import Text from "../Text/text";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Link href={`https://github.com/${props.login}`}>
        <img src={props.avatar} className={styles.image} />
      </Link>
      <Link href={`https://github.com/${props.login}`}>
        <a target="_blank">
          <Text
            value={props.name || <Skeleton />}
            minSize="1.8"
            mediumSize="3"
            color="white"
            weight="700"
            align="center"
          />
        </a>
      </Link>
      <Link href={`https://github.com/${props.login}`}>
        <a target="_blank">
          <Text
            value={("@" + props.login || <Skeleton />)}
            minSize="0.8"
            mediumSize="1.3"
            color="#646464"
            weight="500"
            align="center"
          />
        </a>
      </Link>
    </div>
  );
}
