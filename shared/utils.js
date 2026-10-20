const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key='hilal-'+location.pathname.split('/').filter(Boolean).pop()+'-v1';
const load=()=>{try{const a=JSON.parse(localStorage.getItem(key));return Array.isArray(a)?a:null}catch{return null}};
const save=()=>localStorage.setItem(key,JSON.stringify(items));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const notice=s=>{$('notice').textContent=s;setTimeout(()=>{$('notice').textContent=''},3200)};
const csv=rows=>{const clean=v=>{let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"'};let a=rows.map(row=>row.map(clean).join(';')).join('\r\n');let blob=new Blob(['\ufeff'+a],{type:'text/csv;charset=utf-8'});let u=URL.createObjectURL(blob);let x=document.createElement('a');x.href=u;x.download='hilal-'+document.title.split('|')[0].trim()+'.csv';x.click();URL.revokeObjectURL(u)};
let items=load()||[];
