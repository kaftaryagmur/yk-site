  // Sayfa yüklendiğinde en üstüne odaklanma işlemi
  window.onload = function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 100);
  };
  //Çıkış Yapma İşlemi
  function logout() {
    window.location.href = '../login.php';
    alert('Tekrar görüşmek üzere!');
  }
  function LogoutButton() {
    var logoutButton = document.getElementById("logoutButton");
    
    if (logoutButton.style.display === "none") {
      logoutButton.style.display = "block";
    } else {
      logoutButton.style.display = "none";
    }
  }
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
const items = document.querySelectorAll(".container,.menu-list-item a,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.about-container,.education-container,.education-title,.about-text-container,.date,.education-picture-container,.featured-content,.contact-title");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"))
});

/*---------------------dark mode end--------------------*/

/*------------------icons start--------------------------*/ 
        // Iconları seçin
        const icon1 = document.getElementById('main');
        const icon2 = document.getElementById('about');
        const icon3 = document.getElementById('education');
        const icon4 = document.getElementById('contact');

        // Hedeflenen kısımları seçin
        const hedef1 = document.getElementById('ana-sayfa');
        const hedef2 = document.getElementById('hakkimda');
        const hedef3 = document.getElementById('egitim');
        const hedef4 = document.getElementById('contact-container');


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

        contact.addEventListener('click', function () {
            hedef4.scrollIntoView({ behavior: 'smooth' });
        });

       
/*------------------icons end--------------------------*/ 


