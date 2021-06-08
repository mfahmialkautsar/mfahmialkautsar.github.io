import {Work} from '@/data/Work';

export interface Project extends Work {
  category: string;
  desc: string;
}
