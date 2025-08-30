import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Timeline from '@/components/Timeline';
import Addresses from '@/components/Addresses';
import Countdown from '@/components/Countdown';
import WeddingCalendar from '@/components/WeddingCalendar';
import { ThemeProvider } from '@/components/ThemeProvider';

interface WeddingData {
  theme: {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    foregroundColor: string;
    customColors: {
      [key: string]: string;
    };
  };
  couple: {
    bride: string;
    groom: string;
    subtitle: string;
    sub_category_title: string;
  };
  wedding: {
    date: string;
    venue: string;
  };
  hero: {
    backgroundImage: string;
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
    <ThemeProvider theme={weddingData.theme}>
      <div className="min-h-screen">
        <Hero 
          groom={weddingData.couple.groom}
          bride={weddingData.couple.bride}
          subtitle={weddingData.couple.subtitle}
          sub_category_title={weddingData.couple.sub_category_title}
        />
        <Gallery images={weddingData.gallery} />
        <WeddingCalendar weddingDate={weddingData.wedding.date} />
        <Timeline events={weddingData.timeline} />
        <Addresses addresses={weddingData.addresses} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
