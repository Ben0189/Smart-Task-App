import { TaskDetailDTO } from "@/model/task-detail-dto";

export type TaskListItemDTO = Pick<TaskDetailDTO, 'id' | 'title' | 'isDone'>;
