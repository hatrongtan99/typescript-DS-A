import QueueIn from './queueInterface';

export class Queue<T> implements QueueIn<T> {
    protected storage: T[] = new Array<T>(this.capacity);
    protected front: number = -1
    protected rear: number = -1

    constructor(
        protected capacity: number = 10
    ) {}

    isEmpty(): boolean {
        return this.front == -1
    }

    isFull(): boolean {
        if (this.front == 0 && this.rear == this.capacity - 1) return true
        return false
    }

    size(): number {
        if (this.isEmpty()) return 0
        return this.rear - this.front + 1
    }

    enqueue(value: T): boolean {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            this.front= this.rear = 0
            this.storage[this.rear] = value
        } else {
            this.rear++
            this.storage[this.rear] = value
        }
        return true
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) throw new Error ('Queue is empty')
        const temp = this.storage[this.front]
        if (this.front == this.rear) {
            this.front = this.rear = -1
        } else {
            this.front++
        }
        
        return temp
    }
}

export class CircularQueue<T> extends Queue<T> {
    constructor(
        protected capacity: number = 10,
    ) {
        super(capacity)
    }

    isFull(): boolean {
        if (this.front == 0 && this.rear == this.capacity - 1) return true
        if (this.front == this.rear + 1) return true
        return false
    }

    size(): number {
        if (this.rear >= this.front) {
            return this.rear - this.front + 1
        } else {
            return this.capacity - this.rear + 1 + this.front
        }
    }

    enqueue(value: T): boolean {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            this.front = this.rear = 0
            this.storage[this.rear] = value
        } else {
            this.rear = (this.rear + 1) % this.capacity
            this.storage[this.rear] = value
        }
        return true
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) throw new Error ('Queue is empty')
        const temp = this.storage[this.front]
        if (this.front == this.rear) {
            this.front = this.rear = -1
        } else {
            this.front = (this.front + 1) % this.capacity
        }
        
        return temp
    }
}