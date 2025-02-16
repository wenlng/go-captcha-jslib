import {Logic} from "./logic";
import {RotateConfig, RotateData, RotateEvent, defaultRotateData, defaultConfig} from "./types";

export class RotateCore {
  private _logic: Logic

  private _el: HTMLElement

  constructor(config: RotateConfig = {}) {
    this._logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: RotateConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this._logic.setPropsConfig(config)
    return this
  }

  setData = (data: RotateData = {} as RotateData) => {
    data = {...defaultRotateData(), ...data}
    this._logic.setPropsData(data)
    return this

  }

  setEvents = (events: RotateEvent = {}) => {
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