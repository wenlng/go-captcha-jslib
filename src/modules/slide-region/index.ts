import {Logic} from "./logic";
import {SlideRegionConfig, SlideRegionData, SlideRegionEvent, defaultSlideRegionData, defaultConfig} from "./types";

// export class SlideRegion {
//   logic: Logic
//
//   private el: HTMLElement
//
//   constructor(config: SlideRegionConfig = {}) {
//     this.logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: SlideRegionConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this.logic.setPropsConfig(config)
//     return this
//   }
//
//   setData(data: SlideRegionData = {} as SlideRegionData) {
//     data = {...defaultSlideRegionData(), ...data}
//     this.logic.setPropsData(data)
//     return this
//
//   }
//
//   setEvents(events: SlideRegionEvent = {}) {
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

export class SlideRegionCore {
  logic: Logic

  private el: HTMLElement

  constructor(config: SlideRegionConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: SlideRegionConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData = (data: SlideRegionData = {} as SlideRegionData) => {
    data = {...defaultSlideRegionData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents = (events: SlideRegionEvent = {}) => {
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

export function SlideRegion(config: SlideRegionConfig = {}) {
  const core = new SlideRegionCore(config)
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