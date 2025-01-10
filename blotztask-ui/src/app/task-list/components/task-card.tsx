import TaskCard from '@/app/today/components/task-card';

export function TaskList({ tasks, handleCheckboxChange }) {
  return (
    <div className="flex flex-col mt-10 w-full">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <TaskCard task={task} handleCheckboxChange={handleCheckboxChange}>
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center justify-center bg-gray-200 w-[155px] text-xs text-gray-500 rounded-full">
                <p className="text-center font-bold">
                  {' '}
                  Due day -{' '}
                  {new Date(task.dueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </TaskCard>
        </div>
      ))}
    </div>
  );
}
