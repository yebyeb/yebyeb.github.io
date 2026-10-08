(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const azHareket = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav ---------- */
  const nav = $('#nav');
  const navGuncelle = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', navGuncelle, { passive: true }); navGuncelle();
  $('#burger').addEventListener('click', () => nav.classList.toggle('open'));
  $$('.links a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
  $('#yr').textContent = new Date().getFullYear();

  /* ---------- language (EN default, TR) ---------- */
  const TR = {
    'nav.studio': 'Stüdyo', 'nav.games': 'Oyunlar', 'nav.lab': 'Gerçeklik Lab', 'nav.road': 'Yol haritası', 'nav.contact': 'İletişim', 'nav.cta': 'Birlikte çalışalım',
    'hero.eye': 'İnteraktif Film Stüdyosu · İstanbul', 'hero.h1': 'Oynadığın', 'hero.w': 'sinema.', 'hero.h2': 'Yönettiğin gerçeklik.',
    'hero.p': 'Gerçek oyuncuları gerçek sokaklarda çekiyor, sonra ne olacağına senin karar vermeni sağlıyoruz. Bugün full-motion-video oyunlar; yarın gerçek karakterleri gerçek dünyada yönetmenin araçları.',
    'hero.reel': 'Fragmanı izle', 'hero.games': 'Oyunlarımızı keşfet',
    'st.k': 'Stüdyo', 'st.h1': 'Film ile oyun arasındaki çizgi', 'st.h2': 'bir seçimdir.',
    'st.p1': 'Karayel Games bağımsız bir interaktif film stüdyosu. Dallanan senaryolar yazıyor, onları gerçek mekânlarda gerçek oyuncularla çekiyor ve her sahneyi oyuncunun sahip olduğu bir karara dönüştürüyoruz.',
    'st.p2': 'Adımız İstanbul’un kuzeybatı rüzgârı karayelden geliyor. Haber vermeden yön değiştirir. Hikâyelerimiz de öyle.',
    'st.s1': 'yayınlanmış oyun', 'st.s2': 'CRYPTEX’te son', 'st.s3': 'platform · PC · iOS · Android', 'st.s4': 'bir sahnenin gidebileceği yol',
    'cmp.l': 'ÇİZİM · Half Dead', 'cmp.r': 'ÇEKİM · CRYPTEX', 'cmp.cap': 'İki dilimiz arasında gezinmek için sürükle: çizilmiş sinema ve canlı çekim FMV. İkisi de aynı yerde biter — bir seçimde.',
    'g.k': 'Oyunlar', 'g.h': 'Oyun gibi oynanır.', 'g.h2': 'Film gibi çekilir.',
    'g.cx.genre': 'Aksiyon · FMV', 'g.cx.p': 'İstanbul’da geçen aksiyon dolu bir FMV. Mafyanın elindeki bir arkadaş, bir kriptex ve şifrelerini taşıyan beş mafya lideri. Tamamen birinci şahıs çekildi — bu interaktif filmin başrolü sensin ve altı farklı son senin kararlarına bağlı.',
    'g.cx.f1': 'İstanbul’un dört bir yanında gerçek mekânda çekim', 'g.cx.f2': 'Baştan sona POV sinematografi', 'g.cx.f3': '6 son · süreli kararlar',
    'g.hd.genre': 'Hikâye · İnteraktif FMV', 'g.hd.p': 'İnsanlığın söndüğü bir dünyada zombi Alex, Sienna’yı gördükten sonra değişmeye başlar. Aşk, komedi ve trajedi; interaktif sinematik sahneler ve canlı çizgi roman panelleriyle anlatılıyor — her seçim Alex’i insana biraz daha yaklaştırıyor ya da uzaklaştırıyor.',
    'g.hd.f1': 'Sinematik sahneler + hareketli çizgi roman panelleri', 'g.hd.f2': 'Dallanan seçimler, birden çok son', 'g.hd.f3': 'Mobilde “Full Dead” adıyla',
    'btn.steam': 'Steam’de incele', 'btn.trailer': 'Fragman',
    'lab.k': 'Gerçeklik Lab · Ar-Ge', 'lab.h1': 'Bugün kameranın ne göreceğini seçiyorsun.', 'lab.h2': 'Yarın önündekini sen yöneteceksin.',
    'lab.p': 'Gerçeklik Lab araştırma hattımız. Hedef: oyuncunun kararının gerçek bir mekândaki gerçek bir oyuncuya anında ulaştığı canlı bir yönetim katmanı — kulaklığa bir işaret, yerde bir nokta, söylenecek yeni bir replik. Gördüğün sahne önceden çekilmiş değil; sen seçtiğin için oluyor.',
    'lab.cueL': 'KULAKLIK İŞARETİ → OYUNCU_01', 'lab.note': 'KONSEPT GÖRSELLEŞTİRME · ARAŞTIRMA SÜRÜYOR',
    'lab.pt': 'YÖNETMEN GİRDİSİ', 'lab.pp': 'Bir karar seç. Oyuncuya nasıl ulaştığını izle.',
    'lab.c1': 'Teslim olsun', 'lab.c2': 'Kaçmasına izin ver', 'lab.c3': 'Telefonu açtır',
    'lab.s1': 'Oyuncu karar verir', 'lab.s2': 'Hikâye motoru dalı çözer', 'lab.s3': 'İşaret sahnedeki oyuncuya ulaşır', 'lab.s4': 'Kamera yeni gerçekliği geri yayınlar',
    'r.k': 'Yol haritası', 'r.h1': 'Kareden', 'r.h2': 'gerçek dünyaya.',
    'r.shipped': 'Yayında', 'r.research': 'Araştırmada', 'r.proto': 'Prototip', 'r.vision': 'Vizyon', 'r.now': 'Şimdi', 'r.next': 'Sırada', 'r.hor': 'Ufuk',
    'r.1h': 'Canlı çekim FMV', 'r.1p': 'CRYPTEX — İstanbul sokaklarında çekilmiş birinci şahıs interaktif film. Dallanan senaryo, altı son.',
    'r.2h': 'Melez sinematik anlatım', 'r.2p': 'Half Dead — sinematik sahneler ve canlı çizgi roman panelleri; PC, iOS ve Android’de tek hikâye.',
    'r.3h': 'Uyarlanan sahneler', 'r.3p': 'Yalnız neyi seçtiğine değil nasıl oynadığına da tepki veren sahneler: oyuncuyu izleyen tempo, gerilim ve diyalog.',
    'r.4h': 'Canlı yönetim katmanı', 'r.4p': 'Oyuncu kararları sette çalışan oyunculara anında iletilir. Seyirci film izlemeyi bırakır, film yönetmeye başlar.',
    'r.5h': 'Gerçekliği yönetmek', 'r.5p': 'Gerçek karakterler, gerçek mekânlar, gerçek zaman. Etrafındaki dünyada yaşanan hikâyeler — ve senaryo senin elinde.',
    'c.k': 'İletişim', 'c.h1': 'Sıradaki sahneyi', 'c.h2': 'birlikte çekelim.', 'c.p': 'Yayıncılar, yatırımcılar, oyuncular, film yapımcıları ve teknoloji ortakları — sizden haber almak isteriz.',
    'c.a': 'Ortaklık ve yatırım', 'c.ad': 'Ortak yapım, yayıncılık, fon', 'c.b': 'Oyuncu ve ekip', 'c.bd': 'Oyuncular, görüntü yönetmenleri, dublör ve ses', 'c.c': 'Basın ve içerik üreticileri', 'c.cd': 'Anahtar, materyal, röportaj',
  };
  const CUE_TR = ['“Ellerini kaldır. Yavaşça geri çekil.”', '“Ağaçlara koş — hemen!”', '“Diz çök. Dalyan’ı ara. İşin bittiğini söyle.”'];
  const EN = {};
  $$('[data-i]').forEach((el) => { EN[el.dataset.i] = el.textContent; });
  let dil = 'en';
  let kayitli = null;
  try { kayitli = localStorage.getItem('kg-dil'); } catch { /* yerel depo yoksa tarayıcı dili */ }
  dil = kayitli || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en');
  const dilUygula = () => {
    const S = dil === 'tr' ? TR : EN;
    $$('[data-i]').forEach((el) => { const v = S[el.dataset.i] ?? EN[el.dataset.i]; if (v != null) el.textContent = v; });
    document.documentElement.lang = dil;
    $('#lang').textContent = dil === 'tr' ? 'EN' : 'TR';
    $$('.glitch').forEach((g) => { g.dataset.text = g.textContent; });
    $$('.choice').forEach((b, i) => { b.dataset.cueNow = dil === 'tr' ? CUE_TR[i] : b.dataset.cue; });
    const on = $('.choice.on'); if (on) $('#cueText').textContent = on.dataset.cueNow;
  };
  $('#lang').addEventListener('click', () => { dil = dil === 'tr' ? 'en' : 'tr'; try { localStorage.setItem('kg-dil', dil); } catch { /* yok say */ } dilUygula(); });
  dilUygula();

  /* ---------- timecode ---------- */
  const tc = $('#tc'); const t0 = performance.now();
  const iki = (n) => String(n).padStart(2, '0');
  const tcTik = () => {
    const ms = performance.now() - t0, s = Math.floor(ms / 1000);
    tc.textContent = `${iki(Math.floor(s / 3600))}:${iki(Math.floor(s / 60) % 60)}:${iki(s % 60)}:${iki(Math.floor((ms % 1000) / 41.67))}`;
    setTimeout(tcTik, 125);
  };
  tcTik();

  /* ---------- reveal + counters ---------- */
  const sayac = (el) => {
    const hedef = +el.dataset.count; const bas = performance.now();
    const adim = (t) => { const p = Math.min(1, (t - bas) / 1400); el.textContent = Math.round(hedef * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(adim); };
    requestAnimationFrame(adim);
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    const c = e.target.querySelector('[data-count]'); if (c) sayac(c);
    io.unobserve(e.target);
  }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

  /* ---------- hero parallax ---------- */
  /* görünmeyen açılış videosu durur — kaydırırken iş yükü kalmasın */
  const hv = $('#heroVideo');
  new IntersectionObserver(([e]) => { if (e.isIntersecting) hv.play().catch(() => {}); else hv.pause(); }).observe(hv);

  /* ---------- drawn ↔ filmed ---------- */
  const cmp = $('#compare');
  const cmpAyar = (x) => { const r = cmp.getBoundingClientRect(); cmp.style.setProperty('--pos', `${Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100))}%`); };
  let surukle = false;
  cmp.addEventListener('pointerdown', (e) => { surukle = true; cmp.setPointerCapture(e.pointerId); cmpAyar(e.clientX); });
  cmp.addEventListener('pointermove', (e) => { if (surukle || e.pointerType === 'mouse') cmpAyar(e.clientX); });
  addEventListener('pointerup', () => { surukle = false; });
  // ilk görünüşte kendiliğinden bir kez süpür
  new IntersectionObserver(([e], o) => {
    if (!e.isIntersecting || azHareket) return; o.disconnect();
    const bas = performance.now();
    const an = (t) => { const p = Math.min(1, (t - bas) / 2200); cmp.style.setProperty('--pos', `${50 + Math.sin(p * Math.PI * 2) * 32}%`); if (p < 1 && !surukle) requestAnimationFrame(an); };
    requestAnimationFrame(an);
  }, { threshold: .5 }).observe(cmp);

  /* ---------- game hover / in-view previews ---------- */
  const dokunmatik = matchMedia('(hover: none)').matches;
  $$('[data-hover-video]').forEach((m) => {
    const v = m.querySelector('video');
    const oynat = () => { if (!v.src) v.src = v.dataset.src; v.play().then(() => m.classList.add('playing')).catch(() => {}); };
    const durdur = () => { v.pause(); m.classList.remove('playing'); };
    if (dokunmatik) new IntersectionObserver(([e]) => (e.isIntersecting ? oynat() : durdur()), { threshold: .6 }).observe(m);
    else { m.addEventListener('mouseenter', oynat); m.addEventListener('mouseleave', durdur); }
  });

  /* ---------- modal (video + image) ---------- */
  const modal = $('#modal'), mv = $('#modalVideo'), mt = $('#modalTitle');
  const kapat = () => { modal.classList.remove('on'); modal.setAttribute('aria-hidden', 'true'); mv.pause(); const img = modal.querySelector('.modal-in > img'); if (img) img.remove(); mv.hidden = false; };
  $$('[data-video]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    mt.textContent = b.dataset.title || ''; mv.hidden = false;
    if (mv.getAttribute('src') !== b.dataset.video) mv.src = b.dataset.video;
    modal.classList.add('on'); modal.setAttribute('aria-hidden', 'false');
    mv.currentTime = 0; mv.play().catch(() => {});
  }));
  $$('.strip img').forEach((im) => im.addEventListener('click', () => {
    mt.textContent = im.closest('.game').querySelector('h3').firstChild.textContent.trim();
    mv.pause(); mv.hidden = true;
    const img = document.createElement('img'); img.src = im.src; img.alt = '';
    modal.querySelector('.modal-in').appendChild(img);
    modal.classList.add('on'); modal.setAttribute('aria-hidden', 'false');
  }));
  $('#modalX').addEventListener('click', kapat);
  modal.addEventListener('click', (e) => { if (e.target === modal) kapat(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') kapat(); });

  /* ---------- reality lab demo ---------- */
  const yol = $('#labPath'), isaret = $('#labMark'), cue = $('#labCue'), cueText = $('#cueText'), adimlar = $$('.pipe li');
  let zinc = [];
  const boru = () => {
    zinc.forEach(clearTimeout); zinc = [];
    adimlar.forEach((li, i) => { zinc.push(setTimeout(() => { adimlar.forEach((x) => x.classList.remove('go')); li.classList.add('go'); }, i * 380)); });
    zinc.push(setTimeout(() => adimlar.forEach((x) => x.classList.remove('go')), adimlar.length * 380 + 900));
  };
  $$('.choice').forEach((b) => b.addEventListener('click', () => {
    $$('.choice').forEach((x) => x.classList.toggle('on', x === b));
    yol.setAttribute('d', b.dataset.path);
    const [x, y] = b.dataset.mark.split(','); isaret.setAttribute('cx', x); isaret.setAttribute('cy', y);
    cue.classList.remove('flash'); void cue.offsetWidth; cue.classList.add('flash');
    cueText.textContent = b.dataset.cueNow || b.dataset.cue;
    boru();
  }));
  const lat = $('#lat');
  setInterval(() => { lat.textContent = 96 + Math.round(Math.random() * 38); }, 900);
  // panel görünür olunca kararları kendiliğinden dolaştır (kullanıcı dokunana kadar)
  let otomatik = true; let sira = 0;
  $('#choices').addEventListener('pointerdown', () => { otomatik = false; });
  new IntersectionObserver(([e]) => { e.target.dataset.gorunur = e.isIntersecting ? '1' : ''; }, { threshold: .3 }).observe($('#labDemo'));
  setInterval(() => {
    if (!otomatik || !$('#labDemo').dataset.gorunur || document.hidden) return;
    sira = (sira + 1) % 3; $$('.choice')[sira].click();
  }, 4200);
})();
