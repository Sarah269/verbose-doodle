// select <body>
const bodyEl = document.querySelector("body")

// listen for mouse moves.  Create a span with a heart for each mouse move
// change color of heart in span
// remove new span
bodyEl.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top  = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width  = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();

    }, 3000);
});