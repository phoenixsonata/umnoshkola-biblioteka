// Все вопросы теста решены — показать итог; были ошибки — ещё и приглашение на пробную неделю (с 17.11.2026)
function finish(quiz) {
  if (!quiz) return;
  var end = quiz.querySelector('.quiz-end');
  if (!end || quiz.querySelector('.q:not(.done)')) return;
  end.hidden = false;
  var help = end.querySelector('.quiz-help');
  if (help && quiz.querySelector('.opt.wrong')) help.hidden = false;
}

document.querySelectorAll('.q').forEach(function (q) {
  var why = q.querySelector('.q-why');
  q.querySelectorAll('.opt').forEach(function (b) {
    b.addEventListener('click', function () {
      if (q.classList.contains('done')) return;
      var ok = b.dataset.ok === '1';
      b.classList.add(ok ? 'right' : 'wrong');
      if (ok) {
        q.classList.add('done');
        why.hidden = true;
        finish(q.closest('.quiz'));
      } else if (why.textContent) {
        why.hidden = false;
      }
    });
  });
});
