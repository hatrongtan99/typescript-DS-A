import {heapADT} from './heapADT';
export class Heap<T> implements heapADT<T> {
    private MAX_SIZE: number = 100
    listStore: T[] = new Array<T>(this.MAX_SIZE + 1);
    private size: number = 0

    private swap(i: number, j: number): void {
        const tmp = this.listStore[i];
        this.listStore[i] = this.listStore[j];
        this.listStore[j] = tmp;
    }

    private heapifyDown(currIndex: number): void {
        while (currIndex * 2 <= this.size) {
            let leftIndex = currIndex * 2
            let smallIndex = leftIndex
            let rightIndex = leftIndex + 1
            if (rightIndex < this.size) {
                if (this.listStore[rightIndex] < this.listStore[leftIndex]) {
                    smallIndex = rightIndex
                }
            }

            if (this.listStore[currIndex] > this.listStore[smallIndex]) {
                this.swap(currIndex, smallIndex)
                currIndex = smallIndex
                leftIndex = currIndex * 2
            } else break
        }
    }

    isEmpty(): boolean {
        return this.size == 0
    }

    peek(): T | undefined {
        return this.listStore[1]
    }

    poll(): T | undefined {
        const tmp = this.listStore[1];
        this.listStore[1] = this.listStore[this.size]
        this.size--

        const currIndex = 1
        this.heapifyDown(currIndex)
        return tmp
    }

    insert(value: T): void {
        this.size++
        this.listStore[this.size] = value
        let currIndex = this.size
        let parrentIndex = parseInt((currIndex / 2).toString())
        while (parrentIndex > 0 && this.listStore[parrentIndex] > this.listStore[currIndex]) {
            this.swap(parrentIndex, currIndex)
            currIndex = parrentIndex
            parrentIndex = parseInt((currIndex / 2).toString())
        }
    }

    remover(value: T): T | undefined {
        if (this.isEmpty()) return
        let indexRemove

        for (let i = 0; i <= this.size; i++) {
            if (this.listStore[i] == value) {
                indexRemove = i
            }
        }

        if (indexRemove == undefined) return

        const tmp = this.listStore[indexRemove]
        this.listStore[indexRemove] = this.listStore[this.size]
        this.size--
        this.heapifyDown(indexRemove)
        return tmp
    }
}