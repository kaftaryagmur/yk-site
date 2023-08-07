function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('e-mail').value;
    var message = document.getElementById('ideas').value;

    if (firstName === '' || lastName === '' || email === '' || message === '') {
        alert('Lütfen tüm alanları doldurun.');
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return false;
    }

    return true;
}
const form =document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const fd = new FormData(form); 
    const obj = Object.fromEntries(fd);

    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);
})
function clearForm() {
    form.reset();
}
function showComplaints() {
    window.location.href = "../html/feedbacks.html";
}
function showMessage() {
    alert("Mesajınız alındı. Teşekkürler!");
}
