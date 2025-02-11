import {
  makeBtnDefaultSvgIcon, makeBtnErrorSvgIcon, makeBtnSuccessSvgIcon, makeBtnWarnSvgIcon,
} from "../../icons/icons";
import {computed, h, reactive, render, watch} from "../../libs/render";
import {ButtonConfig, ButtonState, defaultConfig, defaultState} from "./types";
import {deepCopyObject} from "../../helper/helper";

export class Logic {
  name: string = "ButtonComponent"

  private logicProps = reactive({
    config: {...defaultConfig()},
    state: {...defaultState()}
  })

  localConfig = reactive({...deepCopyObject(this.logicProps.config)})
  localState = reactive({...deepCopyObject(this.logicProps.state)})

  btnClass: any
  btnStyles: any

  private unmountFn: any

  constructor() {
    watch(() => this.logicProps.config, (newVal, oldVal) => {
      Object.assign(this.localConfig, newVal)
    },{ deep: true })

    watch(() => this.logicProps.state, (newVal, oldVal) => {
      Object.assign(this.localState, newVal)
    },{ deep: true })
  }

  setPropsConfig = (config: ButtonConfig) => {
    this.logicProps.config = config
  }

  setPropsState = (state: ButtonState ) => {
    this.logicProps.state = state
  }

  setup = () => {
    const localConfig = this.localConfig

    this.btnClass = computed(() => {
      const type = this.localState.type
      const disabled = this.localState.disabled
      const tc = `gc-${type}`
      const arr = ["go-captcha", "gc-button-mode", "gc-btn-block", tc, disabled ? "gc-disabled" : ""]
      return arr.join(' ')
    })

    this.btnStyles = computed(() => {
      const width = localConfig.width
      const height = localConfig.height
      const horizontalPadding = localConfig.horizontalPadding
      const verticalPadding = localConfig.verticalPadding

      return {
        width: width + "px",
        height: height + "px",
        paddingLeft: horizontalPadding + "px",
        paddingRight: horizontalPadding + "px",
        paddingTop: verticalPadding + "px",
        paddingBottom: verticalPadding + "px",
      }
    })

    return {};
  }

  render = (props: {}) => {
    const state = this.localState
    let btnImage = makeBtnDefaultSvgIcon()
    if (state.value === 'warn') {
      btnImage = makeBtnWarnSvgIcon()
    } else if (state.value === 'error') {
      btnImage = makeBtnErrorSvgIcon()
    } else if (state.value === 'success') {
      btnImage = makeBtnSuccessSvgIcon()
    }

    return h("div", {
      class: this.btnClass.value,
      style: this.btnStyles.value,
      onClick: this.localState.clickEvent
    }, [
      h('div', {
        class: `${this.localState.type === 'default' ? 'gc-ripple' : ''}`
      }, [
        btnImage,
      ]),
      h('span', {}, [
        this.localState.title
      ]),
    ]);
  }

  mount = (el: Element) => {
    this.unmountFn = render(h(this), el)
  }

  unmount = () => {
    this.unmountFn && this.unmountFn()
  }
}
