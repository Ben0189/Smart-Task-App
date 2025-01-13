import { H1, H5 } from '@/components/ui/heading-with-anchor';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { TaskDetailDTO } from '../models/task-detail-dto';
import { format } from 'date-fns';

type TodayHeaderProps = {
  tasks: TaskDetailDTO[]; // All tasks
};

const TodayHeader: React.FC<TodayHeaderProps> = ({ tasks }) => {
  const total = tasks.length; // Total number of tasks
  const completed = tasks.filter((task) => task.isDone).length; // Number of completed tasks
  const progressValue = total > 0 ? (completed / total) * 100 : 0; // Avoid division by zero
  const todayDate = format(new Date(), 'EEEE, d MMMM');

  return (
    <div className="flex flex-col gap-5">
      <H1 className="text-primary-dark flex items-center">Today</H1>
      <div className="flex justify-between items-center">
        <H5 className="text-gray-500 text-sm">{todayDate}</H5>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Completed</span>
          <Progress value={progressValue} className="w-[200px]" />
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
