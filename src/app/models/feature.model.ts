import {Entity} from './entity.model'

export interface Feature extends Entity {
  title?: string,
  description?: string,
  backgroundImage?: string,
  linkImage?: string,
  gif?: string,
  link?: string
}
