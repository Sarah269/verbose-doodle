// store class="container"
const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  
  // if career starts with "I" use "an"
  // write to class = container
  containerEl.innerHTML = `
  <h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
  `;

 
// character index equals career index, move to next career, set character index to 0
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  } 

  // if career index equals length of carreer, reset career index to 0
  if (careerIndex === careers.length){
     careerIndex = 0;
  }
  // set up a slight delay between printing letters
   
  setTimeout(updateText, 400);
}