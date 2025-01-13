import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export function TaskCard({ tasks }) {
  return (
    <div className="flex flex-col mt-10 w-full">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <Card className="p-2 flex w-full border-none shadow-none">
            <div className="  mr-4 flex items-center ">
              <Checkbox className="rounded-full border-primary-dark w-6 h-6" />
            </div>
            <Separator orientation="vertical" className="w-1" />
            <div className="flex flex-col w-full">
              <div className="flex">
                <CardHeader className="flex items-start">
                  <CardTitle className="text-center ">
                    {task.title || 'NO Title'}
                  </CardTitle>
                </CardHeader>
              </div>
              <div>
                <CardDescription className="flex ml-3">
                  <div className="justify-start">
                    {task.description || 'NO Description'}
                  </div>
                  <div className="flex items-center justify-end ml-auto">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: task.label?.color }}
                    />
                    <p>{task.label?.name} </p>
                  </div>
                </CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
