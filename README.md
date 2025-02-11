<div align="center">
<img width="120" style="padding-top: 50px; margin: 0;" src="http://47.104.180.148/go-captcha/gocaptcha_logo.svg?v=1"/>
<h1 style="margin: 0; padding: 0">Go Captcha</h1>
<p>Behavior Captcha For Javascript</p>

</div>

<br/>

> English | [中文](README_zh.md)

<br/>

<p> ⭐️ If it helps you, please give a star.</p>

<img src="http://47.104.180.148/go-captcha/go-captcha-v2.jpg" alt="Poster">

## Install Module
```shell
yarn add go-captcha-jslib
# or
npm install go-captcha-jslib
# or
pnpm install go-captcha-jslib

```

### Import Module
``` javascript

// Import css，Need css-loader processer
import "go-captcha-jslib/dist/gocaptcha.global.css"

// Import Module
import { GoCaptcha } from "go-captcha-jslib";
console.log(GoCaptcha)
// OR
const { GoCaptcha } = require('go-captcha-jslib')
console.log(GoCaptcha)

```


## Browser Install
#### Bower Tool
```shell
bower install wenlng/go-captcha-jslib --save
```
```html

<!-- css -->
<link href="/bower_components/go-captcha-jslib/dist/gocaptcha.global.css" rel="stylesheet">
<!-- Js -->
<script src="/bower_components/go-captcha-jslib/dist/gocaptcha.global.js"></script>

<script>
    console.log(window.GoCaptcha)
</script>
```

#### CDN Import

```html
<!-- Js -->
<script src="https://unpkg.com/go-captcha-jslib@${VERSION}/dist/gocaptcha.global.js"></script>
<!-- css -->
<link href="https://unpkg.com/go-captcha-jslib@${VERSION}/dist/gocaptcha.global.css" rel="stylesheet">

<script>
    console.log(window.GoCaptcha)
</script>
```

## Click Mode
```html
<div id="click-wrap"/>

<script>
  const el = document.getElementById("click-wrap");
  const capt = new GoCaptcha.Click({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })
  
  capt.setData({
    image: 'xxx',
    thumb: 'xxx',
  })
  
  capt.setEvents({
    click(x,  y) {
      // ..
    },
    confirm(dots, reset) {
      // ...
      // reset()
    },
    refresh() {
      // ...
    },
    close() {
      // ...
    }
  })
</script>
```


```ts
// config = {}
interface ClickConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  buttonText?: string;
  iconSize?: number;
  dotSize?: number;
}

// data = {}
interface ClickData {
  image: string;
  thumb: string;
}

// events = {}
interface ClickEvents {
  click?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (dots: Array<ClickDot>, reset:() => void) => boolean;
}

// instance methods
interface ClickInstanceMethods {
  setConfig: (config: ClickConfig) => void,
  setData: (data: ClickData) => void,
  setEvents: (events: ClickEvents) => void,
  mount: (el: HTMLElement) => void,
  destroy: () => void,
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## Slide Mode
```html
<div id="slide-wrap"/>

<script>
  const el = document.getElementById("slide-wrap");
  const capt = new GoCaptcha.Slide({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })
  
  capt.setData({
    image: 'xxx',
    thumb: 'xxx',
    thumbWidth: 100;
    thumbHeight: 100;
    thumbX: 100;
    thumbY: 100;
  })
  
  capt.setEvents({
    click(x,  y) {
      // ..
    },
    confirm(point, reset) {
      // ...
      // reset()
    },
    refresh() {
      // ...
    },
    close() {
      // ...
    }
  })
</script>
```

```ts
// config = {}
interface SlideConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlidePoint, reset:() => void) => boolean;
}

// instance methods
interface SlideInstanceMethods {
  setConfig: (config: SlideConfig) => void,
  setData: (data: SlideData) => void,
  setEvents: (events: SlideEvents) => void,
  mount: (el: HTMLElement) => void,
  destroy: () => void,
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## Drag-And-Drop Mode

```html
<div id="slide-region-wrap"/>

<script>
  const el = document.getElementById("slide-region-wrap");
  const capt = new GoCaptcha.SlideRegion({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })
  
  capt.setData({
    image: 'xxx',
    thumb: 'xxx',
  })
  
  capt.setEvents({
    click(x,  y) {
      // ..
    },
    confirm(dots, reset) {
      // ...
      // reset()
    },
    refresh() {
      // ...
    },
    close() {
      // ...
    }
  })
</script>
```

```ts
// config = {}
interface SlideRegionConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideRegionData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideRegionEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlideRegionPoint, reset:() => void) => boolean;
}

// instance methods
interface SlideRegionInstanceMethods {
  setConfig: (config: SlideRegionConfig) => void,
  setData: (data: SlideRegionData) => void,
  setEvents: (events: SlideRegionEvents) => void,
  mount: (el: HTMLElement) => void,
  destroy: () => void,
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

```

## Rotation Mode
```html
<div id="rotate-wrap"/>

<script>
  const el = document.getElementById("rotate-wrap");
  const capt = new GoCaptcha.Rotate({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })
  
  capt.setData({
    image: 'xxx',
    thumb: 'xxx',
  })
  
  capt.setEvents({
    click(x,  y) {
      // ..
    },
    confirm(dots, reset) {
      // ...
      // reset()
    },
    refresh() {
      // ...
    },
    close() {
      // ...
    }
  })
</script>
```

```ts
// config = {}
interface RotateConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface RotateData {
  angle: number;
  image: string;
  thumb: string;
}

// events = {}
interface RotateEvents {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number, reset:() => void) => boolean;
}

// instance methods
interface ClickInstanceMethods {
  setConfig: (config: ClickConfig) => void,
  setData: (data: ClickData) => void,
  setEvents: (events: ClickEvents) => void,
  mount: (el: HTMLElement) => void,
  destroy: () => void,
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

```


## Button
```html
<div id="button-wrap"/>

<script>
  const el = document.getElementById("button-wrap");
  const capt = new GoCaptcha.Button({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  
  // capt.setConfig({
  //   width: 200,
  //   height: 28,
  // })
  
  capt.setState({
    title: 'xxx',
    type: 'default',
    clickEvent: () => {console.log('hello ok')},
  })
</script>
```


```ts

export interface ButtonConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}

interface ButtonState {
  config?: CaptchaConfig;
  disabled?: boolean;
  type?: "default" | "warn" | "error" | "success";
  title?: string;
  clickEvent?: ()=>void;
}


// instance methods
interface ButtonInstanceMethods {
  setConfig: (config: ButtonConfig) => void,
  setState: (data: ButtonState) => void,
  mount: (el: HTMLElement) => void,
  destroy: () => void,
}

```