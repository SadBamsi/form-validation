document.addEventListener("DOMContentLoaded", function() {
	/*var popupBtn = document.querySelector('#showPopup');
	var overlay = document.querySelector('.overlay');
	var popup = document.querySelector('#popup');
	document.addEventListener('click', function(e){
		if (e.target === popupBtn || e.target === popup) {
			overlay.classList.add('active');
			popup.classList.add('active');
		} else {
			popup.classList.remove('active');
			overlay.classList.remove('active');
		}
	})*/
	function PopUp(obj) {
		var that = this;
		that.btn = obj.btn;
		that.overlay = obj.overlay;
		that.popup = obj.popup;
		function showPopup (e) {
			document.querySelector(that.overlay).classList.toggle('active');
			document.querySelector(that.popup).classList.toggle('active');
		}
		document.querySelector(that.btn).addEventListener('click', showPopup);
		document.querySelector(that.overlay).addEventListener('click', showPopup);
	}
	// Потом надо сделать это по приницпам ООП
	var popup = new PopUp({
		btn: '#showPopup',
		overlay: '.overlay',
		popup: '#popup',
	})
})
