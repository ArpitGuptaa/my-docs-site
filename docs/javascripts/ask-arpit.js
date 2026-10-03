(() => {
  'use strict';
  const PHONE='918010114948', EMAIL='grtarpit2008@gmail.com', WA='Hi Arpit, I came across your technical writing portfolio and would like to connect regarding an opportunity.';
  const marker='/my-docs-site/';
  const idx=location.pathname.indexOf(marker);
  const BASE=idx>=0?location.pathname.slice(0,idx+marker.length):'/';
  const RESUME=`${BASE}assets/resume/ArpitGupta.pdf`;
  const link=(p,l)=>`<a href="${BASE}${p}">${l} →</a>`;
  const card=(t,x,p,l='View details')=>`<div class="ask-arpit__result"><strong>${t}</strong><p>${x}</p>${link(p,l)}</div>`;
  const resumeActions=()=>`<div class="ask-arpit__transfer"><span class="ask-arpit__transfer-label">Resume</span><strong>Arpit Gupta · Senior Lead Technical Writer</strong><p>Open or download the latest resume available on this portfolio.</p><div class="ask-arpit__transfer-actions"><a href="${RESUME}" target="_blank" rel="noopener noreferrer">View resume</a><a href="${RESUME}" download>Download PDF</a></div></div>`;
  const transfer=()=>`<div class="ask-arpit__transfer"><span class="ask-arpit__transfer-label">Agent transfer</span><strong>Connect with Arpit</strong><p>Continue directly by WhatsApp or phone.</p><div class="ask-arpit__transfer-actions"><a href="https://wa.me/${PHONE}?text=${encodeURIComponent(WA)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><a href="tel:+${PHONE}">Call Arpit</a></div></div>`;
  const norm=s=>(s||'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9+#.\s/-]+/g,' ').replace(/\s+/g,' ').trim();
  const A={
    resume:`<strong>Arpit's latest resume is available here.</strong><p>It is a two-page professional profile covering his summary, core expertise, work experience, technical skills, tools, technical areas, training, awards, and education.</p>${resumeActions()}`,
    resumeSummary:`<strong>Resume summary</strong><p>Arpit is a Senior Lead Technical Writer with 11+ years of experience across developer, API, SDK, product, and support documentation. His background includes enterprise GenAI and Agentic AI, FinTech, mortgage technology, DevOps, cloud, IoT, SaaS, documentation architecture, docs-as-code, content automation, API documentation, and documentation analytics.</p>${resumeActions()}`,
    resumeExperience:`<strong>Resume experience</strong><p>Arpit's resume covers Kore.ai, Fiserv, ICE Mortgage Technology, Agiliad Technologies / XebiaLabs, Cyient, AAE, and AAA. His current role is Senior Lead Technical Writer at Kore.ai.</p>${card('Experience','Explore the role-by-role career timeline.','about/experience/','View experience')}${resumeActions()}`,
    resumeSkills:`<strong>Skills highlighted in Arpit's resume</strong><p>Product and developer documentation, API and SDK documentation, docs-as-code, information architecture, content strategy, UX writing, technical editing, release notes, user guides, requirements and workflow documentation, documentation reviews, and writer mentoring.</p>${card('Expertise','Explore capabilities, tools, and technologies.','about/products-platforms/','View expertise')}${resumeActions()}`,
    resumeTools:`<strong>Tools highlighted in Arpit's resume</strong><p>Git, GitHub, Markdown, MkDocs, MadCap Flare, DITA, FrameMaker, content management systems, Visual Studio Code, Figma, Postman, OpenAPI/Swagger, Confluence, Jira, Vale, CSpell, Google Analytics, and TortoiseSVN.</p>${card('Technical skills','View the portfolio skill reference.','reference/#technical-skills','View skills')}${resumeActions()}`,
    resumeTechnical:`<strong>Technical areas highlighted in Arpit's resume</strong><p>GenAI and Agentic AI, AI agent workflows, prompt engineering, RAG and NLP, AI governance, documentation analytics, SaaS/IaaS/PaaS, Cloud and DevOps, microservices, Kubernetes and Docker, Python, HTML, CSS, SQL and database concepts, Grafana and application data monitoring, and Agent Blueprint Language (ABL).</p>${resumeActions()}`,
    resumeTraining:`<strong>Training listed in Arpit's resume</strong><p>Advanced Technical Writing, The Art of API Documentation, GitHub for Technical Writers, Prompt Engineering - AI Tools, Introduction to ChatGPT and Generative AI, SQL Essential Training, Learning Lucidchart, Power BI Essential Training, Agentic AI Workflow, and CBAP training/certification entry.</p>${card('Certifications and training','View credentials and professional development.','reference/#certifications','View training')}${resumeActions()}`,
    resumeAwards:`<strong>Awards listed in Arpit's resume</strong><p>Global Spotlight Award - Kore.ai, Living Proof Recognition - Fiserv, and Most Valuable Performer - Cyient.</p>${card('Awards','View professional recognition.','reference/#awards','View awards')}${resumeActions()}`,
    resumeEducation:`<strong>Education listed in Arpit's resume</strong><p>Bachelor of Science (B.Sc.).</p>${card('Education','View the education section.','reference/#education','View education')}${resumeActions()}`,
    experience:`<strong>Arpit has 11+ years of technical writing and documentation experience.</strong><p>His career spans enterprise AI, FinTech, mortgage technology, DevOps, cloud, APIs, SDKs, and enterprise software.</p>${card('Experience','Role-by-role career timeline.','about/experience/','View experience')}`,
    skills:`<strong>Arpit's core expertise includes:</strong><p>API and SDK documentation, product documentation, information architecture, docs-as-code, Cloud and DevOps, enterprise AI and agent platforms, content strategy and quality, and requirements and workflow analysis.</p>${card('Expertise','Capabilities, tools, and technologies.','about/products-platforms/','View expertise')}`,
    tools:`<strong>Tools and technologies:</strong><p>Git, GitHub, Markdown, MkDocs, Postman, OpenAPI, Swagger, JSON, Confluence, Jira, DITA, MadCap Flare, ReadMe.io, WordPress, Visual Studio Code, Figma, Vale, and CSpell.</p>${card('Technical skills','Complete documented toolset.','reference/#technical-skills','View skills')}`,
    cloud:`<strong>Yes. Arpit has cloud-documentation experience.</strong><p>His portfolio covers cloud-native applications, microservices, deployment concepts, CI/CD, release automation, Cloud and DevOps.</p>${card('Cloud and DevOps','Capability and career evidence.','about/products-platforms/#cloud-and-devops','View expertise')}`,
    devops:`<strong>Yes. Arpit has DevOps documentation experience.</strong><p>His experience includes release automation, CI/CD, cloud-native applications, microservices, deployment concepts, and technical workflows.</p>${card('Experience','DevOps and cloud role evidence.','about/experience/','View experience')}`,
    api:`<strong>Yes. API and SDK documentation are core areas.</strong><p>His portfolio covers REST APIs, authentication, requests and responses, integrations, webhooks, errors, tutorials, Postman, OpenAPI, Swagger, JSON, and SDK guidance.</p>${card('API and SDK documentation','Developer-documentation capabilities.','about/products-platforms/#api-sdk-documentation','View expertise')}`,
    ai:`<strong>Yes. Enterprise AI is a current focus.</strong><p>Arpit documents enterprise AI and agent platforms, including agent workflows, integrations, APIs, LLM/GenAI concepts, RAG, NLP/GPT workflows, prompt engineering workflows, and intelligent automation.</p>${card('Enterprise AI','AI and agent-platform expertise.','about/products-platforms/#enterprise-ai','View expertise')}`,
    leadership:`<strong>Yes. The portfolio shows senior/lead-level responsibilities.</strong><p>Arpit contributes to information architecture, terminology, review, mentoring, release documentation, and cross-functional collaboration. It does not claim formal people-management responsibility.</p>${card('Experience','Leadership-related responsibilities.','about/experience/','View experience')}`,
    certs:`<strong>Certifications and professional training include:</strong><p>CBAP training, Advanced Technical Writing, GitHub for Technical Writers, The Art of API Documentation, Prompt Engineering — AI Tools, Introduction to ChatGPT and Generative AI, and Agentic AI Workflow.</p>${card('Certifications and training','Credentials and professional development.','reference/#certifications','View certifications')}`,
    awards:`<strong>Arpit's listed awards include:</strong><p>Global Spotlight Award, Living Proof Recognition, Most Valuable Performer (Individual), and Most Valuable Performer (Team).</p>${card('Awards','Professional recognition.','reference/#awards','View awards')}`,
    hire:`<strong>Why hire Arpit?</strong><p>His portfolio highlights 11+ years across complex domains, developer-documentation depth, docs-as-code practices, cross-functional collaboration, information architecture, and enterprise AI documentation.</p>${card('Why hire Arpit?','Evidence-based summary.','reference/#why-hire-arpit','View summary')}`,
    samples:`<strong>Arpit's work samples include public documentation environments associated with his roles.</strong><p>Kore.ai, Clover/Fiserv, ICE Mortgage Technology Developer Connect, Digital.ai, and self-authored fictional API examples.</p>${card('Work samples','Public documentation and API examples.','work-sample/','View samples')}`,
    contact:`<strong>Arpit's contact details:</strong><p>Email: <a href="mailto:${EMAIL}">${EMAIL}</a><br>Phone: <a href="tel:+${PHONE}">+91 80101 14948</a><br>Location: Hyderabad, India<br>Notice period: <strong>Immediate</strong></p>${card('Contact','Email, phone, LinkedIn, GitHub, and resume.','contact/','View contact')}${transfer()}`,
    available:`<strong>Arpit is listed as available immediately.</strong><p>Notice period: <strong>Immediate</strong>.</p>${card('Contact','Current contact information.','contact/','View contact')}${transfer()}`
  };

  const resumeIntent=q=>/\b(resume|résumé|cv|curriculum vitae|bio data|biodata|professional profile|career profile|candidate profile|job profile)\b/.test(q);
  const downloadIntent=q=>/\b(download|save|get|give|send|share|provide|open|view|show|see|read|access|latest|current|updated|pdf|copy|link)\b/.test(q);
  function routeResume(q){
    if(!resumeIntent(q))return'';
    if(/\b(summary|profile summary|about|overview|objective)\b/.test(q))return A.resumeSummary;
    if(/\b(experience|employment|career|work history|companies|company|roles|role|employer|employers|kore|fiserv|ice|agiliad|xebialabs|cyient|aae|aaa)\b/.test(q))return A.resumeExperience;
    if(/\b(skill|skills|expertise|strength|strengths|capability|capabilities|competency|competencies)\b/.test(q))return A.resumeSkills;
    if(/\b(tool|tools|technology|technologies|software|platform|platforms|git|github|mkdocs|markdown|postman|swagger|openapi|confluence|jira|dita|framemaker|madcap|figma|vale|cspell|analytics|tortoisesvn)\b/.test(q))return A.resumeTools;
    if(/\b(technical area|technical areas|ai|genai|gen ai|agentic|llm|rag|nlp|cloud|devops|microservices|kubernetes|docker|python|html|css|sql|database|databases|grafana|abl)\b/.test(q))return A.resumeTechnical;
    if(/\b(training|certification|certifications|certificate|certificates|course|courses|credential|credentials|cbap|sql essential|power bi|lucidchart)\b/.test(q))return A.resumeTraining;
    if(/\b(award|awards|recognition|achievement|achievements)\b/.test(q))return A.resumeAwards;
    if(/\b(education|degree|qualification|academic|bsc|b sc|bachelor)\b/.test(q))return A.resumeEducation;
    if(downloadIntent(q))return A.resume;
    return A.resume;
  }

  function route(v){const q=norm(v);
    const rr=routeResume(q);if(rr)return rr;
    if(/\b(whatsapp|whats app|wa)\b/.test(q))return A.contact;
    if(/\b(agent transfer|transfer me|human agent|real person|speak to arpit|talk to arpit|chat with arpit|connect with arpit|message arpit)\b/.test(q))return A.contact;
    if(/\b(connect|contact|reach|talk|speak|chat|call|message)\b/.test(q)&&/\b(arpit|me|human|person|agent|him)\b/.test(q))return A.contact;
    if(/\b(contact details|phone number|email address|email id)\b/.test(q))return A.contact;
    if(/\b(available|availability|notice period|joining)\b/.test(q))return A.available;
    if(/\b(why hire|why should.*hire|hire arpit|value.*bring)\b/.test(q))return A.hire;
    if(/\b(leadership|leader|lead experience|mentor|mentoring|manage team|management experience)\b/.test(q))return A.leadership;
    if(/\b(certification|certifications|certificate|credential|training|cbap)\b/.test(q))return A.certs;
    if(/\b(award|awards|recognition|achievement)\b/.test(q))return A.awards;
    if(/\b(work sample|work samples|writing sample|documentation sample|public docs)\b/.test(q))return A.samples;
    const exp=/\b(total work experience|work experience|years of experience|career|experience)\b/.test(q), skill=/\b(expertise|expertises|skills|technical skills|capabilities)\b/.test(q), tool=/\b(tools|technologies|toolset|tech stack|postman|swagger|openapi|git|github|mkdocs|confluence|jira|dita|madcap|figma|vale|cspell)\b/.test(q);
    if(exp&&(skill||tool))return A.experience+A.skills+(tool?A.tools:'');
    if(/\b(cloud|iaas|saas|paas|cloud-native)\b/.test(q))return A.cloud;
    if(/\b(devops|ci\/cd|cicd|continuous integration|continuous delivery|release automation|microservices)\b/.test(q))return A.devops;
    if(/\b(api|apis|sdk|sdks|rest|endpoint|swagger|openapi|postman|webhook)\b/.test(q))return A.api;
    if(/\b(ai|gen ai|genai|generative ai|llm|llms|agentic|ai agent|gpt|rag|nlp|prompt)\b/.test(q))return A.ai;
    if(exp)return A.experience;if(skill)return A.skills;if(tool)return A.tools;return'';
  }

  const root=document.createElement('div');root.className='ask-arpit';root.innerHTML=`<button class="ask-arpit__launcher" type="button"><span>✦</span><b>Ask Arpit</b></button><section class="ask-arpit__panel" hidden><header><div><strong>Ask Arpit</strong><small>Recruiter-focused portfolio assistant · no LLM</small></div><button class="ask-arpit__close" type="button">×</button></header><div class="ask-arpit__messages"></div><div class="ask-arpit__suggestions"><button>View resume</button><button>Resume skills</button><button>Total experience &amp; skills</button><button>Cloud experience</button><button>Leadership experience</button><button>Certifications</button><button>Work samples</button><button>Chat on WhatsApp</button></div><form class="ask-arpit__form"><input type="text" maxlength="220" autocomplete="off" placeholder="Ask about resume, experience, skills, tools…"><button type="submit">➜</button></form><footer>Answers are grounded in this portfolio. Unsupported claims are not inferred.</footer></section>`;document.body.appendChild(root);
  const panel=root.querySelector('.ask-arpit__panel'),launcher=root.querySelector('.ask-arpit__launcher'),close=root.querySelector('.ask-arpit__close'),messages=root.querySelector('.ask-arpit__messages'),form=root.querySelector('form'),input=root.querySelector('input');
  const add=(h,u=false)=>{const m=document.createElement('div');m.className=`ask-arpit__message ask-arpit__message--${u?'user':'bot'}`;u?m.textContent=h:m.innerHTML=h;messages.appendChild(m);messages.scrollTop=messages.scrollHeight};
  const ask=q=>{add(q,true);add(route(q)||`I don't have a confident structured answer for that yet. I won't guess.${transfer()}`)};
  launcher.onclick=()=>{panel.hidden=false;launcher.hidden=true;if(!messages.children.length)add("Hi! Ask about Arpit's resume, experience, expertise, tools, cloud/DevOps, AI, APIs/SDKs, leadership, certifications, awards, work samples, availability, or contact details.");input.focus()};
  close.onclick=()=>{panel.hidden=true;launcher.hidden=false};
  form.onsubmit=e=>{e.preventDefault();const q=input.value.trim();if(q){ask(q);input.value=''}};
  root.querySelectorAll('.ask-arpit__suggestions button').forEach(b=>b.onclick=()=>ask(b.textContent));
})();
