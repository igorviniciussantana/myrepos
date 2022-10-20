import styles from "./card.module.css";
import Text from "../Text/text";
import Image from "next/image";


export default function Card(props) {


    return (
<div className={styles.card}>

<Text value={props.title} />
<Text value={props.description} />
<div className={styles.user}>
    <div className={styles.avatar}>
        {/* <Image layout="fill" src={props.img} /> */}
    </div>
    <Text value={props.login} />
</div>

{props.tags.map(tag =>{
    return(
        <h3 key={tag}>{ tag }</h3>
    )
})}

</div>
    )
  }
  