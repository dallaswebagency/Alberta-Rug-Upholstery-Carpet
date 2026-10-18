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