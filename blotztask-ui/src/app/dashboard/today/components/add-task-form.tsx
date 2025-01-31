import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/task-card-input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarForm } from '../shared/calendar-form';
import { LabelSelect } from '../shared/label-select';

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
      <div className="flex items-center">
        <CalendarForm></CalendarForm>
        <LabelSelect></LabelSelect>
      </div>
    </form>
  );
};

export default AddTaskForm;
