(() => {
  const config = window.PORTFOLIO || {};
  document.querySelectorAll('[data-name]').forEach(el => el.textContent = config.name || 'Tên của bạn');
  document.querySelectorAll('[data-tagline]').forEach(el => el.textContent = config.tagline || el.textContent);
  const avatar = document.querySelector('#avatar');
  if (avatar && config.avatar) { avatar.src = config.avatar; avatar.alt = `Ảnh chân dung của ${config.name || 'chủ website'}`; }
  const themeButton = document.querySelector('.theme-toggle');
  let savedTheme;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', dark ? 'Bật chế độ sáng' : 'Bật chế độ tối');
  }
  setTheme(savedTheme ? savedTheme === 'dark' : preference.matches);
  themeButton.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    setTheme(dark);
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch {}
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => { if(a.getAttribute('href') === current) a.setAttribute('aria-current', 'page'); });
  document.querySelector('#year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.08});
    document.querySelectorAll('.reveal').forEach(el => { el.classList.add('animate'); observer.observe(el); });
  }
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');
    const valid = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(config.formspreeEndpoint || '');
    if (valid) {
      form.action = config.formspreeEndpoint;
      document.querySelector('#send-button').disabled = false;
      status.textContent = 'Thông tin sẽ được gửi qua Formspree.';
    } else {
      status.textContent = 'Form chưa được kết nối. Chủ website cần thêm endpoint Formspree trong js/config.js.';
      form.addEventListener('submit', event => event.preventDefault());
    }
  }
})();
