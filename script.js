document.getElementById('internship-form').addEventListener('submit', function(event) {
  var inputs = this.querySelectorAll('input, select');
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].validity.valid) {
      event.preventDefault(); // prevent form submission
      inputs[i].nextElementSibling.style.display = 'block'; // show error message
    } else {
      inputs[i].nextElementSibling.style.display = 'none'; // hide error message
    }
  }
});
