// variable menu

const imgDelete = document.getElementById("delete"),
  numberShose = document.getElementById("n-shose"),
  salaryShose = document.getElementById("s-shose"),
  empty = document.getElementById("empty"),
  allShose = document.querySelector(".shose"),
  submit = document.getElementById("check"),
  cart = document.getElementById("number-cart"),
  total = document.getElementById("total"),
  mainImg = document.getElementById("main-1"),
  clickImgOne = document.getElementById("click-1"),
  clickImgTwo = document.getElementById("click-2"),
  clickImgThree = document.getElementById("click-3"),
  clickImgFour = document.getElementById("click-4"),
  minus = document.getElementById("minus"),
  cartValue = document.getElementById("value"),
  plus = document.getElementById("plus"),
  cartInvalid = document.getElementById("cart"),
  cartClose = document.getElementById("close"),
  cartSubmit = document.getElementById("cart-submit"),
  cartDelete = document.querySelector(".two"),
  empty1 = document.getElementById("empty1"),
  mainCartImg = document.getElementById("main_cart"),
  menuMob = document.getElementById("click"),
  all_menu_1 = document.querySelector(".all-menu-1"),
  closeMenu = document.querySelector(".Close2");

//#######################################################

let i = 0;

plus.addEventListener("click", () => {
  i++;
  if (i < 10) {
    cartValue.innerText = `0${i}`;
  } else {
    cartValue.innerText = i;
  }
});

minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    if (i < 10) {
      cartValue.innerText = `0${i}`;
    } else {
      cartValue.innerText = i;
    }
  }
});

cartInvalid.addEventListener("click", () => {
  cart.classList.remove("not-show");
  if (cartValue.innerText <= 0) {
    empty.classList.remove("not-show");
    allShose.classList.add("not-show");
  } else {
    allShose.classList.remove("not-show");
    empty.classList.add("not-show");
  }
});

cartClose.onmousedown = function () {
  cart.classList.add("not-show");
};

cartSubmit.addEventListener("click", () => {
  numberShose.innerText = i;
  salaryShose.innerText = `$${i * 125}`;
  total.innerText = i;

  empty1.style.display = "none";
  allShose.classList.remove("d-none");
});

cartDelete.addEventListener("click", function () {
  empty1.style.display = "flex";
  allShose.classList.add("d-none");
  total.innerText = "";
});

clickImgOne.addEventListener("click", () => {
  clickImgOne.style.border = "4px solid red";
  clickImgTwo.style.border = "none";
  clickImgThree.style.border = "none";
  clickImgFour.style.border = "none";
  mainImg.src = "images/image-product-1.jpg";
  mainCartImg.src = "images/image-product-1.jpg";
});

clickImgTwo.addEventListener("click", () => {
  clickImgOne.style.border = "none";
  clickImgTwo.style.border = "4px solid red";
  clickImgThree.style.border = "none";
  clickImgFour.style.border = "none";
  mainImg.src = "images/image-product-2.jpg";
  mainCartImg.src = "images/image-product-2.jpg";
});
clickImgThree.addEventListener("click", () => {
  clickImgOne.style.border = "none";
  clickImgTwo.style.border = "none";
  clickImgThree.style.border = "4px solid red";
  clickImgFour.style.border = "none";
  mainImg.src = "images/image-product-3.jpg";
  mainCartImg.src = "images/image-product-3.jpg";
});
clickImgFour.addEventListener("click", () => {
  clickImgOne.style.border = "none";
  clickImgTwo.style.border = "none";
  clickImgThree.style.border = "none";
  clickImgFour.style.border = "4px solid red";
  mainImg.src = "images/image-product-4.jpg";
  mainCartImg.src = "images/image-product-4.jpg";
});

menuMob.onclick = showMenu;
closeMenu.onmousedown = closemenu;

function showMenu() {
  all_menu_1.style.left = "0px";
}

function closemenu() {
  all_menu_1.style.left = "-250px";
}

// ########################################################################

// Slider Img

var sliderImg = Array.from(document.querySelectorAll(".phone-img img")),
  next = document.getElementById("right"),
  prev = document.getElementById("left"),
  slideNumber = sliderImg.length,
  counterSlide = 1;

next.onclick = nextImg;
prev.onclick = prevImg;

theChecker();

function nextImg() {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    counterSlide++;
    theChecker();
  }
}

function prevImg() {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    counterSlide--;
    theChecker();
  }
}

function theChecker() {
  removeAllActive();
  sliderImg[counterSlide - 1].classList.add("active");

  if (counterSlide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (counterSlide == slideNumber) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImg.forEach(function (img) {
    img.classList.remove("active");
  });
}
