System.register(["./chunk-4c9a4d80.legacy.js","./chunk-eb2e1ffb.legacy.js"],function(t,e){var s,a,n,o;return{setters:[function(t){s=t.a,a=t.b},function(t){n=t.a,o=t.b}],execute:function(){var e=t("default",function(){function t(){var e=this;s(this,t),this._statPanels=[],this._scriptLoader.fetch("static/three/stats.min.js",{id:"stats-js"}).then(function(){return e._init()},function(t){return console.error(t)})}return a(t,[{key:"_init",value:function(){var t=new Stats;t.showPanel(0),t.dom.style.cssText="position:absolute;top:0px;left:0px;",document.body.appendChild(t.dom),this._statPanels.push(t);var e=new Stats;e.showPanel(2),e.dom.style.cssText="position:absolute;top:50px;left:0px;",document.body.appendChild(e.dom),this._statPanels.push(e);var s=new Stats;this._drawPanel=s.addPanel(new Stats.Panel("draw","#0f0","#000")),s.showPanel(3),s.dom.style.cssText="position:absolute;top:100px;left:0px;",document.body.appendChild(s.dom),this._statPanels.push(s);var a=new Stats;this._trianglesPanel=a.addPanel(new Stats.Panel("poly","#0f0","#000")),a.showPanel(3),a.dom.style.cssText="position:absolute;top:150px;left:0px;",document.body.appendChild(a.dom),this._statPanels.push(a);var n=new Stats;this._geometryPanel=n.addPanel(new Stats.Panel("geo","#f00","#000")),n.showPanel(3),n.dom.style.cssText="position:absolute;top:200px;left:0px;",document.body.appendChild(n.dom),this._statPanels.push(n);var o=new Stats;this._texturePanel=o.addPanel(new Stats.Panel("tex","#f00","#000")),o.showPanel(3),o.dom.style.cssText="position:absolute;top:250px;left:0px;",document.body.appendChild(o.dom),this._statPanels.push(o)}},{key:"update",value:function(t){this._drawPanel&&t.render.calls>0&&this._drawPanel.update(t.render.calls,500),this._trianglesPanel&&t.render.triangles>0&&this._trianglesPanel.update(t.render.triangles,1e4),this._geometryPanel&&t.memory.geometries>0&&this._geometryPanel.update(t.memory.geometries,1e4),this._texturePanel&&t.memory.textures>0&&this._texturePanel.update(t.memory.textures,1e4),this._statPanels.length>0&&this._statPanels.forEach(function(t){return t.update()})}}]),t}());n([o],e.prototype,"_scriptLoader",void 0)}}});
//# sourceMappingURL=stats-helper.legacy.js.map