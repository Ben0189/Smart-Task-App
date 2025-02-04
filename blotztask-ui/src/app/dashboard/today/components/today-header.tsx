import { H1 }  from '@/components/ui/heading-with-anchor';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { format } from 'date-fns';
import { TaskDetailDTO } from '@/app/dashboard/task-list/models/task-detail-dto';

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
      <div className='flex justify-between item-start'>

      <div className="flex items-center gap-2">
        <H1 className="text-primary-dark text-5xl font-bold">Today</H1>
        <span className="text-lg text-gray-800 mt-8">{todayDate}</span>
      </div>

      <div className="flex flex-col items-end justify-center mt-8">
          <div className="flex items-center gap-2 ">
          <span className="text-sm font-medium ">Completed</span>     
          <Progress value={progressValue} className="w-[200px]" />
          <span className="text-gray-500 text-sm font-medium">
            {completed} / {total}
           </span>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default TodayHeader;
