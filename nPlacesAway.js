// Write a method or a function that finds an element in a linked
// list, that is n places away from the end of the list, ideally with
// just one pass through the list

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  addNode(node) {
    if (!this.first && !this.last) {
      this.first = node;
      this.last = node;

      return;
    }

    this.last.next = node;
    this.last = node;
  }

  printList() {
    let temp = this.first;

    while (temp !== null) {
      if (temp.next === null) {
        process.stdout.write(`${temp.value} -> NULL \n`);
      } else {
        process.stdout.write(`${temp.value} -> `);
      }

      temp = temp.next;
    }
  }

  nPlacesAway(n) {
    let temp = this.first;

    // Loop through the list
    while (temp !== null) {
      // Check first n positions
      // on each new element
      let helpTemp = temp.next;

      for (let i = 0; i < n; i++) {
        // If next value is null and we looped
        // exactly n - 1 times then we found
        // our element
        if (helpTemp.next === null && i === n - 1) {
          return temp;
        }

        helpTemp = helpTemp.next;
      }

      temp = temp.next;
    }
  }
}

class Node {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();

list.addNode(new Node("A", 1));
list.addNode(new Node("B", 2));
list.addNode(new Node("C", 3));
list.addNode(new Node("D", 4));
list.addNode(new Node("E", 5));
list.addNode(new Node("F", 6));
list.addNode(new Node("G", 7));
list.addNode(new Node("H", 8));
list.addNode(new Node("I", 9));
list.addNode(new Node("J", 10));

list.printList();

const nth = list.nPlacesAway(3);

console.log({ nth });
