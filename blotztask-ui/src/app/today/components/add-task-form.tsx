import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const taskSchema = z.object({
  title: z.string(), // Simple string without validation rules
  description: z.string().optional(),
  date: z.date().optional(),
});

const AddTaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      date: null,
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass task title to parent
    reset();
  };

  const [date, setDate] = React.useState<Date>();
  return (
    <form
      className="flex flex-col space-y-2"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col space-y-0 ">
        <input
          type="text"
          className="border-0 font-bold p-2 focus:ring-0 focus:outline-none"
          placeholder="Enter task title"
          {...register('title')} // React Hook Form integration
        />

        <input
          type="text"
          className="border-0 p-2 text-sm focus:ring-0 focus:outline-none"
          placeholder="Fill in the detailed information"
          {...register('description')}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[160px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span>Select due date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button
          variant="secondary"
          className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Add Tag
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
