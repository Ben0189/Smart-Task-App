import { TaskDetailDTO } from "@/app/task-list/models/task-detail-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
