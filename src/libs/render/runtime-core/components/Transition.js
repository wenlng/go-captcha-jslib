import{h}from"../h";function nextFrame(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}export function resolveTransitionProps(e){const{name:t="v",enterFromClass:n=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,leaveFromClass:r=`${t}-leave-from`,leaveActiveClass:a=`${t}-leave-active`,leaveToClass:i=`${t}-leave-to`,onBeforeEnter:l,onEnter:c,onLeave:v}=e;return{onBeforeEnter(e){l&&l(e),e.classList.add(n),e.classList.add(s)},onEnter(e,t){const r=()=>{e.classList.remove(o),e.classList.remove(s),t&&t()};c&&c(e,r),nextFrame((()=>{e.classList.remove(n),e.classList.add(o),(!c||c.length<=1)&&e.addEventListener("transitionEnd",r)}))},onLeave(e,t){const n=()=>{e.classList.remove(a),e.classList.remove(i),t&&t()};v&&v(e,n),e.classList.add(r),document.body.offsetHeight,e.classList.add(a),nextFrame((()=>{e.classList.remove(r),e.classList.add(i),(!v||v.length<=1)&&e.addEventListener("transitionend",n)}))}}}export function Transition(e,{slots:t}){return h(BaseTranstionImpl,resolveTransitionProps(e),t)}const BaseTranstionImpl={props:{onBeforeEnter:Function,onEnter:Function,onLeave:Function},setup:(e,{slots:t})=>()=>{const n=t.default&&t.default();if(n)return n.transition={beforeEnter:e.onBeforeEnter,enter:e.onEnter,leave:e.onLeave},n}};