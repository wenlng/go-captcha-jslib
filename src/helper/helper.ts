
/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

export function getDomXY(dom: any){
  let x = 0
  let y = 0
  if (dom.getBoundingClientRect) {
    const box = dom.getBoundingClientRect();
    const D = document.documentElement;
    x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
    y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop
  }
  else{
    while (dom !== document.body) {
      x += dom.offsetLeft
      y += dom.offsetTop
      dom = dom.offsetParent
    }
  }
  return {
    domX: x,
    domY: y
  }
}

export function checkTargetFather(that: any, e: any) {
  let parent = e.relatedTarget
  try{
    while(parent && parent !== that) {
      parent = parent.parentNode
    }
  }catch (e){
    console.warn(e)
  }

  return parent !== that
}

export function isObject(val: any): boolean {
  let type = typeof val
  return val != null && type === 'object'
}

function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

export const isArray = Array.isArray

export function deepCopyObject(obj: any): any {
  const dotsStr = JSON.stringify(obj)
  let res: any
  try {
    res = JSON.parse(dotsStr)
  } catch (e) {
    res = obj as any
  }

  return res
}