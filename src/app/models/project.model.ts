import {Entity} from './entity.model';

export interface Project extends Entity {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  site?: string;
  time?: string;
}
