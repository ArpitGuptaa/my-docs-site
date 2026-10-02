(() => {
  const STOP = new Set('a an and are as at be by can did do does for from has have he his how i in is it me of on or show tell that the to what when where which who why with work worked you your about'.split(' '));
  const SYNONYMS = {
    api:['api','apis','rest','endpoint','endpoints','swagger','openapi','postman','sdk','webhook','integration','developer'],
    ai:['ai','genai','llm','llms','rag','agent','agents','agentic','gpt','nlp','prompt','automation'],
    experience:['experience','career','role','roles','company','companies','kore','fiserv','clover','ice','agiliad'],
    skills:['skill','skills','tools','technology','technologies','proficient','expertise'],
    samples:['sample','samples','work','portfolio','documentation'],
    projects:['project','projects','learning','self-projects'],
    certification:['certification','certifications','certificate','training','cbap','credential','credentials'],
    contact:['contact','email','phone','linkedin','reach','availability','notice'],
    education:['education','degree','university','college'],
    awards:['award','awards','recognition']
  };

  const state = { docs: [], ready: false };

  function esc(s='') { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function stripHtml(s='') { const d=document.createElement('div'); d.innerHTML=s; return (d.textContent||'').replace(/\s+/g,' ').trim(); }
  function words(q='') { return [...new Set(q.toLowerCase().replace(/[^a-z0-9+#.-]+/g,' ').split(/\s+/).filter(w=>w.length>1&&!STOP.has(w)))]; }
  function expand(tokens) {
    const out = new Set(tokens);
    Object.values(SYNONYMS).forEach(group => { if (tokens.some(t=>group.includes(t))) group.forEach(t=>out.add(t)); });
    return [...out];
  }
  function baseUrl() {
    const p = location.pathname;
    const marker = '/my-docs-site/';
    const i = p.indexOf(marker);
    return i >= 0 ? p.slice(0, i + marker.length) : '/';
  }
  function absoluteLink(location='') {
    const clean = location.replace(/^\.\//,'');
    return baseUrl() + clean;
  }
  async function loadIndex() {
    try {
      const r = await fetch(baseUrl() + 'search/search_index.json', {cache:'no-cache'});
      if (!r.ok) throw new Error('index unavailable');
      const data = await r.json();
      state.docs = (data.docs || []).map(d => ({...d, plain:stripHtml(d.text||''), title:stripHtml(d.title||'')}));
      state.ready = true;
    } catch(e) { state.ready = false; }
  }
  function scoreDoc(doc, tokens) {
    const title=(doc.title||'').toLowerCase(), text=(doc.plain||'').toLowerCase(), loc=(doc.location||'').toLowerCase();
    let score=0;
    tokens.forEach(t => { if(title.includes(t)) score+=7; if(loc.includes(t)) score+=4; const n=(text.match(new RegExp('\\b'+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','g'))||[]).length; score+=Math.min(n,5)*1.4; });
    return score;
  }
  function snippet(doc, tokens) {
    const text=doc.plain||''; if(!text) return '';
    const lower=text.toLowerCase(); let pos=-1;
    for(const t of tokens){ const p=lower.indexOf(t); if(p>=0 && (pos<0||p<pos)) pos=p; }
    const start=Math.max(0,(pos<0?0:pos)-90), end=Math.min(text.length,start+310);
    let s=(start>0?'…':'')+text.slice(start,end)+(end<text.length?'…':'');
    return s;
  }
  function search(q) {
    const raw=words(q), tokens=expand(raw);
    if(!raw.length) return [];
    return state.docs.map(d=>({d,score:scoreDoc(d,tokens)})).filter(x=>x.score>2.5).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>({title:x.d.title||'Portfolio result',url:absoluteLink(x.d.location||''),snippet:snippet(x.d,tokens)}));
  }
  function botMessage(html) {
    const m=document.createElement('div'); m.className='ask-arpit__message ask-arpit__message--bot'; m.innerHTML=html; messages.appendChild(m); messages.scrollTop=messages.scrollHeight;
  }
  function userMessage(text) { const m=document.createElement('div'); m.className='ask-arpit__message ask-arpit__message--user'; m.textContent=text; messages.appendChild(m); }
  function answer(q) {
    userMessage(q);
    if(!state.ready){ botMessage('I’m having trouble loading the portfolio index. Please use the site navigation or try again shortly.'); return; }
    const results=search(q);
    if(!results.length){ botMessage(`I couldn't find that information in Arpit's portfolio. Try asking about <strong>experience</strong>, <strong>AI &amp; GenAI</strong>, <strong>API &amp; SDK documentation</strong>, <strong>skills</strong>, <strong>work samples</strong>, <strong>certifications</strong>, or <a href="${baseUrl()}contact/">contact Arpit →</a>`); return; }
    const cards=results.map(r=>`<div class="ask-arpit__result"><strong>${esc(r.title)}</strong><p>${esc(r.snippet)}</p><a href="${esc(r.url)}">View related content →</a></div>`).join('');
    botMessage(`<span class="ask-arpit__found">I found these relevant sections in Arpit's portfolio:</span>${cards}`);
  }

  const root=document.createElement('div'); root.className='ask-arpit'; root.innerHTML=`
    <button class="ask-arpit__launcher" type="button" aria-label="Open Ask Arpit"><span aria-hidden="true">✦</span><b>Ask Arpit</b></button>
    <section class="ask-arpit__panel" aria-label="Ask Arpit portfolio search" hidden>
      <header><div><strong>Ask Arpit</strong><small>Portfolio assistant · site content only</small></div><button class="ask-arpit__close" type="button" aria-label="Close">×</button></header>
      <div class="ask-arpit__messages"></div>
      <div class="ask-arpit__suggestions">
        <button>Experience</button><button>AI &amp; GenAI</button><button>API &amp; SDK documentation</button><button>Technical skills</button><button>Work samples</button><button>Certifications</button><button>Contact Arpit</button>
      </div>
      <form class="ask-arpit__form"><input type="text" maxlength="160" autocomplete="off" placeholder="Ask about Arpit…" aria-label="Ask about Arpit"><button type="submit" aria-label="Search">➜</button></form>
      <footer>Answers are retrieved from this portfolio. No LLM or external AI service is used.</footer>
    </section>`;
  document.body.appendChild(root);
  const panel=root.querySelector('.ask-arpit__panel'), launcher=root.querySelector('.ask-arpit__launcher'), close=root.querySelector('.ask-arpit__close'), form=root.querySelector('form'), input=root.querySelector('input');
  const messages=root.querySelector('.ask-arpit__messages');
  launcher.addEventListener('click',()=>{panel.hidden=false;launcher.hidden=true;if(!messages.children.length)botMessage("Hi! I can help you explore Arpit's portfolio. Ask about his experience, skills, AI documentation, work samples, projects, certifications, or contact details.");input.focus();});
  close.addEventListener('click',()=>{panel.hidden=true;launcher.hidden=false;});
  form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(q){answer(q);input.value='';}});
  root.querySelectorAll('.ask-arpit__suggestions button').forEach(b=>b.addEventListener('click',()=>answer(b.textContent)));
  loadIndex();
})();
