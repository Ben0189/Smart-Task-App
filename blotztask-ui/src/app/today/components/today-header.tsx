import { H1, H5 } from '@/components/ui/heading-with-anchor';
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { fetchTaskItemsDueToday } from '@/services/taskService';

const TodayHeader = () => {
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await fetchTaskItemsDueToday();
        // Calculate total tasks and completed tasks
        setTotal(tasks.length); // Total number of tasks
        setCompleted(tasks.filter((task) => task.isDone).length); // Number of completed tasks
      } catch (error) {
        console.error("Error fetching today's tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const progressValue = total > 0 ? (completed / total) * 100 : 0; // Avoid division by zero

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <H1 className="heading-primary flex items-center">
          Day<span className="heading-secondary">View</span>
        </H1>
        <div className="flex items-center gap-2">
          {/* Label for progress bar */}
          <span className="text-sm font-medium">Completed</span>
          <Progress value={progressValue} className="w-[200px]" />
          {/* Label for task progress */}
          <span className="text-gray-500 text-sm font-medium">
            {completed} / {total}
          </span>
        </div>
      </div>
      <H5>List of today&apos;s tasks</H5>
    </div>
  );
};

export default TodayHeader;
