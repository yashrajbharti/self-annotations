toggleswitch.addEventListener('change', () => {
    localStorage.setItem("toggleswitch", toggleswitch.checked);
    localStorage.setItem("Landscape", "Landscape");
    console.log(localStorage)
  });

  function isChecked() {

    document.getElementById('toggleswitch').checked = localStorage.getItem('toggleswitch') === "true";
    document.getElementById('status').innerHTML = localStorage.getItem('Landscape') === "true";
  }
  window.onload = function() {
   isChecked();
 };
