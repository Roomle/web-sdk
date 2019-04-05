import { BootstrapI } from './bootstrap';
interface InlineI {
    _bootstrap: BootstrapI;
    setup: () => void;
    [key: string]: any;
}
export declare const Inline: InlineI;
export {};
