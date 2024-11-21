import {Logic} from "./logic";
import {SlideRegionConfig, SlideRegionData, SlideRegionEvent, defaultSlideRegionData, defaultConfig} from "./types";

export class SlideRegion {
  logic: Logic

  constructor(private el: HTMLElement) {
    this.logic = new Logic()
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

  mount() {
    this.logic.mount(this.el)
    return this
  }

  destroy() {
    this.logic.unmount()
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
