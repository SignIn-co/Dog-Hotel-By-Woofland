(function(){
'use strict';
var D=document,root=D.documentElement;root.classList.add('js');
var $=function(s,c){return (c||D).querySelector(s)},$$=function(s,c){return [].slice.call((c||D).querySelectorAll(s))};
var clamp=function(x,a,b){return Math.max(a===undefined?0:a,Math.min(b===undefined?1:b,x))};
var seg=function(a,b,x){return clamp((x-a)/(b-a))},lerp=function(a,b,t){return a+(b-a)*t};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var fine=window.matchMedia&&matchMedia('(pointer:fine)').matches;
var S={y:0,sy:window.scrollY||0,vh:innerHeight,vw:innerWidth,svel:0};
function top(el){return el.getBoundingClientRect().top+(window.scrollY||0)}

/* word split */
function split(el){var out=[];(function walk(node){[].slice.call(node.childNodes).forEach(function(n){
  if(n.nodeType===3){var f=D.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(D.createTextNode(' '));return}var s=D.createElement('span');s.className='w';s.textContent=t;f.appendChild(s);out.push(s)});node.replaceChild(f,n)}
  else if(n.nodeType===1)walk(n)})})(el);return out}

/* nav + menu */
var nav=$('#nav'),pill=$('.navpill'),blob=pill&&$('.blob',pill);
if(pill&&fine){$$('a',pill).forEach(function(a){a.addEventListener('mouseenter',function(){blob.style.opacity=1;blob.style.width=a.offsetWidth+'px';blob.style.transform='translateX('+a.offsetLeft+'px)'})});pill.addEventListener('mouseleave',function(){blob.style.opacity=0})}
var burger=$('#burger');
if(burger){burger.addEventListener('click',function(){var o=root.classList.toggle('menu-open');burger.setAttribute('aria-expanded',o);D.body.style.overflow=o?'hidden':''});
  $$('.menu a').forEach(function(a){a.addEventListener('click',function(){root.classList.remove('menu-open');D.body.style.overflow=''})})}

/* cursor + magnetic */
var cur=$('#cur'),mouse={x:.5,y:.5,tx:.5,ty:.5,px:-100,py:-100};
window.addEventListener('pointermove',function(e){mouse.px=e.clientX;mouse.py=e.clientY;mouse.tx=e.clientX/S.vw;mouse.ty=1-e.clientY/S.vh},{passive:true});
if(fine&&cur){
  $$('a,button').forEach(function(a){a.addEventListener('mouseenter',function(){cur.classList.add('big')});a.addEventListener('mouseleave',function(){cur.classList.remove('big')})});
  $$('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.25)+'px,'+((e.clientY-r.top-r.height/2)*.35)+'px)'});
    b.addEventListener('mouseleave',function(){b.style.transition='transform .6s cubic-bezier(.16,1,.3,1)';b.style.transform='';setTimeout(function(){b.style.transition=''},600)})});
}

/* reveals + counters */
function count(el){var to=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),st=performance.now();(function f(now){var k=clamp((now-st)/1700),e=1-Math.pow(1-k,4);el.textContent=(to*e).toFixed(dec);if(k<1)requestAnimationFrame(f)})(st)}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.dataset.count!==undefined)count(e.target)}})},{threshold:.2});
  $$('[data-in],[data-count],.clip').forEach(function(el){io.observe(el)});
}else{$$('[data-in],.clip').forEach(function(el){el.classList.add('in')})}

/* story words */
var qEl=$('#storyq'),qWords=qEl?split(qEl):[];qWords.forEach(function(w){if(/backyard|relaxed|safe|happy/.test(w.textContent))w.classList.add('hot')});
var maniDog=$('#maniDog'),reel=$('#reel'),rtrack=$('#rtrack'),panels=$$('.panel'),rcnt=$('#rcnt');

/* marquee */
var mq=$('#mq1');if(mq){var h='';for(var r=0;r<6;r++)h+='<span>Dog Daycare</span><span>Dog Hotel</span>';mq.innerHTML=h}

/* stars in night */
var stars=$('.night .stars');if(stars){var sh='';for(var i=0;i<46;i++)sh+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;top:'+(Math.random()*58).toFixed(1)+'%;animation-delay:'+(Math.random()*4).toFixed(2)+'s"></i>';stars.innerHTML=sh}

/* reviews wall: duplicate columns for seamless loop */
$$('.wall .col').forEach(function(c){c.innerHTML+=c.innerHTML});

/* film strip */
var strip=$('#strip'),film={x:0,v:0,drag:false,lx:0,w:0};
if(strip){strip.innerHTML+=strip.innerHTML;
  strip.addEventListener('pointerdown',function(e){film.drag=true;film.lx=e.clientX;strip.setPointerCapture(e.pointerId);strip.style.cursor='grabbing'});
  strip.addEventListener('pointermove',function(e){if(!film.drag)return;var d=e.clientX-film.lx;film.lx=e.clientX;film.x+=d;film.v=d});
  var end=function(){film.drag=false;strip.style.cursor='grab'};strip.addEventListener('pointerup',end);strip.addEventListener('pointercancel',end);}

/* faq */
$$('.qa button').forEach(function(b){b.addEventListener('click',function(){var q=b.parentNode,o=q.classList.contains('open');$$('.qa.open').forEach(function(x){x.classList.remove('open');$('button',x).setAttribute('aria-expanded','false')});if(!o){q.classList.add('open');b.setAttribute('aria-expanded','true')}})});
$$('.chips button').forEach(function(c){c.addEventListener('click',function(){$$('.chips button').forEach(function(x){x.classList.toggle('on',x===c)});var cat=c.dataset.cat;$$('.qa').forEach(function(q){q.hidden=!(cat==='all'||q.dataset.cat===cat)})})});

/* rooms hover float */
var rfloat=$('#rfloat'),rf={x:0,y:0,on:false,rot:0};
if(rfloat&&fine){var rfi=$$('img',rfloat);$$('.room[data-room]').forEach(function(r){
  r.addEventListener('mouseenter',function(){var i=+r.dataset.room;rf.on=true;rfloat.classList.add('on');rfi.forEach(function(im,k){im.classList.toggle('on',k===i)})});
  r.addEventListener('mouseleave',function(){rf.on=false;rfloat.classList.remove('on')})})}

/* WebGL hero (home) */
var canvas=$('#gl'),gl=null,U={},tex=[],tsize=[],hero=$('#hero'),hframe=$('#hframe'),hfall=$('#hfall'),
    slides=$$('.hslide'),hill=$('#hill'),hstory=$('#hstory'),htrack=$('#htrack'),hdog=$('#hdog'),hleash=$('#hleashp'),hbone=$('#hbone'),hsun=$('.hsun'),hstage=$('.hstage'),hdp={},hpose='walk',dots=$$('.hmeta .dots i'),hnum=$('#hnum'),curSlide=-2,ready=!hero,started=!hero,
    heroSrc=hero?hero.dataset.src.split(','):[],heroFy=hero?hero.dataset.fy.split(',').map(Number):[];
var VS='attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
var FS=['precision highp float;varying vec2 v;uniform sampler2D t0,t1;uniform vec2 res,s0,s1,mouse,fy;uniform float pr,time,vel;',
'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
'float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p*=2.03;a*=.5;}return s;}',
'vec2 cov(vec2 uv,vec2 img,float f){float ra=res.x/res.y,ia=img.x/img.y;vec2 sc=ra>ia?vec2(1.,ia/ra):vec2(ra/ia,1.);vec2 c=(uv-.5)*sc+.5;c.y+=(f-.5)*(1.-sc.y);return c;}',
'vec3 samp(sampler2D t,vec2 uv,vec2 sz,float f,float sh){vec2 c=cov(uv,sz,f);return vec3(texture2D(t,c+vec2(sh,0.)).r,texture2D(t,c).g,texture2D(t,c-vec2(sh,0.)).b);}',
'void main(){vec2 uv=v;float asp=res.x/res.y;uv+=(mouse-.5)*-.014;',
' float nz=fbm(uv*vec2(asp,1.)*2.4+time*.03);float th=nz*.7+(1.-uv.y)*.3;float m=smoothstep(th-.1,th+.1,pr*1.2-.1);',
' float br=sin(time*.1)*.012;float z0=.94+br-pr*.08;float z1=1.1-pr*.1;',
' vec2 u0=(uv-.5)*z0+.5+vec2(0.,pr*.05);vec2 u1=(uv-.5)*(1./z1)+.5-vec2(0.,(1.-pr)*.05);',
' float w=(nz-.5)*.07;u0+=w*m;u1-=w*(1.-m);float sh=vel*.004;',
' vec3 a=samp(t0,u0,s0,fy.x,sh),b=samp(t1,u1,s1,fy.y,sh);vec3 c=mix(a,b,m);',
' float band=smoothstep(0.,.5,m)*smoothstep(1.,.5,m);c+=vec3(1.,.52,.1)*band*.5;',
' float vg=smoothstep(1.25,.25,length((v-.5)*vec2(1.1,1.)));c*=mix(.55,1.,vg);c*=vec3(1.03,.97,.9)*.86;',
' c+=(h(v*res+time)-.5)*.03;gl_FragColor=vec4(c,1.);}'].join('\n');
function initGL(){
  if(!canvas)return false;
  try{gl=canvas.getContext('webgl',{antialias:false,alpha:false})}catch(e){gl=null}
  if(!gl)return false;
  try{var pg=gl.createProgram();[[gl.VERTEX_SHADER,VS],[gl.FRAGMENT_SHADER,FS]].forEach(function(a){var s=gl.createShader(a[0]);gl.shaderSource(s,a[1]);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));gl.attachShader(pg,s)});
    gl.linkProgram(pg);if(!gl.getProgramParameter(pg,gl.LINK_STATUS))throw new Error('link');gl.useProgram(pg);
    var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    var loc=gl.getAttribLocation(pg,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    ['t0','t1','res','s0','s1','mouse','fy','pr','time','vel'].forEach(function(k){U[k]=gl.getUniformLocation(pg,k)});gl.uniform1i(U.t0,0);gl.uniform1i(U.t1,1);
  }catch(e){gl=null;return false}
  return true;
}
function mkTex(img,i){var t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);tex[i]=t;tsize[i]=[img.naturalWidth,img.naturalHeight]}
var glok=hero?initGL():false;
function sizeGL(){if(!glok)return;var dpr=Math.min(window.devicePixelRatio||1,1.6),r=canvas.getBoundingClientRect(),w=Math.max(2,Math.round(r.width*dpr)),hh=Math.max(2,Math.round(r.height*dpr));if(canvas.width!==w||canvas.height!==hh){canvas.width=w;canvas.height=hh;gl.viewport(0,0,w,hh)}}
function setSlide(i,force){if(!ready)return;if(i===curSlide&&!force)return;curSlide=i;slides.forEach(function(s,k){s.classList.toggle('on',k===i)});if(i>=0){dots.forEach(function(d,k){d.classList.toggle('on',k===i)});hnum.textContent='0'+(i+1)}}

/* loader (home) */
var loader=$('#loader'),runner=$('#runner');
if(hero&&loader){
  var lcount=$('#lcount'),lbar=$('#lbar'),loaded=0,shown=0,t0=performance.now();
  hfall.style.backgroundImage='url('+heroSrc[0]+')';
  heroSrc.forEach(function(src,i){var im=new Image();im.onload=function(){if(glok){try{mkTex(im,i)}catch(e){}}loaded++};im.onerror=function(){loaded++};im.src=src});
  var startNow=function(){if(started)return;started=true;if(!glok||!tex[0])canvas.style.display='none';else hfall.style.display='none';loader.classList.add('done');setTimeout(function(){ready=true;setSlide(0,true);runner&&runner.classList.add('show')},reduce?0:450)};
  (function tick(){var target=Math.min(100,loaded/heroSrc.length*100),el=performance.now()-t0;if(el>4500)target=100;shown+=(target-shown)*.12+(target>shown?.5:0);if(shown>target)shown=target;
    lcount.textContent=Math.round(shown);lbar.style.transform='scaleX('+(shown/100)+')';if(shown>=99.5&&el>800)startNow();else requestAnimationFrame(tick)})();
  setTimeout(startNow,7000);
}else{runner&&runner.classList.add('show');$$('.phero').forEach(function(p){setTimeout(function(){p.classList.add('in')},60)})}

/* runner */
var rdog=$('#rdog'),rfill=$('#rfill'),poses={},pose='sit',flip=1,idleAt=performance.now(),lastY=window.scrollY||0,spd=0;
if(rdog)$$('img',rdog).forEach(function(i){poses[i.dataset.p]=i});
function setPose(p){if(p===pose||!poses[p])return;poses[pose].classList.remove('on');poses[p].classList.add('on');pose=p}

/* footer word: letters rise under the pointer, a dog runs along the top */
var gw=$('.foot .giant'),fdog=$('.foot .fdog');
if(gw){var txt=gw.textContent;gw.textContent='';var letters=txt.split('').map(function(c){var s=D.createElement('span');s.textContent=c;gw.appendChild(s);return s});
  var wave=function(cx){var r=gw.getBoundingClientRect();letters.forEach(function(s){var b=s.getBoundingClientRect(),d=Math.abs(cx-(b.left+b.width/2))/(r.width*.22),k=Math.max(0,1-d);k=k*k*(3-2*k);
      s.style.transform='translateY('+(-k*16).toFixed(1)+'%) scaleY('+(1+k*.16).toFixed(3)+') rotate('+((cx<b.left+b.width/2?-1:1)*k*3).toFixed(2)+'deg)';s.classList.toggle('hot',k>.25)});
    if(fdog){fdog.style.opacity=1;fdog.style.transform='translate3d('+(cx-r.left-fdog.offsetWidth/2).toFixed(1)+'px,'+(-gw.offsetHeight*.93)+'px,0) scaleX('+(cx<(wave.lx||0)?1:-1)+')';wave.lx=cx}};
  var calm=function(){letters.forEach(function(s){s.style.transform='';s.classList.remove('hot')});if(fdog)fdog.style.opacity=0};
  gw.addEventListener('pointermove',function(e){wave(e.clientX)});gw.addEventListener('pointerleave',calm);gw.addEventListener('pointercancel',calm);}

/* measure */
var pars=$$('[data-par]'),M={},ctaWord=$('#ctaWord'),giant=$('.foot .giant'),bgw=$('.phero .bgw'),bigs=$$('.big');
function measure(){S.vh=innerHeight;S.vw=innerWidth;if(htrack){htrack._S=0;hstory._H=0}
  if(reel){reel.style.height=(S.vw<900?panels.length*75+25:panels.length*85+30)+'vh';}
  if(hero)M.hero={t:top(hero),h:hero.offsetHeight};
  if(reel)M.reel={t:top(reel),h:reel.offsetHeight,w:rtrack.scrollWidth};
  if(qEl)M.q={t:top(qEl),h:qEl.offsetHeight};
  M.par=pars.map(function(p){var b=p.closest('[data-parbox]')||p.parentNode;return {t:top(b),h:b.offsetHeight,k:+p.dataset.par}});
  if(ctaWord){var c=ctaWord.parentNode;M.cta={t:top(c),h:c.offsetHeight}}
  if(strip){film.w=strip.scrollWidth/2;M.film={t:top(strip)}}
  M.big=bigs.map(function(b){return {t:top(b.parentNode)+b.offsetTop- (parseFloat(getComputedStyle(b).top)||0),h:b.offsetHeight}});
  M.doc=Math.max(1,root.scrollHeight-S.vh);sizeGL()}

/* loop */
var navY=0,T0=performance.now();
function frame(now){requestAnimationFrame(frame);
  var t=(now-T0)/1000;S.y=window.scrollY||0;S.sy=reduce?S.y:lerp(S.sy,S.y,.11);if(Math.abs(S.y-S.sy)<.05)S.sy=S.y;
  S.svel=lerp(S.svel,clamp((S.y-S.sy)/120,-1.5,1.5),.2);var vh=S.vh,vw=S.vw;
  if(nav){if(S.y>navY+6&&S.y>vh*.5)nav.classList.add('hide');else if(S.y<navY-6)nav.classList.remove('hide');navY=S.y}
  mouse.x=lerp(mouse.x,mouse.tx,.05);mouse.y=lerp(mouse.y,mouse.ty,.05);
  if(fine&&cur)cur.style.transform='translate3d('+mouse.px+'px,'+mouse.py+'px,0)';

  if(hero&&M.hero&&S.sy<M.hero.t+M.hero.h){
    var hp=clamp((S.sy-M.hero.t)/(M.hero.h-vh)),P=seg(.37,.5,hp)+seg(.62,.78,hp),idx=P>=1?1:0,f=P-idx;if(P>=2){idx=1;f=1}
    var si=P<.3?0:(P>.72&&P<1.3)?1:(P>1.72?2:-1);if(hp>.965)si=-1;setSlide(si);
    if(hill){var hk=clamp(P),he=hk*hk*(3-2*hk),hs=hstage.getBoundingClientRect(),sr=hsun.getBoundingClientRect(),cx=sr.left+sr.width/2-hs.left,cy=sr.top+sr.height/2-hs.top,
      mr=Math.sqrt(Math.pow(Math.max(cx,hs.width-cx),2)+Math.pow(Math.max(cy,hs.height-cy),2))+4;
      hill.style.setProperty('--hole',(he*mr).toFixed(1)+'px');hill.style.visibility=hk>=1?'hidden':'';hstory.style.visibility=hk>=1?'hidden':'';hstage.classList.toggle('onphoto',hk>.45);
      hstory.style.opacity=(1-seg(.15,.7,hk)).toFixed(3);
      var st=seg(0,.34,hp),Sp=htrack._S||(htrack._S=parseFloat(getComputedStyle(htrack).getPropertyValue('--S'))*vw/100),Hh=hstory._H||(hstory._H=hstory.querySelector('.hp').getBoundingClientRect().height);
      htrack.style.transform='translate3d('+(-Math.min(st/.9,1)*3*Sp).toFixed(1)+'px,0,0)';
      var K=[[0,-.42],[.1,-.12],[.17,.16],[.21,.16],[.34,1.34],[.5,1.52],[.62,2.3],[.8,2.72],[.86,2.86],[.95,3],[1,3]],dx=K[0][1];for(var ki=0;ki<K.length-1;ki++){if(st>=K[ki][0]&&st<=K[ki+1][0]){dx=K[ki][1]+(K[ki+1][1]-K[ki][1])*(st-K[ki][0])/(K[ki+1][0]-K[ki][0])}}
      var ps=st<.17?'walk':st<.21?'sniff':st<.52?'walk':st<.86?'ball':st<.95?'jump':'sleep',lap=-Hh*.36,jq=seg(.86,.95,st),
        dyy=ps==='jump'?lap*jq-Math.sin(jq*Math.PI)*Hh*.22:ps==='sleep'?lap:ps==='sniff'?0:-Math.abs(Math.sin(st*(ps==='ball'?150:95)))*Hh*(ps==='ball'?.04:.02);
      if(!hdp.walk)$$('img',hdog).forEach(function(im){hdp[im.dataset.p]=im});if(ps!==hpose){hdp[hpose].classList.remove('on');hdp[ps].classList.add('on');hpose=ps}
      hdog.style.transform='translate3d('+(dx*Sp).toFixed(1)+'px,'+dyy.toFixed(1)+'px,0)';
      var bq=seg(.05,.11,st);hbone.style.opacity=(seg(.04,.06,st)*(1-seg(.19,.21,st))).toFixed(2);hbone.style.transform='translate3d('+(Hh*.2+bq*(.16*Sp-Hh*.2)).toFixed(1)+'px,'+(-Hh*.72*(1-bq*bq)-Hh*.03).toFixed(1)+'px,0) rotate('+(bq*200).toFixed(0)+'deg)';
      var lo=seg(.3,.34,st)*(1-seg(.49,.52,st));hleash.style.opacity=lo.toFixed(2);if(lo>0){var hx=Sp+Hh*.2,hy=-Hh*.5,nx=dx*Sp-Hh*.04,ny=-Hh*.3+dyy;hleash.setAttribute('d','M'+hx.toFixed(1)+' '+hy.toFixed(1)+' Q'+((hx+nx)/2).toFixed(1)+' '+(Math.max(hy,ny)+Hh*.12).toFixed(1)+' '+nx.toFixed(1)+' '+ny.toFixed(1))}}
    var k=seg(.9,1,hp);hframe.style.transform='scale('+(1-k*.08).toFixed(4)+')';hframe.style.borderRadius=(k*34).toFixed(1)+'px';
    if(glok&&tex[0]&&started){var ia=tex[idx]?idx:0,ib=tex[idx+1]?idx+1:ia;
      gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,tex[ia]);gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,tex[ib]);
      gl.uniform2f(U.res,canvas.width,canvas.height);gl.uniform2f(U.s0,tsize[ia][0],tsize[ia][1]);gl.uniform2f(U.s1,tsize[ib][0],tsize[ib][1]);gl.uniform2f(U.fy,heroFy[ia],heroFy[ib]);
      gl.uniform2f(U.mouse,reduce?.5:mouse.x,reduce?.5:mouse.y);gl.uniform1f(U.pr,f);gl.uniform1f(U.time,reduce?0:t);gl.uniform1f(U.vel,S.svel);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    }else if(started){var fi=P<.5?0:P<1.5?1:2;if(hfall._i!==fi){hfall._i=fi;hfall.style.backgroundImage='url('+heroSrc[fi]+')'}}
  }
  if(mq){var w1=mq.scrollWidth/6||1,mx=(t*36+S.sy*.45)%w1;mq.style.transform='translate3d('+(-mx).toFixed(1)+'px,0,0) skewX('+(S.svel*-6).toFixed(2)+'deg)'}
  if(qEl){var mp=clamp((S.sy+vh*.8-M.q.t)/(M.q.h+vh*.35)),lit=Math.round(mp*qWords.length);for(var i=0;i<qWords.length;i++){var on=i<lit;if(qWords[i]._on!==on){qWords[i]._on=on;qWords[i].classList.toggle('lit',on)}}}
  for(var j=0;j<pars.length;j++){var m=M.par[j],pp=clamp((S.sy+vh-m.t)/(vh+m.h));pars[j].style.transform='translate3d(0,'+((pp-.5)*m.k).toFixed(2)+'%,0)'}
  if(bigs.length>1&&vw>900){var b0=M.big[0],b1=M.big[1],ov=clamp((S.sy-b0.t)/(b1.t-b0.t+1));bigs[0].style.transform='scale('+(1-ov*.05).toFixed(4)+')';bigs[0].style.filter='brightness('+(1-ov*.45).toFixed(3)+')'}
  if(strip){if(!film.drag){film.x-=(.5+Math.abs(S.svel)*5);film.x+=film.v;film.v*=.93}if(film.w){if(film.x<-film.w)film.x+=film.w;if(film.x>0)film.x-=film.w}strip.style.transform='translate3d('+film.x.toFixed(1)+'px,0,0)'}
  if(rfloat&&fine){var ox=rf.x;rf.x=lerp(rf.x,mouse.px,.1);rf.y=lerp(rf.y,mouse.py,.1);rf.rot=lerp(rf.rot,clamp((rf.x-ox)*.6,-10,10),.2);rfloat.style.transform='translate3d('+rf.x.toFixed(1)+'px,'+rf.y.toFixed(1)+'px,0) rotate('+rf.rot.toFixed(2)+'deg) scale('+(rf.on?1:.7)+')'}
  if(ctaWord){var cp=clamp((S.sy+vh-M.cta.t)/(vh+M.cta.h));ctaWord.style.transform='translate3d('+(-cp*30).toFixed(2)+'%,0,0)'}
  if(bgw)bgw.style.transform='translate3d('+(-S.sy*.25).toFixed(1)+'px,0,0)';
  if(reel&&M.reel){var np=panels.length-1,rp=clamp((S.sy-M.reel.t)/(M.reel.h-vh)),span=Math.max(0,M.reel.w-vw),tx=-rp*span,act=0;
    rtrack.style.transform='translate3d('+tx.toFixed(1)+'px,0,0) skewX('+(S.svel*-2).toFixed(2)+'deg)';
    for(var q=0;q<panels.length;q++){var pn=panels[q],rel=(pn.offsetLeft+pn.offsetWidth/2+tx-vw/2)/vw;if(Math.abs(rel)<.5)act=q;var pic=pn._pic||(pn._pic=pn.querySelector('.pic')),dg=pn._dg||(pn._dg=pn.querySelector('.pdog'));
      if(pic)pic.style.transform='translate3d('+(rel*-5).toFixed(2)+'%,0,0) scale(1.12)';if(Math.abs(rel)<.25&&!pn._pk){pn._pk=1;var fl=pn.querySelector('.flip');if(fl)fl.classList.add('peek')}if(dg)dg.style.transform='translate3d('+(rel*(+dg.dataset.px)).toFixed(1)+'px,'+(Math.sin(t*1.4+q)*6).toFixed(1)+'px,0) rotate('+(rel*-10).toFixed(2)+'deg)'}
    if(rcnt)rcnt.textContent='0'+(act+1)}
  if(maniDog&&M.q){var md=clamp((S.sy+vh*.8-M.q.t)/(M.q.h+vh*.35));maniDog.style.transform='translate3d(0,'+((md-.5)*-60).toFixed(1)+'px,0) rotate('+((md-.5)*-6).toFixed(2)+'deg)'}
  if(rdog){var dy=S.y-lastY;lastY=S.y;spd=lerp(spd,Math.abs(dy),.25);if(dy>.5)flip=-1;else if(dy<-.5)flip=1;
    var pg=clamp(S.y/M.doc),bob=0;if(spd>14){setPose('run');bob=-Math.abs(Math.sin(t*16))*6;idleAt=now}else if(spd>.8){setPose('walk');bob=-Math.abs(Math.sin(t*9))*3;idleAt=now}else if(now-idleAt>5000)setPose('sleep');else setPose('sit');
    rdog.style.transform='translate3d('+(pg*(vw-64)).toFixed(1)+'px,'+bob.toFixed(1)+'px,0) scaleX('+flip+')';rfill.style.transform='scaleX('+pg.toFixed(4)+')'}
}

/* flip cards */
$$('.flip').forEach(function(f){f.addEventListener('click',function(){var o=f.classList.toggle('flipped');f.classList.remove('peek');f.setAttribute('aria-pressed',o)})});
/* reel: sideways wheel and swipe drive the same scroll */
var rst=$('.rstage');
if(rst&&reel){var jump=function(d){window.scrollTo({top:(window.scrollY||0)+d,behavior:'instant'})},ratio=function(){var sp=Math.max(1,M.reel.w-S.vw);return (M.reel.h-S.vh)/sp},
  pinned=function(){var y=window.scrollY||0;return y>=M.reel.t-2&&y<=M.reel.t+M.reel.h-S.vh+2};
  rst.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&M.reel){e.preventDefault();jump(e.deltaX*ratio())}},{passive:false});
  var tc=null,iv=0,raf=0;
  rst.addEventListener('touchstart',function(e){cancelAnimationFrame(raf);var p=e.touches[0];tc={x:p.clientX,y:p.clientY,lx:p.clientX,lt:e.timeStamp,dir:0}},{passive:true});
  rst.addEventListener('touchmove',function(e){if(!tc||!M.reel)return;var p=e.touches[0],dx=p.clientX-tc.x,dy=p.clientY-tc.y;
    if(!tc.dir){if(Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)*1.2)tc.dir=1;else if(Math.abs(dy)>8)tc.dir=2}
    if(tc.dir===1){e.preventDefault();var step=p.clientX-tc.lx,dt=Math.max(1,e.timeStamp-tc.lt);iv=step/dt;tc.lx=p.clientX;tc.lt=e.timeStamp;
      if(!pinned()){var y=window.scrollY||0;jump(y<M.reel.t?M.reel.t-y:(M.reel.t+M.reel.h-S.vh)-y)}jump(-step*ratio())}},{passive:false});
  rst.addEventListener('touchend',function(){if(!tc||tc.dir!==1){tc=null;return}tc=null;var v=iv*16;(function glide(){if(Math.abs(v)<.4)return;jump(-v*ratio());v*=.93;raf=requestAnimationFrame(glide)})()},{passive:true});
  rst.addEventListener('click',function(e){if(tc&&tc.dir===1)e.preventDefault()},true)}
/* theme */
var tgl=$('#tgl');if(tgl)tgl.addEventListener('click',function(){var l=root.dataset.theme==='light';if(l)delete root.dataset.theme;else root.dataset.theme='light';try{localStorage.setItem('wf-theme',l?'dark':'light')}catch(e){}});
measure();window.addEventListener('resize',measure);window.addEventListener('load',measure);setTimeout(measure,1200);setTimeout(measure,3200);
requestAnimationFrame(frame);
})();

