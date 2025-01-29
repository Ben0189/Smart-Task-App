import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

const PopoverCalendar = ({ task }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleCalendarClose = () => setShowCalendar(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex flex-row
                      items-center mr-4 rounded-full px-3 py-1 
                      ${showCalendar ? 'bg-primary text-white' : 'bg-gray-300 text-neutral-700'}`}
          onClick={() => setShowCalendar((prev) => !prev)}
        >
          <CalendarDays className="mr-1" size={16} />
          <span className="text-xs">{format(new Date(task.dueDate), 'MM/dd')}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent onCloseAutoFocus={handleCalendarClose}>
        <Calendar
          classNames={{
            caption_label: 'bg-blue-50 px-2 py-1 rounded-md font-semibold',
            row: 'flex w-full',
          }}
          className="bg-white border-2 border-gray rounded-lg"
        />
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCalendar;
