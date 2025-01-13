import { TaskDetailDTO } from "@/app/today/models/task-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
