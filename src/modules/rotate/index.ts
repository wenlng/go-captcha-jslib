import {Logic} from "./logic";
import {RotateConfig, RotateData, RotateEvent, defaultRotateData, defaultConfig} from "./types";

export class Rotate {
  logic: Logic

  constructor(private el: HTMLElement) {
    this.logic = new Logic()
  }

  setConfig(config: RotateConfig = {}) {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData(data: RotateData = {} as RotateData) {
    data = {...defaultRotateData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents(events: RotateEvent = {}) {
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
