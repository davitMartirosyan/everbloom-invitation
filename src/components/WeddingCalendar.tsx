import { Calendar } from '@/components/ui/calendar';
import { format, parseISO, isSameDay } from 'date-fns';
import Countdown from './Countdown';

interface WeddingCalendarProps {
  weddingDate: string;
}

const WeddingCalendar = ({ weddingDate }: WeddingCalendarProps) => {
  const weddingDay = parseISO(weddingDate);
  const monthYear = format(weddingDay, 'MMMM yyyy');

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sage/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Save the Date</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Calendar Section */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {monthYear}
              </h3>
              <p className="text-muted-foreground text-lg">
                Mark your calendar for our special day
              </p>
            </div>
            
            <div className="card-elegant p-8 max-w-md w-full">
              <Calendar
                mode="single"
                selected={weddingDay}
                month={weddingDay}
                disabled={(date) => !isSameDay(date, weddingDay)}
                className="rounded-lg border-0"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-lg font-serif font-semibold text-foreground",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-md hover:bg-accent",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-8 font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary [&:has([aria-selected])]:rounded-full",
                  day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 rounded-full hover:bg-accent hover:text-accent-foreground",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground shadow-romantic ring-2 ring-primary ring-offset-2 ring-offset-background",
                  day_today: "bg-accent text-accent-foreground",
                  day_outside: "text-muted-foreground opacity-50",
                  day_disabled: "text-muted-foreground opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
              />
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
                  <div className="w-3 h-3 bg-primary rounded-full shadow-romantic"></div>
                  <span className="text-sm font-medium text-foreground">
                    Wedding Day: {format(weddingDay, 'EEEE, MMMM do')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="flex justify-center">
            <Countdown targetDate={weddingDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCalendar;