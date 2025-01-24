import { TaskDetailDTO } from "@/app/dashboard/task-list/models/task-detail-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
