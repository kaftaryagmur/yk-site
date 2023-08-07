new Vue({
    el: '#contact-container',
    data: {
        formData: {
            name: '',
            surname:'',
            email: '',
            message: '',
        },
    },
    methods: {
        submitForm() {
            if (!this.isValidEmail(this.formData.email)) {
                return;
            }

            alert('Gönderildi,teşekkür ederiz.')
 
        },
        showComplaints(){
            localStorage.setItem('formData', JSON.stringify(this.formData));
            window.location.href='../html/feedbacks.html';
        },
        clearForm() {
            this.formData.name = '';
            this.formData.surname='';
            this.formData.email = '';
            this.formData.message = '';
        },
        isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
    },
});