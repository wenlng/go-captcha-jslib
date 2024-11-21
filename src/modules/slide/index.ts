import {Logic} from "./logic";
import {SlideConfig, SlideData, SlideEvent, defaultSlideData, defaultConfig} from "./types";

export class Slide {
  logic: Logic

  constructor(private el: HTMLElement) {
    this.logic = new Logic()
  }

  setConfig(config: SlideConfig = {}) {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData(data: SlideData = {} as SlideData) {
    data = {...defaultSlideData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents(events: SlideEvent = {}) {
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
