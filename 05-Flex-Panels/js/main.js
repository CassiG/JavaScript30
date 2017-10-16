const panels = document.querySelectorAll('.panel');

const toggleOpen = function() {
  this.classList.toggle('open');
}

const openActive = function(event) {
  if(event.propertyName === 'flex-grow'){
    this.classList.toggle('open-active');
  }
}

panels.forEach( panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', openActive);
});
