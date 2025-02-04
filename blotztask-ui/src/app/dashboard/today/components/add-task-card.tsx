import React, { useState, useRef, useEffect } from 'react';
import AddTaskForm from './add-task-form';
import { PlusIcon } from '@radix-ui/react-icons';
import useClickOutside from '@/utils/use-multiple-click-away';

const AddTaskCard = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const labelPickerRef = useRef<HTMLDivElement>(null);

  const handleCancelForm = () => {
    setIsFormVisible(false);
  };

  useClickOutside([cardRef, datePickerRef, labelPickerRef], () => {
    setIsFormVisible(false);
  });

  return (
    <div className="flex w-full items-center gap-4" ref={cardRef}>
      <div className="w-6 h-6 border border-gray-400 rounded-full border-dashed"></div>
      <div className="ml-3 w-1 bg-gray-400 rounded"></div>
      <div className="flex w-full items-center gap-2 cursor-pointer">
        {!isFormVisible ? (
          <div className="flex flex-row" onClick={() => setIsFormVisible(true)}>
            <PlusIcon className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold text-lg">Add a task</span>
          </div>
        ) : (
          <AddTaskForm
            datePickerRef={datePickerRef}
            labelPickerRef={labelPickerRef}
            onCancel={handleCancelForm}
          />
        )}
      </div>
    </div>
  );
};

export default AddTaskCard;
