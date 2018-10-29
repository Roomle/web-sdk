# Roomle Web SDK

The Roomle Web SDK gives you the possibility to use the same 3D packages which power the Roomle Platform. Right now you can use the Configurator, Planner and GlbViewer. 

## Setup

Roomle uses [Three.js](https://threejs.org/) to display the 3D content and a [WASM](https://webassembly.org/) module for our configuration logic. Also we provide some standard backgrounds as [glb](https://en.wikipedia.org/wiki/GlTF#GLB) files for our 3D scenes. This requiers you to copy all our static assets to some path which is available via https. These files are all located in `lib/static`. You can do this with your build tools ([webpack](https://webpack.js.org/), [rollup](https://rollupjs.org/) etc) or you can use our postinstall script. Therefore you only need to add the following data to your `package.json`:

```json
  "roomle": {
    "assetTarget": "__REPLACE__WITH__YOUR__PATH__"
  }
```

### Asset copy

The script will copy the needed assets to the path you specify, typically these path are something like `public` or `dist`,  (right now this is only triggered at the first install, so make sure that the Roomle Assets are *always* copied. We are working to make this process smoother and we will provide and update soon).

To tell Roomle where to look for this assets you need to specify a global variable before you load the Roomle source code. We need to use a global variable because we try to load all the stuff as fast and parallel as possible.

### Asset path

```html
<script>
    window.__RML__ENV__ = {
        assetPath: '__REPLACE__WITH__YOUR__PATH__SPECIFIED__IN__PACKAGE__JSON__'
    };
</script>
```
### TypeScript / ES6 Modules
All the Roomle Packages are authored in [TypeScript](https://www.typescriptlang.org/) therefore we provide declaration files for a better developer experience but the SDK is also useable as plain ES6 module. Because Roomle has very hard performance constraints (especially for webshop integrations) we use [dynamic imports](https://github.com/tc39/proposal-dynamic-import). Since dynamic imports are not supported by every browser it's important to transpile the code to something like [SystemJs](https://github.com/systemjs/systemjs). Keep in mind to provide two different bundles, one for legacy browsers and one for modern browsers. A very interesting article about this topic can be found here: [Smart Bundling: How To Serve Legacy Code Only To Legacy Browsers](https://www.smashingmagazine.com/2018/10/smart-bundling-legacy-code-browsers/)

## Usage

To use for example the Configurator you can use the following code:

```typescipt
import RoomleSdk from 'roomle-web-sdk';
((async function () {
    const roomleConfigurator = await RoomleSdk.getConfigurator();
    roomleConfigurator.boot();
    await roomleConfigurator.getApi().init(document.body);
    await roomleConfigurator.getApi().loadConfigurableItemById('usm:frame');
}()));
```

This starts the configurator and loads the item `'usm:frame'`. The api can be explored with the declaration files. Therefore an IDE with TypeScript support helps a lot. The API is constructed around events. Therefore the API provides a callbacks object where you can register your event handling system, like [RxJS](https://rxjs-dev.firebaseapp.com/), [Redux](https://redux.js.org/introduction) or your own event handling system. For example see the `onUpdateParameters` callback:

```typescript
roomleConfigurator.getApi().callbacks.onUpdateParameters = (parameters) => {
    // do something with the parameters, display them etc
};
```

To push something into our modules you just need to call the methods exposed on the API, for example:

```typescript
await roomleConfigurator.getApi().setParameter(parameter, '1000');
```

## Browser compatibility

Since our SDK is focused on high performance and high quality 3D visualization we recommend modern browsers. We suggest to target browser which support ES6 modules, for details see: https://caniuse.com/#feat=es6-module. Of course it is possible to do transpile magic and convert the code to some JavaScript version which supports more browsers but this is totally experimental and not supported by this SDK. If you do apply transpile magic, make sure to send the correct bundle to every browser and not a legacy version to everybody.

## Example

A very simplistic example can be found here: https://github.com/Roomle/web-sdk-example. This repo is not intended to be a boilerplate or a project setup. It should just show you all the parts which needs to work together so that you can use our SDK in your project. 