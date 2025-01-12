import { H5 } from '@/components/ui/heading-with-anchor';
import TaskCard from './task-card';

export function ShowCompletedTask({ completedTasks, handleCheckboxChange }) {
  return (
    <div>
      <H5>Completed tasks</H5>
      <div className="grid gap-6 w-full">
        {completedTasks.length > 0 ? (
          <div className="grid gap-6 w-full">
            {completedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        ) : (
          <p>No completed tasks for today!</p>
        )}
      </div>
    </div>
  );
}
