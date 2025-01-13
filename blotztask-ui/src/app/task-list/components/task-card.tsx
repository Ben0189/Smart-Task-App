import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { TaskDetailDTO } from '../models/task-detail-dto';

interface TaskCardProps {
  tasks: TaskDetailDTO[]; // 改为 TaskDetailDTO
  onTaskToggle: (taskId: number, isDone: boolean) => void;
}

export function TaskCard({ tasks, onTaskToggle }: TaskCardProps) {
  const [checkedTasks, setCheckedTasks] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    tasks.forEach((task) => {
      initial[task.id] = task.isDone;
    });
    return initial;
  });

  const handleCheckboxChange = async (taskId: number, checked: boolean) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: checked }));
    await onTaskToggle(taskId, checked);
  };

  return (
    <div className="flex flex-col mt-10 w-full">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <Card className="p-2 flex w-full border-none shadow-none hover:bg-gray-50">
            <div className="mr-4 flex items-center">
              <Checkbox
                className="rounded-full border-primary-dark w-6 h-6"
                checked={checkedTasks[task.id]}
                onCheckedChange={(checked: boolean) => handleCheckboxChange(task.id, checked)}
                aria-label={`Toggle task ${task.title}`}
              />
            </div>
            <Separator orientation="vertical" className="w-1" />
            <div className="flex flex-col w-full">
              <div className="flex">
                <CardHeader className="flex items-start">
                  <CardTitle className="text-center">{task.title || 'NO Title'}</CardTitle>
                </CardHeader>
              </div>
              <div>
                <CardDescription className="flex ml-3">
                  <div className="justify-start">{task.description || 'NO Description'}</div>
                  <div className="flex items-center justify-end ml-auto">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: task.label?.color }} />
                    <p className="ml-2">{task.label?.name}</p>
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
