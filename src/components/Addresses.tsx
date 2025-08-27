import { MapPin, ExternalLink } from 'lucide-react';

interface Address {
  id: number;
  type: string;
  icon: string;
  name: string;
  address: string;
  mapsUrl: string;
}

interface AddressesProps {
  addresses: Address[];
}

const Addresses = ({ addresses }: AddressesProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-sage/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Important Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addresses.map((address) => (
            <div key={address.id} className="card-elegant p-6 text-center group transition-all duration-300 hover:shadow-romantic hover:scale-105">
              <div className="text-4xl mb-4">{address.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {address.name}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {address.address}
              </p>
              <a 
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-romantic text-sm"
              >
                <MapPin size={16} />
                Open in Maps
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addresses;