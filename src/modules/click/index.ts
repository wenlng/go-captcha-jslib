import {Logic} from "./logic";
import {ClickConfig, ClickData, ClickEvent, defaultClickData, defaultConfig} from "./types";

export class Click {
  logic: Logic

  constructor(private el: HTMLElement) {
    this.logic = new Logic()
  }

  setConfig(config: ClickConfig = {}) {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setData(data: ClickData = {} as ClickData) {
    data = {...defaultClickData(), ...data}
    this.logic.setPropsData(data)
    return this

  }

  setEvents(events: ClickEvent = {}) {
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