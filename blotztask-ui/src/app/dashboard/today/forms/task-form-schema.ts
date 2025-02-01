import { z } from "zod";

export const taskFormSchema = z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(50, "Title cannot exceed 50 characters."),
    // description: z
    //   .string()
    //   .min(10, "Description must be at least 10 characters.")
    //   .max(200, "Description cannot exceed 200 characters."),
    // dueDate: z.date(),
    // label: z.string(),
  });