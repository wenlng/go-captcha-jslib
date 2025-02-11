import {
  makeArrowSvgIcon,
  makeCloseSvgIcon, makeLoadingSvgIcon,
  makeRefreshSvgIcon,
} from "../../icons/icons";
import {computed, h, onMounted, onUnmounted, reactive, ref, render, watch} from "../../libs/render";
import {RotateConfig, RotateData, RotateEvent, defaultConfig, defaultRotateData} from "./types";
import {deepCopyObject} from "../../helper/helper";
import {handlerType, useHandler} from "./handler";

export class Logic {
  name: string = "RotateComponent"

  private logicProps = reactive({
    data: {...defaultRotateData()},
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

  rootRef = ref(null)
  dragBarRef = ref(null)
  dragBlockRef = ref(null)

  private unmountFn: any

  constructor() {
    watch(() => this.logicProps.config, (newVal, oldVal) => {
      Object.assign(this.localConfig, newVal)
    },{ deep: true })

    watch(() => this.logicProps.data, (newVal, oldVal) => {
      Object.assign(this.localData, newVal)
      this.handler?.updateData(this.localData)
    },{ deep: true })

    watch(() => this.logicProps.event, (newVal, oldVal) => {
      Object.assign(this.localEvent, newVal)
    },{ deep: true })


    this.handler = useHandler(
      this.localData,
      this.localEvent,
      this.localConfig,
      this.rootRef,
      this.dragBlockRef,
      this.dragBarRef,
      this.clearData
    );
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
    this.localData.thumb = ''
    this.localData.image = ''
    this.localData.angle = 0
  }

  setPropsData = (data: RotateData) => {
    this.logicProps.data = data
  }

  setPropsEvent = (event: RotateEvent) => {
    this.logicProps.event = event
  }

  setPropsConfig = (config: RotateConfig) => {
    this.logicProps.config = config
  }

  setup = () => {
    const localData = this.localData
    const localEvent = this.localEvent
    const localConfig = this.localConfig

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
      const width = localConfig.width
      const height = localConfig.height

      return {
        width: width + "px",
        height: height + "px",
      }
    })

    this.thumbStyles = computed(() => {
      const thumbAngle = this.handler.state.thumbAngle

      return {
        transform: `rotate(${thumbAngle}deg)`
      }
    })

    this.imageStyles = computed(() => {
      const size = localConfig.size

      return {
        width: size + "px",
        height: size + "px",
      }
    })

    this.iconStyles = computed(() => {
      const iconSize = localConfig.iconSize
      return {
        width: iconSize,
        height: iconSize,
      }
    })

    const fn = (event: any) => event.preventDefault()
    onMounted(async () => {
      this.dragBlockRef?.value && this.dragBlockRef.value.addEventListener('dragstart', fn);
    });

    onUnmounted(() => {
      this.dragBlockRef?.value && this.dragBlockRef.value.removeEventListener('dragstart', fn);
    })

    return {
      rootRef: this.rootRef,
      dragBlockRef: this.dragBlockRef,
      dragBarRef: this.dragBarRef,
    };
  }

  render = (props: {}) => {
    return h("div", {
      class: `go-captcha gc-rotate-mode gc-wrapper ${this.localConfig.showTheme && 'gc-theme'}`,
      style: this.wrapperStyles.value,
      ref: 'rootRef'
    }, [
      h('div', { class: 'gc-header' }, [
        h('span', { }, [
          this.localConfig.title
        ]),
        h('div', { class: 'gc-icon-block' }, [
          makeCloseSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.closeEvent }),
          makeRefreshSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.refreshEvent })
        ]),
      ]),
      h('div', {
        class: 'gc-body',
        style: this.bodyStyles.value,
        ref: 'containerRef'
      }, [
        h('div', {
          class: 'gc-body-inner',
          style: this.imageStyles.value
        }, [
          h('div', { class: 'gc-loading'}, [
            makeLoadingSvgIcon()
          ]),
          h('div', {
            class: 'gc-picture gc-rotate-picture',
            style: this.imageStyles.value,
          }, [
            h('img', {
              style: {'display': this.hasDisplayImageState.value ? 'inherit' : 'none'},
              src: this.localData.image,
            }),
            h('div', {class: 'gc-round'})
          ]),
          h('div', {
            class: 'gc-thumb gc-rotate-thumb',
          }, [
            h('div', {
              class: 'gc-rotate-thumb-block',
              style: this.thumbStyles.value,
            }, [
              h('img', {
                style: {'display': this.hasDisplayImageState.value ? 'inherit' : 'none'},
                src: this.localData.thumb,
              })
            ])
          ])
        ])
      ]),
      h('div', { class: 'gc-footer'}, [
        h('div', {
          class: 'gc-drag-slide-bar',
          ref: 'dragBarRef'
        }, [
          h('div', { class: 'gc-drag-line' }),
          h('div', {
            class: `gc-drag-block ${!this.hasDisplayImageState.value ? 'disabled' : ''}`,
            style: {left: this.handler.state.dragLeft + 'px'},
            ref: 'dragBlockRef',
            onMousedown: this.handler.dragEvent
          }, [
            h('div', {
              class: 'gc-drag-block-inline',
              onTouchstart: this.handler.dragEvent
            }, [
              makeArrowSvgIcon()
            ])
          ]),
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
