'use strict';
const seed=[{id:'a',title:'Yazıcı ağda görünmüyor',owner:'Demo Kullanıcı',priority:'Yüksek',status:'Açık',description:''},{id:'b',title:'Yeni hesap erişimi',owner:'Örnek Personel',priority:'Orta',status:'İşlemde',description:''}];
if(!load())items=seed;
let editing=null;
const form=$('form'),search=$('search');
function render(){
 const q=search.value.toLocaleLowerCase('tr-TR'),list=items.filter(x=>[x.title,x.owner,x.priority,x.status].join(' ').toLocaleLowerCase('tr-TR').includes(q));
 $('total').textContent=items.length;$('attention').textContent=items.filter(x=>x.status!=='Çözüldü').length;$('visible').textContent=list.length;
 $('rows').innerHTML=list.map(x=>'<tr><td><b>'+esc(x.title)+'</b></td><td>'+esc(x.owner)+'</td><td><span class="pill '+(x.priority==='Kritik'?'bad':x.priority==='Yüksek'?'warn':'')+'">'+esc(x.priority)+'</span></td><td>'+esc(x.status)+'</td><td><button class="ghost" data-edit="'+esc(x.id)+'">Düzenle</button><button class="danger" data-del="'+esc(x.id)+'">Sil</button></td></tr>').join('');
 $('empty').hidden=!!list.length;
}
form.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(form));d.title=d.title.trim();d.owner=d.owner.trim();if(!d.title||!d.owner)return notice('Zorunlu alanları doldur.');if(editing){items=items.map(x=>x.id===editing?{...x,...d}:x)}else items.unshift({id:uid(),...d});save();reset();render();notice('Talep kaydedildi.')});
function reset(){editing=null;form.reset();$('formTitle').textContent='Yeni kayıt oluştur'}
$('cancel').onclick=reset;search.oninput=render;
$('rows').onclick=e=>{let b=e.target.closest('button');if(!b)return;let id=b.dataset.edit||b.dataset.del;let x=items.find(v=>v.id===id);if(!x)return;if(b.dataset.edit){editing=id;Object.keys(x).forEach(k=>{if(form.elements[k])form.elements[k].value=x[k]});$('formTitle').textContent='Talebi düzenle';scrollTo({top:0,behavior:'smooth'})}else if(confirm('Bu talep silinsin mi?')){items=items.filter(v=>v.id!==id);save();render();notice('Kayıt silindi.')}};
$('csv').onclick=()=>csv([['Başlık','Talep sahibi','Öncelik','Durum','Açıklama'],...items.map(x=>[x.title,x.owner,x.priority,x.status,x.description])]);
render();