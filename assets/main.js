(function(){var d=document;
var b=d.querySelector('.burger'),m=d.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});d.querySelectorAll('.reveal').forEach(function(e){io.observe(e)})}else{d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')})}
d.querySelectorAll('form[data-mail]').forEach(function(f){var inp=f.querySelector('input[type=file]'),th=f.querySelector('.thumbs'),msg=f.querySelector('.msg'),files=[],MAX=6,LIM=10*1024*1024;
 function draw(){th.innerHTML='';files.forEach(function(file,i){var li=d.createElement('li'),im=d.createElement('img'),bt=d.createElement('button');im.src=URL.createObjectURL(file);im.alt=file.name;bt.type='button';bt.setAttribute('aria-label','Remove '+file.name);bt.innerHTML='&times;';bt.onclick=function(){files.splice(i,1);draw()};li.appendChild(im);li.appendChild(bt);th.appendChild(li)})}
 inp.addEventListener('change',function(){var skip=0;Array.prototype.forEach.call(inp.files,function(x){if(x.type.indexOf('image/')!==0||x.size>LIM||files.length>=MAX)skip++;else files.push(x)});inp.value='';draw();if(skip){msg.className='msg show';msg.textContent='Some files were skipped. Use images under 10 MB, up to '+MAX+' photos.'}});
 f.addEventListener('submit',function(e){e.preventDefault();var ok=true;f.querySelectorAll('[required]').forEach(function(x){var v=x.value.trim();if(!v||(x.type==='email'&&!/^\S+@\S+\.\S+$/.test(v))){ok=false;x.classList.add('bad')}else x.classList.remove('bad')});
 msg.className='msg show';if(!ok){msg.textContent='Please add your name and a valid email.';return}
 var L=['Quote request for Alberta Rug & Upholstery Cleaners'];new FormData(f).forEach(function(v,k){if(typeof v==='string'&&v.trim())L.push(k+': '+v)});var text=L.join('\n');
 if(files.length&&navigator.canShare&&navigator.canShare({files:files})){msg.textContent='Choose your email app to send your request and photos...';navigator.share({files:files,text:text,title:'Quote request'}).catch(function(){msg.textContent='Sharing was cancelled. You can try again.'});return}
 if(files.length)text+='\nPhotos: '+files.length+' to attach';
 msg.textContent=files.length?'Opening your email. Please attach your '+files.length+' photo(s) there.':'Opening your email app...';
 location.href='mailto:albertarug@gmail.com?subject='+encodeURIComponent('Quote request')+'&body='+encodeURIComponent(text)})});
})();
/* motion */
(function(){var d=document,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var pr=d.querySelector('.progress'),hd=d.querySelector('header.site'),tk=false;
function onS(){tk=false;var s=window.pageYOffset,m=d.documentElement.scrollHeight-innerHeight;if(pr)pr.style.transform='scaleX('+(m>0?s/m:0)+')';if(hd)hd.classList.toggle('stuck',s>40)}
window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();
if(rm||!('IntersectionObserver' in window)){d.querySelectorAll('.rv-up,.rv-left,.rv-right,.reveal').forEach(function(e){e.classList.add('in')})}
else{
 d.querySelectorAll('main h2,main .eyebrow,main .head p,.ag p,.cl li,.form>div,.cta-band .wrap>*,footer .fg>div,.gal figure,.rate').forEach(function(e){if(!e.classList.contains('reveal'))e.classList.add('rv-up')});
 d.querySelector('.ag .ph')&&d.querySelector('.ag .ph').classList.add('rv-left');
 d.querySelectorAll('.ag>div:not(.ph)').forEach(function(e){e.classList.add('rv-right')});
 d.querySelectorAll('.grid3,.tips,.steps,.gal,.facts ul,.cl,.fg').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,i){c.style.setProperty('--d',(i*0.12)+'s')})});
 d.querySelectorAll('.facts li').forEach(function(e){e.classList.add('rv-up')});
 var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 d.querySelectorAll('.rv-up,.rv-left,.rv-right').forEach(function(e){io2.observe(e)});
 var eb=d.querySelectorAll('.eyebrow');
}
/* count-up for 1965 */
var f=d.querySelector('.facts li b');if(f&&!rm&&/1965/.test(f.textContent)){var el=f,to=1965,from=1900,t0=null;var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){o.disconnect();requestAnimationFrame(function st(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent='Since '+Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)})}},{threshold:.6});o.observe(el)}
})();