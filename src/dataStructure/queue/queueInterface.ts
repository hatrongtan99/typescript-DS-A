export default interface QueueIn<T> {
    isEmpty(): boolean;
    isFull(): boolean;
    size(): number;
    enqueue(value: T): boolean;
    dequeue(): T | undefined;
}