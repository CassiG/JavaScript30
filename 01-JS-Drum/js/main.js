window.addEventListener('keydown', function(event){
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if(!audio) {
    return;
  } else {
    audio.play();
    key.classList.add('playing')
  };
});

window.addEventListener('keyup', function(event){
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if(!key) {
    return;
  } else {
    key.classList.remove('playing')
  };
})
