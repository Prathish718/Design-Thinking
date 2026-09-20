let unit=1,topic=0,mode='highlights',card=0,flipped=false;
const answers=new Map();
const $=s=>document.querySelector(s);
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const current=()=>units[unit].topics[topic];
const key=i=>`${unit}:${topic}:${i}`;
function navigate(u,t){unit=u;topic=t;card=0;flipped=false;render();}
function render(){
 const item=current();
 document.querySelectorAll('[data-unit]').forEach(b=>{b.classList.toggle('active',+b.dataset.unit===unit);b.setAttribute('aria-pressed',String(+b.dataset.unit===unit));});
 $('#unit-name').textContent=units[unit].name;
 $('#topics').innerHTML=units[unit].topics.map((t,i)=>`<button class="topic-link ${i===topic?'active':''}" data-topic="${i}" ${i===topic?'aria-current="true"':''}><span class="num">${String(i+1).padStart(2,'0')}</span><span>${escape(t.name)}</span></button>`).join('');
 document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>navigate(unit,+b.dataset.topic));
 $('#source').href=units[unit].source;
 $('#topic-meta').textContent=`UNIT ${String(unit+1).padStart(2,'0')} / LEARN BY TOPIC`;
 $('#topic-title').textContent=item.name;$('#topic-summary').textContent=item.summary;
 $('#topic-number').textContent=String(topic+1).padStart(2,'0');
 $('#topic-position').textContent=`${topic+1} of ${units[unit].topics.length} topics`;
 $('#prev-topic').disabled=topic===0;$('#next-topic').disabled=topic===units[unit].topics.length-1;
 renderPanel();
}
function renderPanel(){
 const item=current(),panel=$('#study-panel');
 document.querySelectorAll('[data-mode]').forEach(b=>{const active=b.dataset.mode===mode;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
 panel.setAttribute('aria-labelledby',`tab-${mode}`);
 $('#mode-count').textContent=mode==='highlights'?'3 key ideas':mode==='flashcards'?'3 recall cards':'3 practice questions';
 if(mode==='highlights'){
  panel.innerHTML=`<div class="section-label">THE ESSENTIALS <span class="line"></span></div><div class="highlight-grid">${item.points.map((p,i)=>`<article class="highlight"><span class="index">0${i+1}</span><h3><span>${escape(p.label)}</span></h3><p>${escape(p.text)}</p></article>`).join('')}</div><div class="example"><div><span class="tag">MAKE IT CLICK</span><h3>In real life</h3></div><p>${escape(item.example)}</p></div><div class="memory"><strong>KEEP THIS IN MIND</strong><p>${escape(item.memory)}</p></div>`;
 } else if(mode==='flashcards'){
  const p=item.points[card];
  panel.innerHTML=`<div class="flash-top"><p>Say your answer first. Then turn the card.</p><span class="pill">${card+1} / ${item.points.length}</span></div><button class="flash-card ${flipped?'revealed':''}" aria-label="${flipped?'Show question':'Reveal answer'}" aria-pressed="${flipped}"><span class="card-label">${flipped?'THE ANSWER':'QUICK RECALL'}</span><span class="card-text">${escape(flipped?p.text:p.question)}</span><span class="hint">${flipped?'Click to see the question again':'Click or press Enter to reveal'} ↻</span></button><div class="flash-controls"><button class="round-btn" id="prev-card" aria-label="Previous flashcard" ${card===0?'disabled':''}>←</button><div class="dots" aria-hidden="true">${item.points.map((_,i)=>`<span class="${card===i?'active':''}"></span>`).join('')}</div><button class="round-btn" id="next-card" aria-label="Next flashcard" ${card===item.points.length-1?'disabled':''}>→</button></div>`;
  $('.flash-card').onclick=()=>{flipped=!flipped;renderPanel();$('.flash-card').focus({preventScroll:true});};
  $('#prev-card').onclick=()=>{card--;flipped=false;renderPanel();$('.flash-card').focus({preventScroll:true});};
  $('#next-card').onclick=()=>{card++;flipped=false;renderPanel();$('.flash-card').focus({preventScroll:true});};
 } else {
  let done=0,score=0;item.quiz.forEach((q,i)=>{if(answers.has(key(i))){done++;if(answers.get(key(i))===q.correct)score++;}});
  panel.innerHTML=`<div class="quiz-top"><p>Choose one answer. Learn from the explanation.</p><span class="pill">${done} / ${item.quiz.length} answered</span></div>${item.quiz.map((q,i)=>{const selected=answers.get(key(i)),answered=selected!==undefined;return `<article class="quiz-card"><div class="quiz-number">QUESTION ${String(i+1).padStart(2,'0')}</div><h3 id="question-${i}">${escape(q.question)}</h3><div class="options" role="group" aria-labelledby="question-${i}">${q.options.map((o,j)=>`<button class="option ${answered?(j===q.correct?'correct':j===selected?'wrong':''):''}" data-q="${i}" data-a="${j}" ${answered?'disabled':''}><span class="letter">${'ABCD'[j]}</span><span>${answered&&j===q.correct?'<span class="result-label">✓ Correct</span>':answered&&j===selected?'<span class="result-label">✕ Your answer</span>':''}${escape(o)}</span></button>`).join('')}</div>${answered?`<div class="feedback ${selected===q.correct?'good':'bad'}" id="feedback-${i}" tabindex="-1"><strong>${selected===q.correct?'That’s right.':'Not quite — here’s why.'}</strong>${escape(q.explanation)}</div>`:''}</article>`;}).join('')}${done===item.quiz.length?`<div class="score" role="status"><div><strong>${score} / ${item.quiz.length}</strong><p>${score===item.quiz.length?'Topic mastered on this attempt. Ready for the next one?':'Good practice. Review the explanations, then try again.'}</p></div><button class="small-button" id="retry">Try again</button></div>`:''}`;
  document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{const i=+b.dataset.q;if(answers.has(key(i)))return;answers.set(key(i),+b.dataset.a);renderPanel();$(`#feedback-${i}`).focus({preventScroll:true});});
  if($('#retry'))$('#retry').onclick=()=>{item.quiz.forEach((_,i)=>answers.delete(key(i)));renderPanel();panel.scrollIntoView({behavior:'smooth',block:'start'});};
 }
}
document.querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>navigate(+b.dataset.unit,0));
document.querySelectorAll('[data-mode]').forEach(b=>{b.onclick=()=>{mode=b.dataset.mode;renderPanel();};b.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const modes=['highlights','flashcards','quiz'];let next=e.key==='Home'?0:e.key==='End'?2:(modes.indexOf(mode)+(e.key==='ArrowRight'?1:2))%3;mode=modes[next];renderPanel();$(`#tab-${mode}`).focus();};});
$('#prev-topic').onclick=()=>navigate(unit,topic-1);$('#next-topic').onclick=()=>navigate(unit,topic+1);
$('.brand').onclick=e=>{e.preventDefault();mode='highlights';navigate(1,0);};
render();
