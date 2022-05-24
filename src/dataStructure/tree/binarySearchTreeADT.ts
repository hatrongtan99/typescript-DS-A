import {NodeTree} from './NodeTree'

export interface BinarySearchTreeADT<T> {
    size(): number;
    isEmpty(): boolean;
    contains(node: T): boolean;
    insert(value: T): void;
    remove(value: T): boolean;
}