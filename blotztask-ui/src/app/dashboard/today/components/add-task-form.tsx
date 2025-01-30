import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Tag } from 'lucide-react';
import { Input } from '@/components/ui/task-card-input';
import { Textarea } from '@/components/ui/textarea';

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
    <form className="flex flex-col w-full space-y-2" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col w-full">
        <Input placeholder="Enter task title" className="font-bold text-base" {...register('title')} />
        <Textarea
          placeholder="Fill in the detailed information"
          className="w-full"
          {...register('description')}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'secondary'}
              className={cn('bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200')}
            >
              <CalendarIcon className="fill-gray-600  mr-2" />
              <span>Add Date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
        <Button
          variant="secondary"
          className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          <Tag className="mr-2" />
          <span>Add Label</span>
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
