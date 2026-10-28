import { LinkedList } from "./index.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

const testList = new LinkedList();
testList.insertAt(0, 10, 11);

console.log(testList.toString());

const middleList = new LinkedList();
middleList.append(1);
middleList.append(2);
middleList.append(3);

middleList.insertAt(1, 10, 11);

console.log(middleList.toString());

const endList = new LinkedList();
endList.append(1);
endList.append(2);
endList.append(3);

endList.insertAt(endList.size(), 10, 11);

console.log(endList.toString());

const errorList = new LinkedList();

errorList.append(1);
errorList.append(2);
errorList.append(3);

console.log("\nInvalid index tests:");

try {
  errorList.insertAt(-1, 10);
} catch (error) {
  console.log(error.name, "-", error.message);
}

try {
  errorList.insertAt(errorList.size() + 1, 10);
} catch (error) {
  console.log(error.name, "-", error.message);
}
