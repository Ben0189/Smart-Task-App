import { TaskDetailDTO } from '@/app/today/models/task-detail-dto';
import { TaskListItemDTO } from '@/model/task-list-Item-dto';
import { fetchWithAuth } from '@/utils/fetch-with-auth';
import { AddTaskTtemDTO } from '@/model/add-task-item-dto';

export const fetchAllTaskItems = async (): Promise<TaskListItemDTO[]> => {
  const result = await fetchWithAuth<TaskListItemDTO[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/alltask`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return result;
};

export const fetchTaskItemsDueToday = async (): Promise<TaskDetailDTO[]> => {
  //Converting today's date to ISO String format
  const date = new Date().toISOString().split('T')[0];

  const result = await fetchWithAuth<TaskDetailDTO[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/due-date/${date}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return result;
};

export const completeTaskForToday = async (taskId: number): Promise<string> => {
  try {
    const result = await fetchWithAuth<string>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/CompleteTask/${taskId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return result;
  } catch (error) {
    console.error('Error completing task:', error);
    return 'Error completing task.';
  }
};

export const AddTaskItem = async (addTaskForm: AddTaskTtemDTO): Promise<AddTaskTtemDTO> => {
  const result = await fetchWithAuth<AddTaskTtemDTO>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task`,
    {
      method: 'POST',
      body: JSON.stringify(addTaskForm),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return result;
};
