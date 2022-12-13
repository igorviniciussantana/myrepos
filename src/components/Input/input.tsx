import styles from "./input.module.css";

interface InputProps{
  placeholder: string;
  change: (e: string)=> void;
}

export default function Input(props : InputProps) {
    return (
    <input placeholder={props.placeholder} className={styles.input} onChange={e => props.change(e.target.value)}/>
    )
  }
  