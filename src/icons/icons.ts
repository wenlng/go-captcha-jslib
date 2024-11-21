import {h} from "../libs/render";


const defaultOptions = { width: 22, height: 22, clickEvent: () => {}}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="84" height="84">
  <circle cx="50" cy="36.8101" r="10">
    <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
  </circle>
</svg>
 */
export const makeLoadingSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: 'xMidYMid',
    width: '84',
    height: '84',
  }, [
    h('circle', {
      cx: '50',
      cy: '36.8101',
      r: '10',
    }, [
      h('animate', {
        attributeName: 'cy',
        dur: '1s',
        repeatCount: 'indefinite',
        calcMode: 'spline',
        keySplines: '0.45 0 0.9 0.55;0 0.45 0.55 0.9',
        keyTimes: '0;0.5;1',
        values: '23;77;23',
      })
    ]),
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="22" height="22">
  <path d="M100.1,189.9C100.1,189.9,100,189.9,100.1,189.9c-49.7,0-90-40.4-90-89.9c0-49.6,40.4-89.9,89.9-89.9
		c49.6,0,89.9,40.4,89.9,89.9c0,18.2-5.4,35.7-15.6,50.7c-1.5,2.1-3.6,3.4-6.1,3.9c-2.5,0.4-5-0.1-7-1.6c-4.2-3-5.3-8.6-2.4-12.9
		c8.1-11.9,12.4-25.7,12.4-40.1c0-39.2-31.9-71.1-71.1-71.1c-39.2,0-71.1,31.9-71.1,71.1c0,39.2,31.9,71.1,71.1,71.1
		c7.7,0,15.3-1.2,22.6-3.6c2.4-0.8,4.9-0.6,7.2,0.5c2.2,1.1,3.9,3.1,4.7,5.5c1.6,4.9-1,10.2-5.9,11.9
		C119.3,188.4,109.8,189.9,100.1,189.9z M73,136.4C73,136.4,73,136.4,73,136.4c-2.5,0-4.9-1-6.7-2.8c-3.7-3.7-3.7-9.6,0-13.3
		L86.7,100L66.4,79.7c-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0L100,86.7l20.3-20.3c1.8-1.8,4.1-2.8,6.7-2.8c0,0,0,0,0,0
		c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.1,2.8,6.7c0,2.5-1,4.9-2.8,6.7L113.3,100l20.3,20.3c3.7,3.7,3.7,9.6,0,13.3
		c-3.7,3.7-9.6,3.7-13.3,0L100,113.3l-20.3,20.3C77.9,135.4,75.5,136.4,73,136.4z"/>
</svg>
 */
export const makeCloseSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
    onClick: options.clickEvent,
  }, [
    h('path', {
      d: `M100.1,189.9C100.1,189.9,100,189.9,100.1,189.9c-49.7,0-90-40.4-90-89.9c0-49.6,40.4-89.9,89.9-89.9
\t\tc49.6,0,89.9,40.4,89.9,89.9c0,18.2-5.4,35.7-15.6,50.7c-1.5,2.1-3.6,3.4-6.1,3.9c-2.5,0.4-5-0.1-7-1.6c-4.2-3-5.3-8.6-2.4-12.9
\t\tc8.1-11.9,12.4-25.7,12.4-40.1c0-39.2-31.9-71.1-71.1-71.1c-39.2,0-71.1,31.9-71.1,71.1c0,39.2,31.9,71.1,71.1,71.1
\t\tc7.7,0,15.3-1.2,22.6-3.6c2.4-0.8,4.9-0.6,7.2,0.5c2.2,1.1,3.9,3.1,4.7,5.5c1.6,4.9-1,10.2-5.9,11.9
\t\tC119.3,188.4,109.8,189.9,100.1,189.9z M73,136.4C73,136.4,73,136.4,73,136.4c-2.5,0-4.9-1-6.7-2.8c-3.7-3.7-3.7-9.6,0-13.3
\t\tL86.7,100L66.4,79.7c-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0L100,86.7l20.3-20.3c1.8-1.8,4.1-2.8,6.7-2.8c0,0,0,0,0,0
\t\tc2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.1,2.8,6.7c0,2.5-1,4.9-2.8,6.7L113.3,100l20.3,20.3c3.7,3.7,3.7,9.6,0,13.3
\t\tc-3.7,3.7-9.6,3.7-13.3,0L100,113.3l-20.3,20.3C77.9,135.4,75.5,136.4,73,136.4z`
    })
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="20" height="20" v-bind="$attrs" @click="emitClickEvent">
    <path d="M135,149.9c-10.7,7.6-23.2,11.4-36,11.2c-1.7,0-3.4-0.1-5-0.3c-0.7-0.1-1.4-0.2-2-0.3c-1.3-0.2-2.6-0.4-3.9-0.6
	c-0.8-0.2-1.6-0.4-2.3-0.5c-1.2-0.3-2.5-0.6-3.7-1c-0.6-0.2-1.2-0.4-1.7-0.6c-1.4-0.5-2.8-1-4.2-1.5c-0.3-0.1-0.6-0.3-0.9-0.4
	c-1.6-0.7-3.2-1.4-4.7-2.3c-0.1,0-0.1-0.1-0.2-0.1c-5.1-2.9-9.8-6.4-14-10.6c-0.1-0.1-0.1-0.1-0.2-0.2c-1.3-1.3-2.5-2.7-3.7-4.1
	c-0.2-0.3-0.5-0.6-0.7-0.9c-8.4-10.6-13.5-24.1-13.5-38.8h14.3c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.8,0-1.1L29.5,60.9
	c-0.2-0.3-0.5-0.5-0.9-0.5c-0.4,0-0.7,0.2-0.9,0.5L3.8,97.3c-0.2,0.3-0.2,0.7,0,1.1c0.2,0.3,0.5,0.5,0.9,0.5h14.3
	c0,17.2,5.3,33.2,14.3,46.4c0.1,0.2,0.2,0.4,0.3,0.6c0.9,1.4,2,2.6,3,3.9c0.4,0.5,0.7,1,1.1,1.5c1.5,1.8,3,3.5,4.6,5.2
	c0.2,0.2,0.3,0.3,0.5,0.5c5.4,5.5,11.5,10.1,18.2,13.8c0.2,0.1,0.3,0.2,0.5,0.3c1.9,1,3.9,2,5.9,2.9c0.5,0.2,1,0.5,1.5,0.7
	c1.7,0.7,3.5,1.3,5.2,1.9c0.8,0.3,1.7,0.6,2.5,0.8c1.5,0.5,3.1,0.8,4.7,1.2c1.1,0.2,2.1,0.5,3.2,0.7c0.4,0.1,0.9,0.2,1.3,0.3
	c1.5,0.3,3,0.4,4.5,0.6c0.5,0.1,1.1,0.2,1.6,0.2c2.7,0.3,5.4,0.4,8.1,0.4c16.4,0,32.5-5.1,46.2-14.8c4.4-3.1,5.5-9.2,2.4-13.7
	C145.5,147.8,139.4,146.7,135,149.9 M180.6,98.9c0-17.2-5.3-33.1-14.2-46.3c-0.1-0.2-0.2-0.5-0.4-0.7c-1.1-1.6-2.3-3.1-3.5-4.6
	c-0.1-0.2-0.3-0.4-0.4-0.6c-8.2-10.1-18.5-17.9-30.2-23c-0.3-0.1-0.6-0.3-1-0.4c-1.9-0.8-3.8-1.5-5.7-2.1c-0.7-0.2-1.4-0.5-2.1-0.7
	c-1.7-0.5-3.4-0.9-5.1-1.3c-0.9-0.2-1.9-0.5-2.8-0.7c-0.5-0.1-0.9-0.2-1.4-0.3c-1.3-0.2-2.6-0.3-3.8-0.5c-0.9-0.1-1.8-0.3-2.6-0.3
	c-2.1-0.2-4.3-0.3-6.4-0.3c-0.4,0-0.8-0.1-1.2-0.1c-0.1,0-0.1,0-0.2,0c-16.4,0-32.4,5-46.2,14.8C49,35,48,41.1,51,45.6
	c3.1,4.4,9.1,5.5,13.5,2.4c10.6-7.5,23-11.3,35.7-11.2c1.8,0,3.6,0.1,5.4,0.3c0.6,0.1,1.1,0.1,1.6,0.2c1.5,0.2,2.9,0.4,4.3,0.7
	c0.6,0.1,1.3,0.3,1.9,0.4c1.4,0.3,2.8,0.7,4.2,1.1c0.4,0.1,0.9,0.3,1.3,0.4c1.6,0.5,3.1,1.1,4.6,1.7c0.2,0.1,0.3,0.1,0.5,0.2
	c9,3.9,17,10,23.2,17.6c0,0,0.1,0.1,0.1,0.2c8.7,10.7,14,24.5,14,39.4H147c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.2,0.8,0,1.1l24,36.4
	c0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.7-0.2,0.9-0.5l23.9-36.4c0.2-0.3,0.2-0.7,0-1.1c-0.2-0.3-0.5-0.5-0.9-0.5L180.6,98.9L180.6,98.9
	L180.6,98.9z"/>
  </svg>
 */
export const makeRefreshSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
    onClick: options.clickEvent,
  }, [
    h('path', {
      d: `M135,149.9c-10.7,7.6-23.2,11.4-36,11.2c-1.7,0-3.4-0.1-5-0.3c-0.7-0.1-1.4-0.2-2-0.3c-1.3-0.2-2.6-0.4-3.9-0.6
\tc-0.8-0.2-1.6-0.4-2.3-0.5c-1.2-0.3-2.5-0.6-3.7-1c-0.6-0.2-1.2-0.4-1.7-0.6c-1.4-0.5-2.8-1-4.2-1.5c-0.3-0.1-0.6-0.3-0.9-0.4
\tc-1.6-0.7-3.2-1.4-4.7-2.3c-0.1,0-0.1-0.1-0.2-0.1c-5.1-2.9-9.8-6.4-14-10.6c-0.1-0.1-0.1-0.1-0.2-0.2c-1.3-1.3-2.5-2.7-3.7-4.1
\tc-0.2-0.3-0.5-0.6-0.7-0.9c-8.4-10.6-13.5-24.1-13.5-38.8h14.3c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.8,0-1.1L29.5,60.9
\tc-0.2-0.3-0.5-0.5-0.9-0.5c-0.4,0-0.7,0.2-0.9,0.5L3.8,97.3c-0.2,0.3-0.2,0.7,0,1.1c0.2,0.3,0.5,0.5,0.9,0.5h14.3
\tc0,17.2,5.3,33.2,14.3,46.4c0.1,0.2,0.2,0.4,0.3,0.6c0.9,1.4,2,2.6,3,3.9c0.4,0.5,0.7,1,1.1,1.5c1.5,1.8,3,3.5,4.6,5.2
\tc0.2,0.2,0.3,0.3,0.5,0.5c5.4,5.5,11.5,10.1,18.2,13.8c0.2,0.1,0.3,0.2,0.5,0.3c1.9,1,3.9,2,5.9,2.9c0.5,0.2,1,0.5,1.5,0.7
\tc1.7,0.7,3.5,1.3,5.2,1.9c0.8,0.3,1.7,0.6,2.5,0.8c1.5,0.5,3.1,0.8,4.7,1.2c1.1,0.2,2.1,0.5,3.2,0.7c0.4,0.1,0.9,0.2,1.3,0.3
\tc1.5,0.3,3,0.4,4.5,0.6c0.5,0.1,1.1,0.2,1.6,0.2c2.7,0.3,5.4,0.4,8.1,0.4c16.4,0,32.5-5.1,46.2-14.8c4.4-3.1,5.5-9.2,2.4-13.7
\tC145.5,147.8,139.4,146.7,135,149.9 M180.6,98.9c0-17.2-5.3-33.1-14.2-46.3c-0.1-0.2-0.2-0.5-0.4-0.7c-1.1-1.6-2.3-3.1-3.5-4.6
\tc-0.1-0.2-0.3-0.4-0.4-0.6c-8.2-10.1-18.5-17.9-30.2-23c-0.3-0.1-0.6-0.3-1-0.4c-1.9-0.8-3.8-1.5-5.7-2.1c-0.7-0.2-1.4-0.5-2.1-0.7
\tc-1.7-0.5-3.4-0.9-5.1-1.3c-0.9-0.2-1.9-0.5-2.8-0.7c-0.5-0.1-0.9-0.2-1.4-0.3c-1.3-0.2-2.6-0.3-3.8-0.5c-0.9-0.1-1.8-0.3-2.6-0.3
\tc-2.1-0.2-4.3-0.3-6.4-0.3c-0.4,0-0.8-0.1-1.2-0.1c-0.1,0-0.1,0-0.2,0c-16.4,0-32.4,5-46.2,14.8C49,35,48,41.1,51,45.6
\tc3.1,4.4,9.1,5.5,13.5,2.4c10.6-7.5,23-11.3,35.7-11.2c1.8,0,3.6,0.1,5.4,0.3c0.6,0.1,1.1,0.1,1.6,0.2c1.5,0.2,2.9,0.4,4.3,0.7
\tc0.6,0.1,1.3,0.3,1.9,0.4c1.4,0.3,2.8,0.7,4.2,1.1c0.4,0.1,0.9,0.3,1.3,0.4c1.6,0.5,3.1,1.1,4.6,1.7c0.2,0.1,0.3,0.1,0.5,0.2
\tc9,3.9,17,10,23.2,17.6c0,0,0.1,0.1,0.1,0.2c8.7,10.7,14,24.5,14,39.4H147c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.2,0.8,0,1.1l24,36.4
\tc0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.7-0.2,0.9-0.5l23.9-36.4c0.2-0.3,0.2-0.7,0-1.1c-0.2-0.3-0.5-0.5-0.9-0.5L180.6,98.9L180.6,98.9
\tL180.6,98.9z`
    })
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="22" height="22">
  <path d="M131.6,116.3c0,0-75.6,0-109.7,0c-9.1,0-16.2-7.4-16.2-16.2c0-9.1,7.4-16.2,16.2-16.2c28.7,0,109.7,0,109.7,0
	s-5.4-5.4-30.4-30.7c-6.4-6.4-6.4-16.7,0-23.1s16.7-6.4,23.1,0l58.4,58.4c6.4,6.4,6.4,16.7,0,23.1c0,0-32.9,32.9-57.9,57.9
	c-6.4,6.4-16.7,6.4-23.1,0c-6.4-6.4-6.4-16.7,0-23.1C121.8,126.2,131.6,116.3,131.6,116.3z"/>
</svg>
 */
export const makeArrowSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
  }, [
    h('path', {
      d: `M131.6,116.3c0,0-75.6,0-109.7,0c-9.1,0-16.2-7.4-16.2-16.2c0-9.1,7.4-16.2,16.2-16.2c28.7,0,109.7,0,109.7,0
\ts-5.4-5.4-30.4-30.7c-6.4-6.4-6.4-16.7,0-23.1s16.7-6.4,23.1,0l58.4,58.4c6.4,6.4,6.4,16.7,0,23.1c0,0-32.9,32.9-57.9,57.9
\tc-6.4,6.4-16.7,6.4-23.1,0c-6.4-6.4-6.4-16.7,0-23.1C121.8,126.2,131.6,116.3,131.6,116.3z`
    })
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="22" height="22">
  <circle fill="#3E7CFF" cx="100" cy="100" r="96.3"/>
  <path fill="#FFFFFF" d="M140.8,64.4l-39.6-11.9h-2.4L59.2,64.4c-1.6,0.8-2.8,2.4-2.8,4v24.1c0,25.3,15.8,45.9,42.3,54.6
  c0.4,0,0.8,0.4,1.2,0.4c0.4,0,0.8,0,1.2-0.4c26.5-8.7,42.3-28.9,42.3-54.6V68.3C143.5,66.8,142.3,65.2,140.8,64.4z"/>
</svg>
*/
export const makeBtnDefaultSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
  }, [
    h('circle', {
      fill: '#3E7CFF',
      cx: "100",
      cy: "100",
      r: "96.3",
    }),
    h('path', {
      fill: '#FFFFFF',
      d: `M140.8,64.4l-39.6-11.9h-2.4L59.2,64.4c-1.6,0.8-2.8,2.4-2.8,4v24.1c0,25.3,15.8,45.9,42.3,54.6
  c0.4,0,0.8,0.4,1.2,0.4c0.4,0,0.8,0,1.2-0.4c26.5-8.7,42.3-28.9,42.3-54.6V68.3C143.5,66.8,142.3,65.2,140.8,64.4z`
    })
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="22" height="22">
  <path fill="#FFA000" d="M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6
	c0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M107.3,109.1
	c-0.5,5.4-3.9,7.9-7.3,7.9c-2.5,0,0,0,0,0c-3.2-0.6-5.7-2-6.8-7.4l-4.4-50.9c0-5.1,6.2-9.7,11.5-9.7c5.3,0,11,4.7,11,9.9
	L107.3,109.1z M109.3,133.3c0,5.1-4.2,9.3-9.3,9.3c-5.1,0-9.3-4.2-9.3-9.3c0-5.1,4.2-9.3,9.3-9.3C105.1,124,109.3,128.1,109.3,133.3
	z"/>
</svg>
 */
export const makeBtnWarnSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
  }, [
    h('path', {
      fill: '#FFA000',
      d: `M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6
\tc0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M107.3,109.1
\tc-0.5,5.4-3.9,7.9-7.3,7.9c-2.5,0,0,0,0,0c-3.2-0.6-5.7-2-6.8-7.4l-4.4-50.9c0-5.1,6.2-9.7,11.5-9.7c5.3,0,11,4.7,11,9.9
\tL107.3,109.1z M109.3,133.3c0,5.1-4.2,9.3-9.3,9.3c-5.1,0-9.3-4.2-9.3-9.3c0-5.1,4.2-9.3,9.3-9.3C105.1,124,109.3,128.1,109.3,133.3
\tz`
    })
  ])
}

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="22" height="22">
  <path fill="#ED4630" d="M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6
	c0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M134.5,123.1
	c3.1,3.1,3.1,8.2,0,11.3c-1.6,1.6-3.6,2.3-5.7,2.3s-4.1-0.8-5.7-2.3L100,111.3l-23.1,23.1c-1.6,1.6-3.6,2.3-5.7,2.3
	c-2,0-4.1-0.8-5.7-2.3c-3.1-3.1-3.1-8.2,0-11.3L88.7,100L65.5,76.9c-3.1-3.1-3.1-8.2,0-11.3c3.1-3.1,8.2-3.1,11.3,0L100,88.7
	l23.1-23.1c3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3L111.3,100L134.5,123.1z"/>
</svg>
 */
export const makeBtnErrorSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
  }, [
    h('path', {
      fill: '#ED4630',
      d: `M184,26.6L102.4,2.1h-4.9L16,26.6c-3.3,1.6-5.7,4.9-5.7,8.2v49.8c0,52.2,32.6,94.7,87.3,112.6
\tc0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8c54.7-18,87.3-59.6,87.3-112.6V34.7C189.8,31.5,187.3,28.2,184,26.6z M134.5,123.1
\tc3.1,3.1,3.1,8.2,0,11.3c-1.6,1.6-3.6,2.3-5.7,2.3s-4.1-0.8-5.7-2.3L100,111.3l-23.1,23.1c-1.6,1.6-3.6,2.3-5.7,2.3
\tc-2,0-4.1-0.8-5.7-2.3c-3.1-3.1-3.1-8.2,0-11.3L88.7,100L65.5,76.9c-3.1-3.1-3.1-8.2,0-11.3c3.1-3.1,8.2-3.1,11.3,0L100,88.7
\tl23.1-23.1c3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3L111.3,100L134.5,123.1z`
    })
  ])
}

/*
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="20" height="20" v-bind="$attrs" @click="emitClickEvent">
    <path fill="#5EAA2F" d="M183.3,27.2L102.4,2.9h-4.9L16.7,27.2C13.4,28.8,11,32,11,35.3v49.4c0,51.8,32.4,93.9,86.6,111.7
	c0.8,0,1.6,0.8,2.4,0.8c0.8,0,1.6,0,2.4-0.8c54.2-17.8,86.6-59.1,86.6-111.7V35.3C189,32,186.6,28.8,183.3,27.2z M146.1,81.4
	l-48.5,48.5c-1.6,1.6-3.2,2.4-5.7,2.4c-2.4,0-4-0.8-5.7-2.4L62,105.7c-3.2-3.2-3.2-8.1,0-11.3c3.2-3.2,8.1-3.2,11.3,0l18.6,18.6
	l42.9-42.9c3.2-3.2,8.1-3.2,11.3,0C149.4,73.3,149.4,78.2,146.1,81.4L146.1,81.4z"/>
  </svg>
 */
export const makeBtnSuccessSvgIcon = (options?): any => {
  options = {...defaultOptions, ...options}
  return h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    width: options.width,
    height: options.height,
  }, [
    h('path', {
      fill: '#5EAA2F',
      d: `M183.3,27.2L102.4,2.9h-4.9L16.7,27.2C13.4,28.8,11,32,11,35.3v49.4c0,51.8,32.4,93.9,86.6,111.7
\tc0.8,0,1.6,0.8,2.4,0.8c0.8,0,1.6,0,2.4-0.8c54.2-17.8,86.6-59.1,86.6-111.7V35.3C189,32,186.6,28.8,183.3,27.2z M146.1,81.4
\tl-48.5,48.5c-1.6,1.6-3.2,2.4-5.7,2.4c-2.4,0-4-0.8-5.7-2.4L62,105.7c-3.2-3.2-3.2-8.1,0-11.3c3.2-3.2,8.1-3.2,11.3,0l18.6,18.6
\tl42.9-42.9c3.2-3.2,8.1-3.2,11.3,0C149.4,73.3,149.4,78.2,146.1,81.4L146.1,81.4z`
    })
  ])
}