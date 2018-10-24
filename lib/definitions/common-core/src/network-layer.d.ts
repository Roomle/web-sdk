import { AssetUrl } from '../../typings/rapi-types';
export default class NetworkLayer {
    private _queue;
    private _pendingRequests;
    private _nextSlot;
    private _fetch;
    fetch(request: Request | AssetUrl): Promise<any>;
}
