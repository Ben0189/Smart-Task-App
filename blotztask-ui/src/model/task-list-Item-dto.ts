import { TaskDetailDTO } from "@/app/today/models/task-details-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
