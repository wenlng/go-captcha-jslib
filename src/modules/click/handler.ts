/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import {ClickData, ClickDot, ClickEvent} from "./types";
import {deepCopyObject, getDomXY} from "../../helper/helper";
import {ref} from "../../libs/render";

export interface handlerType {
  dots: {value: []}
  clickEvent: (e: Event) => void
  confirmEvent: (e: Event) => void
  closeEvent: (e: Event) => void
  refreshEvent: (e: Event) => void
  resetData: () => void
  clearData: () => void
  refresh: () => void
  close: () => void
}

export const useHandler = (
  _: ClickData,
  event: ClickEvent,
  clearCbs: () => void
): handlerType => {
  const dots = ref([])

  const clickEvent = (e: Event|any) => {
    const dom = e.currentTarget
    const xy = getDomXY(dom)

    const mouseX = e.pageX || e.clientX
    const mouseY = e.pageY || e.clientY

    const domX = xy.domX
    const domY = xy.domY

    const xPos = mouseX - domX;
    const yPos = mouseY - domY;

    const xx = parseInt(xPos.toString())
    const yy = parseInt(yPos.toString())
    const date = new Date()
    const index = dots.value.length
    const dot = {key: date.getTime(), index: index + 1, x: xx, y: yy}
    dots.value = [...dots.value, dot]

    event.click && event.click(xx, yy)
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const confirmEvent = (e: Event|any) => {
    let dotsArr: Array<ClickDot> = deepCopyObject(dots.value)

    event.confirm && event.confirm(dotsArr, () => {
      resetData()
    })
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const closeEvent = (e: Event|any) => {
    close()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const refreshEvent = (e: Event|any) => {
    refresh()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const close = () => {
    event.close && event.close()
    resetData()
  }

  const refresh = () => {
    event.refresh && event.refresh()
    resetData()
  }

  const resetData = () => {
    dots.value = []
  }

  const clearData = () => {
    resetData()
    clearCbs && clearCbs()
  }

  return {
    dots,
    clickEvent,
    confirmEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
    refresh,
    close,
  }
}