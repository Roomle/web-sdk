import Container from './container';
declare global {
    interface Window {
        __RML__DI__: Container;
    }
}
