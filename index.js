anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 800 * i
  }).add({
  targets: '.ml15',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 5000
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 800 + 30 * i
  }).add({
  targets: '.ml12 .letter',
  translateX: [0, -30],
  opacity: [1, 0],
  easing: "easeInExpo",
  duration: 5000,
  delay: (el, i) => 100 + 30 * i
});
