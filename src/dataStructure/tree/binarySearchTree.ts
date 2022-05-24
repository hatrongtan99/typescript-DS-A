import {NodeTree} from './NodeTree'
import {BinarySearchTreeADT} from './binarySearchTreeADT'

export class BinarySearchTree<T> implements BinarySearchTreeADT<T> {
    private root: NodeTree<T> | null = null

    constructor(
    ) {}

    size(): number {
        if (this.root == null) return 0
        else {
            const queue: NodeTree<T>[] = []
            let count: number = 0
            queue.push(this.root)

            while(queue.length > 0) {
                const currNode = queue.shift()
                count++
                if (currNode?.leftNode) {
                    queue.push(currNode.leftNode)
                }

                if (currNode?.rightNode) {
                    queue.push(currNode.rightNode)
                }
            }
            return count
        }
    }

    isEmpty(): boolean {
        return this.size() == 0
    }

    insert(value: T): void {
        const newNode: NodeTree<T> = new NodeTree(value, null, null);
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        let currNode: NodeTree<T> = this.root;
        while (true) {
            if (value <= currNode.data) {
                if (currNode.leftNode) {
                    currNode = currNode.leftNode;
                } else {
                    currNode.leftNode = newNode
                    return
                }
            } else {
                if (currNode.rightNode) {
                    currNode = currNode.rightNode
                } else {
                    currNode.rightNode = newNode
                    return
                }
            }
        }
    }

    contains(value: T): boolean {
        let currNode: NodeTree<T> | null= this.root;
        while (true) {
            if (currNode == null) return false
            if (currNode.data == value) return true
            if (currNode.data > value) currNode = currNode.leftNode
            else currNode = currNode.rightNode
        }
    }

    remove(value: T): boolean{
        if (!this.contains(value)) return false

        this.root = this.removeRecursive(this.root, value)
        return true
    }

    private maxLeft(root: NodeTree<T>): T {
        while (root.rightNode !== null) {
            root = root.rightNode
        }

        return root.data
    }

    private removeRecursive(root: any, value: T): NodeTree<T> {
        if (root.data > value) {
            root.leftNode = this.removeRecursive(root.leftNode, value)
        } else if (root.data < value) {
            root.rightNode = this.removeRecursive(root.rightNode, value)
        } else {
            if (root.leftNode == null) return root.rightNode
            else if (root.rightNode == null) return root.leftNode
            else {
                const maxLeft = this.maxLeft(root.leftNode)
                root.data = maxLeft
                root.leftNode = this.removeRecursive(root.leftNode, root.data)
            }
        }
        return root
    }

}   

