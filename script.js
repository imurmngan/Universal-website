const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const progressBar = document.getElementById('progressBar');

// Reveal từng khu vực khi cuộn đến, có fallback cho trình duyệt cũ.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

// Thanh tiến trình nhỏ ở đầu trang.
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = progress + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Chuyển sáng/tối, không lưu tùy chọn vào thiết bị.
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
});

// Chú mèo trên đầu trang hơi nghiêng theo con trỏ trên máy tính.
const heroArt = document.querySelector('.hero-art');
const mainCat = document.querySelector('.main-cat');
if (heroArt && mainCat && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroArt.addEventListener('pointermove', event => {
    const rect = heroArt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mainCat.style.translate = (x * 7) + 'px ' + (y * 6) + 'px';
  });
  heroArt.addEventListener('pointerleave', () => { mainCat.style.translate = ''; });
}

// Thêm một dấu chân nhỏ vào nút chủ đề khi rê chuột.
themeToggle.addEventListener('mouseenter', () => { themeToggle.style.transform = 'rotate(18deg)'; });
themeToggle.addEventListener('mouseleave', () => { themeToggle.style.transform = ''; });
