export default function ZodiacCard(props) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <h3>{props.name}</h3>
      <span>{props.dates}</span>
    </div>
  );
}