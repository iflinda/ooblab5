import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[];

  get length(): number {
    return this.data.length;
  };

  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos] > this.data[rightPos];
  }

  swap(left: number, right: number): void {
    let temp = this.data[left]
    this.data[left] = this.data[right];
    this.data[right] = temp;
  }
}
