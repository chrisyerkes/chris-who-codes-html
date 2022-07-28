// Check to make sure the document is ready
document.addEventListener(
	'DOMContentLoaded',
	function (event) {
		// Flickity Slider
		const services = document.querySelector('.services-slider');
		const servicesSlider = new Flickity(services, {
			cellSelector: '.single-service',
			cellAlign: 'left',
			contain: true,
			pageDots: false,
			prevNextButtons: false,
			on: {
				ready: function () {
					// Make all .single-service elements equal height
					const serviceElements =
						document.querySelectorAll('.single-service');
					let maxHeight = 0;
					if (serviceElements.length > 0) {
						serviceElements.forEach(function (element) {
							let elHeight = element.offsetHeight;
							if (elHeight > maxHeight) {
								maxHeight = elHeight;
							}
						});
						serviceElements.forEach(function (element) {
							element.style.height = maxHeight + 'px';
						});
					}
				},
			},
		});
		const animation = document.querySelector('.chris-animated-container');
		// animation check script
		// const animationToggle = document.querySelector('.animation-toggle');
		// animationToggle.addEventListener('click', function () {
		// 	animation.classList.toggle('animating');
		// });
		// Creating a function that controls the animation using a random number system
		let randomAnimation = (min, max) => {
			// Get a random number between min and max
			let num = Math.floor(Math.random() * (max - min + 1)) + min,
				// Generating a random number to determine length of animation to play
				animLengthSeed = Math.floor(Math.random() * 100),
				// Animation total length variable
				animLength;
			// If the random number is less than or equal to 33, play the animation for 3.2 seconds
			if (animLengthSeed <= 33) {
				animLength = 3200;
				// If the random number is between 33 and 66, play the animation for 6.4 seconds
			} else if (animLengthSeed > 33 && animLengthSeed <= 66) {
				animLength = 6400;
				// If the random number is between 66 and 100, play the animation for 9 seconds
			} else {
				animLength = 9000;
			}
			// Add class that turns on animation
			animation.classList.add('animating');
			// Checking numbers to determine which animation to play
			// console.log(animLengthSeed);
			// console.log(animLength);

			// Timer to remove the animation class after the animation is finished
			setTimeout(() => {
				animation.classList.remove('animating');

				// Recursive function to play the animation again
				setTimeout(() => {
					randomAnimation(min, max);
				}, num);
			}, animLength);
		};
		// Initial call of the function to start the animation sequence
		randomAnimation(1000, 10000);
	},
	false
);
