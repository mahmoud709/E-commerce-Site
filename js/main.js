// For AOS Ribrary
AOS.init();
// let scroll_down = document.querySelector(".scroll-down");
// scroll_down.onclick = () => {
//   window.scrollTo({
//     top: 500,
//     behavior: "smooth",
//   });
// };

let bar_icon = document.getElementById("bar-icon");
let close_icon = document.getElementById("close-icon");
let menue = document.querySelector(".links");

bar_icon.addEventListener("click", () => {
  menue.classList.toggle("close");
});
close_icon.onclick = () => {
  menue.classList.remove("close");
};

let scroll_up = document.getElementById("scroll-up");

window.onscroll = () => {
  if (window.scrollY >= 480) {
    scroll_up.style.display = "block";
  } else {
    scroll_up.style.display = "none";
  }
};
scroll_up.addEventListener("click", () => {
  window.scroll(0, 0);
});

let all_btncat=document.querySelectorAll(".cat-btns button");
let all_cards=document.querySelectorAll(".card");

// change background
all_btncat.forEach((e)=>{
  e.addEventListener("click",(el)=>{
    all_btncat.forEach((e)=>{
      e.classList.remove("a-btn");
    })
    el.currentTarget.classList.add("a-btn");
  })
})

all_btncat.forEach((e)=>{
  e.addEventListener("click",(el)=>{
    all_cards.forEach((el)=>{
      el.style.display='none'
    })
    document.querySelectorAll(e.dataset.cat).forEach((e)=>{
      e.style.display='block';
    })
  })
})
