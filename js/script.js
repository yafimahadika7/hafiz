// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");
  

let htmlStartValue = 0,
  htmlEndValue = 60,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 20,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// word & excel progress circular bar 
let wordProgress = document.querySelector(".word"),
  wordValue = document.querySelector(".word-progress");

let wordStartValue = 0,
  wordEndValue = 80,
  wordspeed = 30;

let progressword = setInterval(() => {
  wordStartValue++;

  wordValue.textContent = `${wordStartValue}%`;
  wordProgress.style.background = `conic-gradient(#20c997 ${
    wordStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (wordStartValue == wordEndValue) {
    clearInterval(progressword);
  }
}, wordspeed);

// Kotlin & XML progress circular bar 
let kotlinProgress = document.querySelector(".kotlin"),
  kotlinValue = document.querySelector(".kotlin-progress");

let kotlinStartValue = 0,
  kotlinEndValue = 75,
  kotlinSpeed = 30;

let progresKotlin = setInterval(() => {
  kotlinStartValue++;

  kotlinValue.textContent = `${kotlinStartValue}%`;
  kotlinProgress.style.background = `conic-gradient(#3f396d ${
    kotlinStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (kotlinStartValue == kotlinEndValue) {
    clearInterval(progresKotlin);
  }
}, kotlinSpeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



function sendMessage() {
  // Collect form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;

  // Check if all fields are filled
  if (!name || !email || !mobile || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Prepare the WhatsApp message
  const messageText = `*New Message from Contact Form*\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;

  // WhatsApp API URL with pre-filled message
  const whatsappURL = `https://wa.me/6285715941718?text=${encodeURIComponent(messageText)}`;

  // Open WhatsApp link
  window.open(whatsappURL, "_blank");
}

// Tangkap semua tombol dengan kelas 'view-image'
const viewButtons = document.querySelectorAll('.view-image');
const modalImage = document.getElementById('modalImage');

viewButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Ambil URL gambar dari atribut data-img-src
    const imgSrc = this.getAttribute('data-img-src');
    modalImage.src = imgSrc; // Ubah src gambar di modal
  });
});

  


