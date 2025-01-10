'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { fetchTaskItemsDueToday } from '@/services/taskService';
import { completeTaskForToday } from '@/services/taskService';
import TodayHeader from './components/today-header';
import TaskCard from './components/task-card';
import AddTaskCard from './components/add-task-card';
import TodoDivider from './components/todo-divider';
import DoneDivider from './components/done-divider';

export default function Today() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]); // Store all tasks here
  const [incompleteTasks, setIncompleteTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await fetchTaskItemsDueToday();
      const validatedTasks = z.array(taskDTOSchema).parse(data);
      setTasks(validatedTasks);
      const notDoneTasks = validatedTasks.filter((task) => !task.isDone);
      setIncompleteTasks(notDoneTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleCheckboxChange = async (taskId: number) => {
    await completeTask(taskId);
    loadTasks();
  };

  const completeTask = async (taskId: number) => {
    try {
      await completeTaskForToday(taskId);
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleAddTask = (taskTitle) => {
    console.log('Adding task:', taskTitle);
    // Implement add task logic here , going to api to add task
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <TodayHeader tasks={tasks} />
        <TodoDivider />
        <AddTaskCard onAddTask={handleAddTask} />
        <div className="grid gap-6 w-full">
          {incompleteTasks.length > 0 ? (
            <>
              <div className="grid gap-6 w-full">
                {incompleteTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>No incomplete tasks for today!</p>
          )}
        </div>
        <DoneDivider/>
      </div>
    </>
  );
}
