
function openModal() {
  document.getElementById('locationModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('locationModal').style.display = 'none';
}

// window.addEventListener('scroll', function() {
//   var navbar = document.getElementById('navbar');
//   var scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;

//   if (scrollPercentage > 19) {
//     navbar.classList.remove('transparent');
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//     navbar.classList.add('transparent');
//   }
// });

// window.onload = function() {
//   setTimeout(function() {
//       document.querySelector('.socket').style.display = 'none';
//       document.getElementById('page').style.display = 'block';
//   }, 3000);
// };
// Close modal when clicking outside of the modal content

window.onclick = function(){
    document.getElementById("h4").style.display = none;
}

function openEmail(){
  window.location.href = "mailto:shbtetova@outlook.com";
}
window.onclick = function(event) {
  const modal = document.getElementById('locationModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }

}

function ReadMore(){
  document.getElementsByClassName("class-more");
  window.open("peaks.html", '_blank');
}
// const toggleMenuOpen = () => document.body.classList.toggle("open");
function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}


// function toggleMenu(){
//   const navbarRight = document.getElementById("navbar-right");
//   navbarRight.classList.toggle("active")
// }

// let users = [];

// function signUpUser(username,email){
//   let newUser = {
//     username:username,
//     email:email
//   };

//   users.push(newUser);
//   console.log(`${username} has signed up successfully`);
// }

// function postData() {
//   var userInfo = {};
//   var name = $('#name').val();
//   var lastname = $('#lastname').val();
//   var email = $("#email").val();
//   var password = $("#pw").val();
//   var embg = $("#EMBG").val();
//   var dob = $('#DOB').val();
//   var destination = $("#Destination").val();

//   userInfo.name = name;
//   userInfo.lastname = lastname;
//   userInfo.email = email;
//   userInfo.password = password;
//   userInfo.embg = embg;
//   userInfo.dob = dob;
//   userInfo.destination = destination;
//   localStorage.setItem('userInfo', JSON.stringify(userInfo));

//   if(name && lastname && email ){
//     alert("Your Sign Up has been recorded successfully");
//   }else{
//     alert("Your Sign Up isn't finished");
//   }

// }

// document.getElementById("signupForm").addEventListener('onclick',function(event){
//   event.preventDefault();

//   const username = document.getElementById("name").value;
  
//   const Email = document.getElementById("email").value;


//   const user = {username,Email};

//   let users = JSON.parse(localStorage.getItem('users')) || [];
//   users.push(user);
//   localStorage.setItem('users',JSON.stringify(users));
//   console.log(users);

//   alert("User signed up successfully");

//   window.location.href = "admin.html";
//   window.open('admin.html','_blank')
// })


function SignUp(){
  window.open("signup.html", "_blank");
}


// function Admin(){
//   var LoginInfo = {};
//   var LoginName = $("#name").val();
//   var LoginPassword = $("#password").val();
//   var LoginNumber = $("#num").val();

//   LoginInfo.LoginName = LoginName;
//   LoginInfo.LoginPassword = LoginPassword;
//   LoginInfo.LoginNumber = LoginNumber

//   if(LoginPassword === "111" && LoginNumber === "0504"){
//     window.open("admin.html","_blank");
//   }else{
//     alert("please fill out the required information");
//   }
// }