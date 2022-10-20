import styles from "./card.module.css";
import Text from "../Text/text";
import Link from "next/link";


export default function Card(props) {


    return (
      
        <Link href={props.link}>
<a className={styles.card}>

<Text value={props.title} color="#100f11" weight="700" minSize="2" mediumSize="2"/>
<Text value={props.description} color="#100f11" weight="400" minSize="1.5" mediumSize="1.5"/>
  <Link href={`https://github.com/${props.login}`}>
<a className={styles.user} target="_blank">
  
    <div className={styles.avatar}>
        <img src={props.img} />
    </div>
    <Text value={"@" + props.login} weight="700" color="#100f11"/>
  
</a>
  </Link>
  <div className={styles.tagsDiv}>
{props.tags.map(tag =>{
    return(
        <span className={styles.tagElement} key={tag}>{tag}</span>
    )
})}
</div>
</a>
</Link>
    )
  }
  