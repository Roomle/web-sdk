declare class EmsArray<T> {
    get(index: number): T;
    push_back(element: T): void;
    resize(from: number, to: number): void;
    set(index: number, element: T): T;
    size(): number;
    clone(index: number): EmsArray<T>;
    delete(index: number): void;
    deleteLater(index: number): void;
    isAliasOf(index: number): boolean;
    isDeleted(index: number): boolean;
}
declare class EmsList<T> {
    push_back(element: T): void;
    size(): number;
}
declare class EmsSet<T> {
    insert(element: T): void;
    size(): number;
}
declare class InternalError {
}
declare class BindingError {
}
declare class UnboundTypeError {
}
