import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z.string(), // Simple string without validation rules
});

const AddTaskForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema), 
    defaultValues: {
      title: "",
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data.title); // Pass task title to parent
    reset(); 
  };

  return (
    <form
      className="flex flex-col space-y-2"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <input
        type="text"
        className="border p-2 rounded-md border-gray-300"
        placeholder="Enter task title"
        {...register("title")} // React Hook Form integration
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
