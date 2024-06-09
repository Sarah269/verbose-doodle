const btnEl = document.querySelector(".btn");

//track mouse event
//event.pageY: position from top to button text
//event.pageX: position from left to button text

btnEl.addEventListener("mouseover",(event)=>{
    const y = (event.pageY - btnEl.offsetTop);
    const x = (event.pageX - btnEl.offsetLeft);
    
    //change variable value in css
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});