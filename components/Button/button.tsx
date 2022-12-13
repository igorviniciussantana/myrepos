import styles from "./button.module.css";
import Text from "../Text/text";
import { useRouter } from "next/router";

interface ButtonProps{
  clickRouter: string;
  value: string
}


export default function Button(props : ButtonProps) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      onClick={() => router.push(`${props.clickRouter}`)}
    >
      <Text value={props.value} color="#100F11" size="1" weight="700" />
    </button>
  );
}
