import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export function TaskCard({ tasks, handleCheckboxChange }) {
  return (
    <div className="flex flex-col mt-10 w-full">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <div className="flex flex-row justify-start items-center space-x-4">
            <Checkbox
              onCheckedChange={() => handleCheckboxChange(task.id)}
              className="h-6 w-6 mr-6 rounded-full border-2 border-black"
            />
          </div>

          <div
            className="flex flex-col w-full
                     bg-transparent
                     ml-8 px-6
                     border-l-4 border-primary"
          >
            <div>
              <p className="font-bold">{task.title}</p>
            </div>

            <div className="flex flex-row w-full text-sm text-gray-500 mt-2">
              <div className="flex flex-col w-full">
                <p>{task.description}</p>
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
      ))}
    </div>
  );
}
