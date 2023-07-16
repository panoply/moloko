var pe=Object.create;var B=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var he=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var be=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),we=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0});},ye=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of he(t))!ge.call(e,r)&&r!==n&&B(e,r,{get:()=>t[r],enumerable:!(i=me(t,r))||i.enumerable});return e};var ve=(e,t,n)=>(n=e!=null?pe(fe(e)):{},ye(t||!e||!e.__esModule?B(n,"default",{value:e,enumerable:!0}):n,e));var C=(e,t,n)=>new Promise((i,r)=>{var d=u=>{try{l(n.next(u));}catch(c){r(c);}},o=u=>{try{l(n.throw(u));}catch(c){r(c);}},l=u=>u.done?i(u.value):Promise.resolve(u.value).then(d,o);l((n=n.apply(e,t)).next());});var $=be((He,F)=>{var P=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function r(o,l){if(!i[o]){i[o]={};for(var u=0;u<o.length;u++)i[o][o.charAt(u)]=u;}return i[o][l]}var d={compressToBase64:function(o){if(o==null)return "";var l=d._compress(o,6,function(u){return t.charAt(u)});switch(l.length%4){default:case 0:return l;case 1:return l+"===";case 2:return l+"==";case 3:return l+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:d._decompress(o.length,32,function(l){return r(t,o.charAt(l))})},compressToUTF16:function(o){return o==null?"":d._compress(o,15,function(l){return e(l+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:d._decompress(o.length,16384,function(l){return o.charCodeAt(l)-32})},compressToUint8Array:function(o){for(var l=d.compress(o),u=new Uint8Array(l.length*2),c=0,m=l.length;c<m;c++){var y=l.charCodeAt(c);u[c*2]=y>>>8,u[c*2+1]=y%256;}return u},decompressFromUint8Array:function(o){if(o==null)return d.decompress(o);for(var l=new Array(o.length/2),u=0,c=l.length;u<c;u++)l[u]=o[u*2]*256+o[u*2+1];var m=[];return l.forEach(function(y){m.push(e(y));}),d.decompress(m.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":d._compress(o,6,function(l){return n.charAt(l)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),d._decompress(o.length,32,function(l){return r(n,o.charAt(l))}))},compress:function(o){return d._compress(o,16,function(l){return e(l)})},_compress:function(o,l,u){if(o==null)return "";var c,m,y={},q={},L="",A="",w="",v=2,D=3,f=2,b=[],a=0,s=0,k;for(k=0;k<o.length;k+=1)if(L=o.charAt(k),Object.prototype.hasOwnProperty.call(y,L)||(y[L]=D++,q[L]=!0),A=w+L,Object.prototype.hasOwnProperty.call(y,A))w=A;else {if(Object.prototype.hasOwnProperty.call(q,w)){if(w.charCodeAt(0)<256){for(c=0;c<f;c++)a=a<<1,s==l-1?(s=0,b.push(u(a)),a=0):s++;for(m=w.charCodeAt(0),c=0;c<8;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;}else {for(m=1,c=0;c<f;c++)a=a<<1|m,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=0;for(m=w.charCodeAt(0),c=0;c<16;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;}v--,v==0&&(v=Math.pow(2,f),f++),delete q[w];}else for(m=y[w],c=0;c<f;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;v--,v==0&&(v=Math.pow(2,f),f++),y[A]=D++,w=String(L);}if(w!==""){if(Object.prototype.hasOwnProperty.call(q,w)){if(w.charCodeAt(0)<256){for(c=0;c<f;c++)a=a<<1,s==l-1?(s=0,b.push(u(a)),a=0):s++;for(m=w.charCodeAt(0),c=0;c<8;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;}else {for(m=1,c=0;c<f;c++)a=a<<1|m,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=0;for(m=w.charCodeAt(0),c=0;c<16;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;}v--,v==0&&(v=Math.pow(2,f),f++),delete q[w];}else for(m=y[w],c=0;c<f;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;v--,v==0&&(v=Math.pow(2,f),f++);}for(m=2,c=0;c<f;c++)a=a<<1|m&1,s==l-1?(s=0,b.push(u(a)),a=0):s++,m=m>>1;for(;;)if(a=a<<1,s==l-1){b.push(u(a));break}else s++;return b.join("")},decompress:function(o){return o==null?"":o==""?null:d._decompress(o.length,32768,function(l){return o.charCodeAt(l)})},_decompress:function(o,l,u){var c=[],y=4,q=4,L=3,A="",w=[],v,D,f,b,a,s,k,p={val:u(0),position:l,index:1};for(v=0;v<3;v+=1)c[v]=v;for(f=0,a=Math.pow(2,2),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;switch(f){case 0:for(f=0,a=Math.pow(2,8),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;k=e(f);break;case 1:for(f=0,a=Math.pow(2,16),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;k=e(f);break;case 2:return ""}for(c[3]=k,D=k,w.push(k);;){if(p.index>o)return "";for(f=0,a=Math.pow(2,L),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;switch(k=f){case 0:for(f=0,a=Math.pow(2,8),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;c[q++]=e(f),k=q-1,y--;break;case 1:for(f=0,a=Math.pow(2,16),s=1;s!=a;)b=p.val&p.position,p.position>>=1,p.position==0&&(p.position=l,p.val=u(p.index++)),f|=(b>0?1:0)*s,s<<=1;c[q++]=e(f),k=q-1,y--;break;case 2:return w.join("")}if(y==0&&(y=Math.pow(2,L),L++),c[k])A=c[k];else if(k===q)A=D+D.charAt(0);else return null;w.push(A),c[q++]=D+A.charAt(0),y--,D=A,y==0&&(y=Math.pow(2,L),L++);}}};return d}();typeof define=="function"&&define.amd?define(function(){return P}):typeof F!="undefined"&&F!=null?F.exports=P:typeof angular!="undefined"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return P});});var U={};we(U,{loader:()=>V,mount:()=>Ee,render:()=>Ie});var R=ve($(),1);function M(e){e.hash="M="+R.default.compressToEncodedURIComponent(JSON.stringify({language:e.language,input:{value:e.input.model.getValue(),width:e.input.width},preview:{mode:e.preview.mode,state:e.preview.state,width:e.preview.width},esthetic:{rules:e.esthetic.rules,state:e.esthetic.state,width:e.esthetic.width}})),window.location.hash=e.hash;}function G(e){return JSON.parse(R.default.decompressFromEncodedURIComponent(e))}var ke=Object.assign||((e,t)=>(t&&Object.keys(t).forEach(n=>e[n]=t[n]),e)),W=(e,t,n)=>{let i=typeof n;if(n&&i==="object")if(Array.isArray(n))for(let r of n)t=W(e,t,r);else for(let r of Object.keys(n)){let d=n[r];typeof d=="function"?t[r]=d(t[r],H):d===void 0?e&&!isNaN(r)?t.splice(r,1):delete t[r]:d===null||typeof d!="object"||Array.isArray(d)?t[r]=d:typeof t[r]=="object"?t[r]=d===t[r]?d:H(t[r],d):t[r]=W(!1,{},d);}else i==="function"&&(t=n(t,H));return t},H=(e,...t)=>{let n=Array.isArray(e);return W(n,n?e.slice():ke({},e),t)},K=H;function xe(e){var t=[];if(e.length===0)return "";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0];}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<e.length;i++){var r=e[i];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(i>0&&(r=r.replace(/^[\/]+/,"")),i<e.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),t.push(r));}var d=t.join("/");d=d.replace(/\/(\?|&|#[^!])/g,"$1");var o=d.split("?");return d=o.shift()+(o.length>0?"?":"")+o.join("&"),d}function x(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),xe(e)}function X(e){let t={crlf:!1,correct:!1,preset:"default",language:"liquid",endNewline:!1,indentChar:" ",indentLevel:0,indentSize:2,preserveLine:2,wrap:0,wrapFraction:0,liquid:{commentNewline:!1,commentIndent:!0,delimiterTrims:"preserve",delimiterPlacement:"preserve",forceFilter:0,forceArgument:0,ignoreTagList:[],indentAttribute:!1,lineBreakSeparator:"before",normalizeSpacing:!0,preserveComment:!1,preserveInternal:!1,dedentTagList:[],quoteConvert:"none"},markup:{attributeCasing:"preserve",attributeSort:!1,commentNewline:!1,commentIndent:!0,delimiterTerminus:"inline",forceAttribute:3,forceIndent:!1,ignoreCSS:!1,ignoreJS:!0,ignoreJSON:!1,lineBreakValue:"preserve",preserveComment:!1,preserveText:!1,preserveAttribute:!1,selfCloseSpace:!0,selfCloseSVG:!0,stripAttributeLines:!1,quoteConvert:"none"},json:{arrayFormat:"default",braceAllman:!1,bracePadding:!1,objectIndent:"default",objectSort:!1},style:{commentIndent:!1,commentNewline:!1,atRuleSpace:!0,classPadding:!1,noLeadZero:!1,preserveComment:!1,sortSelectors:!1,sortProperties:!1,quoteConvert:"none"},script:{arrayFormat:"default",braceNewline:!1,bracePadding:!1,braceStyle:"none",braceAllman:!1,caseSpace:!1,commentIndent:!1,commentNewline:!1,elseNewline:!1,endComma:"never",functionNameSpace:!1,functionSpace:!1,inlineReturn:!0,methodChain:4,neverFlatten:!1,noCaseIndent:!1,noSemicolon:!1,objectSort:!1,objectIndent:"default",preserveComment:!1,quoteConvert:"none",styleGuide:"none",ternaryLine:!1,variableList:!1,vertical:!1}},n={resolve:{origin:window.location.origin,path:"",mithril:!0,esthetic:!0},tabs:!1,monaco:{automaticLayout:!1,useShadowDOM:!1,multiCursorPaste:"full",experimentalWhitespaceRendering:"off",copyWithSyntaxHighlighting:!1,accessibilitySupport:"off",scrollbar:{verticalScrollbarSize:2},smoothScrolling:!0,minimap:{enabled:!1},padding:{top:25,bottom:200},renderWhitespace:"boundary",formatOnPaste:!1,scrollBeyondLastLine:!1,fontFamily:"consolas, monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"100",disableMonospaceOptimizations:!0,fontVariations:!0,fontSize:13.7,letterSpacing:.3,lineHeight:1.7,cursorBlinking:"blink",cursorStyle:"line-thin",cursorWidth:1,bracketPairColorization:{enabled:!1,independentColorPoolPerBracketType:!1}},preview:{enable:!0},offset:0,detect:!0,diff:!1,hash:!0,input:"",language:"liquid",sidebar:{enable:!0,width:75,actions:{rules:{active:!1,icon:"rules",tooltip:"Formatting Rules"},preview:{active:!1,icon:"pane",tooltip:"Toggle Preview"},link:{active:!1,icon:"link",tooltip:"Copy Link"},github:{active:!1,icon:"github",tooltip:"Submit Issue to Github"}}},footer:{enable:!1,height:35,actions:{detect:{active:!0,icon:"detect",tooltip:"Automatic Language Detection"},language:{active:!0,icon:"gears",tooltip:"Choose Language"},formatToggle:{active:!0,icon:"check",tooltip:"Toggle Formatting"}}},colors:{background:"#0f1215",backdrop:"#13171a",accents:"#e45589",borders:"#666666"}},i=Object.assign(n,K(n,e));return {hash:i.hash?"":null,path:x(i.resolve.origin,i.resolve.path),get config(){return i},language:{state:1,current:i.language||"auto",detect:i.detect},input:{width:-1,editor:null,model:null},preview:{width:-1,editor:null,mode:1,state:3,model:null},esthetic:{width:-1,editor:null,model:null,state:1,rules:t}}}var T,h;function Q(e){return C(this,null,function*(){if(e.config.resolve.esthetic===!0)try{T=(yield import(x(e.path,"modules/esthetic.js"))).default;}catch(t){throw new Error("Failed to import \xC6sthetic",t)}else if(typeof e.config.resolve.esthetic=="string")try{T=(yield import(e.config.resolve.esthetic)).default;}catch(t){throw new Error("Failed to import \xC6sthetic",t)}if(e.config.resolve.mithril===!0)try{yield import(x(e.path,"modules/mithril.js")),h=window.m;}catch(t){throw new Error("Failed to import Mithril",t)}else if(typeof e.config.resolve.mithril=="string")try{yield import(e.config.resolve.mithril),h=window.m;}catch(t){throw new Error("Failed to import Mithril",t)}})}var O=(e,t="24",n=t)=>h("svg",{width:t,height:n,viewBox:"0 0 24 24"},h.trust({jsx:'<circle cx="16" cy="15.974" r="2.5" style="fill:#00d8ff"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#00d8ff"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#00d8ff"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#00d8ff"/>',tsx:'<circle cx="16" cy="15.974" r="2.5" style="fill:#007acc"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#007acc"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#007acc"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#007acc"/>',text:'<path d="M22.038,2H6.375a1.755,1.755,0,0,0-1.75,1.75v24.5A1.755,1.755,0,0,0,6.375,30h19.25a1.755,1.755,0,0,0,1.75-1.75V6.856Zm.525,2.844,1.663,1.531H22.563ZM6.375,28.25V3.75H20.813V8.125h4.813V28.25Z" style="fill:#c2c2c2"/><rect x="8.125" y="15.097" width="13.076" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="24.439" width="9.762" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="19.763" width="15.75" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="10.23" width="15.75" height="1.75" style="fill:#829ec2"></path>',scss:'<path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style="fill:#cd6799"></path>',css:'<polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/></polygon><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"></polygon><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"></polygon><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"></polygon><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"></polygon><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"></polygon><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"></polygon>',html:'<polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/>',liquid:'<path d="M29.988,22.372l-.748.048a5.209,5.209,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.01A7.262,7.262,0,0,0,9.263,20.7a7.229,7.229,0,0,0-3.94,1.06,4.751,4.751,0,0,1-2.47.7l-.838,0c0,.889-.009,1.739-.015,2.515l.861,0a7.237,7.237,0,0,0,3.75-1.052,4.763,4.763,0,0,1,2.659-.7,4.835,4.835,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989L30,24.888C29.995,24.1,29.991,23.249,29.988,22.372Z" style="fill:#004999"></path><path d="M29.983,15.581l-.743.047a5.226,5.226,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.278,5.278,0,0,1-5.3.01A7.312,7.312,0,0,0,9.263,13.91a7.3,7.3,0,0,0-3.941,1.06,4.742,4.742,0,0,1-2.469.7l-.828,0c0,.849,0,1.693,0,2.515l.84,0a7.237,7.237,0,0,0,3.75-1.052,4.7,4.7,0,0,1,2.659-.7,4.8,4.8,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989l.568-.037C29.983,17.269,29.983,16.424,29.983,15.581Z" style="fill:#004999"></path><path d="M29.24,9.137a5.254,5.254,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.009A7.16,7.16,0,0,0,9.263,7.42a7.159,7.159,0,0,0-3.94,1.059,4.738,4.738,0,0,1-2.469.7l-.834,0c0,.82,0,1.664,0,2.517l.836,0a7.237,7.237,0,0,0,3.75-1.052,4.738,4.738,0,0,1,2.659-.706,4.814,4.814,0,0,1,2.634.719,7.791,7.791,0,0,0,7.8,0,5.293,5.293,0,0,1,5.319,0,7.732,7.732,0,0,0,4.4.988l.568-.037c0-.859,0-1.7.007-2.516Z" style="fill:#004999"></path>',markdown:'<rect x="2.5" y="7.955" width="27" height="16.091" style="fill:none;stroke:#755838"/><polygon points="5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636" style="fill:#755838"/><polygon points="22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636" style="fill:#755838"/>',javascript:'<path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style="fill:#f5de19"></path>',json:'<path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style="fill:#f5de19"/><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style="fill:#f5de19"/>',typescript:'<path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc"></path>',yaml:'<path d="M2,12.218c.755,0,1.51-.008,2.264,0l.053.038Q5.7,13.638,7.078,15.014c.891-.906,1.8-1.794,2.7-2.7.053-.052.11-.113.192-.1.608,0,1.215,0,1.823,0a1.4,1.4,0,0,1,.353.019c-.7.67-1.377,1.369-2.069,2.05L5.545,18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007,1.223-1.209,2.431-2.433,3.658-3.637C4.627,14.841,3.318,13.525,2,12.218Z" style="fill:#fbc02d"></path><path d="M12.7,12.218c.613,0,1.226,0,1.839,0q0,3.783,0,7.566c-.611,0-1.222.012-1.832-.008,0-1.664,0-3.329,0-4.994-1.6,1.607-3.209,3.2-4.811,4.8-.089.08-.166.217-.305.194-.824-.006-1.649,0-2.474,0Q8.916,16,12.7,12.218Z" style="fill:#fbc02d"></path><path d="M14.958,12.22c.47-.009.939,0,1.409,0,.836.853,1.69,1.689,2.536,2.532q1.268-1.267,2.539-2.532.7,0,1.4,0-.008,3.784,0,7.567c-.471,0-.943.006-1.414,0q.008-2.387,0-4.773c-.844.843-1.676,1.7-2.526,2.536-.856-.835-1.687-1.695-2.532-2.541,0,1.594-.006,3.188.006,4.781-.472,0-.943.005-1.415,0Q14.958,16,14.958,12.22Z" style="fill:#fbc02d"></path><path d="M23.259,12.217c.472,0,.944-.007,1.416,0q-.007,3.083,0,6.166c1.26,0,2.521,0,3.782,0,.063.006.144-.012.191.045.448.454.907.9,1.353,1.354q-3.371.007-6.741,0Q23.267,16,23.259,12.217Z" style="fill:#fbc02d"></path>',xml:'<path d="M20.42,21.157l2.211,2.211L30,16,22.631,8.631,20.42,10.843,25.58,16Z" style="fill:#f1662a"/><path d="M11.58,10.843,9.369,8.631,2,16l7.369,7.369,2.211-2.211L6.42,16Z" style="fill:#f1662a"/><path d="M17.411,7.677l1.6.437-4.42,16.209-1.6-.437,4.42-16.209Z" style="fill:#f1662a"/>'}[e])),_=(e,t="24")=>h("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"},h.trust({document:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',rules:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',pane:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',table:'<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="9.5" y2="6" /><line x1="4" y1="10" x2="9.5" y2="10" /><line x1="4" y1="14" x2="9.5" y2="14" /><line x1="4" y1="18" x2="9.5" y2="18" /><line x1="14.5" y1="6" x2="20" y2="6" /><line x1="14.5" y1="10" x2="20" y2="10" /><line x1="14.5" y1="14" x2="20" y2="14" /><line x1="14.5" y1="18" x2="20" y2="18" />',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',check:'<polyline points="20 6 9 17 4 12"></polyline>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',cross:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',gears:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',refresh:'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',detect:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',detectoff:'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>'}[e]));function ee(e){let t=document.documentElement.firstElementChild,n=Array.from(t.querySelectorAll("link")).map(({id:i})=>i);for(let i of ["monaco/monaco.css","moloko.css"]){let r=i.slice(0,-4);if(!n.includes(r)){let d=document.createElement("link");d.id=r,d.rel="stylesheet",d.type="text/css",d.href=x(e,i),t.appendChild(d);}}}function j(e){return e!==1}function N(e){let t=e.input.model.getValue(),n=T.format(t);e.preview.model.setValue(n);}function S(e,t=75){return (window.innerWidth-t)*(e/100)}function Te(e={}){let t=new URL("https://github.com/panoply/esthetic/issues/new"),n=["body","title","labels","template","milestone","assignee","projects"];for(let i of n){let r=e[i];if(r!==void 0){if(i==="labels"||i==="projects"){if(!Array.isArray(r))throw new TypeError(`The \`${i}\` option should be an array`);r=r.join(",");}t.searchParams.set(i,r);}}return t.toString()}var te=({attrs:e})=>{let t=Object.entries(e.config.sidebar.actions),n=()=>{e.language.state===3?(e.language.state=2,setTimeout(()=>{e.language.state=1,j(e.preview.state)?e.input.editor.layout({width:S(50,75),height:window.innerHeight}):e.input.editor.layout({width:S(100,75),height:window.innerHeight}),n();},300)):e.esthetic.state===3?(e.esthetic.state=2,setTimeout(()=>{e.esthetic.state=1,j(e.preview.state)?e.input.editor.layout({width:S(50,75),height:window.innerHeight}):e.input.editor.layout({width:S(100,75),height:window.innerHeight}),r="",h.redraw();},300)):e.esthetic.state===1&&(e.esthetic.state=3,e.input.editor.layout({width:S(100,675),height:window.innerHeight}),r="rules",h.redraw());},i=()=>{e.esthetic.state===3?(e.esthetic.state=2,setTimeout(()=>{e.esthetic.state=1,j(e.preview.state)?e.input.editor.layout({width:S(50,75),height:window.innerHeight}):e.input.editor.layout({width:S(100,75),height:window.innerHeight}),r="",i();},300)):e.language.state===3?(e.language.state=2,setTimeout(()=>{e.language.state=1,j(e.preview.state)?e.input.editor.layout({width:S(50,75),height:window.innerHeight}):e.input.editor.layout({width:S(100,75),height:window.innerHeight}),h.redraw();},300)):e.language.state===1&&(e.language.state=3,e.input.editor.layout({width:S(100,275),height:window.innerHeight}),h.redraw());},r;return {view:({attrs:d})=>[h('button.btn-language[type="button"]',{onclick:i},O(d.language.current)),t.map(([o,l])=>h('button.btn-action[type="button"][data-tooltip="right"]',{dataTooltip:"right",ariaLabel:l.tooltip,class:r===o?"active":"",onclick:()=>{console.log(o),o==="file"||o==="rules"?n():o==="preview"?(d.language.state===3?i():d.esthetic.state===3&&n(),d.preview.state===3?(d.preview.state=1,d.preview.editor.getContainerDomNode().style.display="none",d.input.editor.layout({width:S(100,75),height:window.innerHeight})):d.preview.state===1&&(d.preview.state=3,d.preview.editor.getContainerDomNode().style.display="",d.input.editor.layout({width:S(50,75),height:window.innerHeight}),N(d))):o==="github"&&window.open(Te({title:"",labels:[`${d.config.language}`],body:["<!-- DESCRIBE THE ISSUE -->","","","<!--","  DO NOT EDIT BELOW THIS LINE AS IT CONTAINS PLAYGROUND LINK","-->","",`[\xC6STHETIC PLAYGROUND](${window.location.href})`].join(`
`)}),"_blank");}},o==="preview"?j(d.preview.state)?_(l.icon):_("document"):_(l.icon)))]}};var Se=[{foreground:"888888",token:"comment"},{foreground:"FAFAFA",token:"delimiter"},{foreground:"FFF9A6",token:"string"},{foreground:"F48FB1",token:"constant.numeric"},{foreground:"ae81ff",token:"constant.language"},{foreground:"ae81ff",token:"constant.character"},{foreground:"ae81ff",token:"constant.other"},{foreground:"f92672",token:"keyword"},{foreground:"f92672",token:"storage"},{foreground:"66d9ef",fontStyle:"italic",token:"storage.type"}],qe=[{foreground:"FAFAFA",token:"delimiter.liquid"},{foreground:"E91E63",token:"delimiter.whitespace.liquid"},{foreground:"E91E63",token:"tag.liquid"},{foreground:"FF80F4",token:"boolean.liquid"},{foreground:"FFAB40",token:"keyword.parameter.liquid"},{foreground:"E91E63",token:"operator.liquid"},{foreground:"5CD7E0D5",token:"keyword.filter.liquid"},{foreground:"FAFAFA",token:"tag.output.liquid"},{foreground:"81D4FA",token:"keyword.object.liquid"}],Le=[{foreground:"FF93BC",token:"tag.html"},{foreground:"BECAFF",token:"delimiter.html"},{foreground:"FF93BC",token:"delimiter.equals.html"},{foreground:"91EBC2",token:"attribute.name.html"},{foreground:"FFF9A6",token:"attribute.value.html"}],Ae=[],De=[],Ce=[],je=[...Se,...qe,...Le,...Ae,...De,...Ce],ne={base:"vs-dark",inherit:!0,colors:{"editor.background":"#0f1215","editor.foreground":"#fafafa","editor.selectionBackground":"#253B76","editor.lineHighlightBackground":"#FFFFFF0F","editorCursor.foreground":"#FFFFFFA6","editorWhitespace.foreground":"#424242","editorHoverWidget.background":"#161616"},rules:je};var ie=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],oe={colorizedBracketPairs:[],wordPattern:/(-?\d*\.\d\w*)|([^`~!@$^&*()=+[{\]}\\|;:'",.<>/\s]+)/g,brackets:[["<!--","-->"],["<",">"],["{{","}}"],["{{-","-}}"],["{%","%}"],["{%-","-%}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"%",close:"%"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${ie.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:2}},{beforeText:new RegExp(`<(?!(?:${ie.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:1}}]},re={ignoreCase:!0,brackets:[{open:"{%",close:"%}",token:"delimiter.liquid"},{open:"{{",close:"}}",token:"delimiter.liquid"}],keywords:["render","layout","include","else","elsif","cycle","liquid","if","render","assign","capture","case","comment","increment","decrement","for","section","block","raw","tablerow","unless","schema","stylesheet","style","javascript","endif","endcapture","endcase","endblock","endcomment","endfor","endraw","endtablerow","endunless","endschema","endstylesheet","endstyle","endjavascript"],tokenizer:{root:[[/\s+/,""],[/^-{3}/,{token:"delimiter.liquid",next:"@Frontmatter",nextEmbedded:"yaml"}],[/{%-?\s*(?=\s*#)/,"comment.line.liquid","@LiquidLineComment"],[/{%-?\s*comment\s*-?%}/,"comment.liquid","@LiquidBlockComment"],[/({%)(-?\s*)(style)(\s*-?)(%})/,["delimiter.liquid","","tag.liquid","",{token:"delimiter.liquid",next:"@LiquidStyle",nextEmbedded:"css"}]],[/({%)(-?\s*)(stylesheet)(\s*-?)(%})/,["delimiter.liquid","","tag.liquid","",{token:"delimiter.liquid",next:"@LiquidStylesheet",nextEmbedded:"css"}]],[/({%)(-?\s*)(schema)(\s*-?)(%})/,["delimiter.liquid","","tag.liquid","",{token:"delimiter.liquid",next:"@LiquidSchema",nextEmbedded:"json"}]],[/({%)(-?\s*)(javascript)(\s*-?)(%})/,["delimiter.liquid","","tag.liquid","",{token:"delimiter.liquid",next:"@LiquidJavaScript",nextEmbedded:"javascript"}]],[/{%/,{token:"@rematch",next:"@LiquidTag"}],[/{{/,{token:"@rematch",next:"@LiquidOutput"}],[/<!--/,"comment.html","@HTMLComment"],[/<!DOCTYPE/,"metatag.html","@HTMLDocType"],[/(<)((?:[\w-]+:)?[\w-]+)(\s*)(\/>)/,["delimiter.html","tag.html","","delimiter.html"]],[/(<)(script)/,["delimiter.html",{token:"tag.html",next:"@HTMLTagScript"}]],[/(<)(style)/,["delimiter.html",{token:"tag.html",next:"@HTMLTagStyle"}]],[/(<)((?:[\w-]+:)?[\w-]+)/,["delimiter.html",{token:"tag.html",next:"@HTMLTag"}]],[/(<\/)((?:[\w-]+:)?[\w-]+)/,["delimiter.html",{token:"tag.html",next:"@HTMLTag"}]],[/</,"delimiter.html"],[/[^<]+/,""]],LiquidBlockComment:[[/{%-?\s*endcomment\s*-?%}/,"comment.end.liquid","@pop"],[/./,"comment.content.liquid"]],LiquidLineComment:[[/%}/,"comment.content.liquid","@pop"],[/./,"comment.content.liquid"]],Frontmatter:[[/\s+/,""],[/^-{3}$/,{token:"delimiter.liquid",next:"@pop",nextEmbedded:"@pop"}]],LiquidJavaScript:[[/\s+/,""],[/%}/,"delimiter.liquid","@pop"],[/{%-?\s*endjavascript\s*-?%}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],LiquidSchema:[[/\s+/,""],[/%}/,"delimiter.liquid","@pop"],[/{%-?\s*endschema\s*-?%}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],LiquidStyle:[[/\s+/,""],[/%}/,"delimiter.liquid","@pop"],[/{%-?\s*endstyle\s*-?%}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],LiquidStylesheet:[[/\s+/,""],[/%}/,"delimiter.liquid","@pop"],[/{%-?\s*endstylesheet\s*-?%}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],LiquidTag:[[/%}/,"delimiter.liquid","@pop"],{include:"expression"}],LiquidOutput:[[/}}/,"delimiter.liquid","@pop"],{include:"expression"}],LiquidSingleQuoteString:[[/'/,"string.liquid","@pop"],[/[^'\\]*(?:(?:\\.|#(?!\{))[^'\\]*)*/,"string.liquid"]],LiquidDoubleQuoteString:[[/"/,"string.liquid","@pop"],[/[^"\\]*(?:(?:\\.|#(?!\{))[^"\\]*)*/,"string.liquid"]],expression:[[/\s+/,""],[/([a-zA-Z_][a-zA-Z0-9_-]+)(\s*)(?=[[.])/,["keyword.object.liquid",""]],[/(\|)(\s*)(\w+)(:)/,["operator.liquid","","keyword.filter.liquid","operator.liquid"]],[/(\w+)(:)/,["keyword.parameter.liquid","operator.liquid"]],[/(\b(?:and|or|in|with|contains)\b)(\s+)/,["operator.liquid",""]],[/(\b(?:true|false|nil)\b)/,"boolean.liquid"],[/\+|-|\/{1,2}|\*{1,2}/,"operator.liquid"],[/==|!=|<|>|>=|<=|=/,"operator.liquid"],[/\||:|\.{1,2}/,"operator.liquid"],[/\d+(\.\d+)?/,"number.liquid"],[/\(|\)|\[|\]/,"delimiter.liquid"],[/[^\W\d][\w]*/,{cases:{"@keywords":"tag.liquid","@default":""}}],[/"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/,"string.liquid"],[/'/,"string.liquid","@LiquidSingleQuoteString"],[/"/,"string.liquid","@LiquidDoubleQuoteString"]],LiquidAttributeString:[[/\s*{{-?/,"delimiter.liquid","@LiquidOutput"],[/\s*{%-?/,"delimiter.output.liquid","@LiquidTag"],[/"/,"attribute.value.html","@pop"],[/./,"attribute.value.html"]],HTMLDocType:[[/[^>]+/,"metatag.content.html"],[/>/,"metatag.html","@pop"]],HTMLComment:[[/-->/,"comment.html","@pop"],[/[^-]+/,"comment.content.html"],[/./,"comment.content.html"]],HTMLTag:[[/\/?>/,"delimiter.html","@pop"],[/"/,"attribute.value.html","@LiquidAttributeString"],[/'([^']*)'/,"attribute.value.html"],[/[\w-]+/,"attribute.name.html"],[/=/,"delimiter.equals.html"],[/[ \t\r\n]+/,""]],HTMLTagScript:[[/type/,"attribute.name.html","@HTMLTagScriptType"],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/>/,{token:"delimiter.html",next:"@HTMLTagScriptEmbedded",nextEmbedded:"text/javascript"}],[/\s+/,""],[/(<\/)(script\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],HTMLTagScriptType:[[/=/,"delimiter.html","@HTMLTagScriptTypeEquals"],[/>/,{token:"delimiter.html",next:"@HTMLTagScriptEmbedded",nextEmbedded:"text/javascript"}],[/\s+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagScriptTypeEquals:[[/"([^"]*)"/,{token:"attribute.value.html",switchTo:"@HTMLTagScriptCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value.html",switchTo:"@HTMLTagScriptCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@HTMLTagScriptEmbedded",nextEmbedded:"text/javascript"}],[/\s+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagScriptCustomType:[[/>/,{token:"delimiter.html",next:"@HTMLTagScriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/\s+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagScriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],HTMLTagStyle:[[/type/,"attribute.name.html","@HTMLTagStyleType"],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/>/,{token:"delimiter.html",next:"@HTMLTagStyleEmbedded",nextEmbedded:"text/css"}],[/\s+/,""],[/(<\/)(style\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],HTMLTagStyleType:[[/=/,"delimiter.html","@HTMLTagStyleTypeEquals"],[/>/,{token:"delimiter.html",next:"@HTMLTagStyleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagStyleTypeEquals:[[/"([^"]*)"/,{token:"attribute.value.html",switchTo:"@HTMLTagStyleCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value.html",switchTo:"@HTMLTagStyleCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@HTMLTagStyleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagStyleCustomType:[[/>/,{token:"delimiter.html",next:"@HTMLTagStyleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/[ \t\r\n]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],HTMLTagStyleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}};var ae={$schema:"http://json-schema.org/draft-07/schema",properties:{wrap:{type:"number",default:0,markdownDescription:`Character width limit before applying word wrap. A \`0\` value disables this option.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrap/)
`},wrapFraction:{type:"number",default:0,markdownDescription:`Wrap fraction is used on internal structures as a secondary point of control. By default, it will use a 75% metric according to \`wrap\` defined values.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrapFraction/)
`},language:{enum:["auto","text","html","liquid","javascript","jsx","typescript","tsx","json","css","scss","less","xml"],default:"auto",markdownDescription:`The name of the language provided. This option can be omitted when using \xC6sthetic within text editors as languages are automatically assigned based on file.

\xC6sthetic supports parse, format and language detection capabilities for the following languages:

- [Liquid](https://shopify.github.io/liquid/)
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [SCSS](https://sass-lang.com)
- [JSON](https://en.wikipedia.org/wiki/JSON)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)
- [TypeScript](https://www.typescriptlang.org/)
- [JSX](https://facebook.github.io/jsx/)
- [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html)


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/language/)

`},indentSize:{type:"number",default:2,markdownDescription:"The number of `indentChar` values to comprise a single indentation. By default this is set to `2` meaning a single indentation will be 2 whitespace characters.\n\n**How to use Tabs?**\n\nIf you're heathen who prefers Tabs. You will need to set the `indentChar` to `\\t` and infer the size limit here.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentSize/)\n"},indentChar:{type:"string",default:" ",markdownDescription:"The string characters to comprise a single indentation. Any string combination is accepted. Generally speaking, you should leave this alone unless you know what you are doing.\n\nThe `indentSize` rule will use this character. For example, if you were to set `indentSize` to `4` then this character will be repeated 4 times, ie: `    ` - by default the `indentSize` is set to `2`.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentChar/)\n"},indentLevel:{type:"number",default:0,markdownDescription:`Controls how much indentation padding should be applied to beautification. This option is internally used for code that requires switching between libraries.

Avoid using this rule, it is highly unlikely you'll require it within your project.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/indentLevel/)
`},preserveLine:{type:"number",default:3,markdownDescription:`The maximum number of consecutive empty lines to retain (ie: preserve). By default, \`3\` newlines are preserved.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/preserveLine/)

`},endNewline:{type:"boolean",default:!1,markdownDescription:"Whether or not files should end with an empty newline. When this rule is `undefined` or omitted then \xC6sthetic will look for an `.editorconfig` file and use definitions inferred within.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/endNewline/)\n"},crlf:{type:"boolean",default:!1,markdownDescription:`If line termination should be Windows (CRLF) format. By default, Unix (LF) format is used. Setting this value to \`true\` will use CRLF.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/crlf)
`},preset:{enum:["default","recommended","warrington","strict","shopify"],default:"default",markdownDescription:`A preset ruleset style guide to use. This will assign rules according to a set of defaults to produce a certain beautification result. If this rule is \`undefined\` it will default to using \`default\` which is least obtrusive formatting style.

**Options**

**\`default\`** (required)

> This is the **default** and the most unobtrusive. Formatting will use a preservationist based technique with this preset mode.

**\`recommended\`**

> This style guide is typically suited for most cases, it will apply a base set of rules aligned with the \xC6sthetic approach.

**\`warrington\`**

> This style guide preset is best suited for developers and specifically teams working with Shopify themes. The preset was curated by the talented [David Warrington](https://ellodave.dev/).

**\`strict\`**

> This is a strict ruleset curated by the projects author [Panoply (sissel)](https://github.com/panoply).

**\`shopify\`** \u{1F921}

> Replicates the Prettier style of formatting. If you've used the Shopify Liquid Prettier Plugin and enjoy that beautification style using this preset will produce the same results.



[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/preset/)
`},liquid:{type:"object",additionalProperties:!1,markdownDescription:"Beautification rules applied to **Liquid**",properties:{delimiterTrims:{type:"string",enum:["preserve","tags","outputs","never","always","multiline"],default:"preserve",markdownDescription:`### Delimiter Trims

How delimiter whitespace trim dashes (\`{%-\`, \`-%}\`, \`{{-\` and \`-}}\`) should handled in Liquid tags and output object tokens. You should _maybe_ avoid setting this to \`force\` in order to avoid stripping whitespace in cases where text content contains Liquid.

> **NOTE**
>
> This rule will not touch Liquid tokens encapsulated within strings, ie: \`"{{ foo }}"\` or \`'{{ foo }}'\` are left intact.


**Options**

This is a Liquid specific formatting rule which defaults to using \`preserve\` when no option has been specified.

- preserve
- tags
- outputs
- never
- always
- multiline


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/delimiterTrims/)

`},delimiterPlacement:{type:"string",enum:["preserve","inline","consistent","force","force-multiline"],default:"none",markdownDescription:"Controls the placement of opening and closing Liquid tag delimiters (`{%`, `{{`, `}}` and `%}`). This rule provides 3 different formatting options and will ensure that delimiters are beautified in concordance. When the rule is `undefined` it will default to using `none`.\n\n**Options**\n\nThis is a Liquid specific formatting rule which defaults to using `preserve` when no option has been specified. The **recommended** option to use is `consistent` or `force-multiline`.\n\n- preserve\n- default\n- inline\n- consistent\n- force\n- force-multiline\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/delimiterPlacement/)\n\n"},commentIndent:{type:"boolean",default:!1,markdownDescription:`Applies single indentation to containing content of Liquid comments. Liquid line type comments are currently not supported by this rule. Only block type Liquid tokens will be handled.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/commentIndent/)

`},commentNewline:{type:"boolean",default:!1,markdownDescription:"Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/commentNewline/)\n"},forceArgument:{type:"number",default:0,markdownDescription:`Forces Liquid tag and filter argument expressions onto newlines according to the number of arguments present on the token. By default, this rule uses a value of \`0\` which will result in arguments being forced when the tag or output token containing them spans \xBE (or 75%) of defined global [\`wrap\`](https://\xE6sthetic.dev/rules/global/wrap) limit.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/forceArgument/)


`},forceFilter:{type:"number",default:0,markdownDescription:"Forces Liquid filter `|` expressions onto newlines when the number of filters contained on a tag exceeds the limit defined. By default, this rule uses a value of `0` which will result in Liquid filters being forced when the tag or output token containing them spans \xBE (or 75%) of defined global [`wrap`](https://\xE6sthetic.dev/rules/global/wrap) limit.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/forceFilter/)\n"},dedentTagList:{type:"array",default:[],markdownDescription:`A list of Liquid tags that should exclude standard indentation. Only tags which contain a start and end types are valid.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/dedentTagList/)
`,items:{type:"string",additionalItems:!0,uniqueItems:!0,not:{enum:["comment"]},enum:["form","paginate","capture","case","for","if","raw","tablerow","liquid","unless","schema","style","script","stylesheet","javascript"]}},ignoreTagList:{type:"array",default:[],markdownDescription:`A list of Liquid tags that should excluded from formatting. Only tags which contain a start and end types are valid.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/ignoreTagList/)
`,items:{type:"string",additionalItems:!0,uniqueItems:!0,not:{enum:["comment"]},enum:["form","paginate","capture","case","for","if","raw","tablerow","liquid","unless","schema","style","script","stylesheet","javascript"]}},indentAttribute:{default:!1,type:"boolean",markdownDescription:"Whether or not to apply indentation of HTML attributes within Liquid identified tag blocks contained in HTML Tags. This rule emulates the `liquid-prettier-plugin` structures with more refined controlling. This requires the `markup` rule `forceAttributes` be set to either `true` or have limit value (e.g: `2`) defined.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/indentAttribute/)\n"},lineBreakSeparator:{default:"after",type:"string",markdownDescription:`Controls the placement of Liquid separator type characters in new line structures. In situations where you write a multiline tag expression this rule can augment the order of leading operator characters such as the parameter comma \`,\` separator.

This rule will not break tag content on to new lines for you, it instead together with the inferred structure you've expressed. This means that you will need to manually new line the arguments.

### Options

This is a Liquid specific formatting rule which will default to \`after\` when no option has been specified.

- before
- after


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/lineBreakSeparator/)
`,enum:["before","after"]},normalizeSpacing:{default:!0,type:"boolean",markdownDescription:`Whether or not to normalize and correct the inner spacing of Liquid tokens. This rule will equally distribute whitespace characters contained within Liquid tags and output tokens. The rule will also inject spacing in accordance with common Liquid code structures.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/normalizeSpacing)
`},preserveComment:{type:"boolean",default:!1,markdownDescription:`Preserve the inner contents of Liquid block comments.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/preserveComment/)
`},preserveInternal:{type:"boolean",default:!1,markdownDescription:`Prevent the internals structures of Liquid tokens from being formatted. When enabled, \xC6sthetic will preserve the internal formations of output and tags.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/preserveInternal/)
`},quoteConvert:{default:"none",type:"string",markdownDescription:`How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/liquid/quoteConvert/)
`,enum:["none","double","single"]}}},markup:{type:"object",additionalProperties:!1,markdownDescription:`Beautification rules applied to the following markup languages:

- **HTML**
- **Liquid**
- **XML**
- **XHTML**`,properties:{attributeCasing:{type:"string",default:"preserve",markdownDescription:`How markup attribute names and value casing should be processed. This defaults to \`preserve\` which will leave casing intact and _typically_ the best option to use.

**Options**

This rule defaults to using \`preserve\` which will leave attribute names and values intact.

- preserve
- lowercase
- lowercase-name
- lowercase-value


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/attributeCasing/)
`,enum:["preserve","lowercase","lowercase-name","lowercase-value"]},attributeSort:{type:["boolean","array"],default:!1,oneOf:[{type:"array",items:{type:"string"}},{type:"boolean"}],markdownDescription:`Provides sorting of HTML and XML Attributes. When enabled (\`true\`) it will sort attributes in an alpha-numeric order. Sorting is ignored on tags which contain Liquid output and tag type tokens as attributes. The rule also accepts a list of attribute names and when provided will be sorted according to order passed.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/attributeSort/)
`},commentIndent:{type:"boolean",default:!1,markdownDescription:`Applies single indentation to containing content of HTML comments.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/commentIndent/)

`},commentNewline:{type:"boolean",default:!1,markdownDescription:`Inserts a new line above comment tags. When enabled the rule will add a newline even if \`preserveLine\` is set to \`0\`. The rule will not inject new lines when the previous expression is determined to already contain a new line.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/commentNewline/)

`},delimiterTerminus:{enum:["inline","force","adapt"],default:"inline",markdownDescription:"Whether or not ending HTML tag delimiters should be forced onto a newline. This will emulate the style of Prettier's `singleAttributePerLine` formatting option, wherein the last `>` delimiter character breaks itself onto a new line. Though this output style was popularized by Prettier, the resulting structures produced are far from elegant (aesthetically).\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/delimiterTerminus/)\n\n"},forceIndent:{type:"boolean",default:!1,markdownDescription:`Will force indentation upon all content and tags without regard for the text nodes. To some degree this rule emulates a result similar to that you'd expect in Prettier. Inline preservation is respected in cases where a Liquid output object token is encapsulated between text nodes. In such scenarios the text content will only force indent the start and end portions.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/forceIndent/)
`},forceAttribute:{type:["boolean","number"],default:!1,markdownDescription:"How or if markup attributes should be indented each onto their own line. You can optionally provide an integer value of `1` or more. When an integer value is passed, attributes will be forced only if the number of attributes contained on the tag exceeds the supplied value limit. When you define a `wrap` level then attributes will be automatically forced when limit is exceeded unless you've set this rule to `true` or provided an integer threshold.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/forceAttribute/)\n"},lineBreakValue:{enum:["preserve","align","indent","force-preserve","force-align","force-indent"],default:"preserve",markdownDescription:`Attribute value handling applied when values span multiple lines.

**Options**

- preserve
- align
- indent
- force-preserve
- force-align
- force-indent

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/lineBreakValue/)
`},ignoreJS:{type:"boolean",default:!1,markdownDescription:'Whether or not to format regions of code that are identified to be JavaScript. Tags such as `<script>` and `{% javascript %}` can contain JavaScript and by default beautification is applied using the `script` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\nWhen enabled (ie: `true`) the entire `<script>` region is excluded including indentation levels. If the `<script>` tag is being used to link an external file (eg: `<script src="/path/fle.js"><\/script>`) and no code is detected between the opening and closing tags then formatting will be applied in accordance with defined rules pertaining to markup.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreJS)\n'},ignoreJSON:{type:"boolean",default:!1,markdownDescription:'Whether or not to format regions of code that are identified to be JSON. Such tags are typically identified using attribute annotations like `<script type="application/json">`. By default, beautification is applied using the `json` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreJSON/)\n'},ignoreCSS:{type:"boolean",default:!1,markdownDescription:"Whether or not to format regions of code that are identified to be CSS. Tags such as `<style>` and `{% style %}` can contain CSS and by default beautification is applied using the `style` rules. When ignored (ie: `true`) \xC6sthetic will not apply formatting to these regions.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/ignoreCSS/)\n"},preserveText:{type:"boolean",default:!0,markdownDescription:`If text in the provided markup code should be preserved exactly as provided. This option eliminates beautification and wrapping of text content.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveText/)
`},selfCloseSpace:{type:"boolean",default:!1,markdownDescription:"Whether markup self-closing (void) tags should apply a single space to ending portion of the delimiter which  results in the tag output to produce `' />'` instead of `'/>'`.\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/selfCloseSpace/)\n"},selfCloseSVG:{type:"boolean",default:!1,markdownDescription:`Whether or not SVG type tags should be converted to self closing void  types. When enabled, tags which contain a closing tag will instead become void type.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/selfCloseSVG/)
`},stripAttributeLines:{type:"boolean",default:!1,markdownDescription:"Whether or not newlines contained within tag attributes or preserved. This rule will be used along side the `forceAttribute` rule and when enabled (`true`) will strip newlines contained in HTML attributes. When disabled (`false`) then newlines will be preserved according to the **global** `preserveLine` limit defined.\n\nThis rule wil only take effect when `forceAttribute` is enabled (ie: `true`) or the `forceAttribute` limit has been exceeded as per the provided value. In addition to `forceAttribute`, the global `preserveLine` rule value is used to determine the amount of lines allowed.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/stripAttributeLines/)\n"},preserveComment:{type:"boolean",default:!1,markdownDescription:`Preserve the inner contents of HTML comments.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveComment/)
`},preserveAttribute:{type:"boolean",default:!1,markdownDescription:`Whether or not markup tags should have their insides preserved, ie: attributes. This option is only available to markup and does not support child tokens that require a different lexer. When enabled, this rule will run precedence and override all attribute related rules.

If you're working with a JavaScript framework that implements a data-attribute development based architecture (like Alpine or Angular) which requires a build-step then this rule _might_ help prevent \xC6sthetic augmenting code or failing when it encounters otherwise invalid structures not supported or recognized by official markup based language specifications.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/preserveAttribute/)`},quoteConvert:{default:"none",type:"string",markdownDescription:`How quotation characters of markup attributes and Liquid tokens should be handled. Allows for conversion to single quotes or double quotes. Markup tag attributes should always use double quotations, it's the standard in languages like HTML.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/markup/quoteConvert/)
`,enum:["none","double","single"]},delimiterTrims:{deprecationMessage:`DEPRECATED

You can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.


NEW SETTINGS AS OF v3.4^

{
  "liquid": {
    "delimiterTrims": "preserve",
    "lineBreakSeparator": "default",
    "normalizeSpacing": true,
    "valueForce": "intent"
  },
  "markup: {}
}
`},lineBreakSeparator:{deprecationMessage:`DEPRECATED

You can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.


NEW SETTINGS AS OF v3.4^

{
  "liquid": {
    "delimiterTrims": "preserve",
    "lineBreakSeparator": "default",
    "normalizeSpacing": true,
    "valueForce": "intent"
  },
  "markup: {}
}
`},normalizeSpacing:{deprecationMessage:`DEPRECATED

You can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.


NEW SETTINGS AS OF v3.4^

{
  "liquid": {
    "delimiterTrims": "preserve",
    "lineBreakSeparator": "default",
    "normalizeSpacing": true,
    "valueForce": "intent"
  },
  "markup: {}
}
`},valueForce:{deprecationMessage:`DEPRECATED

You can no longer define Liquid beautification rules within "markup". Move this rule to the new "liquid" specific property.


NEW SETTINGS AS OF v3.4^

{
  "liquid": {
    "delimiterTrims": "preserve",
    "lineBreakSeparator": "default",
    "normalizeSpacing": true,
    "valueForce": "intent"
  },
  "markup: {}
}
`}}},script:{type:"object",markdownDescription:`Beautification rules for the following _script_ languages:

- **JavaScript**
- **TypeScript**

 Options provided here will also be applied to following markup embedded language blocks.`,properties:{braceAllman:{type:"boolean",default:!1,title:"Style of Indent",markdownDescription:"Determines if opening curly braces will exist on the same line as their condition or be forced onto a new line. (Allman style indentation)"},braceNewline:{type:"boolean",default:!1,title:"Brace Lines",markdownDescription:"If true an empty line will be inserted after opening curly braces and before closing curly braces"},bracePadding:{type:"boolean",default:!1,title:"Brace Padding",markdownDescription:"Inserts a space after the start of a container and before the end of the container if the contents of that container are not indented; such as: conditions, function arguments, and escaped sequences of template strings"},commentIndent:{type:"boolean",default:!1,markdownDescription:`Whether or not to indent the containing content of comment blocks.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)`},commentNewline:{type:"boolean",default:!1,markdownDescription:"Inserts a new line above comment tags. When enabled the rule will add a newline even if `preserveLine` is set to `0`. The rule will not inject new lines when the previous expression is determined to already contain a new line.\n\n\n[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/commentNewline/)\n"},caseSpace:{type:"boolean",default:!1,title:"Space Following Case",markdownDescription:"If the colon separating a case's expression (of a switch/case block) from its statement should be followed by a space instead of indentation, thereby keeping the case on a single line of code"},elseNewline:{type:"boolean",default:!1,title:"Else On New Line",markdownDescription:"If else_line is true then the keyword 'else' is forced onto a new line."},endComma:{type:"string",default:"none",title:"Trailing Comma",markdownDescription:"If there should be a trailing comma in arrays and objects",enum:["none","never","always"]},arrayFormat:{type:"string",default:"default",markdownDescription:`**_ARRAY FORMAT_**

_Determines if all array indexes should be indented, never indented, or left to the default. The \`default\` option will leave array indexes intact and not apply any formatting._

---
#### \`inline\`&nbsp;&nbsp;&nbsp;\u{1F44E}
Ensure all array indexes appear on a single line
\`\`\`json

{
  "object": [1,2,3,4]
}

\`\`\`
---
#### \`indent\`&nbsp;&nbsp;&nbsp;\u{1F44D}
Always indent each index of an array

\`\`\`json

{
  "object": [
    1,
    2,
    3,
    4
  ]
}

\`\`\``,enum:["default","indent","inline"]},objectIndent:{type:"string",default:"default",title:"Formatting Arrays",markdownDescription:"Determines if all object keys should be indented, never indented, or left to the default",enum:["default","indent","inline"]},functionNameSpace:{type:"boolean",default:!1,title:"Space After Function Name",markdownDescription:"If a space should follow a JavaScript function name"},methodChain:{type:"number",default:3,markdownDescription:`**_METHOD CHAINING_**

_When to break consecutively chained methods and properties onto separate lines. A negative value (eg: \`-1\`) disables this option. A value of \`0\` ensures method chains are never broken_

---
#### \`0\`
Passing a value of \`0\` will never break chained methods.
\`\`\`js

window.property.method(() => {}).foo(() => {})


\`\`\`

---

#### \`3\` (default)
When there are more than \`3\` methods and/or properties they will be split onto separate lines.
\`\`\`js

window
  .property
  .method(() => {})
  .foo(() => {})


\`\`\``},neverFlatten:{type:"boolean",default:!1,title:"Never Flatten Destructured Lists",markdownDescription:"If destructured lists in script should never be flattend"},noCaseIndent:{type:"boolean",default:!1,title:"Case Indentation",markdownDescription:"If a case statement should receive the same indentation as the containing switch block."},noSemicolon:{type:"boolean",default:!1,title:"No Semicolons",markdownDescription:"Removes semicolons that would be inserted by ASI. This option is in conflict with option 'correct' and takes precedence over conflicting features. Use of this option is a possible security/stability risk"},objectSort:{type:"boolean",default:!1,markdownDescription:`**_OBJECT SORT_**

_This option will alphabetically sort object properties (keys). This can be an expensive operation when dealing with large objects with over 2k properties._

---
#### Disabled&nbsp;&nbsp;&nbsp;\u{1F44D}
When disabled, ie: \`false\` properties will not be sorted.
\`\`\`js

{
  e: "5",
  b: "2",
  d: "4",
  a: "1",
  f: "6",
  c: "3"
}


\`\`\`

---

#### Enabled&nbsp;&nbsp;&nbsp;\u{1F44E}
When set to \`true\` all properties are alphanumerically sorted
\`\`\`js

{
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6"
}


\`\`\``},preserveComment:{type:"boolean",default:!1,markdownDescription:`Preserve the inner contents of comments and do not apply indentation.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)`},quoteConvert:{default:"none",title:"Convert Quotes",markdownDescription:"If the quotes of script strings or document attributes should be converted to single quotes or double quotes",type:"string",enum:["double","single","none"]},functionSpace:{type:"boolean",default:!1,title:"Function Space",markdownDescription:"Inserts a space following the function keyword for anonymous functions"},ternaryLine:{type:"boolean",default:!1,title:"Keep Ternary Statements On One Line",markdownDescription:"If ternary operators in JavaScript ? and : should remain on the same line"},variableList:{type:"boolean",default:!1,title:"Variable Declaration Lists",markdownDescription:"If consecutive JavaScript variables should be merged into a comma separated list or if variables in a list should be separated"},vertical:{type:"boolean",default:!1,markdownDescription:`**_VERTICAL LIST_**

_If consecutive JavaScript variables should be merged into a comma separated list or if variables in a list should be separated_

---
#### Before Formatting
Below is an example of how this rule works if it's enabled, ie: \`true\`
\`\`\`js

const object = {
  someProperty: 'x',
  anotherProperty: 'x',
  fooProperty: 'x'
};


\`\`\`

---

#### After Formatting
After formatting all declaration lists will be aligned in a vertical manner.
\`\`\`js

const object = {
  someProperty    : 'x',
  anotherProperty : 'x',
  fooProperty     : 'x'
};


\`\`\``}}},style:{type:"object",additionalProperties:!1,markdownDescription:`Beautification rules for the following _style_ languages:

- **CSS**
- **SCSS**
- **
- **SASS**
- **LESS**

. Options provided here will also be applied to the following markup embedded language blocks.`,properties:{atRuleSpace:{type:"boolean",default:!1,markdownDescription:`Insert a single whitespace character between \`@\`prefixed rule types.


[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/global/wrapFraction/)`},commentNewline:{type:"boolean",default:!1,markdownDescription:"This will determine whether comments should always start at position `0` of each line or if comments should be indented according to the code."},commentIndent:{type:"boolean",default:!1,markdownDescription:`Whether or not to indent the containing content of comment blocks.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)`},correct:{type:"boolean",default:!1,markdownDescription:`**Default** \`false\` \u{1F481}\u{1F3FD}\u200D\u2640\uFE0F &nbsp;&nbsp; Recommended setting is: \`false\`

Automatically correct some sloppiness in style languages and allows \xC6sthetic to reason with intended structures. The option acts as a very mild form of linting, wherein invalid or language specification preferred code will attempt to be corrected in the least obtrusive manner possible with respect to language standards. Enabling this rule is not going to produce miracles and for the most part will have little effect overall but can help in some situations.


> This rule is still experimental and will be both improved and refined in future versions.

#

---

#### Applied Corrections

Below is a list of current applied corrections supported when the rule is enabled, (ie: \`true\`). The comments in the example below will inform upon corrections that the rule will apply to code where necessary.

\`\`\`css

/* Semicolon will be added when missing */
.class {
  font-weight: 200
}


\`\`\`

`},sortSelectors:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`false\`

#### Sort Selectors


This option will alphabetically sort class selectors. This can be an expensive operation when dealing with large CSS files with over 2k selectors present. Below is an example of this rule when it is enabled (ie: \`true\`).

#

---

#### Before Formatting

_Take the following CSS class selectors which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._

\`\`\`css

.c-class,
.b-class,
.a-class {
  width: 100px;
  color: blue;
  font-size: 20px;
  background: pink
}


\`\`\`

#### After Formatting

_Using the above **before** formatting example, class selectors **after** formatting are alphabetically (A-Z) sorted._

\`\`\`css

.a-class,
.b-class,
.c-class {
  width: 100px;
  color: blue;
  font-size: 20px;
  background: pink
}


\`\`\`
`},sortProperties:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`true\`

#### Sort Properties

This option will alphabetically sort class properties. This can be an expensive operation when dealing with large CSS files with over 5k properties. Below is an example of this rule when it is enabled (ie: \`true\`) which is the **recommended** setting.

#

---

#### Before Formatting

_Take the following CSS class when containing properties which are not sorted in any particular order. When this rule is enabled, then sorting order will change as per below **after** formatting example._

\`\`\`css

.class {
  width: 100px;
  color: blue;
  font-size: 20px;
  background: pink
}


\`\`\`

#### After Formatting

_Using the above **before** formatting example, all class properties **after** formatting have now been alphabetically (A-Z) sorted._

\`\`\`css

.class {
  color: blue;
  background: pink;
  font-size: 20px;
  width: 100px;
}


\`\`\`
`},classPadding:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`true\`

#### Class Padding

This rules will insert a new line between class selectors. If you've set \`preserveLine\` to \`0\` then the rule will run precedence (override) and ensure new line separation is applied (top down) for each class selector expressed.

#### Note

This rule is typically a matter of preference and widely adopted structural pattern when it comes to CSS class selectors. If you're infusing CSS together with Liquid then it is **highly recommended** that you enable this rule.

#

---

#### \u{1F44D} &nbsp;&nbsp; Enabled

_This is an example when this rule is enabled (ie: \`true\`). Notice how **before** formatting each class selector immediately proceeds the last closing brace \`}\` character, whereas **after** formatting the selector class names have a new line inserted. When this rule is disabled, \xC6sthetic will not assert a break as per the **disabled** example below._

\`\`\`css

/* Before Formatting */

.class {
  color: #111;
}
.class-2 {
  background: pink;
}
.class-3 {
  font-size: 12px;
}

/* After Formatting */

.class {
  color: #111;
}

.class-2 {
  background: pink;
}

.class-3 {
  font-size: 12px;
}


\`\`\`

---


#### \u{1F44E} \u{1F44E} &nbsp;&nbsp; Disabled

_Below is an example when this option is disabled (ie: \`false\`) which is the default setting. Though the recommendation is to enable this rule, \xC6sthetic does not assume intent and instead assumes new line breaks in accordance with the \`preserveLine\` value you've set. In the below example there no difference **before** and **after** formatting, the code structure is respected and no new lines are added._

\`\`\`css

/* Before Formatting */

.class {
  color: #111;
}
.class-2 {
  background: pink;
}
.class-3 {
  font-size: 12px;
}

/* After Formatting */

.class {
  color: #111;
}
.class-2 {
  background: pink;
}
.class-3 {
  font-size: 12px;
}


\`\`\`
`},noLeadZero:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`false\`

#### No Lead Zero

Whether leading 0s in CSS values immediately preceding a decimal should be removed or prevented. The below example show how the rule works when enabled (ie: \`true\`). Keep in mind that this rule is disabled (ie: \`false\`) by **default**.

#

---

#### Before Formatting

_Take the following \`font-size\` and \`transition\` values which are inferring a \`0\` point decimal numbers. Notice how the values are targeting a size less than 1 and using a leading 0 decimal point to assert this. In the **after** formatting example below, the 0s will be stripped._

\`\`\`css

.class {
  font-size: 0.995rem;
  transition: all 0.5s ease-out;
}


\`\`\`

#### After Formatting

_Using the above **before** formatting example, both numeric values of \`font-size\` and \`transition\` have removed the leading \`0\` number from the decimal point, resulting in the following:_

\`\`\`css

.class {
  font-size: .995rem;
  transition: all .5s ease-out;
}


\`\`\`
`},preserveComment:{type:"boolean",default:!1,markdownDescription:`Preserve the inner contents of comments and do not apply indentation.

[\xC6sthetic Documentation](https://\xE6sthetic.dev/rules/style/preserveComment/)`},quoteConvert:{default:"none",markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`none\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`double\`

#### Quote Convert

How quotation characters within style languages should be handled. Allows for conversion to single quotes or double quotes for code which requires strings expressions.

#

---

#### \u{1F44E} &nbsp;&nbsp; \`none\`

_Below is an example of how this rule works if set to \`none\` which is the **default** setting. No conversion of quotations is applied when using \`none\` as per the **before** and **after** examples_

\`\`\`css

/* Before Formatting*/
.class-1 {
  background-image: url("example"); /* double quotations */
}

.class-2 {
  background-image: url('example'); /* single quotations */
}

/* After Formatting*/

.class-1 {
  background-image: url("example"); /* No changes applied */
}

.class-2 {
  background-image: url('example'); /* No changes applied* /
}


\`\`\`

---

#### \u{1F44D} \u{1F44D} &nbsp;&nbsp; \`double\`

_Below is an example of how this rule works if set to \`double\` which will go about converting and ensuring all style language quotations and using doubles._


\`\`\`css

/* Before Formatting*/
.class-1 {
  background-image: url('example'); /* single quotations */
}

/* After Formatting*/

.class-1 {
  background-image: url("example"); /* double quotation conversion */
}


\`\`\`

---

#### \u{1F44D} &nbsp;&nbsp; \`single\`


_Below is an example of how this rule works if set to \`single\` which will go about converting and ensuring all style language quotations and using singles._


\`\`\`css

/* Before Formatting*/
.class-1 {
  background-image: url("example"); /* double quotations */
}

/* After Formatting*/

.class-1 {
  background-image: url('example'); /* single quotation conversion */
}


\`\`\`

`,type:"string",enum:["none","double","single"]}}},json:{type:"object",additionalProperties:!1,markdownDescription:"Beautification rules for the **JSON** language. Options provided here will also be applied to markup embedded language blocks.",properties:{arrayFormat:{type:"string",default:"default",markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`default\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`indent\`

#### Array Format

The \`arrayFormat\` rule controls how arrays on objects are formatted. This rule will determine if all array indexes should be indented, never indented, or left to the default.

#

---


#### \u{1F44E} &nbsp;&nbsp; \`default\`

_Setting the rule to \`default\` will leave array indexes intact and format according to the provided input style._

\`\`\`json

{
  "array": [ 1, 2,
    3,
    4,
    5 ]
}


\`\`\`

---

#### \u{1F44D} \u{1F44D} &nbsp;&nbsp; \`indent\`

_Setting the rule to use \`indent\` is the recommended beautification option. This will ensure array indexes always appear on their own line._

\`\`\`json

{
  "array": [
    1,
    2,
    3,
    4,
    5
  ]
}


\`\`\`

---

#### \u{1F44E} &nbsp;&nbsp; \`inline\`

_Setting the rule to use \`inline\` will output all indexes on the same line._

\`\`\`json

{
  "array": [ 1, 2, 3, 4, 5 ]
}


\`\`\`
`,enum:["default","indent","inline"]},braceAllman:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`true\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`true\`

#### Brace Allman

The \`braceAllman\` rule puts JSON braces onto new lines, producing an [Allman Style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) output.


#

---


#### \u{1F44D} &nbsp;&nbsp; Enabled

_Below is an example of the formatting style applied when this rule is enabled (ie: \`true\`) which is the **default** setting. Notice how all braces and placed onto new lines._

\`\`\`json

[
  {
    "prop": "value"
  },
  {
    "prop": "value"
  },
  {
    "prop": "value"
  }
]


\`\`\`

---


#### \u{1F44E} &nbsp;&nbsp; Disabled

_Below is an example of the formatting style applied this rule when it is disabled (ie: \`false\`). Notice how JSON object braces as inlined. It is typically best to keep this rule enabled when working with JSON for readability purposes._

\`\`\`json

[
  { "prop": "value" },
  { "prop": "value" },
  { "prop": "value" }
]


\`\`\`

`},bracePadding:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`true\`

#### Brace Padding

Applies padding between braces. This rule will have no effect when \`braceAllman\` is enabled (ie: \`true\`). When enabled, the rule will instead single whitespace characters at the start and end point of brace delimiters.

#

---


#### \u{1F44E} &nbsp;&nbsp; Disabled

\`\`\`json

[
  {"prop": "value"},
  {"prop": "value"},
  {"prop": "value"}
]


\`\`\`

---

#### \u{1F44D} &nbsp;&nbsp; Enabled

\`\`\`json

[
  { "prop": "value" },
  { "prop": "value" },
  { "prop": "value" }
]


\`\`\`
`},objectIndent:{type:"string",default:"default",markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`default\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`indent\`

#### Object Indent

The \`objectSort\` rule will control how object keys should be handled. You can apply indented, never indented, or left to the default. Typically, you will want to leave this option to the default to prevent unreadable objects.

#

---


#### \u{1F44D} &nbsp;&nbsp; \`indent\`

\`\`\`json

{
  "foo": {
    "bar": {
      "bax": true
    }
  }
}


\`\`\`

---

#### \u{1F44E}  &nbsp;&nbsp; \`default\`

\`\`\`json

{
  "foo": {
    "bar": { "bax": true }
  }
}


\`\`\`

---

#### \u{1F44E}  &nbsp;&nbsp; \`inline\`

\`\`\`json

{
  "foo": { "bar": { "bax": true } }
}


\`\`\`
`,enum:["default","indent","inline"]},objectSort:{type:"boolean",default:!1,markdownDescription:`&nbsp;\u2699\uFE0F&nbsp;&nbsp;&nbsp;**Default** \`false\`

&nbsp;\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F&nbsp;&nbsp;&nbsp;Recommended setting is \`false\`

#### Object Sort

The \`objectSort\` rule will alphanumerically sort object properties. This rule is typically a matter of preference and it's maybe a good idea to skip sorting object property keys.

#

---


#### Before Formatting

*Take the following code example, where object properties (keys) and sorted in a non specific manner. The order of each property will change **after** formatting has been applied, sorting object properties in an alphanumerically (A-Z ~ 0-9) manner.*

\`\`\`json

{
  "e": "5",
  "b": "2",
  "d": "4",
  "a": "1",
  "f": "6",
  "c": "3"
}


\`\`\`

#### After Formatting

*Using the above code example, notice how all properties on the JSON object have been sorted alphanumerically (A-Z).*

\`\`\`json

{
  "a": "1",
  "b": "2",
  "c": "3",
  "d": "4",
  "e": "5",
  "f": "6"
}


\`\`\`
`}}}}};var se=`
{% liquid

  assign sample = false

  if page.url == '/'
    assign is_open = 'false'
    assign hidden = 'false'
    assign active = ''
  else
    assign is_open = 'true'
    assign hidden = 'true'
    assign active = 'drawer-active'
  endif

  assign in_rules = false

  if page.url contains '/rules'
    unless page.url contains '/usage'
      assign in_rules = true
    endunless
  endif
%}

{% # comment %}

{% comment %}

  Hello

{% endcomment%}

{{
  object.prop['value'][0].prop
  | filter: 100
  | filter: 'string'
  | filter: true
  | filter: t: 'foo'
}}


<header class="container-fluid navbar bb">
<div id="navbar" class="row ai-center bg-white w-100 pr-0">
  <a
    href="/"
    class="col-auto italic fc-white fs-lg pl-4 pr-0"
    style="font-weight: 800;">
    \xC6STHETIC
  </a>
  <small class="col-auto pl-0">
    <strong class="col-auto fs-sm mr-5">
      0.1.0
    </strong>
  </small>

  {% #  %}

  {% render 'snippet'
    , param: 'string'
    , boolean: false
    , number: 100 %}

  {% style %}
    .class {
      font-size: 100px; /* comment */
    }
  {% endstyle %}

  {% schema %}
    {
      "foo": "bar"
    }
  {% endschema %}

  {% for link in link.title %}
    <a
      href="{{ link.url }}"
      title="{{ link.title }}"
      class="col-auto fw-bolder {% unless forloop.index == active %}off{% endunless %}">
      {{ link.title | filter: 'foo' }}
    </a>
  {% endfor %}

  <a href="https://github.com/panoply/esthetic" class="col-auto ml-auto pr-0">
    {{ object.prop['value'][0].prop | filter: 100 | filter: 'string' | filter: true | filter: t: 'foo' }}
  </a>
</div>
</header>
`;var g;function le(e){return C(this,null,function*(){ee(e),g=yield import(x(e,"monaco/monaco.js")),g.editor.defineTheme("potion",ne),g.editor.setTheme("potion"),g.languages.setMonarchTokensProvider("liquid",re),g.languages.setLanguageConfiguration("liquid",oe),g.languages.html.registerHTMLLanguageService("liquid"),g.languages.register({id:"liquid",extensions:[".liquid"],aliases:["Liquid","liquid"],mimetypes:["text/liquid"]}),self.MonacoEnvironment={getWorkerUrl:(t,n)=>{switch(n){case"json":return x(e,"monaco/workers","json.js");case"css":case"scss":case"less":return x(e,"monaco/workers","css.js");case"html":case"xml":case"liquid":return x(e,"monaco/workers","html.js");case"javascript":case"typescript":case"jsx":case"tsx":return x(e,"monaco/workers","typescript.js");default:return x(e,"monaco/workers","editor.js")}}};})}function E(e,t=se){return g.editor.createModel(t,e)}function z(e,t){let n;return t?n=JSON.stringify(t,null,2):n=JSON.stringify({crlf:!1,correct:!1,preset:"default",language:e,endNewline:!1,indentChar:" ",indentLevel:0,indentSize:2,preserveLine:2,wrap:0,wrapFraction:0,liquid:{commentNewline:!1,commentIndent:!0,delimiterTrims:"preserve",delimiterPlacement:"preserve",forceFilter:0,forceArgument:0,ignoreTagList:[],indentAttribute:!1,lineBreakSeparator:"before",normalizeSpacing:!0,preserveComment:!1,preserveInternal:!1,dedentTagList:[],quoteConvert:"none"},markup:{attributeCasing:"preserve",attributeSort:!1,commentNewline:!1,commentIndent:!0,delimiterTerminus:"inline",forceAttribute:3,forceIndent:!1,ignoreCSS:!1,ignoreJS:!0,ignoreJSON:!1,lineBreakValue:"preserve",preserveComment:!1,preserveText:!1,preserveAttribute:!1,selfCloseSpace:!0,selfCloseSVG:!0,stripAttributeLines:!1,quoteConvert:"none"},json:{arrayFormat:"default",braceAllman:!1,bracePadding:!1,objectIndent:"default",objectSort:!1},style:{commentIndent:!1,commentNewline:!1,atRuleSpace:!0,classPadding:!1,noLeadZero:!1,preserveComment:!1,sortSelectors:!1,sortProperties:!1,quoteConvert:"none",correct:!1},script:{arrayFormat:"default",braceNewline:!1,bracePadding:!1,braceStyle:"none",braceAllman:!1,caseSpace:!1,commentIndent:!1,commentNewline:!1,elseNewline:!1,endComma:"never",functionNameSpace:!1,functionSpace:!1,inlineReturn:!0,methodChain:4,neverFlatten:!1,noCaseIndent:!1,noSemicolon:!1,objectSort:!1,objectIndent:"default",preserveComment:!1,quoteConvert:"none",styleGuide:"none",ternaryLine:!1,variableList:!0,vertical:!1}},null,2),g.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,enableSchemaRequest:!0,schemas:[{uri:"http://myserver/foo-schema.json",fileMatch:["*"],schema:ae}]}),g.editor.createModel(n,"json")}var de=({attrs:e})=>{let t=Object.assign({},e.config.monaco);return t.model=e.input.model,g.languages.registerDocumentRangeFormattingEditProvider({language:e.input.model.getLanguageId()},{provideDocumentRangeFormattingEdits:n=>[{text:T.format(n.getValue()),range:n.getFullModelRange()}]}),e.input.model.onDidChangeContent(()=>{e.preview.state===3?(N(e),e.hash!==null&&M(e)):e.hash!==null&&M(e);}),{oncreate:({dom:n})=>{e.input.editor=g.editor.create(n,t),e.input.editor.addCommand(g.KeyMod.CtrlCmd|g.KeyCode.KeyS,()=>{e.input.editor.trigger("editor","editor.action.formatDocument",null);});},view:()=>h("div",{style:{height:"100%"}})}};var Z={oncreate:({dom:e,attrs:t})=>{let n=Object.assign({},t.config.monaco);n.model=t.preview.model,n.lineNumbers="off",n.readOnly=!0,n.renderLineHighlight="none",n.cursorStyle="line-thin",t.preview.editor=g.editor.create(e,n),t.input.editor.onDidScrollChange(({scrollLeft:i,scrollTop:r})=>{t.preview.editor.setScrollPosition({scrollLeft:i,scrollTop:r},0);});},onremove:({attrs:e})=>{e.preview.editor.dispose();},view:()=>h("div",{style:{height:"100%"}})};function ce(e,t){let n=Object.assign({},t.config.monaco);return n.model=t.esthetic.model,n.automaticLayout=!1,g.languages.registerDocumentRangeFormattingEditProvider({language:"json"},{provideDocumentRangeFormattingEdits:i=>[{text:T.json(i.getValue()),range:i.getFullModelRange()}]}),{mount:()=>{t.esthetic.editor=g.editor.create(e,n),t.esthetic.editor.addCommand(g.KeyMod.CtrlCmd|g.KeyCode.KeyS,()=>{T.rules(JSON.parse(t.esthetic.model.getValue())),t.esthetic.editor.trigger("editor","editor.action.formatDocument",null),t.input.editor.trigger("editor","editor.action.formatDocument",null);});},unmount:()=>{t.esthetic.editor.dispose();}}}var J=({attrs:e})=>{let t=Object.assign({},e.config.monaco);t.model=e.esthetic.model,t.automaticLayout=!1,g.languages.registerDocumentRangeFormattingEditProvider({language:e.esthetic.model.getLanguageId()},{provideDocumentRangeFormattingEdits:i=>[{text:T.json(i.getValue()),range:i.getFullModelRange()}]});let n=()=>{e.esthetic.editor.addCommand(g.KeyMod.CtrlCmd|g.KeyCode.KeyS,()=>{e.esthetic.rules=JSON.parse(e.esthetic.model.getValue()),T.rules(e.esthetic.rules),M(e),e.esthetic.editor.trigger("editor","editor.action.formatDocument",null),e.input.editor.trigger("editor","editor.action.formatDocument",null);});};return {oncreate:({dom:i})=>{e.esthetic.editor=g.editor.create(i,t),e.esthetic.editor.onDidFocusEditorText(()=>n());},view:()=>h("div",{style:{height:"100%"}})}};var ue={view:({attrs:e})=>e.language.state!==1?[h(".language-label","Select Language"),[["text","Plain Text","#809abd"],["liquid","Liquid","#004999"],["html","HTML","#f16729"],["xml","XML","#f16729"],["css","CSS","#1472b6"],["scss","SCSS","#cd6699"],["json","JSON","#f5de1a"],["javascript","JavaScript","#f5de1a"],["typescript","TypeScript","#007acc"],["jsx","JSX","#00d8fe"],["tsx","TSX","#007acc"],["yaml","YAML","#fbc02d"]].map(([t,n,i])=>h('button.btn-language[type="button"]',{class:e.language.current===t?"current":"",style:`--moloko-accent: ${i}`,onclick:()=>{let r=e.input.model.getValue();e.input.model.dispose(),e.input.model=g.editor.createModel(r,t),e.input.editor.setModel(e.input.model);}},[h("span",n),O(t)]))]:null};function Me(e){if(T.config({logColors:!1}),e.config.hash){let{hash:t}=window.location;t.charCodeAt(1)===77&&t.charCodeAt(2)===61&&(e.hash=t.slice(3));}else e.hash=null;if(e.hash){let t=G(e.hash);e.language=t.language,e.input.model=E(e.language.current,t.input.value),e.preview.model=E(e.language.current,t.input.value),e.input.width=t.input.width,e.preview.state=t.preview.state,e.preview.mode=t.preview.mode,e.preview.width=t.preview.width,e.esthetic.state=t.esthetic.state,e.esthetic.width=t.esthetic.width,e.esthetic.model=z(e.language.current,t.esthetic.rules),T.rules(t.esthetic.rules);}else T.rules({language:e.language.current}),e.config.preview.enable&&(e.preview.model=E(e.language.current)),e.input.model=E(e.language.current),e.esthetic.model=z(e.language.current,e.esthetic.rules);}function V(){return C(this,arguments,function*(e={}){let t=X(e);yield Q(t);try{yield le(t.path);}catch(n){throw new Error("Failed to load Monaco",n)}return Me(t),{get attrs(){return t},get esthetic(){return ce}}})}function Ie(n){return C(this,arguments,function*(e,t={}){let{attrs:i}=yield V(t);return {get attrs(){return i},Esthetic:J,Preview:Z}})}function Ee(n){return C(this,arguments,function*(e,t={}){let{attrs:i}=yield V(t),r=d=>i[d].state===3?".open":i[d].state===2?".close":"";return h.mount(e,{view:()=>h("section.moloko-editor",{style:{top:`${i.config.offset}px`}},[i.config.sidebar.enable?h("aside.moloko-sidebar",h(te,i)):null,h("aside.moloko-language"+r("language"),h(ue,i)),h("section.moloko-esthetic"+r("esthetic"),h(J,i)),h("section.moloko-input",h(de,i)),i.config.preview.enable&&i.preview.state===3?h("section.moloko-preview",h(Z,i)):null])}),i})}

export { U as default };
