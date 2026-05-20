// FOMO timer state
var fomoInterval = null;
var fomoSeconds = 0;

function startFomoTimer() {
  var timer = document.getElementById('fomo-timer');
  if (!timer) return;
  if (fomoInterval) return;

  fomoSeconds = 23 * 3600 + 59 * 60 + 59;
  timer.style.display = 'block';
  renderFomoTime();

  fomoInterval = setInterval(function () {
    if (fomoSeconds > 0) {
      fomoSeconds--;
      renderFomoTime();
    } else {
      clearInterval(fomoInterval);
      document.getElementById('fomo-time').textContent = '만료됨';
    }
  }, 1000);
}

function renderFomoTime() {
  var h = Math.floor(fomoSeconds / 3600);
  var m = Math.floor((fomoSeconds % 3600) / 60);
  var s = fomoSeconds % 60;
  document.getElementById('fomo-time').textContent =
    pad(h) + ':' + pad(m) + ':' + pad(s);
}

function pad(n) { return n < 10 ? '0' + n : '' + n; }

function downloadCoupon(btn, id) {
  btn.classList.add('downloaded');
  btn.innerHTML = '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  showToast('쿠폰이 쿠폰함에 담겼어요 🎉');
  startFomoTimer();
}

function updateCouponState() {
  var agree = document.getElementById('push-agree');
  var btn = document.getElementById('app-coupon-btn');
  if (btn) btn.disabled = !agree.checked;
}

function receiveAllCoupons(type) {
  showToast('쿠폰팩이 모두 지급되었어요 🎉');
  startFomoTimer();
}

function toggleAccordion(id) {
  var body = document.getElementById(id + '-body');
  var arrow = document.getElementById(id + '-arrow');
  if (!body) return;
  var isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.style.display = 'none';
  }, 2400);
}