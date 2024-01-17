import Point from "./Point";

export default class Arc {
  rx: number;
  ry: number;

  angle: number;
  largeArcFlag: number;
  sweepFlag: number;

  origin?: Point;
  dest: Point;

  constructor(
    radius: number, 
    destX: number, 
    destY: number,
    angle: number = 90,
    largeArcFlag: number = 0,
    sweepFlag: number = 1,
  ) {
    this.rx = radius;
    this.ry = radius;
    this.angle = angle;
    this.largeArcFlag = largeArcFlag;
    this.sweepFlag = sweepFlag;
    this.dest = new Point(destX, destY);
  }

  toString(): string {
    const definition: string[] = [];
    if (this.origin != undefined) {
      definition.push(`M ${this.origin.x},${this.origin.y}`);
    }

    definition.push("A");
    definition.push(`${this.rx}`);
    definition.push(`${this.ry}`);
    definition.push(`${this.angle}`);
    definition.push(`${this.largeArcFlag}`);
    definition.push(`${this.sweepFlag}`);
    definition.push(this.dest.toString());

    return definition.join(" ");
  }
}