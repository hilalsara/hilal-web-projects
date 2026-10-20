'use strict';
const KEY='hilal-wordloop-v1',START='2026-10-20';
const SLOTS=[9,12,15,18,21],REVIEW=[1,3,7,14,30];
const $=id=>document.getElementById(id),load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
let history=load();
function store(){localStorage.setItem(KEY,JSON.stringify(history))}
function todayLocal(offset=0){const d=new Date(Date.now()+10800000+offset*86400000);return d.toISOString().slice(0,10)}
function wordIndex(day,slot){return (Math.round((Date.parse(day+'T00:00:00Z')-Date.parse(START+'T00:00:00Z'))/86400000)*5+slot)%WORDS.length}
function currentSlot(){const h=(new Date(Date.now()+10800000)).getUTCHours();return Math.max(0,SLOTS.findLastIndex(t=>t<=h))}
function makeButton(title,fn){const b=document.createElement('button');b.textContent=title;b.addEventListener('click',fn);return b}
function line(parent,text,tag='p'){const el=document.createElement(tag);el.textContent=text;parent.append(el);return el}
function render(){const day=todayLocal(),slot=currentSlot(),idx=wordIndex(day,slot),w=WORDS[(idx+WORDS.length)%WORDS.length];let now=$('newWord');now.replaceChildren();line(now,w.en,'h2');line(now,w.example);line(now,'Türkçesi: '+w.tr);if(!history[w.en])now.append(makeButton('Öğrendim ✓',()=>{history[w.en]={day,stage:0,due:todayLocal(1),last:day};store();render()}));
else line(now,'✓ Çalışma kaydedildi');
const stats=$('stats');stats.textContent='Öğrenilen: '+Object.keys(history).length+' / '+WORDS.length+'   ·   Bugün: '+day+'   ·   Oturum: '+SLOTS[slot]+':00';
const q=$('quiz');q.replaceChildren();const prev=WORDS[(idx-1+WORDS.length)%WORDS.length];if(day===START&&slot===0){line(q,'İlk oturum! Önce ilk kelimeyi öğren.')}else{line(q,'“'+prev.en+'” ne demek?','h3');const inp=document.createElement('input');inp.placeholder='Türkçe karşılığını yaz';q.append(inp);q.append(makeButton('Kontrol et',()=>{const yes=inp.value.trim().toLocaleLowerCase('tr')===prev.tr.toLocaleLowerCase('tr');line(q,(yes?'✓ Doğru! ':'Tekrar edelim: ')+prev.tr);if(!yes){history[prev.en]={day,stage:0,due:todayLocal(1),last:day};store()}}))}
const y=$('yesterday');y.replaceChildren();if(day===START){line(y,'Dünden kelime bulunmuyor.')}else for(let s=0;s<5;s++){const v=WORDS[(wordIndex(todayLocal(-1),s)+WORDS.length)%WORDS.length];let button=makeButton('Kart '+(s+1)+': '+v.en+' ↻',()=>{button.textContent=button.textContent.includes(' ↻')?v.en+' — '+v.tr:'Kart '+(s+1)+': '+v.en+' ↻'});y.append(button)}
const rev=$('review');rev.replaceChildren();const due=Object.keys(history).filter(k=>history[k].due<=day);if(!due.length)line(rev,'Şu an zamanı gelen tekrar yok.');for(let key of due){const v=WORDS.find(x=>x.en===key);if(!v)continue;let wrap=document.createElement('div');line(wrap,v.en,'h3');wrap.append(makeButton('Hatırladım',()=>rate(key,true)),makeButton('Unuttum',()=>rate(key,false)));rev.append(wrap)}}
function rate(key,correct){let x=history[key],stage=correct?Math.min(x.stage+1,REVIEW.length-1):0;x.stage=stage;x.last=todayLocal();x.due=todayLocal(REVIEW[stage]);store();render()}
render();