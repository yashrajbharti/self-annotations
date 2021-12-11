document.addEventListener("DOMContentLoaded", function() {
   const sceneEl = document.querySelector('a-scene');
   const arSystem = sceneEl.systems["mindar-face-system"];
const changer = document.querySelector('#inputtext');
if(changer === document.activeElement){
  arSystem.stop();
}
else
  arSystem.start();
});
