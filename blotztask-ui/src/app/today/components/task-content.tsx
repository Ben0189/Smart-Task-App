import { TaskDTO } from '../schema/schema';
import { format } from 'date-fns';
import DueDayTag from './due-day-tag';

export default function TaskContent({ task }: { task: TaskDTO }) {
  return (
    <div className="flex flex-col w-full bg-transparent px-6 border-l-4 border-primary">
      <div className="flex flex-row justify-between w-full">
        <p className="font-bold">{task?.title}</p>
        <DueDayTag task={task} />
      </div>

      <div className="flex w-full text-sm text-gray-500 mt-2">
        <div className="flex flex-col w-full">
          <p>{task?.description}</p>
        </div>

        <div className="flex items-start ml-4 w-32">
          <div
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: task.label.color || 'gray' }}
          ></div>
          <span className="ml-2 font-bold">
            {task.label?.name || 'No label name'}
          </span>
        </div>
      </div>
    </div>
  );
}
