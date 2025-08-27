import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <footer className="wedding-gradient py-16 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <Heart className="text-6xl animate-pulse" fill="currentColor" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            We are married! 🎉
          </h2>
          <p className="text-xl opacity-90">
            Thank you for celebrating with us!
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="wedding-gradient py-16 px-4 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
          Counting Down to Forever
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="card-elegant bg-white/20 backdrop-blur-sm p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif mb-2">
                {value}
              </div>
              <div className="text-sm md:text-base uppercase tracking-wider opacity-90">
                {unit}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Heart className="text-4xl animate-pulse" fill="currentColor" />
        </div>
      </div>
    </footer>
  );
};

export default Countdown;