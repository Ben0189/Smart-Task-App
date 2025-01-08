'use client';

import { LabelDTO } from '@/model/label-dto';

export interface TaskDTO {
  id: number;
  title: string;
  isDone: boolean;
  label: LabelDTO;
}
