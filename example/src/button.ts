import GoCaptchaLib from "../global";

export const ButtonExample = () => {
  const el = document.getElementById("button-wrap");
  const capt = new GoCaptchaLib.Button(el)

  capt.mount()
  capt.setState({
    clickEvent: () => {
      console.log(">>>>> hello")
    }
  })
}