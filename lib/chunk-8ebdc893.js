const ROOMLE_COLORS={PRIMARY:"#db0000",ON_PRIMARY:"#ffffff",DEFAULT_BACKGROUND:"#f7f7f7",SELECTION:"#ffffff"},setCursor=e=>{document.body.style.cursor=e},handleJsonResponse=e=>{const t=e.headers.get("content-type");if(t&&t.includes("application/json"))return e.json();throw new TypeError("No JSON returned")},getColors=()=>window.__RML__ENV__&&window.__RML__ENV__.initData.colors?window.__RML__ENV__.initData.colors:ROOMLE_COLORS,getAssetPath=()=>window.__RML__ENV__&&window.__RML__ENV__.assetPath?window.__RML__ENV__.assetPath:"",uuid=(e=null)=>e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):(1e7.toString()+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid),setWriteable=(e,t,r)=>{setDescriptor(e,t,{writable:r})},setDescriptor=(e,t,r)=>{const a=Object.getOwnPropertyDescriptor(e,t);for(let e in r)r.hasOwnProperty(e)&&(a[e]=r[e]);Object.defineProperty(e,t,a)},createBenchmarkMaterial=e=>({id:e,name:e,externalIdentifier:"test-identifier",group:"test-group",groupLabel:"test-group-label",color:"#"+new THREE.Color(.5,.5,.5).getHexString(),thumbnail:createBenchmarkUrl(e,15),label:"test-label",textures:[1,2,3],shading:{alpha:1,metallic:.5,basecolor:{r:.5,g:.5,b:.5},roughness:.5,doubleSided:!1,alphaCutoff:.5},active:!0,tags:[]}),createBenchmarkTexture=e=>{const t=e.split("_"),r=parseInt(t[1],10);return{mapping:"RGB",id:e,material:e,image:createBenchmarkUrl(e),url:createBenchmarkUrl(e),height:r,width:r,mmHeight:1,mmWidth:1,tileable:!0}},createBenchmarkUrl=(e,t)=>{const r=e.split("_");return t||(t=parseInt(r[1],10)),"https://loremflickr.com/"+t+"/"+t+"?lock="+Math.abs(parseFloat(r[2]))},isString=e=>"string"==typeof e||e instanceof String,objectArrayToMap=(e,t)=>e.reduce((e,r)=>{if("object"!=typeof r)return console.warn("objectArrayToMap only works for arrays of objects"),e;const a=r[t];return a?(e.has(a)||e.set(a,r),e):(console.warn('Object has no key "'+t+'" therefore we do not know where to put it'),e)},new Map),throttle=(e,t=16)=>{let r,a=!1,o=0,n=null;return function(...s){r||(r=Date.now()),!a||r+t-Date.now()<0?(e.apply(this,[...arguments]),r=Date.now(),a=!0):o++,n||(n=setInterval(()=>{o&&e.apply(this,[...arguments]),o=0,clearInterval(n),n=null},t))}},debounce=function(e,t){let r;return(...a)=>{clearTimeout(r),r=setTimeout(()=>{e(...a)},t)}};export{objectArrayToMap as a,getAssetPath as b,setCursor as c,getColors as d,handleJsonResponse as e,ROOMLE_COLORS as f,debounce as g,uuid as h,createBenchmarkMaterial as i,createBenchmarkTexture as j,setDescriptor as k,setWriteable as l,throttle as m,isString as n};
//# sourceMappingURL=chunk-8ebdc893.js.map