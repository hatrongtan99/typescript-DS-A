export class NodeTree<T> {
    
    constructor (
        public data: T,
        public leftNode: NodeTree<T> | null,
        public rightNode: NodeTree<T> | null
    ) {}
}