const getAllParameters=function(e){e||(e=window.location.href);const t=e.split("?");if(2!==t.length)return{};const s=t[1].split("&");let r={};return s.forEach(e=>{const t=e.split("=");let s=t[1];"true"===s&&(s=!0),"false"===s&&(s=!1),function(e){return t=e,!Number.isNaN(t)&&!isNaN(t)&&Number.isFinite(parseFloat(e));var t}(s)&&(s=parseFloat(s)),r[t[0]]=s}),r},ROOMLE_COLORS={PRIMARY:"#db0000",ON_PRIMARY:"#ffffff",DEFAULT_BACKGROUND:"#f9fafc",SELECTION:"#ffffff"},setCursor=e=>{document.body.style.cursor=e},handleJsonResponse=e=>{const t=e.headers.get("content-type");if(t&&t.includes("application/json"))return e.json();throw new TypeError("No JSON returned")},getColors=()=>window.__RML__ENV__?window.__RML__ENV__.initData.colors:ROOMLE_COLORS,getAssetPath=()=>window.__RML__ENV__&&window.__RML__ENV__.assetPath?window.__RML__ENV__.assetPath:"",setWriteable=(e,t,s)=>{setDescriptor(e,t,{writable:s})},setDescriptor=(e,t,s)=>{const r=Object.getOwnPropertyDescriptor(e,t);for(let e in s)s.hasOwnProperty(e)&&(r[e]=s[e]);Object.defineProperty(e,t,r)};let actualConversationId=0;class CommunicationInterface{constructor(e,t){this._callbacks=e,this.eventListener=t,this.eventListener.addEventListener("message",this,!1)}get eventPoster(){return this._eventPoster&&this._eventPoster.postMessage?this._eventPoster:this.eventListener&&this.eventListener.postMessage?this.eventListener:{postMessage:()=>void 0}}hasEventPoster(){return!!this._eventPoster}nextConversationId(){return actualConversationId++}setEventPoster(e){this._eventPoster=e}handleEvent(e){if(!e||!e.data)return;const[t,s,r]=JSON.parse(e.data);if(!t||0!==t.indexOf("rml"))return;const[n,o]=t.split("."),a=parseInt(o,10);this._callbacks.onCommand(a,parseInt(s,10),r)}}class MainThreadToWorker extends CommunicationInterface{constructor(e,t){super(e,t),this._promiseCallbacks=new Map}sendToWorker(e,t=null,s,r){const n=this.nextConversationId(),o=()=>!1;!s&&r&&(s=o),s&&!r&&(r=o),s&&r&&this._promiseCallbacks.set(n,{resolve:s,reject:r}),this.eventPoster.postMessage(JSON.stringify(["rml."+e,n,t]))}resolvePromises(e,t){const s=this._promiseCallbacks.get(e);s&&(s.resolve.apply(s,[t]),this._promiseCallbacks.delete(e))}}export{getAssetPath as a,setCursor as b,getColors as c,MainThreadToWorker as d,handleJsonResponse as e,getAllParameters as f,ROOMLE_COLORS as g,setWriteable as h,setDescriptor as i};
//# sourceMappingURL=chunk-08b9678b.js.map