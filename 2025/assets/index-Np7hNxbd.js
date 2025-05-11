import D from"https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/+esm";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();function M(t){return new Promise((n,r)=>{const i=new Image;i.onload=()=>n(i),i.onerror=r,i.src=t})}function E(t){t=t.replace("#","");const n=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),i=parseInt(t.substring(4,6),16);return{r:n,g:r,b:i}}async function A(t){try{const n=await M("src/image.png"),r=document.createElement("canvas"),i=r.getContext("2d");r.width=n.width,r.height=n.height,i.drawImage(n,0,0);const o=i.getImageData(0,0,r.width,r.height),e=o.data,c=E(t);for(let a=0;a<e.length;a+=4)e[a]<50&&e[a+1]<50&&e[a+2]<50?(e[a]=c.r,e[a+1]=c.g,e[a+2]=c.b):e[a+3]=0;return i.putImageData(o,0,0),r}catch(n){throw console.error("Error processing image:",n),n}}const F=document.createElement("style");F.textContent=`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FFFACD;
  }
  
  #main-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;document.head.appendChild(F);const h=document.createElement("canvas"),s=document.createElement("canvas");h.id="main-canvas";s.id="text-canvas";document.body.appendChild(h);const d=h.getContext("2d"),g=s.getContext("2d"),L="母親節快樂",p=96,x=5;let m=[],l=null,u=!1;const B='"Kaisei Decol", "Noto Serif TC", serif';D.load({google:{families:["Kaisei Decol","Noto Serif TC"]},custom:{families:["Kaisei Decol"],urls:["https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap"]},loading:function(){console.log("Loading fonts...")},active:function(){console.log("Fonts loaded successfully!"),u=!0,C()},inactive:function(){console.log("Font loading failed, using fallback fonts"),u=!0,C()}});const P=["#FFB6C1","#FF69B4","#FF1493","#DB7093","#FFC0CB"],y=[];function S(){y.length=0;for(let t=0;t<m.length;t++)y.push({scale:0,maxScale:W(.06,.16),minScale:.06,isGrowing:!0,growthSpeed:1e-4+Math.random()*2e-4,age:Math.random()*Math.PI*2,ageDelta:.01+Math.random()*.02,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.05)*1e-4,colorIndex:Math.floor(Math.random()*l.length)})}function z(){y.forEach(t=>{t.age+=t.ageDelta,t.isGrowing?(t.scale+=t.growthSpeed,t.scale>=t.maxScale&&(t.isGrowing=!1)):t.scale=t.maxScale+Math.sin(t.age)*.02,t.rotation+=t.rotationSpeed,t.scale=Math.max(t.minScale,Math.min(t.maxScale*1.2,t.scale))})}let w=null;function b(){z(),K(),w=requestAnimationFrame(b)}function O(){w&&(cancelAnimationFrame(w),w=null)}async function C(){if(!u){console.log("Waiting for fonts to load...");return}try{l=await Promise.all(P.map(t=>A(t))),I(),S(),b()}catch(t){console.error("Error loading carnation:",t)}}function v(){h.width=window.innerWidth,h.height=window.innerHeight,s.width=window.innerWidth,s.height=window.innerHeight}v();window.addEventListener("resize",()=>{v(),l&&l.length&&u&&(I(),S())});function I(){if(!u){console.log("Waiting for fonts to load...");return}g.fillStyle="#FFFACD",g.fillRect(0,0,s.width,s.height),g.fillStyle="#DB7093",g.font=`${p}px ${B}`,g.textAlign="center",g.textBaseline="middle";const t=L.split(""),n=p*1.2,r=t.length*n,i=s.width/2,o=(s.height-r)/2+p*.5;t.forEach((c,a)=>{const f=o+a*n;g.fillText(c,i,f)}),m=[];const e=g.getImageData(0,0,s.width,s.height);for(let c=0;c<s.height;c+=x)for(let a=0;a<s.width;a+=x){const f=(a+c*s.width)*4;(e.data[f]!==255||e.data[f+1]!==250||e.data[f+2]!==205)&&m.push({x:a,y:c})}}function W(t,n){return Math.random()*(n-t)+t}function K(){if(!(!l||!l.length)){d.fillStyle="#FFFACD",d.fillRect(0,0,h.width,h.height),d.globalAlpha=.2;for(let t=0;t<m.length;t++){const n=y[t],r=p/l[0].height*n.scale,i=l[0].width*r,o=l[0].height*r,e=l[n.colorIndex];d.save();const c=m[t].x,a=m[t].y;d.translate(c,a),d.rotate(n.rotation),d.drawImage(e,-i/2,-o/2,i,o),d.restore()}d.globalAlpha=1}}C();window.addEventListener("beforeunload",()=>{O()});
