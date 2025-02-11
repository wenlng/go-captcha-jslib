import {Logic} from "./logic";
import {ButtonConfig, ButtonState, defaultConfig, defaultState} from "./types";

// export class Button {
//   logic: Logic
//   private el: HTMLElement
//
//   constructor(config: ButtonConfig = {}) {
//     this.logic = new Logic()
//     this.setConfig(config)
//   }
//
//   setConfig(config: ButtonConfig = {}) {
//     config = {...defaultConfig(), ...config}
//     this.logic.setPropsConfig(config)
//     return this
//   }
//
//   setState(state: ButtonState = {}) {
//     state = {...defaultState(), ...state}
//     this.logic.setPropsState(state)
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
// }

export class ButtonCore {
  logic: Logic
  private el: HTMLElement

  constructor(config: ButtonConfig = {}) {
    this.logic = new Logic()
    this.setConfig(config)
  }

  setConfig = (config: ButtonConfig = {}) => {
    config = {...defaultConfig(), ...config}
    this.logic.setPropsConfig(config)
    return this
  }

  setState = (state: ButtonState = {}) => {
    state = {...defaultState(), ...state}
    this.logic.setPropsState(state)
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
