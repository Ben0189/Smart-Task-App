import { TaskDTO } from '../models/task-dto';
import DueDayTag from './due-day-tag';
import TaskSeparator from '../shared/task-separator';

export default function TaskContent({ task }: { task: TaskDTO }) {
  return (
    <div className="flex flex-row w-full bg-transparent">
      <TaskSeparator color={task.label.color} />

      <div className="flex flex-col w-full bg-transparent px-6">
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
    </div>
  );
}
