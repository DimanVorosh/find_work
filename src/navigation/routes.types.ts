import { WorkItem } from '../types/work.types';
import { ROUTES } from './routes';

export type AppStackNavigationType = {
  [ROUTES.WORKS_LIST]: undefined;
  [ROUTES.WORKS_ITEM]: {
    item: WorkItem;
  };
};
