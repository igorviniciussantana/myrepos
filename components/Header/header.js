import styles from "./header.module.css";
import Link from "next/link";
import Text from "../Text/text";
import Image from "next/image";

export default function Header(props) {
  return (
    <div>
<div className={styles.image}>
<img src={props.avatar} />
<Text value={props.name} />
<Text value={props.login} />

</div>

    </div>
  );
}
