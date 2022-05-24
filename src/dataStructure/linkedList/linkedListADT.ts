export interface LinkedListADT<T> {
    isEmpty(): boolean;
    size(): number;
    add(value: T): void;
    remove(value: T): T | undefined;
}

export interface DoublyLinkedListADT<K, V> {
    isEmpty(): boolean;
    size(): number;
    add(key: K,value: V): void;
    remove(key: K): V | undefined;
}