import {
  makeCloseSvgIcon,
  makeLoadingSvgIcon,
  makeRefreshSvgIcon,
} from "../../icons/icons";
import {computed, h, reactive, render, watch} from "../../libs/render";
import {ClickConfig, ClickData, ClickEvent, defaultConfig, defaultClickData, ClickDot} from "./types";
import {deepCopyObject} from "../../helper/helper";
import {handlerType, useHandler} from "./handler";

export class Logic {
  name: string = "ClickComponent"

  private logicProps = reactive({
    data: {...defaultClickData()},
    event:  {},
    config: {...defaultConfig()},
  })

  localData = reactive({...deepCopyObject(this.logicProps.data)})
  localEvent = reactive({...deepCopyObject(this.logicProps.event)})
  localConfig = reactive({...deepCopyObject(this.logicProps.config)})

  hasDisplayImageState: any
  hasDisplayWrapperState: any

  wrapperStyles: any
  thumbStyles: any
  bodyStyles: any
  imageStyles: any
  iconStyles: any
  handler: handlerType

  private unmountFn: any

  constructor() {
    watch(() => this.logicProps.config, (newVal, oldVal) => {
      Object.assign(this.localConfig, newVal)
    },{ deep: true })

    watch(() => this.logicProps.data, (newVal, oldVal) => {
      Object.assign(this.localData, newVal)
    },{ deep: true })

    watch(() => this.logicProps.event, (newVal, oldVal) => {
      Object.assign(this.localEvent, newVal)
    },{ deep: true })
  }

  clear = () => {
    this.handler.clearData()
  }

  reset = () => {
    this.handler.resetData()
  }

  refresh = () => {
    this.handler.refresh()
  }

  close = () => {
    this.handler.close()
  }

  clearData = () => {
    this.localData.image = ''
    this.localData.thumb = ''
  }

  setPropsData = (data: ClickData) => {
    this.logicProps.data = data
  }

  setPropsEvent = (event: ClickEvent) => {
    this.logicProps.event = event
  }

  setPropsConfig = (config: ClickConfig) => {
    this.logicProps.config = config
  }

  setup = () => {
    const localData = this.localData
    const localEvent = this.localEvent
    const localConfig = this.localConfig

    this.handler = useHandler(localData, localEvent, this.clearData);

    this.wrapperStyles = computed(() => {
      const hPadding = localConfig.horizontalPadding || 0
      const vPadding = localConfig.verticalPadding || 0
      const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)

      return {
        width:  width+ "px",
        paddingLeft: hPadding + "px",
        paddingRight: hPadding + "px",
        paddingTop: vPadding + "px",
        paddingBottom: vPadding + "px",
        display: this.hasDisplayWrapperState.value ? 'inherit' : 'none'
      }
    })

    this.hasDisplayImageState = computed(() => {
      return localData.image != '' || localData.thumb != ''
    })

    this.hasDisplayWrapperState = computed(() => {
      return (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
    })

    this.bodyStyles = computed(() => {
      return {
        width: localConfig.width + "px",
        height: localConfig.height + "px",
      }
    })

    this.thumbStyles = computed(() => {
      return {
        width: localConfig.thumbWidth + "px",
        height: localConfig.thumbHeight + "px",
        display: this.hasDisplayImageState.value ? 'inherit' : 'none'
      }
    })

    this.imageStyles = computed(() => {
      return {
        width: localConfig.width + "px",
        height: localConfig.height + "px",
        display: this.hasDisplayImageState.value ? 'inherit' : 'none'
      }
    })

    this.iconStyles = computed(() => {
      const iconSize = localConfig.iconSize
      return {
        width: iconSize,
        height: iconSize,
      }
    })

    return {};
  }

  render = (props: {}) => {
    return h("div", {
      class: `go-captcha gc-click-mode gc-wrapper ${this.localConfig.showTheme && 'gc-theme'}`,
      style: this.wrapperStyles.value
    }, [
      h('div', { class: 'gc-header' }, [
        h('span', { }, [
          this.localConfig.title
        ]),
        h('img', {
          style: this.thumbStyles.value,
          src: this.localData.thumb
        })
      ]),
      h('div', {
        class: 'gc-body',
        style: this.bodyStyles.value
      }, [
        h('div', { class: 'gc-loading'}, [
          makeLoadingSvgIcon()
        ]),
        h('img', {
          class: 'gc-picture',
          style: this.imageStyles.value,
          src: this.localData.image,
          onClick: this.handler.clickEvent
        }),
        h('div', { class: 'gc-dots' }, [
          ...this.handler.dots.value.map((dot: ClickDot) => {
            return h('div', {
              class: 'gc-dot',
              key: `${dot.key + '-' + dot.index}`,
              style: {
                width: this.localConfig.dotSize + 'px',
                height: this.localConfig.dotSize + 'px',
                borderRadius: this.localConfig.dotSize + 'px',
                top: (dot.y - ((this.localConfig.dotSize || 1)/2)-1) + 'px',
                left: (dot.x - ((this.localConfig.dotSize || 1)/2)-1) + 'px',
              }
            }, [ dot.index ])
          })
        ]),
      ]),
      h('div', { class: 'gc-footer'}, [
        h('div', { class: 'gc-icon-block' }, [
          makeCloseSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.closeEvent }),
          makeRefreshSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.refreshEvent })
        ]),
        h('div', {
          class: 'gc-button-block'
        }, [
          h('button', {
            class: !this.hasDisplayImageState.value && 'disabled',
            onClick: this.handler.confirmEvent
          }, [
            this.localConfig.buttonText
          ] )
        ])
      ])
    ]);
  }

  mount = (el: Element) => {
    this.unmountFn = render(h(this), el)
  }

  unmount = () => {
    this.unmountFn && this.unmountFn()
  }
}
