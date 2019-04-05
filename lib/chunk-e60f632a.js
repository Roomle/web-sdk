import"./chunk-d9ea53ea.js";import{h as InputManager,x as DependencyInjectionAssignment,z as ScriptLoader,B as DomHelper,y as Logger,k as CameraControl3D,P as LightSetting,t as getGUI,m as CANVAS_ID,s as BakedShadowEnvironment,w as dispose,E as Main,F as RoomleDependencyInjection,a as Benchmark}from"./chunk-9072424d.js";import{a as __decorate,b as inject}from"./chunk-0434d6fb.js";import{a as DefaultLightSetting}from"./chunk-1138b701.js";import{a as SceneManager}from"./chunk-3f372e8e.js";const INJECTABLES=[new DependencyInjectionAssignment("script-loader",ScriptLoader),new DependencyInjectionAssignment("dom-helper",DomHelper,1),new DependencyInjectionAssignment("glb-input-manager",class extends InputManager{},1),new DependencyInjectionAssignment("logger",Logger)];class AdjustableCameraControl3D extends CameraControl3D{constructor(){super(...arguments),this.shouldIgnoreStandardBehavior=!1}adjust(e,t,i,s,a){let n=new THREE.Vector3(-e.x/2,0,-e.z/2),r=new THREE.Vector3(e.x/2,e.y,e.z/2);this._boundingBox=new THREE.Box3(n,r);let o=new THREE.Euler(-Math.PI/2+s,i,0,"ZYX"),h=(new THREE.Quaternion).setFromEuler(o);this._camera.updateProjectionMatrix(),this._camera.quaternion.copy(h),this._camera.position.copy(t)}_setDistanceAndRangesBasedOnBounds(e,t,i){let s=super._setDistanceAndRangesBasedOnBounds(e,t,i);return this.maxDistance=1.1*s,s}_update(e){this.shouldIgnoreStandardBehavior?this._saveYawAndPitch():super._update(e)}animateCamera(e){return!!this.shouldIgnoreStandardBehavior||super.animateCamera(e)}}class GLBViewerLightSetting extends LightSetting{constructor(e,t){super(e,t),this._params={ambientLight:{color:"#ffffff"},areaLight:{intensity:80,color:"#ffffff"}},this._ambientLight=new THREE.AmbientLight(new THREE.Color(this._params.ambientLight.color),.5),this._areaLight=new THREE.RectAreaLight(new THREE.Color(this._params.areaLight.color),void 0,.6,.6),this._areaLight.castShadow=!0,this._areaLight.matrixAutoUpdate=!0,this._areaLight.intensity=this._params.areaLight.intensity/(this._areaLight.width*this._areaLight.height),this._areaLight.position.set(0,3,0),this._areaLight.lookAt(new THREE.Vector3(0,0,0)),this._areaLight.visible=!1,this.addToScene()}addToScene(){this._scene.add(this._areaLight),this._scene.add(this._ambientLight)}removeFromScene(){this._scene.remove(this._areaLight),this._scene.remove(this._ambientLight)}reload(){this.removeFromScene(),this.addToScene()}showGUI(){let e=getGUI();if(this._areaLight){let t=e.addFolder("Area Light");t.add(this._areaLight,"visible"),t.add(this._params.areaLight,"intensity").min(10).max(400).step(10).onChange(e=>{this._areaLight.intensity=e/(this._areaLight.width*this._areaLight.height)}),t.add(this._areaLight,"castShadow"),t.addColor(this._params.areaLight,"color").onChange(e=>{this._areaLight.color=new THREE.Color(e)}),t.add(this._areaLight.position,"x").min(-10).max(10).step(.1).onChange(()=>{this._areaLight.lookAt(new THREE.Vector3(0,0,0))}),t.add(this._areaLight.position,"y").min(-10).max(10).step(.1).onChange(()=>{this._areaLight.lookAt(new THREE.Vector3(0,0,0))}),t.add(this._areaLight.position,"z").min(-10).max(10).step(.1).onChange(()=>{this._areaLight.lookAt(new THREE.Vector3(0,0,0))})}if(this._ambientLight){let t=e.addFolder("Ambient Light");t.add(this._ambientLight,"visible"),t.add(this._ambientLight,"intensity").min(0).max(5).step(.1),t.addColor(this._params.ambientLight,"color").onChange(e=>{this._ambientLight.color=new THREE.Color(e)})}}}class GLBViewerSceneManager extends SceneManager{constructor(e,t){super(e,t,CANVAS_ID.GLB,"3D",!0),this._itemsCount=0,this._standardSceneBackgroundColor=this._scene.background,this._lightSetting=new GLBViewerLightSetting(this._scene),this._setEnvironment(new BakedShadowEnvironment(this._scene,this._environment))}createCameraControl(e){this._cameraControl=new AdjustableCameraControl3D(this._creator_,this._getInputManager(),new THREE.Vector3(-1,1,1))}_getInputManager(){return this._glbInputManager}loadGLB(e,t=!0){return this.clearScene(),new Promise((i,s)=>{this._loadGLB(e,new THREE.Vector3(0,0,0),0,null).then(e=>{this._currentGLB=e,this._scene.add(this._currentGLB);let{x:s,y:a}=this._domHelper.getClientDimensions(),n=(new THREE.Box3).setFromObject(this._currentGLB),r=n.getSize(new THREE.Vector3);if(this._environment&&this._environment.needsBounds()&&this._environment.updateBounds(r),t){let e=n.getCenter(new THREE.Vector3);this._cameraControl instanceof AdjustableCameraControl3D&&(this._cameraControl.updateToBounds(n,s,a,!1,!0,e),this._cameraControl.reset(r,s,a,e,-15,0)),this._requestRender()}i()},s)})}preparePerspectiveImage(e,t,i){return new Promise((s,a)=>{t||(t=1e3),i||(i=1e3),e||((e=new THREE.WebGLRenderer({antialias:!0})).setSize(t,i),e.gammaInput=window.__RML__ENV__.initData.gammaIO,e.gammaOutput=window.__RML__ENV__.initData.gammaIO,e.autoClear=!1,e.shadowMap.enabled=!0,e.shadowMap.type=THREE.BasicShadowMap,e.toneMapping=THREE.Uncharted2ToneMapping,e.toneMappingWhitePoint=6,e.toneMappingExposure=3);let n=this._cameraControl.getCamera().clone();n instanceof THREE.PerspectiveCamera&&(n.aspect=t/i,n.updateProjectionMatrix()),this._lightSetting.removeFromScene();let r=new DefaultLightSetting(this._scene);e.render(this._scene,n);let o=e.domElement.toDataURL();e.domElement.toBlob(e=>{s({image:o,width:t,height:i,blob:e})},"image/png"),r.removeFromScene(),this._lightSetting.addToScene()})}adjustCamera(e,t,i,s){if(this._cameraControl instanceof AdjustableCameraControl3D){let a=(new THREE.Box3).setFromObject(this._scene).getSize(new THREE.Vector3);this._cameraControl.adjust(a,e,t,i,s),this._requestRender()}}onStart(e){this._itemsCount=e,this._scene.background=null,this._cameraControl instanceof AdjustableCameraControl3D&&(this._cameraControl.shouldIgnoreStandardBehavior=!0)}onElementFinished(e){this._itemsCount,Math.round(100/this._itemsCount*e)}onFinished(e){this._scene.background=this._standardSceneBackgroundColor,this._cameraControl instanceof AdjustableCameraControl3D&&(this._cameraControl.shouldIgnoreStandardBehavior=!1)}clearScene(){this._currentGLB&&(this._scene.remove(this._currentGLB),dispose(this._currentGLB),this._currentGLB=null),super.clearScene()}enableHD(){super.enableHD(),this._pixotron.enableAA=!1,this._pixotron.getSAOPass().enabled=!0}sceneChanged(){}getPixotronParams(){return{saoparams:{intensity:.25,occlusionWorldRadius:.4,smoothTransition:!0,samplesPerFrame:4,bias:.016,numSamples:200,accumulative:!1},shadowparams:{shadowMapResolution:1024,shadowRadius:3,shadowQuality:1,smoothTransition:!0,enableAccumulation:!0,shadowBiasMultiplier:.6,nearPlane:.01,farPlane:50,fov:110,side:THREE.FrontSide,numSamples:100},groundShadow:{enable:!1,smoothTransition:!0,numSamples:500,numSamplesPerFrame:4,onComplete:this._addGroundShadows.bind(this)}}}}__decorate([inject],GLBViewerSceneManager.prototype,"_glbInputManager",void 0);class GLBRenderWorker{constructor(e,t,i){this._prefix="https://furniture.roomle.com/3d/glb/",this._listeners=new Set,this._finishedItems=0,this._sceneManager=e,this._renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this._width=t,this._height=i,this._renderer.setSize(t,i),this._renderer.setClearColor(16777215,0),this._renderer.gammaInput=window.__RML__ENV__.initData.gammaIO,this._renderer.gammaOutput=window.__RML__ENV__.initData.gammaIO}addListener(e){this._listeners.add(e)}removeListener(e){this._listeners.delete(e)}start(e){return this._entries=[],e.forEach(e=>{this._entries.push(this._transform(e))}),this._finishedItems=0,this._listeners.forEach(e=>e.onStart(this._entries.length)),this._zip=new window.JSZip,this._doNextEntry(),new Promise((e,t)=>{this._resolve=e})}_transform(e){return{name:e.path.replace(".glb",".png"),url:this._prefix+e.path,position:new THREE.Vector3(e.camera.position.x,e.camera.position.z,-e.camera.position.y),fov:2*e.camera.fieldOfView,yaw:e.camera.rotation.z,pitch:e.camera.rotation.x}}_doNextEntry(){0===this._entries.length?(this._listeners.forEach(e=>e.onFinished(this._zip)),this._resolve(this._zip)):this._processEntry(this._entries[0])}_processEntry(e){this._sceneManager.loadGLB(e.url,!1).then(()=>{this._sceneManager.adjustCamera(e.position,e.yaw,e.pitch,e.fov),this._sceneManager.preparePerspectiveImage(this._renderer,this._width,this._height).then(t=>{this._entryFinished(e,t)})})}_entryFinished(e,t){let i=this._entries.indexOf(e);i>-1&&this._entries.splice(i,1),this._finishedItems++,this._listeners.forEach(e=>e.onElementFinished(this._finishedItems)),this._zip.file(e.name,t.blob),this._doNextEntry()}}class RoomleGLBViewer{constructor(e){this._creator_=e}init(e){return this._domHelper.setDomElement(e),this._sceneManager?(this._lifeCycleManager.resume(),Promise.resolve()):new Promise(this._initPromiseCallback.bind(this))}_initPromiseCallback(e,t){this._threeLoader.fetch().then(()=>{let t=this._scriptLoader.fetch("static/three/lib/loaders/GLTFLoader.js",{id:"gltf-loader"}),i=this._scriptLoader.fetch("static/three/lib/loaders/DRACOLoader.js",{id:"draco-loader"}),s=this._scriptLoader.fetch("static/three/Tween.js",{id:"tween-js"});Promise.all([t,i,s]).then(()=>{this._sceneManager=new GLBViewerSceneManager(this._creator_,{left:0,top:1,right:1,bottom:0}),this.enableHD(),e()})})}enableHD(){return new Promise((e,t)=>{const i=()=>{this._sceneManager.enableHD(),e()};Promise.all([this._scriptLoader.fetch("static/three/lib/postprocessing/EffectComposer.js",{id:"effect-composer-js"}),this._scriptLoader.fetch("static/three/lib/lights/RectAreaLightUniformsLib.js",{id:"rect-area-light-uniforms-lib-js"}),this._scriptLoader.fetch("static/three/lib/postprocessing/ShaderPass.js",{id:"shader-pass-js"}),this._scriptLoader.fetch("static/three/lib/postprocessing/RenderPass.js",{id:"render-pass-js"}),this._scriptLoader.fetch("static/three/lib/shaders/CopyShader.js",{id:"copy-shader-js"})]).then(()=>{this._scriptLoader.fetch("static/three/pi.min.js",{id:"pi-js"}).then(i,t)},t)})}loadGLB(e){return this._sceneManager.loadGLB(e)}loadSceneSetting(e){return this._sceneManager.loadSceneSettings(e)}loadQualitySetting(e){this._sceneManager.loadQualitySetting(e)}preparePerspectiveImage(){return this._sceneManager.preparePerspectiveImage()}processRenderList(e,t=320,i=320){let s=JSON.parse(e);this._scriptLoader.fetch("static/jszip/lib/jszip.js",{id:"jszip-js"}).then(()=>{let e=new GLBRenderWorker(this._sceneManager,t,i);e.addListener(this._sceneManager),e.start(s.items).then(t=>{t.generateAsync({type:"blob"}).then(t=>{let i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="content.zip",i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),e.removeListener(this._sceneManager)})})})}setOverrides(e){if(!e)return;const t=Object.assign(window.__RML__ENV__.initData,e);window.__RML__ENV__.initData=t}updateSize(){this._sceneManager.updateCamera()}resumeTest(e){this._domHelper.setDomElement(e),this._lifeCycleManager.resume()}pauseTest(){this._lifeCycleManager.pause()}showGUI(){this._sceneManager.showGUI()}}__decorate([inject],RoomleGLBViewer.prototype,"_domHelper",void 0),__decorate([inject],RoomleGLBViewer.prototype,"_scriptLoader",void 0),__decorate([inject],RoomleGLBViewer.prototype,"_lifeCycleManager",void 0),__decorate([inject],RoomleGLBViewer.prototype,"_threeLoader",void 0);class GlbViewer extends Main{setupGlobals(){}setupDependencies(){RoomleDependencyInjection.setup(INJECTABLES),this._context=RoomleDependencyInjection.getContext("glb-viewer"),this.lookup("logger",this._context)}cleanUpGlobals(){throw new Error("Method not implemented.")}cleanUpDependencies(){throw new Error("Method not implemented.")}constructor(){super(),Benchmark.start("loadingTime")}bootFinished(){this._viewer=new RoomleGLBViewer(this._context),window.RoomleGLBViewer||(window.RoomleGLBViewer=this._viewer)}getApi(){return this._viewer}}export{GlbViewer};
//# sourceMappingURL=chunk-e60f632a.js.map