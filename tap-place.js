const sceneEl = document.querySelector('a-scene');
const snaptarget = document.getElementById('snapshot-target')
snaptarget.addEventListener('targetFound', (event) => {

console.log("snap target found");
// Create new entity for the new object
const newElement = document.createElement('a-entity')
// The raycaster gives a location of the touch in the scene

 const touchPoint = event.detail.intersection.point

 console.log(touchPoint);
   newElement.setAttribute('position', touchPoint)
   newElement.setAttribute('visible', 'false')

   newElement.setAttribute('model', 'gltf-model');

    snaptarget.appendChild(newElement)
    touchPoint.x  /= 1000;
    touchPoint.y  /= 2000;
    touchPoint.z  /= 200000;

    newElement.setAttribute('position', touchPoint)



 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});
