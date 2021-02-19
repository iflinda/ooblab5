import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;
  }

  data: string;

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
  }

  swap(left: number, right: number): void {
    let sort = this.data.split("");
    let temp = sort[left];
    sort[left] = sort[right];
    sort[right] = temp;
    this.data = sort.join("")
  }
}