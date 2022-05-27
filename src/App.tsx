import Stack from './dataStructure/stack/stack';
import {CircularQueue, Queue} from './dataStructure/queue/queue';
import {BinarySearchTree} from './dataStructure/tree/binarySearchTree';
import {SingleLinkedList} from './dataStructure/linkedList/singlyLinkedList';
import {DoublyLinkedList} from './dataStructure/linkedList/doublyLinkedList';
import {HashTableSeparateChaining} from './dataStructure/hashTable/hashTableSeparateChaining';
import {Heap} from './dataStructure/heap/heap'

function App() {

  const heap = new Heap();
  heap.insert(1)
  heap.insert(5)
  heap.insert(2)
  heap.insert(3)
  heap.insert(4)
  heap.remover(4)

  console.log(parseInt((4/2).toString()))


  // while (heap.isEmpty() == false) {
  //   console.log(heap.poll())
  // }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
