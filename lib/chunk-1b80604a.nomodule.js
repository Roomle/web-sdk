System.register(["./chunk-f6f7cfde.nomodule.js","./chunk-e5bfbe75.nomodule.js","./chunk-c97bfe47.nomodule.js","./chunk-213d6596.nomodule.js"],function(e,t){var i,s,n,h,o;return{setters:[function(){},function(e){i=e.d,s=e.j},function(e){n=e.a,h=e.b},function(e){o=e.a}],execute:function(){const t="component_dimensioning_plane_material",a="component_dimensioning_text_material",_=.02,d=3618615,r=16777215;class l extends THREE.Object3D{constructor(e){super(),this._label="",this._parameters={size:.1,height:.001,curveSegments:2,bevelEnabled:!0,bevelThickness:.001,bevelSize:.001},this.topDown=!1,this._parameters.font=e,this._position=new THREE.Vector3,this._initMaterials(),this._init(),this._update()}_initMaterials(){this._cacheHolder.materialCache.has(t)?this._planeMaterial=this._cacheHolder.materialCache.get(t):(this._planeMaterial=new THREE.MeshBasicMaterial({color:r,side:THREE.DoubleSide,opacity:.8,transparent:!0}),this._cacheHolder.materialCache.set(t,this._planeMaterial)),this._cacheHolder.materialCache.has(a)?this._textMaterial=this._cacheHolder.materialCache.get(a):(this._textMaterial=new THREE.MeshPhongMaterial({color:d}),this._cacheHolder.materialCache.set(a,this._textMaterial))}_init(){let e=new THREE.Geometry;this._text=new THREE.Mesh(e,this._textMaterial),this._text.name="text with background text "+this._label,this._plane=new THREE.Mesh(e,this._planeMaterial),this._plane.name="text with background plane "+this._label,this._textGeometry=new THREE.TextGeometry(this._label,this._parameters),this._textGeometry.computeBoundingBox(),this._text.geometry=this._textGeometry,this.add(this._text),this.add(this._plane)}update(e,t,i,s){this._position.copy(e),this._dimensioningType=t,this._cameraPosition=s,this._label=i;const n=this._cameraPosition.distanceTo(this._text.position),h=Math.max(.01,n/100),o=Math.max(5e-4,n/5e3);this._parameters.bevelThickness=o,this._parameters.bevelSize=o,this._parameters.size=h,this._textGeometry=new THREE.TextGeometry(this._label,this._parameters),this._textGeometry.computeBoundingBox(),this._text.geometry=this._textGeometry,this._update()}_update(){if(this.topDown){let e=new THREE.Quaternion;e.setFromAxisAngle(new THREE.Vector3(-1,0,0),Math.PI/2),this._updateText(this._textGeometry,e,new THREE.Vector3)}else if(this._updateText(this._textGeometry,new THREE.Quaternion,new THREE.Vector3),this._cameraPosition){const e=Math.atan2(this._cameraPosition.x-this._position.x,this._cameraPosition.z-this._position.z);this._text.rotation.y=e,this._plane.rotation.y=e}}_updateText(e,t,i){let s=new THREE.Vector3;s.copy(this._position),i.x*=this._getXSign(),s.add(i);let n=e.boundingBox.getSize(new THREE.Vector3);e.center(),this._text.position.copy(s),this._text.quaternion.copy(t);let h=new THREE.PlaneGeometry(n.x+_,n.y+_,32);h.center(),this._plane.geometry=h,this._plane.position.copy(s),this._plane.quaternion.copy(t)}_getXSign(){return!this._cameraPosition||this._cameraPosition.x>=0?1:-1}dispose(){i(this)}}n([h],l.prototype,"_cacheHolder",void 0);const m=3618615,c=16777215,p=.05;class u{constructor(e){this._cameraPosition=new THREE.Vector3,this._textUpdated=!1,this._topDimensions=!1,this._initialized=new s,this._enabled=!1,this._dimensionsVisible=!1,this._creator_=e,this._lineMaterial=new THREE.LineBasicMaterial({color:m,linewidth:2});let t=new THREE.Geometry;this._widthLine=new THREE.Line(t,this._lineMaterial),this._widthLine.name="dimension width line",this._heightLine=new THREE.Line(t,this._lineMaterial),this._heightLine.name="dimension height line",this._depthLine=new THREE.Line(t,this._lineMaterial),this._depthLine.name="dimension depth line",this._planeMaterial=new THREE.MeshBasicMaterial({color:c,side:THREE.DoubleSide,opacity:.8,transparent:!0}),o.loadFont("static/fonts/rubik_regular_sub.json").then(e=>{this._font=e,this._loaded()})}_loaded(){this.update(!1),this.addToScene(this._scene,this._uiScene),this._initialized.resolve()}_performUpdate(e){this._enabled&&(this._lineBounds||e)&&this._font&&(this._updateHeight(),this._updateWidth(),this._updateDepth())}_updateWidth(){let e=new THREE.Geometry,t=this._getWidthEdge();e.vertices.push(t.start,t.end),this._widthLine.geometry.dispose(),this._widthLine.geometry=e;let i=t.getCenter(new THREE.Vector3);this._widthText||(this._widthText=new l(this._font)),this._widthText.topDown=this._topDimensions;const s=this._unitFormatter.formatMMValueToUnitString(1e3*this._dimensions.x);this._widthText.update(i,0,s,this._cameraPosition)}_updateHeight(){let e=new THREE.Geometry,t=this._getHeightEdge();e.vertices.push(t.start,t.end),this._heightLine.geometry.dispose(),this._heightLine.geometry=e;let i=t.getCenter(new THREE.Vector3);this._heightText||(this._heightText=new l(this._font)),this._heightText.topDown=this._topDimensions;const s=this._unitFormatter.formatMMValueToUnitString(1e3*this._dimensions.y);this._heightText.update(i,1,s,this._cameraPosition)}_updateDepth(){let e=new THREE.Geometry,t=this._getDepthEdge();e.vertices.push(t.start,t.end),this._depthLine.geometry.dispose(),this._depthLine.geometry=e;let i=t.getCenter(new THREE.Vector3);this._depthText||(this._depthText=new l(this._font)),this._depthText.topDown=this._topDimensions;const s=this._unitFormatter.formatMMValueToUnitString(1e3*this._dimensions.z);this._depthText.update(i,2,s,this._cameraPosition)}updateBounds(e){this._dimensions=e.getSize(new THREE.Vector3),this._lineBounds=e.clone(),this._lineBounds.expandByScalar(p),this._textUpdated=!1}update(e=!1){this._enabled&&!this._dimensionsVisible&&(this._dimensionsVisible=!0,this._visibilityChangedCallback()),this._performUpdate(e)}addToScene(e,t){this._widthText&&this._widthLine&&this._heightText&&this._heightLine&&this._heightText&&this._heightLine&&(e.add(this._widthLine),t.add(this._widthText),e.add(this._heightLine),t.add(this._heightText),e.add(this._depthLine),t.add(this._depthText))}removeFromScene(e,t){e.remove(this._widthLine),t.remove(this._widthText),e.remove(this._heightLine),t.remove(this._heightText),e.remove(this._depthLine),t.remove(this._depthText)}_getWidthEdge(){return this._cameraPosition.z>=0?new THREE.Line3(new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.max.z),new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.max.z)):new THREE.Line3(new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.min.z),new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.min.z))}_getDepthEdge(){return this._cameraPosition.x>=0?new THREE.Line3(new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.min.z),new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.max.z)):new THREE.Line3(new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.min.z),new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.max.z))}_getHeightEdge(){return this._cameraPosition.x>=0&&this._cameraPosition.z>=0?new THREE.Line3(new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.max.z),new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.max.y,this._lineBounds.max.z)):this._cameraPosition.x<0&&this._cameraPosition.z>=0?new THREE.Line3(new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.max.z),new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.max.y,this._lineBounds.max.z)):this._cameraPosition.x>=0&&this._cameraPosition.z<0?new THREE.Line3(new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.min.y,this._lineBounds.min.z),new THREE.Vector3(this._lineBounds.max.x,this._lineBounds.max.y,this._lineBounds.min.z)):new THREE.Line3(new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.min.y,this._lineBounds.min.z),new THREE.Vector3(this._lineBounds.min.x,this._lineBounds.max.y,this._lineBounds.min.z))}onDimensionsVisibilityChanged(e){this._onChange=e}enableTopDimensions(){this.enableDimensions(),this._topDimensions=!0,this._heightLine.visible=!1,this._heightText.visible=!1,this.update(!0)}disableTopDimensions(){this._topDimensions=!1,this._heightLine.visible=!0,this._heightText.visible=!0,this.disableDimensions()}enableDimensions(){this._enabled=!0,this.update(!0),this.addToScene(this._scene,this._uiScene)}disableDimensions(){this._enabled=!1,this._dimensionsVisible&&(this._dimensionsVisible=!1,this._visibilityChangedCallback()),this.removeFromScene(this._scene,this._uiScene)}_visibilityChangedCallback(){this._onChange&&this._onChange(this._dimensionsVisible)}_clear(){this._lineMaterial.dispose(),this._planeMaterial.dispose(),this._widthLine.geometry.dispose(),this._heightLine.geometry.dispose(),this._depthLine.geometry.dispose(),this._heightText.dispose(),this._heightText.dispose(),this._depthText.dispose()}getBoundingBox(){const e=new THREE.Box3;return e.expandByObject(this._widthLine),e.expandByObject(this._widthText),e.expandByObject(this._heightLine),e.expandByObject(this._heightText),e.expandByObject(this._depthLine),e.expandByObject(this._depthText),e}setVisibility(e){this._heightLine&&this._widthLine&&this._depthLine&&this._heightText&&this._widthText&&this._depthText&&(this._heightLine.visible=e,this._heightText.visible=e,this._widthLine.visible=e,this._widthText.visible=e,this._depthLine.visible=e,this._depthText.visible=e)}moveCameraStart(e){this.setVisibility(!1),this._cameraPosition=e,this.update()}moveCameraEnd(e){this.setVisibility(!0),this._cameraPosition=e,this.update()}clearScene(e){this._clear()}setScene(e){this._scene=e}setUiScene(e){this._uiScene=e}needsUiScene(){return!0}isInitialized(){return this._initialized.wait()}}e("default",u),n([h],u.prototype,"_unitFormatter",void 0)}}});
//# sourceMappingURL=chunk-1b80604a.nomodule.js.map