export interface HashTableADT<K, V> {
    isEmpty(): boolean;
    size(): number;
    insert(key: K, value: V): void;
    remove(key:K): V | undefined;
    get(key:K): V | undefined;
}