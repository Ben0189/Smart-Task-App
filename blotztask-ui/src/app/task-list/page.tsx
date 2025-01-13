'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { H1 } from '@/components/ui/heading-with-anchor';
import { TaskCard } from './components/task-card';

import { fetchAllTaskItems } from '@/services/taskService';
import { TaskListItemDTO } from '@/model/task-list-Item-dto';

export default function Page() {
  const [taskList, setTaskList] = useState<TaskItemDTO[]>([]);

  const loadTasks = async () => {
    const data = await fetchAllTaskItems();
    setTaskList(data);
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

      <TaskCard tasks={taskList} />
    </div>
  );
}
