import { TaskListItemDTO } from '@/model/task-list-Item-dto';
import React from 'react';

interface TodoListProps {
  tasks: TaskListItemDTO[];
}

const TaskList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <ul className="mt-8 list-disc">
      {tasks.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TaskList;
