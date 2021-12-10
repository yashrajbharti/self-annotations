document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      newElement.setAttribute('rotation', '0 0 0')
      place.setAttribute('rotation', '0 0 90')
    } else {
      // do that
      newElement.setAttribute('rotation', '0 0 90')
      place.setAttribute('rotation', '0 0 0')

    }
  });
});



const sceneEl = document.querySelector('a-scene');
const place = document.getElementById('place')
place.addEventListener('click', (event) => {

console.log("snap target clicked");
// Create new entity for the new object
const newElement = document.createElement('a-entity')
// The raycaster gives a location of the touch in the scene

 const touchPoint = event.detail.intersection.point

 console.log(touchPoint);
   newElement.setAttribute('position', touchPoint)
   newElement.setAttribute('visible', 'false')
   newElement.setAttribute('rotation', '0 0 90')
   newElement.setAttribute('scale', '0.001 0.001 0.001')


 newElement.setAttribute('gltf-model', '#arrow')

    place.appendChild(newElement)

    touchPoint.x  /= 2000;
    touchPoint.y  /= 2000;
    touchPoint.z  = 0.00001;
    newElement.setAttribute('position', touchPoint)



 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});

const remove = document.getElementById('snap-button')
const place2 = document.getElementById('place')

remove.addEventListener('click', (event) => {
  console.log(place2.childNodes.length);
  if (place2.childNodes.length >= 1) {
  place2.removeChild(place2.lastChild)
  }
});
