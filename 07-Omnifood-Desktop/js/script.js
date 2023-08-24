console.log("Hello Word!")

const EU = "Vasco Brito";
const h1 = document.querySelector(".heading-primary");

console.log(EU);
console.log(h1);



// h1.addEventListener('click',function() {
//   h1.textContent = EU;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";  
// });



// SET CURRENT YEAR
const YEAREL = document.querySelector(".year");
const CURRENTYEAR = new Date().getFullYear();
YEAREL.textContent = CURRENTYEAR;


// MAKE HAMBURGUER LIST OPEN

var btnNavEl = document.querySelector(".btn-mobile-nav");
var headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
})

const ALLLINKS = document.querySelectorAll("a:link");
console.log(ALLLINKS);

ALLLINKS.forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();
    const href = link.getAttribute("href");

      // SCROLL BACK TO TOP

      if (href === "#") 
      window.scrollTo({
        top:0,
        behavior: "smooth",
      });

      // SCROOL TO OTHER LINKS 
      if (href !== "#" && href.startsWith("#")) {
        
        const SECTIONEL = document.querySelector(href);
       SECTIONEL.scrollIntoView(
         {behavior: "smooth" });
        }

        // CLOSE THE HAMBURGER TAB

        if(link.classList.contains('main-nav-link'));
          headerEl.classList.toggle("nav-open");
  });
});
  
///////////////////////////////////////////////////////////
// STICKY NAVIGATION

const SECTIONHEROEL = document.querySelector(".section-hero")


const OBS = new IntersectionObserver(
  function(entries) {
    const ENT = entries[0];
    console.log(ENT);
 
    if(ENT.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if(ENT.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  }, 
  {
    // in the view port
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
OBS.observe(SECTIONHEROEL);








///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
