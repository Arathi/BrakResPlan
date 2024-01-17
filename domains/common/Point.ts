export default class Point {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `${this.x},${this.y}`;
  }
};

export class Points {
  points: Point[] = [];

  add(x: number, y: number) {
    this.points.push(new Point(x, y));
  }

  toString(): string {
    return this.points.map(p => p.toString()).join(" ");
  }
}
