var preloads=[];

function preload(){
for(var c=0;c<arguments.length;c++) {
   preloads[preloads.length]=new Image();
   preloads[preloads.length-1].src=arguments[c];
  }
 }
   preload('img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg');
function init(){

   url=['#','#','#','#','#','#','#','#','#','#','#'];                  /* add your  links here */

   speed=15;                                       /* this is the scroll speed */
   boxWidth=13/preloads.length;                     /* this is the scroller box width controller */

   pic=[];
   anc=[];
   dv=[];
   obj1=document.getElementById('outer');

for(i=0;i<2;i++) { 
   dv[i]=document.createElement('div');
   dv[i].setAttribute('id','inner'+i);                      
for(c=0;c<preloads.length;c++) {
   pic[c]=document.createElement('img');
   pic[c].setAttribute('src',preloads[c].src);
   anc[c]=document.createElement('a');
   anc[c].setAttribute('href',url[c]);
   anc[c].appendChild(pic[c]);
   dv[i].appendChild(anc[c]);
 }
   obj1.appendChild(dv[i])
 }
   obj1.style.display='block';

   obj2=document.getElementById('inner0');
   obj3=document.getElementById('inner1');

   k=obj3.offsetWidth;

   obj2.style.width=obj3.style.left=
   obj3.style.width=k+'px';

   obj1.style.width=k*boxWidth+'px';
   obj1.style.height=obj2.offsetHeight+'px';

   j=0;
   n=k;

   scroll();

obj1.onmouseover=function(){
   clearTimeout(scroller);
 }
obj1.onmouseout=function(){
   return scroll();
  }
 }

function scroll() {
if(j==-n){
   j=n;
 }
   j--;
if(k==-n){
   k=n;
 }
   k--;

   obj2.style.left=j+'px';
   obj3.style.left=k+'px';

   scroller=setTimeout(function(){scroll()},speed);
 }
if(window.addEventListener){
   window.addEventListener('load',init,false);
 }
else { 
if(window.attachEvent){
   window.attachEvent('onload',init);
  }
 }
 