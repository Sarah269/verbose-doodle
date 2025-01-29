const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");


// dynamically adding active-left and active-right to container

// add active-left to container
leftEl.addEventListener("mouseenter", ()=>{
    containerEl.classList.add("active-left");
})

// remove active-left from container
leftEl.addEventListener("mouseleave", ()=>{
    containerEl.classList.remove("active-left");
})


// add active-right to container
rightEl.addEventListener("mouseenter", () =>{
    containerE1.classList.add("active-right");
})

// remove active-right from container
rightEl.addEventListener("mouseleave", () =>{
    containerE1.classList.remove("active-right");
})