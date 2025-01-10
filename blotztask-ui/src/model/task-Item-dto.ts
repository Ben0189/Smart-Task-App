import { LabelDTO } from './label-dto';

export interface TaskItemDTO {
  id: number;
  description: string;
  title: string;
  isDone: boolean;
  label: LabelDTO;
}
