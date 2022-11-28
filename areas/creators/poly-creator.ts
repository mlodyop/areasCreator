import { AreaConsts } from '../area-consts';
import { AreaType } from '../enums/area-type.enum';
import { Area } from '../interfaces/area.interface';
import { Point } from '../interfaces/point.interface';

export class PolyCreator {
  private readonly angle = (Math.PI * 2) / 20;
  private readonly midPoints = 1;
  constructor(
    private innerRatio: number,
    private outerRatio: number,
    private multiplier
  ) {}

  create(): Array<Area> {
    let result = [];
    for (var i = 0; i < AreaConsts.scores.length; i++) {
      let startAngle = this.angle * i - this.angle / 2;
      result.push(this.createArea(startAngle, AreaConsts.scores[i]));
    }
    return result;
  }

  createArea(startAngle: number, score: number): Area {
    let split = this.midPoints + 1;

    let coordinates = [];

    for (var i = 0; i <= split; i++) {
      coordinates.push(
        this.getPoint(
          startAngle + (1.0 * i * this.angle) / split,
          this.outerRatio
        )
      );
    }
    for (var i = split; i >= split; i--) {
      coordinates.push(
        this.getPoint(
          startAngle + (1.0 * i * this.angle) / split,
          this.innerRatio
        )
      );
    }

    return {
      coordinates: coordinates,
      baseScore: score,
      multiplier: this.multiplier,
      type: AreaType.Poly,
    };
  }

  getPoint(angle: number, radiusRatio: number): Point {
    return {
      x:
        AreaConsts.imageWidth * radiusRatio * Math.sin(angle) +
        AreaConsts.imageWidth / 2,
      y: -(
        AreaConsts.imageWidth * radiusRatio * Math.cos(angle) -
        AreaConsts.imageWidth / 2
      ),
    };
  }
}
