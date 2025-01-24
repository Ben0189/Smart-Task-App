'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { H1 } from '@/components/ui/heading-with-anchor';
import { fetchAllTaskItems, updateTaskStatus } from '@/services/taskService';
import { TaskListItemDTO } from '@/model/task-list-Item-dto';
import { TaskList } from './components/task-list';

export default function Page() {
  const [taskList, setTaskList] = useState<TaskListItemDTO[]>([]); // 改为 TaskDetailDTO

  const loadTasks = async () => {
    const data = await fetchAllTaskItems();
    setTaskList(data);
  };

  const handleTaskToggle = async (taskId: number) => {
    try {
      await updateTaskStatus(taskId);
      await loadTasks();
    } catch (error) {
      console.error('Failed to update task status:', error);
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

      <TaskList tasks={taskList} handleCheckboxChange={handleTaskToggle} />
    </div>
  );
}
