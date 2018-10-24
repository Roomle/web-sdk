System.register(["./chunk-dd2e9fc8.nomodule.js","./chunk-1a2ba2c6.nomodule.js"],function(e,t){var i,s,n,a,r,o,h,d,_;return{setters:[function(e){i=e.w,s=e.l,n=e.U,a=e.J,r=e.g,o=e.r,h=e.m},function(e){d=e.a,_=e.b}],execute:function(){const c=2;class l extends i{constructor(e,t){super(e,t),this._scale=1,this._state=0,this._lastPosition=new THREE.Vector2,this._zoomSpeed=Math.pow(.95,c),this._cameraZoom=1,this._initCamera(t||new THREE.Vector3(0,10,0))}_getCamera(){return this._camera?this._camera:(this._initCamera(new THREE.Vector3(0,10,0)),this._camera)}_initCamera(e){let{x:t,y:i}=this._domHelper.getClientDimensions(),s=t/i*20;this._camera=new THREE.OrthographicCamera(s/-2,s/2,10,-10,1,1e3),this._camera.position.copy(e),this._cameraPosition=e,this._camera.lookAt(new THREE.Vector3(0,0,0))}updateCamera(){this._camera.updateProjectionMatrix()}_initInputListener(){this._inputListeners.push({key:3,fun:e=>{this._state=1,this._lastPosition.set(e.position.x,e.position.y),this.dispatchEvent(0)}}),this._inputListeners.push({key:6,fun:e=>{1===this._state&&(this._move(new THREE.Vector2(e.position.x,e.position.y)),this.dispatchEvent(1))}}),this._inputListeners.push({key:4,fun:e=>{1===this._state&&this.dispatchEvent(2),this._state=0,this._orbitPosition=null}}),this._inputListeners.push({key:7,fun:e=>{this._scale*=this._zoomSpeed,this._update()}}),this._inputListeners.push({key:8,fun:e=>{this._scale/=this._zoomSpeed,this._update()}})}_move(e){let t=new THREE.Vector2;t.subVectors(this._lastPosition,e),t.divideScalar(100),this._cameraPosition.x+=t.x,this._cameraPosition.z+=t.y,this._lastPosition.copy(e)}updateToBounds(e,t){let{x:i,y:s}=this._domHelper.getClientDimensions(),n=i/s,a=Math.max(e.x,e.z),r=a*n;this._camera.left=r/-2,this._camera.right=r/2,this._camera.top=a/2,this._camera.bottom=a/-2,this._camera.zoom=1,this._camera.position.set(t.x,10,t.z),this._cameraPosition.copy(this._camera.position)}_update(e){this._scale=Math.min(this._scale,5),this._scale=Math.max(this._scale,.5),this._cameraZoom=this._scale,this._camera.updateProjectionMatrix()}animateCamera(e){return!(!super.animateCamera(e)&&this._cameraZoom===this._camera.zoom||(this._camera.zoom=this._cameraZoom,0))}}e("b",l);const m=3e3;let p=null,u=null;class E{constructor(e,t,i,s){this._clock=new THREE.Clock,this._delta=0,this._devicePixelRatio=1,this._stopRendering=!1,this._forceRender=!1,this._lastChange=Date.now(),this._running=!1,this._devicePixelRatio=window.devicePixelRatio&&window.__RML__ENV__.initData.retina?window.devicePixelRatio:1,this.createCameraControl(i),this._addCameraControlListener(),this._setupScene(t,e,s);let n=()=>{this._requestRender(!0)};this._getInputManager().addEventListener(7,n,this),this._getInputManager().addEventListener(8,n,this)}onBeforeRender(){}_changeCameraControl(e){this._cameraControl&&this._cameraControl.cleanUp(),this._cameraControl=e,this.cameraControlChanged()}cameraControlChanged(){}_addCameraControlListener(){this._cameraControl.addEventListener(0,this._requestRender,this),this._cameraControl.addEventListener(1,this._requestRender,this),this._cameraControl.addEventListener(2,this._requestRender,this),this._cameraControl.addEventListener(6,this._requestRender,this)}_requestRender(e){if(!this._renderer)return;this._pixotron&&(this._pixotron.needsUpdate=!0,e&&(this._forceRender=!0));const t=()=>{this._delta=this._clock.getDelta(),this._animateCamera(),this._cameraControl.getCamera().layers.mask=65535,this._renderLoopFunction&&(this._renderLoopFunction(),this._renderLoopFunction=null),this.onBeforeRender(),this._statsHelper&&this._statsHelper.update(this._renderer.info),this._pixotron?(this._forceRender&&(this._pixotron.autoShadowsClear=!0,this._pixotron.autoSAOClear=!0),this._pixotron.render(this._renderer,this._scene,this._cameraControl.getCamera()),this._forceRender=!1):(this._renderer.clear(),this._renderer.render(this._scene,this._cameraControl.getCamera()),this._renderer.clearDepth()),window.TWEEN&&TWEEN.update(),this._lastChange+m<Date.now()||this._stopRendering?this._running=!1:(this._running=!0,requestAnimationFrame(t))};this._lastChange=Date.now(),this._running||this._stopRendering||(this._running=!0,requestAnimationFrame(t))}_animateCamera(){this._cameraControl&&(this._cameraControl.animateCamera(this._delta)||!this._pixotron||this._forceRender?this._pixotron&&(this._pixotron.needsUpdate=!0):(this._pixotron.autoShadowsClear=!1,this._pixotron.autoSAOClear=!1))}_setupScene(e,t,i){let s=this._domHelper.getClientDimensions();this._width=s.x,this._height=s.y,this._scene=new THREE.Scene,(i=i||!1)||(this._scene.background=new THREE.Color(h().DEFAULT_BACKGROUND)),this._renderer=new THREE.WebGLRenderer({antialias:!0,alpha:i}),this._renderer.setPixelRatio(this._devicePixelRatio),this._renderer.setSize(this._width,this._height),this._renderer.gammaOutput=!0,this._renderer.gammaInput=!0,this._renderer.autoClear=!1,this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=THREE.BasicShadowMap,this._renderer.domElement.classList.add(e),this._domHelper.element.appendChild(this._renderer.domElement),this._getInputManager().addEvents(this._renderer.domElement),this._requestRender(),p=this._onWindowResize.bind(this),window.addEventListener("resize",p,!1),u=this._onKeyDown.bind(this),window.addEventListener("keydown",u,!1),document.addEventListener("visibilitychange",this._tabVisible.bind(this))}_tabVisible(e){this._requestRender(!0)}updateCamera(){let{x:e,y:t}=this._domHelper.getClientDimensions();if(this._renderer.setSize(e,t),this._pixotron){this._pixotron.autoShadowsClear=!0,this._pixotron.autoSAOClear=!0,this._forceRender=!0;try{this._pixotron.setSize(e,t)}catch(e){console.warn(e)}}this._cameraControl.updateCamera(),this._requestRender(!0)}_onWindowResize(){this.updateCamera(),this._pixotron&&this._pixotron.setSize(this._renderer.getSize().width,this._renderer.getSize().height),this._requestRender(!0)}_isPartOfScene(e){return"Object3D"===e.type||"Mesh"===e.type||"GLB"===e.type||"Group"===e.type}cleanUp(){window.removeEventListener("resize",p,!1),window.removeEventListener("keydown",u,!1)}clearScene(){let e=[];this._scene.children.forEach(t=>{this._isPartOfScene(t)&&e.push(t)}),e.forEach(e=>{n(e),this._scene.remove(e)}),this._renderer.renderLists.dispose()}enableHD(){let e={saoparams:{intensity:.25,occlusionWorldRadius:.4,smoothTransition:!0,samplesPerFrame:4,bias:.016,numSamples:200},shadowparams:{shadowMapResolution:1024,shadowRadius:3,shadowQuality:1,smoothTransition:!0,enableAccumulation:!0,shadowBiasMultiplier:.6,nearPlane:.1,farPlane:50,fov:110,side:THREE.FrontSide,numSamples:100}};this._pixotron=new window.PIXOTRON.Pixotron(e),this._requestRender()}_loadGLTF(e,t,i,n,r){return this._gltfLoader||(this._gltfLoader=new THREE.GLTFLoader),new Promise((h,d)=>{this._gltfLoader.parse(e,null,e=>{if(e&&e.scene&&e.scene.children&&e.scene.children.length>0){if(t&&e.scene.position.copy(t),i&&(e.scene.rotation.y=i),n&&e.scene.scale.copy(n),e.scene.type="GLB",e.scene.traverse(e=>{if(e instanceof THREE.Mesh){if(e.material instanceof THREE.MeshStandardMaterial){let t=e.material;t.envMap=this._environmentLoader.getEnvironmentMap(),t.needsUpdate=!0,r&&r>0&&(t.color=a(r))}e.receiveShadow=!0,e.castShadow=!0}}),!t&&!i&&!n){let t=this._calculateBoundingBoxOfAllMeshes(e.scene.children);if(this._cameraControl instanceof s){let{x:e,y:i}=this._domHelper.getClientDimensions();this._cameraControl.updateAndReset(t.getSize(new THREE.Vector3),e,i,t.getCenter(new THREE.Vector3),-15,70,5,!1)}this._cameraControl instanceof l&&this._cameraControl.updateToBounds(t.getSize(new THREE.Vector3),t.getCenter(new THREE.Vector3)),this.updateCamera()}o.end("loadingTime"),h(e.scene)}},e=>{},e=>{d(e)})})}_calculateBoundingBoxOfAllMeshes(e){let t=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.forEach(e=>{e.geometry.computeBoundingBox();let o=e.geometry.boundingBox.clone();o.translate(e.getWorldPosition(new THREE.Vector3)),t=Math.min(t,o.min.x),i=Math.min(i,o.min.y),s=Math.min(s,o.min.z),n=Math.max(n,o.max.x),a=Math.max(a,o.max.y),r=Math.max(r,o.max.z)}),new THREE.Box3(new THREE.Vector3(t,i,s),new THREE.Vector3(n,a,r))}_loadGLB(e,t,i,n,a){return this._gltfLoader||(this._gltfLoader=new THREE.GLTFLoader),new Promise((r,o)=>{this._gltfLoader.load(e,e=>{e&&e.scene&&e.scene.children&&e.scene.children.length>0&&(t&&e.scene.position.copy(t),i&&(e.scene.rotation.y=i),n&&e.scene.scale.copy(n),e.scene.type="GLB",e.scene.traverse(e=>{if(e instanceof THREE.Mesh){if(e.material instanceof THREE.MeshStandardMaterial){let t=e.material;t.envMap=this._environmentLoader.getEnvironmentMap(),a&&a>0&&(t.color=new THREE.Color(a)),t.needsUpdate=!0}e.castShadow=!0}}),t||i||n||(e.scene.children[0].geometry.computeBoundingBox(),this._cameraControl instanceof s&&this._cameraControl.updateToBounds(e.scene.children[0].geometry.boundingBox.getSize(),window.innerWidth,window.innerHeight,!1),this.updateCamera()),r(e.scene))},e=>{},e=>{o(e)})})}showGUI(){const e=document.createElement("style");e.innerText=".dg.ac {right:auto!important}",document.head.appendChild(e),this._scriptLoader.fetch("static/three/dat.gui.min.js",{id:"dat-gui-js"}).then(()=>this._guiLoaded(),e=>console.error(e))}_guiLoaded(){this._lightSetting&&this._lightSetting.showGUI();let e=r();if(this._pixotron){let t=e.addFolder("Renderer");t.add(this._pixotron.getSAOPass(),"enabled"),t.add(this._pixotron.getSAOPass(),"smoothTransition"),t.add(this._pixotron.getSAOPass(),"occlusionWorldRadius").min(0).max(2).step(.01),t.add(this._pixotron.getSAOPass(),"intensity").min(.1).max(2).step(.05),t.add(this._pixotron.getSAOPass(),"bias").min(-.1).max(.1).step(.001),t.add(this._pixotron.getSAOPass(),"numSamples").min(10).max(3e3).step(10),t.add(this._pixotron.getShadowPass(),"enabled"),t.add(this._pixotron.getShadowPass(),"smoothTransition"),t.add(this._pixotron.getShadowPass(),"enableAccumulation"),t.add(this._pixotron.getShadowPass(),"shadowRadius").min(0).max(5).step(.1),t.add(this._pixotron.getShadowPass(),"shadowBiasMultiplier").min(0).max(3).step(.1),t.add(this._pixotron.getShadowPass(),"numSamples").min(10).max(3e3).step(10)}this._addGUIListener(e)}_addGUIListener(e){let t=e.__folders;Object.keys(t).forEach((e,i)=>{let s=t[e];s.__folders&&Object.keys(s.__folders).forEach((e,i)=>{let s=t[e];this._addGUIListener(s)}),s.__controllers&&s.__controllers.forEach(e=>{e.onFinishChange(()=>{this._requestRender()})})})}showStats(){t.import("./stats-helper.nomodule.js").then(e=>this._statsHelper=new e.default)}_onKeyDown(e){}}e("a",E),d([_],E.prototype,"_domHelper",void 0),d([_],E.prototype,"_environmentLoader",void 0),d([_],E.prototype,"_scriptLoader",void 0)}}});
//# sourceMappingURL=chunk-82b18b3b.nomodule.js.map