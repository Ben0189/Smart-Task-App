import { Separator } from '@/components/ui/separator';
import { TaskDetailDTO } from '../../task-list/models/task-detail-dto';
import DueDateTag from './due-date-tag';

export default function TaskContent({ task }: { task: TaskDetailDTO }) {
  return (
    <div className="flex flex-row w-full bg-transparent">
      <Separator
        orientation="vertical"
        decorative={true}
        className="w-[4px]"
        style={{ backgroundColor: task.label.color || 'gray' }}
      />

      <div className="flex flex-col w-full bg-transparent px-6">
        <div className="flex flex-row justify-between w-full">
          <p className="font-bold">{task?.title}</p>
          <DueDateTag task={task} />
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
            <span className="ml-2 font-bold">{task.label?.name || 'No label name'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
