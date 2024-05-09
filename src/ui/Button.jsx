export default function Button({ icon, children, style }) {
  return (
    <button className="button" style={style}>
      <img src={icon} alt="" />
      <span>{children}</span>
    </button>
  );
}
