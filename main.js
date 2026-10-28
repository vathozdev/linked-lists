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

const removeErrorList = new LinkedList();
removeErrorList.append(1);
removeErrorList.append(2);

try {
  removeErrorList.removeAt(-1);
} catch (error) {
  console.log("Negative index:", error.name);
}

try {
  removeErrorList.removeAt(removeErrorList.size());
} catch (error) {
  console.log("Index equal to size:", error.name);
}

const headList = new LinkedList();
headList.append(1);
headList.append(2);
headList.append(3);
headList.removeAt(0);
console.log("Remove head:", headList.toString());

const removeMiddleList = new LinkedList();
removeMiddleList.append(1);
removeMiddleList.append(2);
removeMiddleList.append(3);
removeMiddleList.removeAt(1);
console.log("Remove middle:", removeMiddleList.toString());

const lastList = new LinkedList();
lastList.append(1);
lastList.append(2);
lastList.append(3);
lastList.removeAt(lastList.size() - 1);
console.log("Remove last:", lastList.toString());
