import {Entity} from './entity.model'

export interface Social extends Entity {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  time?: string;
}
