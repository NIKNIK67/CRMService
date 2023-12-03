/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface AnnoucementObject {
  autorUser?: User;
  content?: string | null;
  creationDate?: string;
  header?: string | null;
  id?: number;
}
