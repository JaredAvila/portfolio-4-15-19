// xxxxxxxxxxxxxxxxxxxxxxxxxx  jQuery xxxxxxxxxxxxxxxxxxxxxx

$(document).ready(function() {
  // ----------------------------Skills icons
  $("#langCont").hover(
    () => {
      $("#langIcons").animate({ opacity: "1" }, 200);
    },
    () => {
      $("#langIcons").animate({ opacity: "0" }, 100);
    }
  );
  $("#libCont").hover(
    () => {
      $("#libIcons").animate({ opacity: "1" }, 200);
    },
    () => {
      $("#libIcons").animate({ opacity: "0" }, 100);
    }
  );
  $("#frameCont").hover(
    () => {
      $("#frameIcons").animate({ opacity: "1" }, 200);
    },
    () => {
      $("#frameIcons").animate({ opacity: "0" }, 100);
    }
  );
  $("#dataCont").hover(
    () => {
      $("#dataIcons").animate({ opacity: "1" }, 200);
    },
    () => {
      $("#dataIcons").animate({ opacity: "0" }, 100);
    }
  );

  // -------------------------- Sidenav
  $(".button-collapse").sideNav();

  // -------------------------- Scrollspy
  $(".scrollspy").scrollSpy();

  // -------------------------- ScrollFire
  const options = [
    {
      selector: ".main-text",
      offset: 0,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".aboutIntro",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".aboutTwo",
      offset: 300,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".skills",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: ".projects",
      offset: 200,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    }
  ];

  Materialize.scrollFire(options);
});

// xxxxxxxxxxxxxxxxxxxx JavaScript xxxxxxxxxxxxxxxxxxxxxxxxx

// ----------------------------------- Navbar
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  let navbar = document.getElementById("navbar");
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.className = navbar.className.replace(/\btransparent\b/g, "grey");
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};

// ----------------------------- landing page
let i = 0;
let j = 0;
const txt = "Hello, my name is Jared Avila";
const txt2 = "and I am a Software Developer.  =)";
var speed = 80;

const intro1 = () => {
  if (i < txt.length) {
    document.getElementById("intro1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(intro1, speed);
  }
};

const intro2 = () => {
  if (j < txt2.length) {
    document.getElementById("intro2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(intro2, speed);
  }
};

intro1();
setTimeout(intro2, 3000);

// ---------------------------- projects

var mixer = mixitup(".gallaryShowcase");
