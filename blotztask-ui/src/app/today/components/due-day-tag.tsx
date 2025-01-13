import { format } from 'node_modules/date-fns/format';
import { TaskDTO } from '../models/task-dto';

const DueDayTag = ({ task }: { task: TaskDTO }) => {
  return (
    <div
      className="flex items-center justify-center bg-gray-200 w-40 
                            text-xs text-gray-500 rounded-full"
    >
      Due day - {format(new Date(task.dueDate), 'MM/dd/yyyy')}
    </div>
  );
};

export default DueDayTag;
