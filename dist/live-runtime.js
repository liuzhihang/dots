var eh=0,kl=1,nh=2;var Hl=1,Wo=2,Yn=3,ni=0,$e=1,hn=2,ai=0,Oi=1,Vl=2,Gl=3,Wl=4,ih=5,_i=100,sh=101,rh=102,oh=103,ah=104,lh=200,ch=201,hh=202,uh=203,xo=204,_o=205,dh=206,fh=207,ph=208,mh=209,gh=210,xh=211,_h=212,yh=213,vh=214,Xo=0,qo=1,Yo=2,Bi=3,Zo=4,Jo=5,$o=6,Ko=7,Qo=0,Mh=1,bh=2,li=0,Sh=1,wh=2,Eh=3,Th=4,Ah=5,Rh=6,Ds=7;var Xl=300,Zi=301,Ji=302,jo=303,ta=304,Or=306,vs=1e3,xi=1001,yo=1002,fn=1003,Ch=1004;var Br=1005;var Mn=1006,ea=1007;var Zn=1008;var Bn=1009,ql=1010,Yl=1011,Ls=1012,na=1013,Ti=1014,zn=1015,Us=1016,ia=1017,sa=1018,Fs=1020,Zl=35902,Jl=35899,$l=1021,Kl=1022,mn=1023,Ms=1026,Ns=1027,ra=1028,oa=1029,Ql=1030,aa=1031;var la=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,ya=37811,va=37812,Ma=37813,ba=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,Da=36495,La=36283,Ua=36284,Fa=36285,Na=36286;var ar=2300,vo=2301,go=2302,Rl=2400,Cl=2401,Il=2402;var Ih=3200,Ph=3201;var Oa=0,Dh=1,ci="",an="srgb",zi="srgb-linear",lr="linear",xe="srgb";var Ni=7680;var Pl=519,Lh=512,Uh=513,Fh=514,jl=515,Nh=516,Oh=517,Bh=518,zh=519,Dl=35044,Os=35048;var tc="300 es",Nn=2e3,cr=2001;var ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=1234567,ir=Math.PI/180,bs=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Hu(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Vu(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qu(i,t){return i+Math.random()*(t-i)}function Yu(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&(Tc=i);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(i){return i*ir}function $u(i){return i*bs}function Ku(i){return(i&i-1)===0&&i!==0}function Qu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function td(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),c=r((t+n)/2),u=a((t+n)/2),l=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,h*l,h*f,o*c);break;case"YZY":i.set(h*f,o*u,h*l,o*c);break;case"ZXZ":i.set(h*l,h*f,o*u,o*c);break;case"XZX":i.set(o*u,h*x,h*p,o*c);break;case"YXY":i.set(h*p,o*u,h*x,o*c);break;case"ZYZ":i.set(h*x,h*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Re={DEG2RAD:ir,RAD2DEG:bs,generateUUID:$i,clamp:oe,euclideanModulo:ec,mapLinear:zu,inverseLerp:ku,lerp:sr,damp:Hu,pingpong:Vu,smoothstep:Gu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:Zu,degToRad:Ju,radToDeg:$u,isPowerOfTwo:Ku,ceilPowerOfTwo:Qu,floorPowerOfTwo:ju,setQuaternionFromProperEuler:td,normalize:on,denormalize:_s},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],c=n[s+1],u=n[s+2],l=n[s+3],f=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=M;return}if(l!==M||h!==f||c!==p||u!==x){let d=1-o,m=h*f+c*p+u*x+l*M,w=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){let A=Math.sqrt(g),T=Math.atan2(A,m*w);d=Math.sin(d*T)/A,o=Math.sin(o*T)/A}let v=o*w;if(h=h*d+f*v,c=c*d+p*v,u=u*d+x*v,l=l*d+M*v,d===1-o){let A=1/Math.sqrt(h*h+c*c+u*u+l*l);h*=A,c*=A,u*=A,l*=A}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],u=n[s+3],l=r[a],f=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*l+h*p-c*f,t[e+1]=h*x+u*f+c*l-o*p,t[e+2]=c*x+u*p+o*f-h*l,t[e+3]=u*x-o*l-h*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(n/2),u=o(s/2),l=o(r/2),f=h(n/2),p=h(s/2),x=h(r/2);switch(a){case"XYZ":this._x=f*u*l+c*p*x,this._y=c*p*l-f*u*x,this._z=c*u*x+f*p*l,this._w=c*u*l-f*p*x;break;case"YXZ":this._x=f*u*l+c*p*x,this._y=c*p*l-f*u*x,this._z=c*u*x-f*p*l,this._w=c*u*l+f*p*x;break;case"ZXY":this._x=f*u*l-c*p*x,this._y=c*p*l+f*u*x,this._z=c*u*x+f*p*l,this._w=c*u*l-f*p*x;break;case"ZYX":this._x=f*u*l-c*p*x,this._y=c*p*l+f*u*x,this._z=c*u*x-f*p*l,this._w=c*u*l+f*p*x;break;case"YZX":this._x=f*u*l+c*p*x,this._y=c*p*l+f*u*x,this._z=c*u*x-f*p*l,this._w=c*u*l-f*p*x;break;case"XZY":this._x=f*u*l-c*p*x,this._y=c*p*l-f*u*x,this._z=c*u*x+f*p*l,this._w=c*u*l+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],c=e[2],u=e[6],l=e[10],f=n+o+l;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-h)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>l){let p=2*Math.sqrt(1+n-o-l);this._w=(u-h)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>l){let p=2*Math.sqrt(1+o-n-l);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(h+u)/p}else{let p=2*Math.sqrt(1+l-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(h+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*h,this._y=s*u+a*h+r*o-n*c,this._z=r*u+a*c+n*h-s*o,this._w=a*u-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let h=1-o*o;if(h<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(h),u=Math.atan2(c,o),l=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=s*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+h*c+a*l-o*u,this.y=n+h*u+o*c-r*l,this.z=s+h*l+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new z,Ac=new Je,Kt=class i{constructor(t,e,n,s,r,a,o,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c)}set(t,e,n,s,r,a,o,h,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],u=n[4],l=n[7],f=n[2],p=n[5],x=n[8],M=s[0],d=s[3],m=s[6],w=s[1],g=s[4],v=s[7],A=s[2],T=s[5],S=s[8];return r[0]=a*M+o*w+h*A,r[3]=a*d+o*g+h*T,r[6]=a*m+o*v+h*S,r[1]=c*M+u*w+l*A,r[4]=c*d+u*g+l*T,r[7]=c*m+u*v+l*S,r[2]=f*M+p*w+x*A,r[5]=f*d+p*g+x*T,r[8]=f*m+p*v+x*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*h+s*r*c-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],l=u*a-o*c,f=o*h-u*r,p=c*r-a*h,x=e*l+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=l*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(u*e-s*h)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*h-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+t,-s*c,s*h,-s*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},il=new Kt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=hr("canvas");return i.style.display="block",i}var Rc={};function Ss(i){i in Rc||(Rc[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){let i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var de=ed();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=hr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nd=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sl(s[a].image)):r.push(sl(s[a]))}else r=sl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var id=0,rl=new z,pn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=Mn,a=Zn,o=mn,h=Bn,c=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=$i(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Xl;pn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,c=h[0],u=h[4],l=h[8],f=h[1],p=h[5],x=h[9],M=h[2],d=h[6],m=h[10];if(Math.abs(u-f)<.01&&Math.abs(l-M)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+M)<.1&&Math.abs(x+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(c+1)/2,v=(p+1)/2,A=(m+1)/2,T=(u+f)/4,S=(l+M)/4,C=(x+d)/4;return g>v&&g>A?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=S/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=S/r,s=C/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-x)*(d-x)+(l-M)*(l-M)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(l-M)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new pn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Zr.subVectors(this.max,Js),os.subVectors(t.a,Js),as.subVectors(t.b,Js),ls.subVectors(t.c,Js),ui.subVectors(as,os),di.subVectors(ls,as),Di.subVectors(os,ls);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Di.z,Di.y,ui.z,0,-ui.x,di.z,0,-di.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!ol(e,os,as,ls,Zr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,os,as,ls,Zr))?!1:(Jr.crossVectors(ui,di),e=[Jr.x,Jr.y,Jr.z],ol(e,os,as,ls,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,Yr=new We,os=new z,as=new z,ls=new z,ui=new z,di=new z,Di=new z,Js=new z,Zr=new z,Jr=new z,Li=new z;function ol(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),h=t.dot(Li),c=e.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var sd=new We,$s=new z,al=new z,Xn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(al)),this.expandByPoint($s.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kn=new z,ll=new z,$r=new z,fi=new z,cl=new z,Kr=new z,hl=new z,dr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ll.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ll);let r=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=fi.dot(this.direction),h=-fi.dot($r),c=fi.lengthSq(),u=Math.abs(1-a*a),l,f,p,x;if(u>0)if(l=a*h-o,f=a*o-h,x=r*u,l>=0)if(f>=-x)if(f<=x){let M=1/u;l*=M,f*=M,p=l*(l+a*f+2*o)+f*(a*l+f+2*h)+c}else f=r,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;else f=-r,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;else f<=-x?(l=Math.max(0,-(-a*r+o)),f=l>0?-r:Math.min(Math.max(-r,-h),r),p=-l*l+f*(f+2*h)+c):f<=x?(l=0,f=Math.min(Math.max(-r,-h),r),p=f*(f+2*h)+c):(l=Math.max(0,-(a*r+o)),f=l>0?r:Math.min(Math.max(-r,-h),r),p=-l*l+f*(f+2*h)+c);else f=a>0?-r:r,l=Math.max(0,-(a*f+o)),p=-l*l+f*(f+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(ll).addScaledVector($r,f),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-f.z)*l,h=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,h=(t.min.z-f.z)*l),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){cl.subVectors(e,t),Kr.subVectors(n,t),hl.crossVectors(cl,Kr);let a=this.direction.dot(hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);let h=o*this.direction.dot(Kr.crossVectors(fi,Kr));if(h<0)return null;let c=o*this.direction.dot(cl.cross(fi));if(c<0||h+c>a)return null;let u=-o*fi.dot(hl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,a,o,h,c,u,l,f,p,x,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c,u,l,f,p,x,M,d)}set(t,e,n,s,r,a,o,h,c,u,l,f,p,x,M,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=h,m[2]=c,m[6]=u,m[10]=l,m[14]=f,m[3]=p,m[7]=x,m[11]=M,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*l,x=o*u,M=o*l;e[0]=h*u,e[4]=-h*l,e[8]=c,e[1]=p+x*c,e[5]=f-M*c,e[9]=-o*h,e[2]=M-f*c,e[6]=x+p*c,e[10]=a*h}else if(t.order==="YXZ"){let f=h*u,p=h*l,x=c*u,M=c*l;e[0]=f+M*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*l,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=M+f*o,e[10]=a*h}else if(t.order==="ZXY"){let f=h*u,p=h*l,x=c*u,M=c*l;e[0]=f-M*o,e[4]=-a*l,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let f=a*u,p=a*l,x=o*u,M=o*l;e[0]=h*u,e[4]=x*c-p,e[8]=f*c+M,e[1]=h*l,e[5]=M*c+f,e[9]=p*c-x,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let f=a*h,p=a*c,x=o*h,M=o*c;e[0]=h*u,e[4]=M-f*l,e[8]=x*l+p,e[1]=l,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*l+x,e[10]=f-M*l}else if(t.order==="XZY"){let f=a*h,p=a*c,x=o*h,M=o*c;e[0]=h*u,e[4]=-l,e[8]=c*u,e[1]=f*l+M,e[5]=a*u,e[9]=p*l-x,e[2]=x*l-p,e[6]=o*u,e[10]=M*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rd,t,od)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),pi.crossVectors(n,yn),pi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),pi.crossVectors(n,yn)),pi.normalize(),Qr.crossVectors(yn,pi),s[0]=pi.x,s[4]=Qr.x,s[8]=yn.x,s[1]=pi.y,s[5]=Qr.y,s[9]=yn.y,s[2]=pi.z,s[6]=Qr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],u=n[1],l=n[5],f=n[9],p=n[13],x=n[2],M=n[6],d=n[10],m=n[14],w=n[3],g=n[7],v=n[11],A=n[15],T=s[0],S=s[4],C=s[8],_=s[12],y=s[1],D=s[5],U=s[9],N=s[13],G=s[2],J=s[6],X=s[10],j=s[14],tt=s[3],mt=s[7],Tt=s[11],xt=s[15];return r[0]=a*T+o*y+h*G+c*tt,r[4]=a*S+o*D+h*J+c*mt,r[8]=a*C+o*U+h*X+c*Tt,r[12]=a*_+o*N+h*j+c*xt,r[1]=u*T+l*y+f*G+p*tt,r[5]=u*S+l*D+f*J+p*mt,r[9]=u*C+l*U+f*X+p*Tt,r[13]=u*_+l*N+f*j+p*xt,r[2]=x*T+M*y+d*G+m*tt,r[6]=x*S+M*D+d*J+m*mt,r[10]=x*C+M*U+d*X+m*Tt,r[14]=x*_+M*N+d*j+m*xt,r[3]=w*T+g*y+v*G+A*tt,r[7]=w*S+g*D+v*J+A*mt,r[11]=w*C+g*U+v*X+A*Tt,r[15]=w*_+g*N+v*j+A*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],c=t[13],u=t[2],l=t[6],f=t[10],p=t[14],x=t[3],M=t[7],d=t[11],m=t[15];return x*(+r*h*l-s*c*l-r*o*f+n*c*f+s*o*p-n*h*p)+M*(+e*h*p-e*c*f+r*a*f-s*a*p+s*c*u-r*h*u)+d*(+e*c*l-e*o*p-r*a*l+n*a*p+r*o*u-n*c*u)+m*(-s*o*u-e*h*l+e*o*f+s*a*l-n*a*f+n*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],u=t[8],l=t[9],f=t[10],p=t[11],x=t[12],M=t[13],d=t[14],m=t[15],w=l*d*c-M*f*c+M*h*p-o*d*p-l*h*m+o*f*m,g=x*f*c-u*d*c-x*h*p+a*d*p+u*h*m-a*f*m,v=u*M*c-x*l*c+x*o*p-a*M*p-u*o*m+a*l*m,A=x*l*h-u*M*h-x*o*f+a*M*f+u*o*d-a*l*d,T=e*w+n*g+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=w*S,t[1]=(M*f*r-l*d*r-M*s*p+n*d*p+l*s*m-n*f*m)*S,t[2]=(o*d*r-M*h*r+M*s*c-n*d*c-o*s*m+n*h*m)*S,t[3]=(l*h*r-o*f*r-l*s*c+n*f*c+o*s*p-n*h*p)*S,t[4]=g*S,t[5]=(u*d*r-x*f*r+x*s*p-e*d*p-u*s*m+e*f*m)*S,t[6]=(x*h*r-a*d*r-x*s*c+e*d*c+a*s*m-e*h*m)*S,t[7]=(a*f*r-u*h*r+u*s*c-e*f*c-a*s*p+e*h*p)*S,t[8]=v*S,t[9]=(x*l*r-u*M*r-x*n*p+e*M*p+u*n*m-e*l*m)*S,t[10]=(a*M*r-x*o*r+x*n*c-e*M*c-a*n*m+e*o*m)*S,t[11]=(u*o*r-a*l*r-u*n*c+e*l*c+a*n*p-e*o*p)*S,t[12]=A*S,t[13]=(u*M*s-x*l*s+x*n*f-e*M*f-u*n*d+e*l*d)*S,t[14]=(x*o*s-a*M*s-x*n*h+e*M*h+a*n*d-e*o*d)*S,t[15]=(a*l*s-u*o*s+u*n*h-e*l*h-a*n*f+e*o*f)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,u*o+n,u*h-s*a,0,c*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,c=r+r,u=a+a,l=o+o,f=r*c,p=r*u,x=r*l,M=a*u,d=a*l,m=o*l,w=h*c,g=h*u,v=h*l,A=n.x,T=n.y,S=n.z;return s[0]=(1-(M+m))*A,s[1]=(p+v)*A,s[2]=(x-g)*A,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(f+m))*T,s[6]=(d+w)*T,s[7]=0,s[8]=(x+g)*S,s[9]=(d-w)*S,s[10]=(1-(f+M))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,u=1/a,l=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=l,Un.elements[9]*=l,Un.elements[10]*=l,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn,h=!1){let c=this.elements,u=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),x,M;if(h)x=r/(a-r),M=a*r/(a-r);else if(o===Nn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===cr)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,h=!1){let c=this.elements,u=2/(e-t),l=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),x,M;if(h)x=1/(a-r),M=a/(a-r);else if(o===Nn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===cr)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=l,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new z,Un=new _e,rd=new z(0,0,0),od=new z(1,1,1),pi=new z,Qr=new z,yn=new z,Pc=new _e,Dc=new Je,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],u=s[9],l=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ad=0,Lc=new z,hs=new Je,Qn=new _e,jr=new z,Ks=new z,ld=new z,cd=new Je,Uc=new z(1,0,0),Fc=new z(0,1,0),Nc=new z(0,0,1),Oc={type:"added"},hd={type:"removed"},us={type:"childadded",child:null},ul={type:"childremoved",child:null},Ve=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Rn,n=new Je,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ks,jr,this.up):Qn.lookAt(jr,Ks,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Qn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hd),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let l=h[c];r(t.shapes,l)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),u=a(t.images),l=a(t.shapes),f=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new z(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new z,jn=new z,dl=new z,ti=new z,ds=new z,fs=new z,Bc=new z,fl=new z,pl=new z,ml=new z,gl=new ge,xl=new ge,_l=new ge,Vn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),jn.subVectors(n,e),dl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(jn),h=Fn.dot(dl),c=jn.dot(jn),u=jn.dot(dl),l=a*c-o*o;if(l===0)return r.set(0,0,0),null;let f=1/l,p=(c*h-o*u)*f,x=(a*u-o*h)*f;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,ti)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ti.x),h.addScaledVector(a,ti.y),h.addScaledVector(o,ti.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return gl.setScalar(0),xl.setScalar(0),_l.setScalar(0),gl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(xl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),jn.subVectors(t,e),Fn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Fn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),fl.subVectors(t,n);let h=ds.dot(fl),c=fs.dot(fl);if(h<=0&&c<=0)return e.copy(n);pl.subVectors(t,s);let u=ds.dot(pl),l=fs.dot(pl);if(u>=0&&l<=u)return e.copy(s);let f=h*l-u*c;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(ds,a);ml.subVectors(t,r);let p=ds.dot(ml),x=fs.dot(ml);if(x>=0&&p<=x)return e.copy(r);let M=p*c-h*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(fs,o);let d=u*x-p*l;if(d<=0&&l-u>=0&&p-x>=0)return Bc.subVectors(r,s),o=(l-u)/(l-u+(p-x)),e.copy(s).addScaledVector(Bc,o);let m=1/(d+M+f);return a=M*m,o=f*m,e.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},to={h:0,s:0,l:0};function yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=ec(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return de.workingToColorSpace(nn.copy(this),t),Math.round(oe(nn.r*255,0,255))*65536+Math.round(oe(nn.g*255,0,255))*256+Math.round(oe(nn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,u=(o+a)/2;if(o===a)h=0,c=0;else{let l=a-o;switch(c=u<=.5?l/(a+o):l/(2-a-o),a){case n:h=(s-r)/l+(s<r?6:0);break;case s:h=(r-n)/l+2;break;case r:h=(n-s)/l+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=an){de.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(to);let n=sr(mi.h,to.h,e),s=sr(mi.s,to.s,e),r=sr(mi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Xt;Xt.NAMES=Vh;var ud=0,qn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Oi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=_o,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new z,eo=new It,dd=0,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var fr=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},fd=0,An=new _e,vl=new Ve,ps=new z,vn=new We,Qs=new We,Ze=new z,ye=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(vn.min,Qs.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,Qs.max),vn.expandByPoint(Ze)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ze.fromBufferAttribute(o,c),h&&(ps.fromBufferAttribute(t,c),Ze.add(ps)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],h=[];for(let C=0;C<n.count;C++)o[C]=new z,h[C]=new z;let c=new z,u=new z,l=new z,f=new It,p=new It,x=new It,M=new z,d=new z;function m(C,_,y){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,_),x.fromBufferAttribute(r,y),u.sub(c),l.sub(c),p.sub(f),x.sub(f);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(l,-p.y).multiplyScalar(D),d.copy(l).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),o[C].add(M),o[_].add(M),o[y].add(M),h[C].add(d),h[_].add(d),h[y].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,_=w.length;C<_;++C){let y=w[C],D=y.start,U=y.count;for(let N=D,G=D+U;N<G;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let g=new z,v=new z,A=new z,T=new z;function S(C){A.fromBufferAttribute(s,C),T.copy(A);let _=o[C];g.copy(_),g.sub(A.multiplyScalar(A.dot(_))).normalize(),v.crossVectors(T,_);let D=v.dot(h[C])<0?-1:1;a.setXYZW(C,g.x,g.y,g.z,D)}for(let C=0,_=w.length;C<_;++C){let y=w[C],D=y.start,U=y.count;for(let N=D,G=D+U;N<G;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,a=new z,o=new z,h=new z,c=new z,u=new z,l=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){let x=t.getX(f+0),M=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,d),u.subVectors(a,r),l.subVectors(s,r),u.cross(l),o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),o.add(u),h.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),l.subVectors(s,r),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,h){let c=o.array,u=o.itemSize,l=o.normalized,f=new c.constructor(h.length*u),p=0,x=0;for(let M=0,d=h.length;M<d;M++){o.isInterleavedBufferAttribute?p=h[M]*o.data.stride+o.offset:p=h[M]*u;for(let m=0;m<u;m++)f[x++]=c[p++]}return new Ge(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=t(h,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let u=0,l=c.length;u<l;u++){let f=c[u],p=t(f,n);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let c=n[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let l=0,f=c.length;l<f;l++){let p=c[l];u.push(p.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],l=r[c];for(let f=0,p=l.length;f<p;f++)u.push(l[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let l=a[c];this.addGroup(l.start,l.count,l.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new _e,Ui=new dr,no=new Xn,kc=new z,io=new z,so=new z,ro=new z,Ml=new z,oo=new z,Hc=new z,ao=new z,pe=class extends Ve{constructor(t=new ye,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let u=o[h],l=r[h];u!==0&&(Ml.fromBufferAttribute(l,t),a?oo.addScaledVector(Ml,u):oo.addScaledVector(Ml.sub(e),u))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(no.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(no,kc)===null||Ui.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){let d=f[x],m=a[d.materialIndex],w=Math.max(d.start,p.start),g=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let v=w,A=g;v<A;v+=3){let T=o.getX(v),S=o.getX(v+1),C=o.getX(v+2);s=lo(this,m,t,n,c,u,l,T,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let d=x,m=M;d<m;d+=3){let w=o.getX(d),g=o.getX(d+1),v=o.getX(d+2);s=lo(this,a,t,n,c,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){let d=f[x],m=a[d.materialIndex],w=Math.max(d.start,p.start),g=Math.min(h.count,Math.min(d.start+d.count,p.start+p.count));for(let v=w,A=g;v<A;v+=3){let T=v,S=v+1,C=v+2;s=lo(this,m,t,n,c,u,l,T,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(h.count,p.start+p.count);for(let d=x,m=M;d<m;d+=3){let w=d,g=d+1,v=d+2;s=lo(this,a,t,n,c,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function pd(i,t,e,n,s,r,a,o){let h;if(t.side===$e?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===ni,o),h===null)return null;ao.copy(o),ao.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ao);return c<e.near||c>e.far?null:{distance:c,point:ao.clone(),object:i}}function lo(i,t,e,n,s,r,a,o,h,c){i.getVertexPosition(o,io),i.getVertexPosition(h,so),i.getVertexPosition(c,ro);let u=pd(i,t,e,n,io,so,ro,Hc);if(u){let l=new z;Vn.getBarycoord(Hc,io,so,ro,l),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,h,c,l,new It)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,h,c,l,new It)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,h,c,l,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:h,c,normal:new z,materialIndex:0};Vn.getNormal(io,so,ro,f.normal),u.face=f,u.barycoord=l}return u}var yi=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],l=[],f=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(l,2));function x(M,d,m,w,g,v,A,T,S,C,_){let y=v/S,D=A/C,U=v/2,N=A/2,G=T/2,J=S+1,X=C+1,j=0,tt=0,mt=new z;for(let Tt=0;Tt<X;Tt++){let xt=Tt*D-N;for(let Lt=0;Lt<J;Lt++){let Ut=Lt*y-U;mt[M]=Ut*w,mt[d]=xt*g,mt[m]=G,c.push(mt.x,mt.y,mt.z),mt[M]=0,mt[d]=0,mt[m]=T>0?1:-1,u.push(mt.x,mt.y,mt.z),l.push(Lt/S),l.push(1-Tt/C),j+=1}}for(let Tt=0;Tt<C;Tt++)for(let xt=0;xt<S;xt++){let Lt=f+xt+J*Tt,Ut=f+xt+J*(Tt+1),Bt=f+(xt+1)+J*(Tt+1),kt=f+(xt+1)+J*Tt;h.push(Lt,Ut,kt),h.push(Ut,Bt,kt),tt+=6}o.addGroup(p,tt,_),p+=tt,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function md(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Gh={clone:Ki,merge:sn},gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new z,Vc=new It,Gc=new It,ln=class extends mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Gc),e.subVectors(Gc,Vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,wo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new ln(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new ln(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new ln(ms,gs,t,e);o.layers=this.layers,this.add(o);let h=new ln(ms,gs,t,e);h.layers=this.layers,this.add(h);let c=new ln(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,u]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(l,f,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},gr=class extends pn{constructor(t=[],e=Zi,n,s,r,a,o,h,c,u){super(t,e,n,s,r,a,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ai});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Mn),new wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let d=e.getJointPose(M,n),m=this._getHandJoint(c,M);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let u=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],f=u.position.distanceTo(l.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ki=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vi=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,h,c=fn,u=fn,l,f){super(null,a,o,h,c,u,s,r,l,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new _e,Wc=new _e,co=[],Xc=new We,yd=new _e,js=new pe,tr=new Xn,Hi=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Xc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Xc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),tr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Wc.multiplyMatrices(n,xs),js.matrixWorld=Wc,js.raycast(t,co);for(let a=0,o=co.length;a<o;a++){let h=co[a];h.instanceId=r,h.object=this,e.push(h)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,ra,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;r[h]=o,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bl=new z,vd=new z,Md=new Kt,Hn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bl.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Md.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Xn,bd=new It(.5,.5),ho=new z,As=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],c=r[3],u=r[4],l=r[5],f=r[6],p=r[7],x=r[8],M=r[9],d=r[10],m=r[11],w=r[12],g=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,m-x,A-w).normalize(),s[1].setComponents(c+a,p+u,m+x,A+w).normalize(),s[2].setComponents(c+o,p+l,m+M,A+g).normalize(),s[3].setComponents(c-o,p-l,m-M,A-g).normalize(),n)s[4].setComponents(h,f,d,v).normalize(),s[5].setComponents(c-h,p-f,m-d,A-v).normalize();else if(s[4].setComponents(c-h,p-f,m-d,A-v).normalize(),e===Nn)s[5].setComponents(c+h,p+f,m+d,A+v).normalize();else if(e===cr)s[5].setComponents(h,f,d,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=bd.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends pn{constructor(t,e,n=Ti,s,r,a,o=fn,h=fn,c,u=Ms,l=1){if(u!==Ms&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:l};super(f,s,r,a,o,h,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],h=[],c=[],u=e/2,l=Math.PI/2*t,f=e,p=2*l+f,x=n*2+r,M=s+1,d=new z,m=new z;for(let w=0;w<=x;w++){let g=0,v=0,A=0,T=0;if(w<=n){let _=w/n,y=_*Math.PI/2;v=-u-t*Math.cos(y),A=t*Math.sin(y),T=-t*Math.cos(y),g=_*l}else if(w<=n+r){let _=(w-n)/r;v=-u+_*e,A=t,T=0,g=l+_*f}else{let _=(w-n-r)/n,y=_*Math.PI/2;v=u+t*Math.sin(y),A=t*Math.cos(y),T=t*Math.sin(y),g=l+f+_*l}let S=Math.max(0,Math.min(1,g/p)),C=0;w===0?C=.5/s:w===x&&(C=-.5/s);for(let _=0;_<=s;_++){let y=_/s,D=y*Math.PI*2,U=Math.sin(D),N=Math.cos(D);m.x=-A*N,m.y=v,m.z=A*U,o.push(m.x,m.y,m.z),d.set(-A*N,T,A*U),d.normalize(),h.push(d.x,d.y,d.z),c.push(y+C,S)}if(w>0){let _=(w-1)*M;for(let y=0;y<s;y++){let D=_+y,U=_+y+1,N=w*M+y,G=w*M+y+1;a.push(D,U,N),a.push(U,G,N)}}}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mr=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],h=[],c=new z,u=new It;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let l=0,f=3;l<=e;l++,f+=3){let p=n+l/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,h.push(u.x,u.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cn=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],l=[],f=[],p=[],x=0,M=[],d=n/2,m=0;w(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function w(){let v=new z,A=new z,T=0,S=(e-t)/n;for(let C=0;C<=r;C++){let _=[],y=C/r,D=y*(e-t)+t;for(let U=0;U<=s;U++){let N=U/s,G=N*h+o,J=Math.sin(G),X=Math.cos(G);A.x=D*J,A.y=-y*n+d,A.z=D*X,l.push(A.x,A.y,A.z),v.set(J,S,X).normalize(),f.push(v.x,v.y,v.z),p.push(N,1-y),_.push(x++)}M.push(_)}for(let C=0;C<s;C++)for(let _=0;_<r;_++){let y=M[_][C],D=M[_+1][C],U=M[_+1][C+1],N=M[_][C+1];(t>0||_!==0)&&(u.push(y,D,N),T+=3),(e>0||_!==r-1)&&(u.push(D,U,N),T+=3)}c.addGroup(m,T,0),m+=T}function g(v){let A=x,T=new It,S=new z,C=0,_=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)l.push(0,d*y,0),f.push(0,y,0),p.push(.5,.5),x++;let D=x;for(let U=0;U<=s;U++){let G=U/s*h+o,J=Math.cos(G),X=Math.sin(G);S.x=_*X,S.y=d*y,S.z=_*J,l.push(S.x,S.y,S.z),f.push(0,y,0),T.x=J*.5+.5,T.y=X*.5*y+.5,p.push(T.x,T.y),x++}for(let U=0;U<s;U++){let N=A+U,G=D+U;v===!0?u.push(G,G+1,N):u.push(G+1,G,N),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,h=r-1,c;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new It:new z);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],a=[],o=new z,h=new _e;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),l=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),l<=c&&(c=l,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(oe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(h.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(oe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(h.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),f=h-this.aX,p=c-this.aY;h=f*u-p*l+this.aX,c=f*l+p*u+this.aY}return n.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},To=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,t=0,e=0,n=0;function s(r,a,o,h){i=r,t=o,e=-3*r+3*a-2*o-h,n=2*r-2*a+o+h}return{initCatmullRom:function(r,a,o,h,c){s(a,o,c*(o-r),c*(h-a))},initNonuniformCatmullRom:function(r,a,o,h,c,u,l){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(h-a)/(u+l)+(h-o)/l;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uo=new z,Sl=new sc,wl=new sc,El=new sc,cn=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);let l=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(l),p),M=Math.pow(l.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);M<1e-4&&(M=1),x<1e-4&&(x=M),d<1e-4&&(d=M),Sl.initNonuniformCatmullRom(c.x,l.x,f.x,u.x,x,M,d),wl.initNonuniformCatmullRom(c.y,l.y,f.y,u.y,x,M,d),El.initNonuniformCatmullRom(c.z,l.z,f.z,u.z,x,M,d)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,l.x,f.x,u.x,this.tension),wl.initCatmullRom(c.y,l.y,f.y,u.y,this.tension),El.initCatmullRom(c.z,l.z,f.z,u.z,this.tension));return n.set(Sl.calc(h),wl.calc(h),El.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,h=i*o;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*o+r*i+e}function Sd(i,t){let e=1-i;return e*e*t}function wd(i,t){return 2*(1-i)*i*t}function Ed(i,t){return i*i*t}function rr(i,t,e,n){return Sd(i,t)+wd(i,e)+Ed(i,n)}function Td(i,t){let e=1-i;return e*e*e*t}function Ad(i,t){let e=1-i;return 3*e*e*i*t}function Rd(i,t){return 3*(1-i)*i*i*t}function Cd(i,t){return i*i*i*t}function or(i,t,e,n,s){return Td(i,t)+Ad(i,e)+Rd(i,n)+Cd(i,s)}var Sr=class extends bn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends bn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends bn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends bn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends bn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends bn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,h=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],l=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,h.x,c.x,u.x,l.x),qc(o,h.y,c.y,u.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:cn,CubicBezierCurve:Sr,CubicBezierCurve3:Ao,EllipseCurve:Rs,LineCurve:wr,LineCurve3:Ro,QuadraticBezierCurve:Er,QuadraticBezierCurve3:Tr,SplineCurve:Ar}),Io=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],h=o.getLength(),c=h===0?0:1-a/h;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let c=0;c<h.length;c++){let u=h[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},Rr=class extends Io{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wr(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Er(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Sr(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,h){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,h),this}absellipse(t,e,n,s,r,a,o,h){let c=new Rs(t,e,n,s,r,a,o,h);if(this.curves.length>0){let l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},In=class extends Rr{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}};function Id(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,h,c;if(n&&(r=Fd(i,t,r,e)),i.length>80*e){o=1/0,h=1/0;let u=-1/0,l=-1/0;for(let f=e;f<s;f+=e){let p=i[f],x=i[f+1];p<o&&(o=p),x<h&&(h=x),p>u&&(u=p),x>l&&(l=x)}c=Math.max(u-o,l-h),c=c!==0?32767/c:0}return Cr(r,a,e,o,h,c,0),a}function Wh(i,t,e,n,s){let r;if(s===qd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Yc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Yc(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(Pr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&kd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let h=i.prev,c=i.next;if(r?Dd(i,n,s,r):Pd(i)){t.push(h.i,i.i,c.i),Pr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ld(Vi(i),t),Cr(i,t,e,n,s,r,2)):a===2&&Ud(i,t,e,n,s,r):Cr(Vi(i),t,e,n,s,r,1);break}}}function Pd(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,h=e.y,c=n.y,u=Math.min(s,r,a),l=Math.min(o,h,c),f=Math.max(s,r,a),p=Math.max(o,h,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=l&&x.y<=p&&nr(s,o,r,h,a,c,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Dd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ie(s,r,a)>=0)return!1;let o=s.x,h=r.x,c=a.x,u=s.y,l=r.y,f=a.y,p=Math.min(o,h,c),x=Math.min(u,l,f),M=Math.max(o,h,c),d=Math.max(u,l,f),m=Ll(p,x,t,e,n),w=Ll(M,d,t,e,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=m&&v&&v.z<=w;){if(g.x>=p&&g.x<=M&&g.y>=x&&g.y<=d&&g!==s&&g!==a&&nr(o,u,h,l,c,f,g.x,g.y)&&Ie(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=p&&v.x<=M&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&nr(o,u,h,l,c,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=m;){if(g.x>=p&&g.x<=M&&g.y>=x&&g.y<=d&&g!==s&&g!==a&&nr(o,u,h,l,c,f,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=w;){if(v.x>=p&&v.x<=M&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&nr(o,u,h,l,c,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ld(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&qh(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function Ud(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gd(a,o)){let h=Yh(a,o);a=Vi(a,a.next),h=Vi(h,h.next),Cr(a,t,e,n,s,r,0),Cr(h,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,h=r<a-1?t[r+1]*n:i.length,c=Wh(i,o,h,n,!1);c===c.next&&(c.steiner=!0),s.push(Vd(c))}s.sort(Nd);for(let r=0;r<s.length;r++)e=Od(s[r],e);return e}function Nd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Od(i,t){let e=Bd(i,t);if(!e)return t;let n=Yh(e,i);return Vi(n,n.next),Vi(e,e.next)}function Bd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let l=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,a=e.x<e.next.x?e:e.next,l===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,h=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&Xh(s<c?n:r,s,h,c,s<c?r:n,s,e.x,e.y)){let l=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(l<u||l===u&&(e.x>a.x||e.x===a.x&&zd(a,e)))&&(a=e,u=l)}e=e.next}while(e!==o);return a}function zd(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function kd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let h=e;for(;o>0||h>0&&a;)o!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function nr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Xh(i,t,e,n,s,r,a,o)}function Gd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wd(i,t)&&(Ir(i,t)&&Ir(t,i)&&Xd(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Cs(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function qh(i,t,e,n){let s=po(Ie(i,t,e)),r=po(Ie(i,t,n)),a=po(Ie(e,n,i)),o=po(Ie(e,n,t));return!!(s!==r&&a!==o||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||a===0&&fo(e,i,n)||o===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function Wd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Xd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){let e=Ul(i.i,i.x,i.y),n=Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yc(i,t,e,n){let s=Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(t,e,n=2){return Id(t,e,n)}},Gn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zc(t),Jc(n,t);let a=t.length;e.forEach(Zc);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,Jc(n,e[h]);let o=Fl.triangulate(n,s);for(let h=0;h<o.length;h+=3)r.push(o.slice(h,h+3));return r}};function Zc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends ye{constructor(t=new In([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,h=t.length;o<h;o++){let c=t[o];a(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let h=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,l=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Yd,g,v=!1,A,T,S,C;m&&(g=m.getSpacedPoints(u),v=!0,f=!1,A=m.computeFrenetFrames(u,!1),T=new z,S=new z,C=new z),f||(d=0,p=0,x=0,M=0);let _=o.extractPoints(c),y=_.shape,D=_.holes;if(!Gn.isClockWise(y)){y=y.reverse();for(let H=0,q=D.length;H<q;H++){let E=D[H];Gn.isClockWise(E)&&(D[H]=E.reverse())}}function N(H){let E=10000000000000001e-36,P=H[0];for(let B=1;B<=H.length;B++){let O=B%H.length,Z=H[O],it=Z.x-P.x,st=Z.y-P.y,R=it*it+st*st,b=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(P.x),Math.abs(P.y)),k=E*b*b;if(R<=k){H.splice(O,1),B--;continue}P=Z}}N(y),D.forEach(N);let G=D.length,J=y;for(let H=0;H<G;H++){let q=D[H];y=y.concat(q)}function X(H,q,E){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(q,E)}let j=y.length;function tt(H,q,E){let P,B,O,Z=H.x-q.x,it=H.y-q.y,st=E.x-H.x,R=E.y-H.y,b=Z*Z+it*it,k=Z*R-it*st;if(Math.abs(k)>Number.EPSILON){let Y=Math.sqrt(b),K=Math.sqrt(st*st+R*R),V=q.x-it/Y,ht=q.y+Z/Y,dt=E.x-R/K,St=E.y+st/K,vt=((dt-V)*R-(St-ht)*st)/(Z*R-it*st);P=V+Z*vt-H.x,B=ht+it*vt-H.y;let $=P*P+B*B;if($<=2)return new It(P,B);O=Math.sqrt($/2)}else{let Y=!1;Z>Number.EPSILON?st>Number.EPSILON&&(Y=!0):Z<-Number.EPSILON?st<-Number.EPSILON&&(Y=!0):Math.sign(it)===Math.sign(R)&&(Y=!0),Y?(P=-it,B=Z,O=Math.sqrt(b)):(P=Z,B=it,O=Math.sqrt(b/2))}return new It(P/O,B/O)}let mt=[];for(let H=0,q=J.length,E=q-1,P=H+1;H<q;H++,E++,P++)E===q&&(E=0),P===q&&(P=0),mt[H]=tt(J[H],J[E],J[P]);let Tt=[],xt,Lt=mt.concat();for(let H=0,q=G;H<q;H++){let E=D[H];xt=[];for(let P=0,B=E.length,O=B-1,Z=P+1;P<B;P++,O++,Z++)O===B&&(O=0),Z===B&&(Z=0),xt[P]=tt(E[P],E[O],E[Z]);Tt.push(xt),Lt=Lt.concat(xt)}let Ut;if(d===0)Ut=Gn.triangulateShape(J,D);else{let H=[],q=[];for(let E=0;E<d;E++){let P=E/d,B=p*Math.cos(P*Math.PI/2),O=x*Math.sin(P*Math.PI/2)+M;for(let Z=0,it=J.length;Z<it;Z++){let st=X(J[Z],mt[Z],O);_t(st.x,st.y,-B),P===0&&H.push(st)}for(let Z=0,it=G;Z<it;Z++){let st=D[Z];xt=Tt[Z];let R=[];for(let b=0,k=st.length;b<k;b++){let Y=X(st[b],xt[b],O);_t(Y.x,Y.y,-B),P===0&&R.push(Y)}P===0&&q.push(R)}}Ut=Gn.triangulateShape(H,q)}let Bt=Ut.length,kt=x+M;for(let H=0;H<j;H++){let q=f?X(y[H],Lt[H],kt):y[H];v?(S.copy(A.normals[0]).multiplyScalar(q.x),T.copy(A.binormals[0]).multiplyScalar(q.y),C.copy(g[0]).add(S).add(T),_t(C.x,C.y,C.z)):_t(q.x,q.y,0)}for(let H=1;H<=u;H++)for(let q=0;q<j;q++){let E=f?X(y[q],Lt[q],kt):y[q];v?(S.copy(A.normals[H]).multiplyScalar(E.x),T.copy(A.binormals[H]).multiplyScalar(E.y),C.copy(g[H]).add(S).add(T),_t(C.x,C.y,C.z)):_t(E.x,E.y,l/u*H)}for(let H=d-1;H>=0;H--){let q=H/d,E=p*Math.cos(q*Math.PI/2),P=x*Math.sin(q*Math.PI/2)+M;for(let B=0,O=J.length;B<O;B++){let Z=X(J[B],mt[B],P);_t(Z.x,Z.y,l+E)}for(let B=0,O=D.length;B<O;B++){let Z=D[B];xt=Tt[B];for(let it=0,st=Z.length;it<st;it++){let R=X(Z[it],xt[it],P);v?_t(R.x,R.y+g[u-1].y,g[u-1].x+E):_t(R.x,R.y,l+E)}}}ut(),W();function ut(){let H=s.length/3;if(f){let q=0,E=j*q;for(let P=0;P<Bt;P++){let B=Ut[P];nt(B[2]+E,B[1]+E,B[0]+E)}q=u+d*2,E=j*q;for(let P=0;P<Bt;P++){let B=Ut[P];nt(B[0]+E,B[1]+E,B[2]+E)}}else{for(let q=0;q<Bt;q++){let E=Ut[q];nt(E[2],E[1],E[0])}for(let q=0;q<Bt;q++){let E=Ut[q];nt(E[0]+j*u,E[1]+j*u,E[2]+j*u)}}n.addGroup(H,s.length/3-H,0)}function W(){let H=s.length/3,q=0;pt(J,q),q+=J.length;for(let E=0,P=D.length;E<P;E++){let B=D[E];pt(B,q),q+=B.length}n.addGroup(H,s.length/3-H,1)}function pt(H,q){let E=H.length;for(;--E>=0;){let P=E,B=E-1;B<0&&(B=H.length-1);for(let O=0,Z=u+d*2;O<Z;O++){let it=j*O,st=j*(O+1),R=q+P+it,b=q+B+it,k=q+B+st,Y=q+P+st;wt(R,b,k,Y)}}}function _t(H,q,E){h.push(H),h.push(q),h.push(E)}function nt(H,q,E){Dt(H),Dt(q),Dt(E);let P=s.length/3,B=w.generateTopUV(n,s,P-3,P-2,P-1);I(B[0]),I(B[1]),I(B[2])}function wt(H,q,E,P){Dt(H),Dt(q),Dt(P),Dt(q),Dt(E),Dt(P);let B=s.length/3,O=w.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);I(O[0]),I(O[1]),I(O[3]),I(O[1]),I(O[2]),I(O[3])}function Dt(H){s.push(h[H*3+0]),s.push(h[H*3+1]),s.push(h[H*3+2])}function I(H){r.push(H.x),r.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,t.options)}},Yd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],h=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new It(r,a),new It(o,h),new It(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],h=t[e*3+2],c=t[n*3],u=t[n*3+1],l=t[n*3+2],f=t[s*3],p=t[s*3+1],x=t[s*3+2],M=t[r*3],d=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new It(a,1-h),new It(c,1-l),new It(f,1-x),new It(M,1-m)]:[new It(o,1-h),new It(u,1-l),new It(p,1-x),new It(d,1-m)]}};function Zd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends ye{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],a=[],o=[],h=[],c=[],u=1/e,l=new z,f=new It,p=new z,x=new z,M=new z,d=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:d=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-d,p.z=m*0,M.copy(p),p.normalize(),h.push(p.x,p.y,p.z);break;case t.length-1:h.push(M.x,M.y,M.z);break;default:d=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-d,p.z=m*0,x.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),h.push(p.x,p.y,p.z),M.copy(x)}for(let w=0;w<=e;w++){let g=n+w*u*s,v=Math.sin(g),A=Math.cos(g);for(let T=0;T<=t.length-1;T++){l.x=t[T].x*v,l.y=t[T].y,l.z=t[T].x*A,a.push(l.x,l.y,l.z),f.x=w/e,f.y=T/(t.length-1),o.push(f.x,f.y);let S=h[3*T+0]*v,C=h[3*T+1],_=h[3*T+0]*A;c.push(S,C,_)}}for(let w=0;w<e;w++)for(let g=0;g<t.length-1;g++){let v=g+w*t.length,A=v,T=v+t.length,S=v+t.length+1,C=v+1;r.push(A,T,C),r.push(S,C,T)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mi=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),c=o+1,u=h+1,l=t/o,f=e/h,p=[],x=[],M=[],d=[];for(let m=0;m<u;m++){let w=m*f-a;for(let g=0;g<c;g++){let v=g*l-r;x.push(v,-w,0),M.push(0,0,1),d.push(g/o),d.push(1-m/h)}}for(let m=0;m<h;m++)for(let w=0;w<o;w++){let g=w+c*m,v=w+c*(m+1),A=w+1+c*(m+1),T=w+1+c*m;p.push(g,v,T),p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Wi=class i extends ye{constructor(t=new In([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,h=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,h,u),o+=h,h=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(u){let l=s.length/3,f=u.extractPoints(e),p=f.shape,x=f.holes;Gn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=x.length;d<m;d++){let w=x[d];Gn.isClockWise(w)===!0&&(x[d]=w.reverse())}let M=Gn.triangulateShape(p,x);for(let d=0,m=x.length;d<m;d++){let w=x[d];p=p.concat(w)}for(let d=0,m=p.length;d<m;d++){let w=p[d];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let d=0,m=M.length;d<m;d++){let w=M[d],g=w[0]+l,v=w[1]+l,A=w[2]+l;n.push(g,v,A),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Jd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ri=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,u=[],l=new z,f=new z,p=[],x=[],M=[],d=[];for(let m=0;m<=n;m++){let w=[],g=m/n,v=0;m===0&&a===0?v=.5/e:m===n&&h===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let T=A/e;l.x=-t*Math.cos(s+T*r)*Math.sin(a+g*o),l.y=t*Math.cos(a+g*o),l.z=t*Math.sin(s+T*r)*Math.sin(a+g*o),x.push(l.x,l.y,l.z),f.copy(l).normalize(),M.push(f.x,f.y,f.z),d.push(T+v,1-g),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){let g=u[m][w+1],v=u[m][w],A=u[m+1][w],T=u[m+1][w+1];(m!==0||a>0)&&p.push(g,v,T),(m!==n-1||h<Math.PI)&&p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],h=[],c=[],u=new z,l=new z,f=new z;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let M=x/s*r,d=p/n*Math.PI*2;l.x=(t+e*Math.cos(d))*Math.cos(M),l.y=(t+e*Math.cos(d))*Math.sin(M),l.z=e*Math.sin(d),o.push(l.x,l.y,l.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(l,u).normalize(),h.push(f.x,f.y,f.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let M=(s+1)*p+x-1,d=(s+1)*(p-1)+x-1,m=(s+1)*(p-1)+x,w=(s+1)*p+x;a.push(M,d,w),a.push(d,m,w)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bi=class i extends ye{constructor(t=new Tr(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,h=new z,c=new It,u=new z,l=[],f=[],p=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function M(){for(let g=0;g<e;g++)d(g);d(r===!1?e:0),w(),m()}function d(g){u=t.getPointAt(g/e,u);let v=a.normals[g],A=a.binormals[g];for(let T=0;T<=s;T++){let S=T/s*Math.PI*2,C=Math.sin(S),_=-Math.cos(S);h.x=_*v.x+C*A.x,h.y=_*v.y+C*A.y,h.z=_*v.z+C*A.z,h.normalize(),f.push(h.x,h.y,h.z),o.x=u.x+n*h.x,o.y=u.y+n*h.y,o.z=u.z+n*h.z,l.push(o.x,o.y,o.z)}}function m(){for(let g=1;g<=e;g++)for(let v=1;v<=s;v++){let A=(s+1)*(g-1)+(v-1),T=(s+1)*g+(v-1),S=(s+1)*g+v,C=(s+1)*(g-1)+v;x.push(A,T,C),x.push(T,S,C)}}function w(){for(let g=0;g<=e;g++)for(let v=0;v<=s;v++)c.x=g/e,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Dr=class extends qn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Pn=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Po=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Do=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lo=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,o=2*e-n;break;case Il:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Cl:a=t,h=2*n-e;break;case Il:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this._offsetPrev,l=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),M=x*x,d=M*x,m=-f*d+2*f*M-f*x,w=(1+f)*d+(-1.5-2*f)*M+(-.5+f)*x+1,g=(-1-p)*d+(1.5+p)*M+.5*x,v=p*d-p*M;for(let A=0;A!==o;++A)r[A]=m*a[u+A]+w*a[c+A]+g*a[h+A]+v*a[l+A];return r}},Uo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=(n-e)/(s-e),l=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*l+a[h+f]*u;return r}},Fo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&$d(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)h=!0;else{let l=o*n,f=l-n,p=l+n;for(let x=0;x!==n;++x){let M=e[l+x];if(M!==e[f+x]||M!==e[p+x]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let l=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[l+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=vo;var Si=class extends Sn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ar;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="color";var Oo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="number";var Bo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,h);return r}},Ur=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Sn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ar;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};zo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,l){return c.push(u,l),this},this.removeHandler=function(u){let l=c.indexOf(u);return l!==-1&&c.splice(l,2),this},this.getHandler=function(u){for(let l=0,f=c.length;l<f;l+=2){let p=c[l],x=c[l+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zh=new ko,Ho=class{constructor(t){this.manager=t!==void 0?t:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new _e,$c=new z,Kc=new z,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qc=new _e,er=new z,Al=new z,Nl=class extends Vo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),Al.copy(n.position),Al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Al),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,n.coordinateSystem,n.reversedDepth)}},Nr=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yi=class extends mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends Vo{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Go=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rc="\\[\\]\\.:\\/",Kd=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",Qd="[^"+rc.replace("\\.","")+"]",jd=/((?:WC+[\/:])*)/.source.replace("WC",oc),tf=/(WCOD+)?/.source.replace("WCOD",Qd),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),sf=new RegExp("^"+jd+tf+ef+nf+"$"),rf=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let e=sf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Bl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);var jc=new _e,oi=class{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(th),n}};function th(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}function ac(i,t,e,n){let s=of(n);switch(e){case $l:return i*t;case ra:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case La:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case Bn:case ql:return{byteLength:1,components:1};case Ls:case Yl:case Us:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case Ti:case na:case zn:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lf(i){let t=new WeakMap;function e(o,h){let c=o.array,u=o.usage,l=c.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,h,c){let u=h.array,l=h.updateRanges;if(i.bindBuffer(c,o),l.length===0)i.bufferSubData(c,0,u);else{l.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<l.length;p++){let x=l[f],M=l[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,l[f]=M)}l.length=f+1;for(let p=0,x=l.length;p<x;p++){let M=l[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:cf,alphahash_pars_fragment:hf,alphamap_fragment:uf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:xf,batching_vertex:_f,begin_vertex:yf,beginnormal_vertex:vf,bsdfs:Mf,iridescence_fragment:bf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Af,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:If,color_vertex:Pf,common:Df,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ep,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tp,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:ap,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:xp,map_particle_pars_fragment:_p,metalnessmap_fragment:yp,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:bp,morphnormal_vertex:Sp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Ip,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Np,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Qp,specularmap_pars_fragment:jp,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:xm,equirect_vert:_m,equirect_frag:ym,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:bm,meshbasic_frag:Sm,meshlambert_vert:wm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Im,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Nm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Hm},Nt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Jn={basic:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:sn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:sn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:sn([Nt.points,Nt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:sn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:sn([Nt.common,Nt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:sn([Nt.sprite,Nt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:sn([Nt.common,Nt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:sn([Nt.lights,Nt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Jn.physical={uniforms:sn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ba={r:0,b:0,g:0},Qi=new Rn,Vm=new _e;function Gm(i,t,e,n,s,r,a){let o=new Xt(0),h=r===!0?0:1,c,u,l=null,f=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v)),v}function M(g){let v=!1,A=x(g);A===null?m(o,h):A&&A.isColor&&(m(A,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(g,v){let A=x(v);A&&(A.isCubeTexture||A.mapping===Or)?(u===void 0&&(u=new pe(new yi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ki(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Qi)),u.material.toneMapped=de.getTransfer(A.colorSpace)!==xe,(l!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new pe(new Mi(2,2),new On({name:"BackgroundMaterial",uniforms:Ki(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=de.getTransfer(A.colorSpace)!==xe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(l!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,l=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,v){g.getRGB(Ba,ic(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,v,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),h=v,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,m(o,h)},render:M,addToRenderList:d,dispose:w}}function Wm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,D,U,N,G){let J=!1,X=l(N,U,D);r!==X&&(r=X,c(r.object)),J=p(y,N,U,G),J&&x(y,N,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(y,D,U,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function l(y,D,U){let N=U.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[D.id];J===void 0&&(J={},G[D.id]=J);let X=J[N];return X===void 0&&(X=f(h()),J[N]=X),X}function f(y){let D=[],U=[],N=[];for(let G=0;G<e;G++)D[G]=0,U[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,D,U,N){let G=r.attributes,J=D.attributes,X=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let Tt=G[tt],xt=J[tt];if(xt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),Tt===void 0||Tt.attribute!==xt||xt&&Tt.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function x(y,D,U,N){let G={},J=D.attributes,X=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let Tt=J[tt];Tt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor));let xt={};xt.attribute=Tt,Tt&&Tt.data&&(xt.data=Tt.data),G[tt]=xt,X++}r.attributes=G,r.attributesNum=X,r.index=N}function M(){let y=r.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function d(y){m(y,0)}function m(y,D){let U=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),G[y]!==D&&(i.vertexAttribDivisor(y,D),G[y]=D)}function w(){let y=r.newAttributes,D=r.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==y[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function g(y,D,U,N,G,J,X){X===!0?i.vertexAttribIPointer(y,D,U,G,J):i.vertexAttribPointer(y,D,U,N,G,J)}function v(y,D,U,N){M();let G=N.attributes,J=U.getAttributes(),X=D.defaultAttributeValues;for(let j in J){let tt=J[j];if(tt.location>=0){let mt=G[j];if(mt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){let Tt=mt.normalized,xt=mt.itemSize,Lt=t.get(mt);if(Lt===void 0)continue;let Ut=Lt.buffer,Bt=Lt.type,kt=Lt.bytesPerElement,ut=Bt===i.INT||Bt===i.UNSIGNED_INT||mt.gpuType===na;if(mt.isInterleavedBufferAttribute){let W=mt.data,pt=W.stride,_t=mt.offset;if(W.isInstancedInterleavedBuffer){for(let nt=0;nt<tt.locationSize;nt++)m(tt.location+nt,W.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let nt=0;nt<tt.locationSize;nt++)d(tt.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let nt=0;nt<tt.locationSize;nt++)g(tt.location+nt,xt/tt.locationSize,Bt,Tt,pt*kt,(_t+xt/tt.locationSize*nt)*kt,ut)}else{if(mt.isInstancedBufferAttribute){for(let W=0;W<tt.locationSize;W++)m(tt.location+W,mt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let W=0;W<tt.locationSize;W++)d(tt.location+W);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let W=0;W<tt.locationSize;W++)g(tt.location+W,xt/tt.locationSize,Bt,Tt,xt*kt,xt/tt.locationSize*W*kt,ut)}}else if(X!==void 0){let Tt=X[j];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(tt.location,Tt);break;case 3:i.vertexAttrib3fv(tt.location,Tt);break;case 4:i.vertexAttrib4fv(tt.location,Tt);break;default:i.vertexAttrib1fv(tt.location,Tt)}}}}w()}function A(){C();for(let y in n){let D=n[y];for(let U in D){let N=D[U];for(let G in N)u(N[G].object),delete N[G];delete D[U]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let U in D){let N=D[U];for(let G in N)u(N[G].object),delete N[G];delete D[U]}delete n[y.id]}function S(y){for(let D in n){let U=n[D];if(U[y.id]===void 0)continue;let N=U[y.id];for(let G in N)u(N[G].object),delete N[G];delete U[y.id]}}function C(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:M,enableAttribute:d,disableUnusedAttributes:w}}function Xm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),e.update(u,n,l))}function o(c,u,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let p=0;for(let x=0;x<l;x++)p+=u[x];e.update(p,n,1)}function h(c,u,l,f){if(l===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,l);let x=0;for(let M=0;M<l;M++)x+=u[M]*f[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==mn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Bn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==zn&&!C)}function h(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=h(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let l=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:w,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function Ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Kt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){let p=l.length!==0||f||n!==0||s;return s=f,n=l.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=u(l,f,0)},this.setState=function(l,f,p){let x=l.clippingPlanes,M=l.clipIntersection,d=l.clipShadows,m=i.get(l);if(!s||x===null||x.length===0||r&&!d)r?u(null):c();else{let w=r?0:n,g=w*4,v=m.clippingState||null;h.value=v,v=u(x,f,g,p);for(let A=0;A!==g;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,f,p,x){let M=l!==null?l.length:0,d=null;if(M!==0){if(d=h.value,x!==!0||d===null){let m=p+M*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<m)&&(d=new Float32Array(m));for(let g=0,v=p;g!==M;++g,v+=4)a.copy(l[g]).applyMatrix4(w,o),a.normal.toArray(d,v),d[v+3]=a.constant}h.value=d,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}function Zm(i){let t=new WeakMap;function e(a,o){return o===jo?a.mapping=Zi:o===ta&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jo||o===ta)if(t.has(a)){let h=t.get(a).texture;return e(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new Eo(h.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=4,Jh=[.125,.215,.35,.446,.526,.582],es=20,lc=new Yi,$h=new Xt,cc=null,hc=0,uc=0,dc=!1,ts=(1+Math.sqrt(5))/2,Bs=1/ts,Kh=[new z(-ts,Bs,0),new z(ts,Bs,0),new z(-Bs,0,ts),new z(Bs,0,ts),new z(0,ts,-Bs),new z(0,ts,Bs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Jm=new z,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jm}=r;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Us,format:mn,colorSpace:zi,depthBuffer:!1},s=Qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Km(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s,r){let h=new ln(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,p=l.toneMapping;l.getClearColor($h),l.toneMapping=li,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let M=new si({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),d=new pe(new yi,M),m=!1,w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,m=!0):(M.color.copy($h),m=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(h.up.set(0,c[g],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[g],r.y,r.z)):v===1?(h.up.set(0,0,c[g]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[g],r.z)):(h.up.set(0,c[g],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[g]));let A=this._cubeSize;za(s,v*A,g>2?A:0,A,A),l.setRenderTarget(s),m&&l.render(d,h),l.render(t,h)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=p,l.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;za(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kh[(s-r-1)%Kh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new pe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),M=r/x,d=isFinite(r)?1+Math.floor(u*M):es;d>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${es}`);let m=[],w=0;for(let S=0;S<es;++S){let C=S/M,_=Math.exp(-C*C/2);m.push(_),S===0?w+=_:S<d&&(w+=2*_)}for(let S=0;S<m.length;S++)m[S]=m[S]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-n;let v=this._sizeLods[s],A=3*v*(s>g-zs?s-g+zs:0),T=4*(this._cubeSize-v);za(e,A,T,3*v,2*v),h.setRenderTarget(e),h.render(l,lc)}};function $m(i){let t=[],e=[],n=[],s=i,r=i-zs+1+Jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let h=1/o;a>i-zs?h=Jh[a-i+zs-1]:a===0&&(h=0),n.push(h);let c=1/(o-2),u=-c,l=1+c,f=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,x=6,M=3,d=2,m=1,w=new Float32Array(M*x*p),g=new Float32Array(d*x*p),v=new Float32Array(m*x*p);for(let T=0;T<p;T++){let S=T%3*2/3-1,C=T>2?0:-1,_=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];w.set(_,M*x*T),g.set(f,d*x*T);let y=[T,T,T,T,T,T];v.set(y,m*x*T)}let A=new ye;A.setAttribute("position",new Ge(w,M)),A.setAttribute("uv",new Ge(g,d)),A.setAttribute("faceIndex",new Ge(v,m)),t.push(A),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qh(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Km(i,t,e){let n=new Float32Array(es),s=new z(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function jh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let h=o.mapping,c=h===jo||h===ta,u=h===Zi||h===Ji;if(c||u){let l=t.get(o),f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Hs(i)),l=c?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Hs(i)),l=c?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let h=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&h++;return h===c}function r(o){let h=o.target;h.removeEventListener("dispose",r);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function t0(i,t,e,n){let s={},r=new WeakMap;function a(l){let f=l.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(l){let f=l.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(l){let f=[],p=l.index,x=l.attributes.position,M=0;if(p!==null){let w=p.array;M=p.version;for(let g=0,v=w.length;g<v;g+=3){let A=w[g+0],T=w[g+1],S=w[g+2];f.push(A,T,T,S,S,A)}}else if(x!==void 0){let w=x.array;M=x.version;for(let g=0,v=w.length/3-1;g<v;g+=3){let A=g+0,T=g+1,S=g+2;f.push(A,T,T,S,S,A)}}else return;let d=new(nc(f)?pr:fr)(f,1);d.version=M;let m=r.get(l);m&&t.remove(m),r.set(l,d)}function u(l){let f=r.get(l);if(f){let p=l.index;p!==null&&f.version<p.version&&c(l)}else c(l);return r.get(l)}return{get:o,update:h,getWireframeAttribute:u}}function e0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*a,x),e.update(p,n,x))}function u(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let d=0;for(let m=0;m<x;m++)d+=p[m];e.update(d,n,1)}function l(f,p,x,M){if(x===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],M[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,x);let m=0;for(let w=0;w<x;w++)m+=p[w]*M[w];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function n0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function i0(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,h){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==l){let _=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],g=0;p===!0&&(g=1),x===!0&&(g=2),M===!0&&(g=3);let v=o.attributes.position.count*g,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*A*4*l),S=new ur(T,v,A,l);S.type=zn,S.needsUpdate=!0;let C=g*4;for(let y=0;y<l;y++){let D=d[y],U=m[y],N=w[y],G=v*A*4*y;for(let J=0;J<D.count;J++){let X=J*C;p===!0&&(s.fromBufferAttribute(D,J),T[G+X+0]=s.x,T[G+X+1]=s.y,T[G+X+2]=s.z,T[G+X+3]=0),x===!0&&(s.fromBufferAttribute(U,J),T[G+X+4]=s.x,T[G+X+5]=s.y,T[G+X+6]=s.z,T[G+X+7]=0),M===!0&&(s.fromBufferAttribute(N,J),T[G+X+8]=s.x,T[G+X+9]=s.y,T[G+X+10]=s.z,T[G+X+11]=N.itemSize===4?s.w:1)}}f={count:l,texture:S,size:new It(v,A)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let x=o.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function s0(i,t,e,n){let s=new WeakMap;function r(h){let c=n.render.frame,u=h.geometry,l=t.get(h,u);if(s.get(l)!==c&&(t.update(l),s.set(l,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return l}function a(){s=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var yu=new pn,eu=new _r(1,1),vu=new ur,Mu=new So,bu=new gr,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),ou=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=iu[t];e===void 0&&(e=new Int32Array(t),iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),qe(e,n)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),qe(e,n)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),qe(e,n)}}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=jl,r=eu):r=yu,e.setTexture2D(t||r,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bu,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function w0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(i,t){i.uniform1fv(this.addr,t)}function T0(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function A0(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function R0(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function C0(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I0(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function U0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function N0(i,t){i.uniform1uiv(this.addr,t)}function O0(i,t){i.uniform2uiv(this.addr,t)}function B0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||yu,r[a])}function H0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function V0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bu,r[a])}function G0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vu,r[a])}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return N0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}var pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function au(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){au(e,c===void 0?new pc(o,i,t):new mc(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new gc(o),au(e,l)),e=l}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);X0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q0=37297,Y0=0;function Z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var cu=new Kt;function J0(i){de._getMatrix(cu,de.workingColorSpace,i);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Z0(i.getShaderSource(t),o)}else return r}function $0(i,t){let e=J0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(i,t){let e;switch(t){case Sh:e="Linear";break;case wh:e="Reinhard";break;case Eh:e="Cineon";break;case Th:e="ACESFilmic";break;case Rh:e="AgX";break;case Ds:e="Neutral";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ka=new z;function Q0(){de.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),t=ka.y.toFixed(4),e=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gr(i){return i!==""}function uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=ie[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(rg,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ji&&(t="ENVMAP_MODE_REFRACTION"),t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=ag(e),c=lg(e),u=cg(e),l=hg(e),f=ug(e),p=j0(e),x=tg(r),M=s.createProgram(),d,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),m.length>0&&(m+=`
`)):(d=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),m=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ie.tonemapping_pars_fragment:"",e.toneMapping!==li?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=xc(a),a=uu(a,e),a=du(a,e),o=xc(o),o=uu(o,e),o=du(o,e),a=fu(a),o=fu(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=w+d+a,v=w+m+o,A=lu(s,s.VERTEX_SHADER,g),T=lu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,A),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function S(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",N=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(T)||"",J=U.trim(),X=N.trim(),j=G.trim(),tt=!0,mt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,T);else{let Tt=hu(s,A,"vertex"),xt=hu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+Tt+`
`+xt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||j==="")&&(mt=!1);mt&&(D.diagnostics={runnable:tt,programLog:J,vertexShader:{log:X,prefix:d},fragmentShader:{log:j,prefix:m}})}s.deleteShader(A),s.deleteShader(T),C=new ks(s,M),_=eg(s,M)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,q0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}var fg=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yc(t),e.set(t,n)),n}},yc=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,a){let o=new Es,h=new _c,c=new Set,u=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function d(_,y,D,U,N){let G=U.fog,J=N.geometry,X=_.isMeshStandardMaterial?U.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),tt=j&&j.mapping===Or?j.image.height:null,mt=x[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Tt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Tt!==void 0?Tt.length:0,Lt=0;J.morphAttributes.position!==void 0&&(Lt=1),J.morphAttributes.normal!==void 0&&(Lt=2),J.morphAttributes.color!==void 0&&(Lt=3);let Ut,Bt,kt,ut;if(mt){let Ot=Jn[mt];Ut=Ot.vertexShader,Bt=Ot.fragmentShader}else Ut=_.vertexShader,Bt=_.fragmentShader,h.update(_),kt=h.getVertexShaderID(_),ut=h.getFragmentShaderID(_);let W=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),_t=N.isInstancedMesh===!0,nt=N.isBatchedMesh===!0,wt=!!_.map,Dt=!!_.matcap,I=!!j,H=!!_.aoMap,q=!!_.lightMap,E=!!_.bumpMap,P=!!_.normalMap,B=!!_.displacementMap,O=!!_.emissiveMap,Z=!!_.metalnessMap,it=!!_.roughnessMap,st=_.anisotropy>0,R=_.clearcoat>0,b=_.dispersion>0,k=_.iridescence>0,Y=_.sheen>0,K=_.transmission>0,V=st&&!!_.anisotropyMap,ht=R&&!!_.clearcoatMap,dt=R&&!!_.clearcoatNormalMap,St=R&&!!_.clearcoatRoughnessMap,vt=k&&!!_.iridescenceMap,$=k&&!!_.iridescenceThicknessMap,yt=Y&&!!_.sheenColorMap,bt=Y&&!!_.sheenRoughnessMap,Et=!!_.specularMap,Mt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,F=K&&!!_.transmissionMap,ot=K&&!!_.thicknessMap,ct=!!_.gradientMap,gt=!!_.alphaMap,ft=_.alphaTest>0,at=!!_.alphaHash,At=!!_.extensions,zt=li;_.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Qt={shaderID:mt,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:Bt,defines:_.defines,customVertexShaderID:kt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:nt,batchingColor:nt&&N._colorsTexture!==null,instancing:_t,instancingColor:_t&&N.instanceColor!==null,instancingMorph:_t&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zi,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:Dt,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:tt,aoMap:H,lightMap:q,bumpMap:E,normalMap:P,displacementMap:f&&B,emissiveMap:O,normalMapObjectSpace:P&&_.normalMapType===Dh,normalMapTangentSpace:P&&_.normalMapType===Oa,metalnessMap:Z,roughnessMap:it,anisotropy:st,anisotropyMap:V,clearcoat:R,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:St,dispersion:b,iridescence:k,iridescenceMap:vt,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:yt,sheenRoughnessMap:bt,specularMap:Et,specularColorMap:Mt,specularIntensityMap:Rt,transmission:K,transmissionMap:F,thicknessMap:ot,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Oi&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:ft,alphaHash:at,combine:_.combine,mapUv:wt&&M(_.map.channel),aoMapUv:H&&M(_.aoMap.channel),lightMapUv:q&&M(_.lightMap.channel),bumpMapUv:E&&M(_.bumpMap.channel),normalMapUv:P&&M(_.normalMap.channel),displacementMapUv:B&&M(_.displacementMap.channel),emissiveMapUv:O&&M(_.emissiveMap.channel),metalnessMapUv:Z&&M(_.metalnessMap.channel),roughnessMapUv:it&&M(_.roughnessMap.channel),anisotropyMapUv:V&&M(_.anisotropyMap.channel),clearcoatMapUv:ht&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&M(_.sheenRoughnessMap.channel),specularMapUv:Et&&M(_.specularMap.channel),specularColorMapUv:Mt&&M(_.specularColorMap.channel),specularIntensityMapUv:Rt&&M(_.specularIntensityMap.channel),transmissionMapUv:F&&M(_.transmissionMap.channel),thicknessMapUv:ot&&M(_.thicknessMap.channel),alphaMapUv:gt&&M(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(P||st),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(wt||gt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:O&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function m(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(w(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let y=x[_.type],D;if(y){let U=Jn[y];D=Gh.clone(U.uniforms)}else D=_.uniforms;return D}function A(_,y){let D;for(let U=0,N=u.length;U<N;U++){let G=u[U];if(G.cacheKey===y){D=G,++D.usedTimes;break}}return D===void 0&&(D=new dg(i,y,_,r),u.push(D)),D}function T(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function S(_){h.remove(_)}function C(){h.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:S,programs:u,dispose:C}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,f,p,x,M,d){let m=i[t];return m===void 0?(m={id:l.id,object:l,geometry:f,material:p,groupOrder:x,renderOrder:l.renderOrder,z:M,group:d},i[t]=m):(m.id=l.id,m.object=l,m.geometry=f,m.material=p,m.groupOrder=x,m.renderOrder=l.renderOrder,m.z=M,m.group=d),t++,m}function o(l,f,p,x,M,d){let m=a(l,f,p,x,M,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function h(l,f,p,x,M,d){let m=a(l,f,p,x,M,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(l,f){e.length>1&&e.sort(l||gg),n.length>1&&n.sort(f||mu),s.length>1&&s.sort(f||mu)}function u(){for(let l=t,f=i.length;l<f;l++){let p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:u,sort:c}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Xt};break;case"SpotLight":e={position:new z,direction:new z,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new _g,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new _e,a=new _e;function o(c){let u=0,l=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,x=0,M=0,d=0,m=0,w=0,g=0,v=0,A=0,T=0,S=0;c.sort(Mg);for(let _=0,y=c.length;_<y;_++){let D=c[_],U=D.color,N=D.intensity,G=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*N,l+=U.g*N,f+=U.b*N;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],N);S++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=D.shadow.matrix,w++}n.directional[p]=X,p++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(N),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[M]=X;let j=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,j.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=j.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=J,v++}M++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(U).multiplyScalar(N),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[d]=X,d++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[x]=tt,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=D.shadow.matrix,g++}n.point[x]=X,x++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(N),X.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[m]=X,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==M||C.rectAreaLength!==d||C.hemiLength!==m||C.numDirectionalShadows!==w||C.numPointShadows!==g||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=d,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,C.directionalLength=p,C.pointLength=x,C.spotLength=M,C.rectAreaLength=d,C.hemiLength=m,C.numDirectionalShadows=w,C.numPointShadows=g,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=S,n.version=vg++)}function h(c,u){let l=0,f=0,p=0,x=0,M=0,d=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let g=c[m];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),l++}else if(g.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),p++}else if(g.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(g.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),f++}else if(g.isHemisphereLight){let v=n.hemi[M];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(d),M++}}}return{setup:o,setupView:h,state:n}}function xu(i){let t=new bg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function h(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function Sg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xu(i),t.set(s,[o])):r>=a.length?(o=new xu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(i,t,e){let n=new As,s=new It,r=new It,a=new ge,o=new Po({depthPacking:Ph}),h=new Do,c={},u=e.maxTextureSize,l={[ni]:$e,[$e]:ni,[hn]:hn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new ye;x.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new pe(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let m=this.type;this.render=function(T,S,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=m!==Yn&&this.type===Yn,G=m===Yn&&this.type!==Yn;for(let J=0,X=T.length;J<X;J++){let j=T[J],tt=j.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let mt=tt.getFrameExtents();if(s.multiply(mt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,tt.mapSize.y=r.y)),tt.map===null||N===!0||G===!0){let xt=this.type!==Yn?{minFilter:fn,magFilter:fn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Wn(s.x,s.y,xt),tt.map.texture.name=j.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let Tt=tt.getViewportCount();for(let xt=0;xt<Tt;xt++){let Lt=tt.getViewport(xt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),U.viewport(a),tt.updateMatrices(j,xt),n=tt.getFrustum(),v(S,C,tt.camera,j,this.type)}tt.isPointLightShadow!==!0&&this.type===Yn&&w(tt,C),tt.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(_,y,D)};function w(T,S){let C=t.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,C,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,C,p,M,null)}function g(T,S,C,_){let y=null,D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=C.isPointLight===!0?h:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let U=y.uuid,N=S.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let J=G[N];J===void 0&&(J=y.clone(),G[N]=J,S.addEventListener("dispose",A)),y=J}if(y.visible=S.visible,y.wireframe=S.wireframe,_===Yn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:l[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=C}return y}function v(T,S,C,_,y){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let N=t.update(T),G=T.material;if(Array.isArray(G)){let J=N.groups;for(let X=0,j=J.length;X<j;X++){let tt=J[X],mt=G[tt.materialIndex];if(mt&&mt.visible){let Tt=g(T,mt,_,y);T.onBeforeShadow(i,T,S,C,N,Tt,tt),i.renderBufferDirect(C,null,N,Tt,T,tt),T.onAfterShadow(i,T,S,C,N,Tt,tt)}}}else if(G.visible){let J=g(T,G,_,y);T.onBeforeShadow(i,T,S,C,N,J,null),i.renderBufferDirect(C,null,N,J,T,null),T.onAfterShadow(i,T,S,C,N,J,null)}}let U=T.children;for(let N=0,G=U.length;N<G;N++)v(U[N],S,C,_,y)}function A(T){T.target.removeEventListener("dispose",A);for(let C in c){let _=c[C],y=T.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Ag={[Xo]:qo,[Yo]:$o,[Zo]:Ko,[Bi]:Jo,[qo]:Xo,[$o]:Yo,[Ko]:Zo,[Jo]:Bi};function Rg(i,t){function e(){let F=!1,ot=new ge,ct=null,gt=new ge(0,0,0,0);return{setMask:function(ft){ct!==ft&&!F&&(i.colorMask(ft,ft,ft,ft),ct=ft)},setLocked:function(ft){F=ft},setClear:function(ft,at,At,zt,Qt){Qt===!0&&(ft*=zt,at*=zt,At*=zt),ot.set(ft,at,At,zt),gt.equals(ot)===!1&&(i.clearColor(ft,at,At,zt),gt.copy(ot))},reset:function(){F=!1,ct=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,ct=null,gt=null,ft=null;return{setReversed:function(at){if(ot!==at){let At=t.get("EXT_clip_control");at?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=at;let zt=ft;ft=null,this.setClear(zt)}},getReversed:function(){return ot},setTest:function(at){at?W(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(at){ct!==at&&!F&&(i.depthMask(at),ct=at)},setFunc:function(at){if(ot&&(at=Ag[at]),gt!==at){switch(at){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=at}},setLocked:function(at){F=at},setClear:function(at){ft!==at&&(ot&&(at=1-at),i.clearDepth(at),ft=at)},reset:function(){F=!1,ct=null,gt=null,ft=null,ot=!1}}}function s(){let F=!1,ot=null,ct=null,gt=null,ft=null,at=null,At=null,zt=null,Qt=null;return{setTest:function(Ot){F||(Ot?W(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Ot){ot!==Ot&&!F&&(i.stencilMask(Ot),ot=Ot)},setFunc:function(Ot,Zt,ne){(ct!==Ot||gt!==Zt||ft!==ne)&&(i.stencilFunc(Ot,Zt,ne),ct=Ot,gt=Zt,ft=ne)},setOp:function(Ot,Zt,ne){(at!==Ot||At!==Zt||zt!==ne)&&(i.stencilOp(Ot,Zt,ne),at=Ot,At=Zt,zt=ne)},setLocked:function(Ot){F=Ot},setClear:function(Ot){Qt!==Ot&&(i.clearStencil(Ot),Qt=Ot)},reset:function(){F=!1,ot=null,ct=null,gt=null,ft=null,at=null,At=null,zt=null,Qt=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,c=new WeakMap,u={},l={},f=new WeakMap,p=[],x=null,M=!1,d=null,m=null,w=null,g=null,v=null,A=null,T=null,S=new Xt(0,0,0),C=0,_=!1,y=null,D=null,U=null,N=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=j>=2);let mt=null,Tt={},xt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ut=new ge().fromArray(xt),Bt=new ge().fromArray(Lt);function kt(F,ot,ct,gt){let ft=new Uint8Array(4),at=i.createTexture();i.bindTexture(F,at),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ct;At++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return at}let ut={};ut[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Bi),E(!1),P(kl),W(i.CULL_FACE),H(ai);function W(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function _t(F,ot){return l[F]!==ot?(i.bindFramebuffer(F,ot),l[F]=ot,F===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function nt(F,ot){let ct=p,gt=!1;if(F){ct=f.get(ot),ct===void 0&&(ct=[],f.set(ot,ct));let ft=F.textures;if(ct.length!==ft.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let at=0,At=ft.length;at<At;at++)ct[at]=i.COLOR_ATTACHMENT0+at;ct.length=ft.length,gt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ct)}function wt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Dt={[_i]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Dt[oh]=i.MIN,Dt[ah]=i.MAX;let I={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function H(F,ot,ct,gt,ft,at,At,zt,Qt,Ot){if(F===ai){M===!0&&(pt(i.BLEND),M=!1);return}if(M===!1&&(W(i.BLEND),M=!0),F!==ih){if(F!==d||Ot!==_){if((m!==_i||v!==_i)&&(i.blendEquation(i.FUNC_ADD),m=_i,v=_i),Ot)switch(F){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,g=null,A=null,T=null,S.set(0,0,0),C=0,d=F,_=Ot}return}ft=ft||ot,at=at||ct,At=At||gt,(ot!==m||ft!==v)&&(i.blendEquationSeparate(Dt[ot],Dt[ft]),m=ot,v=ft),(ct!==w||gt!==g||at!==A||At!==T)&&(i.blendFuncSeparate(I[ct],I[gt],I[at],I[At]),w=ct,g=gt,A=at,T=At),(zt.equals(S)===!1||Qt!==C)&&(i.blendColor(zt.r,zt.g,zt.b,Qt),S.copy(zt),C=Qt),d=F,_=!1}function q(F,ot){F.side===hn?pt(i.CULL_FACE):W(i.CULL_FACE);let ct=F.side===$e;ot&&(ct=!ct),E(ct),F.blending===Oi&&F.transparent===!1?H(ai):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),O(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function E(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function P(F){F!==eh?(W(i.CULL_FACE),F!==D&&(F===kl?i.cullFace(i.BACK):F===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=F}function B(F){F!==U&&(X&&i.lineWidth(F),U=F)}function O(F,ot,ct){F?(W(i.POLYGON_OFFSET_FILL),(N!==ot||G!==ct)&&(i.polygonOffset(ot,ct),N=ot,G=ct)):pt(i.POLYGON_OFFSET_FILL)}function Z(F){F?W(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function it(F){F===void 0&&(F=i.TEXTURE0+J-1),mt!==F&&(i.activeTexture(F),mt=F)}function st(F,ot,ct){ct===void 0&&(mt===null?ct=i.TEXTURE0+J-1:ct=mt);let gt=Tt[ct];gt===void 0&&(gt={type:void 0,texture:void 0},Tt[ct]=gt),(gt.type!==F||gt.texture!==ot)&&(mt!==ct&&(i.activeTexture(ct),mt=ct),i.bindTexture(F,ot||ut[F]),gt.type=F,gt.texture=ot)}function R(){let F=Tt[mt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(F){Ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function bt(F){Bt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Bt.copy(F))}function Et(F,ot){let ct=c.get(ot);ct===void 0&&(ct=new WeakMap,c.set(ot,ct));let gt=ct.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(ot,F.name),ct.set(F,gt))}function Mt(F,ot){let gt=c.get(ot).get(F);h.get(ot)!==gt&&(i.uniformBlockBinding(ot,gt,F.__bindingPointIndex),h.set(ot,gt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,Tt={},l={},f=new WeakMap,p=[],x=null,M=!1,d=null,m=null,w=null,g=null,v=null,A=null,T=null,S=new Xt(0,0,0),C=0,_=!1,y=null,D=null,U=null,N=null,G=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:pt,bindFramebuffer:_t,drawBuffers:nt,useProgram:wt,setBlending:H,setMaterial:q,setFlipSided:E,setCullFace:P,setLineWidth:B,setPolygonOffset:O,setScissorTest:Z,activeTexture:it,bindTexture:st,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:vt,texImage3D:$,updateUBOMapping:Et,uniformBlockBinding:Mt,texStorage2D:dt,texStorage3D:St,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:ht,scissor:yt,viewport:bt,reset:Rt}}function Cg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap,l,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return p?new OffscreenCanvas(R,b):hr("canvas")}function M(R,b,k){let Y=1,K=st(R);if((K.width>k||K.height>k)&&(Y=k/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let V=Math.floor(Y*K.width),ht=Math.floor(Y*K.height);l===void 0&&(l=x(V,ht));let dt=b?x(V,ht):l;return dt.width=V,dt.height=ht,dt.getContext("2d").drawImage(R,0,0,V,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+ht+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function d(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(R,b,k,Y,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=b;if(b===i.RED&&(k===i.FLOAT&&(V=i.R32F),k===i.HALF_FLOAT&&(V=i.R16F),k===i.UNSIGNED_BYTE&&(V=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.R8UI),k===i.UNSIGNED_SHORT&&(V=i.R16UI),k===i.UNSIGNED_INT&&(V=i.R32UI),k===i.BYTE&&(V=i.R8I),k===i.SHORT&&(V=i.R16I),k===i.INT&&(V=i.R32I)),b===i.RG&&(k===i.FLOAT&&(V=i.RG32F),k===i.HALF_FLOAT&&(V=i.RG16F),k===i.UNSIGNED_BYTE&&(V=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RG8UI),k===i.UNSIGNED_SHORT&&(V=i.RG16UI),k===i.UNSIGNED_INT&&(V=i.RG32UI),k===i.BYTE&&(V=i.RG8I),k===i.SHORT&&(V=i.RG16I),k===i.INT&&(V=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGB8UI),k===i.UNSIGNED_SHORT&&(V=i.RGB16UI),k===i.UNSIGNED_INT&&(V=i.RGB32UI),k===i.BYTE&&(V=i.RGB8I),k===i.SHORT&&(V=i.RGB16I),k===i.INT&&(V=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),k===i.UNSIGNED_INT&&(V=i.RGBA32UI),k===i.BYTE&&(V=i.RGBA8I),k===i.SHORT&&(V=i.RGBA16I),k===i.INT&&(V=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),b===i.RGBA){let ht=K?lr:de.getTransfer(Y);k===i.FLOAT&&(V=i.RGBA32F),k===i.HALF_FLOAT&&(V=i.RGBA16F),k===i.UNSIGNED_BYTE&&(V=ht===xe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(R,b){let k;return R?b===null||b===Ti||b===Fs?k=i.DEPTH24_STENCIL8:b===zn?k=i.DEPTH32F_STENCIL8:b===Ls&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ti||b===Fs?k=i.DEPTH_COMPONENT24:b===zn?k=i.DEPTH_COMPONENT32F:b===Ls&&(k=i.DEPTH_COMPONENT16),k}function A(R,b){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&u.delete(b)}function S(R){let b=R.target;b.removeEventListener("dispose",S),y(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,Y=f.get(k);if(Y){let K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(R),Object.keys(Y).length===0&&f.delete(k)}n.remove(R)}function _(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let k=R.source,Y=f.get(k);delete Y[b.__cacheKey],a.memory.textures--}function y(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let Y=0,K=k.length;Y<K;Y++){let V=n.get(k[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(R)}let D=0;function U(){D=0}function N(){let R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function G(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function J(R,b){let k=n.get(R);if(R.isVideoTexture&&Z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function X(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ut(k,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function j(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ut(k,R,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function tt(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){W(k,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let mt={[vs]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},Tt={[fn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},xt={[Lh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[jl]:i.LEQUAL,[Fh]:i.EQUAL,[Bh]:i.GEQUAL,[Nh]:i.GREATER,[Oh]:i.NOTEQUAL};function Lt(R,b){if(b.type===zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===ea||b.magFilter===Br||b.magFilter===Zn||b.minFilter===Mn||b.minFilter===ea||b.minFilter===Br||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,mt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,mt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,mt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Tt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==Br&&b.minFilter!==Zn||b.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ut(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let Y=b.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let V=G(b);if(V!==R.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[V].usedTimes++;let ht=K[R.__cacheKey];ht!==void 0&&(K[R.__cacheKey].usedTimes--,ht.usedTimes===0&&_(b)),R.__cacheKey=V,R.__webglTexture=K[V].texture}return k}function Bt(R,b,k){return Math.floor(Math.floor(R/k)/b)}function kt(R,b,k,Y){let V=R.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,Y,b.data);else{V.sort(($,yt)=>$.start-yt.start);let ht=0;for(let $=1;$<V.length;$++){let yt=V[ht],bt=V[$],Et=yt.start+yt.count,Mt=Bt(bt.start,b.width,4),Rt=Bt(yt.start,b.width,4);bt.start<=Et+1&&Mt===Rt&&Bt(bt.start+bt.count-1,b.width,4)===Mt?yt.count=Math.max(yt.count,bt.start+bt.count-yt.start):(++ht,V[ht]=bt)}V.length=ht+1;let dt=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let $=0,yt=V.length;$<yt;$++){let bt=V[$],Et=Math.floor(bt.start/4),Mt=Math.ceil(bt.count/4),Rt=Et%b.width,F=Math.floor(Et/b.width),ot=Mt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Rt,F,ot,ct,k,Y,b.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ut(R,b,k){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let K=Ut(R,b),V=b.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+k);let ht=n.get(V);if(V.version!==ht.__version||K===!0){e.activeTexture(i.TEXTURE0+k);let dt=de.getPrimaries(de.workingColorSpace),St=b.colorSpace===ci?null:de.getPrimaries(b.colorSpace),vt=b.colorSpace===ci||dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let $=M(b.image,!1,s.maxTextureSize);$=it(b,$);let yt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Et=g(b.internalFormat,yt,bt,b.colorSpace,b.isVideoTexture);Lt(Y,b);let Mt,Rt=b.mipmaps,F=b.isVideoTexture!==!0,ot=ht.__version===void 0||K===!0,ct=V.dataReady,gt=A(b,$);if(b.isDepthTexture)Et=v(b.format===Ns,b.type),ot&&(F?e.texStorage2D(i.TEXTURE_2D,1,Et,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,yt,bt,null));else if(b.isDataTexture)if(Rt.length>0){F&&ot&&e.texStorage2D(i.TEXTURE_2D,gt,Et,Rt[0].width,Rt[0].height);for(let ft=0,at=Rt.length;ft<at;ft++)Mt=Rt[ft],F?ct&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,Et,Mt.width,Mt.height,0,yt,bt,Mt.data);b.generateMipmaps=!1}else F?(ot&&e.texStorage2D(i.TEXTURE_2D,gt,Et,$.width,$.height),ct&&kt(b,$,yt,bt)):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,yt,bt,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Et,Rt[0].width,Rt[0].height,$.depth);for(let ft=0,at=Rt.length;ft<at;ft++)if(Mt=Rt[ft],b.format!==mn)if(yt!==null)if(F){if(ct)if(b.layerUpdates.size>0){let At=ac(Mt.width,Mt.height,b.format,b.type);for(let zt of b.layerUpdates){let Qt=Mt.data.subarray(zt*At/Mt.data.BYTES_PER_ELEMENT,(zt+1)*At/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,zt,Mt.width,Mt.height,1,yt,Qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,$.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Et,Mt.width,Mt.height,$.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,$.depth,yt,bt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Et,Mt.width,Mt.height,$.depth,0,yt,bt,Mt.data)}else{F&&ot&&e.texStorage2D(i.TEXTURE_2D,gt,Et,Rt[0].width,Rt[0].height);for(let ft=0,at=Rt.length;ft<at;ft++)Mt=Rt[ft],b.format!==mn?yt!==null?F?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Et,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ct&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,Et,Mt.width,Mt.height,0,yt,bt,Mt.data)}else if(b.isDataArrayTexture)if(F){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Et,$.width,$.height,$.depth),ct)if(b.layerUpdates.size>0){let ft=ac($.width,$.height,b.format,b.type);for(let at of b.layerUpdates){let At=$.data.subarray(at*ft/$.data.BYTES_PER_ELEMENT,(at+1)*ft/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,$.width,$.height,1,yt,bt,At)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,$.width,$.height,$.depth,0,yt,bt,$.data);else if(b.isData3DTexture)F?(ot&&e.texStorage3D(i.TEXTURE_3D,gt,Et,$.width,$.height,$.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)):e.texImage3D(i.TEXTURE_3D,0,Et,$.width,$.height,$.depth,0,yt,bt,$.data);else if(b.isFramebufferTexture){if(ot)if(F)e.texStorage2D(i.TEXTURE_2D,gt,Et,$.width,$.height);else{let ft=$.width,at=$.height;for(let At=0;At<gt;At++)e.texImage2D(i.TEXTURE_2D,At,Et,ft,at,0,yt,bt,null),ft>>=1,at>>=1}}else if(Rt.length>0){if(F&&ot){let ft=st(Rt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Et,ft.width,ft.height)}for(let ft=0,at=Rt.length;ft<at;ft++)Mt=Rt[ft],F?ct&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt,bt,Mt):e.texImage2D(i.TEXTURE_2D,ft,Et,yt,bt,Mt);b.generateMipmaps=!1}else if(F){if(ot){let ft=st($);e.texStorage2D(i.TEXTURE_2D,gt,Et,ft.width,ft.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,bt,$)}else e.texImage2D(i.TEXTURE_2D,0,Et,yt,bt,$);d(b)&&m(Y),ht.__version=V.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function W(R,b,k){if(b.image.length!==6)return;let Y=Ut(R,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let V=n.get(K);if(K.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let ht=de.getPrimaries(de.workingColorSpace),dt=b.colorSpace===ci?null:de.getPrimaries(b.colorSpace),St=b.colorSpace===ci||ht===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let vt=b.isCompressedTexture||b.image[0].isCompressedTexture,$=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!vt&&!$?yt[at]=M(b.image[at],!0,s.maxCubemapSize):yt[at]=$?b.image[at].image:b.image[at],yt[at]=it(b,yt[at]);let bt=yt[0],Et=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),Rt=g(b.internalFormat,Et,Mt,b.colorSpace),F=b.isVideoTexture!==!0,ot=V.__version===void 0||Y===!0,ct=K.dataReady,gt=A(b,bt);Lt(i.TEXTURE_CUBE_MAP,b);let ft;if(vt){F&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Rt,bt.width,bt.height);for(let at=0;at<6;at++){ft=yt[at].mipmaps;for(let At=0;At<ft.length;At++){let zt=ft[At];b.format!==mn?Et!==null?F?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,zt.width,zt.height,Et,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Rt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,zt.width,zt.height,Et,Mt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Rt,zt.width,zt.height,0,Et,Mt,zt.data)}}}else{if(ft=b.mipmaps,F&&ot){ft.length>0&&gt++;let at=st(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Rt,at.width,at.height)}for(let at=0;at<6;at++)if($){F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,Et,Mt,yt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Rt,yt[at].width,yt[at].height,0,Et,Mt,yt[at].data);for(let At=0;At<ft.length;At++){let Qt=ft[At].image[at].image;F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Qt.width,Qt.height,Et,Mt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Rt,Qt.width,Qt.height,0,Et,Mt,Qt.data)}}else{F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et,Mt,yt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Rt,Et,Mt,yt[at]);for(let At=0;At<ft.length;At++){let zt=ft[At];F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Et,Mt,zt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Rt,Et,Mt,zt.image[at])}}}d(b)&&m(i.TEXTURE_CUBE_MAP),V.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pt(R,b,k,Y,K,V){let ht=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),St=g(k.internalFormat,ht,dt,k.colorSpace),vt=n.get(b),$=n.get(k);if($.__renderTarget=b,!vt.__hasExternalTextures){let yt=Math.max(1,b.width>>V),bt=Math.max(1,b.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,St,yt,bt,b.depth,0,ht,dt,null):e.texImage2D(K,V,St,yt,bt,0,ht,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,$.__webglTexture,0,B(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,$.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Y=b.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,V=v(b.stencilBuffer,K),ht=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=B(b);O(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,V,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,V,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,V,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,R)}else{let Y=b.textures;for(let K=0;K<Y.length;K++){let V=Y[K],ht=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),St=g(V.internalFormat,ht,dt,V.colorSpace),vt=B(b);k&&O(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,St,b.width,b.height):O(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let K=Y.__webglTexture,V=B(b);if(b.depthTexture.format===Ms)O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Ns)O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?nt(b.__webglFramebuffer[0],R):nt(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),_t(b.__webglDepthbuffer[Y],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_t(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,b,k){let Y=n.get(R);b!==void 0&&pt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&wt(R)}function I(R){let b=R.texture,k=n.get(R),Y=n.get(b);R.addEventListener("dispose",S);let K=R.textures,V=R.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let St=0;St<b.mipmaps.length;St++)k.__webglFramebuffer[dt][St]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ht)for(let dt=0,St=K.length;dt<St;dt++){let vt=n.get(K[dt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&O(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<K.length;dt++){let St=K[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let vt=r.convert(St.format,St.colorSpace),$=r.convert(St.type),yt=g(St.internalFormat,vt,$,St.colorSpace,R.isXRRenderTarget===!0),bt=B(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)pt(k.__webglFramebuffer[dt][St],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else pt(k.__webglFramebuffer[dt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let dt=0,St=K.length;dt<St;dt++){let vt=K[dt],$=n.get(vt),yt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,$.__webglTexture),Lt(yt,vt),pt(k.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+dt,yt,0),d(vt)&&m(yt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Lt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)pt(k.__webglFramebuffer[St],R,b,i.COLOR_ATTACHMENT0,dt,St);else pt(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,dt,0);d(b)&&m(dt),e.unbindTexture()}R.depthBuffer&&wt(R)}function H(R){let b=R.textures;for(let k=0,Y=b.length;k<Y;k++){let K=b[k];if(d(K)){let V=w(R),ht=n.get(K).__webglTexture;e.bindTexture(V,ht),m(V),e.unbindTexture()}}}let q=[],E=[];function P(R){if(R.samples>0){if(O(R)===!1){let b=R.textures,k=R.width,Y=R.height,K=i.COLOR_BUFFER_BIT,V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(R),dt=b.length>1;if(dt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let St=R.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let $=n.get(b[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,K,i.NEAREST),h===!0&&(q.length=0,E.length=0,q.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(q.push(V),E.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[vt]);let $=n.get(b[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function B(R){return Math.min(s.maxSamples,R.samples)}function O(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(R){let b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function it(R,b){let k=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==zi&&k!==ci&&(de.getTransfer(k)===xe?(Y!==mn||K!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=Dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=O}function Ig(i,t){function e(n,s=ci){let r,a=de.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Kl)return i.RGB;if(n===mn)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Pa||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ua||n===Fa||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Pg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,u=null,l=null,f=null,p=null,x=null,M=typeof XRWebGLBinding<"u",d=new vc,m={},w=e.getContextAttributes(),g=null,v=null,A=[],T=[],S=new It,C=null,_=new ln;_.viewport=new ge;let y=new ln;y.viewport=new ge;let D=[_,y],U=new Go,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let W=A[ut];return W===void 0&&(W=new Ts,A[ut]=W),W.getTargetRaySpace()},this.getControllerGrip=function(ut){let W=A[ut];return W===void 0&&(W=new Ts,A[ut]=W),W.getGripSpace()},this.getHand=function(ut){let W=A[ut];return W===void 0&&(W=new Ts,A[ut]=W),W.getHandSpace()};function J(ut){let W=T.indexOf(ut.inputSource);if(W===-1)return;let pt=A[W];pt!==void 0&&(pt.update(ut.inputSource,ut.frame,c||a),pt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let ut=0;ut<A.length;ut++){let W=T[ut];W!==null&&(T[ut]=null,A[ut].disconnect(W))}N=null,G=null,d.reset();for(let ut in m)delete m[ut];t.setRenderTarget(g),p=null,f=null,l=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){o=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ut){c=ut},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l===null&&M&&(l=new XRWebGLBinding(s,e)),l},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,_t=null,nt=null;w.depth&&(nt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?Ns:Ms,_t=w.stencil?Fs:Ti);let wt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};l=this.getBinding(),f=l.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Wn(f.textureWidth,f.textureHeight,{format:mn,type:Bn,depthTexture:new _r(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Wn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function j(ut){for(let W=0;W<ut.removed.length;W++){let pt=ut.removed[W],_t=T.indexOf(pt);_t>=0&&(T[_t]=null,A[_t].disconnect(pt))}for(let W=0;W<ut.added.length;W++){let pt=ut.added[W],_t=T.indexOf(pt);if(_t===-1){for(let wt=0;wt<A.length;wt++)if(wt>=T.length){T.push(pt),_t=wt;break}else if(T[wt]===null){T[wt]=pt,_t=wt;break}if(_t===-1)break}let nt=A[_t];nt&&nt.connect(pt)}}let tt=new z,mt=new z;function Tt(ut,W,pt){tt.setFromMatrixPosition(W.matrixWorld),mt.setFromMatrixPosition(pt.matrixWorld);let _t=tt.distanceTo(mt),nt=W.projectionMatrix.elements,wt=pt.projectionMatrix.elements,Dt=nt[14]/(nt[10]-1),I=nt[14]/(nt[10]+1),H=(nt[9]+1)/nt[5],q=(nt[9]-1)/nt[5],E=(nt[8]-1)/nt[0],P=(wt[8]+1)/wt[0],B=Dt*E,O=Dt*P,Z=_t/(-E+P),it=Z*-E;if(W.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(it),ut.translateZ(Z),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),nt[10]===-1)ut.projectionMatrix.copy(W.projectionMatrix),ut.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let st=Dt+Z,R=I+Z,b=B-it,k=O+(_t-it),Y=H*I/R*st,K=q*I/R*st;ut.projectionMatrix.makePerspective(b,k,Y,K,st,R),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function xt(ut,W){W===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(W.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let W=ut.near,pt=ut.far;d.texture!==null&&(d.depthNear>0&&(W=d.depthNear),d.depthFar>0&&(pt=d.depthFar)),U.near=y.near=_.near=W,U.far=y.far=_.far=pt,(N!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,G=U.far),U.layers.mask=ut.layers.mask|6,_.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let _t=ut.parent,nt=U.cameras;xt(U,_t);for(let wt=0;wt<nt.length;wt++)xt(nt[wt],_t);nt.length===2?Tt(U,_,y):U.projectionMatrix.copy(_.projectionMatrix),Lt(ut,U,_t)};function Lt(ut,W,pt){pt===null?ut.matrix.copy(W.matrixWorld):(ut.matrix.copy(pt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(W.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(W.projectionMatrix),ut.projectionMatrixInverse.copy(W.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=bs*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return h},this.setFoveation=function(ut){h=ut,f!==null&&(f.fixedFoveation=ut),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ut)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(ut){return m[ut]};let Ut=null;function Bt(ut,W){if(u=W.getViewerPose(c||a),x=W,u!==null){let pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let _t=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,_t=!0);for(let I=0;I<pt.length;I++){let H=pt[I],q=null;if(p!==null)q=p.getViewport(H);else{let P=l.getViewSubImage(f,H);q=P.viewport,I===0&&(t.setRenderTargetTextures(v,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(v))}let E=D[I];E===void 0&&(E=new ln,E.layers.enable(I),E.viewport=new ge,D[I]=E),E.matrix.fromArray(H.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.projectionMatrix.fromArray(H.projectionMatrix),E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),E.viewport.set(q.x,q.y,q.width,q.height),I===0&&(U.matrix.copy(E.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),_t===!0&&U.cameras.push(E)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){l=n.getBinding();let I=l.getDepthInformation(pt[0]);I&&I.isValid&&I.texture&&d.init(I,s.renderState)}if(nt&&nt.includes("camera-access")&&M){t.state.unbindTexture(),l=n.getBinding();for(let I=0;I<pt.length;I++){let H=pt[I].camera;if(H){let q=m[H];q||(q=new yr,m[H]=q);let E=l.getCameraImage(H);q.sourceTexture=E}}}}for(let pt=0;pt<A.length;pt++){let _t=T[pt],nt=A[pt];_t!==null&&nt!==void 0&&nt.update(_t,W,c||a)}Ut&&Ut(ut,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),x=null}let kt=new _u;kt.setAnimationLoop(Bt),this.setAnimationLoop=function(ut){Ut=ut},this.dispose=function(){}}},ji=new Rn,Lg=new _e;function Ug(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,ic(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,w,g,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),l(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,v)):m.isMeshMatcapMaterial?(r(d,m),x(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),M(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?h(d,m,w,g):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===$e&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===$e&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let w=t.get(m),g=w.envMap,v=w.envMapRotation;g&&(d.envMap.value=g,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),d.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(ji)),d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function h(d,m,w,g){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*w,d.scale.value=g*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function l(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,w){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,m){m.matcap&&(d.matcap.value=m.matcap)}function M(d,m){let w=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,g){let v=g.program;n.uniformBlockBinding(w,v)}function c(w,g){let v=s[w.id];v===void 0&&(x(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",d));let A=g.program;n.updateUBOMapping(w,A);let T=t.render.frame;r[w.id]!==T&&(f(w),r[w.id]=T)}function u(w){let g=l();w.__bindingPointIndex=g;let v=i.createBuffer(),A=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v}function l(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let g=s[w.id],v=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let T=0,S=v.length;T<S;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,y=C.length;_<y;_++){let D=C[_];if(p(D,T,_,A)===!0){let U=D.__offset,N=Array.isArray(D.value)?D.value:[D.value],G=0;for(let J=0;J<N.length;J++){let X=N[J],j=M(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+G,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,g,v,A){let T=w.value,S=g+"_"+v;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{let C=A[S];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[S]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function x(w){let g=w.uniforms,v=0,A=16;for(let S=0,C=g.length;S<C;S++){let _=Array.isArray(g[S])?g[S]:[g[S]];for(let y=0,D=_.length;y<D;y++){let U=_[y],N=Array.isArray(U.value)?U.value:[U.value];for(let G=0,J=N.length;G<J;G++){let X=N[G],j=M(X),tt=v%A,mt=tt%j.boundary,Tt=tt+mt;v+=mt,Tt!==0&&A-Tt<j.storage&&(v+=A-Tt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}let T=v%A;return T>0&&(v+=A-T),w.__size=v,w.__cache={},this}function M(w){let g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function d(w){let g=w.target;g.removeEventListener("dispose",d);let v=a.indexOf(g.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function m(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:h,update:c,dispose:m}}var Ha=class{constructor(t={}){let{canvas:e=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=new Uint32Array(4),M=new Int32Array(4),d=null,m=null,w=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=an;let T=0,S=0,C=null,_=-1,y=null,D=new ge,U=new ge,N=null,G=new Xt(0),J=0,X=e.width,j=e.height,tt=1,mt=null,Tt=null,xt=new ge(0,0,X,j),Lt=new ge(0,0,X,j),Ut=!1,Bt=new As,kt=!1,ut=!1,W=new _e,pt=new z,_t=new ge,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Dt(){return C===null?tt:1}let I=n;function H(L,Q){return e.getContext(L,Q)}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){let Q="webgl2";if(I=H(Q,L),I===null)throw H(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let q,E,P,B,O,Z,it,st,R,b,k,Y,K,V,ht,dt,St,vt,$,yt,bt,Et,Mt,Rt;function F(){q=new jm(I),q.init(),Et=new Ig(I,q),E=new qm(I,q,t,Et),P=new Rg(I,q),E.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),B=new n0(I),O=new mg,Z=new Cg(I,q,P,O,E,Et,B),it=new Zm(v),st=new Qm(v),R=new lf(I),Mt=new Wm(I,R),b=new t0(I,R,B,Mt),k=new s0(I,b,R,B),$=new i0(I,E,Z),dt=new Ym(O),Y=new pg(v,it,st,q,E,Mt,dt),K=new Ug(v,O),V=new xg,ht=new Sg(q),vt=new Gm(v,it,st,P,k,p,h),St=new Tg(v,k,E),Rt=new Fg(I,B,E,P),yt=new Xm(I,q,B),bt=new e0(I,q,B),B.programs=Y.programs,v.capabilities=E,v.extensions=q,v.properties=O,v.renderLists=V,v.shadowMap=St,v.state=P,v.info=B}F();let ot=new Mc(v,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=q.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=q.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(L){L!==void 0&&(tt=L,this.setSize(X,j,!1))},this.getSize=function(L){return L.set(X,j)},this.setSize=function(L,Q,rt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=L,j=Q,e.width=Math.floor(L*tt),e.height=Math.floor(Q*tt),rt===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(X*tt,j*tt).floor()},this.setDrawingBufferSize=function(L,Q,rt){X=L,j=Q,tt=rt,e.width=Math.floor(L*rt),e.height=Math.floor(Q*rt),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(xt)},this.setViewport=function(L,Q,rt,lt){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,Q,rt,lt),P.viewport(D.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(L){return L.copy(Lt)},this.setScissor=function(L,Q,rt,lt){L.isVector4?Lt.set(L.x,L.y,L.z,L.w):Lt.set(L,Q,rt,lt),P.scissor(U.copy(Lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(L){P.setScissorTest(Ut=L)},this.setOpaqueSort=function(L){mt=L},this.setTransparentSort=function(L){Tt=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,rt=!0){let lt=0;if(L){let et=!1;if(C!==null){let Ct=C.texture.format;et=Ct===la||Ct===aa||Ct===oa}if(et){let Ct=C.texture.type,Pt=Ct===Bn||Ct===Ti||Ct===Ls||Ct===Fs||Ct===ia||Ct===sa,Ht=vt.getClearColor(),Ft=vt.getClearAlpha(),Gt=Ht.r,Wt=Ht.g,Vt=Ht.b;Pt?(x[0]=Gt,x[1]=Wt,x[2]=Vt,x[3]=Ft,I.clearBufferuiv(I.COLOR,0,x)):(M[0]=Gt,M[1]=Wt,M[2]=Vt,M[3]=Ft,I.clearBufferiv(I.COLOR,0,M))}else lt|=I.COLOR_BUFFER_BIT}Q&&(lt|=I.DEPTH_BUFFER_BIT),rt&&(lt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),V.dispose(),ht.dispose(),O.dispose(),it.dispose(),st.dispose(),k.dispose(),Mt.dispose(),Rt.dispose(),Y.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ne),ot.removeEventListener("sessionend",ee),fe.stop()};function ct(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let L=B.autoReset,Q=St.enabled,rt=St.autoUpdate,lt=St.needsUpdate,et=St.type;F(),B.autoReset=L,St.enabled=Q,St.autoUpdate=rt,St.needsUpdate=lt,St.type=et}function ft(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function at(L){let Q=L.target;Q.removeEventListener("dispose",at),At(Q)}function At(L){zt(L),O.remove(L)}function zt(L){let Q=O.get(L).programs;Q!==void 0&&(Q.forEach(function(rt){Y.releaseProgram(rt)}),L.isShaderMaterial&&Y.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,rt,lt,et,Ct){Q===null&&(Q=nt);let Pt=et.isMesh&&et.matrixWorld.determinant()<0,Ht=Ye(L,Q,rt,lt,et);P.setMaterial(lt,Pt);let Ft=rt.index,Gt=1;if(lt.wireframe===!0){if(Ft=b.getWireframeAttribute(rt),Ft===void 0)return;Gt=2}let Wt=rt.drawRange,Vt=rt.attributes.position,jt=Wt.start*Gt,ce=(Wt.start+Wt.count)*Gt;Ct!==null&&(jt=Math.max(jt,Ct.start*Gt),ce=Math.min(ce,(Ct.start+Ct.count)*Gt)),Ft!==null?(jt=Math.max(jt,0),ce=Math.min(ce,Ft.count)):Vt!=null&&(jt=Math.max(jt,0),ce=Math.min(ce,Vt.count));let Jt=ce-jt;if(Jt<0||Jt===1/0)return;Mt.setup(et,lt,Ht,rt,Ft);let $t,te=yt;if(Ft!==null&&($t=R.get(Ft),te=bt,te.setIndex($t)),et.isMesh)lt.wireframe===!0?(P.setLineWidth(lt.wireframeLinewidth*Dt()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(et.isLine){let qt=lt.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*Dt()),et.isLineSegments?te.setMode(I.LINES):et.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else et.isPoints?te.setMode(I.POINTS):et.isSprite&&te.setMode(I.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))te.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let qt=et._multiDrawStarts,me=et._multiDrawCounts,re=et._multiDrawCount,ze=Ft?R.get(Ft).bytesPerElement:1,Ae=O.get(lt).currentProgram.getUniforms();for(let le=0;le<re;le++)Ae.setValue(I,"_gl_DrawID",le),te.render(qt[le]/ze,me[le])}else if(et.isInstancedMesh)te.renderInstances(jt,Jt,et.count);else if(rt.isInstancedBufferGeometry){let qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,me=Math.min(rt.instanceCount,qt);te.renderInstances(jt,Jt,me)}else te.render(jt,Jt)};function Qt(L,Q,rt){L.transparent===!0&&L.side===hn&&L.forceSinglePass===!1?(L.side=$e,L.needsUpdate=!0,se(L,Q,rt),L.side=ni,L.needsUpdate=!0,se(L,Q,rt),L.side=hn):se(L,Q,rt)}this.compile=function(L,Q,rt=null){rt===null&&(rt=L),m=ht.get(rt),m.init(Q),g.push(m),rt.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(m.pushLight(et),et.castShadow&&m.pushShadow(et))}),L!==rt&&L.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(m.pushLight(et),et.castShadow&&m.pushShadow(et))}),m.setupLights();let lt=new Set;return L.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ct=et.material;if(Ct)if(Array.isArray(Ct))for(let Pt=0;Pt<Ct.length;Pt++){let Ht=Ct[Pt];Qt(Ht,rt,et),lt.add(Ht)}else Qt(Ct,rt,et),lt.add(Ct)}),m=g.pop(),lt},this.compileAsync=function(L,Q,rt=null){let lt=this.compile(L,Q,rt);return new Promise(et=>{function Ct(){if(lt.forEach(function(Pt){O.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){et(L);return}setTimeout(Ct,10)}q.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ot=null;function Zt(L){Ot&&Ot(L)}function ne(){fe.stop()}function ee(){fe.start()}let fe=new _u;fe.setAnimationLoop(Zt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(L){Ot=L,ot.setAnimationLoop(L),L===null?fe.stop():fe.start()},ot.addEventListener("sessionstart",ne),ot.addEventListener("sessionend",ee),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Q),Q=ot.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,Q,C),m=ht.get(L,g.length),m.init(Q),g.push(m),W.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Bt.setFromProjectionMatrix(W,Nn,Q.reversedDepth),ut=this.localClippingEnabled,kt=dt.init(this.clippingPlanes,ut),d=V.get(L,w.length),d.init(),w.push(d),ot.enabled===!0&&ot.isPresenting===!0){let Ct=v.xr.getDepthSensingMesh();Ct!==null&&ue(Ct,Q,-1/0,v.sortObjects)}ue(L,Q,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(mt,Tt),wt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,wt&&vt.addToRenderList(d,L),this.info.render.frame++,kt===!0&&dt.beginShadows();let rt=m.state.shadowsArray;St.render(rt,L,Q),kt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=d.opaque,et=d.transmissive;if(m.setupLights(),Q.isArrayCamera){let Ct=Q.cameras;if(et.length>0)for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Ft=Ct[Pt];Be(lt,et,L,Ft)}wt&&vt.render(L);for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Ft=Ct[Pt];Me(d,L,Ft,Ft.viewport)}}else et.length>0&&Be(lt,et,L,Q),wt&&vt.render(L),Me(d,L,Q);C!==null&&S===0&&(Z.updateMultisampleRenderTarget(C),Z.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(v,L,Q),Mt.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?(m=g[g.length-1],kt===!0&&dt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function ue(L,Q,rt,lt){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)rt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Bt.intersectsSprite(L)){lt&&_t.setFromMatrixPosition(L.matrixWorld).applyMatrix4(W);let Pt=k.update(L),Ht=L.material;Ht.visible&&d.push(L,Pt,Ht,rt,_t.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Bt.intersectsObject(L))){let Pt=k.update(L),Ht=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_t.copy(L.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),_t.copy(Pt.boundingSphere.center)),_t.applyMatrix4(L.matrixWorld).applyMatrix4(W)),Array.isArray(Ht)){let Ft=Pt.groups;for(let Gt=0,Wt=Ft.length;Gt<Wt;Gt++){let Vt=Ft[Gt],jt=Ht[Vt.materialIndex];jt&&jt.visible&&d.push(L,Pt,jt,rt,_t.z,Vt)}}else Ht.visible&&d.push(L,Pt,Ht,rt,_t.z,null)}}let Ct=L.children;for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++)ue(Ct[Pt],Q,rt,lt)}function Me(L,Q,rt,lt){let et=L.opaque,Ct=L.transmissive,Pt=L.transparent;m.setupLightsView(rt),kt===!0&&dt.setGlobalState(v.clippingPlanes,rt),lt&&P.viewport(D.copy(lt)),et.length>0&&Ce(et,Q,rt),Ct.length>0&&Ce(Ct,Q,rt),Pt.length>0&&Ce(Pt,Q,rt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Be(L,Q,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[lt.id]===void 0&&(m.state.transmissionRenderTarget[lt.id]=new Wn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Us:Bn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let Ct=m.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||D;Ct.setSize(Pt.z*v.transmissionResolutionScale,Pt.w*v.transmissionResolutionScale);let Ht=v.getRenderTarget(),Ft=v.getActiveCubeFace(),Gt=v.getActiveMipmapLevel();v.setRenderTarget(Ct),v.getClearColor(G),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),wt&&vt.render(rt);let Wt=v.toneMapping;v.toneMapping=li;let Vt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),m.setupLightsView(lt),kt===!0&&dt.setGlobalState(v.clippingPlanes,lt),Ce(L,rt,lt),Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct),q.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ce=0,Jt=Q.length;ce<Jt;ce++){let $t=Q[ce],te=$t.object,qt=$t.geometry,me=$t.material,re=$t.group;if(me.side===hn&&te.layers.test(lt.layers)){let ze=me.side;me.side=$e,me.needsUpdate=!0,ae(te,rt,lt,qt,me,re),me.side=ze,me.needsUpdate=!0,jt=!0}}jt===!0&&(Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct))}v.setRenderTarget(Ht,Ft,Gt),v.setClearColor(G,J),Vt!==void 0&&(lt.viewport=Vt),v.toneMapping=Wt}function Ce(L,Q,rt){let lt=Q.isScene===!0?Q.overrideMaterial:null;for(let et=0,Ct=L.length;et<Ct;et++){let Pt=L[et],Ht=Pt.object,Ft=Pt.geometry,Gt=Pt.group,Wt=Pt.material;Wt.allowOverride===!0&&lt!==null&&(Wt=lt),Ht.layers.test(rt.layers)&&ae(Ht,Q,rt,Ft,Wt,Gt)}}function ae(L,Q,rt,lt,et,Ct){L.onBeforeRender(v,Q,rt,lt,et,Ct),L.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),et.onBeforeRender(v,Q,rt,lt,L,Ct),et.transparent===!0&&et.side===hn&&et.forceSinglePass===!1?(et.side=$e,et.needsUpdate=!0,v.renderBufferDirect(rt,Q,lt,et,L,Ct),et.side=ni,et.needsUpdate=!0,v.renderBufferDirect(rt,Q,lt,et,L,Ct),et.side=hn):v.renderBufferDirect(rt,Q,lt,et,L,Ct),L.onAfterRender(v,Q,rt,lt,et,Ct)}function se(L,Q,rt){Q.isScene!==!0&&(Q=nt);let lt=O.get(L),et=m.state.lights,Ct=m.state.shadowsArray,Pt=et.state.version,Ht=Y.getParameters(L,et.state,Ct,Q,rt),Ft=Y.getProgramCacheKey(Ht),Gt=lt.programs;lt.environment=L.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(L.isMeshStandardMaterial?st:it).get(L.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,Gt===void 0&&(L.addEventListener("dispose",at),Gt=new Map,lt.programs=Gt);let Wt=Gt.get(Ft);if(Wt!==void 0){if(lt.currentProgram===Wt&&lt.lightsStateVersion===Pt)return Te(L,Ht),Wt}else Ht.uniforms=Y.getUniforms(L),L.onBeforeCompile(Ht,v),Wt=Y.acquireProgram(Ht,Ft),Gt.set(Ft,Wt),lt.uniforms=Ht.uniforms;let Vt=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Vt.clippingPlanes=dt.uniform),Te(L,Ht),lt.needsLights=wn(L),lt.lightsStateVersion=Pt,lt.needsLights&&(Vt.ambientLightColor.value=et.state.ambient,Vt.lightProbe.value=et.state.probe,Vt.directionalLights.value=et.state.directional,Vt.directionalLightShadows.value=et.state.directionalShadow,Vt.spotLights.value=et.state.spot,Vt.spotLightShadows.value=et.state.spotShadow,Vt.rectAreaLights.value=et.state.rectArea,Vt.ltc_1.value=et.state.rectAreaLTC1,Vt.ltc_2.value=et.state.rectAreaLTC2,Vt.pointLights.value=et.state.point,Vt.pointLightShadows.value=et.state.pointShadow,Vt.hemisphereLights.value=et.state.hemi,Vt.directionalShadowMap.value=et.state.directionalShadowMap,Vt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Vt.spotShadowMap.value=et.state.spotShadowMap,Vt.spotLightMatrix.value=et.state.spotLightMatrix,Vt.spotLightMap.value=et.state.spotLightMap,Vt.pointShadowMap.value=et.state.pointShadowMap,Vt.pointShadowMatrix.value=et.state.pointShadowMatrix),lt.currentProgram=Wt,lt.uniformsList=null,Wt}function Ee(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=ks.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Te(L,Q){let rt=O.get(L);rt.outputColorSpace=Q.outputColorSpace,rt.batching=Q.batching,rt.batchingColor=Q.batchingColor,rt.instancing=Q.instancing,rt.instancingColor=Q.instancingColor,rt.instancingMorph=Q.instancingMorph,rt.skinning=Q.skinning,rt.morphTargets=Q.morphTargets,rt.morphNormals=Q.morphNormals,rt.morphColors=Q.morphColors,rt.morphTargetsCount=Q.morphTargetsCount,rt.numClippingPlanes=Q.numClippingPlanes,rt.numIntersection=Q.numClipIntersection,rt.vertexAlphas=Q.vertexAlphas,rt.vertexTangents=Q.vertexTangents,rt.toneMapping=Q.toneMapping}function Ye(L,Q,rt,lt,et){Q.isScene!==!0&&(Q=nt),Z.resetTextureUnits();let Ct=Q.fog,Pt=lt.isMeshStandardMaterial?Q.environment:null,Ht=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zi,Ft=(lt.isMeshStandardMaterial?st:it).get(lt.envMap||Pt),Gt=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!rt.morphAttributes.position,jt=!!rt.morphAttributes.normal,ce=!!rt.morphAttributes.color,Jt=li;lt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Jt=v.toneMapping);let $t=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,te=$t!==void 0?$t.length:0,qt=O.get(lt),me=m.state.lights;if(kt===!0&&(ut===!0||L!==y)){let be=L===y&&lt.id===_;dt.setState(lt,L,be)}let re=!1;lt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==me.state.version||qt.outputColorSpace!==Ht||et.isBatchedMesh&&qt.batching===!1||!et.isBatchedMesh&&qt.batching===!0||et.isBatchedMesh&&qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&qt.instancing===!1||!et.isInstancedMesh&&qt.instancing===!0||et.isSkinnedMesh&&qt.skinning===!1||!et.isSkinnedMesh&&qt.skinning===!0||et.isInstancedMesh&&qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&qt.instancingMorph===!1&&et.morphTexture!==null||qt.envMap!==Ft||lt.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==dt.numPlanes||qt.numIntersection!==dt.numIntersection)||qt.vertexAlphas!==Gt||qt.vertexTangents!==Wt||qt.morphTargets!==Vt||qt.morphNormals!==jt||qt.morphColors!==ce||qt.toneMapping!==Jt||qt.morphTargetsCount!==te)&&(re=!0):(re=!0,qt.__version=lt.version);let ze=qt.currentProgram;re===!0&&(ze=se(lt,Q,et));let Ae=!1,le=!1,je=!1,he=ze.getUniforms(),Ue=qt.uniforms;if(P.useProgram(ze.program)&&(Ae=!0,le=!0,je=!0),lt.id!==_&&(_=lt.id,le=!0),Ae||y!==L){P.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),he.setValue(I,"projectionMatrix",L.projectionMatrix),he.setValue(I,"viewMatrix",L.matrixWorldInverse);let ke=he.map.cameraPosition;ke!==void 0&&ke.setValue(I,pt.setFromMatrixPosition(L.matrixWorld)),E.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&he.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,le=!0,je=!0)}if(et.isSkinnedMesh){he.setOptional(I,et,"bindMatrix"),he.setOptional(I,et,"bindMatrixInverse");let be=et.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(I,"boneTexture",be.boneTexture,Z))}et.isBatchedMesh&&(he.setOptional(I,et,"batchingTexture"),he.setValue(I,"batchingTexture",et._matricesTexture,Z),he.setOptional(I,et,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",et._indirectTexture,Z),he.setOptional(I,et,"batchingColorTexture"),et._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",et._colorsTexture,Z));let Fe=rt.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&$.update(et,rt,ze),(le||qt.receiveShadow!==et.receiveShadow)&&(qt.receiveShadow=et.receiveShadow,he.setValue(I,"receiveShadow",et.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Ue.envMap.value=Ft,Ue.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&(Ue.envMapIntensity.value=Q.environmentIntensity),le&&(he.setValue(I,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&rn(Ue,je),Ct&&lt.fog===!0&&K.refreshFogUniforms(Ue,Ct),K.refreshMaterialUniforms(Ue,lt,tt,j,m.state.transmissionRenderTarget[L.id]),ks.upload(I,Ee(qt),Ue,Z)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ks.upload(I,Ee(qt),Ue,Z),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&he.setValue(I,"center",et.center),he.setValue(I,"modelViewMatrix",et.modelViewMatrix),he.setValue(I,"normalMatrix",et.normalMatrix),he.setValue(I,"modelMatrix",et.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let be=lt.uniformsGroups;for(let ke=0,un=be.length;ke<un;ke++){let tn=be[ke];Rt.update(tn,ze),Rt.bind(tn,ze)}}return ze}function rn(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function wn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,Q,rt){let lt=O.get(L);lt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),O.get(L.texture).__webglTexture=Q,O.get(L.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:rt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let rt=O.get(L);rt.__webglFramebuffer=Q,rt.__useDefaultFramebuffer=Q===void 0};let En=I.createFramebuffer();this.setRenderTarget=function(L,Q=0,rt=0){C=L,T=Q,S=rt;let lt=!0,et=null,Ct=!1,Pt=!1;if(L){let Ft=O.get(L);if(Ft.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(I.FRAMEBUFFER,null),lt=!1;else if(Ft.__webglFramebuffer===void 0)Z.setupRenderTarget(L);else if(Ft.__hasExternalTextures)Z.rebindTextures(L,O.get(L.texture).__webglTexture,O.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Vt=L.depthTexture;if(Ft.__boundDepthTexture!==Vt){if(Vt!==null&&O.has(Vt)&&(L.width!==Vt.image.width||L.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(L)}}let Gt=L.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Pt=!0);let Wt=O.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Wt[Q])?et=Wt[Q][rt]:et=Wt[Q],Ct=!0):L.samples>0&&Z.useMultisampledRTT(L)===!1?et=O.get(L).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[rt]:et=Wt,D.copy(L.viewport),U.copy(L.scissor),N=L.scissorTest}else D.copy(xt).multiplyScalar(tt).floor(),U.copy(Lt).multiplyScalar(tt).floor(),N=Ut;if(rt!==0&&(et=En),P.bindFramebuffer(I.FRAMEBUFFER,et)&&lt&&P.drawBuffers(L,et),P.viewport(D),P.scissor(U),P.setScissorTest(N),Ct){let Ft=O.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft.__webglTexture,rt)}else if(Pt){let Ft=Q;for(let Gt=0;Gt<L.textures.length;Gt++){let Wt=O.get(L.textures[Gt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,rt,Ft)}}else if(L!==null&&rt!==0){let Ft=O.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,rt)}_=-1},this.readRenderTargetPixels=function(L,Q,rt,lt,et,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){P.bindFramebuffer(I.FRAMEBUFFER,Ft);try{let Gt=L.textures[Ht],Wt=Gt.format,Vt=Gt.type;if(!E.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-lt&&rt>=0&&rt<=L.height-et&&(L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(Q,rt,lt,et,Et.convert(Wt),Et.convert(Vt),Ct))}finally{let Gt=C!==null?O.get(C).__webglFramebuffer:null;P.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,rt,lt,et,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(Q>=0&&Q<=L.width-lt&&rt>=0&&rt<=L.height-et){P.bindFramebuffer(I.FRAMEBUFFER,Ft);let Gt=L.textures[Ht],Wt=Gt.format,Vt=Gt.type;if(!E.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,Ct.byteLength,I.STREAM_READ),L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(Q,rt,lt,et,Et.convert(Wt),Et.convert(Vt),0);let ce=C!==null?O.get(C).__webglFramebuffer:null;P.bindFramebuffer(I.FRAMEBUFFER,ce);let Jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hh(I,Jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ct),I.deleteBuffer(jt),I.deleteSync(Jt),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,rt=0){let lt=Math.pow(2,-rt),et=Math.floor(L.image.width*lt),Ct=Math.floor(L.image.height*lt),Pt=Q!==null?Q.x:0,Ht=Q!==null?Q.y:0;Z.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Pt,Ht,et,Ct),P.unbindTexture()};let Tn=I.createFramebuffer(),_n=I.createFramebuffer();this.copyTextureToTexture=function(L,Q,rt=null,lt=null,et=0,Ct=null){Ct===null&&(et!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=et,et=0):Ct=0);let Pt,Ht,Ft,Gt,Wt,Vt,jt,ce,Jt,$t=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(rt!==null)Pt=rt.max.x-rt.min.x,Ht=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,Gt=rt.min.x,Wt=rt.min.y,Vt=rt.isBox3?rt.min.z:0;else{let Fe=Math.pow(2,-et);Pt=Math.floor($t.width*Fe),Ht=Math.floor($t.height*Fe),L.isDataArrayTexture?Ft=$t.depth:L.isData3DTexture?Ft=Math.floor($t.depth*Fe):Ft=1,Gt=0,Wt=0,Vt=0}lt!==null?(jt=lt.x,ce=lt.y,Jt=lt.z):(jt=0,ce=0,Jt=0);let te=Et.convert(Q.format),qt=Et.convert(Q.type),me;Q.isData3DTexture?(Z.setTexture3D(Q,0),me=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),me=I.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);let re=I.getParameter(I.UNPACK_ROW_LENGTH),ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ae=I.getParameter(I.UNPACK_SKIP_PIXELS),le=I.getParameter(I.UNPACK_SKIP_ROWS),je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);let he=L.isDataArrayTexture||L.isData3DTexture,Ue=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let Fe=O.get(L),be=O.get(Q),ke=O.get(Fe.__renderTarget),un=O.get(be.__renderTarget);P.bindFramebuffer(I.READ_FRAMEBUFFER,ke.__webglFramebuffer),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let tn=0;tn<Ft;tn++)he&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(L).__webglTexture,et,Vt+tn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(Q).__webglTexture,Ct,Jt+tn)),I.blitFramebuffer(Gt,Wt,Pt,Ht,jt,ce,Pt,Ht,I.DEPTH_BUFFER_BIT,I.NEAREST);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(et!==0||L.isRenderTargetTexture||O.has(L)){let Fe=O.get(L),be=O.get(Q);P.bindFramebuffer(I.READ_FRAMEBUFFER,Tn),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,_n);for(let ke=0;ke<Ft;ke++)he?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,et,Vt+ke):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,et),Ue?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,Ct,Jt+ke):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,Ct),et!==0?I.blitFramebuffer(Gt,Wt,Pt,Ht,jt,ce,Pt,Ht,I.COLOR_BUFFER_BIT,I.NEAREST):Ue?I.copyTexSubImage3D(me,Ct,jt,ce,Jt+ke,Gt,Wt,Pt,Ht):I.copyTexSubImage2D(me,Ct,jt,ce,Gt,Wt,Pt,Ht);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ue?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,qt,$t.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,$t.data):I.texSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,qt,$t):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ct,jt,ce,Pt,Ht,te,qt,$t.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ct,jt,ce,$t.width,$t.height,te,$t.data):I.texSubImage2D(I.TEXTURE_2D,Ct,jt,ce,Pt,Ht,te,qt,$t);I.pixelStorei(I.UNPACK_ROW_LENGTH,re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je),Ct===0&&Q.generateMipmaps&&I.generateMipmap(me),P.unbindTexture()},this.initRenderTarget=function(L){O.get(L).__webglFramebuffer===void 0&&Z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Z.setTextureCube(L,0):L.isData3DTexture?Z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Z.setTexture2DArray(L,0):Z.setTexture2D(L,0),P.unbindTexture()},this.resetState=function(){T=0,S=0,C=null,P.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Wa=class extends ki{constructor(){super();let t=new yi;t.deleteAttribute("uv");let e=new Pn({side:$e}),n=new Pn,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Hi(t,n,6),o=new Ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let h=new pe(t,Gs(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let c=new pe(t,Gs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new pe(t,Gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let l=new pe(t,Gs(43));l.position.set(-.462,8.89,14.52),l.scale.set(4.38,5.441,.088),this.add(l);let f=new pe(t,Gs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new pe(t,Gs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){return new Lr({color:0,emissive:16777215,emissiveIntensity:i})}var De=new Vn,Xa=new z,Su=new It,wu=new It,Eu=new It,qa=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let h=0;h<s;h++){let c=1,u=3*h,l=3*h+1,f=3*h+2;t&&(u=t.getX(u),l=t.getX(l),f=t.getX(f)),n&&(c=n.getX(u)+n.getX(l)+n.getX(f)),De.a.fromBufferAttribute(e,u),De.b.fromBufferAttribute(e,l),De.c.fromBufferAttribute(e,f),c*=De.getArea(),r[h]=c}let a=new Float32Array(s),o=0;for(let h=0;h<s;h++)o+=r[h],a[h]=o;return this.distribution=a,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let a=Math.ceil((n+s)/2);if(a===0||e[a-1]<=t&&e[a]>t){r=a;break}else t<e[a]?s=a-1:n=a+1}return r}_sampleFace(t,e,n,s,r){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);let h=this.indexAttribute,c=t*3,u=t*3+1,l=t*3+2;return h&&(c=h.getX(c),u=h.getX(u),l=h.getX(l)),De.a.fromBufferAttribute(this.positionAttribute,c),De.b.fromBufferAttribute(this.positionAttribute,u),De.c.fromBufferAttribute(this.positionAttribute,l),e.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(De.a.fromBufferAttribute(this.normalAttribute,c),De.b.fromBufferAttribute(this.normalAttribute,u),De.c.fromBufferAttribute(this.normalAttribute,l),n.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)).normalize()):De.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(De.a.fromBufferAttribute(this.colorAttribute,c),De.b.fromBufferAttribute(this.colorAttribute,u),De.c.fromBufferAttribute(this.colorAttribute,l),Xa.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)),s.r=Xa.x,s.g=Xa.y,s.b=Xa.z),r!==void 0&&this.uvAttribute!==void 0&&(Su.fromBufferAttribute(this.uvAttribute,c),wu.fromBufferAttribute(this.uvAttribute,u),Eu.fromBufferAttribute(this.uvAttribute,l),r.set(0,0).addScaledVector(Su,a).addScaledVector(wu,o).addScaledVector(Eu,1-(a+o))),this}};var Tu=new z(0,1,0),Au=new z(0,-1,0);function Ng(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Og(i,t){let e=new Cn(t*.1,t,i,3,4,!0);e.translate(0,i/2,0);let n=e.attributes.position;for(let s=0;s<n.count;s++){let r=Math.max(0,Math.min(1,n.getY(s)/i));n.setX(s,n.getX(s)+i*.24*Math.sin(Math.PI*.9*r)),n.setZ(s,n.getZ(s)+i*.12*r*r)}return e.computeVertexNormals(),e.computeBoundingBox(),e.userData.fiberProfile=Array.from({length:5},(s,r)=>{let a=r/4;return[i*.24*Math.sin(Math.PI*.9*a),i*a,i*.12*a*a]}),e.userData.fiberRadius=t,e}function Ru(i,t,e=1){i.root.updateMatrixWorld(!0);let n=i.surfaces.slice(),s=n.find(c=>c.material.bumpMap)?.material;for(let c of n){let u=c.material;(c.userData.surfaceMaterial||u.name||t.material)==="clay"&&!u.userData.clayFinish&&(u.roughness=.96,u.bumpScale=.0036,u.bumpMap&&(u.bumpMap=u.bumpMap.clone(),u.bumpMap.repeat.set(2.8,2.8)),u.userData.clayFinish=!0)}for(let c of["head-beret","head-beanie"])i.root.getObjectByName(c)?.traverse(u=>{!u.isMesh||n.includes(u)||(u.material=u.material.clone(),u.material.name="micro",u.material.roughness=1,s?.bumpMap&&(u.material.bumpMap=s.bumpMap,u.material.bumpScale=.0012),u.userData.surfaceMaterial="micro",n.push(u))});let r=n.filter(c=>{let u=c.userData.surfaceMaterial||c.material.name||t.material,l=!0;for(let f=c;f;f=f.parent)f.visible||(l=!1);return["plush","micro","fabric","knit"].includes(u)&&l}),a=r.map(c=>{c.geometry.computeBoundingBox();let u=c.geometry.boundingBox.getSize(new z).multiply(c.scale);return Math.max(.012,2*(u.x*u.y+u.x*u.z+u.y*u.z))}),o=a.reduce((c,u)=>c+u,0)||1,h=i.eyeGroups.map(c=>c.getWorldPosition(new z));r.forEach((c,u)=>{let l=c.userData.surfaceMaterial||c.material.name||t.material,f=l==="knit"||l==="fabric",p=l==="micro";!f&&c.material.bumpMap&&(c.material.bumpScale=Math.min(c.material.bumpScale,p?.0013:.0015));let x=Math.max(80,Math.round((f?3e4:p?1e5:19e4)*e*a[u]/o)),M=f?.005:p?.009:.023,d=f?5e-4:p?64e-5:88e-5,m=Og(M,d),w=new Pn({color:c.material.color,roughness:1,metalness:0,side:hn});w.name="fine-pile";let g=new Hi(m,w,x);g.name="surface-fibers",g.castShadow=!1,g.receiveShadow=!0,g.userData.surfaceMaterial=l,g.userData.fiberProfile=m.userData.fiberProfile,g.userData.fiberRadius=d,g.userData.fiberTones=new Float32Array(x);let v=Ng((t.randomSeed||"dot")+c.name+u),A=new qa(c).setRandomGenerator(v).build(),T=new z,S=new z,C=new z,_=new z,y=new z,D=new z,U=new Ve,N=new Xt,G=new Xt,J=new Je;for(let X=0;X<x;X++){A.sample(T,S,G),S.normalize(),C.copy(Au).addScaledVector(S,-Au.dot(S)),C.lengthSq()<.005&&C.set(1,0,0).addScaledVector(S,-S.x),C.normalize(),_.crossVectors(S,C).normalize();let j=Math.sin(T.x*6.7+T.y*3.1)*.16+Math.cos(T.z*5.4-T.y*2.2)*.09;C.multiplyScalar(.94).addScaledVector(_,j+(v()-.5)*.48).normalize(),y.copy(S).multiplyScalar(.63).addScaledVector(C,.77).normalize(),U.position.copy(T).addScaledVector(S,-M*.055),U.quaternion.setFromUnitVectors(Tu,y),J.setFromAxisAngle(Tu,v()*Math.PI*2),U.quaternion.multiply(J);let tt=.64+v()*.52;D.copy(T).applyMatrix4(c.matrixWorld);for(let xt of h){let Lt=D.distanceToSquared(xt);Lt<.035&&(tt*=.36+.64*Math.min(1,Lt/.035))}let mt=.76+v()*.35;U.scale.set(mt,tt,mt),U.updateMatrix(),g.setMatrixAt(X,U.matrix);let Tt=f?.91+v()*.13:p?.91+v()*.15:.91+v()*.17;g.userData.fiberTones[X]=Tt,N.copy(G).multiplyScalar(Tt),g.setColorAt(X,N)}g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.frustumCulled=!1,c.add(g)})}var Za=class extends pe{constructor(t,e,n=!1,s=!1,r=1e4){let a=new ye;super(a,e),this.isMarchingCubes=!0;let o=this,h=new Float32Array(36),c=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(w){this.resolution=w,this.isolation=80,this.size=w,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let g=r*3;this.positionArray=new Float32Array(g*3);let v=new Ge(this.positionArray,3);v.setUsage(Os),a.setAttribute("position",v),this.normalArray=new Float32Array(g*3);let A=new Ge(this.normalArray,3);if(A.setUsage(Os),a.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(g*2);let T=new Ge(this.uvArray,2);T.setUsage(Os),a.setAttribute("uv",T)}if(this.enableColors){this.colorArray=new Float32Array(g*3);let T=new Ge(this.colorArray,3);T.setUsage(Os),a.setAttribute("color",T)}a.boundingSphere=new Xn(new z,1)};function l(w,g,v){return w+(g-w)*v}function f(w,g,v,A,T,S,C,_,y,D){let U=(v-C)/(_-C),N=o.normal_cache;h[g+0]=A+U*o.delta,h[g+1]=T,h[g+2]=S,c[g+0]=l(N[w+0],N[w+3],U),c[g+1]=l(N[w+1],N[w+4],U),c[g+2]=l(N[w+2],N[w+5],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function p(w,g,v,A,T,S,C,_,y,D){let U=(v-C)/(_-C),N=o.normal_cache;h[g+0]=A,h[g+1]=T+U*o.delta,h[g+2]=S;let G=w+o.yd*3;c[g+0]=l(N[w+0],N[G+0],U),c[g+1]=l(N[w+1],N[G+1],U),c[g+2]=l(N[w+2],N[G+2],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function x(w,g,v,A,T,S,C,_,y,D){let U=(v-C)/(_-C),N=o.normal_cache;h[g+0]=A,h[g+1]=T,h[g+2]=S+U*o.delta;let G=w+o.zd*3;c[g+0]=l(N[w+0],N[G+0],U),c[g+1]=l(N[w+1],N[G+1],U),c[g+2]=l(N[w+2],N[G+2],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function M(w){let g=w*3;o.normal_cache[g]===0&&(o.normal_cache[g+0]=o.field[w-1]-o.field[w+1],o.normal_cache[g+1]=o.field[w-o.yd]-o.field[w+o.yd],o.normal_cache[g+2]=o.field[w-o.zd]-o.field[w+o.zd])}function d(w,g,v,A,T){let S=A+1,C=A+o.yd,_=A+o.zd,y=S+o.yd,D=S+o.zd,U=A+o.yd+o.zd,N=S+o.yd+o.zd,G=0,J=o.field[A],X=o.field[S],j=o.field[C],tt=o.field[y],mt=o.field[_],Tt=o.field[D],xt=o.field[U],Lt=o.field[N];J<T&&(G|=1),X<T&&(G|=2),j<T&&(G|=8),tt<T&&(G|=4),mt<T&&(G|=16),Tt<T&&(G|=32),xt<T&&(G|=128),Lt<T&&(G|=64);let Ut=Bg[G];if(Ut===0)return 0;let Bt=o.delta,kt=w+Bt,ut=g+Bt,W=v+Bt;Ut&1&&(M(A),M(S),f(A*3,0,T,w,g,v,J,X,A,S)),Ut&2&&(M(S),M(y),p(S*3,3,T,kt,g,v,X,tt,S,y)),Ut&4&&(M(C),M(y),f(C*3,6,T,w,ut,v,j,tt,C,y)),Ut&8&&(M(A),M(C),p(A*3,9,T,w,g,v,J,j,A,C)),Ut&16&&(M(_),M(D),f(_*3,12,T,w,g,W,mt,Tt,_,D)),Ut&32&&(M(D),M(N),p(D*3,15,T,kt,g,W,Tt,Lt,D,N)),Ut&64&&(M(U),M(N),f(U*3,18,T,w,ut,W,xt,Lt,U,N)),Ut&128&&(M(_),M(U),p(_*3,21,T,w,g,W,mt,xt,_,U)),Ut&256&&(M(A),M(_),x(A*3,24,T,w,g,v,J,mt,A,_)),Ut&512&&(M(S),M(D),x(S*3,27,T,kt,g,v,X,Tt,S,D)),Ut&1024&&(M(y),M(N),x(y*3,30,T,kt,ut,v,tt,Lt,y,N)),Ut&2048&&(M(C),M(U),x(C*3,33,T,w,ut,v,j,xt,C,U)),G<<=4;let pt,_t,nt,wt=0,Dt=0;for(;Ya[G+Dt]!=-1;)pt=G+Dt,_t=pt+1,nt=pt+2,m(h,c,u,3*Ya[pt],3*Ya[_t],3*Ya[nt]),Dt+=3,wt++;return wt}function m(w,g,v,A,T,S){let C=o.count*3;if(o.positionArray[C+0]=w[A],o.positionArray[C+1]=w[A+1],o.positionArray[C+2]=w[A+2],o.positionArray[C+3]=w[T],o.positionArray[C+4]=w[T+1],o.positionArray[C+5]=w[T+2],o.positionArray[C+6]=w[S],o.positionArray[C+7]=w[S+1],o.positionArray[C+8]=w[S+2],o.material.flatShading===!0){let _=(g[A+0]+g[T+0]+g[S+0])/3,y=(g[A+1]+g[T+1]+g[S+1])/3,D=(g[A+2]+g[T+2]+g[S+2])/3;o.normalArray[C+0]=_,o.normalArray[C+1]=y,o.normalArray[C+2]=D,o.normalArray[C+3]=_,o.normalArray[C+4]=y,o.normalArray[C+5]=D,o.normalArray[C+6]=_,o.normalArray[C+7]=y,o.normalArray[C+8]=D}else o.normalArray[C+0]=g[A+0],o.normalArray[C+1]=g[A+1],o.normalArray[C+2]=g[A+2],o.normalArray[C+3]=g[T+0],o.normalArray[C+4]=g[T+1],o.normalArray[C+5]=g[T+2],o.normalArray[C+6]=g[S+0],o.normalArray[C+7]=g[S+1],o.normalArray[C+8]=g[S+2];if(o.enableUvs){let _=o.count*2;o.uvArray[_+0]=w[A+0],o.uvArray[_+1]=w[A+2],o.uvArray[_+2]=w[T+0],o.uvArray[_+3]=w[T+2],o.uvArray[_+4]=w[S+0],o.uvArray[_+5]=w[S+2]}o.enableColors&&(o.colorArray[C+0]=v[A+0],o.colorArray[C+1]=v[A+1],o.colorArray[C+2]=v[A+2],o.colorArray[C+3]=v[T+0],o.colorArray[C+4]=v[T+1],o.colorArray[C+5]=v[T+2],o.colorArray[C+6]=v[S+0],o.colorArray[C+7]=v[S+1],o.colorArray[C+8]=v[S+2]),o.count+=3}this.addBall=function(w,g,v,A,T,S){let C=Math.sign(A);A=Math.abs(A);let _=S!=null,y=new Xt(w,g,v);if(_)try{y=S instanceof Xt?S:Array.isArray(S)?new Xt(Math.min(Math.abs(S[0]),1),Math.min(Math.abs(S[1]),1),Math.min(Math.abs(S[2]),1)):new Xt(S)}catch{y=new Xt(w,g,v)}let D=this.size*Math.sqrt(A/T),U=v*this.size,N=g*this.size,G=w*this.size,J=Math.floor(U-D);J<1&&(J=1);let X=Math.floor(U+D);X>this.size-1&&(X=this.size-1);let j=Math.floor(N-D);j<1&&(j=1);let tt=Math.floor(N+D);tt>this.size-1&&(tt=this.size-1);let mt=Math.floor(G-D);mt<1&&(mt=1);let Tt=Math.floor(G+D);Tt>this.size-1&&(Tt=this.size-1);let xt,Lt,Ut,Bt,kt,ut,W,pt,_t,nt,wt;for(Ut=J;Ut<X;Ut++)for(kt=this.size2*Ut,pt=Ut/this.size-v,_t=pt*pt,Lt=j;Lt<tt;Lt++)for(Bt=kt+this.size*Lt,W=Lt/this.size-g,nt=W*W,xt=mt;xt<Tt;xt++)if(ut=xt/this.size-w,wt=A/(1e-6+ut*ut+nt+_t)-T,wt>0){this.field[Bt+xt]+=wt*C;let Dt=Math.sqrt((xt-G)*(xt-G)+(Lt-N)*(Lt-N)+(Ut-U)*(Ut-U))/D,I=1-Dt*Dt*Dt*(Dt*(Dt*6-15)+10);this.palette[(Bt+xt)*3+0]+=y.r*I,this.palette[(Bt+xt)*3+1]+=y.g*I,this.palette[(Bt+xt)*3+2]+=y.b*I}},this.addPlaneX=function(w,g){let v=this.size,A=this.yd,T=this.zd,S=this.field,C,_,y,D,U,N,G,J=v*Math.sqrt(w/g);for(J>v&&(J=v),C=0;C<J;C++)if(N=C/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(_=0;_<v;_++)for(G=C+_*A,y=0;y<v;y++)S[T*y+G]+=U},this.addPlaneY=function(w,g){let v=this.size,A=this.yd,T=this.zd,S=this.field,C,_,y,D,U,N,G,J,X=v*Math.sqrt(w/g);for(X>v&&(X=v),_=0;_<X;_++)if(N=_/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(G=_*A,C=0;C<v;C++)for(J=G+C,y=0;y<v;y++)S[T*y+J]+=U},this.addPlaneZ=function(w,g){let v=this.size,A=this.yd,T=this.zd,S=this.field,C,_,y,D,U,N,G,J,X=v*Math.sqrt(w/g);for(X>v&&(X=v),y=0;y<X;y++)if(N=y/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(G=T*y,_=0;_<v;_++)for(J=G+_*A,C=0;C<v;C++)S[J+C]+=U},this.setCell=function(w,g,v,A){let T=this.size2*v+this.size*g+w;this.field[T]=A},this.getCell=function(w,g,v){let A=this.size2*v+this.size*g+w;return this.field[A]},this.blur=function(w=1){let g=this.field,v=g.slice(),A=this.size,T=this.size2;for(let S=0;S<A;S++)for(let C=0;C<A;C++)for(let _=0;_<A;_++){let y=T*_+A*C+S,D=v[y],U=1;for(let N=-1;N<=1;N+=2){let G=N+S;if(!(G<0||G>=A))for(let J=-1;J<=1;J+=2){let X=J+C;if(!(X<0||X>=A))for(let j=-1;j<=1;j+=2){let tt=j+_;if(tt<0||tt>=A)continue;let mt=T*tt+A*X+G,Tt=v[mt];U++,D+=w*(Tt-D)/U}}}g[y]=D}},this.reset=function(){for(let w=0;w<this.size3;w++)this.normal_cache[w*3]=0,this.field[w]=0,this.palette[w*3]=this.palette[w*3+1]=this.palette[w*3+2]=0},this.update=function(){this.count=0;let w=this.size-2;for(let g=1;g<w;g++){let v=this.size2*g,A=(g-this.halfsize)/this.halfsize;for(let T=1;T<w;T++){let S=v+this.size*T,C=(T-this.halfsize)/this.halfsize;for(let _=1;_<w;_++){let y=(_-this.halfsize)/this.halfsize,D=S+_;d(y,C,A,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Bg=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ya=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Ke=Math.PI*2,zg=new z(0,1,0),Ja=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),qs=new Map,ns=(i,t,e)=>Math.max(t,Math.min(e,i)),Xs=i=>new z(...i),Ws=(i,t)=>new Xt(i).multiplyScalar(t),gn=(i,t,e)=>new Xt(i).lerp(new Xt(t),e),Oe=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Ai(i,t,e=.19){let n="sculpted:"+i;if(qs.has(n))return qs.get(n).clone();let s=72,r=1.54,a=new Za(s,void 0,!1,!1,5e4);a.isolation=0;let o=(x,M,d,[m,w,g,v,A,T])=>{x-=m,M-=w,d-=g;let S=Math.hypot(x/v,M/A,d/T),C=Math.hypot(x/(v*v),M/(A*A),d/(T*T));return C>1e-9?S*(S-1)/C:-Math.min(v,A,T)},h=(x,M)=>{let d=Math.max(e-Math.abs(x-M),0)/e;return Math.min(x,M)-d*d*e*.25};for(let x=0;x<s;x++)for(let M=0;M<s;M++)for(let d=0;d<s;d++){let m=(d/s*2-1)*r,w=(M/s*2-1)*r,g=(x/s*2-1)*r,v=o(m,w,g,t[0]);for(let A=1;A<t.length;A++)v=h(v,o(m,w,g,t[A]));a.field[d+M*s+x*s*s]=-v}a.update();let c=a.count,u=new ye,l=a.positionArray.slice(0,c*3),f=a.normalArray.slice(0,c*3),p=[];for(let x=0;x<c;x++)l[x*3]*=r,l[x*3+1]*=r,l[x*3+2]*=r,p.push(Math.atan2(l[x*3],l[x*3+2])/Ke+.5,(l[x*3+1]+1.2)/2.4);return u.setAttribute("position",new Yt(l,3)),u.setAttribute("normal",new Yt(f,3)),u.setAttribute("uv",new Yt(p,2)),u.normalizeNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),a.geometry.dispose(),a.material?.dispose(),qs.set(n,u),u.clone()}function Sc(i){let t=[],e=[],n=[],s=[];for(let a of i){let o=a,h=t.length/3;if(t.push(...o.attributes.position.array),e.push(...o.attributes.normal.array),o.attributes.uv&&n.push(...o.attributes.uv.array),o.index)for(let c of o.index.array)s.push(c+h);else for(let c=0;c<o.attributes.position.count;c++)s.push(h+c);a.dispose()}let r=new ye;return r.setAttribute("position",new Yt(t,3)),r.setAttribute("normal",new Yt(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new Yt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function Cu(i,t,e=.82,n=.98){let s=i+":"+e+":"+n;if(qs.has(s))return qs.get(s).clone();let r=t.map(([d,m])=>new z(d,m,0));r.reduce((d,m,w)=>d+m.x*r[(w+1)%r.length].y-r[(w+1)%r.length].x*m.y,0)<0&&r.reverse();let o=new cn(r,!0,"catmullrom",.35),h=112,c=48,u=[],l=[],f=[],p=r.reduce((d,m)=>d+Math.hypot(m.x,m.y),0)/r.length;for(let d=0;d<=c;d++){let m=d/c*Math.PI,w=Math.pow(Math.sin(m),n);for(let g=0;g<=h;g++){let v=o.getPoint(g/h),A=Math.hypot(v.x,v.y),T=w**2.65,S=p+(A-p)*T,C=A>1e-6?w*S/A:0;if(u.push(v.x*C,v.y*C,e*Math.cos(m)),l.push(g/h,d/c),g<h&&d<c){let _=d*(h+1)+g,y=_+h+1;f.push(_,y,_+1,y,y+1,_+1)}}}let x=new ye;x.setAttribute("position",new Yt(u,3)),x.setAttribute("uv",new Yt(l,2)),x.setIndex(f),x.computeVertexNormals();let M=x.attributes.normal;for(let d=0;d<=c;d++){let m=d*(h+1),w=m+h;if(d===0||d===c)for(let g=m;g<=w;g++)M.setXYZ(g,0,0,d===0?1:-1);else{let g=new z().fromBufferAttribute(M,m).add(new z().fromBufferAttribute(M,w)).normalize();M.setXYZ(m,g.x,g.y,g.z),M.setXYZ(w,g.x,g.y,g.z)}}return x.computeBoundingBox(),x.computeBoundingSphere(),qs.set(s,x),x.clone()}function $a(i,t,e=1){let n=new cn(i.map(Xs),!1,"centripetal"),s=30,r=14,a=n.computeFrenetFrames(s,!1),o=[],h=[],c=[];for(let l=0;l<=s;l++){let f=l/s,p=n.getPointAt(f),x=Math.min(1,Math.sin(Math.min(1,f/.13)*Math.PI/2),Math.sin(Math.min(1,(1-f)/.19)*Math.PI/2)),M=t*(1+(e-1)*f)*x;for(let d=0;d<=r;d++){let m=d/r*Ke,w=a.normals[l],g=a.binormals[l];if(o.push(p.x+(w.x*Math.cos(m)+g.x*Math.sin(m))*M,p.y+(w.y*Math.cos(m)+g.y*Math.sin(m))*M,p.z+(w.z*Math.cos(m)+g.z*Math.sin(m))*M),h.push(d/r,f),l<s&&d<r){let v=l*(r+1)+d,A=v+r+1;c.push(v,v+1,A,v+1,A+1,A)}}}let u=new ye;return u.setAttribute("position",new Yt(o,3)),u.setAttribute("uv",new Yt(h,2)),u.setIndex(c),u.computeVertexNormals(),u.computeBoundingSphere(),u}function Iu(i){let t=(r=1,a=16)=>Array.from({length:a},(o,h)=>{let c=h/a*Ke,u=Math.cos(c),l=Math.sin(c);return[Math.sign(u)*Math.abs(u)**r,Math.sign(l)*Math.abs(l)**r]}),e=r=>Array.from({length:r},(a,o)=>[Math.sin(o/r*Ke),Math.cos(o/r*Ke)]),n=(r,a,o=0,h=1,c=1)=>Array.from({length:72},(u,l)=>{let f=l/72*Ke,p=1+a*Math.cos(f*r+o);return[Math.sin(f)*p*h,Math.cos(f)*p*c]}),s={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1.04,-.56],[-1.2,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.9,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.8],[-.57,-.76]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.2],[1,.23],[.69,.65],[.34,.97]],triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],heart:[[0,.56],[-.24,.78],[-.54,.9],[-.8,.81],[-.955,.58],[-.975,.3],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.3],[.955,.58],[.8,.81],[.54,.9],[.24,.78]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.1],[-1.03,-.1],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.1],[1.03,.1],[.865,.31],[.175,.985]],star:Array.from({length:40},(r,a)=>{let o=a/40*Ke,h=.88+.18*Math.cos(o*5);return[Math.sin(o)*h,Math.cos(o)*h]}),puff:n(6,.15,.38),clover:n(4,.25,Math.PI,1.035,.88),scallop:n(10,.058),hexagon:e(6),roundedcube:t(.5),sphere:t(),sprout:t(),frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.5],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.5],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:t()};return s[i]||s.dumpling}function kg(i){let e=new Uint8Array(65536),n=["plush","micro"].includes(i),s=null,r=0,a=1;if(n){s=new Float32Array(16384);for(let c=0;c<2500;c++){let u=Oe(c*7+191)*128,l=Oe(c*7+193)*128,f=2+Oe(c*7+197)*3,p=(Oe(c*7+199)-.5)*.88,x=Math.sin(p),M=Math.cos(p),d=.39+Oe(c*7+211)*.3,m=.55+Oe(c*7+223)*.75,w=Math.ceil(f+1);for(let g=-w;g<=w;g++)for(let v=-w;v<=w;v++){let A=Math.floor(u)+v,T=Math.floor(l)+g,S=A-u,C=T-l,_=S*x+C*M,y=S*M-C*x,D=Math.exp(-.5*(_/(f*.46))**2-.5*(y/d)**2)*m;s[(T%128+128)%128*128+(A%128+128)%128]+=D}}for(let c of s)r+=c;r/=s.length;let h=0;for(let c of s)h+=(c-r)**2;a=(i==="micro"?45:54)/Math.max(.01,Math.sqrt(h/s.length))}for(let h=0;h<128;h++)for(let c=0;c<128;c++){let u=Oe(c+h*128),l=i==="knit",f=i==="fabric",p=l?Math.sin(c*.72+Math.sin(h*.33)*1.8)*Math.cos(h*.33):f?Math.sin(c*1.57)*Math.sin(h*1.57):0,x=n?ns(128+(s[c+h*128]-r)*a,32,224):ns(128+(u-.5)*(l?16:24)+p*(l?35:f?32:0),0,255),M=(h*128+c)*4;e[M]=e[M+1]=e[M+2]=x,e[M+3]=255}let o=new vi(e,128,128,mn);return o.needsUpdate=!0,o.wrapS=o.wrapT=vs,o.magFilter=Mn,o.minFilter=Zn,o.generateMipmaps=!0,o.repeat.set(i==="knit"?3:5,i==="knit"?3:5),o}function Pu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=new Pe,n=new Pe,s=new Pe,r=new Pe;e.name="avatar-body",n.name="head",s.name="torso",r.name="face",e.add(s,n),n.add(r);let a=[],o=[],h=[],c=[],u=new Map,l=new Map,f=new Map,p=ns(Number(t.headScale)||1,.65,1.5),x=ns(Number(t.bodyWidth)||1,.65,1.5),M=null,d=[],m={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},w=[],g=(E,P)=>(u.has(E)||u.set(E,P()),u.get(E)),v=()=>g("sphere",()=>new ri(1,40,28));function A(E,P=t.material){let B=new Xt(E).getHexString(),O=B+":"+P;if(l.has(O))return l.get(O);let Z={rubber:.71,plush:.97,micro:.93,clay:.89,skin:.8,hair:.71,fiber:.9,knit:.99,fabric:.95,eye:.35,matteEye:.6,nose:.52},it=new Pn({color:E,roughness:Z[P]??.88,metalness:0});return it.name=P,["eye","matteEye","nose","hair"].includes(P)||(f.has(P)||f.set(P,kg(P)),it.bumpMap=f.get(P),it.bumpScale={rubber:.0015,skin:.001,micro:.0015,plush:.0022,clay:.002,knit:.0045,fabric:.004,fiber:.002}[P]??.002),l.set(O,it),it}let T=A(t.colors.body),S=A(t.colors.secondary),C=A(Ws(t.colors.body,.24)),_=A(t.colors.eyes,["sparkle","glossy","star","oval","side"].includes(t.eyes)?"eye":"matteEye"),y=A(Ws(t.colors.eyes,.88),"nose");function D(E,P,B,O=[0,0,0],Z=[1,1,1],it=!1,st=""){let R=new pe(P,B);return R.position.set(...O),R.scale.set(...Z),R.castShadow=!0,R.receiveShadow=!0,R.name=st,E.add(R),it&&(R.userData.surfaceMaterial=B.name,R.userData.furLength=B.name==="micro"?.011:.024,a.push(R)),R}let U=(E,P,B,O=T,Z=!0,it="")=>D(E,v(),O,P,B,Z,it);function N(E,P){E.geometry=E.geometry.clone(),E.material=E.material.clone(),E.material.vertexColors=!0,E.material.color.set("#FFFFFF");let B=E.geometry.attributes.position,O=new Float32Array(B.count*3),Z=new Xt;for(let it=0;it<B.count;it++)P(new z(B.getX(it)*E.scale.x,B.getY(it)*E.scale.y,B.getZ(it)*E.scale.z),Z),O[it*3]=Z.r,O[it*3+1]=Z.g,O[it*3+2]=Z.b;return E.geometry.setAttribute("color",new Yt(O,3)),E}function G(E,P,B,O,Z=24,it=!1,st=""){let R=new cn(P.map(Xs),it,"catmullrom",.35);return D(E,new bi(R,Z,B,7,it),O,[0,0,0],[1,1,1],!1,st)}function J(E,P,B,O,Z,it,st=T,R=!0){return D(E,g(P+":"+O,()=>Cu(P,B,O)),st,Z,it,R,P)}function X(E,P,B,O,Z=T,it=Z,st="paw"){let R=new Pe;R.name=E<0?"arm-left":"arm-right",R.position.set(...P),e.add(R);let b=Ja.has(t.shape),k=st==="hand",Y=[E*(b?-.035:k?-.2:.06),-B,b?.195:k?.37:.065],K=k?[[0,.045,-.05],[E*.068,-B*.35,.15],[-E*.06,-B*.69,.32],[Y[0],-B+.045,Y[2]]]:b?[[0,.075,-.07],[E*.02,-B*.28,.02],[-E*.02,-B*.68,.135],[Y[0],-B+.025,Y[2]],[Y[0],-B-O*.85,Y[2]+.035]]:[[0,.055,-.012],[E*.065,-B*.32,.015],[E*.08,-B*.69,.11],[Y[0],-B+.025,Y[2]]],V=D(R,$a(K,O,k?.87:b?1.055:1.03),Z,[0,0,0],[1,1,1],!0,"upper-arm");return b&&Z!==it&&N(V,(ht,dt)=>dt.copy(Z.color).lerp(it.color,Re.smoothstep(-ht.y,B*.66,B*.84))),b||U(R,Y,[O*(k?1.03:1.05),O*(k?.82:.88),O*1.04],it,!0,st),st==="hand"&&U(R,[Y[0]-E*O*.65,Y[1]+.025,Y[2]+.04],[O*.35,O*.49,O*.39],it,!1,"thumb"),o.push(R),w.push(Xs(Y).add(Xs(P))),R}function j(E,P,B,O,Z,it=T){let st=new Pe;return st.name=E<0?"leg-left":"leg-right",st.position.set(P,B,O),e.add(st),U(st,[0,0,0],Z,it,!0,"hind-paw"),h.push(st),st}function tt(E,P,B,O,Z=T,it=null){let st=new Pe;if(st.position.set(...B),st.rotation.z=-E*(P==="long"?.07:.12),n.add(st),P==="round"||P==="long")U(st,[0,0,0],O,Z,!0,"outer-ear"),it&&U(st,[0,0,O[2]*.75],[O[0]*.61,O[1]*.68,O[2]*.28],A(it,"skin"),!1,"inner-ear");else{let R=[[0,.88],[-.16,.81],[-.49,.19],[-.7,-.48],[-.51,-.84],[.51,-.84],[.7,-.48],[.49,.19],[.16,.81]];J(st,"tri-ear",R,.36,[0,0,0],O,Z,!0),it&&J(st,"tri-ear-inner",R,.16,[0,-O[1]*.05,O[2]*.3],[O[0]*.56,O[1]*.64,O[2]*.37],A(it,"skin"),!1)}return st}function mt(E,P,B=T){M=new Pe,M.name="tail",e.add(M);let O=D(M,$a(E,P,.52),B,[0,0,0],[1,1,1],!0,"rounded-tail");return O.userData.surfaceMaterial=B.name,M}function Tt(E,P,B=S){let O=U(n,E,P,B,!0,"muzzle");return d.push(O),O}t.shape==="human"?nt():Ja.has(t.shape)?Dt(t.shape):_t(t.shape),t.shape==="human"||Ja.has(t.shape)?n.scale.setScalar(p):n.scale.set(1,p,1),q(),e.updateMatrixWorld(!0);let xt=new We().setFromObject(e),Lt=new We().setFromObject(n),Ut=E=>n.localToWorld(Xs(E)).toArray(),Bt={headTop:[n.position.x,Lt.max.y,n.position.z],face:Ut([0,m.eyeY,I(0,m.eyeY)+.035]),neck:Ut([0,m.neckY??-.58,.05]),handL:w[0]?.toArray()??[-.9,.65,.55],handR:w[1]?.toArray()??[.9,.65,.55],shoulderL:o[0]?.position.toArray()??[-1,.9,0],shoulderR:o[1]?.position.toArray()??[1,.9,0]},ut=new oi(new z(n.position.x,xt.max.y+2,n.position.z),new z(0,-1,0)).intersectObject(n,!0)[0];Bt.crown=ut?ut.point.toArray():Bt.headTop.slice(),Bt.mouth=Ut([0,m.mouthY,I(0,m.mouthY)+.042]);let pt=new oi(new z(0,Bt.neck[1],xt.max.z+2),new z(0,0,-1)).intersectObject(e,!0)[0];return Bt.neckFront=pt?[0,Bt.neck[1],pt.point.z+.022]:Ut([0,m.neckY??-.58,I(0,m.neckY??-.58)+.025]),e.userData.anatomy=t.shape==="human"?"human":Ja.has(t.shape)?"animal":"blob",e.userData.material=t.material,e.userData.restHeadPosition=n.position.clone(),{root:e,head:n,torso:s,face:r,eyeGroups:c,arms:o,legs:h,tail:M,anchors:Bt,height:xt.max.y,width:xt.max.x-xt.min.x,surfaces:a};function _t(E){let B={dumpling:[1,.94,1],cloud:[1,.97,1.07],capsule:[1,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1,1,.96],roundedcube:[1.03,1,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.1,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.1],twin:[.88,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.1,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.2]}[E]||[1.05,1.03,1];B[0]*=x;let O;if(E==="dumpling")O=D(n,g("blob-dumpling-layered",()=>Ai("dumpling-v5",[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.3)),T,[0,0,0],B,!0,"blob-dumpling");else if(E==="sphere")O=U(n,[0,0,0],B,T,!0,"blob-sphere");else if(E==="frog")O=D(n,g("blob-frog-sculpted",()=>Ai("frog-v4",[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.4],[.43,.62,.02,.295,.345,.4]],.255)),T,[0,0,0],B,!0,"blob-frog");else if(E==="puff"){let R=[[0,0,0,.78,.79,.77],...Array.from({length:6},(b,k)=>{let Y=k/6*Ke+.2;return[Math.sin(Y)*.68,Math.cos(Y)*.68,0,.4,.4,.6]})];O=D(n,g("blob-puff-sculpted",()=>Ai("puff-v5",R,.19)),T,[0,0,0],B,!0,"blob-puff")}else E==="cloud"?O=D(n,g("blob-cloud-sculpted",()=>Ai("cloud-v3",[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),T,[0,0,0],B,!0,"blob-cloud"):E==="sprout"?O=D(n,g("blob-sprout",()=>Ai("sprout-v4",[[0,-.13,0,.94,.94,.86],[-.085,.9,-.055,.2,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),T,[0,0,0],B,!0,"blob-sprout"):E==="ghost"?O=D(n,g("blob-ghost-sculpted",()=>Ai("ghost-v4",[[0,.1,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),T,[0,0,0],B,!0,"blob-ghost"):O=D(n,g("blob-"+E,()=>Cu("blob-r4-"+E,Iu(E),E==="arch"?.87:.84,.99)),T,[0,0,0],B,!0,"blob-"+E);d=[O],O.geometry.computeBoundingBox();let Z=O.geometry.boundingBox.min.y*B[1],it=["feet","both"].includes(t.limbs);if(n.position.y=-Z*p+(it?.22:.035),m={eyeX:(E==="triangle"?.265:E==="diamond"?.33:E==="heart"?.29:E==="pebble"?.27:E==="scallop"||E==="twin"?.25:E==="pill"?.26:t.family==="dots"?.2:.275)*x,eyeY:E==="dumpling"?.015:E==="cloud"?.1:E==="triangle"?.18:E==="sprout"?.13:.23,mouthY:E==="dumpling"?-.22:-.23,size:E==="triangle"?.91:E==="dumpling"?.95:1,neckY:Z*.72},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let R of[-1,1])X(R,[R*1.03*x,n.position.y-.1,.1],.4,.15,T,T,"mitten");if(it)for(let R of[-1,1])j(R,R*.46*x,.13,.12,[.21,.13,.28]);if(E==="frog"&&(m={eyeX:.43*x,eyeY:.66,mouthY:-.12,size:1.3,neckY:Z*.74}),E==="twin")for(let R of[-1,1]){let b=U(n,[R*.16,1.075,-.045],[.225,.285,.22],T,!0,"twin-top-lobe");b.rotation.z=-R*.3}}function nt(){let E=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",P=A(t.colors.skin,E),B=A(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),O=A(Ws(t.colors.clothing,.52),"fabric"),Z=A("#EEE8DF","rubber");s.position.set(0,.86,0),n.position.set(0,1.96,.015),U(s,[0,0,0],[.56*x,.66,.36],B,!0,"sweater-body"),U(s,[0,.51,0],[.21,.24,.21],P,!1,"neck");let it=t.faceShape||"round",st=g("human-face-"+it,()=>{let V=new ri(1,64,44),ht=V.attributes.position,dt=it==="oval"?.53:it==="soft-square"?.565:.558,St=it==="oval"?.665:.626;for(let vt=0;vt<ht.count;vt++){let $=ht.getX(vt),yt=ht.getY(vt),bt=ht.getZ(vt),Et=Re.smoothstep(yt,-.88,.01),Mt=1+.022*Math.exp(-(((yt+.13)/.29)**2)),Rt=(it==="soft-square"?.91+.09*Et:.865+.135*Et)*Mt,F=it==="soft-square"?Math.sign($)*Math.abs($)**.93:$;ht.setXYZ(vt,F*dt*Rt,yt*St,bt*.555+(bt>0?.012*Math.exp(-(((yt+.18)/.3)**2)):0))}return V.computeVertexNormals(),V.computeBoundingBox(),V.computeBoundingSphere(),V}),R=D(n,st,P,[0,0,0],[1,1,1],E==="fabric","human-face");N(R,(V,ht)=>{let dt=Math.exp(-(((Math.abs(V.x)-.325)/.077)**2)-((V.y+.126)/.053)**2)*Re.smoothstep(V.z,.3,.42)*.095;ht.copy(P.color).lerp(new Xt("#D8797F"),dt)}),d=[R];for(let V of[-1,1])tt(V,"round",[V*.552,-.045,.025],[.1,.14,.09],P,gn(t.colors.skin,"#B96762",.15)),X(V,[V*.42*x,1.285,-.012],.755,.153,B,P,"hand"),j(V,V*.235*x,.16,.065,[.19,.16,.25],Z),U(s,[V*.24,-.44,0],[.19,.36,.205],O,!1,"trouser-leg");let b=A(Ws(t.colors.clothing,.9),B.name),k=new Xi(.211,.048,9,48),Y=D(s,k,b,[0,.53,.005],[1,1,1]);Y.rotation.x=Math.PI/2;let K=t.outfit||"sweater";if(K==="hoodie"){let V=U(s,[0,.44,-.18],[.35,.31,.21],B,!0,"hood");for(let ht of[-1,1])G(s,[[ht*.13,.49,.225],[ht*.16,.23,.354],[ht*.145,.05,.363]],.011,A("#DAD6CC","fabric"),14);G(s,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,b,18)}else if(K==="cardigan"||K==="shirt"){G(s,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,b,20);for(let V=0;V<4;V++)U(s,[.03,.27-V*.18,.36-Math.abs(.1-V*.13)*.1],[.025,.025,.013],A("#D5C9B3","rubber"),!1,"button");for(let V of[-1,1]){let ht=U(s,[V*.15,.44,.25],[.095,.15,.036],b,!1,"collar");ht.rotation.z=V*.55}}else for(let V of[-.43,-.47,-.51])G(s,[[-.34,V,.22],[0,V-.025,.301],[.34,V,.22]],.012,b,24);m={eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67},wt()}function wt(){let E=t.hair||"short-curly",P=E==="short-curly",O=t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material)?"fiber":"hair",Z=[A(Ws(t.colors.hair,.915),O),A(t.colors.hair,O),A(gn(t.colors.hair,"#C4A188",.045),O)],it=t.faceShape==="oval",st=it?.559:.588,R=it?.71:.675,b=.574,k=F=>new z(F.x/(st*st),(F.y-.018)/(R*R),F.z/(b*b)).normalize(),Y=(F,ot,ct=0)=>{let gt=new z(Math.sin(F)*Math.sin(ot)*st,Math.cos(F)*R+.018,Math.sin(F)*Math.cos(ot)*b);return gt.addScaledVector(k(gt),ct)},K=F=>1.12+(1-Math.cos(F))*.56+(P?.032*Math.sin(F*7+.6):.01*Math.sin(F*2)),V=[],ht=[],dt=[],St=36,vt=96;for(let F=0;F<=St+1;F++)for(let ot=0;ot<=vt;ot++){let ct=ot/vt*Ke,gt=Math.min(1,F/St)*K(ct),ft=F>St?-.055:P?.018+.004*Math.sin(gt*8+Math.sin(ct*3))**2:.016,at=Y(gt,ct,ft);if(V.push(at.x,at.y,at.z),ht.push(ot/vt,F/St),F<=St&&ot<vt){let At=F*(vt+1)+ot,zt=At+vt+1;dt.push(At,zt,At+1,At+1,zt,zt+1)}}let $=new ye;$.setAttribute("position",new Yt(V,3)),$.setAttribute("uv",new Yt(ht,2)),$.setIndex(dt),$.computeVertexNormals(),D(n,$,Z[0],[0,0,0],[1,1,1],!1,"hair-foundation");let yt=[[],[],[]],bt=[[],[],[]],Et=0,Mt=(F,ot=.002,ct=null)=>{let gt=new cn(F,!1,"centripetal");yt[ct??Et++%3].push(new bi(gt,Math.max(12,F.length),ot,3,!1))};if(P){let F=(ct,gt,ft,at=!1)=>{let At=(at?.051:.053)+Oe(ft+44)*.011,zt=at?.35:Math.max(.055,ct-.3),Qt=at?1.115+Oe(ft+8)*.14:Math.min(K(gt)+.025,ct+.39),Ot=[],Zt=24;for(let ae=0;ae<=Zt;ae++){let se=ae/Zt,Ee=Re.lerp(zt,Qt,se)-Math.max(0,se-.82)**2*.55+Math.sin(se*Math.PI*2.25)*.033,Te=(1-se)*-.3+Math.sin(se*Math.PI*2.75+Oe(ft+9)*.35)*.095+Math.max(0,se-.67)**2*.7;Ot.push(Y(Ee,gt+Te,.006+Math.sin(se*Math.PI)*(.023+Oe(ft+64)*.012)))}let ne=new cn(Ot,!1,"centripetal"),ee=(ae,se,Ee=0)=>{let Te=ne.getPoint(ae),Ye=k(Te),rn=ne.getTangent(ae).normalize(),wn=new z().crossVectors(Ye,rn).normalize(),En=Math.min(1,Math.sqrt(Math.max(0,ae/.11)),Math.sqrt(Math.max(0,(1-ae)/.14)))*(.97-.15*ae),Tn=At*En*se,_n=(.02+Oe(ft+51)*.006)*En*Math.sqrt(Math.max(0,1-se*se));return Te.addScaledVector(wn,Tn).addScaledVector(Ye,_n+Ee)},fe=[],ue=[],Me=[],Be=12;for(let ae=0;ae<=Zt;ae++)for(let se=0;se<=Be;se++){let Ee=ae/Zt,Te=se/Be*Ke,Ye=ne.getPoint(Ee),rn=k(Ye),wn=ne.getTangent(Ee).normalize(),En=new z().crossVectors(rn,wn).normalize(),Tn=Math.min(1,Math.sqrt(Math.max(0,Ee/.11)),Math.sqrt(Math.max(0,(1-Ee)/.14)))*(.97-.15*Ee);if(Ye.addScaledVector(En,Math.cos(Te)*At*Tn).addScaledVector(rn,Math.sin(Te)*(.02+Oe(ft+51)*.006)*Tn),fe.push(Ye.x,Ye.y,Ye.z),ue.push(se/Be,Ee),ae<Zt&&se<Be){let _n=ae*(Be+1)+se,L=_n+Be+1;Me.push(_n,_n+1,L,_n+1,L+1,L)}}let Ce=new ye;Ce.setAttribute("position",new Yt(fe,3)),Ce.setAttribute("uv",new Yt(ue,2)),Ce.setIndex(Me),Ce.computeVertexNormals(),bt[ft%9===0?0:1].push(Ce);for(let ae=0;ae<9;ae++){let se=(ae/8*2-1)*.94,Ee=[];for(let Te=0;Te<=14;Te++){let Ye=.032+Te/14*.938,rn=Math.sin(Ye*Math.PI*1.1+ft)*.035;Ee.push(ee(Ye,ns(se+rn,-.97,.97),.0011))}Mt(Ee,.0011+Oe(ft*17+ae)*5e-4,ae%6===0?2:ae%5===0?0:1)}if(ft%5===0){let ae=[];for(let se=0;se<=12;se++){let Ee=.17+se/12*.68;ae.push(ee(Ee,.78,.004+Math.sin(se/12*Math.PI)*.009))}Mt(ae,.0011,2)}},ot=1;for(let[ct,gt,ft]of[[.29,5,.1],[.65,8,.19],[1.03,11,0],[1.43,10,.21],[1.81,9,.05]])for(let at=0;at<gt;at++){let At=at/gt*Ke+ft;ct>K(At)-.07||F(ct+(Oe(ot+18)-.5)*.05,At,ot++)}for(let ct=0;ct<11;ct++){let gt=(ct-5)*.173;F(1.03,gt,70+ct,!0)}for(let ct=0;ct<72;ct++){let gt=ct*2.399963,ft=.1+Oe(ct+8)*1.6,at=Math.min(K(gt)-.015,ft+.25+Oe(ct+16)*.2);if(at<=ft)continue;let At=[];for(let zt=0;zt<=12;zt++){let Qt=zt/12;At.push(Y(Re.lerp(ft,at,Qt),gt+Math.sin(Qt*Math.PI)*.11,.025))}Mt(At,.0013,ct%3)}}else for(let F=0;F<220;F++){let ot=F*2.399963,ct=.06+Oe(F)*1,gt=Math.min(K(ot),ct+.44+Oe(F+9)*.5),ft=[];for(let at=0;at<13;at++){let At=at/12,zt=Re.lerp(ct,gt,At),Qt=(1-At)*.21*(Math.cos(ot)+.4);ft.push(Y(zt,ot+Qt,.015+Math.sin(At*Math.PI)*.014))}Mt(ft,.0027+Oe(F+17)*.0015)}if(["bob","long","wavy"].includes(E)){let F=E==="bob"?.4:.9,ot=[];for(let ct of[-1,1])ot.push({center:[ct*.46,-.31-F*.22,-.09],size:[.17,F*.6,.24],name:"hair-side-foundation"});ot.push({center:[0,-.31-F*.27,-.33],size:[.45,F*.57,.15],name:"hair-back-foundation"});for(let[ct,gt]of ot.entries()){U(n,gt.center,gt.size,Z[0],!1,gt.name);for(let ft=0;ft<44;ft++){let at=ft/44*Ke,At=[];for(let zt=0;zt<=20;zt++){let Qt=zt/20,Ot=.12+Qt*2.82,Zt=at+(E==="wavy"?Math.sin(Qt*Ke*1.1)*.2:Math.sin(Qt*Math.PI)*.045),ne=new z(Math.sin(Ot)*Math.sin(Zt)/gt.size[0],Math.cos(Ot)/gt.size[1],Math.sin(Ot)*Math.cos(Zt)/gt.size[2]).normalize();At.push(new z(gt.center[0]+Math.sin(Ot)*Math.sin(Zt)*gt.size[0],gt.center[1]+Math.cos(Ot)*gt.size[1],gt.center[2]+Math.sin(Ot)*Math.cos(Zt)*gt.size[2]).addScaledVector(ne,.0013))}Mt(At,.00135,(ft+ct)%3)}}}if(E==="ponytail"||E==="bun"){let F=E==="bun",ot=new z(F?0:.17,F?.56:.04,F?-.28:-.57);F?U(n,ot.toArray(),[.235,.23,.23],Z[0],!1,"bun-foundation"):G(n,[[0,.4,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,Z[0],28);for(let ct=0;ct<88;ct++){let gt=ct/88*Ke,ft=[];for(let at=0;at<18;at++){let At=at/17;if(F){let zt=At*Ke*1.08;ft.push(ot.clone().add(new z(Math.cos(zt)*Math.sin(gt)*.242,Math.sin(zt)*.233,Math.cos(zt)*Math.cos(gt)*.238)))}else ft.push(new z(.025+At*.32+Math.sin(gt)*(.1*(1-At)+.025),.39-At*.99,-.4-Math.sin(At*Math.PI)*.25+Math.cos(gt)*(.1*(1-At)+.025)))}Mt(ft,.004)}}if(E==="braids")for(let F of[-1,1]){D(n,$a([[F*.56,.015,-.045],[F*.535,-.09,-.005],[F*.49,-.21,.055]],.09,.9),Z[0],[0,0,0],[1,1,1],!1,"braid-root");for(let ot=0;ot<3;ot++){let ct=[];for(let gt=0;gt<40;gt++){let ft=gt/39,at=ft*Ke*3.1+ot/3*Ke;ct.push([F*(.49+.015*Math.sin(ft*Math.PI))+Math.cos(at)*.035,-.14-ft*.81,.055+Math.sin(at)*.035])}D(n,$a(ct,.038,.86),Z[ot],[0,0,0],[1,1,1],!1,"braid-plait")}U(n,[F*.49,-.902,.055],[.071,.027,.062],A(gn(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}bt.forEach((F,ot)=>{F.length&&D(n,Sc(F),Z[ot],[0,0,0],[1,1,1],!1,"hair-curl-volume")}),yt.forEach((F,ot)=>{if(F.length){let ct=new si({color:gn(Z[ot].color,t.colors.hair,.55)}),gt=D(n,Sc(F),ct,[0,0,0],[1,1,1],!1,"hair-strands");gt.castShadow=!1,gt.receiveShadow=!1}})}function Dt(E){let P={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},[B,O,Z,it,st,R,b]=P[E],k={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[E],Y=(1-k)*1.3+.065;s.position.set(0,st*k+.12,-.11),n.position.set(0,b-Y,.12);let K=E==="penguin"?C:T,V=["penguin","owl"].includes(E),ht=V?U(s,[0,0,0],[it*x,st*k,R],K,!0,"animal-torso"):D(s,g("animal-seated-"+E,()=>Ai("animal-seated-r4-"+E,[[0,0,0,it,st*k,R],[-it*.6,-st*k*.4,.025,it*.49,st*k*.59,R*.71],[it*.6,-st*k*.4,.025,it*.49,st*k*.59,R*.71]],.13)),K,[0,0,0],[x,1,1],!0,"animal-torso"),dt;E==="shiba"?dt=D(n,g("shiba-soft-face",()=>Ai("shiba-face-r4",[[0,0,0,B,O,Z],[0,-.2,.365,.435,.257,.265]],.2)),T,[0,0,0],[1,1,1],!0,"animal-head"):E==="capybara"?dt=J(n,"capybara-skull",Iu("roundedcube"),.85,[0,0,0],[B,O,Z/.85],T,!0):dt=U(n,[0,0,0],[B,O,Z],K,!0,"animal-head"),d=[dt],["axolotl","capybara","hedgehog","panda"].includes(E)||N(ht,($,yt)=>{let bt=($.x/(it*.68*x))**2+(($.y+.06)/(st*k*.86))**2,Et=(1-Re.smoothstep(bt,.9,1.035))*Re.smoothstep($.z,R*.26,R*.67);yt.copy(K.color).lerp(S.color,Et)}),m={eyeX:B*.44,eyeY:.07,mouthY:-O*.43,size:.72,neckY:-O*.85};let St=Z*.78,vt=gn(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(E)){let $=E==="fox"?[.19,.155,.26]:E==="hedgehog"?[.215,.16,.29]:E==="shiba"?[.22,.18,.19]:E==="bear"?[.21,.18,.19]:[.16,.13,.155];if(E==="shiba")N(dt,(bt,Et)=>{let Mt=(bt.x/.565)**2+((bt.y+.225)/.358)**2,Rt=(1-Re.smoothstep(Mt,.94,1.055))*Re.smoothstep(bt.z,.08,.3);for(let F of[-1,1]){let ot=((bt.x-F*.265)/.061)**2+((bt.y-.238)/.045)**2;Rt=Math.max(Rt,(1-Re.smoothstep(ot,.68,1.04))*Re.smoothstep(bt.z,.25,.37))}Et.copy(T.color).lerp(S.color,Rt)});else for(let bt of[-1,1])Tt([bt*$[0]*.54,-O*.31,St],$,E==="panda"?T:S);let yt=E==="shiba"?.635:St+$[2]*.89;if(U(n,[0,-O*.27,yt],[E==="rabbit"?.043:E==="shiba"?.065:.07,.042,.035],E==="rabbit"?A(vt,"nose"):y,!1,"nose"),E==="cat")for(let bt of[-1,1])for(let Et=0;Et<3;Et++)G(n,[[bt*.2,-.2+Et*.025,St+.14],[bt*.42,-.21+Et*.05,St+.13],[bt*.62,-.23+Et*.083,St+.02]],.0045,A(gn(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(E))for(let $ of[-1,1])tt($,"triangle",[$*B*.69,O*.75,-.035],[E==="fox"||E==="shiba"?.3:.25,E==="fox"?.39:E==="shiba"?.3:.28,.43],T,vt);else if(E==="rabbit")for(let $ of[-1,1])tt($,"long",[$*.235,.61,-.055],[.14,.51,.11],T,vt);else if(["panda","bear","otter","capybara"].includes(E))for(let $ of[-1,1])tt($,"round",[$*B*.74,O*.72,-.035],E==="otter"?[.105,.12,.09]:E==="capybara"?[.13,.135,.095]:[.205,.205,.13],E==="panda"?C:T,vt);if(E==="panda")for(let $ of[-1,1]){let yt=U(n,[$*.285,.07,Z*.86],[.16,.2,.06],C,!1,"eye-patch");yt.rotation.z=-$*.24,d.push(yt)}if(E==="capybara"){Tt([0,-.16,.38],[.43,.28,.4],T),m={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let $ of[-1,1])U(n,[$*.125,-.145,.768],[.038,.027,.013],y,!1,"nostril")}if(E==="axolotl"){let $=A(gn(t.colors.body,"#DD7695",.58));for(let yt of[-1,1])for(let bt=0;bt<3;bt++){let Et=[yt*.62,.18-bt*.15,-.06],Mt=[yt*(1+(bt===1?.09:0)),.45-bt*.35,-.08];G(n,[Et,[yt*.85,(Et[1]+Mt[1])*.5,.02],Mt],.041,$,18);for(let Rt=0;Rt<4;Rt++){let F=.37+Rt*.17,ot=Re.lerp(Et[0],Mt[0],F),ct=Re.lerp(Et[1],Mt[1],F);for(let gt of[-1,1])G(n,[[ot,ct,-.055],[ot+yt*.055,ct+gt*.085,.01],[ot+yt*.06,ct+gt*.105,-.018]],.018,$,8)}}m={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}for(let $ of[-1,1]){if(V){let bt=E==="penguin"?1.07:.99,Et=X($,[$*it*.82*x,bt,-.04],.46,.135,K,K,"wing-tip");Et.rotation.z=$*.13,Et.scale.z=.64,w[$<0?0:1]=Xs([$*(it*.82*x+.025),bt-.445,.055])}else{let bt=Math.min(.8,b-Y-.54),Et=["rabbit","axolotl","hedgehog"].includes(E),Mt=Et?.122:E==="bear"||E==="panda"?.164:.149;X($,[$*it*.57*x,bt,.155],Math.max(.23,bt-(Et?.23:.245)),Mt,E==="panda"?C:T,E==="shiba"?S:T)}let yt=j($,$*it*(V?.6:.8)*x,V?.1:.112,V?.2:.015,[V?.18:.165,V?.1:.112,V?.225:.2],V?A("#D8A34D","rubber"):E==="panda"?C:T);if(!V)for(let bt=0;bt<2;bt++)G(yt,[[-.05+bt*.095,.026,.165],[-.05+bt*.095,.067,.146]],.0035,A(gn(t.colors.body,t.colors.eyes,.1)),6)}if(E==="shiba")mt([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),U(M,[.65,.65,-.18],[.125,.115,.12],S,!0,"tail-tip");else if(E==="cat")mt([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(E==="fox"){mt([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let $=U(M,[1.14,.9,-.15],[.2,.32,.21],S,!0,"white-tail-tip");$.rotation.z=-.36}else if(E==="rabbit")M=new Pe,e.add(M),U(M,[.46,.41,-.41],[.24,.24,.23],S,!0,"cotton-tail");else if(E==="hedgehog")mt([[.25,.24,-.35],[.52,.18,-.38],[.7,.17,-.28]],.08);else if(["otter","axolotl"].includes(E)){if(mt([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],E==="axolotl"?.13:.14),E==="axolotl"){let $=U(M,[.78,.31,-.6],[.41,.23,.055],A(gn(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");$.rotation.y=-.7}}else M=new Pe,e.add(M),U(M,[.45,.4,-.43],[.135,.14,.13],K,!0,"short-tail");if(V){if(E==="owl")for(let yt of[-1,1]){let bt=U(n,[yt*.235,.055,.38],[.255,.3,.11],S,!0,"facial-disc");d.push(bt),tt(yt,"triangle",[yt*.39,.43,-.055],[.2,.23,.29],T,null)}let $=J(n,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[E==="penguin"?.155:.09,.115,.12],A("#D8A34D","rubber"),!1);d.push($),m.mouthY=-.26,m.size=E==="owl"?1.05:.85}if(E==="hedgehog"){let $=[];for(let yt=0;yt<110;yt++){let bt=yt*2.399963,Et=.15+Oe(yt)*.93,Mt=Math.sqrt(Math.max(0,1-Et*Et)),Rt=new z(Math.sin(bt)*Mt,Et,Math.cos(bt)*Mt);if(Rt.z>.32)continue;let F=new z(Rt.x*.69*x,Rt.y*.61+.71,Rt.z*.58-.13),ot=new br(.041,.22,6,1);ot.translate(0,.075,0),ot.applyQuaternion(new Je().setFromUnitVectors(zg,Rt)),ot.translate(F.x,F.y,F.z),$.push(ot)}D(e,Sc($),A(Ws(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function I(E,P){let B=new oi(new z(E,P,4),new z(0,0,-1)),O=-1/0;for(let Z of d){Z.updateMatrix();let it=new pe(Z.geometry,Z.material);it.matrixWorld.copy(Z.matrix);let st=B.intersectObject(it,!1);st.length&&(O=Math.max(O,st[0].point.z))}return Number.isFinite(O)?O:.4}function H(E,P,B=_,O="face-line"){return G(r,E.map(([Z,it])=>[Z,it,I(Z,it)+.022]),P,B,24,!1,O)}function q(){let E=t.expression,P=ns(Number(t.eyeScale)||1,.45,1.8)*m.size,B=ns(Number(t.eyeSpacing)||1,.6,1.6),O=m.eyeX*B,Z={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]},[it,st]=Z[t.eyes]||Z.softOval,R=E==="closed",b={deadpan:.35,tearful:1.08,expectant:1.16,panicked:1.43,sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[E]??1;for(let K of[-1,1]){let V=K*O,ht=m.eyeY+(["curious","skeptical"].includes(E)&&K>0?.025:0),dt=I(V,ht),St=R||E==="wink"&&K>0||["delighted","laughing"].includes(E),vt=b*(E==="skeptical"&&K<0?.52:E==="panicked"&&K>0?.84:1),$=.012,yt=(I(V+$,ht)-I(V-$,ht))/($*2),bt=(I(V,ht+$)-I(V,ht-$))/($*2),Et=new z(-yt,-bt,1).normalize(),Mt=.009;for(let F of[-1,0,1])for(let ot of[-1,0,1]){let ct=F*it*P,gt=ot*st*P*vt;Mt=Math.max(Mt,I(V+ct,ht+gt)-dt-yt*ct-bt*gt+.006)}let Rt=new Pe;if(Rt.name=K<0?"eye-left":"eye-right",Rt.position.set(V,ht,dt+Mt),r.add(Rt),c.push(Rt),Rt.userData.restScaleY=1,Rt.quaternion.setFromUnitVectors(new z(0,0,1),Et),Rt.rotateZ(["sad","shy","worried","tearful"].includes(E)?K*.15:E==="angry"?-K*.24:E==="happy"?K*.06:E==="focused"?-K*.09:E==="proud"?K*.09:t.eyes==="softOval"&&t.family==="dots"?.13:0),St)G(Rt,[[-it*P,0,0],[0,(E==="laughing"?.07:E==="delighted"?.043:-.021)*P,.01],[it*P,0,0]],.013*P,_,18,!1,["delighted","laughing"].includes(E)?"delighted-lid":"closed-lid");else{let F=A("#FCFCF5","eye"),ot=A("#FFFFFF","eye");if(t.shape==="frog"&&!["oval","side"].includes(t.eyes)&&U(Rt,[0,0,-.073],[it*P*2.35,st*P*1.47,.098],A("#F8FFE8","rubber"),!1,"frog-eye-white"),(t.eyes==="sleepy"||E==="deadpan")&&!["focused","surprised","excited"].includes(E)&&!["work","read","camera"].includes(t.action)?(U(Rt,[0,-st*.29*P,.003],[it*.44*P,st*.57*P,.023],_,!1,"eye"),G(Rt,[[-it*P,st*.12*P,.006],[0,st*.16*P,.011],[it*P,st*.12*P,.006]],.023*P,_,16,!1,"sleepy-upper-lid")):t.eyes==="capsule"?D(Rt,g("capsule-eye",()=>new vr(1,2.8,6,20)),_,[0,0,0],[it*P,st*P*vt/2.4,.021],!1,"eye"):U(Rt,[0,0,0],[it*P,st*P*vt,.022],["oval","side"].includes(t.eyes)?F:_,!1,"eye"),["oval","side"].includes(t.eyes)){let ct=["work","read","camera"].includes(t.action),gt=t.eyes==="side"&&!ct?-.03*P:E==="thinking"?.019*P:0;U(Rt,[gt,ct?-.02*P:["proud","expectant"].includes(E)?.025*P:0,.021],[it*(t.eyes==="side"?.74:.58)*P,st*(t.eyes==="side"?.74:.7)*P*vt,.017],_,!1,"pupil")}if(t.eyes==="lash"&&G(Rt,[[K*it*.5*P,st*.17*P,.009],[K*it*1.12*P,st*.1*P,.004],[K*it*1.72*P,st*.31*P,-.005]],.012*P,_,14,!1,"outer-lash"),t.eyes==="star"){let ct=g("star-reflection",()=>{let at=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];return new Wi(new In(at.map(([At,zt])=>new It(At,zt))))}),gt=D(Rt,ct,ot,[-it*.11*P,st*.29*P*vt,.027],[P,P,P],!1,"star-catchlight");gt.castShadow=!1,gt.receiveShadow=!1;let ft=D(Rt,g("star-reflection-dot",()=>new Mr(1,12)),ot,[it*.36*P,-st*.37*P*vt,.026],[.01*P,.01*P,1],!1,"catchlight-dot");ft.castShadow=!1,ft.receiveShadow=!1}else if(["sparkle","glossy","oval"].includes(t.eyes)){let ct=U(Rt,[-it*.29*P,st*.35*P*vt,.027],[.018*P,.02*P,.006],ot,!1,"catchlight");t.eyes==="sparkle"&&ct.scale.multiplyScalar(.76),t.eyes==="glossy"&&U(Rt,[it*.35*P,-st*.34*P*vt,.025],[.008*P,.008*P,.004],ot,!1,"catchlight-small")}if(t.shape==="frog"&&Rt.children.some(ct=>ct.name==="frog-eye-white"))for(let ct of Rt.children)ct.name!=="frog-eye-white"&&(ct.position.z+=.02)}if(t.brows!=="none"){let F=ht+st*P*vt+.073,ot=(t.brows==="curious"||E==="skeptical")&&K>0?.047:0,ct=E==="angry"?-K*.048:E==="worried"||t.brows==="angled"?K*.045:t.brows==="straight"?0:t.brows==="curious"?K*.014:.006;H([[V-.09*P,F+ot-ct],[V,F+ot+(t.brows==="straight"?0:t.shape==="human"?.012:.025)],[V+.09*P,F+ot+ct]],.01*P,A(t.shape==="human"?gn(t.colors.hair,t.colors.eyes,.24):gn(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let k=m.mouthY,Y=.103*m.size;if(t.mouth==="smile"&&E!=="laughing"){let K=["sad","worried","angry"].includes(E),V=["skeptical","confident","proud"].includes(E),ht=Array.from({length:13},(dt,St)=>{let vt=St/12,$=(vt*2-1)*Y,yt=(K?-.031:.039)*(2*vt-1)**2;return[$,k+(K?.023:-.027)+yt+(V?vt*.024:0)]});H(ht,t.shape==="human"?.0085:.01,t.shape==="human"?A(gn(t.colors.skin,"#684538",.7),"matteEye"):_,K?"frown":"smile")}else if(t.mouth==="pout")H([[-Y*.68,k-.014],[0,k+.02],[Y*.68,k-.014]],.013,_,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"||t.mouth!=="none"&&E==="laughing"){let K=t.mouth==="laugh"||E==="laughing";U(r,[0,k,I(0,k)+.019],[Y*(K?1.16:.42),Y*(K?.93:.51),.024],_,!1,"mouth"),K&&U(r,[0,k-.043,I(0,k)+.041],[Y*.62,.032,.012],A("#D98C91","skin"),!1,"tongue")}if(t.expressionAccents&&["tearful","panicked"].includes(E)){let K=A("#8BD6F4","eye"),V=E==="tearful"?[-1,1]:[1];for(let ht of V){let dt=ht*(O+.085),St=m.eyeY-(E==="tearful"?.19:-.14),vt=U(r,[dt,St,I(dt,St)+.025],[.025,.056,.018],K,!1,"expression-drop");vt.rotation.z=-ht*.15}}if(t.shape==="human"&&U(r,[0,-.095,I(0,-.095)+.006],[.033,.044,.025],A(gn(t.colors.skin,"#C29076",.05),"skin"),!1,"nose"),t.shape!=="human"&&["shy","happy","excited","laughing"].includes(E))for(let K of[-1,1]){let V=K*O*1.32,ht=m.eyeY-.17,dt=A(gn(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");U(r,[V,ht,I(V,ht)+.008],[.085*m.size,.033*m.size,.009],dt,!1,"cheek")}}}var ve=i=>new z(...i),Ys=(i,t,e)=>Math.max(t,Math.min(e,i)),we=(i,t={})=>new Pn({color:i,roughness:.78,...t});function Qe(i,t,e,n=[0,0,0]){let s=new pe(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Ri(i,t,e=[0,0,0]){let n=new Pe;return n.name=t,n.position.fromArray(e),i.add(n),n}function Le(i,t,e,n=[0,0,0]){let s=Qe(i,new ri(1,24,16),e,n);return s.scale.fromArray(t),s}function Uu(i,t,e){let n=new In,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function xn(i,t,e,n=[0,0,0],s=.025){let[r,a,o]=t,h=Math.min(s*.35,o*.25,a*.15),c=new Gi(Uu(r-h*2,a-h*2,s),{depth:Math.max(.001,o-h*2),bevelEnabled:!0,bevelSize:h,bevelThickness:h,bevelSegments:3,curveSegments:8,steps:1});return c.translate(0,0,-(o-h*2)/2),Qe(i,c,e,n)}function Dn(i,t,e,n,s=!1){let r=new cn(t.map(ve),s,"centripetal");return Qe(i,new bi(r,Math.max(20,t.length*4),e,8,s),n)}function Du(i,t,e,n,s){let r=ve(t),a=ve(e),o=a.clone().sub(r),h=Qe(i,new Cn(n,n,o.length(),16),s);return h.position.copy(r.add(a).multiplyScalar(.5)),h.quaternion.setFromUnitVectors(new z(0,1,0),o.normalize()),h}function Ka(i,t,e,n,s,r){return Dn(i,Array.from({length:48},(a,o)=>{let h=o/48*Math.PI*2;return[Math.cos(h)*t,n,Math.sin(h)*e]}),s,r,!0)}function wc(i,t,e,n=[0,0,0],s=.025){let r=new In;for(let o=0;o<10;o++){let h=Math.PI/2+o*Math.PI/5,c=t*(o%2?.46:1);o?r.lineTo(Math.cos(h)*c,Math.sin(h)*c):r.moveTo(Math.cos(h)*c,Math.sin(h)*c)}r.closePath();let a=new Gi(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return a.translate(0,0,-s/2),Qe(i,a,e,n)}function Lu(i,t,e,n,s=[0,0,0]){let r=Ri(i,"flower",s);for(let a=0;a<5;a++){let o=a*Math.PI*.4,h=Le(r,[t*.47,t*.69,t*.23],e,[Math.sin(o)*t*.64,Math.cos(o)*t*.64,0]);h.rotation.z=-o}return Le(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function Hg(i){let t=i.root,e=[],n=[];t.updateMatrixWorld(!0);let s=(l,f)=>l?.traverse(p=>{if(!(!p.isMesh||!p.geometry||!p.visible)){for(let x=p;x&&x!==l;x=x.parent)if(x===i.face)return;f.push(p)}});s(i.head||t,e),s(i.torso,n);let r=e.filter(l=>!/ear|gill|muzzle|beak|facial-disc/.test(l.name)&&l.geometry.type!=="TubeGeometry"),a=t.matrixWorld.clone().invert(),o=new Kt,h=new oi,c=(i.height||3)+(i.width||3)+4;function u(l,f,p=e){h.set(ve(l).applyMatrix4(t.matrixWorld),ve(f).transformDirection(t.matrixWorld));let x=h.intersectObjects(p,!1)[0];if(!x)return null;let M=x.point.clone().applyMatrix4(a);o.getNormalMatrix(a.clone().multiply(x.object.matrixWorld));let d=x.face.normal.clone().applyMatrix3(o).normalize();return{point:M,normal:d}}return{cast:u,reach:c,top(l,f,p){return u([l,c,f],[0,-1,0])?.point.y??p},front(l,f,p,x=!1){return u([l,f,c],[0,0,-1],x?[...e,...n]:e)?.point.z??p},side(l,f,p){return u([l*c,f,p],[-l,0,0])},ornament(l,f){return u(l,f,e.filter(p=>p.name!=="hair-strands"))},around(l,f,p=!1,x=!1){let M=ve(f).normalize(),d=ve(l).addScaledVector(M,c);return u(d.toArray(),M.negate().toArray(),p?[...e,...n]:x?r:e)}}}function Vg(i){return new cn(i.map(([t,e])=>new z(t,e,0)),!0,"centripetal").getPoints(64).slice(0,-1)}function Gg(i){let t=[...i].sort((a,o)=>a[0]-o[0]),e=[];for(let a of t){if(e.length&&Math.abs(a[0]-e.at(-1)[0])<1e-5){if(a[1]<=e.at(-1)[1])continue;e.pop()}for(;e.length>=2;){let o=e.at(-2),h=e.at(-1);if((h[0]-o[0])*(a[1]-h[1])-(h[1]-o[1])*(a[0]-h[0])<-1e-5)break;e.pop()}e.push(a)}let n=e.length>=3?e.reverse():i,s=Math.abs(n[0][0]-n.at(-1)[0]),r=[];for(let a=0;a<n.length;a++){let o=n[a],h=n[a+1];if(r.push(o),!h)continue;let c=Math.abs(h[0]-o[0]);if(c>s*.16&&Math.abs(h[1]-o[1])<s*.025){let u=Math.min(s*.038,c*.1);for(let l=1;l<8;l++){let f=l/8;r.push([Re.lerp(o[0],h[0],f),Re.lerp(o[1],h[1],f)+Math.sin(f*Math.PI)*u,Re.lerp(o[2],h[2],f)])}}}return r}function Wg(i,{rx:t,rz:e,s:n,contact:s,center:r},a){let c=[];for(let A=0;A<16;A++){let T=A/16*Math.PI*2;c.push(s.top(r[0]+Math.cos(T)*t*.7,r[2]+Math.sin(T)*e*.7,r[1]-.16*n)-.018*n)}let u=c.reduce((A,T)=>A+T,0)/16,l=A=>{let T=(A/(Math.PI*2)*16+16)%16,S=Math.floor(T),C=T-S;return Re.lerp(c[S],c[(S+1)%16],C)},f=new cn([[0,-.08,.8],[.48,-.035,.95],[.7,0,1],[.88,.075,.75],[1,.18,.38],[.92,.33,.12],[.67,.46,0],[.3,.52,0],[0,.535,0]].map(ve),!1,"catmullrom",.3),p=[],x=[],M=[],d=32;for(let A=0;A<=d;A++){let T=f.getPoint(A/d),S=Math.max(0,T.x),C=T.y,_=Ys(T.z,0,1);for(let y=0;y<=48;y++){let D=y/48*Math.PI*2,U=Math.cos(D)*t*S-.06*n*(1-S),N=Math.sin(D)*e*S,G=l(D)-u,J=.17*Math.cos(D)*t;if(p.push(r[0]+U,u+C*n+.17*U+(G-J*.7)*_,r[2]+N),x.push(y/48,A/d),A<d&&y<48){let X=A*49+y,j=X+48+1;M.push(X,j,X+1,j,j+1,X+1)}}}let m=new ye;m.setAttribute("position",new Yt(p,3)),m.setAttribute("uv",new Yt(x,2)),m.setIndex(M),m.computeVertexNormals();let w=Qe(i,m,a);w.name="soft-beret-crown";let g=r[0]-.06*n,v=u+.535*n;Dn(i,[[g,v-.018*n,r[2]],[g+.014*n,v+.041*n,r[2]],[g+.036*n,v+.06*n,r[2]+.008*n]],.025*n,a),i.userData.contactFit={kind:"crown",samples:16,baseY:u,min:Math.min(...c),max:Math.max(...c)}}function Fu(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],a=t.shape==="human",o=e.userData.anatomy==="animal"||r.includes(t.shape),h=o&&["penguin","owl"].includes(t.shape),c=i.height||(a?2.8:o?2.5:2.1),u=i.width||2.3,l=Ys(Math.min(u/(a?1.5:o?1.8:2.3),c/(a?2.8:o?2.5:2.1)),.7,1.3),f=n.crown||n.headTop||[0,c,0],p=n.face||[0,c*.58,u*.3],x=n.neck||[0,c*(a?.49:.34),p[2]*.82],M=t.accessories||{},d=t.action||"idle",m=[],w=[],g=we(s.accessory||"#33465a"),v=we(s.secondary||"#f6ead9"),A=we("#23272d",{roughness:.58}),T=we("#e7bc72",{metalness:.24,roughness:.4}),C=(a?e.getObjectByName("hand")?.material:h?e.getObjectByName("wing-tip")?.material:null)||we(a?s.skin||"#e9bea2":s.body||"#319ceb"),_=a||h?e.getObjectByName("upper-arm")?.material||we(s.clothing||s.body||"#338c81"):C,y=we(new Xt(s.accessory||"#33465a").lerp(new Xt("#ffffff"),.22)),D=(W,pt)=>{let _t=Ri(e,W,pt);return m.push(_t),_t},U=(W,pt)=>ve(pt).applyMatrix4(W.matrix).toArray(),N=null,G=d==="sleep"?"none":M.prop||"none",J={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book"};J[d]&&(G=J[d]);let X=p[2]+.16*l,j=Hg(i),tt=[-1,1].map(W=>j.side(W,p[1],f[2])),mt=Math.max(.35*l,...tt.map(W=>W?Math.abs(W.point.x-f[0]):u*.36)),Tt=Ys(mt*.77,.43*l,.85*l),xt=d==="listen"?"headphones":M.head||"none";if(xt!=="none"){let W=D("head-"+xt),pt=we(s.headAccessory||s.accessory||"#292A2D"),_t=pt.clone();if(_t.roughness=1,xt==="beret")Wg(W,{rx:Tt,rz:Tt*.78,s:l,contact:j,center:[f[0]-.045*l,f[1],f[2]+.02*l]},_t);else if(xt==="headphones"){let nt=Math.min(f[1]-.26*l,p[1]-.23*l),wt=f[2]+.015*l,Dt=[f[0],nt,wt],I=[];for(let H=0;H<=24;H++){let q=.055+H/24*(Math.PI-.11),E=[Math.cos(q),Math.sin(q),0],P=j.around(Dt,E,!1,!0),B=P?P.point.addScaledVector(ve(E),.055*l):ve(Dt).add(ve([Math.cos(q)*mt,Math.sin(q)*(f[1]-nt),0]));I.push(B.toArray())}Dn(W,Gg(I),.035*l,pt);for(let H of[-1,1]){let q=j.side(H,nt,wt),E=q?.normal||ve([H,0,0]);E.x*H<.2&&E.set(H,.15,0).normalize();let P=q?.point||ve([f[0]+H*mt,nt,wt]),B=Ri(W,"earcup-"+H,P.clone().addScaledVector(E,.04*l).toArray());B.quaternion.setFromUnitVectors(ve([1,0,0]),E),Le(B,[.14*l,.27*l,.198*l],A,[-.006*l,0,0]),Le(B,[.135*l,.286*l,.22*l],pt,[.09*l,0,0]),B.userData.contactFit={kind:"side",point:P.toArray(),normal:E.toArray()}}}else{let nt=Tt*(xt==="wizard"?.75:.82),wt=nt*.83,Dt=Array.from({length:12},(H,q)=>{let E=q/12*Math.PI*2;return j.top(f[0]+Math.cos(E)*nt*.77,f[2]+Math.sin(E)*wt*.77,f[1]-.1*l)}),I=Dt.reduce((H,q)=>H+q,0)/Dt.length-.035*l;if(W.position.set(f[0],I,f[2]),xt==="tuft"){W.position.set(f[0],f[1]-.025*l,f[2]);for(let[H,q]of[-.16,0,.16].entries()){let E=Le(W,[.095*l,(H===1?.22:.17)*l,.105*l],_t,[q*l,.08*l,0]);E.rotation.z=(1-H)*.4,E.name="tuft-lobe",E.userData.surfaceMaterial="plush",i.surfaces?.push(E)}}else if(xt==="pom"){W.position.set(f[0],f[1]+.23*l,f[2]);let H=Le(W,[.255*l,.26*l,.255*l],_t);H.name="hat-pom",H.userData.surfaceMaterial="micro",i.surfaces?.push(H)}else if(["beanie","cap"].includes(xt)){let H=xt==="cap";if(Qe(W,new ri(nt,36,24,0,Math.PI*2,0,Math.PI/2),_t).scale.set(1,H?.87:1.07,.83),Ka(W,nt*.97,wt*.97,.01*l,(H?.024:.04)*l,_t),H){let E=Le(W,[nt*.81,.034*l,nt*.56],g,[0,-.008*l,wt*.81]);E.rotation.x=-.1,Le(W,[.035*l,.017*l,.035*l],y,[0,nt*.875,0])}else for(let E=0;E<16;E++){let P=E*Math.PI*2/16,B=[];for(let O=0;O<=12;O++){let Z=.1+O/12*1.43;B.push([Math.sin(Z)*Math.cos(P)*(nt+.002),Math.cos(Z)*nt*1.07,Math.sin(Z)*Math.sin(P)*(wt+.002)])}Dn(W,B,.0025*l,y)}}else if(xt==="crown"){let H=nt*.85,q=wt*.85,E=80,P=.022*l,B=[],O=[],Z=[];for(let st=0;st<=E;st++){let R=st/E*Math.PI*2,b=Math.cos(R),k=Math.sin(R),Y=-.025*l,K=Y+(.115+.145*((Math.cos((R-Math.PI/2)*5)+1)*.5)**2)*l;if(B.push(b*H,Y,k*q,b*H,K,k*q,b*(H-P),K,k*(q-P),b*(H-P),Y,k*(q-P)),Z.push([b*H,K,k*q]),st<E)for(let V=0;V<4;V++){let ht=st*4+V,dt=st*4+(V+1)%4;O.push(ht,ht+4,dt,dt,ht+4,dt+4)}}let it=new ye;it.setAttribute("position",new Yt(B,3)),it.setIndex(O),it.computeVertexNormals(),Qe(W,it,g),Dn(W,Z.slice(0,-1),.013*l,g,!0);for(let st=0;st<5;st++){let R=Z[(E/4+st*E/5)%E];Le(W,[.025*l,.027*l,.025*l],g,R)}}else if(xt==="bowler"||xt==="topHat"){let H=xt==="topHat",q=nt*(H?1.15:.91),E=H?[[0,-.025],[.69,-.025],[.73,.08],[.69,.88],[.67,1],[0,1]]:[[0,-.025],[.78,-.025],[.87,.11],[.86,.46],[.71,.79],[.4,.98],[0,1.04]],P=new cn(E.map(([st,R])=>ve([st*nt,R*q,0])),!1,"catmullrom",.2),B=new Is(P.getPoints(32).map(st=>new It(Math.max(0,st.x),st.y)),48),O=Qe(W,B,_t);O.scale.z=.83;let Z=Le(W,[nt*1.08,.045*l,wt*1.06],_t,[0,.005*l,0]),it=we(new Xt(s.accessory||"#33465a").lerp(new Xt("#77828f"),.12),{roughness:.76});Ka(W,nt*(H?.705:.862),wt*(H?.705:.862),.11*l,.022*l,it)}else if(xt==="flower"){let H=null;for(let E of[.67,.52,.36,.18,0]){let P=f[0]-mt*E,B=j.ornament([P,j.reach,f[2]],[0,-1,0]);if(B){for(let O of[.14,.2,.28,.36]){let Z=j.ornament([P,B.point.y-O*l,j.reach],[0,0,-1]);if(Z&&(H=Z,Z.normal.z>=.58))break}if(H)break}}H||=j.ornament([p[0],p[1],j.reach],[0,0,-1]),H&&(W.position.copy(H.point).addScaledVector(H.normal,.01*l),W.quaternion.setFromUnitVectors(ve([0,0,1]),H.normal),W.rotateZ(-.2),W.userData.contactFit={kind:"ornament",point:H.point.toArray(),normal:H.normal.toArray(),offset:.01*l}),Lu(W,.15*l,v,T),Le(W,[.042*l,.055*l,.023*l],we("#678b62"),[0,0,-.02*l]);let q=Le(W,[.044*l,.115*l,.021*l],we("#678b62"),[.105*l,-.06*l,-.025*l]);q.rotation.z=-.8}else if(xt==="wizard"){Le(W,[nt*1.14,.042*l,wt*1.14],g);let H=[[.92,0],[.88,.1],[.69,.27],[.47,.43],[.22,.58],[.06,.65],[0,.66]],q=new Is(H.map(P=>new It(P[0]*nt,P[1]*l)),40),E=q.attributes.position;for(let P=0;P<E.count;P++)E.setX(P,E.getX(P)+.15*l*(E.getY(P)/(.66*l))**2);q.computeVertexNormals(),Qe(W,q,g),Ka(W,nt*.88,nt*.88,.1*l,.022*l,v),wc(W,.062*l,T,[.03*l,.28*l,nt*.69],.012*l)}}}if(M.face&&M.face!=="none"){e.updateMatrixWorld(!0);let W=e.matrixWorld.clone().invert(),pt=e.getWorldQuaternion(new Je).invert(),_t=i.eyeGroups?.length>=2?i.eyeGroups.map(E=>{let P=E.getWorldPosition(new z).applyMatrix4(W),B=pt.clone().multiply(E.getWorldQuaternion(new Je)),O=new _e().compose(P,B,ve([1,1,1])).invert(),Z=new We;return E.traverse(it=>{!it.isMesh||!it.geometry||!it.visible||(it.geometry.computeBoundingBox(),Z.union(it.geometry.boundingBox.clone().applyMatrix4(O.clone().multiply(W).multiply(it.matrixWorld))))}),{center:P,quaternion:B,bounds:Z}}):[-1,1].map(E=>({center:ve([E*u*.13,p[1],p[2]]),quaternion:new Je,bounds:new We(ve([-.07*l,-.12*l,0]),ve([.07*l,.12*l,.04*l]))}));_t.sort((E,P)=>E.center.x-P.center.x);let nt=D("face-"+M.face),wt=["sunglasses","catEye","roundSun"].includes(M.face),Dt=M.face==="monocle",I=Math.abs(_t[1].center.x-_t[0].center.x),H=we(wt?"#15202a":"#d6eef5",{transparent:!wt,opacity:wt?1:.065,roughness:wt?.33:.18,metalness:wt?.06:0,depthWrite:wt,side:hn}),q=[];if(_t.forEach(({center:E,quaternion:P,bounds:B},O)=>{if(Dt&&O===0)return;let Z=O?1:-1,it=B.max.x-B.min.x,st=B.max.y-B.min.y,R=Math.max(t.shape==="triangle"&&M.face==="round"?.25*l:t.shape==="diamond"&&M.face==="sunglasses"?.34*l:0,Ys(I*(M.face==="roundSun"?.43:.41),.11*l,.27*l),it*.5+.024*l),b=Math.max(t.shape==="triangle"&&M.face==="round"?.31*l:0,R*(M.face==="square"||M.face==="sunglasses"?.81:1.04),st*.5+.021*l),k=Math.max(.025*l,B.max.z+.022*l),Y=Ri(nt,"lens-"+O,E.clone().addScaledVector(ve([0,0,1]).applyQuaternion(P),k).toArray());Y.quaternion.copy(P);let K;M.face==="catEye"?K=Vg([[-.96,.48],[-.86,-.31],[-.35,-.64],[.34,-.62],[.83,-.29],[1.13,.77],[.57,.6],[0,.54]].map(([ht,dt])=>[ht*R*Z,dt*b])):M.face==="square"||M.face==="sunglasses"?K=Uu(R*2.08,b*1.94,R*.28).getPoints(12).slice(0,-1).map(ht=>ve([ht.x,ht.y,0])):K=Array.from({length:64},(ht,dt)=>{let St=dt/64*Math.PI*2;return ve([Math.cos(St)*R,Math.sin(St)*b,0])}),Dn(Y,K.map(ht=>ht.toArray()),(wt?.019:.013)*l,g,!0);let V=new In(K.map(ht=>new It(ht.x,ht.y)));if(wt){let ht=Qe(Y,new Wi(V,48),H,[0,0,.001*l]);ht.name="eyewear-lens"}if(Y.updateMatrix(),Y.userData.contactFit={kind:"eye",offset:k,eyeDepth:B.max.z,normal:ve([0,0,1]).applyQuaternion(P).toArray()},q.push({i:O,sign:Z,g:Y,rx:R,ry:b,center:E,outer:U(Y,[Z*R,.03*b,0]),inner:U(Y,[-Z*R,.03*b,0])}),!Dt){let ht=U(Y,[Z*R,.03*b,0]),dt=f[2]+.015*l,St=j.side(Z,E.y-.022*l,dt),vt=St?St.point.addScaledVector(St.normal,-.025*l).toArray():[f[0]+Z*mt,E.y-.022*l,dt];Dn(nt,[ht,[ht[0]+Z*.025*l,ht[1],ht[2]-.042*l],[Re.lerp(ht[0],vt[0],.65),Re.lerp(ht[1],vt[1],.65),Re.lerp(ht[2],vt[2],.72)],vt],.012*l,g)}}),Dt){let E=q[0],P=U(E.g,[E.rx*.72,-E.ry*.72,0]),B=P[0]+.09*l,O=P[1]-.15*l;Dn(nt,[P,[P[0]+.025*l,P[1]-.095*l,P[2]-.015*l],[B,O,j.front(B,O,P[2]-.065*l)+.023*l],[B+.048*l,O+.012*l,j.front(B+.048*l,O+.012*l,P[2]-.09*l)+.023*l]],.011*l,g)}else{let E=q[0].inner,P=q[1].inner,B=(E[0]+P[0])/2,O=(E[1]+P[1])/2+.033*l,Z=Math.max((E[2]+P[2])/2,j.front(B,O,p[2])+.032*l);Dn(nt,[E,[B,O,Z],P],.013*l,g)}}if(M.neck&&M.neck!=="none"){let W=x[1],pt=D("neck-"+M.neck,[0,W,0]),_t=a?.32*l:o?.46*l:u*.46,nt=j.front(0,W,n.neckFront?.[2]||p[2]*.86,!0)+.018*l;if(M.neck==="bow"){for(let wt of[-1,1]){let Dt=new In;Dt.moveTo(0,0),Dt.bezierCurveTo(.056*l,.025*l,.17*l,.12*l,.225*l,.11*l),Dt.quadraticCurveTo(.25*l,.1*l,.25*l,0),Dt.quadraticCurveTo(.25*l,-.1*l,.215*l,-.11*l),Dt.bezierCurveTo(.15*l,-.1*l,.052*l,-.03*l,0,0);let I=new Gi(Dt,{depth:.032*l,bevelEnabled:!0,bevelSize:.014*l,bevelThickness:.022*l,bevelSegments:4,curveSegments:16}),H=Qe(pt,I,g,[wt*.005*l,0,nt+.019*l]);H.scale.set(wt*(t.family==="dots"?1.85:1),t.family==="dots"?1.65:1,1),H.rotation.z=wt*-.04}Le(pt,[(t.family==="dots"?.075:.052)*l,(t.family==="dots"?.09:.065)*l,.059*l],g,[0,0,nt+.04*l])}else{let wt=Array.from({length:24},(Dt,I)=>{let H=I/24*Math.PI*2,q=[Math.cos(H),0,Math.sin(H)],E=j.around([0,W,0],q,!0);return E?E.point.addScaledVector(ve(q),.008*l).sub(ve([0,W,0])).toArray():[Math.cos(H)*_t,0,Math.sin(H)*nt]});if(Dn(pt,wt,(M.neck==="scarf"?.07:.034)*l,g,!0),M.neck==="scarf")for(let[Dt,I,H]of[[-.12,.36,-.13],[.04,.27,.13]]){let q=Ri(pt,"scarf-end",[Dt*l,-.075*l,nt+.02*l]);q.rotation.z=H,xn(q,[.135*l,I*l,.065*l],g,[0,-I*l/2,0],.04*l);for(let E=0;E<5;E++)xn(q,[.105*l,.006*l,.005*l],y,[0,(-I+.03+E*.027)*l,.035*l],.002*l);w.push(E=>{q.rotation.z=H+Math.sin(E*1.3+Dt)*.016})}else Le(pt,[.068*l,.081*l,.025*l],T,[0,-.085*l,nt+.043*l])}}if(G==="macbook"){let W=Math.min(c*.28,p[1]-.6*l),pt=D("prop-macbook",[0,Math.max(.28*l,W),X]);pt.rotation.y=-.64;let _t=1.1*l,nt=.69*l,wt=Ys(p[1]-pt.position.y-.22*l,.29*l,.38*l),Dt=we("#bdc3ca",{metalness:.7,roughness:.31}),I=we("#4a5058",{roughness:.62});xn(pt,[_t,.043*l,nt],Dt,[0,0,0],.045*l);for(let P=0;P<3;P++)for(let B=0;B<10;B++)xn(pt,[.078*l,.009*l,.055*l],I,[(B-4.5)*.098*l,.026*l,(P*.079-.06)*l],.014*l);xn(pt,[.32*l,.004*l,.135*l],y,[0,.024*l,-.225*l],.018*l);let H=Ri(pt,"laptop-lid",[0,.025*l,nt*.45]);H.rotation.x=.54,xn(H,[_t,wt,.055*l],Dt,[0,wt/2,0],.043*l);let q=we("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});xn(H,[_t-.07*l,wt-.055*l,.005*l],q,[0,wt/2,-.024*l],.027*l);let E=we("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let P=0;P<3;P++)xn(H,[(P?.38:.63)*l,.012*l,.004*l],E,[-.11*l,wt*.67-P*.05*l,-.028*l],.003*l);Le(H,[.009*l,.009*l,.004*l],A,[0,wt-.018*l,-.025*l]),pt.updateMatrix(),N=[[-.28*l,.06*l,-.055*l],[.28*l,.06*l,-.055*l]].map(P=>U(pt,P))}else if(G==="flowers"){let W=Math.min(c*.33,p[1]-.6*l),pt=D("prop-flowers",[0,W,X+.03*l]);pt.rotation.z=-.08;let _t=we("#6c8d64"),nt=we("#e1c7ac",{side:hn});Qe(pt,new Cn(.25*l,.065*l,.36*l,32,1,!0),nt,[0,.02*l,0]);let wt=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],Dt=[we("#f0bbbd"),v,we("#dda375"),we("#d4b5ce"),v];wt.forEach((H,q)=>{Du(pt,[0,-.25*l,0],H.map(P=>P*l),.014*l,_t);let E=Lu(pt,.12*l,Dt[q],T,H.map(P=>P*l));E.rotation.x=-.18});let I=Le(pt,[.065*l,.16*l,.027*l],_t,[.22*l,.2*l,-.02*l]);I.rotation.z=-.7,Ka(pt,.077*l,.075*l,-.12*l,.018*l,g),pt.updateMatrix(),N=[[-.105*l,-.11*l,.025*l],[.105*l,-.07*l,.025*l]].map(H=>U(pt,H))}else if(G==="wand"){let W=D("prop-wand",[u*.48,c*.43,X]);W.rotation.z=-.12,Du(W,[0,-.2*l,0],[0,.48*l,0],.029*l,T),wc(W,.16*l,v,[0,.56*l,0],.04*l);let pt=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((_t,nt)=>wc(W,(.03+nt*.008)*l,T,_t.map(wt=>wt*l),.009*l));w.push(_t=>pt.forEach((nt,wt)=>{nt.rotation.z=Math.sin(_t*.8+wt)*.2,nt.scale.setScalar(.84+Math.sin(_t*1.4+wt)*.16)})),W.updateMatrix(),N=[null,U(W,[0,0,0])]}else if(G==="tea"){let W=t.mouth!=="none"&&d==="drink",pt=Math.min(c*(W?.49:.34),p[1]-(W?.58:.53)*l),_t=D("prop-tea",[u*.13,pt,X+.05*l]),nt=we("#cba981");Qe(_t,new Cn(.165*l,.128*l,.35*l,36),nt),Qe(_t,new Cn(.175*l,.175*l,.032*l,36),v,[0,.185*l,0]);let wt=n.mouth||[p[0],p[1]-.25*l,p[2]],Dt=W?[wt[0]-_t.position.x,wt[1]-pt,wt[2]+.025*l-_t.position.z]:[.04*l,.48*l,-.05*l];Dn(_t,[[.04*l,.18*l,-.02*l],[.04*l,.18*l+(Dt[1]-.18*l)*.64,-.025*l],Dt],.019*l,g);for(let I=0;I<6;I++){let H=I*1.83;Le(_t,[.019*l,.019*l,.013*l],A,[Math.sin(H)*.08*l,(-.125+I%2*.03)*l,.121*l])}_t.updateMatrix(),N=[[-.095*l,-.17*l,0],[.16*l,0,0]].map(I=>U(_t,I))}else if(G==="camera"){let W=D("prop-camera",[0,Math.min(p[1]-.28*l,c*.61),X+.04*l]);xn(W,[.65*l,.36*l,.25*l],g,[0,0,0],.06*l),xn(W,[.15*l,.09*l,.18*l],A,[0,.205*l,-.015*l],.025*l);let pt=Qe(W,new Cn(.148*l,.153*l,.19*l,40),A,[.03*l,0,.19*l]);pt.rotation.x=Math.PI/2;let _t=Qe(W,new Xi(.124*l,.014*l,8,40),T,[.03*l,0,.29*l]),nt=we("#203b4c",{metalness:.35,roughness:.15});Le(W,[.12*l,.12*l,.018*l],nt,[.03*l,0,.287*l]),xn(W,[.115*l,.061*l,.015*l],v,[-.2*l,.105*l,.135*l],.014*l),Le(W,[.045*l,.02*l,.04*l],A,[.22*l,.194*l,.015*l]),W.updateMatrix(),N=[[-.31*l,-.045*l,.015*l],[.31*l,.015*l,.015*l]].map(wt=>U(W,wt))}else if(G==="book"){let W=D("prop-book",[0,Math.min(c*.34,p[1]-.47*l),X+.07*l]),pt=we("#f5eddd"),_t=we("#bcc0b1");W.rotation.x=.12;for(let nt of[-1,1]){let wt=Ri(W,"book-half");wt.rotation.z=nt*.16,xn(wt,[.48*l,.029*l,.59*l],g,[nt*.238*l,0,0],.018*l);for(let Dt=0;Dt<3;Dt++)xn(wt,[.45*l,.013*l,.55*l],pt,[nt*.227*l,(.022+Dt*.014)*l,0],.013*l);for(let Dt=0;Dt<5;Dt++)xn(wt,[(.25-Dt%2*.04)*l,.003*l,.007*l],_t,[nt*.245*l,.059*l,(Dt-2)*.068*l],.002*l)}W.updateMatrix(),N=[[-.39*l,.03*l,.035*l],[.39*l,.03*l,.035*l]].map(nt=>U(W,nt))}let Lt=["wave","thinking","dance","celebrate","love"],Ut=a||o||G!=="none"||Lt.includes(d)||t.pose==="chin"||["hands","both"].includes(t.limbs),Bt=(a||o)&&G==="none"&&!Lt.includes(d)&&t.pose!=="chin",kt=Bt?[...i.arms||[]]:[],ut=[];if(Bt||(i.arms||[]).forEach(W=>{W.visible=!1}),Ut&&!Bt){let W=a?c*.22:o&&!h?.13:o?c*.17:c*.32,pt=[n.shoulderL||[-u*.4,c*.46,0],n.shoulderR||[u*.4,c*.46,0]],_t=pt.map((nt,wt)=>[o&&!h?nt[0]*.84:(wt?1:-1)*u*(o?.3:.39),W,o&&!h?Math.max(.48,p[2]*.78):p[2]*.73]);if(N&&N.forEach((nt,wt)=>{nt&&(_t[wt]=nt)}),!N){if(d==="wave"&&(_t[1]=[u*.57,p[1]+.27*l,p[2]*.67]),(d==="thinking"||t.pose==="chin")&&(_t[1]=[u*.2,p[1]-.25*l,p[2]+.07*l]),d==="dance"&&(_t[0]=[-u*.58,c*.44,p[2]*.6],_t[1]=[u*.56,c*.64,p[2]*.67]),d==="celebrate")for(let nt=0;nt<2;nt++)_t[nt]=[(nt?1:-1)*u*.53,p[1]+.31*l,p[2]*.7];if(d==="love")for(let nt=0;nt<2;nt++)_t[nt]=[(nt?1:-1)*.12*l,p[1]-.39*l,X]}for(let nt=0;nt<2;nt++){let wt=nt?1:-1,Dt=ve(_t[nt]);if(!a&&!o){let R=wt*(N?Math.min(u*.32,Math.abs(Dt.x)+.15*l):u*.4),b=N?Ys(Dt.y+.12*l,c*.23,p[1]-.2*l):c*.43;pt[nt]=[R,b,j.front(R,b,p[2]*.6)-.05*l]}let I=ve(pt[nt]),H=Dt.clone().sub(I),q=D("posed-arm-"+nt,pt[nt]),E=(a?.078:o?.115:.102)*l,P=H.clone().multiplyScalar(.48);P.x+=wt*(o&&!h&&!N?.035:.11)*l,P.y-=.11*l,P.z+=.05*l;let B=H.clone().multiplyScalar(.85);B.z+=.013*l;let O=Dn(q,[[0,0,0],P.toArray(),B.toArray(),H.toArray()],E,_);{let R=O.geometry,b=R.attributes.position,{path:k,tubularSegments:Y,radialSegments:K}=R.parameters;for(let V=0;V<=Y;V++){let ht=V/Y,dt=k.getPointAt(ht),St=1.12-.35*ht+.035*Math.sin(ht*Math.PI);for(let vt=0;vt<=K;vt++){let $=V*(K+1)+vt;b.setXYZ($,dt.x+(b.getX($)-dt.x)*St,dt.y+(b.getY($)-dt.y)*St,dt.z+(b.getZ($)-dt.z)*St)}}R.computeVertexNormals()}if(h){let R=O.geometry,b=R.attributes.position,{path:k,tubularSegments:Y,radialSegments:K}=R.parameters;for(let V=0;V<=Y;V++){let ht=V/Y,dt=k.getPointAt(ht),St=.85+Math.sin(ht*Math.PI)*.64;for(let vt=0;vt<=K;vt++){let $=V*(K+1)+vt;b.setXYZ($,dt.x+(b.getX($)-dt.x)*St,dt.y+(b.getY($)-dt.y)*St,dt.z+(b.getZ($)-dt.z)*.4)}}R.computeVertexNormals()}O.userData.region=a?"clothing":"body",O.userData.surfaceMaterial=a?_.name||"knit":t.material||"plush",O.userData.furLength=t.material==="micro"?.011:.024;let Z=Ri(q,(h?"wing-tip-":"hand-")+nt,H.toArray()),it=(a?.102:o?.128:.115)*l,st=Le(Z,[it,it*(h?1.1:a?1.05:.83),it*(h?.4:.82)],C);if(st.userData.region=a?"skin":"body",st.userData.surfaceMaterial=a?C.name||"skin":t.material||"plush",st.userData.furLength=t.material==="micro"?.011:.024,a){Z.rotation.x=G==="macbook"?Math.PI*.4:-.22;for(let b=0;b<4;b++)Le(Z,[.023*l,(.065-Math.abs(b-1.5)*.008)*l,.025*l],C,[(b-1.5)*.043*l,.067*l,.018*l]);let R=Le(Z,[.055*l,.059*l,.035*l],C,[-wt*.09*l,.006*l,.035*l]);R.rotation.z=wt*.42}kt.push(q),ut.push(Z),Array.isArray(i.surfaces)&&i.surfaces.push(O,st),!N&&(d==="wave"&&nt===1||d==="celebrate")&&w.push(R=>{q.rotation.z=Math.sin(R*3.2+nt*.6)*.075}),!N&&d==="dance"&&w.push(R=>{q.rotation.z=Math.sin(R*3+nt*1.1)*.065}),G==="macbook"&&w.push(R=>{Z.rotation.z=Math.sin(R*4.2+nt*1.7)*.022})}}i.arms=kt,e.updateMatrixWorld(!0);for(let W of m)i.head&&(W.name.startsWith("head-")||W.name.startsWith("face-"))?i.head.attach(W):a&&i.torso&&W.name.startsWith("neck-")&&i.torso.attach(W);return e.updateMatrixWorld(!0),{parts:m,constraintNotes:[],tick(W){for(let pt of w)pt(Number.isFinite(W)?W:0)}}}var Xg=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function Wr(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Qa(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function Ec(){let i=new Map,t=new Map,e=new Map,n,s,r,a,o,h=0,c=0,u=(S,C,_)=>Math.max(C,Math.min(_,S)),l=(S,C,_)=>{let y=1/Math.max(1e-12,Math.hypot(S,C,_));return[S*y,C*y,_*y]};function f(S,C,_,y,D){S*=y,C*=y,_*=y;let U=Math.min(S,C,_),N=U<.08?U-6.25*U*U:.04;S-=N,C-=N,_-=N;let G=Math.max(S,C,_);if(G>=.76){let J=1-.0576/(G-.52),X=J/G,j=1-1/(.15*(G-J)+1);S=S*X*(1-j)+J*j,C=C*X*(1-j)+J*j,_=_*X*(1-j)+J*j}D[0]=S,D[1]=C,D[2]=_}let p=new Uint8ClampedArray(4097),x=new Float32Array(256);for(let S=0;S<p.length;S++){let C=S/4096;p[S]=Math.round((C<=.0031308?12.92*C:1.055*Math.pow(C,1/2.4)-.055)*255)}for(let S=0;S<256;S++){let C=S/255;x[S]=C<=.04045?C/12.92:Math.pow((C+.055)/1.055,2.4)}let M=(S,C)=>{let _=new Float32Array(16);for(let y=0;y<4;y++)for(let D=0;D<4;D++)_[y*4+D]=S[D]*C[y*4]+S[4+D]*C[y*4+1]+S[8+D]*C[y*4+2]+S[12+D]*C[y*4+3];return _};function d(S){let C=S[0],_=S[4],y=S[8],D=S[1],U=S[5],N=S[9],G=S[2],J=S[6],X=S[10],j=[U*X-N*J,N*G-D*X,D*J-U*G,y*J-_*X,C*X-y*G,_*G-C*J,_*N-y*U,y*D-C*N,C*U-_*D],tt=C*j[0]+_*j[1]+y*j[2],mt=1/(Math.abs(tt)<1e-12?1:tt);return j.map(Tt=>Tt*mt)}function m(S){if(!S.normals){let C=new Float32Array(S.positions.length),_=S.positions,y=S.indices,D=y?y.length:_.length/3;for(let U=0;U<D;U+=3){let N=(y?y[U]:U)*3,G=(y?y[U+1]:U+1)*3,J=(y?y[U+2]:U+2)*3,X=_[G]-_[N],j=_[G+1]-_[N+1],tt=_[G+2]-_[N+2],mt=_[J]-_[N],Tt=_[J+1]-_[N+1],xt=_[J+2]-_[N+2],Lt=j*xt-tt*Tt,Ut=tt*mt-X*xt,Bt=X*Tt-j*mt;for(let kt of[N,G,J])C[kt]+=Lt,C[kt+1]+=Ut,C[kt+2]+=Bt}for(let U=0;U<C.length;U+=3){let N=1/Math.max(1e-10,Math.hypot(C[U],C[U+1],C[U+2]));C[U]*=N,C[U+1]*=N,C[U+2]*=N}S.normals=C}i.set(S.id,S)}function w(S,C,_,y){if(!S){y[0]=y[1]=y[2]=y[3]=1;return}C=C*S.repeat[0]+S.offset[0],_=_*S.repeat[1]+S.offset[1],C=S.wrapS===1e3?C-Math.floor(C):u(C,0,.999999),_=S.wrapT===1e3?_-Math.floor(_):u(_,0,.999999),S.flipY&&(_=1-_);let D=u(Math.floor(C*S.width),0,S.width-1),U=u(Math.floor(_*S.height),0,S.height-1),N=(U*S.width+D)*S.channels,G=S.data,J=G[N]||0,X=S.channels>1?G[N+1]:J,j=S.channels>2?G[N+2]:J;y[0]=S.srgb?x[J]:J/255,y[1]=S.srgb?x[X]:X/255,y[2]=S.srgb?x[j]:j/255,y[3]=S.channels===4?G[N+3]/255:1}function g(S){if(S.heightMips)return;S.heightMips=[{data:S.data,width:S.width,height:S.height,channels:S.channels}];let C=S.heightMips[0];for(;C.width>1||C.height>1;){let _=Math.max(1,C.width>>1),y=Math.max(1,C.height>>1),D=new Float32Array(_*y);for(let U=0;U<y;U++)for(let N=0;N<_;N++){let G=0;for(let J=0;J<2;J++)for(let X=0;X<2;X++)G+=C.data[(Math.min(C.height-1,U*2+J)*C.width+Math.min(C.width-1,N*2+X))*C.channels];D[U*_+N]=G*.25}C={data:D,width:_,height:y,channels:1},S.heightMips.push(C)}}function v(S,C,_,y,D){let U=Math.min(S.heightMips.length-1,y),N=Math.floor(U),G=U-N;D[0]=D[1]=0;for(let J=0;J<2;J++){let X=J?G:1-G;if(X<1e-4)continue;let j=S.heightMips[N+J],tt=(C*S.repeat[0]+S.offset[0])*j.width,mt=(_*S.repeat[1]+S.offset[1])*j.height;S.flipY&&(mt=j.height-mt);let Tt=Math.floor(tt),xt=Math.floor(mt),Lt=tt-Tt,Ut=mt-xt,Bt=(_t,nt)=>(_t=S.wrapS===1e3?(_t%j.width+j.width)%j.width:u(_t,0,j.width-1),nt=S.wrapT===1e3?(nt%j.height+j.height)%j.height:u(nt,0,j.height-1),j.data[(nt*j.width+_t)*j.channels]/255),kt=Bt(Tt,xt),ut=Bt(Tt+1,xt),W=Bt(Tt,xt+1),pt=Bt(Tt+1,xt+1);D[0]+=((ut-kt)*(1-Ut)+(pt-W)*Ut)*j.width*S.repeat[0]*X,D[1]+=((W-kt)*(1-Lt)+(pt-ut)*Lt)*j.height*S.repeat[1]*(S.flipY?-1:1)*X}}function A(S,C){if(!S.shadow)return null;let _=S.shadow.size,y=new Float32Array(_*_);y.fill(1/0);for(let{mesh:D,g:U}of C){if(!D.castShadow||D.material.transparent||D.material.unlit)continue;let N=M(S.shadow.viewProjection,D.matrix),G=U.positions,J=U.indices,X=new Float32Array(G.length),j=G.length/3;for(let xt=0;xt<j;xt++){let Lt=xt*3,Ut=G[Lt],Bt=G[Lt+1],kt=G[Lt+2],ut=1/(N[3]*Ut+N[7]*Bt+N[11]*kt+N[15]);X[Lt]=((N[0]*Ut+N[4]*Bt+N[8]*kt+N[12])*ut*.5+.5)*_,X[Lt+1]=(.5-(N[1]*Ut+N[5]*Bt+N[9]*kt+N[13])*ut*.5)*_,X[Lt+2]=(N[2]*Ut+N[6]*Bt+N[10]*kt+N[14])*ut}let tt=J?J.length:j,mt=D.start||0,Tt=Math.min(tt,Number.isFinite(D.count)?mt+D.count:tt);for(let xt=mt;xt+2<Tt;xt+=3){let Lt=(J?J[xt]:xt)*3,Ut=(J?J[xt+1]:xt+1)*3,Bt=(J?J[xt+2]:xt+2)*3,kt=X[Lt],ut=X[Lt+1],W=X[Ut],pt=X[Ut+1],_t=X[Bt],nt=X[Bt+1],wt=X[Lt+2],Dt=X[Ut+2],I=X[Bt+2],H=(W-kt)*(nt-ut)-(pt-ut)*(_t-kt);if(Math.abs(H)<.04)continue;let q=Math.max(0,Math.floor(Math.min(kt,W,_t))),E=Math.min(_-1,Math.ceil(Math.max(kt,W,_t))),P=Math.max(0,Math.floor(Math.min(ut,pt,nt))),B=Math.min(_-1,Math.ceil(Math.max(ut,pt,nt)));if(q>E||P>B)continue;let O=1/H,Z=(pt-nt)*O,it=(nt-ut)*O;for(let st=P;st<=B;st++){let R=st+.5,b=((W-(q+.5))*(nt-R)-(pt-R)*(_t-(q+.5)))*O,k=((_t-(q+.5))*(ut-R)-(nt-R)*(kt-(q+.5)))*O,Y=st*_+q;for(let K=q;K<=E;K++,Y++,b+=Z,k+=it){let V=1-b-k;if(b<0||k<0||V<0)continue;let ht=b*wt+k*Dt+V*I;ht>=-1&&ht<=1&&ht<y[Y]&&(y[Y]=ht)}}}}return{size:_,buffer:y,matrix:S.shadow.screenMatrix,radius:S.shadow.radius||2.5}}function T(S){let C=performance.now();for(let I of S.geometries||[])m(I);for(let I of S.textures||[])t.set(I.id,I);let _=new Set(S.geometryIds),y=new Set(S.textureIds),D=new Set(S.meshes.map(I=>I.id));for(let I of i.keys())_.has(I)||i.delete(I);for(let I of t.keys())y.has(I)||t.delete(I);for(let I of e.keys())D.has(I)||e.delete(I);(h!==S.width||c!==S.height)&&(h=S.width,c=S.height,n=new Float32Array(h*c),a=new Float32Array(h*c*4),o=new Float32Array(h*c*4),r=new Int32Array(h*c)),s=new Uint8ClampedArray(h*c*4),n.fill(1/0),r.fill(-1);let U=S.background||[0,0,0,0];for(let I=0;I<a.length;I+=4)a[I]=U[0]*U[3],a[I+1]=U[1]*U[3],a[I+2]=U[2]*U[3],a[I+3]=U[3];let N=new Float32Array(4097),G=S.exposure||1;for(let I=0;I<N.length;I++){let H=I/512*G;N[I]=S.toneMapping?u(H*(2.51*H+.03)/(H*(2.43*H+.59)+.14),0,1):u(H,0,1)}let J=S.lights||[],X=S.ambient||[.18,.18,.18],j=S.sky||[.24,.24,.24],tt=S.ground||[.13,.14,.16],mt=l(S.cameraWorld[8],S.cameraWorld[9],S.cameraWorld[10]);for(let I of J)I.half=l(I.direction[0]+mt[0],I.direction[1]+mt[1],I.direction[2]+mt[2]);let Tt=[],xt=[],Lt=0,Ut=0;for(let I=0;I<S.meshes.length;I++){let H=S.meshes[I],q=i.get(H.geometry);if(!q)continue;let E=H.material,P=M(S.viewProjection,H.matrix),B=d(H.matrix),O=q.positions.length/3,Z=e.get(H.id);(!Z||Z.length!==O*9)&&(Z=new Float32Array(O*9),e.set(H.id,Z));let it=q.positions,st=q.normals,R=q.uv,b=0;for(let Y=0;Y<O;Y++){let K=Y*3,V=Y*9,ht=it[K],dt=it[K+1],St=it[K+2],vt=P[3]*ht+P[7]*dt+P[11]*St+P[15],$=vt>1e-6?1/vt:0,yt=B[0]*st[K]+B[1]*st[K+1]+B[2]*st[K+2],bt=B[3]*st[K]+B[4]*st[K+1]+B[5]*st[K+2],Et=B[6]*st[K]+B[7]*st[K+1]+B[8]*st[K+2],Mt=$/Math.max(1e-9,Math.hypot(yt,bt,Et));Z[V]=((P[0]*ht+P[4]*dt+P[8]*St+P[12])*$*.5+.5)*h,Z[V+1]=(.5-(P[1]*ht+P[5]*dt+P[9]*St+P[13])*$*.5)*c,Z[V+2]=(P[2]*ht+P[6]*dt+P[10]*St+P[14])*$,Z[V+3]=$,Z[V+4]=yt*Mt,Z[V+5]=bt*Mt,Z[V+6]=Et*Mt,Z[V+7]=R?R[Y*2]*$:0,Z[V+8]=R?R[Y*2+1]*$:0,b+=Z[V+2]}let k={mesh:H,g:q,tr:Z,index:I,z:b/O};(E.transparent||E.opacity<.999?xt:Tt).push(k)}Tt.sort((I,H)=>I.mesh.order-H.mesh.order||I.z-H.z),xt.sort((I,H)=>I.mesh.order-H.mesh.order||H.z-I.z);let Bt=new Float32Array(4),kt=new Float32Array(2),ut=new Float32Array(3),W=A(S,Tt);function pt(I,H,q,E=1,P=.28){if(!W)return 1;let B=W.matrix,O=(I+.5)/h*2-1,Z=1-(H+.5)/c*2,it=1/(B[3]*O+B[7]*Z+B[11]*q+B[15]),st=(B[0]*O+B[4]*Z+B[8]*q+B[12])*it,R=(B[1]*O+B[5]*Z+B[9]*q+B[13])*it,b=(B[2]*O+B[6]*Z+B[10]*q+B[14])*it,k=(st*.5+.5)*W.size,Y=(.5-R*.5)*W.size;if(k<1||Y<1||k>=W.size-2||Y>=W.size-2)return 1;let K=45e-5+75e-5*(1-u(E,0,1)),V=W.radius*.5,ht=b-K,dt=u(Math.floor(k-V*2),0,W.size-1),St=u(Math.floor(k-V),0,W.size-1),vt=u(Math.floor(k),0,W.size-1),$=u(Math.floor(k+V),0,W.size-1),yt=u(Math.floor(k+V*2),0,W.size-1),bt=0;for(let Et=-2;Et<=2;Et++){let Mt=u(Math.floor(Y+Et*V),0,W.size-1)*W.size,Rt=Et===0?6:Math.abs(Et)===1?4:1;bt+=Rt*((ht<=W.buffer[Mt+dt]?1:0)+(ht<=W.buffer[Mt+St]?4:0)+(ht<=W.buffer[Mt+vt]?6:0)+(ht<=W.buffer[Mt+$]?4:0)+(ht<=W.buffer[Mt+yt]?1:0))}return P+(1-P)*bt/256}function _t(I,H){let{mesh:q,g:E,tr:P}=I,B=q.material,O=E.indices,Z=O?O.length:E.positions.length/3,it=q.start||0,st=Math.min(Z,Number.isFinite(q.count)?it+q.count:Z),R=t.get(B.map),b=t.get(B.bump);b&&g(b);let k=B.roughness,Y=B.unlit?0:.007+(1-k)*(1-k)*.23,K=8+(1-k)*(1-k)*115,V=B.surfaceKind==="plush"||B.surfaceKind==="micro"?.14:.45,ht=B.surfaceKind==="plush"?.48:B.surfaceKind==="micro"?.38:.28,dt=B.color,St=B.emissive||[0,0,0];for(let vt=it;vt+2<st;vt+=3){let $=O?O[vt]:vt,yt=O?O[vt+1]:vt+1,bt=O?O[vt+2]:vt+2,Et=$*9,Mt=yt*9,Rt=bt*9;if(P[Et+3]===0||P[Mt+3]===0||P[Rt+3]===0)continue;let F=P[Et],ot=P[Et+1],ct=P[Mt],gt=P[Mt+1],ft=P[Rt],at=P[Rt+1],At=P[Et+2],zt=P[Mt+2],Qt=P[Rt+2];if(Math.min(At,zt,Qt)>1||Math.max(At,zt,Qt)<-1)continue;let Ot=(ct-F)*(at-ot)-(gt-ot)*(ft-F);if(Math.abs(Ot)<.016||B.side===0&&Ot>0||B.side===1&&Ot<0)continue;let Zt=Math.max(0,Math.floor(Math.min(F,ct,ft))),ne=Math.min(h-1,Math.ceil(Math.max(F,ct,ft))),ee=Math.max(0,Math.floor(Math.min(ot,gt,at))),fe=Math.min(c-1,Math.ceil(Math.max(ot,gt,at)));if(Zt>ne||ee>fe)continue;Lt++;let ue=0,Me=0,Be=0,Ce=0,ae=0,se=0,Ee=0;if(b&&E.uv){let Q=$*2,rt=yt*2,lt=bt*2,et=E.uv[rt]-E.uv[Q],Ct=E.uv[lt]-E.uv[Q],Pt=E.uv[rt+1]-E.uv[Q+1],Ht=E.uv[lt+1]-E.uv[Q+1],Ft=(et*(at-ot)-Ct*(gt-ot))/Ot,Gt=(Ct*(ct-F)-et*(ft-F))/Ot,Wt=(Pt*(at-ot)-Ht*(gt-ot))/Ot,Vt=(Ht*(ct-F)-Pt*(ft-F))/Ot,jt=b.width*b.repeat[0],ce=b.height*b.repeat[1];Ee=Math.log2(Math.max(1,Math.hypot(Ft*jt,Wt*ce),Math.hypot(Gt*jt,Vt*ce)));let Jt=E.positions,$t=E.uv,te=$t[$*2],qt=$t[$*2+1],me=$t[yt*2]-te,re=$t[yt*2+1]-qt,ze=$t[bt*2]-te,Ae=$t[bt*2+1]-qt,le=me*Ae-ze*re;if(Math.abs(le)>1e-9){let je=Jt[yt*3]-Jt[$*3],he=Jt[yt*3+1]-Jt[$*3+1],Ue=Jt[yt*3+2]-Jt[$*3+2],Fe=Jt[bt*3]-Jt[$*3],be=Jt[bt*3+1]-Jt[$*3+1],ke=Jt[bt*3+2]-Jt[$*3+2],un=(je*Ae-Fe*re)/le,tn=(he*Ae-be*re)/le,dn=(Ue*Ae-ke*re)/le,kn=(Fe*me-je*ze)/le,Zs=(be*me-he*ze)/le,ss=(ke*me-Ue*ze)/le,Ne=q.matrix;ue=Ne[0]*un+Ne[4]*tn+Ne[8]*dn,Me=Ne[1]*un+Ne[5]*tn+Ne[9]*dn,Be=Ne[2]*un+Ne[6]*tn+Ne[10]*dn,Ce=Ne[0]*kn+Ne[4]*Zs+Ne[8]*ss,ae=Ne[1]*kn+Ne[5]*Zs+Ne[9]*ss,se=Ne[2]*kn+Ne[6]*Zs+Ne[10]*ss;let Ii=1/Math.max(.01,ue*ue+Me*Me+Be*Be),Pi=1/Math.max(.01,Ce*Ce+ae*ae+se*se);ue*=Ii,Me*=Ii,Be*=Ii,Ce*=Pi,ae*=Pi,se*=Pi}}let Te=1/Ot,Ye=(gt-at)*Te,rn=(ft-ct)*Te,wn=(at-ot)*Te,En=(F-ft)*Te,Tn=((ct-(Zt+.5))*(at-(ee+.5))-(gt-(ee+.5))*(ft-(Zt+.5)))*Te,_n=((ft-(Zt+.5))*(ot-(ee+.5))-(at-(ee+.5))*(F-(Zt+.5)))*Te,L=Ot>0?-1:1;for(let Q=ee;Q<=fe;Q++){let rt=Tn+(Q-ee)*rn,lt=_n+(Q-ee)*En,et=Q*h+Zt;for(let Ct=Zt;Ct<=ne;Ct++,et++,rt+=Ye,lt+=wn){let Pt=1-rt-lt;if(rt<-1e-6||lt<-1e-6||Pt<-1e-6)continue;let Ht=rt*At+lt*zt+Pt*Qt;if(Ht<-1||Ht>1||B.depthTest&&Ht>=n[et]-2e-7)continue;let Ft=B.opacity,Gt=dt[0],Wt=dt[1],Vt=dt[2],jt=0,ce=0;if(R||b){let le=rt*P[Et+3]+lt*P[Mt+3]+Pt*P[Rt+3];jt=(rt*P[Et+7]+lt*P[Mt+7]+Pt*P[Rt+7])/le,ce=(rt*P[Et+8]+lt*P[Mt+8]+Pt*P[Rt+8])/le}if(R&&(w(R,jt,ce,Bt),Gt*=Bt[0],Wt*=Bt[1],Vt*=Bt[2],Ft*=Bt[3]),Ft<=Math.max(.002,B.alphaTest||0))continue;let Jt=rt*P[Et+4]+lt*P[Mt+4]+Pt*P[Rt+4],$t=rt*P[Et+5]+lt*P[Mt+5]+Pt*P[Rt+5],te=rt*P[Et+6]+lt*P[Mt+6]+Pt*P[Rt+6],qt=L/Math.max(1e-9,Math.sqrt(Jt*Jt+$t*$t+te*te));Jt*=qt,$t*=qt,te*=qt;let me=Jt,re=$t,ze=te;if(b){v(b,jt,ce,Ee,kt);let le=(ue*kt[0]+Ce*kt[1])*B.bumpScale,je=(Me*kt[0]+ae*kt[1])*B.bumpScale,he=(Be*kt[0]+se*kt[1])*B.bumpScale,Ue=le*Jt+je*$t+he*te;le-=Ue*Jt,je-=Ue*$t,he-=Ue*te;let Fe=Math.min(1,V/Math.max(.001,Math.hypot(le,je,he)));Jt-=le*Fe,$t-=je*Fe,te-=he*Fe;let be=1/Math.max(1e-9,Math.hypot(Jt,$t,te));Jt*=be,$t*=be,te*=be}if(!B.unlit){let le=$t*.5+.5,je=X[0]+tt[0]+(j[0]-tt[0])*le,he=X[1]+tt[1]+(j[1]-tt[1])*le,Ue=X[2]+tt[2]+(j[2]-tt[2])*le,Fe=0,be=0,ke=0;for(let tn=0;tn<J.length;tn++){let dn=J[tn],kn=dn.direction,Zs=Jt*kn[0]+$t*kn[1]+te*kn[2],ss=tn===0&&q.receiveShadow?pt(Ct,Q,Ht,me*kn[0]+re*kn[1]+ze*kn[2],ht):1,Ne=Math.max(0,(Zs+.055)/1.055)*dn.intensity*ss,Ii=dn.half,Pi=Y*Math.pow(Math.max(0,Jt*Ii[0]+$t*Ii[1]+te*Ii[2]),K)*dn.intensity*ss;je+=dn.color[0]*Ne,he+=dn.color[1]*Ne,Ue+=dn.color[2]*Ne,Fe+=dn.color[0]*Pi,be+=dn.color[1]*Pi,ke+=dn.color[2]*Pi}let un=B.metalness||0;Gt=Gt*je+Fe*(1-un+un*Gt),Wt=Wt*he+be*(1-un+un*Wt),Vt=Vt*Ue+ke*(1-un+un*Vt)}E.colors&&B.vertexColors&&(Gt*=rt*E.colors[$*3]+lt*E.colors[yt*3]+Pt*E.colors[bt*3],Wt*=rt*E.colors[$*3+1]+lt*E.colors[yt*3+1]+Pt*E.colors[bt*3+1],Vt*=rt*E.colors[$*3+2]+lt*E.colors[yt*3+2]+Pt*E.colors[bt*3+2]),Gt+=St[0],Wt+=St[1],Vt+=St[2],B.toneMapped&&!B.unlit&&(S.neutral?(f(Gt,Wt,Vt,G,ut),Gt=ut[0],Wt=ut[1],Vt=ut[2]):(Gt=N[u(Math.round(Gt*512),0,4096)],Wt=N[u(Math.round(Wt*512),0,4096)],Vt=N[u(Math.round(Vt*512),0,4096)]));let Ae=et*4;if(Ft>=.999)a[Ae]=Gt,a[Ae+1]=Wt,a[Ae+2]=Vt,a[Ae+3]=1;else{let le=1-Ft;a[Ae]=Gt*Ft+a[Ae]*le,a[Ae+1]=Wt*Ft+a[Ae+1]*le,a[Ae+2]=Vt*Ft+a[Ae+2]*le,a[Ae+3]=Ft+a[Ae+3]*le}!H&&B.depthWrite&&(n[et]=Ht,r[et]=I.index),Ut++}}}}for(let I of Tt)_t(I,!1);if(S.ambientOcclusion&&h>180){let I=Math.max(2,Math.round(h/140)),H=[[-I,0],[I,0],[0,-I],[0,I],[-I*2,-I],[I*2,-I]];for(let q=I*2;q<c-I*2;q++)for(let E=I*2;E<h-I*2;E++){let P=q*h+E,B=n[P];if(!Number.isFinite(B))continue;let O=0;for(let[Z,it]of H){let st=P+it*h+Z,R=B-n[st];r[st]!==r[P]&&R>.0015&&R<.035&&(O+=1-R/.045)}if(O>0){let Z=1-O*.027,it=P*4;a[it]*=Z,a[it+1]*=Z,a[it+2]*=Z}}}o.set(a);let nt=new Map(S.meshes.map((I,H)=>[I.id,H])),wt=0,Dt=h*.5*Math.hypot(S.viewProjection[0],S.viewProjection[4],S.viewProjection[8]);for(let I of S.fibers||[]){let H=M(S.viewProjection,I.matrix),q=I.segments,E=I.matrix,P=I.color,B=nt.get(I.ownerId),O=new Float32Array(15),Z=new Float32Array(5),it=(Math.hypot(E[0],E[1],E[2])+Math.hypot(E[4],E[5],E[6])+Math.hypot(E[8],E[9],E[10]))/3;for(let st=0;st<q.length;st+=20){let R=!0,b=0;Z[0]=0;for(let Ot=0;Ot<5;Ot++){let Zt=st+Ot*3,ne=Ot*3,ee=q[Zt],fe=q[Zt+1],ue=q[Zt+2],Me=H[3]*ee+H[7]*fe+H[11]*ue+H[15];if(Me<1e-6){R=!1;break}O[ne]=((H[0]*ee+H[4]*fe+H[8]*ue+H[12])/Me*.5+.5)*h,O[ne+1]=(.5-(H[1]*ee+H[5]*fe+H[9]*ue+H[13])/Me*.5)*c,O[ne+2]=(H[2]*ee+H[6]*fe+H[10]*ue+H[14])/Me-7e-6,Ot&&(b+=Math.hypot(O[ne]-O[ne-3],O[ne+1]-O[ne-2]),Z[Ot]=b)}if(!R||b<.035)continue;let k=O[0],Y=O[1];if(k<-8||Y<-8||k>h+8||Y>c+8)continue;let K=Math.floor(Y)*h+Math.floor(k);if(k>=0&&Y>=0&&k<h&&Y<c&&O[2]>n[K]+.0012)continue;let V=q[st+12]-q[st],ht=q[st+13]-q[st+1],dt=q[st+14]-q[st+2],St=l(E[0]*V+E[4]*ht+E[8]*dt,E[1]*V+E[5]*ht+E[9]*dt,E[2]*V+E[6]*ht+E[10]*dt),vt=mt[0]*St[0]+mt[1]*St[1]+mt[2]*St[2],$=l(mt[0]-St[0]*vt+mt[0]*.25,mt[1]-St[1]*vt+mt[1]*.25,mt[2]-St[2]*vt+mt[2]*.25),yt=$[1]*.5+.5,bt=0,Et=0,Mt=0,Rt=0,F=Math.floor(k),ot=Math.floor(Y),ct=k-F,gt=Y-ot;for(let Ot=0;Ot<2;Ot++)for(let Zt=0;Zt<2;Zt++){let ne=F+Zt,ee=ot+Ot;if(ne<0||ee<0||ne>=h||ee>=c)continue;let fe=ee*h+ne;if(r[fe]!==B||Math.abs(O[2]-n[fe])>.003)continue;let ue=(Zt?ct:1-ct)*(Ot?gt:1-gt),Me=fe*4;bt+=o[Me]*ue,Et+=o[Me+1]*ue,Mt+=o[Me+2]*ue,Rt+=ue}let ft,at,At;if(Rt>.02){let Ot=I.kind==="plush",Zt=J[0]?.direction||mt,ne=$[0]*Zt[0]+$[1]*Zt[1]+$[2]*Zt[2],ee=u(1+(q[st+19]-.965)*(Ot?.94:.42)+(ne-.65)*(Ot?.1:.035),Ot?.82:.94,Ot?1.16:1.07);ft=bt/Rt*ee,at=Et/Rt*ee,At=Mt/Rt*ee}else{let Ot=X[0]+tt[0]+(j[0]-tt[0])*yt,Zt=X[1]+tt[1]+(j[1]-tt[1])*yt,ne=X[2]+tt[2]+(j[2]-tt[2])*yt;for(let ee=0;ee<J.length;ee++){let fe=J[ee],ue=fe.direction,Me=$[0]*ue[0]+$[1]*ue[1]+$[2]*ue[2],Be=ee===0?pt(k,Y,O[2],Me,I.kind==="plush"?.48:.38):1,Ce=Math.max(0,(Me+.13)/1.13)*fe.intensity*Be;Ot+=fe.color[0]*Ce,Zt+=fe.color[1]*Ce,ne+=fe.color[2]*Ce}ft=P[0]*Ot*q[st+15],at=P[1]*Zt*q[st+16],At=P[2]*ne*q[st+17],S.neutral?(f(ft,at,At,G,ut),ft=ut[0],at=ut[1],At=ut[2]):(ft=N[u(Math.round(ft*512),0,4096)],at=N[u(Math.round(at*512),0,4096)],At=N[u(Math.round(At*512),0,4096)])}let zt=Math.max(1,Math.ceil(b*1.15)),Qt=Math.min(.9,q[st+18]*it*Dt*2*I.sampleWeight)*Math.min(1,b/zt)*I.opacity;wt++;for(let Ot=0;Ot<zt;Ot++){let Zt=(Ot+.5)/zt,ne=Zt*b,ee=1;for(;ee<4&&Z[ee]<ne;)ee++;let fe=(ne-Z[ee-1])/Math.max(1e-6,Z[ee]-Z[ee-1]),ue=(ee-1)*3,Me=ee*3,Be=O[ue]+(O[Me]-O[ue])*fe,Ce=O[ue+1]+(O[Me+1]-O[ue+1])*fe,ae=O[ue+2]+(O[Me+2]-O[ue+2])*fe,se=Math.floor(Be),Ee=Math.floor(Ce),Te=Be-se,Ye=Ce-Ee;for(let rn=0;rn<2;rn++)for(let wn=0;wn<2;wn++){let En=se+wn,Tn=Ee+rn;if(En<0||En>=h||Tn<0||Tn>=c)continue;let _n=Tn*h+En;if(ae>n[_n]+13e-6||ae<-1||ae>1)continue;let L=(wn?Te:1-Te)*(rn?Ye:1-Ye)*Qt*(1-Zt*.78),Q=1-L,rt=_n*4;a[rt]=ft*L+a[rt]*Q,a[rt+1]=at*L+a[rt+1]*Q,a[rt+2]=At*L+a[rt+2]*Q,a[rt+3]=L+a[rt+3]*Q}}}}for(let I of xt)_t(I,!0);for(let I=0;I<s.length;I+=4){let H=u(a[I+3],0,1),q=H>1e-5?1/H:0;s[I]=p[u(Math.round(a[I]*q*4096),0,4096)],s[I+1]=p[u(Math.round(a[I+1]*q*4096),0,4096)],s[I+2]=p[u(Math.round(a[I+2]*q*4096),0,4096)],s[I+3]=Math.round(H*255)}return{id:S.id,version:S.version,width:h,height:c,pixels:s.buffer,stats:{ms:performance.now()-C,triangles:Lt,pixels:Ut,fibers:wt,calls:Tt.length+xt.length}}}return{draw:T}}var ja=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.minPreviewScale=.62,this.staticPreview=!1,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${Ec.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=Ec()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=is(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e){this._disposed||(this._pending={scene:t,camera:e,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let a of s.geometries)for(let o of["positions","normals","indices","uv","colors"])a[o]&&r.push(a[o].buffer);for(let a of s.textures)r.push(a.data.buffer);for(let a of s.fibers)r.push(a.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let a of this._waiters.splice(0))a.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let s=this.highQuality||Math.max(this._width,this._height)>=1e3,r=this.highQuality?1600:s?this.captureLimit:Math.round(this.previewLimit*(this.staticPreview?1:this._adaptive)),a=Math.min(1,r/Math.max(this.domElement.width,this.domElement.height)),o={id:n,version:this._version,width:Math.max(1,Math.round(this.domElement.width*a)),height:Math.max(1,Math.round(this.domElement.height*a)),viewProjection:Wr(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?is(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===Ds,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.022,.022,.022],sky:[.026,.026,.026],ground:[.02,.022,.025]},h=new Set,c=new Set,u=0;t.traverseVisible?.(d=>{d.isInstancedMesh&&d.name==="surface-fibers"&&(u+=d.count)});let l=s?Math.min(126e3,o.width*o.height*.4):Math.min(72e3,o.width*o.height*.26),f=Math.max(1,Math.ceil(u/Math.max(3e3,l))),p=d=>{if(!d)return null;let m=(d.uuid||d.id)+":"+(d.version||0);if(c.has(m))return m;let w=d.image||d.source?.data,g=w?.data,v=w?.width,A=w?.height;if(!g&&w?.getContext)try{g=w.getContext("2d")?.getImageData(0,0,v,A)?.data}catch{}return!g||!v||!A?null:(c.add(m),this._knownTextures.has(m)||o.textures.push({id:m,width:v,height:A,data:new Uint8Array(g),channels:Math.round(g.length/(v*A)),repeat:[d.repeat?.x??1,d.repeat?.y??1],offset:[d.offset?.x||0,d.offset?.y||0],wrapS:d.wrapS,wrapT:d.wrapT,flipY:!!d.flipY,srgb:d.colorSpace==="srgb"}),m)},x=(d,m,w="")=>{let g=d.geometry,v=g?.attributes?.position;if(!v||d.isSkinnedMesh)return;let A=g.uuid+":"+(v.version||0)+":"+(g.attributes.normal?.version||0);h.has(A)||(h.add(A),this._knownGeometry.has(A)||o.geometries.push({id:A,positions:Qa(v,3),normals:Qa(g.attributes.normal,3),uv:Qa(g.attributes.uv,2),colors:Qa(g.attributes.color,3),indices:g.index?new Uint32Array(g.index.array):null}));let T=Array.isArray(d.material)?g.groups:[{start:g.drawRange?.start||0,count:g.drawRange?.count??1/0,materialIndex:0}];for(let S=0;S<T.length;S++){let C=T[S],_=Array.isArray(d.material)?d.material[C.materialIndex]:d.material;!_||_.visible===!1||_.isShadowMaterial||(_.opacity??1)<.002||o.meshes.push({id:d.uuid+w+":"+S,geometry:A,matrix:Array.from(m),start:C.start,count:C.count,order:d.renderOrder||0,castShadow:d.castShadow!==!1,receiveShadow:d.receiveShadow!==!1,material:{color:is(_.color),emissive:is(_.emissive,[0,0,0]).map(y=>y*(_.emissiveIntensity??1)),opacity:_.opacity??1,transparent:!!_.transparent,side:_.side??0,roughness:_.roughness??.75,metalness:_.metalness||0,depthTest:_.depthTest!==!1,depthWrite:_.depthWrite!==!1,alphaTest:_.alphaTest||0,unlit:!!_.isMeshBasicMaterial,toneMapped:_.toneMapped!==!1,map:p(_.map),bump:p(_.bumpMap),bumpScale:_.bumpScale||0,surfaceKind:d.userData.surfaceMaterial||_.name,vertexColors:!!_.vertexColors}})}},M=d=>{if(d.visible!==!1){if(d.isLight){let m=is(d.color),w=d.intensity??1;if(d.isHemisphereLight){let g=is(d.groundColor);for(let v=0;v<3;v++)o.sky[v]+=m[v]*w*.22,o.ground[v]+=g[v]*w*.2}else if(d.isAmbientLight)for(let g=0;g<3;g++)o.ambient[g]+=m[g]*w*.3;else if(d.isDirectionalLight||d.isPointLight||d.isSpotLight){if(!o.shadow&&d.isDirectionalLight&&d.castShadow&&this.shadowMap.enabled){d.shadow.updateMatrices(d);let _=Wr(d.shadow.camera.projectionMatrix.elements,d.shadow.camera.matrixWorldInverse.elements),y=Wr(e.matrixWorld.elements,e.projectionMatrixInverse.elements);o.shadow={viewProjection:_,screenMatrix:Wr(_,y),size:s?512:384,radius:Xg(d.shadow.radius||2.5,1,5)}}d.target?.updateMatrixWorld(!0);let g=d.matrixWorld.elements,v=d.target?.matrixWorld.elements,A=g[12]-(v?.[12]||0),T=g[13]-(v?.[13]||0),S=g[14]-(v?.[14]||0),C=Math.hypot(A,T,S)||1;o.lights.push({direction:[A/C,T/C,S/C],color:m,intensity:w/Math.PI})}}if(d.isMesh&&(!e.layers||e.layers.test(d.layers)))if(d.isInstancedMesh){if(d.name==="surface-fibers"&&this.renderFibers){d.geometry.computeBoundingBox();let m=d.geometry.boundingBox.max.y,w=d.instanceMatrix.array,g=d.instanceColor?.array,v=d.userData.fiberProfile||d.geometry.userData.fiberProfile||Array.from({length:5},(_,y)=>[0,m*y/4,0]),A=d.userData.fiberRadius||d.geometry.userData.fiberRadius||.001,T=new Float32Array(Math.ceil(d.count/f)*20),S=0;for(let _=0;_<d.count;_+=f){let y=_*16;for(let[D,U,N]of v)T[S++]=w[y]*D+w[y+4]*U+w[y+8]*N+w[y+12],T[S++]=w[y+1]*D+w[y+5]*U+w[y+9]*N+w[y+13],T[S++]=w[y+2]*D+w[y+6]*U+w[y+10]*N+w[y+14];T[S++]=g?g[_*3]:1,T[S++]=g?g[_*3+1]:1,T[S++]=g?g[_*3+2]:1,T[S++]=A*Math.hypot(w[y],w[y+1],w[y+2]),T[S++]=d.userData.fiberTones?.[_]??1}let C=d.userData.surfaceMaterial||d.parent?.userData.surfaceMaterial||d.parent?.material?.name;o.fibers.push({ownerId:d.parent?.uuid+":0",matrix:Array.from(d.matrixWorld.elements),segments:T,color:is(d.material.color),kind:C,sampleWeight:Math.min(2.3,Math.sqrt(f)),opacity:["fabric","knit"].includes(C)?.9:1})}else if(d.name!=="surface-fibers"&&d.count<=256)for(let m=0;m<d.count;m++)x(d,Wr(d.matrixWorld.elements,d.instanceMatrix.array.subarray(m*16,m*16+16)),":"+m)}else d.material?.isShadowMaterial||x(d,d.matrixWorld.elements);for(let m of d.children||[])M(m)}};return M(t),o.lights.length||o.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),o.lights=o.lights.slice(0,4),o.geometryIds=[...h],o.textureIds=[...c],this._knownGeometry=h,this._knownTextures=c,this.info.memory={geometries:h.size,textures:c.size},o}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(this.minPreviewScale,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=Ec(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var cy=new z(0,1,0),tl=null,Xr=i=>i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0;function Bu(i){let t={...i};for(let e of["name","notes","reference","presetId","version","rendererVersion","palette","output","eyeColorManual","provenance"])delete t[e];return JSON.stringify(t)}function el(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let a of Object.values(r))a?.isTexture&&n.add(a)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function qg(i,t){let e=t.shape==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,a]of i.arms.entries())a.rotation.z=(r?1:-1)*.62,a.rotation.x=-.62;for(let[r,a]of i.legs.entries())a.position.y+=.1,a.position.z+=.1,a.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.15,i.head.position.z+=.025,t.action==="work"&&(i.head.rotation.y=-.08)),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new We().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var qr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(tl!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(tl="webgl",this.renderer=new Ha({canvas:t,context:s,...n})):(tl="software",this.renderer=new ja(t)),t.dataset.renderMode=tl,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:640,this.renderer.minPreviewScale=e?.62:.8),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Ds,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Wo,this.scene=new ki,this.camera=new Yi(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let f=new Hs(this.renderer),p=new Wa;this.environment=f.fromScene(p,.055),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.35,p.dispose(),f.dispose()}this.scene.add(new Fr("#ffffff","#e1e5eb",1.45));let r=new Ei("#fffdfb",2.3);r.position.set(-3.8,5.2,4.4),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.01,r.shadow.radius=5,this.scene.add(r);let a=new Ei("#f2f6ff",.84);a.position.set(4,2.8,2.4),this.scene.add(a);let o=new Ei("#f4f7ff",.42);o.position.set(0,-2,4),this.scene.add(o);let h=new Ei("#ffffff",.8);h.position.set(2,4.2,-3.6),this.scene.add(h),this.floor=new pe(new Mi(200,200),new Dr({color:"#68718a",opacity:.11})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-.016,this.floor.receiveShadow=!0,this.scene.add(this.floor);let c=128,u=new Uint8Array(c*c*4);for(let f=0;f<c;f++)for(let p=0;p<c;p++){let x=((p-c/2)/(c/2))**2+((f-c/2)/(c/2))**2,M=(f*c+p)*4;u[M]=88,u[M+1]=103,u[M+2]=125,u[M+3]=Math.round(Math.exp(-x*4.2)*43)}let l=new vi(u,c,c);l.needsUpdate=!0,this.contact=new pe(new Mi(3.3,2.2),new si({map:l,transparent:!0,depthWrite:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=.002,this.scene.add(this.contact),this.turn=new Pe,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.avatar&&(this.turn.remove(this.avatar.root),el(this.avatar.root)),this.config=structuredClone(t),this.avatar=Pu(t),this.props=Fu(this.avatar,t),qg(this.avatar,t),Ru(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.turn.rotation.y=t.camera==="side"?Math.PI*.43:t.camera==="threeQuarter"?.33:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new We().setFromObject(this.turn);this.center=e.getCenter(new z),this.bounds=e.getSize(new z),this.floor.visible=this.contact.visible=t.background!=="transparent",this.scene.background=t.background==="solid"?new Xt(t.colors.background):t.background==="studio"?new Xt("#f4f6fa"):null,this.fit(this.frame.width,this.frame.height),this.render(Xr(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=Math.max(this.bounds.y*1.28,this.bounds.x*1.28/s)*(72/n.scale),a=r,o=this.center.clone();if(n.framing!=="full"&&!["sleep"].includes(n.action)){let c=n.accessories.prop!=="none";(n.shape==="human"||this.avatar.root.userData.anatomy==="animal")&&(a=r*(c?.9:n.framing==="portrait"?.53:.67),o.y+=this.bounds.y*(c?.04:n.framing==="portrait"?.205:.16))}this.camera.left=-a*s/2,this.camera.right=a*s/2,this.camera.top=a/2,this.camera.bottom=-a/2;let h=n.action==="work"?2.8:n.action==="read"?1.65:.45;this.camera.position.set(o.x,o.y+h,8),this.camera.lookAt(o.x,o.y,0),this.camera.updateProjectionMatrix()}render(t=0){if(!this.avatar)return;let e=this.avatar,n=this.config,s=e.root.userData;if(e.root.position.y=s.restY,e.root.scale.copy(s.restScale),e.root.rotation.copy(s.restRotation),n.action==="bounce"){let o=Math.max(0,Math.sin(t*3.1));e.root.position.y+=o*.24}else{let o=Math.sin(t*(n.action==="sleep"?1.3:1.8));e.root.scale.y=s.restScale.y*(1+o*.008),n.action==="listen"&&(e.root.rotation.z+=Math.sin(t*2)*.035),(n.expression==="curious"||n.expression==="skeptical")&&(e.root.rotation.z+=.055),n.expression==="shy"&&(e.root.rotation.y+=.11),n.expression==="sleepy"&&(e.root.rotation.z-=.04),n.expression==="expectant"&&(e.root.rotation.x+=.045),n.expression==="panicked"&&(e.root.rotation.x-=.08),n.expression==="laughing"&&(e.root.rotation.x-=.06)}let r=t%(n.action==="blink"?2.3:5.5),a=Math.abs(r-.17)<.16?Math.max(.07,Math.abs(r-.17)/.16):1;for(let o of e.eyeGroups)o.scale.y=n.expression==="closed"||n.expression==="wink"||["delighted","laughing"].includes(n.expression)||n.action==="sleep"||n.action==="work"?1:a;e.tail&&n.action!=="sleep"&&(e.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.renderer.render(this.scene,this.camera)}dispose(){this.avatar&&el(this.avatar.root),el(this.floor),el(this.contact),this.environment?.dispose(),this.renderer.dispose()}},Nu=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.world=new qr(this.canvas),this.start=performance.now(),this.playing=!matchMedia("(prefers-reduced-motion: reduce)").matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{this.raf=requestAnimationFrame(this.loop),!(!this.visible||document.hidden||!this.playing||this.capturing||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?115:40))&&(this.lastFrame=s,this.world.render((s-this.start)/1e3))},this.raf=requestAnimationFrame(this.loop)}update(t){let e=Bu(t);this.updateKey!==e&&(this.updateKey=e,this.pending=t,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(()=>{this.updateFrame=0;try{this.world.update(this.pending),this.revision++,this.canvas.dataset.revision=String(this.revision),this.canvas.dataset.shape=this.pending.shape,this.canvas.dataset.material=this.pending.material,this.canvas.dataset.action=this.pending.action,this.resize(),this.onReady()}catch(n){console.error("Character preview:",n),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,a=Math.max(1,s.width),o=a/r;o>s.height&&(o=s.height,a=o*r),this.canvas.style.width=a+"px",this.canvas.style.height=o+"px",this.world.fit(Math.round(a),Math.round(o)),this.world.render(Xr(this.world.config))}setPlaying(t){this.playing=t,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!t),!t&&this.world.config&&this.world.render(Xr(this.world.config))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let r;this.capturing=!0;try{if(!n)throw Error("\u89D2\u8272\u5C1A\u672A\u51C6\u5907\u597D");let[a,o]=n.aspect.split(":").map(Number),h=a>=o?t:Math.round(t*a/o),c=o>=a?t:Math.round(t*o/a),u=document.createElement("canvas");r=new qr(u),r.renderer.highQuality=!0,r.renderer.captureLimit=t,r.renderer.setPixelRatio(1),r.frame={width:h,height:c},r.update(n),r.render(Xr(n)),await r.renderer.flush?.();let l=await new Promise(f=>u.toBlob(f,"image/png"));if(!l)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return l}finally{r?.dispose(),this.capturing=!1}});return this.captureQueue=s,s}dispose(){cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove()}},Ci,Ou=Promise.resolve(),hi=new Map;function hy(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=Bu(e)+t;if(hi.has(n))return Promise.resolve(hi.get(n));let s=Ou.then(async()=>{if(hi.has(n))return hi.get(n);Ci||(Ci=new qr(document.createElement("canvas"),{thumbnail:!0})),Ci.frame={width:t,height:t},Ci.update(e),Ci.fit(t,t),Ci.render(Xr(e)),await Ci.renderer.flush?.();let r=await new Promise(o=>Ci.renderer.domElement.toBlob(o,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let a=URL.createObjectURL(r);if(hi.set(n,a),hi.size>200){let o=hi.keys().next().value;URL.revokeObjectURL(hi.get(o)),hi.delete(o)}return a});return Ou=s.catch(()=>{}),s}export{Nu as CharacterPreview,hy as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
