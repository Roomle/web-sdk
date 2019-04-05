/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = async name => {
    if (!registry[name]) {
      
        await new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            
              script.src = name;
            
            // Ya never know
            script.defer = true;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      

      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
    }
    return registry[name];
  };

  const require = async (names, resolve) => {
    const modules = await Promise.all(names.map(singleRequire));
    resolve(modules.length === 1 ? modules[0] : modules);
  };

  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = new Promise(async resolve => {
      let exports = {};
      const module = {
        
          uri: location.origin + moduleName.slice(1)
        
      };
      const deps = await Promise.all(
        depsNames.map(depName => {
          if (depName === "exports") {
            return exports;
          }
          if (depName === "module") {
            return module;
          }
          return singleRequire(depName);
        })
      );
      exports.default = factory(...deps);
      resolve(exports);
    });
  };
}
define("./budgeteer.sw.js",["exports","./chunk-b3b590f1.js"],function(e,t){const n=/^https:\/\/api(\.test|\.dev)?\.roomle\.com\/v2\//i,r=new Map,s=(e,t)=>t?(t=t.toLowerCase()).startsWith("application/javascript")||t.startsWith("text/javascript")?"js":t.startsWith("application/wasm")?"wasm":t.startsWith("model/gltf-binary")||t.startsWith("model/gltf")?"assets3d":t.startsWith("application/json")?n.test(e)?"content":"json":t.startsWith("image/")?"images":t.startsWith("text/plain")&&"crt"===a(e)?"assets3d":"various":"various",o=(e,t)=>{switch(t){case"js":return"js";case"css":return"css";case"wasm":return"wasm";case"assets3d":case"images":return a(e)}return"unknown"},a=e=>{if("string"!=typeof e)return"unknown";const t=e.split(".");if(1===t.length)return"unknown";switch(t.pop().split("?")[0].toLowerCase()){case"crt":return"crt";case"jpeg":case"jpg":return"jpg";case"png":return"png";case"gif":return"gif";case"glb":return"glb"}return"unknown"},c=e=>{switch(e){case"component":return"components";case"texture":return"textures";case"material":return"materials";case"configuration":return"configurations";case"item":return"items";case"tag":return"tags";case"plan":return"plans";default:return"unknown"}},i=e=>e.clone().json().then(t=>{let n=1,r="";for(let s in t)if("meta"!==s){const o=s.length-1,a=s[o];r=s,Array.isArray(t[s])?("s"!==a?console.warn('Plural not recognized, check "'+e.url+'"'):r=r.substr(0,o),n=t.meta.count):"s"===a&&console.warn('Plural could be recognized wrongly, check "'+e.url+'"')}return{type:c(r),elemCount:n,contentLength:JSON.stringify(t).length}}),l=e=>{let t=0;const n=r.get(e);return n?(n.forEach(e=>t+=e.size),t):t},u=()=>{r.clear()},g=e=>{const t=r.get(e);return t?t.size:0},h=e=>{const t=[],n=r.get(e);n&&(n.forEach((e,n)=>t.push(Object.assign({url:n},e))),console.table(t))},p=e=>{m(),g("content"),l("content"),g("js"),l("js"),e&&r.forEach((e,t)=>{e.forEach((e,t)=>{})})},f=()=>r,m=()=>{let e=0;return r.forEach(t=>t.forEach(t=>{e+=t.count})),e},d=e=>{if("only-if-cached"===e.request.cache&&"same-origin"!==e.request.mode)return void console.warn("Skip because of: https://stackoverflow.com/a/49719964");const t=performance?performance.now():0;e.respondWith(fetch(e.request).then(e=>{const n=e.url;if(n.includes("browser-sync/browser-sync-client.js")||n.includes("browser-sync/socket.io"))return Promise.resolve(e);{const a=e.headers.get("content-type"),c=s(n,a),l=r.has(c)?r.get(c):new Map;let u=l.get(n);const g=(performance?performance.now():-1)-t,h=[];return"content"===c&&h.push(i(e)),Promise.all(h).then(([t])=>{const s=e.headers.get("content-length");let a=s?parseInt(s,10):0;return t&&t.contentLength&&(a=t.contentLength),u?(u.count++,u.timing=u.timing+(g-u.timing)/u.count):u={count:1,size:a,type:t&&t.type?t.type:o(n,c),timing:g},l.set(n,u),r.set(c,l),Promise.resolve(e)},t=>(console.error(t),Promise.resolve(e)))}}))},w=new class{constructor(){this.workerToMainThread=new t.WorkerToMainThread(this),u()}onCommand(){}};self.addEventListener("install",e=>{self.skipWaiting().then(()=>void 0,e=>console.error(e))}),self.addEventListener("activate",e=>{self.clients.claim().then(()=>w.workerToMainThread.sendToMainThread(6,t.NO_CONVERSATION_ID,[]),e=>console.error(e))}),self.addEventListener("fetch",d),self.printStats=p,self.printCategoryTable=h,self.getOverview=f,e.getCategory=s,e.getType=o,e.extractTypeFromFileExtension=a,e.getTypeFromRapiModel=c,e.handleContent=i,e.getContentSizeOf=l,e.resetOverview=u,e.getSizeOf=g,e.printCategoryTable=h,e.printStats=p,e.getOverview=f,e.getRequestCount=m,e.handleFetchEvent=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=budgeteer.sw.js.map
