// const button = document.getElementById("buttons");
// const all = document.getElementById("all");
// const beginner = document.getElementById("beignner");
// const intermediate = document.getElementById("intermediate");
// const advanced = document.getElementById("advanced");
// const peaksCards = document.getElementById("peak-cards");

// const peaks = [{
//   name: "Leshnica  WaterFall",
//   duration: "6 hours",
//   difficulty : "beginner",
//   description : "This Waterfall will leave you astonished about the beauty of the route,the colorful trees and an amazing trip that leads you into another world"


// },
// {
//   name:"Kabash",
//   duration: "8 hours",
//   difficulty: "Advanced",
//   description : "The Kabash Peak is located in Korab Mountain, and it's probably the hardest peak to climb in North Macedonia and it's breathtaking experience."

// },
// {
//   name:"Lake of Jazhinca",
//   duration: "9 hours",
//   difficulty: "Intermediate",
//   description : "This Lake is located in Kosova,it's the hidden gem of Kosova, it is surounded from the mountains all over the sides,and it has the most delicious blueberries."

// },
// {
//   name:"Gajrina",
//   duration:"5 hours",
//   difficulty:"beginner",
//   description : "Gajrina is not a peak nor a mountain. It's a place the mountaineers take a breath and enjoy the sunlight,make jokes and sing tradicional songs."

// },
// {
//   name: "Kobilica Peak",
//   duration: "10 hours",
//   difficulty: "advanced",
//   description : "Kobilica as well as the name is very rare and with a beautiful site.It's one of the hardest peakes in Sharr Mountain because of it steapness."

// },
// {
//   name:"Bogovina Lake",
//   duration: "9 hours",
//   difficulty: "intermediate",
//   description : "Right above Tetova city there is the biggest Lake in Sharr Mountain with a neverseen Landscape.People usually go there for fishing and the fresh air."

// },
// {
//   name:"Luboten Peak",
//   duration: "8 hours",
//   difficulty: "intermediate",
//   description : "The beauty of Luboten Peak is that you can climb from both sides from Macedonia's and Kosova's side.It's a rocky peak and has a gorgeous sight."

// },
// {
//   name:"Korab WaterFall",
//   duration:"12 hours",
//   difficulty: "advanced",
//   description : "This Waterfall is the highest in North Macedonia, that it's located in Korab Mountain.And it takes place as one of the hardest routes with 26km both ways."

// },
// {
//   name:"The Endless Joly(Xholi)",
//   duration: "10 hours",
//   difficulty: "advanced",
//   description : "If you want a fresh trip on the summer days this is the best place to go.With it's landscape and the ice water it's a perfect hike to go."

// }
// ];

// const setPeakCards = (arr = peaks) =>{
//     peaksCards.innerHTML += arr
//     .map(
//         ({name,description}) =>
//             `<div class="image-box">
//             <img src="images/Leshnica_Waterfall.jpg" >
//         </div>
//         <div class="content">
//             <h2>${name}</h2>
//             <p>${description}
//             </p>
//         </div>`
//     )
//     .join("");
// };

// button.addEventListener("change" , (e)=> {
//     peaksCards.innerHTML = "";

//     switch(e.target.value){
//         case "beginner":
//             setPeakCards(peaks.filter((peak) => peak.difficulty === "beginner"));
//             break;
//         case "intermediate":
//             setPeakCards(peaks.filter((peak) => peak.difficulty === "intermediate"));
//             break;
//         case "advanced":
//             setPeakCards(peaks.filter((peak) => peak.difficulty === "advanced"));
//             break;
//         default:
//             setPeakCards();
//     }
// })


function filterCards(buttonId) {

  const cards = document.querySelectorAll(".layout");


  for (const card of cards) {

    const cardId = card.id;


    if (cardId === buttonId || buttonId === "all") {

      card.style.display = "inline-block";
    } else {

      card.style.display = "none";
    }
  }
}


const buttons = document.querySelectorAll(".filter-button");
for (const button of buttons) {
  button.addEventListener("click", function() {
    const clickedButtonId = this.id;  
    filterCards(clickedButtonId);
  });
}

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var navbarright = this.document.getElementById("navbar-right");
  var scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;

  if (scrollPercentage > 21) {
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
    navbarright.classList.remove('transparent');
    navbarright.classList.add('scrolled');

  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
    navbarright.classList.remove('scrolled');
    navbarright.classList.add('transparent');
  }
});



function toggleMenu(){
  const navbarRight = document.getElementById("navbar-right");
  navbarRight.classList.toggle("active")
}