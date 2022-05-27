export interface heapADT<T> {
    isEmpty(): boolean;
    insert(value: T): void;
    peek(): T | undefined;
    poll(): T | undefined;
    remover(value: T): T | undefined;
}