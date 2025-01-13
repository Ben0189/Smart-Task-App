import { TaskDetailDTO } from "@/app/today/models/task-detail-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
