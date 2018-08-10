const propeller = document.querySelectorAll('#cataventos .helice')


TweenMax.set(propeller, {
  y: 10
})

TweenMax.staggerFromTo(propeller, 5, {
  rotation: 360,
  transformOrigin: '50% center',
}, {
  rotation: 0,
  repeat: -1
})