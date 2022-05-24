import {DoublyLinkedListADT} from './linkedListADT';

class Node<K, V> {
    public prev: Node<K, V> | null = null
    public next: Node<K, V> | null = null
    constructor(
        public key: K,
        public value: V
    ) {}
}

export class DoublyLinkedList<K,V> implements DoublyLinkedListADT<K,V> {
    public head: Node<K, V> | null = null
    public tall: Node<K, V> | null = null

    isEmpty(): boolean {
        if (this.head === null) return true
        return false
    }

    size(): number {
        if (this.isEmpty()) return 0
        let count: number = 0
        let currNode = this.head
        while (currNode?.next != null) {
            count++
            currNode = currNode.next
        }
        return count
    }

    contains(key: K): boolean {
        if (this.isEmpty()) return false
        let currNode = this.head
        while (currNode != null) {
            if (currNode.key == key) return true
            currNode = currNode.next
        }
        return true
    }

    add(key: K, value: V): void {
        if (this.contains(key)) {
            let currNode = this.head
            while (currNode != null) {
                if (currNode.key == key) {
                    currNode.value = value
                    return
                }
                currNode = currNode.next
            }
        }
        const newNode: Node<K, V> = new Node(key, value)
        if (this.isEmpty()) {
            this.head = this.tall = newNode
        } else {
            //@ts-ignore
            this.tall.next = newNode
            newNode.prev = this.tall
            this.tall = newNode
        }
    }

    remove(key: K): V | undefined {
        if (this.isEmpty()) return
        let currNode = this.head
        while (currNode !== null) {
            if (this.head == this.tall && currNode.key == key) {
                const tmp = currNode.value
                this.head = this.tall = null
                return tmp
            }
            if (currNode.key == key && currNode == this.head) {
                const tmp = currNode.value
                //@ts-ignore
                currNode.next.prev = null
                this.head = currNode.next
                return tmp
            } else if (currNode.key == key && currNode == this.tall) {
                const tmp = currNode.value
                //@ts-ignore
                currNode.prev.next = null
                this.tall = currNode.prev
                return tmp
            } else if (currNode.key == key) {
                const tmp = currNode.value
                //@ts-ignore
                currNode.next.prev = currNode.prev
                //@ts-ignore
                currNode.prev.next = currNode.next
                return tmp
            }
            currNode = currNode.next
        }
    }
}