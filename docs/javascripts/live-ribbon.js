(() => {
  'use strict';

  const marker = '/my-docs-site/';
  const index = location.pathname.indexOf(marker);
  const base = index >= 0 ? location.pathname.slice(0, index + marker.length) : '/';

  const headerInner = document.querySelector('.md-header__inner');
  if (!headerInner) return;

  const ribbon = document.createElement('div');
  ribbon.className = 'portfolio-header-news';
  ribbon.setAttribute('aria-label', 'Industry news');
  ribbon.innerHTML = `
    <div class="portfolio-header-news__track">
      <a class="portfolio-header-news__item" data-news="ai" href="#" target="_blank" rel="noopener noreferrer" hidden>
        <span class="portfolio-header-news__icon" aria-hidden="true">🤖</span>
        <span class="portfolio-header-news__content"><strong>AI &amp; GenAI News</strong><span class="portfolio-header-news__headline" data-title></span></span>
      </a>
      <span class="portfolio-header-news__separator" data-separator="technical_writing" aria-hidden="true" hidden></span>
      <a class="portfolio-header-news__item" data-news="technical_writing" href="#" target="_blank" rel="noopener noreferrer" hidden>
        <span class="portfolio-header-news__icon" aria-hidden="true">✍️</span>
        <span class="portfolio-header-news__content"><strong>Technical Writing News</strong><span class="portfolio-header-news__headline" data-title></span></span>
      </a>
    </div>`;

  const controls = headerInner.querySelector('.md-header__option') || headerInner.querySelector('[data-md-component="palette"]');
  if (controls) headerInner.insertBefore(ribbon, controls);
  else headerInner.appendChild(ribbon);

  function setItem(key, item) {
    if (!item || !item.title || !item.url) return;
    const anchor = ribbon.querySelector(`[data-news="${key}"]`);
    if (!anchor) return;
    anchor.href = item.url;
    anchor.querySelector('[data-title]').textContent = item.title;
    anchor.title = item.source ? `${item.title} — ${item.source}` : item.title;
    anchor.hidden = false;
    if (key === 'technical_writing') {
      const separator = ribbon.querySelector('[data-separator="technical_writing"]');
      if (separator) separator.hidden = false;
    }
  }

  fetch(`${base}assets/data/portfolio-news.json?v=${Date.now()}`, { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error('News unavailable')))
    .then(data => {
      const items = data && data.items ? data.items : {};
      setItem('ai', items.ai);
      setItem('technical_writing', items.technical_writing);
    })
    .catch(() => {
      // The news component is optional and isolated from the rest of the site.
    });
})();
