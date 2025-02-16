import GoCaptcha from "../global";

import {RotateImage, RotateThumbImage} from "../test-assets";

export const RotateExample = () => {
  const el = document.getElementById("rotate-wrap");
  const capt = new GoCaptcha.Rotate({
    width: 300,
    height: 220,
    thumbSize: 190
  })

  capt.mount(el)
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })

  capt.setEvents({
    rotate(angle) {
      console.log('rotate - ', angle)
    },
    confirm(dots, reset) {
      console.log(dots)
      setTimeout(() => {
        reset()
      }, 500)
    },
    refresh() {
      console.log('>>>>> refresh')
      capt.clear()

      setTimeout(() => {
        capt.setData({
          image: RotateImage,
          thumb: RotateThumbImage,
          thumbSize: 190
        })
      }, 1000)
    },
    close() {
      console.log('>>>>> close')
    }
  })

  setTimeout(() => {
    capt.setData({
      image: RotateImage,
      thumb: RotateThumbImage,
      thumbSize: 190,
    })
  }, 500)

  // setTimeout(() => {
  //   capt.setConfig({...config, width: 500, height: 500})
  //   console.log('>>>>>>')
  // }, 2000)
  //
  // setTimeout(() => {
  //   capt.setConfig({...config, width: 400, height: 400})
  //   console.log('>>>>>>')
  // }, 4000)

  // setTimeout(() => {
  //   capt.destroy()
  // }, 3000)
}
