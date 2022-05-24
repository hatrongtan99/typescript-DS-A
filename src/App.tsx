import Stack from './dataStructure/stack/stack';
import {CircularQueue, Queue} from './dataStructure/queue/queue';
import {BinarySearchTree} from './dataStructure/tree/binarySearchTree';
import {SingleLinkedList} from './dataStructure/linkedList/singlyLinkedList';
import {DoublyLinkedList} from './dataStructure/linkedList/doublyLinkedList';
import {HashTableSeparateChaining} from './dataStructure/hashTable/hashTableSeparateChaining';

function App() {

  const hashTable = new HashTableSeparateChaining(6)

  hashTable.insert(113, 'takk')
  hashTable.insert('number', 'num')
  hashTable.insert('string', 'string type')
  hashTable.remove('string')
  console.log(hashTable)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
