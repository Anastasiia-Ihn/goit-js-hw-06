const fontSizeControlInputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

fontSizeControlInputEl.addEventListener('input',changeFontSize)

function changeFontSize(event) {
    // textEl.style.fontSize = `${fontSizeControlInputEl.value}px`;
    // console.log(textEl.style.fontSize);
     textEl.style.fontSize = event.currentTarget.value + "px";

}