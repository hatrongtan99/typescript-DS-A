import {HashTableADT} from './hashTableADT';
import {DoublyLinkedList} from '../linkedList/doublyLinkedList';
interface KeyType {
    toString(): string
}
export class HashTableSeparateChaining<K, V> implements HashTableADT<K, V> {
    private DEFAULT_CAPACITY: number = 10
    private DEFAULT_LOAD_FACTOR: number = 0.6
    
    private nuberBuckets: number = 0
    private capacity: number
    private table: DoublyLinkedList<K, V>[]
    private threshold: number
    
    constructor (
        capacity?: number
    ) {
        // @ts-ignore
        this.capacity = capacity || this.DEFAULT_CAPACITY;
        this.table = new Array(this.capacity);
        this.threshold = this.capacity * this.DEFAULT_LOAD_FACTOR
    }

    private hashFunction<K extends KeyType>(key: K): number {
        const keyString = key.toString()
        let numHash = 0
        for (let i = 0; i < keyString.length; i++) {
            numHash += keyString.charCodeAt(i)
        }
        return numHash % this.capacity
    }

    private resizeTable(): void {
        this.capacity *= 2
        this.threshold = this.capacity * this.DEFAULT_LOAD_FACTOR
        const newTable: DoublyLinkedList<K, V>[] = new Array(this.capacity)

        for (let i = 0; this.table.length; i++) {
            if (this.table[i] == null) continue

            let currNode = this.table[i].head

            while (currNode != null) {
                const bucketIndex = this.hashFunction(currNode.key)
                let bucket = this.table[bucketIndex]
                const doublyLinkedListADT: DoublyLinkedList<K,V> = new DoublyLinkedList()
                if (bucket == null || bucket.isEmpty()) {
                    bucket = this.table[bucketIndex] = doublyLinkedListADT
                    this.nuberBuckets++
                } else {
                    bucket.add(currNode.key, currNode.value)
                }
                currNode = currNode.next
            }
        }

        this.table = newTable
    }

    isEmpty(): boolean {
        return this.nuberBuckets == 0
    }

    size(): number {
        return this.nuberBuckets
    }

    insert(key: K, value: V): void {
        const bucketIndex = this.hashFunction(key)
        let bucket = this.table[bucketIndex]
        const doublyLinkedListADT: DoublyLinkedList<K,V> = new DoublyLinkedList()
        if (bucket == null || bucket.isEmpty()) {
            bucket = this.table[bucketIndex] = doublyLinkedListADT
            bucket.add(key, value)
            this.nuberBuckets++
        } else {
            bucket.add(key, value)
        }

        if (this.nuberBuckets == this.threshold) this.resizeTable()
    }

    remove(key: K): V | undefined {
        if (this.isEmpty()) return
        const bucketIndex = this.hashFunction(key)
        let bucket: DoublyLinkedList<K, V> | null = this.table[bucketIndex]
        const temp = bucket.remove(key)
        if (bucket.isEmpty()) {
            //@ts-ignore
            bucket = this.table[bucketIndex] = null
            this.nuberBuckets--
        }
        return temp
    }   

    get(key: K): V | undefined{
        if (this.isEmpty()) return
        const bucketIndex = this.hashFunction(key)
        let bucket = this.table[bucketIndex]
        if (bucket == null || bucket.isEmpty()) return
        let currNode = bucket.head

        while (currNode != null) {
            if (currNode.key == key) return currNode.value
            currNode = currNode.next
        }
    }
}



