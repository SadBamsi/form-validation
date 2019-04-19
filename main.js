document.addEventListener("DOMContentLoaded", function () {
	/* Валидация формы. Нужно сделать пару сабмитов, и на уровне JS проверять, правильно ли заполнена форма, если нет, то блокировать субмит, и обводить инпут красной рамкой*/
		var inputs = document.querySelectorAll('.text');
		var btn = document.querySelector('.submit');
		var phoneInput = document.querySelector('input[data-val="phone"]');
		var nameInput = document.querySelector('input[data-val="name"]');
		var emailInput = document.querySelector('input[data-val="email"]');
		
/*phone validation*/
		var validatorPhone = /[a-zA-z* *а-яА-Я]/;
		var resultPhoneNumber = /^\d[\d\(\)\ -]{4,14}\d$/;
				phoneInput.addEventListener('keypress', function(e){					
					if (validatorPhone.test(e.key)) {
						e.preventDefault();
						phoneInput.classList.add('error');
					} else {
						phoneInput.value;
						phoneInput.classList.remove('error');
					}
				});
				phoneInput.addEventListener('blur', function(e) {
					if (!resultPhoneNumber.test(this.value)) {
						phoneInput.classList.remove('error');
						btn.disabled = true;
					}
				})
/*Name validation*/

		var validatorName = /[0-9* *?|\/!@#$;%^&*(),.]/;
				nameInput.addEventListener('keypress', function(e){
					if (validatorName.test(e.key)) {
						e.preventDefault();
						nameInput.classList.add('error');
					} else {
						nameInput.classList.remove('error');
					}
				})
				nameInput.addEventListener('blur', function(e) {
					nameInput.classList.remove('error');
				})
		var validatorEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				emailInput.addEventListener('blur', function () {
					if (validatorEmail.test(this.value) == false) {
						emailInput.classList.add('error');
						btn.disabled = true;
					} else {
						emailInput.classList.remove('error');
						btn.disabled = false;
					}
				})		

})		