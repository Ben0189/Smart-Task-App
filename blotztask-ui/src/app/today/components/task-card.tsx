import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import TaskContent from './task-content';

const TaskCard = ({ task, handleCheckboxChange }) => {
  return (
    <div className="flex">
      <div className="flex justify-start items-center">
          <Checkbox
            onCheckedChange={() => handleCheckboxChange(task.id)}
            className="h-6 w-6 mr-6 rounded-full border-2 border-black"
          />
      </div>
      <TaskContent task={task} />
    </div>
  );
};

export default TaskCard;
