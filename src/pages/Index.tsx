import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Timeline from '@/components/Timeline';
import Addresses from '@/components/Addresses';
import Countdown from '@/components/Countdown';

interface WeddingData {
  couple: {
    bride: string;
    groom: string;
    subtitle: string;
  };
  wedding: {
    date: string;
    venue: string;
  };
  gallery: Array<{
    id: number;
    url: string;
    alt: string;
  }>;
  timeline: Array<{
    id: number;
    time: string;
    event: string;
    description: string;
  }>;
  addresses: Array<{
    id: number;
    type: string;
    icon: string;
    name: string;
    address: string;
    mapsUrl: string;
  }>;
}

const Index = () => {
  const [weddingData, setWeddingData] = useState<WeddingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeddingData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setWeddingData(data);
      } catch (error) {
        console.error('Failed to load wedding data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWeddingData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading our special day...</p>
        </div>
      </div>
    );
  }

  if (!weddingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Something went wrong</h1>
          <p className="text-muted-foreground">Unable to load wedding details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero 
        bride={weddingData.couple.bride}
        groom={weddingData.couple.groom}
        subtitle={weddingData.couple.subtitle}
      />
      <Gallery images={weddingData.gallery} />
      <Timeline events={weddingData.timeline} />
      <Addresses addresses={weddingData.addresses} />
      <Countdown targetDate={weddingData.wedding.date} />
    </div>
  );
};

export default Index;
