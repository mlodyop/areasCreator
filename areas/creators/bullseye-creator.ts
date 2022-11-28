import { AreaConsts } from '../area-consts';
import { AreaType } from '../enums/area-type.enum';
import { Area } from '../interfaces/area.interface';

export class BullseyeCreator {
  constructor(private score: number, private radiusRatio: number) {}

  create(): Area {
    return {
      type: AreaType.Circle,
      baseScore: this.score,
      multiplier: 1,
      coordinates: {
        x: AreaConsts.imageWidth / 2,
        y: AreaConsts.imageWidth / 2,
      },
      radius: AreaConsts.imageWidth * this.radiusRatio,
    } as Area;
  }
}
