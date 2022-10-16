import styles from "./menu.module.css";
import Link from "next/link";
import Text from "../Text/text";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link href="/">
        <a>
          <Text value="MyRepos" color="white" weight="900" size="32" />
        </a>
      </Link>
      <Link href="https://github.com/igorviniciussantana/myrepos">
        <a target="_blank">
          <Text value="repositório" color="white" weight="400" size="16" />
        </a>
      </Link>
    </div>
  );
}
