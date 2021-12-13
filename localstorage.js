toggleswitch.addEventListener('change', () => {
    localStorage.setItem("toggleswitch", toggleswitch.checked);
    console.log(localStorage)
  });

  function isChecked() {

    document.getElementById('toggleswitch').checked = localStorage.getItem('toggleswitch') === "true";
  }
  window.onload = function() {
   isChecked();
 };
