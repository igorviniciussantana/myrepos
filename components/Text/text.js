export default function Text(props) {
  return (
    <span
      style={{
        color: props.color,
        fontWeight: props.weight,
        fontSize: `clamp(${props.minSize}rem, ${props.mediumSize}vw, 3rem)`,
        letterSpacing: props.spacing + 'px',
        textAlign: 'center',
        width: '100%'
      }}
    >
      {props.value}
    </span>
  );
}
