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

          <Card
            className="w-full"
            style={{ backgroundColor: task.label.color }}
          >
            <CardHeader className="flex-row ml-5 ">
              <div>
                <Separator className="bg-gray-500" orientation="vertical" />
              </div>
              <div className="flex flex-col space-y-1 p-2">
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>
                  {task?.description || 'NO Description'}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
