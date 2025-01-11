import { Checkbox } from '@/components/ui/checkbox';
import React, { ReactNode } from 'react';

interface TaskCardProps<T> {
  taskId?: T;
  children: ReactNode;
  handleCheckboxChange?: (prop: T) => void;
}

const TaskCard = <T,>({
  taskId,
  children,
  handleCheckboxChange,
}: TaskCardProps<T>) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-start items-center">
        {handleCheckboxChange && taskId ? (
          <Checkbox
            onCheckedChange={() => handleCheckboxChange(taskId)}
            className="h-6 w-6 mr-6 rounded-full border-2 border-black"
          />
        ) : (
          <div className="w-6 h-6 mr-6 border border-gray-400 rounded-full border-dashed"></div>
        )}
      </div>
      {children}
    </div>
  );
};

export default TaskCard;
