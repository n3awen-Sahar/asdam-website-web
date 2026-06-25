// =====================================================================
// ASDAM TECHNICAL GLASS COMPANY — main.js
// =====================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------- Mobile nav toggle ---------------- */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- Portfolio filters ---------------- */
  var filterBtns = document.querySelectorAll('#filters button');
  var projCards = document.querySelectorAll('#projGrid .proj-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-f');

      projCards.forEach(function (card) {
        var match = (f === 'all' || card.getAttribute('data-cat') === f);
        card.style.display = match ? '' : 'none';
      });
    });
  });

  /* ---------------- Quote form -> WhatsApp ---------------- */
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('fname').value.trim();
      var phone = document.getElementById('fphone').value.trim();
      var type = document.getElementById('ftype').value;
      var msg = document.getElementById('fmsg').value.trim();

      var text =
        'طلب عرض سعر جديد من موقع أسدام للزجاج:\n' +
        '— الاسم: ' + name + '\n' +
        '— الهاتف: ' + phone + '\n' +
        '— نوع المنتج: ' + type + '\n' +
        (msg ? '— التفاصيل: ' + msg : '');

      var url = 'https://wa.me/966545047777?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }

  /* ---------------- Header background on scroll ---------------- */
  var header = document.querySelector('.site-header');
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (header) {
      header.style.background = y > 40 ? 'rgba(9,16,23,.96)' : 'rgba(9,16,23,.86)';
    }
    lastY = y;
  }, { passive: true });

});
