import {Logic} from "./logic";
import {ClickConfig, ClickData, ClickEvent, defaultClickData, defaultConfig} from "./types";

// export class Click {
//   logic: Logic
//
//   private el: HTMLElement
//
//   constructor(config: ClickConfig = {}) {
//     this.logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: ClickConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this.logic.setPropsConfig(config)
//     return this
//   }
//
//   setData(data: ClickData = {} as ClickData) {
//     data = {...defaultClickData(), ...data}
//     this.logic.setPropsData(data)
//     return this
//
//   }
//
//   setEvents(events: ClickEvent = {}) {
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

export class ClickCore {
  logic: Logic

  private el: HTMLElement

  constructor(config: ClickConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: ClickConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData = (data: ClickData = {} as ClickData) => {
    data = {...defaultClickData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents = (events: ClickEvent = {}) => {
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