import api from './index';
import { WorksListRequest } from '../types/request.types';
import { WorkItem } from '../types/work.types';

export const worksApi = {
  getWorks: (data: WorksListRequest) => {
    return api.get<WorkItem[]>(`/shifts/map-list-unauthorized`, {
      params: {
        ...data,
      },
    });
  },
};
