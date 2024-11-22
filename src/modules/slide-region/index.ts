import {Logic} from "./logic";
import {SlideRegionConfig, SlideRegionData, SlideRegionEvent, defaultSlideRegionData, defaultConfig} from "./types";
import {ButtonConfig} from "../button/types";

export class SlideRegion {
  logic: Logic

  private el: HTMLElement

  constructor(config: ButtonConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
  }

  setConfig(config: SlideRegionConfig = {}) {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData(data: SlideRegionData = {} as SlideRegionData) {
    data = {...defaultSlideRegionData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents(events: SlideRegionEvent = {}) {
    events = {...events}
    this.logic.setPropsEvent(events)
    return this
  }

  mount(el: HTMLElement) {
    if (this.el) return
    this.logic.mount(el)
    this.el = el
    return this
  }

  destroy() {
    this.logic.unmount()
    this.el = null
    return this
  }

  clear() {
    this.logic.clear()
  }

  reset() {
    this.logic.reset()
  }

  refresh() {
    this.logic.refresh()
  }

  close() {
    this.logic.close()
  }
}
