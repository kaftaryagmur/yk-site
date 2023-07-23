/*---------------------arrow start--------------------*/
const arrows = document.querySelectorAll(".arrow");
const documentList = document.querySelector(".documents-list")
arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = documentList.querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (1 + clickCounter) >= 0) {
            documentList.style.transform = `translateX(${documentList.computedStyleMap().get("transform")[0].x.value - 300}px)`
        }
        else {
            documentList.style.transform = "translateX(0)";
        }
    });
});
/*---------------------arrow end--------------------*/


/*---------------------dark mode start--------------------*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.menu-list-item a.active,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.about-container,.education-container,.about-text-container,.date,.education-picture-container,.featured-content");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"))
});

/*---------------------dark mode end--------------------*/



