import { useEffect, useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroProps {
  bride: string;
  groom: string;
  subtitle: string;
  sub_category_title: string;
}

const Hero = ({ bride, groom, subtitle, sub_category_title }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Wedding Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="mb-8">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            {groom}{" "}
            <span className="text-4xl md:text-6xl lg:text-7xl font-light text-muted-foreground">
              &
            </span>{" "}
            {bride}
          </h1>
          <p className="hero-text text-xl md:text-2xl font-light text-muted-foreground">
            <h1>Սիրելի Հյուրեր</h1>
            {subtitle}
            <br/>
            {sub_category_title}
          </p>
        </div>
        
        {/* Decorative Element */}
        <div className="flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;