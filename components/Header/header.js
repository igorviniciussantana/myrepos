import styles from "./header.module.css";
import Link from "next/link";
import Text from "../Text/text";
import Image from "next/image";

export default function Header(props) {
  return (
    <div className={styles.header}>

<img src={props.avatar} className={styles.image}/>
<Text value={props.name} minSize="1.8" mediumSize="3" color="white" weight="700" align='center'/>
<Text value={props.login} minSize="0.8" mediumSize="1.3" color="#646464" weight="500" align='center'/>
    </div>
  );
}
