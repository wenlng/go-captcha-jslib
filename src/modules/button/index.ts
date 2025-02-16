import {Logic} from "./logic";
import {ButtonConfig, ButtonState, defaultConfig, defaultState} from "./types";

export class ButtonCore {
  private _logic: Logic
  private _el: HTMLElement

  constructor(config: ButtonConfig = {}) {
    this._logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: ButtonConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this._logic.setPropsConfig(config)
    return this
  }

  setState = (state: ButtonState = {}) => {
    state = {...defaultState(), ...state}
    this._logic.setPropsState(state)
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
}

export function Button(config: ButtonConfig = {}) {
  const core = new ButtonCore(config)
  return {
    setConfig: core.setConfig,
    setState: core.setState,
    mount: core.mount,
    destroy: core.destroy,
  }
}
