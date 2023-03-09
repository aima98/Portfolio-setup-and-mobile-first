function showMessage(message) {
    const msg = document.querySelector('small');
    msg.innerText = message;
  }
  
  function showError(message) {
    showMessage(message);
  }
  
  function showSuccess() {
    showMessage('');
  }
  
  function validateEmail(input, invalidMsg) {
    const emailRegex = /[A-Z]/;
  
    const email = input.value.trim();
    if (emailRegex.test(email)) {
      return showError(invalidMsg);
    }
    return true;
  }
  });