const tagButtons = document.querySelectorAll('.tag-button');

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});