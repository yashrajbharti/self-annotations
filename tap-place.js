const sceneEl = document.querySelector('a-scene');
const place = document.getElementById('place')
place.addEventListener('click', (event) => {

console.log("snap target clicked");
// Create new entity for the new object
const newElement = document.createElement('a-entity')
const new2Element = document.createElement('a-entity')

// The raycaster gives a location of the touch in the scene

 const touchPoint = event.detail.intersection.point
 var checkbox = document.querySelector('input[type="checkbox"]');

  if (checkbox.checked === false){
    newElement.setAttribute('rotation', '0 0 90')
    new2Element.setAttribute('rotation', '0 0 0')
  }
  if (checkbox.checked === true){
    newElement.setAttribute('rotation', '0 0 0')
    new2Element.setAttribute('rotation', '0 0 -90')
  }

 console.log(touchPoint);
 new2Element.setAttribute('position', touchPoint)
    new2Element.setAttribute('visible', 'true')
    new2Element.setAttribute('scale', '1 1 1')
    new2Element.setAttribute('text', {
      value: 'New Text',
      color: 'white',
      shader: 'msdf',
      font: './aclonica/Aclonica-Regular.json'
   });

     place.appendChild(new2Element)



   newElement.setAttribute('position', touchPoint)
   newElement.setAttribute('visible', 'false')
   // newElement.setAttribute('rotation', '0 0 -90')
   newElement.setAttribute('scale', '0.001 0.001 0.001')


 newElement.setAttribute('gltf-model', '#arrow')
    place.appendChild(newElement)

    touchPoint.x  /= 2000;
    touchPoint.y  /= 2000;
    touchPoint.z  = 0.00001;
    var x2 = touchPoint.x + 0.45;
    var y2 = touchPoint.y - 0.1;
    newElement.setAttribute('position', touchPoint)
    new2Element.setAttribute('position', {x: x2, y: y2, z: 0.00001});


 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});

const remove = document.getElementById('snap-button')
const place2 = document.getElementById('place')

remove.addEventListener('click', (event) => {
  console.log(place2.childNodes.length);
  if (place2.childNodes.length > 1) {
  place2.removeChild(place2.lastChild)
  place2.removeChild(place2.lastChild)
  }
});


var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    // do this
    place.setAttribute('rotation', '0 0 90')
    while (place.firstChild) {
   place.removeChild(place.lastChild);
 } // Portrait and Landscape has different calibrations, that's why it's important to work on one at a time
  } else {
    // do that
    place.setAttribute('rotation', '0 0 0')
    while (place.firstChild) {
   place.removeChild(place.lastChild);
 }
  }
})
