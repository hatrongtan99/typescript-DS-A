import StackIn from './stackInterface';

export default class Stack<T> implements StackIn<T> {
    private index: number = -1;
    private storage: T [] = []

    isEmpty(): boolean {
        return this.index == -1
    }

    size(): number {
        return this.index + 1
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            throw new Error ('Stack is empty')
        } else {
            return this.storage[this.index]
        }
    }

    push(value: T): void {
        this.storage[++this.index] = value
    }

    pop(): T | undefined {
        if (this.isEmpty()) throw new Error ('Stack is empty')
        else {
            const temp = this.storage[this.index]
            this.index--
            return temp
        }
    }
}