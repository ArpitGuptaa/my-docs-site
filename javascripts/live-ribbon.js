(() => {
  'use strict';

  const marker = '/my-docs-site/';
  const index = location.pathname.indexOf(marker);
  const base = index >= 0 ? location.pathname.slice(0, index + marker.length) : '/';

  const ribbon = document.createElement('div');
  ribbon.className = 'portfolio-live-ribbon';
  ribbon.setAttribute('aria-label', 'Portfolio highlights and industry news');
  ribbon.innerHTML = `
    <div class="portfolio-live-ribbon__track">
      <a class="portfolio-live-ribbon__item portfolio-live-ribbon__hire" href="${base}reference/#why-hire-arpit">
        <span aria-hidden="true">💼</span><strong>Why hire Arpit?</strong>
      </a>
      <span class="portfolio-live-ribbon__separator" aria-hidden="true">|</span>
      <a class="portfolio-live-ribbon__item" data-news="ai" href="#" target="_blank" rel="noopener noreferrer" hidden>
        <span aria-hidden="true">🤖</span><strong>AI &amp; GenAI News:</strong> <span data-title></span>
      </a>
      <span class="portfolio-live-ribbon__separator" data-separator="ai" aria-hidden="true" hidden>|</span>
      <a class="portfolio-live-ribbon__item" data-news="technical_writing" href="#" target="_blank" rel="noopener noreferrer" hidden>
        <span aria-hidden="true">✍️</span><strong>Technical Writing News:</strong> <span data-title></span>
      </a>
    </div>`;

  const header = document.querySelector('.md-header');
  if (header) header.insertAdjacentElement('afterend', ribbon);
  else document.body.prepend(ribbon);

  function setItem(key, item) {
    if (!item || !item.title || !item.url) return;
    const anchor = ribbon.querySelector(`[data-news="${key}"]`);
    if (!anchor) return;
    anchor.href = item.url;
    anchor.querySelector('[data-title]').textContent = item.title;
    anchor.title = item.source ? `${item.title} — ${item.source}` : item.title;
    anchor.hidden = false;
    const separator = ribbon.querySelector(`[data-separator="${key}"]`);
    if (separator) separator.hidden = false;
  }

  fetch(`${base}assets/data/portfolio-news.json?v=${Date.now()}`, { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject(new Error('News unavailable')))
    .then(data => {
      const items = data && data.items ? data.items : {};
      setItem('ai', items.ai);
      setItem('technical_writing', items.technical_writing);
    })
    .catch(() => {
      // Keep the static Why hire Arpit link. News failure must never affect the site.
    });
})();
