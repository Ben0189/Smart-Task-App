import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';
import TaskContent from './task-content';
import { Calendar } from '@/components/ui/calendar';
import LabelGroup from '../shared/label-group';

const TaskCard = ({ task, handleCheckboxChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTaskTab, setTaskTab] = useState(false);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleShowTaskTab = () => {
    setTaskTab(!showTaskTab);
  };

  return (
    <div>
      <div className="flex w-full">
        <div className="flex justify-start items-center">
          <Checkbox
            checked={task.isDone}
            onCheckedChange={() => handleCheckboxChange(task.id)}
            className="h-6 w-6 mr-6 rounded-full border-2 border-black"
          />
        </div>
        <TaskContent
          task={task}
          onShowCalendar={handleShowCalendar}
          showCalendar={showCalendar}
          onShowTaskTabs={handleShowTaskTab}
          showTaskTab={showTaskTab}
        />
      </div>
      {showCalendar && (
        <div>
          <Calendar
            className="border-2 rounded-2xl w-64"
            classNames={{ caption_label: 'bg-blue-100 rounded-md px-3 py-1' }}
          />
        </div>
      )}

      {showTaskTab && (
        <div>
          <LabelGroup />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
