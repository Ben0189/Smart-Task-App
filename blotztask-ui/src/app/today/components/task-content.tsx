import { TaskDetailDTO } from '../../task-list/models/task-detail-dto';
import DueDateTag from './due-date-tag';
import TaskSeparator from '../shared/task-separator';
import { Pencil, Trash2 } from 'lucide-react';

export default function TaskContent({ task }: { task: TaskDetailDTO }) {
  return (
    <div className="flex flex-row w-full bg-transparent group">
      <TaskSeparator color={task.label.color} />

      <div className="flex flex-col w-full bg-transparent px-6">
        <div className="flex flex-row justify-between w-full">
          <p className="font-bold">{task?.title}</p>
          <DueDateTag task={task} />
        </div>

        <div className="flex w-full text-sm text-gray-500 mt-2">
          <div className="flex flex-col w-full">
            <p>{task?.description}</p>
          </div>

          <div className="flex items-start ml-4 w-32 group-hover:hidden">
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: task.label.color || 'gray' }}
            ></div>
            <span className="ml-2 font-bold">{task.label?.name || 'No label name'}</span>
          </div>

          <div className="flex justify-end hidden ml-4 w-32 group-hover:flex">
            <button className="px-4">
              <Pencil className="text-primary" size={20} />
            </button>
            <button>
              <Trash2 className="text-primary" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
