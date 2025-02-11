import {Logic} from "./logic";
import {SlideConfig, SlideData, SlideEvent, defaultSlideData, defaultConfig} from "./types";

// export class Slide {
//   logic: Logic
//
//   private el: HTMLElement
//
//   constructor(config: SlideConfig = {}) {
//     this._logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: SlideConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this._logic.setPropsConfig(config)
//     return this
//   }
//
//   setData(data: SlideData = {} as SlideData) {
//     data = {...defaultSlideData(), ...data}
//     this._logic.setPropsData(data)
//     return this
//
//   }
//
//   setEvents(events: SlideEvent = {}) {
//     events = {...events}
//     this._logic.setPropsEvent(events)
//     return this
//   }
//
//   mount(el: HTMLElement) {
//     if (this.el) return
//     this._logic.mount(el)
//     this.el = el
//     return this
//   }
//
//   destroy() {
//     this._logic.unmount()
//     this.el = null
//     return this
//   }
//
//   clear() {
//     this._logic.clear()
//   }
//
//   reset() {
//     this._logic.reset()
//   }
//
//   refresh() {
//     this._logic.refresh()
//   }
//
//   close() {
//     this._logic.close()
//   }
// }

export class SlideCore {
  private _logic: Logic

  private _el: HTMLElement

  constructor(config: SlideConfig = {}) {
    this._logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: SlideConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this._logic.setPropsConfig(config)
    return this
  }

  setData = (data: SlideData = {} as SlideData) => {
    data = {...defaultSlideData(), ...data}
    this._logic.setPropsData(data)
    return this

  }

  setEvents = (events: SlideEvent = {}) => {
    events = {...events}
    this._logic.setPropsEvent(events)
    return this
  }

  mount = (el: HTMLElement) => {
    if (this._el) return
    this._logic.mount(el)
    this._el = el
    return this
  }

  destroy = () => {
    this._logic.unmount()
    this._el = null
    return this
  }

  clear = () => {
    this._logic.clear()
  }

  reset = () => {
    this._logic.reset()
  }

  refresh = () => {
    this._logic.refresh()
  }

  close = () => {
    this._logic.close()
  }
}

export function Slide (config: SlideConfig = {}) {
  const core = new SlideCore(config)
  return {
    setConfig: core.setConfig,
    setData: core.setData,
    setEvents: core.setEvents,
    mount: core.mount,
    destroy: core.destroy,
    clear: core.clear,
    reset: core.reset,
    refresh: core.refresh,
    close: core.close
  }
}