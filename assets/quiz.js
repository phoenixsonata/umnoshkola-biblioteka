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
      } else if (why.textContent) {
        why.hidden = false;
      }
    });
  });
});
