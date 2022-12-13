
interface TextProps{
color?: string;
weight?: string;
minSize?: string;
mediumSize?: string;
spacing?: string;
align?: any;
value: string;

}

export default function Text(props : TextProps) {
  return (
    <span
      style={{
        color: props.color,
        fontWeight: props.weight,
        fontSize: `clamp(${props.minSize}rem, ${props.mediumSize}vw, 3rem)`,
        letterSpacing: props.spacing + "px",
        textAlign: props.align,
        width: "100%",
      }}
    >
      {props.value}
    </span>
  );
}
