interface TimelineItem {
  id: number;
  time: string;
  event: string;
  description: string;
}

interface TimelineProps {
  events: TimelineItem[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blush/20 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Օրվա Ծրագիր</h2>
        
        <div className="relative">
          {events.map((event, index) => (
            <div key={event.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="card-elegant p-6 ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {event.event}
                  </h3>
                  <span className="text-rose-gold font-medium text-lg">
                    {event.time}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;