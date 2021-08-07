const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// Open modal
const openModal = () => (modal.style.display = 'block');

// Close modal
const closeModal = () => (modal.style.display = 'none');

// Outside click
const outsideClick = (e) => {
  if (e.target === modal) closeModal();
};

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
