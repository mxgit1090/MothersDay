import I from"https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/+esm";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function M(t){return new Promise((o,r)=>{const a=new Image;a.onload=()=>o(a),a.onerror=e=>{console.error("Error loading image:",e),r(e)},a.src=t})}function E(t){t=t.replace("#","");const o=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),a=parseInt(t.substring(4,6),16);return{r:o,g:r,b:a}}const A=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/":"/MothersDay/2025/";async function L(t){try{const o=await M(`${A}image.png`),r=document.createElement("canvas"),a=r.getContext("2d");r.width=o.width,r.height=o.height,a.drawImage(o,0,0);const e=a.getImageData(0,0,r.width,r.height),n=e.data,s=E(t);for(let i=0;i<n.length;i+=4)n[i]<50&&n[i+1]<50&&n[i+2]<50?(n[i]=s.r,n[i+1]=s.g,n[i+2]=s.b):n[i+3]=0;return a.putImageData(e,0,0),r}catch(o){throw console.error("Error processing image:",o),o}}const F=document.createElement("style");F.textContent=`
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
`;document.head.appendChild(F);const h=document.createElement("canvas"),c=document.createElement("canvas");h.id="main-canvas";c.id="text-canvas";document.body.appendChild(h);const d=h.getContext("2d"),g=c.getContext("2d"),B="母親節快樂",p=96,x=5;let m=[],l=null,u=!1;const P='"Kaisei Decol", "Noto Serif TC", serif';I.load({google:{families:["Kaisei Decol","Noto Serif TC"]},custom:{families:["Kaisei Decol"],urls:["https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap"]},loading:function(){console.log("Loading fonts...")},active:function(){console.log("Fonts loaded successfully!"),u=!0,C()},inactive:function(){console.log("Font loading failed, using fallback fonts"),u=!0,C()}});const z=["#FFB6C1","#FF69B4","#FF1493","#DB7093","#FFC0CB"],y=[];function S(){y.length=0;for(let t=0;t<m.length;t++)y.push({scale:0,maxScale:K(.06,.16),minScale:.06,isGrowing:!0,growthSpeed:1e-4+Math.random()*2e-4,age:Math.random()*Math.PI*2,ageDelta:.01+Math.random()*.02,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.05)*1e-4,colorIndex:Math.floor(Math.random()*l.length)})}function O(){y.forEach(t=>{t.age+=t.ageDelta,t.isGrowing?(t.scale+=t.growthSpeed,t.scale>=t.maxScale&&(t.isGrowing=!1)):t.scale=t.maxScale+Math.sin(t.age)*.02,t.rotation+=t.rotationSpeed,t.scale=Math.max(t.minScale,Math.min(t.maxScale*1.2,t.scale))})}let w=null;function b(){O(),N(),w=requestAnimationFrame(b)}function W(){w&&(cancelAnimationFrame(w),w=null)}async function C(){if(!u){console.log("Waiting for fonts to load...");return}try{l=await Promise.all(z.map(t=>L(t))),D(),S(),b()}catch(t){console.error("Error loading carnation:",t)}}function v(){h.width=window.innerWidth,h.height=window.innerHeight,c.width=window.innerWidth,c.height=window.innerHeight}v();window.addEventListener("resize",()=>{v(),l&&l.length&&u&&(D(),S())});function D(){if(!u){console.log("Waiting for fonts to load...");return}g.fillStyle="#FFFACD",g.fillRect(0,0,c.width,c.height),g.fillStyle="#DB7093",g.font=`${p}px ${P}`,g.textAlign="center",g.textBaseline="middle";const t=B.split(""),o=p*1.2,r=t.length*o,a=c.width/2,e=(c.height-r)/2+p*.5;t.forEach((s,i)=>{const f=e+i*o;g.fillText(s,a,f)}),m=[];const n=g.getImageData(0,0,c.width,c.height);for(let s=0;s<c.height;s+=x)for(let i=0;i<c.width;i+=x){const f=(i+s*c.width)*4;(n.data[f]!==255||n.data[f+1]!==250||n.data[f+2]!==205)&&m.push({x:i,y:s})}}function K(t,o){return Math.random()*(o-t)+t}function N(){if(!(!l||!l.length)){d.fillStyle="#FFFACD",d.fillRect(0,0,h.width,h.height),d.globalAlpha=.2;for(let t=0;t<m.length;t++){const o=y[t],r=p/l[0].height*o.scale,a=l[0].width*r,e=l[0].height*r,n=l[o.colorIndex];d.save();const s=m[t].x,i=m[t].y;d.translate(s,i),d.rotate(o.rotation),d.drawImage(n,-a/2,-e/2,a,e),d.restore()}d.globalAlpha=1}}C();window.addEventListener("beforeunload",()=>{W()});
