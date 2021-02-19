import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";
import { SortUtil } from "./SortUtil";

const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sort1 = new SortUtil(numberGroup);
sort1.sort();
console.log(numberGroup.data);
console.log("-------------------------");

const characterGroup = new CharacterGroup("Xaeyb");
const sort2 = new SortUtil(characterGroup);
sort2.sort();
console.log(characterGroup.data);
console.log("-------------------------");

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new SortUtil(linkedListGroup);
linkedListGroup.length;
sorter3.sort();
linkedListGroup.print();