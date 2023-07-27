/*---------------------arrow start--------------------*/
const arrows = document.querySelectorAll(".arrow");
const documentList = document.querySelector(".documents-list");
const imageItem = documentList.querySelectorAll("img").length;

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    arrow.addEventListener("click", function () {
        clickCounter++;

        if (imageItem - (1 + clickCounter) >= 0) {
            documentList.style.transform = `translateX(${documentList.computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            // Reset clickCounter to 0 when it reaches 7
            if (clickCounter === 7) {
                clickCounter = 0;
            }
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

/*------------------icons start--------------------------*/ 
        // Iconları seçin
        const icon1 = document.getElementById('main');
        const icon2 = document.getElementById('about');
        const icon3 = document.getElementById('education');

        // Hedeflenen kısımları seçin
        const hedefKisim1 = document.getElementById('ana-sayfa');
        const hedefKisim2 = document.getElementById('hakkimda');
        const hedefKisim3 = document.getElementById('egitim');

        // Iconlara tıklama olaylarını dinleyin ve odaklanma işlemini yapın
        main.addEventListener('click', function () {
            hedefKisim1.scrollIntoView({ behavior: 'smooth' });
        });

        about.addEventListener('click', function () {
            hedefKisim2.scrollIntoView({ behavior: 'smooth' });
        });

        education.addEventListener('click', function () {
            hedefKisim3.scrollIntoView({ behavior: 'smooth' });
        });

       
/*------------------icons end--------------------------*/ 


