'use client';

import { useEffect, useState } from 'react';
import { fetchTaskItemsDueToday } from '@/services/taskService';
import { completeTaskForToday } from '@/services/taskService';
import TodayHeader from './components/today-header';
import TaskCard from './components/task-card';
import AddTaskCard from './components/add-task-card';
import { CompletedTaskViewer } from './components/completed-task-viewer';
import Divider from './components/divider';
import { TaskDetailDTO } from '@/app/dashboard/task-list/models/task-detail-dto';

export default function Today() {
  const [tasks, setTasks] = useState<TaskDetailDTO[]>([]); // Store all tasks here
  const [incompleteTasks, setIncompleteTasks] = useState<TaskDetailDTO[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskDetailDTO[]>([]);

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
      const doneTask = data.filter((task) => task.isDone);
      setCompletedTasks(doneTask);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleCheckboxChange = async (taskId: number) => {
    await completeTask(taskId);
    loadTasks();
  };

  const handleCompletedCheckboxChange = async (taskId: number) => {
    console.log('Uncompleting task:', taskId);
  };

  const completeTask = async (taskId: number) => {
    try {
      await completeTaskForToday(taskId);
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  // const uncompleteTask = async (taskId: number) => {
  //   // waiting to finish the implementation
  // };

  const handleAddTask = (taskTitle) => {
    console.log('Adding task:', taskTitle);
    // Implement add task logic here , going to api to add task
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <TodayHeader tasks={tasks} />
        <Divider text="To do" />
        <AddTaskCard onAddTask={handleAddTask} />
        <div className="flex flex-col gap-6 w-full">
          {incompleteTasks.length > 0 ? (
            incompleteTasks.map((task) => (
              <TaskCard key={task.id} task={task} handleCheckboxChange={handleCheckboxChange}></TaskCard>
            ))
          ) : (
            <p>No incomplete tasks for today!</p>
          )}
        </div>
        <Divider text="Done" />
        <CompletedTaskViewer
          completedTasks={completedTasks}
          handleCompletedCheckboxChange={handleCompletedCheckboxChange}
        />
      </div>
    </>
  );
}
