document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const themeLink = document.getElementById('theme');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

  darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    themeLink.href = darkModeToggle.checked ? 'dark-theme.css' : 'light-theme.css';
  });
});