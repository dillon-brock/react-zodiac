import './Main.css';
import { zodiac } from '../../data';
import ZodiacCard from '../ZodiacCard/ZodiacCard';
import background from '../../background.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map(sign => <ZodiacCard key={sign.id} {...sign}/>)}
    </main>
  );
}