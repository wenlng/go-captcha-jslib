import GoCaptcha from "../global";

import {ClickImage, ClickThumbImage} from "../test-assets";

export const ClickExample = () => {
  const el = document.getElementById("click-wrap");
  const capt = new GoCaptcha.Click({
    width: 300,
    height: 220,
    // iconSize: 30,
  })

  capt.mount(el)
  // capt.setConfig({
  //     width: 300,
  //     height: 220,
  //     // iconSize: 30,
  //   })
  // capt.setData({
  //   image: ClickImage,
  //   thumb: ClickThumbImage,
  // })
  capt.setEvents({
      click(x,  y) {
        console.log('click - ', x, y)
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
            image: ClickImage,
            thumb: ClickThumbImage
          })
        }, 1000)
      },
      close() {
        console.log('>>>>> close')
      }
    })

  setTimeout(() => {
    capt.setData({
      image: ClickImage,
      thumb: ClickThumbImage,
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
  //   console.log('>>>>>>')
  // }, 2000)
  //
  // setTimeout(() => {
  //   capt.mount()
  //   console.log('>>>>>>')
  // }, 4000)
}
