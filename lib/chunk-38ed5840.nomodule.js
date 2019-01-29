System.register(["./chunk-5c02f558.nomodule.js","./chunk-bdfc64db.nomodule.js","./chunk-4be69068.nomodule.js"],function(t,e){var i,s,n,o,a,r,h,_,d,c,p,m,l,u,w,g;return{setters:[function(t){i=t.c},function(t){s=t.u,n=t.R,o=t.S,a=t.T,r=t.U,h=t.V,_=t.f,d=t.J,c=t.e,p=t.o,m=t.k,l=t.W,u=t.X},function(t){w=t.a,g=t.b}],execute:function(){const E=2,y=5,C=.8;class x extends s{constructor(t,e,i){super(t,e,i),this._scale=1,this._state=0,this._size=20,this._center=new THREE.Vector3,this._lastPosition=new THREE.Vector2,this._zoomPosition=new THREE.Vector2,this._zoomSpeed=Math.pow(.95,E),this._cameraZoom=1,this._initCamera(i||new THREE.Vector3(0,10,0))}_getCamera(){return this._camera?this._camera:(this._initCamera(new THREE.Vector3(0,10,0)),this._camera)}_initCamera(t){let{x:e,y:i}=this._domHelper.getClientDimensions(),s=e/i*this._size,n=this._size;this._camera=new THREE.OrthographicCamera(s/-2,s/2,n/2,n/-2,1,1e3),this._camera.position.copy(t),this._cameraPosition=t,this._camera.lookAt(new THREE.Vector3(0,0,0))}updateCamera(){let{x:t,y:e}=this._domHelper.getClientDimensions(),i=t/e*this._size,s=this._size;this._camera.left=i/-2,this._camera.right=i/2,this._camera.top=s/2,this._camera.bottom=s/-2,this._camera.updateProjectionMatrix()}_initInputListener(){this._inputListeners.push({key:3,fun:t=>{this._locked||(this._state=1,this._lastPosition.set(t.position.x,t.position.y),this.dispatchEvent(0))}}),this._inputListeners.push({key:6,fun:t=>{1!==this._state||this._locked||(this._move(new THREE.Vector2(t.position.x,t.position.y)),this.dispatchEvent(1))}}),this._inputListeners.push({key:4,fun:t=>{1===this._state&&this.dispatchEvent(2),this._state=0}}),this._inputListeners.push({key:7,fun:t=>{this._scale/=this._zoomSpeed,this._zoomTo(t.positionRelative,1),this._update()}}),this._inputListeners.push({key:8,fun:t=>{this._scale*=this._zoomSpeed,this._zoomTo(t.positionRelative,-1),this._update()}})}_zoomTo(t,e){let{left:i,top:s,right:n,bottom:o}=this._camera,a={x:this._center.x,y:this._center.z};e>0||e<0&&this._scale>C+.1?(t.x<0?a.x=Math.abs(t.x)*i:a.x=t.x*n,t.y<0?a.y=Math.abs(t.y)*s:a.y=t.y*o,Date.now()-this._lastZoom>200&&(this._zoomPosition.x=a.x,this._zoomPosition.y=a.y)):e<0&&(this._zoomPosition.x=a.x,this._zoomPosition.y=a.y),this._cameraPosition.x=(this._zoomPosition.x+this._cameraPosition.x)/2,this._cameraPosition.z=(this._zoomPosition.y+this._cameraPosition.z)/2,this._lastZoom=Date.now()}_move(t){let e=new THREE.Vector2;e.subVectors(this._lastPosition,t),e.divideScalar(100),this._cameraPosition.x+=e.x,this._cameraPosition.z+=e.y,this._lastPosition.copy(t)}updateToBounds(t,e){let{x:i,y:s}=this._domHelper.getClientDimensions(),n=i/s;this._size=Math.max(t.x,t.z);let o=this._size*n;this._center.copy(e),this._camera.left=o/-2,this._camera.right=o/2,this._camera.top=this._size/2,this._camera.bottom=this._size/-2,this._camera.zoom=1,this._camera.position.set(this._center.x,10,this._center.z),this._cameraPosition.copy(this._camera.position)}_update(t){this._scale=Math.min(this._scale,y),this._scale=Math.max(this._scale,C),this._cameraZoom=this._scale,this._camera.updateProjectionMatrix()}animateCamera(t){return!(!super.animateCamera(t)&&this._cameraZoom===this._camera.zoom||(this._camera.zoom=THREE.Math.lerp(this._camera.zoom,this._cameraZoom,10*t),0))}}t("b",x);const v=Math.PI/4,L=1,R=1,P=.6,M=1,b=.2;class k extends s{constructor(t,e,i){super(t,e,i),this._state=0,this._rotationSpeed=R,this._keyMap=new Map,this._camera=new THREE.PerspectiveCamera,this._camera.fov=50,this._camera.aspect=this._width/this._height,this._camera.near=.1,this._camera.far=100,this._camera.updateProjectionMatrix(),this._camera.layers.set(3),this._camera.layers.enable(1),this._camera.layers.enable(2),this._camera.layers.enable(5),this._camera.layers.enable(4),i?this._camera.position.set(i.x,1.5,i.z):this._camera.position.set(0,1.5,0),this._cameraPosition=new THREE.Vector3,this._cameraPosition.copy(this._camera.position),this._cameraRotation=new THREE.Quaternion,this._pitch=0,this._yaw=0;let s=new THREE.Euler(-this._pitch,this._yaw,0,"ZYX");this._cameraRotation.setFromEuler(s),window.addEventListener("gamepadconnected",this._gamepadConnected.bind(this)),window.addEventListener("gamepaddisconnected",this._gamepadDisconnected.bind(this))}_gamepadConnected(t){this.startButtonPressListener()}_gamepadDisconnected(t){window.cancelAnimationFrame(this._listenerLoopAnimationFrame)}startButtonPressListener(){this._listenerLoopAnimationFrame=window.requestAnimationFrame(()=>{this.buttonPressListener()})}buttonPressListener(){let t=navigator.getGamepads()[0];this._checkRightStick(t),this._checkLeftStick(t),this._checkButtons(t),this._processKeyMap(this._keyMap,.001),this.startButtonPressListener()}_checkRightStick(t){let e=t.axes[2],i=t.axes[3];Math.abs(e)>b&&(this._rotateHorizontal(.01*v*e),this._update(),this.dispatchEvent(1)),Math.abs(i)>b&&(this._rotateVertical(.01*v*i),this._update(),this.dispatchEvent(1))}_checkLeftStick(t){let e=t.axes[0],i=t.axes[1];Math.abs(i)>b?i<0?this._keyMap.set(87,!0):this._keyMap.set(83,!0):t.buttons&&t.buttons[12]&&t.buttons[12].pressed?this._keyMap.set(87,!0):t.buttons&&t.buttons[13]&&t.buttons[13].pressed?this._keyMap.set(83,!0):(this._keyMap.set(87,!1),this._keyMap.set(83,!1)),Math.abs(e)>b?e<0?this._keyMap.set(65,!0):this._keyMap.set(68,!0):(this._keyMap.set(65,!1),this._keyMap.set(68,!1))}_checkButtons(t){t.buttons&&t.buttons[6]&&t.buttons[6].pressed?this._keyMap.set(16,!0):this._keyMap.set(16,!1),t.buttons&&t.buttons[14]&&t.buttons[14].pressed?(this._keyMap.set(37,!0),this.dispatchEvent(1)):this._keyMap.set(37,!1),t.buttons&&t.buttons[15]&&t.buttons[15].pressed?(this._keyMap.set(39,!0),this.dispatchEvent(1)):this._keyMap.set(39,!1)}animateCamera(t){let e=this._cameraPosition,i=this._cameraRotation,s=this.getCamera(),n=a(e,s.position),o=r(i,s.quaternion);if(!e||n&&o)return!1;let h=this.getCamera().position.clone(),_=Math.min(10*t,1);h.lerp(e,_),this.getCamera().position.copy(h);let d=this.getCamera().quaternion.clone(),c=Math.min(5*t,1);d.slerp(i,c),this.getCamera().setRotationFromQuaternion(d);let p=!1;return this._keyMap.forEach(t=>{t&&(p=!0)}),p&&this._processKeyMap(this._keyMap,t),!0}_getCamera(){return this._camera}_initInputListener(){window.addEventListener("keyup",this._onKeyChanged.bind(this),!1),window.addEventListener("keydown",this._onKeyChanged.bind(this),!1),this._inputListeners.push({key:3,fun:t=>{this._down(t)}}),this._inputListeners.push({key:6,fun:t=>{this._move(t)}}),this._inputListeners.push({key:4,fun:t=>{this._up(t)}})}_down(t){this._downPosition=t.position,this._position=t.position,this._state=1,2===t.type&&window.setTimeout(this._onLongDown.bind(this),350),2===t.type?this._rotationSpeed=P:this._rotationSpeed=R}_move(t){this._position=t.position,1!==this._state||this._locked||this._orbit(new THREE.Vector2(t.position.x,t.position.y)),2!==this._state||this._locked||(this._orbit(new THREE.Vector2(t.position.x,t.position.y)),this._moveForward())}_up(t){1===this._state&&this.dispatchEvent(2),2===this._state&&this._keyMap.set(87,!1),this._state=0,this._orbitPosition=null}_onLongDown(){h(this._downPosition,this._position)<n&&1===this._state&&(this._state=2,this._orbit(new THREE.Vector2(this._position.x,this._position.y)),this._moveForward())}_update(t){let e=new THREE.Euler(-this._pitch,this._yaw,0,"ZYX");this._cameraRotation.setFromEuler(e,!0)}updateCamera(){let{x:t,y:e}=this._domHelper.getClientDimensions();this._camera.aspect=t/e,this._camera.updateProjectionMatrix()}_onKeyChanged(t){this._keyMap.set(t.keyCode,"keydown"===t.type),this.dispatchEvent(6),this._processKeyMap(this._keyMap,.001)&&t.preventDefault()}_processKeyMap(t,e){e=Math.min(e,.1);let i=new THREE.Vector3(0,0,0),s=!1;return this._processUpDown(t,i,e),t.get(65)&&(i.x=-L*M*e),t.get(68)&&(i.x=L*M*e),t.get(37)&&(this._rotateHorizontal(-v*this._rotationSpeed*e),s=!0),t.get(39)&&(this._rotateHorizontal(v*this._rotationSpeed*e),s=!0),t.get(16)&&(i.x*=3,i.z*=3),!(0===i.x&&0===i.y&&0===i.z&&!s||(i.applyQuaternion(this.getCamera().quaternion),this._cameraPosition.add(new THREE.Vector3(i.x,0,i.z)),this._update(),0))}_processUpDown(t,e,i){(t.get(87)||t.get(38))&&(e.z=-L*M*i),(t.get(83)||t.get(40))&&(e.z=L*M*i)}_orbit(t){this._orbitPosition||(this._orbitPosition=new THREE.Vector2(t.x,t.y),this.dispatchEvent(0));let e=t.clone().sub(this._orbitPosition),i=this._domHelper.element instanceof Document?this._domHelper.element.body:this._domHelper.element;this._rotateHorizontal(2*Math.PI*e.x/i.clientWidth*R),this._rotateVertical(2*Math.PI*e.y/i.clientHeight*R),o(this._orbitPosition,t)||this.dispatchEvent(1),this._orbitPosition.copy(t),this._update()}_moveForward(){this._keyMap.set(87,!0),this._processKeyMap(this._keyMap,.001)}_rotateVertical(t){let e=this._pitch+t;e>.7||e<-.4||(this._pitch=e,this._pitch<-Math.PI?this._pitch+=2*Math.PI:this._pitch>Math.PI&&(this._pitch-=2*Math.PI),this._saveYawAndPitch())}}t("c",k);const f=3e3;class S{constructor(t,e,i,s,n){this._clock=new THREE.Clock,this._delta=0,this._devicePixelRatio=1,this._renderListener=null,this._stopRendering=!1,this._forceRender=!1,this._lastChange=Date.now(),this._running=!1,this._onAfterRender=(()=>{}),this._creator_=t,this._canvasID=i,this._devicePixelRatio=window.devicePixelRatio&&window.__RML__ENV__.initData.retina?window.devicePixelRatio:1,this.createCameraControl(s),this._addCameraControlListener(),this._setupScene(e,n),document.addEventListener("visibilitychange",this._tabVisible.bind(this)),this._renderListener=(()=>{this._requestRender(!0)}),this._getInputManager().addEventListener(7,this._renderListener,this),this._getInputManager().addEventListener(8,this._renderListener,this),this._lifeCycleManager.addEventListener(this)}onBeforeRender(){}_changeCameraControl(t){this._cameraControl&&this._cameraControl.cleanUp(),t instanceof k&&(this._getInputManager().removeEventListener(7,this._renderListener),this._getInputManager().removeEventListener(8,this._renderListener)),this._cameraControl instanceof k&&(this._getInputManager().addEventListener(7,this._renderListener,this),this._getInputManager().addEventListener(8,this._renderListener,this)),this._cameraControl=t,this.cameraControlChanged()}cameraControlChanged(){}_addCameraControlListener(){this._cameraControl.addEventListener(0,this._requestRender,this),this._cameraControl.addEventListener(1,this._requestRender,this),this._cameraControl.addEventListener(2,this._requestRender,this),this._cameraControl.addEventListener(6,this._requestRender,this)}_requestRender(t){if(!this._renderer)return;this._pixotron&&(this._pixotron.needsUpdate=!0,t&&(this._forceRender=!0));const e=()=>{this._delta=this._clock.getDelta(),this._animateCamera(),this._cameraControl.getCamera().layers.mask=65535,this._renderLoopFunction&&(this._renderLoopFunction(),this._renderLoopFunction=null),this.onBeforeRender(),this._statsHelper&&this._statsHelper.update(this._renderer.info),this._pixotron?(this._forceRender&&(this._pixotron.autoShadowsClear=!0,this._pixotron.autoSAOClear=!0),this._pixotron.render(this._renderer,this._scene,this._cameraControl.getCamera()),this._forceRender=!1):(this._renderer.clear(),this._renderer.render(this._scene,this._cameraControl.getCamera()),this._renderer.clearDepth()),this._onAfterRender(),window.TWEEN&&TWEEN.update(),this._lastChange+f<Date.now()||this._stopRendering?this._running=!1:(this._running=!0,requestAnimationFrame(e))};this._lastChange=Date.now(),this._running||this._stopRendering||(this._running=!0,requestAnimationFrame(e))}_animateCamera(){this._cameraControl&&(this._cameraControl.animateCamera(this._delta)||!this._pixotron||this._forceRender?this._pixotron&&(this._pixotron.needsUpdate=!0):(this._pixotron.autoShadowsClear=!1,this._pixotron.autoSAOClear=!1)),this._environment&&this._environment.needsCamera()&&this._cameraControl instanceof _&&this._environment.updateCamera(this._cameraControl.getCamera())}_setupScene(t,e){let s=this._domHelper.getClientDimensions();this._width=s.x,this._height=s.y,this._scene=new THREE.Scene,(e=e||!1)||(this._scene.background=new THREE.Color(i().DEFAULT_BACKGROUND)),this._renderer=new THREE.WebGLRenderer({antialias:!0,alpha:e}),this._renderer.setPixelRatio(this._devicePixelRatio),this._renderer.setSize(this._width,this._height),this._renderer.gammaOutput=!0,this._renderer.gammaInput=!0,this._renderer.autoClear=!1,this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=THREE.PCFSoftShadowMap,this._renderer.domElement.classList.add(this._canvasID),this._domHelper.element.appendChild(this._renderer.domElement),this._getInputManager().addEvents(this._renderer.domElement),this._requestRender(),window.addEventListener("resize",this,!1),window.addEventListener("keydown",this,!1),window.addEventListener("keyup",this,!1),this.sceneChanged()}_tabVisible(t){this._requestRender(!0)}setupScene(t,e){this._setupScene(t,e)}updateCamera(){let{x:t,y:e}=this._domHelper.getClientDimensions();if(this._renderer.setSize(t,e),this._pixotron){this._pixotron.autoShadowsClear=!0,this._pixotron.autoSAOClear=!0,this._forceRender=!0;try{this._pixotron.setSize(t,e)}catch(t){console.warn(t)}}this._cameraControl.updateCamera(),this._requestRender(!0)}_onWindowResize(){this.updateCamera(),this._requestRender(!0)}_isPartOfScene(t){return"Object3D"===t.type||"Mesh"===t.type||"GLB"===t.type||"GLTF"===t.type||"Group"===t.type}cleanUp(){this._getInputManager().removeEventListener(7,this._renderListener),this._getInputManager().removeEventListener(8,this._renderListener),this._cameraControl&&this._cameraControl.cleanUp()}clearScene(){let t=[];this._scene.children.forEach(e=>{this._isPartOfScene(e)&&t.push(e)}),t.forEach(t=>{d(t),this._scene.remove(t)}),this._renderer.renderLists.dispose()}enableHD(){this._pixotron=new window.PIXOTRON.Pixotron(this.getPixotronParams()),this._environment instanceof u&&this._environment.setPixotron(this._pixotron),this._requestRender()}_addGroundShadows(){this._environment instanceof u&&this._environment.onShadowPlaneReady()}_loadGLTF(t,e,i,s,n){return new Promise((o,a)=>{this._staticItemLoader.loadGLTF(t,e,i,s,n).then(t=>{this._setCamera("GLTF",t),o(t)},a)})}_loadGLB(t,e,i,s,n,o){return new Promise((a,r)=>{this._staticItemLoader.loadGLB(t,e,i,s,n,o).then(t=>{this._setCamera("GLB",t),a(t)},r)})}_setCamera(t,e){if(!e)return void console.warn("could not set camera for gltf",e);const i=new THREE.Box3;if(i.setFromObject(e),"GLB"===t)this._cameraControl instanceof _&&this._cameraControl.updateToBounds(i,window.innerWidth,window.innerHeight,!1);else if("GLTF"===t){if(this._cameraControl instanceof _){let{x:t,y:e}=this._domHelper.getClientDimensions();this._cameraControl.updateAndReset(i.getSize(new THREE.Vector3),t,e,i.getCenter(new THREE.Vector3),-15,70,5,!1)}this._cameraControl instanceof x&&this._cameraControl.updateToBounds(i.getSize(new THREE.Vector3),i.getCenter(new THREE.Vector3))}this.updateCamera()}showGUI(){const t=document.createElement("style");t.innerText=".dg.ac {right:auto!important; z-index: 111;}",document.head.appendChild(t),this._scriptLoader.fetch("static/three/dat.gui.min.js",{id:"dat-gui-js"}).then(()=>this._guiLoaded(),t=>console.error(t))}_guiLoaded(){this._lightSetting&&this._lightSetting.showGUI();let t=c();if(this._pixotron){let e=t.addFolder("Renderer");e.add(this._pixotron.getSAOPass(),"enabled"),e.add(this._pixotron.getSAOPass(),"smoothTransition"),e.add(this._pixotron.getSAOPass(),"occlusionWorldRadius").min(0).max(2).step(.01),e.add(this._pixotron.getSAOPass(),"intensity").min(.1).max(2).step(.05),e.add(this._pixotron.getSAOPass(),"bias").min(-.1).max(.1).step(.001),e.add(this._pixotron.getSAOPass(),"numSamples").min(10).max(3e3).step(10),e.add(this._pixotron.getShadowPass(),"enabled"),e.add(this._pixotron.getShadowPass(),"smoothTransition"),e.add(this._pixotron.getShadowPass(),"enableAccumulation"),e.add(this._pixotron.getShadowPass(),"shadowRadius").min(0).max(5).step(.1),e.add(this._pixotron.getShadowPass(),"shadowBiasMultiplier").min(0).max(3).step(.1),e.add(this._pixotron.getShadowPass(),"numSamples").min(10).max(3e3).step(10)}this._addGUIListener(t),this._environment&&this._environment.showGUI()}_addGUIListener(t){let e=t.__folders;Object.keys(e).forEach((t,i)=>{let s=e[t];s.__folders&&Object.keys(s.__folders).forEach((t,i)=>{let s=e[t];this._addGUIListener(s)}),s.__controllers&&s.__controllers.forEach(t=>{t.onFinishChange(()=>{this._requestRender()})})})}showStats(){e.import("./stats-helper.nomodule.js").then(t=>this._statsHelper=new t.default)}_onKeyDown(t){}_onKeyUp(t){}pause(){this._getInputManager().removeEvents(this._renderer.domElement),window.removeEventListener("resize",this,!1),window.removeEventListener("keydown",this,!1),window.removeEventListener("keyup",this,!1)}resume(){this._renderer.domElement.classList.add(this._canvasID),this._domHelper.element.appendChild(this._renderer.domElement),this._getInputManager().addEvents(this._renderer.domElement),window.addEventListener("resize",this,!1),window.addEventListener("keydown",this,!1),window.addEventListener("keyup",this,!1),this._requestRender(!0)}destroy(){this.pause(),this.cleanUp()}handleEvent(t){switch(t.type){case"resize":this._onWindowResize();break;case"keydown":this._onKeyDown(t);break;case"keyup":this._onKeyUp(t)}}loadSceneSettings(t){let e,i;return e=t.environment?new Promise(e=>{(new p).load(this._scene,this._renderer.domElement,this._environment,t).then(t=>{this._setEnvironment(t),e()})}):Promise.resolve(),t.lights?(this._lightSetting=new m(this._scene,this._lightSetting),i=this._lightSetting.loadFromObject(t)):i=Promise.resolve(),new Promise((t,s)=>{Promise.all([e,i]).then(()=>{this._requestRender(!0),t()},s)})}_setEnvironment(t){this._environment=t,this._pixotron&&this._environment instanceof u&&this._environment.setPixotron(this._pixotron)}loadQualitySetting(t){this._pixotron&&(new l).set(this._pixotron,t)}}t("a",S),w([g],S.prototype,"_domHelper",void 0),w([g],S.prototype,"_scriptLoader",void 0),w([g],S.prototype,"_lifeCycleManager",void 0),w([g],S.prototype,"_staticItemLoader",void 0)}}});
//# sourceMappingURL=chunk-38ed5840.nomodule.js.map