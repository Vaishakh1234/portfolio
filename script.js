document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        setTimeout(() => {
             const { clientX: x, clientY: y } = e;
             cursor.style.left = `${x}px`;
             cursor.style.top = `${y}px`;
       },100)
    });

    document.querySelectorAll('a,i').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('expanded');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('expanded');
        });
    });
});


// ------------scroll to top--------------
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
})

// ------------/scroll to top--------------



// ------------dark-theme toggle-------------

const themeToggleBtn = document.getElementById('themeToggleBtn')
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
})

// ------------dark-theme toggle-------------


// ------home text animations-------

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2000,
    delay: (el, i) => 100 + 10 * i
  });
// ------home text animations-------

// --------navbar hamburger---------

const hamBtn = document.getElementById('hamBtn')
const navItems = document.getElementById('navItems')

hamBtn.onclick = function () {
  
  if (navItems.style.display === "flex") {
      navItems.style.display = "none"
    } else {
      navItems.style.display = "flex"
    }
}

// --------navbar hamburger---------
