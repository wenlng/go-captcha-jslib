import {Logic} from "./logic";
import {SlideConfig, SlideData, SlideEvent, defaultSlideData, defaultConfig} from "./types";
import {ButtonConfig} from "../button/types";

export class Slide {
  logic: Logic

  private el: HTMLElement

  constructor(config: ButtonConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
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
