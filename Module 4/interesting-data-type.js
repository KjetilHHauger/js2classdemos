class Queue {
    #queueOfPeople = [];

    addToQueue(ticket) {
        // Add to the end of the array
            this.#queueOfPeople[this.#queueOfPeople.length]  = ticket;
    }
    nextInLine() {

        let nextInLine = this.#queueOfPeople[0];
        // Move the queue forward

        for (let i = 0; i<this.#queueOfPeople.length; i++) {
            this.#queueOfPeople[i] = this.#queueOfPeople[i+1]
        }

        // Return first in line
        return nextInLine;
    }
}

const UDIQueue = new Queue();

UDIQueue.addToQueue("A1");
UDIQueue.addToQueue("A2");
UDIQueue.addToQueue("A3");

console.log(UDIQueue.nextInLine());
console.log(UDIQueue.nextInLine());
console.log(UDIQueue.nextInLine());

class NumberPair {
    #numb1
    #numb2

    constructor(numb1,numb2) {
        this.#numb1 = numb1;
        this.#numb2 = numb2;
    }

    total() {
        return this.#numb1 + this.#numb2;
    }
}