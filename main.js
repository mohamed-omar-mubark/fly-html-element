let banner = document.querySelector('.banner')
banner.addEventListener('mousemove', (e) => {
  var x = (e.pageX * -1/2) + 300;
  var y = (e.pageY * -1/3) + 120;

  let droneBox = document.querySelector('.fly-object')
  droneBox.style.transform = 'translate3d('+x+'px, '+y+'px, 0)';
})