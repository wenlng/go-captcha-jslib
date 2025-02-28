import {
  makeCloseSvgIcon,
  makeLoadingSvgIcon,
  makeRefreshSvgIcon,
} from "@/icons/icons";
import {computed, h, onMounted, onUnmounted, reactive, ref, render, watch} from "@/libs/render";
import {SlideRegionConfig, SlideRegionData, SlideRegionEvent, defaultConfig, defaultSlideRegionData} from "./types";
import {deepCopyObject} from "@/helper/helper";
import {handlerType, useHandler} from "./handler";

export class Logic {
  name: string = "SlideRegionComponent"

  private logicProps = reactive({
    data: {...defaultSlideRegionData()},
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

  rootRef: any = ref(null)
  containerRef: any = ref(null)
  tileRef: any = ref(null)

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
      this.containerRef,
      this.tileRef,
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
    this.localData.thumbX = 0
    this.localData.thumbY = 0
    this.localData.thumbWidth = 0
    this.localData.thumbHeight = 0
  }

  setPropsData = (data: SlideRegionData) => {
    this.logicProps.data = data
  }

  setPropsEvent = (event: SlideRegionEvent) => {
    this.logicProps.event = event
  }

  setPropsConfig = (config: SlideRegionConfig) => {
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
      return (localData.image && localData.image.length > 0) || (localData.thumb && localData.thumb.length > 0)
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
      const thumbLeft = this.handler.state.x
      const thumbTop = this.handler.state.y
      const displayState = this.hasDisplayImageState.value
      const width = (localData.thumbWidth || localConfig.thumbWidth)
      const height = (localData.thumbHeight || localConfig.thumbHeight)

      return {
        width: width + "px",
        height: height + "px",
        display: displayState ? 'inherit' : 'none',
        top: thumbTop + "px",
        left: thumbLeft + "px"
      }
    })

    this.imageStyles = computed(() => {
      const width = localConfig.width
      const height = localConfig.height

      return {
        width: width + "px",
        height: height + "px",
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

    const fn = (event: any) => event.preventDefault()
    onMounted(async () => {
      this.tileRef?.value && this.tileRef.value.addEventListener('dragstart', fn);
    });

    onUnmounted(() => {
      this.tileRef?.value && this.tileRef.value.removeEventListener('dragstart', fn);
    })

    return {
      rootRef: this.rootRef,
      containerRef: this.containerRef,
      tileRef: this.tileRef,
    };
  }

  render = (props: {}) => {
    return h("div", {
      class: `go-captcha gc-slide-mode gc-wrapper ${this.localConfig.showTheme && 'gc-theme'}`,
      style: this.wrapperStyles.value,
      ref: 'rootRef'
    }, [
      h('div', { class: 'gc-header' }, [
        h('span', { style: {'text-align': 'center', 'padding': '0'} }, [
          this.localConfig.title
        ]),
      ]),
      h('div', {
        class: 'gc-body',
        style: this.bodyStyles.value,
        ref: 'containerRef'
      }, [
        h('div', { class: 'gc-loading'}, [
          makeLoadingSvgIcon()
        ]),
        h('img', {
          class: 'gc-picture',
          style: this.imageStyles.value,
          src: this.localData.image,
        }),
        h('div', {
          class: 'gc-tile',
          ref: 'tileRef',
          style: this.thumbStyles.value,
          onMousedown: this.handler.dragEvent,
          onTouchstart: this.handler.dragEvent
        }, [
          h('img', {
            style: {'display': this.hasDisplayImageState.value ? 'inherit' : 'none'},
            src: this.localData.thumb,
          })
        ])
      ]),
      h('div', { class: 'gc-footer'}, [
        h('div', {
          class: 'gc-icon-block',
        }, [
          h('div', { class: 'gc-icon-block' }, [
            makeCloseSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.closeEvent }),
            makeRefreshSvgIcon({ ...this.iconStyles.value, clickEvent: this.handler.refreshEvent })
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
