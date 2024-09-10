// create an array
const testimonials = [
   {
        name: "Sam R",
        photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I am extremely impressed by XYZ Clothing's trendy and comfortable clothing collection. The quality and style of their products are unmatched. Every time I wear their outfits, I receive compliments on how great I look!"
   } ,
   {
        name: "Reggie T",
        photoURL: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I am extremely satisfied with the high-quality clothing products from XYZ clothing. Their trendy designs and comfortable fabrics make them my go-to choice for all my fashion needs. I highly recommend XYZ clothing to anyone looking for stylish and durable clothing options."
   },
   {
        name: "Sophie R",
        photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "XYZ clothing offers a fantastic selection of trendy clothing that is both stylish and affordable. I love how versatile their pieces are, making it easy to create unique outfits for any occasion. The quality is top-notch, and their customer service is exceptional!"
   }
];

const imgEl = document.querySelector("img");
// class = "text"
const textEl = document.querySelector(".text");
// class = "username"
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){

    const {name, photoURL, text} = testimonials[idx];
    imgEl.src = photoURL;
    textEl.innerText = text;
    usernameEl.innerText  = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)


}