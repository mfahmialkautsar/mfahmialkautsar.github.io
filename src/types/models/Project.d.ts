import {Creation} from '@/types/models/Creation';

export interface Project extends Creation {
  category: string;
  desc: string;
}
