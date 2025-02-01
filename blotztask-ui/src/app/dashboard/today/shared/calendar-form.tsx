'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { TaskDetailDTO } from '../../task-list/models/task-detail-dto';

const FormSchema = z.object({
  deadline: z.date({
    required_error: 'A due date is required.',
  }),
});

export function CalendarForm({
  task,
  datePickerRef,
}: {
  task?: TaskDetailDTO;
  datePickerRef?: React.RefObject<HTMLDivElement>;
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleCalendarClose = () => setShowCalendar(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="deadline"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    className={`flex flex-row text-xs font-normal
                        items-center mr-4 rounded-full px-3 py-1 h-[1.625rem] 
                        ${showCalendar ? 'bg-primary text-white' : 'bg-gray-300 text-neutral-700'}`}
                    onClick={() => setShowCalendar((prev) => !prev)}
                  >
                    <CalendarDays className="mr-1" size={16} />
                    {field.value ? (
                      format(field.value, 'MM/dd')
                    ) : task ? (
                      <span className="text-xs">{format(new Date(task.dueDate), 'MM/dd')}</span>
                    ) : (
                      <span>Add Date</span>
                    )}
                  </button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent
                ref={datePickerRef?.current ? datePickerRef : undefined}
                className="w-auto p-0"
                align="start"
                onCloseAutoFocus={handleCalendarClose}
              >
                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />
    </Form>
  );
}
