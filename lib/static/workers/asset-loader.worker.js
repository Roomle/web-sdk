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
define("./asset-loader.worker.js",["./chunk-b3b590f1.js"],function(e){const t=40;class s{constructor(){this._queue=[],this._pendingRequests=0}_nextSlot(){if(this._pendingRequests-=1,!this._queue.length)return;const{request:e,resolve:t,reject:s}=this._queue.shift();this._fetch(e).then(t,s)}_fetch(e,t={}){return this._pendingRequests+=1,new Promise((s,n)=>{self.fetch(e,t).then(function(){this._nextSlot(),s(...arguments)}.bind(this),e=>{this._nextSlot(),n(e)})})}fetch(e,s={}){return this._pendingRequests>=t?new Promise((t,s)=>this._queue.push({request:e,resolve:t,reject:s})):this._fetch(e,s)}}class n{constructor(e){this._networkLayer=e}loadAsset(e){return this._networkLayer.fetch(e).then(e=>e.blob()).then(e=>new Promise(t=>t(URL.createObjectURL(e)))).catch(e=>new Promise((t,s)=>s(e)))}}new class{constructor(){this._communicationInterface=new e.WorkerToMainThread(this)}onCommand(e,t,i){switch(e){case 1:this._loader=new n(new s),this._communicationInterface.sendToMainThread(4,t,[]);break;case 5:if(!this._loader)return;this._loader.loadAsset(i).then(e=>{this._communicationInterface.sendToMainThread(3,t,e)},e=>this._communicationInterface.sendToMainThread(2,t,{message:e.message}))}}}});
//# sourceMappingURL=asset-loader.worker.js.map
