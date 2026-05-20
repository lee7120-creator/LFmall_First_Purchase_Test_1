(function () {
  var overlay = document.getElementById('first-visit-overlay');
  if (!overlay) return;
  var skipped = sessionStorage.getItem('fv-skipped');
  if (skipped) { overlay.classList.add('hidden'); return; }
  document.getElementById('fv-close-btn').addEventListener('click', function () { overlay.classList.add('hidden'); });
  document.getElementById('fv-skip-btn').addEventListener('click', function () { sessionStorage.setItem('fv-skipped', '1'); overlay.classList.add('hidden'); });
})();