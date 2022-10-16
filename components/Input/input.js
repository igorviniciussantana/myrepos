import styles from "./input.module.css";

export default function Input(props) {
    return (
    <input placeholder={props.placeholder} className={styles.input} onChange={e => props.change(e.target.value)}/>
    )
  }
  