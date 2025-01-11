'use client';

import { useEffect, useState } from 'react';
import { fetchTaskItemsDueToday } from '@/services/taskService';
import { completeTaskForToday } from '@/services/taskService';
import TodayHeader from './components/today-header';
import TaskCard from './components/task-card';
import { TaskDTO } from './schema/schema';
import AddTaskCard from './components/add-task-card';
import TaskContent from './components/task-content';

export default function Today() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]); // Store all tasks here
  const [incompleteTasks, setIncompleteTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await fetchTaskItemsDueToday();
      setTasks(data);
      // Filter tasks to only include those where isDone is false
      const notDoneTasks = data.filter((task) => !task.isDone);
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
        <TaskCard>
          <AddTaskCard onAddTask={handleAddTask} />
        </TaskCard>
        <div className="grid gap-6 w-full">
          {incompleteTasks.length > 0 ? (
            incompleteTasks.map((task) => (
              <TaskCard
                key={task.id}
                taskId={task.id}
                handleCheckboxChange={handleCheckboxChange}
              >
                <TaskContent task={task} />
              </TaskCard>
            ))
          ) : (
            <p>No incomplete tasks for today!</p>
          )}
        </div>
      </div>
    </>
  );
}
