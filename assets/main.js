(() => {
const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.service-card')];
const count=document.getElementById('service-count');
const totalText=count?.textContent?.trim().replace(/^\d+\s*/, '') || '';
filters.forEach(button=>button.addEventListener('click',()=>{
 const val=Number(button.dataset.filter);
 filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let n=0; cards.forEach(card=>{const visible=val<0||Number(card.dataset.group)===val;card.hidden=!visible;if(visible)n++;});
 if(count)count.textContent=n+' '+totalText;
}));
window.addEventListener('click',event=>{document.querySelectorAll('details.language[open]').forEach(d=>{if(!d.contains(event.target))d.open=false;});});
})();