import styles from "../styles/Error.module.css";
import Text from "../components/Text/text";

export default function Error() {


  return (
    <div className={styles.container}>
    <Text value="Error" color="white"/> <Text value="404" color="white"/>
    </div>
  );
}
