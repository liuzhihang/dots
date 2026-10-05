var th=0,Bc=1,eh=2;var zc=1,Xo=2,Jn=3,ri=0,tn=1,Ke=2,ci=0,Li=1,kc=2,Hc=3,Vc=4,nh=5,yi=100,ih=101,sh=102,rh=103,oh=104,ah=200,ch=201,lh=202,hh=203,_o=204,yo=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=211,xh=212,_h=213,yh=214,Yo=0,qo=1,Zo=2,Ui=3,Jo=4,$o=5,Ko=6,Qo=7,jo=0,vh=1,Mh=2,li=0,bh=1,Sh=2,wh=3,Eh=4,Th=5,Ah=6,Ds=7;var Gc=300,Xi=301,Yi=302,ta=303,ea=304,Or=306,ys=1e3,_i=1001,vo=1002,gn=1003,Rh=1004;var Br=1005;var Mn=1006,na=1007;var $n=1008;var Bn=1009,Wc=1010,Xc=1011,Ls=1012,ia=1013,wi=1014,zn=1015,Us=1016,sa=1017,ra=1018,Fs=1020,Yc=35902,qc=35899,Zc=1021,Jc=1022,_n=1023,vs=1026,Ns=1027,oa=1028,aa=1029,$c=1030,ca=1031;var la=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37808,_a=37809,ya=37810,va=37811,Ma=37812,ba=37813,Sa=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,Pa=36492,Da=36494,La=36495,Ua=36283,Fa=36284,Na=36285,Oa=36286;var ar=2300,Mo=2301,xo=2302,Tc=2400,Ac=2401,Rc=2402;var Ch=3200,Ih=3201;var Ba=0,Ph=1,hi="",ln="srgb",Fi="srgb-linear",cr="linear",we="srgb";var Di=7680;var Cc=519,Dh=512,Lh=513,Uh=514,Kc=515,Fh=516,Nh=517,Oh=518,Bh=519,Ic=35044,Os=35048;var Qc="300 es",Un=2e3,lr=2001;var oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=1234567,ir=Math.PI/180,Ms=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function Gu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wu(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Xu(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Yu(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ju(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $u(i,t){return i+Math.random()*(t-i)}function Ku(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(El=i);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ju(i){return i*ir}function td(i){return i*Ms}function ed(i){return(i&i-1)===0&&i!==0}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),c=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*p,a*h);break;case"YZY":i.set(l*p,a*u,l*d,a*h);break;case"ZXZ":i.set(l*d,l*p,a*u,a*h);break;case"XZX":i.set(a*u,l*x,l*c,a*h);break;case"YXY":i.set(l*c,a*u,l*x,a*h);break;case"ZYZ":i.set(l*x,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var be={DEG2RAD:ir,RAD2DEG:Ms,generateUUID:qi,clamp:me,euclideanModulo:jc,mapLinear:Gu,inverseLerp:Wu,lerp:sr,damp:Xu,pingpong:Yu,smoothstep:qu,smootherstep:Zu,randInt:Ju,randFloat:$u,randFloatSpread:Ku,seededRandom:Qu,degToRad:ju,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:cn,denormalize:xs},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3],p=r[o+0],c=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=c,t[e+2]=x,t[e+3]=M;return}if(d!==M||l!==p||h!==c||u!==x){let g=1-a,f=l*p+h*c+u*x+d*M,w=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let T=Math.sqrt(v),A=Math.atan2(T,f*w);g=Math.sin(g*A)/T,a=Math.sin(a*A)/T}let S=a*w;if(l=l*g+p*S,h=h*g+c*S,u=u*g+x*S,d=d*g+M*S,g===1-a){let T=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=T,h*=T,u*=T,d*=T}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o],p=r[o+1],c=r[o+2],x=r[o+3];return t[e]=a*x+u*d+l*c-h*p,t[e+1]=l*x+u*p+h*d-a*c,t[e+2]=h*x+u*c+a*p-l*d,t[e+3]=u*x-a*d-l*p-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),d=a(r/2),p=l(n/2),c=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*u*d+h*c*x,this._y=h*c*d-p*u*x,this._z=h*u*x+p*c*d,this._w=h*u*d-p*c*x;break;case"YXZ":this._x=p*u*d+h*c*x,this._y=h*c*d-p*u*x,this._z=h*u*x-p*c*d,this._w=h*u*d+p*c*x;break;case"ZXY":this._x=p*u*d-h*c*x,this._y=h*c*d+p*u*x,this._z=h*u*x+p*c*d,this._w=h*u*d-p*c*x;break;case"ZYX":this._x=p*u*d-h*c*x,this._y=h*c*d+p*u*x,this._z=h*u*x-p*c*d,this._w=h*u*d+p*c*x;break;case"YZX":this._x=p*u*d+h*c*x,this._y=h*c*d+p*u*x,this._z=h*u*x-p*c*d,this._w=h*u*d-p*c*x;break;case"XZY":this._x=p*u*d-h*c*x,this._y=h*c*d-p*u*x,this._z=h*u*x+p*c*d,this._w=h*u*d+p*c*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],d=e[10],p=n+a+d;if(p>0){let c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(n>a&&n>d){let c=2*Math.sqrt(1+n-a-d);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>d){let c=2*Math.sqrt(1+a-n-d);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+d-n-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),d=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*h+o*d-a*u,this.y=n+l*u+a*h-r*d,this.z=s+l*d+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new B,Tl=new je,le=class i{constructor(t,e,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],d=n[7],p=n[2],c=n[5],x=n[8],M=s[0],g=s[3],f=s[6],w=s[1],v=s[4],S=s[7],T=s[2],A=s[5],b=s[8];return r[0]=o*M+a*w+l*T,r[3]=o*g+a*v+l*A,r[6]=o*f+a*S+l*b,r[1]=h*M+u*w+d*T,r[4]=h*g+u*v+d*A,r[7]=h*f+u*S+d*b,r[2]=p*M+c*w+x*T,r[5]=p*g+c*v+x*A,r[8]=p*f+c*S+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],d=u*o-a*h,p=a*l-u*r,c=h*r-o*l,x=e*d+n*p+s*c;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*h-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=p*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(n*l-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ec=new le;function tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zh(){let i=hr("canvas");return i.style.display="block",i}var Al={};function bs(i){i in Al||(Al[i]=!0,console.warn(i))}function kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rl=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){let i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var _e=rd();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,bo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=hr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},od=0,Ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ad=0,ic=new B,xn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=Mn,o=$n,a=_n,l=Bn,h=i.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=qi(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Gc;xn.DEFAULT_ANISOTROPY=1;var Se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],u=l[4],d=l[8],p=l[1],c=l[5],x=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+M)<.1&&Math.abs(x+g)<.1&&Math.abs(h+c+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,S=(c+1)/2,T=(f+1)/2,A=(u+p)/4,b=(d+M)/4,E=(x+g)/4;return v>S&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=b/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=E/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=E/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-x)*(g-x)+(d-M)*(d-M)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(d-M)/w,this.z=(p-u)/w,this.w=Math.acos((h+c+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new xn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends So{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Le=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Jr.subVectors(this.max,Js),rs.subVectors(t.a,Js),os.subVectors(t.b,Js),as.subVectors(t.c,Js),di.subVectors(os,rs),fi.subVectors(as,os),Ri.subVectors(rs,as);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,di.z,0,-di.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!sc(e,rs,os,as,Jr)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,rs,os,as,Jr))?!1:($r.crossVectors(di,fi),e=[$r.x,$r.y,$r.z],sc(e,rs,os,as,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Zr=new Le,rs=new B,os=new B,as=new B,di=new B,fi=new B,Ri=new B,Js=new B,Jr=new B,$r=new B,Ci=new B;function sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),h=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var cd=new Le,$s=new B,rc=new B,qn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(rc)),this.expandByPoint($s.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ti=new B,oc=new B,Kr=new B,pi=new B,ac=new B,Qr=new B,cc=new B,dr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=pi.dot(this.direction),l=-pi.dot(Kr),h=pi.lengthSq(),u=Math.abs(1-o*o),d,p,c,x;if(u>0)if(d=o*l-a,p=o*a-l,x=r*u,d>=0)if(p>=-x)if(p<=x){let M=1/u;d*=M,p*=M,c=d*(d+o*p+2*a)+p*(o*d+p+2*l)+h}else p=r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*l)+h;else p=-r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*l)+h;else p<=-x?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),c=-d*d+p*(p+2*l)+h):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),c=p*(p+2*l)+h):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),c=-d*d+p*(p+2*l)+h);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),c=-d*d+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oc).addScaledVector(Kr,p),c}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ac.subVectors(e,t),Qr.subVectors(n,t),cc.crossVectors(ac,Qr);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(Qr.crossVectors(pi,Qr));if(l<0)return null;let h=a*this.direction.dot(ac.cross(pi));if(h<0||l+h>o)return null;let u=-a*pi.dot(cc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class i{constructor(t,e,n,s,r,o,a,l,h,u,d,p,c,x,M,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,u,d,p,c,x,M,g)}set(t,e,n,s,r,o,a,l,h,u,d,p,c,x,M,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=h,f[6]=u,f[10]=d,f[14]=p,f[3]=c,f[7]=x,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*u,c=o*d,x=a*u,M=a*d;e[0]=l*u,e[4]=-l*d,e[8]=h,e[1]=c+x*h,e[5]=p-M*h,e[9]=-a*l,e[2]=M-p*h,e[6]=x+c*h,e[10]=o*l}else if(t.order==="YXZ"){let p=l*u,c=l*d,x=h*u,M=h*d;e[0]=p+M*a,e[4]=x*a-c,e[8]=o*h,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=c*a-x,e[6]=M+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*u,c=l*d,x=h*u,M=h*d;e[0]=p-M*a,e[4]=-o*d,e[8]=x+c*a,e[1]=c+x*a,e[5]=o*u,e[9]=M-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*u,c=o*d,x=a*u,M=a*d;e[0]=l*u,e[4]=x*h-c,e[8]=p*h+M,e[1]=l*d,e[5]=M*h+p,e[9]=c*h-x,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,c=o*h,x=a*l,M=a*h;e[0]=l*u,e[4]=M-p*d,e[8]=x*d+c,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*d+x,e[10]=p-M*d}else if(t.order==="XZY"){let p=o*l,c=o*h,x=a*l,M=a*h;e[0]=l*u,e[4]=-d,e[8]=h*u,e[1]=p*d+M,e[5]=o*u,e[9]=c*d-x,e[2]=x*d-c,e[6]=a*u,e[10]=M*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,hd)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),mi.crossVectors(n,yn),mi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),mi.crossVectors(n,yn)),mi.normalize(),jr.crossVectors(yn,mi),s[0]=mi.x,s[4]=jr.x,s[8]=yn.x,s[1]=mi.y,s[5]=jr.y,s[9]=yn.y,s[2]=mi.z,s[6]=jr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],d=n[5],p=n[9],c=n[13],x=n[2],M=n[6],g=n[10],f=n[14],w=n[3],v=n[7],S=n[11],T=n[15],A=s[0],b=s[4],E=s[8],y=s[12],_=s[1],D=s[5],L=s[9],U=s[13],V=s[2],$=s[6],G=s[10],it=s[14],Y=s[3],ht=s[7],At=s[11],gt=s[15];return r[0]=o*A+a*_+l*V+h*Y,r[4]=o*b+a*D+l*$+h*ht,r[8]=o*E+a*L+l*G+h*At,r[12]=o*y+a*U+l*it+h*gt,r[1]=u*A+d*_+p*V+c*Y,r[5]=u*b+d*D+p*$+c*ht,r[9]=u*E+d*L+p*G+c*At,r[13]=u*y+d*U+p*it+c*gt,r[2]=x*A+M*_+g*V+f*Y,r[6]=x*b+M*D+g*$+f*ht,r[10]=x*E+M*L+g*G+f*At,r[14]=x*y+M*U+g*it+f*gt,r[3]=w*A+v*_+S*V+T*Y,r[7]=w*b+v*D+S*$+T*ht,r[11]=w*E+v*L+S*G+T*At,r[15]=w*y+v*U+S*it+T*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],d=t[6],p=t[10],c=t[14],x=t[3],M=t[7],g=t[11],f=t[15];return x*(+r*l*d-s*h*d-r*a*p+n*h*p+s*a*c-n*l*c)+M*(+e*l*c-e*h*p+r*o*p-s*o*c+s*h*u-r*l*u)+g*(+e*h*d-e*a*c-r*o*d+n*o*c+r*a*u-n*h*u)+f*(-s*a*u-e*l*d+e*a*p+s*o*d-n*o*p+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],d=t[9],p=t[10],c=t[11],x=t[12],M=t[13],g=t[14],f=t[15],w=d*g*h-M*p*h+M*l*c-a*g*c-d*l*f+a*p*f,v=x*p*h-u*g*h-x*l*c+o*g*c+u*l*f-o*p*f,S=u*M*h-x*d*h+x*a*c-o*M*c-u*a*f+o*d*f,T=x*d*l-u*M*l-x*a*p+o*M*p+u*a*g-o*d*g,A=e*w+n*v+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=w*b,t[1]=(M*p*r-d*g*r-M*s*c+n*g*c+d*s*f-n*p*f)*b,t[2]=(a*g*r-M*l*r+M*s*h-n*g*h-a*s*f+n*l*f)*b,t[3]=(d*l*r-a*p*r-d*s*h+n*p*h+a*s*c-n*l*c)*b,t[4]=v*b,t[5]=(u*g*r-x*p*r+x*s*c-e*g*c-u*s*f+e*p*f)*b,t[6]=(x*l*r-o*g*r-x*s*h+e*g*h+o*s*f-e*l*f)*b,t[7]=(o*p*r-u*l*r+u*s*h-e*p*h-o*s*c+e*l*c)*b,t[8]=S*b,t[9]=(x*d*r-u*M*r-x*n*c+e*M*c+u*n*f-e*d*f)*b,t[10]=(o*M*r-x*a*r+x*n*h-e*M*h-o*n*f+e*a*f)*b,t[11]=(u*a*r-o*d*r-u*n*h+e*d*h+o*n*c-e*a*c)*b,t[12]=T*b,t[13]=(u*M*s-x*d*s+x*n*p-e*M*p-u*n*g+e*d*g)*b,t[14]=(x*a*s-o*M*s-x*n*l+e*M*l+o*n*g-e*a*g)*b,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*p+e*a*p)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,d=a+a,p=r*h,c=r*u,x=r*d,M=o*u,g=o*d,f=a*d,w=l*h,v=l*u,S=l*d,T=n.x,A=n.y,b=n.z;return s[0]=(1-(M+f))*T,s[1]=(c+S)*T,s[2]=(x-v)*T,s[3]=0,s[4]=(c-S)*A,s[5]=(1-(p+f))*A,s[6]=(g+w)*A,s[7]=0,s[8]=(x+v)*b,s[9]=(g-w)*b,s[10]=(1-(p+M))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let h=1/r,u=1/o,d=1/a;return Dn.elements[0]*=h,Dn.elements[1]*=h,Dn.elements[2]*=h,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){let h=this.elements,u=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),c=(n+s)/(n-s),x,M;if(l)x=r/(o-r),M=o*r/(o-r);else if(a===Un)x=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===lr)x=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=d,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){let h=this.elements,u=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),c=-(n+s)/(n-s),x,M;if(l)x=1/(o-r),M=o/(o-r);else if(a===Un)x=-2/(o-r),M=-(o+r)/(o-r);else if(a===lr)x=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=d,h[9]=0,h[13]=c,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new B,Dn=new Ee,ld=new B(0,0,0),hd=new B(1,1,1),mi=new B,jr=new B,yn=new B,Il=new Ee,Pl=new je,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],d=s[2],p=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ud=0,Dl=new B,ls=new je,ei=new Ee,to=new B,Ks=new B,dd=new B,fd=new je,Ll=new B(1,0,0),Ul=new B(0,1,0),Fl=new B(0,0,1),Nl={type:"added"},pd={type:"removed"},hs={type:"childadded",child:null},lc={type:"childremoved",child:null},Xe=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new An,n=new je,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new le}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ks,to,this.up):ei.lookAt(to,Ks,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ei),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),c=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),c.length>0&&(n.animations=c),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new B(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new B,ni=new B,hc=new B,ii=new B,us=new B,ds=new B,Ol=new B,uc=new B,dc=new B,fc=new B,pc=new Se,mc=new Se,gc=new Se,Wn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ni.subVectors(n,e),hc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(hc),h=ni.dot(ni),u=ni.dot(hc),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,c=(h*l-a*u)*p,x=(o*u-a*l)*p;return r.set(1-c-x,x,c)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),ds.subVectors(r,n),uc.subVectors(t,n);let l=us.dot(uc),h=ds.dot(uc);if(l<=0&&h<=0)return e.copy(n);dc.subVectors(t,s);let u=us.dot(dc),d=ds.dot(dc);if(u>=0&&d<=u)return e.copy(s);let p=l*d-u*h;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(us,o);fc.subVectors(t,r);let c=us.dot(fc),x=ds.dot(fc);if(x>=0&&c<=x)return e.copy(r);let M=c*h-l*x;if(M<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(ds,a);let g=u*x-c*d;if(g<=0&&d-u>=0&&c-x>=0)return Ol.subVectors(r,s),a=(d-u)/(d-u+(c-x)),e.copy(s).addScaledVector(Ol,a);let f=1/(g+M+p);return o=M*f,a=p*f,e.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=jc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return _e.workingToColorSpace(rn.copy(this),t),Math.round(me(rn.r*255,0,255))*65536+Math.round(me(rn.g*255,0,255))*256+Math.round(me(rn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=ln){_e.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(eo);let n=sr(gi.h,eo.h,e),s=sr(gi.s,eo.s,e),r=sr(gi.l,eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Qt;Qt.NAMES=Hh;var md=0,ai=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Li,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=yo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ni=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new B,no=new It,gd=0,Ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ic&&(t.usage=this.usage),t}};var fr=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},xd=0,Tn=new Ee,_c=new Xe,fs=new B,vn=new Le,Qs=new Le,$e=new B,Me=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tl(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(vn.min,Qs.min),vn.expandByPoint($e),$e.addVectors(vn.max,Qs.max),vn.expandByPoint($e)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)$e.fromBufferAttribute(a,h),l&&(fs.fromBufferAttribute(t,h),$e.add(fs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new B,l[E]=new B;let h=new B,u=new B,d=new B,p=new It,c=new It,x=new It,M=new B,g=new B;function f(E,y,_){h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,_),p.fromBufferAttribute(r,E),c.fromBufferAttribute(r,y),x.fromBufferAttribute(r,_),u.sub(h),d.sub(h),c.sub(p),x.sub(p);let D=1/(c.x*x.y-x.x*c.y);isFinite(D)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(d,-c.y).multiplyScalar(D),g.copy(d).multiplyScalar(c.x).addScaledVector(u,-x.x).multiplyScalar(D),a[E].add(M),a[y].add(M),a[_].add(M),l[E].add(g),l[y].add(g),l[_].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let E=0,y=w.length;E<y;++E){let _=w[E],D=_.start,L=_.count;for(let U=D,V=D+L;U<V;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let v=new B,S=new B,T=new B,A=new B;function b(E){T.fromBufferAttribute(s,E),A.copy(T);let y=a[E];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),S.crossVectors(A,y);let D=S.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,D)}for(let E=0,y=w.length;E<y;++E){let _=w[E],D=_.start,L=_.count;for(let U=D,V=D+L;U<V;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,c=n.count;p<c;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,h=new B,u=new B,d=new B;if(t)for(let p=0,c=t.count;p<c;p+=3){let x=t.getX(p+0),M=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,g),a.add(u),l.add(u),h.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,c=e.count;p<c;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,d=a.normalized,p=new h.constructor(l.length*u),c=0,x=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let f=0;f<u;f++)p[x++]=h[c++]}return new Ye(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,d=h.length;u<d;u++){let p=h[u],c=t(p,n);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,p=h.length;d<p;d++){let c=h[d];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],d=r[h];for(let p=0,c=d.length;p<c;p++)u.push(d[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bl=new Ee,Ii=new dr,io=new qn,zl=new B,so=new B,ro=new B,oo=new B,yc=new B,ao=new B,kl=new B,co=new B,ye=class extends Xe{constructor(t=new Me,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],d=r[l];u!==0&&(yc.fromBufferAttribute(d,t),o?ao.addScaledVector(yc,u):ao.addScaledVector(yc.sub(e),u))}e.add(ao)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(io.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(io,zl)===null||Ii.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){let g=p[x],f=o[g.materialIndex],w=Math.max(g.start,c.start),v=Math.min(a.count,Math.min(g.start+g.count,c.start+c.count));for(let S=w,T=v;S<T;S+=3){let A=a.getX(S),b=a.getX(S+1),E=a.getX(S+2);s=lo(this,f,t,n,h,u,d,A,b,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let g=x,f=M;g<f;g+=3){let w=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);s=lo(this,o,t,n,h,u,d,w,v,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){let g=p[x],f=o[g.materialIndex],w=Math.max(g.start,c.start),v=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let S=w,T=v;S<T;S+=3){let A=S,b=S+1,E=S+2;s=lo(this,f,t,n,h,u,d,A,b,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let g=x,f=M;g<f;g+=3){let w=g,v=g+1,S=g+2;s=lo(this,o,t,n,h,u,d,w,v,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function _d(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(co);return h<e.near||h>e.far?null:{distance:h,point:co.clone(),object:i}}function lo(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,so),i.getVertexPosition(l,ro),i.getVertexPosition(h,oo);let u=_d(i,t,e,n,so,ro,oo,kl);if(u){let d=new B;Wn.getBarycoord(kl,so,ro,oo,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,l,h,d,new It)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,l,h,d,new It)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,h,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c:h,normal:new B,materialIndex:0};Wn.getNormal(so,ro,oo,p.normal),u.face=p,u.barycoord=d}return u}var vi=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],d=[],p=0,c=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function x(M,g,f,w,v,S,T,A,b,E,y){let _=S/b,D=T/E,L=S/2,U=T/2,V=A/2,$=b+1,G=E+1,it=0,Y=0,ht=new B;for(let At=0;At<G;At++){let gt=At*D-U;for(let zt=0;zt<$;zt++){let kt=zt*_-L;ht[M]=kt*w,ht[g]=gt*v,ht[f]=V,h.push(ht.x,ht.y,ht.z),ht[M]=0,ht[g]=0,ht[f]=A>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(zt/b),d.push(1-At/E),it+=1}}for(let At=0;At<E;At++)for(let gt=0;gt<b;gt++){let zt=p+gt+$*At,kt=p+gt+$*(At+1),qt=p+(gt+1)+$*(At+1),Vt=p+(gt+1)+$*At;l.push(zt,kt,Vt),l.push(kt,qt,Vt),Y+=6}a.addGroup(c,Y,y),c+=Y,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function yd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function el(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Vh={clone:Zi,merge:an},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mr=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new B,Hl=new It,Vl=new It,hn=class extends mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,Eo=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new hn(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new hn(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new hn(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new hn(ps,ms,t,e);l.layers=this.layers,this.add(l);let h=new hn(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,c),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},gr=class extends xn{constructor(t=[],e=Xi,n,s,r,o,a,l,h,u){super(t,e,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},To=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ci});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=Mn),new Eo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Te=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,n),f=this._getHandJoint(h,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),c=.02,x=.005;h.inputState.pinching&&p>c+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=c-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Oi=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ts=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,h=gn,u=gn,d,p){super(null,o,a,l,h,u,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new Ee,Gl=new Ee,ho=[],Wl=new Le,Sd=new Ee,js=new ye,tr=new qn,Bi=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Le),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Wl.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(Wl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),tr.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Gl.multiplyMatrices(n,gs),js.matrixWorld=Gl,js.raycast(t,ho);for(let o=0,a=ho.length;o<a;o++){let l=ho[o];l.instanceId=r,l.object=this,e.push(l)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,oa,zn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vc=new B,wd=new B,Ed=new le,Gn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vc.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ed.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new qn,Td=new It(.5,.5),uo=new B,As=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],u=r[4],d=r[5],p=r[6],c=r[7],x=r[8],M=r[9],g=r[10],f=r[11],w=r[12],v=r[13],S=r[14],T=r[15];if(s[0].setComponents(h-o,c-u,f-x,T-w).normalize(),s[1].setComponents(h+o,c+u,f+x,T+w).normalize(),s[2].setComponents(h+a,c+d,f+M,T+v).normalize(),s[3].setComponents(h-a,c-d,f-M,T-v).normalize(),n)s[4].setComponents(l,p,g,S).normalize(),s[5].setComponents(h-l,c-p,f-g,T-S).normalize();else if(s[4].setComponents(h-l,c-p,f-g,T-S).normalize(),e===Un)s[5].setComponents(h+l,c+p,f+g,T+S).normalize();else if(e===lr)s[5].setComponents(l,p,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=Td.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends xn{constructor(t,e,n=wi,s,r,o,a=gn,l=gn,h,u=vs,d=1){if(u!==vs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends Me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],h=[],u=e/2,d=Math.PI/2*t,p=e,c=2*d+p,x=n*2+r,M=s+1,g=new B,f=new B;for(let w=0;w<=x;w++){let v=0,S=0,T=0,A=0;if(w<=n){let y=w/n,_=y*Math.PI/2;S=-u-t*Math.cos(_),T=t*Math.sin(_),A=-t*Math.cos(_),v=y*d}else if(w<=n+r){let y=(w-n)/r;S=-u+y*e,T=t,A=0,v=d+y*p}else{let y=(w-n-r)/n,_=y*Math.PI/2;S=u+t*Math.sin(_),T=t*Math.cos(_),A=t*Math.sin(_),v=d+p+y*d}let b=Math.max(0,Math.min(1,v/c)),E=0;w===0?E=.5/s:w===x&&(E=-.5/s);for(let y=0;y<=s;y++){let _=y/s,D=_*Math.PI*2,L=Math.sin(D),U=Math.cos(D);f.x=-T*U,f.y=S,f.z=T*L,a.push(f.x,f.y,f.z),g.set(-T*U,A,T*L),g.normalize(),l.push(g.x,g.y,g.z),h.push(_+E,b)}if(w>0){let y=(w-1)*M;for(let _=0;_<s;_++){let D=y+_,L=y+_+1,U=w*M+_,V=w*M+_+1;o.push(D,L,U),o.push(L,V,U)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mr=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new B,u=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let c=n+d/e*s;h.x=t*Math.cos(c),h.y=t*Math.sin(c),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],c=[],x=0,M=[],g=n/2,f=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(c,2));function w(){let S=new B,T=new B,A=0,b=(e-t)/n;for(let E=0;E<=r;E++){let y=[],_=E/r,D=_*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,V=U*l+a,$=Math.sin(V),G=Math.cos(V);T.x=D*$,T.y=-_*n+g,T.z=D*G,d.push(T.x,T.y,T.z),S.set($,b,G).normalize(),p.push(S.x,S.y,S.z),c.push(U,1-_),y.push(x++)}M.push(y)}for(let E=0;E<s;E++)for(let y=0;y<r;y++){let _=M[y][E],D=M[y+1][E],L=M[y+1][E+1],U=M[y][E+1];(t>0||y!==0)&&(u.push(_,D,U),A+=3),(e>0||y!==r-1)&&(u.push(D,L,U),A+=3)}h.addGroup(f,A,0),f+=A}function v(S){let T=x,A=new It,b=new B,E=0,y=S===!0?t:e,_=S===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,g*_,0),p.push(0,_,0),c.push(.5,.5),x++;let D=x;for(let L=0;L<=s;L++){let V=L/s*l+a,$=Math.cos(V),G=Math.sin(V);b.x=y*G,b.y=g*_,b.z=y*$,d.push(b.x,b.y,b.z),p.push(0,_,0),A.x=$*.5+.5,A.y=G*.5*_+.5,c.push(A.x,A.y),x++}for(let L=0;L<s;L++){let U=T+L,V=D+L;S===!0?u.push(V,V+1,U):u.push(V+1,V,U),E+=3}h.addGroup(f,E,S===!0?1:2),f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Rn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],p=n[s+1]-u,c=(o-u)/p;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],o=[],a=new B,l=new Ee;for(let c=0;c<=t;c++){let x=c/t;s[c]=this.getTangentAt(x,new B)}r[0]=new B,o[0]=new B;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(me(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,x))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(me(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],c*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,c=h-this.aY;l=p*u-c*d+this.aX,h=p*d+c*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ao=class extends Rs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,d){let p=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+d)+(l-a)/d;p*=u,c*=u,s(o,a,p,c)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fo=new B,Mc=new nl,bc=new nl,Sc=new nl,on=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),h=fo);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(d),c),M=Math.pow(d.distanceToSquared(p),c),g=Math.pow(p.distanceToSquared(u),c);M<1e-4&&(M=1),x<1e-4&&(x=M),g<1e-4&&(g=M),Mc.initNonuniformCatmullRom(h.x,d.x,p.x,u.x,x,M,g),bc.initNonuniformCatmullRom(h.y,d.y,p.y,u.y,x,M,g),Sc.initNonuniformCatmullRom(h.z,d.z,p.z,u.z,x,M,g)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(h.x,d.x,p.x,u.x,this.tension),bc.initCatmullRom(h.y,d.y,p.y,u.y,this.tension),Sc.initCatmullRom(h.z,d.z,p.z,u.z,this.tension));return n.set(Mc.calc(l),bc.calc(l),Sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ad(i,t){let e=1-i;return e*e*t}function Rd(i,t){return 2*(1-i)*i*t}function Cd(i,t){return i*i*t}function rr(i,t,e,n){return Ad(i,t)+Rd(i,e)+Cd(i,n)}function Id(i,t){let e=1-i;return e*e*e*t}function Pd(i,t){let e=1-i;return 3*e*e*i*t}function Dd(i,t){return 3*(1-i)*i*i*t}function Ld(i,t){return i*i*i*t}function or(i,t,e,n,s){return Id(i,t)+Pd(i,e)+Dd(i,n)+Ld(i,s)}var Sr=class extends un{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends un{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends un{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends un{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends un{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends un{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Xl(a,l.x,h.x,u.x,d.x),Xl(a,l.y,h.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Io=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:on,CubicBezierCurve:Sr,CubicBezierCurve3:Ro,EllipseCurve:Rs,LineCurve:wr,LineCurve3:Co,QuadraticBezierCurve:Er,QuadraticBezierCurve3:Tr,SplineCurve:Ar}),Po=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Io[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Io[s.type]().fromJSON(s))}return this}},Rr=class extends Po{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wr(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Er(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Sr(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let h=new Rs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cn=class extends Rr{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}};function Ud(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=zd(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let p=e;p<s;p+=e){let c=i[p],x=i[p+1];c<a&&(a=c),x<l&&(l=x),c>u&&(u=c),x>d&&(d=x)}h=Math.max(u-a,d-l),h=h!==0?32767/h:0}return Cr(r,o,e,a,l,h,0),o}function Gh(i,t,e,n,s){let r;if(s===$d(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Yl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Yl(o/n|0,i[o],i[o+1],r);return r&&Cs(r,r.next)&&(Pr(r),r=r.next),r}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||De(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,h=i.next;if(r?Nd(i,n,s,r):Fd(i)){t.push(l.i,i.i,h.i),Pr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Od(zi(i),t),Cr(i,t,e,n,s,r,2)):o===2&&Bd(i,t,e,n,s,r):Cr(zi(i),t,e,n,s,r,1);break}}}function Fd(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,u=Math.min(s,r,o),d=Math.min(a,l,h),p=Math.max(s,r,o),c=Math.max(a,l,h),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=p&&x.y>=d&&x.y<=c&&nr(s,a,r,l,o,h,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Nd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,d=r.y,p=o.y,c=Math.min(a,l,h),x=Math.min(u,d,p),M=Math.max(a,l,h),g=Math.max(u,d,p),f=Pc(c,x,t,e,n),w=Pc(M,g,t,e,n),v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=w;){if(v.x>=c&&v.x<=M&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&nr(a,u,l,d,h,p,v.x,v.y)&&De(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=c&&S.x<=M&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&nr(a,u,l,d,h,p,S.x,S.y)&&De(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=c&&v.x<=M&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&nr(a,u,l,d,h,p,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=w;){if(S.x>=c&&S.x<=M&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&nr(a,u,l,d,h,p,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Od(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&Xh(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return zi(e)}function Bd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qd(o,a)){let l=Yh(o,a);o=zi(o,o.next),l=zi(l,l.next),Cr(o,t,e,n,s,r,0),Cr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function zd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Gh(i,a,l,n,!1);h===h.next&&(h.steiner=!0),s.push(Yd(h))}s.sort(kd);for(let r=0;r<s.length;r++)e=Hd(s[r],e);return e}function kd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hd(i,t){let e=Vd(i,t);if(!e)return t;let n=Yh(e,i);return zi(n,n.next),zi(e,e.next)}function Vd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wh(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Gd(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Gd(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Wd(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xd(s)}function Xd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wh(i,t,e,n,s,r,o,a)}function qd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zd(i,t)&&(Ir(i,t)&&Ir(t,i)&&Jd(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Cs(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function Xh(i,t,e,n){let s=mo(De(i,t,e)),r=mo(De(i,t,n)),o=mo(De(e,n,i)),a=mo(De(e,n,t));return!!(s!==r&&o!==a||s===0&&po(i,e,t)||r===0&&po(i,n,t)||o===0&&po(e,i,n)||a===0&&po(e,t,n))}function po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mo(i){return i>0?1:i<0?-1:0}function Zd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Jd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){let e=Dc(i.i,i.x,i.y),n=Dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yl(i,t,e,n){let s=Dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $d(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lc=class{static triangulate(t,e,n=2){return Ud(t,e,n)}},Xn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ql(t),Zl(n,t);let o=t.length;e.forEach(ql);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Zl(n,e[l]);let a=Lc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ql(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ki=class i extends Me{constructor(t=new Cn([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Kd,v,S=!1,T,A,b,E;f&&(v=f.getSpacedPoints(u),S=!0,p=!1,T=f.computeFrenetFrames(u,!1),A=new B,b=new B,E=new B),p||(g=0,c=0,x=0,M=0);let y=a.extractPoints(h),_=y.shape,D=y.holes;if(!Xn.isClockWise(_)){_=_.reverse();for(let Z=0,z=D.length;Z<z;Z++){let H=D[Z];Xn.isClockWise(H)&&(D[Z]=H.reverse())}}function U(Z){let H=10000000000000001e-36,W=Z[0];for(let tt=1;tt<=Z.length;tt++){let q=tt%Z.length,nt=Z[q],bt=nt.x-W.x,xt=nt.y-W.y,C=bt*bt+xt*xt,m=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(W.x),Math.abs(W.y)),I=H*m*m;if(C<=I){Z.splice(q,1),tt--;continue}W=nt}}U(_),D.forEach(U);let V=D.length,$=_;for(let Z=0;Z<V;Z++){let z=D[Z];_=_.concat(z)}function G(Z,z,H){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(z,H)}let it=_.length;function Y(Z,z,H){let W,tt,q,nt=Z.x-z.x,bt=Z.y-z.y,xt=H.x-Z.x,C=H.y-Z.y,m=nt*nt+bt*bt,I=nt*C-bt*xt;if(Math.abs(I)>Number.EPSILON){let F=Math.sqrt(m),O=Math.sqrt(xt*xt+C*C),N=z.x-bt/F,X=z.y+nt/F,J=H.x-C/O,st=H.y+xt/O,mt=((J-N)*C-(st-X)*xt)/(nt*C-bt*xt);W=N+nt*mt-Z.x,tt=X+bt*mt-Z.y;let j=W*W+tt*tt;if(j<=2)return new It(W,tt);q=Math.sqrt(j/2)}else{let F=!1;nt>Number.EPSILON?xt>Number.EPSILON&&(F=!0):nt<-Number.EPSILON?xt<-Number.EPSILON&&(F=!0):Math.sign(bt)===Math.sign(C)&&(F=!0),F?(W=-bt,tt=nt,q=Math.sqrt(m)):(W=nt,tt=bt,q=Math.sqrt(m/2))}return new It(W/q,tt/q)}let ht=[];for(let Z=0,z=$.length,H=z-1,W=Z+1;Z<z;Z++,H++,W++)H===z&&(H=0),W===z&&(W=0),ht[Z]=Y($[Z],$[H],$[W]);let At=[],gt,zt=ht.concat();for(let Z=0,z=V;Z<z;Z++){let H=D[Z];gt=[];for(let W=0,tt=H.length,q=tt-1,nt=W+1;W<tt;W++,q++,nt++)q===tt&&(q=0),nt===tt&&(nt=0),gt[W]=Y(H[W],H[q],H[nt]);At.push(gt),zt=zt.concat(gt)}let kt;if(g===0)kt=Xn.triangulateShape($,D);else{let Z=[],z=[];for(let H=0;H<g;H++){let W=H/g,tt=c*Math.cos(W*Math.PI/2),q=x*Math.sin(W*Math.PI/2)+M;for(let nt=0,bt=$.length;nt<bt;nt++){let xt=G($[nt],ht[nt],q);Ht(xt.x,xt.y,-tt),W===0&&Z.push(xt)}for(let nt=0,bt=V;nt<bt;nt++){let xt=D[nt];gt=At[nt];let C=[];for(let m=0,I=xt.length;m<I;m++){let F=G(xt[m],gt[m],q);Ht(F.x,F.y,-tt),W===0&&C.push(F)}W===0&&z.push(C)}}kt=Xn.triangulateShape(Z,z)}let qt=kt.length,Vt=x+M;for(let Z=0;Z<it;Z++){let z=p?G(_[Z],zt[Z],Vt):_[Z];S?(b.copy(T.normals[0]).multiplyScalar(z.x),A.copy(T.binormals[0]).multiplyScalar(z.y),E.copy(v[0]).add(b).add(A),Ht(E.x,E.y,E.z)):Ht(z.x,z.y,0)}for(let Z=1;Z<=u;Z++)for(let z=0;z<it;z++){let H=p?G(_[z],zt[z],Vt):_[z];S?(b.copy(T.normals[Z]).multiplyScalar(H.x),A.copy(T.binormals[Z]).multiplyScalar(H.y),E.copy(v[Z]).add(b).add(A),Ht(E.x,E.y,E.z)):Ht(H.x,H.y,d/u*Z)}for(let Z=g-1;Z>=0;Z--){let z=Z/g,H=c*Math.cos(z*Math.PI/2),W=x*Math.sin(z*Math.PI/2)+M;for(let tt=0,q=$.length;tt<q;tt++){let nt=G($[tt],ht[tt],W);Ht(nt.x,nt.y,d+H)}for(let tt=0,q=D.length;tt<q;tt++){let nt=D[tt];gt=At[tt];for(let bt=0,xt=nt.length;bt<xt;bt++){let C=G(nt[bt],gt[bt],W);S?Ht(C.x,C.y+v[u-1].y,v[u-1].x+H):Ht(C.x,C.y,d+H)}}}ot(),yt();function ot(){let Z=s.length/3;if(p){let z=0,H=it*z;for(let W=0;W<qt;W++){let tt=kt[W];Nt(tt[2]+H,tt[1]+H,tt[0]+H)}z=u+g*2,H=it*z;for(let W=0;W<qt;W++){let tt=kt[W];Nt(tt[0]+H,tt[1]+H,tt[2]+H)}}else{for(let z=0;z<qt;z++){let H=kt[z];Nt(H[2],H[1],H[0])}for(let z=0;z<qt;z++){let H=kt[z];Nt(H[0]+it*u,H[1]+it*u,H[2]+it*u)}}n.addGroup(Z,s.length/3-Z,0)}function yt(){let Z=s.length/3,z=0;Pt($,z),z+=$.length;for(let H=0,W=D.length;H<W;H++){let tt=D[H];Pt(tt,z),z+=tt.length}n.addGroup(Z,s.length/3-Z,1)}function Pt(Z,z){let H=Z.length;for(;--H>=0;){let W=H,tt=H-1;tt<0&&(tt=Z.length-1);for(let q=0,nt=u+g*2;q<nt;q++){let bt=it*q,xt=it*(q+1),C=z+W+bt,m=z+tt+bt,I=z+tt+xt,F=z+W+xt;ne(C,m,I,F)}}}function Ht(Z,z,H){l.push(Z),l.push(z),l.push(H)}function Nt(Z,z,H){pt(Z),pt(z),pt(H);let W=s.length/3,tt=w.generateTopUV(n,s,W-3,W-2,W-1);R(tt[0]),R(tt[1]),R(tt[2])}function ne(Z,z,H,W){pt(Z),pt(z),pt(W),pt(z),pt(H),pt(W);let tt=s.length/3,q=w.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);R(q[0]),R(q[1]),R(q[3]),R(q[1]),R(q[2]),R(q[3])}function pt(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function R(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Io[s.type]().fromJSON(s)),new i(n,t.options)}},Kd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new It(r,o),new It(a,l),new It(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],u=t[n*3+1],d=t[n*3+2],p=t[s*3],c=t[s*3+1],x=t[s*3+2],M=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new It(o,1-l),new It(h,1-d),new It(p,1-x),new It(M,1-f)]:[new It(a,1-l),new It(u,1-d),new It(c,1-x),new It(g,1-f)]}};function Qd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Is=class i extends Me{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,d=new B,p=new It,c=new B,x=new B,M=new B,g=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,c.x=f*1,c.y=-g,c.z=f*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:g=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,c.x=f*1,c.y=-g,c.z=f*0,x.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(x)}for(let w=0;w<=e;w++){let v=n+w*u*s,S=Math.sin(v),T=Math.cos(v);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*S,d.y=t[A].y,d.z=t[A].x*T,o.push(d.x,d.y,d.z),p.x=w/e,p.y=A/(t.length-1),a.push(p.x,p.y);let b=l[3*A+0]*S,E=l[3*A+1],y=l[3*A+0]*T;h.push(b,E,y)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){let S=v+w*t.length,T=S,A=S+t.length,b=S+t.length+1,E=S+1;r.push(T,A,E),r.push(b,E,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Dr=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,d=t/a,p=e/l,c=[],x=[],M=[],g=[];for(let f=0;f<u;f++){let w=f*p-o;for(let v=0;v<h;v++){let S=v*d-r;x.push(S,-w,0),M.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let v=w+h*f,S=w+h*(f+1),T=w+1+h*(f+1),A=w+1+h*f;c.push(v,S,A),c.push(S,T,A)}this.setIndex(c),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hi=class i extends Me{constructor(t=new Cn([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function h(u){let d=s.length/3,p=u.extractPoints(e),c=p.shape,x=p.holes;Xn.isClockWise(c)===!1&&(c=c.reverse());for(let g=0,f=x.length;g<f;g++){let w=x[g];Xn.isClockWise(w)===!0&&(x[g]=w.reverse())}let M=Xn.triangulateShape(c,x);for(let g=0,f=x.length;g<f;g++){let w=x[g];c=c.concat(w)}for(let g=0,f=c.length;g<f;g++){let w=c[g];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let g=0,f=M.length;g<f;g++){let w=M[g],v=w[0]+d,S=w[1]+d,T=w[2]+d;n.push(v,S,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return jd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function jd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Nn=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,u=[],d=new B,p=new B,c=[],x=[],M=[],g=[];for(let f=0;f<=n;f++){let w=[],v=f/n,S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let T=0;T<=e;T++){let A=T/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),g.push(A+S,1-v),w.push(h++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let v=u[f][w+1],S=u[f][w],T=u[f+1][w],A=u[f+1][w+1];(f!==0||o>0)&&c.push(v,S,A),(f!==n-1||l<Math.PI)&&c.push(S,T,A)}this.setIndex(c),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vi=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new B,d=new B,p=new B;for(let c=0;c<=n;c++)for(let x=0;x<=s;x++){let M=x/s*r,g=c/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),h.push(x/s),h.push(c/n)}for(let c=1;c<=n;c++)for(let x=1;x<=s;x++){let M=(s+1)*c+x-1,g=(s+1)*(c-1)+x-1,f=(s+1)*(c-1)+x,w=(s+1)*c+x;o.push(M,g,w),o.push(g,f,w)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zn=class i extends Me{constructor(t=new Tr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,h=new It,u=new B,d=[],p=[],c=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(c,2));function M(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),w(),f()}function g(v){u=t.getPointAt(v/e,u);let S=o.normals[v],T=o.binormals[v];for(let A=0;A<=s;A++){let b=A/s*Math.PI*2,E=Math.sin(b),y=-Math.cos(b);l.x=y*S.x+E*T.x,l.y=y*S.y+E*T.y,l.z=y*S.z+E*T.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=e;v++)for(let S=1;S<=s;S++){let T=(s+1)*(v-1)+(S-1),A=(s+1)*v+(S-1),b=(s+1)*v+S,E=(s+1)*(v-1)+S;x.push(T,A,E),x.push(A,b,E)}}function w(){for(let v=0;v<=e;v++)for(let S=0;S<=s;S++)h.x=v/e,h.y=S/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var dn=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Do=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function go(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ac:r=t,a=2*e-n;break;case Rc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ac:o=t,l=2*n-e;break;case Rc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,c=this._weightNext,x=(n-e)/(s-e),M=x*x,g=M*x,f=-p*g+2*p*M-p*x,w=(1+p)*g+(-1.5-2*p)*M+(-.5+p)*x+1,v=(-1-c)*g+(1.5+c)*M+.5*x,S=c*g-c*M;for(let T=0;T!==a;++T)r[T]=f*o[u+T]+w*o[h+T]+v*o[l+T]+S*o[d+T];return r}},Fo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==a;++p)r[p]=o[h+p]*d+o[l+p]*u;return r}},No=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case Mo:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&tf(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*n,p=d-n,c=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[p+x]||M!==e[c+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let c=0;c!==n;++c)e[p+c]=e[d+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Mo;var Mi=class extends bn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ar;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="color";var Bo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};Bo.prototype.ValueTypeName="number";var zo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)je.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ur=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends bn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ar;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};ko.prototype.ValueTypeName="vector";var Ho=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=h.length;d<p;d+=2){let c=h[d],x=h[d+1];if(c.global&&(c.lastIndex=0),c.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qh=new Ho,Vo=class{constructor(t){this.manager=t!==void 0?t:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wc=new Ee,Jl=new B,$l=new B,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Kl=new Ee,er=new B,Ec=new B,Uc=class extends Go{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),Ec.copy(n.position),Ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ec),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,n.coordinateSystem,n.reversedDepth)}},Nr=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wi=class extends mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fc=class extends Go{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wo=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var il="\\[\\]\\.:\\/",ef=new RegExp("["+il+"]","g"),sl="[^"+il+"]",nf="[^"+il.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",sl),rf=/(WCOD+)?/.source.replace("WCOD",nf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),cf=new RegExp("^"+sf+rf+of+af+"$"),lf=["material","materials","bones","map"],Nc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ef,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Nc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K1=new Float32Array(1);var Ql=new Ee,On=class{constructor(t,e,n=0,s=1/0){this.ray=new dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(t,e=!0,n=[]){return Oc(t,this,n,e),n.sort(jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,n,e);return n.sort(jl),n}};function jl(i,t){return i.distance-t.distance}function Oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],t,e,!0)}}function rl(i,t,e,n){let s=hf(n);switch(e){case Zc:return i*t;case oa:return i*t/s.components*s.byteLength;case aa:return i*t/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case Jc:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Da:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hf(i){switch(i){case Bn:case Wc:return{byteLength:1,components:1};case Ls:case Xc:case Us:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case wi:case ia:case zn:return{byteLength:4,components:1};case Yc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function df(i){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,d=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)c=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=i.HALF_FLOAT:c=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=i.SHORT;else if(h instanceof Uint32Array)c=i.UNSIGNED_INT;else if(h instanceof Int32Array)c=i.INT;else if(h instanceof Int8Array)c=i.BYTE;else if(h instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){let u=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,u);else{d.sort((c,x)=>c.start-x.start);let p=0;for(let c=1;c<d.length;c++){let x=d[p],M=d[c];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++p,d[p]=M)}d.length=p+1;for(let c=0,x=d.length;c<x;c++){let M=d[c];i.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
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
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:_f,aomap_fragment:yf,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:bf,begin_vertex:Sf,beginnormal_vertex:wf,bsdfs:Ef,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:Uf,color_vertex:Ff,common:Nf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:kf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:qf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:rp,envmap_vertex:Jf,fog_vertex:$f,fog_pars_vertex:Kf,fog_fragment:Qf,fog_pars_fragment:jf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Ip,normal_fragment_maps:Pp,normal_pars_fragment:Dp,normal_pars_vertex:Lp,normal_vertex:Up,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Kp,skinbase_vertex:Qp,skinning_pars_vertex:jp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:cm,uv_pars_vertex:lm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:_m,depth_frag:ym,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:bm,equirect_frag:Sm,linedashed_vert:wm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Im,meshmatcap_frag:Pm,meshnormal_vert:Dm,meshnormal_frag:Lm,meshphong_vert:Um,meshphong_frag:Fm,meshphysical_vert:Nm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:km,points_frag:Hm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},Yt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Kn={basic:{uniforms:an([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:an([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:an([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:an([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:an([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:an([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:an([Yt.points,Yt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:an([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:an([Yt.common,Yt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:an([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:an([Yt.sprite,Yt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:an([Yt.common,Yt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:an([Yt.lights,Yt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Kn.physical={uniforms:an([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var za={r:0,b:0,g:0},Ji=new An,Ym=new Ee;function qm(i,t,e,n,s,r,o){let a=new Qt(0),l=r===!0?0:1,h,u,d=null,p=0,c=null;function x(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?e:t).get(S)),S}function M(v){let S=!1,T=x(v);T===null?f(a,l):T&&T.isColor&&(f(T,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,S){let T=x(S);T&&(T.isCubeTexture||T.mapping===Or)?(u===void 0&&(u=new ye(new vi(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Zi(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(S.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Ji)),u.material.toneMapped=_e.getTransfer(T.colorSpace)!==we,(d!==T||p!==T.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,c=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new ye(new Dr(2,2),new Fn({name:"BackgroundMaterial",uniforms:Zi(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=_e.getTransfer(T.colorSpace)!==we,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||c!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,p=T.version,c=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function f(v,S){v.getRGB(za,el(i)),n.buffers.color.setClear(za.r,za.g,za.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:M,addToRenderList:g,dispose:w}}function Zm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(_,D,L,U,V){let $=!1,G=d(U,L,D);r!==G&&(r=G,h(r.object)),$=c(_,U,L,V),$&&x(_,U,L,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(_,D,L,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function h(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,D,L){let U=L.wireframe===!0,V=n[_.id];V===void 0&&(V={},n[_.id]=V);let $=V[D.id];$===void 0&&($={},V[D.id]=$);let G=$[U];return G===void 0&&(G=p(l()),$[U]=G),G}function p(_){let D=[],L=[],U=[];for(let V=0;V<e;V++)D[V]=0,L[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:U,object:_,attributes:{},index:null}}function c(_,D,L,U){let V=r.attributes,$=D.attributes,G=0,it=L.getAttributes();for(let Y in it)if(it[Y].location>=0){let At=V[Y],gt=$[Y];if(gt===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),At===void 0||At.attribute!==gt||gt&&At.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function x(_,D,L,U){let V={},$=D.attributes,G=0,it=L.getAttributes();for(let Y in it)if(it[Y].location>=0){let At=$[Y];At===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(At=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(At=_.instanceColor));let gt={};gt.attribute=At,At&&At.data&&(gt.data=At.data),V[Y]=gt,G++}r.attributes=V,r.attributesNum=G,r.index=U}function M(){let _=r.newAttributes;for(let D=0,L=_.length;D<L;D++)_[D]=0}function g(_){f(_,0)}function f(_,D){let L=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;L[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),V[_]!==D&&(i.vertexAttribDivisor(_,D),V[_]=D)}function w(){let _=r.newAttributes,D=r.enabledAttributes;for(let L=0,U=D.length;L<U;L++)D[L]!==_[L]&&(i.disableVertexAttribArray(L),D[L]=0)}function v(_,D,L,U,V,$,G){G===!0?i.vertexAttribIPointer(_,D,L,V,$):i.vertexAttribPointer(_,D,L,U,V,$)}function S(_,D,L,U){M();let V=U.attributes,$=L.getAttributes(),G=D.defaultAttributeValues;for(let it in $){let Y=$[it];if(Y.location>=0){let ht=V[it];if(ht===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){let At=ht.normalized,gt=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;let kt=zt.buffer,qt=zt.type,Vt=zt.bytesPerElement,ot=qt===i.INT||qt===i.UNSIGNED_INT||ht.gpuType===ia;if(ht.isInterleavedBufferAttribute){let yt=ht.data,Pt=yt.stride,Ht=ht.offset;if(yt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Y.locationSize;Nt++)f(Y.location+Nt,yt.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)g(Y.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Nt=0;Nt<Y.locationSize;Nt++)v(Y.location+Nt,gt/Y.locationSize,qt,At,Pt*Vt,(Ht+gt/Y.locationSize*Nt)*Vt,ot)}else{if(ht.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)f(Y.location+yt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let yt=0;yt<Y.locationSize;yt++)g(Y.location+yt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let yt=0;yt<Y.locationSize;yt++)v(Y.location+yt,gt/Y.locationSize,qt,At,gt*Vt,gt/Y.locationSize*yt*Vt,ot)}}else if(G!==void 0){let At=G[it];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(Y.location,At);break;case 3:i.vertexAttrib3fv(Y.location,At);break;case 4:i.vertexAttrib4fv(Y.location,At);break;default:i.vertexAttrib1fv(Y.location,At)}}}}w()}function T(){E();for(let _ in n){let D=n[_];for(let L in D){let U=D[L];for(let V in U)u(U[V].object),delete U[V];delete D[L]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let D=n[_.id];for(let L in D){let U=D[L];for(let V in U)u(U[V].object),delete U[V];delete D[L]}delete n[_.id]}function b(_){for(let D in n){let L=n[D];if(L[_.id]===void 0)continue;let U=L[_.id];for(let V in U)u(U[V].object),delete U[V];delete L[_.id]}}function E(){y(),o=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:g,disableUnusedAttributes:w}}function Jm(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function a(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let c=0;for(let x=0;x<d;x++)c+=u[x];e.update(c,n,1)}function l(h,u,d,p){if(d===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let x=0;x<h.length;x++)o(h[x],u[x],p[x]);else{c.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,d);let x=0;for(let M=0;M<d;M++)x+=u[M]*p[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $m(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==_n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let E=b===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==zn&&!E)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:c,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:T,maxSamples:A}}function Km(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let c=d.length!==0||p||n!==0||s;return s=p,n=d.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,c){let x=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):h();else{let w=r?0:n,v=w*4,S=f.clippingState||null;l.value=S,S=u(x,p,v,c);for(let T=0;T!==v;++T)S[T]=e[T];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,c,x){let M=d!==null?d.length:0,g=null;if(M!==0){if(g=l.value,x!==!0||g===null){let f=c+M*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=c;v!==M;++v,S+=4)o.copy(d[v]).applyMatrix4(w,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function Qm(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Xi:a===ea&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ta||a===ea)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new To(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=4,Zh=[.125,.215,.35,.446,.526,.582],Qi=20,ol=new Wi,Jh=new Qt,al=null,cl=0,ll=0,hl=!1,Ki=(1+Math.sqrt(5))/2,Bs=1/Ki,$h=[new B(-Ki,Bs,0),new B(Ki,Bs,0),new B(-Bs,0,Ki),new B(Bs,0,Ki),new B(0,Ki,-Bs),new B(0,Ki,Bs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],jm=new B,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=jm}=r;al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,cl,ll),this._renderer.xr.enabled=hl,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Us,format:_n,colorSpace:Fi,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(r)),this._blurMaterial=e0(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,n,s,r){let l=new hn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,c=d.toneMapping;d.getClearColor(Jh),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let M=new Ni({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ye(new vi,M),f=!1,w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,f=!0):(M.color.copy(Jh),f=!0);for(let v=0;v<6;v++){let S=v%3;S===0?(l.up.set(0,h[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):S===1?(l.up.set(0,0,h[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,h[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let T=this._cubeSize;ka(s,S*T,v>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(g,l),d.render(t,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=c,d.autoClear=p,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ka(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ol)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ye(this._lodPlanes[s],h),p=h.uniforms,c=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Qi-1),M=r/x,g=isFinite(r)?1+Math.floor(u*M):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);let f=[],w=0;for(let b=0;b<Qi;++b){let E=b/M,y=Math.exp(-E*E/2);f.push(y),b===0?w+=y:b<g&&(w+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/w;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let S=this._sizeLods[s],T=3*S*(s>v-zs?s-v+zs:0),A=4*(this._cubeSize-S);ka(e,T,A,3*S,2*S),l.setRenderTarget(e),l.render(d,ol)}};function t0(i){let t=[],e=[],n=[],s=i,r=i-zs+1+Zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zs?l=Zh[o-i+zs-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],c=6,x=6,M=3,g=2,f=1,w=new Float32Array(M*x*c),v=new Float32Array(g*x*c),S=new Float32Array(f*x*c);for(let A=0;A<c;A++){let b=A%3*2/3-1,E=A>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];w.set(y,M*x*A),v.set(p,g*x*A);let _=[A,A,A,A,A,A];S.set(_,f*x*A)}let T=new Me;T.setAttribute("position",new Ye(w,M)),T.setAttribute("uv",new Ye(v,g)),T.setAttribute("faceIndex",new Ye(S,f)),t.push(T),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){let n=new Yn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function e0(i,t,e){let n=new Float32Array(Qi),s=new B(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Qh(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function jh(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function n0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===ta||l===ea,u=l===Xi||l===Yi;if(h||u){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Hs(i)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new Hs(i)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function i0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function s0(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete s[p.id];let c=r.get(p);c&&(t.remove(c),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let c in p)t.update(p[c],i.ARRAY_BUFFER)}function h(d){let p=[],c=d.index,x=d.attributes.position,M=0;if(c!==null){let w=c.array;M=c.version;for(let v=0,S=w.length;v<S;v+=3){let T=w[v+0],A=w[v+1],b=w[v+2];p.push(T,A,A,b,b,T)}}else if(x!==void 0){let w=x.array;M=x.version;for(let v=0,S=w.length/3-1;v<S;v+=3){let T=v+0,A=v+1,b=v+2;p.push(T,A,A,b,b,T)}}else return;let g=new(tl(p)?pr:fr)(p,1);g.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,g)}function u(d){let p=r.get(d);if(p){let c=d.index;c!==null&&p.version<c.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function r0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,c){i.drawElements(n,c,r,p*o),e.update(c,n,1)}function h(p,c,x){x!==0&&(i.drawElementsInstanced(n,c,r,p*o,x),e.update(c,n,x))}function u(p,c,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,p,0,x);let g=0;for(let f=0;f<x;f++)g+=c[f];e.update(g,n,1)}function d(p,c,x,M){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)h(p[f]/o,c[f],M[f]);else{g.multiDrawElementsInstancedWEBGL(n,c,0,r,p,0,M,0,x);let f=0;for(let w=0;w<x;w++)f+=c[w]*M[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function o0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==d){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();let c=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],v=0;c===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let S=a.attributes.position.count*v,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*T*4*d),b=new ur(A,S,T,d);b.type=zn,b.needsUpdate=!0;let E=v*4;for(let _=0;_<d;_++){let D=g[_],L=f[_],U=w[_],V=S*T*4*_;for(let $=0;$<D.count;$++){let G=$*E;c===!0&&(s.fromBufferAttribute(D,$),A[V+G+0]=s.x,A[V+G+1]=s.y,A[V+G+2]=s.z,A[V+G+3]=0),x===!0&&(s.fromBufferAttribute(L,$),A[V+G+4]=s.x,A[V+G+5]=s.y,A[V+G+6]=s.z,A[V+G+7]=0),M===!0&&(s.fromBufferAttribute(U,$),A[V+G+8]=s.x,A[V+G+9]=s.y,A[V+G+10]=s.z,A[V+G+11]=U.itemSize===4?s.w:1)}}p={count:d,texture:b,size:new It(S,T)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let x=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function c0(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var _u=new xn,tu=new _r(1,1),yu=new ur,vu=new wo,Mu=new gr,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ga(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function l0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function f0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Ze(e,n)}}function p0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Ze(e,n)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Ze(e,n)}}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function v0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=Kc,r=tu):r=_u,e.setTexture2D(t||r,s)}function E0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vu,s)}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mu,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return v0;case 36294:return M0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(i,t){i.uniform1fv(this.addr,t)}function I0(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function P0(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function D0(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function L0(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function U0(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function N0(i,t){i.uniform1iv(this.addr,t)}function O0(i,t){i.uniform2iv(this.addr,t)}function B0(i,t){i.uniform3iv(this.addr,t)}function z0(i,t){i.uniform4iv(this.addr,t)}function k0(i,t){i.uniform1uiv(this.addr,t)}function H0(i,t){i.uniform2uiv(this.addr,t)}function V0(i,t){i.uniform3uiv(this.addr,t)}function G0(i,t){i.uniform4uiv(this.addr,t)}function W0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_u,r[o])}function X0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vu,r[o])}function Y0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mu,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=Ga(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yu,r[o])}function Z0(i){switch(i){case 5126:return C0;case 35664:return I0;case 35665:return P0;case 35666:return D0;case 35674:return L0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return N0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return q0}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}},fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},pl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ul=/(\w+)(\])?(\[|\.)?/g;function ou(i,t){i.seq.push(t),i.map[t.id]=t}function J0(i,t,e){let n=i.name,s=n.length;for(ul.lastIndex=0;;){let r=ul.exec(n),o=ul.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){ou(e,h===void 0?new dl(a,i,t):new fl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new pl(a),ou(e,d)),e=d}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);J0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $0=37297,K0=0;function Q0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var cu=new le;function j0(i){_e._getMatrix(cu,_e.workingColorSpace,i);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q0(i.getShaderSource(t),a)}else return r}function t1(i,t){let e=j0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e1(i,t){let e;switch(t){case bh:e="Linear";break;case Sh:e="Reinhard";break;case wh:e="Cineon";break;case Eh:e="ACESFilmic";break;case Ah:e="AgX";break;case Ds:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new B;function n1(){_e.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function s1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gr(i){return i!==""}function hu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(i){return i.replace(o1,c1)}var a1=new Map;function c1(i,t){let e=fe[t];if(e===void 0){let n=a1.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}var l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(l1,h1)}function h1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function u1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function d1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f1(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Yi&&(t="ENVMAP_MODE_REFRACTION"),t}function p1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case vh:t="ENVMAP_BLENDING_MIX";break;case Mh:t="ENVMAP_BLENDING_ADD";break}return t}function m1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=u1(e),h=d1(e),u=f1(e),d=p1(e),p=m1(e),c=i1(e),x=s1(r),M=s.createProgram(),g,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(g=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?fe.tonemapping_pars_fragment:"",e.toneMapping!==li?e1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,t1("linearToOutputTexel",e.outputColorSpace),n1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=ml(o),o=hu(o,e),o=uu(o,e),a=ml(a),a=hu(a,e),a=uu(a,e),o=du(o),a=du(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=w+g+o,S=w+f+a,T=au(s,s.VERTEX_SHADER,v),A=au(s,s.FRAGMENT_SHADER,S);s.attachShader(M,T),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function b(D){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(M)||"",U=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(A)||"",$=L.trim(),G=U.trim(),it=V.trim(),Y=!0,ht=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,A);else{let At=lu(s,T,"vertex"),gt=lu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+At+`
`+gt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||it==="")&&(ht=!1);ht&&(D.diagnostics={runnable:Y,programLog:$,vertexShader:{log:G,prefix:g},fragmentShader:{log:it,prefix:f}})}s.deleteShader(T),s.deleteShader(A),E=new ks(s,M),y=r1(s,M)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,$0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}var x1=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xl(t),e.set(t,n)),n}},xl=class{constructor(t){this.id=x1++,this.code=t,this.usedTimes=0}};function _1(i,t,e,n,s,r,o){let a=new ws,l=new gl,h=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,c=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return h.add(y),y===0?"uv":`uv${y}`}function g(y,_,D,L,U){let V=L.fog,$=U.geometry,G=y.isMeshStandardMaterial?L.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),Y=it&&it.mapping===Or?it.image.height:null,ht=x[y.type];y.precision!==null&&(c=s.getMaxPrecision(y.precision),c!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));let At=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=At!==void 0?At.length:0,zt=0;$.morphAttributes.position!==void 0&&(zt=1),$.morphAttributes.normal!==void 0&&(zt=2),$.morphAttributes.color!==void 0&&(zt=3);let kt,qt,Vt,ot;if(ht){let Lt=Kn[ht];kt=Lt.vertexShader,qt=Lt.fragmentShader}else kt=y.vertexShader,qt=y.fragmentShader,l.update(y),Vt=l.getVertexShaderID(y),ot=l.getFragmentShaderID(y);let yt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,Nt=U.isBatchedMesh===!0,ne=!!y.map,pt=!!y.matcap,R=!!it,Z=!!y.aoMap,z=!!y.lightMap,H=!!y.bumpMap,W=!!y.normalMap,tt=!!y.displacementMap,q=!!y.emissiveMap,nt=!!y.metalnessMap,bt=!!y.roughnessMap,xt=y.anisotropy>0,C=y.clearcoat>0,m=y.dispersion>0,I=y.iridescence>0,F=y.sheen>0,O=y.transmission>0,N=xt&&!!y.anisotropyMap,X=C&&!!y.clearcoatMap,J=C&&!!y.clearcoatNormalMap,st=C&&!!y.clearcoatRoughnessMap,mt=I&&!!y.iridescenceMap,j=I&&!!y.iridescenceThicknessMap,ft=F&&!!y.sheenColorMap,_t=F&&!!y.sheenRoughnessMap,lt=!!y.specularMap,at=!!y.specularColorMap,vt=!!y.specularIntensityMap,k=O&&!!y.transmissionMap,ct=O&&!!y.thicknessMap,ut=!!y.gradientMap,wt=!!y.alphaMap,Mt=y.alphaTest>0,Q=!!y.alphaHash,Tt=!!y.extensions,Et=li;y.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Wt={shaderID:ht,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:qt,defines:y.defines,customVertexShaderID:Vt,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:Nt,batchingColor:Nt&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Fi,alphaToCoverage:!!y.alphaToCoverage,map:ne,matcap:pt,envMap:R,envMapMode:R&&it.mapping,envMapCubeUVHeight:Y,aoMap:Z,lightMap:z,bumpMap:H,normalMap:W,displacementMap:p&&tt,emissiveMap:q,normalMapObjectSpace:W&&y.normalMapType===Ph,normalMapTangentSpace:W&&y.normalMapType===Ba,metalnessMap:nt,roughnessMap:bt,anisotropy:xt,anisotropyMap:N,clearcoat:C,clearcoatMap:X,clearcoatNormalMap:J,clearcoatRoughnessMap:st,dispersion:m,iridescence:I,iridescenceMap:mt,iridescenceThicknessMap:j,sheen:F,sheenColorMap:ft,sheenRoughnessMap:_t,specularMap:lt,specularColorMap:at,specularIntensityMap:vt,transmission:O,transmissionMap:k,thicknessMap:ct,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Li&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:Mt,alphaHash:Q,combine:y.combine,mapUv:ne&&M(y.map.channel),aoMapUv:Z&&M(y.aoMap.channel),lightMapUv:z&&M(y.lightMap.channel),bumpMapUv:H&&M(y.bumpMap.channel),normalMapUv:W&&M(y.normalMap.channel),displacementMapUv:tt&&M(y.displacementMap.channel),emissiveMapUv:q&&M(y.emissiveMap.channel),metalnessMapUv:nt&&M(y.metalnessMap.channel),roughnessMapUv:bt&&M(y.roughnessMap.channel),anisotropyMapUv:N&&M(y.anisotropyMap.channel),clearcoatMapUv:X&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&M(y.sheenRoughnessMap.channel),specularMapUv:lt&&M(y.specularMap.channel),specularColorMapUv:at&&M(y.specularColorMap.channel),specularIntensityMapUv:vt&&M(y.specularIntensityMap.channel),transmissionMapUv:k&&M(y.transmissionMap.channel),thicknessMapUv:ct&&M(y.thicknessMap.channel),alphaMapUv:wt&&M(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(W||xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(ne||wt),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:zt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:ne&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:q&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Tt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=h.has(1),Wt.vertexUv2s=h.has(2),Wt.vertexUv3s=h.has(3),h.clear(),Wt}function f(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)_.push(D),_.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(_,y),v(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function w(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function v(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){let _=x[y.type],D;if(_){let L=Kn[_];D=Vh.clone(L.uniforms)}else D=y.uniforms;return D}function T(y,_){let D;for(let L=0,U=u.length;L<U;L++){let V=u[L];if(V.cacheKey===_){D=V,++D.usedTimes;break}}return D===void 0&&(D=new g1(i,_,y,r),u.push(D)),D}function A(y){if(--y.usedTimes===0){let _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:E}}function y1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,c,x,M,g){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:c,groupOrder:x,renderOrder:d.renderOrder,z:M,group:g},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=c,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=M,f.group=g),t++,f}function a(d,p,c,x,M,g){let f=o(d,p,c,x,M,g);c.transmission>0?n.push(f):c.transparent===!0?s.push(f):e.push(f)}function l(d,p,c,x,M,g){let f=o(d,p,c,x,M,g);c.transmission>0?n.unshift(f):c.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,p){e.length>1&&e.sort(d||v1),n.length>1&&n.sort(p||pu),s.length>1&&s.sort(p||pu)}function u(){for(let d=t,p=i.length;d<p;d++){let c=i[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function M1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mu,i.set(n,[o])):s>=r.length?(o=new mu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Qt};break;case"SpotLight":e={position:new B,direction:new B,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function S1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var w1=0;function E1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T1(i){let t=new b1,e=S1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);let s=new B,r=new Ee,o=new Ee;function a(h){let u=0,d=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let c=0,x=0,M=0,g=0,f=0,w=0,v=0,S=0,T=0,A=0,b=0;h.sort(E1);for(let y=0,_=h.length;y<_;y++){let D=h[y],L=D.color,U=D.intensity,V=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=L.r*U,d+=L.g*U,p+=L.b*U;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],U);b++}else if(D.isDirectionalLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,Y=e.get(D);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[c]=Y,n.directionalShadowMap[c]=$,n.directionalShadowMatrix[c]=D.shadow.matrix,w++}n.directional[c]=G,c++}else if(D.isSpotLight){let G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(L).multiplyScalar(U),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[M]=G;let it=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,it.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=it.matrix,D.castShadow){let Y=e.get(D);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=$,S++}M++}else if(D.isRectAreaLight){let G=t.get(D);G.color.copy(L).multiplyScalar(U),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=G,g++}else if(D.isPointLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let it=D.shadow,Y=e.get(D);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=D.shadow.matrix,v++}n.point[x]=G,x++}else if(D.isHemisphereLight){let G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(U),G.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Yt.LTC_FLOAT_1,n.rectAreaLTC2=Yt.LTC_FLOAT_2):(n.rectAreaLTC1=Yt.LTC_HALF_1,n.rectAreaLTC2=Yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let E=n.hash;(E.directionalLength!==c||E.pointLength!==x||E.spotLength!==M||E.rectAreaLength!==g||E.hemiLength!==f||E.numDirectionalShadows!==w||E.numPointShadows!==v||E.numSpotShadows!==S||E.numSpotMaps!==T||E.numLightProbes!==b)&&(n.directional.length=c,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,E.directionalLength=c,E.pointLength=x,E.spotLength=M,E.rectAreaLength=g,E.hemiLength=f,E.numDirectionalShadows=w,E.numPointShadows=v,E.numSpotShadows=S,E.numSpotMaps=T,E.numLightProbes=b,n.version=w1++)}function l(h,u){let d=0,p=0,c=0,x=0,M=0,g=u.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){let v=h[f];if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(v.isSpotLight){let S=n.spot[c];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),c++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){let S=n.hemi[M];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:n}}function gu(i){let t=new T1(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gu(i),t.set(s,[a])):r>=o.length?(a=new gu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
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
}`;function I1(i,t,e){let n=new As,s=new It,r=new It,o=new Se,a=new Do({depthPacking:Ih}),l=new Lo,h={},u=e.maxTextureSize,d={[ri]:tn,[tn]:ri,[Ke]:Ke},p=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:R1,fragmentShader:C1}),c=p.clone();c.defines.HORIZONTAL_PASS=1;let x=new Me;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ye(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let f=this.type;this.render=function(A,b,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ci),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=f!==Jn&&this.type===Jn,V=f===Jn&&this.type!==Jn;for(let $=0,G=A.length;$<G;$++){let it=A[$],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ht=Y.getFrameExtents();if(s.multiply(ht),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,Y.mapSize.y=r.y)),Y.map===null||U===!0||V===!0){let gt=this.type!==Jn?{minFilter:gn,magFilter:gn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yn(s.x,s.y,gt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let At=Y.getViewportCount();for(let gt=0;gt<At;gt++){let zt=Y.getViewport(gt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),L.viewport(o),Y.updateMatrices(it,gt),n=Y.getFrustum(),S(b,E,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===Jn&&w(Y,E),Y.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(y,_,D)};function w(A,b){let E=t.update(M);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,c.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,c.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,E,p,M,null),c.uniforms.shadow_pass.value=A.mapPass.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,E,c,M,null)}function v(A,b,E,y){let _=null,D=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)_=D;else if(_=E.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=_.uuid,U=b.uuid,V=h[L];V===void 0&&(V={},h[L]=V);let $=V[U];$===void 0&&($=_.clone(),V[U]=$,b.addEventListener("dispose",T)),_=$}if(_.visible=b.visible,_.wireframe=b.wireframe,y===Jn?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=i.properties.get(_);L.light=E}return _}function S(A,b,E,y,_){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let U=t.update(A),V=A.material;if(Array.isArray(V)){let $=U.groups;for(let G=0,it=$.length;G<it;G++){let Y=$[G],ht=V[Y.materialIndex];if(ht&&ht.visible){let At=v(A,ht,y,_);A.onBeforeShadow(i,A,b,E,U,At,Y),i.renderBufferDirect(E,null,U,At,A,Y),A.onAfterShadow(i,A,b,E,U,At,Y)}}}else if(V.visible){let $=v(A,V,y,_);A.onBeforeShadow(i,A,b,E,U,$,null),i.renderBufferDirect(E,null,U,$,A,null),A.onAfterShadow(i,A,b,E,U,$,null)}}let L=A.children;for(let U=0,V=L.length;U<V;U++)S(L[U],b,E,y,_)}function T(A){A.target.removeEventListener("dispose",T);for(let E in h){let y=h[E],_=A.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var P1={[Yo]:qo,[Zo]:Ko,[Jo]:Qo,[Ui]:$o,[qo]:Yo,[Ko]:Zo,[Qo]:Jo,[$o]:Ui};function D1(i,t){function e(){let k=!1,ct=new Se,ut=null,wt=new Se(0,0,0,0);return{setMask:function(Mt){ut!==Mt&&!k&&(i.colorMask(Mt,Mt,Mt,Mt),ut=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,Q,Tt,Et,Wt){Wt===!0&&(Mt*=Et,Q*=Et,Tt*=Et),ct.set(Mt,Q,Tt,Et),wt.equals(ct)===!1&&(i.clearColor(Mt,Q,Tt,Et),wt.copy(ct))},reset:function(){k=!1,ut=null,wt.set(-1,0,0,0)}}}function n(){let k=!1,ct=!1,ut=null,wt=null,Mt=null;return{setReversed:function(Q){if(ct!==Q){let Tt=t.get("EXT_clip_control");Q?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ct=Q;let Et=Mt;Mt=null,this.setClear(Et)}},getReversed:function(){return ct},setTest:function(Q){Q?yt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Q){ut!==Q&&!k&&(i.depthMask(Q),ut=Q)},setFunc:function(Q){if(ct&&(Q=P1[Q]),wt!==Q){switch(Q){case Yo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Q}},setLocked:function(Q){k=Q},setClear:function(Q){Mt!==Q&&(ct&&(Q=1-Q),i.clearDepth(Q),Mt=Q)},reset:function(){k=!1,ut=null,wt=null,Mt=null,ct=!1}}}function s(){let k=!1,ct=null,ut=null,wt=null,Mt=null,Q=null,Tt=null,Et=null,Wt=null;return{setTest:function(Lt){k||(Lt?yt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Lt){ct!==Lt&&!k&&(i.stencilMask(Lt),ct=Lt)},setFunc:function(Lt,St,Dt){(ut!==Lt||wt!==St||Mt!==Dt)&&(i.stencilFunc(Lt,St,Dt),ut=Lt,wt=St,Mt=Dt)},setOp:function(Lt,St,Dt){(Q!==Lt||Tt!==St||Et!==Dt)&&(i.stencilOp(Lt,St,Dt),Q=Lt,Tt=St,Et=Dt)},setLocked:function(Lt){k=Lt},setClear:function(Lt){Wt!==Lt&&(i.clearStencil(Lt),Wt=Lt)},reset:function(){k=!1,ct=null,ut=null,wt=null,Mt=null,Q=null,Tt=null,Et=null,Wt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,u={},d={},p=new WeakMap,c=[],x=null,M=!1,g=null,f=null,w=null,v=null,S=null,T=null,A=null,b=new Qt(0,0,0),E=0,y=!1,_=null,D=null,L=null,U=null,V=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,it=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=it>=2);let ht=null,At={},gt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),kt=new Se().fromArray(gt),qt=new Se().fromArray(zt);function Vt(k,ct,ut,wt){let Mt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(k,Q),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ut;Tt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(ct+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Q}let ot={};ot[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Ui),H(!1),W(Bc),yt(i.CULL_FACE),Z(ci);function yt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Pt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ht(k,ct){return d[k]!==ct?(i.bindFramebuffer(k,ct),d[k]=ct,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Nt(k,ct){let ut=c,wt=!1;if(k){ut=p.get(ct),ut===void 0&&(ut=[],p.set(ct,ut));let Mt=k.textures;if(ut.length!==Mt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Tt=Mt.length;Q<Tt;Q++)ut[Q]=i.COLOR_ATTACHMENT0+Q;ut.length=Mt.length,wt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ut)}function ne(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let pt={[yi]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};pt[rh]=i.MIN,pt[oh]=i.MAX;let R={[ah]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(k,ct,ut,wt,Mt,Q,Tt,Et,Wt,Lt){if(k===ci){M===!0&&(Pt(i.BLEND),M=!1);return}if(M===!1&&(yt(i.BLEND),M=!0),k!==nh){if(k!==g||Lt!==y){if((f!==yi||S!==yi)&&(i.blendEquation(i.FUNC_ADD),f=yi,S=yi),Lt)switch(k){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,v=null,T=null,A=null,b.set(0,0,0),E=0,g=k,y=Lt}return}Mt=Mt||ct,Q=Q||ut,Tt=Tt||wt,(ct!==f||Mt!==S)&&(i.blendEquationSeparate(pt[ct],pt[Mt]),f=ct,S=Mt),(ut!==w||wt!==v||Q!==T||Tt!==A)&&(i.blendFuncSeparate(R[ut],R[wt],R[Q],R[Tt]),w=ut,v=wt,T=Q,A=Tt),(Et.equals(b)===!1||Wt!==E)&&(i.blendColor(Et.r,Et.g,Et.b,Wt),b.copy(Et),E=Wt),g=k,y=!1}function z(k,ct){k.side===Ke?Pt(i.CULL_FACE):yt(i.CULL_FACE);let ut=k.side===tn;ct&&(ut=!ut),H(ut),k.blending===Li&&k.transparent===!1?Z(ci):Z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let wt=k.stencilWrite;a.setTest(wt),wt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(k){_!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),_=k)}function W(k){k!==th?(yt(i.CULL_FACE),k!==D&&(k===Bc?i.cullFace(i.BACK):k===eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),D=k}function tt(k){k!==L&&(G&&i.lineWidth(k),L=k)}function q(k,ct,ut){k?(yt(i.POLYGON_OFFSET_FILL),(U!==ct||V!==ut)&&(i.polygonOffset(ct,ut),U=ct,V=ut)):Pt(i.POLYGON_OFFSET_FILL)}function nt(k){k?yt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function bt(k){k===void 0&&(k=i.TEXTURE0+$-1),ht!==k&&(i.activeTexture(k),ht=k)}function xt(k,ct,ut){ut===void 0&&(ht===null?ut=i.TEXTURE0+$-1:ut=ht);let wt=At[ut];wt===void 0&&(wt={type:void 0,texture:void 0},At[ut]=wt),(wt.type!==k||wt.texture!==ct)&&(ht!==ut&&(i.activeTexture(ut),ht=ut),i.bindTexture(k,ct||ot[k]),wt.type=k,wt.texture=ct)}function C(){let k=At[ht];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(k){kt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function _t(k){qt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),qt.copy(k))}function lt(k,ct){let ut=h.get(ct);ut===void 0&&(ut=new WeakMap,h.set(ct,ut));let wt=ut.get(k);wt===void 0&&(wt=i.getUniformBlockIndex(ct,k.name),ut.set(k,wt))}function at(k,ct){let wt=h.get(ct).get(k);l.get(ct)!==wt&&(i.uniformBlockBinding(ct,wt,k.__bindingPointIndex),l.set(ct,wt))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ht=null,At={},d={},p=new WeakMap,c=[],x=null,M=!1,g=null,f=null,w=null,v=null,S=null,T=null,A=null,b=new Qt(0,0,0),E=0,y=!1,_=null,D=null,L=null,U=null,V=null,kt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Pt,bindFramebuffer:Ht,drawBuffers:Nt,useProgram:ne,setBlending:Z,setMaterial:z,setFlipSided:H,setCullFace:W,setLineWidth:tt,setPolygonOffset:q,setScissorTest:nt,activeTexture:bt,bindTexture:xt,unbindTexture:C,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:mt,texImage3D:j,updateUBOMapping:lt,uniformBlockBinding:at,texStorage2D:J,texStorage3D:st,texSubImage2D:F,texSubImage3D:O,compressedTexSubImage2D:N,compressedTexSubImage3D:X,scissor:ft,viewport:_t,reset:vt}}function L1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,u=new WeakMap,d,p=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,m){return c?new OffscreenCanvas(C,m):hr("canvas")}function M(C,m,I){let F=1,O=xt(C);if((O.width>I||O.height>I)&&(F=I/Math.max(O.width,O.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let N=Math.floor(F*O.width),X=Math.floor(F*O.height);d===void 0&&(d=x(N,X));let J=m?x(N,X):d;return J.width=N,J.height=X,J.getContext("2d").drawImage(C,0,0,N,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+N+"x"+X+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),C;return C}function g(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,m,I,F,O=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let N=m;if(m===i.RED&&(I===i.FLOAT&&(N=i.R32F),I===i.HALF_FLOAT&&(N=i.R16F),I===i.UNSIGNED_BYTE&&(N=i.R8)),m===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.R8UI),I===i.UNSIGNED_SHORT&&(N=i.R16UI),I===i.UNSIGNED_INT&&(N=i.R32UI),I===i.BYTE&&(N=i.R8I),I===i.SHORT&&(N=i.R16I),I===i.INT&&(N=i.R32I)),m===i.RG&&(I===i.FLOAT&&(N=i.RG32F),I===i.HALF_FLOAT&&(N=i.RG16F),I===i.UNSIGNED_BYTE&&(N=i.RG8)),m===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RG8UI),I===i.UNSIGNED_SHORT&&(N=i.RG16UI),I===i.UNSIGNED_INT&&(N=i.RG32UI),I===i.BYTE&&(N=i.RG8I),I===i.SHORT&&(N=i.RG16I),I===i.INT&&(N=i.RG32I)),m===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RGB8UI),I===i.UNSIGNED_SHORT&&(N=i.RGB16UI),I===i.UNSIGNED_INT&&(N=i.RGB32UI),I===i.BYTE&&(N=i.RGB8I),I===i.SHORT&&(N=i.RGB16I),I===i.INT&&(N=i.RGB32I)),m===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),I===i.UNSIGNED_INT&&(N=i.RGBA32UI),I===i.BYTE&&(N=i.RGBA8I),I===i.SHORT&&(N=i.RGBA16I),I===i.INT&&(N=i.RGBA32I)),m===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(N=i.R11F_G11F_B10F)),m===i.RGBA){let X=O?cr:_e.getTransfer(F);I===i.FLOAT&&(N=i.RGBA32F),I===i.HALF_FLOAT&&(N=i.RGBA16F),I===i.UNSIGNED_BYTE&&(N=X===we?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function S(C,m){let I;return C?m===null||m===wi||m===Fs?I=i.DEPTH24_STENCIL8:m===zn?I=i.DEPTH32F_STENCIL8:m===Ls&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===wi||m===Fs?I=i.DEPTH_COMPONENT24:m===zn?I=i.DEPTH_COMPONENT32F:m===Ls&&(I=i.DEPTH_COMPONENT16),I}function T(C,m){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==Mn?Math.log2(Math.max(m.width,m.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?m.mipmaps.length:1}function A(C){let m=C.target;m.removeEventListener("dispose",A),E(m),m.isVideoTexture&&u.delete(m)}function b(C){let m=C.target;m.removeEventListener("dispose",b),_(m)}function E(C){let m=n.get(C);if(m.__webglInit===void 0)return;let I=C.source,F=p.get(I);if(F){let O=F[m.__cacheKey];O.usedTimes--,O.usedTimes===0&&y(C),Object.keys(F).length===0&&p.delete(I)}n.remove(C)}function y(C){let m=n.get(C);i.deleteTexture(m.__webglTexture);let I=C.source,F=p.get(I);delete F[m.__cacheKey],o.memory.textures--}function _(C){let m=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(m.__webglFramebuffer[F]))for(let O=0;O<m.__webglFramebuffer[F].length;O++)i.deleteFramebuffer(m.__webglFramebuffer[F][O]);else i.deleteFramebuffer(m.__webglFramebuffer[F]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[F])}else{if(Array.isArray(m.__webglFramebuffer))for(let F=0;F<m.__webglFramebuffer.length;F++)i.deleteFramebuffer(m.__webglFramebuffer[F]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let F=0;F<m.__webglColorRenderbuffer.length;F++)m.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[F]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let I=C.textures;for(let F=0,O=I.length;F<O;F++){let N=n.get(I[F]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(I[F])}n.remove(C)}let D=0;function L(){D=0}function U(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){let m=[];return m.push(C.wrapS),m.push(C.wrapT),m.push(C.wrapR||0),m.push(C.magFilter),m.push(C.minFilter),m.push(C.anisotropy),m.push(C.internalFormat),m.push(C.format),m.push(C.type),m.push(C.generateMipmaps),m.push(C.premultiplyAlpha),m.push(C.flipY),m.push(C.unpackAlignment),m.push(C.colorSpace),m.join()}function $(C,m){let I=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(I,C,m);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+m)}function G(C,m){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){ot(I,C,m);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+m)}function it(C,m){let I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){ot(I,C,m);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+m)}function Y(C,m){let I=n.get(C);if(C.version>0&&I.__version!==C.version){yt(I,C,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+m)}let ht={[ys]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},At={[gn]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},gt={[Dh]:i.NEVER,[Bh]:i.ALWAYS,[Lh]:i.LESS,[Kc]:i.LEQUAL,[Uh]:i.EQUAL,[Oh]:i.GEQUAL,[Fh]:i.GREATER,[Nh]:i.NOTEQUAL};function zt(C,m){if(m.type===zn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Mn||m.magFilter===na||m.magFilter===Br||m.magFilter===$n||m.minFilter===Mn||m.minFilter===na||m.minFilter===Br||m.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ht[m.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ht[m.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ht[m.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,At[m.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,At[m.minFilter]),m.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,gt[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===gn||m.minFilter!==Br&&m.minFilter!==$n||m.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function kt(C,m){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,m.addEventListener("dispose",A));let F=m.source,O=p.get(F);O===void 0&&(O={},p.set(F,O));let N=V(m);if(N!==C.__cacheKey){O[N]===void 0&&(O[N]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),O[N].usedTimes++;let X=O[C.__cacheKey];X!==void 0&&(O[C.__cacheKey].usedTimes--,X.usedTimes===0&&y(m)),C.__cacheKey=N,C.__webglTexture=O[N].texture}return I}function qt(C,m,I){return Math.floor(Math.floor(C/I)/m)}function Vt(C,m,I,F){let N=C.updateRanges;if(N.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,I,F,m.data);else{N.sort((j,ft)=>j.start-ft.start);let X=0;for(let j=1;j<N.length;j++){let ft=N[X],_t=N[j],lt=ft.start+ft.count,at=qt(_t.start,m.width,4),vt=qt(ft.start,m.width,4);_t.start<=lt+1&&at===vt&&qt(_t.start+_t.count-1,m.width,4)===at?ft.count=Math.max(ft.count,_t.start+_t.count-ft.start):(++X,N[X]=_t)}N.length=X+1;let J=i.getParameter(i.UNPACK_ROW_LENGTH),st=i.getParameter(i.UNPACK_SKIP_PIXELS),mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let j=0,ft=N.length;j<ft;j++){let _t=N[j],lt=Math.floor(_t.start/4),at=Math.ceil(_t.count/4),vt=lt%m.width,k=Math.floor(lt/m.width),ct=at,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,vt,k,ct,ut,I,F,m.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,J),i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function ot(C,m,I){let F=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(F=i.TEXTURE_3D);let O=kt(C,m),N=m.source;e.bindTexture(F,C.__webglTexture,i.TEXTURE0+I);let X=n.get(N);if(N.version!==X.__version||O===!0){e.activeTexture(i.TEXTURE0+I);let J=_e.getPrimaries(_e.workingColorSpace),st=m.colorSpace===hi?null:_e.getPrimaries(m.colorSpace),mt=m.colorSpace===hi||J===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let j=M(m.image,!1,s.maxTextureSize);j=bt(m,j);let ft=r.convert(m.format,m.colorSpace),_t=r.convert(m.type),lt=v(m.internalFormat,ft,_t,m.colorSpace,m.isVideoTexture);zt(F,m);let at,vt=m.mipmaps,k=m.isVideoTexture!==!0,ct=X.__version===void 0||O===!0,ut=N.dataReady,wt=T(m,j);if(m.isDepthTexture)lt=S(m.format===Ns,m.type),ct&&(k?e.texStorage2D(i.TEXTURE_2D,1,lt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,lt,j.width,j.height,0,ft,_t,null));else if(m.isDataTexture)if(vt.length>0){k&&ct&&e.texStorage2D(i.TEXTURE_2D,wt,lt,vt[0].width,vt[0].height);for(let Mt=0,Q=vt.length;Mt<Q;Mt++)at=vt[Mt],k?ut&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,at.width,at.height,ft,_t,at.data):e.texImage2D(i.TEXTURE_2D,Mt,lt,at.width,at.height,0,ft,_t,at.data);m.generateMipmaps=!1}else k?(ct&&e.texStorage2D(i.TEXTURE_2D,wt,lt,j.width,j.height),ut&&Vt(m,j,ft,_t)):e.texImage2D(i.TEXTURE_2D,0,lt,j.width,j.height,0,ft,_t,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){k&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,lt,vt[0].width,vt[0].height,j.depth);for(let Mt=0,Q=vt.length;Mt<Q;Mt++)if(at=vt[Mt],m.format!==_n)if(ft!==null)if(k){if(ut)if(m.layerUpdates.size>0){let Tt=rl(at.width,at.height,m.format,m.type);for(let Et of m.layerUpdates){let Wt=at.data.subarray(Et*Tt/at.data.BYTES_PER_ELEMENT,(Et+1)*Tt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Et,at.width,at.height,1,ft,Wt)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,at.width,at.height,j.depth,ft,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,lt,at.width,at.height,j.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,at.width,at.height,j.depth,ft,_t,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,lt,at.width,at.height,j.depth,0,ft,_t,at.data)}else{k&&ct&&e.texStorage2D(i.TEXTURE_2D,wt,lt,vt[0].width,vt[0].height);for(let Mt=0,Q=vt.length;Mt<Q;Mt++)at=vt[Mt],m.format!==_n?ft!==null?k?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,at.width,at.height,ft,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,lt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ut&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,at.width,at.height,ft,_t,at.data):e.texImage2D(i.TEXTURE_2D,Mt,lt,at.width,at.height,0,ft,_t,at.data)}else if(m.isDataArrayTexture)if(k){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,lt,j.width,j.height,j.depth),ut)if(m.layerUpdates.size>0){let Mt=rl(j.width,j.height,m.format,m.type);for(let Q of m.layerUpdates){let Tt=j.data.subarray(Q*Mt/j.data.BYTES_PER_ELEMENT,(Q+1)*Mt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,j.width,j.height,1,ft,_t,Tt)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,_t,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,j.width,j.height,j.depth,0,ft,_t,j.data);else if(m.isData3DTexture)k?(ct&&e.texStorage3D(i.TEXTURE_3D,wt,lt,j.width,j.height,j.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,_t,j.data)):e.texImage3D(i.TEXTURE_3D,0,lt,j.width,j.height,j.depth,0,ft,_t,j.data);else if(m.isFramebufferTexture){if(ct)if(k)e.texStorage2D(i.TEXTURE_2D,wt,lt,j.width,j.height);else{let Mt=j.width,Q=j.height;for(let Tt=0;Tt<wt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,lt,Mt,Q,0,ft,_t,null),Mt>>=1,Q>>=1}}else if(vt.length>0){if(k&&ct){let Mt=xt(vt[0]);e.texStorage2D(i.TEXTURE_2D,wt,lt,Mt.width,Mt.height)}for(let Mt=0,Q=vt.length;Mt<Q;Mt++)at=vt[Mt],k?ut&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,ft,_t,at):e.texImage2D(i.TEXTURE_2D,Mt,lt,ft,_t,at);m.generateMipmaps=!1}else if(k){if(ct){let Mt=xt(j);e.texStorage2D(i.TEXTURE_2D,wt,lt,Mt.width,Mt.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,_t,j)}else e.texImage2D(i.TEXTURE_2D,0,lt,ft,_t,j);g(m)&&f(F),X.__version=N.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function yt(C,m,I){if(m.image.length!==6)return;let F=kt(C,m),O=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+I);let N=n.get(O);if(O.version!==N.__version||F===!0){e.activeTexture(i.TEXTURE0+I);let X=_e.getPrimaries(_e.workingColorSpace),J=m.colorSpace===hi?null:_e.getPrimaries(m.colorSpace),st=m.colorSpace===hi||X===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let mt=m.isCompressedTexture||m.image[0].isCompressedTexture,j=m.image[0]&&m.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!mt&&!j?ft[Q]=M(m.image[Q],!0,s.maxCubemapSize):ft[Q]=j?m.image[Q].image:m.image[Q],ft[Q]=bt(m,ft[Q]);let _t=ft[0],lt=r.convert(m.format,m.colorSpace),at=r.convert(m.type),vt=v(m.internalFormat,lt,at,m.colorSpace),k=m.isVideoTexture!==!0,ct=N.__version===void 0||F===!0,ut=O.dataReady,wt=T(m,_t);zt(i.TEXTURE_CUBE_MAP,m);let Mt;if(mt){k&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,vt,_t.width,_t.height);for(let Q=0;Q<6;Q++){Mt=ft[Q].mipmaps;for(let Tt=0;Tt<Mt.length;Tt++){let Et=Mt[Tt];m.format!==_n?lt!==null?k?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Et.width,Et.height,lt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Et.width,Et.height,lt,at,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,vt,Et.width,Et.height,0,lt,at,Et.data)}}}else{if(Mt=m.mipmaps,k&&ct){Mt.length>0&&wt++;let Q=xt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(j){k?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,lt,at,ft[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,vt,ft[Q].width,ft[Q].height,0,lt,at,ft[Q].data);for(let Tt=0;Tt<Mt.length;Tt++){let Wt=Mt[Tt].image[Q].image;k?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Wt.width,Wt.height,lt,at,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,vt,Wt.width,Wt.height,0,lt,at,Wt.data)}}else{k?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,lt,at,ft[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,vt,lt,at,ft[Q]);for(let Tt=0;Tt<Mt.length;Tt++){let Et=Mt[Tt];k?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,lt,at,Et.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,vt,lt,at,Et.image[Q])}}}g(m)&&f(i.TEXTURE_CUBE_MAP),N.__version=O.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function Pt(C,m,I,F,O,N){let X=r.convert(I.format,I.colorSpace),J=r.convert(I.type),st=v(I.internalFormat,X,J,I.colorSpace),mt=n.get(m),j=n.get(I);if(j.__renderTarget=m,!mt.__hasExternalTextures){let ft=Math.max(1,m.width>>N),_t=Math.max(1,m.height>>N);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?e.texImage3D(O,N,st,ft,_t,m.depth,0,X,J,null):e.texImage2D(O,N,st,ft,_t,0,X,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),q(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,O,j.__webglTexture,0,tt(m)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,O,j.__webglTexture,N),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,m,I){if(i.bindRenderbuffer(i.RENDERBUFFER,C),m.depthBuffer){let F=m.depthTexture,O=F&&F.isDepthTexture?F.type:null,N=S(m.stencilBuffer,O),X=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=tt(m);q(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,N,m.width,m.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,N,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,N,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,C)}else{let F=m.textures;for(let O=0;O<F.length;O++){let N=F[O],X=r.convert(N.format,N.colorSpace),J=r.convert(N.type),st=v(N.internalFormat,X,J,N.colorSpace),mt=tt(m);I&&q(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,st,m.width,m.height):q(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,st,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,st,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(m.depthTexture);F.__renderTarget=m,(!F.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),$(m.depthTexture,0);let O=F.__webglTexture,N=tt(m);if(m.depthTexture.format===vs)q(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(m.depthTexture.format===Ns)q(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ne(C){let m=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==C.depthTexture){let F=C.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),F){let O=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,F.removeEventListener("dispose",O)};F.addEventListener("dispose",O),m.__depthDisposeCallback=O}m.__boundDepthTexture=F}if(C.depthTexture&&!m.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let F=C.texture.mipmaps;F&&F.length>0?Nt(m.__webglFramebuffer[0],C):Nt(m.__webglFramebuffer,C)}else if(I){m.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[F]),m.__webglDepthbuffer[F]===void 0)m.__webglDepthbuffer[F]=i.createRenderbuffer(),Ht(m.__webglDepthbuffer[F],C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=m.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,N)}}else{let F=C.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ht(m.__webglDepthbuffer,C,!1);else{let O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,N)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,m,I){let F=n.get(C);m!==void 0&&Pt(F.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ne(C)}function R(C){let m=C.texture,I=n.get(C),F=n.get(m);C.addEventListener("dispose",b);let O=C.textures,N=C.isWebGLCubeRenderTarget===!0,X=O.length>1;if(X||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=m.version,o.memory.textures++),N){I.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[J]=[];for(let st=0;st<m.mipmaps.length;st++)I.__webglFramebuffer[J][st]=i.createFramebuffer()}else I.__webglFramebuffer[J]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)I.__webglFramebuffer[J]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(X)for(let J=0,st=O.length;J<st;J++){let mt=n.get(O[J]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&q(C)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<O.length;J++){let st=O[J];I.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[J]);let mt=r.convert(st.format,st.colorSpace),j=r.convert(st.type),ft=v(st.internalFormat,mt,j,st.colorSpace,C.isXRRenderTarget===!0),_t=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,I.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),zt(i.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let st=0;st<m.mipmaps.length;st++)Pt(I.__webglFramebuffer[J][st],C,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,st);else Pt(I.__webglFramebuffer[J],C,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(m)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(X){for(let J=0,st=O.length;J<st;J++){let mt=O[J],j=n.get(mt),ft=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),zt(ft,mt),Pt(I.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+J,ft,0),g(mt)&&f(ft)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,F.__webglTexture),zt(J,m),m.mipmaps&&m.mipmaps.length>0)for(let st=0;st<m.mipmaps.length;st++)Pt(I.__webglFramebuffer[st],C,m,i.COLOR_ATTACHMENT0,J,st);else Pt(I.__webglFramebuffer,C,m,i.COLOR_ATTACHMENT0,J,0);g(m)&&f(J),e.unbindTexture()}C.depthBuffer&&ne(C)}function Z(C){let m=C.textures;for(let I=0,F=m.length;I<F;I++){let O=m[I];if(g(O)){let N=w(C),X=n.get(O).__webglTexture;e.bindTexture(N,X),f(N),e.unbindTexture()}}}let z=[],H=[];function W(C){if(C.samples>0){if(q(C)===!1){let m=C.textures,I=C.width,F=C.height,O=i.COLOR_BUFFER_BIT,N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(C),J=m.length>1;if(J)for(let mt=0;mt<m.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);let st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let mt=0;mt<m.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[mt]);let j=n.get(m[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,I,F,0,0,I,F,O,i.NEAREST),l===!0&&(z.length=0,H.length=0,z.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(N),H.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let mt=0;mt<m.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,X.__webglColorRenderbuffer[mt]);let j=n.get(m[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let m=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function tt(C){return Math.min(s.maxSamples,C.samples)}function q(C){let m=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function nt(C){let m=o.render.frame;u.get(C)!==m&&(u.set(C,m),C.update())}function bt(C,m){let I=C.colorSpace,F=C.format,O=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Fi&&I!==hi&&(_e.getTransfer(I)===we?(F!==_n||O!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),m}function xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=pt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=q}function U1(i,t){function e(n,s=hi){let r,o=_e.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===_n)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===oa)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Da||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Fa||n===Na||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N1=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:F1,fragmentShader:N1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,d=null,p=null,c=null,x=null,M=typeof XRWebGLBinding<"u",g=new _l,f={},w=e.getContextAttributes(),v=null,S=null,T=[],A=[],b=new It,E=null,y=new hn;y.viewport=new Se;let _=new hn;_.viewport=new Se;let D=[y,_],L=new Wo,U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let yt=T[ot];return yt===void 0&&(yt=new Es,T[ot]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(ot){let yt=T[ot];return yt===void 0&&(yt=new Es,T[ot]=yt),yt.getGripSpace()},this.getHand=function(ot){let yt=T[ot];return yt===void 0&&(yt=new Es,T[ot]=yt),yt.getHandSpace()};function $(ot){let yt=A.indexOf(ot.inputSource);if(yt===-1)return;let Pt=T[yt];Pt!==void 0&&(Pt.update(ot.inputSource,ot.frame,h||o),Pt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function G(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",it);for(let ot=0;ot<T.length;ot++){let yt=A[ot];yt!==null&&(A[ot]=null,T[ot].disconnect(yt))}U=null,V=null,g.reset();for(let ot in f)delete f[ot];t.setRenderTarget(v),c=null,p=null,d=null,s=null,S=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ot){h=ot},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",G),s.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Ht=null,Nt=null;w.depth&&(Nt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=w.stencil?Ns:vs,Ht=w.stencil?Fs:wi);let ne={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(ne),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Yn(p.textureWidth,p.textureHeight,{format:_n,type:Bn,depthTexture:new _r(p.textureWidth,p.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Yn(c.framebufferWidth,c.framebufferHeight,{format:_n,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(ot){for(let yt=0;yt<ot.removed.length;yt++){let Pt=ot.removed[yt],Ht=A.indexOf(Pt);Ht>=0&&(A[Ht]=null,T[Ht].disconnect(Pt))}for(let yt=0;yt<ot.added.length;yt++){let Pt=ot.added[yt],Ht=A.indexOf(Pt);if(Ht===-1){for(let ne=0;ne<T.length;ne++)if(ne>=A.length){A.push(Pt),Ht=ne;break}else if(A[ne]===null){A[ne]=Pt,Ht=ne;break}if(Ht===-1)break}let Nt=T[Ht];Nt&&Nt.connect(Pt)}}let Y=new B,ht=new B;function At(ot,yt,Pt){Y.setFromMatrixPosition(yt.matrixWorld),ht.setFromMatrixPosition(Pt.matrixWorld);let Ht=Y.distanceTo(ht),Nt=yt.projectionMatrix.elements,ne=Pt.projectionMatrix.elements,pt=Nt[14]/(Nt[10]-1),R=Nt[14]/(Nt[10]+1),Z=(Nt[9]+1)/Nt[5],z=(Nt[9]-1)/Nt[5],H=(Nt[8]-1)/Nt[0],W=(ne[8]+1)/ne[0],tt=pt*H,q=pt*W,nt=Ht/(-H+W),bt=nt*-H;if(yt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(bt),ot.translateZ(nt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Nt[10]===-1)ot.projectionMatrix.copy(yt.projectionMatrix),ot.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let xt=pt+nt,C=R+nt,m=tt-bt,I=q+(Ht-bt),F=Z*R/C*xt,O=z*R/C*xt;ot.projectionMatrix.makePerspective(m,I,F,O,xt,C),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,yt){yt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(yt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let yt=ot.near,Pt=ot.far;g.texture!==null&&(g.depthNear>0&&(yt=g.depthNear),g.depthFar>0&&(Pt=g.depthFar)),L.near=_.near=y.near=yt,L.far=_.far=y.far=Pt,(U!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,V=L.far),L.layers.mask=ot.layers.mask|6,y.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;let Ht=ot.parent,Nt=L.cameras;gt(L,Ht);for(let ne=0;ne<Nt.length;ne++)gt(Nt[ne],Ht);Nt.length===2?At(L,y,_):L.projectionMatrix.copy(y.projectionMatrix),zt(ot,L,Ht)};function zt(ot,yt,Pt){Pt===null?ot.matrix.copy(yt.matrixWorld):(ot.matrix.copy(Pt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(yt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(yt.projectionMatrix),ot.projectionMatrixInverse.copy(yt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Ms*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&c===null))return l},this.setFoveation=function(ot){l=ot,p!==null&&(p.fixedFoveation=ot),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=ot)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(ot){return f[ot]};let kt=null;function qt(ot,yt){if(u=yt.getViewerPose(h||o),x=yt,u!==null){let Pt=u.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let Ht=!1;Pt.length!==L.cameras.length&&(L.cameras.length=0,Ht=!0);for(let R=0;R<Pt.length;R++){let Z=Pt[R],z=null;if(c!==null)z=c.getViewport(Z);else{let W=d.getViewSubImage(p,Z);z=W.viewport,R===0&&(t.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(S))}let H=D[R];H===void 0&&(H=new hn,H.layers.enable(R),H.viewport=new Se,D[R]=H),H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Z.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(z.x,z.y,z.width,z.height),R===0&&(L.matrix.copy(H.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ht===!0&&L.cameras.push(H)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let R=d.getDepthInformation(Pt[0]);R&&R.isValid&&R.texture&&g.init(R,s.renderState)}if(Nt&&Nt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let R=0;R<Pt.length;R++){let Z=Pt[R].camera;if(Z){let z=f[Z];z||(z=new yr,f[Z]=z);let H=d.getCameraImage(Z);z.sourceTexture=H}}}}for(let Pt=0;Pt<T.length;Pt++){let Ht=A[Pt],Nt=T[Pt];Ht!==null&&Nt!==void 0&&Nt.update(Ht,yt,h||o)}kt&&kt(ot,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),x=null}let Vt=new xu;Vt.setAnimationLoop(qt),this.setAnimationLoop=function(ot){kt=ot},this.dispose=function(){}}},$i=new An,O1=new Ee;function B1(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,el(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,w,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&c(g,f,S)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),M(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,w,v):f.isSpriteMaterial?h(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===tn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===tn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let w=t.get(f),v=w.envMap,S=w.envMapRotation;v&&(g.envMap.value=v,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),g.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler($i)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,w,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*w,g.scale.value=v*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function c(g,f,w){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){let w=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){let S=v.program;n.uniformBlockBinding(w,S)}function h(w,v){let S=s[w.id];S===void 0&&(x(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",g));let T=v.program;n.updateUBOMapping(w,T);let A=t.render.frame;r[w.id]!==A&&(p(w),r[w.id]=A)}function u(w){let v=d();w.__bindingPointIndex=v;let S=i.createBuffer(),T=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let v=s[w.id],S=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,b=S.length;A<b;A++){let E=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,_=E.length;y<_;y++){let D=E[y];if(c(D,A,y,T)===!0){let L=D.__offset,U=Array.isArray(D.value)?D.value:[D.value],V=0;for(let $=0;$<U.length;$++){let G=U[$],it=M(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,L+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(w,v,S,T){let A=w.value,b=v+"_"+S;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{let E=T[b];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return T[b]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function x(w){let v=w.uniforms,S=0,T=16;for(let b=0,E=v.length;b<E;b++){let y=Array.isArray(v[b])?v[b]:[v[b]];for(let _=0,D=y.length;_<D;_++){let L=y[_],U=Array.isArray(L.value)?L.value:[L.value];for(let V=0,$=U.length;V<$;V++){let G=U[V],it=M(G),Y=S%T,ht=Y%it.boundary,At=Y+ht;S+=ht,At!==0&&T-At<it.storage&&(S+=T-At),L.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=it.storage}}}let A=S%T;return A>0&&(S+=T-A),w.__size=S,w.__cache={},this}function M(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function g(w){let v=w.target;v.removeEventListener("dispose",g);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:h,dispose:f}}var Va=class{constructor(t={}){let{canvas:e=zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;let x=new Uint32Array(4),M=new Int32Array(4),g=null,f=null,w=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1;this._outputColorSpace=ln;let A=0,b=0,E=null,y=-1,_=null,D=new Se,L=new Se,U=null,V=new Qt(0),$=0,G=e.width,it=e.height,Y=1,ht=null,At=null,gt=new Se(0,0,G,it),zt=new Se(0,0,G,it),kt=!1,qt=new As,Vt=!1,ot=!1,yt=new Ee,Pt=new B,Ht=new Se,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function pt(){return E===null?Y:1}let R=n;function Z(P,K){return e.getContext(P,K)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),R===null){let K="webgl2";if(R=Z(K,P),R===null)throw Z(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let z,H,W,tt,q,nt,bt,xt,C,m,I,F,O,N,X,J,st,mt,j,ft,_t,lt,at,vt;function k(){z=new i0(R),z.init(),lt=new U1(R,z),H=new $m(R,z,t,lt),W=new D1(R,z),H.reversedDepthBuffer&&p&&W.buffers.depth.setReversed(!0),tt=new o0(R),q=new y1,nt=new L1(R,z,W,q,H,lt,tt),bt=new Qm(S),xt=new n0(S),C=new df(R),at=new Zm(R,C),m=new s0(R,C,tt,at),I=new c0(R,m,C,tt),j=new a0(R,H,nt),J=new Km(q),F=new _1(S,bt,xt,z,H,at,J),O=new B1(S,q),N=new M1,X=new A1(z),mt=new qm(S,bt,xt,W,I,c,l),st=new I1(S,I,H),vt=new z1(R,tt,H,W),ft=new Jm(R,z,tt),_t=new r0(R,z,tt),tt.programs=F.programs,S.capabilities=H,S.extensions=z,S.properties=q,S.renderLists=N,S.shadowMap=st,S.state=W,S.info=tt}k();let ct=new yl(S,R);this.xr=ct,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let P=z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(G,it,!1))},this.getSize=function(P){return P.set(G,it)},this.setSize=function(P,K,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,it=K,e.width=Math.floor(P*Y),e.height=Math.floor(K*Y),rt===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(G*Y,it*Y).floor()},this.setDrawingBufferSize=function(P,K,rt){G=P,it=K,Y=rt,e.width=Math.floor(P*rt),e.height=Math.floor(K*rt),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(gt)},this.setViewport=function(P,K,rt,dt){P.isVector4?gt.set(P.x,P.y,P.z,P.w):gt.set(P,K,rt,dt),W.viewport(D.copy(gt).multiplyScalar(Y).round())},this.getScissor=function(P){return P.copy(zt)},this.setScissor=function(P,K,rt,dt){P.isVector4?zt.set(P.x,P.y,P.z,P.w):zt.set(P,K,rt,dt),W.scissor(L.copy(zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(P){W.setScissorTest(kt=P)},this.setOpaqueSort=function(P){ht=P},this.setTransparentSort=function(P){At=P},this.getClearColor=function(P){return P.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,rt=!0){let dt=0;if(P){let et=!1;if(E!==null){let Rt=E.texture.format;et=Rt===la||Rt===ca||Rt===aa}if(et){let Rt=E.texture.type,Ft=Rt===Bn||Rt===wi||Rt===Ls||Rt===Fs||Rt===sa||Rt===ra,Zt=mt.getClearColor(),Bt=mt.getClearAlpha(),Kt=Zt.r,Ot=Zt.g,Ct=Zt.b;Ft?(x[0]=Kt,x[1]=Ot,x[2]=Ct,x[3]=Bt,R.clearBufferuiv(R.COLOR,0,x)):(M[0]=Kt,M[1]=Ot,M[2]=Ct,M[3]=Bt,R.clearBufferiv(R.COLOR,0,M))}else dt|=R.COLOR_BUFFER_BIT}K&&(dt|=R.DEPTH_BUFFER_BIT),rt&&(dt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),mt.dispose(),N.dispose(),X.dispose(),q.dispose(),bt.dispose(),xt.dispose(),I.dispose(),at.dispose(),vt.dispose(),F.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Dt),ct.removeEventListener("sessionend",Ut),Gt.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let P=tt.autoReset,K=st.enabled,rt=st.autoUpdate,dt=st.needsUpdate,et=st.type;k(),tt.autoReset=P,st.enabled=K,st.autoUpdate=rt,st.needsUpdate=dt,st.type=et}function Mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Q(P){let K=P.target;K.removeEventListener("dispose",Q),Tt(K)}function Tt(P){Et(P),q.remove(P)}function Et(P){let K=q.get(P).programs;K!==void 0&&(K.forEach(function(rt){F.releaseProgram(rt)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,rt,dt,et,Rt){K===null&&(K=Nt);let Ft=et.isMesh&&et.matrixWorld.determinant()<0,Zt=kn(P,K,rt,dt,et);W.setMaterial(dt,Ft);let Bt=rt.index,Kt=1;if(dt.wireframe===!0){if(Bt=m.getWireframeAttribute(rt),Bt===void 0)return;Kt=2}let Ot=rt.drawRange,Ct=rt.attributes.position,ee=Ot.start*Kt,oe=(Ot.start+Ot.count)*Kt;Rt!==null&&(ee=Math.max(ee,Rt.start*Kt),oe=Math.min(oe,(Rt.start+Rt.count)*Kt)),Bt!==null?(ee=Math.max(ee,0),oe=Math.min(oe,Bt.count)):Ct!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Ct.count));let te=oe-ee;if(te<0||te===1/0)return;at.setup(et,dt,Zt,rt,Bt);let se,ae=ft;if(Bt!==null&&(se=C.get(Bt),ae=_t,ae.setIndex(se)),et.isMesh)dt.wireframe===!0?(W.setLineWidth(dt.wireframeLinewidth*pt()),ae.setMode(R.LINES)):ae.setMode(R.TRIANGLES);else if(et.isLine){let jt=dt.linewidth;jt===void 0&&(jt=1),W.setLineWidth(jt*pt()),et.isLineSegments?ae.setMode(R.LINES):et.isLineLoop?ae.setMode(R.LINE_LOOP):ae.setMode(R.LINE_STRIP)}else et.isPoints?ae.setMode(R.POINTS):et.isSprite&&ae.setMode(R.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))ae.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let jt=et._multiDrawStarts,xe=et._multiDrawCounts,ce=et._multiDrawCount,Ie=Bt?C.get(Bt).bytesPerElement:1,Pe=q.get(dt).currentProgram.getUniforms();for(let he=0;he<ce;he++)Pe.setValue(R,"_gl_DrawID",he),ae.render(jt[he]/Ie,xe[he])}else if(et.isInstancedMesh)ae.renderInstances(ee,te,et.count);else if(rt.isInstancedBufferGeometry){let jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,xe=Math.min(rt.instanceCount,jt);ae.renderInstances(ee,te,xe)}else ae.render(ee,te)};function Wt(P,K,rt){P.transparent===!0&&P.side===Ke&&P.forceSinglePass===!1?(P.side=tn,P.needsUpdate=!0,ve(P,K,rt),P.side=ri,P.needsUpdate=!0,ve(P,K,rt),P.side=Ke):ve(P,K,rt)}this.compile=function(P,K,rt=null){rt===null&&(rt=P),f=X.get(rt),f.init(K),v.push(f),rt.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(f.pushLight(et),et.castShadow&&f.pushShadow(et))}),P!==rt&&P.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(f.pushLight(et),et.castShadow&&f.pushShadow(et))}),f.setupLights();let dt=new Set;return P.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Rt=et.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){let Zt=Rt[Ft];Wt(Zt,rt,et),dt.add(Zt)}else Wt(Rt,rt,et),dt.add(Rt)}),f=v.pop(),dt},this.compileAsync=function(P,K,rt=null){let dt=this.compile(P,K,rt);return new Promise(et=>{function Rt(){if(dt.forEach(function(Ft){q.get(Ft).currentProgram.isReady()&&dt.delete(Ft)}),dt.size===0){et(P);return}setTimeout(Rt,10)}z.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Lt=null;function St(P){Lt&&Lt(P)}function Dt(){Gt.stop()}function Ut(){Gt.start()}let Gt=new xu;Gt.setAnimationLoop(St),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(P){Lt=P,ct.setAnimationLoop(P),P===null?Gt.stop():Gt.start()},ct.addEventListener("sessionstart",Dt),ct.addEventListener("sessionend",Ut),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,K,E),f=X.get(P,v.length),f.init(K),v.push(f),yt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),qt.setFromProjectionMatrix(yt,Un,K.reversedDepth),ot=this.localClippingEnabled,Vt=J.init(this.clippingPlanes,ot),g=N.get(P,w.length),g.init(),w.push(g),ct.enabled===!0&&ct.isPresenting===!0){let Rt=S.xr.getDepthSensingMesh();Rt!==null&&$t(Rt,K,-1/0,S.sortObjects)}$t(P,K,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ht,At),ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ne&&mt.addToRenderList(g,P),this.info.render.frame++,Vt===!0&&J.beginShadows();let rt=f.state.shadowsArray;st.render(rt,P,K),Vt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let dt=g.opaque,et=g.transmissive;if(f.setupLights(),K.isArrayCamera){let Rt=K.cameras;if(et.length>0)for(let Ft=0,Zt=Rt.length;Ft<Zt;Ft++){let Bt=Rt[Ft];re(dt,et,P,Bt)}ne&&mt.render(P);for(let Ft=0,Zt=Rt.length;Ft<Zt;Ft++){let Bt=Rt[Ft];Xt(g,P,Bt,Bt.viewport)}}else et.length>0&&re(dt,et,P,K),ne&&mt.render(P),Xt(g,P,K);E!==null&&b===0&&(nt.updateMultisampleRenderTarget(E),nt.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(S,P,K),at.resetDefaultState(),y=-1,_=null,v.pop(),v.length>0?(f=v[v.length-1],Vt===!0&&J.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function $t(P,K,rt,dt){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)rt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||qt.intersectsSprite(P)){dt&&Ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(yt);let Ft=I.update(P),Zt=P.material;Zt.visible&&g.push(P,Ft,Zt,rt,Ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||qt.intersectsObject(P))){let Ft=I.update(P),Zt=P.material;if(dt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ht.copy(P.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Ht.copy(Ft.boundingSphere.center)),Ht.applyMatrix4(P.matrixWorld).applyMatrix4(yt)),Array.isArray(Zt)){let Bt=Ft.groups;for(let Kt=0,Ot=Bt.length;Kt<Ot;Kt++){let Ct=Bt[Kt],ee=Zt[Ct.materialIndex];ee&&ee.visible&&g.push(P,Ft,ee,rt,Ht.z,Ct)}}else Zt.visible&&g.push(P,Ft,Zt,rt,Ht.z,null)}}let Rt=P.children;for(let Ft=0,Zt=Rt.length;Ft<Zt;Ft++)$t(Rt[Ft],K,rt,dt)}function Xt(P,K,rt,dt){let et=P.opaque,Rt=P.transmissive,Ft=P.transparent;f.setupLightsView(rt),Vt===!0&&J.setGlobalState(S.clippingPlanes,rt),dt&&W.viewport(D.copy(dt)),et.length>0&&Jt(et,K,rt),Rt.length>0&&Jt(Rt,K,rt),Ft.length>0&&Jt(Ft,K,rt),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function re(P,K,rt,dt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[dt.id]===void 0&&(f.state.transmissionRenderTarget[dt.id]=new Yn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Us:Bn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let Rt=f.state.transmissionRenderTarget[dt.id],Ft=dt.viewport||D;Rt.setSize(Ft.z*S.transmissionResolutionScale,Ft.w*S.transmissionResolutionScale);let Zt=S.getRenderTarget(),Bt=S.getActiveCubeFace(),Kt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(V),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),ne&&mt.render(rt);let Ot=S.toneMapping;S.toneMapping=li;let Ct=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),f.setupLightsView(dt),Vt===!0&&J.setGlobalState(S.clippingPlanes,dt),Jt(P,rt,dt),nt.updateMultisampleRenderTarget(Rt),nt.updateRenderTargetMipmap(Rt),z.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let oe=0,te=K.length;oe<te;oe++){let se=K[oe],ae=se.object,jt=se.geometry,xe=se.material,ce=se.group;if(xe.side===Ke&&ae.layers.test(dt.layers)){let Ie=xe.side;xe.side=tn,xe.needsUpdate=!0,pe(ae,rt,dt,jt,xe,ce),xe.side=Ie,xe.needsUpdate=!0,ee=!0}}ee===!0&&(nt.updateMultisampleRenderTarget(Rt),nt.updateRenderTargetMipmap(Rt))}S.setRenderTarget(Zt,Bt,Kt),S.setClearColor(V,$),Ct!==void 0&&(dt.viewport=Ct),S.toneMapping=Ot}function Jt(P,K,rt){let dt=K.isScene===!0?K.overrideMaterial:null;for(let et=0,Rt=P.length;et<Rt;et++){let Ft=P[et],Zt=Ft.object,Bt=Ft.geometry,Kt=Ft.group,Ot=Ft.material;Ot.allowOverride===!0&&dt!==null&&(Ot=dt),Zt.layers.test(rt.layers)&&pe(Zt,K,rt,Bt,Ot,Kt)}}function pe(P,K,rt,dt,et,Rt){P.onBeforeRender(S,K,rt,dt,et,Rt),P.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),et.onBeforeRender(S,K,rt,dt,P,Rt),et.transparent===!0&&et.side===Ke&&et.forceSinglePass===!1?(et.side=tn,et.needsUpdate=!0,S.renderBufferDirect(rt,K,dt,et,P,Rt),et.side=ri,et.needsUpdate=!0,S.renderBufferDirect(rt,K,dt,et,P,Rt),et.side=Ke):S.renderBufferDirect(rt,K,dt,et,P,Rt),P.onAfterRender(S,K,rt,dt,et,Rt)}function ve(P,K,rt){K.isScene!==!0&&(K=Nt);let dt=q.get(P),et=f.state.lights,Rt=f.state.shadowsArray,Ft=et.state.version,Zt=F.getParameters(P,et.state,Rt,K,rt),Bt=F.getProgramCacheKey(Zt),Kt=dt.programs;dt.environment=P.isMeshStandardMaterial?K.environment:null,dt.fog=K.fog,dt.envMap=(P.isMeshStandardMaterial?xt:bt).get(P.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Kt===void 0&&(P.addEventListener("dispose",Q),Kt=new Map,dt.programs=Kt);let Ot=Kt.get(Bt);if(Ot!==void 0){if(dt.currentProgram===Ot&&dt.lightsStateVersion===Ft)return Be(P,Zt),Ot}else Zt.uniforms=F.getUniforms(P),P.onBeforeCompile(Zt,S),Ot=F.acquireProgram(Zt,Bt),Kt.set(Bt,Ot),dt.uniforms=Zt.uniforms;let Ct=dt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ct.clippingPlanes=J.uniform),Be(P,Zt),dt.needsLights=pn(P),dt.lightsStateVersion=Ft,dt.needsLights&&(Ct.ambientLightColor.value=et.state.ambient,Ct.lightProbe.value=et.state.probe,Ct.directionalLights.value=et.state.directional,Ct.directionalLightShadows.value=et.state.directionalShadow,Ct.spotLights.value=et.state.spot,Ct.spotLightShadows.value=et.state.spotShadow,Ct.rectAreaLights.value=et.state.rectArea,Ct.ltc_1.value=et.state.rectAreaLTC1,Ct.ltc_2.value=et.state.rectAreaLTC2,Ct.pointLights.value=et.state.point,Ct.pointLightShadows.value=et.state.pointShadow,Ct.hemisphereLights.value=et.state.hemi,Ct.directionalShadowMap.value=et.state.directionalShadowMap,Ct.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ct.spotShadowMap.value=et.state.spotShadowMap,Ct.spotLightMatrix.value=et.state.spotLightMatrix,Ct.spotLightMap.value=et.state.spotLightMap,Ct.pointShadowMap.value=et.state.pointShadowMap,Ct.pointShadowMatrix.value=et.state.pointShadowMatrix),dt.currentProgram=Ot,dt.uniformsList=null,Ot}function Oe(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=ks.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Be(P,K){let rt=q.get(P);rt.outputColorSpace=K.outputColorSpace,rt.batching=K.batching,rt.batchingColor=K.batchingColor,rt.instancing=K.instancing,rt.instancingColor=K.instancingColor,rt.instancingMorph=K.instancingMorph,rt.skinning=K.skinning,rt.morphTargets=K.morphTargets,rt.morphNormals=K.morphNormals,rt.morphColors=K.morphColors,rt.morphTargetsCount=K.morphTargetsCount,rt.numClippingPlanes=K.numClippingPlanes,rt.numIntersection=K.numClipIntersection,rt.vertexAlphas=K.vertexAlphas,rt.vertexTangents=K.vertexTangents,rt.toneMapping=K.toneMapping}function kn(P,K,rt,dt,et){K.isScene!==!0&&(K=Nt),nt.resetTextureUnits();let Rt=K.fog,Ft=dt.isMeshStandardMaterial?K.environment:null,Zt=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fi,Bt=(dt.isMeshStandardMaterial?xt:bt).get(dt.envMap||Ft),Kt=dt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Ot=!!rt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Ct=!!rt.morphAttributes.position,ee=!!rt.morphAttributes.normal,oe=!!rt.morphAttributes.color,te=li;dt.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(te=S.toneMapping);let se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ae=se!==void 0?se.length:0,jt=q.get(dt),xe=f.state.lights;if(Vt===!0&&(ot===!0||P!==_)){let Re=P===_&&dt.id===y;J.setState(dt,P,Re)}let ce=!1;dt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==xe.state.version||jt.outputColorSpace!==Zt||et.isBatchedMesh&&jt.batching===!1||!et.isBatchedMesh&&jt.batching===!0||et.isBatchedMesh&&jt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&jt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&jt.instancing===!1||!et.isInstancedMesh&&jt.instancing===!0||et.isSkinnedMesh&&jt.skinning===!1||!et.isSkinnedMesh&&jt.skinning===!0||et.isInstancedMesh&&jt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&jt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&jt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&jt.instancingMorph===!1&&et.morphTexture!==null||jt.envMap!==Bt||dt.fog===!0&&jt.fog!==Rt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==J.numPlanes||jt.numIntersection!==J.numIntersection)||jt.vertexAlphas!==Kt||jt.vertexTangents!==Ot||jt.morphTargets!==Ct||jt.morphNormals!==ee||jt.morphColors!==oe||jt.toneMapping!==te||jt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,jt.__version=dt.version);let Ie=jt.currentProgram;ce===!0&&(Ie=ve(dt,K,et));let Pe=!1,he=!1,Je=!1,ge=Ie.getUniforms(),ze=jt.uniforms;if(W.useProgram(Ie.program)&&(Pe=!0,he=!0,Je=!0),dt.id!==y&&(y=dt.id,he=!0),Pe||_!==P){W.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ge.setValue(R,"projectionMatrix",P.projectionMatrix),ge.setValue(R,"viewMatrix",P.matrixWorldInverse);let Ve=ge.map.cameraPosition;Ve!==void 0&&Ve.setValue(R,Pt.setFromMatrixPosition(P.matrixWorld)),H.logarithmicDepthBuffer&&ge.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&ge.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,he=!0,Je=!0)}if(et.isSkinnedMesh){ge.setOptional(R,et,"bindMatrix"),ge.setOptional(R,et,"bindMatrixInverse");let Re=et.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ge.setValue(R,"boneTexture",Re.boneTexture,nt))}et.isBatchedMesh&&(ge.setOptional(R,et,"batchingTexture"),ge.setValue(R,"batchingTexture",et._matricesTexture,nt),ge.setOptional(R,et,"batchingIdTexture"),ge.setValue(R,"batchingIdTexture",et._indirectTexture,nt),ge.setOptional(R,et,"batchingColorTexture"),et._colorsTexture!==null&&ge.setValue(R,"batchingColorTexture",et._colorsTexture,nt));let ke=rt.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&j.update(et,rt,Ie),(he||jt.receiveShadow!==et.receiveShadow)&&(jt.receiveShadow=et.receiveShadow,ge.setValue(R,"receiveShadow",et.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(ze.envMap.value=Bt,ze.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&K.environment!==null&&(ze.envMapIntensity.value=K.environmentIntensity),he&&(ge.setValue(R,"toneMappingExposure",S.toneMappingExposure),jt.needsLights&&fn(ze,Je),Rt&&dt.fog===!0&&O.refreshFogUniforms(ze,Rt),O.refreshMaterialUniforms(ze,dt,Y,it,f.state.transmissionRenderTarget[P.id]),ks.upload(R,Oe(jt),ze,nt)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(ks.upload(R,Oe(jt),ze,nt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&ge.setValue(R,"center",et.center),ge.setValue(R,"modelViewMatrix",et.modelViewMatrix),ge.setValue(R,"normalMatrix",et.normalMatrix),ge.setValue(R,"modelMatrix",et.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){let Re=dt.uniformsGroups;for(let Ve=0,Ge=Re.length;Ve<Ge;Ve++){let nn=Re[Ve];vt.update(nn,Ie),vt.bind(nn,Ie)}}return Ie}function fn(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function pn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,K,rt){let dt=q.get(P);dt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),q.get(P.texture).__webglTexture=K,q.get(P.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:rt,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let rt=q.get(P);rt.__webglFramebuffer=K,rt.__useDefaultFramebuffer=K===void 0};let wn=R.createFramebuffer();this.setRenderTarget=function(P,K=0,rt=0){E=P,A=K,b=rt;let dt=!0,et=null,Rt=!1,Ft=!1;if(P){let Bt=q.get(P);if(Bt.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(R.FRAMEBUFFER,null),dt=!1;else if(Bt.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Bt.__hasExternalTextures)nt.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ct=P.depthTexture;if(Bt.__boundDepthTexture!==Ct){if(Ct!==null&&q.has(Ct)&&(P.width!==Ct.image.width||P.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}let Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ft=!0);let Ot=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ot[K])?et=Ot[K][rt]:et=Ot[K],Rt=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?et=q.get(P).__webglMultisampledFramebuffer:Array.isArray(Ot)?et=Ot[rt]:et=Ot,D.copy(P.viewport),L.copy(P.scissor),U=P.scissorTest}else D.copy(gt).multiplyScalar(Y).floor(),L.copy(zt).multiplyScalar(Y).floor(),U=kt;if(rt!==0&&(et=wn),W.bindFramebuffer(R.FRAMEBUFFER,et)&&dt&&W.drawBuffers(P,et),W.viewport(D),W.scissor(L),W.setScissorTest(U),Rt){let Bt=q.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt.__webglTexture,rt)}else if(Ft){let Bt=K;for(let Kt=0;Kt<P.textures.length;Kt++){let Ot=q.get(P.textures[Kt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Kt,Ot.__webglTexture,rt,Bt)}}else if(P!==null&&rt!==0){let Bt=q.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Bt.__webglTexture,rt)}y=-1},this.readRenderTargetPixels=function(P,K,rt,dt,et,Rt,Ft,Zt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){W.bindFramebuffer(R.FRAMEBUFFER,Bt);try{let Kt=P.textures[Zt],Ot=Kt.format,Ct=Kt.type;if(!H.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-dt&&rt>=0&&rt<=P.height-et&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Zt),R.readPixels(K,rt,dt,et,lt.convert(Ot),lt.convert(Ct),Rt))}finally{let Kt=E!==null?q.get(E).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(P,K,rt,dt,et,Rt,Ft,Zt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt)if(K>=0&&K<=P.width-dt&&rt>=0&&rt<=P.height-et){W.bindFramebuffer(R.FRAMEBUFFER,Bt);let Kt=P.textures[Zt],Ot=Kt.format,Ct=Kt.type;if(!H.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ee),R.bufferData(R.PIXEL_PACK_BUFFER,Rt.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Zt),R.readPixels(K,rt,dt,et,lt.convert(Ot),lt.convert(Ct),0);let oe=E!==null?q.get(E).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,oe);let te=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await kh(R,te,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ee),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Rt),R.deleteBuffer(ee),R.deleteSync(te),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,rt=0){let dt=Math.pow(2,-rt),et=Math.floor(P.image.width*dt),Rt=Math.floor(P.image.height*dt),Ft=K!==null?K.x:0,Zt=K!==null?K.y:0;nt.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,rt,0,0,Ft,Zt,et,Rt),W.unbindTexture()};let En=R.createFramebuffer(),Hn=R.createFramebuffer();this.copyTextureToTexture=function(P,K,rt=null,dt=null,et=0,Rt=null){Rt===null&&(et!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=et,et=0):Rt=0);let Ft,Zt,Bt,Kt,Ot,Ct,ee,oe,te,se=P.isCompressedTexture?P.mipmaps[Rt]:P.image;if(rt!==null)Ft=rt.max.x-rt.min.x,Zt=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,Ot=rt.min.y,Ct=rt.isBox3?rt.min.z:0;else{let ke=Math.pow(2,-et);Ft=Math.floor(se.width*ke),Zt=Math.floor(se.height*ke),P.isDataArrayTexture?Bt=se.depth:P.isData3DTexture?Bt=Math.floor(se.depth*ke):Bt=1,Kt=0,Ot=0,Ct=0}dt!==null?(ee=dt.x,oe=dt.y,te=dt.z):(ee=0,oe=0,te=0);let ae=lt.convert(K.format),jt=lt.convert(K.type),xe;K.isData3DTexture?(nt.setTexture3D(K,0),xe=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(nt.setTexture2DArray(K,0),xe=R.TEXTURE_2D_ARRAY):(nt.setTexture2D(K,0),xe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);let ce=R.getParameter(R.UNPACK_ROW_LENGTH),Ie=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Pe=R.getParameter(R.UNPACK_SKIP_PIXELS),he=R.getParameter(R.UNPACK_SKIP_ROWS),Je=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ot),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ct);let ge=P.isDataArrayTexture||P.isData3DTexture,ze=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let ke=q.get(P),Re=q.get(K),Ve=q.get(ke.__renderTarget),Ge=q.get(Re.__renderTarget);W.bindFramebuffer(R.READ_FRAMEBUFFER,Ve.__webglFramebuffer),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let nn=0;nn<Bt;nn++)ge&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(P).__webglTexture,et,Ct+nn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,q.get(K).__webglTexture,Rt,te+nn)),R.blitFramebuffer(Kt,Ot,Ft,Zt,ee,oe,Ft,Zt,R.DEPTH_BUFFER_BIT,R.NEAREST);W.bindFramebuffer(R.READ_FRAMEBUFFER,null),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(et!==0||P.isRenderTargetTexture||q.has(P)){let ke=q.get(P),Re=q.get(K);W.bindFramebuffer(R.READ_FRAMEBUFFER,En),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,Hn);for(let Ve=0;Ve<Bt;Ve++)ge?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,et,Ct+Ve):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ke.__webglTexture,et),ze?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,Rt,te+Ve):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,Rt),et!==0?R.blitFramebuffer(Kt,Ot,Ft,Zt,ee,oe,Ft,Zt,R.COLOR_BUFFER_BIT,R.NEAREST):ze?R.copyTexSubImage3D(xe,Rt,ee,oe,te+Ve,Kt,Ot,Ft,Zt):R.copyTexSubImage2D(xe,Rt,ee,oe,Kt,Ot,Ft,Zt);W.bindFramebuffer(R.READ_FRAMEBUFFER,null),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ze?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(xe,Rt,ee,oe,te,Ft,Zt,Bt,ae,jt,se.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,Rt,ee,oe,te,Ft,Zt,Bt,ae,se.data):R.texSubImage3D(xe,Rt,ee,oe,te,Ft,Zt,Bt,ae,jt,se):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Rt,ee,oe,Ft,Zt,ae,jt,se.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Rt,ee,oe,se.width,se.height,ae,se.data):R.texSubImage2D(R.TEXTURE_2D,Rt,ee,oe,Ft,Zt,ae,jt,se);R.pixelStorei(R.UNPACK_ROW_LENGTH,ce),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,he),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Je),Rt===0&&K.generateMipmaps&&R.generateMipmap(xe),W.unbindTexture()},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),W.unbindTexture()},this.resetState=function(){A=0,b=0,E=null,W.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var Wa=class extends Oi{constructor(){super();let t=new vi;t.deleteAttribute("uv");let e=new dn({side:tn}),n=new dn,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ye(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Bi(t,n,6),a=new Xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ye(t,Gs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let h=new ye(t,Gs(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new ye(t,Gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ye(t,Gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let p=new ye(t,Gs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let c=new ye(t,Gs(100));c.position.set(0,20,0),c.scale.set(1,.1,1),this.add(c)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(i){return new Lr({color:0,emissive:16777215,emissiveIntensity:i})}var Ue=new Wn,Xa=new B,bu=new It,Su=new It,wu=new It,Ya=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let l=0;l<s;l++){let h=1,u=3*l,d=3*l+1,p=3*l+2;t&&(u=t.getX(u),d=t.getX(d),p=t.getX(p)),n&&(h=n.getX(u)+n.getX(d)+n.getX(p)),Ue.a.fromBufferAttribute(e,u),Ue.b.fromBufferAttribute(e,d),Ue.c.fromBufferAttribute(e,p),h*=Ue.getArea(),r[l]=h}let o=new Float32Array(s),a=0;for(let l=0;l<s;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let l=this.indexAttribute,h=t*3,u=t*3+1,d=t*3+2;return l&&(h=l.getX(h),u=l.getX(u),d=l.getX(d)),Ue.a.fromBufferAttribute(this.positionAttribute,h),Ue.b.fromBufferAttribute(this.positionAttribute,u),Ue.c.fromBufferAttribute(this.positionAttribute,d),e.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ue.a.fromBufferAttribute(this.normalAttribute,h),Ue.b.fromBufferAttribute(this.normalAttribute,u),Ue.c.fromBufferAttribute(this.normalAttribute,d),n.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)).normalize()):Ue.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(Ue.a.fromBufferAttribute(this.colorAttribute,h),Ue.b.fromBufferAttribute(this.colorAttribute,u),Ue.c.fromBufferAttribute(this.colorAttribute,d),Xa.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),s.r=Xa.x,s.g=Xa.y,s.b=Xa.z),r!==void 0&&this.uvAttribute!==void 0&&(bu.fromBufferAttribute(this.uvAttribute,h),Su.fromBufferAttribute(this.uvAttribute,u),wu.fromBufferAttribute(this.uvAttribute,d),r.set(0,0).addScaledVector(bu,o).addScaledVector(Su,a).addScaledVector(wu,1-(o+a))),this}};var Eu=new B(0,1,0),Tu=new B(0,-1,0);function k1(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function H1(i,t,e=3){let n=new Rn(t*.1,t,i,e,4,!0);n.translate(0,i/2,0);let s=n.attributes.position;for(let r=0;r<s.count;r++){let o=Math.max(0,Math.min(1,s.getY(r)/i));s.setX(r,s.getX(r)+i*.24*Math.sin(Math.PI*.9*o)),s.setZ(r,s.getZ(r)+i*.12*o*o)}return n.computeVertexNormals(),n.computeBoundingBox(),n.userData.fiberProfile=Array.from({length:5},(r,o)=>{let a=o/4;return[i*.24*Math.sin(Math.PI*.9*a),i*a,i*.12*a*a]}),n.userData.fiberRadius=t,n.userData.radialSegments=e,n}function Au(i,t,e=1){if(t.catalogTier==="baseline"&&t.family==="grok")return;i.root.updateMatrixWorld(!0);let n=i.surfaces.slice(),s=n.find(h=>h.material.bumpMap)?.material;for(let h of n){let u=h.material;(h.userData.surfaceMaterial||u.name||t.material)==="clay"&&!u.userData.clayFinish&&(u.roughness=.96,u.bumpScale=.0036,u.bumpMap&&(u.bumpMap=u.bumpMap.clone(),u.bumpMap.repeat.set(2.8,2.8)),u.userData.clayFinish=!0)}for(let h of["head-beret","head-beanie"])i.root.getObjectByName(h)?.traverse(u=>{!u.isMesh||n.includes(u)||(u.material=u.material.clone(),u.material.name="micro",u.material.roughness=1,s?.bumpMap&&(u.material.bumpMap=s.bumpMap,u.material.bumpScale=.0012),u.userData.surfaceMaterial="micro",n.push(u))});let r=n.filter(h=>{let u=h.userData.surfaceMaterial||h.material.name||t.material,d=!0;for(let p=h;p;p=p.parent)p.visible||(d=!1);return["plush","micro","fabric","knit","fiber"].includes(u)&&d&&!h.userData.skipProceduralPile}),o=r.map(h=>{h.geometry.computeBoundingBox();let u=h.geometry.boundingBox.getSize(new B).multiply(h.scale);return Math.max(.012,2*(u.x*u.y+u.x*u.z+u.y*u.z))}),a=o.reduce((h,u)=>h+u,0)||1,l=i.eyeGroups.map(h=>h.getWorldPosition(new B));r.forEach((h,u)=>{let d=h.userData.surfaceMaterial||h.material.name||t.material,p=d==="knit"||d==="fabric"||d==="fiber",c=d==="micro",x=t.catalogTier==="baseline"&&c,M=t.catalogTier==="baseline"&&t.family==="dots";!p&&h.material.bumpMap&&(h.material.bumpScale=Math.min(h.material.bumpScale,M?35e-5:c?.0013:.0015));let f=Math.max(80,Math.round((M?28e3:p?3e4:c?1e5:19e4)*e*o[u]/a)),w=p?d==="fiber"?.018:.005:c?.01:.031;x&&(w=t.family==="meta-muse"?.0065:M?.036:.008);let v=p?48e-5:c?M?.0016:62e-5:.0011,S=H1(w,v,M?5:3),T=h.material.color.clone(),A=new dn({color:T,roughness:M?.96:1,metalness:0,side:Ke});M&&(A.emissive.copy(T),A.emissiveIntensity=.12),A.name="fine-pile";let b=new Bi(S,A,f);b.name="surface-fibers",b.castShadow=!1,b.receiveShadow=!M,b.userData.surfaceMaterial=d,b.userData.fiberProfile=S.userData.fiberProfile,b.userData.fiberRadius=v,b.userData.fiberTones=new Float32Array(f);let E=k1((t.randomSeed||"dot")+h.name+u),y=new Ya(h).setRandomGenerator(E).build(),_=new B,D=new B,L=new B,U=new B,V=new B,$=new B,G=new Xe,it=new Qt,Y=new Qt,ht=new je;for(let At=0;At<f;At++){y.sample(_,D,Y),D.normalize(),L.copy(Tu).addScaledVector(D,-Tu.dot(D)),L.lengthSq()<.005&&L.set(1,0,0).addScaledVector(D,-D.x),L.normalize(),U.crossVectors(D,L).normalize();let gt=Math.sin(_.x*6.7+_.y*3.1)*.16+Math.cos(_.z*5.4-_.y*2.2)*.09;L.multiplyScalar(.94).addScaledVector(U,gt+(E()-.5)*(M?.3:.48)).normalize(),M?V.copy(D).multiplyScalar(.5).addScaledVector(L,.86).normalize():V.copy(D).multiplyScalar(.63).addScaledVector(L,.77).normalize(),G.position.copy(_).addScaledVector(D,-w*.055),G.quaternion.setFromUnitVectors(Eu,V),ht.setFromAxisAngle(Eu,E()*Math.PI*2),G.quaternion.multiply(ht);let zt=M?.78+E()*.5:.64+E()*.52;$.copy(_).applyMatrix4(h.matrixWorld);for(let Vt of l){let ot=$.distanceToSquared(Vt);ot<.035&&(zt*=.36+.64*Math.min(1,ot/.035))}let kt=M?.82+E()*.32:.76+E()*.35;G.scale.set(kt,zt,kt),G.updateMatrix(),b.setMatrixAt(At,G.matrix);let qt=M?.96+E()*.07:p?.91+E()*.13:c?.91+E()*.15:.82+E()*.36;b.userData.fiberTones[At]=qt,it.copy(Y).multiplyScalar(qt),b.setColorAt(At,it)}b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0,b.frustumCulled=!1,h.add(b)})}var Za=class extends ye{constructor(t,e,n=!1,s=!1,r=1e4){let o=new Me;super(o,e),this.isMarchingCubes=!0;let a=this,l=new Float32Array(36),h=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(w){this.resolution=w,this.isolation=80,this.size=w,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let v=r*3;this.positionArray=new Float32Array(v*3);let S=new Ye(this.positionArray,3);S.setUsage(Os),o.setAttribute("position",S),this.normalArray=new Float32Array(v*3);let T=new Ye(this.normalArray,3);if(T.setUsage(Os),o.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(v*2);let A=new Ye(this.uvArray,2);A.setUsage(Os),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(v*3);let A=new Ye(this.colorArray,3);A.setUsage(Os),o.setAttribute("color",A)}o.boundingSphere=new qn(new B,1)};function d(w,v,S){return w+(v-w)*S}function p(w,v,S,T,A,b,E,y,_,D){let L=(S-E)/(y-E),U=a.normal_cache;l[v+0]=T+L*a.delta,l[v+1]=A,l[v+2]=b,h[v+0]=d(U[w+0],U[w+3],L),h[v+1]=d(U[w+1],U[w+4],L),h[v+2]=d(U[w+2],U[w+5],L),u[v+0]=d(a.palette[_*3+0],a.palette[D*3+0],L),u[v+1]=d(a.palette[_*3+1],a.palette[D*3+1],L),u[v+2]=d(a.palette[_*3+2],a.palette[D*3+2],L)}function c(w,v,S,T,A,b,E,y,_,D){let L=(S-E)/(y-E),U=a.normal_cache;l[v+0]=T,l[v+1]=A+L*a.delta,l[v+2]=b;let V=w+a.yd*3;h[v+0]=d(U[w+0],U[V+0],L),h[v+1]=d(U[w+1],U[V+1],L),h[v+2]=d(U[w+2],U[V+2],L),u[v+0]=d(a.palette[_*3+0],a.palette[D*3+0],L),u[v+1]=d(a.palette[_*3+1],a.palette[D*3+1],L),u[v+2]=d(a.palette[_*3+2],a.palette[D*3+2],L)}function x(w,v,S,T,A,b,E,y,_,D){let L=(S-E)/(y-E),U=a.normal_cache;l[v+0]=T,l[v+1]=A,l[v+2]=b+L*a.delta;let V=w+a.zd*3;h[v+0]=d(U[w+0],U[V+0],L),h[v+1]=d(U[w+1],U[V+1],L),h[v+2]=d(U[w+2],U[V+2],L),u[v+0]=d(a.palette[_*3+0],a.palette[D*3+0],L),u[v+1]=d(a.palette[_*3+1],a.palette[D*3+1],L),u[v+2]=d(a.palette[_*3+2],a.palette[D*3+2],L)}function M(w){let v=w*3;a.normal_cache[v]===0&&(a.normal_cache[v+0]=a.field[w-1]-a.field[w+1],a.normal_cache[v+1]=a.field[w-a.yd]-a.field[w+a.yd],a.normal_cache[v+2]=a.field[w-a.zd]-a.field[w+a.zd])}function g(w,v,S,T,A){let b=T+1,E=T+a.yd,y=T+a.zd,_=b+a.yd,D=b+a.zd,L=T+a.yd+a.zd,U=b+a.yd+a.zd,V=0,$=a.field[T],G=a.field[b],it=a.field[E],Y=a.field[_],ht=a.field[y],At=a.field[D],gt=a.field[L],zt=a.field[U];$<A&&(V|=1),G<A&&(V|=2),it<A&&(V|=8),Y<A&&(V|=4),ht<A&&(V|=16),At<A&&(V|=32),gt<A&&(V|=128),zt<A&&(V|=64);let kt=V1[V];if(kt===0)return 0;let qt=a.delta,Vt=w+qt,ot=v+qt,yt=S+qt;kt&1&&(M(T),M(b),p(T*3,0,A,w,v,S,$,G,T,b)),kt&2&&(M(b),M(_),c(b*3,3,A,Vt,v,S,G,Y,b,_)),kt&4&&(M(E),M(_),p(E*3,6,A,w,ot,S,it,Y,E,_)),kt&8&&(M(T),M(E),c(T*3,9,A,w,v,S,$,it,T,E)),kt&16&&(M(y),M(D),p(y*3,12,A,w,v,yt,ht,At,y,D)),kt&32&&(M(D),M(U),c(D*3,15,A,Vt,v,yt,At,zt,D,U)),kt&64&&(M(L),M(U),p(L*3,18,A,w,ot,yt,gt,zt,L,U)),kt&128&&(M(y),M(L),c(y*3,21,A,w,v,yt,ht,gt,y,L)),kt&256&&(M(T),M(y),x(T*3,24,A,w,v,S,$,ht,T,y)),kt&512&&(M(b),M(D),x(b*3,27,A,Vt,v,S,G,At,b,D)),kt&1024&&(M(_),M(U),x(_*3,30,A,Vt,ot,S,Y,zt,_,U)),kt&2048&&(M(E),M(L),x(E*3,33,A,w,ot,S,it,gt,E,L)),V<<=4;let Pt,Ht,Nt,ne=0,pt=0;for(;qa[V+pt]!=-1;)Pt=V+pt,Ht=Pt+1,Nt=Pt+2,f(l,h,u,3*qa[Pt],3*qa[Ht],3*qa[Nt]),pt+=3,ne++;return ne}function f(w,v,S,T,A,b){let E=a.count*3;if(a.positionArray[E+0]=w[T],a.positionArray[E+1]=w[T+1],a.positionArray[E+2]=w[T+2],a.positionArray[E+3]=w[A],a.positionArray[E+4]=w[A+1],a.positionArray[E+5]=w[A+2],a.positionArray[E+6]=w[b],a.positionArray[E+7]=w[b+1],a.positionArray[E+8]=w[b+2],a.material.flatShading===!0){let y=(v[T+0]+v[A+0]+v[b+0])/3,_=(v[T+1]+v[A+1]+v[b+1])/3,D=(v[T+2]+v[A+2]+v[b+2])/3;a.normalArray[E+0]=y,a.normalArray[E+1]=_,a.normalArray[E+2]=D,a.normalArray[E+3]=y,a.normalArray[E+4]=_,a.normalArray[E+5]=D,a.normalArray[E+6]=y,a.normalArray[E+7]=_,a.normalArray[E+8]=D}else a.normalArray[E+0]=v[T+0],a.normalArray[E+1]=v[T+1],a.normalArray[E+2]=v[T+2],a.normalArray[E+3]=v[A+0],a.normalArray[E+4]=v[A+1],a.normalArray[E+5]=v[A+2],a.normalArray[E+6]=v[b+0],a.normalArray[E+7]=v[b+1],a.normalArray[E+8]=v[b+2];if(a.enableUvs){let y=a.count*2;a.uvArray[y+0]=w[T+0],a.uvArray[y+1]=w[T+2],a.uvArray[y+2]=w[A+0],a.uvArray[y+3]=w[A+2],a.uvArray[y+4]=w[b+0],a.uvArray[y+5]=w[b+2]}a.enableColors&&(a.colorArray[E+0]=S[T+0],a.colorArray[E+1]=S[T+1],a.colorArray[E+2]=S[T+2],a.colorArray[E+3]=S[A+0],a.colorArray[E+4]=S[A+1],a.colorArray[E+5]=S[A+2],a.colorArray[E+6]=S[b+0],a.colorArray[E+7]=S[b+1],a.colorArray[E+8]=S[b+2]),a.count+=3}this.addBall=function(w,v,S,T,A,b){let E=Math.sign(T);T=Math.abs(T);let y=b!=null,_=new Qt(w,v,S);if(y)try{_=b instanceof Qt?b:Array.isArray(b)?new Qt(Math.min(Math.abs(b[0]),1),Math.min(Math.abs(b[1]),1),Math.min(Math.abs(b[2]),1)):new Qt(b)}catch{_=new Qt(w,v,S)}let D=this.size*Math.sqrt(T/A),L=S*this.size,U=v*this.size,V=w*this.size,$=Math.floor(L-D);$<1&&($=1);let G=Math.floor(L+D);G>this.size-1&&(G=this.size-1);let it=Math.floor(U-D);it<1&&(it=1);let Y=Math.floor(U+D);Y>this.size-1&&(Y=this.size-1);let ht=Math.floor(V-D);ht<1&&(ht=1);let At=Math.floor(V+D);At>this.size-1&&(At=this.size-1);let gt,zt,kt,qt,Vt,ot,yt,Pt,Ht,Nt,ne;for(kt=$;kt<G;kt++)for(Vt=this.size2*kt,Pt=kt/this.size-S,Ht=Pt*Pt,zt=it;zt<Y;zt++)for(qt=Vt+this.size*zt,yt=zt/this.size-v,Nt=yt*yt,gt=ht;gt<At;gt++)if(ot=gt/this.size-w,ne=T/(1e-6+ot*ot+Nt+Ht)-A,ne>0){this.field[qt+gt]+=ne*E;let pt=Math.sqrt((gt-V)*(gt-V)+(zt-U)*(zt-U)+(kt-L)*(kt-L))/D,R=1-pt*pt*pt*(pt*(pt*6-15)+10);this.palette[(qt+gt)*3+0]+=_.r*R,this.palette[(qt+gt)*3+1]+=_.g*R,this.palette[(qt+gt)*3+2]+=_.b*R}},this.addPlaneX=function(w,v){let S=this.size,T=this.yd,A=this.zd,b=this.field,E,y,_,D,L,U,V,$=S*Math.sqrt(w/v);for($>S&&($=S),E=0;E<$;E++)if(U=E/S,D=U*U,L=w/(1e-4+D)-v,L>0)for(y=0;y<S;y++)for(V=E+y*T,_=0;_<S;_++)b[A*_+V]+=L},this.addPlaneY=function(w,v){let S=this.size,T=this.yd,A=this.zd,b=this.field,E,y,_,D,L,U,V,$,G=S*Math.sqrt(w/v);for(G>S&&(G=S),y=0;y<G;y++)if(U=y/S,D=U*U,L=w/(1e-4+D)-v,L>0)for(V=y*T,E=0;E<S;E++)for($=V+E,_=0;_<S;_++)b[A*_+$]+=L},this.addPlaneZ=function(w,v){let S=this.size,T=this.yd,A=this.zd,b=this.field,E,y,_,D,L,U,V,$,G=S*Math.sqrt(w/v);for(G>S&&(G=S),_=0;_<G;_++)if(U=_/S,D=U*U,L=w/(1e-4+D)-v,L>0)for(V=A*_,y=0;y<S;y++)for($=V+y*T,E=0;E<S;E++)b[$+E]+=L},this.setCell=function(w,v,S,T){let A=this.size2*S+this.size*v+w;this.field[A]=T},this.getCell=function(w,v,S){let T=this.size2*S+this.size*v+w;return this.field[T]},this.blur=function(w=1){let v=this.field,S=v.slice(),T=this.size,A=this.size2;for(let b=0;b<T;b++)for(let E=0;E<T;E++)for(let y=0;y<T;y++){let _=A*y+T*E+b,D=S[_],L=1;for(let U=-1;U<=1;U+=2){let V=U+b;if(!(V<0||V>=T))for(let $=-1;$<=1;$+=2){let G=$+E;if(!(G<0||G>=T))for(let it=-1;it<=1;it+=2){let Y=it+y;if(Y<0||Y>=T)continue;let ht=A*Y+T*G+V,At=S[ht];L++,D+=w*(At-D)/L}}}v[_]=D}},this.reset=function(){for(let w=0;w<this.size3;w++)this.normal_cache[w*3]=0,this.field[w]=0,this.palette[w*3]=this.palette[w*3+1]=this.palette[w*3+2]=0},this.update=function(){this.count=0;let w=this.size-2;for(let v=1;v<w;v++){let S=this.size2*v,T=(v-this.halfsize)/this.halfsize;for(let A=1;A<w;A++){let b=S+this.size*A,E=(A-this.halfsize)/this.halfsize;for(let y=1;y<w;y++){let _=(y-this.halfsize)/this.halfsize,D=b+y;g(_,E,T,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},V1=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),qa=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Fe=Math.PI*2,Ru=new B(0,1,0),Ja=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),Xs=new Map,ts=(i,t,e)=>Math.max(t,Math.min(e,i)),ji=i=>new B(...i),Ws=(i,t)=>new Qt(i).multiplyScalar(t),en=(i,t,e)=>new Qt(i).lerp(new Qt(t),e),de=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Qn(i,t,e=.19,n={}){let s=n.resolution??72,r=n.ellipticalOpening,o=`sculpted:${i}:${s}:${r?JSON.stringify(r):"closed"}`;if(Xs.has(o))return Xs.get(o).clone();let a=1.54,l=new Za(s,void 0,!1,!1,5e4);l.isolation=0;let h=(f,w,v,[S,T,A,b,E,y])=>{f-=S,w-=T,v-=A;let _=Math.hypot(f/b,w/E,v/y),D=Math.hypot(f/(b*b),w/(E*E),v/(y*y));return D>1e-9?_*(_-1)/D:-Math.min(b,E,y)},u=(f,w)=>{let v=Math.max(e-Math.abs(f-w),0)/e;return Math.min(f,w)-v*v*e*.25},d=(f,w,v)=>{let S=Math.max(v-Math.abs(f-w),0)/v;return Math.max(f,w)+S*S*v*.25};for(let f=0;f<s;f++)for(let w=0;w<s;w++)for(let v=0;v<s;v++){let S=(v/s*2-1)*a,T=(w/s*2-1)*a,A=(f/s*2-1)*a,b=h(S,T,A,t[0]);for(let E=1;E<t.length;E++)b=u(b,h(S,T,A,t[E]));if(r){let E=Math.hypot((S-r.cx)/r.rx,(T-r.cy)/r.ry),y=(E-1)*Math.min(r.rx,r.ry),_=Math.abs(A-r.cz)-r.halfDepth,D=Math.max(y,_);b=d(b,-D,r.edge??.022)}l.field[v+w*s+f*s*s]=-b}l.update();let p=l.count,c=new Me,x=l.positionArray.slice(0,p*3),M=l.normalArray.slice(0,p*3),g=[];for(let f=0;f<p;f++)x[f*3]*=a,x[f*3+1]*=a,x[f*3+2]*=a,g.push(Math.atan2(x[f*3],x[f*3+2])/Fe+.5,(x[f*3+1]+1.2)/2.4);return c.setAttribute("position",new ie(x,3)),c.setAttribute("normal",new ie(M,3)),c.setAttribute("uv",new ie(g,2)),c.normalizeNormals(),c.computeBoundingBox(),c.computeBoundingSphere(),l.geometry.dispose(),l.material?.dispose(),Xs.set(o,c),c.clone()}function Ml(i){let t=[],e=[],n=[],s=[];for(let o of i){let a=o,l=t.length/3;if(t.push(...a.attributes.position.array),e.push(...a.attributes.normal.array),a.attributes.uv&&n.push(...a.attributes.uv.array),a.index)for(let h of a.index.array)s.push(h+l);else for(let h=0;h<a.attributes.position.count;h++)s.push(l+h);o.dispose()}let r=new Me;return r.setAttribute("position",new ie(t,3)),r.setAttribute("normal",new ie(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new ie(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function Cu(i,t,e=.82,n=.98){let s=i+":"+e+":"+n;if(Xs.has(s))return Xs.get(s).clone();let r=t.map(([g,f])=>new B(g,f,0));r.reduce((g,f,w)=>g+f.x*r[(w+1)%r.length].y-r[(w+1)%r.length].x*f.y,0)<0&&r.reverse();let a=new on(r,!0,"catmullrom",.35),l=112,h=48,u=[],d=[],p=[],c=r.reduce((g,f)=>g+Math.hypot(f.x,f.y),0)/r.length;for(let g=0;g<=h;g++){let f=g/h*Math.PI,w=Math.pow(Math.sin(f),n);for(let v=0;v<=l;v++){let S=a.getPoint(v/l),T=Math.hypot(S.x,S.y),A=w**2.65,b=c+(T-c)*A,E=T>1e-6?w*b/T:0;if(u.push(S.x*E,S.y*E,e*Math.cos(f)),d.push(v/l,g/h),v<l&&g<h){let y=g*(l+1)+v,_=y+l+1;p.push(y,_,y+1,_,_+1,y+1)}}}let x=new Me;x.setAttribute("position",new ie(u,3)),x.setAttribute("uv",new ie(d,2)),x.setIndex(p),x.computeVertexNormals();let M=x.attributes.normal;for(let g=0;g<=h;g++){let f=g*(l+1),w=f+l;if(g===0||g===h)for(let v=f;v<=w;v++)M.setXYZ(v,0,0,g===0?1:-1);else{let v=new B().fromBufferAttribute(M,f).add(new B().fromBufferAttribute(M,w)).normalize();M.setXYZ(f,v.x,v.y,v.z),M.setXYZ(w,v.x,v.y,v.z)}}return x.computeBoundingBox(),x.computeBoundingSphere(),Xs.set(s,x),x.clone()}function Xr(i,t,e=1){let n=new on(i.map(ji),!1,"centripetal"),s=30,r=14,o=n.computeFrenetFrames(s,!1),a=[],l=[],h=[];for(let d=0;d<=s;d++){let p=d/s,c=n.getPointAt(p),x=Math.min(1,Math.sin(Math.min(1,p/.13)*Math.PI/2),Math.sin(Math.min(1,(1-p)/.19)*Math.PI/2)),M=t*(1+(e-1)*p)*x;for(let g=0;g<=r;g++){let f=g/r*Fe,w=o.normals[d],v=o.binormals[d];if(a.push(c.x+(w.x*Math.cos(f)+v.x*Math.sin(f))*M,c.y+(w.y*Math.cos(f)+v.y*Math.sin(f))*M,c.z+(w.z*Math.cos(f)+v.z*Math.sin(f))*M),l.push(g/r,p),d<s&&g<r){let S=d*(r+1)+g,T=S+r+1;h.push(S,S+1,T,S+1,T+1,T)}}}let u=new Me;return u.setAttribute("position",new ie(a,3)),u.setAttribute("uv",new ie(l,2)),u.setIndex(h),u.computeVertexNormals(),u.computeBoundingSphere(),u}function Iu(i){let t=(r=1,o=16)=>Array.from({length:o},(a,l)=>{let h=l/o*Fe,u=Math.cos(h),d=Math.sin(h);return[Math.sign(u)*Math.abs(u)**r,Math.sign(d)*Math.abs(d)**r]}),e=r=>Array.from({length:r},(o,a)=>[Math.sin(a/r*Fe),Math.cos(a/r*Fe)]),n=(r,o,a=0,l=1,h=1)=>Array.from({length:72},(u,d)=>{let p=d/72*Fe,c=1+o*Math.cos(p*r+a);return[Math.sin(p)*c*l,Math.cos(p)*c*h]}),s={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1.04,-.56],[-1.2,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.9,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.8],[-.57,-.76]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.2],[1,.23],[.69,.65],[.34,.97]],triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],heart:[[0,.56],[-.24,.78],[-.54,.9],[-.8,.81],[-.955,.58],[-.975,.3],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.3],[.955,.58],[.8,.81],[.54,.9],[.24,.78]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.1],[-1.03,-.1],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.1],[1.03,.1],[.865,.31],[.175,.985]],star:Array.from({length:40},(r,o)=>{let a=o/40*Fe,l=.88+.18*Math.cos(a*5);return[Math.sin(a)*l,Math.cos(a)*l]}),puff:n(6,.15,.38),clover:n(4,.25,Math.PI,1.035,.88),scallop:n(10,.058),hexagon:e(6),roundedcube:t(.5),sphere:t(),sprout:t(),frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.5],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.5],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:t()};return s[i]||s.dumpling}function G1(i){let e=new Uint8Array(65536),n=["plush","micro"].includes(i),s=null,r=0,o=1;if(n){s=new Float32Array(16384);for(let u=0;u<2500;u++){let d=de(u*7+191)*128,p=de(u*7+193)*128,c=2+de(u*7+197)*3,x=(de(u*7+199)-.5)*.88,M=Math.sin(x),g=Math.cos(x),f=.39+de(u*7+211)*.3,w=.55+de(u*7+223)*.75,v=Math.ceil(c+1);for(let S=-v;S<=v;S++)for(let T=-v;T<=v;T++){let A=Math.floor(d)+T,b=Math.floor(p)+S,E=A-d,y=b-p,_=E*M+y*g,D=E*g-y*M,L=Math.exp(-.5*(_/(c*.46))**2-.5*(D/f)**2)*w;s[(b%128+128)%128*128+(A%128+128)%128]+=L}}for(let u of s)r+=u;r/=s.length;let h=0;for(let u of s)h+=(u-r)**2;o=(i==="micro"?45:54)/Math.max(.01,Math.sqrt(h/s.length))}for(let h=0;h<128;h++)for(let u=0;u<128;u++){let d=de(u+h*128),p=i==="knit",c=i==="fabric",x=p?Math.sin(u*.72+Math.sin(h*.33)*1.8)*Math.cos(h*.33):c?Math.sin(u*1.57)*Math.sin(h*1.57):0,M=n?ts(128+(s[u+h*128]-r)*o,32,224):ts(128+(d-.5)*(p?16:24)+x*(p?35:c?32:0),0,255),g=(h*128+u)*4;e[g]=e[g+1]=e[g+2]=M,e[g+3]=255}let a=new Ts(e,128,128,_n);a.needsUpdate=!0,a.wrapS=a.wrapT=ys,a.magFilter=Mn,a.minFilter=$n,a.generateMipmaps=!0;let l=i==="fabric"?1.7:i==="knit"?2.2:5;return a.repeat.set(l,l),a}function Pu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=t.catalogTier==="baseline",n=t.family==="meta-muse"||t.shape==="meta-hood",s=e&&t.family==="dots",r=e&&t.family==="grok",o=e&&t.family==="humans",a=e&&t.family==="animals",l=n||e&&["dots","animals"].includes(t.family)?"micro":e&&t.family==="grok"?"rubber":t.material,h=new Te,u=new Te,d=new Te,p=new Te;h.name="avatar-body",u.name="head",d.name="torso",p.name="face",h.add(d,u),u.add(p);let c=[],x=[],M=[],g=[],f=new Map,w=new Map,v=new Map,S=ts(Number(t.headScale)||1,.65,1.5),T=ts(Number(t.bodyWidth)||1,.65,1.5),A=null,b=[],E={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},y=[],_=(m,I)=>(f.has(m)||f.set(m,I()),f.get(m)),D=()=>_("sphere",()=>new Nn(1,40,28));function L(m,I=t.material){let F=new Qt(m).getHexString(),O=F+":"+I;if(w.has(O))return w.get(O);let N={rubber:.64,plush:.98,micro:.94,clay:.92,skin:.77,hair:.67,fiber:.93,knit:.99,fabric:.95,eye:.35,matteEye:.6,nose:.52},X=new dn({color:m,roughness:N[I]??.88,metalness:0});return X.name=I,["eye","matteEye","nose","hair"].includes(I)||(v.has(I)||v.set(I,G1(I)),X.bumpMap=v.get(I),X.bumpScale={rubber:45e-5,skin:6e-4,micro:.001,plush:.0014,clay:.0018,knit:.0036,fabric:.003,fiber:.0012}[I]??.002),w.set(O,X),X}let U=L(t.colors.body,l),V=L(t.colors.secondary,l),$=L(Ws(t.colors.body,.24),l),G=L(t.colors.eyes,["sparkle","glossy","star","oval","side"].includes(t.eyes)?"eye":"matteEye"),it=L(Ws(t.colors.eyes,.88),"nose");function Y(m,I,F,O=[0,0,0],N=[1,1,1],X=!1,J=""){let st=new ye(I,F);return st.position.set(...O),st.scale.set(...N),st.castShadow=!0,st.receiveShadow=!0,st.name=J,m.add(st),X&&(st.userData.surfaceMaterial=F.name,st.userData.furLength=F.name==="micro"?.011:.024,c.push(st)),st}let ht=(m,I,F,O=U,N=!0,X="")=>Y(m,D(),O,I,F,N,X);function At(m,I){m.geometry=m.geometry.clone(),m.material=m.material.clone(),m.material.vertexColors=!0,m.material.color.set("#FFFFFF");let F=m.geometry.attributes.position,O=new Float32Array(F.count*3),N=new Qt;for(let X=0;X<F.count;X++)I(new B(F.getX(X)*m.scale.x,F.getY(X)*m.scale.y,F.getZ(X)*m.scale.z),N),O[X*3]=N.r,O[X*3+1]=N.g,O[X*3+2]=N.b;return m.geometry.setAttribute("color",new ie(O,3)),m}function gt(m,I,F,O,N=24,X=!1,J=""){let st=new on(I.map(ji),X,"catmullrom",.35);return Y(m,new Zn(st,N,F,7,X),O,[0,0,0],[1,1,1],!1,J)}function zt(m,I,F,O,N,X,J=U,st=!0){return Y(m,_(I+":"+O,()=>Cu(I,F,O)),J,N,X,st,I)}function kt(m,I,F,O,N=U,X=N,J="paw"){let st=new Te;st.name=m<0?"arm-left":"arm-right",st.position.set(...I),h.add(st);let mt=Ja.has(t.shape),j=J==="hand",ft=[m*(mt?-.035:j?-.2:.06),-F,mt?.195:j?.37:.065],_t=j?[[0,.045,-.05],[m*.068,-F*.35,.15],[-m*.06,-F*.69,.32],[ft[0],-F+.045,ft[2]]]:mt?[[0,.075,-.07],[m*.02,-F*.28,.02],[-m*.02,-F*.68,.135],[ft[0],-F+.025,ft[2]],[ft[0],-F-O*.85,ft[2]+.035]]:[[0,.055,-.012],[m*.065,-F*.32,.015],[m*.08,-F*.69,.11],[ft[0],-F+.025,ft[2]]],lt=Y(st,Xr(_t,O,j?.87:mt?1.055:1.03),N,[0,0,0],[1,1,1],!0,"upper-arm");return mt&&N!==X&&At(lt,(at,vt)=>vt.copy(N.color).lerp(X.color,be.smoothstep(-at.y,F*.66,F*.84))),mt||ht(st,ft,[O*(j?1.03:1.05),O*(j?.82:.88),O*1.04],X,!0,J),J==="hand"&&ht(st,[ft[0]-m*O*.65,ft[1]+.025,ft[2]+.04],[O*.35,O*.49,O*.39],X,!1,"thumb"),x.push(st),y.push(ji(ft).add(ji(I))),st}function qt(m,I,F,O,N,X=U){let J=new Te;return J.name=m<0?"leg-left":"leg-right",J.position.set(I,F,O),h.add(J),ht(J,[0,0,0],N,X,!0,"hind-paw"),M.push(J),J}function Vt(m,I,F,O,N=U,X=null){let J=new Te;if(J.position.set(...F),J.rotation.z=-m*(I==="long"?.07:.12),u.add(J),I==="round"||I==="long")ht(J,[0,0,0],O,N,!0,"outer-ear"),X&&ht(J,[0,0,O[2]*.75],[O[0]*.61,O[1]*.68,O[2]*.28],L(X,"skin"),!1,"inner-ear");else{let st=[[0,.88],[-.16,.81],[-.49,.19],[-.7,-.48],[-.51,-.84],[.51,-.84],[.7,-.48],[.49,.19],[.16,.81]];zt(J,"tri-ear",st,.36,[0,0,0],O,N,!0),X&&zt(J,"tri-ear-inner",st,.16,[0,-O[1]*.05,O[2]*.3],[O[0]*.56,O[1]*.64,O[2]*.37],L(X,"skin"),!1)}return J}function ot(m,I,F=U){A=new Te,A.name="tail",h.add(A);let O=Y(A,Xr(m,I,.52),F,[0,0,0],[1,1,1],!0,"rounded-tail");return O.userData.surfaceMaterial=F.name,A}function yt(m,I,F=V){let O=ht(u,m,I,F,!0,"muzzle");return b.push(O),O}n?W():t.shape==="human"?tt():Ja.has(t.shape)?nt(t.shape):H(t.shape),n||t.shape==="human"||Ja.has(t.shape)?u.scale.setScalar(S*(o?1.12:1)):u.scale.set(1,S,1),C(),h.updateMatrixWorld(!0);let Pt=new Le().setFromObject(h),Ht=new Le().setFromObject(u),Nt=m=>u.localToWorld(ji(m)).toArray(),ne={headTop:[u.position.x,Ht.max.y,u.position.z],face:Nt([0,E.eyeY,bt(0,E.eyeY)+.035]),neck:o?d.localToWorld(ji([0,.51,.05])).toArray():Nt([0,E.neckY??-.58,.05]),handL:y[0]?.toArray()??[-.9,.65,.55],handR:y[1]?.toArray()??[.9,.65,.55],shoulderL:x[0]?.position.toArray()??[-1,.9,0],shoulderR:x[1]?.position.toArray()??[1,.9,0]},R=new On(new B(u.position.x,Pt.max.y+2,u.position.z),new B(0,-1,0)).intersectObject(u,!0)[0];ne.crown=R?R.point.toArray():ne.headTop.slice(),ne.mouth=Nt([0,E.mouthY,bt(0,E.mouthY)+.042]);let z=new On(new B(0,ne.neck[1],Pt.max.z+2),new B(0,0,-1)).intersectObject(h,!0)[0];return ne.neckFront=z?[0,ne.neck[1],z.point.z+.022]:Nt([0,E.neckY??-.58,bt(0,E.neckY??-.58)+.025]),h.userData.anatomy=n||t.shape==="human"?"human":Ja.has(t.shape)?"animal":"blob",h.userData.material=t.material,h.userData.restHeadPosition=u.position.clone(),{root:h,head:u,torso:d,face:p,eyeGroups:g,arms:x,legs:M,tail:A,anchors:ne,height:Pt.max.y,width:Pt.max.x-Pt.min.x,surfaces:c};function H(m){let F={dumpling:[1,.94,1],cloud:[1,.97,1.07],capsule:[1,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1,1,.96],roundedcube:[1.03,1,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.1,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.1],twin:[.96,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.1,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.2]}[m]||[1.05,1.03,1];F[0]*=T;let O;if(m==="dumpling")O=Y(u,_("blob-dumpling-layered",()=>Qn("dumpling-v5",[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.3)),U,[0,0,0],F,!0,"blob-dumpling");else if(m==="sphere")O=ht(u,[0,0,0],F,U,!0,"blob-sphere");else if(m==="frog")O=Y(u,_("blob-frog-sculpted",()=>Qn("frog-v4",[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.4],[.43,.62,.02,.295,.345,.4]],.255)),U,[0,0,0],F,!0,"blob-frog");else if(m==="puff"){let st=[[0,0,0,.78,.79,.77],...Array.from({length:6},(mt,j)=>{let ft=j/6*Fe+.2;return[Math.sin(ft)*.68,Math.cos(ft)*.68,0,.4,.4,.6]})];O=Y(u,_("blob-puff-sculpted",()=>Qn("puff-v5",st,.19)),U,[0,0,0],F,!0,"blob-puff")}else if(m==="cloud")O=Y(u,_("blob-cloud-sculpted",()=>Qn("cloud-v3",[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),U,[0,0,0],F,!0,"blob-cloud");else if(m==="sprout")O=Y(u,_("blob-sprout",()=>Qn("sprout-v4",[[0,-.13,0,.94,.94,.86],[-.085,.9,-.055,.2,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),U,[0,0,0],F,!0,"blob-sprout");else if(m==="ghost")O=Y(u,_("blob-ghost-sculpted",()=>Qn("ghost-v4",[[0,.1,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),U,[0,0,0],F,!0,"blob-ghost");else{let st=r&&m==="arch",mt=st?[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.68],[-.82,-.88],[-.6,-.925],[-.3,-.935],[0,-.935],[.3,-.935],[.6,-.925],[.82,-.88],[.96,-.68],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]]:Iu(m),j=st?"grok-baseline-arch-flat":"blob-r4-"+m;O=Y(u,_("blob-"+(st?"grok-baseline-arch-flat":m),()=>Cu(j,mt,m==="arch"?.87:.84,.99)),U,[0,0,0],F,!0,"blob-"+m)}b=[O],O.geometry.computeBoundingBox();let N=O.geometry.boundingBox.min.y*F[1],X=["feet","both"].includes(t.limbs);if(u.position.y=-N*S+(X?.22:.035),E={eyeX:(m==="triangle"?.265:m==="diamond"?.33:m==="heart"?.29:m==="pebble"?.27:m==="scallop"||m==="twin"?.25:m==="pill"?.26:t.family==="dots"?.2:.275)*T,eyeY:m==="dumpling"?.015:m==="cloud"?.1:m==="triangle"?.18:m==="sprout"?.13:.23,mouthY:m==="dumpling"?-.22:-.23,size:m==="triangle"?.91:m==="dumpling"?.95:1,neckY:N*.72},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let st of[-1,1])kt(st,[st*1.03*T,u.position.y-.1,.1],.4,.15,U,U,"mitten");if(X)for(let st of[-1,1])qt(st,st*.46*T,.13,.12,[.21,.13,.28]);if(m==="frog"&&(E={eyeX:.43*T,eyeY:.66,mouthY:-.12,size:1.3,neckY:N*.74}),m==="twin")for(let st of[-1,1]){let mt=ht(u,[st*.16,1.075,-.045],[.225,.285,.22],U,!0,"twin-top-lobe");mt.rotation.z=-st*.3}}function W(){let m=_("meta-hood-body-v1",()=>Qn("meta-hood-body-v1",[[0,.7,0,.49,.59,.39],[0,.32,0,.37,.31,.34]],.18));Y(d,m,U,[0,0,0],[T,1,1],!0,"meta-hood-body"),u.position.set(0,1.42,.015);let I=[[0,.03,0,.55,.7,.46],[0,-.37,0,.43,.51,.42]],F=_("meta-hood-shell-v4-recessed-port",()=>Qn("meta-hood-shell-v4-recessed-port",I,.2,{resolution:96,ellipticalOpening:{cx:0,cy:.005,cz:.8,rx:.34,ry:.42,halfDepth:.58,edge:.022}}));Y(u,F,U,[0,0,0],[1,1,1],!0,"meta-hood-shell");let O=new ye(F,new Ni({side:Ke})),N=112,X=.34*1.035,J=.42*1.035,st=.005,mt=Array(N).fill(NaN),j=new On;for(let vt=0;vt<N;vt++){let k=vt/N*Fe,ct=Math.cos(k)*X,ut=st+Math.sin(k)*J;j.set(new B(ct,ut,2),new B(0,0,-1));let wt=j.intersectObject(O,!1)[0];wt&&(mt[vt]=wt.point.z)}O.material.dispose();for(let vt=0;vt<N;vt++)if(!Number.isFinite(mt[vt])){let k=-1;for(let ct=1;ct<N;ct++){let ut=(vt+ct)%N;if(Number.isFinite(mt[ut])){k=ut;break}}mt[vt]=k<0?.35:mt[k]}let ft=12,_t=[];for(let vt=0;vt<=ft;vt++){let k=0,ct=0;for(let ut=0;ut<N;ut++){let wt=ut/N*Fe;k+=mt[ut]*Math.cos(vt*wt),ct+=mt[ut]*Math.sin(vt*wt)}_t.push({cosine:(vt===0?1:2)*k/N,sine:vt===0?0:2*ct/N})}let lt=new class extends un{getPoint(vt,k=new B){let ct=(vt%1+1)%1*Fe,ut=0;for(let wt=0;wt<=ft;wt++)ut+=_t[wt].cosine*Math.cos(wt*ct)+_t[wt].sine*Math.sin(wt*ct);return k.set(Math.cos(ct)*X,st+Math.sin(ct)*J,ut+.008)}};Y(u,new Zn(lt,144,.014,8,!0),L("#D8C0A9","fabric"),[0,0,0],[1,1,1],!1,"meta-face-inner-rim"),b=[ht(u,[0,.008,.305],[.31,.39,.027],L(t.colors.skin,"skin"),!1,"meta-face-panel")],E={eyeX:.104,eyeY:.045,mouthY:-.112,size:.66,neckY:-.43};for(let vt of[-1,1]){let k=kt(vt,[vt*.405,.96,.045],.31,.108,U,U,"mitten");k.rotation.z=vt*.075;let ct=new Te;ct.name=vt<0?"leg-left":"leg-right",ct.position.set(vt*.165,.09,.015),h.add(ct),Y(ct,Xr([[0,.155,-.025],[0,.09,.008],[0,.018,.045]],.075,.9),U,[0,0,0],[1,1,1],!0,"meta-short-leg"),ht(ct,[0,-.012,.092],[.142,.106,.185],U,!0,"meta-foot"),M.push(ct)}}function tt(){let m=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"||o?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",I=L(t.colors.skin,m),F=L(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),O=L(Ws(t.colors.clothing,.52),"fabric"),N=L("#EEE8DF","rubber");d.position.set(0,o?.82:.86,0),u.position.set(0,o?2.02:1.96,.015),o&&d.scale.set(.86,.82,.92),ht(d,[0,0,0],[.56*T,.66,.36],F,!0,"sweater-body"),ht(d,[0,.51,0],[.21,.24,.21],I,!1,"neck");let X=t.faceShape||"round",J=_("human-face-"+X,()=>{let lt=new Nn(1,64,44),at=lt.attributes.position,vt=X==="oval"?.53:X==="soft-square"?.565:.558,k=X==="oval"?.665:.626;for(let ct=0;ct<at.count;ct++){let ut=at.getX(ct),wt=at.getY(ct),Mt=at.getZ(ct),Q=be.smoothstep(wt,-.88,.01),Tt=1+.022*Math.exp(-(((wt+.13)/.29)**2)),Et=(X==="soft-square"?.91+.09*Q:.865+.135*Q)*Tt,Wt=X==="soft-square"?Math.sign(ut)*Math.abs(ut)**.93:ut;at.setXYZ(ct,Wt*vt*Et,wt*k,Mt*.555+(Mt>0?.012*Math.exp(-(((wt+.18)/.3)**2)):0))}return lt.computeVertexNormals(),lt.computeBoundingBox(),lt.computeBoundingSphere(),lt}),st=Y(u,J,I,[0,0,0],[1,1,1],m==="fabric","human-face");At(st,(lt,at)=>{let vt=Math.exp(-(((Math.abs(lt.x)-.325)/.077)**2)-((lt.y+.126)/.053)**2)*be.smoothstep(lt.z,.3,.42)*.095;at.copy(I.color).lerp(new Qt("#D8797F"),vt)}),b=[st];for(let lt of[-1,1]){Vt(lt,"round",[lt*.552,-.045,.025],[.1,.14,.09],I,en(t.colors.skin,"#B96762",.15));let at=o?.31:.42,vt=o?1.2:1.285;kt(lt,[lt*at*T,vt,-.012],o?.68:.755,o?.14:.153,F,I,"hand"),qt(lt,lt*.235*T,.16,.065,[.19,.16,.25],N),ht(d,[lt*.24,-.44,0],[.19,.36,.205],O,!1,"trouser-leg")}let mt=L(Ws(t.colors.clothing,.9),F.name),j=new Vi(.211,.048,9,48),ft=Y(d,j,mt,[0,.53,.005],[1,1,1]);ft.rotation.x=Math.PI/2;let _t=t.outfit||"sweater";if(_t==="hoodie"){let lt=ht(d,[0,.44,-.18],[.35,.31,.21],F,!0,"hood");for(let at of[-1,1])gt(d,[[at*.13,.49,.225],[at*.16,.23,.354],[at*.145,.05,.363]],.011,L("#DAD6CC","fabric"),14);gt(d,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,mt,18)}else if(_t==="cardigan"||_t==="shirt"){gt(d,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,mt,20);for(let lt=0;lt<4;lt++)ht(d,[.03,.27-lt*.18,.36-Math.abs(.1-lt*.13)*.1],[.025,.025,.013],L("#D5C9B3","rubber"),!1,"button");for(let lt of[-1,1]){let at=ht(d,[lt*.15,.44,.25],[.095,.15,.036],mt,!1,"collar");at.rotation.z=lt*.55}}else for(let lt of[-.43,-.47,-.51])gt(d,[[-.34,lt,.22],[0,lt-.025,.301],[.34,lt,.22]],.012,mt,24);E=o?{eyeX:.222,eyeY:.035,mouthY:-.245,size:.92,neckY:-.67}:{eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67},q()}function q(){let m=t.hair||"short-curly",I=m==="short-curly",F=o&&m==="short",O=!F&&(t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material)),N=O?"fiber":"hair",X=F?[L(en(t.colors.hair,"#34251F",.1),N),L(t.colors.hair,N),L(en(t.colors.hair,"#C39879",.14),N)]:[L(Ws(t.colors.hair,.915),N),L(t.colors.hair,N),L(en(t.colors.hair,"#C4A188",.045),N)],J=t.faceShape==="oval",st=J?.559:.588,mt=J?.71:.675,j=.574,ft=St=>new B(St.x/(st*st),(St.y-.018)/(mt*mt),St.z/(j*j)).normalize(),_t=(St,Dt,Ut=0)=>{let Gt=new B(Math.sin(St)*Math.sin(Dt)*st,Math.cos(St)*mt+.018,Math.sin(St)*Math.cos(Dt)*j);return Gt.addScaledVector(ft(Gt),Ut)},lt=St=>{if(!F)return 1.12+(1-Math.cos(St))*.56+(I?.032*Math.sin(St*7+.6):.01*Math.sin(St*2));let Dt=Math.atan2(Math.sin(St),Math.cos(St)),Ut=Math.exp(-(((Math.abs(Dt)-.82)/.2)**2));return 1.12+(1-Math.cos(St))*.56+.018*Math.sin(Dt*2.4+.5)-.085*Ut},at=[],vt=[],k=[],ct=36,ut=96;for(let St=0;St<=ct+1;St++)for(let Dt=0;Dt<=ut;Dt++){let Ut=Dt/ut*Fe,Gt=Math.min(1,St/ct)*lt(Ut),$t=St>ct?-.055:I?.018+.004*Math.sin(Gt*8+Math.sin(Ut*3))**2:F?.01:.016,Xt=_t(Gt,Ut,$t);if(at.push(Xt.x,Xt.y,Xt.z),vt.push(Dt/ut,St/ct),St<=ct&&Dt<ut){let re=St*(ut+1)+Dt,Jt=re+ut+1;k.push(re,Jt,re+1,re+1,Jt,Jt+1)}}let wt=new Me;wt.setAttribute("position",new ie(at,3)),wt.setAttribute("uv",new ie(vt,2)),wt.setIndex(k),wt.computeVertexNormals();let Mt=Y(u,wt,X[0],[0,0,0],[1,1,1],O,"hair-foundation");F&&(Mt.userData.skipProceduralPile=!0);let Q=[[],[],[]],Tt=[[],[],[]],Et=0,Wt=(St,Dt=.002,Ut=null)=>{let Gt=new on(St,!1,"centripetal"),$t=new Zn(Gt,Math.max(12,St.length),Dt,3,!1);if(I){let Xt=$t.attributes.position,re=$t.attributes.normal;for(let Jt=0;Jt<Xt.count;Jt++){let pe=ft(new B(Xt.getX(Jt),Xt.getY(Jt),Xt.getZ(Jt)));re.setXYZ(Jt,pe.x,pe.y,pe.z)}}Q[Ut??Et++%3].push($t)};if(I&&O){let St=(Ut,Gt,$t,Xt=!1)=>{let re=_t(Ut,Gt,.035),Jt=ft(re),pe=new B().crossVectors(Ru,Jt).normalize();pe.lengthSq()<.01&&pe.set(1,0,0);let ve=new B().crossVectors(Jt,pe).normalize(),Oe=(Xt?.051:.062)+de($t+7)*.016,Be=[];for(let fn=0;fn<=36;fn++){let pn=fn/36,wn=pn*Fe*(1.2+de($t+9)*.22)+$t*.7,En=Oe*(1-.38*pn);Be.push(re.clone().addScaledVector(pe,Math.cos(wn)*En).addScaledVector(ve,Math.sin(wn)*En).addScaledVector(Jt,.012+.028*Math.sin(pn*Math.PI)))}let kn=new Zn(new on(Be),42,.013+de($t+3)*.004,6,!1);Tt[$t%7===0?2:$t%5===0?0:1].push(kn)},Dt=1;for(let[Ut,Gt,$t]of[[.13,3,0],[.38,9,.2],[.65,13,0],[.91,17,.13],[1.17,20,0],[1.47,19,.12],[1.77,16,0],[2.02,13,.12]])for(let Xt=0;Xt<Gt;Xt++){let re=Xt/Gt*Fe+$t;Ut>lt(re)+.01||St(Ut+(de(Dt+20)-.5)*.07,re,Dt++)}for(let Ut=0;Ut<10;Ut++)St(1.09+(de(Ut+82)-.5)*.12,(Ut-4.5)*.19,120+Ut,!0)}else if(I||F){let St=(Xt,re,Jt,pe=!1)=>{let ve=F?(pe?.036:.038)+de(Jt+44)*.018:(pe?.051:.053)+de(Jt+44)*.011,Oe=F?.023+de(Jt+51)*.01:.02+de(Jt+51)*.006,Be=F?.024+de(Jt+64)*.017:.023+de(Jt+64)*.012,kn=pe?F?.31+de(Jt+12)*.09:.35:Math.max(.055,Xt-.3),fn=pe?F?1.08+de(Jt+8)*.2:1.115+de(Jt+8)*.14:Math.min(lt(re)+.035,Xt+(F?.29+de(Jt+8)*.21:.39)),pn=F?-.24+de(Jt+29)*.14:0,wn=F?.31+de(Jt+30)*.13:0,En=F?.035+de(Jt+31)*.035:.033,Hn=de(Jt+32)*Fe,P=F?.014+de(Jt+33)*.012:.01,K=[],rt=24;for(let Ot=0;Ot<=rt;Ot++){let Ct=Ot/rt,ee=be.lerp(kn,fn,Ct)-Math.max(0,Ct-.82)**2*.55+Math.sin(Ct*Math.PI*2.25+Hn)*P,oe=F?pn+Ct*wn+Math.sin(Ct*Math.PI*2+Hn)*En:(1-Ct)*-.3+Math.sin(Ct*Math.PI*2.75+de(Jt+9)*.35)*.095+Math.max(0,Ct-.67)**2*.7,te=.006+Math.sin(Ct*Math.PI)*Be+(F?Math.sin(Ct*Math.PI*2+Hn)*.004*Math.sin(Ct*Math.PI):0);K.push(_t(ee,re+oe,te))}let dt=new on(K,!1,"centripetal"),et=(Ot,Ct,ee=0)=>{let oe=dt.getPoint(Ot),te=ft(oe),se=dt.getTangent(Ot).normalize(),ae=new B().crossVectors(te,se).normalize(),jt=Math.min(1,Math.sqrt(Math.max(0,Ot/.11)),Math.sqrt(Math.max(0,(1-Ot)/.14)))*(.97-.15*Ot),xe=ve*jt*Ct,ce=Oe*jt*Math.sqrt(Math.max(0,1-Ct*Ct));return oe.addScaledVector(ae,xe).addScaledVector(te,ce+ee)},Rt=[],Ft=[],Zt=[],Bt=12;for(let Ot=0;Ot<=rt;Ot++)for(let Ct=0;Ct<=Bt;Ct++){let ee=Ot/rt,oe=Ct/Bt*Fe,te=dt.getPoint(ee),se=ft(te),ae=dt.getTangent(ee).normalize(),jt=new B().crossVectors(se,ae).normalize(),xe=Math.min(1,Math.sqrt(Math.max(0,ee/.11)),Math.sqrt(Math.max(0,(1-ee)/.14)))*(.97-.15*ee);if(te.addScaledVector(jt,Math.cos(oe)*ve*xe).addScaledVector(se,Math.sin(oe)*Oe*xe),Rt.push(te.x,te.y,te.z),Ft.push(Ct/Bt,ee),Ot<rt&&Ct<Bt){let ce=Ot*(Bt+1)+Ct,Ie=ce+Bt+1;Zt.push(ce,ce+1,Ie,ce+1,Ie+1,Ie)}}let Kt=new Me;Kt.setAttribute("position",new ie(Rt,3)),Kt.setAttribute("uv",new ie(Ft,2)),Kt.setIndex(Zt),Kt.computeVertexNormals(),Tt[Jt%9===0?0:1].push(Kt);for(let Ot=0;Ot<(F?5:9);Ot++){let Ct=(Ot/(F?4:8)*2-1)*.94,ee=[];for(let oe=0;oe<=14;oe++){let te=.032+oe/14*.938,se=Math.sin(te*Math.PI*1.1+Jt)*.035;ee.push(et(te,ts(Ct+se,-.97,.97),.0011))}Wt(ee,F?.0019+de(Jt*17+Ot)*55e-5:.0011+de(Jt*17+Ot)*5e-4,Ot%6===0?2:Ot%5===0?0:1)}if(Jt%5===0){let Ot=[];for(let Ct=0;Ct<=12;Ct++){let ee=.17+Ct/12*.68;Ot.push(et(ee,.78,.004+Math.sin(Ct/12*Math.PI)*.009))}Wt(Ot,F?.0022:.0011,2)}},Dt=1,Ut=F?[[.27,5,.1],[.61,8,.18],[.96,12,.02],[1.32,13,.15],[1.67,11,.04]]:[[.29,5,.1],[.65,8,.19],[1.03,11,0],[1.43,10,.21],[1.81,9,.05]];for(let[Xt,re,Jt]of Ut)for(let pe=0;pe<re;pe++){let ve=pe/re*Fe+Jt+(F?(de(Dt+34)-.5)*.08:0);Xt>lt(ve)-.07||St(Xt+(de(Dt+18)-.5)*.05,ve,Dt++)}let Gt=F?7:9,$t=(Gt-1)/2;for(let Xt=0;Xt<Gt;Xt++){let re=F?(Xt-$t)*.255+(de(Xt+54)-.5)*.09:(Xt-4)*.21+(de(Xt+54)-.5)*.065,Jt=1.015+(de(Xt+88)-.5)*.09;St(Jt,re,70+Xt,!0)}for(let Xt=0;Xt<72;Xt++){let re=Xt*2.399963,Jt=.1+de(Xt+8)*1.6,pe=Math.min(lt(re)-.015,Jt+.25+de(Xt+16)*.2);if(pe<=Jt)continue;let ve=[];for(let Oe=0;Oe<=12;Oe++){let Be=Oe/12;ve.push(_t(be.lerp(Jt,pe,Be),re+Math.sin(Be*Math.PI)*.11,.025))}Wt(ve,.0013,Xt%3)}}else for(let St=0;St<220;St++){let Dt=St*2.399963,Ut=.06+de(St)*1,Gt=Math.min(lt(Dt),Ut+.44+de(St+9)*.5),$t=[];for(let Xt=0;Xt<13;Xt++){let re=Xt/12,Jt=be.lerp(Ut,Gt,re),pe=(1-re)*.21*(Math.cos(Dt)+.4);$t.push(_t(Jt,Dt+pe,.015+Math.sin(re*Math.PI)*.014))}Wt($t,.0027+de(St+17)*.0015)}if(["bob","long","wavy"].includes(m)){let St=m==="bob"?.4:.9,Dt=[];for(let Ut of[-1,1])Dt.push({center:[Ut*.46,-.31-St*.22,-.09],size:[.17,St*.6,.24],name:"hair-side-foundation"});Dt.push({center:[0,-.31-St*.27,-.33],size:[.45,St*.57,.15],name:"hair-back-foundation"});for(let[Ut,Gt]of Dt.entries()){ht(u,Gt.center,Gt.size,X[0],!1,Gt.name);for(let $t=0;$t<44;$t++){let Xt=$t/44*Fe,re=[];for(let Jt=0;Jt<=20;Jt++){let pe=Jt/20,ve=.12+pe*2.82,Oe=Xt+(m==="wavy"?Math.sin(pe*Fe*1.1)*.2:Math.sin(pe*Math.PI)*.045),Be=new B(Math.sin(ve)*Math.sin(Oe)/Gt.size[0],Math.cos(ve)/Gt.size[1],Math.sin(ve)*Math.cos(Oe)/Gt.size[2]).normalize();re.push(new B(Gt.center[0]+Math.sin(ve)*Math.sin(Oe)*Gt.size[0],Gt.center[1]+Math.cos(ve)*Gt.size[1],Gt.center[2]+Math.sin(ve)*Math.cos(Oe)*Gt.size[2]).addScaledVector(Be,.0013))}Wt(re,.00135,($t+Ut)%3)}}}if(m==="ponytail"||m==="bun"){let St=m==="bun",Dt=new B(St?0:.17,St?.56:.04,St?-.28:-.57);St?ht(u,Dt.toArray(),[.235,.23,.23],X[0],!1,"bun-foundation"):gt(u,[[0,.4,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,X[0],28);for(let Ut=0;Ut<88;Ut++){let Gt=Ut/88*Fe,$t=[];for(let Xt=0;Xt<18;Xt++){let re=Xt/17;if(St){let Jt=re*Fe*1.08;$t.push(Dt.clone().add(new B(Math.cos(Jt)*Math.sin(Gt)*.242,Math.sin(Jt)*.233,Math.cos(Jt)*Math.cos(Gt)*.238)))}else $t.push(new B(.025+re*.32+Math.sin(Gt)*(.1*(1-re)+.025),.39-re*.99,-.4-Math.sin(re*Math.PI)*.25+Math.cos(Gt)*(.1*(1-re)+.025)))}Wt($t,.004)}}if(m==="braids")for(let St of[-1,1]){Y(u,Xr([[St*.56,.015,-.045],[St*.535,-.09,-.005],[St*.49,-.21,.055]],.09,.9),X[0],[0,0,0],[1,1,1],!1,"braid-root");for(let Dt=0;Dt<3;Dt++){let Ut=[];for(let Gt=0;Gt<40;Gt++){let $t=Gt/39,Xt=$t*Fe*3.1+Dt/3*Fe;Ut.push([St*(.49+.015*Math.sin($t*Math.PI))+Math.cos(Xt)*.035,-.14-$t*.81,.055+Math.sin(Xt)*.035])}Y(u,Xr(Ut,.038,.86),X[Dt],[0,0,0],[1,1,1],!1,"braid-plait")}ht(u,[St*.49,-.902,.055],[.071,.027,.062],L(en(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}Tt.forEach((St,Dt)=>{if(St.length){let Ut=Y(u,Ml(St),X[Dt],[0,0,0],[1,1,1],O,"hair-curl-volume");F&&(Ut.userData.skipProceduralPile=!0)}}),Q.forEach((St,Dt)=>{if(St.length){let Ut=F?en(X[Dt].color,["#473026","#79533D","#CEA585"][Dt],.23):en(X[Dt].color,t.colors.hair,.7),Gt=new dn({color:Ut,roughness:O?.96:.76});Gt.name=O?"fiber-detail":"hair-detail";let $t=Y(u,Ml(St),Gt,[0,0,0],[1,1,1],!1,"hair-strands");$t.castShadow=!1,$t.receiveShadow=!1}})}function nt(m){let I={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},F=a&&m==="shiba",[O,N,X,J,st,mt,j]=F?[.67,.58,.53,.57,.67,.5,1.59]:I[m],ft={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[m],_t=(1-ft)*1.3+.065;d.position.set(0,st*ft+.12,-.11),u.position.set(0,j-_t,.12);let lt=m==="penguin"?$:U,at=["penguin","owl"].includes(m),vt=F?"animal-seated-shiba-baseline-v1":"animal-seated-"+m,k=F?"shiba-body-baseline-v1":"animal-seated-r4-"+m,ct=at?ht(d,[0,0,0],[J*T,st*ft,mt],lt,!0,"animal-torso"):Y(d,_(vt,()=>Qn(k,[[0,0,0,J,st*ft,mt],[-J*.6,-st*ft*.4,.025,J*.49,st*ft*.59,mt*.71],[J*.6,-st*ft*.4,.025,J*.49,st*ft*.59,mt*.71]],F?.17:.13)),lt,[0,0,0],[T,1,1],!0,"animal-torso"),ut;m==="shiba"?ut=Y(u,_(F?"shiba-baseline-soft-face":"shiba-soft-face",()=>Qn(F?"shiba-face-baseline-v1":"shiba-face-r4",[[0,0,0,O,N,X],[0,-.2,.365,F?.425:.435,F?.245:.257,F?.26:.265]],.2)),U,[0,0,0],[1,1,1],!0,"animal-head"):m==="capybara"?ut=zt(u,"capybara-skull",Iu("roundedcube"),.85,[0,0,0],[O,N,X/.85],U,!0):ut=ht(u,[0,0,0],[O,N,X],lt,!0,"animal-head"),b=[ut],["axolotl","capybara","hedgehog","panda"].includes(m)||At(ct,(Q,Tt)=>{let Et=(Q.x/(J*.68*T))**2+((Q.y+.06)/(st*ft*.86))**2,Wt=(1-be.smoothstep(Et,.9,1.035))*be.smoothstep(Q.z,mt*.26,mt*.67);Tt.copy(lt.color).lerp(V.color,Wt)}),E={eyeX:O*.44,eyeY:.07,mouthY:-N*.43,size:.72,neckY:-N*.85};let wt=X*.78,Mt=en(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(m)){let Q=m==="fox"?[.19,.155,.26]:m==="hedgehog"?[.215,.16,.29]:m==="shiba"?[.22,.18,.19]:m==="bear"?[.21,.18,.19]:[.16,.13,.155];if(m==="shiba")At(ut,(Et,Wt)=>{let Lt=(Et.x/.565)**2+((Et.y+.225)/.358)**2,St=(1-be.smoothstep(Lt,.94,1.055))*be.smoothstep(Et.z,.08,.3);for(let Dt of[-1,1]){let Ut=((Et.x-Dt*.265)/.061)**2+((Et.y-.238)/.045)**2;St=Math.max(St,(1-be.smoothstep(Ut,.68,1.04))*be.smoothstep(Et.z,.25,.37))}Wt.copy(U.color).lerp(V.color,St)});else for(let Et of[-1,1])yt([Et*Q[0]*.54,-N*.31,wt],Q,m==="panda"?U:V);let Tt=m==="shiba"?.635:wt+Q[2]*.89;if(ht(u,[0,-N*.27,Tt],[m==="rabbit"?.043:m==="shiba"?.065:.07,.042,.035],m==="rabbit"?L(Mt,"nose"):it,!1,"nose"),m==="cat")for(let Et of[-1,1])for(let Wt=0;Wt<3;Wt++)gt(u,[[Et*.2,-.2+Wt*.025,wt+.14],[Et*.42,-.21+Wt*.05,wt+.13],[Et*.62,-.23+Wt*.083,wt+.02]],.0045,L(en(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(m))for(let Q of[-1,1])Vt(Q,"triangle",[Q*O*.69,N*.75,-.035],[m==="fox"||m==="shiba"?.3:.25,m==="fox"?.39:m==="shiba"?.3:.28,.43],U,Mt);else if(m==="rabbit")for(let Q of[-1,1])Vt(Q,"long",[Q*.235,.61,-.055],[.14,.51,.11],U,Mt);else if(["panda","bear","otter","capybara"].includes(m))for(let Q of[-1,1])Vt(Q,"round",[Q*O*.74,N*.72,-.035],m==="otter"?[.105,.12,.09]:m==="capybara"?[.13,.135,.095]:[.205,.205,.13],m==="panda"?$:U,Mt);if(m==="panda")for(let Q of[-1,1]){let Tt=ht(u,[Q*.285,.07,X*.86],[.16,.2,.06],$,!1,"eye-patch");Tt.rotation.z=-Q*.24,b.push(Tt)}if(m==="capybara"){yt([0,-.16,.38],[.43,.28,.4],U),E={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let Q of[-1,1])ht(u,[Q*.125,-.145,.768],[.038,.027,.013],it,!1,"nostril")}if(m==="axolotl"){let Q=L(en(t.colors.body,"#DD7695",.58));for(let Tt of[-1,1])for(let Et=0;Et<3;Et++){let Wt=[Tt*.62,.18-Et*.15,-.06],Lt=[Tt*(1+(Et===1?.09:0)),.45-Et*.35,-.08];gt(u,[Wt,[Tt*.85,(Wt[1]+Lt[1])*.5,.02],Lt],.041,Q,18);for(let St=0;St<4;St++){let Dt=.37+St*.17,Ut=be.lerp(Wt[0],Lt[0],Dt),Gt=be.lerp(Wt[1],Lt[1],Dt);for(let $t of[-1,1])gt(u,[[Ut,Gt,-.055],[Ut+Tt*.055,Gt+$t*.085,.01],[Ut+Tt*.06,Gt+$t*.105,-.018]],.018,Q,8)}}E={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}for(let Q of[-1,1]){if(at){let Et=m==="penguin"?1.07:.99,Wt=kt(Q,[Q*J*.82*T,Et,-.04],.46,.135,lt,lt,"wing-tip");Wt.rotation.z=Q*.13,Wt.scale.z=.64,y[Q<0?0:1]=ji([Q*(J*.82*T+.025),Et-.445,.055])}else{let Et=Math.min(.8,j-_t-.54),Wt=["rabbit","axolotl","hedgehog"].includes(m),Lt=Wt?.122:m==="bear"||m==="panda"?.164:.149;kt(Q,[Q*J*.57*T,Et,.155],Math.max(.23,Et-(Wt?.23:.245)),Lt,m==="panda"?$:U,m==="shiba"?V:U)}let Tt=qt(Q,Q*J*(at?.6:.8)*T,at?.1:.112,at?.2:.015,[at?.18:.165,at?.1:.112,at?.225:.2],at?L("#D8A34D","rubber"):m==="panda"?$:U);if(!at)for(let Et=0;Et<2;Et++)gt(Tt,[[-.05+Et*.095,.026,.165],[-.05+Et*.095,.067,.146]],.0035,L(en(t.colors.body,t.colors.eyes,.1)),6)}if(m==="shiba")ot([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),ht(A,[.65,.65,-.18],[.125,.115,.12],V,!0,"tail-tip");else if(m==="cat")ot([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(m==="fox"){ot([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let Q=ht(A,[1.14,.9,-.15],[.2,.32,.21],V,!0,"white-tail-tip");Q.rotation.z=-.36}else if(m==="rabbit")A=new Te,h.add(A),ht(A,[.46,.41,-.41],[.24,.24,.23],V,!0,"cotton-tail");else if(m==="hedgehog")ot([[.25,.24,-.35],[.52,.18,-.38],[.7,.17,-.28]],.08);else if(["otter","axolotl"].includes(m)){if(ot([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],m==="axolotl"?.13:.14),m==="axolotl"){let Q=ht(A,[.78,.31,-.6],[.41,.23,.055],L(en(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");Q.rotation.y=-.7}}else A=new Te,h.add(A),ht(A,[.45,.4,-.43],[.135,.14,.13],lt,!0,"short-tail");if(at){if(m==="owl")for(let Tt of[-1,1]){let Et=ht(u,[Tt*.235,.055,.38],[.255,.3,.11],V,!0,"facial-disc");b.push(Et),Vt(Tt,"triangle",[Tt*.39,.43,-.055],[.2,.23,.29],U,null)}let Q=zt(u,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[m==="penguin"?.155:.09,.115,.12],L("#D8A34D","rubber"),!1);b.push(Q),E.mouthY=-.26,E.size=m==="owl"?1.05:.85}if(m==="hedgehog"){let Q=[];for(let Tt=0;Tt<110;Tt++){let Et=Tt*2.399963,Wt=.15+de(Tt)*.93,Lt=Math.sqrt(Math.max(0,1-Wt*Wt)),St=new B(Math.sin(Et)*Lt,Wt,Math.cos(Et)*Lt);if(St.z>.32)continue;let Dt=new B(St.x*.69*T,St.y*.61+.71,St.z*.58-.13),Ut=new br(.041,.22,6,1);Ut.translate(0,.075,0),Ut.applyQuaternion(new je().setFromUnitVectors(Ru,St)),Ut.translate(Dt.x,Dt.y,Dt.z),Q.push(Ut)}Y(h,Ml(Q),L(Ws(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function bt(m,I){let F=new On(new B(m,I,4),new B(0,0,-1)),O=-1/0;for(let N of b){N.updateMatrix();let X=new ye(N.geometry,N.material);X.matrixWorld.copy(N.matrix);let J=F.intersectObject(X,!1);J.length&&(O=Math.max(O,J[0].point.z))}return Number.isFinite(O)?O:.4}function xt(m,I,F=G,O="face-line"){return gt(p,m.map(([N,X])=>[N,X,bt(N,X)+.022]),I,F,24,!1,O)}function C(){let m=t.expression,I=ts(Number(t.eyeScale)||1,.45,1.8)*E.size,F=ts(Number(t.eyeSpacing)||1,.6,1.6),O=E.eyeX*F,N={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]},[X,J]=N[t.eyes]||N.softOval,st=m==="closed",mt={deadpan:.35,tearful:1.08,expectant:1.16,panicked:1.43,sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[m]??1;for(let _t of[-1,1]){let lt=_t*O,at=E.eyeY+(["curious","skeptical"].includes(m)&&_t>0?.025:0),vt=bt(lt,at),k=st||m==="wink"&&_t>0||["delighted","laughing"].includes(m),ct=mt*(m==="skeptical"&&_t<0?.52:m==="panicked"&&_t>0?.84:1),ut=.012,wt=(bt(lt+ut,at)-bt(lt-ut,at))/(ut*2),Mt=(bt(lt,at+ut)-bt(lt,at-ut))/(ut*2),Q=new B(-wt,-Mt,1).normalize(),Tt=.009;for(let Wt of[-1,0,1])for(let Lt of[-1,0,1]){let St=Wt*X*I,Dt=Lt*J*I*ct;Tt=Math.max(Tt,bt(lt+St,at+Dt)-vt-wt*St-Mt*Dt+.006)}let Et=new Te;if(Et.name=_t<0?"eye-left":"eye-right",Et.position.set(lt,at,vt+Tt),p.add(Et),g.push(Et),Et.userData.restScaleY=1,Et.quaternion.setFromUnitVectors(new B(0,0,1),Q),Et.rotateZ(["sad","shy","worried","tearful"].includes(m)?_t*.15:m==="angry"?-_t*.24:m==="happy"?_t*.06:m==="focused"?-_t*.09:m==="proud"?_t*.09:t.eyes==="softOval"&&t.family==="dots"?.13:0),k)gt(Et,[[-X*I,0,0],[0,(m==="laughing"?.07:m==="delighted"?.043:-.021)*I,.01],[X*I,0,0]],.013*I,G,18,!1,["delighted","laughing"].includes(m)?"delighted-lid":"closed-lid");else{let Wt=L("#FCFCF5","eye"),Lt=L("#FFFFFF","eye");if(t.shape==="human"&&["sparkle","glossy"].includes(t.eyes)&&ht(Et,[0,0,-.008],[X*I*1.15,J*I*ct*1.09,.013],L("#E8D9BE","rubber"),!1,"doll-eye-rim"),t.shape==="frog"&&!["oval","side"].includes(t.eyes)&&ht(Et,[0,0,-.073],[X*I*2.35,J*I*1.47,.098],L("#F8FFE8","rubber"),!1,"frog-eye-white"),(t.eyes==="sleepy"||m==="deadpan")&&!["focused","surprised","excited"].includes(m)&&!["work","read","camera"].includes(t.action)?(ht(Et,[0,-J*.29*I,.003],[X*.44*I,J*.57*I,.023],G,!1,"eye"),gt(Et,[[-X*I,J*.12*I,.006],[0,J*.16*I,.011],[X*I,J*.12*I,.006]],.023*I,G,16,!1,"sleepy-upper-lid")):t.eyes==="capsule"?Y(Et,_("capsule-eye",()=>new vr(1,2.8,6,20)),G,[0,0,0],[X*I,J*I*ct/2.4,.021],!1,"eye"):ht(Et,[0,0,0],[X*I,J*I*ct,.022],["oval","side"].includes(t.eyes)?Wt:G,!1,"eye"),["oval","side"].includes(t.eyes)){let St=["work","read","camera"].includes(t.action),Dt=t.eyes==="side"&&!St?-.03*I:m==="thinking"?.019*I:0;ht(Et,[Dt,St?-.02*I:["proud","expectant"].includes(m)?.025*I:0,.021],[X*(t.eyes==="side"?.74:.58)*I,J*(t.eyes==="side"?.74:.7)*I*ct,.017],G,!1,"pupil")}if(t.eyes==="lash"&&gt(Et,[[_t*X*.5*I,J*.17*I,.009],[_t*X*1.12*I,J*.1*I,.004],[_t*X*1.72*I,J*.31*I,-.005]],.012*I,G,14,!1,"outer-lash"),t.eyes==="star"){let St=_("star-reflection",()=>{let Gt=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];return new Hi(new Cn(Gt.map(([$t,Xt])=>new It($t,Xt))))}),Dt=Y(Et,St,Lt,[-X*.11*I,J*.29*I*ct,.027],[I,I,I],!1,"star-catchlight");Dt.castShadow=!1,Dt.receiveShadow=!1;let Ut=Y(Et,_("star-reflection-dot",()=>new Mr(1,12)),Lt,[X*.36*I,-J*.37*I*ct,.026],[.01*I,.01*I,1],!1,"catchlight-dot");Ut.castShadow=!1,Ut.receiveShadow=!1}else if(["sparkle","glossy","oval"].includes(t.eyes)){let St=ht(Et,[-X*.29*I,J*.35*I*ct,.027],[.018*I,.02*I,.006],Lt,!1,"catchlight");St.castShadow=!1,St.receiveShadow=!1,t.eyes==="sparkle"&&St.scale.multiplyScalar(.76),t.eyes==="glossy"&&ht(Et,[X*.35*I,-J*.34*I*ct,.025],[.008*I,.008*I,.004],Lt,!1,"catchlight-small")}if(t.shape==="frog"&&Et.children.some(St=>St.name==="frog-eye-white"))for(let St of Et.children)St.name!=="frog-eye-white"&&(St.position.z+=.02)}if(t.brows!=="none"){let Wt=at+J*I*ct+.073,Lt=(t.brows==="curious"||m==="skeptical")&&_t>0?.047:0,St=m==="angry"?-_t*.048:m==="worried"||t.brows==="angled"?_t*.045:t.brows==="straight"?0:t.brows==="curious"?_t*.014:.006;xt([[lt-.09*I,Wt+Lt-St],[lt,Wt+Lt+(t.brows==="straight"?0:t.shape==="human"?.012:.025)],[lt+.09*I,Wt+Lt+St]],.01*I,L(t.shape==="human"?en(t.colors.hair,t.colors.eyes,.24):en(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let j=E.mouthY,ft=.103*E.size;if(t.mouth==="smile"&&m!=="laughing"){let _t=["sad","worried","angry"].includes(m),lt=["skeptical","confident","proud"].includes(m),at=Array.from({length:13},(vt,k)=>{let ct=k/12,ut=(ct*2-1)*ft,wt=(_t?-.031:.039)*(2*ct-1)**2;return[ut,j+(_t?.023:-.027)+wt+(lt?ct*.024:0)]});xt(at,t.shape==="human"?.0085:.01,t.shape==="human"?L(en(t.colors.skin,"#684538",.7),"matteEye"):G,_t?"frown":"smile")}else if(t.mouth==="pout")xt([[-ft*.68,j-.014],[0,j+.02],[ft*.68,j-.014]],.013,G,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"||t.mouth!=="none"&&m==="laughing"){let _t=t.mouth==="laugh"||m==="laughing";ht(p,[0,j,bt(0,j)+.019],[ft*(_t?1.16:.42),ft*(_t?.93:.51),.024],G,!1,"mouth"),_t&&ht(p,[0,j-.043,bt(0,j)+.041],[ft*.62,.032,.012],L("#D98C91","skin"),!1,"tongue")}if(t.expressionAccents&&["tearful","panicked"].includes(m)){let _t=L("#8BD6F4","eye"),lt=m==="tearful"?[-1,1]:[1];for(let at of lt){let vt=at*(O+.085),k=E.eyeY-(m==="tearful"?.19:-.14),ct=ht(p,[vt,k,bt(vt,k)+.025],[.025,.056,.018],_t,!1,"expression-drop");ct.rotation.z=-at*.15}}if(t.shape==="human"&&ht(p,[0,-.095,bt(0,-.095)+.006],[.033,.044,.025],L(en(t.colors.skin,"#C29076",.05),"skin"),!1,"nose"),t.shape!=="human"&&["shy","happy","excited","laughing"].includes(m))for(let _t of[-1,1]){let lt=_t*O*1.32,at=E.eyeY-.17,vt=L(en(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");ht(p,[lt,at,bt(lt,at)+.008],[.085*E.size,.033*E.size,.009],vt,!1,"cheek")}}}var ue=i=>new B(...i),Ys=(i,t,e)=>Math.max(t,Math.min(e,i)),Ae=(i,t={})=>new dn({color:i,roughness:.78,...t});function Qe(i,t,e,n=[0,0,0]){let s=new ye(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function es(i,t,e=[0,0,0]){let n=new Te;return n.name=t,n.position.fromArray(e),i.add(n),n}function Ne(i,t,e,n=[0,0,0]){let s=Qe(i,new Nn(1,24,16),e,n);return s.scale.fromArray(t),s}function Fu(i,t,e){let n=new Cn,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function In(i,t,e,n=[0,0,0],s=.025){let[r,o,a]=t,l=Math.min(s*.35,a*.25,o*.15),h=new ki(Fu(r-l*2,o-l*2,s),{depth:Math.max(.001,a-l*2),bevelEnabled:!0,bevelSize:l,bevelThickness:l,bevelSegments:3,curveSegments:8,steps:1});return h.translate(0,0,-(a-l*2)/2),Qe(i,h,e,n)}function Sn(i,t,e,n,s=!1){let r=new on(t.map(ue),s,"centripetal");return Qe(i,new Zn(r,Math.max(20,t.length*4),e,8,s),n)}function Du(i,t,e,n,s){let r=ue(t),o=ue(e),a=o.clone().sub(r),l=Qe(i,new Rn(n,n,a.length(),16),s);return l.position.copy(r.add(o).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new B(0,1,0),a.normalize()),l}function $a(i,t,e,n,s,r){return Sn(i,Array.from({length:48},(o,a)=>{let l=a/48*Math.PI*2;return[Math.cos(l)*t,n,Math.sin(l)*e]}),s,r,!0)}function bl(i,t,e,n=[0,0,0],s=.025){let r=new Cn;for(let a=0;a<10;a++){let l=Math.PI/2+a*Math.PI/5,h=t*(a%2?.46:1);a?r.lineTo(Math.cos(l)*h,Math.sin(l)*h):r.moveTo(Math.cos(l)*h,Math.sin(l)*h)}r.closePath();let o=new ki(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return o.translate(0,0,-s/2),Qe(i,o,e,n)}function Lu(i,t,e,n,s=[0,0,0]){let r=es(i,"flower",s);for(let o=0;o<5;o++){let a=o*Math.PI*.4,l=Ne(r,[t*.47,t*.69,t*.23],e,[Math.sin(a)*t*.64,Math.cos(a)*t*.64,0]);l.rotation.z=-a}return Ne(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function W1(i){let t=i.root,e=[],n=[],s=[];t.updateMatrixWorld(!0);let r=(p,c)=>p?.traverse(x=>{if(!(!x.isMesh||!x.geometry||!x.visible)){for(let M=x;M&&M!==p;M=M.parent)if(M===i.face)return;c.push(x)}});r(i.head||t,e),r(i.torso,n),i.face?.traverse(p=>{if(!(!p.isMesh||!p.geometry||!p.visible)){for(let c=p;c&&c!==i.face;c=c.parent)if(/^(eye-|brow|mouth|lip|cheek|expression|tear|blush)/i.test(c.name))return;/^(eye|pupil|catchlight|closed-lid|delighted-lid|outer-lash|brow|mouth|smile|cheek|expression)/i.test(p.name)||s.push(p)}});let o=e.filter(p=>!/ear|gill|muzzle|beak|facial-disc|twin-top-lobe/.test(p.name)&&p.geometry.type!=="TubeGeometry"),a=t.matrixWorld.clone().invert(),l=new le,h=new On,u=(i.height||3)+(i.width||3)+4;function d(p,c,x=e){h.set(ue(p).applyMatrix4(t.matrixWorld),ue(c).transformDirection(t.matrixWorld));let M=h.intersectObjects(x,!1)[0];if(!M)return null;let g=M.point.clone().applyMatrix4(a);l.getNormalMatrix(a.clone().multiply(M.object.matrixWorld));let f=M.face.normal.clone().applyMatrix3(l).normalize();return{point:g,normal:f}}return{cast:d,reach:u,top(p,c,x){return d([p,u,c],[0,-1,0])?.point.y??x},front(p,c,x,M=!1){return d([p,c,u],[0,0,-1],M?[...e,...n]:e)?.point.z??x},side(p,c,x,M=!1){return d([p*u,c,x],[-p,0,0],M?o:e)},frontHit(p,c,x=!1,M=!1){let g=x?[...e,...n,...M?s:[]]:[...o,...M?s:[]];return d([p,c,u],[0,0,-1],g)},faceHit(p,c){return d([p,c,u],[0,0,-1],[...o,...s])},ornament(p,c){return d(p,c,e.filter(x=>x.name!=="hair-strands"))},around(p,c,x=!1,M=!1){let g=ue(c).normalize(),f=ue(p).addScaledVector(g,u);return d(f.toArray(),g.negate().toArray(),x?[...e,...n]:M?o:e)}}}function Uu(i){return new on(i.map(([t,e])=>new B(t,e,0)),!0,"centripetal").getPoints(64).slice(0,-1)}function X1(i){let t=[...i].sort((o,a)=>o[0]-a[0]),e=[];for(let o of t){if(e.length&&Math.abs(o[0]-e.at(-1)[0])<1e-5){if(o[1]<=e.at(-1)[1])continue;e.pop()}for(;e.length>=2;){let a=e.at(-2),l=e.at(-1);if((l[0]-a[0])*(o[1]-l[1])-(l[1]-a[1])*(o[0]-l[0])<-1e-5)break;e.pop()}e.push(o)}let n=e.length>=3?e.reverse():i,s=Math.abs(n[0][0]-n.at(-1)[0]),r=[];for(let o=0;o<n.length;o++){let a=n[o],l=n[o+1];if(r.push(a),!l)continue;let h=Math.abs(l[0]-a[0]);if(h>s*.16&&Math.abs(l[1]-a[1])<s*.025){let u=Math.min(s*.038,h*.1);for(let d=1;d<8;d++){let p=d/8;r.push([be.lerp(a[0],l[0],p),be.lerp(a[1],l[1],p)+Math.sin(p*Math.PI)*u,be.lerp(a[2],l[2],p)])}}}return r}function Y1(i,{rx:t,rz:e,s:n,contact:s,center:r},o){let h=[];for(let T=0;T<16;T++){let A=T/16*Math.PI*2;h.push(s.top(r[0]+Math.cos(A)*t*.7,r[2]+Math.sin(A)*e*.7,r[1]-.16*n)-.018*n)}let u=h.reduce((T,A)=>T+A,0)/16,d=T=>{let A=(T/(Math.PI*2)*16+16)%16,b=Math.floor(A),E=A-b;return be.lerp(h[b],h[(b+1)%16],E)},p=new on([[0,-.08,.8],[.48,-.035,.95],[.7,0,1],[.88,.075,.75],[1,.18,.38],[.92,.33,.12],[.67,.46,0],[.3,.52,0],[0,.535,0]].map(ue),!1,"catmullrom",.3),c=[],x=[],M=[],g=32;for(let T=0;T<=g;T++){let A=p.getPoint(T/g),b=Math.max(0,A.x),E=A.y,y=Ys(A.z,0,1);for(let _=0;_<=48;_++){let D=_/48*Math.PI*2,L=Math.cos(D)*t*b-.06*n*(1-b),U=Math.sin(D)*e*b,V=d(D)-u,$=.17*Math.cos(D)*t;if(c.push(r[0]+L,u+E*n+.17*L+(V-$*.7)*y,r[2]+U),x.push(_/48,T/g),T<g&&_<48){let G=T*49+_,it=G+48+1;M.push(G,it,G+1,it,it+1,G+1)}}}let f=new Me;f.setAttribute("position",new ie(c,3)),f.setAttribute("uv",new ie(x,2)),f.setIndex(M),f.computeVertexNormals();let w=Qe(i,f,o);w.name="soft-beret-crown";let v=r[0]-.06*n,S=u+.535*n;Sn(i,[[v,S-.018*n,r[2]],[v+.014*n,S+.041*n,r[2]],[v+.036*n,S+.06*n,r[2]+.008*n]],.025*n,o),i.userData.contactFit={kind:"crown",samples:16,baseY:u,min:Math.min(...h),max:Math.max(...h)}}function Nu(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],o=t.shape==="human",a=t.shape==="meta-hood"||t.family==="meta-muse",l=e.userData.anatomy==="human"||o,h=e.userData.anatomy==="animal"||r.includes(t.shape),u=h&&["penguin","owl"].includes(t.shape),d=i.height||(o?2.8:h?2.5:2.1),p=i.width||2.3,c=Ys(Math.min(p/(o?1.5:h?1.8:2.3),d/(o?2.8:h?2.5:2.1)),.7,1.3),x=n.crown||n.headTop||[0,d,0],M=n.face||[0,d*.58,p*.3],g=n.neck||[0,d*(o?.49:.34),M[2]*.82],f=t.accessories||{},w=t.action||"idle",v=[],S=[],T=Ae(s.accessory||"#33465a"),A=Ae(s.secondary||"#f6ead9"),b=Ae("#23272d",{roughness:.58}),E=Ae("#e7bc72",{metalness:.24,roughness:.4}),_=(l?e.getObjectByName("hand")?.material:u?e.getObjectByName("wing-tip")?.material:null)||Ae(o?s.skin||"#e9bea2":s.body||"#319ceb"),D=l||u?e.getObjectByName("upper-arm")?.material||Ae(s.clothing||s.body||"#338c81"):_,L=Ae(new Qt(s.accessory||"#33465a").lerp(new Qt("#ffffff"),.22)),U=(pt,R)=>{let Z=es(e,pt,R);return v.push(Z),Z},V=(pt,R)=>ue(R).applyMatrix4(pt.matrix).toArray(),$=new On,G=(pt,R,Z)=>{e.updateMatrixWorld(!0),pt.updateWorldMatrix(!0,!0);let z=e.matrixWorld.clone().invert(),H=(o?.075:h?.095:.082)*c,W=R.map((tt,q)=>{if(!tt)return null;let nt=ue(Z[q]).normalize(),bt=(i.height||3)+(i.width||3)+2,xt=ue(tt).addScaledVector(nt,bt).applyMatrix4(pt.matrixWorld),C=nt.transformDirection(pt.matrixWorld).negate();$.set(xt,C);let m=$.intersectObject(pt,!0)[0];if(!m?.face)return null;let I=new le().getNormalMatrix(z.clone().multiply(m.object.matrixWorld)),F=m.face.normal.clone().applyMatrix3(I).normalize(),O=m.point.clone().applyMatrix4(z);return{target:O.clone().addScaledVector(F,H).toArray(),surface:O.toArray(),normal:F.toArray(),object:m.object.name}});return pt.userData.handContactFits=W,W.map((tt,q)=>tt?.target||(R[q]?V(pt,R[q]):null))},it=null,Y=w==="sleep"?"none":f.prop||"none",ht={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book"};ht[w]&&(Y=ht[w]);let At=M[2]+.16*c,gt=W1(i),zt=(pt,R,Z=.045*c)=>{let z=gt.faceHit(pt,R);if(!z)return[pt,R,gt.front(pt,R,M[2])+Z];let H=z.normal.z<.05?ue([0,0,1]):z.normal;return z.point.addScaledVector(H,Z).toArray()},kt=[-1,1].map(pt=>gt.side(pt,M[1],x[2])),qt=Math.max(.35*c,...kt.map(pt=>pt?Math.abs(pt.point.x-x[0]):p*.36)),Vt=Ys(qt*.77,.43*c,.85*c),ot=w==="listen"?"headphones":f.head||"none";if(ot!=="none"){let pt=U("head-"+ot),R=Ae(s.headAccessory||s.accessory||"#292A2D"),Z=R.clone();if(Z.roughness=1,ot==="beret")Y1(pt,{rx:Vt,rz:Vt*.78,s:c,contact:gt,center:[x[0]-.045*c,x[1],x[2]+.02*c]},Z);else if(ot==="headphones"){let z=Math.min(x[1]-.26*c,M[1]-.23*c),H=x[2]+.015*c,W=[x[0],z,H],tt=[];for(let nt=0;nt<=24;nt++){let bt=.055+nt/24*(Math.PI-.11),xt=[Math.cos(bt),Math.sin(bt),0],C=gt.around(W,xt,!1,!0),m=C?C.point.addScaledVector(C.normal,.052*c):ue(W).add(ue([Math.cos(bt)*qt,Math.sin(bt)*(x[1]-z),0]));tt.push(m.toArray())}R.roughness=.52,Sn(pt,X1(tt),.048*c,R);let q=Ae(new Qt(s.headAccessory||s.accessory||"#292A2D").lerp(new Qt("#a2a7ad"),.16),{roughness:.86});for(let nt of[-1,1]){let bt=gt.side(nt,z,H,!0),xt=bt?.normal||ue([nt,0,0]);xt.x*nt<.2&&xt.set(nt,.15,0).normalize();let C=bt?.point||ue([x[0]+nt*qt,z,H]),m=es(pt,"earcup-"+nt,C.clone().addScaledVector(xt,.04*c).toArray());m.quaternion.setFromUnitVectors(ue([1,0,0]),xt),Ne(m,[.14*c,.27*c,.198*c],b,[-.006*c,0,0]),Ne(m,[.135*c,.286*c,.22*c],R,[.09*c,0,0]);let I=Array.from({length:40},(F,O)=>{let N=O/40*Math.PI*2;return[.162*c,Math.cos(N)*.226*c,Math.sin(N)*.179*c]});Sn(m,I,.005*c,q,!0),m.userData.contactFit={kind:"side",point:C.toArray(),normal:xt.toArray()}}}else{let z=Vt*(ot==="wizard"?.75:.82),H=z*.83,W=Array.from({length:12},(q,nt)=>{let bt=nt/12*Math.PI*2;return gt.top(x[0]+Math.cos(bt)*z*.77,x[2]+Math.sin(bt)*H*.77,x[1]-.1*c)}),tt=W.reduce((q,nt)=>q+nt,0)/W.length-.035*c;if(pt.position.set(x[0],tt,x[2]),ot==="tuft"){pt.position.set(x[0],x[1]-.025*c,x[2]);for(let[q,nt]of[-.16,0,.16].entries()){let bt=Ne(pt,[.095*c,(q===1?.22:.17)*c,.105*c],Z,[nt*c,.08*c,0]);bt.rotation.z=(1-q)*.4,bt.name="tuft-lobe",bt.userData.surfaceMaterial="plush",i.surfaces?.push(bt)}}else if(ot==="pom"){pt.position.set(x[0],x[1]+.23*c,x[2]);let q=Ne(pt,[.255*c,.26*c,.255*c],Z);q.name="hat-pom",q.userData.surfaceMaterial="micro",i.surfaces?.push(q)}else if(["beanie","cap"].includes(ot)){let q=ot==="cap";if(Qe(pt,new Nn(z,36,24,0,Math.PI*2,0,Math.PI/2),Z).scale.set(1,q?.87:1.07,.83),$a(pt,z*.97,H*.97,.01*c,(q?.024:.04)*c,Z),q){let bt=Ne(pt,[z*.81,.034*c,z*.56],T,[0,-.008*c,H*.81]);bt.rotation.x=-.1,Ne(pt,[.035*c,.017*c,.035*c],L,[0,z*.875,0])}else for(let bt=0;bt<16;bt++){let xt=bt*Math.PI*2/16,C=[];for(let m=0;m<=12;m++){let I=.1+m/12*1.43;C.push([Math.sin(I)*Math.cos(xt)*(z+.002),Math.cos(I)*z*1.07,Math.sin(I)*Math.sin(xt)*(H+.002)])}Sn(pt,C,.0025*c,L)}}else if(ot==="crown"){let q=z*.85,nt=H*.85,bt=80,xt=.022*c,C=[],m=[],I=[];for(let O=0;O<=bt;O++){let N=O/bt*Math.PI*2,X=Math.cos(N),J=Math.sin(N),st=-.025*c,mt=st+(.115+.145*((Math.cos((N-Math.PI/2)*5)+1)*.5)**2)*c;if(C.push(X*q,st,J*nt,X*q,mt,J*nt,X*(q-xt),mt,J*(nt-xt),X*(q-xt),st,J*(nt-xt)),I.push([X*q,mt,J*nt]),O<bt)for(let j=0;j<4;j++){let ft=O*4+j,_t=O*4+(j+1)%4;m.push(ft,ft+4,_t,_t,ft+4,_t+4)}}let F=new Me;F.setAttribute("position",new ie(C,3)),F.setIndex(m),F.computeVertexNormals(),Qe(pt,F,T),Sn(pt,I.slice(0,-1),.013*c,T,!0);for(let O=0;O<5;O++){let N=I[(bt/4+O*bt/5)%bt];Ne(pt,[.025*c,.027*c,.025*c],T,N)}}else if(ot==="bowler"||ot==="topHat"){let q=ot==="topHat",nt=z*(q?1.15:.91),bt=q?[[0,-.025],[.69,-.025],[.73,.08],[.69,.88],[.67,1],[0,1]]:[[0,-.025],[.78,-.025],[.87,.11],[.86,.46],[.71,.79],[.4,.98],[0,1.04]],xt=new on(bt.map(([O,N])=>ue([O*z,N*nt,0])),!1,"catmullrom",.2),C=new Is(xt.getPoints(32).map(O=>new It(Math.max(0,O.x),O.y)),48),m=Qe(pt,C,Z);m.scale.z=.83;let I=Ne(pt,[z*1.08,.045*c,H*1.06],Z,[0,.005*c,0]),F=Ae(new Qt(s.accessory||"#33465a").lerp(new Qt("#77828f"),.12),{roughness:.76});$a(pt,z*(q?.705:.862),H*(q?.705:.862),.11*c,.022*c,F)}else if(ot==="flower"){let q=null;for(let bt of[.67,.52,.36,.18,0]){let xt=x[0]-qt*bt,C=gt.ornament([xt,gt.reach,x[2]],[0,-1,0]);if(C){for(let m of[.14,.2,.28,.36]){let I=gt.ornament([xt,C.point.y-m*c,gt.reach],[0,0,-1]);if(I&&(q=I,I.normal.z>=.58))break}if(q)break}}q||=gt.ornament([M[0],M[1],gt.reach],[0,0,-1]),q&&(pt.position.copy(q.point).addScaledVector(q.normal,.01*c),pt.quaternion.setFromUnitVectors(ue([0,0,1]),q.normal),pt.rotateZ(-.2),pt.userData.contactFit={kind:"ornament",point:q.point.toArray(),normal:q.normal.toArray(),offset:.01*c}),Lu(pt,.15*c,A,E),Ne(pt,[.042*c,.055*c,.023*c],Ae("#678b62"),[0,0,-.02*c]);let nt=Ne(pt,[.044*c,.115*c,.021*c],Ae("#678b62"),[.105*c,-.06*c,-.025*c]);nt.rotation.z=-.8}else if(ot==="wizard"){Ne(pt,[z*1.14,.042*c,H*1.14],T);let q=[[.92,0],[.88,.1],[.69,.27],[.47,.43],[.22,.58],[.06,.65],[0,.66]],nt=new Is(q.map(xt=>new It(xt[0]*z,xt[1]*c)),40),bt=nt.attributes.position;for(let xt=0;xt<bt.count;xt++)bt.setX(xt,bt.getX(xt)+.15*c*(bt.getY(xt)/(.66*c))**2);nt.computeVertexNormals(),Qe(pt,nt,T),$a(pt,z*.88,z*.88,.1*c,.022*c,A),bl(pt,.062*c,E,[.03*c,.28*c,z*.69],.012*c)}}}if(f.face&&f.face!=="none"){e.updateMatrixWorld(!0);let pt=e.matrixWorld.clone().invert(),R=e.getWorldQuaternion(new je).invert(),Z=i.eyeGroups?.length>=2?i.eyeGroups.map(C=>{let m=C.getWorldPosition(new B).applyMatrix4(pt),I=R.clone().multiply(C.getWorldQuaternion(new je)),F=new Ee().compose(m,I,ue([1,1,1])).invert(),O=new Le;return C.traverse(N=>{!N.isMesh||!N.geometry||!N.visible||(N.geometry.computeBoundingBox(),O.union(N.geometry.boundingBox.clone().applyMatrix4(F.clone().multiply(pt).multiply(N.matrixWorld))))}),{center:m,quaternion:I,bounds:O}}):[-1,1].map(C=>({center:ue([C*p*.13,M[1],M[2]]),quaternion:new je,bounds:new Le(ue([-.07*c,-.12*c,0]),ue([.07*c,.12*c,.04*c]))}));Z.sort((C,m)=>C.center.x-m.center.x);let z=U("face-"+f.face),H=["sunglasses","catEye","roundSun"].includes(f.face),W=f.face==="monocle",tt=Math.abs(Z[1].center.x-Z[0].center.x),q=Ae(H?"#15202a":"#d6eef5",{transparent:!H,opacity:H?1:.065,roughness:H?.33:.18,metalness:H?.06:0,depthWrite:H,side:Ke}),nt=[],bt=(C,m,I,F,O)=>{let N=ue([I,F,0]).applyQuaternion(m).add(C),X=gt.faceHit(N.x,N.y);if(!X)return N.addScaledVector(ue([0,0,1]).applyQuaternion(m),O).toArray();let J=X.normal.z<.05?ue([0,0,1]).applyQuaternion(m):X.normal;return X.point.addScaledVector(J,O).toArray()},xt=(C,m,I,F,O,N)=>{let X=new Hi(C,48),J=X.attributes.position;for(let mt=0;mt<J.count;mt++){let j=bt(m,I,J.getX(mt),J.getY(mt),N);J.setXYZ(mt,j[0],j[1],j[2])}J.needsUpdate=!0,X.computeVertexNormals(),X.computeBoundingSphere();let st=Qe(z,X,q);return st.name="eyewear-lens",st.userData.contactFit={kind:"curved-lens",center:m.toArray(),radii:[F,O],offset:N},st};if(Z.forEach(({center:C,quaternion:m,bounds:I},F)=>{if(W&&F===0)return;let O=F?1:-1,N=I.max.x-I.min.x,X=I.max.y-I.min.y,J=Math.max(t.shape==="triangle"&&f.face==="round"?.25*c:t.shape==="diamond"&&f.face==="sunglasses"?.34*c:0,Ys(tt*(f.face==="roundSun"?.43:.41),.11*c,.27*c),N*.5+.024*c),st=Math.max(t.shape==="triangle"&&f.face==="round"?.31*c:0,J*(f.face==="square"||f.face==="sunglasses"?.81:1.04),X*.5+.021*c),mt=Math.max(.025*c,I.max.z+.022*c),j;f.face==="catEye"?j=Uu([[-.96,.48],[-.86,-.31],[-.35,-.64],[.34,-.62],[.83,-.29],[1.13,.77],[.57,.6],[0,.54]].map(([vt,k])=>[vt*J*O,k*st])):f.face==="sunglasses"?j=Uu([[-.96,.66],[-.38,.72],[.34,.69],[.98,.61],[.9,-.22],[.64,-.69],[0,-.76],[-.65,-.62],[-.9,-.21]].map(([vt,k])=>[vt*J,k*st])):f.face==="square"?j=Fu(J*2.08,st*1.94,J*.28).getPoints(12).slice(0,-1).map(vt=>ue([vt.x,vt.y,0])):j=Array.from({length:64},(vt,k)=>{let ct=k/64*Math.PI*2;return ue([Math.cos(ct)*J,Math.sin(ct)*st,0])});let ft=new Cn(j.map(vt=>new It(vt.x,vt.y)));H&&xt(ft,C,m,J,st,mt+.002*c);let _t=j.map(vt=>bt(C,m,vt.x,vt.y,mt+.01*c));Sn(z,_t,(H?.019:.013)*c,T,!0);let lt=bt(C,m,O*J,.03*st,mt+.01*c),at=bt(C,m,-O*J,.03*st,mt+.01*c);if(nt.push({i:F,sign:O,rx:J,ry:st,center:C,quaternion:m,offset:mt,outer:lt,inner:at,contactFit:{kind:"eye-surface",eyeDepth:I.max.z,normal:ue([0,0,1]).applyQuaternion(m).toArray()}}),!W){let vt=gt.side(O,C.y-.022*c,x[2]+.015*c,!0),k=vt?.normal||ue([O,0,0]),ct=vt?vt.point.addScaledVector(k,.015*c).toArray():[x[0]+O*qt,C.y-.022*c,x[2]-.02*c],ut=[lt,[lt[0]+O*.035*c,lt[1]-.012*c,lt[2]-.04*c],[be.lerp(lt[0],ct[0],.68),be.lerp(lt[1],ct[1],.68),be.lerp(lt[2],ct[2],.72)],ct];Sn(z,ut,.012*c,T),z.userData.temples||=[],z.userData.temples.push({eye:F,end:ct,normal:k.toArray()})}}),W){let C=nt[0],m=bt(C.center,C.quaternion,C.sign*C.rx*.72,-.24*C.ry,C.offset+.012*c),I=m[0]+.105*c,F=Math.max(g[1]+.05*c,m[1]-.37*c),O=[];for(let N=0;N<=12;N++){let X=N/12,J=be.lerp(m[0],I,X),st=be.lerp(m[1],F,X),mt=gt.frontHit(J,st,!0,!0),j=mt?.normal||ue([0,0,1]),ft=mt?mt.point.addScaledVector(j.z<.05?ue([0,0,1]):j,.022*c).toArray():[J,st,gt.front(J,st,m[2]-.045*c,!0)+.022*c];N===0&&ft.splice(0,3,...m),O.push(ft)}Sn(z,O,.011*c,T)}else{let C=nt[0].inner,m=nt[1].inner,I=[];for(let F=0;F<=10;F++){let O=F/10,N=be.lerp(C[0],m[0],O),X=be.lerp(C[1],m[1],O)+Math.sin(O*Math.PI)*.028*c;I.push(F===0?C:F===10?m:zt(N,X,Math.max(nt[0].offset,nt[1].offset)+.012*c))}Sn(z,I,.013*c,T),z.userData.bridgeFit=I.map((F,O)=>({point:F,sample:O}))}}if(f.neck&&f.neck!=="none"){let pt=g[1]-(a&&f.neck==="scarf"?.08*c:0),R=U("neck-"+f.neck,[0,pt,0]),Z=o?.32*c:h?.46*c:p*.46,z=gt.front(0,pt,n.neckFront?.[2]||M[2]*.86,!0),H=z+.018*c;if(f.neck==="bow"){for(let W of[-1,1]){let tt=new Cn;tt.moveTo(0,0),tt.bezierCurveTo(.056*c,.025*c,.17*c,.12*c,.225*c,.11*c),tt.quadraticCurveTo(.25*c,.1*c,.25*c,0),tt.quadraticCurveTo(.25*c,-.1*c,.215*c,-.11*c),tt.bezierCurveTo(.15*c,-.1*c,.052*c,-.03*c,0,0);let q=new ki(tt,{depth:.032*c,bevelEnabled:!0,bevelSize:.014*c,bevelThickness:.022*c,bevelSegments:4,curveSegments:16}),nt=Qe(R,q,T,[W*.005*c,0,H+.019*c]);nt.scale.set(W*(t.family==="dots"?1.85:1),t.family==="dots"?1.65:1,1),nt.rotation.z=W*-.04}Ne(R,[(t.family==="dots"?.075:.052)*c,(t.family==="dots"?.09:.065)*c,.059*c],T,[0,0,H+.04*c])}else{let W=f.neck==="scarf",tt=(W?.062:.03)*c,q=[],nt=[];for(let xt=0;xt<64;xt++){let C=xt/64*Math.PI*2,m=ue([Math.cos(C),0,Math.sin(C)]),I=gt.around([0,pt,0],m.toArray(),!0);if(I){let F=I.normal.z<-.4&&m.z>0?ue([0,0,1]):I.normal,O=I.point.clone().addScaledVector(F,tt*.92);q.push(O.sub(ue([0,pt,0])).toArray()),nt.push({point:I.point.toArray(),normal:F.toArray()})}else q.push([m.x*(Z+tt),0,m.z*((o?.28:h?.38:p*.3)*c+tt)]),nt.push(null)}let bt=T.clone();if(bt.side=Ke,Sn(R,q,tt,bt,!0),R.userData.contactFit={kind:W?"wrapped-scarf":"neckwear",points:nt},f.neck==="scarf"){let xt=(C,m,I,F,O,N,X)=>{let mt=[],j=[],ft=[],_t=ue(X),lt=[];for(let ut=0;ut<=18;ut++){let wt=ut/18,Mt=I-O*c*wt,Q=[];for(let Tt=0;Tt<=5;Tt++){let Et=Tt/5,Wt=m+(Et-.5)*F*c+Math.sin(N)*O*c*wt+Math.sin(wt*Math.PI)*.018*c,Lt=gt.frontHit(Wt,Mt,!0),St=Lt?.normal||ue([0,0,1]);Q.push({point:Lt?Lt.point.clone():ue([Wt,Mt,z+.02*c]),facing:(St.z<.18?ue([0,0,1]):St.clone()).normalize()})}lt.push(Q)}for(let ut=0;ut<2;ut++)for(let wt of lt)for(let Mt of wt){let{point:Q,facing:Tt}=Mt,Et=Q.clone();Et.addScaledVector(Tt,(ut?-.02:.014)*c),ut||ft.push(Et.clone()),mt.push(Et.x-_t.x,Et.y-_t.y,Et.z-_t.z)}let at=114;for(let ut=0;ut<2;ut++){let wt=ut*at;for(let Mt=0;Mt<18;Mt++)for(let Q=0;Q<5;Q++){let Tt=wt+Mt*6+Q,Et=Tt+5+1;ut?j.push(Tt,Tt+1,Et,Tt+1,Et+1,Et):j.push(Tt,Et,Tt+1,Tt+1,Et,Et+1)}}let vt=(ut,wt,Mt,Q)=>j.push(ut,wt,Mt,Mt,wt,Q);for(let ut=0;ut<5;ut++){vt(ut,ut+1,at+ut,at+ut+1);let wt=108+ut;vt(wt,at+wt,wt+1,at+wt+1)}for(let ut=0;ut<18;ut++){let wt=ut*6,Mt=wt+5+1;vt(wt,at+wt,Mt,at+Mt);let Q=wt+5,Tt=Mt+5;vt(Q,Tt,at+Q,at+Tt)}let k=new Me;k.setAttribute("position",new ie(mt,3)),k.setIndex(j),k.computeVertexNormals(),k.computeBoundingSphere();let ct=Qe(C,k,bt);return ct.name="scarf-drape",ct.userData.surfaceContactSamples=ft.filter((ut,wt)=>wt%6===Math.floor(2.5)).map(ut=>ut.toArray()),ct};for(let[C,m,I]of[[-.115,.36,-.1],[.055,.29,.105]]){let F=C*c,O=pt-.045*c,N=gt.frontHit(F,O,!0),X=N?.normal||ue([0,0,1]),J=N?N.point.addScaledVector(X.z<.18?ue([0,0,1]):X,.026*c).toArray():[F,O,z+.025*c],st=es(R,"scarf-end",[J[0],J[1]-pt,J[2]]);xt(st,F,O,.132,m,I,J),st.userData.contactFit={kind:"front-drape",point:J,normal:X.toArray(),tilt:I}}}else Ne(R,[.068*c,.081*c,.025*c],E,[0,-.085*c,H+.043*c])}}if(Y==="macbook"){let pt=Math.min(d*.28,M[1]-.6*c),R=U("prop-macbook",[0,Math.max(.28*c,pt),At]);R.rotation.y=-.64;let Z=1.1*c,z=.69*c,H=Ys(M[1]-R.position.y-.22*c,.29*c,.38*c),W=Ae("#bdc3ca",{metalness:.7,roughness:.31}),tt=Ae("#4a5058",{roughness:.62});In(R,[Z,.043*c,z],W,[0,0,0],.045*c);for(let xt=0;xt<3;xt++)for(let C=0;C<10;C++)In(R,[.078*c,.009*c,.055*c],tt,[(C-4.5)*.098*c,.026*c,(xt*.079-.06)*c],.014*c);In(R,[.32*c,.004*c,.135*c],L,[0,.024*c,-.225*c],.018*c);let q=es(R,"laptop-lid",[0,.025*c,z*.45]);q.rotation.x=.54,In(q,[Z,H,.055*c],W,[0,H/2,0],.043*c);let nt=Ae("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});In(q,[Z-.07*c,H-.055*c,.005*c],nt,[0,H/2,-.024*c],.027*c);let bt=Ae("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let xt=0;xt<3;xt++)In(q,[(xt?.38:.63)*c,.012*c,.004*c],bt,[-.11*c,H*.67-xt*.05*c,-.028*c],.003*c);Ne(q,[.009*c,.009*c,.004*c],b,[0,H-.018*c,-.025*c]),R.updateMatrix(),it=G(R,[[-.33*c,.06*c,.02*c],[.33*c,.06*c,.02*c]],[[0,1,0],[0,1,0]])}else if(Y==="flowers"){let pt=Math.min(d*.33,M[1]-.6*c),R=U("prop-flowers",[0,pt,At+.03*c]);R.rotation.z=-.08;let Z=Ae("#6c8d64"),z=Ae("#e1c7ac",{side:Ke});Qe(R,new Rn(.25*c,.065*c,.36*c,32,1,!0),z,[0,.02*c,0]);let H=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],W=[Ae("#f0bbbd"),A,Ae("#dda375"),Ae("#d4b5ce"),A];H.forEach((q,nt)=>{Du(R,[0,-.25*c,0],q.map(xt=>xt*c),.014*c,Z);let bt=Lu(R,.12*c,W[nt],E,q.map(xt=>xt*c));bt.rotation.x=-.18});let tt=Ne(R,[.065*c,.16*c,.027*c],Z,[.22*c,.2*c,-.02*c]);tt.rotation.z=-.7,$a(R,.077*c,.075*c,-.12*c,.018*c,T),R.updateMatrix(),it=G(R,[[-.105*c,-.035*c,.09*c],[.105*c,-.035*c,.09*c]],[[0,0,1],[0,0,1]])}else if(Y==="wand"){let pt=U("prop-wand",[p*.48,d*.43,At]);pt.rotation.z=-.12,Du(pt,[0,-.2*c,0],[0,.48*c,0],.029*c,E),bl(pt,.16*c,A,[0,.56*c,0],.04*c);let R=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((Z,z)=>bl(pt,(.03+z*.008)*c,E,Z.map(H=>H*c),.009*c));S.push(Z=>R.forEach((z,H)=>{z.rotation.z=Math.sin(Z*.8+H)*.2,z.scale.setScalar(.84+Math.sin(Z*1.4+H)*.16)})),pt.updateMatrix(),it=G(pt,[null,[0,-.045*c,0]],[[0,0,1],[0,0,1]])}else if(Y==="tea"){let pt=t.mouth!=="none"&&w==="drink",R=Math.min(d*(pt?.49:.34),M[1]-(pt?.58:.53)*c),Z=U("prop-tea",[p*.13,R,At+.05*c]),z=Ae("#cba981");Qe(Z,new Rn(.165*c,.128*c,.35*c,36),z),Qe(Z,new Rn(.175*c,.175*c,.032*c,36),A,[0,.185*c,0]);let H=n.mouth||[M[0],M[1]-.25*c,M[2]],W=pt?[H[0]-Z.position.x,H[1]-R,H[2]+.025*c-Z.position.z]:[.04*c,.48*c,-.05*c];Sn(Z,[[.04*c,.18*c,-.02*c],[.04*c,.18*c+(W[1]-.18*c)*.64,-.025*c],W],.019*c,T);for(let tt=0;tt<6;tt++){let q=tt*1.83;Ne(Z,[.019*c,.019*c,.013*c],b,[Math.sin(q)*.08*c,(-.125+tt%2*.03)*c,.121*c])}Z.updateMatrix(),it=G(Z,[[-.105*c,-.025*c,0],[.105*c,-.025*c,0]],[[-1,0,0],[1,0,0]])}else if(Y==="camera"){let pt=U("prop-camera",[0,Math.min(M[1]-.28*c,d*.61),At+.04*c]);In(pt,[.65*c,.36*c,.25*c],T,[0,0,0],.06*c),In(pt,[.15*c,.09*c,.18*c],b,[0,.205*c,-.015*c],.025*c);let R=Qe(pt,new Rn(.148*c,.153*c,.19*c,40),b,[.03*c,0,.19*c]);R.rotation.x=Math.PI/2;let Z=Qe(pt,new Vi(.124*c,.014*c,8,40),E,[.03*c,0,.29*c]),z=Ae("#203b4c",{metalness:.35,roughness:.15});Ne(pt,[.12*c,.12*c,.018*c],z,[.03*c,0,.287*c]),In(pt,[.115*c,.061*c,.015*c],A,[-.2*c,.105*c,.135*c],.014*c),Ne(pt,[.045*c,.02*c,.04*c],b,[.22*c,.194*c,.015*c]),pt.updateMatrix(),it=G(pt,[[-.27*c,0,0],[.27*c,0,0]],[[-1,0,0],[1,0,0]])}else if(Y==="book"){let pt=U("prop-book",[0,Math.min(d*.34,M[1]-.47*c),At+.07*c]),R=Ae("#f5eddd"),Z=Ae("#bcc0b1");pt.rotation.x=.12;for(let z of[-1,1]){let H=es(pt,"book-half");H.rotation.z=z*.16,In(H,[.48*c,.029*c,.59*c],T,[z*.238*c,0,0],.018*c);for(let W=0;W<3;W++)In(H,[.45*c,.013*c,.55*c],R,[z*.227*c,(.022+W*.014)*c,0],.013*c);for(let W=0;W<5;W++)In(H,[(.25-W%2*.04)*c,.003*c,.007*c],Z,[z*.245*c,.059*c,(W-2)*.068*c],.002*c)}pt.updateMatrix(),it=G(pt,[[-.42*c,-.02*c,.1*c],[.42*c,-.02*c,.1*c]],[[0,-1,0],[0,-1,0]])}let yt=["wave","dance","celebrate","love"],Pt=l||h||Y!=="none"||yt.includes(w)||t.pose==="chin"||["hands","both"].includes(t.limbs),Ht=(l||h)&&Y==="none"&&!yt.includes(w)&&t.pose!=="chin",Nt=Ht?[...i.arms||[]]:[],ne=[];if(Ht||(i.arms||[]).forEach(pt=>{pt.visible=!1}),Pt&&!Ht){let pt=l?d*.22:h&&!u?.13:h?d*.17:d*.32,R=[n.shoulderL||[-p*.4,d*.46,0],n.shoulderR||[p*.4,d*.46,0]],Z=R.map((z,H)=>[h&&!u?z[0]*.84:(H?1:-1)*p*(h?.3:.39),pt,h&&!u?Math.max(.48,M[2]*.78):M[2]*.73]);if(it&&it.forEach((z,H)=>{z&&(Z[H]=z)}),!it){if(w==="wave"&&(Z[1]=[p*.57,M[1]+.27*c,M[2]*.67]),t.pose==="chin"&&(Z[1]=[p*.2,M[1]-.25*c,M[2]+.07*c]),w==="dance"&&(Z[0]=[-p*.58,d*.44,M[2]*.6],Z[1]=[p*.56,d*.64,M[2]*.67]),w==="celebrate")for(let z=0;z<2;z++)Z[z]=[(z?1:-1)*p*.53,M[1]+.31*c,M[2]*.7];if(w==="love")for(let z=0;z<2;z++)Z[z]=[(z?1:-1)*.12*c,M[1]-.39*c,At]}for(let z=0;z<2;z++){let H=z?1:-1,W=ue(Z[z]);if(!l&&!h){let N=H*(it?Math.min(p*.32,Math.abs(W.x)+.15*c):p*.4),X=it?Ys(W.y+.12*c,d*.23,M[1]-.2*c):d*.43;R[z]=[N,X,gt.front(N,X,M[2]*.6)-.05*c]}let tt=ue(R[z]),q=W.clone().sub(tt),nt=U("posed-arm-"+z,R[z]),bt=(o?.078:h?.115:.102)*c,xt=q.clone().multiplyScalar(.48);xt.x+=H*(h&&!u&&!it?.035:.11)*c,xt.y-=.11*c,xt.z+=.05*c;let C=q.clone().multiplyScalar(.85);C.z+=.013*c;let m=Sn(nt,[[0,0,0],xt.toArray(),C.toArray(),q.toArray()],bt,D);{let N=m.geometry,X=N.attributes.position,{path:J,tubularSegments:st,radialSegments:mt}=N.parameters;for(let j=0;j<=st;j++){let ft=j/st,_t=J.getPointAt(ft),lt=1.12-.35*ft+.035*Math.sin(ft*Math.PI);for(let at=0;at<=mt;at++){let vt=j*(mt+1)+at;X.setXYZ(vt,_t.x+(X.getX(vt)-_t.x)*lt,_t.y+(X.getY(vt)-_t.y)*lt,_t.z+(X.getZ(vt)-_t.z)*lt)}}N.computeVertexNormals()}if(u){let N=m.geometry,X=N.attributes.position,{path:J,tubularSegments:st,radialSegments:mt}=N.parameters;for(let j=0;j<=st;j++){let ft=j/st,_t=J.getPointAt(ft),lt=.85+Math.sin(ft*Math.PI)*.64;for(let at=0;at<=mt;at++){let vt=j*(mt+1)+at;X.setXYZ(vt,_t.x+(X.getX(vt)-_t.x)*lt,_t.y+(X.getY(vt)-_t.y)*lt,_t.z+(X.getZ(vt)-_t.z)*.4)}}N.computeVertexNormals()}m.userData.region=o?"clothing":"body",m.userData.surfaceMaterial=o?D.name||"knit":t.material||"plush",m.userData.furLength=t.material==="micro"?.011:.024;let I=es(nt,(u?"wing-tip-":"hand-")+z,q.toArray()),F=(o?.102:h?.128:.115)*c,O=Ne(I,[F,F*(u?1.1:o?1.05:.83),F*(u?.4:Y==="macbook"?.57:.82)],_);if(O.userData.region=o?"skin":"body",O.userData.surfaceMaterial=o?_.name||"skin":t.material||"plush",O.userData.furLength=t.material==="micro"?.011:.024,l&&(I.rotation.x=Y==="macbook"?Math.PI*.49:Y==="book"?.65:-.22,Y==="macbook"&&(I.rotation.y=-.64),o)){for(let X=0;X<4;X++)Ne(I,[.023*c,(.065-Math.abs(X-1.5)*.008)*c,.025*c],_,[(X-1.5)*.043*c,.067*c,.018*c]);let N=Ne(I,[.055*c,.059*c,.035*c],_,[-H*.09*c,.006*c,.035*c]);N.rotation.z=H*.42}Nt.push(nt),ne.push(I),Array.isArray(i.surfaces)&&i.surfaces.push(m,O),!it&&(w==="wave"&&z===1||w==="celebrate")&&S.push(N=>{nt.rotation.z=Math.sin(N*3.2+z*.6)*.075}),!it&&w==="dance"&&S.push(N=>{nt.rotation.z=Math.sin(N*3+z*1.1)*.065}),Y==="macbook"&&S.push(N=>{I.rotation.z=Math.sin(N*4.2+z*1.7)*.022})}}i.arms=Nt,e.updateMatrixWorld(!0);for(let pt of v)i.head&&(pt.name.startsWith("head-")||pt.name.startsWith("face-"))?i.head.attach(pt):i.torso&&pt.name.startsWith("neck-")&&i.torso.attach(pt);return e.updateMatrixWorld(!0),{parts:v,prop:Y,constraintNotes:[],tick(pt){for(let R of S)R(Number.isFinite(pt)?pt:0)}}}var q1=(i,t,e)=>Math.max(t,Math.min(e,i)),ns=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function Yr(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Ka(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function Sl(){let i=new Map,t=new Map,e=new Map,n,s,r,o,a,l=0,h=0,u=(b,E,y)=>Math.max(E,Math.min(y,b)),d=(b,E,y)=>{let _=1/Math.max(1e-12,Math.hypot(b,E,y));return[b*_,E*_,y*_]};function p(b,E,y,_,D){b*=_,E*=_,y*=_;let L=Math.min(b,E,y),U=L<.08?L-6.25*L*L:.04;b-=U,E-=U,y-=U;let V=Math.max(b,E,y);if(V>=.76){let $=1-.0576/(V-.52),G=$/V,it=1-1/(.15*(V-$)+1);b=b*G*(1-it)+$*it,E=E*G*(1-it)+$*it,y=y*G*(1-it)+$*it}D[0]=b,D[1]=E,D[2]=y}let c=new Uint8ClampedArray(4097),x=new Float32Array(256);for(let b=0;b<c.length;b++){let E=b/4096;c[b]=Math.round((E<=.0031308?12.92*E:1.055*Math.pow(E,1/2.4)-.055)*255)}for(let b=0;b<256;b++){let E=b/255;x[b]=E<=.04045?E/12.92:Math.pow((E+.055)/1.055,2.4)}let M=(b,E)=>{let y=new Float32Array(16);for(let _=0;_<4;_++)for(let D=0;D<4;D++)y[_*4+D]=b[D]*E[_*4]+b[4+D]*E[_*4+1]+b[8+D]*E[_*4+2]+b[12+D]*E[_*4+3];return y};function g(b){let E=b[0],y=b[4],_=b[8],D=b[1],L=b[5],U=b[9],V=b[2],$=b[6],G=b[10],it=[L*G-U*$,U*V-D*G,D*$-L*V,_*$-y*G,E*G-_*V,y*V-E*$,y*U-_*L,_*D-E*U,E*L-y*D],Y=E*it[0]+y*it[1]+_*it[2],ht=1/(Math.abs(Y)<1e-12?1:Y);return it.map(At=>At*ht)}function f(b){if(!b.normals){let E=new Float32Array(b.positions.length),y=b.positions,_=b.indices,D=_?_.length:y.length/3;for(let L=0;L<D;L+=3){let U=(_?_[L]:L)*3,V=(_?_[L+1]:L+1)*3,$=(_?_[L+2]:L+2)*3,G=y[V]-y[U],it=y[V+1]-y[U+1],Y=y[V+2]-y[U+2],ht=y[$]-y[U],At=y[$+1]-y[U+1],gt=y[$+2]-y[U+2],zt=it*gt-Y*At,kt=Y*ht-G*gt,qt=G*At-it*ht;for(let Vt of[U,V,$])E[Vt]+=zt,E[Vt+1]+=kt,E[Vt+2]+=qt}for(let L=0;L<E.length;L+=3){let U=1/Math.max(1e-10,Math.hypot(E[L],E[L+1],E[L+2]));E[L]*=U,E[L+1]*=U,E[L+2]*=U}b.normals=E}i.set(b.id,b)}function w(b,E,y,_){if(!b){_[0]=_[1]=_[2]=_[3]=1;return}E=E*b.repeat[0]+b.offset[0],y=y*b.repeat[1]+b.offset[1],E=b.wrapS===1e3?E-Math.floor(E):u(E,0,.999999),y=b.wrapT===1e3?y-Math.floor(y):u(y,0,.999999),b.flipY&&(y=1-y);let D=u(Math.floor(E*b.width),0,b.width-1),L=u(Math.floor(y*b.height),0,b.height-1),U=(L*b.width+D)*b.channels,V=b.data,$=V[U]||0,G=b.channels>1?V[U+1]:$,it=b.channels>2?V[U+2]:$;_[0]=b.srgb?x[$]:$/255,_[1]=b.srgb?x[G]:G/255,_[2]=b.srgb?x[it]:it/255,_[3]=b.channels===4?V[U+3]/255:1}function v(b){if(b.heightMips)return;b.heightMips=[{data:b.data,width:b.width,height:b.height,channels:b.channels}];let E=b.heightMips[0];for(;E.width>1||E.height>1;){let y=Math.max(1,E.width>>1),_=Math.max(1,E.height>>1),D=new Float32Array(y*_);for(let L=0;L<_;L++)for(let U=0;U<y;U++){let V=0;for(let $=0;$<2;$++)for(let G=0;G<2;G++)V+=E.data[(Math.min(E.height-1,L*2+$)*E.width+Math.min(E.width-1,U*2+G))*E.channels];D[L*y+U]=V*.25}E={data:D,width:y,height:_,channels:1},b.heightMips.push(E)}}function S(b,E,y,_,D){let L=Math.min(b.heightMips.length-1,_),U=Math.floor(L),V=L-U;D[0]=D[1]=0;for(let $=0;$<2;$++){let G=$?V:1-V;if(G<1e-4)continue;let it=b.heightMips[U+$],Y=(E*b.repeat[0]+b.offset[0])*it.width,ht=(y*b.repeat[1]+b.offset[1])*it.height;b.flipY&&(ht=it.height-ht);let At=Math.floor(Y),gt=Math.floor(ht),zt=Y-At,kt=ht-gt,qt=(Ht,Nt)=>(Ht=b.wrapS===1e3?(Ht%it.width+it.width)%it.width:u(Ht,0,it.width-1),Nt=b.wrapT===1e3?(Nt%it.height+it.height)%it.height:u(Nt,0,it.height-1),it.data[(Nt*it.width+Ht)*it.channels]/255),Vt=qt(At,gt),ot=qt(At+1,gt),yt=qt(At,gt+1),Pt=qt(At+1,gt+1);D[0]+=((ot-Vt)*(1-kt)+(Pt-yt)*kt)*it.width*b.repeat[0]*G,D[1]+=((yt-Vt)*(1-zt)+(Pt-ot)*zt)*it.height*b.repeat[1]*(b.flipY?-1:1)*G}}function T(b,E){if(!b.shadow)return null;let y=b.shadow.size,_=new Float32Array(y*y);_.fill(1/0);for(let{mesh:D,g:L}of E){if(!D.castShadow||D.material.transparent||D.material.unlit)continue;let U=M(b.shadow.viewProjection,D.matrix),V=L.positions,$=L.indices,G=new Float32Array(V.length),it=V.length/3;for(let gt=0;gt<it;gt++){let zt=gt*3,kt=V[zt],qt=V[zt+1],Vt=V[zt+2],ot=1/(U[3]*kt+U[7]*qt+U[11]*Vt+U[15]);G[zt]=((U[0]*kt+U[4]*qt+U[8]*Vt+U[12])*ot*.5+.5)*y,G[zt+1]=(.5-(U[1]*kt+U[5]*qt+U[9]*Vt+U[13])*ot*.5)*y,G[zt+2]=(U[2]*kt+U[6]*qt+U[10]*Vt+U[14])*ot}let Y=$?$.length:it,ht=D.start||0,At=Math.min(Y,Number.isFinite(D.count)?ht+D.count:Y);for(let gt=ht;gt+2<At;gt+=3){let zt=($?$[gt]:gt)*3,kt=($?$[gt+1]:gt+1)*3,qt=($?$[gt+2]:gt+2)*3,Vt=G[zt],ot=G[zt+1],yt=G[kt],Pt=G[kt+1],Ht=G[qt],Nt=G[qt+1],ne=G[zt+2],pt=G[kt+2],R=G[qt+2],Z=(yt-Vt)*(Nt-ot)-(Pt-ot)*(Ht-Vt);if(Math.abs(Z)<.04)continue;let z=Math.max(0,Math.floor(Math.min(Vt,yt,Ht))),H=Math.min(y-1,Math.ceil(Math.max(Vt,yt,Ht))),W=Math.max(0,Math.floor(Math.min(ot,Pt,Nt))),tt=Math.min(y-1,Math.ceil(Math.max(ot,Pt,Nt)));if(z>H||W>tt)continue;let q=1/Z,nt=(Pt-Nt)*q,bt=(Nt-ot)*q;for(let xt=W;xt<=tt;xt++){let C=xt+.5,m=((yt-(z+.5))*(Nt-C)-(Pt-C)*(Ht-(z+.5)))*q,I=((Ht-(z+.5))*(ot-C)-(Nt-C)*(Vt-(z+.5)))*q,F=xt*y+z;for(let O=z;O<=H;O++,F++,m+=nt,I+=bt){let N=1-m-I;if(m<0||I<0||N<0)continue;let X=m*ne+I*pt+N*R;X>=-1&&X<=1&&X<_[F]&&(_[F]=X)}}}}return{size:y,buffer:_,matrix:b.shadow.screenMatrix,radius:b.shadow.radius||2.5}}function A(b){let E=performance.now();for(let R of b.geometries||[])f(R);for(let R of b.textures||[])t.set(R.id,R);let y=new Set(b.geometryIds),_=new Set(b.textureIds),D=new Set(b.meshes.map(R=>R.id));for(let R of i.keys())y.has(R)||i.delete(R);for(let R of t.keys())_.has(R)||t.delete(R);for(let R of e.keys())D.has(R)||e.delete(R);(l!==b.width||h!==b.height)&&(l=b.width,h=b.height,n=new Float32Array(l*h),o=new Float32Array(l*h*4),a=new Float32Array(l*h*4),r=new Int32Array(l*h)),s=new Uint8ClampedArray(l*h*4),n.fill(1/0),r.fill(-1);let L=b.background||[0,0,0,0];for(let R=0;R<o.length;R+=4)o[R]=L[0]*L[3],o[R+1]=L[1]*L[3],o[R+2]=L[2]*L[3],o[R+3]=L[3];let U=new Float32Array(4097),V=b.exposure||1;for(let R=0;R<U.length;R++){let Z=R/512*V;U[R]=b.toneMapping?u(Z*(2.51*Z+.03)/(Z*(2.43*Z+.59)+.14),0,1):u(Z,0,1)}let $=b.lights||[],G=b.ambient||[.18,.18,.18],it=b.sky||[.24,.24,.24],Y=b.ground||[.13,.14,.16],ht=d(b.cameraWorld[8],b.cameraWorld[9],b.cameraWorld[10]);for(let R of $)R.half=d(R.direction[0]+ht[0],R.direction[1]+ht[1],R.direction[2]+ht[2]);let At=[],gt=[],zt=0,kt=0;for(let R=0;R<b.meshes.length;R++){let Z=b.meshes[R],z=i.get(Z.geometry);if(!z)continue;let H=Z.material,W=M(b.viewProjection,Z.matrix),tt=g(Z.matrix),q=z.positions.length/3,nt=e.get(Z.id);(!nt||nt.length!==q*9)&&(nt=new Float32Array(q*9),e.set(Z.id,nt));let bt=z.positions,xt=z.normals,C=z.uv,m=0;for(let F=0;F<q;F++){let O=F*3,N=F*9,X=bt[O],J=bt[O+1],st=bt[O+2],mt=W[3]*X+W[7]*J+W[11]*st+W[15],j=mt>1e-6?1/mt:0,ft=tt[0]*xt[O]+tt[1]*xt[O+1]+tt[2]*xt[O+2],_t=tt[3]*xt[O]+tt[4]*xt[O+1]+tt[5]*xt[O+2],lt=tt[6]*xt[O]+tt[7]*xt[O+1]+tt[8]*xt[O+2],at=j/Math.max(1e-9,Math.hypot(ft,_t,lt));nt[N]=((W[0]*X+W[4]*J+W[8]*st+W[12])*j*.5+.5)*l,nt[N+1]=(.5-(W[1]*X+W[5]*J+W[9]*st+W[13])*j*.5)*h,nt[N+2]=(W[2]*X+W[6]*J+W[10]*st+W[14])*j,nt[N+3]=j,nt[N+4]=ft*at,nt[N+5]=_t*at,nt[N+6]=lt*at,nt[N+7]=C?C[F*2]*j:0,nt[N+8]=C?C[F*2+1]*j:0,m+=nt[N+2]}let I={mesh:Z,g:z,tr:nt,index:R,z:m/q};(H.transparent||H.opacity<.999?gt:At).push(I)}At.sort((R,Z)=>R.mesh.order-Z.mesh.order||R.z-Z.z),gt.sort((R,Z)=>R.mesh.order-Z.mesh.order||Z.z-R.z);let qt=new Float32Array(4),Vt=new Float32Array(2),ot=new Float32Array(3),yt=T(b,At);function Pt(R,Z,z,H=1,W=.28){if(!yt)return 1;let tt=yt.matrix,q=(R+.5)/l*2-1,nt=1-(Z+.5)/h*2,bt=1/(tt[3]*q+tt[7]*nt+tt[11]*z+tt[15]),xt=(tt[0]*q+tt[4]*nt+tt[8]*z+tt[12])*bt,C=(tt[1]*q+tt[5]*nt+tt[9]*z+tt[13])*bt,m=(tt[2]*q+tt[6]*nt+tt[10]*z+tt[14])*bt,I=(xt*.5+.5)*yt.size,F=(.5-C*.5)*yt.size;if(I<1||F<1||I>=yt.size-2||F>=yt.size-2)return 1;let O=45e-5+75e-5*(1-u(H,0,1)),N=yt.radius*.5,X=m-O,J=u(Math.floor(I-N*2),0,yt.size-1),st=u(Math.floor(I-N),0,yt.size-1),mt=u(Math.floor(I),0,yt.size-1),j=u(Math.floor(I+N),0,yt.size-1),ft=u(Math.floor(I+N*2),0,yt.size-1),_t=0;for(let lt=-2;lt<=2;lt++){let at=u(Math.floor(F+lt*N),0,yt.size-1)*yt.size,vt=lt===0?6:Math.abs(lt)===1?4:1;_t+=vt*((X<=yt.buffer[at+J]?1:0)+(X<=yt.buffer[at+st]?4:0)+(X<=yt.buffer[at+mt]?6:0)+(X<=yt.buffer[at+j]?4:0)+(X<=yt.buffer[at+ft]?1:0))}return W+(1-W)*_t/256}function Ht(R,Z){let{mesh:z,g:H,tr:W}=R,tt=z.material,q=H.indices,nt=q?q.length:H.positions.length/3,bt=z.start||0,xt=Math.min(nt,Number.isFinite(z.count)?bt+z.count:nt),C=t.get(tt.map),m=t.get(tt.bump);m&&v(m);let I=tt.roughness,F=tt.unlit?0:.007+(1-I)*(1-I)*.23,O=8+(1-I)*(1-I)*115,N=tt.surfaceKind==="plush"||tt.surfaceKind==="micro"?.14:.45,X=tt.surfaceKind==="plush"?.48:tt.surfaceKind==="micro"?.38:.28,J=tt.color,st=tt.emissive||[0,0,0];for(let mt=bt;mt+2<xt;mt+=3){let j=q?q[mt]:mt,ft=q?q[mt+1]:mt+1,_t=q?q[mt+2]:mt+2,lt=j*9,at=ft*9,vt=_t*9;if(W[lt+3]===0||W[at+3]===0||W[vt+3]===0)continue;let k=W[lt],ct=W[lt+1],ut=W[at],wt=W[at+1],Mt=W[vt],Q=W[vt+1],Tt=W[lt+2],Et=W[at+2],Wt=W[vt+2];if(Math.min(Tt,Et,Wt)>1||Math.max(Tt,Et,Wt)<-1)continue;let Lt=(ut-k)*(Q-ct)-(wt-ct)*(Mt-k);if(Math.abs(Lt)<.016||tt.side===0&&Lt>0||tt.side===1&&Lt<0)continue;let St=Math.max(0,Math.floor(Math.min(k,ut,Mt))),Dt=Math.min(l-1,Math.ceil(Math.max(k,ut,Mt))),Ut=Math.max(0,Math.floor(Math.min(ct,wt,Q))),Gt=Math.min(h-1,Math.ceil(Math.max(ct,wt,Q)));if(St>Dt||Ut>Gt)continue;zt++;let $t=0,Xt=0,re=0,Jt=0,pe=0,ve=0,Oe=0;if(m&&H.uv){let K=j*2,rt=ft*2,dt=_t*2,et=H.uv[rt]-H.uv[K],Rt=H.uv[dt]-H.uv[K],Ft=H.uv[rt+1]-H.uv[K+1],Zt=H.uv[dt+1]-H.uv[K+1],Bt=(et*(Q-ct)-Rt*(wt-ct))/Lt,Kt=(Rt*(ut-k)-et*(Mt-k))/Lt,Ot=(Ft*(Q-ct)-Zt*(wt-ct))/Lt,Ct=(Zt*(ut-k)-Ft*(Mt-k))/Lt,ee=m.width*m.repeat[0],oe=m.height*m.repeat[1];Oe=Math.log2(Math.max(1,Math.hypot(Bt*ee,Ot*oe),Math.hypot(Kt*ee,Ct*oe)));let te=H.positions,se=H.uv,ae=se[j*2],jt=se[j*2+1],xe=se[ft*2]-ae,ce=se[ft*2+1]-jt,Ie=se[_t*2]-ae,Pe=se[_t*2+1]-jt,he=xe*Pe-Ie*ce;if(Math.abs(he)>1e-9){let Je=te[ft*3]-te[j*3],ge=te[ft*3+1]-te[j*3+1],ze=te[ft*3+2]-te[j*3+2],ke=te[_t*3]-te[j*3],Re=te[_t*3+1]-te[j*3+1],Ve=te[_t*3+2]-te[j*3+2],Ge=(Je*Pe-ke*ce)/he,nn=(ge*Pe-Re*ce)/he,mn=(ze*Pe-Ve*ce)/he,Vn=(ke*xe-Je*Ie)/he,Zs=(Re*xe-ge*Ie)/he,is=(Ve*xe-ze*Ie)/he,He=z.matrix;$t=He[0]*Ge+He[4]*nn+He[8]*mn,Xt=He[1]*Ge+He[5]*nn+He[9]*mn,re=He[2]*Ge+He[6]*nn+He[10]*mn,Jt=He[0]*Vn+He[4]*Zs+He[8]*is,pe=He[1]*Vn+He[5]*Zs+He[9]*is,ve=He[2]*Vn+He[6]*Zs+He[10]*is;let Ti=1/Math.max(.01,$t*$t+Xt*Xt+re*re),Ai=1/Math.max(.01,Jt*Jt+pe*pe+ve*ve);$t*=Ti,Xt*=Ti,re*=Ti,Jt*=Ai,pe*=Ai,ve*=Ai}}let Be=1/Lt,kn=(wt-Q)*Be,fn=(Mt-ut)*Be,pn=(Q-ct)*Be,wn=(k-Mt)*Be,En=((ut-(St+.5))*(Q-(Ut+.5))-(wt-(Ut+.5))*(Mt-(St+.5)))*Be,Hn=((Mt-(St+.5))*(ct-(Ut+.5))-(Q-(Ut+.5))*(k-(St+.5)))*Be,P=Lt>0?-1:1;for(let K=Ut;K<=Gt;K++){let rt=En+(K-Ut)*fn,dt=Hn+(K-Ut)*wn,et=K*l+St;for(let Rt=St;Rt<=Dt;Rt++,et++,rt+=kn,dt+=pn){let Ft=1-rt-dt;if(rt<-1e-6||dt<-1e-6||Ft<-1e-6)continue;let Zt=rt*Tt+dt*Et+Ft*Wt;if(Zt<-1||Zt>1||tt.depthTest&&Zt>=n[et]-2e-7)continue;let Bt=tt.opacity,Kt=J[0],Ot=J[1],Ct=J[2],ee=0,oe=0;if(C||m||tt.shadowFade){let he=rt*W[lt+3]+dt*W[at+3]+Ft*W[vt+3];ee=(rt*W[lt+7]+dt*W[at+7]+Ft*W[vt+7])/he,oe=(rt*W[lt+8]+dt*W[at+8]+Ft*W[vt+8])/he}if(C&&(w(C,ee,oe,qt),Kt*=qt[0],Ot*=qt[1],Ct*=qt[2],Bt*=qt[3]),Bt<=Math.max(.002,tt.alphaTest||0))continue;let te=rt*W[lt+4]+dt*W[at+4]+Ft*W[vt+4],se=rt*W[lt+5]+dt*W[at+5]+Ft*W[vt+5],ae=rt*W[lt+6]+dt*W[at+6]+Ft*W[vt+6],jt=P/Math.max(1e-9,Math.sqrt(te*te+se*se+ae*ae));te*=jt,se*=jt,ae*=jt;let xe=te,ce=se,Ie=ae;if(m){S(m,ee,oe,Oe,Vt);let he=($t*Vt[0]+Jt*Vt[1])*tt.bumpScale,Je=(Xt*Vt[0]+pe*Vt[1])*tt.bumpScale,ge=(re*Vt[0]+ve*Vt[1])*tt.bumpScale,ze=he*te+Je*se+ge*ae;he-=ze*te,Je-=ze*se,ge-=ze*ae;let ke=Math.min(1,N/Math.max(.001,Math.hypot(he,Je,ge)));te-=he*ke,se-=Je*ke,ae-=ge*ke;let Re=1/Math.max(1e-9,Math.hypot(te,se,ae));te*=Re,se*=Re,ae*=Re}if(H.colors&&tt.vertexColors&&(Kt*=rt*H.colors[j*3]+dt*H.colors[ft*3]+Ft*H.colors[_t*3],Ot*=rt*H.colors[j*3+1]+dt*H.colors[ft*3+1]+Ft*H.colors[_t*3+1],Ct*=rt*H.colors[j*3+2]+dt*H.colors[ft*3+2]+Ft*H.colors[_t*3+2]),tt.shadowOnly){if(Bt*=1-Pt(Rt,K,Zt,1,0),tt.shadowFade){let he=tt.shadowFade,Je=Math.hypot((ee-he[0])/he[2],(oe-he[1])/he[3]),ge=u((Je-.28)/.72,0,1);Bt*=1-ge*ge*(3-2*ge)}if(Bt<.002)continue}if(!tt.unlit){let he=se*.5+.5,Je=G[0]+Y[0]+(it[0]-Y[0])*he,ge=G[1]+Y[1]+(it[1]-Y[1])*he,ze=G[2]+Y[2]+(it[2]-Y[2])*he,ke=0,Re=0,Ve=0;for(let nn=0;nn<$.length;nn++){let mn=$[nn],Vn=mn.direction,Zs=te*Vn[0]+se*Vn[1]+ae*Vn[2],is=nn===0&&z.receiveShadow?Pt(Rt,K,Zt,xe*Vn[0]+ce*Vn[1]+Ie*Vn[2],X):1,He=Math.max(0,(Zs+.055)/1.055)*mn.intensity*is,Ti=mn.half,Ai=F*Math.pow(Math.max(0,te*Ti[0]+se*Ti[1]+ae*Ti[2]),O)*mn.intensity*is;Je+=mn.color[0]*He,ge+=mn.color[1]*He,ze+=mn.color[2]*He,ke+=mn.color[0]*Ai,Re+=mn.color[1]*Ai,Ve+=mn.color[2]*Ai}let Ge=tt.metalness||0;Kt=Kt*Je*(1-Ge*.48)+ke*(1-Ge+Ge*Kt)*(1+Ge*3),Ot=Ot*ge*(1-Ge*.48)+Re*(1-Ge+Ge*Ot)*(1+Ge*3),Ct=Ct*ze*(1-Ge*.48)+Ve*(1-Ge+Ge*Ct)*(1+Ge*3)}Kt+=st[0],Ot+=st[1],Ct+=st[2],tt.toneMapped&&!tt.unlit&&(b.neutral?(p(Kt,Ot,Ct,V,ot),Kt=ot[0],Ot=ot[1],Ct=ot[2]):(Kt=U[u(Math.round(Kt*512),0,4096)],Ot=U[u(Math.round(Ot*512),0,4096)],Ct=U[u(Math.round(Ct*512),0,4096)]));let Pe=et*4;if(Bt>=.999)o[Pe]=Kt,o[Pe+1]=Ot,o[Pe+2]=Ct,o[Pe+3]=1;else{let he=1-Bt;o[Pe]=Kt*Bt+o[Pe]*he,o[Pe+1]=Ot*Bt+o[Pe+1]*he,o[Pe+2]=Ct*Bt+o[Pe+2]*he,o[Pe+3]=Bt+o[Pe+3]*he}!Z&&tt.depthWrite&&(n[et]=Zt,r[et]=R.index),kt++}}}}for(let R of At)Ht(R,!1);if(b.ambientOcclusion&&l>180){let R=Math.max(2,Math.round(l/140)),Z=[[-R,0],[R,0],[0,-R],[0,R],[-R*2,-R],[R*2,-R]];for(let z=R*2;z<h-R*2;z++)for(let H=R*2;H<l-R*2;H++){let W=z*l+H,tt=n[W];if(!Number.isFinite(tt))continue;let q=0;for(let[nt,bt]of Z){let xt=W+bt*l+nt,C=tt-n[xt];r[xt]!==r[W]&&C>.0015&&C<.035&&(q+=1-C/.045)}if(q>0){let nt=1-q*.027,bt=W*4;o[bt]*=nt,o[bt+1]*=nt,o[bt+2]*=nt}}}a.set(o);let Nt=new Map(b.meshes.map((R,Z)=>[R.id,Z])),ne=0,pt=l*.5*Math.hypot(b.viewProjection[0],b.viewProjection[4],b.viewProjection[8]);for(let R of b.fibers||[]){let Z=M(b.viewProjection,R.matrix),z=R.segments,H=R.matrix,W=R.color,tt=Nt.get(R.ownerId),q=new Float32Array(15),nt=new Float32Array(5),bt=(Math.hypot(H[0],H[1],H[2])+Math.hypot(H[4],H[5],H[6])+Math.hypot(H[8],H[9],H[10]))/3;for(let xt=0;xt<z.length;xt+=20){let C=!0,m=0;nt[0]=0;for(let Lt=0;Lt<5;Lt++){let St=xt+Lt*3,Dt=Lt*3,Ut=z[St],Gt=z[St+1],$t=z[St+2],Xt=Z[3]*Ut+Z[7]*Gt+Z[11]*$t+Z[15];if(Xt<1e-6){C=!1;break}q[Dt]=((Z[0]*Ut+Z[4]*Gt+Z[8]*$t+Z[12])/Xt*.5+.5)*l,q[Dt+1]=(.5-(Z[1]*Ut+Z[5]*Gt+Z[9]*$t+Z[13])/Xt*.5)*h,q[Dt+2]=(Z[2]*Ut+Z[6]*Gt+Z[10]*$t+Z[14])/Xt-7e-6,Lt&&(m+=Math.hypot(q[Dt]-q[Dt-3],q[Dt+1]-q[Dt-2]),nt[Lt]=m)}if(!C||m<.035)continue;let I=q[0],F=q[1];if(I<-8||F<-8||I>l+8||F>h+8)continue;let O=Math.floor(F)*l+Math.floor(I);if(I>=0&&F>=0&&I<l&&F<h&&q[2]>n[O]+.0012)continue;let N=z[xt+12]-z[xt],X=z[xt+13]-z[xt+1],J=z[xt+14]-z[xt+2],st=d(H[0]*N+H[4]*X+H[8]*J,H[1]*N+H[5]*X+H[9]*J,H[2]*N+H[6]*X+H[10]*J),mt=ht[0]*st[0]+ht[1]*st[1]+ht[2]*st[2],j=d(ht[0]-st[0]*mt+ht[0]*.25,ht[1]-st[1]*mt+ht[1]*.25,ht[2]-st[2]*mt+ht[2]*.25),ft=j[1]*.5+.5,_t=0,lt=0,at=0,vt=0,k=Math.floor(I),ct=Math.floor(F),ut=I-k,wt=F-ct;for(let Lt=0;Lt<2;Lt++)for(let St=0;St<2;St++){let Dt=k+St,Ut=ct+Lt;if(Dt<0||Ut<0||Dt>=l||Ut>=h)continue;let Gt=Ut*l+Dt;if(r[Gt]!==tt||Math.abs(q[2]-n[Gt])>.003)continue;let $t=(St?ut:1-ut)*(Lt?wt:1-wt),Xt=Gt*4;_t+=a[Xt]*$t,lt+=a[Xt+1]*$t,at+=a[Xt+2]*$t,vt+=$t}let Mt,Q,Tt;if(vt>.02){let Lt=R.kind==="plush",St=$[0]?.direction||ht,Dt=j[0]*St[0]+j[1]*St[1]+j[2]*St[2],Ut=u(1+(z[xt+19]-(Lt?1:.965))*(Lt?1.35:.42)+(Dt-.65)*(Lt?.14:.035),Lt?.72:.94,Lt?1.32:1.07);Mt=_t/vt*Ut,Q=lt/vt*Ut,Tt=at/vt*Ut}else{let Lt=G[0]+Y[0]+(it[0]-Y[0])*ft,St=G[1]+Y[1]+(it[1]-Y[1])*ft,Dt=G[2]+Y[2]+(it[2]-Y[2])*ft;for(let Ut=0;Ut<$.length;Ut++){let Gt=$[Ut],$t=Gt.direction,Xt=j[0]*$t[0]+j[1]*$t[1]+j[2]*$t[2],re=Ut===0?Pt(I,F,q[2],Xt,R.kind==="plush"?.48:.38):1,Jt=Math.max(0,(Xt+.13)/1.13)*Gt.intensity*re;Lt+=Gt.color[0]*Jt,St+=Gt.color[1]*Jt,Dt+=Gt.color[2]*Jt}Mt=W[0]*Lt*z[xt+15],Q=W[1]*St*z[xt+16],Tt=W[2]*Dt*z[xt+17],b.neutral?(p(Mt,Q,Tt,V,ot),Mt=ot[0],Q=ot[1],Tt=ot[2]):(Mt=U[u(Math.round(Mt*512),0,4096)],Q=U[u(Math.round(Q*512),0,4096)],Tt=U[u(Math.round(Tt*512),0,4096)])}let Et=Math.max(1,Math.ceil(m*1.15)),Wt=Math.min(.9,z[xt+18]*bt*pt*2*R.sampleWeight)*Math.min(1,m/Et)*R.opacity;ne++;for(let Lt=0;Lt<Et;Lt++){let St=(Lt+.5)/Et,Dt=St*m,Ut=1;for(;Ut<4&&nt[Ut]<Dt;)Ut++;let Gt=(Dt-nt[Ut-1])/Math.max(1e-6,nt[Ut]-nt[Ut-1]),$t=(Ut-1)*3,Xt=Ut*3,re=q[$t]+(q[Xt]-q[$t])*Gt,Jt=q[$t+1]+(q[Xt+1]-q[$t+1])*Gt,pe=q[$t+2]+(q[Xt+2]-q[$t+2])*Gt,ve=Math.floor(re),Oe=Math.floor(Jt),Be=re-ve,kn=Jt-Oe;for(let fn=0;fn<2;fn++)for(let pn=0;pn<2;pn++){let wn=ve+pn,En=Oe+fn;if(wn<0||wn>=l||En<0||En>=h)continue;let Hn=En*l+wn;if(pe>n[Hn]+13e-6||pe<-1||pe>1)continue;let P=(pn?Be:1-Be)*(fn?kn:1-kn)*Wt*(1-St*.78),K=1-P,rt=Hn*4;o[rt]=Mt*P+o[rt]*K,o[rt+1]=Q*P+o[rt+1]*K,o[rt+2]=Tt*P+o[rt+2]*K,o[rt+3]=P+o[rt+3]*K}}}}for(let R of gt)Ht(R,!0);for(let R=0;R<s.length;R+=4){let Z=u(o[R+3],0,1),z=Z>1e-5?1/Z:0;s[R]=c[u(Math.round(o[R]*z*4096),0,4096)],s[R+1]=c[u(Math.round(o[R+1]*z*4096),0,4096)],s[R+2]=c[u(Math.round(o[R+2]*z*4096),0,4096)],s[R+3]=Math.round(Z*255)}return{id:b.id,version:b.version,width:l,height:h,pixels:s.buffer,stats:{ms:performance.now()-E,triangles:zt,pixels:kt,fibers:ne,calls:At.length+gt.length}}}return{draw:A}}var Qa=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.minPreviewScale=.62,this.staticPreview=!1,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${Sl.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=Sl()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=ns(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e){this._disposed||(this._pending={scene:t,camera:e,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let o of s.geometries)for(let a of["positions","normals","indices","uv","colors"])o[a]&&r.push(o[a].buffer);for(let o of s.textures)r.push(o.data.buffer);for(let o of s.fibers)r.push(o.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let o of this._waiters.splice(0))o.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let s=this.highQuality||Math.max(this._width,this._height)>=1e3,r=this.highQuality?1600:s?this.captureLimit:Math.round(this.previewLimit*(this.staticPreview?1:this._adaptive)),o=Math.min(1,r/Math.max(this.domElement.width,this.domElement.height)),a={id:n,version:this._version,width:Math.max(1,Math.round(this.domElement.width*o)),height:Math.max(1,Math.round(this.domElement.height*o)),viewProjection:Yr(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?ns(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===Ds,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.022,.022,.022],sky:[.026,.026,.026],ground:[.02,.022,.025]},l=new Set,h=new Set,u=0;t.traverseVisible?.(g=>{g.isInstancedMesh&&g.name==="surface-fibers"&&(u+=g.count)});let d=s?Math.min(126e3,a.width*a.height*.4):Math.min(72e3,a.width*a.height*.26),p=Math.max(1,Math.ceil(u/Math.max(3e3,d))),c=g=>{if(!g)return null;let f=(g.uuid||g.id)+":"+(g.version||0);if(h.has(f))return f;let w=g.image||g.source?.data,v=w?.data,S=w?.width,T=w?.height;if(!v&&w?.getContext)try{v=w.getContext("2d")?.getImageData(0,0,S,T)?.data}catch{}return!v||!S||!T?null:(h.add(f),this._knownTextures.has(f)||a.textures.push({id:f,width:S,height:T,data:new Uint8Array(v),channels:Math.round(v.length/(S*T)),repeat:[g.repeat?.x??1,g.repeat?.y??1],offset:[g.offset?.x||0,g.offset?.y||0],wrapS:g.wrapS,wrapT:g.wrapT,flipY:!!g.flipY,srgb:g.colorSpace==="srgb"}),f)},x=(g,f,w="")=>{let v=g.geometry,S=v?.attributes?.position;if(!S||g.isSkinnedMesh)return;let T=v.uuid+":"+(S.version||0)+":"+(v.attributes.normal?.version||0);l.has(T)||(l.add(T),this._knownGeometry.has(T)||a.geometries.push({id:T,positions:Ka(S,3),normals:Ka(v.attributes.normal,3),uv:Ka(v.attributes.uv,2),colors:Ka(v.attributes.color,3),indices:v.index?new Uint32Array(v.index.array):null}));let A=Array.isArray(g.material)?v.groups:[{start:v.drawRange?.start||0,count:v.drawRange?.count??1/0,materialIndex:0}];for(let b=0;b<A.length;b++){let E=A[b],y=Array.isArray(g.material)?g.material[E.materialIndex]:g.material;!y||y.isShadowMaterial||y.visible===!1||(y.opacity??1)<.002||a.meshes.push({id:g.uuid+w+":"+b,geometry:T,matrix:Array.from(f),start:E.start,count:E.count,order:g.renderOrder||0,castShadow:g.castShadow!==!1,receiveShadow:g.receiveShadow!==!1,material:{color:ns(y.color),emissive:ns(y.emissive,[0,0,0]).map(_=>_*(y.emissiveIntensity??1)),opacity:y.opacity??1,transparent:!!y.transparent,side:y.side??0,roughness:y.roughness??.75,metalness:y.metalness||0,depthTest:y.depthTest!==!1,depthWrite:y.depthWrite!==!1,alphaTest:y.alphaTest||0,unlit:!!(y.isMeshBasicMaterial||y.isShadowMaterial),shadowOnly:!!y.isShadowMaterial,shadowFade:y.userData?.shadowFade,toneMapped:y.toneMapped!==!1,map:c(y.map),bump:c(y.bumpMap),bumpScale:y.bumpScale||0,surfaceKind:g.userData.surfaceMaterial||y.name,vertexColors:!!y.vertexColors}})}},M=g=>{if(g.visible!==!1){if(g.isLight){let f=ns(g.color),w=g.intensity??1;if(g.isHemisphereLight){let v=ns(g.groundColor);for(let S=0;S<3;S++)a.sky[S]+=f[S]*w*.22,a.ground[S]+=v[S]*w*.2}else if(g.isAmbientLight)for(let v=0;v<3;v++)a.ambient[v]+=f[v]*w*.3;else if(g.isDirectionalLight||g.isPointLight||g.isSpotLight){if(!a.shadow&&g.isDirectionalLight&&g.castShadow&&this.shadowMap.enabled){g.shadow.updateMatrices(g);let y=Yr(g.shadow.camera.projectionMatrix.elements,g.shadow.camera.matrixWorldInverse.elements),_=Yr(e.matrixWorld.elements,e.projectionMatrixInverse.elements);a.shadow={viewProjection:y,screenMatrix:Yr(y,_),size:s?512:384,radius:q1(g.shadow.radius||2.5,1,5)}}g.target?.updateMatrixWorld(!0);let v=g.matrixWorld.elements,S=g.target?.matrixWorld.elements,T=v[12]-(S?.[12]||0),A=v[13]-(S?.[13]||0),b=v[14]-(S?.[14]||0),E=Math.hypot(T,A,b)||1;a.lights.push({direction:[T/E,A/E,b/E],color:f,intensity:w/Math.PI})}}if(g.isMesh&&(!e.layers||e.layers.test(g.layers)))if(g.isInstancedMesh){if(g.name==="surface-fibers"&&this.renderFibers){g.geometry.computeBoundingBox();let f=g.geometry.boundingBox.max.y,w=g.instanceMatrix.array,v=g.instanceColor?.array,S=g.userData.fiberProfile||g.geometry.userData.fiberProfile||Array.from({length:5},(y,_)=>[0,f*_/4,0]),T=g.userData.fiberRadius||g.geometry.userData.fiberRadius||.001,A=new Float32Array(Math.ceil(g.count/p)*20),b=0;for(let y=0;y<g.count;y+=p){let _=y*16;for(let[D,L,U]of S)A[b++]=w[_]*D+w[_+4]*L+w[_+8]*U+w[_+12],A[b++]=w[_+1]*D+w[_+5]*L+w[_+9]*U+w[_+13],A[b++]=w[_+2]*D+w[_+6]*L+w[_+10]*U+w[_+14];A[b++]=v?v[y*3]:1,A[b++]=v?v[y*3+1]:1,A[b++]=v?v[y*3+2]:1,A[b++]=T*Math.hypot(w[_],w[_+1],w[_+2]),A[b++]=g.userData.fiberTones?.[y]??1}let E=g.userData.surfaceMaterial||g.parent?.userData.surfaceMaterial||g.parent?.material?.name;a.fibers.push({ownerId:g.parent?.uuid+":0",matrix:Array.from(g.matrixWorld.elements),segments:A,color:ns(g.material.color),kind:E,sampleWeight:Math.min(2.3,Math.sqrt(p)),opacity:["fabric","knit"].includes(E)?.9:1})}else if(g.name!=="surface-fibers"&&g.count<=256)for(let f=0;f<g.count;f++)x(g,Yr(g.matrixWorld.elements,g.instanceMatrix.array.subarray(f*16,f*16+16)),":"+f)}else x(g,g.matrixWorld.elements);for(let f of g.children||[])M(f)}};return M(t),a.lights.length||a.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),a.lights=a.lights.slice(0,4),a.geometryIds=[...l],a.textureIds=[...h],this._knownGeometry=l,this._knownTextures=h,this.info.memory={geometries:l.size,textures:h.size},a}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(this.minPreviewScale,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=Sl(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var Z1=new Set(["thinking","processing","waiting","blocked","done"]),wl=Math.PI*2,J1=i=>(i=be.clamp(i,0,1),i*i*(3-2*i));function Ou(i,t){if(!Z1.has(t.action))return null;let e=new Te;e.name="activity";let n=i.root.userData.anatomy==="blob",s=t.motionStyle==="auto"||!t.motionStyle?t.action==="thinking"?"dots":"liquid":t.motionStyle,r=i.surfaces.find(g=>g.name.startsWith("blob-")),o=new Set,a=[],l=[],h=new Qt(t.colors.body);h.getHSL({}).l>.84&&h.lerp(new Qt("#72848e"),.22);let u=new dn({color:h,roughness:.43,metalness:.04});u.name="activity-rubber",o.add(u);let d=new Nn(1,20,14);o.add(d);let p=d.clone();o.add(p);let c=p.attributes.position;for(let g=0;g<c.count;g++){let f=c.getY(g),w=.45+.55*J1((f+1)/2);c.setXYZ(g,c.getX(g)*w,f<0?f*2.25:f,c.getZ(g)*w)}if(c.needsUpdate=!0,p.computeVertexNormals(),n&&r&&s==="dots")for(let g of[-1,1]){let f=new ye(r.geometry,r.material);f.name="thinking-companion",f.scale.copy(r.scale);let w=new Te;w.visible=!1,w.add(f),e.add(w),l.push({wrapper:w,side:g})}for(let g=0;g<30;g++){let f=new ye(s==="liquid"&&g%10===0?p:d,u);f.castShadow=!1,f.visible=!1,e.add(f),a.push(f)}let x=i.root.userData,M=i.height||2.1;return{group:e,bounds:new Le(new B(-1.34,Math.min(0,M*.5-.82),-.58),new B(1.34,s==="dots"&&!n?M+.4:Math.max(M,M*.5+.82),.58)),tick(g){e.visible=!0;let f=t.action,w=f==="thinking"||f==="processing",v=g*(t.motionSpeed||1),S=M*.5;for(let T of a)T.visible=!1;for(let T of l)T.wrapper.visible=!1;if(w&&n&&s==="dots"&&r){let T=Math.sin(v*3.4),A=.3;i.root.scale.copy(x.restScale).multiplyScalar(A),i.root.position.y=S-M*A*.5+T*.1;for(let{wrapper:b,side:E}of l)b.visible=!0,b.scale.setScalar(A),b.position.set(E*.86,S+Math.sin(v*3.4-E*.72)*.1,0),b.rotation.z=Math.sin(v*2.1-E)*.05}else if(w&&s==="dots")for(let T=0;T<3;T++){let A=a[T];A.visible=!0,A.position.set((T-1)*.28,M+.2+Math.sin(v*3.4-T*.72)*.045,.1),A.scale.setScalar(.065)}else if(w){let T=s==="orbit",A=T?12:30;if(n){let E=T?.57:.47;i.root.scale.copy(x.restScale).multiplyScalar(E),i.root.position.y=S-M*E*.5,i.root.rotation.z=Math.sin(v*1.7)*.035}let b=n?1.03:.94;for(let E=0;E<A;E++){let y=a[E],_=E%10,D=Math.floor(E/10),L=v*(T?1.3:1.85)+(T?E/A*wl:D/3*wl-_*.072),U=b*(T?1:.98+.045*Math.sin(v*1.2+D*1.8)),V=T?.052:_===0?.093:.052*Math.pow(1-_/10,1.35);y.visible=!0,y.position.set(Math.cos(L)*U,S+Math.sin(L)*U*(T?.42:.61),Math.sin(L)*.44),y.scale.set(V,V*(!T&&_===0?1.18:1),V*.86),y.rotation.z=L}}else if(f==="waiting"){i.root.rotation.z+=Math.sin(v*.9)*.065;for(let T of i.eyeGroups)T.scale.y=.52}else if(f==="blocked"){let T=v%3.4;i.root.rotation.z+=T<.48?Math.sin(T*25)*.055*(1-T/.48):0;for(let A of i.eyeGroups)A.scale.y=1.1}else if(f==="done"){let T=v%3.8,A=T<.8?Math.sin(T/.8*Math.PI):0;i.root.position.y+=Math.max(0,A)*.18,i.root.rotation.z+=A*.04;for(let b=0;b<6;b++){let E=a[b],y=(T-.2)/.75;if(y<0||y>1)continue;let _=b/6*wl;E.visible=!0,E.position.set(Math.cos(_)*(.55+y*.48),M*.7+Math.sin(_)*(.3+y*.3),.2),E.scale.setScalar(.038*Math.sin(y*Math.PI))}}},dispose(){e.removeFromParent();for(let g of o)g.dispose()}}}var xy=new B(0,1,0),ja=null,qs=i=>i?.action==="done"?.42:i?.action==="blocked"?.12:i?.action==="processing"?.25:i?.action==="thinking"?.28:i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0,Hu=(i,t,e)=>Math.min(e,Math.max(t,i));function Vu(i){let t={...i};for(let e of["name","notes","reference","palette","output","eyeColorManual","provenance"])delete t[e];return JSON.stringify(t)}function Bu(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function $1(i,t){let e=i.root.userData.anatomy==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,o]of i.arms.entries())o.rotation.z=(r?1:-1)*.62,o.rotation.x=-.62;for(let[r,o]of i.legs.entries())o.position.y+=.1,o.position.z+=.1,o.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.15,i.head.position.z+=.025,t.action==="work"&&(i.head.rotation.y=-.08)),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new Le().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var qr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(ja!=="software"&&new URLSearchParams(window.location.search).get("renderer")!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(ja="webgl",this.renderer=new Va({canvas:t,context:s,...n})):(ja="software",this.renderer=new Qa(t)),t.dataset.renderMode=ja,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:800,this.renderer.minPreviewScale=e?.62:.86),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=Ds,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Xo,this.scene=new Oi,this.camera=new Wi(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let h=new Hs(this.renderer),u=new Wa;this.environment=h.fromScene(u,.035),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.42,u.dispose(),h.dispose()}this.scene.add(new Fr("#ffffff","#dce2ed",1.15));let r=new Si("#fffdfb",2.3);r.position.set(-3.8,5.2,4.4),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.01,r.shadow.radius=5,this.scene.add(r);let o=new Si("#eef3ff",.62);o.position.set(4,2.8,2.4),this.scene.add(o);let a=new Si("#f4f7ff",.24);a.position.set(0,-2,4),this.scene.add(a);let l=new Si("#ffffff",.8);l.position.set(2,4.2,-3.6),this.scene.add(l),this.turn=new Te,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.activity?.dispose(),this.activity=null,this.avatar&&(this.turn.remove(this.avatar.root),Bu(this.avatar.root)),this.config=structuredClone(t),this.avatar=Pu(t),this.props=Nu(this.avatar,t),$1(this.avatar,t),Au(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.activity=Ou(this.avatar,t),this.activity&&this.turn.add(this.activity.group),this.assemblyParts=[this.avatar.torso,this.avatar.head,...this.avatar.legs,...this.avatar.arms,...this.props.parts].filter((n,s,r)=>n&&r.indexOf(n)===s).map((n,s)=>({object:n,position:n.position.clone(),scale:n.scale.clone(),delay:Math.min(.38,s*.048)})),this.turn.rotation.y=t.camera==="side"?Math.PI*.43:t.camera==="threeQuarter"?.33:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new Le().setFromObject(this.turn);this.center=e.getCenter(new B),this.bounds=e.getSize(new B),this.scene.background=t.background==="solid"?new Qt(t.colors.background):t.background==="studio"?new Qt("#f8f9fc"):null,this.fit(this.frame.width,this.frame.height),this.render(qs(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=new Le,o=this.avatar.root.userData;this.avatar.root.position.y=o.restY,this.avatar.root.scale.copy(o.restScale),this.avatar.root.rotation.copy(o.restRotation);for(let M of this.assemblyParts||[])M.object.position.copy(M.position),M.object.scale.copy(M.scale);if(this.turn.updateMatrixWorld(!0),this.avatar.root.traverseVisible(M=>{!M.isMesh||M.isInstancedMesh||(M.geometry.computeBoundingBox(),r.union(M.geometry.boundingBox.clone().applyMatrix4(M.matrixWorld)))}),this.activity&&r.union(this.activity.bounds.clone().applyMatrix4(this.turn.matrixWorld)),r.isEmpty())return;let a=!!this.props?.prop&&this.props.prop!=="none";if(n.framing!=="full"&&!a&&n.action!=="sleep"&&!this.activity){let M=r.getSize(new B);["human","animal"].includes(this.avatar.root.userData.anatomy)&&(r.min.y=r.max.y-M.y*(n.framing==="portrait"?.55:.79))}let l=r.getCenter(new B),h=n.action==="work"?1.85:n.action==="read"?1.3:.52;this.camera.position.copy(l).add(new B(0,h,8)),this.camera.lookAt(l),this.camera.updateMatrixWorld(!0);let u=new Le;for(let M of[r.min.x,r.max.x])for(let g of[r.min.y,r.max.y])for(let f of[r.min.z,r.max.z])u.expandByPoint(new B(M,g,f).applyMatrix4(this.camera.matrixWorldInverse));let d=u.getSize(new B),p=Math.max(d.y,d.x/s)*(this.activity?1.46:1.4)*(72/n.scale),c=(u.min.x+u.max.x)/2,x=(u.min.y+u.max.y)/2;this.camera.left=c-p*s/2,this.camera.right=c+p*s/2,this.camera.top=x+p/2,this.camera.bottom=x-p/2,this.camera.updateProjectionMatrix()}render(t=0,e=1){(this.reducedMotion||matchMedia("(prefers-reduced-motion: reduce)").matches)&&(t=qs(this.config)),this.lastTime=t;for(let l of this.assemblyParts||[])l.object.position.copy(l.position),l.object.scale.copy(l.scale);if(!this.avatar)return;let n=this.avatar,s=this.config,r=n.root.userData;if(n.root.position.y=r.restY,n.root.scale.copy(r.restScale),n.root.rotation.copy(r.restRotation),s.action==="bounce"){let l=Math.max(0,Math.sin(t*3.1));n.root.position.y+=l*.24}else{let l=Math.sin(t*(s.action==="sleep"?1.3:1.8));n.root.scale.y=r.restScale.y*(1+l*.008),s.action==="listen"&&(n.root.rotation.z+=Math.sin(t*2)*.035),(s.expression==="curious"||s.expression==="skeptical")&&(n.root.rotation.z+=.055),s.expression==="shy"&&(n.root.rotation.y+=.11),s.expression==="sleepy"&&(n.root.rotation.z-=.04),s.expression==="expectant"&&(n.root.rotation.x+=.045),s.expression==="panicked"&&(n.root.rotation.x-=.08),s.expression==="laughing"&&(n.root.rotation.x-=.06)}let o=t%(s.action==="blink"?2.3:5.5),a=Math.abs(o-.17)<.16?Math.max(.07,Math.abs(o-.17)/.16):1;for(let l of n.eyeGroups)l.scale.y=s.expression==="closed"||s.expression==="wink"||["delighted","laughing"].includes(s.expression)||s.action==="sleep"||s.action==="work"?1:a;if(n.tail&&s.action!=="sleep"&&(n.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.activity?.tick(t),e<1)for(let[l,h]of this.assemblyParts.entries()){let u=Hu((e-h.delay)/(1-h.delay),0,1),d=1-Math.pow(1-u,3),p=Math.sin(u*Math.PI)*.045;h.object.scale.multiplyScalar(Math.max(.001,d+p)),h.object.position.x+=(l%2?1:-1)*(1-d)*.8,h.object.position.y+=(1-d)*(.28+l%3*.12)}this.renderer.render(this.scene,this.camera)}dispose(){this.activity?.dispose(),this.avatar&&Bu(this.avatar.root),this.environment?.dispose(),this.scene.traverse(t=>{t.isLight&&t.shadow?.dispose()}),this.renderer.dispose()}},zu=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.motionPreference=matchMedia("(prefers-reduced-motion: reduce)"),this.world=new qr(this.canvas),this.elapsed=0,this.lastTick=performance.now(),this.assemblyStart=null,this.playing=!this.motionPreference.matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{this.raf=requestAnimationFrame(this.loop);let r=Math.min(.15,(s-this.lastTick)/1e3);if(this.lastTick=s,!this.visible||document.hidden||this.capturing)return;this.playing&&!this.motionPreference.matches&&(this.elapsed+=r);let o=this.assemblyStart!==null,a=o?Hu((s-this.assemblyStart)/920,0,1):1;!this.playing&&!o||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?95:25)||(this.lastFrame=s,this.world.render(this.elapsed,a),this.canvas.dataset.animationTime=this.world.lastTime.toFixed(3),a>=1&&o&&(this.assemblyStart=null))},this.raf=requestAnimationFrame(this.loop)}update(t){if(this.disposed)return;let e=Vu(t);this.updateKey!==e&&(this.updateKey=e,this.pending=t,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(async()=>{this.updateFrame=0;let n=++this.revision;this.canvas.dataset.previewStatus="loading";try{let s=["action","family","shape","presetId"].some(r=>this.world.config?.[r]!==this.pending[r]);this.world.update(this.pending),s&&(this.elapsed=qs(this.pending)),this.canvas.dataset.revision=String(n);for(let r of["version","rendererVersion","family","shape","material","action","camera","framing","background","headScale","bodyWidth","motionStyle"])this.canvas.dataset[r]=String(this.pending[r]);for(let r of["head","face","neck","prop"])this.canvas.dataset[r+"Accessory"]=this.pending.accessories[r];if(this.resize(),this.canvas.dataset.animationTime=this.world.lastTime.toFixed(3),this.wantsAssembly&&!this.world.reducedMotion&&!this.motionPreference.matches&&(this.wantsAssembly=!1,this.assemblyStart=performance.now()),await this.world.renderer.flush?.(),n!==this.revision)return;this.canvas.dataset.renderedRevision=String(n),this.canvas.dataset.previewStatus="ready",this.onReady()}catch(s){if(this.disposed||n!==this.revision)return;this.canvas.dataset.previewStatus="failed",console.error("Character preview:",s),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,o=Math.max(1,s.width),a=o/r;a>s.height&&(a=s.height,o=a*r),this.canvas.style.width=o+"px",this.canvas.style.height=a+"px",this.world.fit(Math.round(o),Math.round(a)),this.world.render(this.elapsed)}setPlaying(t){this.playing=t&&!this.motionPreference.matches&&!this.world.reducedMotion,this.lastTick=performance.now(),this.world.renderer.isSoftwareRenderer&&(this.world.renderer.staticPreview=!this.playing,this.world.renderer.previewLimit=this.playing?800:960),this.world.config&&(this.world.render(this.elapsed),this.canvas.dataset.animationTime=this.world.lastTime.toFixed(3))}setReducedMotion(t){this.world.reducedMotion=!!t,t?(this.elapsed=qs(this.world.config),this.setPlaying(!1)):this.world.config&&this.resize()}assemble(){this.world.reducedMotion||matchMedia("(prefers-reduced-motion: reduce)").matches||(this.wantsAssembly=!0,this.updateFrame||(this.wantsAssembly=!1,this.assemblyStart=performance.now()))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=n&&["action","family","shape","presetId"].every(l=>this.world.config?.[l]===n[l]),r=this.world.reducedMotion||this.motionPreference.matches,o=r||!s?qs(n):this.elapsed,a=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let l;this.capturing=!0;try{if(!n)throw Error("\u89D2\u8272\u5C1A\u672A\u51C6\u5907\u597D");let[h,u]=n.aspect.split(":").map(Number),d=h>=u?t:Math.round(t*h/u),p=u>=h?t:Math.round(t*u/h),c=document.createElement("canvas");l=new qr(c),l.reducedMotion=r,l.renderer.highQuality=!0,l.renderer.captureLimit=t,l.renderer.setPixelRatio(1),l.frame={width:d,height:p},l.update(n),l.render(o),await l.renderer.flush?.();let x=await new Promise(M=>c.toBlob(M,"image/png"));if(!x)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return x}finally{l?.dispose(),this.capturing=!1}});return this.captureQueue=a,a}dispose(){this.disposed=!0,this.revision++,cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove()}},Ei,ku=Promise.resolve(),ui=new Map;function _y(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=Vu(e)+t;if(ui.has(n))return Promise.resolve(ui.get(n));let s=ku.then(async()=>{if(ui.has(n))return ui.get(n);Ei||(Ei=new qr(document.createElement("canvas"),{thumbnail:!0})),Ei.frame={width:t,height:t},Ei.update(e),Ei.fit(t,t),Ei.render(qs(e)),await Ei.renderer.flush?.();let r=await new Promise(a=>Ei.renderer.domElement.toBlob(a,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let o=URL.createObjectURL(r);if(ui.set(n,o),ui.size>200){let a=ui.keys().next().value;URL.revokeObjectURL(ui.get(a)),ui.delete(a)}return o});return ku=s.catch(()=>{}),s}export{zu as CharacterPreview,_y as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
