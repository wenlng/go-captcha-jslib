import{getCurrentInstance}from"../component";import{onMounted,onUpdated}from"../apiLifecycle";import{ShapeFlags}from"../../shared";export const KeepAlive={__isKeepAlive:!0,props:{max:Number},setup(e,{slots:t}){const{max:n}=e,a=new Set,o=new Map;let p=null;const l=getCurrentInstance(),s=()=>{o.set(p,l.subTree)},{move:c,createElement:r,unmount:u}=l.ctx.renderer;function E(e){!function(e){let t=e.shapeFlag;t&ShapeFlags.COMPONENT_KEPT_ALIVE&&(t-=ShapeFlags.COMPONENT_KEPT_ALIVE),t&ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE&&(t-=ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE),e.shapeFlag=t}(e),u(e)}l.ctx.activate=function(e,t,n){c(e,t,n)};const i=r("div");return l.ctx.deactivate=function(e){c(e,i,null)},onMounted(s),onUpdated(s),()=>{const e=t.default(),l=e.type,s=null==e.key?l:e.key,c=o.get(s);return p=s,c?(e.component=c.component,e.shapeFlag|=ShapeFlags.COMPONENT_KEPT_ALIVE,a.delete(s),a.add(s)):(a.add(s),n&&a.size>n&&function(e){a.delete(e),E(o.get(e))}(a.values().next().value)),e.shapeFlag|=ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE,e}}};export const isKeepAlive=e=>e.type.__isKeepAlive;