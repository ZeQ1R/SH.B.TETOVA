const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

// Toggle 'active' class on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
});


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
  var header = document.getElementById('header');
  var scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;

  if (scrollPercentage > 21) {
    header.classList.remove('transparent');
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('transparent');
  }
});
function toggleMenu(){
  const navbarRight = document.getElementById("navbar-right");
  navbarRight.classList.toggle("active")
}