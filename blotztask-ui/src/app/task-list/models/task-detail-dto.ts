'use client';

import { LabelDTO } from '@/model/label-dto';

export interface TaskDetailDTO {
  id: number;
  description: string;
  title: string;
  isDone: boolean;
  label: LabelDTO;
  dueDate: Date;
}
