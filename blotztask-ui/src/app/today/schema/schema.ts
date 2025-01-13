'use client';

import { LabelDTO } from '@/model/label-dto';

export interface TaskDTO {
  id: number;
  description: string;
  title: string;
  isDone: boolean;
  label: LabelDTO;
}
