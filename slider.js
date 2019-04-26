document.addEventListener("DOMContentLoaded", function() {
	var images = document.querySelectorAll('img[alt="slider item"]');
	console.log(images);
	var secondImages = document.querySelectorAll('.second-arr');
	console.log(secondImages);

	class Slider {
		constructor (arr) {
			this.arr = arr;
			var i = 0;
			this.prev = function() {
										this.arr[i].classList.remove('active');
										i--;
										( i < 0 ) ? i = this.arr.length - 1 : this.arr[i].classList.add('active');
										this.arr[i].classList.add('active')
									}
			this.next = function() {
										this.arr[i].classList.remove('active');
										i++;
										( i > this.arr.length - 1 ) ? i = 0 : this.arr[i].classList.add('active');
										this.arr[i].classList.add('active')
									}
		}	
	}


	var slider1 = new Slider(images);
	document.querySelector('.prev-btn').onclick = function (e) {
		slider1.prev();
	}
	document.querySelector('.next-btn').onclick = function (e) {
		slider1.next();
	}
	
	var slider2 = new Slider(secondImages);
	document.querySelector('.prev-btn2').onclick = function(e) {
		slider2.prev();
	};
	document.querySelector('.next-btn2').onclick = function(e) {
		slider2.next();
	};
});