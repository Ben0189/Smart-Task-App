import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import TaskContent from './task-content';

const TaskCard = ({ task, handleCheckboxChange }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-start items-center">
          <Checkbox
            onCheckedChange={() => handleCheckboxChange(task.id)}
            className="h-6 w-6 mr-6 rounded-full border-2 border-black"
          />
          {/* <div className="w-6 h-6 mr-6 border border-gray-400 rounded-full border-dashed"></div> */}
      </div>
      <TaskContent task={task} />
    </div>
  );
};

export default TaskCard;
