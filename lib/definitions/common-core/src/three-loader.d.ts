import '../../typings/global-definitions';
import { Context } from './di/context';
export default class ThreeLoader implements Context {
    _creator_: string;
    private _scriptLoader;
    private _networkLayer;
    private _jsonLoaded;
    constructor(creator: string);
    private _loadShaders;
    fetch(): Promise<{}>;
}
