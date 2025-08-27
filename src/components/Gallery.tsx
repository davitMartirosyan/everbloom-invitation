import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryItem[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Map JSON URLs to imported images
  const imageMap = {
    '/src/assets/gallery-1.jpg': gallery1,
    '/src/assets/gallery-2.jpg': gallery2,
    '/src/assets/gallery-3.jpg': gallery3,
    '/src/assets/gallery-4.jpg': gallery4,
  };

  const getImageSrc = (url: string) => {
    return imageMap[url as keyof typeof imageMap] || url;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blush/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Our Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="card-elegant overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-romantic hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={getImageSrc(image.url)}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-gold transition-colors"
            >
              <X size={32} />
            </button>
            <img 
              src={getImageSrc(selectedImage.url)}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;