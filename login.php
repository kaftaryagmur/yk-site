<?php
$correctUsername='g211210092@sakarya.edu.tr';
$correctPassword='g211210092'; 

if (isset($_POST['username'])) {
    $username=$_POST['username'];
    $password=$_POST['password'];

    if($correctUsername==$username && $correctPassword==$password){
        echo "Hoşgeldiniz + $username";
        header('Location: http://localhost/yk-site/html/index.html');
    }

    else {
        echo "Tekrar deneyiniz.";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Sayfası</title>
    <link rel="stylesheet" href="..\yk-site\css\login.css">
<body>
    <div class="container"> 
        <div class="logo">
            <img src="..\yk-site\photos\Kaftarlogo.png" alt="Logo">
        </div>
        <form action="#" method="post">

            <div class="title">Giriş Yap</div>

            <div class="input-box">
                <input type="email" name="username" placeholder="Email giriniz (11111@sakarya.edu.tr)"required autofocus>
                <div class="underline"></div>
            </div>

            <div class="input-box button">
                <input type="password" name="password" placeholder="Şifre giriniz " required>
                <div class="underline"></div>
            </div>

            <div class="input-box">
                <input type="submit" id="login-button" value="Giriş Yap">
            </div>

        </form>


    </div>
   <!-- <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("login-button").addEventListener("click", function (event) {
                event.preventDefault();
    
                var emailInput = document.querySelector('input[type="email"]');
                var emailValue = emailInput.value;
    
                var passwordInput = document.querySelector('input[type="password"]');
                var passwordValue = passwordInput.value;
    
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
                if (!emailPattern.test(emailValue)) {
                    alert("Geçerli bir e-posta adresi giriniz.");
                    return;
                }
    
                if (passwordValue.trim() === "") {
                    alert("Şifre giriniz.");
                    return;
                }
    
                window.location.href = "index.html";
            });
        });
    </script>-->
    
    
    
</body>
</html>