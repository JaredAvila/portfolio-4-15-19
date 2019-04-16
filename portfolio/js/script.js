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
