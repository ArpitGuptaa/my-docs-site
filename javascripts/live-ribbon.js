(() => {
  'use strict';

  const marker = '/my-docs-site/';
  const index = location.pathname.indexOf(marker);
  const base = index >= 0 ? location.pathname.slice(0, index + marker.length) : '/';

  const headerInner = document.querySelector('.md-header__inner');
  if (!headerInner) return;

  const fallbacks = {
    ai: {
      title: 'Latest AI & GenAI news',
      url: 'https://news.google.com/search?q=AI%20OR%20GenAI%20OR%20%22generative%20AI%22&hl=en-IN&gl=IN&ceid=IN%3Aen'
    },
    technical_writing: {
      title: 'Latest technical writing news',
      url: 'https://news.google.com/search?q=%22technical%20writing%22%20OR%20%22developer%20documentation%22%20OR%20%22documentation%20tools%22&hl=en-IN&gl=IN&ceid=IN%3Aen'
    }
  };

  const ribbon = document.createElement('div');
  ribbon.className = 'portfolio-header-news';
  ribbon.setAttribute('aria-label', 'Industry news');
  ribbon.innerHTML = `
    <div class="portfolio-header-news__track">
      <a class="portfolio-header-news__item" data-news="ai" href="${fallbacks.ai.url}" target="_blank" rel="noopener noreferrer">
        <span class="portfolio-header-news__icon" aria-hidden="true">🤖</span>
        <span class="portfolio-header-news__content"><strong>AI &amp; GenAI News</strong><span class="portfolio-header-news__headline" data-title>${fallbacks.ai.title}</span></span>
      </a>
      <span class="portfolio-header-news__separator" data-separator="technical_writing" aria-hidden="true"></span>
      <a class="portfolio-header-news__item" data-news="technical_writing" href="${fallbacks.technical_writing.url}" target="_blank" rel="noopener noreferrer">
        <span class="portfolio-header-news__icon" aria-hidden="true">✍️</span>
        <span class="portfolio-header-news__content"><strong>Technical Writing News</strong><span class="portfolio-header-news__headline" data-title>${fallbacks.technical_writing.title}</span></span>
      </a>
    </div>`;

  const controls = headerInner.querySelector('.md-header__option') || headerInner.querySelector('[data-md-component="palette"]');
  if (controls) headerInner.insertBefore(ribbon, controls);
  else headerInner.appendChild(ribbon);

  function safeUrl(value, fallback) {
    if (!value) return fallback;
    try {
      const parsed = new URL(value, location.href);
      return /^https?:$/.test(parsed.protocol) ? parsed.href : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function setItem(key, item) {
    const anchor = ribbon.querySelector(`[data-news="${key}"]`);
    if (!anchor) return;
    const fallback = fallbacks[key];
    const title = item && item.title ? item.title : fallback.title;
    anchor.href = safeUrl(item && item.url, fallback.url);
    anchor.querySelector('[data-title]').textContent = title;
    anchor.title = item && item.source ? `${title} — ${item.source}` : title;
  }

  fetch(`${base}assets/data/portfolio-news.json?v=${Date.now()}`, { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error('News unavailable')))
    .then(data => {
      const items = data && data.items ? data.items : {};
      setItem('ai', items.ai);
      setItem('technical_writing', items.technical_writing);
    })
    .catch(() => {
      // Keep the reliable Google News search links already rendered above.
    });
})();
