import './ZodiacCard.css';

export default function ZodiacCard(props) {
  return (
    <div className="zodiac-card">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      </div>
      <div className="text">
        <h3 className="name">{props.name}</h3>
        <span className="dates">{props.dates}</span>
      </div>
    </div>
  );
}