import { AreaType } from '../enums/area-type.enum';
import { Point } from './point.interface';

export interface Area {
  type: AreaType;
  coordinates: Array<Point> | Point;
  radius?: number;
  baseScore: number;
  multiplier: number;
}
