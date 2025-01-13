'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { H1 } from '@/components/ui/heading-with-anchor';
import { TaskCard } from './components/task-card';

import { fetchAllTaskItems, updateTaskStatus } from '@/services/taskService';
import { TaskListItemDTO } from '@/model/task-list-Item-dto';
import { TaskDetailDTO } from '../models/task-detail-dto';

export default function Page() {
  const [taskList, setTaskList] = useState<TaskListItemDTO[]>([]);

  const loadTasks = async () => {
    const data = await fetchAllTaskItems();
    setTaskList(data);
  };

  const handleTaskToggle = async (taskId: number, isDone: boolean) => {
    try {
      await updateTaskStatus(taskId, isDone);
      // 更新本地状态
      setTaskList((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, isDone } : task)));
    } catch (error) {
      console.error('Failed to update task status:', error);
      // 可以在这里添加错误处理，比如显示一个错误提示
    }
  };
  /**
   * Fetch the tasks once and set the hook on the first rendering
   */
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="flex flex-col items-end mt-5">
      <div className="text-primary-dark flex w-full justify-between">
        <H1>All Tasks</H1>
      </div>

      <TaskCard tasks={taskList as TaskDetailDTO[]} onTaskToggle={handleTaskToggle} />
    </div>
  );
}
