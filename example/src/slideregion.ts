import GoCaptcha from "../global";

import {SlideImage, SlideThumbImage} from "../test-assets";

export const SlideRegionExample = () => {
  const el = document.getElementById("slide-region-wrap");
  const capt = new GoCaptcha.SlideRegion({
    width: 300,
    height: 220,
  })

  capt.mount(el)
  // capt.setConfig({
  //   width: 300,
  //   height: 220,
  // })
  capt.setEvents({
    move(x,  y) {
      console.log('move - ', x, y)
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
          image: SlideImage,
          thumb: SlideThumbImage,
          thumbX: 20,
          thumbY: 30,
          thumbWidth: 60,
          thumbHeight: 60,
        })
      }, 1000)
    },
    close() {
      console.log('>>>>> close')
    }
  })

  setTimeout(() => {
    capt.setData({
      image: SlideImage,
      thumb: SlideThumbImage,
      thumbX: 20,
      thumbY: 50,
      thumbWidth: 70,
      thumbHeight: 70,
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
