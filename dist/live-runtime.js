var nh=0,kc=1,ih=2;var Hc=1,Xo=2,Jn=3,ri=0,an=1,tn=2,ci=0,Ui=1,Vc=2,Gc=3,Wc=4,sh=5,yi=100,rh=101,oh=102,ah=103,ch=104,lh=200,hh=201,uh=202,dh=203,vo=204,Mo=205,fh=206,ph=207,mh=208,gh=209,xh=210,_h=211,yh=212,vh=213,Mh=214,Yo=0,qo=1,Zo=2,Fi=3,Jo=4,$o=5,Ko=6,Qo=7,jo=0,bh=1,Sh=2,li=0,wh=1,Eh=2,Th=3,Ah=4,Rh=5,Ch=6,Fs=7;var Xc=300,Yi=301,qi=302,ta=303,ea=304,Br=306,vs=1e3,_i=1001,bo=1002,Mn=1003,Ih=1004;var zr=1005;var Tn=1006,na=1007;var $n=1008;var Hn=1009,Yc=1010,qc=1011,Ns=1012,ia=1013,wi=1014,Vn=1015,Os=1016,sa=1017,ra=1018,Bs=1020,Zc=35902,Jc=35899,$c=1021,Kc=1022,Sn=1023,Ms=1026,zs=1027,oa=1028,aa=1029,Qc=1030,ca=1031;var la=1033,kr=33776,Hr=33777,Vr=33778,Gr=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37808,_a=37809,ya=37810,va=37811,Ma=37812,ba=37813,Sa=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,Pa=36492,Da=36494,La=36495,Ua=36283,Fa=36284,Na=36285,Oa=36286;var cr=2300,So=2301,yo=2302,Rc=2400,Cc=2401,Ic=2402;var Ph=3200,Dh=3201;var Ba=0,Lh=1,hi="",gn="srgb",Ni="srgb-linear",lr="linear",Ce="srgb";var Li=7680;var Pc=519,Uh=512,Fh=513,Nh=514,jc=515,Oh=516,Bh=517,zh=518,kh=519,Dc=35044,ks=35048;var tl="300 es",Nn=2e3,hr=2001;var oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=1234567,sr=Math.PI/180,bs=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function el(i,t){return(i%t+t)%t}function Wu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xu(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function Yu(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function qu(i,t=1){return t-Math.abs(el(i,t*2)-t)}function Zu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ku(i,t){return i+Math.random()*(t-i)}function Qu(i){return i*(.5-Math.random())}function ju(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(i){return i*sr}function ed(i){return i*bs}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),c=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,h*d,h*p,a*l);break;case"YZY":i.set(h*p,a*u,h*d,a*l);break;case"ZXZ":i.set(h*d,h*p,a*u,a*l);break;case"XZX":i.set(a*u,h*_,h*c,a*l);break;case"YXY":i.set(h*c,a*u,h*_,a*l);break;case"ZYZ":i.set(h*_,h*c,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Se={DEG2RAD:sr,RAD2DEG:bs,generateUUID:Zi,clamp:me,euclideanModulo:el,mapLinear:Wu,inverseLerp:Xu,lerp:rr,damp:Yu,pingpong:qu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:Qu,seededRandom:ju,degToRad:td,radToDeg:ed,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:mn,denormalize:_s},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let h=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],p=r[o+0],c=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=c,t[e+2]=_,t[e+3]=v;return}if(d!==v||h!==p||l!==c||u!==_){let g=1-a,m=h*p+l*c+u*_+d*v,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let T=Math.sqrt(M),A=Math.atan2(T,m*x);g=Math.sin(g*A)/T,a=Math.sin(a*A)/T}let S=a*x;if(h=h*g+p*S,l=l*g+c*S,u=u*g+_*S,d=d*g+v*S,g===1-a){let T=1/Math.sqrt(h*h+l*l+u*u+d*d);h*=T,l*=T,u*=T,d*=T}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],h=n[s+1],l=n[s+2],u=n[s+3],d=r[o],p=r[o+1],c=r[o+2],_=r[o+3];return t[e]=a*_+u*d+h*c-l*p,t[e+1]=h*_+u*p+l*d-a*c,t[e+2]=l*_+u*c+a*p-h*d,t[e+3]=u*_-a*d-h*p-l*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),p=h(n/2),c=h(s/2),_=h(r/2);switch(o){case"XYZ":this._x=p*u*d+l*c*_,this._y=l*c*d-p*u*_,this._z=l*u*_+p*c*d,this._w=l*u*d-p*c*_;break;case"YXZ":this._x=p*u*d+l*c*_,this._y=l*c*d-p*u*_,this._z=l*u*_-p*c*d,this._w=l*u*d+p*c*_;break;case"ZXY":this._x=p*u*d-l*c*_,this._y=l*c*d+p*u*_,this._z=l*u*_+p*c*d,this._w=l*u*d-p*c*_;break;case"ZYX":this._x=p*u*d-l*c*_,this._y=l*c*d+p*u*_,this._z=l*u*_-p*c*d,this._w=l*u*d+p*c*_;break;case"YZX":this._x=p*u*d+l*c*_,this._y=l*c*d+p*u*_,this._z=l*u*_-p*c*d,this._w=l*u*d-p*c*_;break;case"XZY":this._x=p*u*d-l*c*_,this._y=l*c*d-p*u*_,this._z=l*u*_+p*c*d,this._w=l*u*d+p*c*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],u=e[6],d=e[10],p=n+a+d;if(p>0){let c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(u-h)*c,this._y=(r-l)*c,this._z=(o-s)*c}else if(n>a&&n>d){let c=2*Math.sqrt(1+n-a-d);this._w=(u-h)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+l)/c}else if(a>d){let c=2*Math.sqrt(1+a-n-d);this._w=(r-l)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(h+u)/c}else{let c=2*Math.sqrt(1+d-n-a);this._w=(o-s)/c,this._x=(r+l)/c,this._y=(h+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*h,this._y=s*u+o*h+r*a-n*l,this._z=r*u+o*l+n*h-s*a,this._w=o*u-n*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let h=1-a*a;if(h<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let l=Math.sqrt(h),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+h*l+o*d-a*u,this.y=n+h*u+a*l-r*d,this.z=s+h*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new B,Rl=new je,ue=class i{constructor(t,e,n,s,r,o,a,h,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l)}set(t,e,n,s,r,o,a,h,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],u=n[4],d=n[7],p=n[2],c=n[5],_=n[8],v=s[0],g=s[3],m=s[6],x=s[1],M=s[4],S=s[7],T=s[2],A=s[5],w=s[8];return r[0]=o*v+a*x+h*T,r[3]=o*g+a*M+h*A,r[6]=o*m+a*S+h*w,r[1]=l*v+u*x+d*T,r[4]=l*g+u*M+d*A,r[7]=l*m+u*S+d*w,r[2]=p*v+c*x+_*T,r[5]=p*g+c*M+_*A,r[8]=p*m+c*S+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*h+s*r*l-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],d=u*o-a*l,p=a*h-u*r,c=l*r-o*h,_=e*d+n*p+s*c;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=p*v,t[4]=(u*e-s*h)*v,t[5]=(s*r-a*e)*v,t[6]=c*v,t[7]=(n*h-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ic.makeScale(t,e)),this}rotate(t){return this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ic=new ue;function nl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=ur("canvas");return i.style.display="block",i}var Cl={};function Ss(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Il=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var ve=od();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=ur("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sc(s[o].image)):r.push(sc(s[o]))}else r=sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,rc=new B,bn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=Tn,o=$n,a=Sn,h=Hn,l=i.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Zi(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Xc;bn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,l=h[0],u=h[4],d=h[8],p=h[1],c=h[5],_=h[9],v=h[2],g=h[6],m=h[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+c+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,S=(c+1)/2,T=(m+1)/2,A=(u+p)/4,w=(d+v)/4,E=(_+g)/4;return M>S&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=w/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=E/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=E/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-v)/x,this.z=(p-u)/x,this.w=Math.acos((l+c+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new bn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Te=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Kr.subVectors(this.max,$s),os.subVectors(t.a,$s),as.subVectors(t.b,$s),cs.subVectors(t.c,$s),di.subVectors(as,os),fi.subVectors(cs,as),Ci.subVectors(os,cs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,fi.z,0,-fi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ci.y,Ci.x,0];return!oc(e,os,as,cs,Kr)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,os,as,cs,Kr))?!1:(Qr.crossVectors(di,fi),e=[Qr.x,Qr.y,Qr.z],oc(e,os,as,cs,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,$r=new Te,os=new B,as=new B,cs=new B,di=new B,fi=new B,Ci=new B,$s=new B,Kr=new B,Qr=new B,Ii=new B;function oc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),h=t.dot(Ii),l=e.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>a)return!1}return!0}var ld=new Te,Ks=new B,ac=new B,Zn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(ac)),this.expandByPoint(Ks.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ti=new B,cc=new B,jr=new B,pi=new B,lc=new B,to=new B,hc=new B,fr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cc.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(cc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=pi.dot(this.direction),h=-pi.dot(jr),l=pi.lengthSq(),u=Math.abs(1-o*o),d,p,c,_;if(u>0)if(d=o*h-a,p=o*a-h,_=r*u,d>=0)if(p>=-_)if(p<=_){let v=1/u;d*=v,p*=v,c=d*(d+o*p+2*a)+p*(o*d+p+2*h)+l}else p=r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*h)+l;else p=-r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*h)+l;else p<=-_?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-h),r),c=-d*d+p*(p+2*h)+l):p<=_?(d=0,p=Math.min(Math.max(-r,-h),r),c=p*(p+2*h)+l):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-h),r),c=-d*d+p*(p+2*h)+l);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cc).addScaledVector(jr,p),c}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,h,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,h=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,h=(t.min.z-p.z)*d),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){lc.subVectors(e,t),to.subVectors(n,t),hc.crossVectors(lc,to);let o=this.direction.dot(hc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let h=a*this.direction.dot(to.crossVectors(pi,to));if(h<0)return null;let l=a*this.direction.dot(lc.cross(pi));if(l<0||h+l>o)return null;let u=-a*pi.dot(hc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,s,r,o,a,h,l,u,d,p,c,_,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l,u,d,p,c,_,v,g)}set(t,e,n,s,r,o,a,h,l,u,d,p,c,_,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=h,m[2]=l,m[6]=u,m[10]=d,m[14]=p,m[3]=c,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*u,c=o*d,_=a*u,v=a*d;e[0]=h*u,e[4]=-h*d,e[8]=l,e[1]=c+_*l,e[5]=p-v*l,e[9]=-a*h,e[2]=v-p*l,e[6]=_+c*l,e[10]=o*h}else if(t.order==="YXZ"){let p=h*u,c=h*d,_=l*u,v=l*d;e[0]=p+v*a,e[4]=_*a-c,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=c*a-_,e[6]=v+p*a,e[10]=o*h}else if(t.order==="ZXY"){let p=h*u,c=h*d,_=l*u,v=l*d;e[0]=p-v*a,e[4]=-o*d,e[8]=_+c*a,e[1]=c+_*a,e[5]=o*u,e[9]=v-p*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let p=o*u,c=o*d,_=a*u,v=a*d;e[0]=h*u,e[4]=_*l-c,e[8]=p*l+v,e[1]=h*d,e[5]=v*l+p,e[9]=c*l-_,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let p=o*h,c=o*l,_=a*h,v=a*l;e[0]=h*u,e[4]=v-p*d,e[8]=_*d+c,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=c*d+_,e[10]=p-v*d}else if(t.order==="XZY"){let p=o*h,c=o*l,_=a*h,v=a*l;e[0]=h*u,e[4]=-d,e[8]=l*u,e[1]=p*d+v,e[5]=o*u,e[9]=c*d-_,e[2]=_*d-c,e[6]=a*u,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),mi.crossVectors(n,wn),mi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),mi.crossVectors(n,wn)),mi.normalize(),eo.crossVectors(wn,mi),s[0]=mi.x,s[4]=eo.x,s[8]=wn.x,s[1]=mi.y,s[5]=eo.y,s[9]=wn.y,s[2]=mi.z,s[6]=eo.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],u=n[1],d=n[5],p=n[9],c=n[13],_=n[2],v=n[6],g=n[10],m=n[14],x=n[3],M=n[7],S=n[11],T=n[15],A=s[0],w=s[4],E=s[8],b=s[12],y=s[1],P=s[5],D=s[9],F=s[13],W=s[2],$=s[6],Y=s[10],it=s[14],Z=s[3],ut=s[7],Rt=s[11],_t=s[15];return r[0]=o*A+a*y+h*W+l*Z,r[4]=o*w+a*P+h*$+l*ut,r[8]=o*E+a*D+h*Y+l*Rt,r[12]=o*b+a*F+h*it+l*_t,r[1]=u*A+d*y+p*W+c*Z,r[5]=u*w+d*P+p*$+c*ut,r[9]=u*E+d*D+p*Y+c*Rt,r[13]=u*b+d*F+p*it+c*_t,r[2]=_*A+v*y+g*W+m*Z,r[6]=_*w+v*P+g*$+m*ut,r[10]=_*E+v*D+g*Y+m*Rt,r[14]=_*b+v*F+g*it+m*_t,r[3]=x*A+M*y+S*W+T*Z,r[7]=x*w+M*P+S*$+T*ut,r[11]=x*E+M*D+S*Y+T*Rt,r[15]=x*b+M*F+S*it+T*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],u=t[2],d=t[6],p=t[10],c=t[14],_=t[3],v=t[7],g=t[11],m=t[15];return _*(+r*h*d-s*l*d-r*a*p+n*l*p+s*a*c-n*h*c)+v*(+e*h*c-e*l*p+r*o*p-s*o*c+s*l*u-r*h*u)+g*(+e*l*d-e*a*c-r*o*d+n*o*c+r*a*u-n*l*u)+m*(-s*a*u-e*h*d+e*a*p+s*o*d-n*o*p+n*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],d=t[9],p=t[10],c=t[11],_=t[12],v=t[13],g=t[14],m=t[15],x=d*g*l-v*p*l+v*h*c-a*g*c-d*h*m+a*p*m,M=_*p*l-u*g*l-_*h*c+o*g*c+u*h*m-o*p*m,S=u*v*l-_*d*l+_*a*c-o*v*c-u*a*m+o*d*m,T=_*d*h-u*v*h-_*a*p+o*v*p+u*a*g-o*d*g,A=e*x+n*M+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=x*w,t[1]=(v*p*r-d*g*r-v*s*c+n*g*c+d*s*m-n*p*m)*w,t[2]=(a*g*r-v*h*r+v*s*l-n*g*l-a*s*m+n*h*m)*w,t[3]=(d*h*r-a*p*r-d*s*l+n*p*l+a*s*c-n*h*c)*w,t[4]=M*w,t[5]=(u*g*r-_*p*r+_*s*c-e*g*c-u*s*m+e*p*m)*w,t[6]=(_*h*r-o*g*r-_*s*l+e*g*l+o*s*m-e*h*m)*w,t[7]=(o*p*r-u*h*r+u*s*l-e*p*l-o*s*c+e*h*c)*w,t[8]=S*w,t[9]=(_*d*r-u*v*r-_*n*c+e*v*c+u*n*m-e*d*m)*w,t[10]=(o*v*r-_*a*r+_*n*l-e*v*l-o*n*m+e*a*m)*w,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*c-e*a*c)*w,t[12]=T*w,t[13]=(u*v*s-_*d*s+_*n*p-e*v*p-u*n*g+e*d*g)*w,t[14]=(_*a*s-o*v*s-_*n*h+e*v*h+o*n*g-e*a*g)*w,t[15]=(o*d*s-u*a*s+u*n*h-e*d*h-o*n*p+e*a*p)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*h,l*h+s*a,0,l*a+s*h,u*a+n,u*h-s*o,0,l*h-s*a,u*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,u=o+o,d=a+a,p=r*l,c=r*u,_=r*d,v=o*u,g=o*d,m=a*d,x=h*l,M=h*u,S=h*d,T=n.x,A=n.y,w=n.z;return s[0]=(1-(v+m))*T,s[1]=(c+S)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(c-S)*A,s[5]=(1-(p+m))*A,s[6]=(g+x)*A,s[7]=0,s[8]=(_+M)*w,s[9]=(g-x)*w,s[10]=(1-(p+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let l=1/r,u=1/o,d=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn,h=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s),_,v;if(h)_=r/(o-r),v=o*r/(o-r);else if(a===Nn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===hr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn,h=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),c=-(n+s)/(n-s),_,v;if(h)_=1/(o-r),v=o/(o-r);else if(a===Nn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===hr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=c,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new B,Un=new Ie,hd=new B(0,0,0),ud=new B(1,1,1),mi=new B,eo=new B,wn=new B,Dl=new Ie,Ll=new je,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],u=s[9],d=s[2],p=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,c),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,Ul=new B,hs=new je,ei=new Ie,no=new B,Qs=new B,fd=new B,pd=new je,Fl=new B(1,0,0),Nl=new B(0,1,0),Ol=new B(0,0,1),Bl={type:"added"},md={type:"removed"},us={type:"childadded",child:null},uc={type:"childremoved",child:null},Ke=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new In,n=new je,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ue}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Qs,no,this.up):ei.lookAt(no,Qs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(ei),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let d=h[l];r(t.shapes,d)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),c=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),c.length>0&&(n.animations=c),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let h=[];for(let l in a){let u=a[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new B(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new B,ni=new B,dc=new B,ii=new B,ds=new B,fs=new B,zl=new B,fc=new B,pc=new B,mc=new B,gc=new Re,xc=new Re,_c=new Re,Xn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ni.subVectors(n,e),dc.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ni),h=Fn.dot(dc),l=ni.dot(ni),u=ni.dot(dc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,c=(l*h-a*u)*p,_=(o*u-a*h)*p;return r.set(1-c-_,_,c)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,h){return this.getBarycoord(t,e,n,s,ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ii.x),h.addScaledVector(o,ii.y),h.addScaledVector(a,ii.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return gc.setScalar(0),xc.setScalar(0),_c.setScalar(0),gc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gc,r.x),o.addScaledVector(xc,r.y),o.addScaledVector(_c,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ni.subVectors(t,e),Fn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),fs.subVectors(r,n),fc.subVectors(t,n);let h=ds.dot(fc),l=fs.dot(fc);if(h<=0&&l<=0)return e.copy(n);pc.subVectors(t,s);let u=ds.dot(pc),d=fs.dot(pc);if(u>=0&&d<=u)return e.copy(s);let p=h*d-u*l;if(p<=0&&h>=0&&u<=0)return o=h/(h-u),e.copy(n).addScaledVector(ds,o);mc.subVectors(t,r);let c=ds.dot(mc),_=fs.dot(mc);if(_>=0&&c<=_)return e.copy(r);let v=c*l-h*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(fs,a);let g=u*_-c*d;if(g<=0&&d-u>=0&&c-_>=0)return zl.subVectors(r,s),a=(d-u)/(d-u+(c-_)),e.copy(s).addScaledVector(zl,a);let m=1/(g+v+p);return o=v*m,a=p*m,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},io={h:0,s:0,l:0};function yc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=el(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yc(o,r,t+1/3),this.g=yc(o,r,t),this.b=yc(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ve.workingToColorSpace(dn.copy(this),t),Math.round(me(dn.r*255,0,255))*65536+Math.round(me(dn.g*255,0,255))*256+Math.round(me(dn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(dn.copy(this),e);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),h,l,u=(a+o)/2;if(a===o)h=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=gn){ve.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,s=dn.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(io);let n=rr(gi.h,io.h,e),s=rr(gi.s,io.s,e),r=rr(gi.l,io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new jt;jt.NAMES=Gh;var gd=0,ai=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ui,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oi=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new B,so=new Ut,xd=0,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}};var pr=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},_d=0,Cn=new Ie,vc=new Ke,ps=new B,En=new Te,js=new Te,rn=new B,be=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nl(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(En.min,js.min),En.expandByPoint(rn),rn.addVectors(En.max,js.max),En.expandByPoint(rn)):(En.expandByPoint(js.min),En.expandByPoint(js.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],h=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rn.fromBufferAttribute(a,l),h&&(ps.fromBufferAttribute(t,l),rn.add(ps)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],h=[];for(let E=0;E<n.count;E++)a[E]=new B,h[E]=new B;let l=new B,u=new B,d=new B,p=new Ut,c=new Ut,_=new Ut,v=new B,g=new B;function m(E,b,y){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),p.fromBufferAttribute(r,E),c.fromBufferAttribute(r,b),_.fromBufferAttribute(r,y),u.sub(l),d.sub(l),c.sub(p),_.sub(p);let P=1/(c.x*_.y-_.x*c.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-c.y).multiplyScalar(P),g.copy(d).multiplyScalar(c.x).addScaledVector(u,-_.x).multiplyScalar(P),a[E].add(v),a[b].add(v),a[y].add(v),h[E].add(g),h[b].add(g),h[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let E=0,b=x.length;E<b;++E){let y=x[E],P=y.start,D=y.count;for(let F=P,W=P+D;F<W;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new B,S=new B,T=new B,A=new B;function w(E){T.fromBufferAttribute(s,E),A.copy(T);let b=a[E];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(A,b);let P=S.dot(h[E])<0?-1:1;o.setXYZW(E,M.x,M.y,M.z,P)}for(let E=0,b=x.length;E<b;++E){let y=x[E],P=y.start,D=y.count;for(let F=P,W=P+D;F<W;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,c=n.count;p<c;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,o=new B,a=new B,h=new B,l=new B,u=new B,d=new B;if(t)for(let p=0,c=t.count;p<c;p+=3){let _=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),h.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,c=e.count;p<c;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,h){let l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(h.length*u),c=0,_=0;for(let v=0,g=h.length;v<g;v++){a.isInterleavedBufferAttribute?c=h[v]*a.data.stride+a.offset:c=h[v]*u;for(let m=0;m<u;m++)p[_++]=l[c++]}return new Qe(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],l=t(h,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let h=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let p=l[u],c=t(p,n);h.push(c)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let l=n[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let d=0,p=l.length;d<p;d++){let c=l[d];u.push(c.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let p=0,c=d.length;p<c;p++)u.push(d[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kl=new Ie,Pi=new fr,ro=new Zn,Hl=new B,oo=new B,ao=new B,co=new B,Mc=new B,lo=new B,Vl=new B,ho=new B,Me=class extends Ke{constructor(t=new be,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let u=a[h],d=r[h];u!==0&&(Mc.fromBufferAttribute(d,t),o?lo.addScaledVector(Mc,u):lo.addScaledVector(Mc.sub(e),u))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(ro.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ro,Hl)===null||Pi.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){let g=p[_],m=o[g.materialIndex],x=Math.max(g.start,c.start),M=Math.min(a.count,Math.min(g.start+g.count,c.start+c.count));for(let S=x,T=M;S<T;S+=3){let A=a.getX(S),w=a.getX(S+1),E=a.getX(S+2);s=uo(this,m,t,n,l,u,d,A,w,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,c.start),v=Math.min(a.count,c.start+c.count);for(let g=_,m=v;g<m;g+=3){let x=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);s=uo(this,o,t,n,l,u,d,x,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){let g=p[_],m=o[g.materialIndex],x=Math.max(g.start,c.start),M=Math.min(h.count,Math.min(g.start+g.count,c.start+c.count));for(let S=x,T=M;S<T;S+=3){let A=S,w=S+1,E=S+2;s=uo(this,m,t,n,l,u,d,A,w,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,c.start),v=Math.min(h.count,c.start+c.count);for(let g=_,m=v;g<m;g+=3){let x=g,M=g+1,S=g+2;s=uo(this,o,t,n,l,u,d,x,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function yd(i,t,e,n,s,r,o,a){let h;if(t.side===an?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,t.side===ri,a),h===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,h,l){i.getVertexPosition(a,oo),i.getVertexPosition(h,ao),i.getVertexPosition(l,co);let u=yd(i,t,e,n,oo,ao,co,Vl);if(u){let d=new B;Xn.getBarycoord(Vl,oo,ao,co,d),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,h,l,d,new Ut)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,h,l,d,new Ut)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,h,l,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:h,c:l,normal:new B,materialIndex:0};Xn.getNormal(oo,ao,co,p.normal),u.face=p,u.barycoord=d}return u}var vi=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],l=[],u=[],d=[],p=0,c=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function _(v,g,m,x,M,S,T,A,w,E,b){let y=S/w,P=T/E,D=S/2,F=T/2,W=A/2,$=w+1,Y=E+1,it=0,Z=0,ut=new B;for(let Rt=0;Rt<Y;Rt++){let _t=Rt*P-F;for(let Gt=0;Gt<$;Gt++){let Wt=Gt*y-D;ut[v]=Wt*x,ut[g]=_t*M,ut[m]=W,l.push(ut.x,ut.y,ut.z),ut[v]=0,ut[g]=0,ut[m]=A>0?1:-1,u.push(ut.x,ut.y,ut.z),d.push(Gt/w),d.push(1-Rt/E),it+=1}}for(let Rt=0;Rt<E;Rt++)for(let _t=0;_t<w;_t++){let Gt=p+_t+$*Rt,Wt=p+_t+$*(Rt+1),Jt=p+(_t+1)+$*(Rt+1),qt=p+(_t+1)+$*Rt;h.push(Gt,Wt,qt),h.push(Wt,Jt,qt),Z+=6}a.addGroup(c,Z,b),c+=Z,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function il(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Wh={clone:Ji,merge:pn},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},gr=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new B,Gl=new Ut,Wl=new Ut,xn=class extends gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/l,s*=o.width/h,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Ao=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new xn(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new xn(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new xn(ms,gs,t,e);a.layers=this.layers,this.add(a);let h=new xn(ms,gs,t,e);h.layers=this.layers,this.add(h);let l=new xn(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,h]=e;for(let l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,l,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,c),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xr=class extends bn{constructor(t=[],e=Yi,n,s,r,o,a,h,l,u){super(t,e,n,s,r,o,a,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ro=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ci});r.uniforms.tEquirect.value=e;let o=new Me(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=Tn),new Ao(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),c=.02,_=.005;l.inputState.pinching&&p>c+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=c-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Bi=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var As=class extends bn{constructor(t=null,e=1,n=1,s,r,o,a,h,l=Mn,u=Mn,d,p){super(null,o,a,h,l,u,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new Ie,Xl=new Ie,fo=[],Yl=new Te,wd=new Ie,tr=new Me,er=new Zn,zi=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Te),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Yl.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Yl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),er.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Xl.multiplyMatrices(n,xs),tr.matrixWorld=Xl,tr.raycast(t,fo);for(let o=0,a=fo.length;o<a;o++){let h=fo[o];h.instanceId=r,h.object=this,e.push(h)}fo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(s*this.count),s,this.count,oa,Vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,h=s*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bc=new B,Ed=new B,Td=new ue,Wn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bc.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(bc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Zn,Ad=new Ut(.5,.5),po=new B,Rs=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],u=r[4],d=r[5],p=r[6],c=r[7],_=r[8],v=r[9],g=r[10],m=r[11],x=r[12],M=r[13],S=r[14],T=r[15];if(s[0].setComponents(l-o,c-u,m-_,T-x).normalize(),s[1].setComponents(l+o,c+u,m+_,T+x).normalize(),s[2].setComponents(l+a,c+d,m+v,T+M).normalize(),s[3].setComponents(l-a,c-d,m-v,T-M).normalize(),n)s[4].setComponents(h,p,g,S).normalize(),s[5].setComponents(l-h,c-p,m-g,T-S).normalize();else if(s[4].setComponents(l-h,c-p,m-g,T-S).normalize(),e===Nn)s[5].setComponents(l+h,c+p,m+g,T+S).normalize();else if(e===hr)s[5].setComponents(h,p,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Ad.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yr=class extends bn{constructor(t,e,n=wi,s,r,o,a=Mn,h=Mn,l,u=Ms,d=1){if(u!==Ms&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,h,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vr=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mr=class i extends be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],h=[],l=[],u=e/2,d=Math.PI/2*t,p=e,c=2*d+p,_=n*2+r,v=s+1,g=new B,m=new B;for(let x=0;x<=_;x++){let M=0,S=0,T=0,A=0;if(x<=n){let b=x/n,y=b*Math.PI/2;S=-u-t*Math.cos(y),T=t*Math.sin(y),A=-t*Math.cos(y),M=b*d}else if(x<=n+r){let b=(x-n)/r;S=-u+b*e,T=t,A=0,M=d+b*p}else{let b=(x-n-r)/n,y=b*Math.PI/2;S=u+t*Math.sin(y),T=t*Math.cos(y),A=t*Math.sin(y),M=d+p+b*d}let w=Math.max(0,Math.min(1,M/c)),E=0;x===0?E=.5/s:x===_&&(E=-.5/s);for(let b=0;b<=s;b++){let y=b/s,P=y*Math.PI*2,D=Math.sin(P),F=Math.cos(P);m.x=-T*F,m.y=S,m.z=T*D,a.push(m.x,m.y,m.z),g.set(-T*F,A,T*D),g.normalize(),h.push(g.x,g.y,g.z),l.push(y+E,w)}if(x>0){let b=(x-1)*v;for(let y=0;y<s;y++){let P=b+y,D=b+y+1,F=x*v+y,W=x*v+y+1;o.push(P,D,F),o.push(D,W,F)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},br=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],h=[],l=new B,u=new Ut;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let c=n+d/e*s;l.x=t*Math.cos(c),l.y=t*Math.sin(c),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,h.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],c=[],_=0,v=[],g=n/2,m=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(c,2));function x(){let S=new B,T=new B,A=0,w=(e-t)/n;for(let E=0;E<=r;E++){let b=[],y=E/r,P=y*(e-t)+t;for(let D=0;D<=s;D++){let F=D/s,W=F*h+a,$=Math.sin(W),Y=Math.cos(W);T.x=P*$,T.y=-y*n+g,T.z=P*Y,d.push(T.x,T.y,T.z),S.set($,w,Y).normalize(),p.push(S.x,S.y,S.z),c.push(F,1-y),b.push(_++)}v.push(b)}for(let E=0;E<s;E++)for(let b=0;b<r;b++){let y=v[b][E],P=v[b+1][E],D=v[b+1][E+1],F=v[b][E+1];(t>0||b!==0)&&(u.push(y,P,F),A+=3),(e>0||b!==r-1)&&(u.push(P,D,F),A+=3)}l.addGroup(m,A,0),m+=A}function M(S){let T=_,A=new Ut,w=new B,E=0,b=S===!0?t:e,y=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,g*y,0),p.push(0,y,0),c.push(.5,.5),_++;let P=_;for(let D=0;D<=s;D++){let W=D/s*h+a,$=Math.cos(W),Y=Math.sin(W);w.x=b*Y,w.y=g*y,w.z=b*$,d.push(w.x,w.y,w.z),p.push(0,y,0),A.x=$*.5+.5,A.y=Y*.5*y+.5,c.push(A.x,A.y),_++}for(let D=0;D<s;D++){let F=T+D,W=P+D;S===!0?u.push(W,W+1,F):u.push(W+1,W,F),E+=3}l.addGroup(m,E,S===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class i extends Pn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,h=r-1,l;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)h=s-1;else{h=s;break}if(s=h,n[s]===o)return s/(r-1);let u=n[s],p=n[s+1]-u,c=(o-u)/p;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),h=e||(o.isVector2?new Ut:new B);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],o=[],a=new B,h=new Ie;for(let c=0;c<=t;c++){let _=c/t;s[c]=this.getTangentAt(_,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(me(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(h.makeRotationAxis(a,_))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(me(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let _=1;_<=t;_++)r[_].applyMatrix4(h.makeRotationAxis(s[_],c*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new Ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=h-this.aX,c=l-this.aY;h=p*u-c*d+this.aX,l=p*d+c*u+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Co=class extends Cs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,h){i=r,t=a,e=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,l){s(o,a,l*(a-r),l*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,l,u,d){let p=(o-r)/l-(a-r)/(l+u)+(a-o)/u,c=(a-o)/u-(h-o)/(u+d)+(h-a)/d;p*=u,c*=u,s(o,a,p,c)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var mo=new B,Sc=new sl,wc=new sl,Ec=new sl,fn=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),l=mo);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(d),c),v=Math.pow(d.distanceToSquared(p),c),g=Math.pow(p.distanceToSquared(u),c);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Sc.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,_,v,g),wc.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,_,v,g),Ec.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),wc.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),Ec.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return n.set(Sc.calc(h),wc.calc(h),Ec.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ql(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,h=i*a;return(2*e-2*n+r+o)*h+(-3*e+3*n-2*r-o)*a+r*i+e}function Rd(i,t){let e=1-i;return e*e*t}function Cd(i,t){return 2*(1-i)*i*t}function Id(i,t){return i*i*t}function or(i,t,e,n){return Rd(i,t)+Cd(i,e)+Id(i,n)}function Pd(i,t){let e=1-i;return e*e*e*t}function Dd(i,t){let e=1-i;return 3*e*e*i*t}function Ld(i,t){return 3*(1-i)*i*i*t}function Ud(i,t){return i*i*i*t}function ar(i,t,e,n,s){return Pd(i,t)+Dd(i,e)+Ld(i,n)+Ud(i,s)}var wr=class extends _n{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends _n{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y),ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Er=class extends _n{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Is=class extends _n{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends _n{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends _n{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y),or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,h=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ql(a,h.x,l.x,u.x,d.x),ql(a,h.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:fn,CubicBezierCurve:wr,CubicBezierCurve3:Io,EllipseCurve:Cs,LineCurve:Er,LineCurve3:Is,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:Ar,SplineCurve:Rr}),Ps=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){let u=h[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Po[s.type]().fromJSON(s))}return this}},Cr=class extends Ps{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Er(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Tr(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wr(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s),new Ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,h){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,h),this}absellipse(t,e,n,s,r,o,a,h){let l=new Cs(t,e,n,s,r,o,a,h);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Dn=class extends Cr{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}};function Fd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,h,l;if(n&&(r=kd(i,t,r,e)),i.length>80*e){a=1/0,h=1/0;let u=-1/0,d=-1/0;for(let p=e;p<s;p+=e){let c=i[p],_=i[p+1];c<a&&(a=c),_<h&&(h=_),c>u&&(u=c),_>d&&(d=_)}l=Math.max(u-a,d-h),l=l!==0?32767/l:0}return Ir(r,o,e,a,h,l,0),o}function Xh(i,t,e,n,s){let r;if(s===Kd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zl(o/n|0,i[o],i[o+1],r);return r&&Ds(r,r.next)&&(Dr(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||ze(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let h=i.prev,l=i.next;if(r?Od(i,n,s,r):Nd(i)){t.push(h.i,i.i,l.i),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Bd(ki(i),t),Ir(i,t,e,n,s,r,2)):o===2&&zd(i,t,e,n,s,r):Ir(ki(i),t,e,n,s,r,1);break}}}function Nd(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,h=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,h,l),p=Math.max(s,r,o),c=Math.max(a,h,l),_=n.next;for(;_!==t;){if(_.x>=u&&_.x<=p&&_.y>=d&&_.y<=c&&ir(s,a,r,h,o,l,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Od(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ze(s,r,o)>=0)return!1;let a=s.x,h=r.x,l=o.x,u=s.y,d=r.y,p=o.y,c=Math.min(a,h,l),_=Math.min(u,d,p),v=Math.max(a,h,l),g=Math.max(u,d,p),m=Lc(c,_,t,e,n),x=Lc(v,g,t,e,n),M=i.prevZ,S=i.nextZ;for(;M&&M.z>=m&&S&&S.z<=x;){if(M.x>=c&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&ir(a,u,h,d,l,p,M.x,M.y)&&ze(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=c&&S.x<=v&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&ir(a,u,h,d,l,p,S.x,S.y)&&ze(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=c&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&ir(a,u,h,d,l,p,M.x,M.y)&&ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=x;){if(S.x>=c&&S.x<=v&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&ir(a,u,h,d,l,p,S.x,S.y)&&ze(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&qh(n,e,e.next,s)&&Pr(n,s)&&Pr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function zd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zd(o,a)){let h=Zh(o,a);o=ki(o,o.next),h=ki(h,h.next),Ir(o,t,e,n,s,r,0),Ir(h,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,h=r<o-1?t[r+1]*n:i.length,l=Xh(i,a,h,n,!1);l===l.next&&(l.steiner=!0),s.push(qd(l))}s.sort(Hd);for(let r=0;r<s.length;r++)e=Vd(s[r],e);return e}function Hd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vd(i,t){let e=Gd(i,t);if(!e)return t;let n=Zh(e,i);return ki(n,n.next),ki(e,e.next)}function Gd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,h=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&Yh(s<l?n:r,s,h,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Pr(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Wd(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Wd(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Xd(i,t,e,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yd(s)}function Yd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let h=e;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yh(i,t,e,n,s,r,o,a)}function Zd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jd(i,t)&&(Pr(i,t)&&Pr(t,i)&&$d(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Ds(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function qh(i,t,e,n){let s=xo(ze(i,t,e)),r=xo(ze(i,t,n)),o=xo(ze(e,n,i)),a=xo(ze(e,n,t));return!!(s!==r&&o!==a||s===0&&go(i,e,t)||r===0&&go(i,n,t)||o===0&&go(e,i,n)||a===0&&go(e,t,n))}function go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function Jd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function $d(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zh(i,t){let e=Uc(i.i,i.x,i.y),n=Uc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zl(i,t,e,n){let s=Uc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fc=class{static triangulate(t,e,n=2){return Fd(t,e,n)}},Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jl(t),$l(n,t);let o=t.length;e.forEach(Jl);for(let h=0;h<e.length;h++)s.push(o),o+=e[h].length,$l(n,e[h]);let a=Fc.triangulate(n,s);for(let h=0;h<a.length;h+=3)r.push(a.slice(h,h+3));return r}};function Jl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $l(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hi=class i extends be{constructor(t=new Dn([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,h=t.length;a<h;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let h=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:c-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Qd,M,S=!1,T,A,w,E;m&&(M=m.getSpacedPoints(u),S=!0,p=!1,T=m.computeFrenetFrames(u,!1),A=new B,w=new B,E=new B),p||(g=0,c=0,_=0,v=0);let b=a.extractPoints(l),y=b.shape,P=b.holes;if(!Yn.isClockWise(y)){y=y.reverse();for(let G=0,z=P.length;G<z;G++){let H=P[G];Yn.isClockWise(H)&&(P[G]=H.reverse())}}function F(G){let H=10000000000000001e-36,q=G[0];for(let tt=1;tt<=G.length;tt++){let J=tt%G.length,et=G[J],yt=et.x-q.x,gt=et.y-q.y,C=yt*yt+gt*gt,f=Math.max(Math.abs(et.x),Math.abs(et.y),Math.abs(q.x),Math.abs(q.y)),I=H*f*f;if(C<=I){G.splice(J,1),tt--;continue}q=et}}F(y),P.forEach(F);let W=P.length,$=y;for(let G=0;G<W;G++){let z=P[G];y=y.concat(z)}function Y(G,z,H){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(z,H)}let it=y.length;function Z(G,z,H){let q,tt,J,et=G.x-z.x,yt=G.y-z.y,gt=H.x-G.x,C=H.y-G.y,f=et*et+yt*yt,I=et*C-yt*gt;if(Math.abs(I)>Number.EPSILON){let U=Math.sqrt(f),O=Math.sqrt(gt*gt+C*C),N=z.x-yt/U,V=z.y+et/U,X=H.x-C/O,rt=H.y+gt/O,mt=((X-N)*C-(rt-V)*gt)/(et*C-yt*gt);q=N+et*mt-G.x,tt=V+yt*mt-G.y;let j=q*q+tt*tt;if(j<=2)return new Ut(q,tt);J=Math.sqrt(j/2)}else{let U=!1;et>Number.EPSILON?gt>Number.EPSILON&&(U=!0):et<-Number.EPSILON?gt<-Number.EPSILON&&(U=!0):Math.sign(yt)===Math.sign(C)&&(U=!0),U?(q=-yt,tt=et,J=Math.sqrt(f)):(q=et,tt=yt,J=Math.sqrt(f/2))}return new Ut(q/J,tt/J)}let ut=[];for(let G=0,z=$.length,H=z-1,q=G+1;G<z;G++,H++,q++)H===z&&(H=0),q===z&&(q=0),ut[G]=Z($[G],$[H],$[q]);let Rt=[],_t,Gt=ut.concat();for(let G=0,z=W;G<z;G++){let H=P[G];_t=[];for(let q=0,tt=H.length,J=tt-1,et=q+1;q<tt;q++,J++,et++)J===tt&&(J=0),et===tt&&(et=0),_t[q]=Z(H[q],H[J],H[et]);Rt.push(_t),Gt=Gt.concat(_t)}let Wt;if(g===0)Wt=Yn.triangulateShape($,P);else{let G=[],z=[];for(let H=0;H<g;H++){let q=H/g,tt=c*Math.cos(q*Math.PI/2),J=_*Math.sin(q*Math.PI/2)+v;for(let et=0,yt=$.length;et<yt;et++){let gt=Y($[et],ut[et],J);Yt(gt.x,gt.y,-tt),q===0&&G.push(gt)}for(let et=0,yt=W;et<yt;et++){let gt=P[et];_t=Rt[et];let C=[];for(let f=0,I=gt.length;f<I;f++){let U=Y(gt[f],_t[f],J);Yt(U.x,U.y,-tt),q===0&&C.push(U)}q===0&&z.push(C)}}Wt=Yn.triangulateShape(G,z)}let Jt=Wt.length,qt=_+v;for(let G=0;G<it;G++){let z=p?Y(y[G],Gt[G],qt):y[G];S?(w.copy(T.normals[0]).multiplyScalar(z.x),A.copy(T.binormals[0]).multiplyScalar(z.y),E.copy(M[0]).add(w).add(A),Yt(E.x,E.y,E.z)):Yt(z.x,z.y,0)}for(let G=1;G<=u;G++)for(let z=0;z<it;z++){let H=p?Y(y[z],Gt[z],qt):y[z];S?(w.copy(T.normals[G]).multiplyScalar(H.x),A.copy(T.binormals[G]).multiplyScalar(H.y),E.copy(M[G]).add(w).add(A),Yt(E.x,E.y,E.z)):Yt(H.x,H.y,d/u*G)}for(let G=g-1;G>=0;G--){let z=G/g,H=c*Math.cos(z*Math.PI/2),q=_*Math.sin(z*Math.PI/2)+v;for(let tt=0,J=$.length;tt<J;tt++){let et=Y($[tt],ut[tt],q);Yt(et.x,et.y,d+H)}for(let tt=0,J=P.length;tt<J;tt++){let et=P[tt];_t=Rt[tt];for(let yt=0,gt=et.length;yt<gt;yt++){let C=Y(et[yt],_t[yt],q);S?Yt(C.x,C.y+M[u-1].y,M[u-1].x+H):Yt(C.x,C.y,d+H)}}}ct(),bt();function ct(){let G=s.length/3;if(p){let z=0,H=it*z;for(let q=0;q<Jt;q++){let tt=Wt[q];Bt(tt[2]+H,tt[1]+H,tt[0]+H)}z=u+g*2,H=it*z;for(let q=0;q<Jt;q++){let tt=Wt[q];Bt(tt[0]+H,tt[1]+H,tt[2]+H)}}else{for(let z=0;z<Jt;z++){let H=Wt[z];Bt(H[2],H[1],H[0])}for(let z=0;z<Jt;z++){let H=Wt[z];Bt(H[0]+it*u,H[1]+it*u,H[2]+it*u)}}n.addGroup(G,s.length/3-G,0)}function bt(){let G=s.length/3,z=0;Ft($,z),z+=$.length;for(let H=0,q=P.length;H<q;H++){let tt=P[H];Ft(tt,z),z+=tt.length}n.addGroup(G,s.length/3-G,1)}function Ft(G,z){let H=G.length;for(;--H>=0;){let q=H,tt=H-1;tt<0&&(tt=G.length-1);for(let J=0,et=u+g*2;J<et;J++){let yt=it*J,gt=it*(J+1),C=z+q+yt,f=z+tt+yt,I=z+tt+gt,U=z+q+gt;se(C,f,I,U)}}}function Yt(G,z,H){h.push(G),h.push(z),h.push(H)}function Bt(G,z,H){pt(G),pt(z),pt(H);let q=s.length/3,tt=x.generateTopUV(n,s,q-3,q-2,q-1);R(tt[0]),R(tt[1]),R(tt[2])}function se(G,z,H,q){pt(G),pt(z),pt(q),pt(z),pt(H),pt(q);let tt=s.length/3,J=x.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);R(J[0]),R(J[1]),R(J[3]),R(J[1]),R(J[2]),R(J[3])}function pt(G){s.push(h[G*3+0]),s.push(h[G*3+1]),s.push(h[G*3+2])}function R(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Po[s.type]().fromJSON(s)),new i(n,t.options)}},Qd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],h=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Ut(r,o),new Ut(a,h),new Ut(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],h=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],p=t[s*3],c=t[s*3+1],_=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ut(o,1-h),new Ut(l,1-d),new Ut(p,1-_),new Ut(v,1-m)]:[new Ut(a,1-h),new Ut(u,1-d),new Ut(c,1-_),new Ut(g,1-m)]}};function jd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ls=class i extends be{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],o=[],a=[],h=[],l=[],u=1/e,d=new B,p=new Ut,c=new B,_=new B,v=new B,g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,c.x=m*1,c.y=-g,c.z=m*0,v.copy(c),c.normalize(),h.push(c.x,c.y,c.z);break;case t.length-1:h.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,c.x=m*1,c.y=-g,c.z=m*0,_.copy(c),c.x+=v.x,c.y+=v.y,c.z+=v.z,c.normalize(),h.push(c.x,c.y,c.z),v.copy(_)}for(let x=0;x<=e;x++){let M=n+x*u*s,S=Math.sin(M),T=Math.cos(M);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*S,d.y=t[A].y,d.z=t[A].x*T,o.push(d.x,d.y,d.z),p.x=x/e,p.y=A/(t.length-1),a.push(p.x,p.y);let w=h[3*A+0]*S,E=h[3*A+1],b=h[3*A+0]*T;l.push(w,E,b)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let S=M+x*t.length,T=S,A=S+t.length,w=S+t.length+1,E=S+1;r.push(T,A,E),r.push(w,E,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Lr=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(s),l=a+1,u=h+1,d=t/a,p=e/h,c=[],_=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*p-o;for(let M=0;M<l;M++){let S=M*d-r;_.push(S,-x,0),v.push(0,0,1),g.push(M/a),g.push(1-m/h)}}for(let m=0;m<h;m++)for(let x=0;x<a;x++){let M=x+l*m,S=x+l*(m+1),T=x+1+l*(m+1),A=x+1+l*m;c.push(M,S,A),c.push(S,T,A)}this.setIndex(c),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Vi=class i extends be{constructor(t=new Dn([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,h=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,h,u),a+=h,h=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function l(u){let d=s.length/3,p=u.extractPoints(e),c=p.shape,_=p.holes;Yn.isClockWise(c)===!1&&(c=c.reverse());for(let g=0,m=_.length;g<m;g++){let x=_[g];Yn.isClockWise(x)===!0&&(_[g]=x.reverse())}let v=Yn.triangulateShape(c,_);for(let g=0,m=_.length;g<m;g++){let x=_[g];c=c.concat(x)}for(let g=0,m=c.length;g<m;g++){let x=c[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=v.length;g<m;g++){let x=v[g],M=x[0]+d,S=x[1]+d,T=x[2]+d;n.push(M,S,T),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Bn=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+a,Math.PI),l=0,u=[],d=new B,p=new B,c=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],M=m/n,S=0;m===0&&o===0?S=.5/e:m===n&&h===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){let A=T/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),g.push(A+S,1-M),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let M=u[m][x+1],S=u[m][x],T=u[m+1][x],A=u[m+1][x+1];(m!==0||o>0)&&c.push(M,S,A),(m!==n-1||h<Math.PI)&&c.push(S,T,A)}this.setIndex(c),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gi=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],h=[],l=[],u=new B,d=new B,p=new B;for(let c=0;c<=n;c++)for(let _=0;_<=s;_++){let v=_/s*r,g=c/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),l.push(_/s),l.push(c/n)}for(let c=1;c<=n;c++)for(let _=1;_<=s;_++){let v=(s+1)*c+_-1,g=(s+1)*(c-1)+_-1,m=(s+1)*(c-1)+_,x=(s+1)*c+_;o.push(v,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var zn=class i extends be{constructor(t=new Ar(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,h=new B,l=new Ut,u=new B,d=[],p=[],c=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(c,2));function v(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),x(),m()}function g(M){u=t.getPointAt(M/e,u);let S=o.normals[M],T=o.binormals[M];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,E=Math.sin(w),b=-Math.cos(w);h.x=b*S.x+E*T.x,h.y=b*S.y+E*T.y,h.z=b*S.z+E*T.z,h.normalize(),p.push(h.x,h.y,h.z),a.x=u.x+n*h.x,a.y=u.y+n*h.y,a.z=u.z+n*h.z,d.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let S=1;S<=s;S++){let T=(s+1)*(M-1)+(S-1),A=(s+1)*M+(S-1),w=(s+1)*M+S,E=(s+1)*(M-1)+S;_.push(T,A,E),_.push(A,w,E)}}function x(){for(let M=0;M<=e;M++)for(let S=0;S<=s;S++)l.x=M/e,l.y=S/s,c.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var yn=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ur=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Do=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _o(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,a=2*e-n;break;case Ic:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Cc:o=t,h=2*n-e;break;case Ic:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(h-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,c=this._weightNext,_=(n-e)/(s-e),v=_*_,g=v*_,m=-p*g+2*p*v-p*_,x=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*_+1,M=(-1-c)*g+(1.5+c)*v+.5*_,S=c*g-c*v;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+x*o[l+T]+M*o[h+T]+S*o[d+T];return r}},Fo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==a;++p)r[p]=o[l+p]*d+o[h+p]*u;return r}},No=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case So:e=this.InterpolantFactoryMethodLinear;break;case yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(s!==void 0&&ef(s))for(let a=0,h=s.length;a!==h;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let h=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)h=!0;else{let d=a*n,p=d-n,c=d+n;for(let _=0;_!==n;++_){let v=e[d+_];if(v!==e[p+_]||v!==e[c+_]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let c=0;c!==n;++c)e[p+c]=e[d+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,h=o*n,l=0;l!==n;++l)e[h+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=So;var Mi=class extends An{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=cr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="color";var Bo=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};Bo.prototype.ValueTypeName="number";var zo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)je.slerpFlat(r,0,o,l-a,o,l,h);return r}},Fr=class extends An{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends An{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=cr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};ko.prototype.ValueTypeName="vector";var Ho=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){let c=l[d],_=l[d+1];if(c.global&&(c.lastIndex=0),c.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Jh=new Ho,Vo=class{constructor(t){this.manager=t!==void 0?t:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Nr=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tc=new Ie,Kl=new B,Ql=new B,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jl=new Ie,nr=new B,Ac=new B,Nc=class extends Go{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),Ac.copy(n.position),Ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,n.coordinateSystem,n.reversedDepth)}},Or=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xi=class extends gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oc=class extends Go{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Oc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wo=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rl="\\[\\]\\.:\\/",nf=new RegExp("["+rl+"]","g"),ol="[^"+rl+"]",sf="[^"+rl.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",ol),of=/(WCOD+)?/.source.replace("WCOD",sf),af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ol),cf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ol),lf=new RegExp("^"+rf+of+af+cf+"$"),hf=["material","materials","bones","map"],Bc=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=lf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Bc;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j1=new Float32Array(1);var th=new Ie,kn=class{constructor(t,e,n=0,s=1/0){this.ray=new fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return zc(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zc(t[s],this,n,e);return n.sort(eh),n}};function eh(i,t){return i.distance-t.distance}function zc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)zc(r[o],t,e,!0)}}function al(i,t,e,n){let s=uf(n);switch(e){case $c:return i*t;case oa:return i*t/s.components*s.byteLength;case aa:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case Kc:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Da:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case Hn:case Yc:return{byteLength:1,components:1};case Ns:case qc:case Os:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case wi:case ia:case Vn:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ff(i){let t=new WeakMap;function e(a,h){let l=a.array,u=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,l,u),a.onUploadCallback();let c;if(l instanceof Float32Array)c=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)c=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?c=i.HALF_FLOAT:c=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)c=i.SHORT;else if(l instanceof Uint32Array)c=i.UNSIGNED_INT;else if(l instanceof Int32Array)c=i.INT;else if(l instanceof Int8Array)c=i.BYTE;else if(l instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:c,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,h,l){let u=h.array,d=h.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((c,_)=>c.start-_.start);let p=0;for(let c=1;c<d.length;c++){let _=d[p],v=d[c];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let c=0,_=d.length;c<_;c++){let v=d[c];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:xf,alphatest_fragment:_f,alphatest_pars_fragment:yf,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:bf,batching_vertex:Sf,begin_vertex:wf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Df,color_fragment:Lf,color_pars_fragment:Uf,color_pars_vertex:Ff,color_vertex:Nf,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Hf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Gf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:Yf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:op,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:jf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:cp,lights_phong_fragment:lp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:yp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Ip,normal_fragment_begin:Pp,normal_fragment_maps:Dp,normal_pars_fragment:Lp,normal_pars_vertex:Up,normal_vertex:Fp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:kp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:Yp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:$p,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:cm,uv_pars_fragment:lm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:xm,cube_frag:_m,depth_vert:ym,depth_frag:vm,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:wm,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Im,meshmatcap_vert:Pm,meshmatcap_frag:Dm,meshnormal_vert:Lm,meshnormal_frag:Um,meshphong_vert:Fm,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Hm,points_frag:Vm,shadow_vert:Gm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:Ym},Zt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Kn={basic:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new jt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:pn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:pn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new jt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:pn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:pn([Zt.points,Zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:pn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:pn([Zt.common,Zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:pn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:pn([Zt.sprite,Zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:pn([Zt.common,Zt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:pn([Zt.lights,Zt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Kn.physical={uniforms:pn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var za={r:0,b:0,g:0},$i=new In,qm=new Ie;function Zm(i,t,e,n,s,r,o){let a=new jt(0),h=r===!0?0:1,l,u,d=null,p=0,c=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function v(M){let S=!1,T=_(M);T===null?m(a,h):T&&T.isColor&&(m(T,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,S){let T=_(S);T&&(T.isCubeTexture||T.mapping===Br)?(u===void 0&&(u=new Me(new vi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ji(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(S.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler($i)),u.material.toneMapped=ve.getTransfer(T.colorSpace)!==Ce,(d!==T||p!==T.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,c=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Me(new Lr(2,2),new On({name:"BackgroundMaterial",uniforms:Ji(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ve.getTransfer(T.colorSpace)!==Ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,d=T,p=T.version,c=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(za,il(i)),n.buffers.color.setClear(za.r,za.g,za.b,S,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),h=S,m(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,m(a,h)},render:v,addToRenderList:g,dispose:x}}function Jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(y,P,D,F,W){let $=!1,Y=d(F,D,P);r!==Y&&(r=Y,l(r.object)),$=c(y,F,D,W),$&&_(y,F,D,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,P,D,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,P,D){let F=D.wireframe===!0,W=n[y.id];W===void 0&&(W={},n[y.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let Y=$[F];return Y===void 0&&(Y=p(h()),$[F]=Y),Y}function p(y){let P=[],D=[],F=[];for(let W=0;W<e;W++)P[W]=0,D[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function c(y,P,D,F){let W=r.attributes,$=P.attributes,Y=0,it=D.getAttributes();for(let Z in it)if(it[Z].location>=0){let Rt=W[Z],_t=$[Z];if(_t===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),Rt===void 0||Rt.attribute!==_t||_t&&Rt.data!==_t.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function _(y,P,D,F){let W={},$=P.attributes,Y=0,it=D.getAttributes();for(let Z in it)if(it[Z].location>=0){let Rt=$[Z];Rt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor));let _t={};_t.attribute=Rt,Rt&&Rt.data&&(_t.data=Rt.data),W[Z]=_t,Y++}r.attributes=W,r.attributesNum=Y,r.index=F}function v(){let y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function g(y){m(y,0)}function m(y,P){let D=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;D[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),W[y]!==P&&(i.vertexAttribDivisor(y,P),W[y]=P)}function x(){let y=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==y[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function M(y,P,D,F,W,$,Y){Y===!0?i.vertexAttribIPointer(y,P,D,W,$):i.vertexAttribPointer(y,P,D,F,W,$)}function S(y,P,D,F){v();let W=F.attributes,$=D.getAttributes(),Y=P.defaultAttributeValues;for(let it in $){let Z=$[it];if(Z.location>=0){let ut=W[it];if(ut===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){let Rt=ut.normalized,_t=ut.itemSize,Gt=t.get(ut);if(Gt===void 0)continue;let Wt=Gt.buffer,Jt=Gt.type,qt=Gt.bytesPerElement,ct=Jt===i.INT||Jt===i.UNSIGNED_INT||ut.gpuType===ia;if(ut.isInterleavedBufferAttribute){let bt=ut.data,Ft=bt.stride,Yt=ut.offset;if(bt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Z.locationSize;Bt++)m(Z.location+Bt,bt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Bt=0;Bt<Z.locationSize;Bt++)g(Z.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Bt=0;Bt<Z.locationSize;Bt++)M(Z.location+Bt,_t/Z.locationSize,Jt,Rt,Ft*qt,(Yt+_t/Z.locationSize*Bt)*qt,ct)}else{if(ut.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)m(Z.location+bt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let bt=0;bt<Z.locationSize;bt++)g(Z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let bt=0;bt<Z.locationSize;bt++)M(Z.location+bt,_t/Z.locationSize,Jt,Rt,_t*qt,_t/Z.locationSize*bt*qt,ct)}}else if(Y!==void 0){let Rt=Y[it];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(Z.location,Rt);break;case 3:i.vertexAttrib3fv(Z.location,Rt);break;case 4:i.vertexAttrib4fv(Z.location,Rt);break;default:i.vertexAttrib1fv(Z.location,Rt)}}}}x()}function T(){E();for(let y in n){let P=n[y];for(let D in P){let F=P[D];for(let W in F)u(F[W].object),delete F[W];delete P[D]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let D in P){let F=P[D];for(let W in F)u(F[W].object),delete F[W];delete P[D]}delete n[y.id]}function w(y){for(let P in n){let D=n[P];if(D[y.id]===void 0)continue;let F=D[y.id];for(let W in F)u(F[W].object),delete F[W];delete D[y.id]}}function E(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function $m(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let c=0;for(let _=0;_<d;_++)c+=u[_];e.update(c,n,1)}function h(l,u,d,p){if(d===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let _=0;_<l.length;_++)o(l[_],u[_],p[_]);else{c.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*p[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let E=w===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Vn&&!E)}function h(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=h(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:c,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:T,maxSamples:A}}function Qm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Wn,a=new ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let c=d.length!==0||p||n!==0||s;return s=p,n=d.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,c){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):l();else{let x=r?0:n,M=x*4,S=m.clippingState||null;h.value=S,S=u(_,p,M,c);for(let T=0;T!==M;++T)S[T]=e[T];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,c,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=h.value,_!==!0||g===null){let m=c+v*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,S=c;M!==v;++M,S+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function jm(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Yi:a===ea&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ta||a===ea)if(t.has(o)){let h=t.get(o).texture;return e(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let l=new Ro(h.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vs=4,$h=[.125,.215,.35,.446,.526,.582],ji=20,cl=new Xi,Kh=new jt,ll=null,hl=0,ul=0,dl=!1,Qi=(1+Math.sqrt(5))/2,Hs=1/Qi,Qh=[new B(-Qi,Hs,0),new B(Qi,Hs,0),new B(-Hs,0,Qi),new B(Hs,0,Qi),new B(0,Qi,-Hs),new B(0,Qi,Hs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],t0=new B,Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=t0}=r;ll=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,hl,ul),this._renderer.xr.enabled=dl,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Os,format:Sn,colorSpace:Ni,depthBuffer:!1},s=jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){let e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,n,s,r){let h=new xn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,c=d.toneMapping;d.getClearColor(Kh),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let v=new Oi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Me(new vi,v),m=!1,x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,m=!0):(v.color.copy(Kh),m=!0);for(let M=0;M<6;M++){let S=M%3;S===0?(h.up.set(0,l[M],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[M],r.y,r.z)):S===1?(h.up.set(0,0,l[M]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[M],r.z)):(h.up.set(0,l[M],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[M]));let T=this._cubeSize;ka(s,S*T,M>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(g,h),d.render(t,h)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=c,d.autoClear=p,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;ka(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Me(this._lodPlanes[s],l),p=l.uniforms,c=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ji-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):ji;g>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let m=[],x=0;for(let w=0;w<ji;++w){let E=w/v,b=Math.exp(-E*E/2);m.push(b),w===0?x+=b:w<g&&(x+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;let S=this._sizeLods[s],T=3*S*(s>M-Vs?s-M+Vs:0),A=4*(this._cubeSize-S);ka(e,T,A,3*S,2*S),h.setRenderTarget(e),h.render(d,cl)}};function e0(i){let t=[],e=[],n=[],s=i,r=i-Vs+1+$h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let h=1/a;o>i-Vs?h=$h[o-i+Vs-1]:o===0&&(h=0),n.push(h);let l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],c=6,_=6,v=3,g=2,m=1,x=new Float32Array(v*_*c),M=new Float32Array(g*_*c),S=new Float32Array(m*_*c);for(let A=0;A<c;A++){let w=A%3*2/3-1,E=A>2?0:-1,b=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];x.set(b,v*_*A),M.set(p,g*_*A);let y=[A,A,A,A,A,A];S.set(y,m*_*A)}let T=new be;T.setAttribute("position",new Qe(x,v)),T.setAttribute("uv",new Qe(M,g)),T.setAttribute("faceIndex",new Qe(S,m)),t.push(T),s>Vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jh(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n0(i,t,e){let n=new Float32Array(ji),s=new B(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function eu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function i0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let h=a.mapping,l=h===ta||h===ea,u=h===Yi||h===qi;if(l||u){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Ws(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let c=a.image;return l&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new Ws(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let h=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&h++;return h===l}function r(a){let h=a.target;h.removeEventListener("dispose",r);let l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function s0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];let c=r.get(p);c&&(t.remove(c),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function h(d){let p=d.attributes;for(let c in p)t.update(p[c],i.ARRAY_BUFFER)}function l(d){let p=[],c=d.index,_=d.attributes.position,v=0;if(c!==null){let x=c.array;v=c.version;for(let M=0,S=x.length;M<S;M+=3){let T=x[M+0],A=x[M+1],w=x[M+2];p.push(T,A,A,w,w,T)}}else if(_!==void 0){let x=_.array;v=_.version;for(let M=0,S=x.length/3-1;M<S;M+=3){let T=M+0,A=M+1,w=M+2;p.push(T,A,A,w,w,T)}}else return;let g=new(nl(p)?mr:pr)(p,1);g.version=v;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){let p=r.get(d);if(p){let c=d.index;c!==null&&p.version<c.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:h,getWireframeAttribute:u}}function o0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function h(p,c){i.drawElements(n,c,r,p*o),e.update(c,n,1)}function l(p,c,_){_!==0&&(i.drawElementsInstanced(n,c,r,p*o,_),e.update(c,n,_))}function u(p,c,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,p,0,_);let g=0;for(let m=0;m<_;m++)g+=c[m];e.update(g,n,1)}function d(p,c,_,v){if(_===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)l(p[m]/o,c[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,c,0,r,p,0,v,0,_);let m=0;for(let x=0;x<_;x++)m+=c[x]*v[x];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function a0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c0(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,h){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==d){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let c=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;c===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let S=a.attributes.position.count*M,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*T*4*d),w=new dr(A,S,T,d);w.type=Vn,w.needsUpdate=!0;let E=M*4;for(let y=0;y<d;y++){let P=g[y],D=m[y],F=x[y],W=S*T*4*y;for(let $=0;$<P.count;$++){let Y=$*E;c===!0&&(s.fromBufferAttribute(P,$),A[W+Y+0]=s.x,A[W+Y+1]=s.y,A[W+Y+2]=s.z,A[W+Y+3]=0),_===!0&&(s.fromBufferAttribute(D,$),A[W+Y+4]=s.x,A[W+Y+5]=s.y,A[W+Y+6]=s.z,A[W+Y+7]=0),v===!0&&(s.fromBufferAttribute(F,$),A[W+Y+8]=s.x,A[W+Y+9]=s.y,A[W+Y+10]=s.z,A[W+Y+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:w,size:new Ut(S,T)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let c=0;for(let v=0;v<l.length;v++)c+=l[v];let _=a.morphTargetsRelative?1:1-c;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function l0(i,t,e,n){let s=new WeakMap;function r(h){let l=n.render.frame,u=h.geometry,d=t.get(h,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function o(){s=new WeakMap}function a(h){let l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var vu=new bn,nu=new yr(1,1),Mu=new dr,bu=new To,Su=new xr,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ga(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),nn(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),nn(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),nn(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function E0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=jc,r=nu):r=vu,e.setTexture2D(t||r,s)}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bu,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mu,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return y0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function I0(i,t){i.uniform1fv(this.addr,t)}function P0(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function L0(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F0(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function N0(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function z0(i,t){i.uniform3iv(this.addr,t)}function k0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function V0(i,t){i.uniform2uiv(this.addr,t)}function G0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vu,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bu,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Su,r[o])}function Z0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mu,r[o])}function J0(i){switch(i){case 5126:return I0;case 35664:return P0;case 35665:return D0;case 35666:return L0;case 35674:return U0;case 35675:return F0;case 35676:return N0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Z0}}var pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}},gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function $0(i,t,e){let n=i.name,s=n.length;for(fl.lastIndex=0;;){let r=fl.exec(n),o=fl.lastIndex,a=r[1],h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){cu(e,l===void 0?new pl(a,i,t):new ml(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new gl(a),cu(e,d)),e=d}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K0=37297,Q0=0;function j0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hu=new ue;function t1(i){ve._getMatrix(hu,ve.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+j0(i.getShaderSource(t),a)}else return r}function e1(i,t){let e=t1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n1(i,t){let e;switch(t){case wh:e="Linear";break;case Eh:e="Reinhard";break;case Th:e="Cineon";break;case Ah:e="ACESFilmic";break;case Ch:e="AgX";break;case Fs:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new B;function i1(){ve.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function r1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wr(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(a1,l1)}var c1=new Map;function l1(i,t){let e=pe[t];if(e===void 0){let n=c1.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}var h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(h1,u1)}function u1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function d1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function f1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case qi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p1(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===qi&&(t="ENVMAP_MODE_REFRACTION"),t}function m1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function g1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,h=d1(e),l=f1(e),u=p1(e),d=m1(e),p=g1(e),c=s1(e),_=r1(r),v=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(g=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?pe.tonemapping_pars_fragment:"",e.toneMapping!==li?n1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,e1("linearToOutputTexel",e.outputColorSpace),i1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=xl(o),o=du(o,e),o=fu(o,e),a=xl(a),a=du(a,e),a=fu(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+g+o,S=x+m+a,T=lu(s,s.VERTEX_SHADER,M),A=lu(s,s.FRAGMENT_SHADER,S);s.attachShader(v,T),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(A)||"",$=D.trim(),Y=F.trim(),it=W.trim(),Z=!0,ut=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,A);else{let Rt=uu(s,T,"vertex"),_t=uu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Rt+`
`+_t)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||it==="")&&(ut=!1);ut&&(P.diagnostics={runnable:Z,programLog:$,vertexShader:{log:Y,prefix:g},fragmentShader:{log:it,prefix:m}})}s.deleteShader(T),s.deleteShader(A),E=new Gs(s,v),b=o1(s,v)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,K0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}var _1=0,_l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=_1++,this.code=t,this.usedTimes=0}};function y1(i,t,e,n,s,r,o){let a=new Es,h=new _l,l=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,c=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,y,P,D,F){let W=D.fog,$=F.geometry,Y=b.isMeshStandardMaterial?D.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),Z=it&&it.mapping===Br?it.image.height:null,ut=_[b.type];b.precision!==null&&(c=s.getMaxPrecision(b.precision),c!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",c,"instead."));let Rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=Rt!==void 0?Rt.length:0,Gt=0;$.morphAttributes.position!==void 0&&(Gt=1),$.morphAttributes.normal!==void 0&&(Gt=2),$.morphAttributes.color!==void 0&&(Gt=3);let Wt,Jt,qt,ct;if(ut){let zt=Kn[ut];Wt=zt.vertexShader,Jt=zt.fragmentShader}else Wt=b.vertexShader,Jt=b.fragmentShader,h.update(b),qt=h.getVertexShaderID(b),ct=h.getFragmentShaderID(b);let bt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Yt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,se=!!b.map,pt=!!b.matcap,R=!!it,G=!!b.aoMap,z=!!b.lightMap,H=!!b.bumpMap,q=!!b.normalMap,tt=!!b.displacementMap,J=!!b.emissiveMap,et=!!b.metalnessMap,yt=!!b.roughnessMap,gt=b.anisotropy>0,C=b.clearcoat>0,f=b.dispersion>0,I=b.iridescence>0,U=b.sheen>0,O=b.transmission>0,N=gt&&!!b.anisotropyMap,V=C&&!!b.clearcoatMap,X=C&&!!b.clearcoatNormalMap,rt=C&&!!b.clearcoatRoughnessMap,mt=I&&!!b.iridescenceMap,j=I&&!!b.iridescenceThicknessMap,dt=U&&!!b.sheenColorMap,xt=U&&!!b.sheenRoughnessMap,st=!!b.specularMap,lt=!!b.specularColorMap,vt=!!b.specularIntensityMap,k=O&&!!b.transmissionMap,ht=O&&!!b.thicknessMap,ot=!!b.gradientMap,St=!!b.alphaMap,Mt=b.alphaTest>0,K=!!b.alphaHash,Tt=!!b.extensions,Et=li;b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Xt={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Wt,fragmentShader:Jt,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:c,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&F.instanceColor!==null,instancingMorph:Yt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ni,alphaToCoverage:!!b.alphaToCoverage,map:se,matcap:pt,envMap:R,envMapMode:R&&it.mapping,envMapCubeUVHeight:Z,aoMap:G,lightMap:z,bumpMap:H,normalMap:q,displacementMap:p&&tt,emissiveMap:J,normalMapObjectSpace:q&&b.normalMapType===Lh,normalMapTangentSpace:q&&b.normalMapType===Ba,metalnessMap:et,roughnessMap:yt,anisotropy:gt,anisotropyMap:N,clearcoat:C,clearcoatMap:V,clearcoatNormalMap:X,clearcoatRoughnessMap:rt,dispersion:f,iridescence:I,iridescenceMap:mt,iridescenceThicknessMap:j,sheen:U,sheenColorMap:dt,sheenRoughnessMap:xt,specularMap:st,specularColorMap:lt,specularIntensityMap:vt,transmission:O,transmissionMap:k,thicknessMap:ht,gradientMap:ot,opaque:b.transparent===!1&&b.blending===Ui&&b.alphaToCoverage===!1,alphaMap:St,alphaTest:Mt,alphaHash:K,combine:b.combine,mapUv:se&&v(b.map.channel),aoMapUv:G&&v(b.aoMap.channel),lightMapUv:z&&v(b.lightMap.channel),bumpMapUv:H&&v(b.bumpMap.channel),normalMapUv:q&&v(b.normalMap.channel),displacementMapUv:tt&&v(b.displacementMap.channel),emissiveMapUv:J&&v(b.emissiveMap.channel),metalnessMapUv:et&&v(b.metalnessMap.channel),roughnessMapUv:yt&&v(b.roughnessMap.channel),anisotropyMapUv:N&&v(b.anisotropyMap.channel),clearcoatMapUv:V&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:X&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(b.sheenRoughnessMap.channel),specularMapUv:st&&v(b.specularMap.channel),specularColorMapUv:lt&&v(b.specularColorMap.channel),specularIntensityMapUv:vt&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:ht&&v(b.thicknessMap.channel),alphaMapUv:St&&v(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(q||gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(se||St),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ft,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:se&&b.map.isVideoTexture===!0&&ve.getTransfer(b.map.colorSpace)===Ce,decodeVideoTextureEmissive:J&&b.emissiveMap.isVideoTexture===!0&&ve.getTransfer(b.emissiveMap.colorSpace)===Ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&b.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function m(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){let y=_[b.type],P;if(y){let D=Kn[y];P=Wh.clone(D.uniforms)}else P=b.uniforms;return P}function T(b,y){let P;for(let D=0,F=u.length;D<F;D++){let W=u[D];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new x1(i,y,b,r),u.push(P)),P}function A(b){if(--b.usedTimes===0){let y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function w(b){h.remove(b)}function E(){h.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:E}}function v1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,c,_,v,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:p,material:c,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=c,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function a(d,p,c,_,v,g){let m=o(d,p,c,_,v,g);c.transmission>0?n.push(m):c.transparent===!0?s.push(m):e.push(m)}function h(d,p,c,_,v,g){let m=o(d,p,c,_,v,g);c.transmission>0?n.unshift(m):c.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,p){e.length>1&&e.sort(d||M1),n.length>1&&n.sort(p||gu),s.length>1&&s.sort(p||gu)}function u(){for(let d=t,p=i.length;d<p;d++){let c=i[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:u,sort:l}}function b1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new jt};break;case"SpotLight":e={position:new B,direction:new B,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function w1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var E1=0;function T1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A1(i){let t=new S1,e=w1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new Ie,o=new Ie;function a(l){let u=0,d=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let c=0,_=0,v=0,g=0,m=0,x=0,M=0,S=0,T=0,A=0,w=0;l.sort(T1);for(let b=0,y=l.length;b<y;b++){let P=l[b],D=P.color,F=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*F,d+=D.g*F,p+=D.b*F;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],F);w++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,Z=e.get(P);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.directionalShadow[c]=Z,n.directionalShadowMap[c]=$,n.directionalShadowMatrix[c]=P.shadow.matrix,x++}n.directional[c]=Y,c++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(D).multiplyScalar(F),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[v]=Y;let it=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,it.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=it.matrix,P.castShadow){let Z=e.get(P);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=$,S++}v++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(D).multiplyScalar(F),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Y,g++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let it=P.shadow,Z=e.get(P);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=Y,_++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(F),Y.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=Y,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let E=n.hash;(E.directionalLength!==c||E.pointLength!==_||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==x||E.numPointShadows!==M||E.numSpotShadows!==S||E.numSpotMaps!==T||E.numLightProbes!==w)&&(n.directional.length=c,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,E.directionalLength=c,E.pointLength=_,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=x,E.numPointShadows=M,E.numSpotShadows=S,E.numSpotMaps=T,E.numLightProbes=w,n.version=E1++)}function h(l,u){let d=0,p=0,c=0,_=0,v=0,g=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){let M=l[m];if(M.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isSpotLight){let S=n.spot[c];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),c++}else if(M.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:h,state:n}}function _u(i){let t=new A1(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function h(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function R1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _u(i),t.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
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
}`;function P1(i,t,e){let n=new Rs,s=new Ut,r=new Ut,o=new Re,a=new Do({depthPacking:Dh}),h=new Lo,l={},u=e.maxTextureSize,d={[ri]:an,[an]:ri,[tn]:tn},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:C1,fragmentShader:I1}),c=p.clone();c.defines.HORIZONTAL_PASS=1;let _=new be;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Me(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let m=this.type;this.render=function(A,w,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=m!==Jn&&this.type===Jn,W=m===Jn&&this.type!==Jn;for(let $=0,Y=A.length;$<Y;$++){let it=A[$],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ut=Z.getFrameExtents();if(s.multiply(ut),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,Z.mapSize.y=r.y)),Z.map===null||F===!0||W===!0){let _t=this.type!==Jn?{minFilter:Mn,magFilter:Mn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new qn(s.x,s.y,_t),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let Rt=Z.getViewportCount();for(let _t=0;_t<Rt;_t++){let Gt=Z.getViewport(_t);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),D.viewport(o),Z.updateMatrices(it,_t),n=Z.getFrustum(),S(w,E,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===Jn&&x(Z,E),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,P)};function x(A,w){let E=t.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,c.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,c.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,E,p,v,null),c.uniforms.shadow_pass.value=A.mapPass.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,E,c,v,null)}function M(A,w,E,b){let y=null,P=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=E.isPointLight===!0?h:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=y.uuid,F=w.uuid,W=l[D];W===void 0&&(W={},l[D]=W);let $=W[F];$===void 0&&($=y.clone(),W[F]=$,w.addEventListener("dispose",T)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,b===Jn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=i.properties.get(y);D.light=E}return y}function S(A,w,E,b,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let F=t.update(A),W=A.material;if(Array.isArray(W)){let $=F.groups;for(let Y=0,it=$.length;Y<it;Y++){let Z=$[Y],ut=W[Z.materialIndex];if(ut&&ut.visible){let Rt=M(A,ut,b,y);A.onBeforeShadow(i,A,w,E,F,Rt,Z),i.renderBufferDirect(E,null,F,Rt,A,Z),A.onAfterShadow(i,A,w,E,F,Rt,Z)}}}else if(W.visible){let $=M(A,W,b,y);A.onBeforeShadow(i,A,w,E,F,$,null),i.renderBufferDirect(E,null,F,$,A,null),A.onAfterShadow(i,A,w,E,F,$,null)}}let D=A.children;for(let F=0,W=D.length;F<W;F++)S(D[F],w,E,b,y)}function T(A){A.target.removeEventListener("dispose",T);for(let E in l){let b=l[E],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var D1={[Yo]:qo,[Zo]:Ko,[Jo]:Qo,[Fi]:$o,[qo]:Yo,[Ko]:Zo,[Qo]:Jo,[$o]:Fi};function L1(i,t){function e(){let k=!1,ht=new Re,ot=null,St=new Re(0,0,0,0);return{setMask:function(Mt){ot!==Mt&&!k&&(i.colorMask(Mt,Mt,Mt,Mt),ot=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,K,Tt,Et,Xt){Xt===!0&&(Mt*=Et,K*=Et,Tt*=Et),ht.set(Mt,K,Tt,Et),St.equals(ht)===!1&&(i.clearColor(Mt,K,Tt,Et),St.copy(ht))},reset:function(){k=!1,ot=null,St.set(-1,0,0,0)}}}function n(){let k=!1,ht=!1,ot=null,St=null,Mt=null;return{setReversed:function(K){if(ht!==K){let Tt=t.get("EXT_clip_control");K?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ht=K;let Et=Mt;Mt=null,this.setClear(Et)}},getReversed:function(){return ht},setTest:function(K){K?bt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(K){ot!==K&&!k&&(i.depthMask(K),ot=K)},setFunc:function(K){if(ht&&(K=D1[K]),St!==K){switch(K){case Yo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=K}},setLocked:function(K){k=K},setClear:function(K){Mt!==K&&(ht&&(K=1-K),i.clearDepth(K),Mt=K)},reset:function(){k=!1,ot=null,St=null,Mt=null,ht=!1}}}function s(){let k=!1,ht=null,ot=null,St=null,Mt=null,K=null,Tt=null,Et=null,Xt=null;return{setTest:function(zt){k||(zt?bt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(zt){ht!==zt&&!k&&(i.stencilMask(zt),ht=zt)},setFunc:function(zt,At,It){(ot!==zt||St!==At||Mt!==It)&&(i.stencilFunc(zt,At,It),ot=zt,St=At,Mt=It)},setOp:function(zt,At,It){(K!==zt||Tt!==At||Et!==It)&&(i.stencilOp(zt,At,It),K=zt,Tt=At,Et=It)},setLocked:function(zt){k=zt},setClear:function(zt){Xt!==zt&&(i.clearStencil(zt),Xt=zt)},reset:function(){k=!1,ht=null,ot=null,St=null,Mt=null,K=null,Tt=null,Et=null,Xt=null}}}let r=new e,o=new n,a=new s,h=new WeakMap,l=new WeakMap,u={},d={},p=new WeakMap,c=[],_=null,v=!1,g=null,m=null,x=null,M=null,S=null,T=null,A=null,w=new jt(0,0,0),E=0,b=!1,y=null,P=null,D=null,F=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=it>=2);let ut=null,Rt={},_t=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Wt=new Re().fromArray(_t),Jt=new Re().fromArray(Gt);function qt(k,ht,ot,St){let Mt=new Uint8Array(4),K=i.createTexture();i.bindTexture(k,K),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ot;Tt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(ht+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return K}let ct={};ct[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),bt(i.DEPTH_TEST),o.setFunc(Fi),H(!1),q(kc),bt(i.CULL_FACE),G(ci);function bt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Ft(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Yt(k,ht){return d[k]!==ht?(i.bindFramebuffer(k,ht),d[k]=ht,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Bt(k,ht){let ot=c,St=!1;if(k){ot=p.get(ht),ot===void 0&&(ot=[],p.set(ht,ot));let Mt=k.textures;if(ot.length!==Mt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Tt=Mt.length;K<Tt;K++)ot[K]=i.COLOR_ATTACHMENT0+K;ot.length=Mt.length,St=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,St=!0);St&&i.drawBuffers(ot)}function se(k){return _!==k?(i.useProgram(k),_=k,!0):!1}let pt={[yi]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};pt[ah]=i.MIN,pt[ch]=i.MAX;let R={[lh]:i.ZERO,[hh]:i.ONE,[uh]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[fh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[gh]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function G(k,ht,ot,St,Mt,K,Tt,Et,Xt,zt){if(k===ci){v===!0&&(Ft(i.BLEND),v=!1);return}if(v===!1&&(bt(i.BLEND),v=!0),k!==sh){if(k!==g||zt!==b){if((m!==yi||S!==yi)&&(i.blendEquation(i.FUNC_ADD),m=yi,S=yi),zt)switch(k){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vc:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,M=null,T=null,A=null,w.set(0,0,0),E=0,g=k,b=zt}return}Mt=Mt||ht,K=K||ot,Tt=Tt||St,(ht!==m||Mt!==S)&&(i.blendEquationSeparate(pt[ht],pt[Mt]),m=ht,S=Mt),(ot!==x||St!==M||K!==T||Tt!==A)&&(i.blendFuncSeparate(R[ot],R[St],R[K],R[Tt]),x=ot,M=St,T=K,A=Tt),(Et.equals(w)===!1||Xt!==E)&&(i.blendColor(Et.r,Et.g,Et.b,Xt),w.copy(Et),E=Xt),g=k,b=!1}function z(k,ht){k.side===tn?Ft(i.CULL_FACE):bt(i.CULL_FACE);let ot=k.side===an;ht&&(ot=!ot),H(ot),k.blending===Ui&&k.transparent===!1?G(ci):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let St=k.stencilWrite;a.setTest(St),St&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function q(k){k!==nh?(bt(i.CULL_FACE),k!==P&&(k===kc?i.cullFace(i.BACK):k===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=k}function tt(k){k!==D&&(Y&&i.lineWidth(k),D=k)}function J(k,ht,ot){k?(bt(i.POLYGON_OFFSET_FILL),(F!==ht||W!==ot)&&(i.polygonOffset(ht,ot),F=ht,W=ot)):Ft(i.POLYGON_OFFSET_FILL)}function et(k){k?bt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function yt(k){k===void 0&&(k=i.TEXTURE0+$-1),ut!==k&&(i.activeTexture(k),ut=k)}function gt(k,ht,ot){ot===void 0&&(ut===null?ot=i.TEXTURE0+$-1:ot=ut);let St=Rt[ot];St===void 0&&(St={type:void 0,texture:void 0},Rt[ot]=St),(St.type!==k||St.texture!==ht)&&(ut!==ot&&(i.activeTexture(ot),ut=ot),i.bindTexture(k,ht||ct[k]),St.type=k,St.texture=ht)}function C(){let k=Rt[ut];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function f(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function U(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(k){Wt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Wt.copy(k))}function xt(k){Jt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Jt.copy(k))}function st(k,ht){let ot=l.get(ht);ot===void 0&&(ot=new WeakMap,l.set(ht,ot));let St=ot.get(k);St===void 0&&(St=i.getUniformBlockIndex(ht,k.name),ot.set(k,St))}function lt(k,ht){let St=l.get(ht).get(k);h.get(ht)!==St&&(i.uniformBlockBinding(ht,St,k.__bindingPointIndex),h.set(ht,St))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,Rt={},d={},p=new WeakMap,c=[],_=null,v=!1,g=null,m=null,x=null,M=null,S=null,T=null,A=null,w=new jt(0,0,0),E=0,b=!1,y=null,P=null,D=null,F=null,W=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:bt,disable:Ft,bindFramebuffer:Yt,drawBuffers:Bt,useProgram:se,setBlending:G,setMaterial:z,setFlipSided:H,setCullFace:q,setLineWidth:tt,setPolygonOffset:J,setScissorTest:et,activeTexture:yt,bindTexture:gt,unbindTexture:C,compressedTexImage2D:f,compressedTexImage3D:I,texImage2D:mt,texImage3D:j,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:X,texStorage3D:rt,texSubImage2D:U,texSubImage3D:O,compressedTexSubImage2D:N,compressedTexSubImage3D:V,scissor:dt,viewport:xt,reset:vt}}function U1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap,d,p=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,f){return c?new OffscreenCanvas(C,f):ur("canvas")}function v(C,f,I){let U=1,O=gt(C);if((O.width>I||O.height>I)&&(U=I/Math.max(O.width,O.height)),U<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let N=Math.floor(U*O.width),V=Math.floor(U*O.height);d===void 0&&(d=_(N,V));let X=f?_(N,V):d;return X.width=N,X.height=V,X.getContext("2d").drawImage(C,0,0,N,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+N+"x"+V+")."),X}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,f,I,U,O=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let N=f;if(f===i.RED&&(I===i.FLOAT&&(N=i.R32F),I===i.HALF_FLOAT&&(N=i.R16F),I===i.UNSIGNED_BYTE&&(N=i.R8)),f===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.R8UI),I===i.UNSIGNED_SHORT&&(N=i.R16UI),I===i.UNSIGNED_INT&&(N=i.R32UI),I===i.BYTE&&(N=i.R8I),I===i.SHORT&&(N=i.R16I),I===i.INT&&(N=i.R32I)),f===i.RG&&(I===i.FLOAT&&(N=i.RG32F),I===i.HALF_FLOAT&&(N=i.RG16F),I===i.UNSIGNED_BYTE&&(N=i.RG8)),f===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RG8UI),I===i.UNSIGNED_SHORT&&(N=i.RG16UI),I===i.UNSIGNED_INT&&(N=i.RG32UI),I===i.BYTE&&(N=i.RG8I),I===i.SHORT&&(N=i.RG16I),I===i.INT&&(N=i.RG32I)),f===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RGB8UI),I===i.UNSIGNED_SHORT&&(N=i.RGB16UI),I===i.UNSIGNED_INT&&(N=i.RGB32UI),I===i.BYTE&&(N=i.RGB8I),I===i.SHORT&&(N=i.RGB16I),I===i.INT&&(N=i.RGB32I)),f===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),I===i.UNSIGNED_INT&&(N=i.RGBA32UI),I===i.BYTE&&(N=i.RGBA8I),I===i.SHORT&&(N=i.RGBA16I),I===i.INT&&(N=i.RGBA32I)),f===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(N=i.R11F_G11F_B10F)),f===i.RGBA){let V=O?lr:ve.getTransfer(U);I===i.FLOAT&&(N=i.RGBA32F),I===i.HALF_FLOAT&&(N=i.RGBA16F),I===i.UNSIGNED_BYTE&&(N=V===Ce?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function S(C,f){let I;return C?f===null||f===wi||f===Bs?I=i.DEPTH24_STENCIL8:f===Vn?I=i.DEPTH32F_STENCIL8:f===Ns&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===wi||f===Bs?I=i.DEPTH_COMPONENT24:f===Vn?I=i.DEPTH_COMPONENT32F:f===Ns&&(I=i.DEPTH_COMPONENT16),I}function T(C,f){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==Tn?Math.log2(Math.max(f.width,f.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?f.mipmaps.length:1}function A(C){let f=C.target;f.removeEventListener("dispose",A),E(f),f.isVideoTexture&&u.delete(f)}function w(C){let f=C.target;f.removeEventListener("dispose",w),y(f)}function E(C){let f=n.get(C);if(f.__webglInit===void 0)return;let I=C.source,U=p.get(I);if(U){let O=U[f.__cacheKey];O.usedTimes--,O.usedTimes===0&&b(C),Object.keys(U).length===0&&p.delete(I)}n.remove(C)}function b(C){let f=n.get(C);i.deleteTexture(f.__webglTexture);let I=C.source,U=p.get(I);delete U[f.__cacheKey],o.memory.textures--}function y(C){let f=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(f.__webglFramebuffer[U]))for(let O=0;O<f.__webglFramebuffer[U].length;O++)i.deleteFramebuffer(f.__webglFramebuffer[U][O]);else i.deleteFramebuffer(f.__webglFramebuffer[U]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[U])}else{if(Array.isArray(f.__webglFramebuffer))for(let U=0;U<f.__webglFramebuffer.length;U++)i.deleteFramebuffer(f.__webglFramebuffer[U]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let U=0;U<f.__webglColorRenderbuffer.length;U++)f.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[U]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let I=C.textures;for(let U=0,O=I.length;U<O;U++){let N=n.get(I[U]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(I[U])}n.remove(C)}let P=0;function D(){P=0}function F(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function W(C){let f=[];return f.push(C.wrapS),f.push(C.wrapT),f.push(C.wrapR||0),f.push(C.magFilter),f.push(C.minFilter),f.push(C.anisotropy),f.push(C.internalFormat),f.push(C.format),f.push(C.type),f.push(C.generateMipmaps),f.push(C.premultiplyAlpha),f.push(C.flipY),f.push(C.unpackAlignment),f.push(C.colorSpace),f.join()}function $(C,f){let I=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let U=C.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(I,C,f);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+f)}function Y(C,f){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){ct(I,C,f);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+f)}function it(C,f){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){ct(I,C,f);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+f)}function Z(C,f){let I=n.get(C);if(C.version>0&&I.__version!==C.version){bt(I,C,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+f)}let ut={[vs]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},Rt={[Mn]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},_t={[Uh]:i.NEVER,[kh]:i.ALWAYS,[Fh]:i.LESS,[jc]:i.LEQUAL,[Nh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[Bh]:i.NOTEQUAL};function Gt(C,f){if(f.type===Vn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Tn||f.magFilter===na||f.magFilter===zr||f.magFilter===$n||f.minFilter===Tn||f.minFilter===na||f.minFilter===zr||f.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ut[f.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ut[f.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ut[f.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[f.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[f.minFilter]),f.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_t[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Mn||f.minFilter!==zr&&f.minFilter!==$n||f.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Wt(C,f){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,f.addEventListener("dispose",A));let U=f.source,O=p.get(U);O===void 0&&(O={},p.set(U,O));let N=W(f);if(N!==C.__cacheKey){O[N]===void 0&&(O[N]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),O[N].usedTimes++;let V=O[C.__cacheKey];V!==void 0&&(O[C.__cacheKey].usedTimes--,V.usedTimes===0&&b(f)),C.__cacheKey=N,C.__webglTexture=O[N].texture}return I}function Jt(C,f,I){return Math.floor(Math.floor(C/I)/f)}function qt(C,f,I,U){let N=C.updateRanges;if(N.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,I,U,f.data);else{N.sort((j,dt)=>j.start-dt.start);let V=0;for(let j=1;j<N.length;j++){let dt=N[V],xt=N[j],st=dt.start+dt.count,lt=Jt(xt.start,f.width,4),vt=Jt(dt.start,f.width,4);xt.start<=st+1&&lt===vt&&Jt(xt.start+xt.count-1,f.width,4)===lt?dt.count=Math.max(dt.count,xt.start+xt.count-dt.start):(++V,N[V]=xt)}N.length=V+1;let X=i.getParameter(i.UNPACK_ROW_LENGTH),rt=i.getParameter(i.UNPACK_SKIP_PIXELS),mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let j=0,dt=N.length;j<dt;j++){let xt=N[j],st=Math.floor(xt.start/4),lt=Math.ceil(xt.count/4),vt=st%f.width,k=Math.floor(st/f.width),ht=lt,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,vt,k,ht,ot,I,U,f.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,X),i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function ct(C,f,I){let U=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(U=i.TEXTURE_3D);let O=Wt(C,f),N=f.source;e.bindTexture(U,C.__webglTexture,i.TEXTURE0+I);let V=n.get(N);if(N.version!==V.__version||O===!0){e.activeTexture(i.TEXTURE0+I);let X=ve.getPrimaries(ve.workingColorSpace),rt=f.colorSpace===hi?null:ve.getPrimaries(f.colorSpace),mt=f.colorSpace===hi||X===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let j=v(f.image,!1,s.maxTextureSize);j=yt(f,j);let dt=r.convert(f.format,f.colorSpace),xt=r.convert(f.type),st=M(f.internalFormat,dt,xt,f.colorSpace,f.isVideoTexture);Gt(U,f);let lt,vt=f.mipmaps,k=f.isVideoTexture!==!0,ht=V.__version===void 0||O===!0,ot=N.dataReady,St=T(f,j);if(f.isDepthTexture)st=S(f.format===zs,f.type),ht&&(k?e.texStorage2D(i.TEXTURE_2D,1,st,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,st,j.width,j.height,0,dt,xt,null));else if(f.isDataTexture)if(vt.length>0){k&&ht&&e.texStorage2D(i.TEXTURE_2D,St,st,vt[0].width,vt[0].height);for(let Mt=0,K=vt.length;Mt<K;Mt++)lt=vt[Mt],k?ot&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,lt.width,lt.height,dt,xt,lt.data):e.texImage2D(i.TEXTURE_2D,Mt,st,lt.width,lt.height,0,dt,xt,lt.data);f.generateMipmaps=!1}else k?(ht&&e.texStorage2D(i.TEXTURE_2D,St,st,j.width,j.height),ot&&qt(f,j,dt,xt)):e.texImage2D(i.TEXTURE_2D,0,st,j.width,j.height,0,dt,xt,j.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){k&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,st,vt[0].width,vt[0].height,j.depth);for(let Mt=0,K=vt.length;Mt<K;Mt++)if(lt=vt[Mt],f.format!==Sn)if(dt!==null)if(k){if(ot)if(f.layerUpdates.size>0){let Tt=al(lt.width,lt.height,f.format,f.type);for(let Et of f.layerUpdates){let Xt=lt.data.subarray(Et*Tt/lt.data.BYTES_PER_ELEMENT,(Et+1)*Tt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Et,lt.width,lt.height,1,dt,Xt)}f.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,lt.width,lt.height,j.depth,dt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,st,lt.width,lt.height,j.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,lt.width,lt.height,j.depth,dt,xt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,st,lt.width,lt.height,j.depth,0,dt,xt,lt.data)}else{k&&ht&&e.texStorage2D(i.TEXTURE_2D,St,st,vt[0].width,vt[0].height);for(let Mt=0,K=vt.length;Mt<K;Mt++)lt=vt[Mt],f.format!==Sn?dt!==null?k?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,lt.width,lt.height,dt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ot&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,lt.width,lt.height,dt,xt,lt.data):e.texImage2D(i.TEXTURE_2D,Mt,st,lt.width,lt.height,0,dt,xt,lt.data)}else if(f.isDataArrayTexture)if(k){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,st,j.width,j.height,j.depth),ot)if(f.layerUpdates.size>0){let Mt=al(j.width,j.height,f.format,f.type);for(let K of f.layerUpdates){let Tt=j.data.subarray(K*Mt/j.data.BYTES_PER_ELEMENT,(K+1)*Mt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,dt,xt,Tt)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,xt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,j.width,j.height,j.depth,0,dt,xt,j.data);else if(f.isData3DTexture)k?(ht&&e.texStorage3D(i.TEXTURE_3D,St,st,j.width,j.height,j.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,xt,j.data)):e.texImage3D(i.TEXTURE_3D,0,st,j.width,j.height,j.depth,0,dt,xt,j.data);else if(f.isFramebufferTexture){if(ht)if(k)e.texStorage2D(i.TEXTURE_2D,St,st,j.width,j.height);else{let Mt=j.width,K=j.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,st,Mt,K,0,dt,xt,null),Mt>>=1,K>>=1}}else if(vt.length>0){if(k&&ht){let Mt=gt(vt[0]);e.texStorage2D(i.TEXTURE_2D,St,st,Mt.width,Mt.height)}for(let Mt=0,K=vt.length;Mt<K;Mt++)lt=vt[Mt],k?ot&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,dt,xt,lt):e.texImage2D(i.TEXTURE_2D,Mt,st,dt,xt,lt);f.generateMipmaps=!1}else if(k){if(ht){let Mt=gt(j);e.texStorage2D(i.TEXTURE_2D,St,st,Mt.width,Mt.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,xt,j)}else e.texImage2D(i.TEXTURE_2D,0,st,dt,xt,j);g(f)&&m(U),V.__version=N.version,f.onUpdate&&f.onUpdate(f)}C.__version=f.version}function bt(C,f,I){if(f.image.length!==6)return;let U=Wt(C,f),O=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+I);let N=n.get(O);if(O.version!==N.__version||U===!0){e.activeTexture(i.TEXTURE0+I);let V=ve.getPrimaries(ve.workingColorSpace),X=f.colorSpace===hi?null:ve.getPrimaries(f.colorSpace),rt=f.colorSpace===hi||V===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let mt=f.isCompressedTexture||f.image[0].isCompressedTexture,j=f.image[0]&&f.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!mt&&!j?dt[K]=v(f.image[K],!0,s.maxCubemapSize):dt[K]=j?f.image[K].image:f.image[K],dt[K]=yt(f,dt[K]);let xt=dt[0],st=r.convert(f.format,f.colorSpace),lt=r.convert(f.type),vt=M(f.internalFormat,st,lt,f.colorSpace),k=f.isVideoTexture!==!0,ht=N.__version===void 0||U===!0,ot=O.dataReady,St=T(f,xt);Gt(i.TEXTURE_CUBE_MAP,f);let Mt;if(mt){k&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,vt,xt.width,xt.height);for(let K=0;K<6;K++){Mt=dt[K].mipmaps;for(let Tt=0;Tt<Mt.length;Tt++){let Et=Mt[Tt];f.format!==Sn?st!==null?k?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,0,0,Et.width,Et.height,st,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,0,0,Et.width,Et.height,st,lt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,vt,Et.width,Et.height,0,st,lt,Et.data)}}}else{if(Mt=f.mipmaps,k&&ht){Mt.length>0&&St++;let K=gt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,vt,K.width,K.height)}for(let K=0;K<6;K++)if(j){k?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,st,lt,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,vt,dt[K].width,dt[K].height,0,st,lt,dt[K].data);for(let Tt=0;Tt<Mt.length;Tt++){let Xt=Mt[Tt].image[K].image;k?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,0,0,Xt.width,Xt.height,st,lt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,vt,Xt.width,Xt.height,0,st,lt,Xt.data)}}else{k?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st,lt,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,vt,st,lt,dt[K]);for(let Tt=0;Tt<Mt.length;Tt++){let Et=Mt[Tt];k?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,0,0,st,lt,Et.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,vt,st,lt,Et.image[K])}}}g(f)&&m(i.TEXTURE_CUBE_MAP),N.__version=O.version,f.onUpdate&&f.onUpdate(f)}C.__version=f.version}function Ft(C,f,I,U,O,N){let V=r.convert(I.format,I.colorSpace),X=r.convert(I.type),rt=M(I.internalFormat,V,X,I.colorSpace),mt=n.get(f),j=n.get(I);if(j.__renderTarget=f,!mt.__hasExternalTextures){let dt=Math.max(1,f.width>>N),xt=Math.max(1,f.height>>N);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?e.texImage3D(O,N,rt,dt,xt,f.depth,0,V,X,null):e.texImage2D(O,N,rt,dt,xt,0,V,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),J(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,O,j.__webglTexture,0,tt(f)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,O,j.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(C,f,I){if(i.bindRenderbuffer(i.RENDERBUFFER,C),f.depthBuffer){let U=f.depthTexture,O=U&&U.isDepthTexture?U.type:null,N=S(f.stencilBuffer,O),V=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=tt(f);J(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,N,f.width,f.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,N,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,N,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,C)}else{let U=f.textures;for(let O=0;O<U.length;O++){let N=U[O],V=r.convert(N.format,N.colorSpace),X=r.convert(N.type),rt=M(N.internalFormat,V,X,N.colorSpace),mt=tt(f);I&&J(f)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,rt,f.width,f.height):J(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,rt,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,rt,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(C,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(f.depthTexture);U.__renderTarget=f,(!U.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),$(f.depthTexture,0);let O=U.__webglTexture,N=tt(f);if(f.depthTexture.format===Ms)J(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(f.depthTexture.format===zs)J(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function se(C){let f=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==C.depthTexture){let U=C.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),U){let O=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,U.removeEventListener("dispose",O)};U.addEventListener("dispose",O),f.__depthDisposeCallback=O}f.__boundDepthTexture=U}if(C.depthTexture&&!f.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let U=C.texture.mipmaps;U&&U.length>0?Bt(f.__webglFramebuffer[0],C):Bt(f.__webglFramebuffer,C)}else if(I){f.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[U]),f.__webglDepthbuffer[U]===void 0)f.__webglDepthbuffer[U]=i.createRenderbuffer(),Yt(f.__webglDepthbuffer[U],C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=f.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,N)}}else{let U=C.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Yt(f.__webglDepthbuffer,C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,N)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,f,I){let U=n.get(C);f!==void 0&&Ft(U.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&se(C)}function R(C){let f=C.texture,I=n.get(C),U=n.get(f);C.addEventListener("dispose",w);let O=C.textures,N=C.isWebGLCubeRenderTarget===!0,V=O.length>1;if(V||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=f.version,o.memory.textures++),N){I.__webglFramebuffer=[];for(let X=0;X<6;X++)if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer[X]=[];for(let rt=0;rt<f.mipmaps.length;rt++)I.__webglFramebuffer[X][rt]=i.createFramebuffer()}else I.__webglFramebuffer[X]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer=[];for(let X=0;X<f.mipmaps.length;X++)I.__webglFramebuffer[X]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(V)for(let X=0,rt=O.length;X<rt;X++){let mt=n.get(O[X]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&J(C)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let X=0;X<O.length;X++){let rt=O[X];I.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let mt=r.convert(rt.format,rt.colorSpace),j=r.convert(rt.type),dt=M(rt.internalFormat,mt,j,rt.colorSpace,C.isXRRenderTarget===!0),xt=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,I.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,f);for(let X=0;X<6;X++)if(f.mipmaps&&f.mipmaps.length>0)for(let rt=0;rt<f.mipmaps.length;rt++)Ft(I.__webglFramebuffer[X][rt],C,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt);else Ft(I.__webglFramebuffer[X],C,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);g(f)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(V){for(let X=0,rt=O.length;X<rt;X++){let mt=O[X],j=n.get(mt),dt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),Gt(dt,mt),Ft(I.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+X,dt,0),g(mt)&&m(dt)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,U.__webglTexture),Gt(X,f),f.mipmaps&&f.mipmaps.length>0)for(let rt=0;rt<f.mipmaps.length;rt++)Ft(I.__webglFramebuffer[rt],C,f,i.COLOR_ATTACHMENT0,X,rt);else Ft(I.__webglFramebuffer,C,f,i.COLOR_ATTACHMENT0,X,0);g(f)&&m(X),e.unbindTexture()}C.depthBuffer&&se(C)}function G(C){let f=C.textures;for(let I=0,U=f.length;I<U;I++){let O=f[I];if(g(O)){let N=x(C),V=n.get(O).__webglTexture;e.bindTexture(N,V),m(N),e.unbindTexture()}}}let z=[],H=[];function q(C){if(C.samples>0){if(J(C)===!1){let f=C.textures,I=C.width,U=C.height,O=i.COLOR_BUFFER_BIT,N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=n.get(C),X=f.length>1;if(X)for(let mt=0;mt<f.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer);let rt=C.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let mt=0;mt<f.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);let j=n.get(f[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,I,U,0,0,I,U,O,i.NEAREST),h===!0&&(z.length=0,H.length=0,z.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(N),H.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let mt=0;mt<f.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);let j=n.get(f[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){let f=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function tt(C){return Math.min(s.maxSamples,C.samples)}function J(C){let f=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function et(C){let f=o.render.frame;u.get(C)!==f&&(u.set(C,f),C.update())}function yt(C,f){let I=C.colorSpace,U=C.format,O=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Ni&&I!==hi&&(ve.getTransfer(I)===Ce?(U!==Sn||O!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),f}function gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=pt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=J}function F1(i,t){function e(n,s=hi){let r,o=ve.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Kc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===oa)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===kr||n===Hr||n===Vr||n===Gr)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Da||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Fa||n===Na||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:N1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",h=1,l=null,u=null,d=null,p=null,c=null,_=null,v=typeof XRWebGLBinding<"u",g=new vl,m={},x=e.getContextAttributes(),M=null,S=null,T=[],A=[],w=new Ut,E=null,b=new xn;b.viewport=new Re;let y=new xn;y.viewport=new Re;let P=[b,y],D=new Wo,F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let bt=T[ct];return bt===void 0&&(bt=new Ts,T[ct]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(ct){let bt=T[ct];return bt===void 0&&(bt=new Ts,T[ct]=bt),bt.getGripSpace()},this.getHand=function(ct){let bt=T[ct];return bt===void 0&&(bt=new Ts,T[ct]=bt),bt.getHandSpace()};function $(ct){let bt=A.indexOf(ct.inputSource);if(bt===-1)return;let Ft=T[bt];Ft!==void 0&&(Ft.update(ct.inputSource,ct.frame,l||o),Ft.dispatchEvent({type:ct.type,data:ct.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let ct=0;ct<T.length;ct++){let bt=A[ct];bt!==null&&(A[ct]=null,T[ct].disconnect(bt))}F=null,W=null,g.reset();for(let ct in m)delete m[ct];t.setRenderTarget(M),c=null,p=null,d=null,s=null,S=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ct){l=ct},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Yt=null,Bt=null;x.depth&&(Bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=x.stencil?zs:Ms,Yt=x.stencil?Bs:wi);let se={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(se),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new qn(p.textureWidth,p.textureHeight,{format:Sn,type:Hn,depthTexture:new yr(p.textureWidth,p.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Ft={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new qn(c.framebufferWidth,c.framebufferHeight,{format:Sn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(ct){for(let bt=0;bt<ct.removed.length;bt++){let Ft=ct.removed[bt],Yt=A.indexOf(Ft);Yt>=0&&(A[Yt]=null,T[Yt].disconnect(Ft))}for(let bt=0;bt<ct.added.length;bt++){let Ft=ct.added[bt],Yt=A.indexOf(Ft);if(Yt===-1){for(let se=0;se<T.length;se++)if(se>=A.length){A.push(Ft),Yt=se;break}else if(A[se]===null){A[se]=Ft,Yt=se;break}if(Yt===-1)break}let Bt=T[Yt];Bt&&Bt.connect(Ft)}}let Z=new B,ut=new B;function Rt(ct,bt,Ft){Z.setFromMatrixPosition(bt.matrixWorld),ut.setFromMatrixPosition(Ft.matrixWorld);let Yt=Z.distanceTo(ut),Bt=bt.projectionMatrix.elements,se=Ft.projectionMatrix.elements,pt=Bt[14]/(Bt[10]-1),R=Bt[14]/(Bt[10]+1),G=(Bt[9]+1)/Bt[5],z=(Bt[9]-1)/Bt[5],H=(Bt[8]-1)/Bt[0],q=(se[8]+1)/se[0],tt=pt*H,J=pt*q,et=Yt/(-H+q),yt=et*-H;if(bt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(yt),ct.translateZ(et),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Bt[10]===-1)ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let gt=pt+et,C=R+et,f=tt-yt,I=J+(Yt-yt),U=G*R/C*gt,O=z*R/C*gt;ct.projectionMatrix.makePerspective(f,I,U,O,gt,C),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function _t(ct,bt){bt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(bt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let bt=ct.near,Ft=ct.far;g.texture!==null&&(g.depthNear>0&&(bt=g.depthNear),g.depthFar>0&&(Ft=g.depthFar)),D.near=y.near=b.near=bt,D.far=y.far=b.far=Ft,(F!==D.near||W!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,W=D.far),D.layers.mask=ct.layers.mask|6,b.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Yt=ct.parent,Bt=D.cameras;_t(D,Yt);for(let se=0;se<Bt.length;se++)_t(Bt[se],Yt);Bt.length===2?Rt(D,b,y):D.projectionMatrix.copy(b.projectionMatrix),Gt(ct,D,Yt)};function Gt(ct,bt,Ft){Ft===null?ct.matrix.copy(bt.matrixWorld):(ct.matrix.copy(Ft.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(bt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=bs*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&c===null))return h},this.setFoveation=function(ct){h=ct,p!==null&&(p.fixedFoveation=ct),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=ct)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(ct){return m[ct]};let Wt=null;function Jt(ct,bt){if(u=bt.getViewerPose(l||o),_=bt,u!==null){let Ft=u.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let Yt=!1;Ft.length!==D.cameras.length&&(D.cameras.length=0,Yt=!0);for(let R=0;R<Ft.length;R++){let G=Ft[R],z=null;if(c!==null)z=c.getViewport(G);else{let q=d.getViewSubImage(p,G);z=q.viewport,R===0&&(t.setRenderTargetTextures(S,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(S))}let H=P[R];H===void 0&&(H=new xn,H.layers.enable(R),H.viewport=new Re,P[R]=H),H.matrix.fromArray(G.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(G.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(z.x,z.y,z.width,z.height),R===0&&(D.matrix.copy(H.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Yt===!0&&D.cameras.push(H)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let R=d.getDepthInformation(Ft[0]);R&&R.isValid&&R.texture&&g.init(R,s.renderState)}if(Bt&&Bt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let R=0;R<Ft.length;R++){let G=Ft[R].camera;if(G){let z=m[G];z||(z=new vr,m[G]=z);let H=d.getCameraImage(G);z.sourceTexture=H}}}}for(let Ft=0;Ft<T.length;Ft++){let Yt=A[Ft],Bt=T[Ft];Yt!==null&&Bt!==void 0&&Bt.update(Yt,bt,l||o)}Wt&&Wt(ct,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),_=null}let qt=new yu;qt.setAnimationLoop(Jt),this.setAnimationLoop=function(ct){Wt=ct},this.dispose=function(){}}},Ki=new In,B1=new Ie;function z1(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,il(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&c(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?h(g,m,x,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),M=x.envMap,S=x.envMapRotation;M&&(g.envMap.value=M,Ki.copy(S),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(B1.makeRotationFromEuler(Ki)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function h(g,m,x,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function c(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function l(x,M){let S=s[x.id];S===void 0&&(_(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",g));let T=M.program;n.updateUBOMapping(x,T);let A=t.render.frame;r[x.id]!==A&&(p(x),r[x.id]=A)}function u(x){let M=d();x.__bindingPointIndex=M;let S=i.createBuffer(),T=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){let M=s[x.id],S=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,w=S.length;A<w;A++){let E=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,y=E.length;b<y;b++){let P=E[b];if(c(P,A,b,T)===!0){let D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],W=0;for(let $=0;$<F.length;$++){let Y=F[$],it=v(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,D+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(x,M,S,T){let A=x.value,w=M+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{let E=T[w];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return T[w]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function _(x){let M=x.uniforms,S=0,T=16;for(let w=0,E=M.length;w<E;w++){let b=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,P=b.length;y<P;y++){let D=b[y],F=Array.isArray(D.value)?D.value:[D.value];for(let W=0,$=F.length;W<$;W++){let Y=F[W],it=v(Y),Z=S%T,ut=Z%it.boundary,Rt=Z+ut;S+=ut,Rt!==0&&T-Rt<it.storage&&(S+=T-Rt),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=it.storage}}}let A=S%T;return A>0&&(S+=T-A),x.__size=S,x.__cache={},this}function v(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){let M=x.target;M.removeEventListener("dispose",g);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:h,update:l,dispose:m}}var Va=class{constructor(t={}){let{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;let _=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1;this._outputColorSpace=gn;let A=0,w=0,E=null,b=-1,y=null,P=new Re,D=new Re,F=null,W=new jt(0),$=0,Y=e.width,it=e.height,Z=1,ut=null,Rt=null,_t=new Re(0,0,Y,it),Gt=new Re(0,0,Y,it),Wt=!1,Jt=new Rs,qt=!1,ct=!1,bt=new Ie,Ft=new B,Yt=new Re,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function pt(){return E===null?Z:1}let R=n;function G(L,Q){return e.getContext(L,Q)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),R===null){let Q="webgl2";if(R=G(Q,L),R===null)throw G(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let z,H,q,tt,J,et,yt,gt,C,f,I,U,O,N,V,X,rt,mt,j,dt,xt,st,lt,vt;function k(){z=new s0(R),z.init(),st=new F1(R,z),H=new Km(R,z,t,st),q=new L1(R,z),H.reversedDepthBuffer&&p&&q.buffers.depth.setReversed(!0),tt=new a0(R),J=new v1,et=new U1(R,z,q,J,H,st,tt),yt=new jm(S),gt=new i0(S),C=new ff(R),lt=new Jm(R,C),f=new r0(R,C,tt,lt),I=new l0(R,f,C,tt),j=new c0(R,H,et),X=new Qm(J),U=new y1(S,yt,gt,z,H,lt,X),O=new z1(S,J),N=new b1,V=new R1(z),mt=new Zm(S,yt,gt,q,I,c,h),rt=new P1(S,I,H),vt=new k1(R,tt,H,q),dt=new $m(R,z,tt),xt=new o0(R,z,tt),tt.programs=U.programs,S.capabilities=H,S.extensions=z,S.properties=J,S.renderLists=N,S.shadowMap=rt,S.state=q,S.info=tt}k();let ht=new Ml(S,R);this.xr=ht,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let L=z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(L){L!==void 0&&(Z=L,this.setSize(Y,it,!1))},this.getSize=function(L){return L.set(Y,it)},this.setSize=function(L,Q,at=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=L,it=Q,e.width=Math.floor(L*Z),e.height=Math.floor(Q*Z),at===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(Y*Z,it*Z).floor()},this.setDrawingBufferSize=function(L,Q,at){Y=L,it=Q,Z=at,e.width=Math.floor(L*at),e.height=Math.floor(Q*at),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(P)},this.getViewport=function(L){return L.copy(_t)},this.setViewport=function(L,Q,at,ft){L.isVector4?_t.set(L.x,L.y,L.z,L.w):_t.set(L,Q,at,ft),q.viewport(P.copy(_t).multiplyScalar(Z).round())},this.getScissor=function(L){return L.copy(Gt)},this.setScissor=function(L,Q,at,ft){L.isVector4?Gt.set(L.x,L.y,L.z,L.w):Gt.set(L,Q,at,ft),q.scissor(D.copy(Gt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(L){q.setScissorTest(Wt=L)},this.setOpaqueSort=function(L){ut=L},this.setTransparentSort=function(L){Rt=L},this.getClearColor=function(L){return L.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,at=!0){let ft=0;if(L){let nt=!1;if(E!==null){let Pt=E.texture.format;nt=Pt===la||Pt===ca||Pt===aa}if(nt){let Pt=E.texture.type,Ot=Pt===Hn||Pt===wi||Pt===Ns||Pt===Bs||Pt===sa||Pt===ra,$t=mt.getClearColor(),Vt=mt.getClearAlpha(),Kt=$t.r,Ht=$t.g,Dt=$t.b;Ot?(_[0]=Kt,_[1]=Ht,_[2]=Dt,_[3]=Vt,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=Kt,v[1]=Ht,v[2]=Dt,v[3]=Vt,R.clearBufferiv(R.COLOR,0,v))}else ft|=R.COLOR_BUFFER_BIT}Q&&(ft|=R.DEPTH_BUFFER_BIT),at&&(ft|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),mt.dispose(),N.dispose(),V.dispose(),J.dispose(),yt.dispose(),gt.dispose(),I.dispose(),lt.dispose(),vt.dispose(),U.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",It),ht.removeEventListener("sessionend",wt),Ct.stop()};function ot(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let L=tt.autoReset,Q=rt.enabled,at=rt.autoUpdate,ft=rt.needsUpdate,nt=rt.type;k(),tt.autoReset=L,rt.enabled=Q,rt.autoUpdate=at,rt.needsUpdate=ft,rt.type=nt}function Mt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function K(L){let Q=L.target;Q.removeEventListener("dispose",K),Tt(Q)}function Tt(L){Et(L),J.remove(L)}function Et(L){let Q=J.get(L).programs;Q!==void 0&&(Q.forEach(function(at){U.releaseProgram(at)}),L.isShaderMaterial&&U.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,at,ft,nt,Pt){Q===null&&(Q=Bt);let Ot=nt.isMesh&&nt.matrixWorld.determinant()<0,$t=Ee(L,Q,at,ft,nt);q.setMaterial(ft,Ot);let Vt=at.index,Kt=1;if(ft.wireframe===!0){if(Vt=f.getWireframeAttribute(at),Vt===void 0)return;Kt=2}let Ht=at.drawRange,Dt=at.attributes.position,ne=Ht.start*Kt,ce=(Ht.start+Ht.count)*Kt;Pt!==null&&(ne=Math.max(ne,Pt.start*Kt),ce=Math.min(ce,(Pt.start+Pt.count)*Kt)),Vt!==null?(ne=Math.max(ne,0),ce=Math.min(ce,Vt.count)):Dt!=null&&(ne=Math.max(ne,0),ce=Math.min(ce,Dt.count));let ee=ce-ne;if(ee<0||ee===1/0)return;lt.setup(nt,ft,$t,at,Vt);let oe,le=dt;if(Vt!==null&&(oe=C.get(Vt),le=xt,le.setIndex(oe)),nt.isMesh)ft.wireframe===!0?(q.setLineWidth(ft.wireframeLinewidth*pt()),le.setMode(R.LINES)):le.setMode(R.TRIANGLES);else if(nt.isLine){let te=ft.linewidth;te===void 0&&(te=1),q.setLineWidth(te*pt()),nt.isLineSegments?le.setMode(R.LINES):nt.isLineLoop?le.setMode(R.LINE_LOOP):le.setMode(R.LINE_STRIP)}else nt.isPoints?le.setMode(R.POINTS):nt.isSprite&&le.setMode(R.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))le.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let te=nt._multiDrawStarts,_e=nt._multiDrawCounts,he=nt._multiDrawCount,Ne=Vt?C.get(Vt).bytesPerElement:1,Oe=J.get(ft).currentProgram.getUniforms();for(let de=0;de<he;de++)Oe.setValue(R,"_gl_DrawID",de),le.render(te[de]/Ne,_e[de])}else if(nt.isInstancedMesh)le.renderInstances(ne,ee,nt.count);else if(at.isInstancedBufferGeometry){let te=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,_e=Math.min(at.instanceCount,te);le.renderInstances(ne,ee,_e)}else le.render(ne,ee)};function Xt(L,Q,at){L.transparent===!0&&L.side===tn&&L.forceSinglePass===!1?(L.side=an,L.needsUpdate=!0,ge(L,Q,at),L.side=ri,L.needsUpdate=!0,ge(L,Q,at),L.side=tn):ge(L,Q,at)}this.compile=function(L,Q,at=null){at===null&&(at=L),m=V.get(at),m.init(Q),M.push(m),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),L!==at&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),m.setupLights();let ft=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Pt=nt.material;if(Pt)if(Array.isArray(Pt))for(let Ot=0;Ot<Pt.length;Ot++){let $t=Pt[Ot];Xt($t,at,nt),ft.add($t)}else Xt(Pt,at,nt),ft.add(Pt)}),m=M.pop(),ft},this.compileAsync=function(L,Q,at=null){let ft=this.compile(L,Q,at);return new Promise(nt=>{function Pt(){if(ft.forEach(function(Ot){J.get(Ot).currentProgram.isReady()&&ft.delete(Ot)}),ft.size===0){nt(L);return}setTimeout(Pt,10)}z.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let zt=null;function At(L){zt&&zt(L)}function It(){Ct.stop()}function wt(){Ct.start()}let Ct=new yu;Ct.setAnimationLoop(At),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(L){zt=L,ht.setAnimationLoop(L),L===null?Ct.stop():Ct.start()},ht.addEventListener("sessionstart",It),ht.addEventListener("sessionend",wt),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Q),Q=ht.getCamera()),L.isScene===!0&&L.onBeforeRender(S,L,Q,E),m=V.get(L,M.length),m.init(Q),M.push(m),bt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Jt.setFromProjectionMatrix(bt,Nn,Q.reversedDepth),ct=this.localClippingEnabled,qt=X.init(this.clippingPlanes,ct),g=N.get(L,x.length),g.init(),x.push(g),ht.enabled===!0&&ht.isPresenting===!0){let Pt=S.xr.getDepthSensingMesh();Pt!==null&&kt(Pt,Q,-1/0,S.sortObjects)}kt(L,Q,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ut,Rt),se=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,se&&mt.addToRenderList(g,L),this.info.render.frame++,qt===!0&&X.beginShadows();let at=m.state.shadowsArray;rt.render(at,L,Q),qt===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();let ft=g.opaque,nt=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Pt=Q.cameras;if(nt.length>0)for(let Ot=0,$t=Pt.length;Ot<$t;Ot++){let Vt=Pt[Ot];Qt(ft,nt,L,Vt)}se&&mt.render(L);for(let Ot=0,$t=Pt.length;Ot<$t;Ot++){let Vt=Pt[Ot];Lt(g,L,Vt,Vt.viewport)}}else nt.length>0&&Qt(ft,nt,L,Q),se&&mt.render(L),Lt(g,L,Q);E!==null&&w===0&&(et.updateMultisampleRenderTarget(E),et.updateRenderTargetMipmap(E)),L.isScene===!0&&L.onAfterRender(S,L,Q),lt.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],qt===!0&&X.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function kt(L,Q,at,ft){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)at=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Jt.intersectsSprite(L)){ft&&Yt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);let Ot=I.update(L),$t=L.material;$t.visible&&g.push(L,Ot,$t,at,Yt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Jt.intersectsObject(L))){let Ot=I.update(L),$t=L.material;if(ft&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Yt.copy(L.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Yt.copy(Ot.boundingSphere.center)),Yt.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray($t)){let Vt=Ot.groups;for(let Kt=0,Ht=Vt.length;Kt<Ht;Kt++){let Dt=Vt[Kt],ne=$t[Dt.materialIndex];ne&&ne.visible&&g.push(L,Ot,ne,at,Yt.z,Dt)}}else $t.visible&&g.push(L,Ot,$t,at,Yt.z,null)}}let Pt=L.children;for(let Ot=0,$t=Pt.length;Ot<$t;Ot++)kt(Pt[Ot],Q,at,ft)}function Lt(L,Q,at,ft){let nt=L.opaque,Pt=L.transmissive,Ot=L.transparent;m.setupLightsView(at),qt===!0&&X.setGlobalState(S.clippingPlanes,at),ft&&q.viewport(P.copy(ft)),nt.length>0&&Nt(nt,Q,at),Pt.length>0&&Nt(Pt,Q,at),Ot.length>0&&Nt(Ot,Q,at),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Qt(L,Q,at,ft){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ft.id]===void 0&&(m.state.transmissionRenderTarget[ft.id]=new qn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Os:Hn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let Pt=m.state.transmissionRenderTarget[ft.id],Ot=ft.viewport||P;Pt.setSize(Ot.z*S.transmissionResolutionScale,Ot.w*S.transmissionResolutionScale);let $t=S.getRenderTarget(),Vt=S.getActiveCubeFace(),Kt=S.getActiveMipmapLevel();S.setRenderTarget(Pt),S.getClearColor(W),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),se&&mt.render(at);let Ht=S.toneMapping;S.toneMapping=li;let Dt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),m.setupLightsView(ft),qt===!0&&X.setGlobalState(S.clippingPlanes,ft),Nt(L,at,ft),et.updateMultisampleRenderTarget(Pt),et.updateRenderTargetMipmap(Pt),z.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ce=0,ee=Q.length;ce<ee;ce++){let oe=Q[ce],le=oe.object,te=oe.geometry,_e=oe.material,he=oe.group;if(_e.side===tn&&le.layers.test(ft.layers)){let Ne=_e.side;_e.side=an,_e.needsUpdate=!0,ae(le,at,ft,te,_e,he),_e.side=Ne,_e.needsUpdate=!0,ne=!0}}ne===!0&&(et.updateMultisampleRenderTarget(Pt),et.updateRenderTargetMipmap(Pt))}S.setRenderTarget($t,Vt,Kt),S.setClearColor(W,$),Dt!==void 0&&(ft.viewport=Dt),S.toneMapping=Ht}function Nt(L,Q,at){let ft=Q.isScene===!0?Q.overrideMaterial:null;for(let nt=0,Pt=L.length;nt<Pt;nt++){let Ot=L[nt],$t=Ot.object,Vt=Ot.geometry,Kt=Ot.group,Ht=Ot.material;Ht.allowOverride===!0&&ft!==null&&(Ht=ft),$t.layers.test(at.layers)&&ae($t,Q,at,Vt,Ht,Kt)}}function ae(L,Q,at,ft,nt,Pt){L.onBeforeRender(S,Q,at,ft,nt,Pt),L.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(S,Q,at,ft,L,Pt),nt.transparent===!0&&nt.side===tn&&nt.forceSinglePass===!1?(nt.side=an,nt.needsUpdate=!0,S.renderBufferDirect(at,Q,ft,nt,L,Pt),nt.side=ri,nt.needsUpdate=!0,S.renderBufferDirect(at,Q,ft,nt,L,Pt),nt.side=tn):S.renderBufferDirect(at,Q,ft,nt,L,Pt),L.onAfterRender(S,Q,at,ft,nt,Pt)}function ge(L,Q,at){Q.isScene!==!0&&(Q=Bt);let ft=J.get(L),nt=m.state.lights,Pt=m.state.shadowsArray,Ot=nt.state.version,$t=U.getParameters(L,nt.state,Pt,Q,at),Vt=U.getProgramCacheKey($t),Kt=ft.programs;ft.environment=L.isMeshStandardMaterial?Q.environment:null,ft.fog=Q.fog,ft.envMap=(L.isMeshStandardMaterial?gt:yt).get(L.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,Kt===void 0&&(L.addEventListener("dispose",K),Kt=new Map,ft.programs=Kt);let Ht=Kt.get(Vt);if(Ht!==void 0){if(ft.currentProgram===Ht&&ft.lightsStateVersion===Ot)return Ae(L,$t),Ht}else $t.uniforms=U.getUniforms(L),L.onBeforeCompile($t,S),Ht=U.acquireProgram($t,Vt),Kt.set(Vt,Ht),ft.uniforms=$t.uniforms;let Dt=ft.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Dt.clippingPlanes=X.uniform),Ae(L,$t),ft.needsLights=Le(L),ft.lightsStateVersion=Ot,ft.needsLights&&(Dt.ambientLightColor.value=nt.state.ambient,Dt.lightProbe.value=nt.state.probe,Dt.directionalLights.value=nt.state.directional,Dt.directionalLightShadows.value=nt.state.directionalShadow,Dt.spotLights.value=nt.state.spot,Dt.spotLightShadows.value=nt.state.spotShadow,Dt.rectAreaLights.value=nt.state.rectArea,Dt.ltc_1.value=nt.state.rectAreaLTC1,Dt.ltc_2.value=nt.state.rectAreaLTC2,Dt.pointLights.value=nt.state.point,Dt.pointLightShadows.value=nt.state.pointShadow,Dt.hemisphereLights.value=nt.state.hemi,Dt.directionalShadowMap.value=nt.state.directionalShadowMap,Dt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Dt.spotShadowMap.value=nt.state.spotShadowMap,Dt.spotLightMatrix.value=nt.state.spotLightMatrix,Dt.spotLightMap.value=nt.state.spotLightMap,Dt.pointShadowMap.value=nt.state.pointShadowMap,Dt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ft.currentProgram=Ht,ft.uniformsList=null,Ht}function we(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=Gs.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Ae(L,Q){let at=J.get(L);at.outputColorSpace=Q.outputColorSpace,at.batching=Q.batching,at.batchingColor=Q.batchingColor,at.instancing=Q.instancing,at.instancingColor=Q.instancingColor,at.instancingMorph=Q.instancingMorph,at.skinning=Q.skinning,at.morphTargets=Q.morphTargets,at.morphNormals=Q.morphNormals,at.morphColors=Q.morphColors,at.morphTargetsCount=Q.morphTargetsCount,at.numClippingPlanes=Q.numClippingPlanes,at.numIntersection=Q.numClipIntersection,at.vertexAlphas=Q.vertexAlphas,at.vertexTangents=Q.vertexTangents,at.toneMapping=Q.toneMapping}function Ee(L,Q,at,ft,nt){Q.isScene!==!0&&(Q=Bt),et.resetTextureUnits();let Pt=Q.fog,Ot=ft.isMeshStandardMaterial?Q.environment:null,$t=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ni,Vt=(ft.isMeshStandardMaterial?gt:yt).get(ft.envMap||Ot),Kt=ft.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Ht=!!at.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Dt=!!at.morphAttributes.position,ne=!!at.morphAttributes.normal,ce=!!at.morphAttributes.color,ee=li;ft.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ee=S.toneMapping);let oe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,le=oe!==void 0?oe.length:0,te=J.get(ft),_e=m.state.lights;if(qt===!0&&(ct===!0||L!==y)){let Ue=L===y&&ft.id===b;X.setState(ft,L,Ue)}let he=!1;ft.version===te.__version?(te.needsLights&&te.lightsStateVersion!==_e.state.version||te.outputColorSpace!==$t||nt.isBatchedMesh&&te.batching===!1||!nt.isBatchedMesh&&te.batching===!0||nt.isBatchedMesh&&te.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&te.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&te.instancing===!1||!nt.isInstancedMesh&&te.instancing===!0||nt.isSkinnedMesh&&te.skinning===!1||!nt.isSkinnedMesh&&te.skinning===!0||nt.isInstancedMesh&&te.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&te.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&te.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&te.instancingMorph===!1&&nt.morphTexture!==null||te.envMap!==Vt||ft.fog===!0&&te.fog!==Pt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==X.numPlanes||te.numIntersection!==X.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==Ht||te.morphTargets!==Dt||te.morphNormals!==ne||te.morphColors!==ce||te.toneMapping!==ee||te.morphTargetsCount!==le)&&(he=!0):(he=!0,te.__version=ft.version);let Ne=te.currentProgram;he===!0&&(Ne=ge(ft,Q,nt));let Oe=!1,de=!1,sn=!1,xe=Ne.getUniforms(),Xe=te.uniforms;if(q.useProgram(Ne.program)&&(Oe=!0,de=!0,sn=!0),ft.id!==b&&(b=ft.id,de=!0),Oe||y!==L){q.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),xe.setValue(R,"projectionMatrix",L.projectionMatrix),xe.setValue(R,"viewMatrix",L.matrixWorldInverse);let Ze=xe.map.cameraPosition;Ze!==void 0&&Ze.setValue(R,Ft.setFromMatrixPosition(L.matrixWorld)),H.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&xe.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,de=!0,sn=!0)}if(nt.isSkinnedMesh){xe.setOptional(R,nt,"bindMatrix"),xe.setOptional(R,nt,"bindMatrixInverse");let Ue=nt.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),xe.setValue(R,"boneTexture",Ue.boneTexture,et))}nt.isBatchedMesh&&(xe.setOptional(R,nt,"batchingTexture"),xe.setValue(R,"batchingTexture",nt._matricesTexture,et),xe.setOptional(R,nt,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",nt._indirectTexture,et),xe.setOptional(R,nt,"batchingColorTexture"),nt._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",nt._colorsTexture,et));let Ye=at.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&j.update(nt,at,Ne),(de||te.receiveShadow!==nt.receiveShadow)&&(te.receiveShadow=nt.receiveShadow,xe.setValue(R,"receiveShadow",nt.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Xe.envMap.value=Vt,Xe.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Q.environment!==null&&(Xe.envMapIntensity.value=Q.environmentIntensity),de&&(xe.setValue(R,"toneMappingExposure",S.toneMappingExposure),te.needsLights&&ye(Xe,sn),Pt&&ft.fog===!0&&O.refreshFogUniforms(Xe,Pt),O.refreshMaterialUniforms(Xe,ft,Z,it,m.state.transmissionRenderTarget[L.id]),Gs.upload(R,we(te),Xe,et)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Gs.upload(R,we(te),Xe,et),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&xe.setValue(R,"center",nt.center),xe.setValue(R,"modelViewMatrix",nt.modelViewMatrix),xe.setValue(R,"normalMatrix",nt.normalMatrix),xe.setValue(R,"modelMatrix",nt.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){let Ue=ft.uniformsGroups;for(let Ze=0,Je=Ue.length;Ze<Je;Ze++){let hn=Ue[Ze];vt.update(hn,Ne),vt.bind(hn,Ne)}}return Ne}function ye(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function Le(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(L,Q,at){let ft=J.get(L);ft.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),J.get(L.texture).__webglTexture=Q,J.get(L.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:at,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let at=J.get(L);at.__webglFramebuffer=Q,at.__useDefaultFramebuffer=Q===void 0};let Ge=R.createFramebuffer();this.setRenderTarget=function(L,Q=0,at=0){E=L,A=Q,w=at;let ft=!0,nt=null,Pt=!1,Ot=!1;if(L){let Vt=J.get(L);if(Vt.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(R.FRAMEBUFFER,null),ft=!1;else if(Vt.__webglFramebuffer===void 0)et.setupRenderTarget(L);else if(Vt.__hasExternalTextures)et.rebindTextures(L,J.get(L.texture).__webglTexture,J.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Dt=L.depthTexture;if(Vt.__boundDepthTexture!==Dt){if(Dt!==null&&J.has(Dt)&&(L.width!==Dt.image.width||L.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(L)}}let Kt=L.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);let Ht=J.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ht[Q])?nt=Ht[Q][at]:nt=Ht[Q],Pt=!0):L.samples>0&&et.useMultisampledRTT(L)===!1?nt=J.get(L).__webglMultisampledFramebuffer:Array.isArray(Ht)?nt=Ht[at]:nt=Ht,P.copy(L.viewport),D.copy(L.scissor),F=L.scissorTest}else P.copy(_t).multiplyScalar(Z).floor(),D.copy(Gt).multiplyScalar(Z).floor(),F=Wt;if(at!==0&&(nt=Ge),q.bindFramebuffer(R.FRAMEBUFFER,nt)&&ft&&q.drawBuffers(L,nt),q.viewport(P),q.scissor(D),q.setScissorTest(F),Pt){let Vt=J.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt.__webglTexture,at)}else if(Ot){let Vt=Q;for(let Kt=0;Kt<L.textures.length;Kt++){let Ht=J.get(L.textures[Kt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Kt,Ht.__webglTexture,at,Vt)}}else if(L!==null&&at!==0){let Vt=J.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Vt.__webglTexture,at)}b=-1},this.readRenderTargetPixels=function(L,Q,at,ft,nt,Pt,Ot,$t=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=J.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){q.bindFramebuffer(R.FRAMEBUFFER,Vt);try{let Kt=L.textures[$t],Ht=Kt.format,Dt=Kt.type;if(!H.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-ft&&at>=0&&at<=L.height-nt&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+$t),R.readPixels(Q,at,ft,nt,st.convert(Ht),st.convert(Dt),Pt))}finally{let Kt=E!==null?J.get(E).__webglFramebuffer:null;q.bindFramebuffer(R.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,at,ft,nt,Pt,Ot,$t=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=J.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt)if(Q>=0&&Q<=L.width-ft&&at>=0&&at<=L.height-nt){q.bindFramebuffer(R.FRAMEBUFFER,Vt);let Kt=L.textures[$t],Ht=Kt.format,Dt=Kt.type;if(!H.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ne),R.bufferData(R.PIXEL_PACK_BUFFER,Pt.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+$t),R.readPixels(Q,at,ft,nt,st.convert(Ht),st.convert(Dt),0);let ce=E!==null?J.get(E).__webglFramebuffer:null;q.bindFramebuffer(R.FRAMEBUFFER,ce);let ee=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Vh(R,ee,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ne),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pt),R.deleteBuffer(ne),R.deleteSync(ee),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,at=0){let ft=Math.pow(2,-at),nt=Math.floor(L.image.width*ft),Pt=Math.floor(L.image.height*ft),Ot=Q!==null?Q.x:0,$t=Q!==null?Q.y:0;et.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,at,0,0,Ot,$t,nt,Pt),q.unbindTexture()};let We=R.createFramebuffer(),on=R.createFramebuffer();this.copyTextureToTexture=function(L,Q,at=null,ft=null,nt=0,Pt=null){Pt===null&&(nt!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=nt,nt=0):Pt=0);let Ot,$t,Vt,Kt,Ht,Dt,ne,ce,ee,oe=L.isCompressedTexture?L.mipmaps[Pt]:L.image;if(at!==null)Ot=at.max.x-at.min.x,$t=at.max.y-at.min.y,Vt=at.isBox3?at.max.z-at.min.z:1,Kt=at.min.x,Ht=at.min.y,Dt=at.isBox3?at.min.z:0;else{let Ye=Math.pow(2,-nt);Ot=Math.floor(oe.width*Ye),$t=Math.floor(oe.height*Ye),L.isDataArrayTexture?Vt=oe.depth:L.isData3DTexture?Vt=Math.floor(oe.depth*Ye):Vt=1,Kt=0,Ht=0,Dt=0}ft!==null?(ne=ft.x,ce=ft.y,ee=ft.z):(ne=0,ce=0,ee=0);let le=st.convert(Q.format),te=st.convert(Q.type),_e;Q.isData3DTexture?(et.setTexture3D(Q,0),_e=R.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(et.setTexture2DArray(Q,0),_e=R.TEXTURE_2D_ARRAY):(et.setTexture2D(Q,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Q.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Q.unpackAlignment);let he=R.getParameter(R.UNPACK_ROW_LENGTH),Ne=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Oe=R.getParameter(R.UNPACK_SKIP_PIXELS),de=R.getParameter(R.UNPACK_SKIP_ROWS),sn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,oe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Dt);let xe=L.isDataArrayTexture||L.isData3DTexture,Xe=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let Ye=J.get(L),Ue=J.get(Q),Ze=J.get(Ye.__renderTarget),Je=J.get(Ue.__renderTarget);q.bindFramebuffer(R.READ_FRAMEBUFFER,Ze.__webglFramebuffer),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let hn=0;hn<Vt;hn++)xe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get(L).__webglTexture,nt,Dt+hn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get(Q).__webglTexture,Pt,ee+hn)),R.blitFramebuffer(Kt,Ht,Ot,$t,ne,ce,Ot,$t,R.DEPTH_BUFFER_BIT,R.NEAREST);q.bindFramebuffer(R.READ_FRAMEBUFFER,null),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(nt!==0||L.isRenderTargetTexture||J.has(L)){let Ye=J.get(L),Ue=J.get(Q);q.bindFramebuffer(R.READ_FRAMEBUFFER,We),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,on);for(let Ze=0;Ze<Vt;Ze++)xe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ye.__webglTexture,nt,Dt+Ze):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ye.__webglTexture,nt),Xe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,Pt,ee+Ze):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ue.__webglTexture,Pt),nt!==0?R.blitFramebuffer(Kt,Ht,Ot,$t,ne,ce,Ot,$t,R.COLOR_BUFFER_BIT,R.NEAREST):Xe?R.copyTexSubImage3D(_e,Pt,ne,ce,ee+Ze,Kt,Ht,Ot,$t):R.copyTexSubImage2D(_e,Pt,ne,ce,Kt,Ht,Ot,$t);q.bindFramebuffer(R.READ_FRAMEBUFFER,null),q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xe?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(_e,Pt,ne,ce,ee,Ot,$t,Vt,le,te,oe.data):Q.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,Pt,ne,ce,ee,Ot,$t,Vt,le,oe.data):R.texSubImage3D(_e,Pt,ne,ce,ee,Ot,$t,Vt,le,te,oe):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Pt,ne,ce,Ot,$t,le,te,oe.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Pt,ne,ce,oe.width,oe.height,le,oe.data):R.texSubImage2D(R.TEXTURE_2D,Pt,ne,ce,Ot,$t,le,te,oe);R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ne),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Oe),R.pixelStorei(R.UNPACK_SKIP_ROWS,de),R.pixelStorei(R.UNPACK_SKIP_IMAGES,sn),Pt===0&&Q.generateMipmaps&&R.generateMipmap(_e),q.unbindTexture()},this.initRenderTarget=function(L){J.get(L).__webglFramebuffer===void 0&&et.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?et.setTextureCube(L,0):L.isData3DTexture?et.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?et.setTexture2DArray(L,0):et.setTexture2D(L,0),q.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,q.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var Wa=class extends Bi{constructor(){super();let t=new vi;t.deleteAttribute("uv");let e=new yn({side:an}),n=new yn,s=new Or(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new zi(t,n,6),a=new Ke;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let h=new Me(t,Ys(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let l=new Me(t,Ys(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Me(t,Ys(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Me(t,Ys(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let p=new Me(t,Ys(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let c=new Me(t,Ys(100));c.position.set(0,20,0),c.scale.set(1,.1,1),this.add(c)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ys(i){return new Ur({color:0,emissive:16777215,emissiveIntensity:i})}var ke=new Xn,Xa=new B,wu=new Ut,Eu=new Ut,Tu=new Ut,Ya=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let h=0;h<s;h++){let l=1,u=3*h,d=3*h+1,p=3*h+2;t&&(u=t.getX(u),d=t.getX(d),p=t.getX(p)),n&&(l=n.getX(u)+n.getX(d)+n.getX(p)),ke.a.fromBufferAttribute(e,u),ke.b.fromBufferAttribute(e,d),ke.c.fromBufferAttribute(e,p),l*=ke.getArea(),r[h]=l}let o=new Float32Array(s),a=0;for(let h=0;h<s;h++)a+=r[h],o[h]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let h=this.indexAttribute,l=t*3,u=t*3+1,d=t*3+2;return h&&(l=h.getX(l),u=h.getX(u),d=h.getX(d)),ke.a.fromBufferAttribute(this.positionAttribute,l),ke.b.fromBufferAttribute(this.positionAttribute,u),ke.c.fromBufferAttribute(this.positionAttribute,d),e.set(0,0,0).addScaledVector(ke.a,o).addScaledVector(ke.b,a).addScaledVector(ke.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(ke.a.fromBufferAttribute(this.normalAttribute,l),ke.b.fromBufferAttribute(this.normalAttribute,u),ke.c.fromBufferAttribute(this.normalAttribute,d),n.set(0,0,0).addScaledVector(ke.a,o).addScaledVector(ke.b,a).addScaledVector(ke.c,1-(o+a)).normalize()):ke.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(ke.a.fromBufferAttribute(this.colorAttribute,l),ke.b.fromBufferAttribute(this.colorAttribute,u),ke.c.fromBufferAttribute(this.colorAttribute,d),Xa.set(0,0,0).addScaledVector(ke.a,o).addScaledVector(ke.b,a).addScaledVector(ke.c,1-(o+a)),s.r=Xa.x,s.g=Xa.y,s.b=Xa.z),r!==void 0&&this.uvAttribute!==void 0&&(wu.fromBufferAttribute(this.uvAttribute,l),Eu.fromBufferAttribute(this.uvAttribute,u),Tu.fromBufferAttribute(this.uvAttribute,d),r.set(0,0).addScaledVector(wu,o).addScaledVector(Eu,a).addScaledVector(Tu,1-(o+a))),this}};var Au=new B(0,1,0),Ru=new B(0,-1,0);function H1(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function V1(i,t,e=3){let n=new Pn(t*.1,t,i,e,4,!0);n.translate(0,i/2,0);let s=n.attributes.position;for(let r=0;r<s.count;r++){let o=Math.max(0,Math.min(1,s.getY(r)/i));s.setX(r,s.getX(r)+i*.24*Math.sin(Math.PI*.9*o)),s.setZ(r,s.getZ(r)+i*.12*o*o)}return n.computeVertexNormals(),n.computeBoundingBox(),n.userData.fiberProfile=Array.from({length:5},(r,o)=>{let a=o/4;return[i*.24*Math.sin(Math.PI*.9*a),i*a,i*.12*a*a]}),n.userData.fiberRadius=t,n.userData.radialSegments=e,n}function Cu(i,t,e=1){if(t.catalogTier==="baseline"&&t.family==="grok")return;i.root.updateMatrixWorld(!0);let n=i.surfaces.slice(),s=n.find(l=>l.material.bumpMap)?.material;for(let l of n){let u=l.material;(l.userData.surfaceMaterial||u.name||t.material)==="clay"&&!u.userData.clayFinish&&(u.roughness=.96,u.bumpScale=.0036,u.bumpMap&&(u.bumpMap=u.bumpMap.clone(),u.bumpMap.repeat.set(2.8,2.8)),u.userData.clayFinish=!0)}for(let l of["head-beret","head-beanie"])i.root.getObjectByName(l)?.traverse(u=>{!u.isMesh||n.includes(u)||(u.material=u.material.clone(),u.material.name="micro",u.material.roughness=1,s?.bumpMap&&(u.material.bumpMap=s.bumpMap,u.material.bumpScale=.0012),u.userData.surfaceMaterial="micro",n.push(u))});let r=n.filter(l=>{let u=l.userData.surfaceMaterial||l.material.name||t.material,d=!0;for(let p=l;p;p=p.parent)p.visible||(d=!1);return["plush","micro","fabric","knit","fiber"].includes(u)&&d&&!l.userData.skipProceduralPile}),o=r.map(l=>{l.geometry.computeBoundingBox();let u=l.geometry.boundingBox.getSize(new B).multiply(l.scale);return Math.max(.012,2*(u.x*u.y+u.x*u.z+u.y*u.z))}),a=o.reduce((l,u)=>l+u,0)||1,h=i.eyeGroups.map(l=>l.getWorldPosition(new B));r.forEach((l,u)=>{let d=l.userData.surfaceMaterial||l.material.name||t.material,p=d==="knit"||d==="fabric"||d==="fiber",c=d==="micro",_=t.catalogTier==="baseline"&&c,v=t.catalogTier==="baseline"&&t.family==="dots";!p&&l.material.bumpMap&&(l.material.bumpScale=Math.min(l.material.bumpScale,v?8e-5:c?.0013:.0015));let m=Math.max(80,Math.round((v?56e3:p?3e4:c?1e5:19e4)*e*o[u]/a)),x=p?d==="fiber"?.018:.005:c?.01:.031;_&&(x=t.family==="meta-muse"?.0065:v?.011:.008);let M=p?48e-5:c?v?55e-5:62e-5:.0011,S=V1(x,M,v?5:3),T=l.material.color.clone();if(v){let Rt=S.attributes.normal;for(let _t=0;_t<Rt.count;_t++)Rt.setXYZ(_t,0,1,0);Rt.needsUpdate=!0}let A=new yn({color:T,roughness:v?.96:1,metalness:0,side:tn,transparent:v,opacity:v?.58:1,depthWrite:!v});v&&(A.emissive.copy(T),A.emissiveIntensity=.12),A.name="fine-pile";let w=new zi(S,A,m);w.name="surface-fibers",w.castShadow=!1,w.receiveShadow=!v,w.userData.surfaceMaterial=d,w.userData.fiberProfile=S.userData.fiberProfile,w.userData.fiberRadius=M,w.userData.fiberTones=new Float32Array(m);let E=H1((t.randomSeed||"dot")+l.name+u),b=new Ya(l).setRandomGenerator(E).build(),y=new B,P=new B,D=new B,F=new B,W=new B,$=new B,Y=new Ke,it=new jt,Z=new jt,ut=new je;for(let Rt=0;Rt<m;Rt++){b.sample(y,P,Z),P.normalize(),D.copy(Ru).addScaledVector(P,-Ru.dot(P)),D.lengthSq()<.005&&D.set(1,0,0).addScaledVector(P,-P.x),D.normalize(),F.crossVectors(P,D).normalize();let _t=Math.sin(y.x*6.7+y.y*3.1)*.16+Math.cos(y.z*5.4-y.y*2.2)*.09;D.multiplyScalar(.94).addScaledVector(F,_t+(E()-.5)*(v?.3:.48)).normalize(),v?W.copy(P).multiplyScalar(.78).addScaledVector(D,.63).normalize():W.copy(P).multiplyScalar(.63).addScaledVector(D,.77).normalize(),Y.position.copy(y).addScaledVector(P,-x*.055),Y.quaternion.setFromUnitVectors(Au,W),ut.setFromAxisAngle(Au,E()*Math.PI*2),Y.quaternion.multiply(ut);let Gt=v?.78+E()*.5:.64+E()*.52;$.copy(y).applyMatrix4(l.matrixWorld);for(let qt of h){let ct=$.distanceToSquared(qt);ct<.035&&(Gt*=.36+.64*Math.min(1,ct/.035))}let Wt=v?.82+E()*.32:.76+E()*.35;Y.scale.set(Wt,Gt,Wt),Y.updateMatrix(),w.setMatrixAt(Rt,Y.matrix);let Jt=v?.96+E()*.07:p?.91+E()*.13:c?.91+E()*.15:.82+E()*.36;w.userData.fiberTones[Rt]=Jt,it.copy(Z).multiplyScalar(Jt),w.setColorAt(Rt,it)}w.instanceMatrix.needsUpdate=!0,w.instanceColor.needsUpdate=!0,w.frustumCulled=!1,l.add(w)})}var Za=class extends Me{constructor(t,e,n=!1,s=!1,r=1e4){let o=new be;super(o,e),this.isMarchingCubes=!0;let a=this,h=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(x){this.resolution=x,this.isolation=80,this.size=x,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let M=r*3;this.positionArray=new Float32Array(M*3);let S=new Qe(this.positionArray,3);S.setUsage(ks),o.setAttribute("position",S),this.normalArray=new Float32Array(M*3);let T=new Qe(this.normalArray,3);if(T.setUsage(ks),o.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(M*2);let A=new Qe(this.uvArray,2);A.setUsage(ks),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(M*3);let A=new Qe(this.colorArray,3);A.setUsage(ks),o.setAttribute("color",A)}o.boundingSphere=new Zn(new B,1)};function d(x,M,S){return x+(M-x)*S}function p(x,M,S,T,A,w,E,b,y,P){let D=(S-E)/(b-E),F=a.normal_cache;h[M+0]=T+D*a.delta,h[M+1]=A,h[M+2]=w,l[M+0]=d(F[x+0],F[x+3],D),l[M+1]=d(F[x+1],F[x+4],D),l[M+2]=d(F[x+2],F[x+5],D),u[M+0]=d(a.palette[y*3+0],a.palette[P*3+0],D),u[M+1]=d(a.palette[y*3+1],a.palette[P*3+1],D),u[M+2]=d(a.palette[y*3+2],a.palette[P*3+2],D)}function c(x,M,S,T,A,w,E,b,y,P){let D=(S-E)/(b-E),F=a.normal_cache;h[M+0]=T,h[M+1]=A+D*a.delta,h[M+2]=w;let W=x+a.yd*3;l[M+0]=d(F[x+0],F[W+0],D),l[M+1]=d(F[x+1],F[W+1],D),l[M+2]=d(F[x+2],F[W+2],D),u[M+0]=d(a.palette[y*3+0],a.palette[P*3+0],D),u[M+1]=d(a.palette[y*3+1],a.palette[P*3+1],D),u[M+2]=d(a.palette[y*3+2],a.palette[P*3+2],D)}function _(x,M,S,T,A,w,E,b,y,P){let D=(S-E)/(b-E),F=a.normal_cache;h[M+0]=T,h[M+1]=A,h[M+2]=w+D*a.delta;let W=x+a.zd*3;l[M+0]=d(F[x+0],F[W+0],D),l[M+1]=d(F[x+1],F[W+1],D),l[M+2]=d(F[x+2],F[W+2],D),u[M+0]=d(a.palette[y*3+0],a.palette[P*3+0],D),u[M+1]=d(a.palette[y*3+1],a.palette[P*3+1],D),u[M+2]=d(a.palette[y*3+2],a.palette[P*3+2],D)}function v(x){let M=x*3;a.normal_cache[M]===0&&(a.normal_cache[M+0]=a.field[x-1]-a.field[x+1],a.normal_cache[M+1]=a.field[x-a.yd]-a.field[x+a.yd],a.normal_cache[M+2]=a.field[x-a.zd]-a.field[x+a.zd])}function g(x,M,S,T,A){let w=T+1,E=T+a.yd,b=T+a.zd,y=w+a.yd,P=w+a.zd,D=T+a.yd+a.zd,F=w+a.yd+a.zd,W=0,$=a.field[T],Y=a.field[w],it=a.field[E],Z=a.field[y],ut=a.field[b],Rt=a.field[P],_t=a.field[D],Gt=a.field[F];$<A&&(W|=1),Y<A&&(W|=2),it<A&&(W|=8),Z<A&&(W|=4),ut<A&&(W|=16),Rt<A&&(W|=32),_t<A&&(W|=128),Gt<A&&(W|=64);let Wt=G1[W];if(Wt===0)return 0;let Jt=a.delta,qt=x+Jt,ct=M+Jt,bt=S+Jt;Wt&1&&(v(T),v(w),p(T*3,0,A,x,M,S,$,Y,T,w)),Wt&2&&(v(w),v(y),c(w*3,3,A,qt,M,S,Y,Z,w,y)),Wt&4&&(v(E),v(y),p(E*3,6,A,x,ct,S,it,Z,E,y)),Wt&8&&(v(T),v(E),c(T*3,9,A,x,M,S,$,it,T,E)),Wt&16&&(v(b),v(P),p(b*3,12,A,x,M,bt,ut,Rt,b,P)),Wt&32&&(v(P),v(F),c(P*3,15,A,qt,M,bt,Rt,Gt,P,F)),Wt&64&&(v(D),v(F),p(D*3,18,A,x,ct,bt,_t,Gt,D,F)),Wt&128&&(v(b),v(D),c(b*3,21,A,x,M,bt,ut,_t,b,D)),Wt&256&&(v(T),v(b),_(T*3,24,A,x,M,S,$,ut,T,b)),Wt&512&&(v(w),v(P),_(w*3,27,A,qt,M,S,Y,Rt,w,P)),Wt&1024&&(v(y),v(F),_(y*3,30,A,qt,ct,S,Z,Gt,y,F)),Wt&2048&&(v(E),v(D),_(E*3,33,A,x,ct,S,it,_t,E,D)),W<<=4;let Ft,Yt,Bt,se=0,pt=0;for(;qa[W+pt]!=-1;)Ft=W+pt,Yt=Ft+1,Bt=Ft+2,m(h,l,u,3*qa[Ft],3*qa[Yt],3*qa[Bt]),pt+=3,se++;return se}function m(x,M,S,T,A,w){let E=a.count*3;if(a.positionArray[E+0]=x[T],a.positionArray[E+1]=x[T+1],a.positionArray[E+2]=x[T+2],a.positionArray[E+3]=x[A],a.positionArray[E+4]=x[A+1],a.positionArray[E+5]=x[A+2],a.positionArray[E+6]=x[w],a.positionArray[E+7]=x[w+1],a.positionArray[E+8]=x[w+2],a.material.flatShading===!0){let b=(M[T+0]+M[A+0]+M[w+0])/3,y=(M[T+1]+M[A+1]+M[w+1])/3,P=(M[T+2]+M[A+2]+M[w+2])/3;a.normalArray[E+0]=b,a.normalArray[E+1]=y,a.normalArray[E+2]=P,a.normalArray[E+3]=b,a.normalArray[E+4]=y,a.normalArray[E+5]=P,a.normalArray[E+6]=b,a.normalArray[E+7]=y,a.normalArray[E+8]=P}else a.normalArray[E+0]=M[T+0],a.normalArray[E+1]=M[T+1],a.normalArray[E+2]=M[T+2],a.normalArray[E+3]=M[A+0],a.normalArray[E+4]=M[A+1],a.normalArray[E+5]=M[A+2],a.normalArray[E+6]=M[w+0],a.normalArray[E+7]=M[w+1],a.normalArray[E+8]=M[w+2];if(a.enableUvs){let b=a.count*2;a.uvArray[b+0]=x[T+0],a.uvArray[b+1]=x[T+2],a.uvArray[b+2]=x[A+0],a.uvArray[b+3]=x[A+2],a.uvArray[b+4]=x[w+0],a.uvArray[b+5]=x[w+2]}a.enableColors&&(a.colorArray[E+0]=S[T+0],a.colorArray[E+1]=S[T+1],a.colorArray[E+2]=S[T+2],a.colorArray[E+3]=S[A+0],a.colorArray[E+4]=S[A+1],a.colorArray[E+5]=S[A+2],a.colorArray[E+6]=S[w+0],a.colorArray[E+7]=S[w+1],a.colorArray[E+8]=S[w+2]),a.count+=3}this.addBall=function(x,M,S,T,A,w){let E=Math.sign(T);T=Math.abs(T);let b=w!=null,y=new jt(x,M,S);if(b)try{y=w instanceof jt?w:Array.isArray(w)?new jt(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new jt(w)}catch{y=new jt(x,M,S)}let P=this.size*Math.sqrt(T/A),D=S*this.size,F=M*this.size,W=x*this.size,$=Math.floor(D-P);$<1&&($=1);let Y=Math.floor(D+P);Y>this.size-1&&(Y=this.size-1);let it=Math.floor(F-P);it<1&&(it=1);let Z=Math.floor(F+P);Z>this.size-1&&(Z=this.size-1);let ut=Math.floor(W-P);ut<1&&(ut=1);let Rt=Math.floor(W+P);Rt>this.size-1&&(Rt=this.size-1);let _t,Gt,Wt,Jt,qt,ct,bt,Ft,Yt,Bt,se;for(Wt=$;Wt<Y;Wt++)for(qt=this.size2*Wt,Ft=Wt/this.size-S,Yt=Ft*Ft,Gt=it;Gt<Z;Gt++)for(Jt=qt+this.size*Gt,bt=Gt/this.size-M,Bt=bt*bt,_t=ut;_t<Rt;_t++)if(ct=_t/this.size-x,se=T/(1e-6+ct*ct+Bt+Yt)-A,se>0){this.field[Jt+_t]+=se*E;let pt=Math.sqrt((_t-W)*(_t-W)+(Gt-F)*(Gt-F)+(Wt-D)*(Wt-D))/P,R=1-pt*pt*pt*(pt*(pt*6-15)+10);this.palette[(Jt+_t)*3+0]+=y.r*R,this.palette[(Jt+_t)*3+1]+=y.g*R,this.palette[(Jt+_t)*3+2]+=y.b*R}},this.addPlaneX=function(x,M){let S=this.size,T=this.yd,A=this.zd,w=this.field,E,b,y,P,D,F,W,$=S*Math.sqrt(x/M);for($>S&&($=S),E=0;E<$;E++)if(F=E/S,P=F*F,D=x/(1e-4+P)-M,D>0)for(b=0;b<S;b++)for(W=E+b*T,y=0;y<S;y++)w[A*y+W]+=D},this.addPlaneY=function(x,M){let S=this.size,T=this.yd,A=this.zd,w=this.field,E,b,y,P,D,F,W,$,Y=S*Math.sqrt(x/M);for(Y>S&&(Y=S),b=0;b<Y;b++)if(F=b/S,P=F*F,D=x/(1e-4+P)-M,D>0)for(W=b*T,E=0;E<S;E++)for($=W+E,y=0;y<S;y++)w[A*y+$]+=D},this.addPlaneZ=function(x,M){let S=this.size,T=this.yd,A=this.zd,w=this.field,E,b,y,P,D,F,W,$,Y=S*Math.sqrt(x/M);for(Y>S&&(Y=S),y=0;y<Y;y++)if(F=y/S,P=F*F,D=x/(1e-4+P)-M,D>0)for(W=A*y,b=0;b<S;b++)for($=W+b*T,E=0;E<S;E++)w[$+E]+=D},this.setCell=function(x,M,S,T){let A=this.size2*S+this.size*M+x;this.field[A]=T},this.getCell=function(x,M,S){let T=this.size2*S+this.size*M+x;return this.field[T]},this.blur=function(x=1){let M=this.field,S=M.slice(),T=this.size,A=this.size2;for(let w=0;w<T;w++)for(let E=0;E<T;E++)for(let b=0;b<T;b++){let y=A*b+T*E+w,P=S[y],D=1;for(let F=-1;F<=1;F+=2){let W=F+w;if(!(W<0||W>=T))for(let $=-1;$<=1;$+=2){let Y=$+E;if(!(Y<0||Y>=T))for(let it=-1;it<=1;it+=2){let Z=it+b;if(Z<0||Z>=T)continue;let ut=A*Z+T*Y+W,Rt=S[ut];D++,P+=x*(Rt-P)/D}}}M[y]=P}},this.reset=function(){for(let x=0;x<this.size3;x++)this.normal_cache[x*3]=0,this.field[x]=0,this.palette[x*3]=this.palette[x*3+1]=this.palette[x*3+2]=0},this.update=function(){this.count=0;let x=this.size-2;for(let M=1;M<x;M++){let S=this.size2*M,T=(M-this.halfsize)/this.halfsize;for(let A=1;A<x;A++){let w=S+this.size*A,E=(A-this.halfsize)/this.halfsize;for(let b=1;b<x;b++){let y=(b-this.halfsize)/this.halfsize,P=w+b;g(y,E,T,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},G1=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),qa=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var He=Math.PI*2,Iu=new B(0,1,0),Ja=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),Zs=new Map,es=(i,t,e)=>Math.max(t,Math.min(e,i)),ts=i=>new B(...i),qs=(i,t)=>new jt(i).multiplyScalar(t),cn=(i,t,e)=>new jt(i).lerp(new jt(t),e),fe=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Qn(i,t,e=.19,n={}){let s=n.resolution??72,r=n.ellipticalOpening,o=`sculpted:${i}:${s}:${r?JSON.stringify(r):"closed"}`;if(Zs.has(o))return Zs.get(o).clone();let a=1.54,h=new Za(s,void 0,!1,!1,5e4);h.isolation=0;let l=(m,x,M,[S,T,A,w,E,b])=>{m-=S,x-=T,M-=A;let y=Math.hypot(m/w,x/E,M/b),P=Math.hypot(m/(w*w),x/(E*E),M/(b*b));return P>1e-9?y*(y-1)/P:-Math.min(w,E,b)},u=(m,x)=>{let M=Math.max(e-Math.abs(m-x),0)/e;return Math.min(m,x)-M*M*e*.25},d=(m,x,M)=>{let S=Math.max(M-Math.abs(m-x),0)/M;return Math.max(m,x)+S*S*M*.25};for(let m=0;m<s;m++)for(let x=0;x<s;x++)for(let M=0;M<s;M++){let S=(M/s*2-1)*a,T=(x/s*2-1)*a,A=(m/s*2-1)*a,w=l(S,T,A,t[0]);for(let E=1;E<t.length;E++)w=u(w,l(S,T,A,t[E]));if(r){let E=Math.hypot((S-r.cx)/r.rx,(T-r.cy)/r.ry),b=(E-1)*Math.min(r.rx,r.ry),y=Math.abs(A-r.cz)-r.halfDepth,P=Math.max(b,y);w=d(w,-P,r.edge??.022)}h.field[M+x*s+m*s*s]=-w}h.update();let p=h.count,c=new be,_=h.positionArray.slice(0,p*3),v=h.normalArray.slice(0,p*3),g=[];for(let m=0;m<p;m++)_[m*3]*=a,_[m*3+1]*=a,_[m*3+2]*=a,g.push(Math.atan2(_[m*3],_[m*3+2])/He+.5,(_[m*3+1]+1.2)/2.4);return c.setAttribute("position",new ie(_,3)),c.setAttribute("normal",new ie(v,3)),c.setAttribute("uv",new ie(g,2)),c.normalizeNormals(),c.computeBoundingBox(),c.computeBoundingSphere(),h.geometry.dispose(),h.material?.dispose(),Zs.set(o,c),c.clone()}function Sl(i){let t=[],e=[],n=[],s=[];for(let o of i){let a=o,h=t.length/3;if(t.push(...a.attributes.position.array),e.push(...a.attributes.normal.array),a.attributes.uv&&n.push(...a.attributes.uv.array),a.index)for(let l of a.index.array)s.push(l+h);else for(let l=0;l<a.attributes.position.count;l++)s.push(h+l);o.dispose()}let r=new be;return r.setAttribute("position",new ie(t,3)),r.setAttribute("normal",new ie(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new ie(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function Pu(i,t,e=.82,n=.98){let s=i+":"+e+":"+n;if(Zs.has(s))return Zs.get(s).clone();let r=t.map(([g,m])=>new B(g,m,0));r.reduce((g,m,x)=>g+m.x*r[(x+1)%r.length].y-r[(x+1)%r.length].x*m.y,0)<0&&r.reverse();let a=new fn(r,!0,"catmullrom",.35),h=112,l=48,u=[],d=[],p=[],c=r.reduce((g,m)=>g+Math.hypot(m.x,m.y),0)/r.length;for(let g=0;g<=l;g++){let m=g/l*Math.PI,x=Math.pow(Math.sin(m),n);for(let M=0;M<=h;M++){let S=a.getPoint(M/h),T=Math.hypot(S.x,S.y),A=x**2.65,w=c+(T-c)*A,E=T>1e-6?x*w/T:0;if(u.push(S.x*E,S.y*E,e*Math.cos(m)),d.push(M/h,g/l),M<h&&g<l){let b=g*(h+1)+M,y=b+h+1;p.push(b,y,b+1,y,y+1,b+1)}}}let _=new be;_.setAttribute("position",new ie(u,3)),_.setAttribute("uv",new ie(d,2)),_.setIndex(p),_.computeVertexNormals();let v=_.attributes.normal;for(let g=0;g<=l;g++){let m=g*(h+1),x=m+h;if(g===0||g===l)for(let M=m;M<=x;M++)v.setXYZ(M,0,0,g===0?1:-1);else{let M=new B().fromBufferAttribute(v,m).add(new B().fromBufferAttribute(v,x)).normalize();v.setXYZ(m,M.x,M.y,M.z),v.setXYZ(x,M.x,M.y,M.z)}}return _.computeBoundingBox(),_.computeBoundingSphere(),Zs.set(s,_),_.clone()}function Yr(i,t,e=1){let n=new fn(i.map(ts),!1,"centripetal"),s=30,r=14,o=n.computeFrenetFrames(s,!1),a=[],h=[],l=[];for(let d=0;d<=s;d++){let p=d/s,c=n.getPointAt(p),_=Math.min(1,Math.sin(Math.min(1,p/.13)*Math.PI/2),Math.sin(Math.min(1,(1-p)/.19)*Math.PI/2)),v=t*(1+(e-1)*p)*_;for(let g=0;g<=r;g++){let m=g/r*He,x=o.normals[d],M=o.binormals[d];if(a.push(c.x+(x.x*Math.cos(m)+M.x*Math.sin(m))*v,c.y+(x.y*Math.cos(m)+M.y*Math.sin(m))*v,c.z+(x.z*Math.cos(m)+M.z*Math.sin(m))*v),h.push(g/r,p),d<s&&g<r){let S=d*(r+1)+g,T=S+r+1;l.push(S,S+1,T,S+1,T+1,T)}}}let u=new be;return u.setAttribute("position",new ie(a,3)),u.setAttribute("uv",new ie(h,2)),u.setIndex(l),u.computeVertexNormals(),u.computeBoundingSphere(),u}function Du(i){let t=(r=1,o=16)=>Array.from({length:o},(a,h)=>{let l=h/o*He,u=Math.cos(l),d=Math.sin(l);return[Math.sign(u)*Math.abs(u)**r,Math.sign(d)*Math.abs(d)**r]}),e=r=>Array.from({length:r},(o,a)=>[Math.sin(a/r*He),Math.cos(a/r*He)]),n=(r,o,a=0,h=1,l=1)=>Array.from({length:72},(u,d)=>{let p=d/72*He,c=1+o*Math.cos(p*r+a);return[Math.sin(p)*c*h,Math.cos(p)*c*l]}),s={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1.04,-.56],[-1.2,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.9,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.8],[-.57,-.76]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.2],[1,.23],[.69,.65],[.34,.97]],triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],heart:[[0,.56],[-.24,.78],[-.54,.9],[-.8,.81],[-.955,.58],[-.975,.3],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.3],[.955,.58],[.8,.81],[.54,.9],[.24,.78]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.1],[-1.03,-.1],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.1],[1.03,.1],[.865,.31],[.175,.985]],star:Array.from({length:40},(r,o)=>{let a=o/40*He,h=.88+.18*Math.cos(a*5);return[Math.sin(a)*h,Math.cos(a)*h]}),puff:n(6,.15,.38),clover:n(4,.25,Math.PI,1.035,.88),scallop:n(10,.058),hexagon:e(6),roundedcube:t(.5),sphere:t(),sprout:t(),frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.5],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.5],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:t()};return s[i]||s.dumpling}function W1(i){let e=new Uint8Array(65536),n=["plush","micro"].includes(i),s=null,r=0,o=1;if(n){s=new Float32Array(16384);for(let u=0;u<2500;u++){let d=fe(u*7+191)*128,p=fe(u*7+193)*128,c=2+fe(u*7+197)*3,_=(fe(u*7+199)-.5)*.88,v=Math.sin(_),g=Math.cos(_),m=.39+fe(u*7+211)*.3,x=.55+fe(u*7+223)*.75,M=Math.ceil(c+1);for(let S=-M;S<=M;S++)for(let T=-M;T<=M;T++){let A=Math.floor(d)+T,w=Math.floor(p)+S,E=A-d,b=w-p,y=E*v+b*g,P=E*g-b*v,D=Math.exp(-.5*(y/(c*.46))**2-.5*(P/m)**2)*x;s[(w%128+128)%128*128+(A%128+128)%128]+=D}}for(let u of s)r+=u;r/=s.length;let l=0;for(let u of s)l+=(u-r)**2;o=(i==="micro"?45:54)/Math.max(.01,Math.sqrt(l/s.length))}for(let l=0;l<128;l++)for(let u=0;u<128;u++){let d=fe(u+l*128),p=i==="knit",c=i==="fabric",_=p?Math.sin(u*.72+Math.sin(l*.33)*1.8)*Math.cos(l*.33):c?Math.sin(u*1.57)*Math.sin(l*1.57):0,v=n?es(128+(s[u+l*128]-r)*o,32,224):es(128+(d-.5)*(p?16:24)+_*(p?35:c?32:0),0,255),g=(l*128+u)*4;e[g]=e[g+1]=e[g+2]=v,e[g+3]=255}let a=new As(e,128,128,Sn);a.needsUpdate=!0,a.wrapS=a.wrapT=vs,a.magFilter=Tn,a.minFilter=$n,a.generateMipmaps=!0;let h=i==="fabric"?1.7:i==="knit"?2.2:5;return a.repeat.set(h,h),a}function Lu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=t.catalogTier==="baseline",n=t.family==="meta-muse"||t.shape==="meta-hood",s=e&&t.family==="dots",r=e&&t.family==="grok",o=e&&t.family==="humans",a=e&&t.family==="animals",h=n||e&&["dots","animals"].includes(t.family)?"micro":e&&t.family==="grok"?"rubber":t.material,l=new Pe,u=new Pe,d=new Pe,p=new Pe;l.name="avatar-body",u.name="head",d.name="torso",p.name="face",l.add(d,u),u.add(p);let c=[],_=[],v=[],g=[],m=new Map,x=new Map,M=new Map,S=es(Number(t.headScale)||1,.65,1.5),T=es(Number(t.bodyWidth)||1,.65,1.5),A=null,w=[],E={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},b=[],y=(f,I)=>(m.has(f)||m.set(f,I()),m.get(f)),P=()=>y("sphere",()=>new Bn(1,40,28));function D(f,I=t.material){let U=new jt(f).getHexString(),O=U+":"+I;if(x.has(O))return x.get(O);let N={rubber:.64,plush:.98,micro:.94,clay:.92,skin:.77,hair:.67,fiber:.93,knit:.99,fabric:.95,eye:.35,matteEye:.6,nose:.52},V=new yn({color:f,roughness:N[I]??.88,metalness:0});return V.name=I,["eye","matteEye","nose","hair"].includes(I)||(M.has(I)||M.set(I,W1(I)),V.bumpMap=M.get(I),V.bumpScale={rubber:45e-5,skin:6e-4,micro:.001,plush:.0014,clay:.0018,knit:.0036,fabric:.003,fiber:.0012}[I]??.002),x.set(O,V),V}let F=D(t.colors.body,h),W=D(t.colors.secondary,h),$=D(qs(t.colors.body,.24),h),Y=D(t.colors.eyes,["sparkle","glossy","star","oval","side"].includes(t.eyes)?"eye":"matteEye"),it=D(qs(t.colors.eyes,.88),"nose");function Z(f,I,U,O=[0,0,0],N=[1,1,1],V=!1,X=""){let rt=new Me(I,U);return rt.position.set(...O),rt.scale.set(...N),rt.castShadow=!0,rt.receiveShadow=!0,rt.name=X,f.add(rt),V&&(rt.userData.surfaceMaterial=U.name,rt.userData.furLength=U.name==="micro"?.011:.024,c.push(rt)),rt}let ut=(f,I,U,O=F,N=!0,V="")=>Z(f,P(),O,I,U,N,V);function Rt(f,I){f.geometry=f.geometry.clone(),f.material=f.material.clone(),f.material.vertexColors=!0,f.material.color.set("#FFFFFF");let U=f.geometry.attributes.position,O=new Float32Array(U.count*3),N=new jt;for(let V=0;V<U.count;V++)I(new B(U.getX(V)*f.scale.x,U.getY(V)*f.scale.y,U.getZ(V)*f.scale.z),N),O[V*3]=N.r,O[V*3+1]=N.g,O[V*3+2]=N.b;return f.geometry.setAttribute("color",new ie(O,3)),f}function _t(f,I,U,O,N=24,V=!1,X=""){let rt=new fn(I.map(ts),V,"catmullrom",.35);return Z(f,new zn(rt,N,U,7,V),O,[0,0,0],[1,1,1],!1,X)}function Gt(f,I,U,O,N,V,X=F,rt=!0){return Z(f,y(I+":"+O,()=>Pu(I,U,O)),X,N,V,rt,I)}function Wt(f,I,U,O,N=F,V=N,X="paw"){let rt=new Pe;rt.name=f<0?"arm-left":"arm-right",rt.position.set(...I),l.add(rt);let mt=Ja.has(t.shape),j=X==="hand",dt=[f*(mt?-.035:j?-.2:.06),-U,mt?.195:j?.37:.065],xt=j?[[0,.045,-.05],[f*.068,-U*.35,.15],[-f*.06,-U*.69,.32],[dt[0],-U+.045,dt[2]]]:mt?[[0,.075,-.07],[f*.02,-U*.28,.02],[-f*.02,-U*.68,.135],[dt[0],-U+.025,dt[2]],[dt[0],-U-O*.85,dt[2]+.035]]:[[0,.055,-.012],[f*.065,-U*.32,.015],[f*.08,-U*.69,.11],[dt[0],-U+.025,dt[2]]],st=Z(rt,Yr(xt,O,j?.87:mt?1.055:1.03),N,[0,0,0],[1,1,1],!0,"upper-arm");return mt&&N!==V&&Rt(st,(lt,vt)=>vt.copy(N.color).lerp(V.color,Se.smoothstep(-lt.y,U*.66,U*.84))),mt||ut(rt,dt,[O*(j?1.03:1.05),O*(j?.82:.88),O*1.04],V,!0,X),X==="hand"&&ut(rt,[dt[0]-f*O*.65,dt[1]+.025,dt[2]+.04],[O*.35,O*.49,O*.39],V,!1,"thumb"),_.push(rt),b.push(ts(dt).add(ts(I))),rt}function Jt(f,I,U,O,N,V=F){let X=new Pe;return X.name=f<0?"leg-left":"leg-right",X.position.set(I,U,O),l.add(X),ut(X,[0,0,0],N,V,!0,"hind-paw"),v.push(X),X}function qt(f,I,U,O,N=F,V=null){let X=new Pe;if(X.position.set(...U),X.rotation.z=-f*(I==="long"?.07:.12),u.add(X),I==="round"||I==="long")ut(X,[0,0,0],O,N,!0,"outer-ear"),V&&ut(X,[0,0,O[2]*.75],[O[0]*.61,O[1]*.68,O[2]*.28],D(V,"skin"),!1,"inner-ear");else{let rt=[[0,.88],[-.16,.81],[-.49,.19],[-.7,-.48],[-.51,-.84],[.51,-.84],[.7,-.48],[.49,.19],[.16,.81]];Gt(X,"tri-ear",rt,.36,[0,0,0],O,N,!0),V&&Gt(X,"tri-ear-inner",rt,.16,[0,-O[1]*.05,O[2]*.3],[O[0]*.56,O[1]*.64,O[2]*.37],D(V,"skin"),!1)}return X}function ct(f,I,U=F){A=new Pe,A.name="tail",l.add(A);let O=Z(A,Yr(f,I,.52),U,[0,0,0],[1,1,1],!0,"rounded-tail");return O.userData.surfaceMaterial=U.name,A}function bt(f,I,U=W){let O=ut(u,f,I,U,!0,"muzzle");return w.push(O),O}n?q():t.shape==="human"?tt():Ja.has(t.shape)?et(t.shape):H(t.shape),n||t.shape==="human"||Ja.has(t.shape)?u.scale.setScalar(S*(o?1.12:1)):u.scale.set(1,S,1),C(),l.updateMatrixWorld(!0);let Ft=new Te().setFromObject(l),Yt=new Te().setFromObject(u),Bt=f=>u.localToWorld(ts(f)).toArray(),se={headTop:[u.position.x,Yt.max.y,u.position.z],face:Bt([0,E.eyeY,yt(0,E.eyeY)+.035]),neck:o?d.localToWorld(ts([0,.51,.05])).toArray():Bt([0,E.neckY??-.58,.05]),handL:b[0]?.toArray()??[-.9,.65,.55],handR:b[1]?.toArray()??[.9,.65,.55],shoulderL:_[0]?.position.toArray()??[-1,.9,0],shoulderR:_[1]?.position.toArray()??[1,.9,0]},R=new kn(new B(u.position.x,Ft.max.y+2,u.position.z),new B(0,-1,0)).intersectObject(u,!0)[0];se.crown=R?R.point.toArray():se.headTop.slice(),se.mouth=Bt([0,E.mouthY,yt(0,E.mouthY)+.042]);let z=new kn(new B(0,se.neck[1],Ft.max.z+2),new B(0,0,-1)).intersectObject(l,!0)[0];return se.neckFront=z?[0,se.neck[1],z.point.z+.022]:Bt([0,E.neckY??-.58,yt(0,E.neckY??-.58)+.025]),l.userData.anatomy=n||t.shape==="human"?"human":Ja.has(t.shape)?"animal":"blob",l.userData.material=t.material,l.userData.restHeadPosition=u.position.clone(),{root:l,head:u,torso:d,face:p,eyeGroups:g,arms:_,legs:v,tail:A,anchors:se,height:Ft.max.y,width:Ft.max.x-Ft.min.x,surfaces:c};function H(f){let U={dumpling:[1,.94,1],cloud:[1,.97,1.07],capsule:[1,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1,1,.96],roundedcube:[1.03,1,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.1,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.1],twin:[.96,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.1,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.2]}[f]||[1.05,1.03,1];U[0]*=T;let O;if(f==="dumpling")O=Z(u,y("blob-dumpling-layered",()=>Qn("dumpling-v5",[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.3)),F,[0,0,0],U,!0,"blob-dumpling");else if(f==="sphere")O=ut(u,[0,0,0],U,F,!0,"blob-sphere");else if(f==="frog")O=Z(u,y("blob-frog-sculpted",()=>Qn("frog-v4",[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.4],[.43,.62,.02,.295,.345,.4]],.255)),F,[0,0,0],U,!0,"blob-frog");else if(f==="puff"){let rt=[[0,0,0,.78,.79,.77],...Array.from({length:6},(mt,j)=>{let dt=j/6*He+.2;return[Math.sin(dt)*.68,Math.cos(dt)*.68,0,.4,.4,.6]})];O=Z(u,y("blob-puff-sculpted",()=>Qn("puff-v5",rt,.19)),F,[0,0,0],U,!0,"blob-puff")}else if(f==="cloud")O=Z(u,y("blob-cloud-sculpted",()=>Qn("cloud-v3",[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),F,[0,0,0],U,!0,"blob-cloud");else if(f==="sprout")O=Z(u,y("blob-sprout",()=>Qn("sprout-v4",[[0,-.13,0,.94,.94,.86],[-.085,.9,-.055,.2,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),F,[0,0,0],U,!0,"blob-sprout");else if(f==="ghost")O=Z(u,y("blob-ghost-sculpted",()=>Qn("ghost-v4",[[0,.1,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),F,[0,0,0],U,!0,"blob-ghost");else{let rt=r&&f==="arch",mt=rt?[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.68],[-.82,-.88],[-.6,-.925],[-.3,-.935],[0,-.935],[.3,-.935],[.6,-.925],[.82,-.88],[.96,-.68],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]]:Du(f),j=rt?"grok-baseline-arch-flat":"blob-r4-"+f;O=Z(u,y("blob-"+(rt?"grok-baseline-arch-flat":f),()=>Pu(j,mt,f==="arch"?.87:.84,.99)),F,[0,0,0],U,!0,"blob-"+f)}w=[O],O.geometry.computeBoundingBox();let N=O.geometry.boundingBox.min.y*U[1],V=["feet","both"].includes(t.limbs);if(u.position.y=-N*S+(V?.22:.035),E={eyeX:(f==="triangle"?.265:f==="diamond"?.33:f==="heart"?.29:f==="pebble"?.27:f==="scallop"||f==="twin"?.25:f==="pill"?.26:t.family==="dots"?.2:.275)*T,eyeY:f==="dumpling"?.015:f==="cloud"?.1:f==="triangle"?.18:f==="sprout"?.13:.23,mouthY:f==="dumpling"?-.22:-.23,size:f==="triangle"?.91:f==="dumpling"?.95:1,neckY:N*.72},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let rt of[-1,1])Wt(rt,[rt*1.03*T,u.position.y-.1,.1],.4,.15,F,F,"mitten");if(V)for(let rt of[-1,1])Jt(rt,rt*.46*T,.13,.12,[.21,.13,.28]);if(f==="frog"&&(E={eyeX:.43*T,eyeY:.66,mouthY:-.12,size:1.3,neckY:N*.74}),f==="twin")for(let rt of[-1,1]){let mt=ut(u,[rt*.16,1.075,-.045],[.225,.285,.22],F,!0,"twin-top-lobe");mt.rotation.z=-rt*.3}}function q(){let f=y("meta-hood-body-v1",()=>Qn("meta-hood-body-v1",[[0,.7,0,.49,.59,.39],[0,.32,0,.37,.31,.34]],.18));Z(d,f,F,[0,0,0],[T,1,1],!0,"meta-hood-body"),u.position.set(0,1.42,.015);let I=[[0,.03,0,.55,.7,.46],[0,-.37,0,.43,.51,.42]],U=y("meta-hood-shell-v5-recessed-port",()=>Qn("meta-hood-shell-v5-recessed-port",I,.2,{resolution:160,ellipticalOpening:{cx:0,cy:.005,cz:.8,rx:.34,ry:.42,halfDepth:.58,edge:.022}}));Z(u,U,F,[0,0,0],[1,1,1],!0,"meta-hood-shell");let O=new Me(U,new Oi({side:tn})),N=112,V=.34*1.035,X=.42*1.035,rt=.005,mt=Array(N).fill(NaN),j=new kn;for(let vt=0;vt<N;vt++){let k=vt/N*He,ht=Math.cos(k)*V,ot=rt+Math.sin(k)*X;j.set(new B(ht,ot,2),new B(0,0,-1));let St=j.intersectObject(O,!1)[0];St&&(mt[vt]=St.point.z)}O.material.dispose();for(let vt=0;vt<N;vt++)if(!Number.isFinite(mt[vt])){let k=-1;for(let ht=1;ht<N;ht++){let ot=(vt+ht)%N;if(Number.isFinite(mt[ot])){k=ot;break}}mt[vt]=k<0?.35:mt[k]}let dt=12,xt=[];for(let vt=0;vt<=dt;vt++){let k=0,ht=0;for(let ot=0;ot<N;ot++){let St=ot/N*He;k+=mt[ot]*Math.cos(vt*St),ht+=mt[ot]*Math.sin(vt*St)}xt.push({cosine:(vt===0?1:2)*k/N,sine:vt===0?0:2*ht/N})}let st=new class extends _n{getPoint(vt,k=new B){let ht=(vt%1+1)%1*He,ot=0;for(let St=0;St<=dt;St++)ot+=xt[St].cosine*Math.cos(St*ht)+xt[St].sine*Math.sin(St*ht);return k.set(Math.cos(ht)*V,rt+Math.sin(ht)*X,ot+.008)}};Z(u,new zn(st,144,.014,8,!0),D("#D8C0A9","fabric"),[0,0,0],[1,1,1],!1,"meta-face-inner-rim"),w=[ut(u,[0,.008,.305],[.31,.39,.027],D(t.colors.skin,"skin"),!1,"meta-face-panel")],E={eyeX:.104,eyeY:.045,mouthY:-.112,size:.66,neckY:-.43};for(let vt of[-1,1]){let k=Wt(vt,[vt*.405,.96,.045],.31,.108,F,F,"mitten");k.rotation.z=vt*.075;let ht=new Pe;ht.name=vt<0?"leg-left":"leg-right",ht.position.set(vt*.165,.09,.015),l.add(ht),Z(ht,Yr([[0,.155,-.025],[0,.09,.008],[0,.018,.045]],.075,.9),F,[0,0,0],[1,1,1],!0,"meta-short-leg"),ut(ht,[0,-.012,.092],[.142,.106,.185],F,!0,"meta-foot"),v.push(ht)}}function tt(){let f=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"||o?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",I=D(t.colors.skin,f),U=D(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),O=D(qs(t.colors.clothing,.52),"fabric"),N=D("#EEE8DF","rubber");d.position.set(0,o?.82:.86,0),u.position.set(0,o?2.02:1.96,.015),o&&d.scale.set(.86,.82,.92),ut(d,[0,0,0],[.56*T,.66,.36],U,!0,"sweater-body"),ut(d,[0,.51,0],[.21,.24,.21],I,!1,"neck");let V=t.faceShape||"round",X=y("human-face-"+V,()=>{let st=new Bn(1,64,44),lt=st.attributes.position,vt=V==="oval"?.53:V==="soft-square"?.565:.558,k=V==="oval"?.665:.626;for(let ht=0;ht<lt.count;ht++){let ot=lt.getX(ht),St=lt.getY(ht),Mt=lt.getZ(ht),K=Se.smoothstep(St,-.88,.01),Tt=1+.022*Math.exp(-(((St+.13)/.29)**2)),Et=(V==="soft-square"?.91+.09*K:.865+.135*K)*Tt,Xt=V==="soft-square"?Math.sign(ot)*Math.abs(ot)**.93:ot;lt.setXYZ(ht,Xt*vt*Et,St*k,Mt*.555+(Mt>0?.012*Math.exp(-(((St+.18)/.3)**2)):0))}return st.computeVertexNormals(),st.computeBoundingBox(),st.computeBoundingSphere(),st}),rt=Z(u,X,I,[0,0,0],[1,1,1],f==="fabric","human-face");Rt(rt,(st,lt)=>{let vt=Math.exp(-(((Math.abs(st.x)-.325)/.077)**2)-((st.y+.126)/.053)**2)*Se.smoothstep(st.z,.3,.42)*.095;lt.copy(I.color).lerp(new jt("#D8797F"),vt)}),w=[rt];for(let st of[-1,1]){qt(st,"round",[st*.552,-.045,.025],[.1,.14,.09],I,cn(t.colors.skin,"#B96762",.15));let lt=o?.31:.42,vt=o?1.2:1.285;Wt(st,[st*lt*T,vt,-.012],o?.68:.755,o?.14:.153,U,I,"hand"),Jt(st,st*.235*T,.16,.065,[.19,.16,.25],N),ut(d,[st*.24,-.44,0],[.19,.36,.205],O,!1,"trouser-leg")}let mt=D(qs(t.colors.clothing,.9),U.name),j=new Gi(.211,.048,9,48),dt=Z(d,j,mt,[0,.53,.005],[1,1,1]);dt.rotation.x=Math.PI/2;let xt=t.outfit||"sweater";if(xt==="hoodie"){let st=ut(d,[0,.44,-.18],[.35,.31,.21],U,!0,"hood");for(let lt of[-1,1])_t(d,[[lt*.13,.49,.225],[lt*.16,.23,.354],[lt*.145,.05,.363]],.011,D("#DAD6CC","fabric"),14);_t(d,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,mt,18)}else if(xt==="cardigan"||xt==="shirt"){_t(d,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,mt,20);for(let st=0;st<4;st++)ut(d,[.03,.27-st*.18,.36-Math.abs(.1-st*.13)*.1],[.025,.025,.013],D("#D5C9B3","rubber"),!1,"button");for(let st of[-1,1]){let lt=ut(d,[st*.15,.44,.25],[.095,.15,.036],mt,!1,"collar");lt.rotation.z=st*.55}}else for(let st of[-.43,-.47,-.51])_t(d,[[-.34,st,.22],[0,st-.025,.301],[.34,st,.22]],.012,mt,24);E=o?{eyeX:.222,eyeY:.035,mouthY:-.245,size:.92,neckY:-.67}:{eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67},J()}function J(){let f=t.hair||"short-curly",I=f==="short-curly",U=o&&f==="short",O=!U&&(t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material)),N=O?"fiber":"hair",V=U?[D(cn(t.colors.hair,"#34251F",.1),N),D(t.colors.hair,N),D(cn(t.colors.hair,"#C39879",.14),N)]:[D(qs(t.colors.hair,.915),N),D(t.colors.hair,N),D(cn(t.colors.hair,"#C4A188",.045),N)],X=t.faceShape==="oval",rt=X?.559:.588,mt=X?.71:.675,j=.574,dt=At=>new B(At.x/(rt*rt),(At.y-.018)/(mt*mt),At.z/(j*j)).normalize(),xt=(At,It,wt=0)=>{let Ct=new B(Math.sin(At)*Math.sin(It)*rt,Math.cos(At)*mt+.018,Math.sin(At)*Math.cos(It)*j);return Ct.addScaledVector(dt(Ct),wt)},st=At=>{if(!U)return 1.12+(1-Math.cos(At))*.56+(I?.032*Math.sin(At*7+.6):.01*Math.sin(At*2));let It=Math.atan2(Math.sin(At),Math.cos(At)),wt=Math.exp(-(((Math.abs(It)-.82)/.2)**2));return 1.12+(1-Math.cos(At))*.56+.018*Math.sin(It*2.4+.5)-.085*wt},lt=[],vt=[],k=[],ht=36,ot=96;for(let At=0;At<=ht+1;At++)for(let It=0;It<=ot;It++){let wt=It/ot*He,Ct=Math.min(1,At/ht)*st(wt),kt=At>ht?-.055:I?.018+.004*Math.sin(Ct*8+Math.sin(wt*3))**2:U?.01:.016,Lt=xt(Ct,wt,kt);if(lt.push(Lt.x,Lt.y,Lt.z),vt.push(It/ot,At/ht),At<=ht&&It<ot){let Qt=At*(ot+1)+It,Nt=Qt+ot+1;k.push(Qt,Nt,Qt+1,Qt+1,Nt,Nt+1)}}let St=new be;St.setAttribute("position",new ie(lt,3)),St.setAttribute("uv",new ie(vt,2)),St.setIndex(k),St.computeVertexNormals();let Mt=Z(u,St,V[0],[0,0,0],[1,1,1],O,"hair-foundation");U&&(Mt.userData.skipProceduralPile=!0);let K=[[],[],[]],Tt=[[],[],[]],Et=0,Xt=(At,It=.002,wt=null)=>{let Ct=new fn(At,!1,"centripetal"),kt=new zn(Ct,Math.max(12,At.length),It,3,!1);if(I){let Lt=kt.attributes.position,Qt=kt.attributes.normal;for(let Nt=0;Nt<Lt.count;Nt++){let ae=dt(new B(Lt.getX(Nt),Lt.getY(Nt),Lt.getZ(Nt)));Qt.setXYZ(Nt,ae.x,ae.y,ae.z)}}K[wt??Et++%3].push(kt)};if(I&&O){let At=(wt,Ct,kt,Lt=!1)=>{let Qt=xt(wt,Ct,.035),Nt=dt(Qt),ae=new B().crossVectors(Iu,Nt).normalize();ae.lengthSq()<.01&&ae.set(1,0,0);let ge=new B().crossVectors(Nt,ae).normalize(),we=(Lt?.051:.062)+fe(kt+7)*.016,Ae=[];for(let ye=0;ye<=36;ye++){let Le=ye/36,Ge=Le*He*(1.2+fe(kt+9)*.22)+kt*.7,We=we*(1-.38*Le);Ae.push(Qt.clone().addScaledVector(ae,Math.cos(Ge)*We).addScaledVector(ge,Math.sin(Ge)*We).addScaledVector(Nt,.012+.028*Math.sin(Le*Math.PI)))}let Ee=new zn(new fn(Ae),42,.013+fe(kt+3)*.004,6,!1);Tt[kt%7===0?2:kt%5===0?0:1].push(Ee)},It=1;for(let[wt,Ct,kt]of[[.13,3,0],[.38,9,.2],[.65,13,0],[.91,17,.13],[1.17,20,0],[1.47,19,.12],[1.77,16,0],[2.02,13,.12]])for(let Lt=0;Lt<Ct;Lt++){let Qt=Lt/Ct*He+kt;wt>st(Qt)+.01||At(wt+(fe(It+20)-.5)*.07,Qt,It++)}for(let wt=0;wt<10;wt++)At(1.09+(fe(wt+82)-.5)*.12,(wt-4.5)*.19,120+wt,!0)}else if(I||U){let At=(Lt,Qt,Nt,ae=!1)=>{let ge=U?(ae?.036:.038)+fe(Nt+44)*.018:(ae?.051:.053)+fe(Nt+44)*.011,we=U?.023+fe(Nt+51)*.01:.02+fe(Nt+51)*.006,Ae=U?.024+fe(Nt+64)*.017:.023+fe(Nt+64)*.012,Ee=ae?U?.31+fe(Nt+12)*.09:.35:Math.max(.055,Lt-.3),ye=ae?U?1.08+fe(Nt+8)*.2:1.115+fe(Nt+8)*.14:Math.min(st(Qt)+.035,Lt+(U?.29+fe(Nt+8)*.21:.39)),Le=U?-.24+fe(Nt+29)*.14:0,Ge=U?.31+fe(Nt+30)*.13:0,We=U?.035+fe(Nt+31)*.035:.033,on=fe(Nt+32)*He,L=U?.014+fe(Nt+33)*.012:.01,Q=[],at=24;for(let Ht=0;Ht<=at;Ht++){let Dt=Ht/at,ne=Se.lerp(Ee,ye,Dt)-Math.max(0,Dt-.82)**2*.55+Math.sin(Dt*Math.PI*2.25+on)*L,ce=U?Le+Dt*Ge+Math.sin(Dt*Math.PI*2+on)*We:(1-Dt)*-.3+Math.sin(Dt*Math.PI*2.75+fe(Nt+9)*.35)*.095+Math.max(0,Dt-.67)**2*.7,ee=.006+Math.sin(Dt*Math.PI)*Ae+(U?Math.sin(Dt*Math.PI*2+on)*.004*Math.sin(Dt*Math.PI):0);Q.push(xt(ne,Qt+ce,ee))}let ft=new fn(Q,!1,"centripetal"),nt=(Ht,Dt,ne=0)=>{let ce=ft.getPoint(Ht),ee=dt(ce),oe=ft.getTangent(Ht).normalize(),le=new B().crossVectors(ee,oe).normalize(),te=Math.min(1,Math.sqrt(Math.max(0,Ht/.11)),Math.sqrt(Math.max(0,(1-Ht)/.14)))*(.97-.15*Ht),_e=ge*te*Dt,he=we*te*Math.sqrt(Math.max(0,1-Dt*Dt));return ce.addScaledVector(le,_e).addScaledVector(ee,he+ne)},Pt=[],Ot=[],$t=[],Vt=12;for(let Ht=0;Ht<=at;Ht++)for(let Dt=0;Dt<=Vt;Dt++){let ne=Ht/at,ce=Dt/Vt*He,ee=ft.getPoint(ne),oe=dt(ee),le=ft.getTangent(ne).normalize(),te=new B().crossVectors(oe,le).normalize(),_e=Math.min(1,Math.sqrt(Math.max(0,ne/.11)),Math.sqrt(Math.max(0,(1-ne)/.14)))*(.97-.15*ne);if(ee.addScaledVector(te,Math.cos(ce)*ge*_e).addScaledVector(oe,Math.sin(ce)*we*_e),Pt.push(ee.x,ee.y,ee.z),Ot.push(Dt/Vt,ne),Ht<at&&Dt<Vt){let he=Ht*(Vt+1)+Dt,Ne=he+Vt+1;$t.push(he,he+1,Ne,he+1,Ne+1,Ne)}}let Kt=new be;Kt.setAttribute("position",new ie(Pt,3)),Kt.setAttribute("uv",new ie(Ot,2)),Kt.setIndex($t),Kt.computeVertexNormals(),Tt[Nt%9===0?0:1].push(Kt);for(let Ht=0;Ht<(U?5:9);Ht++){let Dt=(Ht/(U?4:8)*2-1)*.94,ne=[];for(let ce=0;ce<=14;ce++){let ee=.032+ce/14*.938,oe=Math.sin(ee*Math.PI*1.1+Nt)*.035;ne.push(nt(ee,es(Dt+oe,-.97,.97),.0011))}Xt(ne,U?.0019+fe(Nt*17+Ht)*55e-5:.0011+fe(Nt*17+Ht)*5e-4,Ht%6===0?2:Ht%5===0?0:1)}if(Nt%5===0){let Ht=[];for(let Dt=0;Dt<=12;Dt++){let ne=.17+Dt/12*.68;Ht.push(nt(ne,.78,.004+Math.sin(Dt/12*Math.PI)*.009))}Xt(Ht,U?.0022:.0011,2)}},It=1,wt=U?[[.27,5,.1],[.61,8,.18],[.96,12,.02],[1.32,13,.15],[1.67,11,.04]]:[[.29,5,.1],[.65,8,.19],[1.03,11,0],[1.43,10,.21],[1.81,9,.05]];for(let[Lt,Qt,Nt]of wt)for(let ae=0;ae<Qt;ae++){let ge=ae/Qt*He+Nt+(U?(fe(It+34)-.5)*.08:0);Lt>st(ge)-.07||At(Lt+(fe(It+18)-.5)*.05,ge,It++)}let Ct=U?7:9,kt=(Ct-1)/2;for(let Lt=0;Lt<Ct;Lt++){let Qt=U?(Lt-kt)*.255+(fe(Lt+54)-.5)*.09:(Lt-4)*.21+(fe(Lt+54)-.5)*.065,Nt=1.015+(fe(Lt+88)-.5)*.09;At(Nt,Qt,70+Lt,!0)}for(let Lt=0;Lt<72;Lt++){let Qt=Lt*2.399963,Nt=.1+fe(Lt+8)*1.6,ae=Math.min(st(Qt)-.015,Nt+.25+fe(Lt+16)*.2);if(ae<=Nt)continue;let ge=[];for(let we=0;we<=12;we++){let Ae=we/12;ge.push(xt(Se.lerp(Nt,ae,Ae),Qt+Math.sin(Ae*Math.PI)*.11,.025))}Xt(ge,.0013,Lt%3)}}else for(let At=0;At<220;At++){let It=At*2.399963,wt=.06+fe(At)*1,Ct=Math.min(st(It),wt+.44+fe(At+9)*.5),kt=[];for(let Lt=0;Lt<13;Lt++){let Qt=Lt/12,Nt=Se.lerp(wt,Ct,Qt),ae=(1-Qt)*.21*(Math.cos(It)+.4);kt.push(xt(Nt,It+ae,.015+Math.sin(Qt*Math.PI)*.014))}Xt(kt,.0027+fe(At+17)*.0015)}if(["bob","long","wavy"].includes(f)){let At=f==="bob"?.4:.9,It=[];for(let wt of[-1,1])It.push({center:[wt*.46,-.31-At*.22,-.09],size:[.17,At*.6,.24],name:"hair-side-foundation"});It.push({center:[0,-.31-At*.27,-.33],size:[.45,At*.57,.15],name:"hair-back-foundation"});for(let[wt,Ct]of It.entries()){ut(u,Ct.center,Ct.size,V[0],!1,Ct.name);for(let kt=0;kt<44;kt++){let Lt=kt/44*He,Qt=[];for(let Nt=0;Nt<=20;Nt++){let ae=Nt/20,ge=.12+ae*2.82,we=Lt+(f==="wavy"?Math.sin(ae*He*1.1)*.2:Math.sin(ae*Math.PI)*.045),Ae=new B(Math.sin(ge)*Math.sin(we)/Ct.size[0],Math.cos(ge)/Ct.size[1],Math.sin(ge)*Math.cos(we)/Ct.size[2]).normalize();Qt.push(new B(Ct.center[0]+Math.sin(ge)*Math.sin(we)*Ct.size[0],Ct.center[1]+Math.cos(ge)*Ct.size[1],Ct.center[2]+Math.sin(ge)*Math.cos(we)*Ct.size[2]).addScaledVector(Ae,.0013))}Xt(Qt,.00135,(kt+wt)%3)}}}if(f==="ponytail"||f==="bun"){let At=f==="bun",It=new B(At?0:.17,At?.56:.04,At?-.28:-.57);At?ut(u,It.toArray(),[.235,.23,.23],V[0],!1,"bun-foundation"):_t(u,[[0,.4,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,V[0],28);for(let wt=0;wt<88;wt++){let Ct=wt/88*He,kt=[];for(let Lt=0;Lt<18;Lt++){let Qt=Lt/17;if(At){let Nt=Qt*He*1.08;kt.push(It.clone().add(new B(Math.cos(Nt)*Math.sin(Ct)*.242,Math.sin(Nt)*.233,Math.cos(Nt)*Math.cos(Ct)*.238)))}else kt.push(new B(.025+Qt*.32+Math.sin(Ct)*(.1*(1-Qt)+.025),.39-Qt*.99,-.4-Math.sin(Qt*Math.PI)*.25+Math.cos(Ct)*(.1*(1-Qt)+.025)))}Xt(kt,.004)}}if(f==="braids")for(let At of[-1,1]){Z(u,Yr([[At*.56,.015,-.045],[At*.535,-.09,-.005],[At*.49,-.21,.055]],.09,.9),V[0],[0,0,0],[1,1,1],!1,"braid-root");for(let It=0;It<3;It++){let wt=[];for(let Ct=0;Ct<40;Ct++){let kt=Ct/39,Lt=kt*He*3.1+It/3*He;wt.push([At*(.49+.015*Math.sin(kt*Math.PI))+Math.cos(Lt)*.035,-.14-kt*.81,.055+Math.sin(Lt)*.035])}Z(u,Yr(wt,.038,.86),V[It],[0,0,0],[1,1,1],!1,"braid-plait")}ut(u,[At*.49,-.902,.055],[.071,.027,.062],D(cn(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}Tt.forEach((At,It)=>{if(At.length){let wt=Z(u,Sl(At),V[It],[0,0,0],[1,1,1],O,"hair-curl-volume");U&&(wt.userData.skipProceduralPile=!0)}}),K.forEach((At,It)=>{if(At.length){let wt=U?cn(V[It].color,["#473026","#79533D","#CEA585"][It],.23):cn(V[It].color,t.colors.hair,.7),Ct=new yn({color:wt,roughness:O?.96:.76});Ct.name=O?"fiber-detail":"hair-detail";let kt=Z(u,Sl(At),Ct,[0,0,0],[1,1,1],!1,"hair-strands");kt.castShadow=!1,kt.receiveShadow=!1}})}function et(f){let I={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},U=a&&f==="shiba",[O,N,V,X,rt,mt,j]=U?[.67,.58,.53,.57,.67,.5,1.59]:I[f],dt={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[f],xt=(1-dt)*1.3+.065;d.position.set(0,rt*dt+.12,-.11),u.position.set(0,j-xt,.12);let st=f==="penguin"?$:F,lt=["penguin","owl"].includes(f),vt=U?"animal-seated-shiba-baseline-v1":"animal-seated-"+f,k=U?"shiba-body-baseline-v1":"animal-seated-r4-"+f,ht=lt?ut(d,[0,0,0],[X*T,rt*dt,mt],st,!0,"animal-torso"):Z(d,y(vt,()=>Qn(k,[[0,0,0,X,rt*dt,mt],[-X*.6,-rt*dt*.4,.025,X*.49,rt*dt*.59,mt*.71],[X*.6,-rt*dt*.4,.025,X*.49,rt*dt*.59,mt*.71]],U?.17:.13)),st,[0,0,0],[T,1,1],!0,"animal-torso"),ot;f==="shiba"?ot=Z(u,y(U?"shiba-baseline-soft-face":"shiba-soft-face",()=>Qn(U?"shiba-face-baseline-v1":"shiba-face-r4",[[0,0,0,O,N,V],[0,-.2,.365,U?.425:.435,U?.245:.257,U?.26:.265]],.2)),F,[0,0,0],[1,1,1],!0,"animal-head"):f==="capybara"?ot=Gt(u,"capybara-skull",Du("roundedcube"),.85,[0,0,0],[O,N,V/.85],F,!0):ot=ut(u,[0,0,0],[O,N,V],st,!0,"animal-head"),w=[ot],["axolotl","capybara","hedgehog","panda"].includes(f)||Rt(ht,(K,Tt)=>{let Et=(K.x/(X*.68*T))**2+((K.y+.06)/(rt*dt*.86))**2,Xt=(1-Se.smoothstep(Et,.9,1.035))*Se.smoothstep(K.z,mt*.26,mt*.67);Tt.copy(st.color).lerp(W.color,Xt)}),E={eyeX:O*.44,eyeY:.07,mouthY:-N*.43,size:.72,neckY:-N*.85};let St=V*.78,Mt=cn(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(f)){let K=f==="fox"?[.19,.155,.26]:f==="hedgehog"?[.215,.16,.29]:f==="shiba"?[.22,.18,.19]:f==="bear"?[.21,.18,.19]:[.16,.13,.155];if(f==="shiba")Rt(ot,(Et,Xt)=>{let zt=(Et.x/.565)**2+((Et.y+.225)/.358)**2,At=(1-Se.smoothstep(zt,.94,1.055))*Se.smoothstep(Et.z,.08,.3);for(let It of[-1,1]){let wt=((Et.x-It*.265)/.061)**2+((Et.y-.238)/.045)**2;At=Math.max(At,(1-Se.smoothstep(wt,.68,1.04))*Se.smoothstep(Et.z,.25,.37))}Xt.copy(F.color).lerp(W.color,At)});else for(let Et of[-1,1])bt([Et*K[0]*.54,-N*.31,St],K,f==="panda"?F:W);let Tt=f==="shiba"?.635:St+K[2]*.89;if(ut(u,[0,-N*.27,Tt],[f==="rabbit"?.043:f==="shiba"?.065:.07,.042,.035],f==="rabbit"?D(Mt,"nose"):it,!1,"nose"),f==="cat")for(let Et of[-1,1])for(let Xt=0;Xt<3;Xt++)_t(u,[[Et*.2,-.2+Xt*.025,St+.14],[Et*.42,-.21+Xt*.05,St+.13],[Et*.62,-.23+Xt*.083,St+.02]],.0045,D(cn(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(f))for(let K of[-1,1])qt(K,"triangle",[K*O*.69,N*.75,-.035],[f==="fox"||f==="shiba"?.3:.25,f==="fox"?.39:f==="shiba"?.3:.28,.43],F,Mt);else if(f==="rabbit")for(let K of[-1,1])qt(K,"long",[K*.235,.61,-.055],[.14,.51,.11],F,Mt);else if(["panda","bear","otter","capybara"].includes(f))for(let K of[-1,1])qt(K,"round",[K*O*.74,N*.72,-.035],f==="otter"?[.105,.12,.09]:f==="capybara"?[.13,.135,.095]:[.205,.205,.13],f==="panda"?$:F,Mt);if(f==="panda")for(let K of[-1,1]){let Tt=ut(u,[K*.285,.07,V*.86],[.16,.2,.06],$,!1,"eye-patch");Tt.rotation.z=-K*.24,w.push(Tt)}if(f==="capybara"){bt([0,-.16,.38],[.43,.28,.4],F),E={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let K of[-1,1])ut(u,[K*.125,-.145,.768],[.038,.027,.013],it,!1,"nostril")}if(f==="axolotl"){let K=D(cn(t.colors.body,"#DD7695",.58));for(let Tt of[-1,1])for(let Et=0;Et<3;Et++){let Xt=[Tt*.62,.18-Et*.15,-.06],zt=[Tt*(1+(Et===1?.09:0)),.45-Et*.35,-.08];_t(u,[Xt,[Tt*.85,(Xt[1]+zt[1])*.5,.02],zt],.041,K,18);for(let At=0;At<4;At++){let It=.37+At*.17,wt=Se.lerp(Xt[0],zt[0],It),Ct=Se.lerp(Xt[1],zt[1],It);for(let kt of[-1,1])_t(u,[[wt,Ct,-.055],[wt+Tt*.055,Ct+kt*.085,.01],[wt+Tt*.06,Ct+kt*.105,-.018]],.018,K,8)}}E={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}for(let K of[-1,1]){if(lt){let Et=f==="penguin"?1.07:.99,Xt=Wt(K,[K*X*.82*T,Et,-.04],.46,.135,st,st,"wing-tip");Xt.rotation.z=K*.13,Xt.scale.z=.64,b[K<0?0:1]=ts([K*(X*.82*T+.025),Et-.445,.055])}else{let Et=Math.min(.8,j-xt-.54),Xt=["rabbit","axolotl","hedgehog"].includes(f),zt=Xt?.122:f==="bear"||f==="panda"?.164:.149;Wt(K,[K*X*.57*T,Et,.155],Math.max(.23,Et-(Xt?.23:.245)),zt,f==="panda"?$:F,f==="shiba"?W:F)}let Tt=Jt(K,K*X*(lt?.6:.8)*T,lt?.1:.112,lt?.2:.015,[lt?.18:.165,lt?.1:.112,lt?.225:.2],lt?D("#D8A34D","rubber"):f==="panda"?$:F);if(!lt)for(let Et=0;Et<2;Et++)_t(Tt,[[-.05+Et*.095,.026,.165],[-.05+Et*.095,.067,.146]],.0035,D(cn(t.colors.body,t.colors.eyes,.1)),6)}if(f==="shiba")ct([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),ut(A,[.65,.65,-.18],[.125,.115,.12],W,!0,"tail-tip");else if(f==="cat")ct([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(f==="fox"){ct([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let K=ut(A,[1.14,.9,-.15],[.2,.32,.21],W,!0,"white-tail-tip");K.rotation.z=-.36}else if(f==="rabbit")A=new Pe,l.add(A),ut(A,[.46,.41,-.41],[.24,.24,.23],W,!0,"cotton-tail");else if(f==="hedgehog")ct([[.25,.24,-.35],[.52,.18,-.38],[.7,.17,-.28]],.08);else if(["otter","axolotl"].includes(f)){if(ct([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],f==="axolotl"?.13:.14),f==="axolotl"){let K=ut(A,[.78,.31,-.6],[.41,.23,.055],D(cn(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");K.rotation.y=-.7}}else A=new Pe,l.add(A),ut(A,[.45,.4,-.43],[.135,.14,.13],st,!0,"short-tail");if(lt){if(f==="owl")for(let Tt of[-1,1]){let Et=ut(u,[Tt*.235,.055,.38],[.255,.3,.11],W,!0,"facial-disc");w.push(Et),qt(Tt,"triangle",[Tt*.39,.43,-.055],[.2,.23,.29],F,null)}let K=Gt(u,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[f==="penguin"?.155:.09,.115,.12],D("#D8A34D","rubber"),!1);w.push(K),E.mouthY=-.26,E.size=f==="owl"?1.05:.85}if(f==="hedgehog"){let K=[];for(let Tt=0;Tt<110;Tt++){let Et=Tt*2.399963,Xt=.15+fe(Tt)*.93,zt=Math.sqrt(Math.max(0,1-Xt*Xt)),At=new B(Math.sin(Et)*zt,Xt,Math.cos(Et)*zt);if(At.z>.32)continue;let It=new B(At.x*.69*T,At.y*.61+.71,At.z*.58-.13),wt=new Sr(.041,.22,6,1);wt.translate(0,.075,0),wt.applyQuaternion(new je().setFromUnitVectors(Iu,At)),wt.translate(It.x,It.y,It.z),K.push(wt)}Z(l,Sl(K),D(qs(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function yt(f,I){let U=new kn(new B(f,I,4),new B(0,0,-1)),O=-1/0;for(let N of w){N.updateMatrix();let V=new Me(N.geometry,N.material);V.matrixWorld.copy(N.matrix);let X=U.intersectObject(V,!1);X.length&&(O=Math.max(O,X[0].point.z))}return Number.isFinite(O)?O:.4}function gt(f,I,U=Y,O="face-line"){return _t(p,f.map(([N,V])=>[N,V,yt(N,V)+.022]),I,U,24,!1,O)}function C(){let f=t.expression,I=es(Number(t.eyeScale)||1,.45,1.8)*E.size,U=es(Number(t.eyeSpacing)||1,.6,1.6),O=E.eyeX*U,N={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]},[V,X]=N[t.eyes]||N.softOval,rt=f==="closed",mt={deadpan:.35,tearful:1.08,expectant:1.16,panicked:1.43,sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[f]??1;for(let xt of[-1,1]){let st=xt*O,lt=E.eyeY+(["curious","skeptical"].includes(f)&&xt>0?.025:0),vt=yt(st,lt),k=rt||f==="wink"&&xt>0||["delighted","laughing"].includes(f),ht=mt*(f==="skeptical"&&xt<0?.52:f==="panicked"&&xt>0?.84:1),ot=.012,St=(yt(st+ot,lt)-yt(st-ot,lt))/(ot*2),Mt=(yt(st,lt+ot)-yt(st,lt-ot))/(ot*2),K=new B(-St,-Mt,1).normalize(),Tt=.009;for(let At of[-1,0,1])for(let It of[-1,0,1]){let wt=At*V*I,Ct=It*X*I*ht;Tt=Math.max(Tt,yt(st+wt,lt+Ct)-vt-St*wt-Mt*Ct+.006)}let Et=new Pe;Et.name=xt<0?"eye-left":"eye-right",Et.position.set(st,lt,vt+Tt),p.add(Et),g.push(Et),Et.userData.restScaleY=1,Et.quaternion.setFromUnitVectors(new B(0,0,1),K);let Xt=r&&t.shape==="sphere"&&t.eyes==="capsule",zt=["sad","shy","worried","tearful"].includes(f)?xt*.15:f==="angry"?-xt*.24:f==="happy"?xt*.06:f==="focused"?-xt*.09:f==="proud"?xt*.09:t.eyes==="softOval"&&t.family==="dots"?.13:0;if(Et.rotateZ(Xt?.42:zt),k)_t(Et,[[-V*I,0,0],[0,(f==="laughing"?.07:f==="delighted"?.043:-.021)*I,.01],[V*I,0,0]],.013*I,Y,18,!1,["delighted","laughing"].includes(f)?"delighted-lid":"closed-lid");else{let At=D("#FCFCF5","eye"),It=D("#FFFFFF","eye");if(t.shape==="human"&&["sparkle","glossy"].includes(t.eyes)&&ut(Et,[0,0,-.008],[V*I*1.15,X*I*ht*1.09,.013],D("#E8D9BE","rubber"),!1,"doll-eye-rim"),t.shape==="frog"&&!["oval","side"].includes(t.eyes)&&ut(Et,[0,0,-.073],[V*I*2.35,X*I*1.47,.098],D("#F8FFE8","rubber"),!1,"frog-eye-white"),(t.eyes==="sleepy"||f==="deadpan")&&!["focused","surprised","excited"].includes(f)&&!["work","read","camera"].includes(t.action)?(ut(Et,[0,-X*.29*I,.003],[V*.44*I,X*.57*I,.023],Y,!1,"eye"),_t(Et,[[-V*I,X*.12*I,.006],[0,X*.16*I,.011],[V*I,X*.12*I,.006]],.023*I,Y,16,!1,"sleepy-upper-lid")):t.eyes==="capsule"?Z(Et,y("capsule-eye",()=>new Mr(1,2.8,6,20)),Y,[0,0,0],[V*I,X*I*ht/2.4,.021],!1,"eye"):ut(Et,[0,0,0],[V*I,X*I*ht,.022],["oval","side"].includes(t.eyes)?At:Y,!1,"eye"),["oval","side"].includes(t.eyes)){let wt=["work","read","camera"].includes(t.action),Ct=t.eyes==="side"&&!wt?-.03*I:f==="thinking"?.019*I:0;ut(Et,[Ct,wt?-.02*I:["proud","expectant"].includes(f)?.025*I:0,.021],[V*(t.eyes==="side"?.74:.58)*I,X*(t.eyes==="side"?.74:.7)*I*ht,.017],Y,!1,"pupil")}if(t.eyes==="lash"&&_t(Et,[[xt*V*.5*I,X*.17*I,.009],[xt*V*1.12*I,X*.1*I,.004],[xt*V*1.72*I,X*.31*I,-.005]],.012*I,Y,14,!1,"outer-lash"),t.eyes==="star"){let wt=y("star-reflection",()=>{let Lt=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];return new Vi(new Dn(Lt.map(([Qt,Nt])=>new Ut(Qt,Nt))))}),Ct=Z(Et,wt,It,[-V*.11*I,X*.29*I*ht,.027],[I,I,I],!1,"star-catchlight");Ct.castShadow=!1,Ct.receiveShadow=!1;let kt=Z(Et,y("star-reflection-dot",()=>new br(1,12)),It,[V*.36*I,-X*.37*I*ht,.026],[.01*I,.01*I,1],!1,"catchlight-dot");kt.castShadow=!1,kt.receiveShadow=!1}else if(["sparkle","glossy","oval"].includes(t.eyes)){let wt=ut(Et,[-V*.29*I,X*.35*I*ht,.027],[.018*I,.02*I,.006],It,!1,"catchlight");wt.castShadow=!1,wt.receiveShadow=!1,t.eyes==="sparkle"&&wt.scale.multiplyScalar(.76),t.eyes==="glossy"&&ut(Et,[V*.35*I,-X*.34*I*ht,.025],[.008*I,.008*I,.004],It,!1,"catchlight-small")}if(t.shape==="frog"&&Et.children.some(wt=>wt.name==="frog-eye-white"))for(let wt of Et.children)wt.name!=="frog-eye-white"&&(wt.position.z+=.02)}if(t.brows!=="none"){let At=lt+X*I*ht+.073,It=(t.brows==="curious"||f==="skeptical")&&xt>0?.047:0,wt=f==="angry"?-xt*.048:f==="worried"||t.brows==="angled"?xt*.045:t.brows==="straight"?0:t.brows==="curious"?xt*.014:.006;gt([[st-.09*I,At+It-wt],[st,At+It+(t.brows==="straight"?0:t.shape==="human"?.012:.025)],[st+.09*I,At+It+wt]],.01*I,D(t.shape==="human"?cn(t.colors.hair,t.colors.eyes,.24):cn(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let j=E.mouthY,dt=.103*E.size;if(t.mouth==="smile"&&f!=="laughing"){let xt=["sad","worried","angry"].includes(f),st=["skeptical","confident","proud"].includes(f),lt=Array.from({length:13},(vt,k)=>{let ht=k/12,ot=(ht*2-1)*dt,St=(xt?-.031:.039)*(2*ht-1)**2;return[ot,j+(xt?.023:-.027)+St+(st?ht*.024:0)]});gt(lt,t.shape==="human"?.0085:.01,t.shape==="human"?D(cn(t.colors.skin,"#684538",.7),"matteEye"):Y,xt?"frown":"smile")}else if(t.mouth==="pout")gt([[-dt*.68,j-.014],[0,j+.02],[dt*.68,j-.014]],.013,Y,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"||t.mouth!=="none"&&f==="laughing"){let xt=t.mouth==="laugh"||f==="laughing";ut(p,[0,j,yt(0,j)+.019],[dt*(xt?1.16:.42),dt*(xt?.93:.51),.024],Y,!1,"mouth"),xt&&ut(p,[0,j-.043,yt(0,j)+.041],[dt*.62,.032,.012],D("#D98C91","skin"),!1,"tongue")}if(t.expressionAccents&&["tearful","panicked"].includes(f)){let xt=D("#8BD6F4","eye"),st=f==="tearful"?[-1,1]:[1];for(let lt of st){let vt=lt*(O+.085),k=E.eyeY-(f==="tearful"?.19:-.14),ht=ut(p,[vt,k,yt(vt,k)+.025],[.025,.056,.018],xt,!1,"expression-drop");ht.rotation.z=-lt*.15}}if(t.shape==="human"&&ut(p,[0,-.095,yt(0,-.095)+.006],[.033,.044,.025],D(cn(t.colors.skin,"#C29076",.05),"skin"),!1,"nose"),t.shape!=="human"&&["shy","happy","excited","laughing"].includes(f))for(let xt of[-1,1]){let st=xt*O*1.32,lt=E.eyeY-.17,vt=D(cn(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");ut(p,[st,lt,yt(st,lt)+.008],[.085*E.size,.033*E.size,.009],vt,!1,"cheek")}}}var re=i=>new B(...i),Ei=(i,t,e)=>Math.max(t,Math.min(e,i)),De=(i,t={})=>new yn({color:i,roughness:.78,...t});function Be(i,t,e,n=[0,0,0]){let s=new Me(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function ns(i,t,e=[0,0,0]){let n=new Pe;return n.name=t,n.position.fromArray(e),i.add(n),n}function Ve(i,t,e,n=[0,0,0]){let s=Be(i,new Bn(1,24,16),e,n);return s.scale.fromArray(t),s}function Ou(i,t,e){let n=new Dn,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function ln(i,t,e,n=[0,0,0],s=.025){let[r,o,a]=t,h=Math.min(s*.35,a*.25,o*.15),l=new Hi(Ou(r-h*2,o-h*2,s),{depth:Math.max(.001,a-h*2),bevelEnabled:!0,bevelSize:h,bevelThickness:h,bevelSegments:3,curveSegments:8,steps:1});return l.translate(0,0,-(a-h*2)/2),Be(i,l,e,n)}function Rn(i,t,e,n,s=!1){let r=new fn(t.map(re),s,"centripetal");return Be(i,new zn(r,Math.max(20,t.length*4),e,8,s),n)}function X1(i,t,e,n){let s=new Ps;for(let r=1;r<t.length;r++)s.add(new Is(re(t[r-1]),re(t[r])));return Be(i,new zn(s,Math.max(32,t.length*8),e,8,!1),n)}function $a(i,t="shell"){let e=i[0].length,n=[],s=[];for(let o of i)for(let a of o)n.push(a.x,a.y,a.z);for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){let h=(a+1)%e,l=o*e+a,u=o*e+h,d=(o+1)*e+a,p=(o+1)*e+h;t==="shell"?s.push(l,d,u,u,d,p):s.push(l,u,d,u,p,d)}let r=new be;return r.setAttribute("position",new ie(n,3)),r.setIndex(s),r.computeVertexNormals(),r.computeBoundingSphere(),r}function Uu(i,t,e,n,s){let r=re(t),o=re(e),a=o.clone().sub(r),h=Be(i,new Pn(n,n,a.length(),16),s);return h.position.copy(r.add(o).multiplyScalar(.5)),h.quaternion.setFromUnitVectors(new B(0,1,0),a.normalize()),h}function Ka(i,t,e,n,s,r){return Rn(i,Array.from({length:48},(o,a)=>{let h=a/48*Math.PI*2;return[Math.cos(h)*t,n,Math.sin(h)*e]}),s,r,!0)}function wl(i,t,e,n=[0,0,0],s=.025){let r=new Dn;for(let a=0;a<10;a++){let h=Math.PI/2+a*Math.PI/5,l=t*(a%2?.46:1);a?r.lineTo(Math.cos(h)*l,Math.sin(h)*l):r.moveTo(Math.cos(h)*l,Math.sin(h)*l)}r.closePath();let o=new Hi(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return o.translate(0,0,-s/2),Be(i,o,e,n)}function Fu(i,t,e,n,s=[0,0,0]){let r=ns(i,"flower",s);for(let o=0;o<5;o++){let a=o*Math.PI*.4,h=Ve(r,[t*.47,t*.69,t*.23],e,[Math.sin(a)*t*.64,Math.cos(a)*t*.64,0]);h.rotation.z=-a}return Ve(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function Y1(i){let t=i.root,e=[],n=[],s=[];t.updateMatrixWorld(!0);let r=(p,c)=>p?.traverse(_=>{if(!(!_.isMesh||!_.geometry||!_.visible)){for(let v=_;v&&v!==p;v=v.parent)if(v===i.face)return;c.push(_)}});r(i.head||t,e),r(i.torso,n),i.face?.traverse(p=>{if(!(!p.isMesh||!p.geometry||!p.visible)){for(let c=p;c&&c!==i.face;c=c.parent)if(/^(eye-|brow|mouth|lip|cheek|expression|tear|blush)/i.test(c.name))return;/^(eye|pupil|catchlight|closed-lid|delighted-lid|outer-lash|brow|mouth|smile|cheek|expression)/i.test(p.name)||s.push(p)}});let o=e.filter(p=>!/ear|gill|muzzle|beak|facial-disc|twin-top-lobe/.test(p.name)&&p.geometry.type!=="TubeGeometry"),a=t.matrixWorld.clone().invert(),h=new ue,l=new kn,u=(i.height||3)+(i.width||3)+4;function d(p,c,_=e){l.set(re(p).applyMatrix4(t.matrixWorld),re(c).transformDirection(t.matrixWorld));let v=l.intersectObjects(_,!1)[0];if(!v)return null;let g=v.point.clone().applyMatrix4(a);h.getNormalMatrix(a.clone().multiply(v.object.matrixWorld));let m=v.face.normal.clone().applyMatrix3(h).normalize();return{point:g,normal:m,objectName:v.object.name}}return{cast:d,reach:u,top(p,c,_){return d([p,u,c],[0,-1,0])?.point.y??_},front(p,c,_,v=!1){return d([p,c,u],[0,0,-1],v?[...e,...n]:e)?.point.z??_},side(p,c,_,v=!1){return d([p*u,c,_],[-p,0,0],v?o:e)},frontHit(p,c,_=!1,v=!1){let g=_?[...e,...n,...v?s:[]]:[...o,...v?s:[]];return d([p,c,u],[0,0,-1],g)},faceHit(p,c){return d([p,c,u],[0,0,-1],[...o,...s])},ornament(p,c){return d(p,c,e.filter(_=>_.name!=="hair-strands"))},around(p,c,_=!1,v=!1){let g=re(c).normalize(),m=re(p).addScaledVector(g,u);return d(m.toArray(),g.negate().toArray(),_?[...e,...n]:v?o:e)}}}function Nu(i){return new fn(i.map(([t,e])=>new B(t,e,0)),!0,"centripetal").getPoints(64).slice(0,-1)}function q1(i){let t=[...i].sort((o,a)=>o[0]-a[0]),e=[];for(let o of t){if(e.length&&Math.abs(o[0]-e.at(-1)[0])<1e-5){if(o[1]<=e.at(-1)[1])continue;e.pop()}for(;e.length>=2;){let a=e.at(-2),h=e.at(-1);if((h[0]-a[0])*(o[1]-h[1])-(h[1]-a[1])*(o[0]-h[0])<-1e-5)break;e.pop()}e.push(o)}let n=e.length>=3?e.reverse():i,s=Math.abs(n[0][0]-n.at(-1)[0]),r=[];for(let o=0;o<n.length;o++){let a=n[o],h=n[o+1];if(r.push(a),!h)continue;let l=Math.abs(h[0]-a[0]);if(l>s*.16&&Math.abs(h[1]-a[1])<s*.025){let u=Math.min(s*.038,l*.1);for(let d=1;d<8;d++){let p=d/8;r.push([Se.lerp(a[0],h[0],p),Se.lerp(a[1],h[1],p)+Math.sin(p*Math.PI)*u,Se.lerp(a[2],h[2],p)])}}}return r}function Z1(i,{rx:t,rz:e,s:n,contact:s,center:r},o){let l=[];for(let T=0;T<16;T++){let A=T/16*Math.PI*2;l.push(s.top(r[0]+Math.cos(A)*t*.7,r[2]+Math.sin(A)*e*.7,r[1]-.16*n)-.018*n)}let u=l.reduce((T,A)=>T+A,0)/16,d=T=>{let A=(T/(Math.PI*2)*16+16)%16,w=Math.floor(A),E=A-w;return Se.lerp(l[w],l[(w+1)%16],E)},p=new fn([[0,-.08,.8],[.48,-.035,.95],[.7,0,1],[.88,.075,.75],[1,.18,.38],[.92,.33,.12],[.67,.46,0],[.3,.52,0],[0,.535,0]].map(re),!1,"catmullrom",.3),c=[],_=[],v=[],g=32;for(let T=0;T<=g;T++){let A=p.getPoint(T/g),w=Math.max(0,A.x),E=A.y,b=Ei(A.z,0,1);for(let y=0;y<=48;y++){let P=y/48*Math.PI*2,D=Math.cos(P)*t*w-.06*n*(1-w),F=Math.sin(P)*e*w,W=d(P)-u,$=.17*Math.cos(P)*t;if(c.push(r[0]+D,u+E*n+.17*D+(W-$*.7)*b,r[2]+F),_.push(y/48,T/g),T<g&&y<48){let Y=T*49+y,it=Y+48+1;v.push(Y,it,Y+1,it,it+1,Y+1)}}}let m=new be;m.setAttribute("position",new ie(c,3)),m.setAttribute("uv",new ie(_,2)),m.setIndex(v),m.computeVertexNormals();let x=Be(i,m,o);x.name="soft-beret-crown";let M=r[0]-.06*n,S=u+.535*n;Rn(i,[[M,S-.018*n,r[2]],[M+.014*n,S+.041*n,r[2]],[M+.036*n,S+.06*n,r[2]+.008*n]],.025*n,o),i.userData.contactFit={kind:"crown",samples:16,baseY:u,min:Math.min(...l),max:Math.max(...l)}}function Bu(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],o=t.shape==="human",a=t.shape==="meta-hood"||t.family==="meta-muse",h=e.userData.anatomy==="human"||o,l=e.userData.anatomy==="animal"||r.includes(t.shape),u=l&&["penguin","owl"].includes(t.shape),d=i.height||(o?2.8:l?2.5:2.1),p=i.width||2.3,c=Ei(Math.min(p/(o?1.5:l?1.8:2.3),d/(o?2.8:l?2.5:2.1)),.7,1.3),_=n.crown||n.headTop||[0,d,0],v=n.face||[0,d*.58,p*.3],g=n.neck||[0,d*(o?.49:.34),v[2]*.82],m=t.accessories||{},x=t.action||"idle",M=[],S=[],T=De(s.accessory||"#33465a"),A=De(s.secondary||"#f6ead9"),w=De("#23272d",{roughness:.58}),E=De("#e7bc72",{metalness:.24,roughness:.4}),y=(h?e.getObjectByName("hand")?.material:u?e.getObjectByName("wing-tip")?.material:null)||De(o?s.skin||"#e9bea2":s.body||"#319ceb"),P=h||u?e.getObjectByName("upper-arm")?.material||De(s.clothing||s.body||"#338c81"):y,D=De(new jt(s.accessory||"#33465a").lerp(new jt("#ffffff"),.22)),F=(pt,R)=>{let G=ns(e,pt,R);return M.push(G),G},W=(pt,R)=>re(R).applyMatrix4(pt.matrix).toArray(),$=new kn,Y=(pt,R,G)=>{e.updateMatrixWorld(!0),pt.updateWorldMatrix(!0,!0);let z=e.matrixWorld.clone().invert(),H=(o?.075:l?.095:.082)*c,q=R.map((tt,J)=>{if(!tt)return null;let et=re(G[J]).normalize(),yt=(i.height||3)+(i.width||3)+2,gt=re(tt).addScaledVector(et,yt).applyMatrix4(pt.matrixWorld),C=et.transformDirection(pt.matrixWorld).negate();$.set(gt,C);let f=$.intersectObject(pt,!0)[0];if(!f?.face)return null;let I=new ue().getNormalMatrix(z.clone().multiply(f.object.matrixWorld)),U=f.face.normal.clone().applyMatrix3(I).normalize(),O=f.point.clone().applyMatrix4(z);return{target:O.clone().addScaledVector(U,H).toArray(),surface:O.toArray(),normal:U.toArray(),object:f.object.name}});return pt.userData.handContactFits=q,q.map((tt,J)=>tt?.target||(R[J]?W(pt,R[J]):null))},it=null,Z=x==="sleep"?"none":m.prop||"none",ut={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book",holdClosedBook:"closedBook"};ut[x]&&(Z=ut[x]);let Rt=v[2]+.16*c,_t=Y1(i),Gt=(pt,R,G=.045*c)=>{let z=_t.faceHit(pt,R);if(!z)return[pt,R,_t.front(pt,R,v[2])+G];let H=z.normal.z<.05?re([0,0,1]):z.normal;return z.point.addScaledVector(H,G).toArray()},Wt=[-1,1].map(pt=>_t.side(pt,v[1],_[2])),Jt=Math.max(.35*c,...Wt.map(pt=>pt?Math.abs(pt.point.x-_[0]):p*.36)),qt=Ei(Jt*.77,.43*c,.85*c),ct=x==="listen"?"headphones":m.head||"none";if(ct!=="none"){let pt=F("head-"+ct),R=De(s.headAccessory||s.accessory||"#292A2D"),G=R.clone();if(G.roughness=1,ct==="beret")Z1(pt,{rx:qt,rz:qt*.78,s:c,contact:_t,center:[_[0]-.045*c,_[1],_[2]+.02*c]},G);else if(ct==="headphones"){let z=Math.min(_[1]-.26*c,v[1]-.23*c),H=_[2]+.015*c,q=[_[0],z,H],tt=[];for(let et=0;et<=24;et++){let yt=.055+et/24*(Math.PI-.11),gt=[Math.cos(yt),Math.sin(yt),0],C=_t.around(q,gt,!1,!0),f=C?C.point.addScaledVector(C.normal,.052*c):re(q).add(re([Math.cos(yt)*Jt,Math.sin(yt)*(_[1]-z),0]));tt.push(f.toArray())}R.roughness=.52,Rn(pt,q1(tt),.048*c,R);let J=De(new jt(s.headAccessory||s.accessory||"#292A2D").lerp(new jt("#a2a7ad"),.16),{roughness:.86});for(let et of[-1,1]){let yt=_t.side(et,z,H,!0),gt=yt?.normal||re([et,0,0]);gt.x*et<.2&&gt.set(et,.15,0).normalize();let C=yt?.point||re([_[0]+et*Jt,z,H]),f=ns(pt,"earcup-"+et,C.clone().addScaledVector(gt,.04*c).toArray());f.quaternion.setFromUnitVectors(re([1,0,0]),gt),Ve(f,[.14*c,.27*c,.198*c],w,[-.006*c,0,0]),Ve(f,[.135*c,.286*c,.22*c],R,[.09*c,0,0]);let I=Array.from({length:40},(U,O)=>{let N=O/40*Math.PI*2;return[.162*c,Math.cos(N)*.226*c,Math.sin(N)*.179*c]});Rn(f,I,.005*c,J,!0),f.userData.contactFit={kind:"side",point:C.toArray(),normal:gt.toArray()}}}else{let z=qt*(ct==="wizard"?.75:.82),H=z*.83,q=Array.from({length:12},(J,et)=>{let yt=et/12*Math.PI*2;return _t.top(_[0]+Math.cos(yt)*z*.77,_[2]+Math.sin(yt)*H*.77,_[1]-.1*c)}),tt=q.reduce((J,et)=>J+et,0)/q.length-.035*c;if(pt.position.set(_[0],tt,_[2]),ct==="tuft"){pt.position.set(_[0],_[1]-.025*c,_[2]);for(let[J,et]of[-.16,0,.16].entries()){let yt=Ve(pt,[.095*c,(J===1?.22:.17)*c,.105*c],G,[et*c,.08*c,0]);yt.rotation.z=(1-J)*.4,yt.name="tuft-lobe",yt.userData.surfaceMaterial="plush",i.surfaces?.push(yt)}}else if(ct==="pom"){pt.position.set(_[0],_[1]+.23*c,_[2]);let J=Ve(pt,[.255*c,.26*c,.255*c],G);J.name="hat-pom",J.userData.surfaceMaterial="micro",i.surfaces?.push(J)}else if(ct==="bucket"){e.updateMatrixWorld(!0);let J=e.matrixWorld.clone().invert(),et=e.getWorldQuaternion(new je).invert(),yt=i.head.getWorldPosition(new B).applyMatrix4(J),gt=et.clone().multiply(i.head.getWorldQuaternion(new je)),C=gt.clone().invert(),f=re(_).sub(yt).applyQuaternion(C).y,I=f-.17*c,U=48,O=Array.from({length:U},(wt,Ct)=>Ct/U*Math.PI*2),N=.014*c,V=[],X=Array(U).fill(0);pt.position.copy(yt),pt.quaternion.copy(gt);let mt=(wt=>O.map((Ct,kt)=>{let Lt=re([Math.cos(Ct),0,Math.sin(Ct)]).applyQuaternion(gt),Qt=re([0,wt,0]).applyQuaternion(gt).add(yt),Nt=wt<=f+.025*c?_t.around(Qt.toArray(),Lt.toArray(),!1,!0):null;if(Nt){let we=Nt.point.clone().sub(yt).applyQuaternion(C),Ae=Nt.normal.clone().applyQuaternion(C).normalize(),Ee=we.clone(),ye=we.addScaledVector(Ae,N),Le=Math.hypot(ye.x,ye.z);return X[kt]=Le,Math.abs(wt-I)<1e-4&&V.push({angle:Ct,point:Ee.toArray(),normal:Ae.toArray(),radius:Le,surfaceObject:Nt.objectName,offset:N}),ye}let ae=Ei((f+.075*c-wt)/(.13*c),.025,1),ge=X[kt]?X[kt]*ae:qt*.72*ae;return re([Math.cos(Ct)*ge,wt,Math.sin(Ct)*ge])}))(I),dt=[[0,1],[.035,1],[.1,1],[.17,.99],[.23,.94],[.27,.9]].map(([wt,Ct],kt)=>kt===0?mt:mt.map((Lt,Qt)=>{let Nt=Math.hypot(Lt.x,Lt.z),ae=Nt>.001?[Lt.x/Nt,Lt.z/Nt]:[Math.cos(O[Qt]),Math.sin(O[Qt])];return re([ae[0]*Nt*Ct,Lt.y+wt*c,ae[1]*Nt*Ct])})),xt=G.clone();xt.side=tn,xt.roughness=1,xt.metalness=0;let st=Be(pt,$a(dt),xt);st.name="bucket-soft-crown",st.userData.surfaceMaterial="fabric",st.userData.contactFit={kind:"near-cylinder-cloth-crown",seatY:I,shellOffset:N,height:.27*c,topRadiusRatio:.9,samples:V};let lt=dt.at(-1),vt=[],k=[],ht=lt.reduce((wt,Ct)=>wt+Ct.y,0)/U;for(let wt of lt)vt.push(wt.x,ht,wt.z);vt.push(0,ht,0);for(let wt=0;wt<U;wt++)k.push(wt,U,(wt+1)%U);let ot=new be;ot.setAttribute("position",new ie(vt,3)),ot.setIndex(k),ot.computeVertexNormals(),ot.computeBoundingSphere();let St=Be(pt,ot,xt);St.name="bucket-crown-cap",St.userData.surfaceMaterial="fabric",St.userData.contactFit={kind:"flat-fabric-cap",radiusRatio:.9,rise:0};let Mt=mt.reduce((wt,Ct)=>wt+Math.hypot(Ct.x,Ct.z),0)/U,K=Ei(Mt*.4,.13*c,.22*c),Tt=[0,.34,.72,1].map((wt,Ct)=>mt.map((kt,Lt)=>{let Qt=Math.hypot(kt.x,kt.z),Nt=Qt>.001?[kt.x/Qt,kt.z/Qt]:[Math.cos(O[Lt]),Math.sin(O[Lt])],ae=Math.sin(O[Lt]*5+.35)*.009*c*wt**1.5,ge=[-.004,-.008,-.025,-.066][Ct]*c+ae,we=Qt+K*wt;return re([Nt[0]*we,kt.y+ge,Nt[1]*we])})),Et=xt.clone();Et.color.copy(new jt(s.headAccessory||s.accessory||"#292A2D").lerp(new jt("#ffffff"),.055));let Xt=Be(pt,$a(Tt,"brim"),Et);Xt.name="bucket-soft-brim",Xt.userData.surfaceMaterial="fabric",Xt.userData.contactFit={kind:"drooping-brim",samples:U,width:K,edgeDrop:.066*c};let zt=Tt.map(wt=>wt.map(Ct=>Ct.clone().add(re([0,-.012*c,0])))),At=Be(pt,$a(zt,"brim"),Et);At.name="bucket-brim-underside",At.userData.surfaceMaterial="fabric";let It=Be(pt,$a([Tt.at(-1),zt.at(-1)],"shell"),Et);It.name="bucket-brim-edge",It.userData.surfaceMaterial="fabric",pt.userData.contactFit={kind:"oriented-crown-seat",seatY:I,shellOffset:N,orientation:gt.toArray(),brimWidth:K,samples:V}}else if(["beanie","cap"].includes(ct)){let J=ct==="cap";if(Be(pt,new Bn(z,36,24,0,Math.PI*2,0,Math.PI/2),G).scale.set(1,J?.87:1.07,.83),Ka(pt,z*.97,H*.97,.01*c,(J?.024:.04)*c,G),J){let yt=Ve(pt,[z*.81,.034*c,z*.56],T,[0,-.008*c,H*.81]);yt.rotation.x=-.1,Ve(pt,[.035*c,.017*c,.035*c],D,[0,z*.875,0])}else for(let yt=0;yt<16;yt++){let gt=yt*Math.PI*2/16,C=[];for(let f=0;f<=12;f++){let I=.1+f/12*1.43;C.push([Math.sin(I)*Math.cos(gt)*(z+.002),Math.cos(I)*z*1.07,Math.sin(I)*Math.sin(gt)*(H+.002)])}Rn(pt,C,.0025*c,D)}}else if(ct==="crown"){let J=z*.85,et=H*.85,yt=80,gt=.022*c,C=[],f=[],I=[];for(let O=0;O<=yt;O++){let N=O/yt*Math.PI*2,V=Math.cos(N),X=Math.sin(N),rt=-.025*c,mt=rt+(.115+.145*((Math.cos((N-Math.PI/2)*5)+1)*.5)**2)*c;if(C.push(V*J,rt,X*et,V*J,mt,X*et,V*(J-gt),mt,X*(et-gt),V*(J-gt),rt,X*(et-gt)),I.push([V*J,mt,X*et]),O<yt)for(let j=0;j<4;j++){let dt=O*4+j,xt=O*4+(j+1)%4;f.push(dt,dt+4,xt,xt,dt+4,xt+4)}}let U=new be;U.setAttribute("position",new ie(C,3)),U.setIndex(f),U.computeVertexNormals(),Be(pt,U,T),Rn(pt,I.slice(0,-1),.013*c,T,!0);for(let O=0;O<5;O++){let N=I[(yt/4+O*yt/5)%yt];Ve(pt,[.025*c,.027*c,.025*c],T,N)}}else if(ct==="bowler"||ct==="topHat"){let J=ct==="topHat",et=z*(J?1.15:.91),yt=J?[[0,-.025],[.69,-.025],[.73,.08],[.69,.88],[.67,1],[0,1]]:[[0,-.025],[.78,-.025],[.87,.11],[.86,.46],[.71,.79],[.4,.98],[0,1.04]],gt=new fn(yt.map(([O,N])=>re([O*z,N*et,0])),!1,"catmullrom",.2),C=new Ls(gt.getPoints(32).map(O=>new Ut(Math.max(0,O.x),O.y)),48),f=Be(pt,C,G);f.scale.z=.83;let I=Ve(pt,[z*1.08,.045*c,H*1.06],G,[0,.005*c,0]),U=De(new jt(s.accessory||"#33465a").lerp(new jt("#77828f"),.12),{roughness:.76});Ka(pt,z*(J?.705:.862),H*(J?.705:.862),.11*c,.022*c,U)}else if(ct==="flower"){let J=null;for(let yt of[.67,.52,.36,.18,0]){let gt=_[0]-Jt*yt,C=_t.ornament([gt,_t.reach,_[2]],[0,-1,0]);if(C){for(let f of[.14,.2,.28,.36]){let I=_t.ornament([gt,C.point.y-f*c,_t.reach],[0,0,-1]);if(I&&(J=I,I.normal.z>=.58))break}if(J)break}}J||=_t.ornament([v[0],v[1],_t.reach],[0,0,-1]),J&&(pt.position.copy(J.point).addScaledVector(J.normal,.01*c),pt.quaternion.setFromUnitVectors(re([0,0,1]),J.normal),pt.rotateZ(-.2),pt.userData.contactFit={kind:"ornament",point:J.point.toArray(),normal:J.normal.toArray(),offset:.01*c}),Fu(pt,.15*c,A,E),Ve(pt,[.042*c,.055*c,.023*c],De("#678b62"),[0,0,-.02*c]);let et=Ve(pt,[.044*c,.115*c,.021*c],De("#678b62"),[.105*c,-.06*c,-.025*c]);et.rotation.z=-.8}else if(ct==="wizard"){Ve(pt,[z*1.14,.042*c,H*1.14],T);let J=[[.92,0],[.88,.1],[.69,.27],[.47,.43],[.22,.58],[.06,.65],[0,.66]],et=new Ls(J.map(gt=>new Ut(gt[0]*z,gt[1]*c)),40),yt=et.attributes.position;for(let gt=0;gt<yt.count;gt++)yt.setX(gt,yt.getX(gt)+.15*c*(yt.getY(gt)/(.66*c))**2);et.computeVertexNormals(),Be(pt,et,T),Ka(pt,z*.88,z*.88,.1*c,.022*c,A),wl(pt,.062*c,E,[.03*c,.28*c,z*.69],.012*c)}}}if(m.face&&m.face!=="none"){e.updateMatrixWorld(!0);let pt=e.matrixWorld.clone().invert(),R=e.getWorldQuaternion(new je).invert(),G=i.eyeGroups?.length>=2?i.eyeGroups.map(C=>{let f=C.getWorldPosition(new B).applyMatrix4(pt),I=R.clone().multiply(C.getWorldQuaternion(new je)),U=new Ie().compose(f,I,re([1,1,1])).invert(),O=new Te;return C.traverse(N=>{!N.isMesh||!N.geometry||!N.visible||(N.geometry.computeBoundingBox(),O.union(N.geometry.boundingBox.clone().applyMatrix4(U.clone().multiply(pt).multiply(N.matrixWorld))))}),{center:f,quaternion:I,bounds:O}}):[-1,1].map(C=>({center:re([C*p*.13,v[1],v[2]]),quaternion:new je,bounds:new Te(re([-.07*c,-.12*c,0]),re([.07*c,.12*c,.04*c]))}));G.sort((C,f)=>C.center.x-f.center.x);let z=F("face-"+m.face),H=["sunglasses","catEye","roundSun"].includes(m.face),q=m.face==="monocle",tt=Math.abs(G[1].center.x-G[0].center.x),J=De(H?"#15202a":"#d6eef5",{transparent:!H,opacity:H?1:.065,roughness:H?.33:.18,metalness:H?.06:0,depthWrite:H,side:tn}),et=[],yt=(C,f,I,U,O)=>{let N=re([I,U,0]).applyQuaternion(f).add(C),V=_t.faceHit(N.x,N.y);if(!V)return N.addScaledVector(re([0,0,1]).applyQuaternion(f),O).toArray();let X=V.normal.z<.05?re([0,0,1]).applyQuaternion(f):V.normal;return V.point.addScaledVector(X,O).toArray()},gt=(C,f,I,U,O,N)=>{let V=new Vi(C,48),X=V.attributes.position;for(let mt=0;mt<X.count;mt++){let j=yt(f,I,X.getX(mt),X.getY(mt),N);X.setXYZ(mt,j[0],j[1],j[2])}X.needsUpdate=!0,V.computeVertexNormals(),V.computeBoundingSphere();let rt=Be(z,V,J);return rt.name="eyewear-lens",rt.userData.contactFit={kind:"curved-lens",center:f.toArray(),radii:[U,O],offset:N},rt};if(G.forEach(({center:C,quaternion:f,bounds:I},U)=>{if(q&&U===0)return;let O=U?1:-1,N=I.max.x-I.min.x,V=I.max.y-I.min.y,X=Math.max(t.shape==="triangle"&&m.face==="round"?.25*c:t.shape==="diamond"&&m.face==="sunglasses"?.34*c:0,Ei(tt*(m.face==="roundSun"?.43:.41),.11*c,.27*c),N*.5+.024*c),rt=Math.max(t.shape==="triangle"&&m.face==="round"?.31*c:0,X*(m.face==="square"||m.face==="sunglasses"?.81:1.04),V*.5+.021*c),mt=Math.max(.025*c,I.max.z+.022*c),j;m.face==="catEye"?j=Nu([[-.96,.48],[-.86,-.31],[-.35,-.64],[.34,-.62],[.83,-.29],[1.13,.77],[.57,.6],[0,.54]].map(([vt,k])=>[vt*X*O,k*rt])):m.face==="sunglasses"?j=Nu([[-.96,.66],[-.38,.72],[.34,.69],[.98,.61],[.9,-.22],[.64,-.69],[0,-.76],[-.65,-.62],[-.9,-.21]].map(([vt,k])=>[vt*X,k*rt])):m.face==="square"?j=Ou(X*2.08,rt*1.94,X*.28).getPoints(12).slice(0,-1).map(vt=>re([vt.x,vt.y,0])):j=Array.from({length:64},(vt,k)=>{let ht=k/64*Math.PI*2;return re([Math.cos(ht)*X,Math.sin(ht)*rt,0])});let dt=new Dn(j.map(vt=>new Ut(vt.x,vt.y)));H&&gt(dt,C,f,X,rt,mt+.002*c);let xt=j.map(vt=>yt(C,f,vt.x,vt.y,mt+.01*c));Rn(z,xt,(H?.019:.013)*c,T,!0);let st=yt(C,f,O*X,.03*rt,mt+.01*c),lt=yt(C,f,-O*X,.03*rt,mt+.01*c);if(et.push({i:U,sign:O,rx:X,ry:rt,center:C,quaternion:f,offset:mt,outer:st,inner:lt,contactFit:{kind:"eye-surface",eyeDepth:I.max.z,normal:re([0,0,1]).applyQuaternion(f).toArray()}}),!q){let vt=_t.side(O,C.y-.022*c,_[2]+.015*c,!0),k=vt?.normal||re([O,0,0]),ht=vt?vt.point.clone().addScaledVector(k,.015*c).toArray():[_[0]+O*Jt,C.y-.022*c,_[2]-.02*c];if(a&&vt){let ot=i.head.getWorldPosition(new B).applyMatrix4(pt),St=Ee=>{let ye=Ee.normal.clone(),Le=re([Ee.point.x-ot.x,0,Ee.point.z-ot.z]).normalize();return ye.dot(Le)<0&&ye.negate(),Math.abs(ye.dot(Le))<.28&&ye.copy(Le),ye.normalize()},Mt=.012*c,K=i.head.getObjectByName("meta-hood-shell"),Tt=Number(K?.userData?.furLength)||.011,Et=Tt+.005*c,Xt=Mt+Et,zt=Math.atan2(O*(st[0]-ot.x),st[2]-ot.z),At=116*Math.PI/180,It=st[1]-.018*c,wt=.07*c,Ct=(Ee,ye)=>_t.around([ot.x,ye,ot.z],[O*Math.sin(Ee),0,Math.cos(Ee)],!1,!0),kt=[st],Lt=[],Qt=32;for(let Ee=1;Ee<=Qt;Ee++){let ye=Ee/Qt,Le=Se.lerp(st[1],It,ye),Ge=Se.lerp(zt,At,ye),We=Ct(Ge,Le);if(!We)continue;let on=St(We),L=We.point.clone().addScaledVector(on,Xt);kt.push(L.toArray()),Lt.push({section:"wrap",t:ye,theta:Ge,point:L.toArray(),surface:We.point.toArray(),normal:on.toArray(),surfaceObject:We.objectName,offset:Xt})}let Nt=null;for(let Ee=1;Ee<=7;Ee++){let ye=Ee/7,Le=It-wt*ye,Ge=Ct(At,Le);if(!Ge)continue;let We=St(Ge),on=Ge.point.clone().addScaledVector(We,Xt);kt.push(on.toArray()),Lt.push({section:"hook",t:ye,theta:At,point:on.toArray(),surface:Ge.point.toArray(),normal:We.toArray(),surfaceObject:Ge.objectName,offset:Xt}),Nt={surface:Ge,normal:We,point:on}}let ae=Nt?.point||re(kt.at(-1)),ge=Nt?.surface.point||vt.point,we=Nt?.normal||St(vt),Ae=X1(z,kt,Mt,T);Ae.name="eyewear-temple",Ae.userData.contactFit={kind:"meta-hood-side-wrap-hook",radius:Mt,furLength:Tt,centerOffset:Xt,scale:c,shellGap:Et,targetAngleDegrees:116,hookDepth:wt,wrapSampleCount:Lt.filter(Ee=>Ee.section==="wrap").length,hookSampleCount:Lt.filter(Ee=>Ee.section==="hook").length,missingSamples:Qt+7-Lt.length,samples:[{t:0,point:st,source:"frame-outer"},...Lt,{t:1,point:ae.toArray(),surface:ge.toArray(),normal:we.toArray(),surfaceObject:Nt?.surface.objectName||vt.objectName,offset:Xt}]},z.userData.temples||=[],z.userData.temples.push({eye:U,end:ae.toArray(),normal:we.toArray(),contactFit:Ae.userData.contactFit})}else{let ot=[st,[st[0]+O*.035*c,st[1]-.012*c,st[2]-.04*c],[Se.lerp(st[0],ht[0],.68),Se.lerp(st[1],ht[1],.68),Se.lerp(st[2],ht[2],.72)],ht];Rn(z,ot,.012*c,T),z.userData.temples||=[],z.userData.temples.push({eye:U,end:ht,normal:k.toArray()})}}}),q){let C=et[0],f=yt(C.center,C.quaternion,C.sign*C.rx*.72,-.24*C.ry,C.offset+.012*c),I=f[0]+.105*c,U=Math.max(g[1]+.05*c,f[1]-.37*c),O=[];for(let N=0;N<=12;N++){let V=N/12,X=Se.lerp(f[0],I,V),rt=Se.lerp(f[1],U,V),mt=_t.frontHit(X,rt,!0,!0),j=mt?.normal||re([0,0,1]),dt=mt?mt.point.addScaledVector(j.z<.05?re([0,0,1]):j,.022*c).toArray():[X,rt,_t.front(X,rt,f[2]-.045*c,!0)+.022*c];N===0&&dt.splice(0,3,...f),O.push(dt)}Rn(z,O,.011*c,T)}else{let C=et[0].inner,f=et[1].inner,I=[];for(let U=0;U<=10;U++){let O=U/10,N=Se.lerp(C[0],f[0],O),V=Se.lerp(C[1],f[1],O)+Math.sin(O*Math.PI)*.028*c;I.push(U===0?C:U===10?f:Gt(N,V,Math.max(et[0].offset,et[1].offset)+.012*c))}Rn(z,I,.013*c,T),z.userData.bridgeFit=I.map((U,O)=>({point:U,sample:O}))}}if(m.neck&&m.neck!=="none"){let pt=g[1]-(a&&m.neck==="scarf"?.08*c:0),R=F("neck-"+m.neck,[0,pt,0]),G=o?.32*c:l?.46*c:p*.46,z=_t.front(0,pt,n.neckFront?.[2]||v[2]*.86,!0),H=z+.018*c;if(m.neck==="bow"){for(let q of[-1,1]){let tt=new Dn;tt.moveTo(0,0),tt.bezierCurveTo(.056*c,.025*c,.17*c,.12*c,.225*c,.11*c),tt.quadraticCurveTo(.25*c,.1*c,.25*c,0),tt.quadraticCurveTo(.25*c,-.1*c,.215*c,-.11*c),tt.bezierCurveTo(.15*c,-.1*c,.052*c,-.03*c,0,0);let J=new Hi(tt,{depth:.032*c,bevelEnabled:!0,bevelSize:.014*c,bevelThickness:.022*c,bevelSegments:4,curveSegments:16}),et=Be(R,J,T,[q*.005*c,0,H+.019*c]);et.scale.set(q*(t.family==="dots"?1.85:1),t.family==="dots"?1.65:1,1),et.rotation.z=q*-.04}Ve(R,[(t.family==="dots"?.075:.052)*c,(t.family==="dots"?.09:.065)*c,.059*c],T,[0,0,H+.04*c])}else{let q=m.neck==="scarf",tt=(q?.062:.03)*c,J=[],et=[];for(let gt=0;gt<64;gt++){let C=gt/64*Math.PI*2,f=re([Math.cos(C),0,Math.sin(C)]),I=_t.around([0,pt,0],f.toArray(),!0);if(I){let U=I.normal.z<-.4&&f.z>0?re([0,0,1]):I.normal,O=I.point.clone().addScaledVector(U,tt*.92);J.push(O.sub(re([0,pt,0])).toArray()),et.push({point:I.point.toArray(),normal:U.toArray()})}else J.push([f.x*(G+tt),0,f.z*((o?.28:l?.38:p*.3)*c+tt)]),et.push(null)}let yt=T.clone();if(yt.side=tn,Rn(R,J,tt,yt,!0),R.userData.contactFit={kind:q?"wrapped-scarf":"neckwear",points:et},m.neck==="scarf"){let gt=(C,f,I,U,O,N,V)=>{let mt=[],j=[],dt=[],xt=re(V),st=[];for(let ot=0;ot<=18;ot++){let St=ot/18,Mt=I-O*c*St,K=[];for(let Tt=0;Tt<=5;Tt++){let Et=Tt/5,Xt=f+(Et-.5)*U*c+Math.sin(N)*O*c*St+Math.sin(St*Math.PI)*.018*c,zt=_t.frontHit(Xt,Mt,!0),At=zt?.normal||re([0,0,1]);K.push({point:zt?zt.point.clone():re([Xt,Mt,z+.02*c]),facing:(At.z<.18?re([0,0,1]):At.clone()).normalize()})}st.push(K)}for(let ot=0;ot<2;ot++)for(let St of st)for(let Mt of St){let{point:K,facing:Tt}=Mt,Et=K.clone();Et.addScaledVector(Tt,(ot?-.02:.014)*c),ot||dt.push(Et.clone()),mt.push(Et.x-xt.x,Et.y-xt.y,Et.z-xt.z)}let lt=114;for(let ot=0;ot<2;ot++){let St=ot*lt;for(let Mt=0;Mt<18;Mt++)for(let K=0;K<5;K++){let Tt=St+Mt*6+K,Et=Tt+5+1;ot?j.push(Tt,Tt+1,Et,Tt+1,Et+1,Et):j.push(Tt,Et,Tt+1,Tt+1,Et,Et+1)}}let vt=(ot,St,Mt,K)=>j.push(ot,St,Mt,Mt,St,K);for(let ot=0;ot<5;ot++){vt(ot,ot+1,lt+ot,lt+ot+1);let St=108+ot;vt(St,lt+St,St+1,lt+St+1)}for(let ot=0;ot<18;ot++){let St=ot*6,Mt=St+5+1;vt(St,lt+St,Mt,lt+Mt);let K=St+5,Tt=Mt+5;vt(K,Tt,lt+K,lt+Tt)}let k=new be;k.setAttribute("position",new ie(mt,3)),k.setIndex(j),k.computeVertexNormals(),k.computeBoundingSphere();let ht=Be(C,k,yt);return ht.name="scarf-drape",ht.userData.surfaceContactSamples=dt.filter((ot,St)=>St%6===Math.floor(2.5)).map(ot=>ot.toArray()),ht};for(let[C,f,I]of[[-.115,.36,-.1],[.055,.29,.105]]){let U=C*c,O=pt-.045*c,N=_t.frontHit(U,O,!0),V=N?.normal||re([0,0,1]),X=N?N.point.addScaledVector(V.z<.18?re([0,0,1]):V,.026*c).toArray():[U,O,z+.025*c],rt=ns(R,"scarf-end",[X[0],X[1]-pt,X[2]]);gt(rt,U,O,.132,f,I,X),rt.userData.contactFit={kind:"front-drape",point:X,normal:V.toArray(),tilt:I}}}else Ve(R,[.068*c,.081*c,.025*c],E,[0,-.085*c,H+.043*c])}}if(Z==="macbook"){let pt=Math.min(d*.28,v[1]-.6*c),R=F("prop-macbook",[0,Math.max(.28*c,pt),Rt]);R.rotation.y=-.64;let G=1.1*c,z=.69*c,H=Ei(v[1]-R.position.y-.22*c,.29*c,.38*c),q=De("#bdc3ca",{metalness:.7,roughness:.31}),tt=De("#4a5058",{roughness:.62});ln(R,[G,.043*c,z],q,[0,0,0],.045*c);for(let C=0;C<3;C++)for(let f=0;f<10;f++)ln(R,[.078*c,.009*c,.055*c],tt,[(f-4.5)*.098*c,.026*c,(C*.079-.06)*c],.014*c);ln(R,[.32*c,.004*c,.135*c],D,[0,.024*c,-.225*c],.018*c);let J=ns(R,"laptop-lid",[0,.025*c,z*.45]);J.rotation.x=.54,ln(J,[G,H,.055*c],q,[0,H/2,0],.043*c);let et=De("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});ln(J,[G-.07*c,H-.055*c,.005*c],et,[0,H/2,-.024*c],.027*c);let yt=De("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let C=0;C<3;C++)ln(J,[(C?.38:.63)*c,.012*c,.004*c],yt,[-.11*c,H*.67-C*.05*c,-.028*c],.003*c);Ve(J,[.009*c,.009*c,.004*c],w,[0,H-.018*c,-.025*c]);let gt=t.family==="grok"&&t.presetId==="baseline-grok"?G*.48:.33*c;R.updateMatrix(),it=Y(R,[[-gt,.06*c,.02*c],[gt,.06*c,.02*c]],[[0,1,0],[0,1,0]])}else if(Z==="flowers"){let pt=Math.min(d*.33,v[1]-.6*c),R=F("prop-flowers",[0,pt,Rt+.03*c]);R.rotation.z=-.08;let G=De("#6c8d64"),z=De("#e1c7ac",{side:tn});Be(R,new Pn(.25*c,.065*c,.36*c,32,1,!0),z,[0,.02*c,0]);let H=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],q=[De("#f0bbbd"),A,De("#dda375"),De("#d4b5ce"),A];H.forEach((yt,gt)=>{Uu(R,[0,-.25*c,0],yt.map(f=>f*c),.014*c,G);let C=Fu(R,.12*c,q[gt],E,yt.map(f=>f*c));C.rotation.x=-.18});let tt=Ve(R,[.065*c,.16*c,.027*c],G,[.22*c,.2*c,-.02*c]);tt.rotation.z=-.7,Ka(R,.077*c,.075*c,-.12*c,.018*c,T),e.updateMatrixWorld(!0);let J=new Te().setFromObject(R),et=i.eyeGroups?.length?Math.min(...i.eyeGroups.map(yt=>new Te().setFromObject(yt).min.y)):v[1]-.1*c;R.position.y-=Math.max(0,J.max.y-(et-.12*c)),R.updateMatrix(),it=Y(R,[[-.105*c,-.035*c,.09*c],[.105*c,-.035*c,.09*c]],[[0,0,1],[0,0,1]])}else if(Z==="wand"){let pt=F("prop-wand",[p*.48,d*.43,Rt]);pt.rotation.z=-.12,Uu(pt,[0,-.2*c,0],[0,.48*c,0],.029*c,E),wl(pt,.16*c,A,[0,.56*c,0],.04*c);let R=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((G,z)=>wl(pt,(.03+z*.008)*c,E,G.map(H=>H*c),.009*c));S.push(G=>R.forEach((z,H)=>{z.rotation.z=Math.sin(G*.8+H)*.2,z.scale.setScalar(.84+Math.sin(G*1.4+H)*.16)})),pt.updateMatrix(),it=Y(pt,[null,[0,-.045*c,0]],[[0,0,1],[0,0,1]])}else if(Z==="tea"){let pt=t.mouth!=="none"&&x==="drink",R=Math.min(d*(pt?.49:.34),v[1]-(pt?.58:.53)*c),G=F("prop-tea",[p*.13,R,Rt+.05*c]),z=De("#cba981");Be(G,new Pn(.165*c,.128*c,.35*c,36),z),Be(G,new Pn(.175*c,.175*c,.032*c,36),A,[0,.185*c,0]);let H=n.mouth||[v[0],v[1]-.25*c,v[2]],q=pt?[H[0]-G.position.x,H[1]-R,H[2]+.025*c-G.position.z]:[.04*c,.48*c,-.05*c];Rn(G,[[.04*c,.18*c,-.02*c],[.04*c,.18*c+(q[1]-.18*c)*.64,-.025*c],q],.019*c,T);for(let tt=0;tt<6;tt++){let J=tt*1.83;Ve(G,[.019*c,.019*c,.013*c],w,[Math.sin(J)*.08*c,(-.125+tt%2*.03)*c,.121*c])}G.updateMatrix(),it=Y(G,[[-.105*c,-.025*c,0],[.105*c,-.025*c,0]],[[-1,0,0],[1,0,0]])}else if(Z==="camera"){let pt=Math.min(v[1]-.28*c,d*.61),R=.85,G=F("prop-camera",[0,pt,Rt+.04*c]);G.scale.setScalar(R),ln(G,[.65*c,.36*c,.25*c],T,[0,0,0],.06*c),ln(G,[.15*c,.09*c,.18*c],w,[0,.205*c,-.015*c],.025*c);let z=Be(G,new Pn(.148*c,.153*c,.19*c,40),w,[.03*c,0,.19*c]);z.rotation.x=Math.PI/2;let H=Be(G,new Gi(.124*c,.014*c,8,40),E,[.03*c,0,.29*c]),q=De("#203b4c",{metalness:.35,roughness:.15});Ve(G,[.12*c,.12*c,.018*c],q,[.03*c,0,.287*c]),ln(G,[.115*c,.061*c,.015*c],A,[-.2*c,.105*c,.135*c],.014*c),Ve(G,[.045*c,.02*c,.04*c],w,[.22*c,.194*c,.015*c]),e.updateMatrixWorld(!0),G.updateMatrix();let tt=V=>{let X=new Te().setFromObject(V);if(X.isEmpty())return null;let rt=new Te,mt=e.matrixWorld.clone().invert();for(let j of[X.min.x,X.max.x])for(let dt of[X.min.y,X.max.y])for(let xt of[X.min.z,X.max.z])rt.expandByPoint(re([j,dt,xt]).applyMatrix4(mt));return rt},J=new Te,et=new Te,yt=new Te;e.traverse(V=>{if(!V.isMesh||!V.visible||!V.geometry)return;let X=tt(V);X&&(/^(mouth|smile|frown|pout|tongue)$/i.test(V.name)&&J.union(X),a&&/^meta-face-(panel|inner-rim)$/i.test(V.name)&&yt.union(X))});for(let V of i.eyeGroups||[]){let X=tt(V);X&&et.union(X)}let gt=[];J.isEmpty()||gt.push({source:"mouth",y:J.min.y}),et.isEmpty()||gt.push({source:"eyes",y:et.min.y}),yt.isEmpty()||gt.push({source:"face-window",y:yt.min.y}),!gt.length&&n.mouth&&gt.push({source:"mouth-anchor",y:n.mouth[1]-.025*c}),gt.length||gt.push({source:"face-anchor",y:v[1]-.16*c});let C=Math.min(...gt.map(V=>V.y)),f=.1*c,I=tt(G),U=I.max.y-G.position.y;G.position.y=Math.min(G.position.y,C-f-U),G.updateMatrix(),e.updateMatrixWorld(!0);let O=tt(G),N=O.max.y;G.userData.faceClearance={cameraScale:R,faceFloorY:C,faceSources:gt,cameraTop:N,gap:C-N,requiredGap:f,topOffset:U,mouthBottomY:J.isEmpty()?null:J.min.y,eyeBottomY:et.isEmpty()?null:et.min.y,windowBottomY:yt.isEmpty()?null:yt.min.y},G.updateMatrix(),it=Y(G,[[-.27*c,0,0],[.27*c,0,0]],[[-1,0,0],[1,0,0]])}else if(Z==="book"){let pt=F("prop-book",[0,Math.min(d*.34,v[1]-.47*c),Rt+.07*c]),R=De("#f5eddd"),G=De("#bcc0b1");pt.rotation.x=.12;for(let z of[-1,1]){let H=ns(pt,"book-half");H.rotation.z=z*.16,ln(H,[.48*c,.029*c,.59*c],T,[z*.238*c,0,0],.018*c);for(let q=0;q<3;q++)ln(H,[.45*c,.013*c,.55*c],R,[z*.227*c,(.022+q*.014)*c,0],.013*c);for(let q=0;q<5;q++)ln(H,[(.25-q%2*.04)*c,.003*c,.007*c],G,[z*.245*c,.059*c,(q-2)*.068*c],.002*c)}pt.updateMatrix(),it=Y(pt,[[-.42*c,-.02*c,.1*c],[.42*c,-.02*c,.1*c]],[[0,-1,0],[0,-1,0]])}else if(Z==="closedBook"){let pt=F("prop-closed-book",[0,Math.min(d*.34,v[1]-.43*c),Rt+.07*c]),R=De("#f5eddd"),G=T,z=.56*c,H=.72*c,q=.49*c,tt=.64*c;ln(pt,[q,tt,.034*c],R,[0,0,0],.012*c),ln(pt,[z,H,.02*c],G,[0,0,.027*c],.018*c),ln(pt,[z,H,.02*c],G,[0,0,-.027*c],.018*c),ln(pt,[.046*c,H,.078*c],w,[-.257*c,0,0],.012*c),ln(pt,[.18*c,.012*c,.003*c],E,[.025*c,.095*c,.039*c],.004*c),pt.updateMatrix(),it=Y(pt,[[-.27*c,-.015*c,0],[.27*c,-.015*c,0]],[[-1,0,0],[1,0,0]])}let bt=["wave","dance","celebrate","love"],Ft=h||l||Z!=="none"||bt.includes(x)||t.pose==="chin"||["hands","both"].includes(t.limbs),Yt=(h||l)&&Z==="none"&&!bt.includes(x)&&t.pose!=="chin",Bt=Yt?[...i.arms||[]]:[],se=[];if(Yt||(i.arms||[]).forEach(pt=>{pt.visible=!1}),Ft&&!Yt){let pt=h?d*.22:l&&!u?.13:l?d*.17:d*.32,R=[n.shoulderL||[-p*.4,d*.46,0],n.shoulderR||[p*.4,d*.46,0]],G=R.map((z,H)=>[l&&!u?z[0]*.84:(H?1:-1)*p*(l?.3:.39),pt,l&&!u?Math.max(.48,v[2]*.78):v[2]*.73]);if(it&&it.forEach((z,H)=>{z&&(G[H]=z)}),!it){if(x==="wave"&&(G[1]=[p*.57,v[1]+.27*c,v[2]*.67]),t.pose==="chin"&&(G[1]=[p*.2,v[1]-.25*c,v[2]+.07*c]),x==="dance"&&(G[0]=[-p*.58,d*.44,v[2]*.6],G[1]=[p*.56,d*.64,v[2]*.67]),x==="celebrate")for(let z=0;z<2;z++)G[z]=[(z?1:-1)*p*.53,v[1]+.31*c,v[2]*.7];if(x==="love")for(let z=0;z<2;z++)G[z]=[(z?1:-1)*.12*c,v[1]-.39*c,Rt]}for(let z=0;z<2;z++){let H=z?1:-1,q=re(G[z]);if(!h&&!l){let N=H*(it?Math.min(p*.32,Math.abs(q.x)+.15*c):p*.4),V=it?Ei(q.y+.12*c,d*.23,v[1]-.2*c):d*.43;R[z]=[N,V,_t.front(N,V,v[2]*.6)-.05*c]}let tt=re(R[z]),J=q.clone().sub(tt),et=F("posed-arm-"+z,R[z]),yt=(o?.078:l?.115:.102)*c,gt=J.clone().multiplyScalar(.48);gt.x+=H*(l&&!u&&!it?.035:.11)*c,gt.y-=.11*c,gt.z+=.05*c;let C=J.clone().multiplyScalar(.85);C.z+=.013*c;let f=Rn(et,[[0,0,0],gt.toArray(),C.toArray(),J.toArray()],yt,P);{let N=f.geometry,V=N.attributes.position,{path:X,tubularSegments:rt,radialSegments:mt}=N.parameters;for(let j=0;j<=rt;j++){let dt=j/rt,xt=X.getPointAt(dt),st=1.12-.35*dt+.035*Math.sin(dt*Math.PI);for(let lt=0;lt<=mt;lt++){let vt=j*(mt+1)+lt;V.setXYZ(vt,xt.x+(V.getX(vt)-xt.x)*st,xt.y+(V.getY(vt)-xt.y)*st,xt.z+(V.getZ(vt)-xt.z)*st)}}N.computeVertexNormals()}if(u){let N=f.geometry,V=N.attributes.position,{path:X,tubularSegments:rt,radialSegments:mt}=N.parameters;for(let j=0;j<=rt;j++){let dt=j/rt,xt=X.getPointAt(dt),st=.85+Math.sin(dt*Math.PI)*.64;for(let lt=0;lt<=mt;lt++){let vt=j*(mt+1)+lt;V.setXYZ(vt,xt.x+(V.getX(vt)-xt.x)*st,xt.y+(V.getY(vt)-xt.y)*st,xt.z+(V.getZ(vt)-xt.z)*.4)}}N.computeVertexNormals()}f.userData.region=o?"clothing":"body",f.userData.surfaceMaterial=o?P.name||"knit":t.material||"plush",f.userData.furLength=t.material==="micro"?.011:.024;let I=ns(et,(u?"wing-tip-":"hand-")+z,J.toArray()),U=(o?.102:l?.128:.115)*c,O=Ve(I,[U,U*(u?1.1:o?1.05:.83),U*(u?.4:Z==="macbook"?.57:.82)],y);if(O.userData.region=o?"skin":"body",O.userData.surfaceMaterial=o?y.name||"skin":t.material||"plush",O.userData.furLength=t.material==="micro"?.011:.024,h&&(I.rotation.x=Z==="macbook"?Math.PI*.49:Z==="book"?.65:Z==="closedBook"?-.1:-.22,Z==="macbook"&&(I.rotation.y=-.64),Z==="closedBook"&&(I.rotation.y=H<0?Math.PI/2:-Math.PI/2),o)){for(let V=0;V<4;V++)Ve(I,[.023*c,(.065-Math.abs(V-1.5)*.008)*c,.025*c],y,[(V-1.5)*.043*c,.067*c,.018*c]);let N=Ve(I,[.055*c,.059*c,.035*c],y,[-H*.09*c,.006*c,.035*c]);N.rotation.z=H*.42}Bt.push(et),se.push(I),Array.isArray(i.surfaces)&&i.surfaces.push(f,O),!it&&(x==="wave"&&z===1||x==="celebrate")&&S.push(N=>{et.rotation.z=Math.sin(N*3.2+z*.6)*.075}),!it&&x==="dance"&&S.push(N=>{et.rotation.z=Math.sin(N*3+z*1.1)*.065}),Z==="macbook"&&S.push(N=>{I.rotation.z=Math.sin(N*4.2+z*1.7)*.022})}}i.arms=Bt,e.updateMatrixWorld(!0);for(let pt of M)i.head&&(pt.name.startsWith("head-")||pt.name.startsWith("face-"))?i.head.attach(pt):i.torso&&pt.name.startsWith("neck-")&&i.torso.attach(pt);return e.updateMatrixWorld(!0),{parts:M,prop:Z,constraintNotes:[],tick(pt){for(let R of S)R(Number.isFinite(pt)?pt:0)}}}var J1=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function qr(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Qa(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function El(){let i=new Map,t=new Map,e=new Map,n,s,r,o,a,h=0,l=0,u=(w,E,b)=>Math.max(E,Math.min(b,w)),d=(w,E,b)=>{let y=1/Math.max(1e-12,Math.hypot(w,E,b));return[w*y,E*y,b*y]};function p(w,E,b,y,P){w*=y,E*=y,b*=y;let D=Math.min(w,E,b),F=D<.08?D-6.25*D*D:.04;w-=F,E-=F,b-=F;let W=Math.max(w,E,b);if(W>=.76){let $=1-.0576/(W-.52),Y=$/W,it=1-1/(.15*(W-$)+1);w=w*Y*(1-it)+$*it,E=E*Y*(1-it)+$*it,b=b*Y*(1-it)+$*it}P[0]=w,P[1]=E,P[2]=b}let c=new Uint8ClampedArray(4097),_=new Float32Array(256);for(let w=0;w<c.length;w++){let E=w/4096;c[w]=Math.round((E<=.0031308?12.92*E:1.055*Math.pow(E,1/2.4)-.055)*255)}for(let w=0;w<256;w++){let E=w/255;_[w]=E<=.04045?E/12.92:Math.pow((E+.055)/1.055,2.4)}let v=(w,E)=>{let b=new Float32Array(16);for(let y=0;y<4;y++)for(let P=0;P<4;P++)b[y*4+P]=w[P]*E[y*4]+w[4+P]*E[y*4+1]+w[8+P]*E[y*4+2]+w[12+P]*E[y*4+3];return b};function g(w){let E=w[0],b=w[4],y=w[8],P=w[1],D=w[5],F=w[9],W=w[2],$=w[6],Y=w[10],it=[D*Y-F*$,F*W-P*Y,P*$-D*W,y*$-b*Y,E*Y-y*W,b*W-E*$,b*F-y*D,y*P-E*F,E*D-b*P],Z=E*it[0]+b*it[1]+y*it[2],ut=1/(Math.abs(Z)<1e-12?1:Z);return it.map(Rt=>Rt*ut)}function m(w){if(!w.normals){let E=new Float32Array(w.positions.length),b=w.positions,y=w.indices,P=y?y.length:b.length/3;for(let D=0;D<P;D+=3){let F=(y?y[D]:D)*3,W=(y?y[D+1]:D+1)*3,$=(y?y[D+2]:D+2)*3,Y=b[W]-b[F],it=b[W+1]-b[F+1],Z=b[W+2]-b[F+2],ut=b[$]-b[F],Rt=b[$+1]-b[F+1],_t=b[$+2]-b[F+2],Gt=it*_t-Z*Rt,Wt=Z*ut-Y*_t,Jt=Y*Rt-it*ut;for(let qt of[F,W,$])E[qt]+=Gt,E[qt+1]+=Wt,E[qt+2]+=Jt}for(let D=0;D<E.length;D+=3){let F=1/Math.max(1e-10,Math.hypot(E[D],E[D+1],E[D+2]));E[D]*=F,E[D+1]*=F,E[D+2]*=F}w.normals=E}i.set(w.id,w)}function x(w,E,b,y){if(!w){y[0]=y[1]=y[2]=y[3]=1;return}E=E*w.repeat[0]+w.offset[0],b=b*w.repeat[1]+w.offset[1],E=w.wrapS===1e3?E-Math.floor(E):u(E,0,.999999),b=w.wrapT===1e3?b-Math.floor(b):u(b,0,.999999),w.flipY&&(b=1-b);let P=u(Math.floor(E*w.width),0,w.width-1),D=u(Math.floor(b*w.height),0,w.height-1),F=(D*w.width+P)*w.channels,W=w.data,$=W[F]||0,Y=w.channels>1?W[F+1]:$,it=w.channels>2?W[F+2]:$;y[0]=w.srgb?_[$]:$/255,y[1]=w.srgb?_[Y]:Y/255,y[2]=w.srgb?_[it]:it/255,y[3]=w.channels===4?W[F+3]/255:1}function M(w){if(w.heightMips)return;w.heightMips=[{data:w.data,width:w.width,height:w.height,channels:w.channels}];let E=w.heightMips[0];for(;E.width>1||E.height>1;){let b=Math.max(1,E.width>>1),y=Math.max(1,E.height>>1),P=new Float32Array(b*y);for(let D=0;D<y;D++)for(let F=0;F<b;F++){let W=0;for(let $=0;$<2;$++)for(let Y=0;Y<2;Y++)W+=E.data[(Math.min(E.height-1,D*2+$)*E.width+Math.min(E.width-1,F*2+Y))*E.channels];P[D*b+F]=W*.25}E={data:P,width:b,height:y,channels:1},w.heightMips.push(E)}}function S(w,E,b,y,P){let D=Math.min(w.heightMips.length-1,y),F=Math.floor(D),W=D-F;P[0]=P[1]=0;for(let $=0;$<2;$++){let Y=$?W:1-W;if(Y<1e-4)continue;let it=w.heightMips[F+$],Z=(E*w.repeat[0]+w.offset[0])*it.width,ut=(b*w.repeat[1]+w.offset[1])*it.height;w.flipY&&(ut=it.height-ut);let Rt=Math.floor(Z),_t=Math.floor(ut),Gt=Z-Rt,Wt=ut-_t,Jt=(Yt,Bt)=>(Yt=w.wrapS===1e3?(Yt%it.width+it.width)%it.width:u(Yt,0,it.width-1),Bt=w.wrapT===1e3?(Bt%it.height+it.height)%it.height:u(Bt,0,it.height-1),it.data[(Bt*it.width+Yt)*it.channels]/255),qt=Jt(Rt,_t),ct=Jt(Rt+1,_t),bt=Jt(Rt,_t+1),Ft=Jt(Rt+1,_t+1);P[0]+=((ct-qt)*(1-Wt)+(Ft-bt)*Wt)*it.width*w.repeat[0]*Y,P[1]+=((bt-qt)*(1-Gt)+(Ft-ct)*Gt)*it.height*w.repeat[1]*(w.flipY?-1:1)*Y}}function T(w,E){if(!w.shadow)return null;let b=w.shadow.size,y=new Float32Array(b*b);y.fill(1/0);for(let{mesh:P,g:D}of E){if(!P.castShadow||P.material.transparent||P.material.unlit)continue;let F=v(w.shadow.viewProjection,P.matrix),W=D.positions,$=D.indices,Y=new Float32Array(W.length),it=W.length/3;for(let _t=0;_t<it;_t++){let Gt=_t*3,Wt=W[Gt],Jt=W[Gt+1],qt=W[Gt+2],ct=1/(F[3]*Wt+F[7]*Jt+F[11]*qt+F[15]);Y[Gt]=((F[0]*Wt+F[4]*Jt+F[8]*qt+F[12])*ct*.5+.5)*b,Y[Gt+1]=(.5-(F[1]*Wt+F[5]*Jt+F[9]*qt+F[13])*ct*.5)*b,Y[Gt+2]=(F[2]*Wt+F[6]*Jt+F[10]*qt+F[14])*ct}let Z=$?$.length:it,ut=P.start||0,Rt=Math.min(Z,Number.isFinite(P.count)?ut+P.count:Z);for(let _t=ut;_t+2<Rt;_t+=3){let Gt=($?$[_t]:_t)*3,Wt=($?$[_t+1]:_t+1)*3,Jt=($?$[_t+2]:_t+2)*3,qt=Y[Gt],ct=Y[Gt+1],bt=Y[Wt],Ft=Y[Wt+1],Yt=Y[Jt],Bt=Y[Jt+1],se=Y[Gt+2],pt=Y[Wt+2],R=Y[Jt+2],G=(bt-qt)*(Bt-ct)-(Ft-ct)*(Yt-qt);if(Math.abs(G)<.04)continue;let z=Math.max(0,Math.floor(Math.min(qt,bt,Yt))),H=Math.min(b-1,Math.ceil(Math.max(qt,bt,Yt))),q=Math.max(0,Math.floor(Math.min(ct,Ft,Bt))),tt=Math.min(b-1,Math.ceil(Math.max(ct,Ft,Bt)));if(z>H||q>tt)continue;let J=1/G,et=(Ft-Bt)*J,yt=(Bt-ct)*J;for(let gt=q;gt<=tt;gt++){let C=gt+.5,f=((bt-(z+.5))*(Bt-C)-(Ft-C)*(Yt-(z+.5)))*J,I=((Yt-(z+.5))*(ct-C)-(Bt-C)*(qt-(z+.5)))*J,U=gt*b+z;for(let O=z;O<=H;O++,U++,f+=et,I+=yt){let N=1-f-I;if(f<0||I<0||N<0)continue;let V=f*se+I*pt+N*R;V>=-1&&V<=1&&V<y[U]&&(y[U]=V)}}}}return{size:b,buffer:y,matrix:w.shadow.screenMatrix,radius:w.shadow.radius||2.5}}function A(w){let E=performance.now();for(let R of w.geometries||[])m(R);for(let R of w.textures||[])t.set(R.id,R);let b=new Set(w.geometryIds),y=new Set(w.textureIds),P=new Set(w.meshes.map(R=>R.id));for(let R of i.keys())b.has(R)||i.delete(R);for(let R of t.keys())y.has(R)||t.delete(R);for(let R of e.keys())P.has(R)||e.delete(R);(h!==w.width||l!==w.height)&&(h=w.width,l=w.height,n=new Float32Array(h*l),o=new Float32Array(h*l*4),a=new Float32Array(h*l*4),r=new Int32Array(h*l)),s=new Uint8ClampedArray(h*l*4),n.fill(1/0),r.fill(-1);let D=w.background||[0,0,0,0];for(let R=0;R<o.length;R+=4)o[R]=D[0]*D[3],o[R+1]=D[1]*D[3],o[R+2]=D[2]*D[3],o[R+3]=D[3];let F=new Float32Array(4097),W=w.exposure||1;for(let R=0;R<F.length;R++){let G=R/512*W;F[R]=w.toneMapping?u(G*(2.51*G+.03)/(G*(2.43*G+.59)+.14),0,1):u(G,0,1)}let $=w.lights||[],Y=w.ambient||[.18,.18,.18],it=w.sky||[.24,.24,.24],Z=w.ground||[.13,.14,.16],ut=d(w.cameraWorld[8],w.cameraWorld[9],w.cameraWorld[10]);for(let R of $)R.half=d(R.direction[0]+ut[0],R.direction[1]+ut[1],R.direction[2]+ut[2]);let Rt=[],_t=[],Gt=0,Wt=0;for(let R=0;R<w.meshes.length;R++){let G=w.meshes[R],z=i.get(G.geometry);if(!z)continue;let H=G.material,q=v(w.viewProjection,G.matrix),tt=g(G.matrix),J=z.positions.length/3,et=e.get(G.id);(!et||et.length!==J*9)&&(et=new Float32Array(J*9),e.set(G.id,et));let yt=z.positions,gt=z.normals,C=z.uv,f=0;for(let U=0;U<J;U++){let O=U*3,N=U*9,V=yt[O],X=yt[O+1],rt=yt[O+2],mt=q[3]*V+q[7]*X+q[11]*rt+q[15],j=mt>1e-6?1/mt:0,dt=tt[0]*gt[O]+tt[1]*gt[O+1]+tt[2]*gt[O+2],xt=tt[3]*gt[O]+tt[4]*gt[O+1]+tt[5]*gt[O+2],st=tt[6]*gt[O]+tt[7]*gt[O+1]+tt[8]*gt[O+2],lt=j/Math.max(1e-9,Math.hypot(dt,xt,st));et[N]=((q[0]*V+q[4]*X+q[8]*rt+q[12])*j*.5+.5)*h,et[N+1]=(.5-(q[1]*V+q[5]*X+q[9]*rt+q[13])*j*.5)*l,et[N+2]=(q[2]*V+q[6]*X+q[10]*rt+q[14])*j,et[N+3]=j,et[N+4]=dt*lt,et[N+5]=xt*lt,et[N+6]=st*lt,et[N+7]=C?C[U*2]*j:0,et[N+8]=C?C[U*2+1]*j:0,f+=et[N+2]}let I={mesh:G,g:z,tr:et,index:R,z:f/J};(H.transparent||H.opacity<.999?_t:Rt).push(I)}Rt.sort((R,G)=>R.mesh.order-G.mesh.order||R.z-G.z),_t.sort((R,G)=>R.mesh.order-G.mesh.order||G.z-R.z);let Jt=new Float32Array(4),qt=new Float32Array(2),ct=new Float32Array(3),bt=T(w,Rt);function Ft(R,G,z,H=1,q=.28){if(!bt)return 1;let tt=bt.matrix,J=(R+.5)/h*2-1,et=1-(G+.5)/l*2,yt=1/(tt[3]*J+tt[7]*et+tt[11]*z+tt[15]),gt=(tt[0]*J+tt[4]*et+tt[8]*z+tt[12])*yt,C=(tt[1]*J+tt[5]*et+tt[9]*z+tt[13])*yt,f=(tt[2]*J+tt[6]*et+tt[10]*z+tt[14])*yt,I=(gt*.5+.5)*bt.size,U=(.5-C*.5)*bt.size;if(I<1||U<1||I>=bt.size-2||U>=bt.size-2)return 1;let O=45e-5+75e-5*(1-u(H,0,1)),N=bt.radius*.5,V=f-O,X=u(Math.floor(I-N*2),0,bt.size-1),rt=u(Math.floor(I-N),0,bt.size-1),mt=u(Math.floor(I),0,bt.size-1),j=u(Math.floor(I+N),0,bt.size-1),dt=u(Math.floor(I+N*2),0,bt.size-1),xt=0;for(let st=-2;st<=2;st++){let lt=u(Math.floor(U+st*N),0,bt.size-1)*bt.size,vt=st===0?6:Math.abs(st)===1?4:1;xt+=vt*((V<=bt.buffer[lt+X]?1:0)+(V<=bt.buffer[lt+rt]?4:0)+(V<=bt.buffer[lt+mt]?6:0)+(V<=bt.buffer[lt+j]?4:0)+(V<=bt.buffer[lt+dt]?1:0))}return q+(1-q)*xt/256}function Yt(R,G){let{mesh:z,g:H,tr:q}=R,tt=z.material,J=H.indices,et=J?J.length:H.positions.length/3,yt=z.start||0,gt=Math.min(et,Number.isFinite(z.count)?yt+z.count:et),C=t.get(tt.map),f=t.get(tt.bump);f&&M(f);let I=tt.roughness,U=tt.unlit?0:.007+(1-I)*(1-I)*.23,O=8+(1-I)*(1-I)*115,N=tt.surfaceKind==="plush"||tt.surfaceKind==="micro"?.14:.45,V=tt.surfaceKind==="plush"?.48:tt.surfaceKind==="micro"?.38:.28,X=tt.color,rt=tt.emissive||[0,0,0];for(let mt=yt;mt+2<gt;mt+=3){let j=J?J[mt]:mt,dt=J?J[mt+1]:mt+1,xt=J?J[mt+2]:mt+2,st=j*9,lt=dt*9,vt=xt*9;if(q[st+3]===0||q[lt+3]===0||q[vt+3]===0)continue;let k=q[st],ht=q[st+1],ot=q[lt],St=q[lt+1],Mt=q[vt],K=q[vt+1],Tt=q[st+2],Et=q[lt+2],Xt=q[vt+2];if(Math.min(Tt,Et,Xt)>1||Math.max(Tt,Et,Xt)<-1)continue;let zt=(ot-k)*(K-ht)-(St-ht)*(Mt-k);if(Math.abs(zt)<.016||tt.side===0&&zt>0||tt.side===1&&zt<0)continue;let At=Math.max(0,Math.floor(Math.min(k,ot,Mt))),It=Math.min(h-1,Math.ceil(Math.max(k,ot,Mt))),wt=Math.max(0,Math.floor(Math.min(ht,St,K))),Ct=Math.min(l-1,Math.ceil(Math.max(ht,St,K)));if(At>It||wt>Ct)continue;Gt++;let kt=0,Lt=0,Qt=0,Nt=0,ae=0,ge=0,we=0;if(f&&H.uv){let Q=j*2,at=dt*2,ft=xt*2,nt=H.uv[at]-H.uv[Q],Pt=H.uv[ft]-H.uv[Q],Ot=H.uv[at+1]-H.uv[Q+1],$t=H.uv[ft+1]-H.uv[Q+1],Vt=(nt*(K-ht)-Pt*(St-ht))/zt,Kt=(Pt*(ot-k)-nt*(Mt-k))/zt,Ht=(Ot*(K-ht)-$t*(St-ht))/zt,Dt=($t*(ot-k)-Ot*(Mt-k))/zt,ne=f.width*f.repeat[0],ce=f.height*f.repeat[1];we=Math.log2(Math.max(1,Math.hypot(Vt*ne,Ht*ce),Math.hypot(Kt*ne,Dt*ce)));let ee=H.positions,oe=H.uv,le=oe[j*2],te=oe[j*2+1],_e=oe[dt*2]-le,he=oe[dt*2+1]-te,Ne=oe[xt*2]-le,Oe=oe[xt*2+1]-te,de=_e*Oe-Ne*he;if(Math.abs(de)>1e-9){let sn=ee[dt*3]-ee[j*3],xe=ee[dt*3+1]-ee[j*3+1],Xe=ee[dt*3+2]-ee[j*3+2],Ye=ee[xt*3]-ee[j*3],Ue=ee[xt*3+1]-ee[j*3+1],Ze=ee[xt*3+2]-ee[j*3+2],Je=(sn*Oe-Ye*he)/de,hn=(xe*Oe-Ue*he)/de,vn=(Xe*Oe-Ze*he)/de,Gn=(Ye*_e-sn*Ne)/de,Js=(Ue*_e-xe*Ne)/de,ss=(Ze*_e-Xe*Ne)/de,qe=z.matrix;kt=qe[0]*Je+qe[4]*hn+qe[8]*vn,Lt=qe[1]*Je+qe[5]*hn+qe[9]*vn,Qt=qe[2]*Je+qe[6]*hn+qe[10]*vn,Nt=qe[0]*Gn+qe[4]*Js+qe[8]*ss,ae=qe[1]*Gn+qe[5]*Js+qe[9]*ss,ge=qe[2]*Gn+qe[6]*Js+qe[10]*ss;let Ai=1/Math.max(.01,kt*kt+Lt*Lt+Qt*Qt),Ri=1/Math.max(.01,Nt*Nt+ae*ae+ge*ge);kt*=Ai,Lt*=Ai,Qt*=Ai,Nt*=Ri,ae*=Ri,ge*=Ri}}let Ae=1/zt,Ee=(St-K)*Ae,ye=(Mt-ot)*Ae,Le=(K-ht)*Ae,Ge=(k-Mt)*Ae,We=((ot-(At+.5))*(K-(wt+.5))-(St-(wt+.5))*(Mt-(At+.5)))*Ae,on=((Mt-(At+.5))*(ht-(wt+.5))-(K-(wt+.5))*(k-(At+.5)))*Ae,L=zt>0?-1:1;for(let Q=wt;Q<=Ct;Q++){let at=We+(Q-wt)*ye,ft=on+(Q-wt)*Ge,nt=Q*h+At;for(let Pt=At;Pt<=It;Pt++,nt++,at+=Ee,ft+=Le){let Ot=1-at-ft;if(at<-1e-6||ft<-1e-6||Ot<-1e-6)continue;let $t=at*Tt+ft*Et+Ot*Xt;if($t<-1||$t>1||tt.depthTest&&$t>=n[nt]-2e-7)continue;let Vt=tt.opacity,Kt=X[0],Ht=X[1],Dt=X[2],ne=0,ce=0;if(C||f||tt.shadowFade){let de=at*q[st+3]+ft*q[lt+3]+Ot*q[vt+3];ne=(at*q[st+7]+ft*q[lt+7]+Ot*q[vt+7])/de,ce=(at*q[st+8]+ft*q[lt+8]+Ot*q[vt+8])/de}if(C&&(x(C,ne,ce,Jt),Kt*=Jt[0],Ht*=Jt[1],Dt*=Jt[2],Vt*=Jt[3]),Vt<=Math.max(.002,tt.alphaTest||0))continue;let ee=at*q[st+4]+ft*q[lt+4]+Ot*q[vt+4],oe=at*q[st+5]+ft*q[lt+5]+Ot*q[vt+5],le=at*q[st+6]+ft*q[lt+6]+Ot*q[vt+6],te=L/Math.max(1e-9,Math.sqrt(ee*ee+oe*oe+le*le));ee*=te,oe*=te,le*=te;let _e=ee,he=oe,Ne=le;if(f){S(f,ne,ce,we,qt);let de=(kt*qt[0]+Nt*qt[1])*tt.bumpScale,sn=(Lt*qt[0]+ae*qt[1])*tt.bumpScale,xe=(Qt*qt[0]+ge*qt[1])*tt.bumpScale,Xe=de*ee+sn*oe+xe*le;de-=Xe*ee,sn-=Xe*oe,xe-=Xe*le;let Ye=Math.min(1,N/Math.max(.001,Math.hypot(de,sn,xe)));ee-=de*Ye,oe-=sn*Ye,le-=xe*Ye;let Ue=1/Math.max(1e-9,Math.hypot(ee,oe,le));ee*=Ue,oe*=Ue,le*=Ue}if(H.colors&&tt.vertexColors&&(Kt*=at*H.colors[j*3]+ft*H.colors[dt*3]+Ot*H.colors[xt*3],Ht*=at*H.colors[j*3+1]+ft*H.colors[dt*3+1]+Ot*H.colors[xt*3+1],Dt*=at*H.colors[j*3+2]+ft*H.colors[dt*3+2]+Ot*H.colors[xt*3+2]),tt.shadowOnly){if(Vt*=1-Ft(Pt,Q,$t,1,0),tt.shadowFade){let de=tt.shadowFade,sn=Math.hypot((ne-de[0])/de[2],(ce-de[1])/de[3]),xe=u((sn-.28)/.72,0,1);Vt*=1-xe*xe*(3-2*xe)}if(Vt<.002)continue}if(!tt.unlit){let de=oe*.5+.5,sn=Y[0]+Z[0]+(it[0]-Z[0])*de,xe=Y[1]+Z[1]+(it[1]-Z[1])*de,Xe=Y[2]+Z[2]+(it[2]-Z[2])*de,Ye=0,Ue=0,Ze=0;for(let hn=0;hn<$.length;hn++){let vn=$[hn],Gn=vn.direction,Js=ee*Gn[0]+oe*Gn[1]+le*Gn[2],ss=hn===0&&z.receiveShadow?Ft(Pt,Q,$t,_e*Gn[0]+he*Gn[1]+Ne*Gn[2],V):1,qe=Math.max(0,(Js+.055)/1.055)*vn.intensity*ss,Ai=vn.half,Ri=U*Math.pow(Math.max(0,ee*Ai[0]+oe*Ai[1]+le*Ai[2]),O)*vn.intensity*ss;sn+=vn.color[0]*qe,xe+=vn.color[1]*qe,Xe+=vn.color[2]*qe,Ye+=vn.color[0]*Ri,Ue+=vn.color[1]*Ri,Ze+=vn.color[2]*Ri}let Je=tt.metalness||0;Kt=Kt*sn*(1-Je*.48)+Ye*(1-Je+Je*Kt)*(1+Je*3),Ht=Ht*xe*(1-Je*.48)+Ue*(1-Je+Je*Ht)*(1+Je*3),Dt=Dt*Xe*(1-Je*.48)+Ze*(1-Je+Je*Dt)*(1+Je*3)}Kt+=rt[0],Ht+=rt[1],Dt+=rt[2],tt.toneMapped&&!tt.unlit&&(w.neutral?(p(Kt,Ht,Dt,W,ct),Kt=ct[0],Ht=ct[1],Dt=ct[2]):(Kt=F[u(Math.round(Kt*512),0,4096)],Ht=F[u(Math.round(Ht*512),0,4096)],Dt=F[u(Math.round(Dt*512),0,4096)]));let Oe=nt*4;if(Vt>=.999)o[Oe]=Kt,o[Oe+1]=Ht,o[Oe+2]=Dt,o[Oe+3]=1;else{let de=1-Vt;o[Oe]=Kt*Vt+o[Oe]*de,o[Oe+1]=Ht*Vt+o[Oe+1]*de,o[Oe+2]=Dt*Vt+o[Oe+2]*de,o[Oe+3]=Vt+o[Oe+3]*de}!G&&tt.depthWrite&&(n[nt]=$t,r[nt]=R.index),Wt++}}}}for(let R of Rt)Yt(R,!1);if(w.ambientOcclusion&&h>180){let R=Math.max(2,Math.round(h/140)),G=[[-R,0],[R,0],[0,-R],[0,R],[-R*2,-R],[R*2,-R]];for(let z=R*2;z<l-R*2;z++)for(let H=R*2;H<h-R*2;H++){let q=z*h+H,tt=n[q];if(!Number.isFinite(tt))continue;let J=0;for(let[et,yt]of G){let gt=q+yt*h+et,C=tt-n[gt];r[gt]!==r[q]&&C>.0015&&C<.035&&(J+=1-C/.045)}if(J>0){let et=1-J*.027,yt=q*4;o[yt]*=et,o[yt+1]*=et,o[yt+2]*=et}}}a.set(o);let Bt=new Map(w.meshes.map((R,G)=>[R.id,G])),se=0,pt=h*.5*Math.hypot(w.viewProjection[0],w.viewProjection[4],w.viewProjection[8]);for(let R of w.fibers||[]){let G=v(w.viewProjection,R.matrix),z=R.segments,H=R.matrix,q=R.color,tt=Bt.get(R.ownerId),J=new Float32Array(15),et=new Float32Array(5),yt=(Math.hypot(H[0],H[1],H[2])+Math.hypot(H[4],H[5],H[6])+Math.hypot(H[8],H[9],H[10]))/3;for(let gt=0;gt<z.length;gt+=20){let C=!0,f=0;et[0]=0;for(let zt=0;zt<5;zt++){let At=gt+zt*3,It=zt*3,wt=z[At],Ct=z[At+1],kt=z[At+2],Lt=G[3]*wt+G[7]*Ct+G[11]*kt+G[15];if(Lt<1e-6){C=!1;break}J[It]=((G[0]*wt+G[4]*Ct+G[8]*kt+G[12])/Lt*.5+.5)*h,J[It+1]=(.5-(G[1]*wt+G[5]*Ct+G[9]*kt+G[13])/Lt*.5)*l,J[It+2]=(G[2]*wt+G[6]*Ct+G[10]*kt+G[14])/Lt-7e-6,zt&&(f+=Math.hypot(J[It]-J[It-3],J[It+1]-J[It-2]),et[zt]=f)}if(!C||f<.035)continue;let I=J[0],U=J[1];if(I<-8||U<-8||I>h+8||U>l+8)continue;let O=Math.floor(U)*h+Math.floor(I);if(I>=0&&U>=0&&I<h&&U<l&&J[2]>n[O]+.0012)continue;let N=z[gt+12]-z[gt],V=z[gt+13]-z[gt+1],X=z[gt+14]-z[gt+2],rt=d(H[0]*N+H[4]*V+H[8]*X,H[1]*N+H[5]*V+H[9]*X,H[2]*N+H[6]*V+H[10]*X),mt=ut[0]*rt[0]+ut[1]*rt[1]+ut[2]*rt[2],j=d(ut[0]-rt[0]*mt+ut[0]*.25,ut[1]-rt[1]*mt+ut[1]*.25,ut[2]-rt[2]*mt+ut[2]*.25),dt=j[1]*.5+.5,xt=0,st=0,lt=0,vt=0,k=Math.floor(I),ht=Math.floor(U),ot=I-k,St=U-ht;for(let zt=0;zt<2;zt++)for(let At=0;At<2;At++){let It=k+At,wt=ht+zt;if(It<0||wt<0||It>=h||wt>=l)continue;let Ct=wt*h+It;if(r[Ct]!==tt||Math.abs(J[2]-n[Ct])>.003)continue;let kt=(At?ot:1-ot)*(zt?St:1-St),Lt=Ct*4;xt+=a[Lt]*kt,st+=a[Lt+1]*kt,lt+=a[Lt+2]*kt,vt+=kt}let Mt,K,Tt;if(vt>.02){let zt=R.kind==="plush",At=$[0]?.direction||ut,It=j[0]*At[0]+j[1]*At[1]+j[2]*At[2],wt=u(1+(z[gt+19]-(zt?1:.965))*(zt?1.35:.42)+(It-.65)*(zt?.14:.035),zt?.72:.94,zt?1.32:1.07);Mt=xt/vt*wt,K=st/vt*wt,Tt=lt/vt*wt}else{let zt=Y[0]+Z[0]+(it[0]-Z[0])*dt,At=Y[1]+Z[1]+(it[1]-Z[1])*dt,It=Y[2]+Z[2]+(it[2]-Z[2])*dt;for(let wt=0;wt<$.length;wt++){let Ct=$[wt],kt=Ct.direction,Lt=j[0]*kt[0]+j[1]*kt[1]+j[2]*kt[2],Qt=wt===0?Ft(I,U,J[2],Lt,R.kind==="plush"?.48:.38):1,Nt=Math.max(0,(Lt+.13)/1.13)*Ct.intensity*Qt;zt+=Ct.color[0]*Nt,At+=Ct.color[1]*Nt,It+=Ct.color[2]*Nt}Mt=q[0]*zt*z[gt+15],K=q[1]*At*z[gt+16],Tt=q[2]*It*z[gt+17],w.neutral?(p(Mt,K,Tt,W,ct),Mt=ct[0],K=ct[1],Tt=ct[2]):(Mt=F[u(Math.round(Mt*512),0,4096)],K=F[u(Math.round(K*512),0,4096)],Tt=F[u(Math.round(Tt*512),0,4096)])}let Et=Math.max(1,Math.ceil(f*1.15)),Xt=Math.min(.9,z[gt+18]*yt*pt*2*R.sampleWeight)*Math.min(1,f/Et)*R.opacity;se++;for(let zt=0;zt<Et;zt++){let At=(zt+.5)/Et,It=At*f,wt=1;for(;wt<4&&et[wt]<It;)wt++;let Ct=(It-et[wt-1])/Math.max(1e-6,et[wt]-et[wt-1]),kt=(wt-1)*3,Lt=wt*3,Qt=J[kt]+(J[Lt]-J[kt])*Ct,Nt=J[kt+1]+(J[Lt+1]-J[kt+1])*Ct,ae=J[kt+2]+(J[Lt+2]-J[kt+2])*Ct,ge=Math.floor(Qt),we=Math.floor(Nt),Ae=Qt-ge,Ee=Nt-we;for(let ye=0;ye<2;ye++)for(let Le=0;Le<2;Le++){let Ge=ge+Le,We=we+ye;if(Ge<0||Ge>=h||We<0||We>=l)continue;let on=We*h+Ge;if(ae>n[on]+13e-6||ae<-1||ae>1)continue;let L=(Le?Ae:1-Ae)*(ye?Ee:1-Ee)*Xt*(1-At*.78),Q=1-L,at=on*4;o[at]=Mt*L+o[at]*Q,o[at+1]=K*L+o[at+1]*Q,o[at+2]=Tt*L+o[at+2]*Q,o[at+3]=L+o[at+3]*Q}}}}for(let R of _t)Yt(R,!0);for(let R=0;R<s.length;R+=4){let G=u(o[R+3],0,1),z=G>1e-5?1/G:0;s[R]=c[u(Math.round(o[R]*z*4096),0,4096)],s[R+1]=c[u(Math.round(o[R+1]*z*4096),0,4096)],s[R+2]=c[u(Math.round(o[R+2]*z*4096),0,4096)],s[R+3]=Math.round(G*255)}return{id:w.id,version:w.version,animationTime:w.animationTime,assembly:w.assembly,width:h,height:l,pixels:s.buffer,stats:{ms:performance.now()-E,triangles:Gt,pixels:Wt,fibers:se,calls:Rt.length+_t.length}}}return{draw:A}}var ja=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.minPreviewScale=.62,this.staticPreview=!1,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${El.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=El()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=is(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e,{animationTime:n,assembly:s=1}={}){this._disposed||(this._pending={scene:t,camera:e,animationTime:n,assembly:s,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let o of s.geometries)for(let a of["positions","normals","indices","uv","colors"])o[a]&&r.push(o[a].buffer);for(let o of s.textures)r.push(o.data.buffer);for(let o of s.fibers)r.push(o.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let o of this._waiters.splice(0))o.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n,animationTime:s,assembly:r}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let o=this.highQuality||Math.max(this._width,this._height)>=1e3,a=this.highQuality?1600:o?this.captureLimit:Math.round(this.previewLimit*(this.staticPreview?1:this._adaptive)),h=Math.min(1,a/Math.max(this.domElement.width,this.domElement.height)),l={id:n,animationTime:s,assembly:r,version:this._version,width:Math.max(1,Math.round(this.domElement.width*h)),height:Math.max(1,Math.round(this.domElement.height*h)),viewProjection:qr(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?is(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===Fs,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.022,.022,.022],sky:[.026,.026,.026],ground:[.02,.022,.025]},u=new Set,d=new Set,p=0;t.traverseVisible?.(x=>{x.isInstancedMesh&&x.name==="surface-fibers"&&(p+=x.count)});let c=o?Math.min(126e3,l.width*l.height*.4):Math.min(72e3,l.width*l.height*.26),_=Math.max(1,Math.ceil(p/Math.max(3e3,c))),v=x=>{if(!x)return null;let M=(x.uuid||x.id)+":"+(x.version||0);if(d.has(M))return M;let S=x.image||x.source?.data,T=S?.data,A=S?.width,w=S?.height;if(!T&&S?.getContext)try{T=S.getContext("2d")?.getImageData(0,0,A,w)?.data}catch{}return!T||!A||!w?null:(d.add(M),this._knownTextures.has(M)||l.textures.push({id:M,width:A,height:w,data:new Uint8Array(T),channels:Math.round(T.length/(A*w)),repeat:[x.repeat?.x??1,x.repeat?.y??1],offset:[x.offset?.x||0,x.offset?.y||0],wrapS:x.wrapS,wrapT:x.wrapT,flipY:!!x.flipY,srgb:x.colorSpace==="srgb"}),M)},g=(x,M,S="")=>{let T=x.geometry,A=T?.attributes?.position;if(!A||x.isSkinnedMesh)return;let w=T.uuid+":"+(A.version||0)+":"+(T.attributes.normal?.version||0);u.has(w)||(u.add(w),this._knownGeometry.has(w)||l.geometries.push({id:w,positions:Qa(A,3),normals:Qa(T.attributes.normal,3),uv:Qa(T.attributes.uv,2),colors:Qa(T.attributes.color,3),indices:T.index?new Uint32Array(T.index.array):null}));let E=Array.isArray(x.material)?T.groups:[{start:T.drawRange?.start||0,count:T.drawRange?.count??1/0,materialIndex:0}];for(let b=0;b<E.length;b++){let y=E[b],P=Array.isArray(x.material)?x.material[y.materialIndex]:x.material;!P||P.isShadowMaterial||P.visible===!1||(P.opacity??1)<.002||l.meshes.push({id:x.uuid+S+":"+b,geometry:w,matrix:Array.from(M),start:y.start,count:y.count,order:x.renderOrder||0,castShadow:x.castShadow!==!1,receiveShadow:x.receiveShadow!==!1,material:{color:is(P.color),emissive:is(P.emissive,[0,0,0]).map(D=>D*(P.emissiveIntensity??1)),opacity:P.opacity??1,transparent:!!P.transparent,side:P.side??0,roughness:P.roughness??.75,metalness:P.metalness||0,depthTest:P.depthTest!==!1,depthWrite:P.depthWrite!==!1,alphaTest:P.alphaTest||0,unlit:!!(P.isMeshBasicMaterial||P.isShadowMaterial),shadowOnly:!!P.isShadowMaterial,shadowFade:P.userData?.shadowFade,toneMapped:P.toneMapped!==!1,map:v(P.map),bump:v(P.bumpMap),bumpScale:P.bumpScale||0,surfaceKind:x.userData.surfaceMaterial||P.name,vertexColors:!!P.vertexColors}})}},m=x=>{if(x.visible!==!1){if(x.isLight){let M=is(x.color),S=x.intensity??1;if(x.isHemisphereLight){let T=is(x.groundColor);for(let A=0;A<3;A++)l.sky[A]+=M[A]*S*.22,l.ground[A]+=T[A]*S*.2}else if(x.isAmbientLight)for(let T=0;T<3;T++)l.ambient[T]+=M[T]*S*.3;else if(x.isDirectionalLight||x.isPointLight||x.isSpotLight){if(!l.shadow&&x.isDirectionalLight&&x.castShadow&&this.shadowMap.enabled){x.shadow.updateMatrices(x);let P=qr(x.shadow.camera.projectionMatrix.elements,x.shadow.camera.matrixWorldInverse.elements),D=qr(e.matrixWorld.elements,e.projectionMatrixInverse.elements);l.shadow={viewProjection:P,screenMatrix:qr(P,D),size:o?512:384,radius:J1(x.shadow.radius||2.5,1,5)}}x.target?.updateMatrixWorld(!0);let T=x.matrixWorld.elements,A=x.target?.matrixWorld.elements,w=T[12]-(A?.[12]||0),E=T[13]-(A?.[13]||0),b=T[14]-(A?.[14]||0),y=Math.hypot(w,E,b)||1;l.lights.push({direction:[w/y,E/y,b/y],color:M,intensity:S/Math.PI})}}if(x.isMesh&&(!e.layers||e.layers.test(x.layers)))if(x.isInstancedMesh){if(x.name==="surface-fibers"&&this.renderFibers){x.geometry.computeBoundingBox();let M=x.geometry.boundingBox.max.y,S=x.instanceMatrix.array,T=x.instanceColor?.array,A=x.userData.fiberProfile||x.geometry.userData.fiberProfile||Array.from({length:5},(P,D)=>[0,M*D/4,0]),w=x.userData.fiberRadius||x.geometry.userData.fiberRadius||.001,E=new Float32Array(Math.ceil(x.count/_)*20),b=0;for(let P=0;P<x.count;P+=_){let D=P*16;for(let[F,W,$]of A)E[b++]=S[D]*F+S[D+4]*W+S[D+8]*$+S[D+12],E[b++]=S[D+1]*F+S[D+5]*W+S[D+9]*$+S[D+13],E[b++]=S[D+2]*F+S[D+6]*W+S[D+10]*$+S[D+14];E[b++]=T?T[P*3]:1,E[b++]=T?T[P*3+1]:1,E[b++]=T?T[P*3+2]:1,E[b++]=w*Math.hypot(S[D],S[D+1],S[D+2]),E[b++]=x.userData.fiberTones?.[P]??1}let y=x.userData.surfaceMaterial||x.parent?.userData.surfaceMaterial||x.parent?.material?.name;l.fibers.push({ownerId:x.parent?.uuid+":0",matrix:Array.from(x.matrixWorld.elements),segments:E,color:is(x.material.color),kind:y,sampleWeight:Math.min(2.3,Math.sqrt(_)),opacity:(x.material.opacity??1)*(["fabric","knit"].includes(y)?.9:1)})}else if(x.name!=="surface-fibers"&&x.count<=256)for(let M=0;M<x.count;M++)g(x,qr(x.matrixWorld.elements,x.instanceMatrix.array.subarray(M*16,M*16+16)),":"+M)}else g(x,x.matrixWorld.elements);for(let M of x.children||[])m(M)}};return m(t),l.lights.length||l.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),l.lights=l.lights.slice(0,4),l.geometryIds=[...u],l.textureIds=[...d],this._knownGeometry=u,this._knownTextures=d,this.info.memory={geometries:u.size,textures:d.size},l}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this.onFramePainted?.(t),this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(this.minPreviewScale,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=El(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var $1=new Set(["thinking","processing","waiting","blocked","done"]),Tl=Math.PI*2,K1=i=>(i=Se.clamp(i,0,1),i*i*(3-2*i));function zu(i,t){if(!$1.has(t.action))return null;let e=new Pe;e.name="activity";let n=i.root.userData.anatomy==="blob",s=t.motionStyle==="auto"||!t.motionStyle?t.action==="thinking"?"dots":"liquid":t.motionStyle,r=i.surfaces.find(g=>g.name.startsWith("blob-")),o=new Set,a=[],h=[],l=new jt(t.colors.body);l.getHSL({}).l>.84&&l.lerp(new jt("#72848e"),.22);let u=new yn({color:l,roughness:.43,metalness:.04});u.name="activity-rubber",o.add(u);let d=new Bn(1,20,14);o.add(d);let p=d.clone();o.add(p);let c=p.attributes.position;for(let g=0;g<c.count;g++){let m=c.getY(g),x=.45+.55*K1((m+1)/2);c.setXYZ(g,c.getX(g)*x,m<0?m*2.25:m,c.getZ(g)*x)}if(c.needsUpdate=!0,p.computeVertexNormals(),n&&r&&s==="dots")for(let g of[-1,1]){let m=new Me(r.geometry,r.material);m.name="thinking-companion",m.scale.copy(r.scale);let x=new Pe;x.visible=!1,x.add(m),e.add(x),h.push({wrapper:x,side:g})}for(let g=0;g<30;g++){let m=new Me(s==="liquid"&&g%10===0?p:d,u);m.castShadow=!1,m.visible=!1,e.add(m),a.push(m)}let _=i.root.userData,v=i.height||2.1;return{group:e,bounds:new Te(new B(-1.34,Math.min(0,v*.5-.82),-.58),new B(1.34,s==="dots"&&!n?v+.4:Math.max(v,v*.5+.82),.58)),tick(g){e.visible=!0;let m=t.action,x=m==="thinking"||m==="processing",M=g*(t.motionSpeed||1),S=v*.5;for(let T of a)T.visible=!1;for(let T of h)T.wrapper.visible=!1;if(x&&n&&s==="dots"&&r){let T=Math.sin(M*3.4),A=.68;i.root.scale.copy(_.restScale).multiplyScalar(A),i.root.position.y=S-v*A*.5+T*.1;for(let{wrapper:w,side:E}of h)w.visible=!0,w.scale.setScalar(.15),w.position.set(E*1.04,S+Math.sin(M*3.4-E*.72)*.1,0),w.rotation.z=Math.sin(M*2.1-E)*.05}else if(x&&s==="dots")for(let T=0;T<3;T++){let A=a[T];A.visible=!0,A.position.set((T-1)*.28,v+.2+Math.sin(M*3.4-T*.72)*.045,.1),A.scale.setScalar(.065)}else if(x){let T=s==="orbit",A=T?12:30;if(n){let E=T?.78:.72;i.root.scale.copy(_.restScale).multiplyScalar(E),i.root.position.y=S-v*E*.5,i.root.rotation.z=Math.sin(M*1.7)*.035}let w=n?1.03:.94;for(let E=0;E<A;E++){let b=a[E],y=E%10,P=Math.floor(E/10),D=M*(T?1.3:1.85)+(T?E/A*Tl:P/3*Tl-y*.072),F=w*(T?1:.98+.045*Math.sin(M*1.2+P*1.8)),W=T?.052:y===0?.093:.052*Math.pow(1-y/10,1.35);b.visible=!0,b.position.set(Math.cos(D)*F,S+Math.sin(D)*F*(T?.42:.61),Math.sin(D)*.44),b.scale.set(W,W*(!T&&y===0?1.18:1),W*.86),b.rotation.z=D}}else if(m==="waiting"){i.root.rotation.z+=Math.sin(M*.9)*.065;for(let T of i.eyeGroups)T.scale.y=.52}else if(m==="blocked"){let T=M%3.4;i.root.rotation.z+=T<.48?Math.sin(T*25)*.055*(1-T/.48):0;for(let A of i.eyeGroups)A.scale.y=1.1}else if(m==="done"){let T=M%3.8,A=T<.8?Math.sin(T/.8*Math.PI):0;i.root.position.y+=Math.max(0,A)*.18,i.root.rotation.z+=A*.04;for(let w=0;w<6;w++){let E=a[w],b=(T-.2)/.75;if(b<0||b>1)continue;let y=w/6*Tl;E.visible=!0,E.position.set(Math.cos(y)*(.55+b*.48),v*.7+Math.sin(y)*(.3+b*.3),.2),E.scale.setScalar(.038*Math.sin(b*Math.PI))}}},dispose(){e.removeFromParent();for(let g of o)g.dispose()}}}var yy=new B(0,1,0),tc=null,Zr=i=>i?.action==="done"?.42:i?.action==="blocked"?.12:i?.action==="processing"?.25:i?.action==="thinking"?.28:i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0,Gu=(i,t,e)=>Math.min(e,Math.max(t,i));function ec(i){let t={...i};for(let e of["name","notes","reference","palette","output","eyeColorManual","provenance"])delete t[e];return JSON.stringify(t)}function ku(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function Q1(i,t){let e=i.root.userData.anatomy==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,o]of i.arms.entries())o.rotation.z=(r?1:-1)*.62,o.rotation.x=-.62;for(let[r,o]of i.legs.entries())o.position.y+=.1,o.position.z+=.1,o.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.15,i.head.position.z+=.025,t.action==="work"&&(i.head.rotation.y=-.08)),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new Te().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var Jr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(tc!=="software"&&new URLSearchParams(window.location.search).get("renderer")!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(tc="webgl",this.renderer=new Va({canvas:t,context:s,...n})):(tc="software",this.renderer=new ja(t)),t.dataset.renderMode=tc,this.renderer.onFramePainted=l=>{this.renderedTime=l.animationTime,this.renderedAssembly=l.assembly,t.dataset.animationTime=Number(l.animationTime).toFixed(3)},this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:800,this.renderer.minPreviewScale=e?.62:.86),this.renderer.outputColorSpace=gn,this.renderer.toneMapping=Fs,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Xo,this.scene=new Bi,this.camera=new Xi(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let l=new Ws(this.renderer),u=new Wa;this.environment=l.fromScene(u,.035),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.42,u.dispose(),l.dispose()}this.scene.add(new Nr("#ffffff","#dce2ed",1.15));let r=new Si("#fffdfb",2.3);r.position.set(-3.8,5.2,4.4),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.01,r.shadow.radius=5,this.scene.add(r);let o=new Si("#eef3ff",.62);o.position.set(4,2.8,2.4),this.scene.add(o);let a=new Si("#f4f7ff",.24);a.position.set(0,-2,4),this.scene.add(a);let h=new Si("#ffffff",.8);h.position.set(2,4.2,-3.6),this.scene.add(h),this.turn=new Pe,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.activity?.dispose(),this.activity=null,this.avatar&&(this.turn.remove(this.avatar.root),ku(this.avatar.root)),this.config=structuredClone(t),this.avatar=Lu(t),this.props=Bu(this.avatar,t),Q1(this.avatar,t),Cu(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.activity=zu(this.avatar,t),this.activity&&this.turn.add(this.activity.group),this.assemblyParts=[this.avatar.torso,this.avatar.head,...this.avatar.legs,...this.avatar.arms,...this.props.parts].filter((n,s,r)=>n&&r.indexOf(n)===s).map((n,s)=>({object:n,position:n.position.clone(),scale:n.scale.clone(),delay:Math.min(.38,s*.048)})),this.turn.rotation.y=t.camera==="side"?Math.PI/2:t.camera==="threeQuarter"?Math.PI/4:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new Te().setFromObject(this.turn);this.center=e.getCenter(new B),this.bounds=e.getSize(new B),this.scene.background=null,this.fit(this.frame.width,this.frame.height),this.render(Zr(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=new Te;this.turn.scale.setScalar(1),this.turn.position.y=0;let o=this.avatar.root.userData;this.avatar.root.position.y=o.restY,this.avatar.root.scale.copy(o.restScale),this.avatar.root.rotation.copy(o.restRotation);for(let v of this.assemblyParts||[])v.object.position.copy(v.position),v.object.scale.copy(v.scale);if(this.turn.updateMatrixWorld(!0),this.avatar.root.traverseVisible(v=>{!v.isMesh||v.isInstancedMesh||(v.geometry.computeBoundingBox(),r.union(v.geometry.boundingBox.clone().applyMatrix4(v.matrixWorld)))}),this.activity&&r.union(this.activity.bounds.clone().applyMatrix4(this.turn.matrixWorld)),r.isEmpty())return;let a=!!this.props?.prop&&this.props.prop!=="none";if(n.framing!=="full"&&!a&&n.action!=="sleep"&&!this.activity){let v=r.getSize(new B);["human","animal"].includes(this.avatar.root.userData.anatomy)&&(r.min.y=r.max.y-v.y*(n.framing==="portrait"?.55:.79))}let h=r.getCenter(new B),l=n.action==="work"?1.85:n.action==="read"?1.3:.52;this.camera.position.copy(h).add(new B(0,l,8)),this.camera.lookAt(h),this.camera.updateMatrixWorld(!0);let u=new Te;for(let v of[r.min.x,r.max.x])for(let g of[r.min.y,r.max.y])for(let m of[r.min.z,r.max.z])u.expandByPoint(new B(v,g,m).applyMatrix4(this.camera.matrixWorldInverse));let d=u.getSize(new B),p=Math.max(d.y,d.x/s)*(this.activity?1.46:1.4)*(72/n.scale),c=(u.min.x+u.max.x)/2,_=(u.min.y+u.max.y)/2;this.camera.left=c-p*s/2,this.camera.right=c+p*s/2,this.camera.top=_+p/2,this.camera.bottom=_-p/2,this.camera.updateProjectionMatrix()}render(t=0,e=1){(this.reducedMotion||matchMedia("(prefers-reduced-motion: reduce)").matches)&&(t=Zr(this.config)),this.lastTime=t,this.turn.scale.setScalar(1),this.turn.position.y=0;for(let h of this.assemblyParts||[])h.object.position.copy(h.position),h.object.scale.copy(h.scale);if(!this.avatar)return;let n=this.avatar,s=this.config,r=n.root.userData;if(n.root.position.y=r.restY,n.root.scale.copy(r.restScale),n.root.rotation.copy(r.restRotation),s.action==="bounce"){let h=Math.max(0,Math.sin(t*3.1));n.root.position.y+=h*.24}else{let h=Math.sin(t*(s.action==="sleep"?1.3:1.8));n.root.scale.y=r.restScale.y*(1+h*.008),s.action==="listen"&&(n.root.rotation.z+=Math.sin(t*2)*.035),(s.expression==="curious"||s.expression==="skeptical")&&(n.root.rotation.z+=.055),s.expression==="shy"&&(n.root.rotation.y+=.11),s.expression==="sleepy"&&(n.root.rotation.z-=.04),s.expression==="expectant"&&(n.root.rotation.x+=.045),s.expression==="panicked"&&(n.root.rotation.x-=.08),s.expression==="laughing"&&(n.root.rotation.x-=.06)}let o=t%(s.action==="blink"?2.3:5.5),a=Math.abs(o-.17)<.16?Math.max(.07,Math.abs(o-.17)/.16):1;for(let h of n.eyeGroups)h.scale.y=s.expression==="closed"||s.expression==="wink"||["delighted","laughing"].includes(s.expression)||s.action==="sleep"||s.action==="work"?1:a;if(n.tail&&s.action!=="sleep"&&(n.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.activity?.tick(t),e<1){let h=Gu(e,0,1),l=1-Math.pow(1-h,3),u=Math.sin(h*Math.PI)*.045;this.turn.scale.setScalar(Math.max(.001,l+u)),this.turn.position.y=(1-l)*.16}this.renderer.render(this.scene,this.camera,{animationTime:t,assembly:e}),this.renderer.isSoftwareRenderer||(this.renderedTime=t,this.renderedAssembly=e)}dispose(){this.activity?.dispose(),this.avatar&&ku(this.avatar.root),this.environment?.dispose(),this.scene.traverse(t=>{t.isLight&&t.shadow?.dispose()}),this.renderer.dispose()}},Hu=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.motionPreference=matchMedia("(prefers-reduced-motion: reduce)"),this.world=new Jr(this.canvas),this.elapsed=0,this.lastTick=performance.now(),this.assemblyStart=null,this.playing=!this.motionPreference.matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let r=Math.min(.15,(s-this.lastTick)/1e3);if(this.lastTick=s,!this.visible||document.hidden||this.capturing)return;this.playing&&!this.motionPreference.matches&&(this.elapsed+=r);let o=this.assemblyStart!==null,a=o?Gu((s-this.assemblyStart)/920,0,1):1;!this.playing&&!o||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?95:25)||(this.lastFrame=s,this.world.render(this.elapsed,a),this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3),a>=1&&o&&(this.assemblyStart=null))},this.raf=requestAnimationFrame(this.loop)}update(t){if(this.disposed)return;let e=ec(t);this.updateKey!==e&&(this.updateKey=e,this.pending=structuredClone(t),this.revision++,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(async()=>{if(this.updateFrame=0,this.disposed)return;let n=this.revision;this.canvas.dataset.previewStatus="loading";try{let s=["action","family","shape","presetId"].some(r=>this.world.config?.[r]!==this.pending[r]);this.world.update(this.pending),s&&(this.elapsed=Zr(this.pending)),this.canvas.dataset.revision=String(n);for(let r of["version","rendererVersion","family","shape","material","action","camera","framing","background","headScale","bodyWidth","motionStyle"])this.canvas.dataset[r]=String(this.pending[r]);for(let r of["head","face","neck","prop"])this.canvas.dataset[r+"Accessory"]=this.pending.accessories[r];if(this.resize(),this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3),this.wantsAssembly&&!this.world.reducedMotion&&!this.motionPreference.matches&&(this.wantsAssembly=!1,this.assemblyStart=performance.now()),await this.world.renderer.flush?.(),this.disposed||n!==this.revision)return;this.canvas.dataset.renderedRevision=String(n),this.canvas.dataset.previewStatus="ready",this.onReady()}catch(s){if(this.disposed||n!==this.revision)return;this.canvas.dataset.previewStatus="failed",console.error("Character preview:",s),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){if(this.disposed)return;let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,o=Math.max(1,s.width),a=o/r;a>s.height&&(a=s.height,o=a*r),this.canvas.style.width=o+"px",this.canvas.style.height=a+"px",this.world.fit(Math.round(o),Math.round(a)),this.world.render(this.elapsed)}setPlaying(t){this.playing=t&&!this.motionPreference.matches&&!this.world.reducedMotion,this.lastTick=performance.now(),this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing,this.world.renderer.previewLimit=this.playing?800:960),this.world.config&&(this.world.render(this.elapsed),this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3))}setReducedMotion(t){this.world.reducedMotion=!!t,t?(this.elapsed=Zr(this.world.config),this.setPlaying(!1)):this.world.config&&this.resize()}async seek(t,e=1){if(this.disposed)throw Error("\u9884\u89C8\u5DF2\u5173\u95ED");if(!Number.isFinite(t)||t<0||!Number.isFinite(e)||e<0||e>1)throw Error("\u5E27\u4F4D\u7F6E\u65E0\u6548");if(this.updateFrame||this.canvas.dataset.previewStatus!=="ready")throw Error("\u5F53\u524D\u89D2\u8272\u4ECD\u5728\u8F7D\u5165");let n=this.revision;if(this.setPlaying(!1),this.assemblyStart=null,this.wantsAssembly=!1,this.elapsed=t,this.world.render(t,e),await this.world.renderer.flush?.(),this.disposed||n!==this.revision)throw Error("\u9884\u89C8\u5DF2\u66F4\u65B0\u6216\u5173\u95ED");return this.canvas.dataset.animationTime=Number(this.world.renderedTime).toFixed(3),{time:this.world.renderedTime,assembly:this.world.renderedAssembly??1}}assemble(){this.world.reducedMotion||matchMedia("(prefers-reduced-motion: reduce)").matches||(this.wantsAssembly=!0,this.updateFrame||(this.wantsAssembly=!1,this.assemblyStart=performance.now()))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=this.revision,r=()=>{if(this.disposed||s!==this.revision)throw Error("\u9884\u89C8\u5DF2\u66F4\u65B0\u6216\u5173\u95ED\uFF1B\u5DF2\u53D6\u6D88\u65E7\u7248\u672C PNG \u5BFC\u51FA")};if(this.disposed)return Promise.reject(Error("\u9884\u89C8\u5DF2\u5173\u95ED\uFF0C\u65E0\u6CD5\u5BFC\u51FA PNG"));if(!Number.isFinite(t)||t<1||t>8192)return Promise.reject(Error("PNG \u5BFC\u51FA\u5C3A\u5BF8\u65E0\u6548"));if(!n||this.canvas.dataset.previewStatus!=="ready"||this.updateFrame||ec(n)!==ec(this.world.config)||!Number.isFinite(this.world.renderedTime))return Promise.reject(Error("\u89D2\u8272\u9884\u89C8\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7B49\u5F85\u5F53\u524D\u5E27\u5B8C\u6210"));let o=this.world.reducedMotion||this.motionPreference.matches,a=this.world.renderedTime,h=this.world.renderedAssembly??1,l=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let u;r(),this.capturing=!0;try{let[d,p]=n.aspect.split(":").map(Number),c=d>=p?t:Math.round(t*d/p),_=p>=d?t:Math.round(t*p/d),v=document.createElement("canvas");u=new Jr(v),u.reducedMotion=o,u.renderer.highQuality=!0,u.renderer.captureLimit=t,u.renderer.setPixelRatio(1),u.frame={width:c,height:_},u.update(n),u.render(a,h),await u.renderer.flush?.(),r();let g=await new Promise(m=>v.toBlob(m,"image/png"));if(r(),!g)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return g}finally{u?.dispose(),this.capturing=!1}});return this.captureQueue=l,l}dispose(){this.disposed||(this.disposed=!0,this.revision++,cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove())}},Ti,Vu=Promise.resolve(),ui=new Map;function vy(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=ec(e)+t;if(ui.has(n))return Promise.resolve(ui.get(n));let s=Vu.then(async()=>{if(ui.has(n))return ui.get(n);Ti||(Ti=new Jr(document.createElement("canvas"),{thumbnail:!0})),Ti.frame={width:t,height:t},Ti.update(e),Ti.fit(t,t),Ti.render(Zr(e)),await Ti.renderer.flush?.();let r=await new Promise(a=>Ti.renderer.domElement.toBlob(a,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let o=URL.createObjectURL(r);if(ui.set(n,o),ui.size>200){let a=ui.keys().next().value;URL.revokeObjectURL(ui.get(a)),ui.delete(a)}return o});return Vu=s.catch(()=>{}),s}export{Hu as CharacterPreview,vy as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
