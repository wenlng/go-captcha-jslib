import{activeEffect,trackEffect,triggerEffects}from"./effect";const targetMap=new WeakMap;export const createDep=(t,e)=>{const r=new Map;return r.cleanup=t,r.name=e,r};export function track(t,e){if(!activeEffect)return;let r=targetMap.get(t);r||targetMap.set(t,r=new Map);let c=r.get(e);c||r.set(e,c=createDep((()=>r.delete(e)),e)),trackEffect(activeEffect,c)}export function trigger(t,e,r,c){const a=targetMap.get(t);if(!a)return;let f=a.get(e);f&&triggerEffects(f)}