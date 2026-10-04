var eh=0,kl=1,nh=2;var Hl=1,Wo=2,Yn=3,ni=0,$e=1,hn=2,ai=0,Fi=1,Vl=2,Gl=3,Wl=4,ih=5,_i=100,sh=101,rh=102,oh=103,ah=104,lh=200,ch=201,hh=202,uh=203,xo=204,_o=205,dh=206,fh=207,ph=208,mh=209,gh=210,xh=211,_h=212,yh=213,vh=214,Xo=0,qo=1,Yo=2,Ni=3,Zo=4,Jo=5,$o=6,Ko=7,Qo=0,Mh=1,bh=2,li=0,Sh=1,wh=2,Eh=3,Th=4,Ah=5,Rh=6,Ds=7;var Xl=300,Yi=301,Zi=302,jo=303,ta=304,Or=306,vs=1e3,xi=1001,yo=1002,fn=1003,Ch=1004;var Br=1005;var Mn=1006,ea=1007;var Zn=1008;var Bn=1009,ql=1010,Yl=1011,Ls=1012,na=1013,Ei=1014,zn=1015,Us=1016,ia=1017,sa=1018,Fs=1020,Zl=35902,Jl=35899,$l=1021,Kl=1022,mn=1023,Ms=1026,Ns=1027,ra=1028,oa=1029,Ql=1030,aa=1031;var la=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,ya=37811,va=37812,Ma=37813,ba=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,Da=36495,La=36283,Ua=36284,Fa=36285,Na=36286;var ar=2300,vo=2301,go=2302,Rl=2400,Cl=2401,Il=2402;var Ih=3200,Ph=3201;var Oa=0,Dh=1,ci="",an="srgb",Oi="srgb-linear",lr="linear",xe="srgb";var Ui=7680;var Pl=519,Lh=512,Uh=513,Fh=514,jl=515,Nh=516,Oh=517,Bh=518,zh=519,Dl=35044,Os=35048;var tc="300 es",Nn=2e3,cr=2001;var ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=1234567,ir=Math.PI/180,bs=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Hu(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Vu(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qu(i,t){return i+Math.random()*(t-i)}function Yu(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&(Tc=i);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(i){return i*ir}function $u(i){return i*bs}function Ku(i){return(i&i-1)===0&&i!==0}function Qu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function td(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),l=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*l,c*f,o*h);break;case"YZY":i.set(c*f,o*u,c*l,o*h);break;case"ZXZ":i.set(c*l,c*f,o*u,o*h);break;case"XZX":i.set(o*u,c*x,c*m,o*h);break;case"YXY":i.set(c*m,o*u,c*x,o*h);break;case"ZYZ":i.set(c*x,c*m,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ae={DEG2RAD:ir,RAD2DEG:bs,generateUUID:Ji,clamp:oe,euclideanModulo:ec,mapLinear:zu,inverseLerp:ku,lerp:sr,damp:Hu,pingpong:Vu,smoothstep:Gu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:Zu,degToRad:Ju,radToDeg:$u,isPowerOfTwo:Ku,ceilPowerOfTwo:Qu,floorPowerOfTwo:ju,setQuaternionFromProperEuler:td,normalize:on,denormalize:_s},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],l=n[s+3],f=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=S;return}if(l!==S||c!==f||h!==m||u!==x){let d=1-o,p=c*f+h*m+u*x+l*S,w=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){let R=Math.sqrt(g),A=Math.atan2(R,p*w);d=Math.sin(d*A)/R,o=Math.sin(o*A)/R}let v=o*w;if(c=c*d+f*v,h=h*d+m*v,u=u*d+x*v,l=l*d+S*v,d===1-o){let R=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=R,h*=R,u*=R,l*=R}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],l=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+u*l+c*m-h*f,t[e+1]=c*x+u*f+h*l-o*m,t[e+2]=h*x+u*m+o*f-c*l,t[e+3]=u*x-o*l-c*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),l=o(r/2),f=c(n/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*u*l+h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l-f*m*x;break;case"YXZ":this._x=f*u*l+h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l+f*m*x;break;case"ZXY":this._x=f*u*l-h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l-f*m*x;break;case"ZYX":this._x=f*u*l-h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l+f*m*x;break;case"YZX":this._x=f*u*l+h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l-f*m*x;break;case"XZY":this._x=f*u*l-h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],l=e[10],f=n+o+l;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>l){let m=2*Math.sqrt(1+n-o-l);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>l){let m=2*Math.sqrt(1+o-n-l);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+l-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=a*l+this._w*f,this._x=n*l+this._x*f,this._y=s*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*h+a*l-o*u,this.y=n+c*u+o*h-r*l,this.z=s+c*l+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new B,Ac=new Je,Kt=class i{constructor(t,e,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],l=n[7],f=n[2],m=n[5],x=n[8],S=s[0],d=s[3],p=s[6],w=s[1],g=s[4],v=s[7],R=s[2],A=s[5],b=s[8];return r[0]=a*S+o*w+c*R,r[3]=a*d+o*g+c*A,r[6]=a*p+o*v+c*b,r[1]=h*S+u*w+l*R,r[4]=h*d+u*g+l*A,r[7]=h*p+u*v+l*b,r[2]=f*S+m*w+x*R,r[5]=f*d+m*g+x*A,r[8]=f*p+m*v+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=u*a-o*h,f=o*c-u*r,m=h*r-a*c,x=e*l+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=l*S,t[1]=(s*h-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*c-h*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},il=new Kt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=hr("canvas");return i.style.display="block",i}var Rc={};function Ss(i){i in Rc||(Rc[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var de=ed();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=hr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nd=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sl(s[a].image)):r.push(sl(s[a]))}else r=sl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var id=0,rl=new B,pn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=Mn,a=Zn,o=mn,c=Bn,h=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Ji(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Xl;pn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],l=c[8],f=c[1],m=c[5],x=c[9],S=c[2],d=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-S)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+S)<.1&&Math.abs(x+d)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(h+1)/2,v=(m+1)/2,R=(p+1)/2,A=(u+f)/4,b=(l+S)/4,I=(x+d)/4;return g>v&&g>R?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=A/n,r=b/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-x)*(d-x)+(l-S)*(l-S)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(l-S)/w,this.z=(f-u)/w,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new pn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Zr.subVectors(this.max,Js),os.subVectors(t.a,Js),as.subVectors(t.b,Js),ls.subVectors(t.c,Js),ui.subVectors(as,os),di.subVectors(ls,as),Ii.subVectors(os,ls);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!ol(e,os,as,ls,Zr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,os,as,ls,Zr))?!1:(Jr.crossVectors(ui,di),e=[Jr.x,Jr.y,Jr.z],ol(e,os,as,ls,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,Yr=new We,os=new B,as=new B,ls=new B,ui=new B,di=new B,Ii=new B,Js=new B,Zr=new B,Jr=new B,Pi=new B;function ol(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),h=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var sd=new We,$s=new B,al=new B,Xn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(al)),this.expandByPoint($s.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kn=new B,ll=new B,$r=new B,fi=new B,cl=new B,Kr=new B,hl=new B,dr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ll.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ll);let r=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=fi.dot(this.direction),c=-fi.dot($r),h=fi.lengthSq(),u=Math.abs(1-a*a),l,f,m,x;if(u>0)if(l=a*c-o,f=a*o-c,x=r*u,l>=0)if(f>=-x)if(f<=x){let S=1/u;l*=S,f*=S,m=l*(l+a*f+2*o)+f*(a*l+f+2*c)+h}else f=r,l=Math.max(0,-(a*f+o)),m=-l*l+f*(f+2*c)+h;else f=-r,l=Math.max(0,-(a*f+o)),m=-l*l+f*(f+2*c)+h;else f<=-x?(l=Math.max(0,-(-a*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),m=-l*l+f*(f+2*c)+h):f<=x?(l=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+h):(l=Math.max(0,-(a*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),m=-l*l+f*(f+2*c)+h);else f=a>0?-r:r,l=Math.max(0,-(a*f+o)),m=-l*l+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(ll).addScaledVector($r,f),m}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){cl.subVectors(e,t),Kr.subVectors(n,t),hl.crossVectors(cl,Kr);let a=this.direction.dot(hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);let c=o*this.direction.dot(Kr.crossVectors(fi,Kr));if(c<0)return null;let h=o*this.direction.dot(cl.cross(fi));if(h<0||c+h>a)return null;let u=-o*fi.dot(hl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,a,o,c,h,u,l,f,m,x,S,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,l,f,m,x,S,d)}set(t,e,n,s,r,a,o,c,h,u,l,f,m,x,S,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=l,p[14]=f,p[3]=m,p[7]=x,p[11]=S,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let f=a*u,m=a*l,x=o*u,S=o*l;e[0]=c*u,e[4]=-c*l,e[8]=h,e[1]=m+x*h,e[5]=f-S*h,e[9]=-o*c,e[2]=S-f*h,e[6]=x+m*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,m=c*l,x=h*u,S=h*l;e[0]=f+S*o,e[4]=x*o-m,e[8]=a*h,e[1]=a*l,e[5]=a*u,e[9]=-o,e[2]=m*o-x,e[6]=S+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,m=c*l,x=h*u,S=h*l;e[0]=f-S*o,e[4]=-a*l,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*u,e[9]=S-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,m=a*l,x=o*u,S=o*l;e[0]=c*u,e[4]=x*h-m,e[8]=f*h+S,e[1]=c*l,e[5]=S*h+f,e[9]=m*h-x,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,m=a*h,x=o*c,S=o*h;e[0]=c*u,e[4]=S-f*l,e[8]=x*l+m,e[1]=l,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=m*l+x,e[10]=f-S*l}else if(t.order==="XZY"){let f=a*c,m=a*h,x=o*c,S=o*h;e[0]=c*u,e[4]=-l,e[8]=h*u,e[1]=f*l+S,e[5]=a*u,e[9]=m*l-x,e[2]=x*l-m,e[6]=o*u,e[10]=S*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rd,t,od)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),pi.crossVectors(n,yn),pi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),pi.crossVectors(n,yn)),pi.normalize(),Qr.crossVectors(yn,pi),s[0]=pi.x,s[4]=Qr.x,s[8]=yn.x,s[1]=pi.y,s[5]=Qr.y,s[9]=yn.y,s[2]=pi.z,s[6]=Qr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],l=n[5],f=n[9],m=n[13],x=n[2],S=n[6],d=n[10],p=n[14],w=n[3],g=n[7],v=n[11],R=n[15],A=s[0],b=s[4],I=s[8],_=s[12],y=s[1],D=s[5],U=s[9],N=s[13],H=s[2],Z=s[6],X=s[10],j=s[14],tt=s[3],gt=s[7],wt=s[11],_t=s[15];return r[0]=a*A+o*y+c*H+h*tt,r[4]=a*b+o*D+c*Z+h*gt,r[8]=a*I+o*U+c*X+h*wt,r[12]=a*_+o*N+c*j+h*_t,r[1]=u*A+l*y+f*H+m*tt,r[5]=u*b+l*D+f*Z+m*gt,r[9]=u*I+l*U+f*X+m*wt,r[13]=u*_+l*N+f*j+m*_t,r[2]=x*A+S*y+d*H+p*tt,r[6]=x*b+S*D+d*Z+p*gt,r[10]=x*I+S*U+d*X+p*wt,r[14]=x*_+S*N+d*j+p*_t,r[3]=w*A+g*y+v*H+R*tt,r[7]=w*b+g*D+v*Z+R*gt,r[11]=w*I+g*U+v*X+R*wt,r[15]=w*_+g*N+v*j+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],l=t[6],f=t[10],m=t[14],x=t[3],S=t[7],d=t[11],p=t[15];return x*(+r*c*l-s*h*l-r*o*f+n*h*f+s*o*m-n*c*m)+S*(+e*c*m-e*h*f+r*a*f-s*a*m+s*h*u-r*c*u)+d*(+e*h*l-e*o*m-r*a*l+n*a*m+r*o*u-n*h*u)+p*(-s*o*u-e*c*l+e*o*f+s*a*l-n*a*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=t[9],f=t[10],m=t[11],x=t[12],S=t[13],d=t[14],p=t[15],w=l*d*h-S*f*h+S*c*m-o*d*m-l*c*p+o*f*p,g=x*f*h-u*d*h-x*c*m+a*d*m+u*c*p-a*f*p,v=u*S*h-x*l*h+x*o*m-a*S*m-u*o*p+a*l*p,R=x*l*c-u*S*c-x*o*f+a*S*f+u*o*d-a*l*d,A=e*w+n*g+s*v+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=w*b,t[1]=(S*f*r-l*d*r-S*s*m+n*d*m+l*s*p-n*f*p)*b,t[2]=(o*d*r-S*c*r+S*s*h-n*d*h-o*s*p+n*c*p)*b,t[3]=(l*c*r-o*f*r-l*s*h+n*f*h+o*s*m-n*c*m)*b,t[4]=g*b,t[5]=(u*d*r-x*f*r+x*s*m-e*d*m-u*s*p+e*f*p)*b,t[6]=(x*c*r-a*d*r-x*s*h+e*d*h+a*s*p-e*c*p)*b,t[7]=(a*f*r-u*c*r+u*s*h-e*f*h-a*s*m+e*c*m)*b,t[8]=v*b,t[9]=(x*l*r-u*S*r-x*n*m+e*S*m+u*n*p-e*l*p)*b,t[10]=(a*S*r-x*o*r+x*n*h-e*S*h-a*n*p+e*o*p)*b,t[11]=(u*o*r-a*l*r-u*n*h+e*l*h+a*n*m-e*o*m)*b,t[12]=R*b,t[13]=(u*S*s-x*l*s+x*n*f-e*S*f-u*n*d+e*l*d)*b,t[14]=(x*o*s-a*S*s-x*n*c+e*S*c+a*n*d-e*o*d)*b,t[15]=(a*l*s-u*o*s+u*n*c-e*l*c-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,l=o+o,f=r*h,m=r*u,x=r*l,S=a*u,d=a*l,p=o*l,w=c*h,g=c*u,v=c*l,R=n.x,A=n.y,b=n.z;return s[0]=(1-(S+p))*R,s[1]=(m+v)*R,s[2]=(x-g)*R,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(f+p))*A,s[6]=(d+w)*A,s[7]=0,s[8]=(x+g)*b,s[9]=(d-w)*b,s[10]=(1-(f+S))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let h=1/r,u=1/a,l=1/o;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=l,Un.elements[9]*=l,Un.elements[10]*=l,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn,c=!1){let h=this.elements,u=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===Nn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===cr)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=l,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,c=!1){let h=this.elements,u=2/(e-t),l=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===Nn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===cr)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=l,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new B,Un=new _e,rd=new B(0,0,0),od=new B(1,1,1),pi=new B,Qr=new B,yn=new B,Pc=new _e,Dc=new Je,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],l=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ad=0,Lc=new B,hs=new Je,Qn=new _e,jr=new B,Ks=new B,ld=new B,cd=new Je,Uc=new B(1,0,0),Fc=new B(0,1,0),Nc=new B(0,0,1),Oc={type:"added"},hd={type:"removed"},us={type:"childadded",child:null},ul={type:"childremoved",child:null},Ve=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Rn,n=new Je,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ks,jr,this.up):Qn.lookAt(jr,Ks,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Qn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hd),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let l=c[h];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),l=a(t.shapes),f=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new B(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new B,jn=new B,dl=new B,ti=new B,ds=new B,fs=new B,Bc=new B,fl=new B,pl=new B,ml=new B,gl=new ge,xl=new ge,_l=new ge,Vn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),jn.subVectors(n,e),dl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(jn),c=Fn.dot(dl),h=jn.dot(jn),u=jn.dot(dl),l=a*h-o*o;if(l===0)return r.set(0,0,0),null;let f=1/l,m=(h*c-o*u)*f,x=(a*u-o*c)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return gl.setScalar(0),xl.setScalar(0),_l.setScalar(0),gl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(xl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),jn.subVectors(t,e),Fn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Fn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),fl.subVectors(t,n);let c=ds.dot(fl),h=fs.dot(fl);if(c<=0&&h<=0)return e.copy(n);pl.subVectors(t,s);let u=ds.dot(pl),l=fs.dot(pl);if(u>=0&&l<=u)return e.copy(s);let f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ds,a);ml.subVectors(t,r);let m=ds.dot(ml),x=fs.dot(ml);if(x>=0&&m<=x)return e.copy(r);let S=m*h-c*x;if(S<=0&&h>=0&&x<=0)return o=h/(h-x),e.copy(n).addScaledVector(fs,o);let d=u*x-m*l;if(d<=0&&l-u>=0&&m-x>=0)return Bc.subVectors(r,s),o=(l-u)/(l-u+(m-x)),e.copy(s).addScaledVector(Bc,o);let p=1/(d+S+f);return a=S*p,o=f*p,e.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},to={h:0,s:0,l:0};function yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=ec(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return de.workingToColorSpace(en.copy(this),t),Math.round(oe(en.r*255,0,255))*65536+Math.round(oe(en.g*255,0,255))*256+Math.round(oe(en.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let l=a-o;switch(h=u<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=an){de.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(to);let n=sr(mi.h,to.h,e),s=sr(mi.s,to.s,e),r=sr(mi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Xt;Xt.NAMES=Vh;var ud=0,qn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Fi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=_o,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new B,eo=new It,dd=0,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var fr=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},fd=0,An=new _e,vl=new Ve,ps=new B,vn=new We,Qs=new We,Ze=new B,ye=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(vn.min,Qs.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,Qs.max),vn.expandByPoint(Ze)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ze.fromBufferAttribute(o,h),c&&(ps.fromBufferAttribute(t,h),Ze.add(ps)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new B,c[I]=new B;let h=new B,u=new B,l=new B,f=new It,m=new It,x=new It,S=new B,d=new B;function p(I,_,y){h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,y),u.sub(h),l.sub(h),m.sub(f),x.sub(f);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(l,-m.y).multiplyScalar(D),d.copy(l).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(D),o[I].add(S),o[_].add(S),o[y].add(S),c[I].add(d),c[_].add(d),c[y].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,_=w.length;I<_;++I){let y=w[I],D=y.start,U=y.count;for(let N=D,H=D+U;N<H;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let g=new B,v=new B,R=new B,A=new B;function b(I){R.fromBufferAttribute(s,I),A.copy(R);let _=o[I];g.copy(_),g.sub(R.multiplyScalar(R.dot(_))).normalize(),v.crossVectors(A,_);let D=v.dot(c[I])<0?-1:1;a.setXYZW(I,g.x,g.y,g.z,D)}for(let I=0,_=w.length;I<_;++I){let y=w[I],D=y.start,U=y.count;for(let N=D,H=D+U;N<H;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,h=new B,u=new B,l=new B;if(t)for(let f=0,m=t.count;f<m;f+=3){let x=t.getX(f+0),S=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,d),u.subVectors(a,r),l.subVectors(s,r),u.cross(l),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,d),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(d,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),l.subVectors(s,r),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,l=o.normalized,f=new h.constructor(c.length*u),m=0,x=0;for(let S=0,d=c.length;S<d;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*u;for(let p=0;p<u;p++)f[x++]=h[m++]}return new Ge(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,l=h.length;u<l;u++){let f=h[u],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){let m=h[l];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],l=r[h];for(let f=0,m=l.length;f<m;f++)u.push(l[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new _e,Di=new dr,no=new Xn,kc=new B,io=new B,so=new B,ro=new B,Ml=new B,oo=new B,Hc=new B,ao=new B,pe=class extends Ve{constructor(t=new ye,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],l=r[c];u!==0&&(Ml.fromBufferAttribute(l,t),a?oo.addScaledVector(Ml,u):oo.addScaledVector(Ml.sub(e),u))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(no.containsPoint(Di.origin)===!1&&(Di.intersectSphere(no,kc)===null||Di.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),Di.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){let d=f[x],p=a[d.materialIndex],w=Math.max(d.start,m.start),g=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let v=w,R=g;v<R;v+=3){let A=o.getX(v),b=o.getX(v+1),I=o.getX(v+2);s=lo(this,p,t,n,h,u,l,A,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=x,p=S;d<p;d+=3){let w=o.getX(d),g=o.getX(d+1),v=o.getX(d+2);s=lo(this,a,t,n,h,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=f.length;x<S;x++){let d=f[x],p=a[d.materialIndex],w=Math.max(d.start,m.start),g=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let v=w,R=g;v<R;v+=3){let A=v,b=v+1,I=v+2;s=lo(this,p,t,n,h,u,l,A,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let d=x,p=S;d<p;d+=3){let w=d,g=d+1,v=d+2;s=lo(this,a,t,n,h,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function pd(i,t,e,n,s,r,a,o){let c;if(t.side===$e?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ni,o),c===null)return null;ao.copy(o),ao.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ao);return h<e.near||h>e.far?null:{distance:h,point:ao.clone(),object:i}}function lo(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,io),i.getVertexPosition(c,so),i.getVertexPosition(h,ro);let u=pd(i,t,e,n,io,so,ro,Hc);if(u){let l=new B;Vn.getBarycoord(Hc,io,so,ro,l),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,c,h,l,new It)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,c,h,l,new It)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,c,h,l,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new B,materialIndex:0};Vn.getNormal(io,so,ro,f.normal),u.face=f,u.barycoord=l}return u}var yi=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],l=[],f=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(l,2));function x(S,d,p,w,g,v,R,A,b,I,_){let y=v/b,D=R/I,U=v/2,N=R/2,H=A/2,Z=b+1,X=I+1,j=0,tt=0,gt=new B;for(let wt=0;wt<X;wt++){let _t=wt*D-N;for(let Lt=0;Lt<Z;Lt++){let Ut=Lt*y-U;gt[S]=Ut*w,gt[d]=_t*g,gt[p]=H,h.push(gt.x,gt.y,gt.z),gt[S]=0,gt[d]=0,gt[p]=A>0?1:-1,u.push(gt.x,gt.y,gt.z),l.push(Lt/b),l.push(1-wt/I),j+=1}}for(let wt=0;wt<I;wt++)for(let _t=0;_t<b;_t++){let Lt=f+_t+Z*wt,Ut=f+_t+Z*(wt+1),Bt=f+(_t+1)+Z*(wt+1),kt=f+(_t+1)+Z*wt;c.push(Lt,Ut,kt),c.push(Ut,Bt,kt),tt+=6}o.addGroup(m,tt,_),m+=tt,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function md(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Gh={clone:$i,merge:nn},gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new B,Vc=new It,Gc=new It,ln=class extends mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Gc),e.subVectors(Gc,Vc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,wo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new ln(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new ln(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new ln(ms,gs,t,e);o.layers=this.layers,this.add(o);let c=new ln(ms,gs,t,e);c.layers=this.layers,this.add(c);let h=new ln(ms,gs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(l,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},gr=class extends pn{constructor(t=[],e=Yi,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ai});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Mn),new wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let S of t.hand.values()){let d=e.getJointPose(S,n),p=this._getHandJoint(h,S);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),m=.02,x=.005;h.inputState.pinching&&f>m+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Bi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vi=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,c,h=fn,u=fn,l,f){super(null,a,o,c,h,u,s,r,l,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new _e,Wc=new _e,co=[],Xc=new We,yd=new _e,js=new pe,tr=new Xn,zi=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Xc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Xc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),tr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Wc.multiplyMatrices(n,xs),js.matrixWorld=Wc,js.raycast(t,co);for(let a=0,o=co.length;a<o;a++){let c=co[a];c.instanceId=r,c.object=this,e.push(c)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,ra,zn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bl=new B,vd=new B,Md=new Kt,Hn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bl.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Md.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Xn,bd=new It(.5,.5),ho=new B,As=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],l=r[5],f=r[6],m=r[7],x=r[8],S=r[9],d=r[10],p=r[11],w=r[12],g=r[13],v=r[14],R=r[15];if(s[0].setComponents(h-a,m-u,p-x,R-w).normalize(),s[1].setComponents(h+a,m+u,p+x,R+w).normalize(),s[2].setComponents(h+o,m+l,p+S,R+g).normalize(),s[3].setComponents(h-o,m-l,p-S,R-g).normalize(),n)s[4].setComponents(c,f,d,v).normalize(),s[5].setComponents(h-c,m-f,p-d,R-v).normalize();else if(s[4].setComponents(h-c,m-f,p-d,R-v).normalize(),e===Nn)s[5].setComponents(h+c,m+f,p+d,R+v).normalize();else if(e===cr)s[5].setComponents(c,f,d,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=bd.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends pn{constructor(t,e,n=Ei,s,r,a,o=fn,c=fn,h,u=Ms,l=1){if(u!==Ms&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:l};super(f,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],h=[],u=e/2,l=Math.PI/2*t,f=e,m=2*l+f,x=n*2+r,S=s+1,d=new B,p=new B;for(let w=0;w<=x;w++){let g=0,v=0,R=0,A=0;if(w<=n){let _=w/n,y=_*Math.PI/2;v=-u-t*Math.cos(y),R=t*Math.sin(y),A=-t*Math.cos(y),g=_*l}else if(w<=n+r){let _=(w-n)/r;v=-u+_*e,R=t,A=0,g=l+_*f}else{let _=(w-n-r)/n,y=_*Math.PI/2;v=u+t*Math.sin(y),R=t*Math.cos(y),A=t*Math.sin(y),g=l+f+_*l}let b=Math.max(0,Math.min(1,g/m)),I=0;w===0?I=.5/s:w===x&&(I=-.5/s);for(let _=0;_<=s;_++){let y=_/s,D=y*Math.PI*2,U=Math.sin(D),N=Math.cos(D);p.x=-R*N,p.y=v,p.z=R*U,o.push(p.x,p.y,p.z),d.set(-R*N,A,R*U),d.normalize(),c.push(d.x,d.y,d.z),h.push(y+I,b)}if(w>0){let _=(w-1)*S;for(let y=0;y<s;y++){let D=_+y,U=_+y+1,N=w*S+y,H=w*S+y+1;a.push(D,U,N),a.push(U,H,N)}}}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mr=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new B,u=new It;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let l=0,f=3;l<=e;l++,f+=3){let m=n+l/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cn=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],l=[],f=[],m=[],x=0,S=[],d=n/2,p=0;w(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(m,2));function w(){let v=new B,R=new B,A=0,b=(e-t)/n;for(let I=0;I<=r;I++){let _=[],y=I/r,D=y*(e-t)+t;for(let U=0;U<=s;U++){let N=U/s,H=N*c+o,Z=Math.sin(H),X=Math.cos(H);R.x=D*Z,R.y=-y*n+d,R.z=D*X,l.push(R.x,R.y,R.z),v.set(Z,b,X).normalize(),f.push(v.x,v.y,v.z),m.push(N,1-y),_.push(x++)}S.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let y=S[_][I],D=S[_+1][I],U=S[_+1][I+1],N=S[_][I+1];(t>0||_!==0)&&(u.push(y,D,N),A+=3),(e>0||_!==r-1)&&(u.push(D,U,N),A+=3)}h.addGroup(p,A,0),p+=A}function g(v){let R=x,A=new It,b=new B,I=0,_=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)l.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),x++;let D=x;for(let U=0;U<=s;U++){let H=U/s*c+o,Z=Math.cos(H),X=Math.sin(H);b.x=_*X,b.y=d*y,b.z=_*Z,l.push(b.x,b.y,b.z),f.push(0,y,0),A.x=Z*.5+.5,A.y=X*.5*y+.5,m.push(A.x,A.y),x++}for(let U=0;U<s;U++){let N=R+U,H=D+U;v===!0?u.push(H,H+1,N):u.push(H+1,H,N),I+=3}h.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new It:new B);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,c=new _e;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),l=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(oe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(oe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),f=c-this.aX,m=h-this.aY;c=f*u-m*l+this.aX,h=f*l+m*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},To=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,l){let f=(a-r)/h-(o-r)/(h+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+l)+(c-o)/l;f*=u,m*=u,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uo=new B,Sl=new sc,wl=new sc,El=new sc,cn=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),h=uo);let l=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(l),m),S=Math.pow(l.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);S<1e-4&&(S=1),x<1e-4&&(x=S),d<1e-4&&(d=S),Sl.initNonuniformCatmullRom(h.x,l.x,f.x,u.x,x,S,d),wl.initNonuniformCatmullRom(h.y,l.y,f.y,u.y,x,S,d),El.initNonuniformCatmullRom(h.z,l.z,f.z,u.z,x,S,d)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(h.x,l.x,f.x,u.x,this.tension),wl.initCatmullRom(h.y,l.y,f.y,u.y,this.tension),El.initCatmullRom(h.z,l.z,f.z,u.z,this.tension));return n.set(Sl.calc(c),wl.calc(c),El.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Sd(i,t){let e=1-i;return e*e*t}function wd(i,t){return 2*(1-i)*i*t}function Ed(i,t){return i*i*t}function rr(i,t,e,n){return Sd(i,t)+wd(i,e)+Ed(i,n)}function Td(i,t){let e=1-i;return e*e*e*t}function Ad(i,t){let e=1-i;return 3*e*e*i*t}function Rd(i,t){return 3*(1-i)*i*i*t}function Cd(i,t){return i*i*i*t}function or(i,t,e,n,s){return Td(i,t)+Ad(i,e)+Rd(i,n)+Cd(i,s)}var Sr=class extends bn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends bn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends bn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends bn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends bn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends bn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],l=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,c.x,h.x,u.x,l.x),qc(o,c.y,h.y,u.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:cn,CubicBezierCurve:Sr,CubicBezierCurve3:Ao,EllipseCurve:Rs,LineCurve:wr,LineCurve3:Ro,QuadraticBezierCurve:Er,QuadraticBezierCurve3:Tr,SplineCurve:Ar}),Io=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},Rr=class extends Io{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wr(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Er(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Sr(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new Rs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},In=class extends Rr{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}};function Id(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=Fd(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let u=-1/0,l=-1/0;for(let f=e;f<s;f+=e){let m=i[f],x=i[f+1];m<o&&(o=m),x<c&&(c=x),m>u&&(u=m),x>l&&(l=x)}h=Math.max(u-o,l-c),h=h!==0?32767/h:0}return Cr(r,a,e,o,c,h,0),a}function Wh(i,t,e,n,s){let r;if(s===qd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Yc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Yc(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(Pr(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&kd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?Dd(i,n,s,r):Pd(i)){t.push(c.i,i.i,h.i),Pr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Ld(ki(i),t),Cr(i,t,e,n,s,r,2)):a===2&&Ud(i,t,e,n,s,r):Cr(ki(i),t,e,n,s,r,1);break}}}function Pd(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),l=Math.min(o,c,h),f=Math.max(s,r,a),m=Math.max(o,c,h),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=l&&x.y<=m&&nr(s,o,r,c,a,h,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Dd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ie(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,l=r.y,f=a.y,m=Math.min(o,c,h),x=Math.min(u,l,f),S=Math.max(o,c,h),d=Math.max(u,l,f),p=Ll(m,x,t,e,n),w=Ll(S,d,t,e,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=p&&v&&v.z<=w;){if(g.x>=m&&g.x<=S&&g.y>=x&&g.y<=d&&g!==s&&g!==a&&nr(o,u,c,l,h,f,g.x,g.y)&&Ie(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=m&&v.x<=S&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&nr(o,u,c,l,h,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=p;){if(g.x>=m&&g.x<=S&&g.y>=x&&g.y<=d&&g!==s&&g!==a&&nr(o,u,c,l,h,f,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=S&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&nr(o,u,c,l,h,f,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ld(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&qh(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function Ud(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gd(a,o)){let c=Yh(a,o);a=ki(a,a.next),c=ki(c,c.next),Cr(a,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Wh(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(Vd(h))}s.sort(Nd);for(let r=0;r<s.length;r++)e=Od(s[r],e);return e}function Nd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Od(i,t){let e=Bd(i,t);if(!e)return t;let n=Yh(e,i);return ki(n,n.next),ki(e,e.next)}function Bd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let l=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,a=e.x<e.next.x?e:e.next,l===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Xh(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let l=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(l<u||l===u&&(e.x>a.x||e.x===a.x&&zd(a,e)))&&(a=e,u=l)}e=e.next}while(e!==o);return a}function zd(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function kd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function nr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Xh(i,t,e,n,s,r,a,o)}function Gd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wd(i,t)&&(Ir(i,t)&&Ir(t,i)&&Xd(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Cs(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function qh(i,t,e,n){let s=po(Ie(i,t,e)),r=po(Ie(i,t,n)),a=po(Ie(e,n,i)),o=po(Ie(e,n,t));return!!(s!==r&&a!==o||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||a===0&&fo(e,i,n)||o===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function Wd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Xd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){let e=Ul(i.i,i.x,i.y),n=Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yc(i,t,e,n){let s=Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(t,e,n=2){return Id(t,e,n)}},Gn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zc(t),Jc(n,t);let a=t.length;e.forEach(Zc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Jc(n,e[c]);let o=Fl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Zc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hi=class i extends ye{constructor(t=new In([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,l=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Yd,g,v=!1,R,A,b,I;p&&(g=p.getSpacedPoints(u),v=!0,f=!1,R=p.computeFrenetFrames(u,!1),A=new B,b=new B,I=new B),f||(d=0,m=0,x=0,S=0);let _=o.extractPoints(h),y=_.shape,D=_.holes;if(!Gn.isClockWise(y)){y=y.reverse();for(let q=0,W=D.length;q<W;q++){let T=D[q];Gn.isClockWise(T)&&(D[q]=T.reverse())}}function N(q){let T=10000000000000001e-36,P=q[0];for(let z=1;z<=q.length;z++){let O=z%q.length,J=q[O],et=J.x-P.x,st=J.y-P.y,C=et*et+st*st,M=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(P.x),Math.abs(P.y)),k=T*M*M;if(C<=k){q.splice(O,1),z--;continue}P=J}}N(y),D.forEach(N);let H=D.length,Z=y;for(let q=0;q<H;q++){let W=D[q];y=y.concat(W)}function X(q,W,T){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(W,T)}let j=y.length;function tt(q,W,T){let P,z,O,J=q.x-W.x,et=q.y-W.y,st=T.x-q.x,C=T.y-q.y,M=J*J+et*et,k=J*C-et*st;if(Math.abs(k)>Number.EPSILON){let Y=Math.sqrt(M),Q=Math.sqrt(st*st+C*C),V=W.x-et/Y,ut=W.y+J/Y,mt=T.x-C/Q,Et=T.y+st/Q,vt=((mt-V)*C-(Et-ut)*st)/(J*C-et*st);P=V+J*vt-q.x,z=ut+et*vt-q.y;let $=P*P+z*z;if($<=2)return new It(P,z);O=Math.sqrt($/2)}else{let Y=!1;J>Number.EPSILON?st>Number.EPSILON&&(Y=!0):J<-Number.EPSILON?st<-Number.EPSILON&&(Y=!0):Math.sign(et)===Math.sign(C)&&(Y=!0),Y?(P=-et,z=J,O=Math.sqrt(M)):(P=J,z=et,O=Math.sqrt(M/2))}return new It(P/O,z/O)}let gt=[];for(let q=0,W=Z.length,T=W-1,P=q+1;q<W;q++,T++,P++)T===W&&(T=0),P===W&&(P=0),gt[q]=tt(Z[q],Z[T],Z[P]);let wt=[],_t,Lt=gt.concat();for(let q=0,W=H;q<W;q++){let T=D[q];_t=[];for(let P=0,z=T.length,O=z-1,J=P+1;P<z;P++,O++,J++)O===z&&(O=0),J===z&&(J=0),_t[P]=tt(T[P],T[O],T[J]);wt.push(_t),Lt=Lt.concat(_t)}let Ut;if(d===0)Ut=Gn.triangulateShape(Z,D);else{let q=[],W=[];for(let T=0;T<d;T++){let P=T/d,z=m*Math.cos(P*Math.PI/2),O=x*Math.sin(P*Math.PI/2)+S;for(let J=0,et=Z.length;J<et;J++){let st=X(Z[J],gt[J],O);ft(st.x,st.y,-z),P===0&&q.push(st)}for(let J=0,et=H;J<et;J++){let st=D[J];_t=wt[J];let C=[];for(let M=0,k=st.length;M<k;M++){let Y=X(st[M],_t[M],O);ft(Y.x,Y.y,-z),P===0&&C.push(Y)}P===0&&W.push(C)}}Ut=Gn.triangulateShape(q,W)}let Bt=Ut.length,kt=x+S;for(let q=0;q<j;q++){let W=f?X(y[q],Lt[q],kt):y[q];v?(b.copy(R.normals[0]).multiplyScalar(W.x),A.copy(R.binormals[0]).multiplyScalar(W.y),I.copy(g[0]).add(b).add(A),ft(I.x,I.y,I.z)):ft(W.x,W.y,0)}for(let q=1;q<=u;q++)for(let W=0;W<j;W++){let T=f?X(y[W],Lt[W],kt):y[W];v?(b.copy(R.normals[q]).multiplyScalar(T.x),A.copy(R.binormals[q]).multiplyScalar(T.y),I.copy(g[q]).add(b).add(A),ft(I.x,I.y,I.z)):ft(T.x,T.y,l/u*q)}for(let q=d-1;q>=0;q--){let W=q/d,T=m*Math.cos(W*Math.PI/2),P=x*Math.sin(W*Math.PI/2)+S;for(let z=0,O=Z.length;z<O;z++){let J=X(Z[z],gt[z],P);ft(J.x,J.y,l+T)}for(let z=0,O=D.length;z<O;z++){let J=D[z];_t=wt[z];for(let et=0,st=J.length;et<st;et++){let C=X(J[et],_t[et],P);v?ft(C.x,C.y+g[u-1].y,g[u-1].x+T):ft(C.x,C.y,l+T)}}}ht(),G();function ht(){let q=s.length/3;if(f){let W=0,T=j*W;for(let P=0;P<Bt;P++){let z=Ut[P];ot(z[2]+T,z[1]+T,z[0]+T)}W=u+d*2,T=j*W;for(let P=0;P<Bt;P++){let z=Ut[P];ot(z[0]+T,z[1]+T,z[2]+T)}}else{for(let W=0;W<Bt;W++){let T=Ut[W];ot(T[2],T[1],T[0])}for(let W=0;W<Bt;W++){let T=Ut[W];ot(T[0]+j*u,T[1]+j*u,T[2]+j*u)}}n.addGroup(q,s.length/3-q,0)}function G(){let q=s.length/3,W=0;pt(Z,W),W+=Z.length;for(let T=0,P=D.length;T<P;T++){let z=D[T];pt(z,W),W+=z.length}n.addGroup(q,s.length/3-q,1)}function pt(q,W){let T=q.length;for(;--T>=0;){let P=T,z=T-1;z<0&&(z=q.length-1);for(let O=0,J=u+d*2;O<J;O++){let et=j*O,st=j*(O+1),C=W+P+et,M=W+z+et,k=W+z+st,Y=W+P+st;Tt(C,M,k,Y)}}}function ft(q,W,T){c.push(q),c.push(W),c.push(T)}function ot(q,W,T){Dt(q),Dt(W),Dt(T);let P=s.length/3,z=w.generateTopUV(n,s,P-3,P-2,P-1);E(z[0]),E(z[1]),E(z[2])}function Tt(q,W,T,P){Dt(q),Dt(W),Dt(P),Dt(W),Dt(T),Dt(P);let z=s.length/3,O=w.generateSideWallUV(n,s,z-6,z-3,z-2,z-1);E(O[0]),E(O[1]),E(O[3]),E(O[1]),E(O[2]),E(O[3])}function Dt(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function E(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,t.options)}},Yd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new It(r,a),new It(o,c),new It(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],l=t[n*3+2],f=t[s*3],m=t[s*3+1],x=t[s*3+2],S=t[r*3],d=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new It(a,1-c),new It(h,1-l),new It(f,1-x),new It(S,1-p)]:[new It(o,1-c),new It(u,1-l),new It(m,1-x),new It(d,1-p)]}};function Zd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends ye{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],h=[],u=1/e,l=new B,f=new It,m=new B,x=new B,S=new B,d=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:d=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,m.x=p*1,m.y=-d,m.z=p*0,S.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(S.x,S.y,S.z);break;default:d=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,m.x=p*1,m.y=-d,m.z=p*0,x.copy(m),m.x+=S.x,m.y+=S.y,m.z+=S.z,m.normalize(),c.push(m.x,m.y,m.z),S.copy(x)}for(let w=0;w<=e;w++){let g=n+w*u*s,v=Math.sin(g),R=Math.cos(g);for(let A=0;A<=t.length-1;A++){l.x=t[A].x*v,l.y=t[A].y,l.z=t[A].x*R,a.push(l.x,l.y,l.z),f.x=w/e,f.y=A/(t.length-1),o.push(f.x,f.y);let b=c[3*A+0]*v,I=c[3*A+1],_=c[3*A+0]*R;h.push(b,I,_)}}for(let w=0;w<e;w++)for(let g=0;g<t.length-1;g++){let v=g+w*t.length,R=v,A=v+t.length,b=v+t.length+1,I=v+1;r.push(R,A,I),r.push(b,I,A)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mi=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,l=t/o,f=e/c,m=[],x=[],S=[],d=[];for(let p=0;p<u;p++){let w=p*f-a;for(let g=0;g<h;g++){let v=g*l-r;x.push(v,-w,0),S.push(0,0,1),d.push(g/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){let g=w+h*p,v=w+h*(p+1),R=w+1+h*(p+1),A=w+1+h*p;m.push(g,v,A),m.push(v,R,A)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Vi=class i extends ye{constructor(t=new In([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function h(u){let l=s.length/3,f=u.extractPoints(e),m=f.shape,x=f.holes;Gn.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=x.length;d<p;d++){let w=x[d];Gn.isClockWise(w)===!0&&(x[d]=w.reverse())}let S=Gn.triangulateShape(m,x);for(let d=0,p=x.length;d<p;d++){let w=x[d];m=m.concat(w)}for(let d=0,p=m.length;d<p;d++){let w=m[d];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let d=0,p=S.length;d<p;d++){let w=S[d],g=w[0]+l,v=w[1]+l,R=w[2]+l;n.push(g,v,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Jd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ri=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],l=new B,f=new B,m=[],x=[],S=[],d=[];for(let p=0;p<=n;p++){let w=[],g=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let A=R/e;l.x=-t*Math.cos(s+A*r)*Math.sin(a+g*o),l.y=t*Math.cos(a+g*o),l.z=t*Math.sin(s+A*r)*Math.sin(a+g*o),x.push(l.x,l.y,l.z),f.copy(l).normalize(),S.push(f.x,f.y,f.z),d.push(A+v,1-g),w.push(h++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let g=u[p][w+1],v=u[p][w],R=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&m.push(g,v,A),(p!==n-1||c<Math.PI)&&m.push(v,R,A)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gi=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new B,l=new B,f=new B;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let S=x/s*r,d=m/n*Math.PI*2;l.x=(t+e*Math.cos(d))*Math.cos(S),l.y=(t+e*Math.cos(d))*Math.sin(S),l.z=e*Math.sin(d),o.push(l.x,l.y,l.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),f.subVectors(l,u).normalize(),c.push(f.x,f.y,f.z),h.push(x/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let S=(s+1)*m+x-1,d=(s+1)*(m-1)+x-1,p=(s+1)*(m-1)+x,w=(s+1)*m+x;a.push(S,d,w),a.push(d,p,w)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bi=class i extends ye{constructor(t=new Tr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,c=new B,h=new It,u=new B,l=[],f=[],m=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(m,2));function S(){for(let g=0;g<e;g++)d(g);d(r===!1?e:0),w(),p()}function d(g){u=t.getPointAt(g/e,u);let v=a.normals[g],R=a.binormals[g];for(let A=0;A<=s;A++){let b=A/s*Math.PI*2,I=Math.sin(b),_=-Math.cos(b);c.x=_*v.x+I*R.x,c.y=_*v.y+I*R.y,c.z=_*v.z+I*R.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,l.push(o.x,o.y,o.z)}}function p(){for(let g=1;g<=e;g++)for(let v=1;v<=s;v++){let R=(s+1)*(g-1)+(v-1),A=(s+1)*g+(v-1),b=(s+1)*g+v,I=(s+1)*(g-1)+v;x.push(R,A,I),x.push(A,b,I)}}function w(){for(let g=0;g<=e;g++)for(let v=0;v<=s;v++)h.x=g/e,h.y=v/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Dr=class extends qn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Pn=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Po=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Do=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,o=2*e-n;break;case Il:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:a=t,c=2*n-e;break;case Il:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,l=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),S=x*x,d=S*x,p=-f*d+2*f*S-f*x,w=(1+f)*d+(-1.5-2*f)*S+(-.5+f)*x+1,g=(-1-m)*d+(1.5+m)*S+.5*x,v=m*d-m*S;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+w*a[h+R]+g*a[c+R]+v*a[l+R];return r}},Uo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),l=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*l+a[c+f]*u;return r}},Fo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&$d(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let l=o*n,f=l-n,m=l+n;for(let x=0;x!==n;++x){let S=e[l+x];if(S!==e[f+x]||S!==e[m+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let l=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[l+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=vo;var Si=class extends Sn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ar;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="color";var Oo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="number";var Bo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Je.slerpFlat(r,0,a,h-o,a,h,c);return r}},Ur=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Sn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ar;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};zo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){let l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,f=h.length;l<f;l+=2){let m=h[l],x=h[l+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zh=new ko,Ho=class{constructor(t){this.manager=t!==void 0?t:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new _e,$c=new B,Kc=new B,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qc=new _e,er=new B,Al=new B,Nl=class extends Vo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),Al.copy(n.position),Al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Al),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,n.coordinateSystem,n.reversedDepth)}},Nr=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xi=class extends mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends Vo{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Go=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rc="\\[\\]\\.:\\/",Kd=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",Qd="[^"+rc.replace("\\.","")+"]",jd=/((?:WC+[\/:])*)/.source.replace("WC",oc),tf=/(WCOD+)?/.source.replace("WCOD",Qd),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),sf=new RegExp("^"+jd+tf+ef+nf+"$"),rf=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let e=sf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Bl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);var jc=new _e,oi=class{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(th),n}};function th(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}function ac(i,t,e,n){let s=of(n);switch(e){case $l:return i*t;case ra:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case La:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case Bn:case ql:return{byteLength:1,components:1};case Ls:case Yl:case Us:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case Ei:case na:case zn:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lf(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,l=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,h){let u=c.array,l=c.updateRanges;if(i.bindBuffer(h,o),l.length===0)i.bufferSubData(h,0,u);else{l.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<l.length;m++){let x=l[f],S=l[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,l[f]=S)}l.length=f+1;for(let m=0,x=l.length;m<x;m++){let S=l[m];i.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
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
}`,ie={alphahash_fragment:cf,alphahash_pars_fragment:hf,alphamap_fragment:uf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:xf,batching_vertex:_f,begin_vertex:yf,beginnormal_vertex:vf,bsdfs:Mf,iridescence_fragment:bf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Af,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:If,color_vertex:Pf,common:Df,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ep,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tp,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:ap,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:xp,map_particle_pars_fragment:_p,metalnessmap_fragment:yp,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:bp,morphnormal_vertex:Sp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Ip,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Np,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Qp,specularmap_pars_fragment:jp,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:xm,equirect_vert:_m,equirect_frag:ym,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:bm,meshbasic_frag:Sm,meshlambert_vert:wm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Im,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Nm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Hm},Nt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:nn([Nt.points,Nt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:nn([Nt.common,Nt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:nn([Nt.sprite,Nt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:nn([Nt.lights,Nt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ba={r:0,b:0,g:0},Ki=new Rn,Vm=new _e;function Gm(i,t,e,n,s,r,a){let o=new Xt(0),c=r===!0?0:1,h,u,l=null,f=0,m=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v)),v}function S(g){let v=!1,R=x(g);R===null?p(o,c):R&&R.isColor&&(p(R,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(g,v){let R=x(v);R&&(R.isCubeTexture||R.mapping===Or)?(u===void 0&&(u=new pe(new yi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:$i(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(v.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Ki)),u.material.toneMapped=de.getTransfer(R.colorSpace)!==xe,(l!==R||f!==R.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,l=R,f=R.version,m=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new pe(new Mi(2,2),new On({name:"BackgroundMaterial",uniforms:$i(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=de.getTransfer(R.colorSpace)!==xe,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(l!==R||f!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,l=R,f=R.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function p(g,v){g.getRGB(Ba,ic(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,v,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,p(o,c)},render:S,addToRenderList:d,dispose:w}}function Wm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,D,U,N,H){let Z=!1,X=l(N,U,D);r!==X&&(r=X,h(r.object)),Z=m(y,N,U,H),Z&&x(y,N,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(y,D,U,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function l(y,D,U){let N=U.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[D.id];Z===void 0&&(Z={},H[D.id]=Z);let X=Z[N];return X===void 0&&(X=f(c()),Z[N]=X),X}function f(y){let D=[],U=[],N=[];for(let H=0;H<e;H++)D[H]=0,U[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,D,U,N){let H=r.attributes,Z=D.attributes,X=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let wt=H[tt],_t=Z[tt];if(_t===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),wt===void 0||wt.attribute!==_t||_t&&wt.data!==_t.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function x(y,D,U,N){let H={},Z=D.attributes,X=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let wt=Z[tt];wt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor));let _t={};_t.attribute=wt,wt&&wt.data&&(_t.data=wt.data),H[tt]=_t,X++}r.attributes=H,r.attributesNum=X,r.index=N}function S(){let y=r.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function d(y){p(y,0)}function p(y,D){let U=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),H[y]!==D&&(i.vertexAttribDivisor(y,D),H[y]=D)}function w(){let y=r.newAttributes,D=r.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==y[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function g(y,D,U,N,H,Z,X){X===!0?i.vertexAttribIPointer(y,D,U,H,Z):i.vertexAttribPointer(y,D,U,N,H,Z)}function v(y,D,U,N){S();let H=N.attributes,Z=U.getAttributes(),X=D.defaultAttributeValues;for(let j in Z){let tt=Z[j];if(tt.location>=0){let gt=H[j];if(gt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){let wt=gt.normalized,_t=gt.itemSize,Lt=t.get(gt);if(Lt===void 0)continue;let Ut=Lt.buffer,Bt=Lt.type,kt=Lt.bytesPerElement,ht=Bt===i.INT||Bt===i.UNSIGNED_INT||gt.gpuType===na;if(gt.isInterleavedBufferAttribute){let G=gt.data,pt=G.stride,ft=gt.offset;if(G.isInstancedInterleavedBuffer){for(let ot=0;ot<tt.locationSize;ot++)p(tt.location+ot,G.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ot=0;ot<tt.locationSize;ot++)d(tt.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let ot=0;ot<tt.locationSize;ot++)g(tt.location+ot,_t/tt.locationSize,Bt,wt,pt*kt,(ft+_t/tt.locationSize*ot)*kt,ht)}else{if(gt.isInstancedBufferAttribute){for(let G=0;G<tt.locationSize;G++)p(tt.location+G,gt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let G=0;G<tt.locationSize;G++)d(tt.location+G);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let G=0;G<tt.locationSize;G++)g(tt.location+G,_t/tt.locationSize,Bt,wt,_t*kt,_t/tt.locationSize*G*kt,ht)}}else if(X!==void 0){let wt=X[j];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(tt.location,wt);break;case 3:i.vertexAttrib3fv(tt.location,wt);break;case 4:i.vertexAttrib4fv(tt.location,wt);break;default:i.vertexAttrib1fv(tt.location,wt)}}}}w()}function R(){I();for(let y in n){let D=n[y];for(let U in D){let N=D[U];for(let H in N)u(N[H].object),delete N[H];delete D[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let U in D){let N=D[U];for(let H in N)u(N[H].object),delete N[H];delete D[U]}delete n[y.id]}function b(y){for(let D in n){let U=n[D];if(U[y.id]===void 0)continue;let N=U[y.id];for(let H in N)u(N[H].object),delete N[H];delete U[y.id]}}function I(){_(),a=!0,r!==s&&(r=s,h(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:_,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:d,disableUnusedAttributes:w}}function Xm(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,l){l!==0&&(i.drawArraysInstanced(n,h,u,l),e.update(u,n,l))}function o(h,u,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,l);let m=0;for(let x=0;x<l;x++)m+=u[x];e.update(m,n,1)}function c(h,u,l,f){if(l===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h.length;x++)a(h[x],u[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,l);let x=0;for(let S=0;S<l;S++)x+=u[S]*f[S];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let I=b===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==zn&&!I)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let l=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:w,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function Ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){let m=l.length!==0||f||n!==0||s;return s=f,n=l.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=u(l,f,0)},this.setState=function(l,f,m){let x=l.clippingPlanes,S=l.clipIntersection,d=l.clipShadows,p=i.get(l);if(!s||x===null||x.length===0||r&&!d)r?u(null):h();else{let w=r?0:n,g=w*4,v=p.clippingState||null;c.value=v,v=u(x,f,g,m);for(let R=0;R!==g;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,f,m,x){let S=l!==null?l.length:0,d=null;if(S!==0){if(d=c.value,x!==!0||d===null){let p=m+S*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<p)&&(d=new Float32Array(p));for(let g=0,v=m;g!==S;++g,v+=4)a.copy(l[g]).applyMatrix4(w,o),a.normal.toArray(d,v),d[v+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,d}}function Zm(i){let t=new WeakMap;function e(a,o){return o===jo?a.mapping=Yi:o===ta&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jo||o===ta)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Eo(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=4,Jh=[.125,.215,.35,.446,.526,.582],ts=20,lc=new Xi,$h=new Xt,cc=null,hc=0,uc=0,dc=!1,ji=(1+Math.sqrt(5))/2,Bs=1/ji,Kh=[new B(-ji,Bs,0),new B(ji,Bs,0),new B(-Bs,0,ji),new B(Bs,0,ji),new B(0,ji,-Bs),new B(0,ji,Bs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Jm=new B,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jm}=r;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Us,format:mn,colorSpace:Oi,depthBuffer:!1},s=Qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Km(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s,r){let c=new ln(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,m=l.toneMapping;l.getClearColor($h),l.toneMapping=li,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let S=new si({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),d=new pe(new yi,S),p=!1,w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,p=!0):(S.color.copy($h),p=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(c.up.set(0,h[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[g],r.y,r.z)):v===1?(c.up.set(0,0,h[g]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[g],r.z)):(c.up.set(0,h[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[g]));let R=this._cubeSize;za(s,v*R,g>2?R:0,R,R),l.setRenderTarget(s),p&&l.render(d,c),l.render(t,c)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=m,l.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;za(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kh[(s-r-1)%Kh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new pe(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ts-1),S=r/x,d=isFinite(r)?1+Math.floor(u*S):ts;d>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ts}`);let p=[],w=0;for(let b=0;b<ts;++b){let I=b/S,_=Math.exp(-I*I/2);p.push(_),b===0?w+=_:b<d&&(w+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-n;let v=this._sizeLods[s],R=3*v*(s>g-zs?s-g+zs:0),A=4*(this._cubeSize-v);za(e,R,A,3*v,2*v),c.setRenderTarget(e),c.render(l,lc)}};function $m(i){let t=[],e=[],n=[],s=i,r=i-zs+1+Jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-zs?c=Jh[a-i+zs-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],m=6,x=6,S=3,d=2,p=1,w=new Float32Array(S*x*m),g=new Float32Array(d*x*m),v=new Float32Array(p*x*m);for(let A=0;A<m;A++){let b=A%3*2/3-1,I=A>2?0:-1,_=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];w.set(_,S*x*A),g.set(f,d*x*A);let y=[A,A,A,A,A,A];v.set(y,p*x*A)}let R=new ye;R.setAttribute("position",new Ge(w,S)),R.setAttribute("uv",new Ge(g,d)),R.setAttribute("faceIndex",new Ge(v,p)),t.push(R),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qh(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Km(i,t,e){let n=new Float32Array(ts),s=new B(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===jo||c===ta,u=c===Yi||c===Zi;if(h||u){let l=t.get(o),f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Hs(i)),l=h?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{let m=o.image;return h&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Hs(i)),l=h?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function t0(i,t,e,n){let s={},r=new WeakMap;function a(l){let f=l.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(l){let f=l.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function h(l){let f=[],m=l.index,x=l.attributes.position,S=0;if(m!==null){let w=m.array;S=m.version;for(let g=0,v=w.length;g<v;g+=3){let R=w[g+0],A=w[g+1],b=w[g+2];f.push(R,A,A,b,b,R)}}else if(x!==void 0){let w=x.array;S=x.version;for(let g=0,v=w.length/3-1;g<v;g+=3){let R=g+0,A=g+1,b=g+2;f.push(R,A,A,b,b,R)}}else return;let d=new(nc(f)?pr:fr)(f,1);d.version=S;let p=r.get(l);p&&t.remove(p),r.set(l,d)}function u(l){let f=r.get(l);if(f){let m=l.index;m!==null&&f.version<m.version&&h(l)}else h(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function e0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function h(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,f*a,x),e.update(m,n,x))}function u(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,x);let d=0;for(let p=0;p<x;p++)d+=m[p];e.update(d,n,1)}function l(f,m,x,S){if(x===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)h(f[p]/a,m[p],S[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,S,0,x);let p=0;for(let w=0;w<x;w++)p+=m[w]*S[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function n0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function i0(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==l){let _=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],g=0;m===!0&&(g=1),x===!0&&(g=2),S===!0&&(g=3);let v=o.attributes.position.count*g,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*R*4*l),b=new ur(A,v,R,l);b.type=zn,b.needsUpdate=!0;let I=g*4;for(let y=0;y<l;y++){let D=d[y],U=p[y],N=w[y],H=v*R*4*y;for(let Z=0;Z<D.count;Z++){let X=Z*I;m===!0&&(s.fromBufferAttribute(D,Z),A[H+X+0]=s.x,A[H+X+1]=s.y,A[H+X+2]=s.z,A[H+X+3]=0),x===!0&&(s.fromBufferAttribute(U,Z),A[H+X+4]=s.x,A[H+X+5]=s.y,A[H+X+6]=s.z,A[H+X+7]=0),S===!0&&(s.fromBufferAttribute(N,Z),A[H+X+8]=s.x,A[H+X+9]=s.y,A[H+X+10]=s.z,A[H+X+11]=N.itemSize===4?s.w:1)}}f={count:l,texture:b,size:new It(v,R)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let S=0;S<h.length;S++)m+=h[S];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function s0(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,l=t.get(c,u);if(s.get(l)!==h&&(t.update(l),s.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return l}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var yu=new pn,eu=new _r(1,1),vu=new ur,Mu=new So,bu=new gr,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),ou=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=iu[t];e===void 0&&(e=new Int32Array(t),iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),qe(e,n)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),qe(e,n)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),qe(e,n)}}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=jl,r=eu):r=yu,e.setTexture2D(t||r,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bu,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function w0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(i,t){i.uniform1fv(this.addr,t)}function T0(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function A0(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function R0(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function C0(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I0(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function U0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function N0(i,t){i.uniform1uiv(this.addr,t)}function O0(i,t){i.uniform2uiv(this.addr,t)}function B0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||yu,r[a])}function H0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function V0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bu,r[a])}function G0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vu,r[a])}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return N0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}var pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function au(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){au(e,h===void 0?new pc(o,i,t):new mc(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new gc(o),au(e,l)),e=l}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);X0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q0=37297,Y0=0;function Z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var cu=new Kt;function J0(i){de._getMatrix(cu,de.workingColorSpace,i);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Z0(i.getShaderSource(t),o)}else return r}function $0(i,t){let e=J0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(i,t){let e;switch(t){case Sh:e="Linear";break;case wh:e="Reinhard";break;case Eh:e="Cineon";break;case Th:e="ACESFilmic";break;case Rh:e="AgX";break;case Ds:e="Neutral";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ka=new B;function Q0(){de.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),t=ka.y.toFixed(4),e=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),t}function ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Zi&&(t="ENVMAP_MODE_REFRACTION"),t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ag(e),h=lg(e),u=cg(e),l=hg(e),f=ug(e),m=j0(e),x=tg(r),S=s.createProgram(),d,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(d=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ie.tonemapping_pars_fragment:"",e.toneMapping!==li?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=xc(a),a=uu(a,e),a=du(a,e),o=xc(o),o=uu(o,e),o=du(o,e),a=fu(a),o=fu(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=w+d+a,v=w+p+o,R=lu(s,s.VERTEX_SHADER,g),A=lu(s,s.FRAGMENT_SHADER,v);s.attachShader(S,R),s.attachShader(S,A),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function b(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(S)||"",N=s.getShaderInfoLog(R)||"",H=s.getShaderInfoLog(A)||"",Z=U.trim(),X=N.trim(),j=H.trim(),tt=!0,gt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,A);else{let wt=hu(s,R,"vertex"),_t=hu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+wt+`
`+_t)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||j==="")&&(gt=!1);gt&&(D.diagnostics={runnable:tt,programLog:Z,vertexShader:{log:X,prefix:d},fragmentShader:{log:j,prefix:p}})}s.deleteShader(R),s.deleteShader(A),I=new ks(s,S),_=eg(s,S)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(S,q0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}var fg=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yc(t),e.set(t,n)),n}},yc=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,a){let o=new Es,c=new _c,h=new Set,u=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return h.add(_),_===0?"uv":`uv${_}`}function d(_,y,D,U,N){let H=U.fog,Z=N.geometry,X=_.isMeshStandardMaterial?U.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),tt=j&&j.mapping===Or?j.image.height:null,gt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=wt!==void 0?wt.length:0,Lt=0;Z.morphAttributes.position!==void 0&&(Lt=1),Z.morphAttributes.normal!==void 0&&(Lt=2),Z.morphAttributes.color!==void 0&&(Lt=3);let Ut,Bt,kt,ht;if(gt){let Ot=Jn[gt];Ut=Ot.vertexShader,Bt=Ot.fragmentShader}else Ut=_.vertexShader,Bt=_.fragmentShader,c.update(_),kt=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);let G=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),ft=N.isInstancedMesh===!0,ot=N.isBatchedMesh===!0,Tt=!!_.map,Dt=!!_.matcap,E=!!j,q=!!_.aoMap,W=!!_.lightMap,T=!!_.bumpMap,P=!!_.normalMap,z=!!_.displacementMap,O=!!_.emissiveMap,J=!!_.metalnessMap,et=!!_.roughnessMap,st=_.anisotropy>0,C=_.clearcoat>0,M=_.dispersion>0,k=_.iridescence>0,Y=_.sheen>0,Q=_.transmission>0,V=st&&!!_.anisotropyMap,ut=C&&!!_.clearcoatMap,mt=C&&!!_.clearcoatNormalMap,Et=C&&!!_.clearcoatRoughnessMap,vt=k&&!!_.iridescenceMap,$=k&&!!_.iridescenceThicknessMap,yt=Y&&!!_.sheenColorMap,bt=Y&&!!_.sheenRoughnessMap,St=!!_.specularMap,Mt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,F=Q&&!!_.transmissionMap,rt=Q&&!!_.thicknessMap,ct=!!_.gradientMap,xt=!!_.alphaMap,dt=_.alphaTest>0,at=!!_.alphaHash,At=!!_.extensions,zt=li;_.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Qt={shaderID:gt,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:Bt,defines:_.defines,customVertexShaderID:kt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ot,batchingColor:ot&&N._colorsTexture!==null,instancing:ft,instancingColor:ft&&N.instanceColor!==null,instancingMorph:ft&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Oi,alphaToCoverage:!!_.alphaToCoverage,map:Tt,matcap:Dt,envMap:E,envMapMode:E&&j.mapping,envMapCubeUVHeight:tt,aoMap:q,lightMap:W,bumpMap:T,normalMap:P,displacementMap:f&&z,emissiveMap:O,normalMapObjectSpace:P&&_.normalMapType===Dh,normalMapTangentSpace:P&&_.normalMapType===Oa,metalnessMap:J,roughnessMap:et,anisotropy:st,anisotropyMap:V,clearcoat:C,clearcoatMap:ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:Et,dispersion:M,iridescence:k,iridescenceMap:vt,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:yt,sheenRoughnessMap:bt,specularMap:St,specularColorMap:Mt,specularIntensityMap:Rt,transmission:Q,transmissionMap:F,thicknessMap:rt,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Fi&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:dt,alphaHash:at,combine:_.combine,mapUv:Tt&&S(_.map.channel),aoMapUv:q&&S(_.aoMap.channel),lightMapUv:W&&S(_.lightMap.channel),bumpMapUv:T&&S(_.bumpMap.channel),normalMapUv:P&&S(_.normalMap.channel),displacementMapUv:z&&S(_.displacementMap.channel),emissiveMapUv:O&&S(_.emissiveMap.channel),metalnessMapUv:J&&S(_.metalnessMap.channel),roughnessMapUv:et&&S(_.roughnessMap.channel),anisotropyMapUv:V&&S(_.anisotropyMap.channel),clearcoatMapUv:ut&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&S(_.sheenRoughnessMap.channel),specularMapUv:St&&S(_.specularMap.channel),specularColorMapUv:Mt&&S(_.specularColorMap.channel),specularIntensityMapUv:Rt&&S(_.specularIntensityMap.channel),transmissionMapUv:F&&S(_.transmissionMap.channel),thicknessMapUv:rt&&S(_.thicknessMap.channel),alphaMapUv:xt&&S(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(P||st),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(Tt||xt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:O&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=h.has(1),Qt.vertexUv2s=h.has(2),Qt.vertexUv3s=h.has(3),h.clear(),Qt}function p(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(w(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let y=x[_.type],D;if(y){let U=Jn[y];D=Gh.clone(U.uniforms)}else D=_.uniforms;return D}function R(_,y){let D;for(let U=0,N=u.length;U<N;U++){let H=u[U];if(H.cacheKey===y){D=H,++D.usedTimes;break}}return D===void 0&&(D=new dg(i,y,_,r),u.push(D)),D}function A(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function I(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:I}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,f,m,x,S,d){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:f,material:m,groupOrder:x,renderOrder:l.renderOrder,z:S,group:d},i[t]=p):(p.id=l.id,p.object=l,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=l.renderOrder,p.z=S,p.group=d),t++,p}function o(l,f,m,x,S,d){let p=a(l,f,m,x,S,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(l,f,m,x,S,d){let p=a(l,f,m,x,S,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function h(l,f){e.length>1&&e.sort(l||gg),n.length>1&&n.sort(f||mu),s.length>1&&s.sort(f||mu)}function u(){for(let l=t,f=i.length;l<f;l++){let m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Xt};break;case"SpotLight":e={position:new B,direction:new B,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new _g,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);let s=new B,r=new _e,a=new _e;function o(h){let u=0,l=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let m=0,x=0,S=0,d=0,p=0,w=0,g=0,v=0,R=0,A=0,b=0;h.sort(Mg);for(let _=0,y=h.length;_<y;_++){let D=h[_],U=D.color,N=D.intensity,H=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*N,l+=U.g*N,f+=U.b*N;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],N);b++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(N),X.distance=H,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[S]=X;let j=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,j.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[S]=j.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=Z,v++}S++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(U).multiplyScalar(N),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[d]=X,d++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[x]=tt,n.pointShadowMap[x]=Z,n.pointShadowMatrix[x]=D.shadow.matrix,g++}n.point[x]=X,x++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(N),X.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==m||I.pointLength!==x||I.spotLength!==S||I.rectAreaLength!==d||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==g||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=d,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,I.directionalLength=m,I.pointLength=x,I.spotLength=S,I.rectAreaLength=d,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=g,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=b,n.version=vg++)}function c(h,u){let l=0,f=0,m=0,x=0,S=0,d=u.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){let g=h[p];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),l++}else if(g.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),m++}else if(g.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(g.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),f++}else if(g.isHemisphereLight){let v=n.hemi[S];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(d),S++}}}return{setup:o,setupView:c,state:n}}function xu(i){let t=new bg(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Sg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xu(i),t.set(s,[o])):r>=a.length?(o=new xu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wg=`void main() {
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
}`;function Tg(i,t,e){let n=new As,s=new It,r=new It,a=new ge,o=new Po({depthPacking:Ph}),c=new Do,h={},u=e.maxTextureSize,l={[ni]:$e,[$e]:ni,[hn]:hn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new ye;x.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new pe(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(A,b,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=p!==Yn&&this.type===Yn,H=p===Yn&&this.type!==Yn;for(let Z=0,X=A.length;Z<X;Z++){let j=A[Z],tt=j.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let gt=tt.getFrameExtents();if(s.multiply(gt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,tt.mapSize.y=r.y)),tt.map===null||N===!0||H===!0){let _t=this.type!==Yn?{minFilter:fn,magFilter:fn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Wn(s.x,s.y,_t),tt.map.texture.name=j.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let wt=tt.getViewportCount();for(let _t=0;_t<wt;_t++){let Lt=tt.getViewport(_t);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),U.viewport(a),tt.updateMatrices(j,_t),n=tt.getFrustum(),v(b,I,tt.camera,j,this.type)}tt.isPointLightShadow!==!0&&this.type===Yn&&w(tt,I),tt.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(_,y,D)};function w(A,b){let I=t.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,I,f,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,I,m,S,null)}function g(A,b,I,_){let y=null,D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let U=y.uuid,N=b.uuid,H=h[U];H===void 0&&(H={},h[U]=H);let Z=H[N];Z===void 0&&(Z=y.clone(),H[N]=Z,b.addEventListener("dispose",R)),y=Z}if(y.visible=b.visible,y.wireframe=b.wireframe,_===Yn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:l[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=I}return y}function v(A,b,I,_,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let N=t.update(A),H=A.material;if(Array.isArray(H)){let Z=N.groups;for(let X=0,j=Z.length;X<j;X++){let tt=Z[X],gt=H[tt.materialIndex];if(gt&&gt.visible){let wt=g(A,gt,_,y);A.onBeforeShadow(i,A,b,I,N,wt,tt),i.renderBufferDirect(I,null,N,wt,A,tt),A.onAfterShadow(i,A,b,I,N,wt,tt)}}}else if(H.visible){let Z=g(A,H,_,y);A.onBeforeShadow(i,A,b,I,N,Z,null),i.renderBufferDirect(I,null,N,Z,A,null),A.onAfterShadow(i,A,b,I,N,Z,null)}}let U=A.children;for(let N=0,H=U.length;N<H;N++)v(U[N],b,I,_,y)}function R(A){A.target.removeEventListener("dispose",R);for(let I in h){let _=h[I],y=A.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Ag={[Xo]:qo,[Yo]:$o,[Zo]:Ko,[Ni]:Jo,[qo]:Xo,[$o]:Yo,[Ko]:Zo,[Jo]:Ni};function Rg(i,t){function e(){let F=!1,rt=new ge,ct=null,xt=new ge(0,0,0,0);return{setMask:function(dt){ct!==dt&&!F&&(i.colorMask(dt,dt,dt,dt),ct=dt)},setLocked:function(dt){F=dt},setClear:function(dt,at,At,zt,Qt){Qt===!0&&(dt*=zt,at*=zt,At*=zt),rt.set(dt,at,At,zt),xt.equals(rt)===!1&&(i.clearColor(dt,at,At,zt),xt.copy(rt))},reset:function(){F=!1,ct=null,xt.set(-1,0,0,0)}}}function n(){let F=!1,rt=!1,ct=null,xt=null,dt=null;return{setReversed:function(at){if(rt!==at){let At=t.get("EXT_clip_control");at?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),rt=at;let zt=dt;dt=null,this.setClear(zt)}},getReversed:function(){return rt},setTest:function(at){at?G(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(at){ct!==at&&!F&&(i.depthMask(at),ct=at)},setFunc:function(at){if(rt&&(at=Ag[at]),xt!==at){switch(at){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=at}},setLocked:function(at){F=at},setClear:function(at){dt!==at&&(rt&&(at=1-at),i.clearDepth(at),dt=at)},reset:function(){F=!1,ct=null,xt=null,dt=null,rt=!1}}}function s(){let F=!1,rt=null,ct=null,xt=null,dt=null,at=null,At=null,zt=null,Qt=null;return{setTest:function(Ot){F||(Ot?G(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Ot){rt!==Ot&&!F&&(i.stencilMask(Ot),rt=Ot)},setFunc:function(Ot,Zt,ne){(ct!==Ot||xt!==Zt||dt!==ne)&&(i.stencilFunc(Ot,Zt,ne),ct=Ot,xt=Zt,dt=ne)},setOp:function(Ot,Zt,ne){(at!==Ot||At!==Zt||zt!==ne)&&(i.stencilOp(Ot,Zt,ne),at=Ot,At=Zt,zt=ne)},setLocked:function(Ot){F=Ot},setClear:function(Ot){Qt!==Ot&&(i.clearStencil(Ot),Qt=Ot)},reset:function(){F=!1,rt=null,ct=null,xt=null,dt=null,at=null,At=null,zt=null,Qt=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},l={},f=new WeakMap,m=[],x=null,S=!1,d=null,p=null,w=null,g=null,v=null,R=null,A=null,b=new Xt(0,0,0),I=0,_=!1,y=null,D=null,U=null,N=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=j>=2);let gt=null,wt={},_t=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ut=new ge().fromArray(_t),Bt=new ge().fromArray(Lt);function kt(F,rt,ct,xt){let dt=new Uint8Array(4),at=i.createTexture();i.bindTexture(F,at),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ct;At++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(rt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return at}let ht={};ht[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(Ni),T(!1),P(kl),G(i.CULL_FACE),q(ai);function G(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ft(F,rt){return l[F]!==rt?(i.bindFramebuffer(F,rt),l[F]=rt,F===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=rt),F===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function ot(F,rt){let ct=m,xt=!1;if(F){ct=f.get(rt),ct===void 0&&(ct=[],f.set(rt,ct));let dt=F.textures;if(ct.length!==dt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let at=0,At=dt.length;at<At;at++)ct[at]=i.COLOR_ATTACHMENT0+at;ct.length=dt.length,xt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ct)}function Tt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Dt={[_i]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Dt[oh]=i.MIN,Dt[ah]=i.MAX;let E={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function q(F,rt,ct,xt,dt,at,At,zt,Qt,Ot){if(F===ai){S===!0&&(pt(i.BLEND),S=!1);return}if(S===!1&&(G(i.BLEND),S=!0),F!==ih){if(F!==d||Ot!==_){if((p!==_i||v!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,v=_i),Ot)switch(F){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,g=null,R=null,A=null,b.set(0,0,0),I=0,d=F,_=Ot}return}dt=dt||rt,at=at||ct,At=At||xt,(rt!==p||dt!==v)&&(i.blendEquationSeparate(Dt[rt],Dt[dt]),p=rt,v=dt),(ct!==w||xt!==g||at!==R||At!==A)&&(i.blendFuncSeparate(E[ct],E[xt],E[at],E[At]),w=ct,g=xt,R=at,A=At),(zt.equals(b)===!1||Qt!==I)&&(i.blendColor(zt.r,zt.g,zt.b,Qt),b.copy(zt),I=Qt),d=F,_=!1}function W(F,rt){F.side===hn?pt(i.CULL_FACE):G(i.CULL_FACE);let ct=F.side===$e;rt&&(ct=!ct),T(ct),F.blending===Fi&&F.transparent===!1?q(ai):q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let xt=F.stencilWrite;o.setTest(xt),xt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),O(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function T(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function P(F){F!==eh?(G(i.CULL_FACE),F!==D&&(F===kl?i.cullFace(i.BACK):F===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=F}function z(F){F!==U&&(X&&i.lineWidth(F),U=F)}function O(F,rt,ct){F?(G(i.POLYGON_OFFSET_FILL),(N!==rt||H!==ct)&&(i.polygonOffset(rt,ct),N=rt,H=ct)):pt(i.POLYGON_OFFSET_FILL)}function J(F){F?G(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function et(F){F===void 0&&(F=i.TEXTURE0+Z-1),gt!==F&&(i.activeTexture(F),gt=F)}function st(F,rt,ct){ct===void 0&&(gt===null?ct=i.TEXTURE0+Z-1:ct=gt);let xt=wt[ct];xt===void 0&&(xt={type:void 0,texture:void 0},wt[ct]=xt),(xt.type!==F||xt.texture!==rt)&&(gt!==ct&&(i.activeTexture(ct),gt=ct),i.bindTexture(F,rt||ht[F]),xt.type=F,xt.texture=rt)}function C(){let F=wt[gt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(F){Ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function bt(F){Bt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Bt.copy(F))}function St(F,rt){let ct=h.get(rt);ct===void 0&&(ct=new WeakMap,h.set(rt,ct));let xt=ct.get(F);xt===void 0&&(xt=i.getUniformBlockIndex(rt,F.name),ct.set(F,xt))}function Mt(F,rt){let xt=h.get(rt).get(F);c.get(rt)!==xt&&(i.uniformBlockBinding(rt,xt,F.__bindingPointIndex),c.set(rt,xt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,wt={},l={},f=new WeakMap,m=[],x=null,S=!1,d=null,p=null,w=null,g=null,v=null,R=null,A=null,b=new Xt(0,0,0),I=0,_=!1,y=null,D=null,U=null,N=null,H=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:pt,bindFramebuffer:ft,drawBuffers:ot,useProgram:Tt,setBlending:q,setMaterial:W,setFlipSided:T,setCullFace:P,setLineWidth:z,setPolygonOffset:O,setScissorTest:J,activeTexture:et,bindTexture:st,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:vt,texImage3D:$,updateUBOMapping:St,uniformBlockBinding:Mt,texStorage2D:mt,texStorage3D:Et,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:V,compressedTexSubImage3D:ut,scissor:yt,viewport:bt,reset:Rt}}function Cg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,u=new WeakMap,l,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return m?new OffscreenCanvas(C,M):hr("canvas")}function S(C,M,k){let Y=1,Q=st(C);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let V=Math.floor(Y*Q.width),ut=Math.floor(Y*Q.height);l===void 0&&(l=x(V,ut));let mt=M?x(V,ut):l;return mt.width=V,mt.height=ut,mt.getContext("2d").drawImage(C,0,0,V,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+V+"x"+ut+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function d(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(C,M,k,Y,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=M;if(M===i.RED&&(k===i.FLOAT&&(V=i.R32F),k===i.HALF_FLOAT&&(V=i.R16F),k===i.UNSIGNED_BYTE&&(V=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.R8UI),k===i.UNSIGNED_SHORT&&(V=i.R16UI),k===i.UNSIGNED_INT&&(V=i.R32UI),k===i.BYTE&&(V=i.R8I),k===i.SHORT&&(V=i.R16I),k===i.INT&&(V=i.R32I)),M===i.RG&&(k===i.FLOAT&&(V=i.RG32F),k===i.HALF_FLOAT&&(V=i.RG16F),k===i.UNSIGNED_BYTE&&(V=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RG8UI),k===i.UNSIGNED_SHORT&&(V=i.RG16UI),k===i.UNSIGNED_INT&&(V=i.RG32UI),k===i.BYTE&&(V=i.RG8I),k===i.SHORT&&(V=i.RG16I),k===i.INT&&(V=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGB8UI),k===i.UNSIGNED_SHORT&&(V=i.RGB16UI),k===i.UNSIGNED_INT&&(V=i.RGB32UI),k===i.BYTE&&(V=i.RGB8I),k===i.SHORT&&(V=i.RGB16I),k===i.INT&&(V=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),k===i.UNSIGNED_INT&&(V=i.RGBA32UI),k===i.BYTE&&(V=i.RGBA8I),k===i.SHORT&&(V=i.RGBA16I),k===i.INT&&(V=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),M===i.RGBA){let ut=Q?lr:de.getTransfer(Y);k===i.FLOAT&&(V=i.RGBA32F),k===i.HALF_FLOAT&&(V=i.RGBA16F),k===i.UNSIGNED_BYTE&&(V=ut===xe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(C,M){let k;return C?M===null||M===Ei||M===Fs?k=i.DEPTH24_STENCIL8:M===zn?k=i.DEPTH32F_STENCIL8:M===Ls&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===Fs?k=i.DEPTH_COMPONENT24:M===zn?k=i.DEPTH_COMPONENT32F:M===Ls&&(k=i.DEPTH_COMPONENT16),k}function R(C,M){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function b(C){let M=C.target;M.removeEventListener("dispose",b),y(M)}function I(C){let M=n.get(C);if(M.__webglInit===void 0)return;let k=C.source,Y=f.get(k);if(Y){let Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(C),Object.keys(Y).length===0&&f.delete(k)}n.remove(C)}function _(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let k=C.source,Y=f.get(k);delete Y[M.__cacheKey],a.memory.textures--}function y(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=C.textures;for(let Y=0,Q=k.length;Y<Q;Y++){let V=n.get(k[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(C)}let D=0;function U(){D=0}function N(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function H(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){let k=n.get(C);if(C.isVideoTexture&&J(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(k,C,M);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function X(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ht(k,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function j(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ht(k,C,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function tt(C,M){let k=n.get(C);if(C.version>0&&k.__version!==C.version){G(k,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let gt={[vs]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},wt={[fn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},_t={[Lh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[jl]:i.LEQUAL,[Fh]:i.EQUAL,[Bh]:i.GEQUAL,[Nh]:i.GREATER,[Oh]:i.NOTEQUAL};function Lt(C,M){if(M.type===zn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===ea||M.magFilter===Br||M.magFilter===Zn||M.minFilter===Mn||M.minFilter===ea||M.minFilter===Br||M.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,gt[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,gt[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,gt[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==Br&&M.minFilter!==Zn||M.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let Y=M.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let V=H(M);if(V!==C.__cacheKey){Q[V]===void 0&&(Q[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[V].usedTimes++;let ut=Q[C.__cacheKey];ut!==void 0&&(Q[C.__cacheKey].usedTimes--,ut.usedTimes===0&&_(M)),C.__cacheKey=V,C.__webglTexture=Q[V].texture}return k}function Bt(C,M,k){return Math.floor(Math.floor(C/k)/M)}function kt(C,M,k,Y){let V=C.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,Y,M.data);else{V.sort(($,yt)=>$.start-yt.start);let ut=0;for(let $=1;$<V.length;$++){let yt=V[ut],bt=V[$],St=yt.start+yt.count,Mt=Bt(bt.start,M.width,4),Rt=Bt(yt.start,M.width,4);bt.start<=St+1&&Mt===Rt&&Bt(bt.start+bt.count-1,M.width,4)===Mt?yt.count=Math.max(yt.count,bt.start+bt.count-yt.start):(++ut,V[ut]=bt)}V.length=ut+1;let mt=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let $=0,yt=V.length;$<yt;$++){let bt=V[$],St=Math.floor(bt.start/4),Mt=Math.ceil(bt.count/4),Rt=St%M.width,F=Math.floor(St/M.width),rt=Mt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Rt,F,rt,ct,k,Y,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ht(C,M,k){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Ut(C,M),V=M.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+k);let ut=n.get(V);if(V.version!==ut.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);let mt=de.getPrimaries(de.workingColorSpace),Et=M.colorSpace===ci?null:de.getPrimaries(M.colorSpace),vt=M.colorSpace===ci||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let $=S(M.image,!1,s.maxTextureSize);$=et(M,$);let yt=r.convert(M.format,M.colorSpace),bt=r.convert(M.type),St=g(M.internalFormat,yt,bt,M.colorSpace,M.isVideoTexture);Lt(Y,M);let Mt,Rt=M.mipmaps,F=M.isVideoTexture!==!0,rt=ut.__version===void 0||Q===!0,ct=V.dataReady,xt=R(M,$);if(M.isDepthTexture)St=v(M.format===Ns,M.type),rt&&(F?e.texStorage2D(i.TEXTURE_2D,1,St,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,St,$.width,$.height,0,yt,bt,null));else if(M.isDataTexture)if(Rt.length>0){F&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,St,Rt[0].width,Rt[0].height);for(let dt=0,at=Rt.length;dt<at;dt++)Mt=Rt[dt],F?ct&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,yt,bt,Mt.data);M.generateMipmaps=!1}else F?(rt&&e.texStorage2D(i.TEXTURE_2D,xt,St,$.width,$.height),ct&&kt(M,$,yt,bt)):e.texImage2D(i.TEXTURE_2D,0,St,$.width,$.height,0,yt,bt,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,Rt[0].width,Rt[0].height,$.depth);for(let dt=0,at=Rt.length;dt<at;dt++)if(Mt=Rt[dt],M.format!==mn)if(yt!==null)if(F){if(ct)if(M.layerUpdates.size>0){let At=ac(Mt.width,Mt.height,M.format,M.type);for(let zt of M.layerUpdates){let Qt=Mt.data.subarray(zt*At/Mt.data.BYTES_PER_ELEMENT,(zt+1)*At/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,zt,Mt.width,Mt.height,1,yt,Qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,$.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,St,Mt.width,Mt.height,$.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,$.depth,yt,bt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,St,Mt.width,Mt.height,$.depth,0,yt,bt,Mt.data)}else{F&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,St,Rt[0].width,Rt[0].height);for(let dt=0,at=Rt.length;dt<at;dt++)Mt=Rt[dt],M.format!==mn?yt!==null?F?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ct&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,yt,bt,Mt.data)}else if(M.isDataArrayTexture)if(F){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,$.width,$.height,$.depth),ct)if(M.layerUpdates.size>0){let dt=ac($.width,$.height,M.format,M.type);for(let at of M.layerUpdates){let At=$.data.subarray(at*dt/$.data.BYTES_PER_ELEMENT,(at+1)*dt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,$.width,$.height,1,yt,bt,At)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,$.width,$.height,$.depth,0,yt,bt,$.data);else if(M.isData3DTexture)F?(rt&&e.texStorage3D(i.TEXTURE_3D,xt,St,$.width,$.height,$.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)):e.texImage3D(i.TEXTURE_3D,0,St,$.width,$.height,$.depth,0,yt,bt,$.data);else if(M.isFramebufferTexture){if(rt)if(F)e.texStorage2D(i.TEXTURE_2D,xt,St,$.width,$.height);else{let dt=$.width,at=$.height;for(let At=0;At<xt;At++)e.texImage2D(i.TEXTURE_2D,At,St,dt,at,0,yt,bt,null),dt>>=1,at>>=1}}else if(Rt.length>0){if(F&&rt){let dt=st(Rt[0]);e.texStorage2D(i.TEXTURE_2D,xt,St,dt.width,dt.height)}for(let dt=0,at=Rt.length;dt<at;dt++)Mt=Rt[dt],F?ct&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,yt,bt,Mt):e.texImage2D(i.TEXTURE_2D,dt,St,yt,bt,Mt);M.generateMipmaps=!1}else if(F){if(rt){let dt=st($);e.texStorage2D(i.TEXTURE_2D,xt,St,dt.width,dt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,bt,$)}else e.texImage2D(i.TEXTURE_2D,0,St,yt,bt,$);d(M)&&p(Y),ut.__version=V.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,k){if(M.image.length!==6)return;let Y=Ut(C,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let V=n.get(Q);if(Q.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let ut=de.getPrimaries(de.workingColorSpace),mt=M.colorSpace===ci?null:de.getPrimaries(M.colorSpace),Et=M.colorSpace===ci||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let vt=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!vt&&!$?yt[at]=S(M.image[at],!0,s.maxCubemapSize):yt[at]=$?M.image[at].image:M.image[at],yt[at]=et(M,yt[at]);let bt=yt[0],St=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Rt=g(M.internalFormat,St,Mt,M.colorSpace),F=M.isVideoTexture!==!0,rt=V.__version===void 0||Y===!0,ct=Q.dataReady,xt=R(M,bt);Lt(i.TEXTURE_CUBE_MAP,M);let dt;if(vt){F&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Rt,bt.width,bt.height);for(let at=0;at<6;at++){dt=yt[at].mipmaps;for(let At=0;At<dt.length;At++){let zt=dt[At];M.format!==mn?St!==null?F?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,zt.width,zt.height,St,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Rt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,zt.width,zt.height,St,Mt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Rt,zt.width,zt.height,0,St,Mt,zt.data)}}}else{if(dt=M.mipmaps,F&&rt){dt.length>0&&xt++;let at=st(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Rt,at.width,at.height)}for(let at=0;at<6;at++)if($){F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,St,Mt,yt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Rt,yt[at].width,yt[at].height,0,St,Mt,yt[at].data);for(let At=0;At<dt.length;At++){let Qt=dt[At].image[at].image;F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Qt.width,Qt.height,St,Mt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Rt,Qt.width,Qt.height,0,St,Mt,Qt.data)}}else{F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,St,Mt,yt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Rt,St,Mt,yt[at]);for(let At=0;At<dt.length;At++){let zt=dt[At];F?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,St,Mt,zt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Rt,St,Mt,zt.image[at])}}}d(M)&&p(i.TEXTURE_CUBE_MAP),V.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function pt(C,M,k,Y,Q,V){let ut=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),Et=g(k.internalFormat,ut,mt,k.colorSpace),vt=n.get(M),$=n.get(k);if($.__renderTarget=M,!vt.__hasExternalTextures){let yt=Math.max(1,M.width>>V),bt=Math.max(1,M.height>>V);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,V,Et,yt,bt,M.depth,0,ut,mt,null):e.texImage2D(Q,V,Et,yt,bt,0,ut,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),O(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,$.__webglTexture,0,z(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,$.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,V=v(M.stencilBuffer,Q),ut=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=z(M);O(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,V,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,V,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,V,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,C)}else{let Y=M.textures;for(let Q=0;Q<Y.length;Q++){let V=Y[Q],ut=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),Et=g(V.internalFormat,ut,mt,V.colorSpace),vt=z(M);k&&O(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Et,M.width,M.height):O(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,Et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let Q=Y.__webglTexture,V=z(M);if(M.depthTexture.format===Ms)O(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ns)O(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(C){let M=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Y=C.texture.mipmaps;Y&&Y.length>0?ot(M.__webglFramebuffer[0],C):ot(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[Y],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,V)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,M,k){let Y=n.get(C);M!==void 0&&pt(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Tt(C)}function E(C){let M=C.texture,k=n.get(C),Y=n.get(M);C.addEventListener("dispose",b);let Q=C.textures,V=C.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)k.__webglFramebuffer[mt][Et]=i.createFramebuffer()}else k.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)k.__webglFramebuffer[mt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ut)for(let mt=0,Et=Q.length;mt<Et;mt++){let vt=n.get(Q[mt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&O(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<Q.length;mt++){let Et=Q[mt];k.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let vt=r.convert(Et.format,Et.colorSpace),$=r.convert(Et.type),yt=g(Et.internalFormat,vt,$,Et.colorSpace,C.isXRRenderTarget===!0),bt=z(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)pt(k.__webglFramebuffer[mt][Et],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else pt(k.__webglFramebuffer[mt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);d(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let mt=0,Et=Q.length;mt<Et;mt++){let vt=Q[mt],$=n.get(vt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,$.__webglTexture),Lt(yt,vt),pt(k.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+mt,yt,0),d(vt)&&p(yt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Y.__webglTexture),Lt(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)pt(k.__webglFramebuffer[Et],C,M,i.COLOR_ATTACHMENT0,mt,Et);else pt(k.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,mt,0);d(M)&&p(mt),e.unbindTexture()}C.depthBuffer&&Tt(C)}function q(C){let M=C.textures;for(let k=0,Y=M.length;k<Y;k++){let Q=M[k];if(d(Q)){let V=w(C),ut=n.get(Q).__webglTexture;e.bindTexture(V,ut),p(V),e.unbindTexture()}}}let W=[],T=[];function P(C){if(C.samples>0){if(O(C)===!1){let M=C.textures,k=C.width,Y=C.height,Q=i.COLOR_BUFFER_BIT,V=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(C),mt=M.length>1;if(mt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let $=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,i.NEAREST),c===!0&&(W.length=0,T.length=0,W.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(W.push(V),T.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let $=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function z(C){return Math.min(s.maxSamples,C.samples)}function O(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function J(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function et(C,M){let k=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Oi&&k!==ci&&(de.getTransfer(k)===xe?(Y!==mn||Q!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=Dt,this.setupRenderTarget=E,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=O}function Ig(i,t){function e(n,s=ci){let r,a=de.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Kl)return i.RGB;if(n===mn)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Pa||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ua||n===Fa||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pg=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Pg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,l=null,f=null,m=null,x=null,S=typeof XRWebGLBinding<"u",d=new vc,p={},w=e.getContextAttributes(),g=null,v=null,R=[],A=[],b=new It,I=null,_=new ln;_.viewport=new ge;let y=new ln;y.viewport=new ge;let D=[_,y],U=new Go,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let G=R[ht];return G===void 0&&(G=new Ts,R[ht]=G),G.getTargetRaySpace()},this.getControllerGrip=function(ht){let G=R[ht];return G===void 0&&(G=new Ts,R[ht]=G),G.getGripSpace()},this.getHand=function(ht){let G=R[ht];return G===void 0&&(G=new Ts,R[ht]=G),G.getHandSpace()};function Z(ht){let G=A.indexOf(ht.inputSource);if(G===-1)return;let pt=R[G];pt!==void 0&&(pt.update(ht.inputSource,ht.frame,h||a),pt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let ht=0;ht<R.length;ht++){let G=A[ht];G!==null&&(A[ht]=null,R[ht].disconnect(G))}N=null,H=null,d.reset();for(let ht in p)delete p[ht];t.setRenderTarget(g),m=null,f=null,l=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){o=ht,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ht){h=ht},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return l===null&&S&&(l=new XRWebGLBinding(s,e)),l},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(b),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,ft=null,ot=null;w.depth&&(ot=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?Ns:Ms,ft=w.stencil?Fs:Ei);let Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};l=this.getBinding(),f=l.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Wn(f.textureWidth,f.textureHeight,{format:mn,type:Bn,depthTexture:new _r(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Wn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function j(ht){for(let G=0;G<ht.removed.length;G++){let pt=ht.removed[G],ft=A.indexOf(pt);ft>=0&&(A[ft]=null,R[ft].disconnect(pt))}for(let G=0;G<ht.added.length;G++){let pt=ht.added[G],ft=A.indexOf(pt);if(ft===-1){for(let Tt=0;Tt<R.length;Tt++)if(Tt>=A.length){A.push(pt),ft=Tt;break}else if(A[Tt]===null){A[Tt]=pt,ft=Tt;break}if(ft===-1)break}let ot=R[ft];ot&&ot.connect(pt)}}let tt=new B,gt=new B;function wt(ht,G,pt){tt.setFromMatrixPosition(G.matrixWorld),gt.setFromMatrixPosition(pt.matrixWorld);let ft=tt.distanceTo(gt),ot=G.projectionMatrix.elements,Tt=pt.projectionMatrix.elements,Dt=ot[14]/(ot[10]-1),E=ot[14]/(ot[10]+1),q=(ot[9]+1)/ot[5],W=(ot[9]-1)/ot[5],T=(ot[8]-1)/ot[0],P=(Tt[8]+1)/Tt[0],z=Dt*T,O=Dt*P,J=ft/(-T+P),et=J*-T;if(G.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(et),ht.translateZ(J),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),ot[10]===-1)ht.projectionMatrix.copy(G.projectionMatrix),ht.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let st=Dt+J,C=E+J,M=z-et,k=O+(ft-et),Y=q*E/C*st,Q=W*E/C*st;ht.projectionMatrix.makePerspective(M,k,Y,Q,st,C),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function _t(ht,G){G===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(G.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let G=ht.near,pt=ht.far;d.texture!==null&&(d.depthNear>0&&(G=d.depthNear),d.depthFar>0&&(pt=d.depthFar)),U.near=y.near=_.near=G,U.far=y.far=_.far=pt,(N!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,H=U.far),U.layers.mask=ht.layers.mask|6,_.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let ft=ht.parent,ot=U.cameras;_t(U,ft);for(let Tt=0;Tt<ot.length;Tt++)_t(ot[Tt],ft);ot.length===2?wt(U,_,y):U.projectionMatrix.copy(_.projectionMatrix),Lt(ht,U,ft)};function Lt(ht,G,pt){pt===null?ht.matrix.copy(G.matrixWorld):(ht.matrix.copy(pt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(G.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(G.projectionMatrix),ht.projectionMatrixInverse.copy(G.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=bs*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(ht){c=ht,f!==null&&(f.fixedFoveation=ht),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ht)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(ht){return p[ht]};let Ut=null;function Bt(ht,G){if(u=G.getViewerPose(h||a),x=G,u!==null){let pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let ft=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,ft=!0);for(let E=0;E<pt.length;E++){let q=pt[E],W=null;if(m!==null)W=m.getViewport(q);else{let P=l.getViewSubImage(f,q);W=P.viewport,E===0&&(t.setRenderTargetTextures(v,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(v))}let T=D[E];T===void 0&&(T=new ln,T.layers.enable(E),T.viewport=new ge,D[E]=T),T.matrix.fromArray(q.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(q.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(W.x,W.y,W.width,W.height),E===0&&(U.matrix.copy(T.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ft===!0&&U.cameras.push(T)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){l=n.getBinding();let E=l.getDepthInformation(pt[0]);E&&E.isValid&&E.texture&&d.init(E,s.renderState)}if(ot&&ot.includes("camera-access")&&S){t.state.unbindTexture(),l=n.getBinding();for(let E=0;E<pt.length;E++){let q=pt[E].camera;if(q){let W=p[q];W||(W=new yr,p[q]=W);let T=l.getCameraImage(q);W.sourceTexture=T}}}}for(let pt=0;pt<R.length;pt++){let ft=A[pt],ot=R[pt];ft!==null&&ot!==void 0&&ot.update(ft,G,h||a)}Ut&&Ut(ht,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),x=null}let kt=new _u;kt.setAnimationLoop(Bt),this.setAnimationLoop=function(ht){Ut=ht},this.dispose=function(){}}},Qi=new Rn,Lg=new _e;function Ug(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,ic(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,w,g,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),l(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),x(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),S(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,w,g):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===$e&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===$e&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let w=t.get(p),g=w.envMap,v=w.envMapRotation;g&&(d.envMap.value=g,Qi.copy(v),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),d.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(Qi)),d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,w,g){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*w,d.scale.value=g*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function l(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,w){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,p){p.matcap&&(d.matcap.value=p.matcap)}function S(d,p){let w=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,g){let v=g.program;n.uniformBlockBinding(w,v)}function h(w,g){let v=s[w.id];v===void 0&&(x(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",d));let R=g.program;n.updateUBOMapping(w,R);let A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){let g=l();w.__bindingPointIndex=g;let v=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v}function l(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let g=s[w.id],v=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let A=0,b=v.length;A<b;A++){let I=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,y=I.length;_<y;_++){let D=I[_];if(m(D,A,_,R)===!0){let U=D.__offset,N=Array.isArray(D.value)?D.value:[D.value],H=0;for(let Z=0;Z<N.length;Z++){let X=N[Z],j=S(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+H,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,g,v,R){let A=w.value,b=g+"_"+v;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{let I=R[b];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[b]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function x(w){let g=w.uniforms,v=0,R=16;for(let b=0,I=g.length;b<I;b++){let _=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,D=_.length;y<D;y++){let U=_[y],N=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Z=N.length;H<Z;H++){let X=N[H],j=S(X),tt=v%R,gt=tt%j.boundary,wt=tt+gt;v+=gt,wt!==0&&R-wt<j.storage&&(v+=R-wt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}let A=v%R;return A>0&&(v+=R-A),w.__size=v,w.__cache={},this}function S(w){let g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function d(w){let g=w.target;g.removeEventListener("dispose",d);let v=a.indexOf(g.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}var Ha=class{constructor(t={}){let{canvas:e=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=new Uint32Array(4),S=new Int32Array(4),d=null,p=null,w=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,R=!1;this._outputColorSpace=an;let A=0,b=0,I=null,_=-1,y=null,D=new ge,U=new ge,N=null,H=new Xt(0),Z=0,X=e.width,j=e.height,tt=1,gt=null,wt=null,_t=new ge(0,0,X,j),Lt=new ge(0,0,X,j),Ut=!1,Bt=new As,kt=!1,ht=!1,G=new _e,pt=new B,ft=new ge,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Dt(){return I===null?tt:1}let E=n;function q(L,K){return e.getContext(L,K)}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),E===null){let K="webgl2";if(E=q(K,L),E===null)throw q(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let W,T,P,z,O,J,et,st,C,M,k,Y,Q,V,ut,mt,Et,vt,$,yt,bt,St,Mt,Rt;function F(){W=new jm(E),W.init(),St=new Ig(E,W),T=new qm(E,W,t,St),P=new Rg(E,W),T.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),z=new n0(E),O=new mg,J=new Cg(E,W,P,O,T,St,z),et=new Zm(v),st=new Qm(v),C=new lf(E),Mt=new Wm(E,C),M=new t0(E,C,z,Mt),k=new s0(E,M,C,z),$=new i0(E,T,J),mt=new Ym(O),Y=new pg(v,et,st,W,T,Mt,mt),Q=new Ug(v,O),V=new xg,ut=new Sg(W),vt=new Gm(v,et,st,P,k,m,c),Et=new Tg(v,k,T),Rt=new Fg(E,z,T,P),yt=new Xm(E,W,z),bt=new e0(E,W,z),z.programs=Y.programs,v.capabilities=T,v.extensions=W,v.properties=O,v.renderLists=V,v.shadowMap=Et,v.state=P,v.info=z}F();let rt=new Mc(v,E);this.xr=rt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let L=W.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=W.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(L){L!==void 0&&(tt=L,this.setSize(X,j,!1))},this.getSize=function(L){return L.set(X,j)},this.setSize=function(L,K,it=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=L,j=K,e.width=Math.floor(L*tt),e.height=Math.floor(K*tt),it===!0&&(e.style.width=L+"px",e.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(X*tt,j*tt).floor()},this.setDrawingBufferSize=function(L,K,it){X=L,j=K,tt=it,e.width=Math.floor(L*it),e.height=Math.floor(K*it),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(_t)},this.setViewport=function(L,K,it,lt){L.isVector4?_t.set(L.x,L.y,L.z,L.w):_t.set(L,K,it,lt),P.viewport(D.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(L){return L.copy(Lt)},this.setScissor=function(L,K,it,lt){L.isVector4?Lt.set(L.x,L.y,L.z,L.w):Lt.set(L,K,it,lt),P.scissor(U.copy(Lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(L){P.setScissorTest(Ut=L)},this.setOpaqueSort=function(L){gt=L},this.setTransparentSort=function(L){wt=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(L=!0,K=!0,it=!0){let lt=0;if(L){let nt=!1;if(I!==null){let Ct=I.texture.format;nt=Ct===la||Ct===aa||Ct===oa}if(nt){let Ct=I.texture.type,Pt=Ct===Bn||Ct===Ei||Ct===Ls||Ct===Fs||Ct===ia||Ct===sa,Ht=vt.getClearColor(),Ft=vt.getClearAlpha(),Gt=Ht.r,Wt=Ht.g,Vt=Ht.b;Pt?(x[0]=Gt,x[1]=Wt,x[2]=Vt,x[3]=Ft,E.clearBufferuiv(E.COLOR,0,x)):(S[0]=Gt,S[1]=Wt,S[2]=Vt,S[3]=Ft,E.clearBufferiv(E.COLOR,0,S))}else lt|=E.COLOR_BUFFER_BIT}K&&(lt|=E.DEPTH_BUFFER_BIT),it&&(lt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),vt.dispose(),V.dispose(),ut.dispose(),O.dispose(),et.dispose(),st.dispose(),k.dispose(),Mt.dispose(),Rt.dispose(),Y.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ne),rt.removeEventListener("sessionend",ee),fe.stop()};function ct(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let L=z.autoReset,K=Et.enabled,it=Et.autoUpdate,lt=Et.needsUpdate,nt=Et.type;F(),z.autoReset=L,Et.enabled=K,Et.autoUpdate=it,Et.needsUpdate=lt,Et.type=nt}function dt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function at(L){let K=L.target;K.removeEventListener("dispose",at),At(K)}function At(L){zt(L),O.remove(L)}function zt(L){let K=O.get(L).programs;K!==void 0&&(K.forEach(function(it){Y.releaseProgram(it)}),L.isShaderMaterial&&Y.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,it,lt,nt,Ct){K===null&&(K=ot);let Pt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ht=Ye(L,K,it,lt,nt);P.setMaterial(lt,Pt);let Ft=it.index,Gt=1;if(lt.wireframe===!0){if(Ft=M.getWireframeAttribute(it),Ft===void 0)return;Gt=2}let Wt=it.drawRange,Vt=it.attributes.position,jt=Wt.start*Gt,ce=(Wt.start+Wt.count)*Gt;Ct!==null&&(jt=Math.max(jt,Ct.start*Gt),ce=Math.min(ce,(Ct.start+Ct.count)*Gt)),Ft!==null?(jt=Math.max(jt,0),ce=Math.min(ce,Ft.count)):Vt!=null&&(jt=Math.max(jt,0),ce=Math.min(ce,Vt.count));let Jt=ce-jt;if(Jt<0||Jt===1/0)return;Mt.setup(nt,lt,Ht,it,Ft);let $t,te=yt;if(Ft!==null&&($t=C.get(Ft),te=bt,te.setIndex($t)),nt.isMesh)lt.wireframe===!0?(P.setLineWidth(lt.wireframeLinewidth*Dt()),te.setMode(E.LINES)):te.setMode(E.TRIANGLES);else if(nt.isLine){let qt=lt.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*Dt()),nt.isLineSegments?te.setMode(E.LINES):nt.isLineLoop?te.setMode(E.LINE_LOOP):te.setMode(E.LINE_STRIP)}else nt.isPoints?te.setMode(E.POINTS):nt.isSprite&&te.setMode(E.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))te.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let qt=nt._multiDrawStarts,me=nt._multiDrawCounts,re=nt._multiDrawCount,ze=Ft?C.get(Ft).bytesPerElement:1,Te=O.get(lt).currentProgram.getUniforms();for(let le=0;le<re;le++)Te.setValue(E,"_gl_DrawID",le),te.render(qt[le]/ze,me[le])}else if(nt.isInstancedMesh)te.renderInstances(jt,Jt,nt.count);else if(it.isInstancedBufferGeometry){let qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,me=Math.min(it.instanceCount,qt);te.renderInstances(jt,Jt,me)}else te.render(jt,Jt)};function Qt(L,K,it){L.transparent===!0&&L.side===hn&&L.forceSinglePass===!1?(L.side=$e,L.needsUpdate=!0,se(L,K,it),L.side=ni,L.needsUpdate=!0,se(L,K,it),L.side=hn):se(L,K,it)}this.compile=function(L,K,it=null){it===null&&(it=L),p=ut.get(it),p.init(K),g.push(p),it.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),L!==it&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights();let lt=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Ct=nt.material;if(Ct)if(Array.isArray(Ct))for(let Pt=0;Pt<Ct.length;Pt++){let Ht=Ct[Pt];Qt(Ht,it,nt),lt.add(Ht)}else Qt(Ct,it,nt),lt.add(Ct)}),p=g.pop(),lt},this.compileAsync=function(L,K,it=null){let lt=this.compile(L,K,it);return new Promise(nt=>{function Ct(){if(lt.forEach(function(Pt){O.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){nt(L);return}setTimeout(Ct,10)}W.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ot=null;function Zt(L){Ot&&Ot(L)}function ne(){fe.stop()}function ee(){fe.start()}let fe=new _u;fe.setAnimationLoop(Zt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(L){Ot=L,rt.setAnimationLoop(L),L===null?fe.stop():fe.start()},rt.addEventListener("sessionstart",ne),rt.addEventListener("sessionend",ee),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(K),K=rt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,K,I),p=ut.get(L,g.length),p.init(K),g.push(p),G.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Bt.setFromProjectionMatrix(G,Nn,K.reversedDepth),ht=this.localClippingEnabled,kt=mt.init(this.clippingPlanes,ht),d=V.get(L,w.length),d.init(),w.push(d),rt.enabled===!0&&rt.isPresenting===!0){let Ct=v.xr.getDepthSensingMesh();Ct!==null&&ue(Ct,K,-1/0,v.sortObjects)}ue(L,K,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(gt,wt),Tt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Tt&&vt.addToRenderList(d,L),this.info.render.frame++,kt===!0&&mt.beginShadows();let it=p.state.shadowsArray;Et.render(it,L,K),kt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=d.opaque,nt=d.transmissive;if(p.setupLights(),K.isArrayCamera){let Ct=K.cameras;if(nt.length>0)for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Ft=Ct[Pt];Be(lt,nt,L,Ft)}Tt&&vt.render(L);for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Ft=Ct[Pt];Me(d,L,Ft,Ft.viewport)}}else nt.length>0&&Be(lt,nt,L,K),Tt&&vt.render(L),Me(d,L,K);I!==null&&b===0&&(J.updateMultisampleRenderTarget(I),J.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(v,L,K),Mt.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?(p=g[g.length-1],kt===!0&&mt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function ue(L,K,it,lt){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)it=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Bt.intersectsSprite(L)){lt&&ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(G);let Pt=k.update(L),Ht=L.material;Ht.visible&&d.push(L,Pt,Ht,it,ft.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Bt.intersectsObject(L))){let Pt=k.update(L),Ht=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ft.copy(L.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ft.copy(Pt.boundingSphere.center)),ft.applyMatrix4(L.matrixWorld).applyMatrix4(G)),Array.isArray(Ht)){let Ft=Pt.groups;for(let Gt=0,Wt=Ft.length;Gt<Wt;Gt++){let Vt=Ft[Gt],jt=Ht[Vt.materialIndex];jt&&jt.visible&&d.push(L,Pt,jt,it,ft.z,Vt)}}else Ht.visible&&d.push(L,Pt,Ht,it,ft.z,null)}}let Ct=L.children;for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++)ue(Ct[Pt],K,it,lt)}function Me(L,K,it,lt){let nt=L.opaque,Ct=L.transmissive,Pt=L.transparent;p.setupLightsView(it),kt===!0&&mt.setGlobalState(v.clippingPlanes,it),lt&&P.viewport(D.copy(lt)),nt.length>0&&Ce(nt,K,it),Ct.length>0&&Ce(Ct,K,it),Pt.length>0&&Ce(Pt,K,it),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Be(L,K,it,lt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new Wn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Us:Bn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let Ct=p.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||D;Ct.setSize(Pt.z*v.transmissionResolutionScale,Pt.w*v.transmissionResolutionScale);let Ht=v.getRenderTarget(),Ft=v.getActiveCubeFace(),Gt=v.getActiveMipmapLevel();v.setRenderTarget(Ct),v.getClearColor(H),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Tt&&vt.render(it);let Wt=v.toneMapping;v.toneMapping=li;let Vt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),kt===!0&&mt.setGlobalState(v.clippingPlanes,lt),Ce(L,it,lt),J.updateMultisampleRenderTarget(Ct),J.updateRenderTargetMipmap(Ct),W.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ce=0,Jt=K.length;ce<Jt;ce++){let $t=K[ce],te=$t.object,qt=$t.geometry,me=$t.material,re=$t.group;if(me.side===hn&&te.layers.test(lt.layers)){let ze=me.side;me.side=$e,me.needsUpdate=!0,ae(te,it,lt,qt,me,re),me.side=ze,me.needsUpdate=!0,jt=!0}}jt===!0&&(J.updateMultisampleRenderTarget(Ct),J.updateRenderTargetMipmap(Ct))}v.setRenderTarget(Ht,Ft,Gt),v.setClearColor(H,Z),Vt!==void 0&&(lt.viewport=Vt),v.toneMapping=Wt}function Ce(L,K,it){let lt=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,Ct=L.length;nt<Ct;nt++){let Pt=L[nt],Ht=Pt.object,Ft=Pt.geometry,Gt=Pt.group,Wt=Pt.material;Wt.allowOverride===!0&&lt!==null&&(Wt=lt),Ht.layers.test(it.layers)&&ae(Ht,K,it,Ft,Wt,Gt)}}function ae(L,K,it,lt,nt,Ct){L.onBeforeRender(v,K,it,lt,nt,Ct),L.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(v,K,it,lt,L,Ct),nt.transparent===!0&&nt.side===hn&&nt.forceSinglePass===!1?(nt.side=$e,nt.needsUpdate=!0,v.renderBufferDirect(it,K,lt,nt,L,Ct),nt.side=ni,nt.needsUpdate=!0,v.renderBufferDirect(it,K,lt,nt,L,Ct),nt.side=hn):v.renderBufferDirect(it,K,lt,nt,L,Ct),L.onAfterRender(v,K,it,lt,nt,Ct)}function se(L,K,it){K.isScene!==!0&&(K=ot);let lt=O.get(L),nt=p.state.lights,Ct=p.state.shadowsArray,Pt=nt.state.version,Ht=Y.getParameters(L,nt.state,Ct,K,it),Ft=Y.getProgramCacheKey(Ht),Gt=lt.programs;lt.environment=L.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(L.isMeshStandardMaterial?st:et).get(L.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,Gt===void 0&&(L.addEventListener("dispose",at),Gt=new Map,lt.programs=Gt);let Wt=Gt.get(Ft);if(Wt!==void 0){if(lt.currentProgram===Wt&&lt.lightsStateVersion===Pt)return Ee(L,Ht),Wt}else Ht.uniforms=Y.getUniforms(L),L.onBeforeCompile(Ht,v),Wt=Y.acquireProgram(Ht,Ft),Gt.set(Ft,Wt),lt.uniforms=Ht.uniforms;let Vt=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Vt.clippingPlanes=mt.uniform),Ee(L,Ht),lt.needsLights=wn(L),lt.lightsStateVersion=Pt,lt.needsLights&&(Vt.ambientLightColor.value=nt.state.ambient,Vt.lightProbe.value=nt.state.probe,Vt.directionalLights.value=nt.state.directional,Vt.directionalLightShadows.value=nt.state.directionalShadow,Vt.spotLights.value=nt.state.spot,Vt.spotLightShadows.value=nt.state.spotShadow,Vt.rectAreaLights.value=nt.state.rectArea,Vt.ltc_1.value=nt.state.rectAreaLTC1,Vt.ltc_2.value=nt.state.rectAreaLTC2,Vt.pointLights.value=nt.state.point,Vt.pointLightShadows.value=nt.state.pointShadow,Vt.hemisphereLights.value=nt.state.hemi,Vt.directionalShadowMap.value=nt.state.directionalShadowMap,Vt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Vt.spotShadowMap.value=nt.state.spotShadowMap,Vt.spotLightMatrix.value=nt.state.spotLightMatrix,Vt.spotLightMap.value=nt.state.spotLightMap,Vt.pointShadowMap.value=nt.state.pointShadowMap,Vt.pointShadowMatrix.value=nt.state.pointShadowMatrix),lt.currentProgram=Wt,lt.uniformsList=null,Wt}function we(L){if(L.uniformsList===null){let K=L.currentProgram.getUniforms();L.uniformsList=ks.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function Ee(L,K){let it=O.get(L);it.outputColorSpace=K.outputColorSpace,it.batching=K.batching,it.batchingColor=K.batchingColor,it.instancing=K.instancing,it.instancingColor=K.instancingColor,it.instancingMorph=K.instancingMorph,it.skinning=K.skinning,it.morphTargets=K.morphTargets,it.morphNormals=K.morphNormals,it.morphColors=K.morphColors,it.morphTargetsCount=K.morphTargetsCount,it.numClippingPlanes=K.numClippingPlanes,it.numIntersection=K.numClipIntersection,it.vertexAlphas=K.vertexAlphas,it.vertexTangents=K.vertexTangents,it.toneMapping=K.toneMapping}function Ye(L,K,it,lt,nt){K.isScene!==!0&&(K=ot),J.resetTextureUnits();let Ct=K.fog,Pt=lt.isMeshStandardMaterial?K.environment:null,Ht=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Oi,Ft=(lt.isMeshStandardMaterial?st:et).get(lt.envMap||Pt),Gt=lt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Wt=!!it.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!it.morphAttributes.position,jt=!!it.morphAttributes.normal,ce=!!it.morphAttributes.color,Jt=li;lt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Jt=v.toneMapping);let $t=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,te=$t!==void 0?$t.length:0,qt=O.get(lt),me=p.state.lights;if(kt===!0&&(ht===!0||L!==y)){let be=L===y&&lt.id===_;mt.setState(lt,L,be)}let re=!1;lt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==me.state.version||qt.outputColorSpace!==Ht||nt.isBatchedMesh&&qt.batching===!1||!nt.isBatchedMesh&&qt.batching===!0||nt.isBatchedMesh&&qt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&qt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&qt.instancing===!1||!nt.isInstancedMesh&&qt.instancing===!0||nt.isSkinnedMesh&&qt.skinning===!1||!nt.isSkinnedMesh&&qt.skinning===!0||nt.isInstancedMesh&&qt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&qt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&qt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&qt.instancingMorph===!1&&nt.morphTexture!==null||qt.envMap!==Ft||lt.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==mt.numPlanes||qt.numIntersection!==mt.numIntersection)||qt.vertexAlphas!==Gt||qt.vertexTangents!==Wt||qt.morphTargets!==Vt||qt.morphNormals!==jt||qt.morphColors!==ce||qt.toneMapping!==Jt||qt.morphTargetsCount!==te)&&(re=!0):(re=!0,qt.__version=lt.version);let ze=qt.currentProgram;re===!0&&(ze=se(lt,K,nt));let Te=!1,le=!1,Qe=!1,he=ze.getUniforms(),Le=qt.uniforms;if(P.useProgram(ze.program)&&(Te=!0,le=!0,Qe=!0),lt.id!==_&&(_=lt.id,le=!0),Te||y!==L){P.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),he.setValue(E,"projectionMatrix",L.projectionMatrix),he.setValue(E,"viewMatrix",L.matrixWorldInverse);let ke=he.map.cameraPosition;ke!==void 0&&ke.setValue(E,pt.setFromMatrixPosition(L.matrixWorld)),T.logarithmicDepthBuffer&&he.setValue(E,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&he.setValue(E,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,le=!0,Qe=!0)}if(nt.isSkinnedMesh){he.setOptional(E,nt,"bindMatrix"),he.setOptional(E,nt,"bindMatrixInverse");let be=nt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(E,"boneTexture",be.boneTexture,J))}nt.isBatchedMesh&&(he.setOptional(E,nt,"batchingTexture"),he.setValue(E,"batchingTexture",nt._matricesTexture,J),he.setOptional(E,nt,"batchingIdTexture"),he.setValue(E,"batchingIdTexture",nt._indirectTexture,J),he.setOptional(E,nt,"batchingColorTexture"),nt._colorsTexture!==null&&he.setValue(E,"batchingColorTexture",nt._colorsTexture,J));let Ue=it.morphAttributes;if((Ue.position!==void 0||Ue.normal!==void 0||Ue.color!==void 0)&&$.update(nt,it,ze),(le||qt.receiveShadow!==nt.receiveShadow)&&(qt.receiveShadow=nt.receiveShadow,he.setValue(E,"receiveShadow",nt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Le.envMap.value=Ft,Le.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(Le.envMapIntensity.value=K.environmentIntensity),le&&(he.setValue(E,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&rn(Le,Qe),Ct&&lt.fog===!0&&Q.refreshFogUniforms(Le,Ct),Q.refreshMaterialUniforms(Le,lt,tt,j,p.state.transmissionRenderTarget[L.id]),ks.upload(E,we(qt),Le,J)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ks.upload(E,we(qt),Le,J),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&he.setValue(E,"center",nt.center),he.setValue(E,"modelViewMatrix",nt.modelViewMatrix),he.setValue(E,"normalMatrix",nt.normalMatrix),he.setValue(E,"modelMatrix",nt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let be=lt.uniformsGroups;for(let ke=0,un=be.length;ke<un;ke++){let je=be[ke];Rt.update(je,ze),Rt.bind(je,ze)}}return ze}function rn(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function wn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,K,it){let lt=O.get(L);lt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),O.get(L.texture).__webglTexture=K,O.get(L.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:it,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,K){let it=O.get(L);it.__webglFramebuffer=K,it.__useDefaultFramebuffer=K===void 0};let En=E.createFramebuffer();this.setRenderTarget=function(L,K=0,it=0){I=L,A=K,b=it;let lt=!0,nt=null,Ct=!1,Pt=!1;if(L){let Ft=O.get(L);if(Ft.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(E.FRAMEBUFFER,null),lt=!1;else if(Ft.__webglFramebuffer===void 0)J.setupRenderTarget(L);else if(Ft.__hasExternalTextures)J.rebindTextures(L,O.get(L.texture).__webglTexture,O.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Vt=L.depthTexture;if(Ft.__boundDepthTexture!==Vt){if(Vt!==null&&O.has(Vt)&&(L.width!==Vt.image.width||L.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(L)}}let Gt=L.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Pt=!0);let Wt=O.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?nt=Wt[K][it]:nt=Wt[K],Ct=!0):L.samples>0&&J.useMultisampledRTT(L)===!1?nt=O.get(L).__webglMultisampledFramebuffer:Array.isArray(Wt)?nt=Wt[it]:nt=Wt,D.copy(L.viewport),U.copy(L.scissor),N=L.scissorTest}else D.copy(_t).multiplyScalar(tt).floor(),U.copy(Lt).multiplyScalar(tt).floor(),N=Ut;if(it!==0&&(nt=En),P.bindFramebuffer(E.FRAMEBUFFER,nt)&&lt&&P.drawBuffers(L,nt),P.viewport(D),P.scissor(U),P.setScissorTest(N),Ct){let Ft=O.get(L.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,it)}else if(Pt){let Ft=K;for(let Gt=0;Gt<L.textures.length;Gt++){let Wt=O.get(L.textures[Gt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,it,Ft)}}else if(L!==null&&it!==0){let Ft=O.get(L.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ft.__webglTexture,it)}_=-1},this.readRenderTargetPixels=function(L,K,it,lt,nt,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){P.bindFramebuffer(E.FRAMEBUFFER,Ft);try{let Gt=L.textures[Ht],Wt=Gt.format,Vt=Gt.type;if(!T.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-lt&&it>=0&&it<=L.height-nt&&(L.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ht),E.readPixels(K,it,lt,nt,St.convert(Wt),St.convert(Vt),Ct))}finally{let Gt=I!==null?O.get(I).__webglFramebuffer:null;P.bindFramebuffer(E.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(L,K,it,lt,nt,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(K>=0&&K<=L.width-lt&&it>=0&&it<=L.height-nt){P.bindFramebuffer(E.FRAMEBUFFER,Ft);let Gt=L.textures[Ht],Wt=Gt.format,Vt=Gt.type;if(!T.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.bufferData(E.PIXEL_PACK_BUFFER,Ct.byteLength,E.STREAM_READ),L.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ht),E.readPixels(K,it,lt,nt,St.convert(Wt),St.convert(Vt),0);let ce=I!==null?O.get(I).__webglFramebuffer:null;P.bindFramebuffer(E.FRAMEBUFFER,ce);let Jt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Hh(E,Jt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Ct),E.deleteBuffer(jt),E.deleteSync(Jt),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,K=null,it=0){let lt=Math.pow(2,-it),nt=Math.floor(L.image.width*lt),Ct=Math.floor(L.image.height*lt),Pt=K!==null?K.x:0,Ht=K!==null?K.y:0;J.setTexture2D(L,0),E.copyTexSubImage2D(E.TEXTURE_2D,it,0,0,Pt,Ht,nt,Ct),P.unbindTexture()};let Tn=E.createFramebuffer(),_n=E.createFramebuffer();this.copyTextureToTexture=function(L,K,it=null,lt=null,nt=0,Ct=null){Ct===null&&(nt!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=nt,nt=0):Ct=0);let Pt,Ht,Ft,Gt,Wt,Vt,jt,ce,Jt,$t=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(it!==null)Pt=it.max.x-it.min.x,Ht=it.max.y-it.min.y,Ft=it.isBox3?it.max.z-it.min.z:1,Gt=it.min.x,Wt=it.min.y,Vt=it.isBox3?it.min.z:0;else{let Ue=Math.pow(2,-nt);Pt=Math.floor($t.width*Ue),Ht=Math.floor($t.height*Ue),L.isDataArrayTexture?Ft=$t.depth:L.isData3DTexture?Ft=Math.floor($t.depth*Ue):Ft=1,Gt=0,Wt=0,Vt=0}lt!==null?(jt=lt.x,ce=lt.y,Jt=lt.z):(jt=0,ce=0,Jt=0);let te=St.convert(K.format),qt=St.convert(K.type),me;K.isData3DTexture?(J.setTexture3D(K,0),me=E.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(J.setTexture2DArray(K,0),me=E.TEXTURE_2D_ARRAY):(J.setTexture2D(K,0),me=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment);let re=E.getParameter(E.UNPACK_ROW_LENGTH),ze=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Te=E.getParameter(E.UNPACK_SKIP_PIXELS),le=E.getParameter(E.UNPACK_SKIP_ROWS),Qe=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Gt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Wt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Vt);let he=L.isDataArrayTexture||L.isData3DTexture,Le=K.isDataArrayTexture||K.isData3DTexture;if(L.isDepthTexture){let Ue=O.get(L),be=O.get(K),ke=O.get(Ue.__renderTarget),un=O.get(be.__renderTarget);P.bindFramebuffer(E.READ_FRAMEBUFFER,ke.__webglFramebuffer),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let je=0;je<Ft;je++)he&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,O.get(L).__webglTexture,nt,Vt+je),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,O.get(K).__webglTexture,Ct,Jt+je)),E.blitFramebuffer(Gt,Wt,Pt,Ht,jt,ce,Pt,Ht,E.DEPTH_BUFFER_BIT,E.NEAREST);P.bindFramebuffer(E.READ_FRAMEBUFFER,null),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(nt!==0||L.isRenderTargetTexture||O.has(L)){let Ue=O.get(L),be=O.get(K);P.bindFramebuffer(E.READ_FRAMEBUFFER,Tn),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,_n);for(let ke=0;ke<Ft;ke++)he?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,nt,Vt+ke):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue.__webglTexture,nt),Le?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,be.__webglTexture,Ct,Jt+ke):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,be.__webglTexture,Ct),nt!==0?E.blitFramebuffer(Gt,Wt,Pt,Ht,jt,ce,Pt,Ht,E.COLOR_BUFFER_BIT,E.NEAREST):Le?E.copyTexSubImage3D(me,Ct,jt,ce,Jt+ke,Gt,Wt,Pt,Ht):E.copyTexSubImage2D(me,Ct,jt,ce,Gt,Wt,Pt,Ht);P.bindFramebuffer(E.READ_FRAMEBUFFER,null),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Le?L.isDataTexture||L.isData3DTexture?E.texSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,qt,$t.data):K.isCompressedArrayTexture?E.compressedTexSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,$t.data):E.texSubImage3D(me,Ct,jt,ce,Jt,Pt,Ht,Ft,te,qt,$t):L.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Ct,jt,ce,Pt,Ht,te,qt,$t.data):L.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Ct,jt,ce,$t.width,$t.height,te,$t.data):E.texSubImage2D(E.TEXTURE_2D,Ct,jt,ce,Pt,Ht,te,qt,$t);E.pixelStorei(E.UNPACK_ROW_LENGTH,re),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ze),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Te),E.pixelStorei(E.UNPACK_SKIP_ROWS,le),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Qe),Ct===0&&K.generateMipmaps&&E.generateMipmap(me),P.unbindTexture()},this.initRenderTarget=function(L){O.get(L).__webglFramebuffer===void 0&&J.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?J.setTextureCube(L,0):L.isData3DTexture?J.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?J.setTexture2DArray(L,0):J.setTexture2D(L,0),P.unbindTexture()},this.resetState=function(){A=0,b=0,I=null,P.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Wa=class extends Bi{constructor(){super();let t=new yi;t.deleteAttribute("uv");let e=new Pn({side:$e}),n=new Pn,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new zi(t,n,6),o=new Ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new pe(t,Gs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new pe(t,Gs(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new pe(t,Gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let l=new pe(t,Gs(43));l.position.set(-.462,8.89,14.52),l.scale.set(4.38,5.441,.088),this.add(l);let f=new pe(t,Gs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new pe(t,Gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){return new Lr({color:0,emissive:16777215,emissiveIntensity:i})}var De=new Vn,Xa=new B,Su=new It,wu=new It,Eu=new It,qa=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let c=0;c<s;c++){let h=1,u=3*c,l=3*c+1,f=3*c+2;t&&(u=t.getX(u),l=t.getX(l),f=t.getX(f)),n&&(h=n.getX(u)+n.getX(l)+n.getX(f)),De.a.fromBufferAttribute(e,u),De.b.fromBufferAttribute(e,l),De.c.fromBufferAttribute(e,f),h*=De.getArea(),r[c]=h}let a=new Float32Array(s),o=0;for(let c=0;c<s;c++)o+=r[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let a=Math.ceil((n+s)/2);if(a===0||e[a-1]<=t&&e[a]>t){r=a;break}else t<e[a]?s=a-1:n=a+1}return r}_sampleFace(t,e,n,s,r){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);let c=this.indexAttribute,h=t*3,u=t*3+1,l=t*3+2;return c&&(h=c.getX(h),u=c.getX(u),l=c.getX(l)),De.a.fromBufferAttribute(this.positionAttribute,h),De.b.fromBufferAttribute(this.positionAttribute,u),De.c.fromBufferAttribute(this.positionAttribute,l),e.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(De.a.fromBufferAttribute(this.normalAttribute,h),De.b.fromBufferAttribute(this.normalAttribute,u),De.c.fromBufferAttribute(this.normalAttribute,l),n.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)).normalize()):De.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(De.a.fromBufferAttribute(this.colorAttribute,h),De.b.fromBufferAttribute(this.colorAttribute,u),De.c.fromBufferAttribute(this.colorAttribute,l),Xa.set(0,0,0).addScaledVector(De.a,a).addScaledVector(De.b,o).addScaledVector(De.c,1-(a+o)),s.r=Xa.x,s.g=Xa.y,s.b=Xa.z),r!==void 0&&this.uvAttribute!==void 0&&(Su.fromBufferAttribute(this.uvAttribute,h),wu.fromBufferAttribute(this.uvAttribute,u),Eu.fromBufferAttribute(this.uvAttribute,l),r.set(0,0).addScaledVector(Su,a).addScaledVector(wu,o).addScaledVector(Eu,1-(a+o))),this}};var Tu=new B(0,1,0),Au=new B(0,-1,0);function Ng(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Og(i,t){let e=new Cn(t*.1,t,i,3,4,!0);e.translate(0,i/2,0);let n=e.attributes.position;for(let s=0;s<n.count;s++){let r=Math.max(0,Math.min(1,n.getY(s)/i));n.setX(s,n.getX(s)+i*.24*Math.sin(Math.PI*.9*r)),n.setZ(s,n.getZ(s)+i*.12*r*r)}return e.computeVertexNormals(),e.computeBoundingBox(),e.userData.fiberProfile=Array.from({length:5},(s,r)=>{let a=r/4;return[i*.24*Math.sin(Math.PI*.9*a),i*a,i*.12*a*a]}),e.userData.fiberRadius=t,e}function Ru(i,t,e=1){i.root.updateMatrixWorld(!0);let n=i.surfaces.slice(),s=n.find(h=>h.material.bumpMap)?.material;for(let h of n){let u=h.material;(h.userData.surfaceMaterial||u.name||t.material)==="clay"&&!u.userData.clayFinish&&(u.roughness=.96,u.bumpScale=.0036,u.bumpMap&&(u.bumpMap=u.bumpMap.clone(),u.bumpMap.repeat.set(2.8,2.8)),u.userData.clayFinish=!0)}for(let h of["head-beret","head-beanie"])i.root.getObjectByName(h)?.traverse(u=>{!u.isMesh||n.includes(u)||(u.material=u.material.clone(),u.material.name="micro",u.material.roughness=1,s?.bumpMap&&(u.material.bumpMap=s.bumpMap,u.material.bumpScale=.0012),u.userData.surfaceMaterial="micro",n.push(u))});let r=n.filter(h=>{let u=h.userData.surfaceMaterial||h.material.name||t.material,l=!0;for(let f=h;f;f=f.parent)f.visible||(l=!1);return["plush","micro","fabric","knit"].includes(u)&&l}),a=r.map(h=>{h.geometry.computeBoundingBox();let u=h.geometry.boundingBox.getSize(new B).multiply(h.scale);return Math.max(.012,2*(u.x*u.y+u.x*u.z+u.y*u.z))}),o=a.reduce((h,u)=>h+u,0)||1,c=i.eyeGroups.map(h=>h.getWorldPosition(new B));r.forEach((h,u)=>{let l=h.userData.surfaceMaterial||h.material.name||t.material,f=l==="knit"||l==="fabric",m=l==="micro";!f&&h.material.bumpMap&&(h.material.bumpScale=Math.min(h.material.bumpScale,m?.0013:.0015));let x=Math.max(80,Math.round((f?3e4:m?1e5:19e4)*e*a[u]/o)),S=f?.005:m?.009:.034,d=f?5e-4:m?64e-5:.00105,p=Og(S,d),w=new Pn({color:h.material.color,roughness:1,metalness:0,side:hn});w.name="fine-pile";let g=new zi(p,w,x);g.name="surface-fibers",g.castShadow=!1,g.receiveShadow=!0,g.userData.surfaceMaterial=l,g.userData.fiberProfile=p.userData.fiberProfile,g.userData.fiberRadius=d,g.userData.fiberTones=new Float32Array(x);let v=Ng((t.randomSeed||"dot")+h.name+u),R=new qa(h).setRandomGenerator(v).build(),A=new B,b=new B,I=new B,_=new B,y=new B,D=new B,U=new Ve,N=new Xt,H=new Xt,Z=new Je;for(let X=0;X<x;X++){R.sample(A,b,H),b.normalize(),I.copy(Au).addScaledVector(b,-Au.dot(b)),I.lengthSq()<.005&&I.set(1,0,0).addScaledVector(b,-b.x),I.normalize(),_.crossVectors(b,I).normalize();let j=Math.sin(A.x*6.7+A.y*3.1)*.16+Math.cos(A.z*5.4-A.y*2.2)*.09;I.multiplyScalar(.94).addScaledVector(_,j+(v()-.5)*.48).normalize(),y.copy(b).multiplyScalar(.63).addScaledVector(I,.77).normalize(),U.position.copy(A).addScaledVector(b,-S*.055),U.quaternion.setFromUnitVectors(Tu,y),Z.setFromAxisAngle(Tu,v()*Math.PI*2),U.quaternion.multiply(Z);let tt=.64+v()*.52;D.copy(A).applyMatrix4(h.matrixWorld);for(let _t of c){let Lt=D.distanceToSquared(_t);Lt<.035&&(tt*=.36+.64*Math.min(1,Lt/.035))}let gt=.76+v()*.35;U.scale.set(gt,tt,gt),U.updateMatrix(),g.setMatrixAt(X,U.matrix);let wt=f?.91+v()*.13:m?.91+v()*.15:.82+v()*.29;g.userData.fiberTones[X]=wt,N.copy(H).multiplyScalar(wt),g.setColorAt(X,N)}g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.frustumCulled=!1,h.add(g)})}var Za=class extends pe{constructor(t,e,n=!1,s=!1,r=1e4){let a=new ye;super(a,e),this.isMarchingCubes=!0;let o=this,c=new Float32Array(36),h=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(w){this.resolution=w,this.isolation=80,this.size=w,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let g=r*3;this.positionArray=new Float32Array(g*3);let v=new Ge(this.positionArray,3);v.setUsage(Os),a.setAttribute("position",v),this.normalArray=new Float32Array(g*3);let R=new Ge(this.normalArray,3);if(R.setUsage(Os),a.setAttribute("normal",R),this.enableUvs){this.uvArray=new Float32Array(g*2);let A=new Ge(this.uvArray,2);A.setUsage(Os),a.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(g*3);let A=new Ge(this.colorArray,3);A.setUsage(Os),a.setAttribute("color",A)}a.boundingSphere=new Xn(new B,1)};function l(w,g,v){return w+(g-w)*v}function f(w,g,v,R,A,b,I,_,y,D){let U=(v-I)/(_-I),N=o.normal_cache;c[g+0]=R+U*o.delta,c[g+1]=A,c[g+2]=b,h[g+0]=l(N[w+0],N[w+3],U),h[g+1]=l(N[w+1],N[w+4],U),h[g+2]=l(N[w+2],N[w+5],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function m(w,g,v,R,A,b,I,_,y,D){let U=(v-I)/(_-I),N=o.normal_cache;c[g+0]=R,c[g+1]=A+U*o.delta,c[g+2]=b;let H=w+o.yd*3;h[g+0]=l(N[w+0],N[H+0],U),h[g+1]=l(N[w+1],N[H+1],U),h[g+2]=l(N[w+2],N[H+2],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function x(w,g,v,R,A,b,I,_,y,D){let U=(v-I)/(_-I),N=o.normal_cache;c[g+0]=R,c[g+1]=A,c[g+2]=b+U*o.delta;let H=w+o.zd*3;h[g+0]=l(N[w+0],N[H+0],U),h[g+1]=l(N[w+1],N[H+1],U),h[g+2]=l(N[w+2],N[H+2],U),u[g+0]=l(o.palette[y*3+0],o.palette[D*3+0],U),u[g+1]=l(o.palette[y*3+1],o.palette[D*3+1],U),u[g+2]=l(o.palette[y*3+2],o.palette[D*3+2],U)}function S(w){let g=w*3;o.normal_cache[g]===0&&(o.normal_cache[g+0]=o.field[w-1]-o.field[w+1],o.normal_cache[g+1]=o.field[w-o.yd]-o.field[w+o.yd],o.normal_cache[g+2]=o.field[w-o.zd]-o.field[w+o.zd])}function d(w,g,v,R,A){let b=R+1,I=R+o.yd,_=R+o.zd,y=b+o.yd,D=b+o.zd,U=R+o.yd+o.zd,N=b+o.yd+o.zd,H=0,Z=o.field[R],X=o.field[b],j=o.field[I],tt=o.field[y],gt=o.field[_],wt=o.field[D],_t=o.field[U],Lt=o.field[N];Z<A&&(H|=1),X<A&&(H|=2),j<A&&(H|=8),tt<A&&(H|=4),gt<A&&(H|=16),wt<A&&(H|=32),_t<A&&(H|=128),Lt<A&&(H|=64);let Ut=Bg[H];if(Ut===0)return 0;let Bt=o.delta,kt=w+Bt,ht=g+Bt,G=v+Bt;Ut&1&&(S(R),S(b),f(R*3,0,A,w,g,v,Z,X,R,b)),Ut&2&&(S(b),S(y),m(b*3,3,A,kt,g,v,X,tt,b,y)),Ut&4&&(S(I),S(y),f(I*3,6,A,w,ht,v,j,tt,I,y)),Ut&8&&(S(R),S(I),m(R*3,9,A,w,g,v,Z,j,R,I)),Ut&16&&(S(_),S(D),f(_*3,12,A,w,g,G,gt,wt,_,D)),Ut&32&&(S(D),S(N),m(D*3,15,A,kt,g,G,wt,Lt,D,N)),Ut&64&&(S(U),S(N),f(U*3,18,A,w,ht,G,_t,Lt,U,N)),Ut&128&&(S(_),S(U),m(_*3,21,A,w,g,G,gt,_t,_,U)),Ut&256&&(S(R),S(_),x(R*3,24,A,w,g,v,Z,gt,R,_)),Ut&512&&(S(b),S(D),x(b*3,27,A,kt,g,v,X,wt,b,D)),Ut&1024&&(S(y),S(N),x(y*3,30,A,kt,ht,v,tt,Lt,y,N)),Ut&2048&&(S(I),S(U),x(I*3,33,A,w,ht,v,j,_t,I,U)),H<<=4;let pt,ft,ot,Tt=0,Dt=0;for(;Ya[H+Dt]!=-1;)pt=H+Dt,ft=pt+1,ot=pt+2,p(c,h,u,3*Ya[pt],3*Ya[ft],3*Ya[ot]),Dt+=3,Tt++;return Tt}function p(w,g,v,R,A,b){let I=o.count*3;if(o.positionArray[I+0]=w[R],o.positionArray[I+1]=w[R+1],o.positionArray[I+2]=w[R+2],o.positionArray[I+3]=w[A],o.positionArray[I+4]=w[A+1],o.positionArray[I+5]=w[A+2],o.positionArray[I+6]=w[b],o.positionArray[I+7]=w[b+1],o.positionArray[I+8]=w[b+2],o.material.flatShading===!0){let _=(g[R+0]+g[A+0]+g[b+0])/3,y=(g[R+1]+g[A+1]+g[b+1])/3,D=(g[R+2]+g[A+2]+g[b+2])/3;o.normalArray[I+0]=_,o.normalArray[I+1]=y,o.normalArray[I+2]=D,o.normalArray[I+3]=_,o.normalArray[I+4]=y,o.normalArray[I+5]=D,o.normalArray[I+6]=_,o.normalArray[I+7]=y,o.normalArray[I+8]=D}else o.normalArray[I+0]=g[R+0],o.normalArray[I+1]=g[R+1],o.normalArray[I+2]=g[R+2],o.normalArray[I+3]=g[A+0],o.normalArray[I+4]=g[A+1],o.normalArray[I+5]=g[A+2],o.normalArray[I+6]=g[b+0],o.normalArray[I+7]=g[b+1],o.normalArray[I+8]=g[b+2];if(o.enableUvs){let _=o.count*2;o.uvArray[_+0]=w[R+0],o.uvArray[_+1]=w[R+2],o.uvArray[_+2]=w[A+0],o.uvArray[_+3]=w[A+2],o.uvArray[_+4]=w[b+0],o.uvArray[_+5]=w[b+2]}o.enableColors&&(o.colorArray[I+0]=v[R+0],o.colorArray[I+1]=v[R+1],o.colorArray[I+2]=v[R+2],o.colorArray[I+3]=v[A+0],o.colorArray[I+4]=v[A+1],o.colorArray[I+5]=v[A+2],o.colorArray[I+6]=v[b+0],o.colorArray[I+7]=v[b+1],o.colorArray[I+8]=v[b+2]),o.count+=3}this.addBall=function(w,g,v,R,A,b){let I=Math.sign(R);R=Math.abs(R);let _=b!=null,y=new Xt(w,g,v);if(_)try{y=b instanceof Xt?b:Array.isArray(b)?new Xt(Math.min(Math.abs(b[0]),1),Math.min(Math.abs(b[1]),1),Math.min(Math.abs(b[2]),1)):new Xt(b)}catch{y=new Xt(w,g,v)}let D=this.size*Math.sqrt(R/A),U=v*this.size,N=g*this.size,H=w*this.size,Z=Math.floor(U-D);Z<1&&(Z=1);let X=Math.floor(U+D);X>this.size-1&&(X=this.size-1);let j=Math.floor(N-D);j<1&&(j=1);let tt=Math.floor(N+D);tt>this.size-1&&(tt=this.size-1);let gt=Math.floor(H-D);gt<1&&(gt=1);let wt=Math.floor(H+D);wt>this.size-1&&(wt=this.size-1);let _t,Lt,Ut,Bt,kt,ht,G,pt,ft,ot,Tt;for(Ut=Z;Ut<X;Ut++)for(kt=this.size2*Ut,pt=Ut/this.size-v,ft=pt*pt,Lt=j;Lt<tt;Lt++)for(Bt=kt+this.size*Lt,G=Lt/this.size-g,ot=G*G,_t=gt;_t<wt;_t++)if(ht=_t/this.size-w,Tt=R/(1e-6+ht*ht+ot+ft)-A,Tt>0){this.field[Bt+_t]+=Tt*I;let Dt=Math.sqrt((_t-H)*(_t-H)+(Lt-N)*(Lt-N)+(Ut-U)*(Ut-U))/D,E=1-Dt*Dt*Dt*(Dt*(Dt*6-15)+10);this.palette[(Bt+_t)*3+0]+=y.r*E,this.palette[(Bt+_t)*3+1]+=y.g*E,this.palette[(Bt+_t)*3+2]+=y.b*E}},this.addPlaneX=function(w,g){let v=this.size,R=this.yd,A=this.zd,b=this.field,I,_,y,D,U,N,H,Z=v*Math.sqrt(w/g);for(Z>v&&(Z=v),I=0;I<Z;I++)if(N=I/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(_=0;_<v;_++)for(H=I+_*R,y=0;y<v;y++)b[A*y+H]+=U},this.addPlaneY=function(w,g){let v=this.size,R=this.yd,A=this.zd,b=this.field,I,_,y,D,U,N,H,Z,X=v*Math.sqrt(w/g);for(X>v&&(X=v),_=0;_<X;_++)if(N=_/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(H=_*R,I=0;I<v;I++)for(Z=H+I,y=0;y<v;y++)b[A*y+Z]+=U},this.addPlaneZ=function(w,g){let v=this.size,R=this.yd,A=this.zd,b=this.field,I,_,y,D,U,N,H,Z,X=v*Math.sqrt(w/g);for(X>v&&(X=v),y=0;y<X;y++)if(N=y/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(H=A*y,_=0;_<v;_++)for(Z=H+_*R,I=0;I<v;I++)b[Z+I]+=U},this.setCell=function(w,g,v,R){let A=this.size2*v+this.size*g+w;this.field[A]=R},this.getCell=function(w,g,v){let R=this.size2*v+this.size*g+w;return this.field[R]},this.blur=function(w=1){let g=this.field,v=g.slice(),R=this.size,A=this.size2;for(let b=0;b<R;b++)for(let I=0;I<R;I++)for(let _=0;_<R;_++){let y=A*_+R*I+b,D=v[y],U=1;for(let N=-1;N<=1;N+=2){let H=N+b;if(!(H<0||H>=R))for(let Z=-1;Z<=1;Z+=2){let X=Z+I;if(!(X<0||X>=R))for(let j=-1;j<=1;j+=2){let tt=j+_;if(tt<0||tt>=R)continue;let gt=A*tt+R*X+H,wt=v[gt];U++,D+=w*(wt-D)/U}}}g[y]=D}},this.reset=function(){for(let w=0;w<this.size3;w++)this.normal_cache[w*3]=0,this.field[w]=0,this.palette[w*3]=this.palette[w*3+1]=this.palette[w*3+2]=0},this.update=function(){this.count=0;let w=this.size-2;for(let g=1;g<w;g++){let v=this.size2*g,R=(g-this.halfsize)/this.halfsize;for(let A=1;A<w;A++){let b=v+this.size*A,I=(A-this.halfsize)/this.halfsize;for(let _=1;_<w;_++){let y=(_-this.halfsize)/this.halfsize,D=b+_;d(y,I,R,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Bg=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ya=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var sn=Math.PI*2,zg=new B(0,1,0),Ja=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),qs=new Map,ns=(i,t,e)=>Math.max(t,Math.min(e,i)),Xs=i=>new B(...i),Ws=(i,t)=>new Xt(i).multiplyScalar(t),gn=(i,t,e)=>new Xt(i).lerp(new Xt(t),e),Oe=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function es(i,t,e=.19){let n="sculpted:"+i;if(qs.has(n))return qs.get(n).clone();let s=72,r=1.54,a=new Za(s,void 0,!1,!1,5e4);a.isolation=0;let o=(x,S,d,[p,w,g,v,R,A])=>{x-=p,S-=w,d-=g;let b=Math.hypot(x/v,S/R,d/A),I=Math.hypot(x/(v*v),S/(R*R),d/(A*A));return I>1e-9?b*(b-1)/I:-Math.min(v,R,A)},c=(x,S)=>{let d=Math.max(e-Math.abs(x-S),0)/e;return Math.min(x,S)-d*d*e*.25};for(let x=0;x<s;x++)for(let S=0;S<s;S++)for(let d=0;d<s;d++){let p=(d/s*2-1)*r,w=(S/s*2-1)*r,g=(x/s*2-1)*r,v=o(p,w,g,t[0]);for(let R=1;R<t.length;R++)v=c(v,o(p,w,g,t[R]));a.field[d+S*s+x*s*s]=-v}a.update();let h=a.count,u=new ye,l=a.positionArray.slice(0,h*3),f=a.normalArray.slice(0,h*3),m=[];for(let x=0;x<h;x++)l[x*3]*=r,l[x*3+1]*=r,l[x*3+2]*=r,m.push(Math.atan2(l[x*3],l[x*3+2])/sn+.5,(l[x*3+1]+1.2)/2.4);return u.setAttribute("position",new Yt(l,3)),u.setAttribute("normal",new Yt(f,3)),u.setAttribute("uv",new Yt(m,2)),u.normalizeNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),a.geometry.dispose(),a.material?.dispose(),qs.set(n,u),u.clone()}function Sc(i){let t=[],e=[],n=[],s=[];for(let a of i){let o=a,c=t.length/3;if(t.push(...o.attributes.position.array),e.push(...o.attributes.normal.array),o.attributes.uv&&n.push(...o.attributes.uv.array),o.index)for(let h of o.index.array)s.push(h+c);else for(let h=0;h<o.attributes.position.count;h++)s.push(c+h);a.dispose()}let r=new ye;return r.setAttribute("position",new Yt(t,3)),r.setAttribute("normal",new Yt(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new Yt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function Cu(i,t,e=.82,n=.98){let s=i+":"+e+":"+n;if(qs.has(s))return qs.get(s).clone();let r=t.map(([d,p])=>new B(d,p,0));r.reduce((d,p,w)=>d+p.x*r[(w+1)%r.length].y-r[(w+1)%r.length].x*p.y,0)<0&&r.reverse();let o=new cn(r,!0,"catmullrom",.35),c=112,h=48,u=[],l=[],f=[],m=r.reduce((d,p)=>d+Math.hypot(p.x,p.y),0)/r.length;for(let d=0;d<=h;d++){let p=d/h*Math.PI,w=Math.pow(Math.sin(p),n);for(let g=0;g<=c;g++){let v=o.getPoint(g/c),R=Math.hypot(v.x,v.y),A=w**2.65,b=m+(R-m)*A,I=R>1e-6?w*b/R:0;if(u.push(v.x*I,v.y*I,e*Math.cos(p)),l.push(g/c,d/h),g<c&&d<h){let _=d*(c+1)+g,y=_+c+1;f.push(_,y,_+1,y,y+1,_+1)}}}let x=new ye;x.setAttribute("position",new Yt(u,3)),x.setAttribute("uv",new Yt(l,2)),x.setIndex(f),x.computeVertexNormals();let S=x.attributes.normal;for(let d=0;d<=h;d++){let p=d*(c+1),w=p+c;if(d===0||d===h)for(let g=p;g<=w;g++)S.setXYZ(g,0,0,d===0?1:-1);else{let g=new B().fromBufferAttribute(S,p).add(new B().fromBufferAttribute(S,w)).normalize();S.setXYZ(p,g.x,g.y,g.z),S.setXYZ(w,g.x,g.y,g.z)}}return x.computeBoundingBox(),x.computeBoundingSphere(),qs.set(s,x),x.clone()}function $a(i,t,e=1){let n=new cn(i.map(Xs),!1,"centripetal"),s=30,r=14,a=n.computeFrenetFrames(s,!1),o=[],c=[],h=[];for(let l=0;l<=s;l++){let f=l/s,m=n.getPointAt(f),x=Math.min(1,Math.sin(Math.min(1,f/.13)*Math.PI/2),Math.sin(Math.min(1,(1-f)/.19)*Math.PI/2)),S=t*(1+(e-1)*f)*x;for(let d=0;d<=r;d++){let p=d/r*sn,w=a.normals[l],g=a.binormals[l];if(o.push(m.x+(w.x*Math.cos(p)+g.x*Math.sin(p))*S,m.y+(w.y*Math.cos(p)+g.y*Math.sin(p))*S,m.z+(w.z*Math.cos(p)+g.z*Math.sin(p))*S),c.push(d/r,f),l<s&&d<r){let v=l*(r+1)+d,R=v+r+1;h.push(v,v+1,R,v+1,R+1,R)}}}let u=new ye;return u.setAttribute("position",new Yt(o,3)),u.setAttribute("uv",new Yt(c,2)),u.setIndex(h),u.computeVertexNormals(),u.computeBoundingSphere(),u}function Iu(i){let t=(r=1,a=16)=>Array.from({length:a},(o,c)=>{let h=c/a*sn,u=Math.cos(h),l=Math.sin(h);return[Math.sign(u)*Math.abs(u)**r,Math.sign(l)*Math.abs(l)**r]}),e=r=>Array.from({length:r},(a,o)=>[Math.sin(o/r*sn),Math.cos(o/r*sn)]),n=(r,a,o=0,c=1,h=1)=>Array.from({length:72},(u,l)=>{let f=l/72*sn,m=1+a*Math.cos(f*r+o);return[Math.sin(f)*m*c,Math.cos(f)*m*h]}),s={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1.04,-.56],[-1.2,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.9,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.8],[-.57,-.76]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.2],[1,.23],[.69,.65],[.34,.97]],triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],heart:[[0,.56],[-.24,.78],[-.54,.9],[-.8,.81],[-.955,.58],[-.975,.3],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.3],[.955,.58],[.8,.81],[.54,.9],[.24,.78]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.1],[-1.03,-.1],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.1],[1.03,.1],[.865,.31],[.175,.985]],star:Array.from({length:40},(r,a)=>{let o=a/40*sn,c=.88+.18*Math.cos(o*5);return[Math.sin(o)*c,Math.cos(o)*c]}),puff:n(6,.15,.38),clover:n(4,.25,Math.PI,1.035,.88),scallop:n(10,.058),hexagon:e(6),roundedcube:t(.5),sphere:t(),sprout:t(),frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.5],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.5],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:t()};return s[i]||s.dumpling}function kg(i){let e=new Uint8Array(65536),n=["plush","micro"].includes(i),s=null,r=0,a=1;if(n){s=new Float32Array(16384);for(let h=0;h<2500;h++){let u=Oe(h*7+191)*128,l=Oe(h*7+193)*128,f=2+Oe(h*7+197)*3,m=(Oe(h*7+199)-.5)*.88,x=Math.sin(m),S=Math.cos(m),d=.39+Oe(h*7+211)*.3,p=.55+Oe(h*7+223)*.75,w=Math.ceil(f+1);for(let g=-w;g<=w;g++)for(let v=-w;v<=w;v++){let R=Math.floor(u)+v,A=Math.floor(l)+g,b=R-u,I=A-l,_=b*x+I*S,y=b*S-I*x,D=Math.exp(-.5*(_/(f*.46))**2-.5*(y/d)**2)*p;s[(A%128+128)%128*128+(R%128+128)%128]+=D}}for(let h of s)r+=h;r/=s.length;let c=0;for(let h of s)c+=(h-r)**2;a=(i==="micro"?45:54)/Math.max(.01,Math.sqrt(c/s.length))}for(let c=0;c<128;c++)for(let h=0;h<128;h++){let u=Oe(h+c*128),l=i==="knit",f=i==="fabric",m=l?Math.sin(h*.72+Math.sin(c*.33)*1.8)*Math.cos(c*.33):f?Math.sin(h*1.57)*Math.sin(c*1.57):0,x=n?ns(128+(s[h+c*128]-r)*a,32,224):ns(128+(u-.5)*(l?16:24)+m*(l?35:f?32:0),0,255),S=(c*128+h)*4;e[S]=e[S+1]=e[S+2]=x,e[S+3]=255}let o=new vi(e,128,128,mn);return o.needsUpdate=!0,o.wrapS=o.wrapT=vs,o.magFilter=Mn,o.minFilter=Zn,o.generateMipmaps=!0,o.repeat.set(i==="knit"?3:5,i==="knit"?3:5),o}function Pu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=new Pe,n=new Pe,s=new Pe,r=new Pe;e.name="avatar-body",n.name="head",s.name="torso",r.name="face",e.add(s,n),n.add(r);let a=[],o=[],c=[],h=[],u=new Map,l=new Map,f=new Map,m=ns(Number(t.headScale)||1,.65,1.5),x=ns(Number(t.bodyWidth)||1,.65,1.5),S=null,d=[],p={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},w=[],g=(T,P)=>(u.has(T)||u.set(T,P()),u.get(T)),v=()=>g("sphere",()=>new ri(1,40,28));function R(T,P=t.material){let z=new Xt(T).getHexString(),O=z+":"+P;if(l.has(O))return l.get(O);let J={rubber:.71,plush:.97,micro:.93,clay:.89,skin:.8,hair:.71,fiber:.9,knit:.99,fabric:.95,eye:.31,matteEye:.78,nose:.52},et=new Pn({color:T,roughness:J[P]??.88,metalness:0});return et.name=P,["eye","matteEye","nose","hair"].includes(P)||(f.has(P)||f.set(P,kg(P)),et.bumpMap=f.get(P),et.bumpScale={rubber:.0015,skin:.001,micro:.0015,plush:.0022,clay:.002,knit:.0045,fabric:.004,fiber:.002}[P]??.002),l.set(O,et),et}let A=R(t.colors.body),b=R(t.colors.secondary),I=R(Ws(t.colors.body,.24)),_=R(t.colors.eyes,["sparkle","glossy","star","oval","side"].includes(t.eyes)?"eye":"matteEye"),y=R(Ws(t.colors.eyes,.88),"nose");function D(T,P,z,O=[0,0,0],J=[1,1,1],et=!1,st=""){let C=new pe(P,z);return C.position.set(...O),C.scale.set(...J),C.castShadow=!0,C.receiveShadow=!0,C.name=st,T.add(C),et&&(C.userData.surfaceMaterial=z.name,C.userData.furLength=z.name==="micro"?.011:.024,a.push(C)),C}let U=(T,P,z,O=A,J=!0,et="")=>D(T,v(),O,P,z,J,et);function N(T,P){T.geometry=T.geometry.clone(),T.material=T.material.clone(),T.material.vertexColors=!0,T.material.color.set("#FFFFFF");let z=T.geometry.attributes.position,O=new Float32Array(z.count*3),J=new Xt;for(let et=0;et<z.count;et++)P(new B(z.getX(et)*T.scale.x,z.getY(et)*T.scale.y,z.getZ(et)*T.scale.z),J),O[et*3]=J.r,O[et*3+1]=J.g,O[et*3+2]=J.b;return T.geometry.setAttribute("color",new Yt(O,3)),T}function H(T,P,z,O,J=24,et=!1,st=""){let C=new cn(P.map(Xs),et,"catmullrom",.35);return D(T,new bi(C,J,z,7,et),O,[0,0,0],[1,1,1],!1,st)}function Z(T,P,z,O,J,et,st=A,C=!0){return D(T,g(P+":"+O,()=>Cu(P,z,O)),st,J,et,C,P)}function X(T,P,z,O,J=A,et=J,st="paw"){let C=new Pe;C.name=T<0?"arm-left":"arm-right",C.position.set(...P),e.add(C);let M=Ja.has(t.shape),k=st==="hand",Y=[T*(M?-.035:k?-.2:.06),-z,M?.195:k?.37:.065],Q=k?[[0,.045,-.05],[T*.068,-z*.35,.15],[-T*.06,-z*.69,.32],[Y[0],-z+.045,Y[2]]]:M?[[0,.075,-.07],[T*.02,-z*.28,.02],[-T*.02,-z*.68,.135],[Y[0],-z+.025,Y[2]],[Y[0],-z-O*.85,Y[2]+.035]]:[[0,.055,-.012],[T*.065,-z*.32,.015],[T*.08,-z*.69,.11],[Y[0],-z+.025,Y[2]]],V=D(C,$a(Q,O,k?.87:M?1.055:1.03),J,[0,0,0],[1,1,1],!0,"upper-arm");return M&&J!==et&&N(V,(ut,mt)=>mt.copy(J.color).lerp(et.color,Ae.smoothstep(-ut.y,z*.66,z*.84))),M||U(C,Y,[O*(k?1.03:1.05),O*(k?.82:.88),O*1.04],et,!0,st),st==="hand"&&U(C,[Y[0]-T*O*.65,Y[1]+.025,Y[2]+.04],[O*.35,O*.49,O*.39],et,!1,"thumb"),o.push(C),w.push(Xs(Y).add(Xs(P))),C}function j(T,P,z,O,J,et=A){let st=new Pe;return st.name=T<0?"leg-left":"leg-right",st.position.set(P,z,O),e.add(st),U(st,[0,0,0],J,et,!0,"hind-paw"),c.push(st),st}function tt(T,P,z,O,J=A,et=null){let st=new Pe;if(st.position.set(...z),st.rotation.z=-T*(P==="long"?.07:.12),n.add(st),P==="round"||P==="long")U(st,[0,0,0],O,J,!0,"outer-ear"),et&&U(st,[0,0,O[2]*.75],[O[0]*.61,O[1]*.68,O[2]*.28],R(et,"skin"),!1,"inner-ear");else{let C=[[0,.88],[-.16,.81],[-.49,.19],[-.7,-.48],[-.51,-.84],[.51,-.84],[.7,-.48],[.49,.19],[.16,.81]];Z(st,"tri-ear",C,.36,[0,0,0],O,J,!0),et&&Z(st,"tri-ear-inner",C,.16,[0,-O[1]*.05,O[2]*.3],[O[0]*.56,O[1]*.64,O[2]*.37],R(et,"skin"),!1)}return st}function gt(T,P,z=A){S=new Pe,S.name="tail",e.add(S);let O=D(S,$a(T,P,.52),z,[0,0,0],[1,1,1],!0,"rounded-tail");return O.userData.surfaceMaterial=z.name,S}function wt(T,P,z=b){let O=U(n,T,P,z,!0,"muzzle");return d.push(O),O}t.shape==="human"?ot():Ja.has(t.shape)?Dt(t.shape):ft(t.shape),t.shape==="human"||Ja.has(t.shape)?n.scale.setScalar(m):n.scale.set(1,m,1),W(),e.updateMatrixWorld(!0);let _t=new We().setFromObject(e),Lt=new We().setFromObject(n),Ut=T=>n.localToWorld(Xs(T)).toArray(),Bt={headTop:[n.position.x,Lt.max.y,n.position.z],face:Ut([0,p.eyeY,E(0,p.eyeY)+.035]),neck:Ut([0,p.neckY??-.58,.05]),handL:w[0]?.toArray()??[-.9,.65,.55],handR:w[1]?.toArray()??[.9,.65,.55],shoulderL:o[0]?.position.toArray()??[-1,.9,0],shoulderR:o[1]?.position.toArray()??[1,.9,0]},ht=new oi(new B(n.position.x,_t.max.y+2,n.position.z),new B(0,-1,0)).intersectObject(n,!0)[0];Bt.crown=ht?ht.point.toArray():Bt.headTop.slice(),Bt.mouth=Ut([0,p.mouthY,E(0,p.mouthY)+.042]);let pt=new oi(new B(0,Bt.neck[1],_t.max.z+2),new B(0,0,-1)).intersectObject(e,!0)[0];return Bt.neckFront=pt?[0,Bt.neck[1],pt.point.z+.022]:Ut([0,p.neckY??-.58,E(0,p.neckY??-.58)+.025]),e.userData.anatomy=t.shape==="human"?"human":Ja.has(t.shape)?"animal":"blob",e.userData.material=t.material,e.userData.restHeadPosition=n.position.clone(),{root:e,head:n,torso:s,face:r,eyeGroups:h,arms:o,legs:c,tail:S,anchors:Bt,height:_t.max.y,width:_t.max.x-_t.min.x,surfaces:a};function ft(T){let z={dumpling:[1,.94,1],cloud:[1,.97,1.07],capsule:[1,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1,1,.96],roundedcube:[1.03,1,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.1,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.1],twin:[.88,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.1,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.2]}[T]||[1.05,1.03,1];z[0]*=x;let O;T==="dumpling"?O=D(n,g("blob-dumpling-layered",()=>es("dumpling-v5",[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.3)),A,[0,0,0],z,!0,"blob-dumpling"):T==="sphere"?O=U(n,[0,0,0],z,A,!0,"blob-sphere"):T==="frog"?O=D(n,g("blob-frog-sculpted",()=>es("frog-v4",[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.4],[.43,.62,.02,.295,.345,.4]],.255)),A,[0,0,0],z,!0,"blob-frog"):T==="cloud"?O=D(n,g("blob-cloud-sculpted",()=>es("cloud-v3",[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),A,[0,0,0],z,!0,"blob-cloud"):T==="sprout"?O=D(n,g("blob-sprout",()=>es("sprout-v4",[[0,-.13,0,.94,.94,.86],[-.085,.9,-.055,.2,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),A,[0,0,0],z,!0,"blob-sprout"):T==="ghost"?O=D(n,g("blob-ghost-sculpted",()=>es("ghost-v4",[[0,.1,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),A,[0,0,0],z,!0,"blob-ghost"):O=D(n,g("blob-"+T,()=>Cu("blob-r4-"+T,Iu(T),T==="arch"?.87:.84,.99)),A,[0,0,0],z,!0,"blob-"+T),d=[O],O.geometry.computeBoundingBox();let J=O.geometry.boundingBox.min.y*z[1],et=["feet","both"].includes(t.limbs);if(n.position.y=-J*m+(et?.22:.035),p={eyeX:(T==="triangle"?.255:T==="pill"?.3:.275)*x,eyeY:T==="dumpling"?.015:T==="cloud"?.03:T==="triangle"?.075:T==="sprout"?.07:.12,mouthY:T==="dumpling"?-.22:-.23,size:T==="triangle"?.91:T==="dumpling"?.95:1,neckY:J*.72},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let C of[-1,1])X(C,[C*1.03*x,n.position.y-.1,.1],.4,.15,A,A,"mitten");if(et)for(let C of[-1,1])j(C,C*.46*x,.13,.12,[.21,.13,.28]);if(T==="frog"&&(p={eyeX:.43*x,eyeY:.66,mouthY:-.12,size:.87,neckY:J*.74}),T==="twin")for(let C of[-1,1]){let M=U(n,[C*.16,1.075,-.045],[.225,.285,.22],A,!0,"twin-top-lobe");M.rotation.z=-C*.3}}function ot(){let T=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",P=R(t.colors.skin,T),z=R(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),O=R(Ws(t.colors.clothing,.52),"fabric"),J=R("#EEE8DF","rubber");s.position.set(0,.86,0),n.position.set(0,1.96,.015),U(s,[0,0,0],[.56*x,.66,.36],z,!0,"sweater-body"),U(s,[0,.51,0],[.21,.24,.21],P,!1,"neck");let et=t.faceShape||"round",st=g("human-face-"+et,()=>{let V=new ri(1,64,44),ut=V.attributes.position,mt=et==="oval"?.53:et==="soft-square"?.565:.558,Et=et==="oval"?.665:.626;for(let vt=0;vt<ut.count;vt++){let $=ut.getX(vt),yt=ut.getY(vt),bt=ut.getZ(vt),St=Ae.smoothstep(yt,-.88,.01),Mt=1+.022*Math.exp(-(((yt+.13)/.29)**2)),Rt=(et==="soft-square"?.91+.09*St:.865+.135*St)*Mt,F=et==="soft-square"?Math.sign($)*Math.abs($)**.93:$;ut.setXYZ(vt,F*mt*Rt,yt*Et,bt*.555+(bt>0?.012*Math.exp(-(((yt+.18)/.3)**2)):0))}return V.computeVertexNormals(),V.computeBoundingBox(),V.computeBoundingSphere(),V}),C=D(n,st,P,[0,0,0],[1,1,1],T==="fabric","human-face");N(C,(V,ut)=>{let mt=Math.exp(-(((Math.abs(V.x)-.325)/.077)**2)-((V.y+.126)/.053)**2)*Ae.smoothstep(V.z,.3,.42)*.095;ut.copy(P.color).lerp(new Xt("#D8797F"),mt)}),d=[C];for(let V of[-1,1])tt(V,"round",[V*.552,-.045,.025],[.1,.14,.09],P,gn(t.colors.skin,"#B96762",.15)),X(V,[V*.42*x,1.285,-.012],.755,.153,z,P,"hand"),j(V,V*.235*x,.16,.065,[.19,.16,.25],J),U(s,[V*.24,-.44,0],[.19,.36,.205],O,!1,"trouser-leg");let M=R(Ws(t.colors.clothing,.9),z.name),k=new Gi(.211,.048,9,48),Y=D(s,k,M,[0,.53,.005],[1,1,1]);Y.rotation.x=Math.PI/2;let Q=t.outfit||"sweater";if(Q==="hoodie"){let V=U(s,[0,.44,-.18],[.35,.31,.21],z,!0,"hood");for(let ut of[-1,1])H(s,[[ut*.13,.49,.225],[ut*.16,.23,.354],[ut*.145,.05,.363]],.011,R("#DAD6CC","fabric"),14);H(s,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,M,18)}else if(Q==="cardigan"||Q==="shirt"){H(s,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,M,20);for(let V=0;V<4;V++)U(s,[.03,.27-V*.18,.36-Math.abs(.1-V*.13)*.1],[.025,.025,.013],R("#D5C9B3","rubber"),!1,"button");for(let V of[-1,1]){let ut=U(s,[V*.15,.44,.25],[.095,.15,.036],M,!1,"collar");ut.rotation.z=V*.55}}else for(let V of[-.43,-.47,-.51])H(s,[[-.34,V,.22],[0,V-.025,.301],[.34,V,.22]],.012,M,24);p={eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67},Tt()}function Tt(){let T=t.hair||"short-curly",P=T==="short-curly",O=t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material)?"fiber":"hair",J=[R(Ws(t.colors.hair,.915),O),R(t.colors.hair,O),R(gn(t.colors.hair,"#C4A188",.045),O)],et=t.faceShape==="oval",st=et?.559:.588,C=et?.71:.675,M=.574,k=F=>new B(F.x/(st*st),(F.y-.018)/(C*C),F.z/(M*M)).normalize(),Y=(F,rt,ct=0)=>{let xt=new B(Math.sin(F)*Math.sin(rt)*st,Math.cos(F)*C+.018,Math.sin(F)*Math.cos(rt)*M);return xt.addScaledVector(k(xt),ct)},Q=F=>1.12+(1-Math.cos(F))*.56+(P?.032*Math.sin(F*7+.6):.01*Math.sin(F*2)),V=[],ut=[],mt=[],Et=36,vt=96;for(let F=0;F<=Et+1;F++)for(let rt=0;rt<=vt;rt++){let ct=rt/vt*sn,xt=Math.min(1,F/Et)*Q(ct),dt=F>Et?-.055:P?.018+.004*Math.sin(xt*8+Math.sin(ct*3))**2:.016,at=Y(xt,ct,dt);if(V.push(at.x,at.y,at.z),ut.push(rt/vt,F/Et),F<=Et&&rt<vt){let At=F*(vt+1)+rt,zt=At+vt+1;mt.push(At,zt,At+1,At+1,zt,zt+1)}}let $=new ye;$.setAttribute("position",new Yt(V,3)),$.setAttribute("uv",new Yt(ut,2)),$.setIndex(mt),$.computeVertexNormals(),D(n,$,J[0],[0,0,0],[1,1,1],!1,"hair-foundation");let yt=[[],[],[]],bt=[[],[],[]],St=0,Mt=(F,rt=.002,ct=null)=>{let xt=new cn(F,!1,"centripetal");yt[ct??St++%3].push(new bi(xt,Math.max(12,F.length),rt,3,!1))};if(P){let F=(ct,xt,dt,at=!1)=>{let At=(at?.051:.053)+Oe(dt+44)*.011,zt=at?.35:Math.max(.055,ct-.3),Qt=at?1.115+Oe(dt+8)*.14:Math.min(Q(xt)+.025,ct+.39),Ot=[],Zt=24;for(let ae=0;ae<=Zt;ae++){let se=ae/Zt,we=Ae.lerp(zt,Qt,se)-Math.max(0,se-.82)**2*.55+Math.sin(se*Math.PI*2.25)*.033,Ee=(1-se)*-.3+Math.sin(se*Math.PI*2.75+Oe(dt+9)*.35)*.095+Math.max(0,se-.67)**2*.7;Ot.push(Y(we,xt+Ee,.006+Math.sin(se*Math.PI)*(.023+Oe(dt+64)*.012)))}let ne=new cn(Ot,!1,"centripetal"),ee=(ae,se,we=0)=>{let Ee=ne.getPoint(ae),Ye=k(Ee),rn=ne.getTangent(ae).normalize(),wn=new B().crossVectors(Ye,rn).normalize(),En=Math.min(1,Math.sqrt(Math.max(0,ae/.11)),Math.sqrt(Math.max(0,(1-ae)/.14)))*(.97-.15*ae),Tn=At*En*se,_n=(.02+Oe(dt+51)*.006)*En*Math.sqrt(Math.max(0,1-se*se));return Ee.addScaledVector(wn,Tn).addScaledVector(Ye,_n+we)},fe=[],ue=[],Me=[],Be=12;for(let ae=0;ae<=Zt;ae++)for(let se=0;se<=Be;se++){let we=ae/Zt,Ee=se/Be*sn,Ye=ne.getPoint(we),rn=k(Ye),wn=ne.getTangent(we).normalize(),En=new B().crossVectors(rn,wn).normalize(),Tn=Math.min(1,Math.sqrt(Math.max(0,we/.11)),Math.sqrt(Math.max(0,(1-we)/.14)))*(.97-.15*we);if(Ye.addScaledVector(En,Math.cos(Ee)*At*Tn).addScaledVector(rn,Math.sin(Ee)*(.02+Oe(dt+51)*.006)*Tn),fe.push(Ye.x,Ye.y,Ye.z),ue.push(se/Be,we),ae<Zt&&se<Be){let _n=ae*(Be+1)+se,L=_n+Be+1;Me.push(_n,_n+1,L,_n+1,L+1,L)}}let Ce=new ye;Ce.setAttribute("position",new Yt(fe,3)),Ce.setAttribute("uv",new Yt(ue,2)),Ce.setIndex(Me),Ce.computeVertexNormals(),bt[dt%9===0?0:1].push(Ce);for(let ae=0;ae<9;ae++){let se=(ae/8*2-1)*.94,we=[];for(let Ee=0;Ee<=14;Ee++){let Ye=.032+Ee/14*.938,rn=Math.sin(Ye*Math.PI*1.1+dt)*.035;we.push(ee(Ye,ns(se+rn,-.97,.97),.0011))}Mt(we,.0011+Oe(dt*17+ae)*5e-4,ae%6===0?2:ae%5===0?0:1)}if(dt%5===0){let ae=[];for(let se=0;se<=12;se++){let we=.17+se/12*.68;ae.push(ee(we,.78,.004+Math.sin(se/12*Math.PI)*.009))}Mt(ae,.0011,2)}},rt=1;for(let[ct,xt,dt]of[[.29,5,.1],[.65,8,.19],[1.03,11,0],[1.43,10,.21],[1.81,9,.05]])for(let at=0;at<xt;at++){let At=at/xt*sn+dt;ct>Q(At)-.07||F(ct+(Oe(rt+18)-.5)*.05,At,rt++)}for(let ct=0;ct<11;ct++){let xt=(ct-5)*.173;F(1.03,xt,70+ct,!0)}for(let ct=0;ct<72;ct++){let xt=ct*2.399963,dt=.1+Oe(ct+8)*1.6,at=Math.min(Q(xt)-.015,dt+.25+Oe(ct+16)*.2);if(at<=dt)continue;let At=[];for(let zt=0;zt<=12;zt++){let Qt=zt/12;At.push(Y(Ae.lerp(dt,at,Qt),xt+Math.sin(Qt*Math.PI)*.11,.025))}Mt(At,.0013,ct%3)}}else for(let F=0;F<220;F++){let rt=F*2.399963,ct=.06+Oe(F)*1,xt=Math.min(Q(rt),ct+.44+Oe(F+9)*.5),dt=[];for(let at=0;at<13;at++){let At=at/12,zt=Ae.lerp(ct,xt,At),Qt=(1-At)*.21*(Math.cos(rt)+.4);dt.push(Y(zt,rt+Qt,.015+Math.sin(At*Math.PI)*.014))}Mt(dt,.0027+Oe(F+17)*.0015)}if(["bob","long","wavy"].includes(T)){let F=T==="bob"?.4:.9,rt=[];for(let ct of[-1,1])rt.push({center:[ct*.46,-.31-F*.22,-.09],size:[.17,F*.6,.24],name:"hair-side-foundation"});rt.push({center:[0,-.31-F*.27,-.33],size:[.45,F*.57,.15],name:"hair-back-foundation"});for(let[ct,xt]of rt.entries()){U(n,xt.center,xt.size,J[0],!1,xt.name);for(let dt=0;dt<44;dt++){let at=dt/44*sn,At=[];for(let zt=0;zt<=20;zt++){let Qt=zt/20,Ot=.12+Qt*2.82,Zt=at+(T==="wavy"?Math.sin(Qt*sn*1.1)*.2:Math.sin(Qt*Math.PI)*.045),ne=new B(Math.sin(Ot)*Math.sin(Zt)/xt.size[0],Math.cos(Ot)/xt.size[1],Math.sin(Ot)*Math.cos(Zt)/xt.size[2]).normalize();At.push(new B(xt.center[0]+Math.sin(Ot)*Math.sin(Zt)*xt.size[0],xt.center[1]+Math.cos(Ot)*xt.size[1],xt.center[2]+Math.sin(Ot)*Math.cos(Zt)*xt.size[2]).addScaledVector(ne,.0013))}Mt(At,.00135,(dt+ct)%3)}}}if(T==="ponytail"||T==="bun"){let F=T==="bun",rt=new B(F?0:.17,F?.56:.04,F?-.28:-.57);F?U(n,rt.toArray(),[.235,.23,.23],J[0],!1,"bun-foundation"):H(n,[[0,.4,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,J[0],28);for(let ct=0;ct<88;ct++){let xt=ct/88*sn,dt=[];for(let at=0;at<18;at++){let At=at/17;if(F){let zt=At*sn*1.08;dt.push(rt.clone().add(new B(Math.cos(zt)*Math.sin(xt)*.242,Math.sin(zt)*.233,Math.cos(zt)*Math.cos(xt)*.238)))}else dt.push(new B(.025+At*.32+Math.sin(xt)*(.1*(1-At)+.025),.39-At*.99,-.4-Math.sin(At*Math.PI)*.25+Math.cos(xt)*(.1*(1-At)+.025)))}Mt(dt,.004)}}if(T==="braids")for(let F of[-1,1]){D(n,$a([[F*.56,.015,-.045],[F*.535,-.09,-.005],[F*.49,-.21,.055]],.09,.9),J[0],[0,0,0],[1,1,1],!1,"braid-root");for(let rt=0;rt<3;rt++){let ct=[];for(let xt=0;xt<40;xt++){let dt=xt/39,at=dt*sn*3.1+rt/3*sn;ct.push([F*(.49+.015*Math.sin(dt*Math.PI))+Math.cos(at)*.035,-.14-dt*.81,.055+Math.sin(at)*.035])}D(n,$a(ct,.038,.86),J[rt],[0,0,0],[1,1,1],!1,"braid-plait")}U(n,[F*.49,-.902,.055],[.071,.027,.062],R(gn(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}bt.forEach((F,rt)=>{F.length&&D(n,Sc(F),J[rt],[0,0,0],[1,1,1],!1,"hair-curl-volume")}),yt.forEach((F,rt)=>{if(F.length){let ct=new si({color:gn(J[rt].color,t.colors.hair,.55)}),xt=D(n,Sc(F),ct,[0,0,0],[1,1,1],!1,"hair-strands");xt.castShadow=!1,xt.receiveShadow=!1}})}function Dt(T){let P={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},[z,O,J,et,st,C,M]=P[T],k={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[T],Y=(1-k)*1.3+.065;s.position.set(0,st*k+.12,-.11),n.position.set(0,M-Y,.12);let Q=T==="penguin"?I:A,V=["penguin","owl"].includes(T),ut=V?U(s,[0,0,0],[et*x,st*k,C],Q,!0,"animal-torso"):D(s,g("animal-seated-"+T,()=>es("animal-seated-r4-"+T,[[0,0,0,et,st*k,C],[-et*.6,-st*k*.4,.025,et*.49,st*k*.59,C*.71],[et*.6,-st*k*.4,.025,et*.49,st*k*.59,C*.71]],.13)),Q,[0,0,0],[x,1,1],!0,"animal-torso"),mt;T==="shiba"?mt=D(n,g("shiba-soft-face",()=>es("shiba-face-r4",[[0,0,0,z,O,J],[0,-.2,.365,.435,.257,.265]],.2)),A,[0,0,0],[1,1,1],!0,"animal-head"):T==="capybara"?mt=Z(n,"capybara-skull",Iu("roundedcube"),.85,[0,0,0],[z,O,J/.85],A,!0):mt=U(n,[0,0,0],[z,O,J],Q,!0,"animal-head"),d=[mt],["axolotl","capybara","hedgehog","panda"].includes(T)||N(ut,($,yt)=>{let bt=($.x/(et*.68*x))**2+(($.y+.06)/(st*k*.86))**2,St=(1-Ae.smoothstep(bt,.9,1.035))*Ae.smoothstep($.z,C*.26,C*.67);yt.copy(Q.color).lerp(b.color,St)}),p={eyeX:z*.44,eyeY:.07,mouthY:-O*.43,size:.72,neckY:-O*.85};let Et=J*.78,vt=gn(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(T)){let $=T==="fox"?[.19,.155,.26]:T==="hedgehog"?[.215,.16,.29]:T==="shiba"?[.22,.18,.19]:T==="bear"?[.21,.18,.19]:[.16,.13,.155];if(T==="shiba")N(mt,(bt,St)=>{let Mt=(bt.x/.565)**2+((bt.y+.225)/.358)**2,Rt=(1-Ae.smoothstep(Mt,.94,1.055))*Ae.smoothstep(bt.z,.08,.3);for(let F of[-1,1]){let rt=((bt.x-F*.265)/.061)**2+((bt.y-.238)/.045)**2;Rt=Math.max(Rt,(1-Ae.smoothstep(rt,.68,1.04))*Ae.smoothstep(bt.z,.25,.37))}St.copy(A.color).lerp(b.color,Rt)});else for(let bt of[-1,1])wt([bt*$[0]*.54,-O*.31,Et],$,T==="panda"?A:b);let yt=T==="shiba"?.635:Et+$[2]*.89;if(U(n,[0,-O*.27,yt],[T==="rabbit"?.043:T==="shiba"?.065:.07,.042,.035],T==="rabbit"?R(vt,"nose"):y,!1,"nose"),T==="cat")for(let bt of[-1,1])for(let St=0;St<3;St++)H(n,[[bt*.2,-.2+St*.025,Et+.14],[bt*.42,-.21+St*.05,Et+.13],[bt*.62,-.23+St*.083,Et+.02]],.0045,R(gn(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(T))for(let $ of[-1,1])tt($,"triangle",[$*z*.69,O*.75,-.035],[T==="fox"||T==="shiba"?.3:.25,T==="fox"?.39:T==="shiba"?.3:.28,.43],A,vt);else if(T==="rabbit")for(let $ of[-1,1])tt($,"long",[$*.235,.61,-.055],[.14,.51,.11],A,vt);else if(["panda","bear","otter","capybara"].includes(T))for(let $ of[-1,1])tt($,"round",[$*z*.74,O*.72,-.035],T==="otter"?[.105,.12,.09]:T==="capybara"?[.13,.135,.095]:[.205,.205,.13],T==="panda"?I:A,vt);if(T==="panda")for(let $ of[-1,1]){let yt=U(n,[$*.285,.07,J*.86],[.16,.2,.06],I,!1,"eye-patch");yt.rotation.z=-$*.24,d.push(yt)}if(T==="capybara"){wt([0,-.16,.38],[.43,.28,.4],A),p={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let $ of[-1,1])U(n,[$*.125,-.145,.768],[.038,.027,.013],y,!1,"nostril")}if(T==="axolotl"){let $=R(gn(t.colors.body,"#DD7695",.58));for(let yt of[-1,1])for(let bt=0;bt<3;bt++){let St=[yt*.62,.18-bt*.15,-.06],Mt=[yt*(1+(bt===1?.09:0)),.45-bt*.35,-.08];H(n,[St,[yt*.85,(St[1]+Mt[1])*.5,.02],Mt],.041,$,18);for(let Rt=0;Rt<4;Rt++){let F=.37+Rt*.17,rt=Ae.lerp(St[0],Mt[0],F),ct=Ae.lerp(St[1],Mt[1],F);for(let xt of[-1,1])H(n,[[rt,ct,-.055],[rt+yt*.055,ct+xt*.085,.01],[rt+yt*.06,ct+xt*.105,-.018]],.018,$,8)}}p={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}for(let $ of[-1,1]){if(V){let bt=T==="penguin"?1.07:.99,St=X($,[$*et*.82*x,bt,-.04],.46,.135,Q,Q,"wing-tip");St.rotation.z=$*.13,St.scale.z=.64,w[$<0?0:1]=Xs([$*(et*.82*x+.025),bt-.445,.055])}else{let bt=Math.min(.8,M-Y-.54),St=["rabbit","axolotl","hedgehog"].includes(T),Mt=St?.122:T==="bear"||T==="panda"?.164:.149;X($,[$*et*.57*x,bt,.155],Math.max(.23,bt-(St?.23:.245)),Mt,T==="panda"?I:A,T==="shiba"?b:A)}let yt=j($,$*et*(V?.6:.8)*x,V?.1:.112,V?.2:.015,[V?.18:.165,V?.1:.112,V?.225:.2],V?R("#D8A34D","rubber"):T==="panda"?I:A);if(!V)for(let bt=0;bt<2;bt++)H(yt,[[-.05+bt*.095,.026,.165],[-.05+bt*.095,.067,.146]],.0035,R(gn(t.colors.body,t.colors.eyes,.1)),6)}if(T==="shiba")gt([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),U(S,[.65,.65,-.18],[.125,.115,.12],b,!0,"tail-tip");else if(T==="cat")gt([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(T==="fox"){gt([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let $=U(S,[1.14,.9,-.15],[.2,.32,.21],b,!0,"white-tail-tip");$.rotation.z=-.36}else if(T==="rabbit")S=new Pe,e.add(S),U(S,[.46,.41,-.41],[.24,.24,.23],b,!0,"cotton-tail");else if(T==="hedgehog")gt([[.25,.24,-.35],[.52,.18,-.38],[.7,.17,-.28]],.08);else if(["otter","axolotl"].includes(T)){if(gt([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],T==="axolotl"?.13:.14),T==="axolotl"){let $=U(S,[.78,.31,-.6],[.41,.23,.055],R(gn(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");$.rotation.y=-.7}}else S=new Pe,e.add(S),U(S,[.45,.4,-.43],[.135,.14,.13],Q,!0,"short-tail");if(V){if(T==="owl")for(let yt of[-1,1]){let bt=U(n,[yt*.235,.055,.38],[.255,.3,.11],b,!0,"facial-disc");d.push(bt),tt(yt,"triangle",[yt*.39,.43,-.055],[.2,.23,.29],A,null)}let $=Z(n,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[T==="penguin"?.155:.09,.115,.12],R("#D8A34D","rubber"),!1);d.push($),p.mouthY=-.26,p.size=T==="owl"?1.05:.85}if(T==="hedgehog"){let $=[];for(let yt=0;yt<110;yt++){let bt=yt*2.399963,St=.15+Oe(yt)*.93,Mt=Math.sqrt(Math.max(0,1-St*St)),Rt=new B(Math.sin(bt)*Mt,St,Math.cos(bt)*Mt);if(Rt.z>.32)continue;let F=new B(Rt.x*.69*x,Rt.y*.61+.71,Rt.z*.58-.13),rt=new br(.041,.22,6,1);rt.translate(0,.075,0),rt.applyQuaternion(new Je().setFromUnitVectors(zg,Rt)),rt.translate(F.x,F.y,F.z),$.push(rt)}D(e,Sc($),R(Ws(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function E(T,P){let z=new oi(new B(T,P,4),new B(0,0,-1)),O=-1/0;for(let J of d){J.updateMatrix();let et=new pe(J.geometry,J.material);et.matrixWorld.copy(J.matrix);let st=z.intersectObject(et,!1);st.length&&(O=Math.max(O,st[0].point.z))}return Number.isFinite(O)?O:.4}function q(T,P,z=_,O="face-line"){return H(r,T.map(([J,et])=>[J,et,E(J,et)+.022]),P,z,24,!1,O)}function W(){let T=t.expression,P=ns(Number(t.eyeScale)||1,.45,1.8)*p.size,z=ns(Number(t.eyeSpacing)||1,.6,1.6),O=p.eyeX*z,J={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]},[et,st]=J[t.eyes]||J.softOval,C=T==="closed",M={sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[T]??1;for(let Q of[-1,1]){let V=Q*O,ut=p.eyeY+(["curious","skeptical"].includes(T)&&Q>0?.025:0),mt=E(V,ut),Et=C||T==="wink"&&Q>0||T==="delighted",vt=M*(T==="skeptical"&&Q<0?.52:1),$=.012,yt=(E(V+$,ut)-E(V-$,ut))/($*2),bt=(E(V,ut+$)-E(V,ut-$))/($*2),St=new B(-yt,-bt,1).normalize(),Mt=.009;for(let F of[-1,0,1])for(let rt of[-1,0,1]){let ct=F*et*P,xt=rt*st*P*vt;Mt=Math.max(Mt,E(V+ct,ut+xt)-mt-yt*ct-bt*xt+.006)}let Rt=new Pe;if(Rt.name=Q<0?"eye-left":"eye-right",Rt.position.set(V,ut,mt+Mt),r.add(Rt),h.push(Rt),Rt.userData.restScaleY=1,Rt.quaternion.setFromUnitVectors(new B(0,0,1),St),Rt.rotateZ(["sad","shy","worried"].includes(T)?Q*.15:T==="angry"?-Q*.24:T==="happy"?Q*.06:T==="focused"?-Q*.09:T==="proud"?Q*.09:0),Et)H(Rt,[[-et*P,0,0],[0,(T==="delighted"?.043:-.021)*P,.01],[et*P,0,0]],.013*P,_,18,!1,T==="delighted"?"delighted-lid":"closed-lid");else{let F=R("#FCFCF5","eye"),rt=R("#FFFFFF","eye");if(t.shape==="frog"&&!["oval","side"].includes(t.eyes)&&U(Rt,[0,0,-.073],[et*P*2.35,st*P*1.47,.098],R("#F8FFE8","rubber"),!1,"frog-eye-white"),t.eyes==="sleepy"&&!["focused","surprised","excited"].includes(T)&&!["work","read","camera"].includes(t.action)?(U(Rt,[0,-st*.29*P,.003],[et*.44*P,st*.57*P,.023],_,!1,"eye"),H(Rt,[[-et*P,st*.12*P,.006],[0,st*.16*P,.011],[et*P,st*.12*P,.006]],.023*P,_,16,!1,"sleepy-upper-lid")):t.eyes==="capsule"?D(Rt,g("capsule-eye",()=>new vr(1,2.8,6,20)),_,[0,0,0],[et*P,st*P*vt/2.4,.021],!1,"eye"):U(Rt,[0,0,0],[et*P,st*P*vt,.022],["oval","side"].includes(t.eyes)?F:_,!1,"eye"),["oval","side"].includes(t.eyes)){let ct=["work","read","camera"].includes(t.action),xt=t.eyes==="side"&&!ct?-.03*P:T==="thinking"?.019*P:0;U(Rt,[xt,ct?-.02*P:T==="proud"?.017*P:0,.021],[et*(t.eyes==="side"?.74:.58)*P,st*(t.eyes==="side"?.74:.7)*P*vt,.017],_,!1,"pupil")}if(t.eyes==="lash"&&H(Rt,[[Q*et*.5*P,st*.17*P,.009],[Q*et*1.12*P,st*.1*P,.004],[Q*et*1.72*P,st*.31*P,-.005]],.012*P,_,14,!1,"outer-lash"),t.eyes==="star"){let ct=g("star-reflection",()=>{let at=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];return new Vi(new In(at.map(([At,zt])=>new It(At,zt))))}),xt=D(Rt,ct,rt,[-et*.11*P,st*.29*P*vt,.027],[P,P,P],!1,"star-catchlight");xt.castShadow=!1,xt.receiveShadow=!1;let dt=D(Rt,g("star-reflection-dot",()=>new Mr(1,12)),rt,[et*.36*P,-st*.37*P*vt,.026],[.01*P,.01*P,1],!1,"catchlight-dot");dt.castShadow=!1,dt.receiveShadow=!1}else if(["sparkle","glossy","oval"].includes(t.eyes)){let ct=U(Rt,[-et*.29*P,st*.35*P*vt,.027],[.018*P,.02*P,.006],rt,!1,"catchlight");t.eyes==="sparkle"&&ct.scale.multiplyScalar(.76),t.eyes==="glossy"&&U(Rt,[et*.35*P,-st*.34*P*vt,.025],[.008*P,.008*P,.004],rt,!1,"catchlight-small")}if(t.shape==="frog"&&Rt.children.some(ct=>ct.name==="frog-eye-white"))for(let ct of Rt.children)ct.name!=="frog-eye-white"&&(ct.position.z+=.02)}if(t.brows!=="none"){let F=ut+st*P*vt+.073,rt=(t.brows==="curious"||T==="skeptical")&&Q>0?.047:0,ct=T==="angry"?-Q*.048:T==="worried"||t.brows==="angled"?Q*.045:t.brows==="straight"?0:t.brows==="curious"?Q*.014:.006;q([[V-.09*P,F+rt-ct],[V,F+rt+(t.brows==="straight"?0:t.shape==="human"?.012:.025)],[V+.09*P,F+rt+ct]],.01*P,R(t.shape==="human"?gn(t.colors.hair,t.colors.eyes,.24):gn(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let k=p.mouthY,Y=.103*p.size;if(t.mouth==="smile"){let Q=["sad","worried","angry"].includes(T),V=["skeptical","confident","proud"].includes(T),ut=Array.from({length:13},(mt,Et)=>{let vt=Et/12,$=(vt*2-1)*Y,yt=(Q?-.031:.039)*(2*vt-1)**2;return[$,k+(Q?.023:-.027)+yt+(V?vt*.024:0)]});q(ut,t.shape==="human"?.0085:.01,t.shape==="human"?R(gn(t.colors.skin,"#684538",.7),"matteEye"):_,Q?"frown":"smile")}else if(t.mouth==="pout")q([[-Y*.68,k-.014],[0,k+.02],[Y*.68,k-.014]],.013,_,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"){let Q=t.mouth==="laugh";U(r,[0,k,E(0,k)+.019],[Y*(Q?1.16:.42),Y*(Q?.93:.51),.024],_,!1,"mouth"),Q&&U(r,[0,k-.043,E(0,k)+.041],[Y*.62,.032,.012],R("#D98C91","skin"),!1,"tongue")}if(t.shape==="human"&&U(r,[0,-.095,E(0,-.095)+.006],[.033,.044,.025],R(gn(t.colors.skin,"#C29076",.05),"skin"),!1,"nose"),t.shape!=="human"&&["shy","happy","excited"].includes(T))for(let Q of[-1,1]){let V=Q*O*1.32,ut=p.eyeY-.17,mt=R(gn(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");U(r,[V,ut,E(V,ut)+.008],[.085*p.size,.033*p.size,.009],mt,!1,"cheek")}}}var ve=i=>new B(...i),Ys=(i,t,e)=>Math.max(t,Math.min(e,i)),Re=(i,t={})=>new Pn({color:i,roughness:.78,...t});function Ke(i,t,e,n=[0,0,0]){let s=new pe(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Ti(i,t,e=[0,0,0]){let n=new Pe;return n.name=t,n.position.fromArray(e),i.add(n),n}function Ne(i,t,e,n=[0,0,0]){let s=Ke(i,new ri(1,24,16),e,n);return s.scale.fromArray(t),s}function Uu(i,t,e){let n=new In,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function xn(i,t,e,n=[0,0,0],s=.025){let[r,a,o]=t,c=Math.min(s*.35,o*.25,a*.15),h=new Hi(Uu(r-c*2,a-c*2,s),{depth:Math.max(.001,o-c*2),bevelEnabled:!0,bevelSize:c,bevelThickness:c,bevelSegments:3,curveSegments:8,steps:1});return h.translate(0,0,-(o-c*2)/2),Ke(i,h,e,n)}function Dn(i,t,e,n,s=!1){let r=new cn(t.map(ve),s,"centripetal");return Ke(i,new bi(r,Math.max(20,t.length*4),e,8,s),n)}function Du(i,t,e,n,s){let r=ve(t),a=ve(e),o=a.clone().sub(r),c=Ke(i,new Cn(n,n,o.length(),16),s);return c.position.copy(r.add(a).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new B(0,1,0),o.normalize()),c}function Ka(i,t,e,n,s,r){return Dn(i,Array.from({length:48},(a,o)=>{let c=o/48*Math.PI*2;return[Math.cos(c)*t,n,Math.sin(c)*e]}),s,r,!0)}function wc(i,t,e,n=[0,0,0],s=.025){let r=new In;for(let o=0;o<10;o++){let c=Math.PI/2+o*Math.PI/5,h=t*(o%2?.46:1);o?r.lineTo(Math.cos(c)*h,Math.sin(c)*h):r.moveTo(Math.cos(c)*h,Math.sin(c)*h)}r.closePath();let a=new Hi(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return a.translate(0,0,-s/2),Ke(i,a,e,n)}function Lu(i,t,e,n,s=[0,0,0]){let r=Ti(i,"flower",s);for(let a=0;a<5;a++){let o=a*Math.PI*.4,c=Ne(r,[t*.47,t*.69,t*.23],e,[Math.sin(o)*t*.64,Math.cos(o)*t*.64,0]);c.rotation.z=-o}return Ne(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function Hg(i){let t=i.root,e=[],n=[];t.updateMatrixWorld(!0);let s=(l,f)=>l?.traverse(m=>{if(!(!m.isMesh||!m.geometry||!m.visible)){for(let x=m;x&&x!==l;x=x.parent)if(x===i.face)return;f.push(m)}});s(i.head||t,e),s(i.torso,n);let r=e.filter(l=>!/ear|gill|muzzle|beak|facial-disc/.test(l.name)&&l.geometry.type!=="TubeGeometry"),a=t.matrixWorld.clone().invert(),o=new Kt,c=new oi,h=(i.height||3)+(i.width||3)+4;function u(l,f,m=e){c.set(ve(l).applyMatrix4(t.matrixWorld),ve(f).transformDirection(t.matrixWorld));let x=c.intersectObjects(m,!1)[0];if(!x)return null;let S=x.point.clone().applyMatrix4(a);o.getNormalMatrix(a.clone().multiply(x.object.matrixWorld));let d=x.face.normal.clone().applyMatrix3(o).normalize();return{point:S,normal:d}}return{cast:u,reach:h,top(l,f,m){return u([l,h,f],[0,-1,0])?.point.y??m},front(l,f,m,x=!1){return u([l,f,h],[0,0,-1],x?[...e,...n]:e)?.point.z??m},side(l,f,m){return u([l*h,f,m],[-l,0,0])},ornament(l,f){return u(l,f,e.filter(m=>m.name!=="hair-strands"))},around(l,f,m=!1,x=!1){let S=ve(f).normalize(),d=ve(l).addScaledVector(S,h);return u(d.toArray(),S.negate().toArray(),m?[...e,...n]:x?r:e)}}}function Vg(i){return new cn(i.map(([t,e])=>new B(t,e,0)),!0,"centripetal").getPoints(64).slice(0,-1)}function Gg(i){let t=[...i].sort((a,o)=>a[0]-o[0]),e=[];for(let a of t){if(e.length&&Math.abs(a[0]-e.at(-1)[0])<1e-5){if(a[1]<=e.at(-1)[1])continue;e.pop()}for(;e.length>=2;){let o=e.at(-2),c=e.at(-1);if((c[0]-o[0])*(a[1]-c[1])-(c[1]-o[1])*(a[0]-c[0])<-1e-5)break;e.pop()}e.push(a)}let n=e.length>=3?e.reverse():i,s=Math.abs(n[0][0]-n.at(-1)[0]),r=[];for(let a=0;a<n.length;a++){let o=n[a],c=n[a+1];if(r.push(o),!c)continue;let h=Math.abs(c[0]-o[0]);if(h>s*.16&&Math.abs(c[1]-o[1])<s*.025){let u=Math.min(s*.038,h*.1);for(let l=1;l<8;l++){let f=l/8;r.push([Ae.lerp(o[0],c[0],f),Ae.lerp(o[1],c[1],f)+Math.sin(f*Math.PI)*u,Ae.lerp(o[2],c[2],f)])}}}return r}function Wg(i,{rx:t,rz:e,s:n,contact:s,center:r},a){let h=[];for(let R=0;R<16;R++){let A=R/16*Math.PI*2;h.push(s.top(r[0]+Math.cos(A)*t*.7,r[2]+Math.sin(A)*e*.7,r[1]-.16*n)-.018*n)}let u=h.reduce((R,A)=>R+A,0)/16,l=R=>{let A=(R/(Math.PI*2)*16+16)%16,b=Math.floor(A),I=A-b;return Ae.lerp(h[b],h[(b+1)%16],I)},f=new cn([[0,-.08,.8],[.48,-.035,.95],[.7,0,1],[.88,.075,.75],[1,.18,.38],[.92,.33,.12],[.67,.46,0],[.3,.52,0],[0,.535,0]].map(ve),!1,"catmullrom",.3),m=[],x=[],S=[],d=32;for(let R=0;R<=d;R++){let A=f.getPoint(R/d),b=Math.max(0,A.x),I=A.y,_=Ys(A.z,0,1);for(let y=0;y<=48;y++){let D=y/48*Math.PI*2,U=Math.cos(D)*t*b-.06*n*(1-b),N=Math.sin(D)*e*b,H=l(D)-u,Z=.17*Math.cos(D)*t;if(m.push(r[0]+U,u+I*n+.17*U+(H-Z*.7)*_,r[2]+N),x.push(y/48,R/d),R<d&&y<48){let X=R*49+y,j=X+48+1;S.push(X,j,X+1,j,j+1,X+1)}}}let p=new ye;p.setAttribute("position",new Yt(m,3)),p.setAttribute("uv",new Yt(x,2)),p.setIndex(S),p.computeVertexNormals();let w=Ke(i,p,a);w.name="soft-beret-crown";let g=r[0]-.06*n,v=u+.535*n;Dn(i,[[g,v-.018*n,r[2]],[g+.014*n,v+.041*n,r[2]],[g+.036*n,v+.06*n,r[2]+.008*n]],.025*n,a),i.userData.contactFit={kind:"crown",samples:16,baseY:u,min:Math.min(...h),max:Math.max(...h)}}function Fu(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],a=t.shape==="human",o=e.userData.anatomy==="animal"||r.includes(t.shape),c=o&&["penguin","owl"].includes(t.shape),h=i.height||(a?2.8:o?2.5:2.1),u=i.width||2.3,l=Ys(Math.min(u/(a?1.5:o?1.8:2.3),h/(a?2.8:o?2.5:2.1)),.7,1.3),f=n.crown||n.headTop||[0,h,0],m=n.face||[0,h*.58,u*.3],x=n.neck||[0,h*(a?.49:.34),m[2]*.82],S=t.accessories||{},d=t.action||"idle",p=[],w=[],g=Re(s.accessory||"#33465a"),v=Re(s.secondary||"#f6ead9"),R=Re("#23272d",{roughness:.58}),A=Re("#e7bc72",{metalness:.24,roughness:.4}),I=(a?e.getObjectByName("hand")?.material:c?e.getObjectByName("wing-tip")?.material:null)||Re(a?s.skin||"#e9bea2":s.body||"#319ceb"),_=a||c?e.getObjectByName("upper-arm")?.material||Re(s.clothing||s.body||"#338c81"):I,y=Re(new Xt(s.accessory||"#33465a").lerp(new Xt("#ffffff"),.22)),D=(G,pt)=>{let ft=Ti(e,G,pt);return p.push(ft),ft},U=(G,pt)=>ve(pt).applyMatrix4(G.matrix).toArray(),N=null,H=d==="sleep"?"none":S.prop||"none",Z={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book"};Z[d]&&(H=Z[d]);let X=m[2]+.16*l,j=Hg(i),tt=[-1,1].map(G=>j.side(G,m[1],f[2])),gt=Math.max(.35*l,...tt.map(G=>G?Math.abs(G.point.x-f[0]):u*.36)),wt=Ys(gt*.77,.43*l,.85*l),_t=d==="listen"?"headphones":S.head||"none";if(_t!=="none"){let G=D("head-"+_t),pt=g.clone();if(pt.roughness=1,_t==="beret")Wg(G,{rx:wt,rz:wt*.78,s:l,contact:j,center:[f[0]-.045*l,f[1],f[2]+.02*l]},pt);else if(_t==="headphones"){let ft=Math.min(f[1]-.26*l,m[1]+.005*l),ot=f[2]+.015*l,Tt=[f[0],ft,ot],Dt=[];for(let E=0;E<=24;E++){let q=.055+E/24*(Math.PI-.11),W=[Math.cos(q),Math.sin(q),0],T=j.around(Tt,W,!1,!0),P=T?T.point.addScaledVector(ve(W),.039*l):ve(Tt).add(ve([Math.cos(q)*gt,Math.sin(q)*(f[1]-ft),0]));Dt.push(P.toArray())}Dn(G,Gg(Dt),.038*l,g);for(let E of[-1,1]){let q=j.side(E,ft,ot),W=q?.normal||ve([E,0,0]);W.x*E<.2&&W.set(E,.15,0).normalize();let T=q?.point||ve([f[0]+E*gt,ft,ot]),P=Ti(G,"earcup-"+E,T.clone().addScaledVector(W,.04*l).toArray());P.quaternion.setFromUnitVectors(ve([1,0,0]),W),Ne(P,[.1*l,.235*l,.188*l],R,[-.006*l,0,0]),Ne(P,[.1*l,.256*l,.197*l],g,[.07*l,0,0]),P.userData.contactFit={kind:"side",point:T.toArray(),normal:W.toArray()}}}else{let ft=wt*(_t==="wizard"?.75:.82),ot=ft*.83,Tt=Array.from({length:12},(E,q)=>{let W=q/12*Math.PI*2;return j.top(f[0]+Math.cos(W)*ft*.77,f[2]+Math.sin(W)*ot*.77,f[1]-.1*l)}),Dt=Tt.reduce((E,q)=>E+q,0)/Tt.length-.035*l;if(G.position.set(f[0],Dt,f[2]),_t==="pom"){G.position.set(f[0],f[1]+.105*l,f[2]);let E=Ne(G,[.15*l,.155*l,.15*l],pt);E.name="hat-pom",E.userData.surfaceMaterial="micro",i.surfaces?.push(E)}else if(["beanie","cap"].includes(_t)){let E=_t==="cap";if(Ke(G,new ri(ft,36,24,0,Math.PI*2,0,Math.PI/2),pt).scale.set(1,E?.87:1.07,.83),Ka(G,ft*.97,ot*.97,.01*l,(E?.024:.04)*l,pt),E){let W=Ne(G,[ft*.81,.034*l,ft*.56],g,[0,-.008*l,ot*.81]);W.rotation.x=-.1,Ne(G,[.035*l,.017*l,.035*l],y,[0,ft*.875,0])}else for(let W=0;W<16;W++){let T=W*Math.PI*2/16,P=[];for(let z=0;z<=12;z++){let O=.1+z/12*1.43;P.push([Math.sin(O)*Math.cos(T)*(ft+.002),Math.cos(O)*ft*1.07,Math.sin(O)*Math.sin(T)*(ot+.002)])}Dn(G,P,.0025*l,y)}}else if(_t==="crown"){let E=ft*.85,q=ot*.85,W=80,T=.022*l,P=[],z=[],O=[];for(let et=0;et<=W;et++){let st=et/W*Math.PI*2,C=Math.cos(st),M=Math.sin(st),k=-.025*l,Y=k+(.115+.145*((Math.cos((st-Math.PI/2)*5)+1)*.5)**2)*l;if(P.push(C*E,k,M*q,C*E,Y,M*q,C*(E-T),Y,M*(q-T),C*(E-T),k,M*(q-T)),O.push([C*E,Y,M*q]),et<W)for(let Q=0;Q<4;Q++){let V=et*4+Q,ut=et*4+(Q+1)%4;z.push(V,V+4,ut,ut,V+4,ut+4)}}let J=new ye;J.setAttribute("position",new Yt(P,3)),J.setIndex(z),J.computeVertexNormals(),Ke(G,J,g),Dn(G,O.slice(0,-1),.013*l,g,!0);for(let et=0;et<5;et++){let st=O[(W/4+et*W/5)%W];Ne(G,[.025*l,.027*l,.025*l],g,st)}}else if(_t==="bowler"||_t==="topHat"){let E=_t==="topHat",q=ft*(E?1.15:.91),W=E?[[0,-.025],[.69,-.025],[.73,.08],[.69,.88],[.67,1],[0,1]]:[[0,-.025],[.78,-.025],[.87,.11],[.86,.46],[.71,.79],[.4,.98],[0,1.04]],T=new cn(W.map(([et,st])=>ve([et*ft,st*q,0])),!1,"catmullrom",.2),P=new Is(T.getPoints(32).map(et=>new It(Math.max(0,et.x),et.y)),48),z=Ke(G,P,pt);z.scale.z=.83;let O=Ne(G,[ft*1.08,.045*l,ot*1.06],pt,[0,.005*l,0]),J=Re(new Xt(s.accessory||"#33465a").lerp(new Xt("#77828f"),.12),{roughness:.76});Ka(G,ft*(E?.705:.862),ot*(E?.705:.862),.11*l,.022*l,J)}else if(_t==="flower"){let E=null;for(let W of[.67,.52,.36,.18,0]){let T=f[0]-gt*W,P=j.ornament([T,j.reach,f[2]],[0,-1,0]);if(P){for(let z of[.14,.2,.28,.36]){let O=j.ornament([T,P.point.y-z*l,j.reach],[0,0,-1]);if(O&&(E=O,O.normal.z>=.58))break}if(E)break}}E||=j.ornament([m[0],m[1],j.reach],[0,0,-1]),E&&(G.position.copy(E.point).addScaledVector(E.normal,.01*l),G.quaternion.setFromUnitVectors(ve([0,0,1]),E.normal),G.rotateZ(-.2),G.userData.contactFit={kind:"ornament",point:E.point.toArray(),normal:E.normal.toArray(),offset:.01*l}),Lu(G,.15*l,v,A),Ne(G,[.042*l,.039*l,.023*l],Re("#678b62"),[0,0,-.02*l]);let q=Ne(G,[.044*l,.115*l,.021*l],Re("#678b62"),[.105*l,-.06*l,-.025*l]);q.rotation.z=-.8}else if(_t==="wizard"){Ne(G,[ft*1.14,.042*l,ot*1.14],g);let E=[[.92,0],[.88,.1],[.69,.27],[.47,.43],[.22,.58],[.06,.65],[0,.66]],q=new Is(E.map(T=>new It(T[0]*ft,T[1]*l)),40),W=q.attributes.position;for(let T=0;T<W.count;T++)W.setX(T,W.getX(T)+.15*l*(W.getY(T)/(.66*l))**2);q.computeVertexNormals(),Ke(G,q,g),Ka(G,ft*.88,ft*.88,.1*l,.022*l,v),wc(G,.062*l,A,[.03*l,.28*l,ft*.69],.012*l)}}}if(S.face&&S.face!=="none"){e.updateMatrixWorld(!0);let G=e.matrixWorld.clone().invert(),pt=e.getWorldQuaternion(new Je).invert(),ft=i.eyeGroups?.length>=2?i.eyeGroups.map(T=>{let P=T.getWorldPosition(new B).applyMatrix4(G),z=pt.clone().multiply(T.getWorldQuaternion(new Je)),O=new _e().compose(P,z,ve([1,1,1])).invert(),J=new We;return T.traverse(et=>{!et.isMesh||!et.geometry||!et.visible||(et.geometry.computeBoundingBox(),J.union(et.geometry.boundingBox.clone().applyMatrix4(O.clone().multiply(G).multiply(et.matrixWorld))))}),{center:P,quaternion:z,bounds:J}}):[-1,1].map(T=>({center:ve([T*u*.13,m[1],m[2]]),quaternion:new Je,bounds:new We(ve([-.07*l,-.12*l,0]),ve([.07*l,.12*l,.04*l]))}));ft.sort((T,P)=>T.center.x-P.center.x);let ot=D("face-"+S.face),Tt=["sunglasses","catEye","roundSun"].includes(S.face),Dt=S.face==="monocle",E=Math.abs(ft[1].center.x-ft[0].center.x),q=Re(Tt?"#15202a":"#d6eef5",{transparent:!Tt,opacity:Tt?1:.065,roughness:Tt?.33:.18,metalness:Tt?.06:0,depthWrite:Tt,side:hn}),W=[];if(ft.forEach(({center:T,quaternion:P,bounds:z},O)=>{if(Dt&&O===0)return;let J=O?1:-1,et=z.max.x-z.min.x,st=z.max.y-z.min.y,C=Math.max(Ys(E*.41,.11*l,.27*l),et*.5+.024*l),M=Math.max(C*(S.face==="square"||S.face==="sunglasses"?.81:1.04),st*.5+.021*l),k=Math.max(.025*l,z.max.z+.022*l),Y=Ti(ot,"lens-"+O,T.clone().addScaledVector(ve([0,0,1]).applyQuaternion(P),k).toArray());Y.quaternion.copy(P);let Q;S.face==="catEye"?Q=Vg([[-.96,.48],[-.86,-.31],[-.35,-.64],[.34,-.62],[.83,-.29],[1.13,.77],[.57,.6],[0,.54]].map(([ut,mt])=>[ut*C*J,mt*M])):S.face==="square"||S.face==="sunglasses"?Q=Uu(C*2.08,M*1.94,C*.28).getPoints(12).slice(0,-1).map(ut=>ve([ut.x,ut.y,0])):Q=Array.from({length:64},(ut,mt)=>{let Et=mt/64*Math.PI*2;return ve([Math.cos(Et)*C,Math.sin(Et)*M,0])}),Dn(Y,Q.map(ut=>ut.toArray()),(Tt?.019:.013)*l,g,!0);let V=new In(Q.map(ut=>new It(ut.x,ut.y)));if(Tt){let ut=Ke(Y,new Vi(V,48),q,[0,0,.001*l]);ut.name="eyewear-lens"}if(Y.updateMatrix(),Y.userData.contactFit={kind:"eye",offset:k,eyeDepth:z.max.z,normal:ve([0,0,1]).applyQuaternion(P).toArray()},W.push({i:O,sign:J,g:Y,rx:C,ry:M,center:T,outer:U(Y,[J*C,.03*M,0]),inner:U(Y,[-J*C,.03*M,0])}),!Dt){let ut=U(Y,[J*C,.03*M,0]),mt=f[2]+.015*l,Et=j.side(J,T.y-.022*l,mt),vt=Et?Et.point.addScaledVector(Et.normal,-.025*l).toArray():[f[0]+J*gt,T.y-.022*l,mt];Dn(ot,[ut,[ut[0]+J*.025*l,ut[1],ut[2]-.042*l],[Ae.lerp(ut[0],vt[0],.65),Ae.lerp(ut[1],vt[1],.65),Ae.lerp(ut[2],vt[2],.72)],vt],.012*l,g)}}),Dt){let T=W[0],P=U(T.g,[T.rx*.72,-T.ry*.72,0]),z=P[0]+.09*l,O=P[1]-.15*l;Dn(ot,[P,[P[0]+.025*l,P[1]-.095*l,P[2]-.015*l],[z,O,j.front(z,O,P[2]-.065*l)+.023*l],[z+.048*l,O+.012*l,j.front(z+.048*l,O+.012*l,P[2]-.09*l)+.023*l]],.011*l,g)}else{let T=W[0].inner,P=W[1].inner,z=(T[0]+P[0])/2,O=(T[1]+P[1])/2+.033*l,J=Math.max((T[2]+P[2])/2,j.front(z,O,m[2])+.032*l);Dn(ot,[T,[z,O,J],P],.013*l,g)}}if(S.neck&&S.neck!=="none"){let G=x[1],pt=D("neck-"+S.neck,[0,G,0]),ft=a?.32*l:o?.46*l:u*.46,ot=j.front(0,G,n.neckFront?.[2]||m[2]*.86,!0)+.018*l;if(S.neck==="bow"){for(let Tt of[-1,1]){let Dt=new In;Dt.moveTo(0,0),Dt.bezierCurveTo(.056*l,.025*l,.17*l,.12*l,.225*l,.11*l),Dt.quadraticCurveTo(.25*l,.1*l,.25*l,0),Dt.quadraticCurveTo(.25*l,-.1*l,.215*l,-.11*l),Dt.bezierCurveTo(.15*l,-.1*l,.052*l,-.03*l,0,0);let E=new Hi(Dt,{depth:.032*l,bevelEnabled:!0,bevelSize:.014*l,bevelThickness:.022*l,bevelSegments:4,curveSegments:16}),q=Ke(pt,E,g,[Tt*.005*l,0,ot+.019*l]);q.scale.x=Tt,q.rotation.z=Tt*-.04}Ne(pt,[.052*l,.065*l,.059*l],g,[0,0,ot+.04*l])}else{let Tt=Array.from({length:24},(Dt,E)=>{let q=E/24*Math.PI*2,W=[Math.cos(q),0,Math.sin(q)],T=j.around([0,G,0],W,!0);return T?T.point.addScaledVector(ve(W),.008*l).sub(ve([0,G,0])).toArray():[Math.cos(q)*ft,0,Math.sin(q)*ot]});if(Dn(pt,Tt,(S.neck==="scarf"?.07:.034)*l,g,!0),S.neck==="scarf")for(let[Dt,E,q]of[[-.12,.36,-.13],[.04,.27,.13]]){let W=Ti(pt,"scarf-end",[Dt*l,-.075*l,ot+.02*l]);W.rotation.z=q,xn(W,[.135*l,E*l,.065*l],g,[0,-E*l/2,0],.04*l);for(let T=0;T<5;T++)xn(W,[.105*l,.006*l,.005*l],y,[0,(-E+.03+T*.027)*l,.035*l],.002*l);w.push(T=>{W.rotation.z=q+Math.sin(T*1.3+Dt)*.016})}else Ne(pt,[.068*l,.081*l,.025*l],A,[0,-.085*l,ot+.043*l])}}if(H==="macbook"){let G=Math.min(h*.28,m[1]-.6*l),pt=D("prop-macbook",[0,Math.max(.28*l,G),X]);pt.rotation.y=-.64;let ft=1.1*l,ot=.69*l,Tt=Ys(m[1]-pt.position.y-.22*l,.29*l,.38*l),Dt=Re("#bdc3ca",{metalness:.7,roughness:.31}),E=Re("#4a5058",{roughness:.62});xn(pt,[ft,.043*l,ot],Dt,[0,0,0],.045*l);for(let P=0;P<3;P++)for(let z=0;z<10;z++)xn(pt,[.078*l,.009*l,.055*l],E,[(z-4.5)*.098*l,.026*l,(P*.079-.06)*l],.014*l);xn(pt,[.32*l,.004*l,.135*l],y,[0,.024*l,-.225*l],.018*l);let q=Ti(pt,"laptop-lid",[0,.025*l,ot*.45]);q.rotation.x=.54,xn(q,[ft,Tt,.039*l],Dt,[0,Tt/2,0],.043*l);let W=Re("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});xn(q,[ft-.07*l,Tt-.055*l,.005*l],W,[0,Tt/2,-.024*l],.027*l);let T=Re("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let P=0;P<3;P++)xn(q,[(P?.38:.63)*l,.012*l,.004*l],T,[-.11*l,Tt*.67-P*.05*l,-.028*l],.003*l);Ne(q,[.009*l,.009*l,.004*l],R,[0,Tt-.018*l,-.025*l]),pt.updateMatrix(),N=[[-.28*l,.06*l,-.055*l],[.28*l,.06*l,-.055*l]].map(P=>U(pt,P))}else if(H==="flowers"){let G=Math.min(h*.33,m[1]-.6*l),pt=D("prop-flowers",[0,G,X+.03*l]);pt.rotation.z=-.08;let ft=Re("#6c8d64"),ot=Re("#e1c7ac",{side:hn});Ke(pt,new Cn(.25*l,.065*l,.36*l,32,1,!0),ot,[0,.02*l,0]);let Tt=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],Dt=[Re("#f0bbbd"),v,Re("#dda375"),Re("#d4b5ce"),v];Tt.forEach((q,W)=>{Du(pt,[0,-.25*l,0],q.map(P=>P*l),.014*l,ft);let T=Lu(pt,.12*l,Dt[W],A,q.map(P=>P*l));T.rotation.x=-.18});let E=Ne(pt,[.065*l,.16*l,.027*l],ft,[.22*l,.2*l,-.02*l]);E.rotation.z=-.7,Ka(pt,.077*l,.075*l,-.12*l,.018*l,g),pt.updateMatrix(),N=[[-.105*l,-.11*l,.025*l],[.105*l,-.07*l,.025*l]].map(q=>U(pt,q))}else if(H==="wand"){let G=D("prop-wand",[u*.48,h*.43,X]);G.rotation.z=-.12,Du(G,[0,-.2*l,0],[0,.48*l,0],.029*l,A),wc(G,.16*l,v,[0,.56*l,0],.04*l);let pt=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((ft,ot)=>wc(G,(.03+ot*.008)*l,A,ft.map(Tt=>Tt*l),.009*l));w.push(ft=>pt.forEach((ot,Tt)=>{ot.rotation.z=Math.sin(ft*.8+Tt)*.2,ot.scale.setScalar(.84+Math.sin(ft*1.4+Tt)*.16)})),G.updateMatrix(),N=[null,U(G,[0,0,0])]}else if(H==="tea"){let G=t.mouth!=="none"&&d==="drink",pt=Math.min(h*(G?.49:.34),m[1]-(G?.58:.53)*l),ft=D("prop-tea",[u*.13,pt,X+.05*l]),ot=Re("#cba981");Ke(ft,new Cn(.165*l,.128*l,.35*l,36),ot),Ke(ft,new Cn(.175*l,.175*l,.032*l,36),v,[0,.185*l,0]);let Tt=n.mouth||[m[0],m[1]-.25*l,m[2]],Dt=G?[Tt[0]-ft.position.x,Tt[1]-pt,Tt[2]+.025*l-ft.position.z]:[.04*l,.48*l,-.05*l];Dn(ft,[[.04*l,.18*l,-.02*l],[.04*l,.18*l+(Dt[1]-.18*l)*.64,-.025*l],Dt],.019*l,g);for(let E=0;E<6;E++){let q=E*1.83;Ne(ft,[.019*l,.019*l,.013*l],R,[Math.sin(q)*.08*l,(-.125+E%2*.03)*l,.121*l])}ft.updateMatrix(),N=[[-.095*l,-.17*l,0],[.16*l,0,0]].map(E=>U(ft,E))}else if(H==="camera"){let G=D("prop-camera",[0,Math.min(m[1]-.28*l,h*.61),X+.04*l]);xn(G,[.65*l,.36*l,.25*l],g,[0,0,0],.06*l),xn(G,[.15*l,.09*l,.18*l],R,[0,.205*l,-.015*l],.025*l);let pt=Ke(G,new Cn(.148*l,.153*l,.19*l,40),R,[.03*l,0,.19*l]);pt.rotation.x=Math.PI/2;let ft=Ke(G,new Gi(.124*l,.014*l,8,40),A,[.03*l,0,.29*l]),ot=Re("#203b4c",{metalness:.35,roughness:.15});Ne(G,[.12*l,.12*l,.018*l],ot,[.03*l,0,.287*l]),xn(G,[.115*l,.061*l,.015*l],v,[-.2*l,.105*l,.135*l],.014*l),Ne(G,[.045*l,.02*l,.04*l],R,[.22*l,.194*l,.015*l]),G.updateMatrix(),N=[[-.31*l,-.045*l,.015*l],[.31*l,.015*l,.015*l]].map(Tt=>U(G,Tt))}else if(H==="book"){let G=D("prop-book",[0,Math.min(h*.34,m[1]-.47*l),X+.07*l]),pt=Re("#f5eddd"),ft=Re("#bcc0b1");G.rotation.x=.12;for(let ot of[-1,1]){let Tt=Ti(G,"book-half");Tt.rotation.z=ot*.16,xn(Tt,[.48*l,.029*l,.59*l],g,[ot*.238*l,0,0],.018*l);for(let Dt=0;Dt<3;Dt++)xn(Tt,[.45*l,.013*l,.55*l],pt,[ot*.227*l,(.022+Dt*.014)*l,0],.013*l);for(let Dt=0;Dt<5;Dt++)xn(Tt,[(.25-Dt%2*.04)*l,.003*l,.007*l],ft,[ot*.245*l,.059*l,(Dt-2)*.068*l],.002*l)}G.updateMatrix(),N=[[-.39*l,.03*l,.035*l],[.39*l,.03*l,.035*l]].map(ot=>U(G,ot))}let Lt=["wave","thinking","dance","celebrate","love"],Ut=a||o||H!=="none"||Lt.includes(d)||t.pose==="chin"||["hands","both"].includes(t.limbs),Bt=(a||o)&&H==="none"&&!Lt.includes(d)&&t.pose!=="chin",kt=Bt?[...i.arms||[]]:[],ht=[];if(Bt||(i.arms||[]).forEach(G=>{G.visible=!1}),Ut&&!Bt){let G=a?h*.22:o&&!c?.13:o?h*.17:h*.32,pt=[n.shoulderL||[-u*.4,h*.46,0],n.shoulderR||[u*.4,h*.46,0]],ft=pt.map((ot,Tt)=>[o&&!c?ot[0]*.84:(Tt?1:-1)*u*(o?.3:.39),G,o&&!c?Math.max(.48,m[2]*.78):m[2]*.73]);if(N&&N.forEach((ot,Tt)=>{ot&&(ft[Tt]=ot)}),!N){if(d==="wave"&&(ft[1]=[u*.57,m[1]+.27*l,m[2]*.67]),(d==="thinking"||t.pose==="chin")&&(ft[1]=[u*.2,m[1]-.25*l,m[2]+.07*l]),d==="dance"&&(ft[0]=[-u*.58,h*.44,m[2]*.6],ft[1]=[u*.56,h*.64,m[2]*.67]),d==="celebrate")for(let ot=0;ot<2;ot++)ft[ot]=[(ot?1:-1)*u*.53,m[1]+.31*l,m[2]*.7];if(d==="love")for(let ot=0;ot<2;ot++)ft[ot]=[(ot?1:-1)*.12*l,m[1]-.39*l,X]}for(let ot=0;ot<2;ot++){let Tt=ot?1:-1,Dt=ve(ft[ot]);if(!a&&!o){let C=Tt*(N?Math.min(u*.32,Math.abs(Dt.x)+.15*l):u*.4),M=N?Ys(Dt.y+.12*l,h*.23,m[1]-.2*l):h*.43;pt[ot]=[C,M,j.front(C,M,m[2]*.6)-.05*l]}let E=ve(pt[ot]),q=Dt.clone().sub(E),W=D("posed-arm-"+ot,pt[ot]),T=(a?.078:o?.115:.102)*l,P=q.clone().multiplyScalar(.48);P.x+=Tt*(o&&!c&&!N?.035:.11)*l,P.y-=.11*l,P.z+=.05*l;let z=q.clone().multiplyScalar(.85);z.z+=.013*l;let O=Dn(W,[[0,0,0],P.toArray(),z.toArray(),q.toArray()],T,_);{let C=O.geometry,M=C.attributes.position,{path:k,tubularSegments:Y,radialSegments:Q}=C.parameters;for(let V=0;V<=Y;V++){let ut=V/Y,mt=k.getPointAt(ut),Et=1.12-.35*ut+.035*Math.sin(ut*Math.PI);for(let vt=0;vt<=Q;vt++){let $=V*(Q+1)+vt;M.setXYZ($,mt.x+(M.getX($)-mt.x)*Et,mt.y+(M.getY($)-mt.y)*Et,mt.z+(M.getZ($)-mt.z)*Et)}}C.computeVertexNormals()}if(c){let C=O.geometry,M=C.attributes.position,{path:k,tubularSegments:Y,radialSegments:Q}=C.parameters;for(let V=0;V<=Y;V++){let ut=V/Y,mt=k.getPointAt(ut),Et=.85+Math.sin(ut*Math.PI)*.64;for(let vt=0;vt<=Q;vt++){let $=V*(Q+1)+vt;M.setXYZ($,mt.x+(M.getX($)-mt.x)*Et,mt.y+(M.getY($)-mt.y)*Et,mt.z+(M.getZ($)-mt.z)*.4)}}C.computeVertexNormals()}O.userData.region=a?"clothing":"body",O.userData.surfaceMaterial=a?_.name||"knit":t.material||"plush",O.userData.furLength=t.material==="micro"?.011:.024;let J=Ti(W,(c?"wing-tip-":"hand-")+ot,q.toArray()),et=(a?.102:o?.128:.115)*l,st=Ne(J,[et,et*(c?1.1:a?1.05:.83),et*(c?.4:.82)],I);if(st.userData.region=a?"skin":"body",st.userData.surfaceMaterial=a?I.name||"skin":t.material||"plush",st.userData.furLength=t.material==="micro"?.011:.024,a){J.rotation.x=H==="macbook"?Math.PI*.4:-.22;for(let M=0;M<4;M++)Ne(J,[.023*l,(.065-Math.abs(M-1.5)*.008)*l,.025*l],I,[(M-1.5)*.043*l,.067*l,.018*l]);let C=Ne(J,[.039*l,.059*l,.035*l],I,[-Tt*.09*l,.006*l,.035*l]);C.rotation.z=Tt*.42}kt.push(W),ht.push(J),Array.isArray(i.surfaces)&&i.surfaces.push(O,st),!N&&(d==="wave"&&ot===1||d==="celebrate")&&w.push(C=>{W.rotation.z=Math.sin(C*3.2+ot*.6)*.075}),!N&&d==="dance"&&w.push(C=>{W.rotation.z=Math.sin(C*3+ot*1.1)*.065}),H==="macbook"&&w.push(C=>{J.rotation.z=Math.sin(C*4.2+ot*1.7)*.022})}}i.arms=kt,e.updateMatrixWorld(!0);for(let G of p)i.head&&(G.name.startsWith("head-")||G.name.startsWith("face-"))?i.head.attach(G):a&&i.torso&&G.name.startsWith("neck-")&&i.torso.attach(G);return e.updateMatrixWorld(!0),{parts:p,constraintNotes:[],tick(G){for(let pt of w)pt(Number.isFinite(G)?G:0)}}}var Xg=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function Wr(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Qa(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function Ec(){let i=new Map,t=new Map,e=new Map,n,s,r,a,o,c=0,h=0,u=(b,I,_)=>Math.max(I,Math.min(_,b)),l=(b,I,_)=>{let y=1/Math.max(1e-12,Math.hypot(b,I,_));return[b*y,I*y,_*y]};function f(b,I,_,y,D){b*=y,I*=y,_*=y;let U=Math.min(b,I,_),N=U<.08?U-6.25*U*U:.04;b-=N,I-=N,_-=N;let H=Math.max(b,I,_);if(H>=.76){let Z=1-.0576/(H-.52),X=Z/H,j=1-1/(.15*(H-Z)+1);b=b*X*(1-j)+Z*j,I=I*X*(1-j)+Z*j,_=_*X*(1-j)+Z*j}D[0]=b,D[1]=I,D[2]=_}let m=new Uint8ClampedArray(4097),x=new Float32Array(256);for(let b=0;b<m.length;b++){let I=b/4096;m[b]=Math.round((I<=.0031308?12.92*I:1.055*Math.pow(I,1/2.4)-.055)*255)}for(let b=0;b<256;b++){let I=b/255;x[b]=I<=.04045?I/12.92:Math.pow((I+.055)/1.055,2.4)}let S=(b,I)=>{let _=new Float32Array(16);for(let y=0;y<4;y++)for(let D=0;D<4;D++)_[y*4+D]=b[D]*I[y*4]+b[4+D]*I[y*4+1]+b[8+D]*I[y*4+2]+b[12+D]*I[y*4+3];return _};function d(b){let I=b[0],_=b[4],y=b[8],D=b[1],U=b[5],N=b[9],H=b[2],Z=b[6],X=b[10],j=[U*X-N*Z,N*H-D*X,D*Z-U*H,y*Z-_*X,I*X-y*H,_*H-I*Z,_*N-y*U,y*D-I*N,I*U-_*D],tt=I*j[0]+_*j[1]+y*j[2],gt=1/(Math.abs(tt)<1e-12?1:tt);return j.map(wt=>wt*gt)}function p(b){if(!b.normals){let I=new Float32Array(b.positions.length),_=b.positions,y=b.indices,D=y?y.length:_.length/3;for(let U=0;U<D;U+=3){let N=(y?y[U]:U)*3,H=(y?y[U+1]:U+1)*3,Z=(y?y[U+2]:U+2)*3,X=_[H]-_[N],j=_[H+1]-_[N+1],tt=_[H+2]-_[N+2],gt=_[Z]-_[N],wt=_[Z+1]-_[N+1],_t=_[Z+2]-_[N+2],Lt=j*_t-tt*wt,Ut=tt*gt-X*_t,Bt=X*wt-j*gt;for(let kt of[N,H,Z])I[kt]+=Lt,I[kt+1]+=Ut,I[kt+2]+=Bt}for(let U=0;U<I.length;U+=3){let N=1/Math.max(1e-10,Math.hypot(I[U],I[U+1],I[U+2]));I[U]*=N,I[U+1]*=N,I[U+2]*=N}b.normals=I}i.set(b.id,b)}function w(b,I,_,y){if(!b){y[0]=y[1]=y[2]=y[3]=1;return}I=I*b.repeat[0]+b.offset[0],_=_*b.repeat[1]+b.offset[1],I=b.wrapS===1e3?I-Math.floor(I):u(I,0,.999999),_=b.wrapT===1e3?_-Math.floor(_):u(_,0,.999999),b.flipY&&(_=1-_);let D=u(Math.floor(I*b.width),0,b.width-1),U=u(Math.floor(_*b.height),0,b.height-1),N=(U*b.width+D)*b.channels,H=b.data,Z=H[N]||0,X=b.channels>1?H[N+1]:Z,j=b.channels>2?H[N+2]:Z;y[0]=b.srgb?x[Z]:Z/255,y[1]=b.srgb?x[X]:X/255,y[2]=b.srgb?x[j]:j/255,y[3]=b.channels===4?H[N+3]/255:1}function g(b){if(b.heightMips)return;b.heightMips=[{data:b.data,width:b.width,height:b.height,channels:b.channels}];let I=b.heightMips[0];for(;I.width>1||I.height>1;){let _=Math.max(1,I.width>>1),y=Math.max(1,I.height>>1),D=new Float32Array(_*y);for(let U=0;U<y;U++)for(let N=0;N<_;N++){let H=0;for(let Z=0;Z<2;Z++)for(let X=0;X<2;X++)H+=I.data[(Math.min(I.height-1,U*2+Z)*I.width+Math.min(I.width-1,N*2+X))*I.channels];D[U*_+N]=H*.25}I={data:D,width:_,height:y,channels:1},b.heightMips.push(I)}}function v(b,I,_,y,D){let U=Math.min(b.heightMips.length-1,y),N=Math.floor(U),H=U-N;D[0]=D[1]=0;for(let Z=0;Z<2;Z++){let X=Z?H:1-H;if(X<1e-4)continue;let j=b.heightMips[N+Z],tt=(I*b.repeat[0]+b.offset[0])*j.width,gt=(_*b.repeat[1]+b.offset[1])*j.height;b.flipY&&(gt=j.height-gt);let wt=Math.floor(tt),_t=Math.floor(gt),Lt=tt-wt,Ut=gt-_t,Bt=(ft,ot)=>(ft=b.wrapS===1e3?(ft%j.width+j.width)%j.width:u(ft,0,j.width-1),ot=b.wrapT===1e3?(ot%j.height+j.height)%j.height:u(ot,0,j.height-1),j.data[(ot*j.width+ft)*j.channels]/255),kt=Bt(wt,_t),ht=Bt(wt+1,_t),G=Bt(wt,_t+1),pt=Bt(wt+1,_t+1);D[0]+=((ht-kt)*(1-Ut)+(pt-G)*Ut)*j.width*b.repeat[0]*X,D[1]+=((G-kt)*(1-Lt)+(pt-ht)*Lt)*j.height*b.repeat[1]*(b.flipY?-1:1)*X}}function R(b,I){if(!b.shadow)return null;let _=b.shadow.size,y=new Float32Array(_*_);y.fill(1/0);for(let{mesh:D,g:U}of I){if(!D.castShadow||D.material.transparent||D.material.unlit)continue;let N=S(b.shadow.viewProjection,D.matrix),H=U.positions,Z=U.indices,X=new Float32Array(H.length),j=H.length/3;for(let _t=0;_t<j;_t++){let Lt=_t*3,Ut=H[Lt],Bt=H[Lt+1],kt=H[Lt+2],ht=1/(N[3]*Ut+N[7]*Bt+N[11]*kt+N[15]);X[Lt]=((N[0]*Ut+N[4]*Bt+N[8]*kt+N[12])*ht*.5+.5)*_,X[Lt+1]=(.5-(N[1]*Ut+N[5]*Bt+N[9]*kt+N[13])*ht*.5)*_,X[Lt+2]=(N[2]*Ut+N[6]*Bt+N[10]*kt+N[14])*ht}let tt=Z?Z.length:j,gt=D.start||0,wt=Math.min(tt,Number.isFinite(D.count)?gt+D.count:tt);for(let _t=gt;_t+2<wt;_t+=3){let Lt=(Z?Z[_t]:_t)*3,Ut=(Z?Z[_t+1]:_t+1)*3,Bt=(Z?Z[_t+2]:_t+2)*3,kt=X[Lt],ht=X[Lt+1],G=X[Ut],pt=X[Ut+1],ft=X[Bt],ot=X[Bt+1],Tt=X[Lt+2],Dt=X[Ut+2],E=X[Bt+2],q=(G-kt)*(ot-ht)-(pt-ht)*(ft-kt);if(Math.abs(q)<.04)continue;let W=Math.max(0,Math.floor(Math.min(kt,G,ft))),T=Math.min(_-1,Math.ceil(Math.max(kt,G,ft))),P=Math.max(0,Math.floor(Math.min(ht,pt,ot))),z=Math.min(_-1,Math.ceil(Math.max(ht,pt,ot)));if(W>T||P>z)continue;let O=1/q,J=(pt-ot)*O,et=(ot-ht)*O;for(let st=P;st<=z;st++){let C=st+.5,M=((G-(W+.5))*(ot-C)-(pt-C)*(ft-(W+.5)))*O,k=((ft-(W+.5))*(ht-C)-(ot-C)*(kt-(W+.5)))*O,Y=st*_+W;for(let Q=W;Q<=T;Q++,Y++,M+=J,k+=et){let V=1-M-k;if(M<0||k<0||V<0)continue;let ut=M*Tt+k*Dt+V*E;ut>=-1&&ut<=1&&ut<y[Y]&&(y[Y]=ut)}}}}return{size:_,buffer:y,matrix:b.shadow.screenMatrix,radius:b.shadow.radius||2.5}}function A(b){let I=performance.now();for(let E of b.geometries||[])p(E);for(let E of b.textures||[])t.set(E.id,E);let _=new Set(b.geometryIds),y=new Set(b.textureIds),D=new Set(b.meshes.map(E=>E.id));for(let E of i.keys())_.has(E)||i.delete(E);for(let E of t.keys())y.has(E)||t.delete(E);for(let E of e.keys())D.has(E)||e.delete(E);(c!==b.width||h!==b.height)&&(c=b.width,h=b.height,n=new Float32Array(c*h),a=new Float32Array(c*h*4),o=new Float32Array(c*h*4),r=new Int32Array(c*h)),s=new Uint8ClampedArray(c*h*4),n.fill(1/0),r.fill(-1);let U=b.background||[0,0,0,0];for(let E=0;E<a.length;E+=4)a[E]=U[0]*U[3],a[E+1]=U[1]*U[3],a[E+2]=U[2]*U[3],a[E+3]=U[3];let N=new Float32Array(4097),H=b.exposure||1;for(let E=0;E<N.length;E++){let q=E/512*H;N[E]=b.toneMapping?u(q*(2.51*q+.03)/(q*(2.43*q+.59)+.14),0,1):u(q,0,1)}let Z=b.lights||[],X=b.ambient||[.18,.18,.18],j=b.sky||[.24,.24,.24],tt=b.ground||[.13,.14,.16],gt=l(b.cameraWorld[8],b.cameraWorld[9],b.cameraWorld[10]);for(let E of Z)E.half=l(E.direction[0]+gt[0],E.direction[1]+gt[1],E.direction[2]+gt[2]);let wt=[],_t=[],Lt=0,Ut=0;for(let E=0;E<b.meshes.length;E++){let q=b.meshes[E],W=i.get(q.geometry);if(!W)continue;let T=q.material,P=S(b.viewProjection,q.matrix),z=d(q.matrix),O=W.positions.length/3,J=e.get(q.id);(!J||J.length!==O*9)&&(J=new Float32Array(O*9),e.set(q.id,J));let et=W.positions,st=W.normals,C=W.uv,M=0;for(let Y=0;Y<O;Y++){let Q=Y*3,V=Y*9,ut=et[Q],mt=et[Q+1],Et=et[Q+2],vt=P[3]*ut+P[7]*mt+P[11]*Et+P[15],$=vt>1e-6?1/vt:0,yt=z[0]*st[Q]+z[1]*st[Q+1]+z[2]*st[Q+2],bt=z[3]*st[Q]+z[4]*st[Q+1]+z[5]*st[Q+2],St=z[6]*st[Q]+z[7]*st[Q+1]+z[8]*st[Q+2],Mt=$/Math.max(1e-9,Math.hypot(yt,bt,St));J[V]=((P[0]*ut+P[4]*mt+P[8]*Et+P[12])*$*.5+.5)*c,J[V+1]=(.5-(P[1]*ut+P[5]*mt+P[9]*Et+P[13])*$*.5)*h,J[V+2]=(P[2]*ut+P[6]*mt+P[10]*Et+P[14])*$,J[V+3]=$,J[V+4]=yt*Mt,J[V+5]=bt*Mt,J[V+6]=St*Mt,J[V+7]=C?C[Y*2]*$:0,J[V+8]=C?C[Y*2+1]*$:0,M+=J[V+2]}let k={mesh:q,g:W,tr:J,index:E,z:M/O};(T.transparent||T.opacity<.999?_t:wt).push(k)}wt.sort((E,q)=>E.mesh.order-q.mesh.order||E.z-q.z),_t.sort((E,q)=>E.mesh.order-q.mesh.order||q.z-E.z);let Bt=new Float32Array(4),kt=new Float32Array(2),ht=new Float32Array(3),G=R(b,wt);function pt(E,q,W,T=1,P=.28){if(!G)return 1;let z=G.matrix,O=(E+.5)/c*2-1,J=1-(q+.5)/h*2,et=1/(z[3]*O+z[7]*J+z[11]*W+z[15]),st=(z[0]*O+z[4]*J+z[8]*W+z[12])*et,C=(z[1]*O+z[5]*J+z[9]*W+z[13])*et,M=(z[2]*O+z[6]*J+z[10]*W+z[14])*et,k=(st*.5+.5)*G.size,Y=(.5-C*.5)*G.size;if(k<1||Y<1||k>=G.size-2||Y>=G.size-2)return 1;let Q=45e-5+75e-5*(1-u(T,0,1)),V=G.radius*.5,ut=M-Q,mt=u(Math.floor(k-V*2),0,G.size-1),Et=u(Math.floor(k-V),0,G.size-1),vt=u(Math.floor(k),0,G.size-1),$=u(Math.floor(k+V),0,G.size-1),yt=u(Math.floor(k+V*2),0,G.size-1),bt=0;for(let St=-2;St<=2;St++){let Mt=u(Math.floor(Y+St*V),0,G.size-1)*G.size,Rt=St===0?6:Math.abs(St)===1?4:1;bt+=Rt*((ut<=G.buffer[Mt+mt]?1:0)+(ut<=G.buffer[Mt+Et]?4:0)+(ut<=G.buffer[Mt+vt]?6:0)+(ut<=G.buffer[Mt+$]?4:0)+(ut<=G.buffer[Mt+yt]?1:0))}return P+(1-P)*bt/256}function ft(E,q){let{mesh:W,g:T,tr:P}=E,z=W.material,O=T.indices,J=O?O.length:T.positions.length/3,et=W.start||0,st=Math.min(J,Number.isFinite(W.count)?et+W.count:J),C=t.get(z.map),M=t.get(z.bump);M&&g(M);let k=z.roughness,Y=z.unlit?0:.007+(1-k)*(1-k)*.23,Q=8+(1-k)*(1-k)*115,V=z.surfaceKind==="plush"||z.surfaceKind==="micro"?.14:.45,ut=z.surfaceKind==="plush"?.48:z.surfaceKind==="micro"?.38:.28,mt=z.color,Et=z.emissive||[0,0,0];for(let vt=et;vt+2<st;vt+=3){let $=O?O[vt]:vt,yt=O?O[vt+1]:vt+1,bt=O?O[vt+2]:vt+2,St=$*9,Mt=yt*9,Rt=bt*9;if(P[St+3]===0||P[Mt+3]===0||P[Rt+3]===0)continue;let F=P[St],rt=P[St+1],ct=P[Mt],xt=P[Mt+1],dt=P[Rt],at=P[Rt+1],At=P[St+2],zt=P[Mt+2],Qt=P[Rt+2];if(Math.min(At,zt,Qt)>1||Math.max(At,zt,Qt)<-1)continue;let Ot=(ct-F)*(at-rt)-(xt-rt)*(dt-F);if(Math.abs(Ot)<.016||z.side===0&&Ot>0||z.side===1&&Ot<0)continue;let Zt=Math.max(0,Math.floor(Math.min(F,ct,dt))),ne=Math.min(c-1,Math.ceil(Math.max(F,ct,dt))),ee=Math.max(0,Math.floor(Math.min(rt,xt,at))),fe=Math.min(h-1,Math.ceil(Math.max(rt,xt,at)));if(Zt>ne||ee>fe)continue;Lt++;let ue=0,Me=0,Be=0,Ce=0,ae=0,se=0,we=0;if(M&&T.uv){let K=$*2,it=yt*2,lt=bt*2,nt=T.uv[it]-T.uv[K],Ct=T.uv[lt]-T.uv[K],Pt=T.uv[it+1]-T.uv[K+1],Ht=T.uv[lt+1]-T.uv[K+1],Ft=(nt*(at-rt)-Ct*(xt-rt))/Ot,Gt=(Ct*(ct-F)-nt*(dt-F))/Ot,Wt=(Pt*(at-rt)-Ht*(xt-rt))/Ot,Vt=(Ht*(ct-F)-Pt*(dt-F))/Ot,jt=M.width*M.repeat[0],ce=M.height*M.repeat[1];we=Math.log2(Math.max(1,Math.hypot(Ft*jt,Wt*ce),Math.hypot(Gt*jt,Vt*ce)));let Jt=T.positions,$t=T.uv,te=$t[$*2],qt=$t[$*2+1],me=$t[yt*2]-te,re=$t[yt*2+1]-qt,ze=$t[bt*2]-te,Te=$t[bt*2+1]-qt,le=me*Te-ze*re;if(Math.abs(le)>1e-9){let Qe=Jt[yt*3]-Jt[$*3],he=Jt[yt*3+1]-Jt[$*3+1],Le=Jt[yt*3+2]-Jt[$*3+2],Ue=Jt[bt*3]-Jt[$*3],be=Jt[bt*3+1]-Jt[$*3+1],ke=Jt[bt*3+2]-Jt[$*3+2],un=(Qe*Te-Ue*re)/le,je=(he*Te-be*re)/le,dn=(Le*Te-ke*re)/le,kn=(Ue*me-Qe*ze)/le,Zs=(be*me-he*ze)/le,ss=(ke*me-Le*ze)/le,Fe=W.matrix;ue=Fe[0]*un+Fe[4]*je+Fe[8]*dn,Me=Fe[1]*un+Fe[5]*je+Fe[9]*dn,Be=Fe[2]*un+Fe[6]*je+Fe[10]*dn,Ce=Fe[0]*kn+Fe[4]*Zs+Fe[8]*ss,ae=Fe[1]*kn+Fe[5]*Zs+Fe[9]*ss,se=Fe[2]*kn+Fe[6]*Zs+Fe[10]*ss;let Ri=1/Math.max(.01,ue*ue+Me*Me+Be*Be),Ci=1/Math.max(.01,Ce*Ce+ae*ae+se*se);ue*=Ri,Me*=Ri,Be*=Ri,Ce*=Ci,ae*=Ci,se*=Ci}}let Ee=1/Ot,Ye=(xt-at)*Ee,rn=(dt-ct)*Ee,wn=(at-rt)*Ee,En=(F-dt)*Ee,Tn=((ct-(Zt+.5))*(at-(ee+.5))-(xt-(ee+.5))*(dt-(Zt+.5)))*Ee,_n=((dt-(Zt+.5))*(rt-(ee+.5))-(at-(ee+.5))*(F-(Zt+.5)))*Ee,L=Ot>0?-1:1;for(let K=ee;K<=fe;K++){let it=Tn+(K-ee)*rn,lt=_n+(K-ee)*En,nt=K*c+Zt;for(let Ct=Zt;Ct<=ne;Ct++,nt++,it+=Ye,lt+=wn){let Pt=1-it-lt;if(it<-1e-6||lt<-1e-6||Pt<-1e-6)continue;let Ht=it*At+lt*zt+Pt*Qt;if(Ht<-1||Ht>1||z.depthTest&&Ht>=n[nt]-2e-7)continue;let Ft=z.opacity,Gt=mt[0],Wt=mt[1],Vt=mt[2],jt=0,ce=0;if(C||M){let le=it*P[St+3]+lt*P[Mt+3]+Pt*P[Rt+3];jt=(it*P[St+7]+lt*P[Mt+7]+Pt*P[Rt+7])/le,ce=(it*P[St+8]+lt*P[Mt+8]+Pt*P[Rt+8])/le}if(C&&(w(C,jt,ce,Bt),Gt*=Bt[0],Wt*=Bt[1],Vt*=Bt[2],Ft*=Bt[3]),Ft<=Math.max(.002,z.alphaTest||0))continue;let Jt=it*P[St+4]+lt*P[Mt+4]+Pt*P[Rt+4],$t=it*P[St+5]+lt*P[Mt+5]+Pt*P[Rt+5],te=it*P[St+6]+lt*P[Mt+6]+Pt*P[Rt+6],qt=L/Math.max(1e-9,Math.sqrt(Jt*Jt+$t*$t+te*te));Jt*=qt,$t*=qt,te*=qt;let me=Jt,re=$t,ze=te;if(M){v(M,jt,ce,we,kt);let le=(ue*kt[0]+Ce*kt[1])*z.bumpScale,Qe=(Me*kt[0]+ae*kt[1])*z.bumpScale,he=(Be*kt[0]+se*kt[1])*z.bumpScale,Le=le*Jt+Qe*$t+he*te;le-=Le*Jt,Qe-=Le*$t,he-=Le*te;let Ue=Math.min(1,V/Math.max(.001,Math.hypot(le,Qe,he)));Jt-=le*Ue,$t-=Qe*Ue,te-=he*Ue;let be=1/Math.max(1e-9,Math.hypot(Jt,$t,te));Jt*=be,$t*=be,te*=be}if(!z.unlit){let le=$t*.5+.5,Qe=X[0]+tt[0]+(j[0]-tt[0])*le,he=X[1]+tt[1]+(j[1]-tt[1])*le,Le=X[2]+tt[2]+(j[2]-tt[2])*le,Ue=0,be=0,ke=0;for(let je=0;je<Z.length;je++){let dn=Z[je],kn=dn.direction,Zs=Jt*kn[0]+$t*kn[1]+te*kn[2],ss=je===0&&W.receiveShadow?pt(Ct,K,Ht,me*kn[0]+re*kn[1]+ze*kn[2],ut):1,Fe=Math.max(0,(Zs+.055)/1.055)*dn.intensity*ss,Ri=dn.half,Ci=Y*Math.pow(Math.max(0,Jt*Ri[0]+$t*Ri[1]+te*Ri[2]),Q)*dn.intensity*ss;Qe+=dn.color[0]*Fe,he+=dn.color[1]*Fe,Le+=dn.color[2]*Fe,Ue+=dn.color[0]*Ci,be+=dn.color[1]*Ci,ke+=dn.color[2]*Ci}let un=z.metalness||0;Gt=Gt*Qe+Ue*(1-un+un*Gt),Wt=Wt*he+be*(1-un+un*Wt),Vt=Vt*Le+ke*(1-un+un*Vt)}T.colors&&z.vertexColors&&(Gt*=it*T.colors[$*3]+lt*T.colors[yt*3]+Pt*T.colors[bt*3],Wt*=it*T.colors[$*3+1]+lt*T.colors[yt*3+1]+Pt*T.colors[bt*3+1],Vt*=it*T.colors[$*3+2]+lt*T.colors[yt*3+2]+Pt*T.colors[bt*3+2]),Gt+=Et[0],Wt+=Et[1],Vt+=Et[2],z.toneMapped&&!z.unlit&&(b.neutral?(f(Gt,Wt,Vt,H,ht),Gt=ht[0],Wt=ht[1],Vt=ht[2]):(Gt=N[u(Math.round(Gt*512),0,4096)],Wt=N[u(Math.round(Wt*512),0,4096)],Vt=N[u(Math.round(Vt*512),0,4096)]));let Te=nt*4;if(Ft>=.999)a[Te]=Gt,a[Te+1]=Wt,a[Te+2]=Vt,a[Te+3]=1;else{let le=1-Ft;a[Te]=Gt*Ft+a[Te]*le,a[Te+1]=Wt*Ft+a[Te+1]*le,a[Te+2]=Vt*Ft+a[Te+2]*le,a[Te+3]=Ft+a[Te+3]*le}!q&&z.depthWrite&&(n[nt]=Ht,r[nt]=E.index),Ut++}}}}for(let E of wt)ft(E,!1);if(b.ambientOcclusion&&c>180){let E=Math.max(2,Math.round(c/140)),q=[[-E,0],[E,0],[0,-E],[0,E],[-E*2,-E],[E*2,-E]];for(let W=E*2;W<h-E*2;W++)for(let T=E*2;T<c-E*2;T++){let P=W*c+T,z=n[P];if(!Number.isFinite(z))continue;let O=0;for(let[J,et]of q){let st=P+et*c+J,C=z-n[st];r[st]!==r[P]&&C>.0015&&C<.035&&(O+=1-C/.045)}if(O>0){let J=1-O*.027,et=P*4;a[et]*=J,a[et+1]*=J,a[et+2]*=J}}}o.set(a);let ot=new Map(b.meshes.map((E,q)=>[E.id,q])),Tt=0,Dt=c*.5*Math.hypot(b.viewProjection[0],b.viewProjection[4],b.viewProjection[8]);for(let E of b.fibers||[]){let q=S(b.viewProjection,E.matrix),W=E.segments,T=E.matrix,P=E.color,z=ot.get(E.ownerId),O=new Float32Array(15),J=new Float32Array(5),et=(Math.hypot(T[0],T[1],T[2])+Math.hypot(T[4],T[5],T[6])+Math.hypot(T[8],T[9],T[10]))/3;for(let st=0;st<W.length;st+=20){let C=!0,M=0;J[0]=0;for(let Ot=0;Ot<5;Ot++){let Zt=st+Ot*3,ne=Ot*3,ee=W[Zt],fe=W[Zt+1],ue=W[Zt+2],Me=q[3]*ee+q[7]*fe+q[11]*ue+q[15];if(Me<1e-6){C=!1;break}O[ne]=((q[0]*ee+q[4]*fe+q[8]*ue+q[12])/Me*.5+.5)*c,O[ne+1]=(.5-(q[1]*ee+q[5]*fe+q[9]*ue+q[13])/Me*.5)*h,O[ne+2]=(q[2]*ee+q[6]*fe+q[10]*ue+q[14])/Me-7e-6,Ot&&(M+=Math.hypot(O[ne]-O[ne-3],O[ne+1]-O[ne-2]),J[Ot]=M)}if(!C||M<.035)continue;let k=O[0],Y=O[1];if(k<-8||Y<-8||k>c+8||Y>h+8)continue;let Q=Math.floor(Y)*c+Math.floor(k);if(k>=0&&Y>=0&&k<c&&Y<h&&O[2]>n[Q]+.0012)continue;let V=W[st+12]-W[st],ut=W[st+13]-W[st+1],mt=W[st+14]-W[st+2],Et=l(T[0]*V+T[4]*ut+T[8]*mt,T[1]*V+T[5]*ut+T[9]*mt,T[2]*V+T[6]*ut+T[10]*mt),vt=gt[0]*Et[0]+gt[1]*Et[1]+gt[2]*Et[2],$=l(gt[0]-Et[0]*vt+gt[0]*.25,gt[1]-Et[1]*vt+gt[1]*.25,gt[2]-Et[2]*vt+gt[2]*.25),yt=$[1]*.5+.5,bt=0,St=0,Mt=0,Rt=0,F=Math.floor(k),rt=Math.floor(Y),ct=k-F,xt=Y-rt;for(let Ot=0;Ot<2;Ot++)for(let Zt=0;Zt<2;Zt++){let ne=F+Zt,ee=rt+Ot;if(ne<0||ee<0||ne>=c||ee>=h)continue;let fe=ee*c+ne;if(r[fe]!==z||Math.abs(O[2]-n[fe])>.003)continue;let ue=(Zt?ct:1-ct)*(Ot?xt:1-xt),Me=fe*4;bt+=o[Me]*ue,St+=o[Me+1]*ue,Mt+=o[Me+2]*ue,Rt+=ue}let dt,at,At;if(Rt>.02){let Ot=E.kind==="plush",Zt=Z[0]?.direction||gt,ne=$[0]*Zt[0]+$[1]*Zt[1]+$[2]*Zt[2],ee=u(1+(W[st+19]-.965)*(Ot?.94:.42)+(ne-.65)*(Ot?.1:.035),Ot?.82:.94,Ot?1.16:1.07);dt=bt/Rt*ee,at=St/Rt*ee,At=Mt/Rt*ee}else{let Ot=X[0]+tt[0]+(j[0]-tt[0])*yt,Zt=X[1]+tt[1]+(j[1]-tt[1])*yt,ne=X[2]+tt[2]+(j[2]-tt[2])*yt;for(let ee=0;ee<Z.length;ee++){let fe=Z[ee],ue=fe.direction,Me=$[0]*ue[0]+$[1]*ue[1]+$[2]*ue[2],Be=ee===0?pt(k,Y,O[2],Me,E.kind==="plush"?.48:.38):1,Ce=Math.max(0,(Me+.13)/1.13)*fe.intensity*Be;Ot+=fe.color[0]*Ce,Zt+=fe.color[1]*Ce,ne+=fe.color[2]*Ce}dt=P[0]*Ot*W[st+15],at=P[1]*Zt*W[st+16],At=P[2]*ne*W[st+17],b.neutral?(f(dt,at,At,H,ht),dt=ht[0],at=ht[1],At=ht[2]):(dt=N[u(Math.round(dt*512),0,4096)],at=N[u(Math.round(at*512),0,4096)],At=N[u(Math.round(At*512),0,4096)])}let zt=Math.max(1,Math.ceil(M*1.15)),Qt=Math.min(.9,W[st+18]*et*Dt*2*E.sampleWeight)*Math.min(1,M/zt)*E.opacity;Tt++;for(let Ot=0;Ot<zt;Ot++){let Zt=(Ot+.5)/zt,ne=Zt*M,ee=1;for(;ee<4&&J[ee]<ne;)ee++;let fe=(ne-J[ee-1])/Math.max(1e-6,J[ee]-J[ee-1]),ue=(ee-1)*3,Me=ee*3,Be=O[ue]+(O[Me]-O[ue])*fe,Ce=O[ue+1]+(O[Me+1]-O[ue+1])*fe,ae=O[ue+2]+(O[Me+2]-O[ue+2])*fe,se=Math.floor(Be),we=Math.floor(Ce),Ee=Be-se,Ye=Ce-we;for(let rn=0;rn<2;rn++)for(let wn=0;wn<2;wn++){let En=se+wn,Tn=we+rn;if(En<0||En>=c||Tn<0||Tn>=h)continue;let _n=Tn*c+En;if(ae>n[_n]+13e-6||ae<-1||ae>1)continue;let L=(wn?Ee:1-Ee)*(rn?Ye:1-Ye)*Qt*(1-Zt*.78),K=1-L,it=_n*4;a[it]=dt*L+a[it]*K,a[it+1]=at*L+a[it+1]*K,a[it+2]=At*L+a[it+2]*K,a[it+3]=L+a[it+3]*K}}}}for(let E of _t)ft(E,!0);for(let E=0;E<s.length;E+=4){let q=u(a[E+3],0,1),W=q>1e-5?1/q:0;s[E]=m[u(Math.round(a[E]*W*4096),0,4096)],s[E+1]=m[u(Math.round(a[E+1]*W*4096),0,4096)],s[E+2]=m[u(Math.round(a[E+2]*W*4096),0,4096)],s[E+3]=Math.round(q*255)}return{id:b.id,version:b.version,width:c,height:h,pixels:s.buffer,stats:{ms:performance.now()-I,triangles:Lt,pixels:Ut,fibers:Tt,calls:wt.length+_t.length}}}return{draw:A}}var ja=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.minPreviewScale=.62,this.staticPreview=!1,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${Ec.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=Ec()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=is(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e){this._disposed||(this._pending={scene:t,camera:e,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let a of s.geometries)for(let o of["positions","normals","indices","uv","colors"])a[o]&&r.push(a[o].buffer);for(let a of s.textures)r.push(a.data.buffer);for(let a of s.fibers)r.push(a.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let a of this._waiters.splice(0))a.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let s=this.highQuality||Math.max(this._width,this._height)>=1e3,r=this.highQuality?1600:s?this.captureLimit:Math.round(this.previewLimit*(this.staticPreview?1:this._adaptive)),a=Math.min(1,r/Math.max(this.domElement.width,this.domElement.height)),o={id:n,version:this._version,width:Math.max(1,Math.round(this.domElement.width*a)),height:Math.max(1,Math.round(this.domElement.height*a)),viewProjection:Wr(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?is(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===Ds,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.022,.022,.022],sky:[.026,.026,.026],ground:[.02,.022,.025]},c=new Set,h=new Set,u=0;t.traverseVisible?.(d=>{d.isInstancedMesh&&d.name==="surface-fibers"&&(u+=d.count)});let l=s?Math.min(126e3,o.width*o.height*.4):Math.min(72e3,o.width*o.height*.26),f=Math.max(1,Math.ceil(u/Math.max(3e3,l))),m=d=>{if(!d)return null;let p=(d.uuid||d.id)+":"+(d.version||0);if(h.has(p))return p;let w=d.image||d.source?.data,g=w?.data,v=w?.width,R=w?.height;if(!g&&w?.getContext)try{g=w.getContext("2d")?.getImageData(0,0,v,R)?.data}catch{}return!g||!v||!R?null:(h.add(p),this._knownTextures.has(p)||o.textures.push({id:p,width:v,height:R,data:new Uint8Array(g),channels:Math.round(g.length/(v*R)),repeat:[d.repeat?.x??1,d.repeat?.y??1],offset:[d.offset?.x||0,d.offset?.y||0],wrapS:d.wrapS,wrapT:d.wrapT,flipY:!!d.flipY,srgb:d.colorSpace==="srgb"}),p)},x=(d,p,w="")=>{let g=d.geometry,v=g?.attributes?.position;if(!v||d.isSkinnedMesh)return;let R=g.uuid+":"+(v.version||0)+":"+(g.attributes.normal?.version||0);c.has(R)||(c.add(R),this._knownGeometry.has(R)||o.geometries.push({id:R,positions:Qa(v,3),normals:Qa(g.attributes.normal,3),uv:Qa(g.attributes.uv,2),colors:Qa(g.attributes.color,3),indices:g.index?new Uint32Array(g.index.array):null}));let A=Array.isArray(d.material)?g.groups:[{start:g.drawRange?.start||0,count:g.drawRange?.count??1/0,materialIndex:0}];for(let b=0;b<A.length;b++){let I=A[b],_=Array.isArray(d.material)?d.material[I.materialIndex]:d.material;!_||_.visible===!1||_.isShadowMaterial||(_.opacity??1)<.002||o.meshes.push({id:d.uuid+w+":"+b,geometry:R,matrix:Array.from(p),start:I.start,count:I.count,order:d.renderOrder||0,castShadow:d.castShadow!==!1,receiveShadow:d.receiveShadow!==!1,material:{color:is(_.color),emissive:is(_.emissive,[0,0,0]).map(y=>y*(_.emissiveIntensity??1)),opacity:_.opacity??1,transparent:!!_.transparent,side:_.side??0,roughness:_.roughness??.75,metalness:_.metalness||0,depthTest:_.depthTest!==!1,depthWrite:_.depthWrite!==!1,alphaTest:_.alphaTest||0,unlit:!!_.isMeshBasicMaterial,toneMapped:_.toneMapped!==!1,map:m(_.map),bump:m(_.bumpMap),bumpScale:_.bumpScale||0,surfaceKind:d.userData.surfaceMaterial||_.name,vertexColors:!!_.vertexColors}})}},S=d=>{if(d.visible!==!1){if(d.isLight){let p=is(d.color),w=d.intensity??1;if(d.isHemisphereLight){let g=is(d.groundColor);for(let v=0;v<3;v++)o.sky[v]+=p[v]*w*.22,o.ground[v]+=g[v]*w*.2}else if(d.isAmbientLight)for(let g=0;g<3;g++)o.ambient[g]+=p[g]*w*.3;else if(d.isDirectionalLight||d.isPointLight||d.isSpotLight){if(!o.shadow&&d.isDirectionalLight&&d.castShadow&&this.shadowMap.enabled){d.shadow.updateMatrices(d);let _=Wr(d.shadow.camera.projectionMatrix.elements,d.shadow.camera.matrixWorldInverse.elements),y=Wr(e.matrixWorld.elements,e.projectionMatrixInverse.elements);o.shadow={viewProjection:_,screenMatrix:Wr(_,y),size:s?512:384,radius:Xg(d.shadow.radius||2.5,1,5)}}d.target?.updateMatrixWorld(!0);let g=d.matrixWorld.elements,v=d.target?.matrixWorld.elements,R=g[12]-(v?.[12]||0),A=g[13]-(v?.[13]||0),b=g[14]-(v?.[14]||0),I=Math.hypot(R,A,b)||1;o.lights.push({direction:[R/I,A/I,b/I],color:p,intensity:w/Math.PI})}}if(d.isMesh&&(!e.layers||e.layers.test(d.layers)))if(d.isInstancedMesh){if(d.name==="surface-fibers"&&this.renderFibers){d.geometry.computeBoundingBox();let p=d.geometry.boundingBox.max.y,w=d.instanceMatrix.array,g=d.instanceColor?.array,v=d.userData.fiberProfile||d.geometry.userData.fiberProfile||Array.from({length:5},(_,y)=>[0,p*y/4,0]),R=d.userData.fiberRadius||d.geometry.userData.fiberRadius||.001,A=new Float32Array(Math.ceil(d.count/f)*20),b=0;for(let _=0;_<d.count;_+=f){let y=_*16;for(let[D,U,N]of v)A[b++]=w[y]*D+w[y+4]*U+w[y+8]*N+w[y+12],A[b++]=w[y+1]*D+w[y+5]*U+w[y+9]*N+w[y+13],A[b++]=w[y+2]*D+w[y+6]*U+w[y+10]*N+w[y+14];A[b++]=g?g[_*3]:1,A[b++]=g?g[_*3+1]:1,A[b++]=g?g[_*3+2]:1,A[b++]=R*Math.hypot(w[y],w[y+1],w[y+2]),A[b++]=d.userData.fiberTones?.[_]??1}let I=d.userData.surfaceMaterial||d.parent?.userData.surfaceMaterial||d.parent?.material?.name;o.fibers.push({ownerId:d.parent?.uuid+":0",matrix:Array.from(d.matrixWorld.elements),segments:A,color:is(d.material.color),kind:I,sampleWeight:Math.min(2.3,Math.sqrt(f)),opacity:["fabric","knit"].includes(I)?.9:1})}else if(d.name!=="surface-fibers"&&d.count<=256)for(let p=0;p<d.count;p++)x(d,Wr(d.matrixWorld.elements,d.instanceMatrix.array.subarray(p*16,p*16+16)),":"+p)}else d.material?.isShadowMaterial||x(d,d.matrixWorld.elements);for(let p of d.children||[])S(p)}};return S(t),o.lights.length||o.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),o.lights=o.lights.slice(0,4),o.geometryIds=[...c],o.textureIds=[...h],this._knownGeometry=c,this._knownTextures=h,this.info.memory={geometries:c.size,textures:h.size},o}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(this.minPreviewScale,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=Ec(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var cy=new B(0,1,0),tl=null,Xr=i=>i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0;function Bu(i){let t={...i};for(let e of["name","notes","reference","presetId","version","rendererVersion","palette","output","eyeColorManual"])delete t[e];return JSON.stringify(t)}function el(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let a of Object.values(r))a?.isTexture&&n.add(a)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function qg(i,t){let e=t.shape==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,a]of i.arms.entries())a.rotation.z=(r?1:-1)*.62,a.rotation.x=-.62;for(let[r,a]of i.legs.entries())a.position.y+=.1,a.position.z+=.1,a.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.15,i.head.position.z+=.025,t.action==="work"&&(i.head.rotation.y=-.08)),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new We().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var qr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(tl!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(tl="webgl",this.renderer=new Ha({canvas:t,context:s,...n})):(tl="software",this.renderer=new ja(t)),t.dataset.renderMode=tl,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:640,this.renderer.minPreviewScale=e?.62:.8),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Ds,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Wo,this.scene=new Bi,this.camera=new Xi(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let l=new Hs(this.renderer),f=new Wa;this.environment=l.fromScene(f,.055),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.35,f.dispose(),l.dispose()}this.scene.add(new Fr("#ffffff","#b8c4d3",1.05));let r=new qi("#fffaf6",2.7);r.position.set(-3.8,5.2,4.4),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.01,r.shadow.radius=5,this.scene.add(r);let a=new qi("#edf5ff",.42);a.position.set(4,2.8,2.4),this.scene.add(a);let o=new qi("#ffffff",.8);o.position.set(2,4.2,-3.6),this.scene.add(o),this.floor=new pe(new Mi(200,200),new Dr({color:"#68718a",opacity:.16})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-.016,this.floor.receiveShadow=!0,this.scene.add(this.floor);let c=128,h=new Uint8Array(c*c*4);for(let l=0;l<c;l++)for(let f=0;f<c;f++){let m=((f-c/2)/(c/2))**2+((l-c/2)/(c/2))**2,x=(l*c+f)*4;h[x]=88,h[x+1]=103,h[x+2]=125,h[x+3]=Math.round(Math.exp(-m*4.2)*64)}let u=new vi(h,c,c);u.needsUpdate=!0,this.contact=new pe(new Mi(3.3,2.2),new si({map:u,transparent:!0,depthWrite:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=.002,this.scene.add(this.contact),this.turn=new Pe,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.avatar&&(this.turn.remove(this.avatar.root),el(this.avatar.root)),this.config=structuredClone(t),this.avatar=Pu(t),this.props=Fu(this.avatar,t),qg(this.avatar,t),Ru(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.turn.rotation.y=t.camera==="side"?Math.PI*.43:t.camera==="threeQuarter"?.33:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new We().setFromObject(this.turn);this.center=e.getCenter(new B),this.bounds=e.getSize(new B),this.floor.visible=this.contact.visible=t.background!=="transparent",this.scene.background=t.background==="solid"?new Xt(t.colors.background):t.background==="studio"?new Xt("#f4f6fa"):null,this.fit(this.frame.width,this.frame.height),this.render(Xr(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=Math.max(this.bounds.y*1.28,this.bounds.x*1.28/s)*(72/n.scale),a=r,o=this.center.clone();if(n.framing!=="full"&&!["sleep"].includes(n.action)){let h=n.accessories.prop!=="none";(n.shape==="human"||this.avatar.root.userData.anatomy==="animal")&&(a=r*(h?.9:n.framing==="portrait"?.53:.67),o.y+=this.bounds.y*(h?.04:n.framing==="portrait"?.205:.16))}this.camera.left=-a*s/2,this.camera.right=a*s/2,this.camera.top=a/2,this.camera.bottom=-a/2;let c=n.action==="work"?2.8:n.action==="read"?1.65:.45;this.camera.position.set(o.x,o.y+c,8),this.camera.lookAt(o.x,o.y,0),this.camera.updateProjectionMatrix()}render(t=0){if(!this.avatar)return;let e=this.avatar,n=this.config,s=e.root.userData;if(e.root.position.y=s.restY,e.root.scale.copy(s.restScale),e.root.rotation.copy(s.restRotation),n.action==="bounce"){let o=Math.max(0,Math.sin(t*3.1));e.root.position.y+=o*.24,e.root.scale.y=s.restScale.y*(1+o*.05),e.root.scale.x=s.restScale.x*(1-o*.025)}else{let o=Math.sin(t*(n.action==="sleep"?1.3:1.8));e.root.scale.y=s.restScale.y*(1+o*.008),n.action==="listen"&&(e.root.rotation.z+=Math.sin(t*2)*.035),(n.expression==="curious"||n.expression==="skeptical")&&(e.root.rotation.z+=.055),n.expression==="shy"&&(e.root.rotation.y+=.11)}let r=t%(n.action==="blink"?2.3:5.5),a=Math.abs(r-.17)<.16?Math.max(.07,Math.abs(r-.17)/.16):1;for(let o of e.eyeGroups)o.scale.y=n.expression==="closed"||n.expression==="wink"||n.expression==="delighted"||n.action==="sleep"?1:a;e.tail&&n.action!=="sleep"&&(e.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.renderer.render(this.scene,this.camera)}dispose(){this.avatar&&el(this.avatar.root),el(this.floor),el(this.contact),this.environment?.dispose(),this.renderer.dispose()}},Nu=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.world=new qr(this.canvas),this.start=performance.now(),this.playing=!matchMedia("(prefers-reduced-motion: reduce)").matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{this.raf=requestAnimationFrame(this.loop),!(!this.visible||document.hidden||!this.playing||this.capturing||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?115:40))&&(this.lastFrame=s,this.world.render((s-this.start)/1e3))},this.raf=requestAnimationFrame(this.loop)}update(t){let e=Bu(t);this.updateKey!==e&&(this.updateKey=e,this.pending=t,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(()=>{this.updateFrame=0;try{this.world.update(this.pending),this.revision++,this.canvas.dataset.revision=String(this.revision),this.canvas.dataset.shape=this.pending.shape,this.canvas.dataset.material=this.pending.material,this.canvas.dataset.action=this.pending.action,this.resize(),this.onReady()}catch(n){console.error("Character preview:",n),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,a=Math.max(1,s.width),o=a/r;o>s.height&&(o=s.height,a=o*r),this.canvas.style.width=a+"px",this.canvas.style.height=o+"px",this.world.fit(Math.round(a),Math.round(o)),this.world.render(Xr(this.world.config))}setPlaying(t){this.playing=t,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!t),!t&&this.world.config&&this.world.render(Xr(this.world.config))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let r;this.capturing=!0;try{if(!n)throw Error("\u89D2\u8272\u5C1A\u672A\u51C6\u5907\u597D");let[a,o]=n.aspect.split(":").map(Number),c=a>=o?t:Math.round(t*a/o),h=o>=a?t:Math.round(t*o/a),u=document.createElement("canvas");r=new qr(u),r.renderer.highQuality=!0,r.renderer.captureLimit=t,r.renderer.setPixelRatio(1),r.frame={width:c,height:h},r.update(n),r.render(Xr(n)),await r.renderer.flush?.();let l=await new Promise(f=>u.toBlob(f,"image/png"));if(!l)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return l}finally{r?.dispose(),this.capturing=!1}});return this.captureQueue=s,s}dispose(){cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove()}},Ai,Ou=Promise.resolve(),hi=new Map;function hy(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=Bu(e)+t;if(hi.has(n))return Promise.resolve(hi.get(n));let s=Ou.then(async()=>{if(hi.has(n))return hi.get(n);Ai||(Ai=new qr(document.createElement("canvas"),{thumbnail:!0})),Ai.frame={width:t,height:t},Ai.update(e),Ai.fit(t,t),Ai.render(Xr(e)),await Ai.renderer.flush?.();let r=await new Promise(o=>Ai.renderer.domElement.toBlob(o,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let a=URL.createObjectURL(r);if(hi.set(n,a),hi.size>200){let o=hi.keys().next().value;URL.revokeObjectURL(hi.get(o)),hi.delete(o)}return a});return Ou=s.catch(()=>{}),s}export{Nu as CharacterPreview,hy as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
