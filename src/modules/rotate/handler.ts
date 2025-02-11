import {RotateData, RotateEvent, RotateConfig} from "./types";
import {reactive} from "@/libs/render";
import {checkTargetFather} from "@/helper/helper";

export interface handlerType {
  state: {} | any
  updateData: (d: RotateData) => void
  dragEvent: (e: Event) => void
  closeEvent: (e: Event) => void
  refreshEvent: (e: Event) => void
  resetData: () => void
  clearData: () => void
  refresh: () => void
  close: () => void
}

export function useHandler(
  data: RotateData,
  event: RotateEvent,
  config: RotateConfig,
  rootRef: any,
  dragBlockRef: any,
  dragBarRef: any,
  clearCbs: () => void
): handlerType {
  const state = reactive({dragLeft: 0, thumbAngle: data.angle || 0, isFreeze: false})

  const updateData = (d) => {
    if(!state.isFreeze){
      state.thumbAngle = d.angle || 0
    }
  }

  const dragEvent = (e: Event|any) => {
    if (!checkTargetFather(dragBarRef.value, e)) {
      return
    }

    const touch = e.touches && e.touches[0];

    const offsetLeft = dragBlockRef.value.offsetLeft
    const width = dragBarRef.value.offsetWidth
    const blockWidth = dragBlockRef.value.offsetWidth
    const maxWidth = width - blockWidth
    const maxAngle = 360
    const p = (maxAngle - data.angle) / maxWidth

    let angle = 0
    let isMoving = false
    let tmpLeaveDragEvent: Event|any = null
    let startX = 0;
    let currentAngle = 0
    if (touch) {
      startX = touch.pageX - offsetLeft
    } else {
      startX = e.clientX - offsetLeft
    }

    const moveEvent = (e: Event|any) => {
      isMoving = true
      const mTouche = e.touches && e.touches[0];

      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX
      } else {
        left = e.clientX - startX
      }

      angle = data.angle + (left * p)

      if (left >= maxWidth) {
        state.dragLeft = maxWidth
        state.thumbAngle = currentAngle = maxAngle
        return
      }

      if (left <= 0) {
        state.dragLeft = 0
        state.thumbAngle = currentAngle = data.angle
        return
      }

      state.dragLeft = left
      state.thumbAngle = currentAngle = angle

      event.rotate && event.rotate(angle)

      e.cancelBubble = true
      e.preventDefault()
    }

    const upEvent = (e: Event|any) => {
      if (!checkTargetFather(dragBarRef.value, e)) {
        return
      }

      clearEvent()
      if (!isMoving) {
        return
      }
      isMoving = false

      if (currentAngle < 0) {
        return
      }

      event.confirm && event.confirm(parseInt(currentAngle.toString()), () => {
        resetData()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    const leaveDragBlockEvent = (e: Event|any) => {
      tmpLeaveDragEvent = e
    }

    const enterDragBlockEvent = () => {
      tmpLeaveDragEvent = null
    }

    const leaveUpEvent = (_: Event|any) => {
      if(!tmpLeaveDragEvent) {
        return
      }

      upEvent(tmpLeaveDragEvent)
      clearEvent()
    }

    const scope = config.scope
    const dragDom = scope ? rootRef.value : dragBarRef.value
    const scopeDom = scope ? rootRef.value : document.body

    const clearEvent = () => {
      scopeDom.removeEventListener("mousemove", moveEvent, false)
      scopeDom.removeEventListener("touchmove", moveEvent, { passive: false })

      dragDom.removeEventListener( "mouseup", upEvent, false)
      dragDom.removeEventListener( "mouseenter", enterDragBlockEvent, false)
      dragDom.removeEventListener( "mouseleave", leaveDragBlockEvent, false)
      dragDom.removeEventListener("touchend", upEvent, false)

      scopeDom.removeEventListener("mouseleave", upEvent, false)
      scopeDom.removeEventListener("mouseup", leaveUpEvent, false)

      state.isFreeze = false
    }

    state.isFreeze = true

    scopeDom.addEventListener("mousemove", moveEvent, false)
    scopeDom.addEventListener("touchmove", moveEvent, { passive: false })

    dragDom.addEventListener( "mouseup", upEvent, false)
    dragDom.addEventListener( "mouseenter", enterDragBlockEvent, false)
    dragDom.addEventListener( "mouseleave", leaveDragBlockEvent, false)
    dragDom.addEventListener("touchend", upEvent, false)

    scopeDom.addEventListener("mouseleave", upEvent, false)
    scopeDom.addEventListener("mouseup", leaveUpEvent, false)
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
    event && event.close && event.close()
    resetData()
  }

  const refresh = () => {
    event && event.refresh && event.refresh()
    resetData()
  }

  const resetData = () => {
    state.dragLeft = 0
    state.thumbAngle = data.angle
  }

  const clearData = () => {
    clearCbs && clearCbs()
    resetData()
  }

  return {
    state,
    updateData,
    dragEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
    refresh,
    close
  }
}
