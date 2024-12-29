'use client';

import { useEffect, useState } from 'react';
import { fetchTaskItemsDueToday } from '@/services/taskService';
import { completeTaskForToday } from '@/services/taskService';
import TodayHeader from './components/today-header';
import TaskCard from './components/task-card';
import { TaskDTO } from './schema/schema';


export default function Today() {
  const [incompleteTasks, setIncompleteTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    loadIncompleteTasks();
  }, []);

  const loadIncompleteTasks = async () => {
    try {
      const data = await fetchTaskItemsDueToday();
      // Filter tasks to only include those where isDone is false
      const notDoneTasks = data.filter((task) => !task.isDone);
      setIncompleteTasks(notDoneTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleCheckboxChange = async (taskId: number) => {
    await completeTask(taskId);
    loadIncompleteTasks();
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
        <TodayHeader />
        <AddTaskCard onAddTask={handleAddTask}/>
        <div className="grid gap-6 w-full">
          {incompleteTasks.length > 0 ? (
            <div className="grid gap-6 w-full">
              {incompleteTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          ) : (
            <p>No incomplete tasks for today!</p>
          )}
        </div>
      </div>
    </>
  );
}
