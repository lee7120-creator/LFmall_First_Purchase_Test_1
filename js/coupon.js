// Coupon download
function downloadCoupon(btn, id) {
  btn.classList.add('downloaded');
  btn.innerHTML = '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  showToast('쿠폰이 쿠폰함에 담겼어요 🎉');
}

// App coupon: enable button only when push agree is checked
function updateCouponState() {
  const agree = document.getElementById('push-agree');
  const btn = document.getElementById('app-coupon-btn');
  if (btn) btn.disabled = !agree.checked;
}

function receiveAppCoupon() {
  const agree = document.getElementById('push-agree');
  if (!agree || !agree.checked) return;
  showToast('앱 전용 20% 쿠폰이 지급되었어요 📱');
  document.getElementById('app-coupon-btn').textContent = '✓ 수령 완료';
  document.getElementById('app-coupon-btn').disabled = true;
}

function receiveAllCoupons(type) {
  showToast('쿠폰팩이 모두 지급되었어요 🎉');
}

// Accordion
function toggleAccordion(id) {
  const body = document.getElementById(id + '-body');
  const arrow = document.getElementById(id + '-arrow');
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.style.display = 'none';
  }, 2400);
}
