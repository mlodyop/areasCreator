import { AreaConsts } from './area-consts';
import { BullseyeCreator } from './creators/bullseye-creator';
import { PolyCreator } from './creators/poly-creator';
import { Area } from './interfaces/area.interface';

export class AreasCreator {
  public createAreas(): Array<Area> {
    let areas = [];
    areas.push(
      new BullseyeCreator(50, AreaConsts.innerBullseyeRadiusRatio).create()
    );
    areas.push(
      new BullseyeCreator(25, AreaConsts.outerBullseyeRadiusRatio).create()
    );
    areas.push(
      ...new PolyCreator(
        AreaConsts.outerBullseyeRadiusRatio,
        AreaConsts.innerSingleRadiusRatio,
        1
      ).create()
    );
    areas.push(
      ...new PolyCreator(
        AreaConsts.innerSingleRadiusRatio,
        AreaConsts.trippleRadiusRatio,
        3
      ).create()
    );
    areas.push(
      ...new PolyCreator(
        AreaConsts.trippleRadiusRatio,
        AreaConsts.outerSingleRadiusRatio,
        1
      ).create()
    );
    areas.push(
      ...new PolyCreator(
        AreaConsts.outerSingleRadiusRatio,
        AreaConsts.doubleRadiusRatio,
        2
      ).create()
    );
    return areas;
  }
}
