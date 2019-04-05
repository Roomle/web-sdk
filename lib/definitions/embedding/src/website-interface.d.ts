import { EmbeddingInstance } from './utils';
import { RapiId } from '../../typings/rapi-types';
export default class WebsiteToRoomle {
    private _init;
    private _getUrl;
    initPlanner(embeddingId: RapiId, domElement: HTMLElement, options?: {
        [key: string]: any;
    }): Promise<EmbeddingInstance>;
    teardown(instance: EmbeddingInstance): void;
    private _sendMessage;
}
