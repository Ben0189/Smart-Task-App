import { Checkbox } from '@/components/ui/checkbox';
import React, { useEffect, useRef, useState } from 'react';
import TaskContent from './task-content';
import { Calendar } from '@/components/ui/calendar';
import LabelGroup from '../shared/label-group';

const TaskCard = ({ task, handleCheckboxChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTaskTab, setTaskTab] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleShowTaskTab = () => {
    setTaskTab(!showTaskTab);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        handleShowCalendar();
      }

      if (labelRef.current && !labelRef.current.contains(event.target as Node)) {
        handleShowTaskTab();
      }
    };

    if (showCalendar || showTaskTab) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar, showTaskTab]);

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
        <div ref={calendarRef}>
          <Calendar
            className="border-2 rounded-2xl w-64"
            classNames={{ caption_label: 'bg-blue-100 rounded-md px-3 py-1' }}
          />
        </div>
      )}

      {showTaskTab && (
        <div ref={labelRef}>
          <LabelGroup />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
