export default class{static getConfigurator(){return new Promise((e,r)=>import("./configurator.js").then(({Configurator:r})=>e(new r),r))}static getPlanner(){return new Promise((e,r)=>import("./planner.js").then(({Planner:r})=>e(new r),r))}static getGlbViewer(){return new Promise((e,r)=>import("./glb-viewer.js").then(({GlbViewer:r})=>e(new r),r))}}
//# sourceMappingURL=roomle-sdk.js.map
