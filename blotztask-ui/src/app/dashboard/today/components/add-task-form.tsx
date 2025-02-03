import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/task-card-input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
// import { LabelSelect } from '../shared/label-select';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  // description: z.string().optional(),
  // date: z.date(),
});

type FormField = z.infer<typeof taskSchema>;

const AddTaskForm = () => {
  const form = useForm<FormField>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      // description: '',
      // date: undefined,
    },
  });

  const handleAddTask: SubmitHandler<FormField> = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <Form {...form}>
      <form 
        className="flex flex-col w-full space-y-2"
        onSubmit={form.handleSubmit(handleAddTask)}
      >
        <div className="flex flex-col w-full">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter task title" className="font-bold text-base" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Textarea placeholder="Fill in the detailed information" className="w-full" />
        </div>
        <div className="flex items-center">
          {/* <CalendarForm>
              <span>Add Date</span>
            </CalendarForm> */}

          {/* <LabelSelect></LabelSelect> */}
        </div>
        <button type="submit">Test Submit</button>
      </form>  
    </Form>
  );
};

export default AddTaskForm;
