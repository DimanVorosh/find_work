import api from './index';
import { WorksListRequest, WorksListResponse } from '../types/request.types';

export const worksApi = {
  getWorks: (data: WorksListRequest) => {
    return api.get<WorksListResponse>(`/shifts/map-list-unauthorized`, {
      params: {
        ...data,
      },
    });
  },
};
