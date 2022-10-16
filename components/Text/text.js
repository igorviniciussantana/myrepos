export default function Text(props) {
  return (
    <span
      style={{
        color: props.color,
        fontWeight: props.weight,
        fontSize: props.size + 'px',
        letterSpacing: props.spacing + 'px',
      }}
    >
      {props.value}
    </span>
  );
}
