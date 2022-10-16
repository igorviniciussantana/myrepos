export default function Text(props) {
  return (
    <span
      style={{
        color: props.color,
        fontWeight: props.weight,
        fontSize: `clamp(1rem, ${props.size}vw, 3rem)`,
        letterSpacing: props.spacing + 'px',
        textAlign: 'center',
        width: '100%'
      }}
    >
      {props.value}
    </span>
  );
}
