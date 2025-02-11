import {Logic} from "./logic";
import {RotateConfig, RotateData, RotateEvent, defaultRotateData, defaultConfig} from "./types";

// export class Rotate {
//   logic: Logic
//
//   private el: HTMLElement
//
//   constructor(config: RotateConfig = {}) {
//     this.logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: RotateConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this.logic.setPropsConfig(config)
//     return this
//   }
//
//   setData(data: RotateData = {} as RotateData) {
//     data = {...defaultRotateData(), ...data}
//     this.logic.setPropsData(data)
//     return this
//
//   }
//
//   setEvents(events: RotateEvent = {}) {
//     events = {...events}
//     this.logic.setPropsEvent(events)
//     return this
//   }
//
//   mount(el: HTMLElement) {
//     if (this.el) return
//     this.logic.mount(el)
//     this.el = el
//     return this
//   }
//
//   destroy() {
//     this.logic.unmount()
//     this.el = null
//     return this
//   }
//
//   clear() {
//     this.logic.clear()
//   }
//
//   reset() {
//     this.logic.reset()
//   }
//
//   refresh() {
//     this.logic.refresh()
//   }
//
//   close() {
//     this.logic.close()
//   }
// }

export class RotateCore {
  logic: Logic

  private el: HTMLElement

  constructor(config: RotateConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: RotateConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData = (data: RotateData = {} as RotateData) => {
    data = {...defaultRotateData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents = (events: RotateEvent = {}) => {
    events = {...events}
    this.logic.setPropsEvent(events)
    return this
  }

  mount = (el: HTMLElement) => {
    if (this.el) return
    this.logic.mount(el)
    this.el = el
    return this
  }

  destroy = () => {
    this.logic.unmount()
    this.el = null
    return this
  }

  clear = () => {
    this.logic.clear()
  }

  reset = () => {
    this.logic.reset()
  }

  refresh = () => {
    this.logic.refresh()
  }

  close = () => {
    this.logic.close()
  }
}

export function Rotate(config: RotateConfig = {}) {
  const core = new RotateCore(config)
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