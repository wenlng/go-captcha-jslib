import {Logic} from "./logic";
import {ClickConfig, ClickData, ClickEvent, defaultClickData, defaultConfig} from "./types";

// export class Click {
//   logic: Logic
//
//   private el: HTMLElement
//
//   constructor(config: ClickConfig = {}) {
//     this._logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: ClickConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this._logic.setPropsConfig(config)
//     return this
//   }
//
//   setData(data: ClickData = {} as ClickData) {
//     data = {...defaultClickData(), ...data}
//     this._logic.setPropsData(data)
//     return this
//
//   }
//
//   setEvents(events: ClickEvent = {}) {
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

export class ClickCore {
  private _logic: Logic

  private _el: HTMLElement

  constructor(config: ClickConfig = {}) {
    this._logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: ClickConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this._logic.setPropsConfig(config)
    return this
  }

  setData = (data: ClickData = {} as ClickData) => {
    data = {...defaultClickData(), ...data}
    this._logic.setPropsData(data)
    return this

  }

  setEvents = (events: ClickEvent = {}) => {
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

export function Click(config: ClickConfig = {}) {
  const core = new ClickCore(config)
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