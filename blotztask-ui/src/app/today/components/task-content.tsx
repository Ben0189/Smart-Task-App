import { TaskDetailDTO } from '../../task-list/models/task-detail-dto';
import DueDateTag from './due-date-tag';
import TaskSeparator from '../shared/task-separator';
import { Pencil, Trash2, CalendarDays, Tag } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import LabelGroup from '../shared/label-group';

export default function TaskContent({ task }: { task: TaskDetailDTO }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const handleEditState = () => setIsEditing(!isEditing);

  const handleCalendarClose = () => setShowCalendar(false);
  const handleLabelClose = () => setShowLabel(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full bg-transparent group">
        <TaskSeparator color={task.label.color} />

        <div className="flex flex-col w-full bg-transparent px-6">
          <div className="flex flex-row justify-between w-full">
            <p className="font-bold">{task?.title}</p>

            <DueDateTag task={task} />
          </div>

          <div className="flex w-full text-base text-gray-500 mt-2">
            <div className="flex flex-col w-full">
              <p>{task?.description}</p>
            </div>

            <div className="flex items-start ml-4 w-32 group-hover:hidden">
              {!isEditing && (
                <>
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: task.label.color || 'gray' }}
                  ></div>
                  <span className="ml-2 font-bold">{task.label?.name || 'No label name'}</span>
                </>
              )}
            </div>

            {!isEditing && (
              <div className="flex justify-end hidden ml-4 w-32 group-hover:flex">
                <button className="px-4" onClick={handleEditState}>
                  <Pencil className="text-primary" size={20} />
                </button>
                <button>
                  <Trash2 className="text-primary" size={20} />
                </button>
              </div>
            )}
          </div>

          {isEditing && (
            <div className="flex flex-row inline-block justify-between mt-4 mb-2">
              <div className="flex flex-row items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={`flex flex-row
                                items-center mr-4 bg-blue-100 rounded-full px-3 py-1 
                                ${showCalendar ? 'bg-primary text-white' : 'bg-gray-300 text-neutral-700'}`}
                      onClick={() => setShowCalendar((prev) => !prev)}
                    >
                      <CalendarDays className="mr-1" size={16} />
                      <span className="text-xs">{format(new Date(task.dueDate), 'MM/dd')}</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent onCloseAutoFocus={handleCalendarClose}>
                    <Calendar />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={`flex flex-row items-center 
                            rounded-full px-3 py-1 
                            ${showLabel ? 'bg-primary text-white' : 'bg-gray-300 text-neutral-700'}`}
                      onClick={() => setShowLabel((prev) => !prev)}
                    >
                      <Tag className="mr-1" size={16} />
                      <span className="text-xs">{task.label?.name || 'No label name'}</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent onCloseAutoFocus={handleLabelClose} className="w-32">
                    <LabelGroup />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-row ">
                <button
                  className="bg-neutral-300 rounded-lg px-3 py-2 text-xs text-gray-700 mx-2 w-20"
                  onClick={handleEditState}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary rounded-lg px-3 py-1 text-xs text-white w-20"
                  onClick={handleEditState}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
