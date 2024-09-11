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