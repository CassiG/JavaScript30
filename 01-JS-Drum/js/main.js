// Refactored Solution

function playDrum(event) {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if(!audio) return; // shorthand if/else
  audio.currentTime = 0 // this rewinds the audio to the start so the program won't wait until it's done if you hit the key before that.
  audio.play();
  key.classList.add('playing')
};

function removeTransition(event) {
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playDrum);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Original solution
// window.addEventListener('keydown', function(event){
//   const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
//   const key = document.querySelector(`div[data-key='${event.keyCode}']`);
//   if(!audio) return;
//
//   audio.currentTime = 0 // this rewinds the audio to the start so the program won't wait until it's done if you hit the key before that.
//   audio.play();
//   key.classList.add('playing')
// });

// window.addEventListener('keyup', function(event){
//   const key = document.querySelector(`div[data-key='${event.keyCode}']`);
//   if(!key) {
//     return;
//   } else {
//     key.classList.remove('playing')
//   };
// })
