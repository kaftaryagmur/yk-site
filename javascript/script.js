  // Sayfa yüklendiğinde en üstüne odaklanma işlemi
  window.onload = function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 100);
  };
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
const items = document.querySelectorAll(".container,.menu-list-item a,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.about-container,.education-container,.education-title,.about-text-container,.date,.education-picture-container,.featured-content");

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
        const hedef1 = document.getElementById('ana-sayfa');
        const hedef2 = document.getElementById('hakkimda');
        const hedef3 = document.getElementById('egitim');

        // Iconlara tıklama olaylarını dinleyin ve odaklanma işlemini yapın
        main.addEventListener('click', function () {
            hedef1.scrollIntoView({ behavior: 'smooth' });
        });

        about.addEventListener('click', function () {
            hedef2.scrollIntoView({ behavior: 'smooth' });
        });

        education.addEventListener('click', function () {
            hedef3.scrollIntoView({ behavior: 'smooth' });
        });

       
/*------------------icons end--------------------------*/ 


