
/*---------------------dark mode start--------------------*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.about-container,.education-container,.about-text-container,.date,.education-picture-container,.featured-content");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"))
});

/*---------------------dark mode end--------------------*/