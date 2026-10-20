'use strict';
const STATUS=['Yapılacak','Devam Ediyor','Tamamlandı'];
const examples=[{id:'demo1',title:'Dashboard tasarımını oluştur',owner:'Demo Tasarımcı',priority:'Yüksek',status:'Devam Ediyor',due:'2026-11-12',description:'Responsive yönetim paneli'},
{id:'demo2',title:'Form testlerini tamamla',owner:'Demo Geliştirici',priority:'Normal',status:'Yapılacak',due:'2026-12-03',description:'Form doğrulama senaryoları'},
{id:'demo3',title:'Proje gereksinimlerini yaz',owner:'Demo Analist',priority:'Kritik',status:'Tamamlandı',due:'2026-10-15',description:''}];
if(!load()) items=examples;
let editing=null;
const form=$('form');
function isLate(x){const date=new Date();const today=[date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');return x.status!=='Tamamlandı'&&x.due<today}
function render(){
 const q=$('search').value.toLocaleLowerCase('tr-TR');const priority=$('priorityFilter').value;
 const filtered=items.filter(x=>(!priority||x.priority===priority)&&[x.title,x.owner,x.description].join(' ').toLocaleLowerCase('tr-TR').includes(q));
 $('total').textContent=items.length;$('completed').textContent=items.filter(x=>x.status==='Tamamlandı').length;$('overdue').textContent=items.filter(isLate).length;
 [['Yapılacak','todo','todoCount'],['Devam Ediyor','doing','doingCount'],['Tamamlandı','done','doneCount']].forEach(([status,slot,counter])=>{
  let selected=filtered.filter(x=>x.status===status);$(counter).textContent=selected.length;
  $(slot).innerHTML=selected.length?selected.map(x=>{
   const idx=STATUS.indexOf(x.status);
   return '<article class="task"><span class="pill '+(x.priority==='Kritik'?'bad':x.priority==='Yüksek'?'warn':'')+'">'+esc(x.priority)+'</span>'+
   '<h3>'+esc(x.title)+'</h3><p>👤 '+esc(x.owner)+'</p><p>📅 '+esc(x.due)+(isLate(x)?' · <span style="color:#ffb3bd">Gecikti</span>':'')+'</p>'+
   (x.description?'<p>'+esc(x.description)+'</p>':'')+'<div class="actions">'+
   (idx>0?'<button class="ghost" data-move="-1" data-id="'+esc(x.id)+'">← Geri</button>':'')+
   (idx<2?'<button class="ghost" data-move="1" data-id="'+esc(x.id)+'">İleri →</button>':'')+
   '<button class="ghost" data-edit="'+esc(x.id)+'">Düzenle</button><button class="danger" data-del="'+esc(x.id)+'">Sil</button></div></article>'
  }).join(''):'<p class="muted">Bu aşamada görev bulunmuyor.</p>';
 });
}
function reset(){editing=null;form.reset();$('formTitle').textContent='Yeni görev'}
form.addEventListener('submit',e=>{
 e.preventDefault();const d=Object.fromEntries(new FormData(form));d.title=d.title.trim();d.owner=d.owner.trim();d.description=d.description.trim();
 if(!d.title||!d.owner||!d.due||!STATUS.includes(d.status))return notice('Gerekli alanları doldur.');
 if(editing)items=items.map(x=>x.id===editing?{...x,...d}:x);else items.unshift({id:uid(),...d});
 save();reset();render();notice('Görev kaydedildi.');
});
$('clear').onclick=reset;$('search').oninput=render;$('priorityFilter').onchange=render;
document.querySelector('.board').addEventListener('click',e=>{
 let b=e.target.closest('button');if(!b)return;
 const id=b.dataset.id||b.dataset.edit||b.dataset.del;
 const x=items.find(x=>x.id===id);if(!x)return;
 if(b.dataset.move!==undefined){const target=STATUS.indexOf(x.status)+Number(b.dataset.move);if(target>=0&&target<STATUS.length){x.status=STATUS[target];save();render()}}
 else if(b.dataset.edit){editing=id;Object.keys(x).forEach(k=>{if(form.elements[k])form.elements[k].value=x[k]});$('formTitle').textContent='Görevi düzenle';window.scrollTo({top:0,behavior:'smooth'})}
 else if(b.dataset.del&&confirm('Bu görevi silmek istiyor musun?')){items=items.filter(y=>y.id!==id);save();render();notice('Görev silindi.')}
});
$('csv').onclick=()=>csv([['Görev','Sorumlu','Öncelik','Durum','Hedef tarih','Açıklama'],...items.map(x=>[x.title,x.owner,x.priority,x.status,x.due,x.description])]);
render();