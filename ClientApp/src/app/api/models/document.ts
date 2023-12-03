/* tslint:disable */
/* eslint-disable */
import { ActionAccess } from '../models/action-access';
export interface Document {
  id?: number;
  name?: string | null;
  path?: string | null;
  rules?: Array<ActionAccess> | null;
}
