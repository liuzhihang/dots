var nh=0,zl=1,ih=2;var kl=1,Wo=2,Zn=3,ii=0,je=1,dn=2,ai=0,Ni=1,Hl=2,Vl=3,Gl=4,sh=5,_i=100,rh=101,oh=102,ah=103,lh=104,ch=200,hh=201,uh=202,dh=203,xo=204,_o=205,fh=206,ph=207,mh=208,gh=209,xh=210,_h=211,yh=212,vh=213,Mh=214,Xo=0,qo=1,Yo=2,Oi=3,Zo=4,Jo=5,$o=6,Ko=7,Qo=0,bh=1,Sh=2,li=0,wh=1,Eh=2,Th=3,Ah=4,Rh=5,Ch=6,Ds=7;var Wl=300,Zi=301,Ji=302,jo=303,ta=304,Or=306,vs=1e3,xi=1001,yo=1002,pn=1003,Ih=1004;var Br=1005;var bn=1006,ea=1007;var Jn=1008;var zn=1009,Xl=1010,ql=1011,Ls=1012,na=1013,Ei=1014,kn=1015,Us=1016,ia=1017,sa=1018,Fs=1020,Yl=35902,Zl=35899,Jl=1021,$l=1022,gn=1023,Ms=1026,Ns=1027,ra=1028,oa=1029,Kl=1030,aa=1031;var la=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,ya=37811,va=37812,Ma=37813,ba=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,Da=36495,La=36283,Ua=36284,Fa=36285,Na=36286;var ar=2300,vo=2301,go=2302,Al=2400,Rl=2401,Cl=2402;var Ph=3200,Dh=3201;var Oa=0,Lh=1,ci="",cn="srgb",Bi="srgb-linear",lr="linear",_e="srgb";var Fi=7680;var Il=519,Uh=512,Fh=513,Nh=514,Ql=515,Oh=516,Bh=517,zh=518,kh=519,Pl=35044,Os=35048;var jl="300 es",Nn=2e3,cr=2001;var si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=1234567,ir=Math.PI/180,bs=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function Wu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xu(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function qu(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Yu(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function Zu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ku(i,t){return i+Math.random()*(t-i)}function Qu(i){return i*(.5-Math.random())}function ju(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(i){return i*ir}function ed(i){return i*bs}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),u=o((t+n)/2),l=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*l,c*f,a*h);break;case"YZY":i.set(c*f,a*u,c*l,a*h);break;case"ZXZ":i.set(c*l,c*f,a*u,a*h);break;case"XZX":i.set(a*u,c*x,c*m,a*h);break;case"YXY":i.set(c*m,a*u,c*x,a*h);break;case"ZYZ":i.set(c*x,c*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var we={DEG2RAD:ir,RAD2DEG:bs,generateUUID:$i,clamp:ae,euclideanModulo:tc,mapLinear:Wu,inverseLerp:Xu,lerp:sr,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:Qu,seededRandom:ju,degToRad:td,radToDeg:ed,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:ln,denormalize:_s},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],u=n[s+2],l=n[s+3],f=r[o+0],m=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=M;return}if(l!==M||c!==f||h!==m||u!==x){let d=1-a,p=c*f+h*m+u*x+l*M,w=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){let E=Math.sqrt(g),A=Math.atan2(E,p*w);d=Math.sin(d*A)/E,a=Math.sin(a*A)/E}let v=a*w;if(c=c*d+f*v,h=h*d+m*v,u=u*d+x*v,l=l*d+M*v,d===1-a){let E=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=E,h*=E,u*=E,l*=E}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],u=n[s+3],l=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*l+c*m-h*f,t[e+1]=c*x+u*f+h*l-a*m,t[e+2]=h*x+u*m+a*f-c*l,t[e+3]=u*x-a*l-c*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),u=a(s/2),l=a(r/2),f=c(n/2),m=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*l+h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l-f*m*x;break;case"YXZ":this._x=f*u*l+h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l+f*m*x;break;case"ZXY":this._x=f*u*l-h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l-f*m*x;break;case"ZYX":this._x=f*u*l-h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l+f*m*x;break;case"YZX":this._x=f*u*l+h*m*x,this._y=h*m*l+f*u*x,this._z=h*u*x-f*m*l,this._w=h*u*l-f*m*x;break;case"XZY":this._x=f*u*l-h*m*x,this._y=h*m*l-f*u*x,this._z=h*u*x+f*m*l,this._w=h*u*l+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],u=e[6],l=e[10],f=n+a+l;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(n>a&&n>l){let m=2*Math.sqrt(1+n-a-l);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>l){let m=2*Math.sqrt(1+a-n-l);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+l-n-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*c,this._y=s*u+o*c+r*a-n*h,this._z=r*u+o*h+n*c-s*a,this._w=o*u-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,a),l=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=o*l+this._w*f,this._x=n*l+this._x*f,this._y=s*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*h+o*l-a*u,this.y=n+c*u+a*h-r*l,this.z=s+c*l+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new z,Rc=new Qe,jt=class i{constructor(t,e,n,s,r,o,a,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],u=n[4],l=n[7],f=n[2],m=n[5],x=n[8],M=s[0],d=s[3],p=s[6],w=s[1],g=s[4],v=s[7],E=s[2],A=s[5],b=s[8];return r[0]=o*M+a*w+c*E,r[3]=o*d+a*g+c*A,r[6]=o*p+a*v+c*b,r[1]=h*M+u*w+l*E,r[4]=h*d+u*g+l*A,r[7]=h*p+u*v+l*b,r[2]=f*M+m*w+x*E,r[5]=f*d+m*g+x*A,r[8]=f*p+m*v+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],l=u*o-a*h,f=a*c-u*r,m=h*r-o*c,x=e*l+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=l*M,t[1]=(s*h-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(n*c-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nl.makeScale(t,e)),this}rotate(t){return this.premultiply(nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nl=new jt;function ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=hr("canvas");return i.style.display="block",i}var Cc={};function Ss(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ic=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}var pe=od();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=hr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ld=0,sl=new z,mn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=bn,o=Jn,a=gn,c=zn,h=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=$i(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Wl;mn.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],l=c[8],f=c[1],m=c[5],x=c[9],M=c[2],d=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-M)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+M)<.1&&Math.abs(x+d)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(h+1)/2,v=(m+1)/2,E=(p+1)/2,A=(u+f)/4,b=(l+M)/4,R=(x+d)/4;return g>v&&g>E?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=A/n,r=b/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=R/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-x)*(d-x)+(l-M)*(l-M)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(l-M)/w,this.z=(f-u)/w,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new mn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ue=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Zr.subVectors(this.max,Js),os.subVectors(t.a,Js),as.subVectors(t.b,Js),ls.subVectors(t.c,Js),ui.subVectors(as,os),di.subVectors(ls,as),Pi.subVectors(os,ls);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Pi.z,Pi.y,ui.z,0,-ui.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!rl(e,os,as,ls,Zr)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,os,as,ls,Zr))?!1:(Jr.crossVectors(ui,di),e=[Jr.x,Jr.y,Jr.z],rl(e,os,as,ls,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,Yr=new Ue,os=new z,as=new z,ls=new z,ui=new z,di=new z,Pi=new z,Js=new z,Zr=new z,Jr=new z,Di=new z;function rl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),h=e.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}var cd=new Ue,$s=new z,ol=new z,qn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(ol)),this.expandByPoint($s.copy(t.center).sub(ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qn=new z,al=new z,$r=new z,fi=new z,ll=new z,Kr=new z,cl=new z,dr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){al.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(al);let r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=fi.dot(this.direction),c=-fi.dot($r),h=fi.lengthSq(),u=Math.abs(1-o*o),l,f,m,x;if(u>0)if(l=o*c-a,f=o*a-c,x=r*u,l>=0)if(f>=-x)if(f<=x){let M=1/u;l*=M,f*=M,m=l*(l+o*f+2*a)+f*(o*l+f+2*c)+h}else f=r,l=Math.max(0,-(o*f+a)),m=-l*l+f*(f+2*c)+h;else f=-r,l=Math.max(0,-(o*f+a)),m=-l*l+f*(f+2*c)+h;else f<=-x?(l=Math.max(0,-(-o*r+a)),f=l>0?-r:Math.min(Math.max(-r,-c),r),m=-l*l+f*(f+2*c)+h):f<=x?(l=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+h):(l=Math.max(0,-(o*r+a)),f=l>0?r:Math.min(Math.max(-r,-c),r),m=-l*l+f*(f+2*c)+h);else f=o>0?-r:r,l=Math.max(0,-(o*f+a)),m=-l*l+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(al).addScaledVector($r,f),m}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(a=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){ll.subVectors(e,t),Kr.subVectors(n,t),cl.crossVectors(ll,Kr);let o=this.direction.dot(cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let c=a*this.direction.dot(Kr.crossVectors(fi,Kr));if(c<0)return null;let h=a*this.direction.dot(ll.cross(fi));if(h<0||c+h>o)return null;let u=-a*fi.dot(cl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,c,h,u,l,f,m,x,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,u,l,f,m,x,M,d)}set(t,e,n,s,r,o,a,c,h,u,l,f,m,x,M,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=u,p[10]=l,p[14]=f,p[3]=m,p[7]=x,p[11]=M,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let f=o*u,m=o*l,x=a*u,M=a*l;e[0]=c*u,e[4]=-c*l,e[8]=h,e[1]=m+x*h,e[5]=f-M*h,e[9]=-a*c,e[2]=M-f*h,e[6]=x+m*h,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,m=c*l,x=h*u,M=h*l;e[0]=f+M*a,e[4]=x*a-m,e[8]=o*h,e[1]=o*l,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,m=c*l,x=h*u,M=h*l;e[0]=f-M*a,e[4]=-o*l,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,m=o*l,x=a*u,M=a*l;e[0]=c*u,e[4]=x*h-m,e[8]=f*h+M,e[1]=c*l,e[5]=M*h+f,e[9]=m*h-x,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*h,x=a*c,M=a*h;e[0]=c*u,e[4]=M-f*l,e[8]=x*l+m,e[1]=l,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=m*l+x,e[10]=f-M*l}else if(t.order==="XZY"){let f=o*c,m=o*h,x=a*c,M=a*h;e[0]=c*u,e[4]=-l,e[8]=h*u,e[1]=f*l+M,e[5]=o*u,e[9]=m*l-x,e[2]=x*l-m,e[6]=a*u,e[10]=M*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),pi.crossVectors(n,vn),pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),pi.crossVectors(n,vn)),pi.normalize(),Qr.crossVectors(vn,pi),s[0]=pi.x,s[4]=Qr.x,s[8]=vn.x,s[1]=pi.y,s[5]=Qr.y,s[9]=vn.y,s[2]=pi.z,s[6]=Qr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],u=n[1],l=n[5],f=n[9],m=n[13],x=n[2],M=n[6],d=n[10],p=n[14],w=n[3],g=n[7],v=n[11],E=n[15],A=s[0],b=s[4],R=s[8],_=s[12],y=s[1],D=s[5],U=s[9],N=s[13],k=s[2],J=s[6],q=s[10],j=s[14],tt=s[3],gt=s[7],Tt=s[11],xt=s[15];return r[0]=o*A+a*y+c*k+h*tt,r[4]=o*b+a*D+c*J+h*gt,r[8]=o*R+a*U+c*q+h*Tt,r[12]=o*_+a*N+c*j+h*xt,r[1]=u*A+l*y+f*k+m*tt,r[5]=u*b+l*D+f*J+m*gt,r[9]=u*R+l*U+f*q+m*Tt,r[13]=u*_+l*N+f*j+m*xt,r[2]=x*A+M*y+d*k+p*tt,r[6]=x*b+M*D+d*J+p*gt,r[10]=x*R+M*U+d*q+p*Tt,r[14]=x*_+M*N+d*j+p*xt,r[3]=w*A+g*y+v*k+E*tt,r[7]=w*b+g*D+v*J+E*gt,r[11]=w*R+g*U+v*q+E*Tt,r[15]=w*_+g*N+v*j+E*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],u=t[2],l=t[6],f=t[10],m=t[14],x=t[3],M=t[7],d=t[11],p=t[15];return x*(+r*c*l-s*h*l-r*a*f+n*h*f+s*a*m-n*c*m)+M*(+e*c*m-e*h*f+r*o*f-s*o*m+s*h*u-r*c*u)+d*(+e*h*l-e*a*m-r*o*l+n*o*m+r*a*u-n*h*u)+p*(-s*a*u-e*c*l+e*a*f+s*o*l-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],l=t[9],f=t[10],m=t[11],x=t[12],M=t[13],d=t[14],p=t[15],w=l*d*h-M*f*h+M*c*m-a*d*m-l*c*p+a*f*p,g=x*f*h-u*d*h-x*c*m+o*d*m+u*c*p-o*f*p,v=u*M*h-x*l*h+x*a*m-o*M*m-u*a*p+o*l*p,E=x*l*c-u*M*c-x*a*f+o*M*f+u*a*d-o*l*d,A=e*w+n*g+s*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=w*b,t[1]=(M*f*r-l*d*r-M*s*m+n*d*m+l*s*p-n*f*p)*b,t[2]=(a*d*r-M*c*r+M*s*h-n*d*h-a*s*p+n*c*p)*b,t[3]=(l*c*r-a*f*r-l*s*h+n*f*h+a*s*m-n*c*m)*b,t[4]=g*b,t[5]=(u*d*r-x*f*r+x*s*m-e*d*m-u*s*p+e*f*p)*b,t[6]=(x*c*r-o*d*r-x*s*h+e*d*h+o*s*p-e*c*p)*b,t[7]=(o*f*r-u*c*r+u*s*h-e*f*h-o*s*m+e*c*m)*b,t[8]=v*b,t[9]=(x*l*r-u*M*r-x*n*m+e*M*m+u*n*p-e*l*p)*b,t[10]=(o*M*r-x*a*r+x*n*h-e*M*h-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*l*r-u*n*h+e*l*h+o*n*m-e*a*m)*b,t[12]=E*b,t[13]=(u*M*s-x*l*s+x*n*f-e*M*f-u*n*d+e*l*d)*b,t[14]=(x*a*s-o*M*s-x*n*c+e*M*c+o*n*d-e*a*d)*b,t[15]=(o*l*s-u*a*s+u*n*c-e*l*c-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,u*a+n,u*c-s*o,0,h*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,u=o+o,l=a+a,f=r*h,m=r*u,x=r*l,M=o*u,d=o*l,p=a*l,w=c*h,g=c*u,v=c*l,E=n.x,A=n.y,b=n.z;return s[0]=(1-(M+p))*E,s[1]=(m+v)*E,s[2]=(x-g)*E,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(f+p))*A,s[6]=(d+w)*A,s[7]=0,s[8]=(x+g)*b,s[9]=(d-w)*b,s[10]=(1-(f+M))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let h=1/r,u=1/o,l=1/a;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=l,Un.elements[9]*=l,Un.elements[10]*=l,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn,c=!1){let h=this.elements,u=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),x,M;if(c)x=r/(o-r),M=o*r/(o-r);else if(a===Nn)x=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===cr)x=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=l,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn,c=!1){let h=this.elements,u=2/(e-t),l=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),x,M;if(c)x=1/(o-r),M=o/(o-r);else if(a===Nn)x=-2/(o-r),M=-(o+r)/(o-r);else if(a===cr)x=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=l,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new z,Un=new ye,hd=new z(0,0,0),ud=new z(1,1,1),pi=new z,Qr=new z,vn=new z,Dc=new ye,Lc=new Qe,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],u=s[9],l=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,Uc=new z,hs=new Qe,jn=new ye,jr=new z,Ks=new z,fd=new z,pd=new Qe,Fc=new z(1,0,0),Nc=new z(0,1,0),Oc=new z(0,0,1),Bc={type:"added"},md={type:"removed"},us={type:"childadded",child:null},hl={type:"childremoved",child:null},We=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new In,n=new Qe,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Uc.copy(t).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ks,jr,this.up):jn.lookAt(jr,Ks,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(jn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let l=c[h];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),l=o(t.shapes),f=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let h in a){let u=a[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};We.DEFAULT_UP=new z(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new z,ti=new z,ul=new z,ei=new z,ds=new z,fs=new z,zc=new z,dl=new z,fl=new z,pl=new z,ml=new me,gl=new me,xl=new me,Gn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ti.subVectors(n,e),ul.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ti),c=Fn.dot(ul),h=ti.dot(ti),u=ti.dot(ul),l=o*h-a*a;if(l===0)return r.set(0,0,0),null;let f=1/l,m=(h*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),xl.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ti.subVectors(t,e),Fn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Fn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),fs.subVectors(r,n),dl.subVectors(t,n);let c=ds.dot(dl),h=fs.dot(dl);if(c<=0&&h<=0)return e.copy(n);fl.subVectors(t,s);let u=ds.dot(fl),l=fs.dot(fl);if(u>=0&&l<=u)return e.copy(s);let f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ds,o);pl.subVectors(t,r);let m=ds.dot(pl),x=fs.dot(pl);if(x>=0&&m<=x)return e.copy(r);let M=m*h-c*x;if(M<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(fs,a);let d=u*x-m*l;if(d<=0&&l-u>=0&&m-x>=0)return zc.subVectors(r,s),a=(l-u)/(l-u+(m-x)),e.copy(s).addScaledVector(zc,a);let p=1/(d+M+f);return o=M*p,a=f*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},to={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=tc(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return pe.workingToColorSpace(sn.copy(this),t),Math.round(ae(sn.r*255,0,255))*65536+Math.round(ae(sn.g*255,0,255))*256+Math.round(ae(sn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(sn.copy(this),e);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,u=(a+o)/2;if(a===o)c=0,h=0;else{let l=o-a;switch(h=u<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=cn){pe.workingToColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,s=sn.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(to);let n=sr(mi.h,to.h,e),s=sr(mi.s,to.s,e),r=sr(mi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Gt;Gt.NAMES=Gh;var gd=0,Yn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Ni,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=_o,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zi=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new z,eo=new It,xd=0,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pl&&(t.usage=this.usage),t}};var fr=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},_d=0,Cn=new ye,yl=new We,ps=new z,Mn=new Ue,Qs=new Ue,Ke=new z,ve=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Mn.min,Qs.min),Mn.expandByPoint(Ke),Ke.addVectors(Mn.max,Qs.max),Mn.expandByPoint(Ke)):(Mn.expandByPoint(Qs.min),Mn.expandByPoint(Qs.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ke.fromBufferAttribute(a,h),c&&(ps.fromBufferAttribute(t,h),Ke.add(ps)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new z,c[R]=new z;let h=new z,u=new z,l=new z,f=new It,m=new It,x=new It,M=new z,d=new z;function p(R,_,y){h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,y),u.sub(h),l.sub(h),m.sub(f),x.sub(f);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(l,-m.y).multiplyScalar(D),d.copy(l).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(D),a[R].add(M),a[_].add(M),a[y].add(M),c[R].add(d),c[_].add(d),c[y].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,_=w.length;R<_;++R){let y=w[R],D=y.start,U=y.count;for(let N=D,k=D+U;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let g=new z,v=new z,E=new z,A=new z;function b(R){E.fromBufferAttribute(s,R),A.copy(E);let _=a[R];g.copy(_),g.sub(E.multiplyScalar(E.dot(_))).normalize(),v.crossVectors(A,_);let D=v.dot(c[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,D)}for(let R=0,_=w.length;R<_;++R){let y=w[R],D=y.start,U=y.count;for(let N=D,k=D+U;N<k;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,h=new z,u=new z,l=new z;if(t)for(let f=0,m=t.count;f<m;f+=3){let x=t.getX(f+0),M=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,d),u.subVectors(o,r),l.subVectors(s,r),u.cross(l),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,d),a.add(u),c.add(u),h.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(d,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),l.subVectors(s,r),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let h=a.array,u=a.itemSize,l=a.normalized,f=new h.constructor(c.length*u),m=0,x=0;for(let M=0,d=c.length;M<d;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let p=0;p<u;p++)f[x++]=h[m++]}return new Xe(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let u=0,l=h.length;u<l;u++){let f=h[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){let m=h[l];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],l=r[h];for(let f=0,m=l.length;f<m;f++)u.push(l[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let l=o[h];this.addGroup(l.start,l.count,l.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=new ye,Li=new dr,no=new qn,Hc=new z,io=new z,so=new z,ro=new z,vl=new z,oo=new z,Vc=new z,ao=new z,fe=class extends We{constructor(t=new ve,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=a[c],l=r[c];u!==0&&(vl.fromBufferAttribute(l,t),o?oo.addScaledVector(vl,u):oo.addScaledVector(vl.sub(e),u))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(no.containsPoint(Li.origin)===!1&&(Li.intersectSphere(no,Hc)===null||Li.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Li.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let d=f[x],p=o[d.materialIndex],w=Math.max(d.start,m.start),g=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let v=w,E=g;v<E;v+=3){let A=a.getX(v),b=a.getX(v+1),R=a.getX(v+2);s=lo(this,p,t,n,h,u,l,A,b,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=x,p=M;d<p;d+=3){let w=a.getX(d),g=a.getX(d+1),v=a.getX(d+2);s=lo(this,o,t,n,h,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let d=f[x],p=o[d.materialIndex],w=Math.max(d.start,m.start),g=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let v=w,E=g;v<E;v+=3){let A=v,b=v+1,R=v+2;s=lo(this,p,t,n,h,u,l,A,b,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let d=x,p=M;d<p;d+=3){let w=d,g=d+1,v=d+2;s=lo(this,o,t,n,h,u,l,w,g,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function yd(i,t,e,n,s,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ii,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ao);return h<e.near||h>e.far?null:{distance:h,point:ao.clone(),object:i}}function lo(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(h,ro);let u=yd(i,t,e,n,io,so,ro,Vc);if(u){let l=new z;Gn.getBarycoord(Vc,io,so,ro,l),s&&(u.uv=Gn.getInterpolatedAttribute(s,a,c,h,l,new It)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,a,c,h,l,new It)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,c,h,l,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:h,normal:new z,materialIndex:0};Gn.getNormal(io,so,ro,f.normal),u.face=f,u.barycoord=l}return u}var yi=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],u=[],l=[],f=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(l,2));function x(M,d,p,w,g,v,E,A,b,R,_){let y=v/b,D=E/R,U=v/2,N=E/2,k=A/2,J=b+1,q=R+1,j=0,tt=0,gt=new z;for(let Tt=0;Tt<q;Tt++){let xt=Tt*D-N;for(let Ut=0;Ut<J;Ut++){let Ft=Ut*y-U;gt[M]=Ft*w,gt[d]=xt*g,gt[p]=k,h.push(gt.x,gt.y,gt.z),gt[M]=0,gt[d]=0,gt[p]=A>0?1:-1,u.push(gt.x,gt.y,gt.z),l.push(Ut/b),l.push(1-Tt/R),j+=1}}for(let Tt=0;Tt<R;Tt++)for(let xt=0;xt<b;xt++){let Ut=f+xt+J*Tt,Ft=f+xt+J*(Tt+1),zt=f+(xt+1)+J*(Tt+1),kt=f+(xt+1)+J*Tt;c.push(Ut,Ft,kt),c.push(Ft,zt,kt),tt+=6}a.addGroup(m,tt,_),m+=tt,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Wh={clone:Ki,merge:on},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new z,Gc=new It,Wc=new It,hn=class extends mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,wo=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new hn(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new hn(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new hn(ms,gs,t,e);a.layers=this.layers,this.add(a);let c=new hn(ms,gs,t,e);c.layers=this.layers,this.add(c);let h=new hn(ms,gs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,u]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(l,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},gr=class extends mn{constructor(t=[],e=Zi,n,s,r,o,a,c,h,u){super(t,e,n,s,r,o,a,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ai});r.uniforms.tEquirect.value=e;let o=new fe(s,r),a=e.minFilter;return e.minFilter===Jn&&(e.minFilter=bn),new wo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Se=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let d=e.getJointPose(M,n),p=this._getHandJoint(h,M);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),m=.02,x=.005;h.inputState.pinching&&f>m+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ki=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vi=class extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,h=pn,u=pn,l,f){super(null,o,a,c,h,u,s,r,l,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new ye,Xc=new ye,co=[],qc=new Ue,wd=new ye,js=new fe,tr=new qn,Hi=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),qc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),tr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Xc.multiplyMatrices(n,xs),js.matrixWorld=Xc,js.raycast(t,co);for(let o=0,a=co.length;o<a;o++){let c=co[o];c.instanceId=r,c.object=this,e.push(c)}co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,ra,kn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ml=new z,Ed=new z,Td=new jt,Vn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new qn,Ad=new It(.5,.5),ho=new z,As=class{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],u=r[4],l=r[5],f=r[6],m=r[7],x=r[8],M=r[9],d=r[10],p=r[11],w=r[12],g=r[13],v=r[14],E=r[15];if(s[0].setComponents(h-o,m-u,p-x,E-w).normalize(),s[1].setComponents(h+o,m+u,p+x,E+w).normalize(),s[2].setComponents(h+a,m+l,p+M,E+g).normalize(),s[3].setComponents(h-a,m-l,p-M,E-g).normalize(),n)s[4].setComponents(c,f,d,v).normalize(),s[5].setComponents(h-c,m-f,p-d,E-v).normalize();else if(s[4].setComponents(h-c,m-f,p-d,E-v).normalize(),e===Nn)s[5].setComponents(h+c,m+f,p+d,E+v).normalize();else if(e===cr)s[5].setComponents(c,f,d,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Ad.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends mn{constructor(t,e,n=Ei,s,r,o,a=pn,c=pn,h,u=Ms,l=1){if(u!==Ms&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:l};super(f,s,r,o,a,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yr=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends ve{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],h=[],u=e/2,l=Math.PI/2*t,f=e,m=2*l+f,x=n*2+r,M=s+1,d=new z,p=new z;for(let w=0;w<=x;w++){let g=0,v=0,E=0,A=0;if(w<=n){let _=w/n,y=_*Math.PI/2;v=-u-t*Math.cos(y),E=t*Math.sin(y),A=-t*Math.cos(y),g=_*l}else if(w<=n+r){let _=(w-n)/r;v=-u+_*e,E=t,A=0,g=l+_*f}else{let _=(w-n-r)/n,y=_*Math.PI/2;v=u+t*Math.sin(y),E=t*Math.cos(y),A=t*Math.sin(y),g=l+f+_*l}let b=Math.max(0,Math.min(1,g/m)),R=0;w===0?R=.5/s:w===x&&(R=-.5/s);for(let _=0;_<=s;_++){let y=_/s,D=y*Math.PI*2,U=Math.sin(D),N=Math.cos(D);p.x=-E*N,p.y=v,p.z=E*U,a.push(p.x,p.y,p.z),d.set(-E*N,A,E*U),d.normalize(),c.push(d.x,d.y,d.z),h.push(y+R,b)}if(w>0){let _=(w-1)*M;for(let y=0;y<s;y++){let D=_+y,U=_+y+1,N=w*M+y,k=w*M+y+1;o.push(D,U,N),o.push(U,k,N)}}}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mr=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new z,u=new It;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,f=3;l<=e;l++,f+=3){let m=n+l/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],l=[],f=[],m=[],x=0,M=[],d=n/2,p=0;w(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(m,2));function w(){let v=new z,E=new z,A=0,b=(e-t)/n;for(let R=0;R<=r;R++){let _=[],y=R/r,D=y*(e-t)+t;for(let U=0;U<=s;U++){let N=U/s,k=N*c+a,J=Math.sin(k),q=Math.cos(k);E.x=D*J,E.y=-y*n+d,E.z=D*q,l.push(E.x,E.y,E.z),v.set(J,b,q).normalize(),f.push(v.x,v.y,v.z),m.push(N,1-y),_.push(x++)}M.push(_)}for(let R=0;R<s;R++)for(let _=0;_<r;_++){let y=M[_][R],D=M[_+1][R],U=M[_+1][R+1],N=M[_][R+1];(t>0||_!==0)&&(u.push(y,D,N),A+=3),(e>0||_!==r-1)&&(u.push(D,U,N),A+=3)}h.addGroup(p,A,0),p+=A}function g(v){let E=x,A=new It,b=new z,R=0,_=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)l.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),x++;let D=x;for(let U=0;U<=s;U++){let k=U/s*c+a,J=Math.cos(k),q=Math.sin(k);b.x=_*q,b.y=d*y,b.z=_*J,l.push(b.x,b.y,b.z),f.push(0,y,0),A.x=J*.5+.5,A.y=q*.5*y+.5,m.push(A.x,A.y),x++}for(let U=0;U<s;U++){let N=E+U,k=D+U;v===!0?u.push(k,k+1,N):u.push(k+1,k,N),R+=3}h.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Pn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,m=(o-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new It:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,c=new ye;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new z)}r[0]=new z,o[0]=new z;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),l=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(ae(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ae(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),f=c-this.aX,m=h-this.aY;c=f*u-m*l+this.aX,h=f*l+m*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},To=class extends Rs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ic(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,u,l){let f=(o-r)/h-(a-r)/(h+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+l)+(c-a)/l;f*=u,m*=u,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var uo=new z,bl=new ic,Sl=new ic,wl=new ic,rn=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),h=uo);let l=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(l),m),M=Math.pow(l.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);M<1e-4&&(M=1),x<1e-4&&(x=M),d<1e-4&&(d=M),bl.initNonuniformCatmullRom(h.x,l.x,f.x,u.x,x,M,d),Sl.initNonuniformCatmullRom(h.y,l.y,f.y,u.y,x,M,d),wl.initNonuniformCatmullRom(h.z,l.z,f.z,u.z,x,M,d)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(h.x,l.x,f.x,u.x,this.tension),Sl.initCatmullRom(h.y,l.y,f.y,u.y,this.tension),wl.initCatmullRom(h.z,l.z,f.z,u.z,this.tension));return n.set(bl.calc(c),Sl.calc(c),wl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Rd(i,t){let e=1-i;return e*e*t}function Cd(i,t){return 2*(1-i)*i*t}function Id(i,t){return i*i*t}function rr(i,t,e,n){return Rd(i,t)+Cd(i,e)+Id(i,n)}function Pd(i,t){let e=1-i;return e*e*e*t}function Dd(i,t){let e=1-i;return 3*e*e*i*t}function Ld(i,t){return 3*(1-i)*i*i*t}function Ud(i,t){return i*i*i*t}function or(i,t,e,n,s){return Pd(i,t)+Dd(i,e)+Ld(i,n)+Ud(i,s)}var Sr=class extends Sn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends Sn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends Sn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends Sn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends Sn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends Sn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],l=s[o>s.length-3?s.length-1:o+2];return n.set(Yc(a,c.x,h.x,u.x,l.x),Yc(a,c.y,h.y,u.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:rn,CubicBezierCurve:Sr,CubicBezierCurve3:Ao,EllipseCurve:Rs,LineCurve:wr,LineCurve3:Ro,QuadraticBezierCurve:Er,QuadraticBezierCurve3:Tr,SplineCurve:Ar}),Io=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},Rr=class extends Io{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wr(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Er(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Sr(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let h=new Rs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Dn=class extends Rr{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}};function Fd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=kd(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,l=-1/0;for(let f=e;f<s;f+=e){let m=i[f],x=i[f+1];m<a&&(a=m),x<c&&(c=x),m>u&&(u=m),x>l&&(l=x)}h=Math.max(u-a,l-c),h=h!==0?32767/h:0}return Cr(r,o,e,a,c,h,0),o}function Xh(i,t,e,n,s){let r;if(s===Kd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zc(o/n|0,i[o],i[o+1],r);return r&&Cs(r,r.next)&&(Pr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Le(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?Od(i,n,s,r):Nd(i)){t.push(c.i,i.i,h.i),Pr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Bd(Vi(i),t),Cr(i,t,e,n,s,r,2)):o===2&&zd(i,t,e,n,s,r):Cr(Vi(i),t,e,n,s,r,1);break}}}function Nd(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,u=Math.min(s,r,o),l=Math.min(a,c,h),f=Math.max(s,r,o),m=Math.max(a,c,h),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=l&&x.y<=m&&nr(s,a,r,c,o,h,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Od(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,u=s.y,l=r.y,f=o.y,m=Math.min(a,c,h),x=Math.min(u,l,f),M=Math.max(a,c,h),d=Math.max(u,l,f),p=Dl(m,x,t,e,n),w=Dl(M,d,t,e,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=p&&v&&v.z<=w;){if(g.x>=m&&g.x<=M&&g.y>=x&&g.y<=d&&g!==s&&g!==o&&nr(a,u,c,l,h,f,g.x,g.y)&&Le(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=m&&v.x<=M&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&nr(a,u,c,l,h,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=p;){if(g.x>=m&&g.x<=M&&g.y>=x&&g.y<=d&&g!==s&&g!==o&&nr(a,u,c,l,h,f,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&nr(a,u,c,l,h,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Bd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&Yh(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function zd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zd(o,a)){let c=Zh(o,a);o=Vi(o,o.next),c=Vi(c,c.next),Cr(o,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=Xh(i,a,c,n,!1);h===h.next&&(h.steiner=!0),s.push(Yd(h))}s.sort(Hd);for(let r=0;r<s.length;r++)e=Vd(s[r],e);return e}function Hd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vd(i,t){let e=Gd(i,t);if(!e)return t;let n=Zh(e,i);return Vi(n,n.next),Vi(e,e.next)}function Gd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let l=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,o=e.x<e.next.x?e:e.next,l===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&qh(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let l=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(l<u||l===u&&(e.x>o.x||e.x===o.x&&Wd(o,e)))&&(o=e,u=l)}e=e.next}while(e!==a);return o}function Wd(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Xd(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qd(s)}function qd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&qh(i,t,e,n,s,r,o,a)}function Zd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jd(i,t)&&(Ir(i,t)&&Ir(t,i)&&$d(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Cs(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function Yh(i,t,e,n){let s=po(Le(i,t,e)),r=po(Le(i,t,n)),o=po(Le(e,n,i)),a=po(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||o===0&&fo(e,i,n)||a===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function Jd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function $d(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zh(i,t){let e=Ll(i.i,i.x,i.y),n=Ll(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zc(i,t,e,n){let s=Ll(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ul=class{static triangulate(t,e,n=2){return Fd(t,e,n)}},Wn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jc(t),$c(n,t);let o=t.length;e.forEach(Jc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,$c(n,e[c]);let a=Ul.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Jc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $c(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends ve{constructor(t=new Dn([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,l=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Qd,g,v=!1,E,A,b,R;p&&(g=p.getSpacedPoints(u),v=!0,f=!1,E=p.computeFrenetFrames(u,!1),A=new z,b=new z,R=new z),f||(d=0,m=0,x=0,M=0);let _=a.extractPoints(h),y=_.shape,D=_.holes;if(!Wn.isClockWise(y)){y=y.reverse();for(let W=0,X=D.length;W<X;W++){let T=D[W];Wn.isClockWise(T)&&(D[W]=T.reverse())}}function N(W){let T=10000000000000001e-36,P=W[0];for(let B=1;B<=W.length;B++){let O=B%W.length,Y=W[O],it=Y.x-P.x,nt=Y.y-P.y,C=it*it+nt*nt,S=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(P.x),Math.abs(P.y)),H=T*S*S;if(C<=H){W.splice(O,1),B--;continue}P=Y}}N(y),D.forEach(N);let k=D.length,J=y;for(let W=0;W<k;W++){let X=D[W];y=y.concat(X)}function q(W,X,T){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(X,T)}let j=y.length;function tt(W,X,T){let P,B,O,Y=W.x-X.x,it=W.y-X.y,nt=T.x-W.x,C=T.y-W.y,S=Y*Y+it*it,H=Y*C-it*nt;if(Math.abs(H)>Number.EPSILON){let Z=Math.sqrt(S),K=Math.sqrt(nt*nt+C*C),V=X.x-it/Z,ut=X.y+Y/Z,ft=T.x-C/K,St=T.y+nt/K,vt=((ft-V)*C-(St-ut)*nt)/(Y*C-it*nt);P=V+Y*vt-W.x,B=ut+it*vt-W.y;let $=P*P+B*B;if($<=2)return new It(P,B);O=Math.sqrt($/2)}else{let Z=!1;Y>Number.EPSILON?nt>Number.EPSILON&&(Z=!0):Y<-Number.EPSILON?nt<-Number.EPSILON&&(Z=!0):Math.sign(it)===Math.sign(C)&&(Z=!0),Z?(P=-it,B=Y,O=Math.sqrt(S)):(P=Y,B=it,O=Math.sqrt(S/2))}return new It(P/O,B/O)}let gt=[];for(let W=0,X=J.length,T=X-1,P=W+1;W<X;W++,T++,P++)T===X&&(T=0),P===X&&(P=0),gt[W]=tt(J[W],J[T],J[P]);let Tt=[],xt,Ut=gt.concat();for(let W=0,X=k;W<X;W++){let T=D[W];xt=[];for(let P=0,B=T.length,O=B-1,Y=P+1;P<B;P++,O++,Y++)O===B&&(O=0),Y===B&&(Y=0),xt[P]=tt(T[P],T[O],T[Y]);Tt.push(xt),Ut=Ut.concat(xt)}let Ft;if(d===0)Ft=Wn.triangulateShape(J,D);else{let W=[],X=[];for(let T=0;T<d;T++){let P=T/d,B=m*Math.cos(P*Math.PI/2),O=x*Math.sin(P*Math.PI/2)+M;for(let Y=0,it=J.length;Y<it;Y++){let nt=q(J[Y],gt[Y],O);_t(nt.x,nt.y,-B),P===0&&W.push(nt)}for(let Y=0,it=k;Y<it;Y++){let nt=D[Y];xt=Tt[Y];let C=[];for(let S=0,H=nt.length;S<H;S++){let Z=q(nt[S],xt[S],O);_t(Z.x,Z.y,-B),P===0&&C.push(Z)}P===0&&X.push(C)}}Ft=Wn.triangulateShape(W,X)}let zt=Ft.length,kt=x+M;for(let W=0;W<j;W++){let X=f?q(y[W],Ut[W],kt):y[W];v?(b.copy(E.normals[0]).multiplyScalar(X.x),A.copy(E.binormals[0]).multiplyScalar(X.y),R.copy(g[0]).add(b).add(A),_t(R.x,R.y,R.z)):_t(X.x,X.y,0)}for(let W=1;W<=u;W++)for(let X=0;X<j;X++){let T=f?q(y[X],Ut[X],kt):y[X];v?(b.copy(E.normals[W]).multiplyScalar(T.x),A.copy(E.binormals[W]).multiplyScalar(T.y),R.copy(g[W]).add(b).add(A),_t(R.x,R.y,R.z)):_t(T.x,T.y,l/u*W)}for(let W=d-1;W>=0;W--){let X=W/d,T=m*Math.cos(X*Math.PI/2),P=x*Math.sin(X*Math.PI/2)+M;for(let B=0,O=J.length;B<O;B++){let Y=q(J[B],gt[B],P);_t(Y.x,Y.y,l+T)}for(let B=0,O=D.length;B<O;B++){let Y=D[B];xt=Tt[B];for(let it=0,nt=Y.length;it<nt;it++){let C=q(Y[it],xt[it],P);v?_t(C.x,C.y+g[u-1].y,g[u-1].x+T):_t(C.x,C.y,l+T)}}}dt(),G();function dt(){let W=s.length/3;if(f){let X=0,T=j*X;for(let P=0;P<zt;P++){let B=Ft[P];rt(B[2]+T,B[1]+T,B[0]+T)}X=u+d*2,T=j*X;for(let P=0;P<zt;P++){let B=Ft[P];rt(B[0]+T,B[1]+T,B[2]+T)}}else{for(let X=0;X<zt;X++){let T=Ft[X];rt(T[2],T[1],T[0])}for(let X=0;X<zt;X++){let T=Ft[X];rt(T[0]+j*u,T[1]+j*u,T[2]+j*u)}}n.addGroup(W,s.length/3-W,0)}function G(){let W=s.length/3,X=0;pt(J,X),X+=J.length;for(let T=0,P=D.length;T<P;T++){let B=D[T];pt(B,X),X+=B.length}n.addGroup(W,s.length/3-W,1)}function pt(W,X){let T=W.length;for(;--T>=0;){let P=T,B=T-1;B<0&&(B=W.length-1);for(let O=0,Y=u+d*2;O<Y;O++){let it=j*O,nt=j*(O+1),C=X+P+it,S=X+B+it,H=X+B+nt,Z=X+P+nt;wt(C,S,H,Z)}}}function _t(W,X,T){c.push(W),c.push(X),c.push(T)}function rt(W,X,T){Dt(W),Dt(X),Dt(T);let P=s.length/3,B=w.generateTopUV(n,s,P-3,P-2,P-1);I(B[0]),I(B[1]),I(B[2])}function wt(W,X,T,P){Dt(W),Dt(X),Dt(P),Dt(X),Dt(T),Dt(P);let B=s.length/3,O=w.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);I(O[0]),I(O[1]),I(O[3]),I(O[1]),I(O[2]),I(O[3])}function Dt(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function I(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,t.options)}},Qd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new It(r,o),new It(a,c),new It(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],l=t[n*3+2],f=t[s*3],m=t[s*3+1],x=t[s*3+2],M=t[r*3],d=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new It(o,1-c),new It(h,1-l),new It(f,1-x),new It(M,1-p)]:[new It(a,1-c),new It(u,1-l),new It(m,1-x),new It(d,1-p)]}};function jd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends ve{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],u=1/e,l=new z,f=new It,m=new z,x=new z,M=new z,d=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:d=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,m.x=p*1,m.y=-d,m.z=p*0,M.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:d=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,m.x=p*1,m.y=-d,m.z=p*0,x.copy(m),m.x+=M.x,m.y+=M.y,m.z+=M.z,m.normalize(),c.push(m.x,m.y,m.z),M.copy(x)}for(let w=0;w<=e;w++){let g=n+w*u*s,v=Math.sin(g),E=Math.cos(g);for(let A=0;A<=t.length-1;A++){l.x=t[A].x*v,l.y=t[A].y,l.z=t[A].x*E,o.push(l.x,l.y,l.z),f.x=w/e,f.y=A/(t.length-1),a.push(f.x,f.y);let b=c[3*A+0]*v,R=c[3*A+1],_=c[3*A+0]*E;h.push(b,R,_)}}for(let w=0;w<e;w++)for(let g=0;g<t.length-1;g++){let v=g+w*t.length,E=v,A=v+t.length,b=v+t.length+1,R=v+1;r.push(E,A,R),r.push(b,R,A)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mi=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,u=c+1,l=t/a,f=e/c,m=[],x=[],M=[],d=[];for(let p=0;p<u;p++){let w=p*f-o;for(let g=0;g<h;g++){let v=g*l-r;x.push(v,-w,0),M.push(0,0,1),d.push(g/a),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let g=w+h*p,v=w+h*(p+1),E=w+1+h*(p+1),A=w+1+h*p;m.push(g,v,A),m.push(v,E,A)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Wi=class i extends ve{constructor(t=new Dn([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function h(u){let l=s.length/3,f=u.extractPoints(e),m=f.shape,x=f.holes;Wn.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=x.length;d<p;d++){let w=x[d];Wn.isClockWise(w)===!0&&(x[d]=w.reverse())}let M=Wn.triangulateShape(m,x);for(let d=0,p=x.length;d<p;d++){let w=x[d];m=m.concat(w)}for(let d=0,p=m.length;d<p;d++){let w=m[d];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let d=0,p=M.length;d<p;d++){let w=M[d],g=w[0]+l,v=w[1]+l,E=w[2]+l;n.push(g,v,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Bn=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,u=[],l=new z,f=new z,m=[],x=[],M=[],d=[];for(let p=0;p<=n;p++){let w=[],g=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let A=E/e;l.x=-t*Math.cos(s+A*r)*Math.sin(o+g*a),l.y=t*Math.cos(o+g*a),l.z=t*Math.sin(s+A*r)*Math.sin(o+g*a),x.push(l.x,l.y,l.z),f.copy(l).normalize(),M.push(f.x,f.y,f.z),d.push(A+v,1-g),w.push(h++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let g=u[p][w+1],v=u[p][w],E=u[p+1][w],A=u[p+1][w+1];(p!==0||o>0)&&m.push(g,v,A),(p!==n-1||c<Math.PI)&&m.push(v,E,A)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],h=[],u=new z,l=new z,f=new z;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let M=x/s*r,d=m/n*Math.PI*2;l.x=(t+e*Math.cos(d))*Math.cos(M),l.y=(t+e*Math.cos(d))*Math.sin(M),l.z=e*Math.sin(d),a.push(l.x,l.y,l.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(l,u).normalize(),c.push(f.x,f.y,f.z),h.push(x/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let M=(s+1)*m+x-1,d=(s+1)*(m-1)+x-1,p=(s+1)*(m-1)+x,w=(s+1)*m+x;o.push(M,d,w),o.push(d,p,w)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ri=class i extends ve{constructor(t=new Tr(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,c=new z,h=new It,u=new z,l=[],f=[],m=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(m,2));function M(){for(let g=0;g<e;g++)d(g);d(r===!1?e:0),w(),p()}function d(g){u=t.getPointAt(g/e,u);let v=o.normals[g],E=o.binormals[g];for(let A=0;A<=s;A++){let b=A/s*Math.PI*2,R=Math.sin(b),_=-Math.cos(b);c.x=_*v.x+R*E.x,c.y=_*v.y+R*E.y,c.z=_*v.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,l.push(a.x,a.y,a.z)}}function p(){for(let g=1;g<=e;g++)for(let v=1;v<=s;v++){let E=(s+1)*(g-1)+(v-1),A=(s+1)*g+(v-1),b=(s+1)*g+v,R=(s+1)*(g-1)+v;x.push(E,A,R),x.push(A,b,R)}}function w(){for(let g=0;g<=e;g++)for(let v=0;v<=s;v++)h.x=g/e,h.y=v/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Dr=class extends Yn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var un=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Po=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Do=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lo=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=t,a=2*e-n;break;case Cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:o=t,c=2*n-e;break;case Cl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=this._offsetPrev,l=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),M=x*x,d=M*x,p=-f*d+2*f*M-f*x,w=(1+f)*d+(-1.5-2*f)*M+(-.5+f)*x+1,g=(-1-m)*d+(1.5+m)*M+.5*x,v=m*d-m*M;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+w*o[h+E]+g*o[c+E]+v*o[l+E];return r}},Uo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=(n-e)/(s-e),l=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*l+o[c+f]*u;return r}},Fo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ef(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)c=!0;else{let l=a*n,f=l-n,m=l+n;for(let x=0;x!==n;++x){let M=e[l+x];if(M!==e[f+x]||M!==e[m+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let l=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[l+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=vo;var bi=class extends wn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ar;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="color";var Oo=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="number";var Bo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)Qe.slerpFlat(r,0,o,h-a,o,h,c);return r}},Ur=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends wn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ar;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};zo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){let l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,f=h.length;l<f;l+=2){let m=h[l],x=h[l+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Jh=new ko,Ho=class{constructor(t){this.manager=t!==void 0?t:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},El=new ye,Kc=new z,Qc=new z,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jc=new ye,er=new z,Tl=new z,Fl=class extends Vo{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc,n.coordinateSystem,n.reversedDepth)}},Nr=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yi=class extends mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nl=class extends Vo{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Go=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var sc="\\[\\]\\.:\\/",nf=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",sf="[^"+sc.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",rc),of=/(WCOD+)?/.source.replace("WCOD",sf),af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),cf=new RegExp("^"+rf+of+af+lf+"$"),hf=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Ol;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qg=new Float32Array(1);var th=new ye,oi=class{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bl(t[s],this,n,e);return n.sort(eh),n}};function eh(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bl(r[o],t,e,!0)}}function oc(i,t,e,n){let s=uf(n);switch(e){case Jl:return i*t;case ra:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case $l:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case La:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case zn:case Xl:return{byteLength:1,components:1};case Ls:case ql:case Us:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case Ei:case na:case kn:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ff(i){let t=new WeakMap;function e(a,c){let h=a.array,u=a.usage,l=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),a.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,h){let u=c.array,l=c.updateRanges;if(i.bindBuffer(h,a),l.length===0)i.bufferSubData(h,0,u);else{l.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<l.length;m++){let x=l[f],M=l[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,l[f]=M)}l.length=f+1;for(let m=0,x=l.length;m<x;m++){let M=l[m];i.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var pf=`#ifdef USE_ALPHAHASH
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
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
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
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,qm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:xf,alphatest_fragment:_f,alphatest_pars_fragment:yf,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:bf,batching_vertex:Sf,begin_vertex:wf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Df,color_fragment:Lf,color_pars_fragment:Uf,color_pars_vertex:Ff,color_vertex:Nf,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Hf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Gf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:op,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:jf,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:yp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Ip,normal_fragment_begin:Pp,normal_fragment_maps:Dp,normal_pars_fragment:Lp,normal_pars_vertex:Up,normal_vertex:Fp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:kp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:$p,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:xm,cube_frag:_m,depth_vert:ym,depth_frag:vm,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:Sm,equirect_frag:wm,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Im,meshmatcap_vert:Pm,meshmatcap_frag:Dm,meshnormal_vert:Lm,meshnormal_frag:Um,meshphong_vert:Fm,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Hm,points_frag:Vm,shadow_vert:Gm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},Bt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},$n={basic:{uniforms:on([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:on([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:on([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:on([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:on([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:on([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:on([Bt.points,Bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:on([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:on([Bt.common,Bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:on([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:on([Bt.sprite,Bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:on([Bt.common,Bt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:on([Bt.lights,Bt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};$n.physical={uniforms:on([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Ba={r:0,b:0,g:0},Qi=new In,Ym=new ye;function Zm(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,h,u,l=null,f=0,m=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v)),v}function M(g){let v=!1,E=x(g);E===null?p(a,c):E&&E.isColor&&(p(E,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(g,v){let E=x(v);E&&(E.isCubeTexture||E.mapping===Or)?(u===void 0&&(u=new fe(new yi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ki($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Qi)),u.material.toneMapped=pe.getTransfer(E.colorSpace)!==_e,(l!==E||f!==E.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,l=E,f=E.version,m=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new fe(new Mi(2,2),new On({name:"BackgroundMaterial",uniforms:Ki($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=pe.getTransfer(E.colorSpace)!==_e,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(l!==E||f!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,l=E,f=E.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function p(g,v){g.getRGB(Ba,nc(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,v,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,p(a,c)},render:M,addToRenderList:d,dispose:w}}function Jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,D,U,N,k){let J=!1,q=l(N,U,D);r!==q&&(r=q,h(r.object)),J=m(y,N,U,k),J&&x(y,N,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(y,D,U,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function l(y,D,U){let N=U.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let J=k[D.id];J===void 0&&(J={},k[D.id]=J);let q=J[N];return q===void 0&&(q=f(c()),J[N]=q),q}function f(y){let D=[],U=[],N=[];for(let k=0;k<e;k++)D[k]=0,U[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,D,U,N){let k=r.attributes,J=D.attributes,q=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let Tt=k[tt],xt=J[tt];if(xt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),Tt===void 0||Tt.attribute!==xt||xt&&Tt.data!==xt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function x(y,D,U,N){let k={},J=D.attributes,q=0,j=U.getAttributes();for(let tt in j)if(j[tt].location>=0){let Tt=J[tt];Tt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor));let xt={};xt.attribute=Tt,Tt&&Tt.data&&(xt.data=Tt.data),k[tt]=xt,q++}r.attributes=k,r.attributesNum=q,r.index=N}function M(){let y=r.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function d(y){p(y,0)}function p(y,D){let U=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),k[y]!==D&&(i.vertexAttribDivisor(y,D),k[y]=D)}function w(){let y=r.newAttributes,D=r.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==y[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function g(y,D,U,N,k,J,q){q===!0?i.vertexAttribIPointer(y,D,U,k,J):i.vertexAttribPointer(y,D,U,N,k,J)}function v(y,D,U,N){M();let k=N.attributes,J=U.getAttributes(),q=D.defaultAttributeValues;for(let j in J){let tt=J[j];if(tt.location>=0){let gt=k[j];if(gt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){let Tt=gt.normalized,xt=gt.itemSize,Ut=t.get(gt);if(Ut===void 0)continue;let Ft=Ut.buffer,zt=Ut.type,kt=Ut.bytesPerElement,dt=zt===i.INT||zt===i.UNSIGNED_INT||gt.gpuType===na;if(gt.isInterleavedBufferAttribute){let G=gt.data,pt=G.stride,_t=gt.offset;if(G.isInstancedInterleavedBuffer){for(let rt=0;rt<tt.locationSize;rt++)p(tt.location+rt,G.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let rt=0;rt<tt.locationSize;rt++)d(tt.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let rt=0;rt<tt.locationSize;rt++)g(tt.location+rt,xt/tt.locationSize,zt,Tt,pt*kt,(_t+xt/tt.locationSize*rt)*kt,dt)}else{if(gt.isInstancedBufferAttribute){for(let G=0;G<tt.locationSize;G++)p(tt.location+G,gt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let G=0;G<tt.locationSize;G++)d(tt.location+G);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let G=0;G<tt.locationSize;G++)g(tt.location+G,xt/tt.locationSize,zt,Tt,xt*kt,xt/tt.locationSize*G*kt,dt)}}else if(q!==void 0){let Tt=q[j];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(tt.location,Tt);break;case 3:i.vertexAttrib3fv(tt.location,Tt);break;case 4:i.vertexAttrib4fv(tt.location,Tt);break;default:i.vertexAttrib1fv(tt.location,Tt)}}}}w()}function E(){R();for(let y in n){let D=n[y];for(let U in D){let N=D[U];for(let k in N)u(N[k].object),delete N[k];delete D[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let U in D){let N=D[U];for(let k in N)u(N[k].object),delete N[k];delete D[U]}delete n[y.id]}function b(y){for(let D in n){let U=n[D];if(U[y.id]===void 0)continue;let N=U[y.id];for(let k in N)u(N[k].object),delete N[k];delete U[y.id]}}function R(){_(),o=!0,r!==s&&(r=s,h(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:d,disableUnusedAttributes:w}}function $m(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,l){l!==0&&(i.drawArraysInstanced(n,h,u,l),e.update(u,n,l))}function a(h,u,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,l);let m=0;for(let x=0;x<l;x++)m+=u[x];e.update(m,n,1)}function c(h,u,l,f){if(l===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h.length;x++)o(h[x],u[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,l);let x=0;for(let M=0;M<l;M++)x+=u[M]*f[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==gn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let R=b===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==zn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==kn&&!R)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let l=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:w,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function Qm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Vn,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){let m=l.length!==0||f||n!==0||s;return s=f,n=l.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=u(l,f,0)},this.setState=function(l,f,m){let x=l.clippingPlanes,M=l.clipIntersection,d=l.clipShadows,p=i.get(l);if(!s||x===null||x.length===0||r&&!d)r?u(null):h();else{let w=r?0:n,g=w*4,v=p.clippingState||null;c.value=v,v=u(x,f,g,m);for(let E=0;E!==g;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,f,m,x){let M=l!==null?l.length:0,d=null;if(M!==0){if(d=c.value,x!==!0||d===null){let p=m+M*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<p)&&(d=new Float32Array(p));for(let g=0,v=m;g!==M;++g,v+=4)o.copy(l[g]).applyMatrix4(w,a),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}function jm(i){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=Zi:a===ta&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jo||a===ta)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Eo(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=4,$h=[.125,.215,.35,.446,.526,.582],es=20,ac=new Yi,Kh=new Gt,lc=null,cc=0,hc=0,uc=!1,ts=(1+Math.sqrt(5))/2,Bs=1/ts,Qh=[new z(-ts,Bs,0),new z(ts,Bs,0),new z(-Bs,0,ts),new z(Bs,0,ts),new z(0,ts,-Bs),new z(0,ts,Bs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],t0=new z,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=t0}=r;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,cc,hc),this._renderer.xr.enabled=uc,t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Us,format:gn,colorSpace:Bi,depthBuffer:!1},s=jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){let e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,s,r){let c=new hn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,m=l.toneMapping;l.getClearColor(Kh),l.toneMapping=li,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let M=new zi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),d=new fe(new yi,M),p=!1,w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,p=!0):(M.color.copy(Kh),p=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(c.up.set(0,h[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[g],r.y,r.z)):v===1?(c.up.set(0,0,h[g]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[g],r.z)):(c.up.set(0,h[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[g]));let E=this._cubeSize;za(s,v*E,g>2?E:0,E,E),l.setRenderTarget(s),p&&l.render(d,c),l.render(t,c)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=m,l.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;za(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ac)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new fe(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*es-1),M=r/x,d=isFinite(r)?1+Math.floor(u*M):es;d>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${es}`);let p=[],w=0;for(let b=0;b<es;++b){let R=b/M,_=Math.exp(-R*R/2);p.push(_),b===0?w+=_:b<d&&(w+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-n;let v=this._sizeLods[s],E=3*v*(s>g-zs?s-g+zs:0),A=4*(this._cubeSize-v);za(e,E,A,3*v,2*v),c.setRenderTarget(e),c.render(l,ac)}};function e0(i){let t=[],e=[],n=[],s=i,r=i-zs+1+$h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-zs?c=$h[o-i+zs-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],m=6,x=6,M=3,d=2,p=1,w=new Float32Array(M*x*m),g=new Float32Array(d*x*m),v=new Float32Array(p*x*m);for(let A=0;A<m;A++){let b=A%3*2/3-1,R=A>2?0:-1,_=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];w.set(_,M*x*A),g.set(f,d*x*A);let y=[A,A,A,A,A,A];v.set(y,p*x*A)}let E=new ve;E.setAttribute("position",new Xe(w,M)),E.setAttribute("uv",new Xe(g,d)),E.setAttribute("faceIndex",new Xe(v,p)),t.push(E),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jh(i,t,e){let n=new Xn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n0(i,t,e){let n=new Float32Array(es),s=new z(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function eu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function i0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===jo||c===ta,u=c===Zi||c===Ji;if(h||u){let l=t.get(a),f=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Hs(i)),l=h?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{let m=a.image;return h&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Hs(i)),l=h?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function s0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,t,e,n){let s={},r=new WeakMap;function o(l){let f=l.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(l,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(l){let f=l.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function h(l){let f=[],m=l.index,x=l.attributes.position,M=0;if(m!==null){let w=m.array;M=m.version;for(let g=0,v=w.length;g<v;g+=3){let E=w[g+0],A=w[g+1],b=w[g+2];f.push(E,A,A,b,b,E)}}else if(x!==void 0){let w=x.array;M=x.version;for(let g=0,v=w.length/3-1;g<v;g+=3){let E=g+0,A=g+1,b=g+2;f.push(E,A,A,b,b,E)}}else return;let d=new(ec(f)?pr:fr)(f,1);d.version=M;let p=r.get(l);p&&t.remove(p),r.set(l,d)}function u(l){let f=r.get(l);if(f){let m=l.index;m!==null&&f.version<m.version&&h(l)}else h(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:u}}function o0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function h(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,f*o,x),e.update(m,n,x))}function u(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,x);let d=0;for(let p=0;p<x;p++)d+=m[p];e.update(d,n,1)}function l(f,m,x,M){if(x===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)h(f[p]/o,m[p],M[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,x);let p=0;for(let w=0;w<x;w++)p+=m[w]*M[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function a0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,t,e){let n=new WeakMap,s=new me;function r(o,a,c){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==l){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],g=0;m===!0&&(g=1),x===!0&&(g=2),M===!0&&(g=3);let v=a.attributes.position.count*g,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*l),b=new ur(A,v,E,l);b.type=kn,b.needsUpdate=!0;let R=g*4;for(let y=0;y<l;y++){let D=d[y],U=p[y],N=w[y],k=v*E*4*y;for(let J=0;J<D.count;J++){let q=J*R;m===!0&&(s.fromBufferAttribute(D,J),A[k+q+0]=s.x,A[k+q+1]=s.y,A[k+q+2]=s.z,A[k+q+3]=0),x===!0&&(s.fromBufferAttribute(U,J),A[k+q+4]=s.x,A[k+q+5]=s.y,A[k+q+6]=s.z,A[k+q+7]=0),M===!0&&(s.fromBufferAttribute(N,J),A[k+q+8]=s.x,A[k+q+9]=s.y,A[k+q+10]=s.z,A[k+q+11]=N.itemSize===4?s.w:1)}}f={count:l,texture:b,size:new It(v,E)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let M=0;M<h.length;M++)m+=h[M];let x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function c0(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,l=t.get(c,u);if(s.get(l)!==h&&(t.update(l),s.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return l}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var vu=new mn,nu=new _r(1,1),Mu=new ur,bu=new So,Su=new gr,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),Ye(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),Ye(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Ye(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function E0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=Ql,r=nu):r=vu,e.setTexture2D(t||r,s)}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bu,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mu,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return y0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function I0(i,t){i.uniform1fv(this.addr,t)}function P0(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function L0(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F0(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function N0(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function z0(i,t){i.uniform3iv(this.addr,t)}function k0(i,t){i.uniform4iv(this.addr,t)}function H0(i,t){i.uniform1uiv(this.addr,t)}function V0(i,t){i.uniform2uiv(this.addr,t)}function G0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vu,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bu,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Su,r[o])}function Z0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mu,r[o])}function J0(i){switch(i){case 5126:return I0;case 35664:return P0;case 35665:return D0;case 35666:return L0;case 35674:return U0;case 35675:return F0;case 35676:return N0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function $0(i,t,e){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),o=dc.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){lu(e,h===void 0?new fc(a,i,t):new pc(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new mc(a),lu(e,l)),e=l}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K0=37297,Q0=0;function j0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hu=new jt;function tg(i){pe._getMatrix(hu,pe.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+j0(i.getShaderSource(t),a)}else return r}function eg(i,t){let e=tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(i,t){let e;switch(t){case wh:e="Linear";break;case Eh:e="Reinhard";break;case Th:e="Cineon";break;case Ah:e="ACESFilmic";break;case Ch:e="AgX";break;case Ds:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ka=new z;function ig(){pe.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),t=ka.y.toFixed(4),e=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gr(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(ag,cg)}var lg=new Map;function cg(i,t){let e=se[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ji&&(t="ENVMAP_MODE_REFRACTION"),t}function mg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=dg(e),h=fg(e),u=pg(e),l=mg(e),f=gg(e),m=sg(e),x=rg(r),M=s.createProgram(),d,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(d=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?se.tonemapping_pars_fragment:"",e.toneMapping!==li?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=gc(o),o=du(o,e),o=fu(o,e),a=gc(a),a=du(a,e),a=fu(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=w+d+o,v=w+p+a,E=cu(s,s.VERTEX_SHADER,g),A=cu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function b(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",N=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(A)||"",J=U.trim(),q=N.trim(),j=k.trim(),tt=!0,gt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,A);else{let Tt=uu(s,E,"vertex"),xt=uu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+Tt+`
`+xt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||j==="")&&(gt=!1);gt&&(D.diagnostics={runnable:tt,programLog:J,vertexShader:{log:q,prefix:d},fragmentShader:{log:j,prefix:p}})}s.deleteShader(E),s.deleteShader(A),R=new ks(s,M),_=og(s,M)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,K0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=A,this}var _g=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _c(t),e.set(t,n)),n}},_c=class{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}};function yg(i,t,e,n,s,r,o){let a=new Es,c=new xc,h=new Set,u=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return h.add(_),_===0?"uv":`uv${_}`}function d(_,y,D,U,N){let k=U.fog,J=N.geometry,q=_.isMeshStandardMaterial?U.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),tt=j&&j.mapping===Or?j.image.height:null,gt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let Tt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Tt!==void 0?Tt.length:0,Ut=0;J.morphAttributes.position!==void 0&&(Ut=1),J.morphAttributes.normal!==void 0&&(Ut=2),J.morphAttributes.color!==void 0&&(Ut=3);let Ft,zt,kt,dt;if(gt){let Ot=$n[gt];Ft=Ot.vertexShader,zt=Ot.fragmentShader}else Ft=_.vertexShader,zt=_.fragmentShader,c.update(_),kt=c.getVertexShaderID(_),dt=c.getFragmentShaderID(_);let G=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),_t=N.isInstancedMesh===!0,rt=N.isBatchedMesh===!0,wt=!!_.map,Dt=!!_.matcap,I=!!j,W=!!_.aoMap,X=!!_.lightMap,T=!!_.bumpMap,P=!!_.normalMap,B=!!_.displacementMap,O=!!_.emissiveMap,Y=!!_.metalnessMap,it=!!_.roughnessMap,nt=_.anisotropy>0,C=_.clearcoat>0,S=_.dispersion>0,H=_.iridescence>0,Z=_.sheen>0,K=_.transmission>0,V=nt&&!!_.anisotropyMap,ut=C&&!!_.clearcoatMap,ft=C&&!!_.clearcoatNormalMap,St=C&&!!_.clearcoatRoughnessMap,vt=H&&!!_.iridescenceMap,$=H&&!!_.iridescenceThicknessMap,yt=Z&&!!_.sheenColorMap,bt=Z&&!!_.sheenRoughnessMap,Et=!!_.specularMap,Mt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,F=K&&!!_.transmissionMap,lt=K&&!!_.thicknessMap,st=!!_.gradientMap,mt=!!_.alphaMap,ct=_.alphaTest>0,ot=!!_.alphaHash,At=!!_.extensions,Lt=li;_.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Zt={shaderID:gt,shaderType:_.type,shaderName:_.name,vertexShader:Ft,fragmentShader:zt,defines:_.defines,customVertexShaderID:kt,customFragmentShaderID:dt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:rt,batchingColor:rt&&N._colorsTexture!==null,instancing:_t,instancingColor:_t&&N.instanceColor!==null,instancingMorph:_t&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Bi,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:Dt,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:tt,aoMap:W,lightMap:X,bumpMap:T,normalMap:P,displacementMap:f&&B,emissiveMap:O,normalMapObjectSpace:P&&_.normalMapType===Lh,normalMapTangentSpace:P&&_.normalMapType===Oa,metalnessMap:Y,roughnessMap:it,anisotropy:nt,anisotropyMap:V,clearcoat:C,clearcoatMap:ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:St,dispersion:S,iridescence:H,iridescenceMap:vt,iridescenceThicknessMap:$,sheen:Z,sheenColorMap:yt,sheenRoughnessMap:bt,specularMap:Et,specularColorMap:Mt,specularIntensityMap:Rt,transmission:K,transmissionMap:F,thicknessMap:lt,gradientMap:st,opaque:_.transparent===!1&&_.blending===Ni&&_.alphaToCoverage===!1,alphaMap:mt,alphaTest:ct,alphaHash:ot,combine:_.combine,mapUv:wt&&M(_.map.channel),aoMapUv:W&&M(_.aoMap.channel),lightMapUv:X&&M(_.lightMap.channel),bumpMapUv:T&&M(_.bumpMap.channel),normalMapUv:P&&M(_.normalMap.channel),displacementMapUv:B&&M(_.displacementMap.channel),emissiveMapUv:O&&M(_.emissiveMap.channel),metalnessMapUv:Y&&M(_.metalnessMap.channel),roughnessMapUv:it&&M(_.roughnessMap.channel),anisotropyMapUv:V&&M(_.anisotropyMap.channel),clearcoatMapUv:ut&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&M(_.sheenRoughnessMap.channel),specularMapUv:Et&&M(_.specularMap.channel),specularColorMapUv:Mt&&M(_.specularColorMap.channel),specularIntensityMapUv:Rt&&M(_.specularIntensityMap.channel),transmissionMapUv:F&&M(_.transmissionMap.channel),thicknessMapUv:lt&&M(_.thicknessMap.channel),alphaMapUv:mt&&M(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(P||nt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(wt||mt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:O&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function p(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(w(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let y=x[_.type],D;if(y){let U=$n[y];D=Wh.clone(U.uniforms)}else D=_.uniforms;return D}function E(_,y){let D;for(let U=0,N=u.length;U<N;U++){let k=u[U];if(k.cacheKey===y){D=k,++D.usedTimes;break}}return D===void 0&&(D=new xg(i,y,_,r),u.push(D)),D}function A(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function R(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function vg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,f,m,x,M,d){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:f,material:m,groupOrder:x,renderOrder:l.renderOrder,z:M,group:d},i[t]=p):(p.id=l.id,p.object=l,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=l.renderOrder,p.z=M,p.group=d),t++,p}function a(l,f,m,x,M,d){let p=o(l,f,m,x,M,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(l,f,m,x,M,d){let p=o(l,f,m,x,M,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function h(l,f){e.length>1&&e.sort(l||Mg),n.length>1&&n.sort(f||gu),s.length>1&&s.sort(f||gu)}function u(){for(let l=t,f=i.length;l<f;l++){let m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:h}}function bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Gt};break;case"SpotLight":e={position:new z,direction:new z,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Eg=0;function Tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){let t=new Sg,e=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);let s=new z,r=new ye,o=new ye;function a(h){let u=0,l=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let m=0,x=0,M=0,d=0,p=0,w=0,g=0,v=0,E=0,A=0,b=0;h.sort(Tg);for(let _=0,y=h.length;_<y;_++){let D=h[_],U=D.color,N=D.intensity,k=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*N,l+=U.g*N,f+=U.b*N;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],N);b++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=q,m++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(U).multiplyScalar(N),q.distance=k,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[M]=q;let j=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,j.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=j.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=J,v++}M++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(U).multiplyScalar(N),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[d]=q,d++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let j=D.shadow,tt=e.get(D);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[x]=tt,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=D.shadow.matrix,g++}n.point[x]=q,x++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(N),q.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=q,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==m||R.pointLength!==x||R.spotLength!==M||R.rectAreaLength!==d||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==g||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=d,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,R.directionalLength=m,R.pointLength=x,R.spotLength=M,R.rectAreaLength=d,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=g,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=b,n.version=Eg++)}function c(h,u){let l=0,f=0,m=0,x=0,M=0,d=u.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){let g=h[p];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),l++}else if(g.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),m++}else if(g.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),o.identity(),r.copy(g.matrixWorld),r.premultiply(d),o.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(d),f++}else if(g.isHemisphereLight){let v=n.hemi[M];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(d),M++}}}return{setup:a,setupView:c,state:n}}function _u(i){let t=new Ag(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Rg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _u(i),t.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new As,s=new It,r=new It,o=new me,a=new Po({depthPacking:Dh}),c=new Do,h={},u=e.maxTextureSize,l={[ii]:je,[je]:ii,[dn]:dn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Cg,fragmentShader:Ig}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new ve;x.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new fe(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(A,b,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=p!==Zn&&this.type===Zn,k=p===Zn&&this.type!==Zn;for(let J=0,q=A.length;J<q;J++){let j=A[J],tt=j.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let gt=tt.getFrameExtents();if(s.multiply(gt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,tt.mapSize.y=r.y)),tt.map===null||N===!0||k===!0){let xt=this.type!==Zn?{minFilter:pn,magFilter:pn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Xn(s.x,s.y,xt),tt.map.texture.name=j.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let Tt=tt.getViewportCount();for(let xt=0;xt<Tt;xt++){let Ut=tt.getViewport(xt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),U.viewport(o),tt.updateMatrices(j,xt),n=tt.getFrustum(),v(b,R,tt.camera,j,this.type)}tt.isPointLightShadow!==!0&&this.type===Zn&&w(tt,R),tt.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(_,y,D)};function w(A,b){let R=t.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,R,f,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,R,m,M,null)}function g(A,b,R,_){let y=null,D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=R.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let U=y.uuid,N=b.uuid,k=h[U];k===void 0&&(k={},h[U]=k);let J=k[N];J===void 0&&(J=y.clone(),k[N]=J,b.addEventListener("dispose",E)),y=J}if(y.visible=b.visible,y.wireframe=b.wireframe,_===Zn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:l[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=R}return y}function v(A,b,R,_,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let N=t.update(A),k=A.material;if(Array.isArray(k)){let J=N.groups;for(let q=0,j=J.length;q<j;q++){let tt=J[q],gt=k[tt.materialIndex];if(gt&&gt.visible){let Tt=g(A,gt,_,y);A.onBeforeShadow(i,A,b,R,N,Tt,tt),i.renderBufferDirect(R,null,N,Tt,A,tt),A.onAfterShadow(i,A,b,R,N,Tt,tt)}}}else if(k.visible){let J=g(A,k,_,y);A.onBeforeShadow(i,A,b,R,N,J,null),i.renderBufferDirect(R,null,N,J,A,null),A.onAfterShadow(i,A,b,R,N,J,null)}}let U=A.children;for(let N=0,k=U.length;N<k;N++)v(U[N],b,R,_,y)}function E(A){A.target.removeEventListener("dispose",E);for(let R in h){let _=h[R],y=A.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Dg={[Xo]:qo,[Yo]:$o,[Zo]:Ko,[Oi]:Jo,[qo]:Xo,[$o]:Yo,[Ko]:Zo,[Jo]:Oi};function Lg(i,t){function e(){let F=!1,lt=new me,st=null,mt=new me(0,0,0,0);return{setMask:function(ct){st!==ct&&!F&&(i.colorMask(ct,ct,ct,ct),st=ct)},setLocked:function(ct){F=ct},setClear:function(ct,ot,At,Lt,Zt){Zt===!0&&(ct*=Lt,ot*=Lt,At*=Lt),lt.set(ct,ot,At,Lt),mt.equals(lt)===!1&&(i.clearColor(ct,ot,At,Lt),mt.copy(lt))},reset:function(){F=!1,st=null,mt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,st=null,mt=null,ct=null;return{setReversed:function(ot){if(lt!==ot){let At=t.get("EXT_clip_control");ot?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=ot;let Lt=ct;ct=null,this.setClear(Lt)}},getReversed:function(){return lt},setTest:function(ot){ot?G(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!F&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(lt&&(ot=Dg[ot]),mt!==ot){switch(ot){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ot}},setLocked:function(ot){F=ot},setClear:function(ot){ct!==ot&&(lt&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){F=!1,st=null,mt=null,ct=null,lt=!1}}}function s(){let F=!1,lt=null,st=null,mt=null,ct=null,ot=null,At=null,Lt=null,Zt=null;return{setTest:function(Ot){F||(Ot?G(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Ot){lt!==Ot&&!F&&(i.stencilMask(Ot),lt=Ot)},setFunc:function(Ot,Jt,te){(st!==Ot||mt!==Jt||ct!==te)&&(i.stencilFunc(Ot,Jt,te),st=Ot,mt=Jt,ct=te)},setOp:function(Ot,Jt,te){(ot!==Ot||At!==Jt||Lt!==te)&&(i.stencilOp(Ot,Jt,te),ot=Ot,At=Jt,Lt=te)},setLocked:function(Ot){F=Ot},setClear:function(Ot){Zt!==Ot&&(i.clearStencil(Ot),Zt=Ot)},reset:function(){F=!1,lt=null,st=null,mt=null,ct=null,ot=null,At=null,Lt=null,Zt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap,u={},l={},f=new WeakMap,m=[],x=null,M=!1,d=null,p=null,w=null,g=null,v=null,E=null,A=null,b=new Gt(0,0,0),R=0,_=!1,y=null,D=null,U=null,N=null,k=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),q=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),q=j>=2);let gt=null,Tt={},xt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Ft=new me().fromArray(xt),zt=new me().fromArray(Ut);function kt(F,lt,st,mt){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(F,ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<st;At++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(lt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let dt={};dt[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(Oi),T(!1),P(zl),G(i.CULL_FACE),W(ai);function G(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function _t(F,lt){return l[F]!==lt?(i.bindFramebuffer(F,lt),l[F]=lt,F===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function rt(F,lt){let st=m,mt=!1;if(F){st=f.get(lt),st===void 0&&(st=[],f.set(lt,st));let ct=F.textures;if(st.length!==ct.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,At=ct.length;ot<At;ot++)st[ot]=i.COLOR_ATTACHMENT0+ot;st.length=ct.length,mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,mt=!0);mt&&i.drawBuffers(st)}function wt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Dt={[_i]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};Dt[ah]=i.MIN,Dt[lh]=i.MAX;let I={[ch]:i.ZERO,[hh]:i.ONE,[uh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[fh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[gh]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function W(F,lt,st,mt,ct,ot,At,Lt,Zt,Ot){if(F===ai){M===!0&&(pt(i.BLEND),M=!1);return}if(M===!1&&(G(i.BLEND),M=!0),F!==sh){if(F!==d||Ot!==_){if((p!==_i||v!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,v=_i),Ot)switch(F){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,g=null,E=null,A=null,b.set(0,0,0),R=0,d=F,_=Ot}return}ct=ct||lt,ot=ot||st,At=At||mt,(lt!==p||ct!==v)&&(i.blendEquationSeparate(Dt[lt],Dt[ct]),p=lt,v=ct),(st!==w||mt!==g||ot!==E||At!==A)&&(i.blendFuncSeparate(I[st],I[mt],I[ot],I[At]),w=st,g=mt,E=ot,A=At),(Lt.equals(b)===!1||Zt!==R)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Zt),b.copy(Lt),R=Zt),d=F,_=!1}function X(F,lt){F.side===dn?pt(i.CULL_FACE):G(i.CULL_FACE);let st=F.side===je;lt&&(st=!st),T(st),F.blending===Ni&&F.transparent===!1?W(ai):W(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let mt=F.stencilWrite;a.setTest(mt),mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),O(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function T(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function P(F){F!==nh?(G(i.CULL_FACE),F!==D&&(F===zl?i.cullFace(i.BACK):F===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=F}function B(F){F!==U&&(q&&i.lineWidth(F),U=F)}function O(F,lt,st){F?(G(i.POLYGON_OFFSET_FILL),(N!==lt||k!==st)&&(i.polygonOffset(lt,st),N=lt,k=st)):pt(i.POLYGON_OFFSET_FILL)}function Y(F){F?G(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function it(F){F===void 0&&(F=i.TEXTURE0+J-1),gt!==F&&(i.activeTexture(F),gt=F)}function nt(F,lt,st){st===void 0&&(gt===null?st=i.TEXTURE0+J-1:st=gt);let mt=Tt[st];mt===void 0&&(mt={type:void 0,texture:void 0},Tt[st]=mt),(mt.type!==F||mt.texture!==lt)&&(gt!==st&&(i.activeTexture(st),gt=st),i.bindTexture(F,lt||dt[F]),mt.type=F,mt.texture=lt)}function C(){let F=Tt[gt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(F){Ft.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function bt(F){zt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function Et(F,lt){let st=h.get(lt);st===void 0&&(st=new WeakMap,h.set(lt,st));let mt=st.get(F);mt===void 0&&(mt=i.getUniformBlockIndex(lt,F.name),st.set(F,mt))}function Mt(F,lt){let mt=h.get(lt).get(F);c.get(lt)!==mt&&(i.uniformBlockBinding(lt,mt,F.__bindingPointIndex),c.set(lt,mt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,Tt={},l={},f=new WeakMap,m=[],x=null,M=!1,d=null,p=null,w=null,g=null,v=null,E=null,A=null,b=new Gt(0,0,0),R=0,_=!1,y=null,D=null,U=null,N=null,k=null,Ft.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:pt,bindFramebuffer:_t,drawBuffers:rt,useProgram:wt,setBlending:W,setMaterial:X,setFlipSided:T,setCullFace:P,setLineWidth:B,setPolygonOffset:O,setScissorTest:Y,activeTexture:it,bindTexture:nt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:vt,texImage3D:$,updateUBOMapping:Et,uniformBlockBinding:Mt,texStorage2D:ft,texStorage3D:St,texSubImage2D:Z,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:ut,scissor:yt,viewport:bt,reset:Rt}}function Ug(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,u=new WeakMap,l,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return m?new OffscreenCanvas(C,S):hr("canvas")}function M(C,S,H){let Z=1,K=nt(C);if((K.width>H||K.height>H)&&(Z=H/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let V=Math.floor(Z*K.width),ut=Math.floor(Z*K.height);l===void 0&&(l=x(V,ut));let ft=S?x(V,ut):l;return ft.width=V,ft.height=ut,ft.getContext("2d").drawImage(C,0,0,V,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+ut+")."),ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function d(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(C,S,H,Z,K=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=S;if(S===i.RED&&(H===i.FLOAT&&(V=i.R32F),H===i.HALF_FLOAT&&(V=i.R16F),H===i.UNSIGNED_BYTE&&(V=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.R8UI),H===i.UNSIGNED_SHORT&&(V=i.R16UI),H===i.UNSIGNED_INT&&(V=i.R32UI),H===i.BYTE&&(V=i.R8I),H===i.SHORT&&(V=i.R16I),H===i.INT&&(V=i.R32I)),S===i.RG&&(H===i.FLOAT&&(V=i.RG32F),H===i.HALF_FLOAT&&(V=i.RG16F),H===i.UNSIGNED_BYTE&&(V=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RG8UI),H===i.UNSIGNED_SHORT&&(V=i.RG16UI),H===i.UNSIGNED_INT&&(V=i.RG32UI),H===i.BYTE&&(V=i.RG8I),H===i.SHORT&&(V=i.RG16I),H===i.INT&&(V=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RGB8UI),H===i.UNSIGNED_SHORT&&(V=i.RGB16UI),H===i.UNSIGNED_INT&&(V=i.RGB32UI),H===i.BYTE&&(V=i.RGB8I),H===i.SHORT&&(V=i.RGB16I),H===i.INT&&(V=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),H===i.UNSIGNED_INT&&(V=i.RGBA32UI),H===i.BYTE&&(V=i.RGBA8I),H===i.SHORT&&(V=i.RGBA16I),H===i.INT&&(V=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),S===i.RGBA){let ut=K?lr:pe.getTransfer(Z);H===i.FLOAT&&(V=i.RGBA32F),H===i.HALF_FLOAT&&(V=i.RGBA16F),H===i.UNSIGNED_BYTE&&(V=ut===_e?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(C,S){let H;return C?S===null||S===Ei||S===Fs?H=i.DEPTH24_STENCIL8:S===kn?H=i.DEPTH32F_STENCIL8:S===Ls&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===Fs?H=i.DEPTH_COMPONENT24:S===kn?H=i.DEPTH_COMPONENT32F:S===Ls&&(H=i.DEPTH_COMPONENT16),H}function E(C,S){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&u.delete(S)}function b(C){let S=C.target;S.removeEventListener("dispose",b),y(S)}function R(C){let S=n.get(C);if(S.__webglInit===void 0)return;let H=C.source,Z=f.get(H);if(Z){let K=Z[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(C),Object.keys(Z).length===0&&f.delete(H)}n.remove(C)}function _(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let H=C.source,Z=f.get(H);delete Z[S.__cacheKey],o.memory.textures--}function y(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let K=0;K<S.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(S.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let Z=0,K=H.length;Z<K;Z++){let V=n.get(H[Z]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(C)}let D=0;function U(){D=0}function N(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function k(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function J(C,S){let H=n.get(C);if(C.isVideoTexture&&Y(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function q(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){dt(H,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function j(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){dt(H,C,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function tt(C,S){let H=n.get(C);if(C.version>0&&H.__version!==C.version){G(H,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let gt={[vs]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},Tt={[pn]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},xt={[Uh]:i.NEVER,[kh]:i.ALWAYS,[Fh]:i.LESS,[Ql]:i.LEQUAL,[Nh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[Bh]:i.NOTEQUAL};function Ut(C,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===ea||S.magFilter===Br||S.magFilter===Jn||S.minFilter===bn||S.minFilter===ea||S.minFilter===Br||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,gt[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,gt[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,gt[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Tt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Tt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==Br&&S.minFilter!==Jn||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ft(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let Z=S.source,K=f.get(Z);K===void 0&&(K={},f.set(Z,K));let V=k(S);if(V!==C.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[V].usedTimes++;let ut=K[C.__cacheKey];ut!==void 0&&(K[C.__cacheKey].usedTimes--,ut.usedTimes===0&&_(S)),C.__cacheKey=V,C.__webglTexture=K[V].texture}return H}function zt(C,S,H){return Math.floor(Math.floor(C/H)/S)}function kt(C,S,H,Z){let V=C.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,Z,S.data);else{V.sort(($,yt)=>$.start-yt.start);let ut=0;for(let $=1;$<V.length;$++){let yt=V[ut],bt=V[$],Et=yt.start+yt.count,Mt=zt(bt.start,S.width,4),Rt=zt(yt.start,S.width,4);bt.start<=Et+1&&Mt===Rt&&zt(bt.start+bt.count-1,S.width,4)===Mt?yt.count=Math.max(yt.count,bt.start+bt.count-yt.start):(++ut,V[ut]=bt)}V.length=ut+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let $=0,yt=V.length;$<yt;$++){let bt=V[$],Et=Math.floor(bt.start/4),Mt=Math.ceil(bt.count/4),Rt=Et%S.width,F=Math.floor(Et/S.width),lt=Mt,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Rt,F,lt,st,H,Z,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function dt(C,S,H){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);let K=Ft(C,S),V=S.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+H);let ut=n.get(V);if(V.version!==ut.__version||K===!0){e.activeTexture(i.TEXTURE0+H);let ft=pe.getPrimaries(pe.workingColorSpace),St=S.colorSpace===ci?null:pe.getPrimaries(S.colorSpace),vt=S.colorSpace===ci||ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let $=M(S.image,!1,s.maxTextureSize);$=it(S,$);let yt=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),Et=g(S.internalFormat,yt,bt,S.colorSpace,S.isVideoTexture);Ut(Z,S);let Mt,Rt=S.mipmaps,F=S.isVideoTexture!==!0,lt=ut.__version===void 0||K===!0,st=V.dataReady,mt=E(S,$);if(S.isDepthTexture)Et=v(S.format===Ns,S.type),lt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Et,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,yt,bt,null));else if(S.isDataTexture)if(Rt.length>0){F&&lt&&e.texStorage2D(i.TEXTURE_2D,mt,Et,Rt[0].width,Rt[0].height);for(let ct=0,ot=Rt.length;ct<ot;ct++)Mt=Rt[ct],F?st&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,Et,Mt.width,Mt.height,0,yt,bt,Mt.data);S.generateMipmaps=!1}else F?(lt&&e.texStorage2D(i.TEXTURE_2D,mt,Et,$.width,$.height),st&&kt(S,$,yt,bt)):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,yt,bt,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Et,Rt[0].width,Rt[0].height,$.depth);for(let ct=0,ot=Rt.length;ct<ot;ct++)if(Mt=Rt[ct],S.format!==gn)if(yt!==null)if(F){if(st)if(S.layerUpdates.size>0){let At=oc(Mt.width,Mt.height,S.format,S.type);for(let Lt of S.layerUpdates){let Zt=Mt.data.subarray(Lt*At/Mt.data.BYTES_PER_ELEMENT,(Lt+1)*At/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Lt,Mt.width,Mt.height,1,yt,Zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,$.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Et,Mt.width,Mt.height,$.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,$.depth,yt,bt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Et,Mt.width,Mt.height,$.depth,0,yt,bt,Mt.data)}else{F&&lt&&e.texStorage2D(i.TEXTURE_2D,mt,Et,Rt[0].width,Rt[0].height);for(let ct=0,ot=Rt.length;ct<ot;ct++)Mt=Rt[ct],S.format!==gn?yt!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Et,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?st&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,Et,Mt.width,Mt.height,0,yt,bt,Mt.data)}else if(S.isDataArrayTexture)if(F){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Et,$.width,$.height,$.depth),st)if(S.layerUpdates.size>0){let ct=oc($.width,$.height,S.format,S.type);for(let ot of S.layerUpdates){let At=$.data.subarray(ot*ct/$.data.BYTES_PER_ELEMENT,(ot+1)*ct/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,$.width,$.height,1,yt,bt,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,$.width,$.height,$.depth,0,yt,bt,$.data);else if(S.isData3DTexture)F?(lt&&e.texStorage3D(i.TEXTURE_3D,mt,Et,$.width,$.height,$.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,yt,bt,$.data)):e.texImage3D(i.TEXTURE_3D,0,Et,$.width,$.height,$.depth,0,yt,bt,$.data);else if(S.isFramebufferTexture){if(lt)if(F)e.texStorage2D(i.TEXTURE_2D,mt,Et,$.width,$.height);else{let ct=$.width,ot=$.height;for(let At=0;At<mt;At++)e.texImage2D(i.TEXTURE_2D,At,Et,ct,ot,0,yt,bt,null),ct>>=1,ot>>=1}}else if(Rt.length>0){if(F&&lt){let ct=nt(Rt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Et,ct.width,ct.height)}for(let ct=0,ot=Rt.length;ct<ot;ct++)Mt=Rt[ct],F?st&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt,bt,Mt):e.texImage2D(i.TEXTURE_2D,ct,Et,yt,bt,Mt);S.generateMipmaps=!1}else if(F){if(lt){let ct=nt($);e.texStorage2D(i.TEXTURE_2D,mt,Et,ct.width,ct.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,bt,$)}else e.texImage2D(i.TEXTURE_2D,0,Et,yt,bt,$);d(S)&&p(Z),ut.__version=V.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,H){if(S.image.length!==6)return;let Z=Ft(C,S),K=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let V=n.get(K);if(K.version!==V.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);let ut=pe.getPrimaries(pe.workingColorSpace),ft=S.colorSpace===ci?null:pe.getPrimaries(S.colorSpace),St=S.colorSpace===ci||ut===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,$=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!vt&&!$?yt[ot]=M(S.image[ot],!0,s.maxCubemapSize):yt[ot]=$?S.image[ot].image:S.image[ot],yt[ot]=it(S,yt[ot]);let bt=yt[0],Et=r.convert(S.format,S.colorSpace),Mt=r.convert(S.type),Rt=g(S.internalFormat,Et,Mt,S.colorSpace),F=S.isVideoTexture!==!0,lt=V.__version===void 0||Z===!0,st=K.dataReady,mt=E(S,bt);Ut(i.TEXTURE_CUBE_MAP,S);let ct;if(vt){F&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Rt,bt.width,bt.height);for(let ot=0;ot<6;ot++){ct=yt[ot].mipmaps;for(let At=0;At<ct.length;At++){let Lt=ct[At];S.format!==gn?Et!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Lt.width,Lt.height,Et,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Rt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Lt.width,Lt.height,Et,Mt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Rt,Lt.width,Lt.height,0,Et,Mt,Lt.data)}}}else{if(ct=S.mipmaps,F&&lt){ct.length>0&&mt++;let ot=nt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Rt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if($){F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,Et,Mt,yt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Rt,yt[ot].width,yt[ot].height,0,Et,Mt,yt[ot].data);for(let At=0;At<ct.length;At++){let Zt=ct[At].image[ot].image;F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Zt.width,Zt.height,Et,Mt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Rt,Zt.width,Zt.height,0,Et,Mt,Zt.data)}}else{F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et,Mt,yt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Rt,Et,Mt,yt[ot]);for(let At=0;At<ct.length;At++){let Lt=ct[At];F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,Et,Mt,Lt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Rt,Et,Mt,Lt.image[ot])}}}d(S)&&p(i.TEXTURE_CUBE_MAP),V.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pt(C,S,H,Z,K,V){let ut=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),St=g(H.internalFormat,ut,ft,H.colorSpace),vt=n.get(S),$=n.get(H);if($.__renderTarget=S,!vt.__hasExternalTextures){let yt=Math.max(1,S.width>>V),bt=Math.max(1,S.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,St,yt,bt,S.depth,0,ut,ft,null):e.texImage2D(K,V,St,yt,bt,0,ut,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),O(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,$.__webglTexture,0,B(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,$.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,V=v(S.stencilBuffer,K),ut=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=B(S);O(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,V,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,V,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,V,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,C)}else{let Z=S.textures;for(let K=0;K<Z.length;K++){let V=Z[K],ut=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),St=g(V.internalFormat,ut,ft,V.colorSpace),vt=B(S);H&&O(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,St,S.width,S.height):O(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,St,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,St,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let K=Z.__webglTexture,V=B(S);if(S.depthTexture.format===Ms)O(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ns)O(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(C){let S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?rt(S.__webglFramebuffer[0],C):rt(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),_t(S.__webglDepthbuffer[Z],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_t(S.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,S,H){let Z=n.get(C);S!==void 0&&pt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&wt(C)}function I(C){let S=C.texture,H=n.get(C),Z=n.get(S);C.addEventListener("dispose",b);let K=C.textures,V=C.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),V){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let St=0;St<S.mipmaps.length;St++)H.__webglFramebuffer[ft][St]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ut)for(let ft=0,St=K.length;ft<St;ft++){let vt=n.get(K[ft]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&O(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<K.length;ft++){let St=K[ft];H.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);let vt=r.convert(St.format,St.colorSpace),$=r.convert(St.type),yt=g(St.internalFormat,vt,$,St.colorSpace,C.isXRRenderTarget===!0),bt=B(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)pt(H.__webglFramebuffer[ft][St],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else pt(H.__webglFramebuffer[ft],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);d(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ft=0,St=K.length;ft<St;ft++){let vt=K[ft],$=n.get(vt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,$.__webglTexture),Ut(yt,vt),pt(H.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+ft,yt,0),d(vt)&&p(yt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Ut(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)pt(H.__webglFramebuffer[St],C,S,i.COLOR_ATTACHMENT0,ft,St);else pt(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ft,0);d(S)&&p(ft),e.unbindTexture()}C.depthBuffer&&wt(C)}function W(C){let S=C.textures;for(let H=0,Z=S.length;H<Z;H++){let K=S[H];if(d(K)){let V=w(C),ut=n.get(K).__webglTexture;e.bindTexture(V,ut),p(V),e.unbindTexture()}}}let X=[],T=[];function P(C){if(C.samples>0){if(O(C)===!1){let S=C.textures,H=C.width,Z=C.height,K=i.COLOR_BUFFER_BIT,V=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(C),ft=S.length>1;if(ft)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let $=n.get(S[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,K,i.NEAREST),c===!0&&(X.length=0,T.length=0,X.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(X.push(V),T.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let $=n.get(S[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function B(C){return Math.min(s.maxSamples,C.samples)}function O(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Y(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function it(C,S){let H=C.colorSpace,Z=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Bi&&H!==ci&&(pe.getTransfer(H)===_e?(Z!==gn||K!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=Dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=O}function Fg(i,t){function e(n,s=ci){let r,o=pe.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===ql)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===$l)return i.RGB;if(n===gn)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Pa||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ua||n===Fa||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Ng,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,u=null,l=null,f=null,m=null,x=null,M=typeof XRWebGLBinding<"u",d=new yc,p={},w=e.getContextAttributes(),g=null,v=null,E=[],A=[],b=new It,R=null,_=new hn;_.viewport=new me;let y=new hn;y.viewport=new me;let D=[_,y],U=new Go,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let G=E[dt];return G===void 0&&(G=new Ts,E[dt]=G),G.getTargetRaySpace()},this.getControllerGrip=function(dt){let G=E[dt];return G===void 0&&(G=new Ts,E[dt]=G),G.getGripSpace()},this.getHand=function(dt){let G=E[dt];return G===void 0&&(G=new Ts,E[dt]=G),G.getHandSpace()};function J(dt){let G=A.indexOf(dt.inputSource);if(G===-1)return;let pt=E[G];pt!==void 0&&(pt.update(dt.inputSource,dt.frame,h||o),pt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let dt=0;dt<E.length;dt++){let G=A[dt];G!==null&&(A[dt]=null,E[dt].disconnect(G))}N=null,k=null,d.reset();for(let dt in p)delete p[dt];t.setRenderTarget(g),m=null,f=null,l=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){a=dt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(dt){h=dt},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return l===null&&M&&(l=new XRWebGLBinding(s,e)),l},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,_t=null,rt=null;w.depth&&(rt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?Ns:Ms,_t=w.stencil?Fs:Ei);let wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};l=this.getBinding(),f=l.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Xn(f.textureWidth,f.textureHeight,{format:gn,type:zn,depthTexture:new _r(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Xn(m.framebufferWidth,m.framebufferHeight,{format:gn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function j(dt){for(let G=0;G<dt.removed.length;G++){let pt=dt.removed[G],_t=A.indexOf(pt);_t>=0&&(A[_t]=null,E[_t].disconnect(pt))}for(let G=0;G<dt.added.length;G++){let pt=dt.added[G],_t=A.indexOf(pt);if(_t===-1){for(let wt=0;wt<E.length;wt++)if(wt>=A.length){A.push(pt),_t=wt;break}else if(A[wt]===null){A[wt]=pt,_t=wt;break}if(_t===-1)break}let rt=E[_t];rt&&rt.connect(pt)}}let tt=new z,gt=new z;function Tt(dt,G,pt){tt.setFromMatrixPosition(G.matrixWorld),gt.setFromMatrixPosition(pt.matrixWorld);let _t=tt.distanceTo(gt),rt=G.projectionMatrix.elements,wt=pt.projectionMatrix.elements,Dt=rt[14]/(rt[10]-1),I=rt[14]/(rt[10]+1),W=(rt[9]+1)/rt[5],X=(rt[9]-1)/rt[5],T=(rt[8]-1)/rt[0],P=(wt[8]+1)/wt[0],B=Dt*T,O=Dt*P,Y=_t/(-T+P),it=Y*-T;if(G.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(it),dt.translateZ(Y),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),rt[10]===-1)dt.projectionMatrix.copy(G.projectionMatrix),dt.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let nt=Dt+Y,C=I+Y,S=B-it,H=O+(_t-it),Z=W*I/C*nt,K=X*I/C*nt;dt.projectionMatrix.makePerspective(S,H,Z,K,nt,C),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function xt(dt,G){G===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(G.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let G=dt.near,pt=dt.far;d.texture!==null&&(d.depthNear>0&&(G=d.depthNear),d.depthFar>0&&(pt=d.depthFar)),U.near=y.near=_.near=G,U.far=y.far=_.far=pt,(N!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,k=U.far),U.layers.mask=dt.layers.mask|6,_.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let _t=dt.parent,rt=U.cameras;xt(U,_t);for(let wt=0;wt<rt.length;wt++)xt(rt[wt],_t);rt.length===2?Tt(U,_,y):U.projectionMatrix.copy(_.projectionMatrix),Ut(dt,U,_t)};function Ut(dt,G,pt){pt===null?dt.matrix.copy(G.matrixWorld):(dt.matrix.copy(pt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(G.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(G.projectionMatrix),dt.projectionMatrixInverse.copy(G.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=bs*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(dt){c=dt,f!==null&&(f.fixedFoveation=dt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=dt)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(dt){return p[dt]};let Ft=null;function zt(dt,G){if(u=G.getViewerPose(h||o),x=G,u!==null){let pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let _t=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,_t=!0);for(let I=0;I<pt.length;I++){let W=pt[I],X=null;if(m!==null)X=m.getViewport(W);else{let P=l.getViewSubImage(f,W);X=P.viewport,I===0&&(t.setRenderTargetTextures(v,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(v))}let T=D[I];T===void 0&&(T=new hn,T.layers.enable(I),T.viewport=new me,D[I]=T),T.matrix.fromArray(W.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(W.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(X.x,X.y,X.width,X.height),I===0&&(U.matrix.copy(T.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),_t===!0&&U.cameras.push(T)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){l=n.getBinding();let I=l.getDepthInformation(pt[0]);I&&I.isValid&&I.texture&&d.init(I,s.renderState)}if(rt&&rt.includes("camera-access")&&M){t.state.unbindTexture(),l=n.getBinding();for(let I=0;I<pt.length;I++){let W=pt[I].camera;if(W){let X=p[W];X||(X=new yr,p[W]=X);let T=l.getCameraImage(W);X.sourceTexture=T}}}}for(let pt=0;pt<E.length;pt++){let _t=A[pt],rt=E[pt];_t!==null&&rt!==void 0&&rt.update(_t,G,h||o)}Ft&&Ft(dt,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),x=null}let kt=new yu;kt.setAnimationLoop(zt),this.setAnimationLoop=function(dt){Ft=dt},this.dispose=function(){}}},ji=new In,Bg=new ye;function zg(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,nc(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,w,g,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),l(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),x(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),M(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?c(d,p,w,g):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===je&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===je&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let w=t.get(p),g=w.envMap,v=w.envMapRotation;g&&(d.envMap.value=g,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),d.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(ji)),d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,w,g){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*w,d.scale.value=g*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function l(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,w){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,p){p.matcap&&(d.matcap.value=p.matcap)}function M(d,p){let w=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,g){let v=g.program;n.uniformBlockBinding(w,v)}function h(w,g){let v=s[w.id];v===void 0&&(x(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",d));let E=g.program;n.updateUBOMapping(w,E);let A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){let g=l();w.__bindingPointIndex=g;let v=i.createBuffer(),E=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v}function l(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let g=s[w.id],v=w.uniforms,E=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let A=0,b=v.length;A<b;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,y=R.length;_<y;_++){let D=R[_];if(m(D,A,_,E)===!0){let U=D.__offset,N=Array.isArray(D.value)?D.value:[D.value],k=0;for(let J=0;J<N.length;J++){let q=N[J],j=M(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,U+k,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,g,v,E){let A=w.value,b=g+"_"+v;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{let R=E[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(w){let g=w.uniforms,v=0,E=16;for(let b=0,R=g.length;b<R;b++){let _=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,D=_.length;y<D;y++){let U=_[y],N=Array.isArray(U.value)?U.value:[U.value];for(let k=0,J=N.length;k<J;k++){let q=N[k],j=M(q),tt=v%E,gt=tt%j.boundary,Tt=tt+gt;v+=gt,Tt!==0&&E-Tt<j.storage&&(v+=E-Tt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}let A=v%E;return A>0&&(v+=E-A),w.__size=v,w.__cache={},this}function M(w){let g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function d(w){let g=w.target;g.removeEventListener("dispose",d);let v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:h,dispose:p}}var Ha=class{constructor(t={}){let{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=new Uint32Array(4),M=new Int32Array(4),d=null,p=null,w=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=cn;let A=0,b=0,R=null,_=-1,y=null,D=new me,U=new me,N=null,k=new Gt(0),J=0,q=e.width,j=e.height,tt=1,gt=null,Tt=null,xt=new me(0,0,q,j),Ut=new me(0,0,q,j),Ft=!1,zt=new As,kt=!1,dt=!1,G=new ye,pt=new z,_t=new me,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Dt(){return R===null?tt:1}let I=n;function W(L,Q){return e.getContext(L,Q)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){let Q="webgl2";if(I=W(Q,L),I===null)throw W(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let X,T,P,B,O,Y,it,nt,C,S,H,Z,K,V,ut,ft,St,vt,$,yt,bt,Et,Mt,Rt;function F(){X=new s0(I),X.init(),Et=new Fg(I,X),T=new Km(I,X,t,Et),P=new Lg(I,X),T.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),B=new a0(I),O=new vg,Y=new Ug(I,X,P,O,T,Et,B),it=new jm(v),nt=new i0(v),C=new ff(I),Mt=new Jm(I,C),S=new r0(I,C,B,Mt),H=new c0(I,S,C,B),$=new l0(I,T,Y),ft=new Qm(O),Z=new yg(v,it,nt,X,T,Mt,ft),K=new zg(v,O),V=new bg,ut=new Rg(X),vt=new Zm(v,it,nt,P,H,m,c),St=new Pg(v,H,T),Rt=new kg(I,B,T,P),yt=new $m(I,X,B),bt=new o0(I,X,B),B.programs=Z.programs,v.capabilities=T,v.extensions=X,v.properties=O,v.renderLists=V,v.shadowMap=St,v.state=P,v.info=B}F();let lt=new vc(v,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=X.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=X.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(L){L!==void 0&&(tt=L,this.setSize(q,j,!1))},this.getSize=function(L){return L.set(q,j)},this.setSize=function(L,Q,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,j=Q,e.width=Math.floor(L*tt),e.height=Math.floor(Q*tt),at===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(q*tt,j*tt).floor()},this.setDrawingBufferSize=function(L,Q,at){q=L,j=Q,tt=at,e.width=Math.floor(L*at),e.height=Math.floor(Q*at),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(xt)},this.setViewport=function(L,Q,at,ht){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,Q,at,ht),P.viewport(D.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(L){return L.copy(Ut)},this.setScissor=function(L,Q,at,ht){L.isVector4?Ut.set(L.x,L.y,L.z,L.w):Ut.set(L,Q,at,ht),P.scissor(U.copy(Ut).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(L){P.setScissorTest(Ft=L)},this.setOpaqueSort=function(L){gt=L},this.setTransparentSort=function(L){Tt=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,at=!0){let ht=0;if(L){let et=!1;if(R!==null){let Ct=R.texture.format;et=Ct===la||Ct===aa||Ct===oa}if(et){let Ct=R.texture.type,Pt=Ct===zn||Ct===Ei||Ct===Ls||Ct===Fs||Ct===ia||Ct===sa,Ht=vt.getClearColor(),Nt=vt.getClearAlpha(),Wt=Ht.r,Xt=Ht.g,Vt=Ht.b;Pt?(x[0]=Wt,x[1]=Xt,x[2]=Vt,x[3]=Nt,I.clearBufferuiv(I.COLOR,0,x)):(M[0]=Wt,M[1]=Xt,M[2]=Vt,M[3]=Nt,I.clearBufferiv(I.COLOR,0,M))}else ht|=I.COLOR_BUFFER_BIT}Q&&(ht|=I.DEPTH_BUFFER_BIT),at&&(ht|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),vt.dispose(),V.dispose(),ut.dispose(),O.dispose(),it.dispose(),nt.dispose(),H.dispose(),Mt.dispose(),Rt.dispose(),Z.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",te),lt.removeEventListener("sessionend",ee),ue.stop()};function st(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let L=B.autoReset,Q=St.enabled,at=St.autoUpdate,ht=St.needsUpdate,et=St.type;F(),B.autoReset=L,St.enabled=Q,St.autoUpdate=at,St.needsUpdate=ht,St.type=et}function ct(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ot(L){let Q=L.target;Q.removeEventListener("dispose",ot),At(Q)}function At(L){Lt(L),O.remove(L)}function Lt(L){let Q=O.get(L).programs;Q!==void 0&&(Q.forEach(function(at){Z.releaseProgram(at)}),L.isShaderMaterial&&Z.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,at,ht,et,Ct){Q===null&&(Q=rt);let Pt=et.isMesh&&et.matrixWorld.determinant()<0,Ht=Je(L,Q,at,ht,et);P.setMaterial(ht,Pt);let Nt=at.index,Wt=1;if(ht.wireframe===!0){if(Nt=S.getWireframeAttribute(at),Nt===void 0)return;Wt=2}let Xt=at.drawRange,Vt=at.attributes.position,Qt=Xt.start*Wt,de=(Xt.start+Xt.count)*Wt;Ct!==null&&(Qt=Math.max(Qt,Ct.start*Wt),de=Math.min(de,(Ct.start+Ct.count)*Wt)),Nt!==null?(Qt=Math.max(Qt,0),de=Math.min(de,Nt.count)):Vt!=null&&(Qt=Math.max(Qt,0),de=Math.min(de,Vt.count));let $t=de-Qt;if($t<0||$t===1/0)return;Mt.setup(et,ht,Ht,at,Nt);let Kt,ie=yt;if(Nt!==null&&(Kt=C.get(Nt),ie=bt,ie.setIndex(Kt)),et.isMesh)ht.wireframe===!0?(P.setLineWidth(ht.wireframeLinewidth*Dt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(et.isLine){let qt=ht.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*Dt()),et.isLineSegments?ie.setMode(I.LINES):et.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else et.isPoints?ie.setMode(I.POINTS):et.isSprite&&ie.setMode(I.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))ie.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let qt=et._multiDrawStarts,xe=et._multiDrawCounts,oe=et._multiDrawCount,ke=Nt?C.get(Nt).bytesPerElement:1,Ie=O.get(ht).currentProgram.getUniforms();for(let ne=0;ne<oe;ne++)Ie.setValue(I,"_gl_DrawID",ne),ie.render(qt[ne]/ke,xe[ne])}else if(et.isInstancedMesh)ie.renderInstances(Qt,$t,et.count);else if(at.isInstancedBufferGeometry){let qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,xe=Math.min(at.instanceCount,qt);ie.renderInstances(Qt,$t,xe)}else ie.render(Qt,$t)};function Zt(L,Q,at){L.transparent===!0&&L.side===dn&&L.forceSinglePass===!1?(L.side=je,L.needsUpdate=!0,re(L,Q,at),L.side=ii,L.needsUpdate=!0,re(L,Q,at),L.side=dn):re(L,Q,at)}this.compile=function(L,Q,at=null){at===null&&(at=L),p=ut.get(at),p.init(Q),g.push(p),at.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),L!==at&&L.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights();let ht=new Set;return L.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ct=et.material;if(Ct)if(Array.isArray(Ct))for(let Pt=0;Pt<Ct.length;Pt++){let Ht=Ct[Pt];Zt(Ht,at,et),ht.add(Ht)}else Zt(Ct,at,et),ht.add(Ct)}),p=g.pop(),ht},this.compileAsync=function(L,Q,at=null){let ht=this.compile(L,Q,at);return new Promise(et=>{function Ct(){if(ht.forEach(function(Pt){O.get(Pt).currentProgram.isReady()&&ht.delete(Pt)}),ht.size===0){et(L);return}setTimeout(Ct,10)}X.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ot=null;function Jt(L){Ot&&Ot(L)}function te(){ue.stop()}function ee(){ue.start()}let ue=new yu;ue.setAnimationLoop(Jt),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(L){Ot=L,lt.setAnimationLoop(L),L===null?ue.stop():ue.start()},lt.addEventListener("sessionstart",te),lt.addEventListener("sessionend",ee),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Q),Q=lt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,Q,R),p=ut.get(L,g.length),p.init(Q),g.push(p),G.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),zt.setFromProjectionMatrix(G,Nn,Q.reversedDepth),dt=this.localClippingEnabled,kt=ft.init(this.clippingPlanes,dt),d=V.get(L,w.length),d.init(),w.push(d),lt.enabled===!0&&lt.isPresenting===!0){let Ct=v.xr.getDepthSensingMesh();Ct!==null&&he(Ct,Q,-1/0,v.sortObjects)}he(L,Q,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(gt,Tt),wt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,wt&&vt.addToRenderList(d,L),this.info.render.frame++,kt===!0&&ft.beginShadows();let at=p.state.shadowsArray;St.render(at,L,Q),kt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let ht=d.opaque,et=d.transmissive;if(p.setupLights(),Q.isArrayCamera){let Ct=Q.cameras;if(et.length>0)for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Nt=Ct[Pt];Pe(ht,et,L,Nt)}wt&&vt.render(L);for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let Nt=Ct[Pt];ge(d,L,Nt,Nt.viewport)}}else et.length>0&&Pe(ht,et,L,Q),wt&&vt.render(L),ge(d,L,Q);R!==null&&b===0&&(Y.updateMultisampleRenderTarget(R),Y.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(v,L,Q),Mt.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?(p=g[g.length-1],kt===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function he(L,Q,at,ht){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)at=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||zt.intersectsSprite(L)){ht&&_t.setFromMatrixPosition(L.matrixWorld).applyMatrix4(G);let Pt=H.update(L),Ht=L.material;Ht.visible&&d.push(L,Pt,Ht,at,_t.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||zt.intersectsObject(L))){let Pt=H.update(L),Ht=L.material;if(ht&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_t.copy(L.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),_t.copy(Pt.boundingSphere.center)),_t.applyMatrix4(L.matrixWorld).applyMatrix4(G)),Array.isArray(Ht)){let Nt=Pt.groups;for(let Wt=0,Xt=Nt.length;Wt<Xt;Wt++){let Vt=Nt[Wt],Qt=Ht[Vt.materialIndex];Qt&&Qt.visible&&d.push(L,Pt,Qt,at,_t.z,Vt)}}else Ht.visible&&d.push(L,Pt,Ht,at,_t.z,null)}}let Ct=L.children;for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++)he(Ct[Pt],Q,at,ht)}function ge(L,Q,at,ht){let et=L.opaque,Ct=L.transmissive,Pt=L.transparent;p.setupLightsView(at),kt===!0&&ft.setGlobalState(v.clippingPlanes,at),ht&&P.viewport(D.copy(ht)),et.length>0&&De(et,Q,at),Ct.length>0&&De(Ct,Q,at),Pt.length>0&&De(Pt,Q,at),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Pe(L,Q,at,ht){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ht.id]===void 0&&(p.state.transmissionRenderTarget[ht.id]=new Xn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Us:zn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let Ct=p.state.transmissionRenderTarget[ht.id],Pt=ht.viewport||D;Ct.setSize(Pt.z*v.transmissionResolutionScale,Pt.w*v.transmissionResolutionScale);let Ht=v.getRenderTarget(),Nt=v.getActiveCubeFace(),Wt=v.getActiveMipmapLevel();v.setRenderTarget(Ct),v.getClearColor(k),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),wt&&vt.render(at);let Xt=v.toneMapping;v.toneMapping=li;let Vt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),p.setupLightsView(ht),kt===!0&&ft.setGlobalState(v.clippingPlanes,ht),De(L,at,ht),Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct),X.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let de=0,$t=Q.length;de<$t;de++){let Kt=Q[de],ie=Kt.object,qt=Kt.geometry,xe=Kt.material,oe=Kt.group;if(xe.side===dn&&ie.layers.test(ht.layers)){let ke=xe.side;xe.side=je,xe.needsUpdate=!0,le(ie,at,ht,qt,xe,oe),xe.side=ke,xe.needsUpdate=!0,Qt=!0}}Qt===!0&&(Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct))}v.setRenderTarget(Ht,Nt,Wt),v.setClearColor(k,J),Vt!==void 0&&(ht.viewport=Vt),v.toneMapping=Xt}function De(L,Q,at){let ht=Q.isScene===!0?Q.overrideMaterial:null;for(let et=0,Ct=L.length;et<Ct;et++){let Pt=L[et],Ht=Pt.object,Nt=Pt.geometry,Wt=Pt.group,Xt=Pt.material;Xt.allowOverride===!0&&ht!==null&&(Xt=ht),Ht.layers.test(at.layers)&&le(Ht,Q,at,Nt,Xt,Wt)}}function le(L,Q,at,ht,et,Ct){L.onBeforeRender(v,Q,at,ht,et,Ct),L.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),et.onBeforeRender(v,Q,at,ht,L,Ct),et.transparent===!0&&et.side===dn&&et.forceSinglePass===!1?(et.side=je,et.needsUpdate=!0,v.renderBufferDirect(at,Q,ht,et,L,Ct),et.side=ii,et.needsUpdate=!0,v.renderBufferDirect(at,Q,ht,et,L,Ct),et.side=dn):v.renderBufferDirect(at,Q,ht,et,L,Ct),L.onAfterRender(v,Q,at,ht,et,Ct)}function re(L,Q,at){Q.isScene!==!0&&(Q=rt);let ht=O.get(L),et=p.state.lights,Ct=p.state.shadowsArray,Pt=et.state.version,Ht=Z.getParameters(L,et.state,Ct,Q,at),Nt=Z.getProgramCacheKey(Ht),Wt=ht.programs;ht.environment=L.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(L.isMeshStandardMaterial?nt:it).get(L.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,Wt===void 0&&(L.addEventListener("dispose",ot),Wt=new Map,ht.programs=Wt);let Xt=Wt.get(Nt);if(Xt!==void 0){if(ht.currentProgram===Xt&&ht.lightsStateVersion===Pt)return Ce(L,Ht),Xt}else Ht.uniforms=Z.getUniforms(L),L.onBeforeCompile(Ht,v),Xt=Z.acquireProgram(Ht,Nt),Wt.set(Nt,Xt),ht.uniforms=Ht.uniforms;let Vt=ht.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Vt.clippingPlanes=ft.uniform),Ce(L,Ht),ht.needsLights=Tn(L),ht.lightsStateVersion=Pt,ht.needsLights&&(Vt.ambientLightColor.value=et.state.ambient,Vt.lightProbe.value=et.state.probe,Vt.directionalLights.value=et.state.directional,Vt.directionalLightShadows.value=et.state.directionalShadow,Vt.spotLights.value=et.state.spot,Vt.spotLightShadows.value=et.state.spotShadow,Vt.rectAreaLights.value=et.state.rectArea,Vt.ltc_1.value=et.state.rectAreaLTC1,Vt.ltc_2.value=et.state.rectAreaLTC2,Vt.pointLights.value=et.state.point,Vt.pointLightShadows.value=et.state.pointShadow,Vt.hemisphereLights.value=et.state.hemi,Vt.directionalShadowMap.value=et.state.directionalShadowMap,Vt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Vt.spotShadowMap.value=et.state.spotShadowMap,Vt.spotLightMatrix.value=et.state.spotLightMatrix,Vt.spotLightMap.value=et.state.spotLightMap,Vt.pointShadowMap.value=et.state.pointShadowMap,Vt.pointShadowMatrix.value=et.state.pointShadowMatrix),ht.currentProgram=Xt,ht.uniformsList=null,Xt}function Re(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=ks.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Ce(L,Q){let at=O.get(L);at.outputColorSpace=Q.outputColorSpace,at.batching=Q.batching,at.batchingColor=Q.batchingColor,at.instancing=Q.instancing,at.instancingColor=Q.instancingColor,at.instancingMorph=Q.instancingMorph,at.skinning=Q.skinning,at.morphTargets=Q.morphTargets,at.morphNormals=Q.morphNormals,at.morphColors=Q.morphColors,at.morphTargetsCount=Q.morphTargetsCount,at.numClippingPlanes=Q.numClippingPlanes,at.numIntersection=Q.numClipIntersection,at.vertexAlphas=Q.vertexAlphas,at.vertexTangents=Q.vertexTangents,at.toneMapping=Q.toneMapping}function Je(L,Q,at,ht,et){Q.isScene!==!0&&(Q=rt),Y.resetTextureUnits();let Ct=Q.fog,Pt=ht.isMeshStandardMaterial?Q.environment:null,Ht=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bi,Nt=(ht.isMeshStandardMaterial?nt:it).get(ht.envMap||Pt),Wt=ht.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Xt=!!at.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Vt=!!at.morphAttributes.position,Qt=!!at.morphAttributes.normal,de=!!at.morphAttributes.color,$t=li;ht.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&($t=v.toneMapping);let Kt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ie=Kt!==void 0?Kt.length:0,qt=O.get(ht),xe=p.state.lights;if(kt===!0&&(dt===!0||L!==y)){let Te=L===y&&ht.id===_;ft.setState(ht,L,Te)}let oe=!1;ht.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==xe.state.version||qt.outputColorSpace!==Ht||et.isBatchedMesh&&qt.batching===!1||!et.isBatchedMesh&&qt.batching===!0||et.isBatchedMesh&&qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&qt.instancing===!1||!et.isInstancedMesh&&qt.instancing===!0||et.isSkinnedMesh&&qt.skinning===!1||!et.isSkinnedMesh&&qt.skinning===!0||et.isInstancedMesh&&qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&qt.instancingMorph===!1&&et.morphTexture!==null||qt.envMap!==Nt||ht.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ft.numPlanes||qt.numIntersection!==ft.numIntersection)||qt.vertexAlphas!==Wt||qt.vertexTangents!==Xt||qt.morphTargets!==Vt||qt.morphNormals!==Qt||qt.morphColors!==de||qt.toneMapping!==$t||qt.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,qt.__version=ht.version);let ke=qt.currentProgram;oe===!0&&(ke=re(ht,Q,et));let Ie=!1,ne=!1,$e=!1,ce=ke.getUniforms(),Oe=qt.uniforms;if(P.useProgram(ke.program)&&(Ie=!0,ne=!0,$e=!0),ht.id!==_&&(_=ht.id,ne=!0),Ie||y!==L){P.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ce.setValue(I,"projectionMatrix",L.projectionMatrix),ce.setValue(I,"viewMatrix",L.matrixWorldInverse);let He=ce.map.cameraPosition;He!==void 0&&He.setValue(I,pt.setFromMatrixPosition(L.matrixWorld)),T.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&ce.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,ne=!0,$e=!0)}if(et.isSkinnedMesh){ce.setOptional(I,et,"bindMatrix"),ce.setOptional(I,et,"bindMatrixInverse");let Te=et.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ce.setValue(I,"boneTexture",Te.boneTexture,Y))}et.isBatchedMesh&&(ce.setOptional(I,et,"batchingTexture"),ce.setValue(I,"batchingTexture",et._matricesTexture,Y),ce.setOptional(I,et,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",et._indirectTexture,Y),ce.setOptional(I,et,"batchingColorTexture"),et._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",et._colorsTexture,Y));let Be=at.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&$.update(et,at,ke),(ne||qt.receiveShadow!==et.receiveShadow)&&(qt.receiveShadow=et.receiveShadow,ce.setValue(I,"receiveShadow",et.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Oe.envMap.value=Nt,Oe.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(Oe.envMapIntensity.value=Q.environmentIntensity),ne&&(ce.setValue(I,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&an(Oe,$e),Ct&&ht.fog===!0&&K.refreshFogUniforms(Oe,Ct),K.refreshMaterialUniforms(Oe,ht,tt,j,p.state.transmissionRenderTarget[L.id]),ks.upload(I,Re(qt),Oe,Y)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(ks.upload(I,Re(qt),Oe,Y),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&ce.setValue(I,"center",et.center),ce.setValue(I,"modelViewMatrix",et.modelViewMatrix),ce.setValue(I,"normalMatrix",et.normalMatrix),ce.setValue(I,"modelMatrix",et.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){let Te=ht.uniformsGroups;for(let He=0,Ve=Te.length;He<Ve;He++){let en=Te[He];Rt.update(en,ke),Rt.bind(en,ke)}}return ke}function an(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function Tn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,Q,at){let ht=O.get(L);ht.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),O.get(L.texture).__webglTexture=Q,O.get(L.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:at,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let at=O.get(L);at.__webglFramebuffer=Q,at.__useDefaultFramebuffer=Q===void 0};let An=I.createFramebuffer();this.setRenderTarget=function(L,Q=0,at=0){R=L,A=Q,b=at;let ht=!0,et=null,Ct=!1,Pt=!1;if(L){let Nt=O.get(L);if(Nt.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(I.FRAMEBUFFER,null),ht=!1;else if(Nt.__webglFramebuffer===void 0)Y.setupRenderTarget(L);else if(Nt.__hasExternalTextures)Y.rebindTextures(L,O.get(L.texture).__webglTexture,O.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Vt=L.depthTexture;if(Nt.__boundDepthTexture!==Vt){if(Vt!==null&&O.has(Vt)&&(L.width!==Vt.image.width||L.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(L)}}let Wt=L.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);let Xt=O.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xt[Q])?et=Xt[Q][at]:et=Xt[Q],Ct=!0):L.samples>0&&Y.useMultisampledRTT(L)===!1?et=O.get(L).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[at]:et=Xt,D.copy(L.viewport),U.copy(L.scissor),N=L.scissorTest}else D.copy(xt).multiplyScalar(tt).floor(),U.copy(Ut).multiplyScalar(tt).floor(),N=Ft;if(at!==0&&(et=An),P.bindFramebuffer(I.FRAMEBUFFER,et)&&ht&&P.drawBuffers(L,et),P.viewport(D),P.scissor(U),P.setScissorTest(N),Ct){let Nt=O.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Nt.__webglTexture,at)}else if(Pt){let Nt=Q;for(let Wt=0;Wt<L.textures.length;Wt++){let Xt=O.get(L.textures[Wt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,at,Nt)}}else if(L!==null&&at!==0){let Nt=O.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,at)}_=-1},this.readRenderTargetPixels=function(L,Q,at,ht,et,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){P.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Wt=L.textures[Ht],Xt=Wt.format,Vt=Wt.type;if(!T.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-ht&&at>=0&&at<=L.height-et&&(L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(Q,at,ht,et,Et.convert(Xt),Et.convert(Vt),Ct))}finally{let Wt=R!==null?O.get(R).__webglFramebuffer:null;P.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,at,ht,et,Ct,Pt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=O.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt)if(Q>=0&&Q<=L.width-ht&&at>=0&&at<=L.height-et){P.bindFramebuffer(I.FRAMEBUFFER,Nt);let Wt=L.textures[Ht],Xt=Wt.format,Vt=Wt.type;if(!T.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.bufferData(I.PIXEL_PACK_BUFFER,Ct.byteLength,I.STREAM_READ),L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(Q,at,ht,et,Et.convert(Xt),Et.convert(Vt),0);let de=R!==null?O.get(R).__webglFramebuffer:null;P.bindFramebuffer(I.FRAMEBUFFER,de);let $t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Vh(I,$t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ct),I.deleteBuffer(Qt),I.deleteSync($t),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,at=0){let ht=Math.pow(2,-at),et=Math.floor(L.image.width*ht),Ct=Math.floor(L.image.height*ht),Pt=Q!==null?Q.x:0,Ht=Q!==null?Q.y:0;Y.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Pt,Ht,et,Ct),P.unbindTexture()};let Rn=I.createFramebuffer(),yn=I.createFramebuffer();this.copyTextureToTexture=function(L,Q,at=null,ht=null,et=0,Ct=null){Ct===null&&(et!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=et,et=0):Ct=0);let Pt,Ht,Nt,Wt,Xt,Vt,Qt,de,$t,Kt=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(at!==null)Pt=at.max.x-at.min.x,Ht=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Wt=at.min.x,Xt=at.min.y,Vt=at.isBox3?at.min.z:0;else{let Be=Math.pow(2,-et);Pt=Math.floor(Kt.width*Be),Ht=Math.floor(Kt.height*Be),L.isDataArrayTexture?Nt=Kt.depth:L.isData3DTexture?Nt=Math.floor(Kt.depth*Be):Nt=1,Wt=0,Xt=0,Vt=0}ht!==null?(Qt=ht.x,de=ht.y,$t=ht.z):(Qt=0,de=0,$t=0);let ie=Et.convert(Q.format),qt=Et.convert(Q.type),xe;Q.isData3DTexture?(Y.setTexture3D(Q,0),xe=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Y.setTexture2DArray(Q,0),xe=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(Q,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);let oe=I.getParameter(I.UNPACK_ROW_LENGTH),ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ie=I.getParameter(I.UNPACK_SKIP_PIXELS),ne=I.getParameter(I.UNPACK_SKIP_ROWS),$e=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Kt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Kt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);let ce=L.isDataArrayTexture||L.isData3DTexture,Oe=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let Be=O.get(L),Te=O.get(Q),He=O.get(Be.__renderTarget),Ve=O.get(Te.__renderTarget);P.bindFramebuffer(I.READ_FRAMEBUFFER,He.__webglFramebuffer),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let en=0;en<Nt;en++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(L).__webglTexture,et,Vt+en),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(Q).__webglTexture,Ct,$t+en)),I.blitFramebuffer(Wt,Xt,Pt,Ht,Qt,de,Pt,Ht,I.DEPTH_BUFFER_BIT,I.NEAREST);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(et!==0||L.isRenderTargetTexture||O.has(L)){let Be=O.get(L),Te=O.get(Q);P.bindFramebuffer(I.READ_FRAMEBUFFER,Rn),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,yn);for(let He=0;He<Nt;He++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,et,Vt+He):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,et),Oe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,Ct,$t+He):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,Ct),et!==0?I.blitFramebuffer(Wt,Xt,Pt,Ht,Qt,de,Pt,Ht,I.COLOR_BUFFER_BIT,I.NEAREST):Oe?I.copyTexSubImage3D(xe,Ct,Qt,de,$t+He,Wt,Xt,Pt,Ht):I.copyTexSubImage2D(xe,Ct,Qt,de,Wt,Xt,Pt,Ht);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Oe?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(xe,Ct,Qt,de,$t,Pt,Ht,Nt,ie,qt,Kt.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,Ct,Qt,de,$t,Pt,Ht,Nt,ie,Kt.data):I.texSubImage3D(xe,Ct,Qt,de,$t,Pt,Ht,Nt,ie,qt,Kt):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ct,Qt,de,Pt,Ht,ie,qt,Kt.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ct,Qt,de,Kt.width,Kt.height,ie,Kt.data):I.texSubImage2D(I.TEXTURE_2D,Ct,Qt,de,Pt,Ht,ie,qt,Kt);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),Ct===0&&Q.generateMipmaps&&I.generateMipmap(xe),P.unbindTexture()},this.initRenderTarget=function(L){O.get(L).__webglFramebuffer===void 0&&Y.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Y.setTextureCube(L,0):L.isData3DTexture?Y.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Y.setTexture2DArray(L,0):Y.setTexture2D(L,0),P.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,P.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Ga=class extends ki{constructor(){super();let t=new yi;t.deleteAttribute("uv");let e=new un({side:je}),n=new un,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Hi(t,n,6),a=new We;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new fe(t,Gs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new fe(t,Gs(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new fe(t,Gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let l=new fe(t,Gs(43));l.position.set(-.462,8.89,14.52),l.scale.set(4.38,5.441,.088),this.add(l);let f=new fe(t,Gs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new fe(t,Gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){return new Lr({color:0,emissive:16777215,emissiveIntensity:i})}var Fe=new Gn,Wa=new z,wu=new It,Eu=new It,Tu=new It,Xa=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let c=0;c<s;c++){let h=1,u=3*c,l=3*c+1,f=3*c+2;t&&(u=t.getX(u),l=t.getX(l),f=t.getX(f)),n&&(h=n.getX(u)+n.getX(l)+n.getX(f)),Fe.a.fromBufferAttribute(e,u),Fe.b.fromBufferAttribute(e,l),Fe.c.fromBufferAttribute(e,f),h*=Fe.getArea(),r[c]=h}let o=new Float32Array(s),a=0;for(let c=0;c<s;c++)a+=r[c],o[c]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let c=this.indexAttribute,h=t*3,u=t*3+1,l=t*3+2;return c&&(h=c.getX(h),u=c.getX(u),l=c.getX(l)),Fe.a.fromBufferAttribute(this.positionAttribute,h),Fe.b.fromBufferAttribute(this.positionAttribute,u),Fe.c.fromBufferAttribute(this.positionAttribute,l),e.set(0,0,0).addScaledVector(Fe.a,o).addScaledVector(Fe.b,a).addScaledVector(Fe.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Fe.a.fromBufferAttribute(this.normalAttribute,h),Fe.b.fromBufferAttribute(this.normalAttribute,u),Fe.c.fromBufferAttribute(this.normalAttribute,l),n.set(0,0,0).addScaledVector(Fe.a,o).addScaledVector(Fe.b,a).addScaledVector(Fe.c,1-(o+a)).normalize()):Fe.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(Fe.a.fromBufferAttribute(this.colorAttribute,h),Fe.b.fromBufferAttribute(this.colorAttribute,u),Fe.c.fromBufferAttribute(this.colorAttribute,l),Wa.set(0,0,0).addScaledVector(Fe.a,o).addScaledVector(Fe.b,a).addScaledVector(Fe.c,1-(o+a)),s.r=Wa.x,s.g=Wa.y,s.b=Wa.z),r!==void 0&&this.uvAttribute!==void 0&&(wu.fromBufferAttribute(this.uvAttribute,h),Eu.fromBufferAttribute(this.uvAttribute,u),Tu.fromBufferAttribute(this.uvAttribute,l),r.set(0,0).addScaledVector(wu,o).addScaledVector(Eu,a).addScaledVector(Tu,1-(o+a))),this}};var Au=new z(0,1,0),Ru=new z(0,-1,0);function Hg(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Vg(i,t){let e=new Pn(t*.1,t,i,3,4,!0);e.translate(0,i/2,0);let n=e.attributes.position;for(let s=0;s<n.count;s++){let r=Math.max(0,Math.min(1,n.getY(s)/i));n.setX(s,n.getX(s)+i*.24*Math.sin(Math.PI*.9*r)),n.setZ(s,n.getZ(s)+i*.12*r*r)}return e.computeVertexNormals(),e.computeBoundingBox(),e.userData.fiberProfile=Array.from({length:5},(s,r)=>{let o=r/4;return[i*.24*Math.sin(Math.PI*.9*o),i*o,i*.12*o*o]}),e.userData.fiberRadius=t,e}function Cu(i,t,e=1){i.root.updateMatrixWorld(!0);let n=i.surfaces.slice(),s=n.find(h=>h.material.bumpMap)?.material;for(let h of n){let u=h.material;(h.userData.surfaceMaterial||u.name||t.material)==="clay"&&!u.userData.clayFinish&&(u.roughness=.96,u.bumpScale=.0036,u.bumpMap&&(u.bumpMap=u.bumpMap.clone(),u.bumpMap.repeat.set(2.8,2.8)),u.userData.clayFinish=!0)}for(let h of["head-beret","head-beanie"])i.root.getObjectByName(h)?.traverse(u=>{!u.isMesh||n.includes(u)||(u.material=u.material.clone(),u.material.name="micro",u.material.roughness=1,s?.bumpMap&&(u.material.bumpMap=s.bumpMap,u.material.bumpScale=.0012),u.userData.surfaceMaterial="micro",n.push(u))});let r=n.filter(h=>{let u=h.userData.surfaceMaterial||h.material.name||t.material,l=!0;for(let f=h;f;f=f.parent)f.visible||(l=!1);return["plush","micro","fabric","knit","fiber"].includes(u)&&l}),o=r.map(h=>{h.geometry.computeBoundingBox();let u=h.geometry.boundingBox.getSize(new z).multiply(h.scale);return Math.max(.012,2*(u.x*u.y+u.x*u.z+u.y*u.z))}),a=o.reduce((h,u)=>h+u,0)||1,c=i.eyeGroups.map(h=>h.getWorldPosition(new z));r.forEach((h,u)=>{let l=h.userData.surfaceMaterial||h.material.name||t.material,f=l==="knit"||l==="fabric"||l==="fiber",m=l==="micro";!f&&h.material.bumpMap&&(h.material.bumpScale=Math.min(h.material.bumpScale,m?.0013:.0015));let x=Math.max(80,Math.round((f?3e4:m?1e5:19e4)*e*o[u]/a)),M=f?l==="fiber"?.018:.005:m?.01:.031,d=f?48e-5:m?62e-5:.0011,p=Vg(M,d),w=new un({color:h.material.color,roughness:1,metalness:0,side:dn});w.name="fine-pile";let g=new Hi(p,w,x);g.name="surface-fibers",g.castShadow=!1,g.receiveShadow=!0,g.userData.surfaceMaterial=l,g.userData.fiberProfile=p.userData.fiberProfile,g.userData.fiberRadius=d,g.userData.fiberTones=new Float32Array(x);let v=Hg((t.randomSeed||"dot")+h.name+u),E=new Xa(h).setRandomGenerator(v).build(),A=new z,b=new z,R=new z,_=new z,y=new z,D=new z,U=new We,N=new Gt,k=new Gt,J=new Qe;for(let q=0;q<x;q++){E.sample(A,b,k),b.normalize(),R.copy(Ru).addScaledVector(b,-Ru.dot(b)),R.lengthSq()<.005&&R.set(1,0,0).addScaledVector(b,-b.x),R.normalize(),_.crossVectors(b,R).normalize();let j=Math.sin(A.x*6.7+A.y*3.1)*.16+Math.cos(A.z*5.4-A.y*2.2)*.09;R.multiplyScalar(.94).addScaledVector(_,j+(v()-.5)*.48).normalize(),y.copy(b).multiplyScalar(.63).addScaledVector(R,.77).normalize(),U.position.copy(A).addScaledVector(b,-M*.055),U.quaternion.setFromUnitVectors(Au,y),J.setFromAxisAngle(Au,v()*Math.PI*2),U.quaternion.multiply(J);let tt=.64+v()*.52;D.copy(A).applyMatrix4(h.matrixWorld);for(let xt of c){let Ut=D.distanceToSquared(xt);Ut<.035&&(tt*=.36+.64*Math.min(1,Ut/.035))}let gt=.76+v()*.35;U.scale.set(gt,tt,gt),U.updateMatrix(),g.setMatrixAt(q,U.matrix);let Tt=f?.91+v()*.13:m?.91+v()*.15:.82+v()*.36;g.userData.fiberTones[q]=Tt,N.copy(k).multiplyScalar(Tt),g.setColorAt(q,N)}g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.frustumCulled=!1,h.add(g)})}var Ya=class extends fe{constructor(t,e,n=!1,s=!1,r=1e4){let o=new ve;super(o,e),this.isMarchingCubes=!0;let a=this,c=new Float32Array(36),h=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(w){this.resolution=w,this.isolation=80,this.size=w,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let g=r*3;this.positionArray=new Float32Array(g*3);let v=new Xe(this.positionArray,3);v.setUsage(Os),o.setAttribute("position",v),this.normalArray=new Float32Array(g*3);let E=new Xe(this.normalArray,3);if(E.setUsage(Os),o.setAttribute("normal",E),this.enableUvs){this.uvArray=new Float32Array(g*2);let A=new Xe(this.uvArray,2);A.setUsage(Os),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(g*3);let A=new Xe(this.colorArray,3);A.setUsage(Os),o.setAttribute("color",A)}o.boundingSphere=new qn(new z,1)};function l(w,g,v){return w+(g-w)*v}function f(w,g,v,E,A,b,R,_,y,D){let U=(v-R)/(_-R),N=a.normal_cache;c[g+0]=E+U*a.delta,c[g+1]=A,c[g+2]=b,h[g+0]=l(N[w+0],N[w+3],U),h[g+1]=l(N[w+1],N[w+4],U),h[g+2]=l(N[w+2],N[w+5],U),u[g+0]=l(a.palette[y*3+0],a.palette[D*3+0],U),u[g+1]=l(a.palette[y*3+1],a.palette[D*3+1],U),u[g+2]=l(a.palette[y*3+2],a.palette[D*3+2],U)}function m(w,g,v,E,A,b,R,_,y,D){let U=(v-R)/(_-R),N=a.normal_cache;c[g+0]=E,c[g+1]=A+U*a.delta,c[g+2]=b;let k=w+a.yd*3;h[g+0]=l(N[w+0],N[k+0],U),h[g+1]=l(N[w+1],N[k+1],U),h[g+2]=l(N[w+2],N[k+2],U),u[g+0]=l(a.palette[y*3+0],a.palette[D*3+0],U),u[g+1]=l(a.palette[y*3+1],a.palette[D*3+1],U),u[g+2]=l(a.palette[y*3+2],a.palette[D*3+2],U)}function x(w,g,v,E,A,b,R,_,y,D){let U=(v-R)/(_-R),N=a.normal_cache;c[g+0]=E,c[g+1]=A,c[g+2]=b+U*a.delta;let k=w+a.zd*3;h[g+0]=l(N[w+0],N[k+0],U),h[g+1]=l(N[w+1],N[k+1],U),h[g+2]=l(N[w+2],N[k+2],U),u[g+0]=l(a.palette[y*3+0],a.palette[D*3+0],U),u[g+1]=l(a.palette[y*3+1],a.palette[D*3+1],U),u[g+2]=l(a.palette[y*3+2],a.palette[D*3+2],U)}function M(w){let g=w*3;a.normal_cache[g]===0&&(a.normal_cache[g+0]=a.field[w-1]-a.field[w+1],a.normal_cache[g+1]=a.field[w-a.yd]-a.field[w+a.yd],a.normal_cache[g+2]=a.field[w-a.zd]-a.field[w+a.zd])}function d(w,g,v,E,A){let b=E+1,R=E+a.yd,_=E+a.zd,y=b+a.yd,D=b+a.zd,U=E+a.yd+a.zd,N=b+a.yd+a.zd,k=0,J=a.field[E],q=a.field[b],j=a.field[R],tt=a.field[y],gt=a.field[_],Tt=a.field[D],xt=a.field[U],Ut=a.field[N];J<A&&(k|=1),q<A&&(k|=2),j<A&&(k|=8),tt<A&&(k|=4),gt<A&&(k|=16),Tt<A&&(k|=32),xt<A&&(k|=128),Ut<A&&(k|=64);let Ft=Gg[k];if(Ft===0)return 0;let zt=a.delta,kt=w+zt,dt=g+zt,G=v+zt;Ft&1&&(M(E),M(b),f(E*3,0,A,w,g,v,J,q,E,b)),Ft&2&&(M(b),M(y),m(b*3,3,A,kt,g,v,q,tt,b,y)),Ft&4&&(M(R),M(y),f(R*3,6,A,w,dt,v,j,tt,R,y)),Ft&8&&(M(E),M(R),m(E*3,9,A,w,g,v,J,j,E,R)),Ft&16&&(M(_),M(D),f(_*3,12,A,w,g,G,gt,Tt,_,D)),Ft&32&&(M(D),M(N),m(D*3,15,A,kt,g,G,Tt,Ut,D,N)),Ft&64&&(M(U),M(N),f(U*3,18,A,w,dt,G,xt,Ut,U,N)),Ft&128&&(M(_),M(U),m(_*3,21,A,w,g,G,gt,xt,_,U)),Ft&256&&(M(E),M(_),x(E*3,24,A,w,g,v,J,gt,E,_)),Ft&512&&(M(b),M(D),x(b*3,27,A,kt,g,v,q,Tt,b,D)),Ft&1024&&(M(y),M(N),x(y*3,30,A,kt,dt,v,tt,Ut,y,N)),Ft&2048&&(M(R),M(U),x(R*3,33,A,w,dt,v,j,xt,R,U)),k<<=4;let pt,_t,rt,wt=0,Dt=0;for(;qa[k+Dt]!=-1;)pt=k+Dt,_t=pt+1,rt=pt+2,p(c,h,u,3*qa[pt],3*qa[_t],3*qa[rt]),Dt+=3,wt++;return wt}function p(w,g,v,E,A,b){let R=a.count*3;if(a.positionArray[R+0]=w[E],a.positionArray[R+1]=w[E+1],a.positionArray[R+2]=w[E+2],a.positionArray[R+3]=w[A],a.positionArray[R+4]=w[A+1],a.positionArray[R+5]=w[A+2],a.positionArray[R+6]=w[b],a.positionArray[R+7]=w[b+1],a.positionArray[R+8]=w[b+2],a.material.flatShading===!0){let _=(g[E+0]+g[A+0]+g[b+0])/3,y=(g[E+1]+g[A+1]+g[b+1])/3,D=(g[E+2]+g[A+2]+g[b+2])/3;a.normalArray[R+0]=_,a.normalArray[R+1]=y,a.normalArray[R+2]=D,a.normalArray[R+3]=_,a.normalArray[R+4]=y,a.normalArray[R+5]=D,a.normalArray[R+6]=_,a.normalArray[R+7]=y,a.normalArray[R+8]=D}else a.normalArray[R+0]=g[E+0],a.normalArray[R+1]=g[E+1],a.normalArray[R+2]=g[E+2],a.normalArray[R+3]=g[A+0],a.normalArray[R+4]=g[A+1],a.normalArray[R+5]=g[A+2],a.normalArray[R+6]=g[b+0],a.normalArray[R+7]=g[b+1],a.normalArray[R+8]=g[b+2];if(a.enableUvs){let _=a.count*2;a.uvArray[_+0]=w[E+0],a.uvArray[_+1]=w[E+2],a.uvArray[_+2]=w[A+0],a.uvArray[_+3]=w[A+2],a.uvArray[_+4]=w[b+0],a.uvArray[_+5]=w[b+2]}a.enableColors&&(a.colorArray[R+0]=v[E+0],a.colorArray[R+1]=v[E+1],a.colorArray[R+2]=v[E+2],a.colorArray[R+3]=v[A+0],a.colorArray[R+4]=v[A+1],a.colorArray[R+5]=v[A+2],a.colorArray[R+6]=v[b+0],a.colorArray[R+7]=v[b+1],a.colorArray[R+8]=v[b+2]),a.count+=3}this.addBall=function(w,g,v,E,A,b){let R=Math.sign(E);E=Math.abs(E);let _=b!=null,y=new Gt(w,g,v);if(_)try{y=b instanceof Gt?b:Array.isArray(b)?new Gt(Math.min(Math.abs(b[0]),1),Math.min(Math.abs(b[1]),1),Math.min(Math.abs(b[2]),1)):new Gt(b)}catch{y=new Gt(w,g,v)}let D=this.size*Math.sqrt(E/A),U=v*this.size,N=g*this.size,k=w*this.size,J=Math.floor(U-D);J<1&&(J=1);let q=Math.floor(U+D);q>this.size-1&&(q=this.size-1);let j=Math.floor(N-D);j<1&&(j=1);let tt=Math.floor(N+D);tt>this.size-1&&(tt=this.size-1);let gt=Math.floor(k-D);gt<1&&(gt=1);let Tt=Math.floor(k+D);Tt>this.size-1&&(Tt=this.size-1);let xt,Ut,Ft,zt,kt,dt,G,pt,_t,rt,wt;for(Ft=J;Ft<q;Ft++)for(kt=this.size2*Ft,pt=Ft/this.size-v,_t=pt*pt,Ut=j;Ut<tt;Ut++)for(zt=kt+this.size*Ut,G=Ut/this.size-g,rt=G*G,xt=gt;xt<Tt;xt++)if(dt=xt/this.size-w,wt=E/(1e-6+dt*dt+rt+_t)-A,wt>0){this.field[zt+xt]+=wt*R;let Dt=Math.sqrt((xt-k)*(xt-k)+(Ut-N)*(Ut-N)+(Ft-U)*(Ft-U))/D,I=1-Dt*Dt*Dt*(Dt*(Dt*6-15)+10);this.palette[(zt+xt)*3+0]+=y.r*I,this.palette[(zt+xt)*3+1]+=y.g*I,this.palette[(zt+xt)*3+2]+=y.b*I}},this.addPlaneX=function(w,g){let v=this.size,E=this.yd,A=this.zd,b=this.field,R,_,y,D,U,N,k,J=v*Math.sqrt(w/g);for(J>v&&(J=v),R=0;R<J;R++)if(N=R/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(_=0;_<v;_++)for(k=R+_*E,y=0;y<v;y++)b[A*y+k]+=U},this.addPlaneY=function(w,g){let v=this.size,E=this.yd,A=this.zd,b=this.field,R,_,y,D,U,N,k,J,q=v*Math.sqrt(w/g);for(q>v&&(q=v),_=0;_<q;_++)if(N=_/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(k=_*E,R=0;R<v;R++)for(J=k+R,y=0;y<v;y++)b[A*y+J]+=U},this.addPlaneZ=function(w,g){let v=this.size,E=this.yd,A=this.zd,b=this.field,R,_,y,D,U,N,k,J,q=v*Math.sqrt(w/g);for(q>v&&(q=v),y=0;y<q;y++)if(N=y/v,D=N*N,U=w/(1e-4+D)-g,U>0)for(k=A*y,_=0;_<v;_++)for(J=k+_*E,R=0;R<v;R++)b[J+R]+=U},this.setCell=function(w,g,v,E){let A=this.size2*v+this.size*g+w;this.field[A]=E},this.getCell=function(w,g,v){let E=this.size2*v+this.size*g+w;return this.field[E]},this.blur=function(w=1){let g=this.field,v=g.slice(),E=this.size,A=this.size2;for(let b=0;b<E;b++)for(let R=0;R<E;R++)for(let _=0;_<E;_++){let y=A*_+E*R+b,D=v[y],U=1;for(let N=-1;N<=1;N+=2){let k=N+b;if(!(k<0||k>=E))for(let J=-1;J<=1;J+=2){let q=J+R;if(!(q<0||q>=E))for(let j=-1;j<=1;j+=2){let tt=j+_;if(tt<0||tt>=E)continue;let gt=A*tt+E*q+k,Tt=v[gt];U++,D+=w*(Tt-D)/U}}}g[y]=D}},this.reset=function(){for(let w=0;w<this.size3;w++)this.normal_cache[w*3]=0,this.field[w]=0,this.palette[w*3]=this.palette[w*3+1]=this.palette[w*3+2]=0},this.update=function(){this.count=0;let w=this.size-2;for(let g=1;g<w;g++){let v=this.size2*g,E=(g-this.halfsize)/this.halfsize;for(let A=1;A<w;A++){let b=v+this.size*A,R=(A-this.halfsize)/this.halfsize;for(let _=1;_<w;_++){let y=(_-this.halfsize)/this.halfsize,D=b+_;d(y,R,E,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Gg=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),qa=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Ze=Math.PI*2,Iu=new z(0,1,0),Za=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),qs=new Map,ns=(i,t,e)=>Math.max(t,Math.min(e,i)),Xs=i=>new z(...i),Ws=(i,t)=>new Gt(i).multiplyScalar(t),xn=(i,t,e)=>new Gt(i).lerp(new Gt(t),e),be=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Ti(i,t,e=.19){let n="sculpted:"+i;if(qs.has(n))return qs.get(n).clone();let s=72,r=1.54,o=new Ya(s,void 0,!1,!1,5e4);o.isolation=0;let a=(x,M,d,[p,w,g,v,E,A])=>{x-=p,M-=w,d-=g;let b=Math.hypot(x/v,M/E,d/A),R=Math.hypot(x/(v*v),M/(E*E),d/(A*A));return R>1e-9?b*(b-1)/R:-Math.min(v,E,A)},c=(x,M)=>{let d=Math.max(e-Math.abs(x-M),0)/e;return Math.min(x,M)-d*d*e*.25};for(let x=0;x<s;x++)for(let M=0;M<s;M++)for(let d=0;d<s;d++){let p=(d/s*2-1)*r,w=(M/s*2-1)*r,g=(x/s*2-1)*r,v=a(p,w,g,t[0]);for(let E=1;E<t.length;E++)v=c(v,a(p,w,g,t[E]));o.field[d+M*s+x*s*s]=-v}o.update();let h=o.count,u=new ve,l=o.positionArray.slice(0,h*3),f=o.normalArray.slice(0,h*3),m=[];for(let x=0;x<h;x++)l[x*3]*=r,l[x*3+1]*=r,l[x*3+2]*=r,m.push(Math.atan2(l[x*3],l[x*3+2])/Ze+.5,(l[x*3+1]+1.2)/2.4);return u.setAttribute("position",new Yt(l,3)),u.setAttribute("normal",new Yt(f,3)),u.setAttribute("uv",new Yt(m,2)),u.normalizeNormals(),u.computeBoundingBox(),u.computeBoundingSphere(),o.geometry.dispose(),o.material?.dispose(),qs.set(n,u),u.clone()}function bc(i){let t=[],e=[],n=[],s=[];for(let o of i){let a=o,c=t.length/3;if(t.push(...a.attributes.position.array),e.push(...a.attributes.normal.array),a.attributes.uv&&n.push(...a.attributes.uv.array),a.index)for(let h of a.index.array)s.push(h+c);else for(let h=0;h<a.attributes.position.count;h++)s.push(c+h);o.dispose()}let r=new ve;return r.setAttribute("position",new Yt(t,3)),r.setAttribute("normal",new Yt(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new Yt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function Pu(i,t,e=.82,n=.98){let s=i+":"+e+":"+n;if(qs.has(s))return qs.get(s).clone();let r=t.map(([d,p])=>new z(d,p,0));r.reduce((d,p,w)=>d+p.x*r[(w+1)%r.length].y-r[(w+1)%r.length].x*p.y,0)<0&&r.reverse();let a=new rn(r,!0,"catmullrom",.35),c=112,h=48,u=[],l=[],f=[],m=r.reduce((d,p)=>d+Math.hypot(p.x,p.y),0)/r.length;for(let d=0;d<=h;d++){let p=d/h*Math.PI,w=Math.pow(Math.sin(p),n);for(let g=0;g<=c;g++){let v=a.getPoint(g/c),E=Math.hypot(v.x,v.y),A=w**2.65,b=m+(E-m)*A,R=E>1e-6?w*b/E:0;if(u.push(v.x*R,v.y*R,e*Math.cos(p)),l.push(g/c,d/h),g<c&&d<h){let _=d*(c+1)+g,y=_+c+1;f.push(_,y,_+1,y,y+1,_+1)}}}let x=new ve;x.setAttribute("position",new Yt(u,3)),x.setAttribute("uv",new Yt(l,2)),x.setIndex(f),x.computeVertexNormals();let M=x.attributes.normal;for(let d=0;d<=h;d++){let p=d*(c+1),w=p+c;if(d===0||d===h)for(let g=p;g<=w;g++)M.setXYZ(g,0,0,d===0?1:-1);else{let g=new z().fromBufferAttribute(M,p).add(new z().fromBufferAttribute(M,w)).normalize();M.setXYZ(p,g.x,g.y,g.z),M.setXYZ(w,g.x,g.y,g.z)}}return x.computeBoundingBox(),x.computeBoundingSphere(),qs.set(s,x),x.clone()}function Ja(i,t,e=1){let n=new rn(i.map(Xs),!1,"centripetal"),s=30,r=14,o=n.computeFrenetFrames(s,!1),a=[],c=[],h=[];for(let l=0;l<=s;l++){let f=l/s,m=n.getPointAt(f),x=Math.min(1,Math.sin(Math.min(1,f/.13)*Math.PI/2),Math.sin(Math.min(1,(1-f)/.19)*Math.PI/2)),M=t*(1+(e-1)*f)*x;for(let d=0;d<=r;d++){let p=d/r*Ze,w=o.normals[l],g=o.binormals[l];if(a.push(m.x+(w.x*Math.cos(p)+g.x*Math.sin(p))*M,m.y+(w.y*Math.cos(p)+g.y*Math.sin(p))*M,m.z+(w.z*Math.cos(p)+g.z*Math.sin(p))*M),c.push(d/r,f),l<s&&d<r){let v=l*(r+1)+d,E=v+r+1;h.push(v,v+1,E,v+1,E+1,E)}}}let u=new ve;return u.setAttribute("position",new Yt(a,3)),u.setAttribute("uv",new Yt(c,2)),u.setIndex(h),u.computeVertexNormals(),u.computeBoundingSphere(),u}function Du(i){let t=(r=1,o=16)=>Array.from({length:o},(a,c)=>{let h=c/o*Ze,u=Math.cos(h),l=Math.sin(h);return[Math.sign(u)*Math.abs(u)**r,Math.sign(l)*Math.abs(l)**r]}),e=r=>Array.from({length:r},(o,a)=>[Math.sin(a/r*Ze),Math.cos(a/r*Ze)]),n=(r,o,a=0,c=1,h=1)=>Array.from({length:72},(u,l)=>{let f=l/72*Ze,m=1+o*Math.cos(f*r+a);return[Math.sin(f)*m*c,Math.cos(f)*m*h]}),s={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1.04,-.56],[-1.2,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.9,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.8],[-.57,-.76]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.2],[1,.23],[.69,.65],[.34,.97]],triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],heart:[[0,.56],[-.24,.78],[-.54,.9],[-.8,.81],[-.955,.58],[-.975,.3],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.3],[.955,.58],[.8,.81],[.54,.9],[.24,.78]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.1],[-1.03,-.1],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.1],[1.03,.1],[.865,.31],[.175,.985]],star:Array.from({length:40},(r,o)=>{let a=o/40*Ze,c=.88+.18*Math.cos(a*5);return[Math.sin(a)*c,Math.cos(a)*c]}),puff:n(6,.15,.38),clover:n(4,.25,Math.PI,1.035,.88),scallop:n(10,.058),hexagon:e(6),roundedcube:t(.5),sphere:t(),sprout:t(),frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.5],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.5],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:t()};return s[i]||s.dumpling}function Wg(i){let e=new Uint8Array(65536),n=["plush","micro"].includes(i),s=null,r=0,o=1;if(n){s=new Float32Array(16384);for(let u=0;u<2500;u++){let l=be(u*7+191)*128,f=be(u*7+193)*128,m=2+be(u*7+197)*3,x=(be(u*7+199)-.5)*.88,M=Math.sin(x),d=Math.cos(x),p=.39+be(u*7+211)*.3,w=.55+be(u*7+223)*.75,g=Math.ceil(m+1);for(let v=-g;v<=g;v++)for(let E=-g;E<=g;E++){let A=Math.floor(l)+E,b=Math.floor(f)+v,R=A-l,_=b-f,y=R*M+_*d,D=R*d-_*M,U=Math.exp(-.5*(y/(m*.46))**2-.5*(D/p)**2)*w;s[(b%128+128)%128*128+(A%128+128)%128]+=U}}for(let u of s)r+=u;r/=s.length;let h=0;for(let u of s)h+=(u-r)**2;o=(i==="micro"?45:54)/Math.max(.01,Math.sqrt(h/s.length))}for(let h=0;h<128;h++)for(let u=0;u<128;u++){let l=be(u+h*128),f=i==="knit",m=i==="fabric",x=f?Math.sin(u*.72+Math.sin(h*.33)*1.8)*Math.cos(h*.33):m?Math.sin(u*1.57)*Math.sin(h*1.57):0,M=n?ns(128+(s[u+h*128]-r)*o,32,224):ns(128+(l-.5)*(f?16:24)+x*(f?35:m?32:0),0,255),d=(h*128+u)*4;e[d]=e[d+1]=e[d+2]=M,e[d+3]=255}let a=new vi(e,128,128,gn);a.needsUpdate=!0,a.wrapS=a.wrapT=vs,a.magFilter=bn,a.minFilter=Jn,a.generateMipmaps=!0;let c=i==="fabric"?1.7:i==="knit"?2.2:5;return a.repeat.set(c,c),a}function Lu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=new Se,n=new Se,s=new Se,r=new Se;e.name="avatar-body",n.name="head",s.name="torso",r.name="face",e.add(s,n),n.add(r);let o=[],a=[],c=[],h=[],u=new Map,l=new Map,f=new Map,m=ns(Number(t.headScale)||1,.65,1.5),x=ns(Number(t.bodyWidth)||1,.65,1.5),M=null,d=[],p={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},w=[],g=(T,P)=>(u.has(T)||u.set(T,P()),u.get(T)),v=()=>g("sphere",()=>new Bn(1,40,28));function E(T,P=t.material){let B=new Gt(T).getHexString(),O=B+":"+P;if(l.has(O))return l.get(O);let Y={rubber:.64,plush:.98,micro:.94,clay:.92,skin:.77,hair:.67,fiber:.93,knit:.99,fabric:.95,eye:.35,matteEye:.6,nose:.52},it=new un({color:T,roughness:Y[P]??.88,metalness:0});return it.name=P,["eye","matteEye","nose","hair"].includes(P)||(f.has(P)||f.set(P,Wg(P)),it.bumpMap=f.get(P),it.bumpScale={rubber:45e-5,skin:6e-4,micro:.001,plush:.0014,clay:.0018,knit:.0036,fabric:.003,fiber:.0012}[P]??.002),l.set(O,it),it}let A=E(t.colors.body),b=E(t.colors.secondary),R=E(Ws(t.colors.body,.24)),_=E(t.colors.eyes,["sparkle","glossy","star","oval","side"].includes(t.eyes)?"eye":"matteEye"),y=E(Ws(t.colors.eyes,.88),"nose");function D(T,P,B,O=[0,0,0],Y=[1,1,1],it=!1,nt=""){let C=new fe(P,B);return C.position.set(...O),C.scale.set(...Y),C.castShadow=!0,C.receiveShadow=!0,C.name=nt,T.add(C),it&&(C.userData.surfaceMaterial=B.name,C.userData.furLength=B.name==="micro"?.011:.024,o.push(C)),C}let U=(T,P,B,O=A,Y=!0,it="")=>D(T,v(),O,P,B,Y,it);function N(T,P){T.geometry=T.geometry.clone(),T.material=T.material.clone(),T.material.vertexColors=!0,T.material.color.set("#FFFFFF");let B=T.geometry.attributes.position,O=new Float32Array(B.count*3),Y=new Gt;for(let it=0;it<B.count;it++)P(new z(B.getX(it)*T.scale.x,B.getY(it)*T.scale.y,B.getZ(it)*T.scale.z),Y),O[it*3]=Y.r,O[it*3+1]=Y.g,O[it*3+2]=Y.b;return T.geometry.setAttribute("color",new Yt(O,3)),T}function k(T,P,B,O,Y=24,it=!1,nt=""){let C=new rn(P.map(Xs),it,"catmullrom",.35);return D(T,new ri(C,Y,B,7,it),O,[0,0,0],[1,1,1],!1,nt)}function J(T,P,B,O,Y,it,nt=A,C=!0){return D(T,g(P+":"+O,()=>Pu(P,B,O)),nt,Y,it,C,P)}function q(T,P,B,O,Y=A,it=Y,nt="paw"){let C=new Se;C.name=T<0?"arm-left":"arm-right",C.position.set(...P),e.add(C);let S=Za.has(t.shape),H=nt==="hand",Z=[T*(S?-.035:H?-.2:.06),-B,S?.195:H?.37:.065],K=H?[[0,.045,-.05],[T*.068,-B*.35,.15],[-T*.06,-B*.69,.32],[Z[0],-B+.045,Z[2]]]:S?[[0,.075,-.07],[T*.02,-B*.28,.02],[-T*.02,-B*.68,.135],[Z[0],-B+.025,Z[2]],[Z[0],-B-O*.85,Z[2]+.035]]:[[0,.055,-.012],[T*.065,-B*.32,.015],[T*.08,-B*.69,.11],[Z[0],-B+.025,Z[2]]],V=D(C,Ja(K,O,H?.87:S?1.055:1.03),Y,[0,0,0],[1,1,1],!0,"upper-arm");return S&&Y!==it&&N(V,(ut,ft)=>ft.copy(Y.color).lerp(it.color,we.smoothstep(-ut.y,B*.66,B*.84))),S||U(C,Z,[O*(H?1.03:1.05),O*(H?.82:.88),O*1.04],it,!0,nt),nt==="hand"&&U(C,[Z[0]-T*O*.65,Z[1]+.025,Z[2]+.04],[O*.35,O*.49,O*.39],it,!1,"thumb"),a.push(C),w.push(Xs(Z).add(Xs(P))),C}function j(T,P,B,O,Y,it=A){let nt=new Se;return nt.name=T<0?"leg-left":"leg-right",nt.position.set(P,B,O),e.add(nt),U(nt,[0,0,0],Y,it,!0,"hind-paw"),c.push(nt),nt}function tt(T,P,B,O,Y=A,it=null){let nt=new Se;if(nt.position.set(...B),nt.rotation.z=-T*(P==="long"?.07:.12),n.add(nt),P==="round"||P==="long")U(nt,[0,0,0],O,Y,!0,"outer-ear"),it&&U(nt,[0,0,O[2]*.75],[O[0]*.61,O[1]*.68,O[2]*.28],E(it,"skin"),!1,"inner-ear");else{let C=[[0,.88],[-.16,.81],[-.49,.19],[-.7,-.48],[-.51,-.84],[.51,-.84],[.7,-.48],[.49,.19],[.16,.81]];J(nt,"tri-ear",C,.36,[0,0,0],O,Y,!0),it&&J(nt,"tri-ear-inner",C,.16,[0,-O[1]*.05,O[2]*.3],[O[0]*.56,O[1]*.64,O[2]*.37],E(it,"skin"),!1)}return nt}function gt(T,P,B=A){M=new Se,M.name="tail",e.add(M);let O=D(M,Ja(T,P,.52),B,[0,0,0],[1,1,1],!0,"rounded-tail");return O.userData.surfaceMaterial=B.name,M}function Tt(T,P,B=b){let O=U(n,T,P,B,!0,"muzzle");return d.push(O),O}t.shape==="human"?rt():Za.has(t.shape)?Dt(t.shape):_t(t.shape),t.shape==="human"||Za.has(t.shape)?n.scale.setScalar(m):n.scale.set(1,m,1),X(),e.updateMatrixWorld(!0);let xt=new Ue().setFromObject(e),Ut=new Ue().setFromObject(n),Ft=T=>n.localToWorld(Xs(T)).toArray(),zt={headTop:[n.position.x,Ut.max.y,n.position.z],face:Ft([0,p.eyeY,I(0,p.eyeY)+.035]),neck:Ft([0,p.neckY??-.58,.05]),handL:w[0]?.toArray()??[-.9,.65,.55],handR:w[1]?.toArray()??[.9,.65,.55],shoulderL:a[0]?.position.toArray()??[-1,.9,0],shoulderR:a[1]?.position.toArray()??[1,.9,0]},dt=new oi(new z(n.position.x,xt.max.y+2,n.position.z),new z(0,-1,0)).intersectObject(n,!0)[0];zt.crown=dt?dt.point.toArray():zt.headTop.slice(),zt.mouth=Ft([0,p.mouthY,I(0,p.mouthY)+.042]);let pt=new oi(new z(0,zt.neck[1],xt.max.z+2),new z(0,0,-1)).intersectObject(e,!0)[0];return zt.neckFront=pt?[0,zt.neck[1],pt.point.z+.022]:Ft([0,p.neckY??-.58,I(0,p.neckY??-.58)+.025]),e.userData.anatomy=t.shape==="human"?"human":Za.has(t.shape)?"animal":"blob",e.userData.material=t.material,e.userData.restHeadPosition=n.position.clone(),{root:e,head:n,torso:s,face:r,eyeGroups:h,arms:a,legs:c,tail:M,anchors:zt,height:xt.max.y,width:xt.max.x-xt.min.x,surfaces:o};function _t(T){let B={dumpling:[1,.94,1],cloud:[1,.97,1.07],capsule:[1,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1,1,.96],roundedcube:[1.03,1,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.1,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.1],twin:[.96,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.1,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.2]}[T]||[1.05,1.03,1];B[0]*=x;let O;if(T==="dumpling")O=D(n,g("blob-dumpling-layered",()=>Ti("dumpling-v5",[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.3)),A,[0,0,0],B,!0,"blob-dumpling");else if(T==="sphere")O=U(n,[0,0,0],B,A,!0,"blob-sphere");else if(T==="frog")O=D(n,g("blob-frog-sculpted",()=>Ti("frog-v4",[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.4],[.43,.62,.02,.295,.345,.4]],.255)),A,[0,0,0],B,!0,"blob-frog");else if(T==="puff"){let C=[[0,0,0,.78,.79,.77],...Array.from({length:6},(S,H)=>{let Z=H/6*Ze+.2;return[Math.sin(Z)*.68,Math.cos(Z)*.68,0,.4,.4,.6]})];O=D(n,g("blob-puff-sculpted",()=>Ti("puff-v5",C,.19)),A,[0,0,0],B,!0,"blob-puff")}else T==="cloud"?O=D(n,g("blob-cloud-sculpted",()=>Ti("cloud-v3",[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),A,[0,0,0],B,!0,"blob-cloud"):T==="sprout"?O=D(n,g("blob-sprout",()=>Ti("sprout-v4",[[0,-.13,0,.94,.94,.86],[-.085,.9,-.055,.2,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),A,[0,0,0],B,!0,"blob-sprout"):T==="ghost"?O=D(n,g("blob-ghost-sculpted",()=>Ti("ghost-v4",[[0,.1,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),A,[0,0,0],B,!0,"blob-ghost"):O=D(n,g("blob-"+T,()=>Pu("blob-r4-"+T,Du(T),T==="arch"?.87:.84,.99)),A,[0,0,0],B,!0,"blob-"+T);d=[O],O.geometry.computeBoundingBox();let Y=O.geometry.boundingBox.min.y*B[1],it=["feet","both"].includes(t.limbs);if(n.position.y=-Y*m+(it?.22:.035),p={eyeX:(T==="triangle"?.265:T==="diamond"?.33:T==="heart"?.29:T==="pebble"?.27:T==="scallop"||T==="twin"?.25:T==="pill"?.26:t.family==="dots"?.2:.275)*x,eyeY:T==="dumpling"?.015:T==="cloud"?.1:T==="triangle"?.18:T==="sprout"?.13:.23,mouthY:T==="dumpling"?-.22:-.23,size:T==="triangle"?.91:T==="dumpling"?.95:1,neckY:Y*.72},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let C of[-1,1])q(C,[C*1.03*x,n.position.y-.1,.1],.4,.15,A,A,"mitten");if(it)for(let C of[-1,1])j(C,C*.46*x,.13,.12,[.21,.13,.28]);if(T==="frog"&&(p={eyeX:.43*x,eyeY:.66,mouthY:-.12,size:1.3,neckY:Y*.74}),T==="twin")for(let C of[-1,1]){let S=U(n,[C*.16,1.075,-.045],[.225,.285,.22],A,!0,"twin-top-lobe");S.rotation.z=-C*.3}}function rt(){let T=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",P=E(t.colors.skin,T),B=E(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),O=E(Ws(t.colors.clothing,.52),"fabric"),Y=E("#EEE8DF","rubber");s.position.set(0,.86,0),n.position.set(0,1.96,.015),U(s,[0,0,0],[.56*x,.66,.36],B,!0,"sweater-body"),U(s,[0,.51,0],[.21,.24,.21],P,!1,"neck");let it=t.faceShape||"round",nt=g("human-face-"+it,()=>{let V=new Bn(1,64,44),ut=V.attributes.position,ft=it==="oval"?.53:it==="soft-square"?.565:.558,St=it==="oval"?.665:.626;for(let vt=0;vt<ut.count;vt++){let $=ut.getX(vt),yt=ut.getY(vt),bt=ut.getZ(vt),Et=we.smoothstep(yt,-.88,.01),Mt=1+.022*Math.exp(-(((yt+.13)/.29)**2)),Rt=(it==="soft-square"?.91+.09*Et:.865+.135*Et)*Mt,F=it==="soft-square"?Math.sign($)*Math.abs($)**.93:$;ut.setXYZ(vt,F*ft*Rt,yt*St,bt*.555+(bt>0?.012*Math.exp(-(((yt+.18)/.3)**2)):0))}return V.computeVertexNormals(),V.computeBoundingBox(),V.computeBoundingSphere(),V}),C=D(n,nt,P,[0,0,0],[1,1,1],T==="fabric","human-face");N(C,(V,ut)=>{let ft=Math.exp(-(((Math.abs(V.x)-.325)/.077)**2)-((V.y+.126)/.053)**2)*we.smoothstep(V.z,.3,.42)*.095;ut.copy(P.color).lerp(new Gt("#D8797F"),ft)}),d=[C];for(let V of[-1,1])tt(V,"round",[V*.552,-.045,.025],[.1,.14,.09],P,xn(t.colors.skin,"#B96762",.15)),q(V,[V*.42*x,1.285,-.012],.755,.153,B,P,"hand"),j(V,V*.235*x,.16,.065,[.19,.16,.25],Y),U(s,[V*.24,-.44,0],[.19,.36,.205],O,!1,"trouser-leg");let S=E(Ws(t.colors.clothing,.9),B.name),H=new Xi(.211,.048,9,48),Z=D(s,H,S,[0,.53,.005],[1,1,1]);Z.rotation.x=Math.PI/2;let K=t.outfit||"sweater";if(K==="hoodie"){let V=U(s,[0,.44,-.18],[.35,.31,.21],B,!0,"hood");for(let ut of[-1,1])k(s,[[ut*.13,.49,.225],[ut*.16,.23,.354],[ut*.145,.05,.363]],.011,E("#DAD6CC","fabric"),14);k(s,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,S,18)}else if(K==="cardigan"||K==="shirt"){k(s,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,S,20);for(let V=0;V<4;V++)U(s,[.03,.27-V*.18,.36-Math.abs(.1-V*.13)*.1],[.025,.025,.013],E("#D5C9B3","rubber"),!1,"button");for(let V of[-1,1]){let ut=U(s,[V*.15,.44,.25],[.095,.15,.036],S,!1,"collar");ut.rotation.z=V*.55}}else for(let V of[-.43,-.47,-.51])k(s,[[-.34,V,.22],[0,V-.025,.301],[.34,V,.22]],.012,S,24);p={eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67},wt()}function wt(){let T=t.hair||"short-curly",P=T==="short-curly",B=t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material),O=B?"fiber":"hair",Y=[E(Ws(t.colors.hair,.915),O),E(t.colors.hair,O),E(xn(t.colors.hair,"#C4A188",.045),O)],it=t.faceShape==="oval",nt=it?.559:.588,C=it?.71:.675,S=.574,H=F=>new z(F.x/(nt*nt),(F.y-.018)/(C*C),F.z/(S*S)).normalize(),Z=(F,lt,st=0)=>{let mt=new z(Math.sin(F)*Math.sin(lt)*nt,Math.cos(F)*C+.018,Math.sin(F)*Math.cos(lt)*S);return mt.addScaledVector(H(mt),st)},K=F=>1.12+(1-Math.cos(F))*.56+(P?.032*Math.sin(F*7+.6):.01*Math.sin(F*2)),V=[],ut=[],ft=[],St=36,vt=96;for(let F=0;F<=St+1;F++)for(let lt=0;lt<=vt;lt++){let st=lt/vt*Ze,mt=Math.min(1,F/St)*K(st),ct=F>St?-.055:P?.018+.004*Math.sin(mt*8+Math.sin(st*3))**2:.016,ot=Z(mt,st,ct);if(V.push(ot.x,ot.y,ot.z),ut.push(lt/vt,F/St),F<=St&&lt<vt){let At=F*(vt+1)+lt,Lt=At+vt+1;ft.push(At,Lt,At+1,At+1,Lt,Lt+1)}}let $=new ve;$.setAttribute("position",new Yt(V,3)),$.setAttribute("uv",new Yt(ut,2)),$.setIndex(ft),$.computeVertexNormals(),D(n,$,Y[0],[0,0,0],[1,1,1],B,"hair-foundation");let yt=[[],[],[]],bt=[[],[],[]],Et=0,Mt=(F,lt=.002,st=null)=>{let mt=new rn(F,!1,"centripetal"),ct=new ri(mt,Math.max(12,F.length),lt,3,!1);if(P){let ot=ct.attributes.position,At=ct.attributes.normal;for(let Lt=0;Lt<ot.count;Lt++){let Zt=H(new z(ot.getX(Lt),ot.getY(Lt),ot.getZ(Lt)));At.setXYZ(Lt,Zt.x,Zt.y,Zt.z)}}yt[st??Et++%3].push(ct)};if(P&&B){let F=(st,mt,ct,ot=!1)=>{let At=Z(st,mt,.035),Lt=H(At),Zt=new z().crossVectors(Iu,Lt).normalize();Zt.lengthSq()<.01&&Zt.set(1,0,0);let Ot=new z().crossVectors(Lt,Zt).normalize(),Jt=(ot?.051:.062)+be(ct+7)*.016,te=[];for(let ue=0;ue<=36;ue++){let he=ue/36,ge=he*Ze*(1.2+be(ct+9)*.22)+ct*.7,Pe=Jt*(1-.38*he);te.push(At.clone().addScaledVector(Zt,Math.cos(ge)*Pe).addScaledVector(Ot,Math.sin(ge)*Pe).addScaledVector(Lt,.012+.028*Math.sin(he*Math.PI)))}let ee=new ri(new rn(te),42,.013+be(ct+3)*.004,6,!1);bt[ct%7===0?2:ct%5===0?0:1].push(ee)},lt=1;for(let[st,mt,ct]of[[.13,3,0],[.38,9,.2],[.65,13,0],[.91,17,.13],[1.17,20,0],[1.47,19,.12],[1.77,16,0],[2.02,13,.12]])for(let ot=0;ot<mt;ot++){let At=ot/mt*Ze+ct;st>K(At)+.01||F(st+(be(lt+20)-.5)*.07,At,lt++)}for(let st=0;st<10;st++)F(1.09+(be(st+82)-.5)*.12,(st-4.5)*.19,120+st,!0)}else if(P){let F=(st,mt,ct,ot=!1)=>{let At=(ot?.051:.053)+be(ct+44)*.011,Lt=ot?.35:Math.max(.055,st-.3),Zt=ot?1.115+be(ct+8)*.14:Math.min(K(mt)+.025,st+.39),Ot=[],Jt=24;for(let le=0;le<=Jt;le++){let re=le/Jt,Re=we.lerp(Lt,Zt,re)-Math.max(0,re-.82)**2*.55+Math.sin(re*Math.PI*2.25)*.033,Ce=(1-re)*-.3+Math.sin(re*Math.PI*2.75+be(ct+9)*.35)*.095+Math.max(0,re-.67)**2*.7;Ot.push(Z(Re,mt+Ce,.006+Math.sin(re*Math.PI)*(.023+be(ct+64)*.012)))}let te=new rn(Ot,!1,"centripetal"),ee=(le,re,Re=0)=>{let Ce=te.getPoint(le),Je=H(Ce),an=te.getTangent(le).normalize(),Tn=new z().crossVectors(Je,an).normalize(),An=Math.min(1,Math.sqrt(Math.max(0,le/.11)),Math.sqrt(Math.max(0,(1-le)/.14)))*(.97-.15*le),Rn=At*An*re,yn=(.02+be(ct+51)*.006)*An*Math.sqrt(Math.max(0,1-re*re));return Ce.addScaledVector(Tn,Rn).addScaledVector(Je,yn+Re)},ue=[],he=[],ge=[],Pe=12;for(let le=0;le<=Jt;le++)for(let re=0;re<=Pe;re++){let Re=le/Jt,Ce=re/Pe*Ze,Je=te.getPoint(Re),an=H(Je),Tn=te.getTangent(Re).normalize(),An=new z().crossVectors(an,Tn).normalize(),Rn=Math.min(1,Math.sqrt(Math.max(0,Re/.11)),Math.sqrt(Math.max(0,(1-Re)/.14)))*(.97-.15*Re);if(Je.addScaledVector(An,Math.cos(Ce)*At*Rn).addScaledVector(an,Math.sin(Ce)*(.02+be(ct+51)*.006)*Rn),ue.push(Je.x,Je.y,Je.z),he.push(re/Pe,Re),le<Jt&&re<Pe){let yn=le*(Pe+1)+re,L=yn+Pe+1;ge.push(yn,yn+1,L,yn+1,L+1,L)}}let De=new ve;De.setAttribute("position",new Yt(ue,3)),De.setAttribute("uv",new Yt(he,2)),De.setIndex(ge),De.computeVertexNormals(),bt[ct%9===0?0:1].push(De);for(let le=0;le<9;le++){let re=(le/8*2-1)*.94,Re=[];for(let Ce=0;Ce<=14;Ce++){let Je=.032+Ce/14*.938,an=Math.sin(Je*Math.PI*1.1+ct)*.035;Re.push(ee(Je,ns(re+an,-.97,.97),.0011))}Mt(Re,.0011+be(ct*17+le)*5e-4,le%6===0?2:le%5===0?0:1)}if(ct%5===0){let le=[];for(let re=0;re<=12;re++){let Re=.17+re/12*.68;le.push(ee(Re,.78,.004+Math.sin(re/12*Math.PI)*.009))}Mt(le,.0011,2)}},lt=1;for(let[st,mt,ct]of[[.29,5,.1],[.65,8,.19],[1.03,11,0],[1.43,10,.21],[1.81,9,.05]])for(let ot=0;ot<mt;ot++){let At=ot/mt*Ze+ct;st>K(At)-.07||F(st+(be(lt+18)-.5)*.05,At,lt++)}for(let st=0;st<9;st++){let mt=(st-4)*.21+(be(st+54)-.5)*.065,ct=1.015+(be(st+88)-.5)*.09;F(ct,mt,70+st,!0)}for(let st=0;st<72;st++){let mt=st*2.399963,ct=.1+be(st+8)*1.6,ot=Math.min(K(mt)-.015,ct+.25+be(st+16)*.2);if(ot<=ct)continue;let At=[];for(let Lt=0;Lt<=12;Lt++){let Zt=Lt/12;At.push(Z(we.lerp(ct,ot,Zt),mt+Math.sin(Zt*Math.PI)*.11,.025))}Mt(At,.0013,st%3)}}else for(let F=0;F<220;F++){let lt=F*2.399963,st=.06+be(F)*1,mt=Math.min(K(lt),st+.44+be(F+9)*.5),ct=[];for(let ot=0;ot<13;ot++){let At=ot/12,Lt=we.lerp(st,mt,At),Zt=(1-At)*.21*(Math.cos(lt)+.4);ct.push(Z(Lt,lt+Zt,.015+Math.sin(At*Math.PI)*.014))}Mt(ct,.0027+be(F+17)*.0015)}if(["bob","long","wavy"].includes(T)){let F=T==="bob"?.4:.9,lt=[];for(let st of[-1,1])lt.push({center:[st*.46,-.31-F*.22,-.09],size:[.17,F*.6,.24],name:"hair-side-foundation"});lt.push({center:[0,-.31-F*.27,-.33],size:[.45,F*.57,.15],name:"hair-back-foundation"});for(let[st,mt]of lt.entries()){U(n,mt.center,mt.size,Y[0],!1,mt.name);for(let ct=0;ct<44;ct++){let ot=ct/44*Ze,At=[];for(let Lt=0;Lt<=20;Lt++){let Zt=Lt/20,Ot=.12+Zt*2.82,Jt=ot+(T==="wavy"?Math.sin(Zt*Ze*1.1)*.2:Math.sin(Zt*Math.PI)*.045),te=new z(Math.sin(Ot)*Math.sin(Jt)/mt.size[0],Math.cos(Ot)/mt.size[1],Math.sin(Ot)*Math.cos(Jt)/mt.size[2]).normalize();At.push(new z(mt.center[0]+Math.sin(Ot)*Math.sin(Jt)*mt.size[0],mt.center[1]+Math.cos(Ot)*mt.size[1],mt.center[2]+Math.sin(Ot)*Math.cos(Jt)*mt.size[2]).addScaledVector(te,.0013))}Mt(At,.00135,(ct+st)%3)}}}if(T==="ponytail"||T==="bun"){let F=T==="bun",lt=new z(F?0:.17,F?.56:.04,F?-.28:-.57);F?U(n,lt.toArray(),[.235,.23,.23],Y[0],!1,"bun-foundation"):k(n,[[0,.4,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,Y[0],28);for(let st=0;st<88;st++){let mt=st/88*Ze,ct=[];for(let ot=0;ot<18;ot++){let At=ot/17;if(F){let Lt=At*Ze*1.08;ct.push(lt.clone().add(new z(Math.cos(Lt)*Math.sin(mt)*.242,Math.sin(Lt)*.233,Math.cos(Lt)*Math.cos(mt)*.238)))}else ct.push(new z(.025+At*.32+Math.sin(mt)*(.1*(1-At)+.025),.39-At*.99,-.4-Math.sin(At*Math.PI)*.25+Math.cos(mt)*(.1*(1-At)+.025)))}Mt(ct,.004)}}if(T==="braids")for(let F of[-1,1]){D(n,Ja([[F*.56,.015,-.045],[F*.535,-.09,-.005],[F*.49,-.21,.055]],.09,.9),Y[0],[0,0,0],[1,1,1],!1,"braid-root");for(let lt=0;lt<3;lt++){let st=[];for(let mt=0;mt<40;mt++){let ct=mt/39,ot=ct*Ze*3.1+lt/3*Ze;st.push([F*(.49+.015*Math.sin(ct*Math.PI))+Math.cos(ot)*.035,-.14-ct*.81,.055+Math.sin(ot)*.035])}D(n,Ja(st,.038,.86),Y[lt],[0,0,0],[1,1,1],!1,"braid-plait")}U(n,[F*.49,-.902,.055],[.071,.027,.062],E(xn(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}bt.forEach((F,lt)=>{F.length&&D(n,bc(F),Y[lt],[0,0,0],[1,1,1],B,"hair-curl-volume")}),yt.forEach((F,lt)=>{if(F.length){let st=new un({color:xn(Y[lt].color,t.colors.hair,.7),roughness:B?.96:.76});st.name=B?"fiber-detail":"hair-detail";let mt=D(n,bc(F),st,[0,0,0],[1,1,1],!1,"hair-strands");mt.castShadow=!1,mt.receiveShadow=!1}})}function Dt(T){let P={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},[B,O,Y,it,nt,C,S]=P[T],H={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[T],Z=(1-H)*1.3+.065;s.position.set(0,nt*H+.12,-.11),n.position.set(0,S-Z,.12);let K=T==="penguin"?R:A,V=["penguin","owl"].includes(T),ut=V?U(s,[0,0,0],[it*x,nt*H,C],K,!0,"animal-torso"):D(s,g("animal-seated-"+T,()=>Ti("animal-seated-r4-"+T,[[0,0,0,it,nt*H,C],[-it*.6,-nt*H*.4,.025,it*.49,nt*H*.59,C*.71],[it*.6,-nt*H*.4,.025,it*.49,nt*H*.59,C*.71]],.13)),K,[0,0,0],[x,1,1],!0,"animal-torso"),ft;T==="shiba"?ft=D(n,g("shiba-soft-face",()=>Ti("shiba-face-r4",[[0,0,0,B,O,Y],[0,-.2,.365,.435,.257,.265]],.2)),A,[0,0,0],[1,1,1],!0,"animal-head"):T==="capybara"?ft=J(n,"capybara-skull",Du("roundedcube"),.85,[0,0,0],[B,O,Y/.85],A,!0):ft=U(n,[0,0,0],[B,O,Y],K,!0,"animal-head"),d=[ft],["axolotl","capybara","hedgehog","panda"].includes(T)||N(ut,($,yt)=>{let bt=($.x/(it*.68*x))**2+(($.y+.06)/(nt*H*.86))**2,Et=(1-we.smoothstep(bt,.9,1.035))*we.smoothstep($.z,C*.26,C*.67);yt.copy(K.color).lerp(b.color,Et)}),p={eyeX:B*.44,eyeY:.07,mouthY:-O*.43,size:.72,neckY:-O*.85};let St=Y*.78,vt=xn(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(T)){let $=T==="fox"?[.19,.155,.26]:T==="hedgehog"?[.215,.16,.29]:T==="shiba"?[.22,.18,.19]:T==="bear"?[.21,.18,.19]:[.16,.13,.155];if(T==="shiba")N(ft,(bt,Et)=>{let Mt=(bt.x/.565)**2+((bt.y+.225)/.358)**2,Rt=(1-we.smoothstep(Mt,.94,1.055))*we.smoothstep(bt.z,.08,.3);for(let F of[-1,1]){let lt=((bt.x-F*.265)/.061)**2+((bt.y-.238)/.045)**2;Rt=Math.max(Rt,(1-we.smoothstep(lt,.68,1.04))*we.smoothstep(bt.z,.25,.37))}Et.copy(A.color).lerp(b.color,Rt)});else for(let bt of[-1,1])Tt([bt*$[0]*.54,-O*.31,St],$,T==="panda"?A:b);let yt=T==="shiba"?.635:St+$[2]*.89;if(U(n,[0,-O*.27,yt],[T==="rabbit"?.043:T==="shiba"?.065:.07,.042,.035],T==="rabbit"?E(vt,"nose"):y,!1,"nose"),T==="cat")for(let bt of[-1,1])for(let Et=0;Et<3;Et++)k(n,[[bt*.2,-.2+Et*.025,St+.14],[bt*.42,-.21+Et*.05,St+.13],[bt*.62,-.23+Et*.083,St+.02]],.0045,E(xn(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(T))for(let $ of[-1,1])tt($,"triangle",[$*B*.69,O*.75,-.035],[T==="fox"||T==="shiba"?.3:.25,T==="fox"?.39:T==="shiba"?.3:.28,.43],A,vt);else if(T==="rabbit")for(let $ of[-1,1])tt($,"long",[$*.235,.61,-.055],[.14,.51,.11],A,vt);else if(["panda","bear","otter","capybara"].includes(T))for(let $ of[-1,1])tt($,"round",[$*B*.74,O*.72,-.035],T==="otter"?[.105,.12,.09]:T==="capybara"?[.13,.135,.095]:[.205,.205,.13],T==="panda"?R:A,vt);if(T==="panda")for(let $ of[-1,1]){let yt=U(n,[$*.285,.07,Y*.86],[.16,.2,.06],R,!1,"eye-patch");yt.rotation.z=-$*.24,d.push(yt)}if(T==="capybara"){Tt([0,-.16,.38],[.43,.28,.4],A),p={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let $ of[-1,1])U(n,[$*.125,-.145,.768],[.038,.027,.013],y,!1,"nostril")}if(T==="axolotl"){let $=E(xn(t.colors.body,"#DD7695",.58));for(let yt of[-1,1])for(let bt=0;bt<3;bt++){let Et=[yt*.62,.18-bt*.15,-.06],Mt=[yt*(1+(bt===1?.09:0)),.45-bt*.35,-.08];k(n,[Et,[yt*.85,(Et[1]+Mt[1])*.5,.02],Mt],.041,$,18);for(let Rt=0;Rt<4;Rt++){let F=.37+Rt*.17,lt=we.lerp(Et[0],Mt[0],F),st=we.lerp(Et[1],Mt[1],F);for(let mt of[-1,1])k(n,[[lt,st,-.055],[lt+yt*.055,st+mt*.085,.01],[lt+yt*.06,st+mt*.105,-.018]],.018,$,8)}}p={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}for(let $ of[-1,1]){if(V){let bt=T==="penguin"?1.07:.99,Et=q($,[$*it*.82*x,bt,-.04],.46,.135,K,K,"wing-tip");Et.rotation.z=$*.13,Et.scale.z=.64,w[$<0?0:1]=Xs([$*(it*.82*x+.025),bt-.445,.055])}else{let bt=Math.min(.8,S-Z-.54),Et=["rabbit","axolotl","hedgehog"].includes(T),Mt=Et?.122:T==="bear"||T==="panda"?.164:.149;q($,[$*it*.57*x,bt,.155],Math.max(.23,bt-(Et?.23:.245)),Mt,T==="panda"?R:A,T==="shiba"?b:A)}let yt=j($,$*it*(V?.6:.8)*x,V?.1:.112,V?.2:.015,[V?.18:.165,V?.1:.112,V?.225:.2],V?E("#D8A34D","rubber"):T==="panda"?R:A);if(!V)for(let bt=0;bt<2;bt++)k(yt,[[-.05+bt*.095,.026,.165],[-.05+bt*.095,.067,.146]],.0035,E(xn(t.colors.body,t.colors.eyes,.1)),6)}if(T==="shiba")gt([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),U(M,[.65,.65,-.18],[.125,.115,.12],b,!0,"tail-tip");else if(T==="cat")gt([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(T==="fox"){gt([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let $=U(M,[1.14,.9,-.15],[.2,.32,.21],b,!0,"white-tail-tip");$.rotation.z=-.36}else if(T==="rabbit")M=new Se,e.add(M),U(M,[.46,.41,-.41],[.24,.24,.23],b,!0,"cotton-tail");else if(T==="hedgehog")gt([[.25,.24,-.35],[.52,.18,-.38],[.7,.17,-.28]],.08);else if(["otter","axolotl"].includes(T)){if(gt([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],T==="axolotl"?.13:.14),T==="axolotl"){let $=U(M,[.78,.31,-.6],[.41,.23,.055],E(xn(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");$.rotation.y=-.7}}else M=new Se,e.add(M),U(M,[.45,.4,-.43],[.135,.14,.13],K,!0,"short-tail");if(V){if(T==="owl")for(let yt of[-1,1]){let bt=U(n,[yt*.235,.055,.38],[.255,.3,.11],b,!0,"facial-disc");d.push(bt),tt(yt,"triangle",[yt*.39,.43,-.055],[.2,.23,.29],A,null)}let $=J(n,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[T==="penguin"?.155:.09,.115,.12],E("#D8A34D","rubber"),!1);d.push($),p.mouthY=-.26,p.size=T==="owl"?1.05:.85}if(T==="hedgehog"){let $=[];for(let yt=0;yt<110;yt++){let bt=yt*2.399963,Et=.15+be(yt)*.93,Mt=Math.sqrt(Math.max(0,1-Et*Et)),Rt=new z(Math.sin(bt)*Mt,Et,Math.cos(bt)*Mt);if(Rt.z>.32)continue;let F=new z(Rt.x*.69*x,Rt.y*.61+.71,Rt.z*.58-.13),lt=new br(.041,.22,6,1);lt.translate(0,.075,0),lt.applyQuaternion(new Qe().setFromUnitVectors(Iu,Rt)),lt.translate(F.x,F.y,F.z),$.push(lt)}D(e,bc($),E(Ws(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function I(T,P){let B=new oi(new z(T,P,4),new z(0,0,-1)),O=-1/0;for(let Y of d){Y.updateMatrix();let it=new fe(Y.geometry,Y.material);it.matrixWorld.copy(Y.matrix);let nt=B.intersectObject(it,!1);nt.length&&(O=Math.max(O,nt[0].point.z))}return Number.isFinite(O)?O:.4}function W(T,P,B=_,O="face-line"){return k(r,T.map(([Y,it])=>[Y,it,I(Y,it)+.022]),P,B,24,!1,O)}function X(){let T=t.expression,P=ns(Number(t.eyeScale)||1,.45,1.8)*p.size,B=ns(Number(t.eyeSpacing)||1,.6,1.6),O=p.eyeX*B,Y={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]},[it,nt]=Y[t.eyes]||Y.softOval,C=T==="closed",S={deadpan:.35,tearful:1.08,expectant:1.16,panicked:1.43,sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[T]??1;for(let K of[-1,1]){let V=K*O,ut=p.eyeY+(["curious","skeptical"].includes(T)&&K>0?.025:0),ft=I(V,ut),St=C||T==="wink"&&K>0||["delighted","laughing"].includes(T),vt=S*(T==="skeptical"&&K<0?.52:T==="panicked"&&K>0?.84:1),$=.012,yt=(I(V+$,ut)-I(V-$,ut))/($*2),bt=(I(V,ut+$)-I(V,ut-$))/($*2),Et=new z(-yt,-bt,1).normalize(),Mt=.009;for(let F of[-1,0,1])for(let lt of[-1,0,1]){let st=F*it*P,mt=lt*nt*P*vt;Mt=Math.max(Mt,I(V+st,ut+mt)-ft-yt*st-bt*mt+.006)}let Rt=new Se;if(Rt.name=K<0?"eye-left":"eye-right",Rt.position.set(V,ut,ft+Mt),r.add(Rt),h.push(Rt),Rt.userData.restScaleY=1,Rt.quaternion.setFromUnitVectors(new z(0,0,1),Et),Rt.rotateZ(["sad","shy","worried","tearful"].includes(T)?K*.15:T==="angry"?-K*.24:T==="happy"?K*.06:T==="focused"?-K*.09:T==="proud"?K*.09:t.eyes==="softOval"&&t.family==="dots"?.13:0),St)k(Rt,[[-it*P,0,0],[0,(T==="laughing"?.07:T==="delighted"?.043:-.021)*P,.01],[it*P,0,0]],.013*P,_,18,!1,["delighted","laughing"].includes(T)?"delighted-lid":"closed-lid");else{let F=E("#FCFCF5","eye"),lt=E("#FFFFFF","eye");if(t.shape==="human"&&["sparkle","glossy"].includes(t.eyes)&&U(Rt,[0,0,-.008],[it*P*1.15,nt*P*vt*1.09,.013],E("#E8D9BE","rubber"),!1,"doll-eye-rim"),t.shape==="frog"&&!["oval","side"].includes(t.eyes)&&U(Rt,[0,0,-.073],[it*P*2.35,nt*P*1.47,.098],E("#F8FFE8","rubber"),!1,"frog-eye-white"),(t.eyes==="sleepy"||T==="deadpan")&&!["focused","surprised","excited"].includes(T)&&!["work","read","camera"].includes(t.action)?(U(Rt,[0,-nt*.29*P,.003],[it*.44*P,nt*.57*P,.023],_,!1,"eye"),k(Rt,[[-it*P,nt*.12*P,.006],[0,nt*.16*P,.011],[it*P,nt*.12*P,.006]],.023*P,_,16,!1,"sleepy-upper-lid")):t.eyes==="capsule"?D(Rt,g("capsule-eye",()=>new vr(1,2.8,6,20)),_,[0,0,0],[it*P,nt*P*vt/2.4,.021],!1,"eye"):U(Rt,[0,0,0],[it*P,nt*P*vt,.022],["oval","side"].includes(t.eyes)?F:_,!1,"eye"),["oval","side"].includes(t.eyes)){let st=["work","read","camera"].includes(t.action),mt=t.eyes==="side"&&!st?-.03*P:T==="thinking"?.019*P:0;U(Rt,[mt,st?-.02*P:["proud","expectant"].includes(T)?.025*P:0,.021],[it*(t.eyes==="side"?.74:.58)*P,nt*(t.eyes==="side"?.74:.7)*P*vt,.017],_,!1,"pupil")}if(t.eyes==="lash"&&k(Rt,[[K*it*.5*P,nt*.17*P,.009],[K*it*1.12*P,nt*.1*P,.004],[K*it*1.72*P,nt*.31*P,-.005]],.012*P,_,14,!1,"outer-lash"),t.eyes==="star"){let st=g("star-reflection",()=>{let ot=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];return new Wi(new Dn(ot.map(([At,Lt])=>new It(At,Lt))))}),mt=D(Rt,st,lt,[-it*.11*P,nt*.29*P*vt,.027],[P,P,P],!1,"star-catchlight");mt.castShadow=!1,mt.receiveShadow=!1;let ct=D(Rt,g("star-reflection-dot",()=>new Mr(1,12)),lt,[it*.36*P,-nt*.37*P*vt,.026],[.01*P,.01*P,1],!1,"catchlight-dot");ct.castShadow=!1,ct.receiveShadow=!1}else if(["sparkle","glossy","oval"].includes(t.eyes)){let st=U(Rt,[-it*.29*P,nt*.35*P*vt,.027],[.018*P,.02*P,.006],lt,!1,"catchlight");st.castShadow=!1,st.receiveShadow=!1,t.eyes==="sparkle"&&st.scale.multiplyScalar(.76),t.eyes==="glossy"&&U(Rt,[it*.35*P,-nt*.34*P*vt,.025],[.008*P,.008*P,.004],lt,!1,"catchlight-small")}if(t.shape==="frog"&&Rt.children.some(st=>st.name==="frog-eye-white"))for(let st of Rt.children)st.name!=="frog-eye-white"&&(st.position.z+=.02)}if(t.brows!=="none"){let F=ut+nt*P*vt+.073,lt=(t.brows==="curious"||T==="skeptical")&&K>0?.047:0,st=T==="angry"?-K*.048:T==="worried"||t.brows==="angled"?K*.045:t.brows==="straight"?0:t.brows==="curious"?K*.014:.006;W([[V-.09*P,F+lt-st],[V,F+lt+(t.brows==="straight"?0:t.shape==="human"?.012:.025)],[V+.09*P,F+lt+st]],.01*P,E(t.shape==="human"?xn(t.colors.hair,t.colors.eyes,.24):xn(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let H=p.mouthY,Z=.103*p.size;if(t.mouth==="smile"&&T!=="laughing"){let K=["sad","worried","angry"].includes(T),V=["skeptical","confident","proud"].includes(T),ut=Array.from({length:13},(ft,St)=>{let vt=St/12,$=(vt*2-1)*Z,yt=(K?-.031:.039)*(2*vt-1)**2;return[$,H+(K?.023:-.027)+yt+(V?vt*.024:0)]});W(ut,t.shape==="human"?.0085:.01,t.shape==="human"?E(xn(t.colors.skin,"#684538",.7),"matteEye"):_,K?"frown":"smile")}else if(t.mouth==="pout")W([[-Z*.68,H-.014],[0,H+.02],[Z*.68,H-.014]],.013,_,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"||t.mouth!=="none"&&T==="laughing"){let K=t.mouth==="laugh"||T==="laughing";U(r,[0,H,I(0,H)+.019],[Z*(K?1.16:.42),Z*(K?.93:.51),.024],_,!1,"mouth"),K&&U(r,[0,H-.043,I(0,H)+.041],[Z*.62,.032,.012],E("#D98C91","skin"),!1,"tongue")}if(t.expressionAccents&&["tearful","panicked"].includes(T)){let K=E("#8BD6F4","eye"),V=T==="tearful"?[-1,1]:[1];for(let ut of V){let ft=ut*(O+.085),St=p.eyeY-(T==="tearful"?.19:-.14),vt=U(r,[ft,St,I(ft,St)+.025],[.025,.056,.018],K,!1,"expression-drop");vt.rotation.z=-ut*.15}}if(t.shape==="human"&&U(r,[0,-.095,I(0,-.095)+.006],[.033,.044,.025],E(xn(t.colors.skin,"#C29076",.05),"skin"),!1,"nose"),t.shape!=="human"&&["shy","happy","excited","laughing"].includes(T))for(let K of[-1,1]){let V=K*O*1.32,ut=p.eyeY-.17,ft=E(xn(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");U(r,[V,ut,I(V,ut)+.008],[.085*p.size,.033*p.size,.009],ft,!1,"cheek")}}}var Me=i=>new z(...i),Ys=(i,t,e)=>Math.max(t,Math.min(e,i)),Ee=(i,t={})=>new un({color:i,roughness:.78,...t});function tn(i,t,e,n=[0,0,0]){let s=new fe(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Ai(i,t,e=[0,0,0]){let n=new Se;return n.name=t,n.position.fromArray(e),i.add(n),n}function Ne(i,t,e,n=[0,0,0]){let s=tn(i,new Bn(1,24,16),e,n);return s.scale.fromArray(t),s}function Ou(i,t,e){let n=new Dn,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function _n(i,t,e,n=[0,0,0],s=.025){let[r,o,a]=t,c=Math.min(s*.35,a*.25,o*.15),h=new Gi(Ou(r-c*2,o-c*2,s),{depth:Math.max(.001,a-c*2),bevelEnabled:!0,bevelSize:c,bevelThickness:c,bevelSegments:3,curveSegments:8,steps:1});return h.translate(0,0,-(a-c*2)/2),tn(i,h,e,n)}function En(i,t,e,n,s=!1){let r=new rn(t.map(Me),s,"centripetal");return tn(i,new ri(r,Math.max(20,t.length*4),e,8,s),n)}function Uu(i,t,e,n,s){let r=Me(t),o=Me(e),a=o.clone().sub(r),c=tn(i,new Pn(n,n,a.length(),16),s);return c.position.copy(r.add(o).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new z(0,1,0),a.normalize()),c}function $a(i,t,e,n,s,r){return En(i,Array.from({length:48},(o,a)=>{let c=a/48*Math.PI*2;return[Math.cos(c)*t,n,Math.sin(c)*e]}),s,r,!0)}function Sc(i,t,e,n=[0,0,0],s=.025){let r=new Dn;for(let a=0;a<10;a++){let c=Math.PI/2+a*Math.PI/5,h=t*(a%2?.46:1);a?r.lineTo(Math.cos(c)*h,Math.sin(c)*h):r.moveTo(Math.cos(c)*h,Math.sin(c)*h)}r.closePath();let o=new Gi(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return o.translate(0,0,-s/2),tn(i,o,e,n)}function Fu(i,t,e,n,s=[0,0,0]){let r=Ai(i,"flower",s);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Ne(r,[t*.47,t*.69,t*.23],e,[Math.sin(a)*t*.64,Math.cos(a)*t*.64,0]);c.rotation.z=-a}return Ne(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function Xg(i){let t=i.root,e=[],n=[];t.updateMatrixWorld(!0);let s=(l,f)=>l?.traverse(m=>{if(!(!m.isMesh||!m.geometry||!m.visible)){for(let x=m;x&&x!==l;x=x.parent)if(x===i.face)return;f.push(m)}});s(i.head||t,e),s(i.torso,n);let r=e.filter(l=>!/ear|gill|muzzle|beak|facial-disc|twin-top-lobe/.test(l.name)&&l.geometry.type!=="TubeGeometry"),o=t.matrixWorld.clone().invert(),a=new jt,c=new oi,h=(i.height||3)+(i.width||3)+4;function u(l,f,m=e){c.set(Me(l).applyMatrix4(t.matrixWorld),Me(f).transformDirection(t.matrixWorld));let x=c.intersectObjects(m,!1)[0];if(!x)return null;let M=x.point.clone().applyMatrix4(o);a.getNormalMatrix(o.clone().multiply(x.object.matrixWorld));let d=x.face.normal.clone().applyMatrix3(a).normalize();return{point:M,normal:d}}return{cast:u,reach:h,top(l,f,m){return u([l,h,f],[0,-1,0])?.point.y??m},front(l,f,m,x=!1){return u([l,f,h],[0,0,-1],x?[...e,...n]:e)?.point.z??m},side(l,f,m){return u([l*h,f,m],[-l,0,0])},ornament(l,f){return u(l,f,e.filter(m=>m.name!=="hair-strands"))},around(l,f,m=!1,x=!1){let M=Me(f).normalize(),d=Me(l).addScaledVector(M,h);return u(d.toArray(),M.negate().toArray(),m?[...e,...n]:x?r:e)}}}function Nu(i){return new rn(i.map(([t,e])=>new z(t,e,0)),!0,"centripetal").getPoints(64).slice(0,-1)}function qg(i){let t=[...i].sort((o,a)=>o[0]-a[0]),e=[];for(let o of t){if(e.length&&Math.abs(o[0]-e.at(-1)[0])<1e-5){if(o[1]<=e.at(-1)[1])continue;e.pop()}for(;e.length>=2;){let a=e.at(-2),c=e.at(-1);if((c[0]-a[0])*(o[1]-c[1])-(c[1]-a[1])*(o[0]-c[0])<-1e-5)break;e.pop()}e.push(o)}let n=e.length>=3?e.reverse():i,s=Math.abs(n[0][0]-n.at(-1)[0]),r=[];for(let o=0;o<n.length;o++){let a=n[o],c=n[o+1];if(r.push(a),!c)continue;let h=Math.abs(c[0]-a[0]);if(h>s*.16&&Math.abs(c[1]-a[1])<s*.025){let u=Math.min(s*.038,h*.1);for(let l=1;l<8;l++){let f=l/8;r.push([we.lerp(a[0],c[0],f),we.lerp(a[1],c[1],f)+Math.sin(f*Math.PI)*u,we.lerp(a[2],c[2],f)])}}}return r}function Yg(i,{rx:t,rz:e,s:n,contact:s,center:r},o){let h=[];for(let E=0;E<16;E++){let A=E/16*Math.PI*2;h.push(s.top(r[0]+Math.cos(A)*t*.7,r[2]+Math.sin(A)*e*.7,r[1]-.16*n)-.018*n)}let u=h.reduce((E,A)=>E+A,0)/16,l=E=>{let A=(E/(Math.PI*2)*16+16)%16,b=Math.floor(A),R=A-b;return we.lerp(h[b],h[(b+1)%16],R)},f=new rn([[0,-.08,.8],[.48,-.035,.95],[.7,0,1],[.88,.075,.75],[1,.18,.38],[.92,.33,.12],[.67,.46,0],[.3,.52,0],[0,.535,0]].map(Me),!1,"catmullrom",.3),m=[],x=[],M=[],d=32;for(let E=0;E<=d;E++){let A=f.getPoint(E/d),b=Math.max(0,A.x),R=A.y,_=Ys(A.z,0,1);for(let y=0;y<=48;y++){let D=y/48*Math.PI*2,U=Math.cos(D)*t*b-.06*n*(1-b),N=Math.sin(D)*e*b,k=l(D)-u,J=.17*Math.cos(D)*t;if(m.push(r[0]+U,u+R*n+.17*U+(k-J*.7)*_,r[2]+N),x.push(y/48,E/d),E<d&&y<48){let q=E*49+y,j=q+48+1;M.push(q,j,q+1,j,j+1,q+1)}}}let p=new ve;p.setAttribute("position",new Yt(m,3)),p.setAttribute("uv",new Yt(x,2)),p.setIndex(M),p.computeVertexNormals();let w=tn(i,p,o);w.name="soft-beret-crown";let g=r[0]-.06*n,v=u+.535*n;En(i,[[g,v-.018*n,r[2]],[g+.014*n,v+.041*n,r[2]],[g+.036*n,v+.06*n,r[2]+.008*n]],.025*n,o),i.userData.contactFit={kind:"crown",samples:16,baseY:u,min:Math.min(...h),max:Math.max(...h)}}function Bu(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],o=t.shape==="human",a=e.userData.anatomy==="animal"||r.includes(t.shape),c=a&&["penguin","owl"].includes(t.shape),h=i.height||(o?2.8:a?2.5:2.1),u=i.width||2.3,l=Ys(Math.min(u/(o?1.5:a?1.8:2.3),h/(o?2.8:a?2.5:2.1)),.7,1.3),f=n.crown||n.headTop||[0,h,0],m=n.face||[0,h*.58,u*.3],x=n.neck||[0,h*(o?.49:.34),m[2]*.82],M=t.accessories||{},d=t.action||"idle",p=[],w=[],g=Ee(s.accessory||"#33465a"),v=Ee(s.secondary||"#f6ead9"),E=Ee("#23272d",{roughness:.58}),A=Ee("#e7bc72",{metalness:.24,roughness:.4}),R=(o?e.getObjectByName("hand")?.material:c?e.getObjectByName("wing-tip")?.material:null)||Ee(o?s.skin||"#e9bea2":s.body||"#319ceb"),_=o||c?e.getObjectByName("upper-arm")?.material||Ee(s.clothing||s.body||"#338c81"):R,y=Ee(new Gt(s.accessory||"#33465a").lerp(new Gt("#ffffff"),.22)),D=(G,pt)=>{let _t=Ai(e,G,pt);return p.push(_t),_t},U=(G,pt)=>Me(pt).applyMatrix4(G.matrix).toArray(),N=null,k=d==="sleep"?"none":M.prop||"none",J={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book"};J[d]&&(k=J[d]);let q=m[2]+.16*l,j=Xg(i),tt=[-1,1].map(G=>j.side(G,m[1],f[2])),gt=Math.max(.35*l,...tt.map(G=>G?Math.abs(G.point.x-f[0]):u*.36)),Tt=Ys(gt*.77,.43*l,.85*l),xt=d==="listen"?"headphones":M.head||"none";if(xt!=="none"){let G=D("head-"+xt),pt=Ee(s.headAccessory||s.accessory||"#292A2D"),_t=pt.clone();if(_t.roughness=1,xt==="beret")Yg(G,{rx:Tt,rz:Tt*.78,s:l,contact:j,center:[f[0]-.045*l,f[1],f[2]+.02*l]},_t);else if(xt==="headphones"){let rt=Math.min(f[1]-.26*l,m[1]-.23*l),wt=f[2]+.015*l,Dt=[f[0],rt,wt],I=[];for(let X=0;X<=24;X++){let T=.055+X/24*(Math.PI-.11),P=[Math.cos(T),Math.sin(T),0],B=j.around(Dt,P,!1,!0),O=B?B.point.addScaledVector(Me(P),.055*l):Me(Dt).add(Me([Math.cos(T)*gt,Math.sin(T)*(f[1]-rt),0]));I.push(O.toArray())}pt.roughness=.52,En(G,qg(I),.048*l,pt);let W=Ee(new Gt(s.headAccessory||s.accessory||"#292A2D").lerp(new Gt("#a2a7ad"),.16),{roughness:.86});for(let X of[-1,1]){let T=j.side(X,rt,wt),P=T?.normal||Me([X,0,0]);P.x*X<.2&&P.set(X,.15,0).normalize();let B=T?.point||Me([f[0]+X*gt,rt,wt]),O=Ai(G,"earcup-"+X,B.clone().addScaledVector(P,.04*l).toArray());O.quaternion.setFromUnitVectors(Me([1,0,0]),P),Ne(O,[.14*l,.27*l,.198*l],E,[-.006*l,0,0]),Ne(O,[.135*l,.286*l,.22*l],pt,[.09*l,0,0]);let Y=Array.from({length:40},(it,nt)=>{let C=nt/40*Math.PI*2;return[.162*l,Math.cos(C)*.226*l,Math.sin(C)*.179*l]});En(O,Y,.005*l,W,!0),O.userData.contactFit={kind:"side",point:B.toArray(),normal:P.toArray()}}}else{let rt=Tt*(xt==="wizard"?.75:.82),wt=rt*.83,Dt=Array.from({length:12},(W,X)=>{let T=X/12*Math.PI*2;return j.top(f[0]+Math.cos(T)*rt*.77,f[2]+Math.sin(T)*wt*.77,f[1]-.1*l)}),I=Dt.reduce((W,X)=>W+X,0)/Dt.length-.035*l;if(G.position.set(f[0],I,f[2]),xt==="tuft"){G.position.set(f[0],f[1]-.025*l,f[2]);for(let[W,X]of[-.16,0,.16].entries()){let T=Ne(G,[.095*l,(W===1?.22:.17)*l,.105*l],_t,[X*l,.08*l,0]);T.rotation.z=(1-W)*.4,T.name="tuft-lobe",T.userData.surfaceMaterial="plush",i.surfaces?.push(T)}}else if(xt==="pom"){G.position.set(f[0],f[1]+.23*l,f[2]);let W=Ne(G,[.255*l,.26*l,.255*l],_t);W.name="hat-pom",W.userData.surfaceMaterial="micro",i.surfaces?.push(W)}else if(["beanie","cap"].includes(xt)){let W=xt==="cap";if(tn(G,new Bn(rt,36,24,0,Math.PI*2,0,Math.PI/2),_t).scale.set(1,W?.87:1.07,.83),$a(G,rt*.97,wt*.97,.01*l,(W?.024:.04)*l,_t),W){let T=Ne(G,[rt*.81,.034*l,rt*.56],g,[0,-.008*l,wt*.81]);T.rotation.x=-.1,Ne(G,[.035*l,.017*l,.035*l],y,[0,rt*.875,0])}else for(let T=0;T<16;T++){let P=T*Math.PI*2/16,B=[];for(let O=0;O<=12;O++){let Y=.1+O/12*1.43;B.push([Math.sin(Y)*Math.cos(P)*(rt+.002),Math.cos(Y)*rt*1.07,Math.sin(Y)*Math.sin(P)*(wt+.002)])}En(G,B,.0025*l,y)}}else if(xt==="crown"){let W=rt*.85,X=wt*.85,T=80,P=.022*l,B=[],O=[],Y=[];for(let nt=0;nt<=T;nt++){let C=nt/T*Math.PI*2,S=Math.cos(C),H=Math.sin(C),Z=-.025*l,K=Z+(.115+.145*((Math.cos((C-Math.PI/2)*5)+1)*.5)**2)*l;if(B.push(S*W,Z,H*X,S*W,K,H*X,S*(W-P),K,H*(X-P),S*(W-P),Z,H*(X-P)),Y.push([S*W,K,H*X]),nt<T)for(let V=0;V<4;V++){let ut=nt*4+V,ft=nt*4+(V+1)%4;O.push(ut,ut+4,ft,ft,ut+4,ft+4)}}let it=new ve;it.setAttribute("position",new Yt(B,3)),it.setIndex(O),it.computeVertexNormals(),tn(G,it,g),En(G,Y.slice(0,-1),.013*l,g,!0);for(let nt=0;nt<5;nt++){let C=Y[(T/4+nt*T/5)%T];Ne(G,[.025*l,.027*l,.025*l],g,C)}}else if(xt==="bowler"||xt==="topHat"){let W=xt==="topHat",X=rt*(W?1.15:.91),T=W?[[0,-.025],[.69,-.025],[.73,.08],[.69,.88],[.67,1],[0,1]]:[[0,-.025],[.78,-.025],[.87,.11],[.86,.46],[.71,.79],[.4,.98],[0,1.04]],P=new rn(T.map(([nt,C])=>Me([nt*rt,C*X,0])),!1,"catmullrom",.2),B=new Is(P.getPoints(32).map(nt=>new It(Math.max(0,nt.x),nt.y)),48),O=tn(G,B,_t);O.scale.z=.83;let Y=Ne(G,[rt*1.08,.045*l,wt*1.06],_t,[0,.005*l,0]),it=Ee(new Gt(s.accessory||"#33465a").lerp(new Gt("#77828f"),.12),{roughness:.76});$a(G,rt*(W?.705:.862),wt*(W?.705:.862),.11*l,.022*l,it)}else if(xt==="flower"){let W=null;for(let T of[.67,.52,.36,.18,0]){let P=f[0]-gt*T,B=j.ornament([P,j.reach,f[2]],[0,-1,0]);if(B){for(let O of[.14,.2,.28,.36]){let Y=j.ornament([P,B.point.y-O*l,j.reach],[0,0,-1]);if(Y&&(W=Y,Y.normal.z>=.58))break}if(W)break}}W||=j.ornament([m[0],m[1],j.reach],[0,0,-1]),W&&(G.position.copy(W.point).addScaledVector(W.normal,.01*l),G.quaternion.setFromUnitVectors(Me([0,0,1]),W.normal),G.rotateZ(-.2),G.userData.contactFit={kind:"ornament",point:W.point.toArray(),normal:W.normal.toArray(),offset:.01*l}),Fu(G,.15*l,v,A),Ne(G,[.042*l,.055*l,.023*l],Ee("#678b62"),[0,0,-.02*l]);let X=Ne(G,[.044*l,.115*l,.021*l],Ee("#678b62"),[.105*l,-.06*l,-.025*l]);X.rotation.z=-.8}else if(xt==="wizard"){Ne(G,[rt*1.14,.042*l,wt*1.14],g);let W=[[.92,0],[.88,.1],[.69,.27],[.47,.43],[.22,.58],[.06,.65],[0,.66]],X=new Is(W.map(P=>new It(P[0]*rt,P[1]*l)),40),T=X.attributes.position;for(let P=0;P<T.count;P++)T.setX(P,T.getX(P)+.15*l*(T.getY(P)/(.66*l))**2);X.computeVertexNormals(),tn(G,X,g),$a(G,rt*.88,rt*.88,.1*l,.022*l,v),Sc(G,.062*l,A,[.03*l,.28*l,rt*.69],.012*l)}}}if(M.face&&M.face!=="none"){e.updateMatrixWorld(!0);let G=e.matrixWorld.clone().invert(),pt=e.getWorldQuaternion(new Qe).invert(),_t=i.eyeGroups?.length>=2?i.eyeGroups.map(T=>{let P=T.getWorldPosition(new z).applyMatrix4(G),B=pt.clone().multiply(T.getWorldQuaternion(new Qe)),O=new ye().compose(P,B,Me([1,1,1])).invert(),Y=new Ue;return T.traverse(it=>{!it.isMesh||!it.geometry||!it.visible||(it.geometry.computeBoundingBox(),Y.union(it.geometry.boundingBox.clone().applyMatrix4(O.clone().multiply(G).multiply(it.matrixWorld))))}),{center:P,quaternion:B,bounds:Y}}):[-1,1].map(T=>({center:Me([T*u*.13,m[1],m[2]]),quaternion:new Qe,bounds:new Ue(Me([-.07*l,-.12*l,0]),Me([.07*l,.12*l,.04*l]))}));_t.sort((T,P)=>T.center.x-P.center.x);let rt=D("face-"+M.face),wt=["sunglasses","catEye","roundSun"].includes(M.face),Dt=M.face==="monocle",I=Math.abs(_t[1].center.x-_t[0].center.x),W=Ee(wt?"#15202a":"#d6eef5",{transparent:!wt,opacity:wt?1:.065,roughness:wt?.33:.18,metalness:wt?.06:0,depthWrite:wt,side:dn}),X=[];if(_t.forEach(({center:T,quaternion:P,bounds:B},O)=>{if(Dt&&O===0)return;let Y=O?1:-1,it=B.max.x-B.min.x,nt=B.max.y-B.min.y,C=Math.max(t.shape==="triangle"&&M.face==="round"?.25*l:t.shape==="diamond"&&M.face==="sunglasses"?.34*l:0,Ys(I*(M.face==="roundSun"?.43:.41),.11*l,.27*l),it*.5+.024*l),S=Math.max(t.shape==="triangle"&&M.face==="round"?.31*l:0,C*(M.face==="square"||M.face==="sunglasses"?.81:1.04),nt*.5+.021*l),H=Math.max(.025*l,B.max.z+.022*l),Z=Ai(rt,"lens-"+O,T.clone().addScaledVector(Me([0,0,1]).applyQuaternion(P),H).toArray());Z.quaternion.copy(P);let K;M.face==="catEye"?K=Nu([[-.96,.48],[-.86,-.31],[-.35,-.64],[.34,-.62],[.83,-.29],[1.13,.77],[.57,.6],[0,.54]].map(([ut,ft])=>[ut*C*Y,ft*S])):M.face==="sunglasses"?K=Nu([[-.96,.66],[-.38,.72],[.34,.69],[.98,.61],[.9,-.22],[.64,-.69],[0,-.76],[-.65,-.62],[-.9,-.21]].map(([ut,ft])=>[ut*C,ft*S])):M.face==="square"?K=Ou(C*2.08,S*1.94,C*.28).getPoints(12).slice(0,-1).map(ut=>Me([ut.x,ut.y,0])):K=Array.from({length:64},(ut,ft)=>{let St=ft/64*Math.PI*2;return Me([Math.cos(St)*C,Math.sin(St)*S,0])}),En(Z,K.map(ut=>ut.toArray()),(wt?.019:.013)*l,g,!0);let V=new Dn(K.map(ut=>new It(ut.x,ut.y)));if(wt){let ut=tn(Z,new Wi(V,48),W,[0,0,.001*l]);ut.name="eyewear-lens"}if(Z.updateMatrix(),Z.userData.contactFit={kind:"eye",offset:H,eyeDepth:B.max.z,normal:Me([0,0,1]).applyQuaternion(P).toArray()},X.push({i:O,sign:Y,g:Z,rx:C,ry:S,center:T,outer:U(Z,[Y*C,.03*S,0]),inner:U(Z,[-Y*C,.03*S,0])}),!Dt){let ut=U(Z,[Y*C,.03*S,0]),ft=f[2]+.015*l,St=j.side(Y,T.y-.022*l,ft),vt=St?St.point.addScaledVector(St.normal,-.025*l).toArray():[f[0]+Y*gt,T.y-.022*l,ft];En(rt,[ut,[ut[0]+Y*.025*l,ut[1],ut[2]-.042*l],[we.lerp(ut[0],vt[0],.65),we.lerp(ut[1],vt[1],.65),we.lerp(ut[2],vt[2],.72)],vt],.012*l,g)}}),Dt){let T=X[0],P=U(T.g,[T.rx*.72,-T.ry*.72,0]),B=P[0]+.15*l,O=P[1]-.25*l;En(rt,[P,[P[0]+.025*l,P[1]-.095*l,P[2]-.015*l],[B,O,j.front(B,O,P[2]-.065*l)+.023*l],[B+.048*l,O+.012*l,j.front(B+.048*l,O+.012*l,P[2]-.09*l)+.023*l]],.011*l,g)}else{let T=X[0].inner,P=X[1].inner,B=(T[0]+P[0])/2,O=(T[1]+P[1])/2+.033*l,Y=Math.max((T[2]+P[2])/2,j.front(B,O,m[2])+.032*l);En(rt,[T,[B,O,Y],P],.013*l,g)}}if(M.neck&&M.neck!=="none"){let G=x[1],pt=D("neck-"+M.neck,[0,G,0]),_t=o?.32*l:a?.46*l:u*.46,rt=j.front(0,G,n.neckFront?.[2]||m[2]*.86,!0)+.018*l;if(M.neck==="bow"){for(let wt of[-1,1]){let Dt=new Dn;Dt.moveTo(0,0),Dt.bezierCurveTo(.056*l,.025*l,.17*l,.12*l,.225*l,.11*l),Dt.quadraticCurveTo(.25*l,.1*l,.25*l,0),Dt.quadraticCurveTo(.25*l,-.1*l,.215*l,-.11*l),Dt.bezierCurveTo(.15*l,-.1*l,.052*l,-.03*l,0,0);let I=new Gi(Dt,{depth:.032*l,bevelEnabled:!0,bevelSize:.014*l,bevelThickness:.022*l,bevelSegments:4,curveSegments:16}),W=tn(pt,I,g,[wt*.005*l,0,rt+.019*l]);W.scale.set(wt*(t.family==="dots"?1.85:1),t.family==="dots"?1.65:1,1),W.rotation.z=wt*-.04}Ne(pt,[(t.family==="dots"?.075:.052)*l,(t.family==="dots"?.09:.065)*l,.059*l],g,[0,0,rt+.04*l])}else{let wt=Array.from({length:24},(Dt,I)=>{let W=I/24*Math.PI*2,X=[Math.cos(W),0,Math.sin(W)],T=j.around([0,G,0],X,!0);return T?T.point.addScaledVector(Me(X),.008*l).sub(Me([0,G,0])).toArray():[Math.cos(W)*_t,0,Math.sin(W)*rt]});if(En(pt,wt,(M.neck==="scarf"?.07:.034)*l,g,!0),M.neck==="scarf")for(let[Dt,I,W]of[[-.12,.36,-.13],[.04,.27,.13]]){let X=Ai(pt,"scarf-end",[Dt*l,-.075*l,rt+.02*l]);X.rotation.z=W,_n(X,[.135*l,I*l,.065*l],g,[0,-I*l/2,0],.04*l);for(let T=0;T<5;T++)_n(X,[.105*l,.006*l,.005*l],y,[0,(-I+.03+T*.027)*l,.035*l],.002*l);w.push(T=>{X.rotation.z=W+Math.sin(T*1.3+Dt)*.016})}else Ne(pt,[.068*l,.081*l,.025*l],A,[0,-.085*l,rt+.043*l])}}if(k==="macbook"){let G=Math.min(h*.28,m[1]-.6*l),pt=D("prop-macbook",[0,Math.max(.28*l,G),q]);pt.rotation.y=-.64;let _t=1.1*l,rt=.69*l,wt=Ys(m[1]-pt.position.y-.22*l,.29*l,.38*l),Dt=Ee("#bdc3ca",{metalness:.7,roughness:.31}),I=Ee("#4a5058",{roughness:.62});_n(pt,[_t,.043*l,rt],Dt,[0,0,0],.045*l);for(let P=0;P<3;P++)for(let B=0;B<10;B++)_n(pt,[.078*l,.009*l,.055*l],I,[(B-4.5)*.098*l,.026*l,(P*.079-.06)*l],.014*l);_n(pt,[.32*l,.004*l,.135*l],y,[0,.024*l,-.225*l],.018*l);let W=Ai(pt,"laptop-lid",[0,.025*l,rt*.45]);W.rotation.x=.54,_n(W,[_t,wt,.055*l],Dt,[0,wt/2,0],.043*l);let X=Ee("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});_n(W,[_t-.07*l,wt-.055*l,.005*l],X,[0,wt/2,-.024*l],.027*l);let T=Ee("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let P=0;P<3;P++)_n(W,[(P?.38:.63)*l,.012*l,.004*l],T,[-.11*l,wt*.67-P*.05*l,-.028*l],.003*l);Ne(W,[.009*l,.009*l,.004*l],E,[0,wt-.018*l,-.025*l]),pt.updateMatrix(),N=[[-.28*l,.098*l,-.055*l],[.28*l,.098*l,-.055*l]].map(P=>U(pt,P))}else if(k==="flowers"){let G=Math.min(h*.33,m[1]-.6*l),pt=D("prop-flowers",[0,G,q+.03*l]);pt.rotation.z=-.08;let _t=Ee("#6c8d64"),rt=Ee("#e1c7ac",{side:dn});tn(pt,new Pn(.25*l,.065*l,.36*l,32,1,!0),rt,[0,.02*l,0]);let wt=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],Dt=[Ee("#f0bbbd"),v,Ee("#dda375"),Ee("#d4b5ce"),v];wt.forEach((W,X)=>{Uu(pt,[0,-.25*l,0],W.map(P=>P*l),.014*l,_t);let T=Fu(pt,.12*l,Dt[X],A,W.map(P=>P*l));T.rotation.x=-.18});let I=Ne(pt,[.065*l,.16*l,.027*l],_t,[.22*l,.2*l,-.02*l]);I.rotation.z=-.7,$a(pt,.077*l,.075*l,-.12*l,.018*l,g),pt.updateMatrix(),N=[[-.105*l,-.11*l,.025*l],[.105*l,-.07*l,.025*l]].map(W=>U(pt,W))}else if(k==="wand"){let G=D("prop-wand",[u*.48,h*.43,q]);G.rotation.z=-.12,Uu(G,[0,-.2*l,0],[0,.48*l,0],.029*l,A),Sc(G,.16*l,v,[0,.56*l,0],.04*l);let pt=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((_t,rt)=>Sc(G,(.03+rt*.008)*l,A,_t.map(wt=>wt*l),.009*l));w.push(_t=>pt.forEach((rt,wt)=>{rt.rotation.z=Math.sin(_t*.8+wt)*.2,rt.scale.setScalar(.84+Math.sin(_t*1.4+wt)*.16)})),G.updateMatrix(),N=[null,U(G,[0,0,0])]}else if(k==="tea"){let G=t.mouth!=="none"&&d==="drink",pt=Math.min(h*(G?.49:.34),m[1]-(G?.58:.53)*l),_t=D("prop-tea",[u*.13,pt,q+.05*l]),rt=Ee("#cba981");tn(_t,new Pn(.165*l,.128*l,.35*l,36),rt),tn(_t,new Pn(.175*l,.175*l,.032*l,36),v,[0,.185*l,0]);let wt=n.mouth||[m[0],m[1]-.25*l,m[2]],Dt=G?[wt[0]-_t.position.x,wt[1]-pt,wt[2]+.025*l-_t.position.z]:[.04*l,.48*l,-.05*l];En(_t,[[.04*l,.18*l,-.02*l],[.04*l,.18*l+(Dt[1]-.18*l)*.64,-.025*l],Dt],.019*l,g);for(let I=0;I<6;I++){let W=I*1.83;Ne(_t,[.019*l,.019*l,.013*l],E,[Math.sin(W)*.08*l,(-.125+I%2*.03)*l,.121*l])}_t.updateMatrix(),N=[[-.095*l,-.17*l,0],[.16*l,0,0]].map(I=>U(_t,I))}else if(k==="camera"){let G=D("prop-camera",[0,Math.min(m[1]-.28*l,h*.61),q+.04*l]);_n(G,[.65*l,.36*l,.25*l],g,[0,0,0],.06*l),_n(G,[.15*l,.09*l,.18*l],E,[0,.205*l,-.015*l],.025*l);let pt=tn(G,new Pn(.148*l,.153*l,.19*l,40),E,[.03*l,0,.19*l]);pt.rotation.x=Math.PI/2;let _t=tn(G,new Xi(.124*l,.014*l,8,40),A,[.03*l,0,.29*l]),rt=Ee("#203b4c",{metalness:.35,roughness:.15});Ne(G,[.12*l,.12*l,.018*l],rt,[.03*l,0,.287*l]),_n(G,[.115*l,.061*l,.015*l],v,[-.2*l,.105*l,.135*l],.014*l),Ne(G,[.045*l,.02*l,.04*l],E,[.22*l,.194*l,.015*l]),G.updateMatrix(),N=[[-.31*l,-.045*l,.015*l],[.31*l,.015*l,.015*l]].map(wt=>U(G,wt))}else if(k==="book"){let G=D("prop-book",[0,Math.min(h*.34,m[1]-.47*l),q+.07*l]),pt=Ee("#f5eddd"),_t=Ee("#bcc0b1");G.rotation.x=.12;for(let rt of[-1,1]){let wt=Ai(G,"book-half");wt.rotation.z=rt*.16,_n(wt,[.48*l,.029*l,.59*l],g,[rt*.238*l,0,0],.018*l);for(let Dt=0;Dt<3;Dt++)_n(wt,[.45*l,.013*l,.55*l],pt,[rt*.227*l,(.022+Dt*.014)*l,0],.013*l);for(let Dt=0;Dt<5;Dt++)_n(wt,[(.25-Dt%2*.04)*l,.003*l,.007*l],_t,[rt*.245*l,.059*l,(Dt-2)*.068*l],.002*l)}G.updateMatrix(),N=[[-.39*l,.03*l,.035*l],[.39*l,.03*l,.035*l]].map(rt=>U(G,rt))}let Ut=["wave","dance","celebrate","love"],Ft=o||a||k!=="none"||Ut.includes(d)||t.pose==="chin"||["hands","both"].includes(t.limbs),zt=(o||a)&&k==="none"&&!Ut.includes(d)&&t.pose!=="chin",kt=zt?[...i.arms||[]]:[],dt=[];if(zt||(i.arms||[]).forEach(G=>{G.visible=!1}),Ft&&!zt){let G=o?h*.22:a&&!c?.13:a?h*.17:h*.32,pt=[n.shoulderL||[-u*.4,h*.46,0],n.shoulderR||[u*.4,h*.46,0]],_t=pt.map((rt,wt)=>[a&&!c?rt[0]*.84:(wt?1:-1)*u*(a?.3:.39),G,a&&!c?Math.max(.48,m[2]*.78):m[2]*.73]);if(N&&N.forEach((rt,wt)=>{rt&&(_t[wt]=rt)}),!N){if(d==="wave"&&(_t[1]=[u*.57,m[1]+.27*l,m[2]*.67]),t.pose==="chin"&&(_t[1]=[u*.2,m[1]-.25*l,m[2]+.07*l]),d==="dance"&&(_t[0]=[-u*.58,h*.44,m[2]*.6],_t[1]=[u*.56,h*.64,m[2]*.67]),d==="celebrate")for(let rt=0;rt<2;rt++)_t[rt]=[(rt?1:-1)*u*.53,m[1]+.31*l,m[2]*.7];if(d==="love")for(let rt=0;rt<2;rt++)_t[rt]=[(rt?1:-1)*.12*l,m[1]-.39*l,q]}for(let rt=0;rt<2;rt++){let wt=rt?1:-1,Dt=Me(_t[rt]);if(!o&&!a){let C=wt*(N?Math.min(u*.32,Math.abs(Dt.x)+.15*l):u*.4),S=N?Ys(Dt.y+.12*l,h*.23,m[1]-.2*l):h*.43;pt[rt]=[C,S,j.front(C,S,m[2]*.6)-.05*l]}let I=Me(pt[rt]),W=Dt.clone().sub(I),X=D("posed-arm-"+rt,pt[rt]),T=(o?.078:a?.115:.102)*l,P=W.clone().multiplyScalar(.48);P.x+=wt*(a&&!c&&!N?.035:.11)*l,P.y-=.11*l,P.z+=.05*l;let B=W.clone().multiplyScalar(.85);B.z+=.013*l;let O=En(X,[[0,0,0],P.toArray(),B.toArray(),W.toArray()],T,_);{let C=O.geometry,S=C.attributes.position,{path:H,tubularSegments:Z,radialSegments:K}=C.parameters;for(let V=0;V<=Z;V++){let ut=V/Z,ft=H.getPointAt(ut),St=1.12-.35*ut+.035*Math.sin(ut*Math.PI);for(let vt=0;vt<=K;vt++){let $=V*(K+1)+vt;S.setXYZ($,ft.x+(S.getX($)-ft.x)*St,ft.y+(S.getY($)-ft.y)*St,ft.z+(S.getZ($)-ft.z)*St)}}C.computeVertexNormals()}if(c){let C=O.geometry,S=C.attributes.position,{path:H,tubularSegments:Z,radialSegments:K}=C.parameters;for(let V=0;V<=Z;V++){let ut=V/Z,ft=H.getPointAt(ut),St=.85+Math.sin(ut*Math.PI)*.64;for(let vt=0;vt<=K;vt++){let $=V*(K+1)+vt;S.setXYZ($,ft.x+(S.getX($)-ft.x)*St,ft.y+(S.getY($)-ft.y)*St,ft.z+(S.getZ($)-ft.z)*.4)}}C.computeVertexNormals()}O.userData.region=o?"clothing":"body",O.userData.surfaceMaterial=o?_.name||"knit":t.material||"plush",O.userData.furLength=t.material==="micro"?.011:.024;let Y=Ai(X,(c?"wing-tip-":"hand-")+rt,W.toArray()),it=(o?.102:a?.128:.115)*l,nt=Ne(Y,[it,it*(c?1.1:o?1.05:.83),it*(c?.4:k==="macbook"?.57:.82)],R);if(nt.userData.region=o?"skin":"body",nt.userData.surfaceMaterial=o?R.name||"skin":t.material||"plush",nt.userData.furLength=t.material==="micro"?.011:.024,o){Y.rotation.x=k==="macbook"?Math.PI*.49:k==="book"?.65:-.22,k==="macbook"&&(Y.rotation.y=-.64);for(let S=0;S<4;S++)Ne(Y,[.023*l,(.065-Math.abs(S-1.5)*.008)*l,.025*l],R,[(S-1.5)*.043*l,.067*l,.018*l]);let C=Ne(Y,[.055*l,.059*l,.035*l],R,[-wt*.09*l,.006*l,.035*l]);C.rotation.z=wt*.42}kt.push(X),dt.push(Y),Array.isArray(i.surfaces)&&i.surfaces.push(O,nt),!N&&(d==="wave"&&rt===1||d==="celebrate")&&w.push(C=>{X.rotation.z=Math.sin(C*3.2+rt*.6)*.075}),!N&&d==="dance"&&w.push(C=>{X.rotation.z=Math.sin(C*3+rt*1.1)*.065}),k==="macbook"&&w.push(C=>{Y.rotation.z=Math.sin(C*4.2+rt*1.7)*.022})}}i.arms=kt,e.updateMatrixWorld(!0);for(let G of p)i.head&&(G.name.startsWith("head-")||G.name.startsWith("face-"))?i.head.attach(G):o&&i.torso&&G.name.startsWith("neck-")&&i.torso.attach(G);return e.updateMatrixWorld(!0),{parts:p,prop:k,constraintNotes:[],tick(G){for(let pt of w)pt(Number.isFinite(G)?G:0)}}}var Zg=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function Xr(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Ka(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function wc(){let i=new Map,t=new Map,e=new Map,n,s,r,o,a,c=0,h=0,u=(b,R,_)=>Math.max(R,Math.min(_,b)),l=(b,R,_)=>{let y=1/Math.max(1e-12,Math.hypot(b,R,_));return[b*y,R*y,_*y]};function f(b,R,_,y,D){b*=y,R*=y,_*=y;let U=Math.min(b,R,_),N=U<.08?U-6.25*U*U:.04;b-=N,R-=N,_-=N;let k=Math.max(b,R,_);if(k>=.76){let J=1-.0576/(k-.52),q=J/k,j=1-1/(.15*(k-J)+1);b=b*q*(1-j)+J*j,R=R*q*(1-j)+J*j,_=_*q*(1-j)+J*j}D[0]=b,D[1]=R,D[2]=_}let m=new Uint8ClampedArray(4097),x=new Float32Array(256);for(let b=0;b<m.length;b++){let R=b/4096;m[b]=Math.round((R<=.0031308?12.92*R:1.055*Math.pow(R,1/2.4)-.055)*255)}for(let b=0;b<256;b++){let R=b/255;x[b]=R<=.04045?R/12.92:Math.pow((R+.055)/1.055,2.4)}let M=(b,R)=>{let _=new Float32Array(16);for(let y=0;y<4;y++)for(let D=0;D<4;D++)_[y*4+D]=b[D]*R[y*4]+b[4+D]*R[y*4+1]+b[8+D]*R[y*4+2]+b[12+D]*R[y*4+3];return _};function d(b){let R=b[0],_=b[4],y=b[8],D=b[1],U=b[5],N=b[9],k=b[2],J=b[6],q=b[10],j=[U*q-N*J,N*k-D*q,D*J-U*k,y*J-_*q,R*q-y*k,_*k-R*J,_*N-y*U,y*D-R*N,R*U-_*D],tt=R*j[0]+_*j[1]+y*j[2],gt=1/(Math.abs(tt)<1e-12?1:tt);return j.map(Tt=>Tt*gt)}function p(b){if(!b.normals){let R=new Float32Array(b.positions.length),_=b.positions,y=b.indices,D=y?y.length:_.length/3;for(let U=0;U<D;U+=3){let N=(y?y[U]:U)*3,k=(y?y[U+1]:U+1)*3,J=(y?y[U+2]:U+2)*3,q=_[k]-_[N],j=_[k+1]-_[N+1],tt=_[k+2]-_[N+2],gt=_[J]-_[N],Tt=_[J+1]-_[N+1],xt=_[J+2]-_[N+2],Ut=j*xt-tt*Tt,Ft=tt*gt-q*xt,zt=q*Tt-j*gt;for(let kt of[N,k,J])R[kt]+=Ut,R[kt+1]+=Ft,R[kt+2]+=zt}for(let U=0;U<R.length;U+=3){let N=1/Math.max(1e-10,Math.hypot(R[U],R[U+1],R[U+2]));R[U]*=N,R[U+1]*=N,R[U+2]*=N}b.normals=R}i.set(b.id,b)}function w(b,R,_,y){if(!b){y[0]=y[1]=y[2]=y[3]=1;return}R=R*b.repeat[0]+b.offset[0],_=_*b.repeat[1]+b.offset[1],R=b.wrapS===1e3?R-Math.floor(R):u(R,0,.999999),_=b.wrapT===1e3?_-Math.floor(_):u(_,0,.999999),b.flipY&&(_=1-_);let D=u(Math.floor(R*b.width),0,b.width-1),U=u(Math.floor(_*b.height),0,b.height-1),N=(U*b.width+D)*b.channels,k=b.data,J=k[N]||0,q=b.channels>1?k[N+1]:J,j=b.channels>2?k[N+2]:J;y[0]=b.srgb?x[J]:J/255,y[1]=b.srgb?x[q]:q/255,y[2]=b.srgb?x[j]:j/255,y[3]=b.channels===4?k[N+3]/255:1}function g(b){if(b.heightMips)return;b.heightMips=[{data:b.data,width:b.width,height:b.height,channels:b.channels}];let R=b.heightMips[0];for(;R.width>1||R.height>1;){let _=Math.max(1,R.width>>1),y=Math.max(1,R.height>>1),D=new Float32Array(_*y);for(let U=0;U<y;U++)for(let N=0;N<_;N++){let k=0;for(let J=0;J<2;J++)for(let q=0;q<2;q++)k+=R.data[(Math.min(R.height-1,U*2+J)*R.width+Math.min(R.width-1,N*2+q))*R.channels];D[U*_+N]=k*.25}R={data:D,width:_,height:y,channels:1},b.heightMips.push(R)}}function v(b,R,_,y,D){let U=Math.min(b.heightMips.length-1,y),N=Math.floor(U),k=U-N;D[0]=D[1]=0;for(let J=0;J<2;J++){let q=J?k:1-k;if(q<1e-4)continue;let j=b.heightMips[N+J],tt=(R*b.repeat[0]+b.offset[0])*j.width,gt=(_*b.repeat[1]+b.offset[1])*j.height;b.flipY&&(gt=j.height-gt);let Tt=Math.floor(tt),xt=Math.floor(gt),Ut=tt-Tt,Ft=gt-xt,zt=(_t,rt)=>(_t=b.wrapS===1e3?(_t%j.width+j.width)%j.width:u(_t,0,j.width-1),rt=b.wrapT===1e3?(rt%j.height+j.height)%j.height:u(rt,0,j.height-1),j.data[(rt*j.width+_t)*j.channels]/255),kt=zt(Tt,xt),dt=zt(Tt+1,xt),G=zt(Tt,xt+1),pt=zt(Tt+1,xt+1);D[0]+=((dt-kt)*(1-Ft)+(pt-G)*Ft)*j.width*b.repeat[0]*q,D[1]+=((G-kt)*(1-Ut)+(pt-dt)*Ut)*j.height*b.repeat[1]*(b.flipY?-1:1)*q}}function E(b,R){if(!b.shadow)return null;let _=b.shadow.size,y=new Float32Array(_*_);y.fill(1/0);for(let{mesh:D,g:U}of R){if(!D.castShadow||D.material.transparent||D.material.unlit)continue;let N=M(b.shadow.viewProjection,D.matrix),k=U.positions,J=U.indices,q=new Float32Array(k.length),j=k.length/3;for(let xt=0;xt<j;xt++){let Ut=xt*3,Ft=k[Ut],zt=k[Ut+1],kt=k[Ut+2],dt=1/(N[3]*Ft+N[7]*zt+N[11]*kt+N[15]);q[Ut]=((N[0]*Ft+N[4]*zt+N[8]*kt+N[12])*dt*.5+.5)*_,q[Ut+1]=(.5-(N[1]*Ft+N[5]*zt+N[9]*kt+N[13])*dt*.5)*_,q[Ut+2]=(N[2]*Ft+N[6]*zt+N[10]*kt+N[14])*dt}let tt=J?J.length:j,gt=D.start||0,Tt=Math.min(tt,Number.isFinite(D.count)?gt+D.count:tt);for(let xt=gt;xt+2<Tt;xt+=3){let Ut=(J?J[xt]:xt)*3,Ft=(J?J[xt+1]:xt+1)*3,zt=(J?J[xt+2]:xt+2)*3,kt=q[Ut],dt=q[Ut+1],G=q[Ft],pt=q[Ft+1],_t=q[zt],rt=q[zt+1],wt=q[Ut+2],Dt=q[Ft+2],I=q[zt+2],W=(G-kt)*(rt-dt)-(pt-dt)*(_t-kt);if(Math.abs(W)<.04)continue;let X=Math.max(0,Math.floor(Math.min(kt,G,_t))),T=Math.min(_-1,Math.ceil(Math.max(kt,G,_t))),P=Math.max(0,Math.floor(Math.min(dt,pt,rt))),B=Math.min(_-1,Math.ceil(Math.max(dt,pt,rt)));if(X>T||P>B)continue;let O=1/W,Y=(pt-rt)*O,it=(rt-dt)*O;for(let nt=P;nt<=B;nt++){let C=nt+.5,S=((G-(X+.5))*(rt-C)-(pt-C)*(_t-(X+.5)))*O,H=((_t-(X+.5))*(dt-C)-(rt-C)*(kt-(X+.5)))*O,Z=nt*_+X;for(let K=X;K<=T;K++,Z++,S+=Y,H+=it){let V=1-S-H;if(S<0||H<0||V<0)continue;let ut=S*wt+H*Dt+V*I;ut>=-1&&ut<=1&&ut<y[Z]&&(y[Z]=ut)}}}}return{size:_,buffer:y,matrix:b.shadow.screenMatrix,radius:b.shadow.radius||2.5}}function A(b){let R=performance.now();for(let I of b.geometries||[])p(I);for(let I of b.textures||[])t.set(I.id,I);let _=new Set(b.geometryIds),y=new Set(b.textureIds),D=new Set(b.meshes.map(I=>I.id));for(let I of i.keys())_.has(I)||i.delete(I);for(let I of t.keys())y.has(I)||t.delete(I);for(let I of e.keys())D.has(I)||e.delete(I);(c!==b.width||h!==b.height)&&(c=b.width,h=b.height,n=new Float32Array(c*h),o=new Float32Array(c*h*4),a=new Float32Array(c*h*4),r=new Int32Array(c*h)),s=new Uint8ClampedArray(c*h*4),n.fill(1/0),r.fill(-1);let U=b.background||[0,0,0,0];for(let I=0;I<o.length;I+=4)o[I]=U[0]*U[3],o[I+1]=U[1]*U[3],o[I+2]=U[2]*U[3],o[I+3]=U[3];let N=new Float32Array(4097),k=b.exposure||1;for(let I=0;I<N.length;I++){let W=I/512*k;N[I]=b.toneMapping?u(W*(2.51*W+.03)/(W*(2.43*W+.59)+.14),0,1):u(W,0,1)}let J=b.lights||[],q=b.ambient||[.18,.18,.18],j=b.sky||[.24,.24,.24],tt=b.ground||[.13,.14,.16],gt=l(b.cameraWorld[8],b.cameraWorld[9],b.cameraWorld[10]);for(let I of J)I.half=l(I.direction[0]+gt[0],I.direction[1]+gt[1],I.direction[2]+gt[2]);let Tt=[],xt=[],Ut=0,Ft=0;for(let I=0;I<b.meshes.length;I++){let W=b.meshes[I],X=i.get(W.geometry);if(!X)continue;let T=W.material,P=M(b.viewProjection,W.matrix),B=d(W.matrix),O=X.positions.length/3,Y=e.get(W.id);(!Y||Y.length!==O*9)&&(Y=new Float32Array(O*9),e.set(W.id,Y));let it=X.positions,nt=X.normals,C=X.uv,S=0;for(let Z=0;Z<O;Z++){let K=Z*3,V=Z*9,ut=it[K],ft=it[K+1],St=it[K+2],vt=P[3]*ut+P[7]*ft+P[11]*St+P[15],$=vt>1e-6?1/vt:0,yt=B[0]*nt[K]+B[1]*nt[K+1]+B[2]*nt[K+2],bt=B[3]*nt[K]+B[4]*nt[K+1]+B[5]*nt[K+2],Et=B[6]*nt[K]+B[7]*nt[K+1]+B[8]*nt[K+2],Mt=$/Math.max(1e-9,Math.hypot(yt,bt,Et));Y[V]=((P[0]*ut+P[4]*ft+P[8]*St+P[12])*$*.5+.5)*c,Y[V+1]=(.5-(P[1]*ut+P[5]*ft+P[9]*St+P[13])*$*.5)*h,Y[V+2]=(P[2]*ut+P[6]*ft+P[10]*St+P[14])*$,Y[V+3]=$,Y[V+4]=yt*Mt,Y[V+5]=bt*Mt,Y[V+6]=Et*Mt,Y[V+7]=C?C[Z*2]*$:0,Y[V+8]=C?C[Z*2+1]*$:0,S+=Y[V+2]}let H={mesh:W,g:X,tr:Y,index:I,z:S/O};(T.transparent||T.opacity<.999?xt:Tt).push(H)}Tt.sort((I,W)=>I.mesh.order-W.mesh.order||I.z-W.z),xt.sort((I,W)=>I.mesh.order-W.mesh.order||W.z-I.z);let zt=new Float32Array(4),kt=new Float32Array(2),dt=new Float32Array(3),G=E(b,Tt);function pt(I,W,X,T=1,P=.28){if(!G)return 1;let B=G.matrix,O=(I+.5)/c*2-1,Y=1-(W+.5)/h*2,it=1/(B[3]*O+B[7]*Y+B[11]*X+B[15]),nt=(B[0]*O+B[4]*Y+B[8]*X+B[12])*it,C=(B[1]*O+B[5]*Y+B[9]*X+B[13])*it,S=(B[2]*O+B[6]*Y+B[10]*X+B[14])*it,H=(nt*.5+.5)*G.size,Z=(.5-C*.5)*G.size;if(H<1||Z<1||H>=G.size-2||Z>=G.size-2)return 1;let K=45e-5+75e-5*(1-u(T,0,1)),V=G.radius*.5,ut=S-K,ft=u(Math.floor(H-V*2),0,G.size-1),St=u(Math.floor(H-V),0,G.size-1),vt=u(Math.floor(H),0,G.size-1),$=u(Math.floor(H+V),0,G.size-1),yt=u(Math.floor(H+V*2),0,G.size-1),bt=0;for(let Et=-2;Et<=2;Et++){let Mt=u(Math.floor(Z+Et*V),0,G.size-1)*G.size,Rt=Et===0?6:Math.abs(Et)===1?4:1;bt+=Rt*((ut<=G.buffer[Mt+ft]?1:0)+(ut<=G.buffer[Mt+St]?4:0)+(ut<=G.buffer[Mt+vt]?6:0)+(ut<=G.buffer[Mt+$]?4:0)+(ut<=G.buffer[Mt+yt]?1:0))}return P+(1-P)*bt/256}function _t(I,W){let{mesh:X,g:T,tr:P}=I,B=X.material,O=T.indices,Y=O?O.length:T.positions.length/3,it=X.start||0,nt=Math.min(Y,Number.isFinite(X.count)?it+X.count:Y),C=t.get(B.map),S=t.get(B.bump);S&&g(S);let H=B.roughness,Z=B.unlit?0:.007+(1-H)*(1-H)*.23,K=8+(1-H)*(1-H)*115,V=B.surfaceKind==="plush"||B.surfaceKind==="micro"?.14:.45,ut=B.surfaceKind==="plush"?.48:B.surfaceKind==="micro"?.38:.28,ft=B.color,St=B.emissive||[0,0,0];for(let vt=it;vt+2<nt;vt+=3){let $=O?O[vt]:vt,yt=O?O[vt+1]:vt+1,bt=O?O[vt+2]:vt+2,Et=$*9,Mt=yt*9,Rt=bt*9;if(P[Et+3]===0||P[Mt+3]===0||P[Rt+3]===0)continue;let F=P[Et],lt=P[Et+1],st=P[Mt],mt=P[Mt+1],ct=P[Rt],ot=P[Rt+1],At=P[Et+2],Lt=P[Mt+2],Zt=P[Rt+2];if(Math.min(At,Lt,Zt)>1||Math.max(At,Lt,Zt)<-1)continue;let Ot=(st-F)*(ot-lt)-(mt-lt)*(ct-F);if(Math.abs(Ot)<.016||B.side===0&&Ot>0||B.side===1&&Ot<0)continue;let Jt=Math.max(0,Math.floor(Math.min(F,st,ct))),te=Math.min(c-1,Math.ceil(Math.max(F,st,ct))),ee=Math.max(0,Math.floor(Math.min(lt,mt,ot))),ue=Math.min(h-1,Math.ceil(Math.max(lt,mt,ot)));if(Jt>te||ee>ue)continue;Ut++;let he=0,ge=0,Pe=0,De=0,le=0,re=0,Re=0;if(S&&T.uv){let Q=$*2,at=yt*2,ht=bt*2,et=T.uv[at]-T.uv[Q],Ct=T.uv[ht]-T.uv[Q],Pt=T.uv[at+1]-T.uv[Q+1],Ht=T.uv[ht+1]-T.uv[Q+1],Nt=(et*(ot-lt)-Ct*(mt-lt))/Ot,Wt=(Ct*(st-F)-et*(ct-F))/Ot,Xt=(Pt*(ot-lt)-Ht*(mt-lt))/Ot,Vt=(Ht*(st-F)-Pt*(ct-F))/Ot,Qt=S.width*S.repeat[0],de=S.height*S.repeat[1];Re=Math.log2(Math.max(1,Math.hypot(Nt*Qt,Xt*de),Math.hypot(Wt*Qt,Vt*de)));let $t=T.positions,Kt=T.uv,ie=Kt[$*2],qt=Kt[$*2+1],xe=Kt[yt*2]-ie,oe=Kt[yt*2+1]-qt,ke=Kt[bt*2]-ie,Ie=Kt[bt*2+1]-qt,ne=xe*Ie-ke*oe;if(Math.abs(ne)>1e-9){let $e=$t[yt*3]-$t[$*3],ce=$t[yt*3+1]-$t[$*3+1],Oe=$t[yt*3+2]-$t[$*3+2],Be=$t[bt*3]-$t[$*3],Te=$t[bt*3+1]-$t[$*3+1],He=$t[bt*3+2]-$t[$*3+2],Ve=($e*Ie-Be*oe)/ne,en=(ce*Ie-Te*oe)/ne,fn=(Oe*Ie-He*oe)/ne,Hn=(Be*xe-$e*ke)/ne,Zs=(Te*xe-ce*ke)/ne,ss=(He*xe-Oe*ke)/ne,ze=X.matrix;he=ze[0]*Ve+ze[4]*en+ze[8]*fn,ge=ze[1]*Ve+ze[5]*en+ze[9]*fn,Pe=ze[2]*Ve+ze[6]*en+ze[10]*fn,De=ze[0]*Hn+ze[4]*Zs+ze[8]*ss,le=ze[1]*Hn+ze[5]*Zs+ze[9]*ss,re=ze[2]*Hn+ze[6]*Zs+ze[10]*ss;let Ci=1/Math.max(.01,he*he+ge*ge+Pe*Pe),Ii=1/Math.max(.01,De*De+le*le+re*re);he*=Ci,ge*=Ci,Pe*=Ci,De*=Ii,le*=Ii,re*=Ii}}let Ce=1/Ot,Je=(mt-ot)*Ce,an=(ct-st)*Ce,Tn=(ot-lt)*Ce,An=(F-ct)*Ce,Rn=((st-(Jt+.5))*(ot-(ee+.5))-(mt-(ee+.5))*(ct-(Jt+.5)))*Ce,yn=((ct-(Jt+.5))*(lt-(ee+.5))-(ot-(ee+.5))*(F-(Jt+.5)))*Ce,L=Ot>0?-1:1;for(let Q=ee;Q<=ue;Q++){let at=Rn+(Q-ee)*an,ht=yn+(Q-ee)*An,et=Q*c+Jt;for(let Ct=Jt;Ct<=te;Ct++,et++,at+=Je,ht+=Tn){let Pt=1-at-ht;if(at<-1e-6||ht<-1e-6||Pt<-1e-6)continue;let Ht=at*At+ht*Lt+Pt*Zt;if(Ht<-1||Ht>1||B.depthTest&&Ht>=n[et]-2e-7)continue;let Nt=B.opacity,Wt=ft[0],Xt=ft[1],Vt=ft[2],Qt=0,de=0;if(C||S||B.shadowFade){let ne=at*P[Et+3]+ht*P[Mt+3]+Pt*P[Rt+3];Qt=(at*P[Et+7]+ht*P[Mt+7]+Pt*P[Rt+7])/ne,de=(at*P[Et+8]+ht*P[Mt+8]+Pt*P[Rt+8])/ne}if(C&&(w(C,Qt,de,zt),Wt*=zt[0],Xt*=zt[1],Vt*=zt[2],Nt*=zt[3]),Nt<=Math.max(.002,B.alphaTest||0))continue;let $t=at*P[Et+4]+ht*P[Mt+4]+Pt*P[Rt+4],Kt=at*P[Et+5]+ht*P[Mt+5]+Pt*P[Rt+5],ie=at*P[Et+6]+ht*P[Mt+6]+Pt*P[Rt+6],qt=L/Math.max(1e-9,Math.sqrt($t*$t+Kt*Kt+ie*ie));$t*=qt,Kt*=qt,ie*=qt;let xe=$t,oe=Kt,ke=ie;if(S){v(S,Qt,de,Re,kt);let ne=(he*kt[0]+De*kt[1])*B.bumpScale,$e=(ge*kt[0]+le*kt[1])*B.bumpScale,ce=(Pe*kt[0]+re*kt[1])*B.bumpScale,Oe=ne*$t+$e*Kt+ce*ie;ne-=Oe*$t,$e-=Oe*Kt,ce-=Oe*ie;let Be=Math.min(1,V/Math.max(.001,Math.hypot(ne,$e,ce)));$t-=ne*Be,Kt-=$e*Be,ie-=ce*Be;let Te=1/Math.max(1e-9,Math.hypot($t,Kt,ie));$t*=Te,Kt*=Te,ie*=Te}if(T.colors&&B.vertexColors&&(Wt*=at*T.colors[$*3]+ht*T.colors[yt*3]+Pt*T.colors[bt*3],Xt*=at*T.colors[$*3+1]+ht*T.colors[yt*3+1]+Pt*T.colors[bt*3+1],Vt*=at*T.colors[$*3+2]+ht*T.colors[yt*3+2]+Pt*T.colors[bt*3+2]),B.shadowOnly){if(Nt*=1-pt(Ct,Q,Ht,1,0),B.shadowFade){let ne=B.shadowFade,$e=Math.hypot((Qt-ne[0])/ne[2],(de-ne[1])/ne[3]),ce=u(($e-.28)/.72,0,1);Nt*=1-ce*ce*(3-2*ce)}if(Nt<.002)continue}if(!B.unlit){let ne=Kt*.5+.5,$e=q[0]+tt[0]+(j[0]-tt[0])*ne,ce=q[1]+tt[1]+(j[1]-tt[1])*ne,Oe=q[2]+tt[2]+(j[2]-tt[2])*ne,Be=0,Te=0,He=0;for(let en=0;en<J.length;en++){let fn=J[en],Hn=fn.direction,Zs=$t*Hn[0]+Kt*Hn[1]+ie*Hn[2],ss=en===0&&X.receiveShadow?pt(Ct,Q,Ht,xe*Hn[0]+oe*Hn[1]+ke*Hn[2],ut):1,ze=Math.max(0,(Zs+.055)/1.055)*fn.intensity*ss,Ci=fn.half,Ii=Z*Math.pow(Math.max(0,$t*Ci[0]+Kt*Ci[1]+ie*Ci[2]),K)*fn.intensity*ss;$e+=fn.color[0]*ze,ce+=fn.color[1]*ze,Oe+=fn.color[2]*ze,Be+=fn.color[0]*Ii,Te+=fn.color[1]*Ii,He+=fn.color[2]*Ii}let Ve=B.metalness||0;Wt=Wt*$e*(1-Ve*.48)+Be*(1-Ve+Ve*Wt)*(1+Ve*3),Xt=Xt*ce*(1-Ve*.48)+Te*(1-Ve+Ve*Xt)*(1+Ve*3),Vt=Vt*Oe*(1-Ve*.48)+He*(1-Ve+Ve*Vt)*(1+Ve*3)}Wt+=St[0],Xt+=St[1],Vt+=St[2],B.toneMapped&&!B.unlit&&(b.neutral?(f(Wt,Xt,Vt,k,dt),Wt=dt[0],Xt=dt[1],Vt=dt[2]):(Wt=N[u(Math.round(Wt*512),0,4096)],Xt=N[u(Math.round(Xt*512),0,4096)],Vt=N[u(Math.round(Vt*512),0,4096)]));let Ie=et*4;if(Nt>=.999)o[Ie]=Wt,o[Ie+1]=Xt,o[Ie+2]=Vt,o[Ie+3]=1;else{let ne=1-Nt;o[Ie]=Wt*Nt+o[Ie]*ne,o[Ie+1]=Xt*Nt+o[Ie+1]*ne,o[Ie+2]=Vt*Nt+o[Ie+2]*ne,o[Ie+3]=Nt+o[Ie+3]*ne}!W&&B.depthWrite&&(n[et]=Ht,r[et]=I.index),Ft++}}}}for(let I of Tt)_t(I,!1);if(b.ambientOcclusion&&c>180){let I=Math.max(2,Math.round(c/140)),W=[[-I,0],[I,0],[0,-I],[0,I],[-I*2,-I],[I*2,-I]];for(let X=I*2;X<h-I*2;X++)for(let T=I*2;T<c-I*2;T++){let P=X*c+T,B=n[P];if(!Number.isFinite(B))continue;let O=0;for(let[Y,it]of W){let nt=P+it*c+Y,C=B-n[nt];r[nt]!==r[P]&&C>.0015&&C<.035&&(O+=1-C/.045)}if(O>0){let Y=1-O*.027,it=P*4;o[it]*=Y,o[it+1]*=Y,o[it+2]*=Y}}}a.set(o);let rt=new Map(b.meshes.map((I,W)=>[I.id,W])),wt=0,Dt=c*.5*Math.hypot(b.viewProjection[0],b.viewProjection[4],b.viewProjection[8]);for(let I of b.fibers||[]){let W=M(b.viewProjection,I.matrix),X=I.segments,T=I.matrix,P=I.color,B=rt.get(I.ownerId),O=new Float32Array(15),Y=new Float32Array(5),it=(Math.hypot(T[0],T[1],T[2])+Math.hypot(T[4],T[5],T[6])+Math.hypot(T[8],T[9],T[10]))/3;for(let nt=0;nt<X.length;nt+=20){let C=!0,S=0;Y[0]=0;for(let Ot=0;Ot<5;Ot++){let Jt=nt+Ot*3,te=Ot*3,ee=X[Jt],ue=X[Jt+1],he=X[Jt+2],ge=W[3]*ee+W[7]*ue+W[11]*he+W[15];if(ge<1e-6){C=!1;break}O[te]=((W[0]*ee+W[4]*ue+W[8]*he+W[12])/ge*.5+.5)*c,O[te+1]=(.5-(W[1]*ee+W[5]*ue+W[9]*he+W[13])/ge*.5)*h,O[te+2]=(W[2]*ee+W[6]*ue+W[10]*he+W[14])/ge-7e-6,Ot&&(S+=Math.hypot(O[te]-O[te-3],O[te+1]-O[te-2]),Y[Ot]=S)}if(!C||S<.035)continue;let H=O[0],Z=O[1];if(H<-8||Z<-8||H>c+8||Z>h+8)continue;let K=Math.floor(Z)*c+Math.floor(H);if(H>=0&&Z>=0&&H<c&&Z<h&&O[2]>n[K]+.0012)continue;let V=X[nt+12]-X[nt],ut=X[nt+13]-X[nt+1],ft=X[nt+14]-X[nt+2],St=l(T[0]*V+T[4]*ut+T[8]*ft,T[1]*V+T[5]*ut+T[9]*ft,T[2]*V+T[6]*ut+T[10]*ft),vt=gt[0]*St[0]+gt[1]*St[1]+gt[2]*St[2],$=l(gt[0]-St[0]*vt+gt[0]*.25,gt[1]-St[1]*vt+gt[1]*.25,gt[2]-St[2]*vt+gt[2]*.25),yt=$[1]*.5+.5,bt=0,Et=0,Mt=0,Rt=0,F=Math.floor(H),lt=Math.floor(Z),st=H-F,mt=Z-lt;for(let Ot=0;Ot<2;Ot++)for(let Jt=0;Jt<2;Jt++){let te=F+Jt,ee=lt+Ot;if(te<0||ee<0||te>=c||ee>=h)continue;let ue=ee*c+te;if(r[ue]!==B||Math.abs(O[2]-n[ue])>.003)continue;let he=(Jt?st:1-st)*(Ot?mt:1-mt),ge=ue*4;bt+=a[ge]*he,Et+=a[ge+1]*he,Mt+=a[ge+2]*he,Rt+=he}let ct,ot,At;if(Rt>.02){let Ot=I.kind==="plush",Jt=J[0]?.direction||gt,te=$[0]*Jt[0]+$[1]*Jt[1]+$[2]*Jt[2],ee=u(1+(X[nt+19]-(Ot?1:.965))*(Ot?1.35:.42)+(te-.65)*(Ot?.14:.035),Ot?.72:.94,Ot?1.32:1.07);ct=bt/Rt*ee,ot=Et/Rt*ee,At=Mt/Rt*ee}else{let Ot=q[0]+tt[0]+(j[0]-tt[0])*yt,Jt=q[1]+tt[1]+(j[1]-tt[1])*yt,te=q[2]+tt[2]+(j[2]-tt[2])*yt;for(let ee=0;ee<J.length;ee++){let ue=J[ee],he=ue.direction,ge=$[0]*he[0]+$[1]*he[1]+$[2]*he[2],Pe=ee===0?pt(H,Z,O[2],ge,I.kind==="plush"?.48:.38):1,De=Math.max(0,(ge+.13)/1.13)*ue.intensity*Pe;Ot+=ue.color[0]*De,Jt+=ue.color[1]*De,te+=ue.color[2]*De}ct=P[0]*Ot*X[nt+15],ot=P[1]*Jt*X[nt+16],At=P[2]*te*X[nt+17],b.neutral?(f(ct,ot,At,k,dt),ct=dt[0],ot=dt[1],At=dt[2]):(ct=N[u(Math.round(ct*512),0,4096)],ot=N[u(Math.round(ot*512),0,4096)],At=N[u(Math.round(At*512),0,4096)])}let Lt=Math.max(1,Math.ceil(S*1.15)),Zt=Math.min(.9,X[nt+18]*it*Dt*2*I.sampleWeight)*Math.min(1,S/Lt)*I.opacity;wt++;for(let Ot=0;Ot<Lt;Ot++){let Jt=(Ot+.5)/Lt,te=Jt*S,ee=1;for(;ee<4&&Y[ee]<te;)ee++;let ue=(te-Y[ee-1])/Math.max(1e-6,Y[ee]-Y[ee-1]),he=(ee-1)*3,ge=ee*3,Pe=O[he]+(O[ge]-O[he])*ue,De=O[he+1]+(O[ge+1]-O[he+1])*ue,le=O[he+2]+(O[ge+2]-O[he+2])*ue,re=Math.floor(Pe),Re=Math.floor(De),Ce=Pe-re,Je=De-Re;for(let an=0;an<2;an++)for(let Tn=0;Tn<2;Tn++){let An=re+Tn,Rn=Re+an;if(An<0||An>=c||Rn<0||Rn>=h)continue;let yn=Rn*c+An;if(le>n[yn]+13e-6||le<-1||le>1)continue;let L=(Tn?Ce:1-Ce)*(an?Je:1-Je)*Zt*(1-Jt*.78),Q=1-L,at=yn*4;o[at]=ct*L+o[at]*Q,o[at+1]=ot*L+o[at+1]*Q,o[at+2]=At*L+o[at+2]*Q,o[at+3]=L+o[at+3]*Q}}}}for(let I of xt)_t(I,!0);for(let I=0;I<s.length;I+=4){let W=u(o[I+3],0,1),X=W>1e-5?1/W:0;s[I]=m[u(Math.round(o[I]*X*4096),0,4096)],s[I+1]=m[u(Math.round(o[I+1]*X*4096),0,4096)],s[I+2]=m[u(Math.round(o[I+2]*X*4096),0,4096)],s[I+3]=Math.round(W*255)}return{id:b.id,version:b.version,width:c,height:h,pixels:s.buffer,stats:{ms:performance.now()-R,triangles:Ut,pixels:Ft,fibers:wt,calls:Tt.length+xt.length}}}return{draw:A}}var Qa=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.minPreviewScale=.62,this.staticPreview=!1,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${wc.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=wc()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=is(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e){this._disposed||(this._pending={scene:t,camera:e,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let o of s.geometries)for(let a of["positions","normals","indices","uv","colors"])o[a]&&r.push(o[a].buffer);for(let o of s.textures)r.push(o.data.buffer);for(let o of s.fibers)r.push(o.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let o of this._waiters.splice(0))o.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let s=this.highQuality||Math.max(this._width,this._height)>=1e3,r=this.highQuality?1600:s?this.captureLimit:Math.round(this.previewLimit*(this.staticPreview?1:this._adaptive)),o=Math.min(1,r/Math.max(this.domElement.width,this.domElement.height)),a={id:n,version:this._version,width:Math.max(1,Math.round(this.domElement.width*o)),height:Math.max(1,Math.round(this.domElement.height*o)),viewProjection:Xr(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?is(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===Ds,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.022,.022,.022],sky:[.026,.026,.026],ground:[.02,.022,.025]},c=new Set,h=new Set,u=0;t.traverseVisible?.(d=>{d.isInstancedMesh&&d.name==="surface-fibers"&&(u+=d.count)});let l=s?Math.min(126e3,a.width*a.height*.4):Math.min(72e3,a.width*a.height*.26),f=Math.max(1,Math.ceil(u/Math.max(3e3,l))),m=d=>{if(!d)return null;let p=(d.uuid||d.id)+":"+(d.version||0);if(h.has(p))return p;let w=d.image||d.source?.data,g=w?.data,v=w?.width,E=w?.height;if(!g&&w?.getContext)try{g=w.getContext("2d")?.getImageData(0,0,v,E)?.data}catch{}return!g||!v||!E?null:(h.add(p),this._knownTextures.has(p)||a.textures.push({id:p,width:v,height:E,data:new Uint8Array(g),channels:Math.round(g.length/(v*E)),repeat:[d.repeat?.x??1,d.repeat?.y??1],offset:[d.offset?.x||0,d.offset?.y||0],wrapS:d.wrapS,wrapT:d.wrapT,flipY:!!d.flipY,srgb:d.colorSpace==="srgb"}),p)},x=(d,p,w="")=>{let g=d.geometry,v=g?.attributes?.position;if(!v||d.isSkinnedMesh)return;let E=g.uuid+":"+(v.version||0)+":"+(g.attributes.normal?.version||0);c.has(E)||(c.add(E),this._knownGeometry.has(E)||a.geometries.push({id:E,positions:Ka(v,3),normals:Ka(g.attributes.normal,3),uv:Ka(g.attributes.uv,2),colors:Ka(g.attributes.color,3),indices:g.index?new Uint32Array(g.index.array):null}));let A=Array.isArray(d.material)?g.groups:[{start:g.drawRange?.start||0,count:g.drawRange?.count??1/0,materialIndex:0}];for(let b=0;b<A.length;b++){let R=A[b],_=Array.isArray(d.material)?d.material[R.materialIndex]:d.material;!_||_.visible===!1||(_.opacity??1)<.002||a.meshes.push({id:d.uuid+w+":"+b,geometry:E,matrix:Array.from(p),start:R.start,count:R.count,order:d.renderOrder||0,castShadow:d.castShadow!==!1,receiveShadow:d.receiveShadow!==!1,material:{color:is(_.color),emissive:is(_.emissive,[0,0,0]).map(y=>y*(_.emissiveIntensity??1)),opacity:_.opacity??1,transparent:!!_.transparent,side:_.side??0,roughness:_.roughness??.75,metalness:_.metalness||0,depthTest:_.depthTest!==!1,depthWrite:_.depthWrite!==!1,alphaTest:_.alphaTest||0,unlit:!!(_.isMeshBasicMaterial||_.isShadowMaterial),shadowOnly:!!_.isShadowMaterial,shadowFade:_.userData?.shadowFade,toneMapped:_.toneMapped!==!1,map:m(_.map),bump:m(_.bumpMap),bumpScale:_.bumpScale||0,surfaceKind:d.userData.surfaceMaterial||_.name,vertexColors:!!_.vertexColors}})}},M=d=>{if(d.visible!==!1){if(d.isLight){let p=is(d.color),w=d.intensity??1;if(d.isHemisphereLight){let g=is(d.groundColor);for(let v=0;v<3;v++)a.sky[v]+=p[v]*w*.22,a.ground[v]+=g[v]*w*.2}else if(d.isAmbientLight)for(let g=0;g<3;g++)a.ambient[g]+=p[g]*w*.3;else if(d.isDirectionalLight||d.isPointLight||d.isSpotLight){if(!a.shadow&&d.isDirectionalLight&&d.castShadow&&this.shadowMap.enabled){d.shadow.updateMatrices(d);let _=Xr(d.shadow.camera.projectionMatrix.elements,d.shadow.camera.matrixWorldInverse.elements),y=Xr(e.matrixWorld.elements,e.projectionMatrixInverse.elements);a.shadow={viewProjection:_,screenMatrix:Xr(_,y),size:s?512:384,radius:Zg(d.shadow.radius||2.5,1,5)}}d.target?.updateMatrixWorld(!0);let g=d.matrixWorld.elements,v=d.target?.matrixWorld.elements,E=g[12]-(v?.[12]||0),A=g[13]-(v?.[13]||0),b=g[14]-(v?.[14]||0),R=Math.hypot(E,A,b)||1;a.lights.push({direction:[E/R,A/R,b/R],color:p,intensity:w/Math.PI})}}if(d.isMesh&&(!e.layers||e.layers.test(d.layers)))if(d.isInstancedMesh){if(d.name==="surface-fibers"&&this.renderFibers){d.geometry.computeBoundingBox();let p=d.geometry.boundingBox.max.y,w=d.instanceMatrix.array,g=d.instanceColor?.array,v=d.userData.fiberProfile||d.geometry.userData.fiberProfile||Array.from({length:5},(_,y)=>[0,p*y/4,0]),E=d.userData.fiberRadius||d.geometry.userData.fiberRadius||.001,A=new Float32Array(Math.ceil(d.count/f)*20),b=0;for(let _=0;_<d.count;_+=f){let y=_*16;for(let[D,U,N]of v)A[b++]=w[y]*D+w[y+4]*U+w[y+8]*N+w[y+12],A[b++]=w[y+1]*D+w[y+5]*U+w[y+9]*N+w[y+13],A[b++]=w[y+2]*D+w[y+6]*U+w[y+10]*N+w[y+14];A[b++]=g?g[_*3]:1,A[b++]=g?g[_*3+1]:1,A[b++]=g?g[_*3+2]:1,A[b++]=E*Math.hypot(w[y],w[y+1],w[y+2]),A[b++]=d.userData.fiberTones?.[_]??1}let R=d.userData.surfaceMaterial||d.parent?.userData.surfaceMaterial||d.parent?.material?.name;a.fibers.push({ownerId:d.parent?.uuid+":0",matrix:Array.from(d.matrixWorld.elements),segments:A,color:is(d.material.color),kind:R,sampleWeight:Math.min(2.3,Math.sqrt(f)),opacity:["fabric","knit"].includes(R)?.9:1})}else if(d.name!=="surface-fibers"&&d.count<=256)for(let p=0;p<d.count;p++)x(d,Xr(d.matrixWorld.elements,d.instanceMatrix.array.subarray(p*16,p*16+16)),":"+p)}else x(d,d.matrixWorld.elements);for(let p of d.children||[])M(p)}};return M(t),a.lights.length||a.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),a.lights=a.lights.slice(0,4),a.geometryIds=[...c],a.textureIds=[...h],this._knownGeometry=c,this._knownTextures=h,this.info.memory={geometries:c.size,textures:h.size},a}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(this.minPreviewScale,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=wc(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var Jg=new Set(["thinking","processing","waiting","blocked","done"]),Ec=Math.PI*2,$g=i=>(i=we.clamp(i,0,1),i*i*(3-2*i));function zu(i,t){if(!Jg.has(t.action))return null;let e=new Se;e.name="activity";let n=i.root.userData.anatomy==="blob",s=t.motionStyle==="auto"||!t.motionStyle?t.action==="thinking"?"dots":"liquid":t.motionStyle,r=i.surfaces.find(d=>d.name.startsWith("blob-")),o=new Set,a=[],c=[],h=new Gt(t.colors.body);h.getHSL({}).l>.84&&h.lerp(new Gt("#72848e"),.22);let u=new un({color:h,roughness:.43,metalness:.04});u.name="activity-rubber",o.add(u);let l=new Bn(1,20,14);o.add(l);let f=l.clone();o.add(f);let m=f.attributes.position;for(let d=0;d<m.count;d++){let p=m.getY(d),w=.45+.55*$g((p+1)/2);m.setXYZ(d,m.getX(d)*w,p<0?p*2.25:p,m.getZ(d)*w)}if(m.needsUpdate=!0,f.computeVertexNormals(),n&&r&&s==="dots")for(let d of[-1,1]){let p=new fe(r.geometry,r.material);p.name="thinking-companion",p.scale.copy(r.scale);let w=new Se;w.visible=!1,w.add(p),e.add(w),c.push({wrapper:w,side:d})}for(let d=0;d<30;d++){let p=new fe(s==="liquid"&&d%10===0?f:l,u);p.castShadow=!1,p.visible=!1,e.add(p),a.push(p)}let x=i.root.userData,M=i.height||2.1;return{group:e,bounds:new Ue(new z(-1.34,Math.min(0,M*.5-.82),-.58),new z(1.34,s==="dots"&&!n?M+.4:Math.max(M,M*.5+.82),.58)),tick(d){e.visible=!0;let p=t.action,w=p==="thinking"||p==="processing",g=d*(t.motionSpeed||1),v=M*.5;for(let E of a)E.visible=!1;for(let E of c)E.wrapper.visible=!1;if(w&&n&&s==="dots"&&r){let E=Math.sin(g*3.4),A=.3;i.root.scale.copy(x.restScale).multiplyScalar(A),i.root.position.y=v-M*A*.5+E*.1;for(let{wrapper:b,side:R}of c)b.visible=!0,b.scale.setScalar(A),b.position.set(R*.86,v+Math.sin(g*3.4-R*.72)*.1,0),b.rotation.z=Math.sin(g*2.1-R)*.05}else if(w&&s==="dots")for(let E=0;E<3;E++){let A=a[E];A.visible=!0,A.position.set((E-1)*.28,M+.2+Math.sin(g*3.4-E*.72)*.045,.1),A.scale.setScalar(.065)}else if(w){let E=s==="orbit",A=E?12:30;if(n){let R=E?.57:.47;i.root.scale.copy(x.restScale).multiplyScalar(R),i.root.position.y=v-M*R*.5,i.root.rotation.z=Math.sin(g*1.7)*.035}let b=n?1.03:.94;for(let R=0;R<A;R++){let _=a[R],y=R%10,D=Math.floor(R/10),U=g*(E?1.3:1.85)+(E?R/A*Ec:D/3*Ec-y*.072),N=b*(E?1:.98+.045*Math.sin(g*1.2+D*1.8)),k=E?.052:y===0?.093:.052*Math.pow(1-y/10,1.35);_.visible=!0,_.position.set(Math.cos(U)*N,v+Math.sin(U)*N*(E?.42:.61),Math.sin(U)*.44),_.scale.set(k,k*(!E&&y===0?1.18:1),k*.86),_.rotation.z=U}}else if(p==="waiting"){i.root.rotation.z+=Math.sin(g*.9)*.065;for(let E of i.eyeGroups)E.scale.y=.52}else if(p==="blocked"){let E=g%3.4;i.root.rotation.z+=E<.48?Math.sin(E*25)*.055*(1-E/.48):0;for(let A of i.eyeGroups)A.scale.y=1.1}else if(p==="done"){let E=g%3.8,A=E<.8?Math.sin(E/.8*Math.PI):0;i.root.position.y+=Math.max(0,A)*.18,i.root.rotation.z+=A*.04;for(let b=0;b<6;b++){let R=a[b],_=(E-.2)/.75;if(_<0||_>1)continue;let y=b/6*Ec;R.visible=!0,R.position.set(Math.cos(y)*(.55+_*.48),M*.7+Math.sin(y)*(.3+_*.3),.2),R.scale.setScalar(.038*Math.sin(_*Math.PI))}}},dispose(){e.removeFromParent();for(let d of o)d.dispose()}}}var gy=new z(0,1,0),ja=null,Tc=i=>i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0,Vu=(i,t,e)=>Math.min(e,Math.max(t,i));function Gu(i){let t={...i};for(let e of["name","notes","reference","presetId","version","rendererVersion","palette","output","eyeColorManual","provenance"])delete t[e];return JSON.stringify(t)}function tl(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function Kg(i,t){let e=t.shape==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,o]of i.arms.entries())o.rotation.z=(r?1:-1)*.62,o.rotation.x=-.62;for(let[r,o]of i.legs.entries())o.position.y+=.1,o.position.z+=.1,o.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.15,i.head.position.z+=.025,t.action==="work"&&(i.head.rotation.y=-.08)),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new Ue().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var qr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(ja!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(ja="webgl",this.renderer=new Ha({canvas:t,context:s,...n})):(ja="software",this.renderer=new Qa(t)),t.dataset.renderMode=ja,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:800,this.renderer.minPreviewScale=e?.62:.86),this.renderer.outputColorSpace=cn,this.renderer.toneMapping=Ds,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Wo,this.scene=new ki,this.camera=new Yi(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let f=new Hs(this.renderer),m=new Ga;this.environment=f.fromScene(m,.055),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.42,m.dispose(),f.dispose()}this.scene.add(new Fr("#ffffff","#dce2ed",1.15));let r=new wi("#fffdfb",2.3);r.position.set(-3.8,5.2,4.4),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.01,r.shadow.radius=5,this.scene.add(r);let o=new wi("#eef3ff",.62);o.position.set(4,2.8,2.4),this.scene.add(o);let a=new wi("#f4f7ff",.24);a.position.set(0,-2,4),this.scene.add(a);let c=new wi("#ffffff",.8);c.position.set(2,4.2,-3.6),this.scene.add(c),this.floor=new fe(new Mi(200,200),new Dr({color:"#68718a",opacity:.11})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-.016,this.floor.receiveShadow=!0,this.scene.add(this.floor),this.shadowFade={value:new me(.5,.5,.008,.006)},this.floor.material.onBeforeCompile=f=>{f.uniforms.studioShadowFade=this.shadowFade,f.vertexShader=`varying vec2 studioShadowUV;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
studioShadowUV=uv;`),f.fragmentShader=`varying vec2 studioShadowUV;
uniform vec4 studioShadowFade;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <tonemapping_fragment>",`gl_FragColor.a *= 1.0-smoothstep(0.28,1.0,length((studioShadowUV-studioShadowFade.xy)/studioShadowFade.zw));
#include <tonemapping_fragment>`)},this.floor.material.customProgramCacheKey=()=>"studio-contact-fade-v1";let h=128,u=new Uint8Array(h*h*4);for(let f=0;f<h;f++)for(let m=0;m<h;m++){let x=((m-h/2)/(h/2))**2+((f-h/2)/(h/2))**2,M=(f*h+m)*4;u[M]=88,u[M+1]=103,u[M+2]=125,u[M+3]=Math.round(Math.exp(-x*4.2)*43)}let l=new vi(u,h,h);l.needsUpdate=!0,this.contact=new fe(new Mi(3.3,2.2),new zi({map:l,transparent:!0,depthWrite:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=.002,this.scene.add(this.contact),this.turn=new Se,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.activity?.dispose(),this.activity=null,this.avatar&&(this.turn.remove(this.avatar.root),tl(this.avatar.root)),this.config=structuredClone(t),this.avatar=Lu(t),this.props=Bu(this.avatar,t),Kg(this.avatar,t),Cu(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.activity=zu(this.avatar,t),this.activity&&this.turn.add(this.activity.group),this.assemblyParts=[this.avatar.torso,this.avatar.head,...this.avatar.legs,...this.avatar.arms,...this.props.parts].filter((s,r,o)=>s&&o.indexOf(s)===r).map((s,r)=>({object:s,position:s.position.clone(),scale:s.scale.clone(),delay:Math.min(.38,r*.048)})),this.turn.rotation.y=t.camera==="side"?Math.PI*.43:t.camera==="threeQuarter"?.33:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new Ue().setFromObject(this.turn);this.center=e.getCenter(new z),this.bounds=e.getSize(new z),this.floor.visible=this.contact.visible=t.background!=="transparent",this.scene.background=t.background==="solid"?new Gt(t.colors.background):t.background==="studio"?new Gt("#f8f9fc"):null,this.contact.scale.set(Math.max(.58,this.bounds.x/2.5),Math.max(.55,this.bounds.z/1.9),1),this.contact.position.x=this.center.x;let n=[.5+this.center.x/200,.5-this.center.z/200,Math.max(.75,this.bounds.x*.72)/200,Math.max(.7,this.bounds.z*.8)/200];this.shadowFade.value.fromArray(n),this.floor.material.userData.shadowFade=n,this.fit(this.frame.width,this.frame.height),this.render(Tc(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=new Ue,o=this.avatar.root.userData;this.avatar.root.position.y=o.restY,this.avatar.root.scale.copy(o.restScale),this.avatar.root.rotation.copy(o.restRotation);for(let M of this.assemblyParts||[])M.object.position.copy(M.position),M.object.scale.copy(M.scale);if(this.turn.updateMatrixWorld(!0),this.avatar.root.traverseVisible(M=>{!M.isMesh||M.isInstancedMesh||(M.geometry.computeBoundingBox(),r.union(M.geometry.boundingBox.clone().applyMatrix4(M.matrixWorld)))}),this.activity&&r.union(this.activity.bounds.clone().applyMatrix4(this.turn.matrixWorld)),r.isEmpty())return;let a=!!this.props?.prop&&this.props.prop!=="none";if(n.framing!=="full"&&!a&&n.action!=="sleep"&&!this.activity){let M=r.getSize(new z);(n.shape==="human"||this.avatar.root.userData.anatomy==="animal")&&(r.min.y=r.max.y-M.y*(n.framing==="portrait"?.55:.79))}let c=r.getCenter(new z),h=n.action==="work"?1.85:n.action==="read"?1.3:.52;this.camera.position.copy(c).add(new z(0,h,8)),this.camera.lookAt(c),this.camera.updateMatrixWorld(!0);let u=new Ue;for(let M of[r.min.x,r.max.x])for(let d of[r.min.y,r.max.y])for(let p of[r.min.z,r.max.z])u.expandByPoint(new z(M,d,p).applyMatrix4(this.camera.matrixWorldInverse));let l=u.getSize(new z),f=Math.max(l.y,l.x/s)*(this.activity?1.46:1.4)*(72/n.scale),m=(u.min.x+u.max.x)/2,x=(u.min.y+u.max.y)/2;this.camera.left=m-f*s/2,this.camera.right=m+f*s/2,this.camera.top=x+f/2,this.camera.bottom=x-f/2,this.camera.updateProjectionMatrix()}render(t=0,e=1){this.lastTime=t;for(let c of this.assemblyParts||[])c.object.position.copy(c.position),c.object.scale.copy(c.scale);if(!this.avatar)return;let n=this.avatar,s=this.config,r=n.root.userData;if(n.root.position.y=r.restY,n.root.scale.copy(r.restScale),n.root.rotation.copy(r.restRotation),s.action==="bounce"){let c=Math.max(0,Math.sin(t*3.1));n.root.position.y+=c*.24}else{let c=Math.sin(t*(s.action==="sleep"?1.3:1.8));n.root.scale.y=r.restScale.y*(1+c*.008),s.action==="listen"&&(n.root.rotation.z+=Math.sin(t*2)*.035),(s.expression==="curious"||s.expression==="skeptical")&&(n.root.rotation.z+=.055),s.expression==="shy"&&(n.root.rotation.y+=.11),s.expression==="sleepy"&&(n.root.rotation.z-=.04),s.expression==="expectant"&&(n.root.rotation.x+=.045),s.expression==="panicked"&&(n.root.rotation.x-=.08),s.expression==="laughing"&&(n.root.rotation.x-=.06)}let o=t%(s.action==="blink"?2.3:5.5),a=Math.abs(o-.17)<.16?Math.max(.07,Math.abs(o-.17)/.16):1;for(let c of n.eyeGroups)c.scale.y=s.expression==="closed"||s.expression==="wink"||["delighted","laughing"].includes(s.expression)||s.action==="sleep"||s.action==="work"?1:a;if(n.tail&&s.action!=="sleep"&&(n.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.activity?.tick(t),e<1)for(let[c,h]of this.assemblyParts.entries()){let u=Vu((e-h.delay)/(1-h.delay),0,1),l=1-Math.pow(1-u,3),f=Math.sin(u*Math.PI)*.045;h.object.scale.multiplyScalar(Math.max(.001,l+f)),h.object.position.x+=(c%2?1:-1)*(1-l)*.8,h.object.position.y+=(1-l)*(.28+c%3*.12)}this.renderer.render(this.scene,this.camera)}dispose(){this.activity?.dispose(),this.avatar&&tl(this.avatar.root),tl(this.floor),tl(this.contact),this.environment?.dispose(),this.scene.traverse(t=>{t.isLight&&t.shadow?.dispose()}),this.renderer.dispose()}},ku=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.world=new qr(this.canvas),this.elapsed=0,this.lastTick=performance.now(),this.assemblyStart=null,this.playing=!matchMedia("(prefers-reduced-motion: reduce)").matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{this.raf=requestAnimationFrame(this.loop);let r=Math.min(.15,(s-this.lastTick)/1e3);if(this.lastTick=s,!this.visible||document.hidden||this.capturing)return;this.playing&&(this.elapsed+=r);let o=this.assemblyStart!==null,a=o?Vu((s-this.assemblyStart)/920,0,1):1;!this.playing&&!o||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?95:25)||(this.lastFrame=s,this.world.render(this.elapsed,a),this.canvas.dataset.animationTime=this.elapsed.toFixed(3),a>=1&&o&&(this.assemblyStart=null))},this.raf=requestAnimationFrame(this.loop)}update(t){let e=Gu(t);this.updateKey!==e&&(this.updateKey=e,this.pending=t,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(()=>{this.updateFrame=0;try{let n=this.world.config?.action!==this.pending.action;this.world.update(this.pending),n&&(this.elapsed=Tc(this.pending)),this.revision++,this.canvas.dataset.revision=String(this.revision),this.canvas.dataset.shape=this.pending.shape,this.canvas.dataset.material=this.pending.material,this.canvas.dataset.action=this.pending.action,this.resize(),this.wantsAssembly&&(this.wantsAssembly=!1,this.assemblyStart=performance.now()),this.onReady()}catch(n){console.error("Character preview:",n),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,o=Math.max(1,s.width),a=o/r;a>s.height&&(a=s.height,o=a*r),this.canvas.style.width=o+"px",this.canvas.style.height=a+"px",this.world.fit(Math.round(o),Math.round(a)),this.world.render(this.elapsed)}setPlaying(t){this.playing=t,this.lastTick=performance.now(),this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!t,this.world.renderer.previewLimit=t?800:960),this.world.config&&this.world.render(this.elapsed)}assemble(){matchMedia("(prefers-reduced-motion: reduce)").matches||(this.wantsAssembly=!0,this.updateFrame||(this.wantsAssembly=!1,this.assemblyStart=performance.now()))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=this.elapsed,r=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let o;this.capturing=!0;try{if(!n)throw Error("\u89D2\u8272\u5C1A\u672A\u51C6\u5907\u597D");let[a,c]=n.aspect.split(":").map(Number),h=a>=c?t:Math.round(t*a/c),u=c>=a?t:Math.round(t*c/a),l=document.createElement("canvas");o=new qr(l),o.renderer.highQuality=!0,o.renderer.captureLimit=t,o.renderer.setPixelRatio(1),o.frame={width:h,height:u},o.update(n),o.render(s),await o.renderer.flush?.();let f=await new Promise(m=>l.toBlob(m,"image/png"));if(!f)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return f}finally{o?.dispose(),this.capturing=!1}});return this.captureQueue=r,r}dispose(){cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove()}},Ri,Hu=Promise.resolve(),hi=new Map;function xy(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=Gu(e)+t;if(hi.has(n))return Promise.resolve(hi.get(n));let s=Hu.then(async()=>{if(hi.has(n))return hi.get(n);Ri||(Ri=new qr(document.createElement("canvas"),{thumbnail:!0})),Ri.frame={width:t,height:t},Ri.update(e),Ri.fit(t,t),Ri.render(Tc(e)),await Ri.renderer.flush?.();let r=await new Promise(a=>Ri.renderer.domElement.toBlob(a,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let o=URL.createObjectURL(r);if(hi.set(n,o),hi.size>200){let a=hi.keys().next().value;URL.revokeObjectURL(hi.get(a)),hi.delete(a)}return o});return Hu=s.catch(()=>{}),s}export{ku as CharacterPreview,xy as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
