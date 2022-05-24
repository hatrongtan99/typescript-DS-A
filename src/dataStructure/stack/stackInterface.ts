export default interface StackIn<T> {
    isEmpty(): boolean;
    size(): number;
    peek(): T | undefined;
    push(value: T): void;
    pop(): T | undefined;
}