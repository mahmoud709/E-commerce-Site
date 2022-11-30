let allproducts = document.querySelectorAll(".card");
let ProImage = document.querySelector(".image img");
let get_price = document.querySelectorAll(".price");
let final_price = document.querySelector(".final-price");

// allproducts.forEach((e) => {

// });

allproducts.forEach((e) => {
    e.addEventListener("click", () => {
    window.location.href = "singlepro.html";
    })
      e.addEventListener("click", () => {
        final_price = e.getElementsByTagName("p")[1].textContent;
        console.log(final_price);
      });
})