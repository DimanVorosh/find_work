import { WorkItem } from './work.types';

export type WorksListRequest = {
  longitude: number;
  latitude: number;
};

export type WorksListResponse = {
  data: WorkItem[];
};
