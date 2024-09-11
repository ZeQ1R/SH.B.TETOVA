// Get elements
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

// Toggle 'active' class on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
});

function openModal() {
    document.getElementById('locationModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
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

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}