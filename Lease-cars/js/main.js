function myFunction(x) {
    x.classList.toggle("change");
}

document.querySelector(".nav-button").addEventListener("click", function () {
    document.querySelector(".header-list").classList.toggle("hide-show");
})