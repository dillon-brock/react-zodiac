import { zodiac } from '../../data';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main() {
  return (
    <main>
      {zodiac.map(sign => <ZodiacCard key={sign.id} {...sign}/>)}
    </main>
  );
}