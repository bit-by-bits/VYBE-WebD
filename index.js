const form_submit = document.forms["sheetdb-form"];
const car_left = document.getElementById("1");
const car_middle = document.getElementById("2");
const car_right = document.getElementById("3");
const ham = document.querySelector(".ham");

let not_counted_before = !0;
let index = 2;
let is_open = false;

function remove_classes() {
  car_left.classList.remove("left");
  car_middle.classList.remove("left");
  car_right.classList.remove("left");

  car_left.classList.remove("middle");
  car_middle.classList.remove("middle");
  car_right.classList.remove("middle");

  car_left.classList.remove("right");
  car_middle.classList.remove("right");
  car_right.classList.remove("right");
}

function add_classes(e) {
  switch (e) {
    case 1:
      car_left.classList.add("middle");
      car_middle.classList.add("right");
      car_right.classList.add("left");
      break;
    case 2:
      car_middle.classList.add("middle");
      car_right.classList.add("right");
      car_left.classList.add("left");
      break;
    case 3:
      car_right.classList.add("middle");
      car_left.classList.add("right");
      car_middle.classList.add("left");
      break;
  }
}

window.addEventListener("scroll", () => {
  not_counted_before &&
    window.scrollY >
      document.querySelector(".hand-band").getBoundingClientRect().top &&
    ((not_counted_before = !1),
    document.querySelectorAll(".vb-grid-item").forEach((e) => {
      let t = parseInt(e.getAttribute("count-upto")),
        d = Math.floor(2e3 / t),
        s = 0,
        i = setInterval(() => {
          s++, (e.innerHTML = `${s}%`), s == t && clearInterval(i);
        }, d);
    }));
});

form_submit.addEventListener("submit", (e) => {
  e.preventDefault();

  form_submit.style.display = "none";
  document.querySelector(".form-2").style.display = "block";
});

setInterval(() => {
  remove_classes();
  3 == index ? (index = 1) : index++;
  add_classes(index);
}, 1e4);

document.getElementById("move-left").addEventListener("click", () => {
  remove_classes();
  1 == index ? (index = 3) : index++;
  add_classes(index);
});

document.getElementById("move-right").addEventListener("click", () => {
  remove_classes();
  3 == index ? (index = 1) : index++;
  add_classes(index);
});

document.querySelector(".menu-sign").addEventListener("click", () => {
  ham.style.animation = "ham-in 0.6s linear";

  setTimeout(() => {
    ham.style.right = "0";
  }, 600);

  is_open = true;
});

document
  .querySelector(".fa-x")
  .addEventListener("click", () => close_ham());

function close_ham() {
  ham.style.animation = "ham-out 0.6s linear";

  setTimeout(() => {
    ham.style.right = "-55vw";
  }, 600);

  is_open = false;
}

window.addEventListener("click", (element) => {
  if (is_open) {
    const e = element.target.className;
    e != "menu-sign" &&
      e != "ham" &&
      e != "ham-link" &&
      e != "q-ham" &&
      close_ham();
  }
});

if (screen.width < 861) {
  document.getElementById("page-1").innerHTML = `
  <img src="Assets/hand.png" />

  <div id="home">
    <div class="home-title">
      <span>Needles will</span><span>Never</span><span>Sting Again!</span>
    </div>

    <div class="home-content">
      Pain-free procedures are now at your fingertips
    </div>
  </div>
`;
} else {
  document.getElementById("page-1").innerHTML = `
        <div id="home">
          <div class="home-title">
            <span>Needles will</span><span>Never</span><span>Sting Again!</span>
          </div>

          <div class="home-content">
            Pain-free procedures are now at your fingertips
          </div>
        </div>

        <img src="Assets/hand.png" />
  `;
}
