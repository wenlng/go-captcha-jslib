import GoCaptcha from "../global";

export const ButtonExample = () => {
  const el = document.getElementById("button-wrap");
  const capt = new GoCaptcha.Button()

  capt.mount(el)
  capt.setState({
    clickEvent: () => {
      console.log(">>>>> hello")
    }
  })
}
