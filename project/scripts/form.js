function handleContactFormSubmit(event) {
  event.preventDefault();

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  name = name.trim();
  email = email.trim();

  if (name !== '' && email !== '') {
    status.textContent = 'Thanks, ' + name + '! We\'ll reply to ' + email + ' soon.';
    status.style.color = '#1e4d3a';
    form.reset();
  } else {
    status.textContent = 'Please fill in your name and email.';
    status.style.color = '#c44536';
  }
}

function setupContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) {
    return;
  }
  form.addEventListener('submit', handleContactFormSubmit);
}

document.addEventListener('DOMContentLoaded', setupContactForm);