const $button = document.querySelector('.submit');
$button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event.target);
  event.target.style.background = 'red';
});
