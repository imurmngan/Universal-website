const planetData = {
  sun: {name:'Mặt Trời',english:'THE SUN · NGÔI SAO Ở TRUNG TÂM',description:'Mặt Trời là một ngôi sao tạo ra năng lượng nhờ phản ứng nhiệt hạch trong lõi. Lực hấp dẫn của nó giữ các hành tinh trong hệ Mặt Trời chuyển động quanh mình.',stat:'Ánh sáng Mặt Trời mất khoảng 8 phút 20 giây để đến Trái Đất.',className:'sun-info'},
  mercury: {name:'Sao Thủy',english:'MERCURY · HÀNH TINH GẦN MẶT TRỜI NHẤT',description:'Sao Thủy là hành tinh nhỏ nhất trong tám hành tinh và quay quanh Mặt Trời nhanh nhất. Bề mặt đầy hố va chạm khiến nó trông giống Mặt Trăng.',stat:'Một năm trên Sao Thủy chỉ dài 88 ngày Trái Đất.',className:'mercury'},
  venus: {name:'Sao Kim',english:'VENUS · THẾ GIỚI NÓNG BỎNG',description:'Sao Kim có bầu khí quyển dày, giàu carbon dioxide và những đám mây axit sulfuric. Hiệu ứng nhà kính cực mạnh khiến đây là hành tinh nóng nhất hệ Mặt Trời.',stat:'Nhiệt độ bề mặt khoảng 465°C.',className:'venus'},
  earth: {name:'Trái Đất',english:'EARTH · NGÔI NHÀ CỦA CHÚNG TA',description:'Trái Đất là thế giới duy nhất hiện được biết đến có sự sống. Nước lỏng trên bề mặt, khí quyển và từ trường góp phần tạo nên môi trường đặc biệt này.',stat:'Khoảng 71% bề mặt Trái Đất được nước bao phủ.',className:'earth'},
  mars: {name:'Sao Hỏa',english:'MARS · HÀNH TINH ĐỎ',description:'Sao Hỏa có màu đỏ do khoáng chất giàu sắt trên bề mặt bị oxy hóa. Các tàu thăm dò đang tìm hiểu lịch sử nước và khả năng từng tồn tại môi trường thích hợp cho sự sống vi sinh.',stat:'Sao Hỏa có núi lửa Olympus Mons, một trong những núi lửa lớn nhất được biết đến trong hệ Mặt Trời.',className:'mars'},
  jupiter: {name:'Sao Mộc',english:'JUPITER · HÀNH TINH KHỔNG LỒ',description:'Sao Mộc là hành tinh lớn nhất hệ Mặt Trời. Nó chủ yếu gồm hydro và heli, với những dải mây nhiều màu cùng các cơn bão khổng lồ.',stat:'Một ngày trên Sao Mộc chỉ kéo dài khoảng 10 giờ.',className:'jupiter'},
  saturn: {name:'Sao Thổ',english:'SATURN · VÀNH ĐAI LỘNG LẪY',description:'Sao Thổ nổi tiếng với hệ vành đai rộng lớn làm từ vô số mảnh băng, đá và bụi. Đây cũng là một hành tinh khí khổng lồ với nhiều mặt trăng.',stat:'Các vành đai chính trải rộng hàng trăm nghìn kilômét.',className:'saturn'},
  uranus: {name:'Sao Thiên Vương',english:'URANUS · HÀNH TINH BĂNG KHỔNG LỒ',description:'Sao Thiên Vương có màu xanh lục lam do methane trong khí quyển hấp thụ ánh sáng đỏ. Trục quay của nó nghiêng rất mạnh so với các hành tinh khác.',stat:'Một mùa trên Sao Thiên Vương có thể kéo dài khoảng 21 năm Trái Đất.',className:'uranus'},
  neptune: {name:'Sao Hải Vương',english:'NEPTUNE · THẾ GIỚI XANH THẪM',description:'Sao Hải Vương là hành tinh xa Mặt Trời nhất trong tám hành tinh. Đây là thế giới lạnh, tối và có những luồng gió cực mạnh trong khí quyển.',stat:'Ánh sáng Mặt Trời mất hơn 4 giờ để đến Sao Hải Vương.',className:'neptune'}
};
const detail = document.getElementById('planetDetail');
const dialog = document.getElementById('planetDialog');
const dialogPlanet = document.getElementById('dialogPlanet');
document.querySelectorAll('.planet-card').forEach(card => {
  card.addEventListener('click', () => {
    const planet = planetData[card.dataset.planet];
    document.querySelectorAll('.planet-card').forEach(item => item.classList.toggle('active', item === card));
    detail.innerHTML = '<span class="detail-icon">✦</span><p><strong>' + planet.name + ':</strong> ' + planet.stat + '</p>';
    dialogPlanet.className = 'dialog-planet ' + planet.className;
    document.getElementById('dialogEnglish').textContent = planet.english;
    document.getElementById('dialogTitle').textContent = planet.name;
    document.getElementById('dialogDescription').textContent = planet.description;
    document.getElementById('dialogStat').textContent = '✦ ' + planet.stat;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  document.getElementById('themeToggle').textContent = isLight ? '☾' : '☼';
  document.getElementById('themeToggle').setAttribute('aria-label', isLight ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
});

const spaceObjects = document.querySelectorAll('[data-space-object]');
spaceObjects.forEach(object => {
  const openObject = () => {
    const data = planetData[object.dataset.spaceObject];
    if (!data) return;
    document.querySelectorAll('.orbit-planet').forEach(p => p.classList.toggle('selected', p === object));
    document.getElementById('dialogEnglish').textContent = data.english;
    document.getElementById('dialogTitle').textContent = data.name;
    document.getElementById('dialogDescription').textContent = data.description;
    document.getElementById('dialogStat').textContent = '✦ ' + data.stat;
    dialogPlanet.className = 'dialog-planet ' + (data.className || object.dataset.spaceObject);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  };
  object.addEventListener('click', openObject);
  if (object.tagName !== 'BUTTON') object.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openObject(); }
  });
});
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.section-heading, .planet-card, .cosmos-copy, .fact-card, .explorer-banner, .mission-card, .closing').forEach((item,index) => {
    item.classList.add('reveal');
    item.style.transitionDelay = (index % 4) * 80 + 'ms';
    revealObserver.observe(item);
  });
} else {
  document.querySelectorAll('.reveal').forEach(item => item.classList.add('is-visible'));
}
document.querySelectorAll('.orbit-track').forEach(track => {
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
});
