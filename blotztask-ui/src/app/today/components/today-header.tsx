import { H1, H5 } from '@/components/ui/heading-with-anchor';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { TaskDTO } from '../schema/schema';

type TodayHeaderProps = {
  tasks: TaskDTO[]; // All tasks
};

const TodayHeader: React.FC<TodayHeaderProps> = ({ tasks }) => {
  const total = tasks.length; // Total number of tasks
  const completed = tasks.filter((task) => task.isDone).length; // Number of completed tasks
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
