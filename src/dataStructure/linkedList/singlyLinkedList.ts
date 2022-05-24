import {LinkedListADT} from './linkedListADT';

class Node<T> {
    constructor (
        public data: T,
        public next: Node<T> | null = null
    ) {}
}

export class SingleLinkedList<T> implements LinkedListADT<T> {
    private head: Node<T> | null = null;

    isEmpty(): boolean {
        if (this.head == null) return true
        return false
    }

    size(): number {
        let count: number = 0;
        let currNode: Node<T> | null = this.head;
        while (currNode !== null) {
            count++
            currNode = currNode.next;
        }
        return count
    }

    add(value: T): void {
        const newNode = new Node<T>(value);

        if (this.head == null) {
            this.head = newNode
        } else {
            let currNode: Node<T> | null = this.head
            while (currNode.next != null) {
                currNode = currNode.next
            }
            currNode.next = newNode
        }
    }

    remove(value: T): T | undefined {
        if (this.size() == 0) return 
        let prevNode: Node<T> | null = null
        let currNode: Node<T> | null = this.head

        if (currNode != null && currNode.data == value) {
            this.head = currNode.next
        }

        while (currNode && currNode.data !== value) {
            prevNode = currNode
            currNode = currNode.next
        }
        if (currNode == null) return 
        else {
            const temp: T = currNode.data
            //@ts-ignore
            prevNode.next = currNode.next
            return temp
        }
        
    }

}