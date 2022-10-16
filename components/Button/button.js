import styles from "./button.module.css";
import Text from "../Text/text";

export default function Button(props) {
    return (
     <button className={styles.button}>


      <Text value={props.value} color="#100F11" size="16" weight="700"/>
     </button>
    )
  }
  