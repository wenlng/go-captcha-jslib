import {Logic} from "./logic";
import {ButtonConfig, ButtonState, defaultConfig, defaultState} from "./types";

export class Button {
  logic: Logic

  constructor(private el: HTMLElement) {
    this.logic = new Logic()
  }

  setConfig(config: ButtonConfig = {}) {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setState(state: ButtonState = {}) {
    state = {...defaultState(), ...state}
    this.logic.setPropsState(state)
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
}
