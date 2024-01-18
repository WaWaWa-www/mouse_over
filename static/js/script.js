document.addEventListener('DOMContentLoaded', function () {
	const triggerButton = document.getElementById('popup-trigger');
	const popupMessage = document.getElementById('popup-message');

	triggerButton.addEventListener('mouseenter', function () {
		popupMessage.classList.add('active');
	});

	triggerButton.addEventListener('mouseleave', function () {
		popupMessage.classList.remove('active');
	});
});
