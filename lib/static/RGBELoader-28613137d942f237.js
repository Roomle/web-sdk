THREE.RGBELoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager,this.type=THREE.UnsignedByteType},THREE.RGBELoader.prototype=Object.create(THREE.DataTextureLoader.prototype),THREE.RGBELoader.prototype._parser=function(e){var r=function(e,r){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(r||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(r||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(r||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(r||""))}return-1},t=function(e,r,t){r=r||1024;for(var a=e.pos,n=-1,o=0,i="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));0>(n=s.indexOf("\n"))&&o<r&&a<e.byteLength;)i+=s,o+=s.length,a+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<n&&(!1!==t&&(e.pos+=o+n+1),i+s.slice(0,n))},a=function(){var e=new Float32Array(1),r=new Int32Array(e.buffer);function t(t){e[0]=t;var a=r[0],n=a>>16&32768,o=a>>12&2047,i=a>>23&255;return i<103?n:i>142?(n|=31744,n|=(255==i?0:1)&&8388607&a):i<113?n|=((o|=2048)>>114-i)+(o>>113-i&1):(n|=i-112<<10|o>>1,n+=1&o)}return function(e,r,a,n){var o=e[r+3],i=Math.pow(2,o-128)/255;a[n+0]=t(e[r+0]*i),a[n+1]=t(e[r+1]*i),a[n+2]=t(e[r+2]*i)}}(),n=new Uint8Array(e);n.pos=0;var o,i,s,E,p,l,d=function(e){var a,n,o=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,E=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,p={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(e.pos>=e.byteLength||!(a=t(e)))return r(1,"no header found");if(!(n=a.match(/^#\?(\S+)$/)))return r(3,"bad initial token");for(p.valid|=1,p.programtype=n[1],p.string+=a+"\n";!1!==(a=t(e));)if(p.string+=a+"\n","#"!==a.charAt(0)){if((n=a.match(o))&&(p.gamma=parseFloat(n[1],10)),(n=a.match(i))&&(p.exposure=parseFloat(n[1],10)),(n=a.match(s))&&(p.valid|=2,p.format=n[1]),(n=a.match(E))&&(p.valid|=4,p.height=parseInt(n[1],10),p.width=parseInt(n[2],10)),2&p.valid&&4&p.valid)break}else p.comments+=a+"\n";return 2&p.valid?4&p.valid?p:r(3,"missing image size specifier"):r(3,"missing format specifier")}(n);if(-1!==d){var f=d.width,y=d.height,c=function(e,t,a){var n,o,i,s,E,p,l,d,f,y,c,u,R,T=t,h=a;if(T<8||T>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(T!==(e[2]<<8|e[3]))return r(3,"wrong scanline width");if(!(n=new Uint8Array(4*t*a))||!n.length)return r(4,"unable to allocate buffer space");for(o=0,i=0,d=4*T,R=new Uint8Array(4),p=new Uint8Array(d);h>0&&i<e.byteLength;){if(i+4>e.byteLength)return r(1);if(R[0]=e[i++],R[1]=e[i++],R[2]=e[i++],R[3]=e[i++],2!=R[0]||2!=R[1]||(R[2]<<8|R[3])!=T)return r(3,"bad rgbe scanline format");for(l=0;l<d&&i<e.byteLength;){if((u=(s=e[i++])>128)&&(s-=128),0===s||l+s>d)return r(3,"bad scanline data");if(u)for(E=e[i++],f=0;f<s;f++)p[l++]=E;else p.set(e.subarray(i,i+s),l),l+=s,i+=s}for(y=T,f=0;f<y;f++)c=0,n[o]=p[f+c],c+=T,n[o+1]=p[f+c],c+=T,n[o+2]=p[f+c],c+=T,n[o+3]=p[f+c],o+=4;h--}return n}(n.subarray(n.pos),f,y);if(-1!==c){switch(this.type){case THREE.UnsignedByteType:var u=c,R=THREE.RGBEFormat,T=THREE.UnsignedByteType;break;case THREE.FloatType:for(var h=c.length/4*3,g=new Float32Array(h),m=0;m<h;m++)s=g,E=3*m,p=(o=c)[3+(i=4*m)],l=Math.pow(2,p-128)/255,s[E+0]=o[i+0]*l,s[E+1]=o[i+1]*l,s[E+2]=o[i+2]*l;u=g,R=THREE.RGBFormat,T=THREE.FloatType;break;case THREE.HalfFloatType:h=c.length/4*3;var H=new Uint16Array(h);for(m=0;m<h;m++)a(c,4*m,H,3*m);u=H,R=THREE.RGBFormat,T=THREE.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:f,height:y,data:u,header:d.string,gamma:d.gamma,exposure:d.exposure,format:R,type:T}}}return null},THREE.RGBELoader.prototype.setDataType=function(e){return this.type=e,this},THREE.RGBELoader.prototype.setType=function(e){return console.warn("THREE.RGBELoader: .setType() has been renamed to .setDataType()."),this.setDataType(e)},THREE.RGBELoader.prototype.load=function(e,r,t,a){return THREE.DataTextureLoader.prototype.load.call(this,e,(function(e,t){switch(e.type){case THREE.UnsignedByteType:e.encoding=THREE.RGBEEncoding,e.minFilter=THREE.NearestFilter,e.magFilter=THREE.NearestFilter,e.generateMipmaps=!1,e.flipY=!0;break;case THREE.FloatType:case THREE.HalfFloatType:e.encoding=THREE.LinearEncoding,e.minFilter=THREE.LinearFilter,e.magFilter=THREE.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}r&&r(e,t)}),t,a)};