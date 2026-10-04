var Gc=0,bl=1,Wc=2;var El=1,Po=2,Rn=3,On=0,Ne=1,Xe=2,Vn=0,vi=1,wl=2,Tl=3,Al=4,Xc=5,ei=100,qc=101,Yc=102,Zc=103,Jc=104,$c=200,Kc=201,Qc=202,jc=203,io=204,so=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,oh=212,ah=213,lh=214,Do=0,Lo=1,Uo=2,Mi=3,Fo=4,No=5,Oo=6,Bo=7,zo=0,ch=1,hh=2,Hn=0,uh=1,dh=2,fh=3,ph=4,mh=5,gh=6,_s=7;var Rl=300,Di=301,Li=302,ko=303,Vo=304,Sr=306,rs=1e3,ti=1001,ro=1002,Je=1003,_h=1004;var br=1005;var sn=1006,Ho=1007;var Cn=1008;var Mn=1009,Cl=1010,Il=1011,xs=1012,Go=1013,ci=1014,Sn=1015,ys=1016,Wo=1017,Xo=1018,vs=1020,Pl=35902,Dl=35899,Ll=1021,Ul=1022,Ke=1023,os=1026,Ms=1027,qo=1028,Yo=1029,Fl=1030,Zo=1031;var Jo=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,$o=35840,Ko=35841,Qo=35842,jo=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,xa=36494,ya=36495,va=36283,Ma=36284,Sa=36285,ba=36286;var Xs=2300,oo=2301,no=2302,ul=2400,dl=2401,fl=2402;var xh=3200,yh=3201;var Ea=0,vh=1,Gn="",Ge="srgb",Si="srgb-linear",qs="linear",oe="srgb";var xi=7680;var pl=519,Mh=512,Sh=513,bh=514,Nl=515,Eh=516,wh=517,Th=518,Ah=519,ml=35044;var Ol="300 es",_n=2e3,Ys=2001;var Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=1234567,Vs=Math.PI/180,as=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function Su(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function Eu(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function wu(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Iu(i){return i*(.5-Math.random())}function Pu(i){i!==void 0&&(pc=i);let t=pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(i){return i*Vs}function Lu(i){return i*as}function Uu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),u=o((t+n)/2),l=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*l,c*p,a*h);break;case"YZY":i.set(c*p,a*u,c*l,a*h);break;case"ZXZ":i.set(c*l,c*p,a*u,a*h);break;case"XZX":i.set(a*u,c*_,c*f,a*h);break;case"YXY":i.set(c*f,a*u,c*_,a*h);break;case"ZYZ":i.set(c*_,c*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rr={DEG2RAD:Vs,RAD2DEG:as,generateUUID:Ui,clamp:Qt,euclideanModulo:Bl,mapLinear:Su,inverseLerp:bu,lerp:Hs,damp:Eu,pingpong:wu,smoothstep:Tu,smootherstep:Au,randInt:Ru,randFloat:Cu,randFloatSpread:Iu,seededRandom:Pu,degToRad:Du,radToDeg:Lu,isPowerOfTwo:Uu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Ou,normalize:He,denormalize:is},At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],u=n[s+2],l=n[s+3],p=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(l!==g||c!==p||h!==f||u!==_){let m=1-a,d=c*p+h*f+u*_+l*g,y=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let w=Math.sqrt(M),A=Math.atan2(w,d*y);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let x=a*y;if(c=c*m+p*x,h=h*m+f*x,u=u*m+_*x,l=l*m+g*x,m===1-a){let w=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=w,h*=w,u*=w,l*=w}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],u=n[s+3],l=r[o],p=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+u*l+c*f-h*p,t[e+1]=c*_+u*p+h*l-a*f,t[e+2]=h*_+u*f+a*p-c*l,t[e+3]=u*_-a*l-c*p-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),u=a(s/2),l=a(r/2),p=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=p*u*l+h*f*_,this._y=h*f*l-p*u*_,this._z=h*u*_+p*f*l,this._w=h*u*l-p*f*_;break;case"YXZ":this._x=p*u*l+h*f*_,this._y=h*f*l-p*u*_,this._z=h*u*_-p*f*l,this._w=h*u*l+p*f*_;break;case"ZXY":this._x=p*u*l-h*f*_,this._y=h*f*l+p*u*_,this._z=h*u*_+p*f*l,this._w=h*u*l-p*f*_;break;case"ZYX":this._x=p*u*l-h*f*_,this._y=h*f*l+p*u*_,this._z=h*u*_-p*f*l,this._w=h*u*l+p*f*_;break;case"YZX":this._x=p*u*l+h*f*_,this._y=h*f*l+p*u*_,this._z=h*u*_-p*f*l,this._w=h*u*l-p*f*_;break;case"XZY":this._x=p*u*l-h*f*_,this._y=h*f*l-p*u*_,this._z=h*u*_+p*f*l,this._w=h*u*l+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],u=e[6],l=e[10],p=n+a+l;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>l){let f=2*Math.sqrt(1+n-a-l);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>l){let f=2*Math.sqrt(1+a-n-l);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+l-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+s*h-r*c,this._y=s*u+o*c+r*a-n*h,this._z=r*u+o*h+n*c-s*a,this._w=o*u-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,a),l=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=o*l+this._w*p,this._x=n*l+this._x*p,this._y=s*l+this._y*p,this._z=r*l+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),u=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*h+o*l-a*u,this.y=n+c*u+a*h-r*l,this.z=s+c*l+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new L,mc=new xn,Yt=class i{constructor(t,e,n,s,r,o,a,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],u=n[4],l=n[7],p=n[2],f=n[5],_=n[8],g=s[0],m=s[3],d=s[6],y=s[1],M=s[4],x=s[7],w=s[2],A=s[5],R=s[8];return r[0]=o*g+a*y+c*w,r[3]=o*m+a*M+c*A,r[6]=o*d+a*x+c*R,r[1]=h*g+u*y+l*w,r[4]=h*m+u*M+l*A,r[7]=h*d+u*x+l*R,r[2]=p*g+f*y+_*w,r[5]=p*m+f*M+_*A,r[8]=p*d+f*x+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],l=u*o-a*h,p=a*c-u*r,f=h*r-o*c,_=e*l+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=l*g,t[1]=(s*h-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=p*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*c-h*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new Yt;function zl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){let i=Zs("canvas");return i.style.display="block",i}var gc={};function ls(i){i in gc||(gc[i]=!0,console.warn(i))}function Ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _c=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){let i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var te=Bu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=Zs("canvas")),Wi.width=t.width,Wi.height=t.height;let s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,cs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ku=0,Ha=new L,$e=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=sn,o=Cn,a=Ke,c=Mn,h=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Ui(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Rl;$e.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],l=c[8],p=c[1],f=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(l-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(l+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,x=(f+1)/2,w=(d+1)/2,A=(u+p)/4,R=(l+g)/4,I=(_+m)/4;return M>x&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=R/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(l-g)*(l-g)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(l-g)/y,this.z=(p-u)/y,this.w=Math.acos((h+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new $e(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Js=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ze=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Fr.subVectors(this.max,Ls),Xi.subVectors(t.a,Ls),qi.subVectors(t.b,Ls),Yi.subVectors(t.c,Ls),Zn.subVectors(qi,Xi),Jn.subVectors(Yi,qi),pi.subVectors(Xi,Yi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!Ga(e,Xi,qi,Yi,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Xi,qi,Yi,Fr))?!1:(Nr.crossVectors(Zn,Jn),e=[Nr.x,Nr.y,Nr.z],Ga(e,Xi,qi,Yi,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,Ur=new ze,Xi=new L,qi=new L,Yi=new L,Zn=new L,Jn=new L,pi=new L,Ls=new L,Fr=new L,Nr=new L,mi=new L;function Ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),h=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}var Vu=new ze,Us=new L,Wa=new L,ni=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Wa)),this.expandByPoint(Us.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dn=new L,Xa=new L,Or=new L,$n=new L,qa=new L,Br=new L,Ya=new L,$s=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xa.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Xa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=$n.dot(this.direction),c=-$n.dot(Or),h=$n.lengthSq(),u=Math.abs(1-o*o),l,p,f,_;if(u>0)if(l=o*c-a,p=o*a-c,_=r*u,l>=0)if(p>=-_)if(p<=_){let g=1/u;l*=g,p*=g,f=l*(l+o*p+2*a)+p*(o*l+p+2*c)+h}else p=r,l=Math.max(0,-(o*p+a)),f=-l*l+p*(p+2*c)+h;else p=-r,l=Math.max(0,-(o*p+a)),f=-l*l+p*(p+2*c)+h;else p<=-_?(l=Math.max(0,-(-o*r+a)),p=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+p*(p+2*c)+h):p<=_?(l=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+h):(l=Math.max(0,-(o*r+a)),p=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+p*(p+2*c)+h);else p=o>0?-r:r,l=Math.max(0,-(o*p+a)),f=-l*l+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Xa).addScaledVector(Or,p),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-p.z)*l,c=(t.max.z-p.z)*l):(a=(t.max.z-p.z)*l,c=(t.min.z-p.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){qa.subVectors(e,t),Br.subVectors(n,t),Ya.crossVectors(qa,Br);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let c=a*this.direction.dot(Br.crossVectors($n,Br));if(c<0)return null;let h=a*this.direction.dot(qa.cross($n));if(h<0||c+h>o)return null;let u=-a*$n.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,c,h,u,l,p,f,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,u,l,p,f,_,g,m)}set(t,e,n,s,r,o,a,c,h,u,l,p,f,_,g,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=u,d[10]=l,d[14]=p,d[3]=f,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){let p=o*u,f=o*l,_=a*u,g=a*l;e[0]=c*u,e[4]=-c*l,e[8]=h,e[1]=f+_*h,e[5]=p-g*h,e[9]=-a*c,e[2]=g-p*h,e[6]=_+f*h,e[10]=o*c}else if(t.order==="YXZ"){let p=c*u,f=c*l,_=h*u,g=h*l;e[0]=p+g*a,e[4]=_*a-f,e[8]=o*h,e[1]=o*l,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*u,f=c*l,_=h*u,g=h*l;e[0]=p-g*a,e[4]=-o*l,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-p*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*u,f=o*l,_=a*u,g=a*l;e[0]=c*u,e[4]=_*h-f,e[8]=p*h+g,e[1]=c*l,e[5]=g*h+p,e[9]=f*h-_,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*h,_=a*c,g=a*h;e[0]=c*u,e[4]=g-p*l,e[8]=_*l+f,e[1]=l,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*l+_,e[10]=p-g*l}else if(t.order==="XZY"){let p=o*c,f=o*h,_=a*c,g=a*h;e[0]=c*u,e[4]=-l,e[8]=h*u,e[1]=p*l+g,e[5]=o*u,e[9]=f*l-_,e[2]=_*l-f,e[6]=a*u,e[10]=g*l+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Gu)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Kn.crossVectors(n,en),Kn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Kn.crossVectors(n,en)),Kn.normalize(),zr.crossVectors(en,Kn),s[0]=Kn.x,s[4]=zr.x,s[8]=en.x,s[1]=Kn.y,s[5]=zr.y,s[9]=en.y,s[2]=Kn.z,s[6]=zr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],u=n[1],l=n[5],p=n[9],f=n[13],_=n[2],g=n[6],m=n[10],d=n[14],y=n[3],M=n[7],x=n[11],w=n[15],A=s[0],R=s[4],I=s[8],b=s[12],S=s[1],P=s[5],U=s[9],W=s[13],Q=s[2],ot=s[6],it=s[10],mt=s[14],at=s[3],wt=s[7],Ct=s[11],Ot=s[15];return r[0]=o*A+a*S+c*Q+h*at,r[4]=o*R+a*P+c*ot+h*wt,r[8]=o*I+a*U+c*it+h*Ct,r[12]=o*b+a*W+c*mt+h*Ot,r[1]=u*A+l*S+p*Q+f*at,r[5]=u*R+l*P+p*ot+f*wt,r[9]=u*I+l*U+p*it+f*Ct,r[13]=u*b+l*W+p*mt+f*Ot,r[2]=_*A+g*S+m*Q+d*at,r[6]=_*R+g*P+m*ot+d*wt,r[10]=_*I+g*U+m*it+d*Ct,r[14]=_*b+g*W+m*mt+d*Ot,r[3]=y*A+M*S+x*Q+w*at,r[7]=y*R+M*P+x*ot+w*wt,r[11]=y*I+M*U+x*it+w*Ct,r[15]=y*b+M*W+x*mt+w*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],u=t[2],l=t[6],p=t[10],f=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*c*l-s*h*l-r*a*p+n*h*p+s*a*f-n*c*f)+g*(+e*c*f-e*h*p+r*o*p-s*o*f+s*h*u-r*c*u)+m*(+e*h*l-e*a*f-r*o*l+n*o*f+r*a*u-n*h*u)+d*(-s*a*u-e*c*l+e*a*p+s*o*l-n*o*p+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],l=t[9],p=t[10],f=t[11],_=t[12],g=t[13],m=t[14],d=t[15],y=l*m*h-g*p*h+g*c*f-a*m*f-l*c*d+a*p*d,M=_*p*h-u*m*h-_*c*f+o*m*f+u*c*d-o*p*d,x=u*g*h-_*l*h+_*a*f-o*g*f-u*a*d+o*l*d,w=_*l*c-u*g*c-_*a*p+o*g*p+u*a*m-o*l*m,A=e*y+n*M+s*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=y*R,t[1]=(g*p*r-l*m*r-g*s*f+n*m*f+l*s*d-n*p*d)*R,t[2]=(a*m*r-g*c*r+g*s*h-n*m*h-a*s*d+n*c*d)*R,t[3]=(l*c*r-a*p*r-l*s*h+n*p*h+a*s*f-n*c*f)*R,t[4]=M*R,t[5]=(u*m*r-_*p*r+_*s*f-e*m*f-u*s*d+e*p*d)*R,t[6]=(_*c*r-o*m*r-_*s*h+e*m*h+o*s*d-e*c*d)*R,t[7]=(o*p*r-u*c*r+u*s*h-e*p*h-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(_*l*r-u*g*r-_*n*f+e*g*f+u*n*d-e*l*d)*R,t[10]=(o*g*r-_*a*r+_*n*h-e*g*h-o*n*d+e*a*d)*R,t[11]=(u*a*r-o*l*r-u*n*h+e*l*h+o*n*f-e*a*f)*R,t[12]=w*R,t[13]=(u*g*s-_*l*s+_*n*p-e*g*p-u*n*m+e*l*m)*R,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*R,t[15]=(o*l*s-u*a*s+u*n*c-e*l*c-o*n*p+e*a*p)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,u*a+n,u*c-s*o,0,h*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,u=o+o,l=a+a,p=r*h,f=r*u,_=r*l,g=o*u,m=o*l,d=a*l,y=c*h,M=c*u,x=c*l,w=n.x,A=n.y,R=n.z;return s[0]=(1-(g+d))*w,s[1]=(f+x)*w,s[2]=(_-M)*w,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(p+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+M)*R,s[9]=(m-y)*R,s[10]=(1-(p+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let h=1/r,u=1/o,l=1/a;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=l,mn.elements[9]*=l,mn.elements[10]*=l,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_n,c=!1){let h=this.elements,u=2*r/(e-t),l=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s),_,g;if(c)_=r/(o-r),g=o*r/(o-r);else if(a===_n)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ys)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=l,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n,c=!1){let h=this.elements,u=2/(e-t),l=2/(n-s),p=-(e+t)/(e-t),f=-(n+s)/(n-s),_,g;if(c)_=1/(o-r),g=o/(o-r);else if(a===_n)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===Ys)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=l,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=_,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new L,mn=new ae,Hu=new L(0,0,0),Gu=new L(1,1,1),Kn=new L,zr=new L,en=new L,yc=new ae,vc=new xn,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],u=s[9],l=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wu=0,Mc=new L,Ji=new xn,Ln=new ae,kr=new L,Fs=new L,Xu=new L,qu=new xn,Sc=new L(1,0,0),bc=new L(0,1,0),Ec=new L(0,0,1),wc={type:"added"},Yu={type:"removed"},$i={type:"childadded",child:null},Za={type:"childremoved",child:null},we=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new un,n=new xn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Yt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Fs,kr,this.up):Ln.lookAt(kr,Fs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let l=c[h];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),l=o(t.shapes),p=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let h in a){let u=a[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new L,Un=new L,Ja=new L,Fn=new L,Ki=new L,Qi=new L,Tc=new L,$a=new L,Ka=new L,Qa=new L,ja=new re,tl=new re,el=new re,wn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Un.subVectors(n,e),Ja.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Un),c=gn.dot(Ja),h=Un.dot(Un),u=Un.dot(Ja),l=o*h-a*a;if(l===0)return r.set(0,0,0),null;let p=1/l,f=(h*c-a*u)*p,_=(o*u-a*c)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ja.setScalar(0),tl.setScalar(0),el.setScalar(0),ja.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,n),el.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ja,r.x),o.addScaledVector(tl,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Un.subVectors(t,e),gn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),gn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),$a.subVectors(t,n);let c=Ki.dot($a),h=Qi.dot($a);if(c<=0&&h<=0)return e.copy(n);Ka.subVectors(t,s);let u=Ki.dot(Ka),l=Qi.dot(Ka);if(u>=0&&l<=u)return e.copy(s);let p=c*l-u*h;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ki,o);Qa.subVectors(t,r);let f=Ki.dot(Qa),_=Qi.dot(Qa);if(_>=0&&f<=_)return e.copy(r);let g=f*h-c*_;if(g<=0&&h>=0&&_<=0)return a=h/(h-_),e.copy(n).addScaledVector(Qi,a);let m=u*_-f*l;if(m<=0&&l-u>=0&&f-_>=0)return Tc.subVectors(r,s),a=(l-u)/(l-u+(f-_)),e.copy(s).addScaledVector(Tc,a);let d=1/(m+g+p);return o=g*d,a=p*d,e.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Bl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nl(o,r,t+1/3),this.g=nl(o,r,t),this.b=nl(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return te.workingToColorSpace(Be.copy(this),t),Math.round(Qt(Be.r*255,0,255))*65536+Math.round(Qt(Be.g*255,0,255))*256+Math.round(Qt(Be.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,u=(a+o)/2;if(a===o)c=0,h=0;else{let l=o-a;switch(h=u<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ge){te.workingToColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Vr);let n=Hs(Qn.h,Vr.h,e),s=Hs(Qn.s,Vr.s,e),r=Hs(Qn.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Xt;Xt.NAMES=Ih;var Zu=0,An=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=vi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bi=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new L,Hr=new At,Ju=0,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}};var Ks=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qs=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},$u=0,hn=new ae,il=new we,ji=new L,nn=new ze,Ns=new ze,Ue=new L,Te=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zl(t)?Qs:Ks)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return il.lookAt(t),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(nn.min,Ns.min),nn.expandByPoint(Ue),Ue.addVectors(nn.max,Ns.max),nn.expandByPoint(Ue)):(nn.expandByPoint(Ns.min),nn.expandByPoint(Ns.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ue.fromBufferAttribute(a,h),c&&(ji.fromBufferAttribute(t,h),Ue.add(ji)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;let h=new L,u=new L,l=new L,p=new At,f=new At,_=new At,g=new L,m=new L;function d(I,b,S){h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),l.fromBufferAttribute(n,S),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),u.sub(h),l.sub(h),f.sub(p),_.sub(p);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(l,-f.y).multiplyScalar(P),m.copy(l).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[I].add(g),a[b].add(g),a[S].add(g),c[I].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,b=y.length;I<b;++I){let S=y[I],P=S.start,U=S.count;for(let W=P,Q=P+U;W<Q;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let M=new L,x=new L,w=new L,A=new L;function R(I){w.fromBufferAttribute(s,I),A.copy(w);let b=a[I];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(A,b);let P=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,b=y.length;I<b;++I){let S=y[I],P=S.start,U=S.count;for(let W=P,Q=P+U;W<Q;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,h=new L,u=new L,l=new L;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),l.subVectors(s,r),u.cross(l),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),a.add(u),c.add(u),h.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),l.subVectors(s,r),u.cross(l),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let h=a.array,u=a.itemSize,l=a.normalized,p=new h.constructor(c.length*u),f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let d=0;d<u;d++)p[_++]=h[f++]}return new Ze(p,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let u=0,l=h.length;u<l;u++){let p=h[u],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let l=0,p=h.length;l<p;l++){let f=h[l];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],l=r[h];for(let p=0,f=l.length;p<f;p++)u.push(l[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let l=o[h];this.addGroup(l.start,l.count,l.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ac=new ae,gi=new $s,Gr=new ni,Rc=new L,Wr=new L,Xr=new L,qr=new L,sl=new L,Yr=new L,Cc=new L,Zr=new L,se=class extends we{constructor(t=new Te,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=a[c],l=r[c];u!==0&&(sl.fromBufferAttribute(l,t),o?Yr.addScaledVector(sl,u):Yr.addScaledVector(sl.sub(e),u))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Gr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Gr,Rc)===null||gi.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){let m=p[_],d=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=M;x<w;x+=3){let A=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=Jr(this,d,t,n,h,u,l,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){let y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Jr(this,o,t,n,h,u,l,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){let m=p[_],d=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=M;x<w;x+=3){let A=x,R=x+1,I=x+2;s=Jr(this,d,t,n,h,u,l,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){let y=m,M=m+1,x=m+2;s=Jr(this,o,t,n,h,u,l,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ku(i,t,e,n,s,r,o,a){let c;if(t.side===Ne?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Zr);return h<e.near||h>e.far?null:{distance:h,point:Zr.clone(),object:i}}function Jr(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Wr),i.getVertexPosition(c,Xr),i.getVertexPosition(h,qr);let u=Ku(i,t,e,n,Wr,Xr,qr,Cc);if(u){let l=new L;wn.getBarycoord(Cc,Wr,Xr,qr,l),s&&(u.uv=wn.getInterpolatedAttribute(s,a,c,h,l,new At)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,c,h,l,new At)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,c,h,l,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:c,c:h,normal:new L,materialIndex:0};wn.getNormal(Wr,Xr,qr,p.normal),u.face=p,u.barycoord=l}return u}var ii=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],u=[],l=[],p=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(l,2));function _(g,m,d,y,M,x,w,A,R,I,b){let S=x/R,P=w/I,U=x/2,W=w/2,Q=A/2,ot=R+1,it=I+1,mt=0,at=0,wt=new L;for(let Ct=0;Ct<it;Ct++){let Ot=Ct*P-W;for(let lt=0;lt<ot;lt++){let G=lt*S-U;wt[g]=G*y,wt[m]=Ot*M,wt[d]=Q,h.push(wt.x,wt.y,wt.z),wt[g]=0,wt[m]=0,wt[d]=A>0?1:-1,u.push(wt.x,wt.y,wt.z),l.push(lt/R),l.push(1-Ct/I),mt+=1}}for(let Ct=0;Ct<I;Ct++)for(let Ot=0;Ot<R;Ot++){let lt=p+Ot+ot*Ct,G=p+Ot+ot*(Ct+1),j=p+(Ot+1)+ot*(Ct+1),ht=p+(Ot+1)+ot*Ct;c.push(lt,G,ht),c.push(G,j,ht),at+=6}a.addGroup(f,at,b),f+=at,p+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Fi(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Ph={clone:Fi,merge:ke},ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},js=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new L,Ic=new At,Pc=new At,We=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Pc),e.subVectors(Pc,Ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,ho=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new We(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new We(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new We(ts,es,t,e);a.layers=this.layers,this.add(a);let c=new We(ts,es,t,e);c.layers=this.layers,this.add(c);let h=new We(ts,es,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,u]=this.children,l=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(l,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},tr=class extends $e{constructor(t=[],e=Di,n,s,r,o,a,c,h,u){super(t,e,n,s,r,o,a,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uo=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Vn});r.uniforms.tEquirect.value=e;let o=new se(s,r),a=e.minFilter;return e.minFilter===Cn&&(e.minFilter=sn),new ho(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ge=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},ed={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),d=this._getHandJoint(h,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],p=u.position.distanceTo(l.position),f=.02,_=.005;h.inputState.pinching&&p>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ei=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var si=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,c,h=Je,u=Je,l,p){super(null,o,a,c,h,u,s,r,l,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new ae,Dc=new ae,$r=[],Lc=new ze,nd=new ae,Os=new se,Bs=new ni,wi=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Lc.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Lc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Bs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Dc.multiplyMatrices(n,ns),Os.matrixWorld=Dc,Os.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){let c=$r[o];c.instanceId=r,c.object=this,e.push(c)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(s*this.count),s,this.count,qo,Sn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rl=new L,id=new L,sd=new Yt,En=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rl.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new ni,rd=new At(.5,.5),Kr=new L,ds=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],u=r[4],l=r[5],p=r[6],f=r[7],_=r[8],g=r[9],m=r[10],d=r[11],y=r[12],M=r[13],x=r[14],w=r[15];if(s[0].setComponents(h-o,f-u,d-_,w-y).normalize(),s[1].setComponents(h+o,f+u,d+_,w+y).normalize(),s[2].setComponents(h+a,f+l,d+g,w+M).normalize(),s[3].setComponents(h-a,f-l,d-g,w-M).normalize(),n)s[4].setComponents(c,p,m,x).normalize(),s[5].setComponents(h-c,f-p,d-m,w-x).normalize();else if(s[4].setComponents(h-c,f-p,d-m,w-x).normalize(),e===_n)s[5].setComponents(h+c,f+p,d+m,w+x).normalize();else if(e===Ys)s[5].setComponents(c,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);let e=rd.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends $e{constructor(t,e,n=ci,s,r,o,a=Je,c=Je,h,u=os,l=1){if(u!==os&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:l};super(p,s,r,o,a,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ir=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sr=class i extends Te{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],h=[],u=e/2,l=Math.PI/2*t,p=e,f=2*l+p,_=n*2+r,g=s+1,m=new L,d=new L;for(let y=0;y<=_;y++){let M=0,x=0,w=0,A=0;if(y<=n){let b=y/n,S=b*Math.PI/2;x=-u-t*Math.cos(S),w=t*Math.sin(S),A=-t*Math.cos(S),M=b*l}else if(y<=n+r){let b=(y-n)/r;x=-u+b*e,w=t,A=0,M=l+b*p}else{let b=(y-n-r)/n,S=b*Math.PI/2;x=u+t*Math.sin(S),w=t*Math.cos(S),A=t*Math.sin(S),M=l+p+b*l}let R=Math.max(0,Math.min(1,M/f)),I=0;y===0?I=.5/s:y===_&&(I=-.5/s);for(let b=0;b<=s;b++){let S=b/s,P=S*Math.PI*2,U=Math.sin(P),W=Math.cos(P);d.x=-w*W,d.y=x,d.z=w*U,a.push(d.x,d.y,d.z),m.set(-w*W,A,w*U),m.normalize(),c.push(m.x,m.y,m.z),h.push(S+I,R)}if(y>0){let b=(y-1)*g;for(let S=0;S<s;S++){let P=b+S,U=b+S+1,W=y*g+S,Q=y*g+S+1;o.push(P,U,W),o.push(U,Q,W)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},rr=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new L,u=new At;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,p=3;l<=e;l++,p+=3){let f=n+l/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,c.push(u.x,u.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},dn=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],l=[],p=[],f=[],_=0,g=[],m=n/2,d=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(f,2));function y(){let x=new L,w=new L,A=0,R=(e-t)/n;for(let I=0;I<=r;I++){let b=[],S=I/r,P=S*(e-t)+t;for(let U=0;U<=s;U++){let W=U/s,Q=W*c+a,ot=Math.sin(Q),it=Math.cos(Q);w.x=P*ot,w.y=-S*n+m,w.z=P*it,l.push(w.x,w.y,w.z),x.set(ot,R,it).normalize(),p.push(x.x,x.y,x.z),f.push(W,1-S),b.push(_++)}g.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let S=g[b][I],P=g[b+1][I],U=g[b+1][I+1],W=g[b][I+1];(t>0||b!==0)&&(u.push(S,P,W),A+=3),(e>0||b!==r-1)&&(u.push(P,U,W),A+=3)}h.addGroup(d,A,0),d+=A}function M(x){let w=_,A=new At,R=new L,I=0,b=x===!0?t:e,S=x===!0?1:-1;for(let U=1;U<=s;U++)l.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),_++;let P=_;for(let U=0;U<=s;U++){let Q=U/s*c+a,ot=Math.cos(Q),it=Math.sin(Q);R.x=b*it,R.y=m*S,R.z=b*ot,l.push(R.x,R.y,R.z),p.push(0,S,0),A.x=ot*.5+.5,A.y=it*.5*S+.5,f.push(A.x,A.y),_++}for(let U=0;U<s;U++){let W=w+U,Q=P+U;x===!0?u.push(Q,Q+1,W):u.push(Q+1,Q,W),I+=3}h.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class i extends dn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(o-u)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new ae;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),l=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fs=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),p=c-this.aX,f=h-this.aY;c=p*u-f*l+this.aX,h=p*l+f*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fo=class extends fs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,u,l){let p=(o-r)/h-(a-r)/(h+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+l)+(c-a)/l;p*=u,f*=u,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Qr=new L,ol=new Vl,al=new Vl,ll=new Vl,vn=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),h=Qr);let l=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(h.distanceToSquared(l),f),g=Math.pow(l.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ol.initNonuniformCatmullRom(h.x,l.x,p.x,u.x,_,g,m),al.initNonuniformCatmullRom(h.y,l.y,p.y,u.y,_,g,m),ll.initNonuniformCatmullRom(h.z,l.z,p.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(h.x,l.x,p.x,u.x,this.tension),al.initCatmullRom(h.y,l.y,p.y,u.y,this.tension),ll.initCatmullRom(h.z,l.z,p.z,u.z,this.tension));return n.set(ol.calc(c),al.calc(c),ll.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function od(i,t){let e=1-i;return e*e*t}function ad(i,t){return 2*(1-i)*i*t}function ld(i,t){return i*i*t}function Gs(i,t,e,n){return od(i,t)+ad(i,e)+ld(i,n)}function cd(i,t){let e=1-i;return e*e*e*t}function hd(i,t){let e=1-i;return 3*e*e*i*t}function ud(i,t){return 3*(1-i)*i*i*t}function dd(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return cd(i,t)+hd(i,e)+ud(i,n)+dd(i,s)}var ar=class extends rn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends rn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y),Ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lr=class extends rn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends rn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cr=class extends rn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends rn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ur=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],l=s[o>s.length-3?s.length-1:o+2];return n.set(Uc(a,c.x,h.x,u.x,l.x),Uc(a,c.y,h.y,u.y,l.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},go=Object.freeze({__proto__:null,ArcCurve:fo,CatmullRomCurve3:vn,CubicBezierCurve:ar,CubicBezierCurve3:po,EllipseCurve:fs,LineCurve:lr,LineCurve3:mo,QuadraticBezierCurve:cr,QuadraticBezierCurve3:hr,SplineCurve:ur}),_o=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new go[s.type]().fromJSON(s))}return this}},dr=class extends _o{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lr(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new cr(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ar(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let h=new fs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ti=class extends dr{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new dr().fromJSON(s))}return this}};function fd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=xd(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,l=-1/0;for(let p=e;p<s;p+=e){let f=i[p],_=i[p+1];f<a&&(a=f),_<c&&(c=_),f>u&&(u=f),_>l&&(l=_)}h=Math.max(u-a,l-c),h=h!==0?32767/h:0}return fr(r,o,e,a,c,h,0),o}function Dh(i,t,e,n,s){let r;if(s===Cd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Fc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Fc(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(mr(r),r=r.next),r}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ps(e,e.next)||me(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?md(i,n,s,r):pd(i)){t.push(c.i,i.i,h.i),mr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=gd(Ai(i),t),fr(i,t,e,n,s,r,2)):o===2&&_d(i,t,e,n,s,r):fr(Ai(i),t,e,n,s,r,1);break}}}function pd(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,u=Math.min(s,r,o),l=Math.min(a,c,h),p=Math.max(s,r,o),f=Math.max(a,c,h),_=n.next;for(;_!==t;){if(_.x>=u&&_.x<=p&&_.y>=l&&_.y<=f&&ks(s,a,r,c,o,h,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function md(i,t,e,n){let s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,u=s.y,l=r.y,p=o.y,f=Math.min(a,c,h),_=Math.min(u,l,p),g=Math.max(a,c,h),m=Math.max(u,l,p),d=gl(f,_,t,e,n),y=gl(g,m,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=d&&x&&x.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&ks(a,u,c,l,h,p,M.x,M.y)&&me(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&ks(a,u,c,l,h,p,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=d;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&ks(a,u,c,l,h,p,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&ks(a,u,c,l,h,p,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ps(n,s)&&Uh(n,e,e.next,s)&&pr(n,s)&&pr(s,n)&&(t.push(n.i,e.i,s.i),mr(e),mr(e.next),e=i=s),e=e.next}while(e!==i);return Ai(e)}function _d(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Td(o,a)){let c=Fh(o,a);o=Ai(o,o.next),c=Ai(c,c.next),fr(o,t,e,n,s,r,0),fr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=Dh(i,a,c,n,!1);h===h.next&&(h.steiner=!0),s.push(wd(h))}s.sort(yd);for(let r=0;r<s.length;r++)e=vd(s[r],e);return e}function yd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vd(i,t){let e=Md(i,t);if(!e)return t;let n=Fh(e,i);return Ai(n,n.next),Ai(e,e.next)}function Md(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ps(i,e))return e;do{if(ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let l=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=n&&l>r&&(r=l,o=e.x<e.next.x?e:e.next,l===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Lh(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let l=Math.abs(s-e.y)/(n-e.x);pr(e,i)&&(l<u||l===u&&(e.x>o.x||e.x===o.x&&Sd(o,e)))&&(o=e,u=l)}e=e.next}while(e!==a);return o}function Sd(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function bd(i,t,e,n){let s=i;do s.z===0&&(s.z=gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ed(s)}function Ed(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ks(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Lh(i,t,e,n,s,r,o,a)}function Td(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ad(i,t)&&(pr(i,t)&&pr(t,i)&&Rd(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||ps(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ps(i,t){return i.x===t.x&&i.y===t.y}function Uh(i,t,e,n){let s=to(me(i,t,e)),r=to(me(i,t,n)),o=to(me(e,n,i)),a=to(me(e,n,t));return!!(s!==r&&o!==a||s===0&&jr(i,e,t)||r===0&&jr(i,n,t)||o===0&&jr(e,i,n)||a===0&&jr(e,t,n))}function jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function to(i){return i>0?1:i<0?-1:0}function Ad(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Rd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fh(i,t){let e=_l(i.i,i.x,i.y),n=_l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fc(i,t,e,n){let s=_l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _l(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xl=class{static triangulate(t,e,n=2){return fd(t,e,n)}},yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nc(t),Oc(n,t);let o=t.length;e.forEach(Nc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Oc(n,e[c]);let a=xl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Oc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ms=class i extends Te{constructor(t=new Ti([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,l=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Id,M,x=!1,w,A,R,I;d&&(M=d.getSpacedPoints(u),x=!0,p=!1,w=d.computeFrenetFrames(u,!1),A=new L,R=new L,I=new L),p||(m=0,f=0,_=0,g=0);let b=a.extractPoints(h),S=b.shape,P=b.holes;if(!yi.isClockWise(S)){S=S.reverse();for(let dt=0,D=P.length;dt<D;dt++){let B=P[dt];yi.isClockWise(B)&&(P[dt]=B.reverse())}}function W(dt){let B=10000000000000001e-36,V=dt[0];for(let X=1;X<=dt.length;X++){let K=X%dt.length,et=dt[K],vt=et.x-V.x,xt=et.y-V.y,T=vt*vt+xt*xt,v=Math.max(Math.abs(et.x),Math.abs(et.y),Math.abs(V.x),Math.abs(V.y)),O=B*v*v;if(T<=O){dt.splice(K,1),X--;continue}V=et}}W(S),P.forEach(W);let Q=P.length,ot=S;for(let dt=0;dt<Q;dt++){let D=P[dt];S=S.concat(D)}function it(dt,D,B){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(D,B)}let mt=S.length;function at(dt,D,B){let V,X,K,et=dt.x-D.x,vt=dt.y-D.y,xt=B.x-dt.x,T=B.y-dt.y,v=et*et+vt*vt,O=et*T-vt*xt;if(Math.abs(O)>Number.EPSILON){let z=Math.sqrt(v),st=Math.sqrt(xt*xt+T*T),q=D.x-vt/z,Rt=D.y+et/z,_t=B.x-T/st,$=B.y+xt/st,Y=((_t-q)*T-($-Rt)*xt)/(et*T-vt*xt);V=q+et*Y-dt.x,X=Rt+vt*Y-dt.y;let J=V*V+X*X;if(J<=2)return new At(V,X);K=Math.sqrt(J/2)}else{let z=!1;et>Number.EPSILON?xt>Number.EPSILON&&(z=!0):et<-Number.EPSILON?xt<-Number.EPSILON&&(z=!0):Math.sign(vt)===Math.sign(T)&&(z=!0),z?(V=-vt,X=et,K=Math.sqrt(v)):(V=et,X=vt,K=Math.sqrt(v/2))}return new At(V/K,X/K)}let wt=[];for(let dt=0,D=ot.length,B=D-1,V=dt+1;dt<D;dt++,B++,V++)B===D&&(B=0),V===D&&(V=0),wt[dt]=at(ot[dt],ot[B],ot[V]);let Ct=[],Ot,lt=wt.concat();for(let dt=0,D=Q;dt<D;dt++){let B=P[dt];Ot=[];for(let V=0,X=B.length,K=X-1,et=V+1;V<X;V++,K++,et++)K===X&&(K=0),et===X&&(et=0),Ot[V]=at(B[V],B[K],B[et]);Ct.push(Ot),lt=lt.concat(Ot)}let G;if(m===0)G=yi.triangulateShape(ot,P);else{let dt=[],D=[];for(let B=0;B<m;B++){let V=B/m,X=f*Math.cos(V*Math.PI/2),K=_*Math.sin(V*Math.PI/2)+g;for(let et=0,vt=ot.length;et<vt;et++){let xt=it(ot[et],wt[et],K);gt(xt.x,xt.y,-X),V===0&&dt.push(xt)}for(let et=0,vt=Q;et<vt;et++){let xt=P[et];Ot=Ct[et];let T=[];for(let v=0,O=xt.length;v<O;v++){let z=it(xt[v],Ot[v],K);gt(z.x,z.y,-X),V===0&&T.push(z)}V===0&&D.push(T)}}G=yi.triangulateShape(dt,D)}let j=G.length,ht=_+g;for(let dt=0;dt<mt;dt++){let D=p?it(S[dt],lt[dt],ht):S[dt];x?(R.copy(w.normals[0]).multiplyScalar(D.x),A.copy(w.binormals[0]).multiplyScalar(D.y),I.copy(M[0]).add(R).add(A),gt(I.x,I.y,I.z)):gt(D.x,D.y,0)}for(let dt=1;dt<=u;dt++)for(let D=0;D<mt;D++){let B=p?it(S[D],lt[D],ht):S[D];x?(R.copy(w.normals[dt]).multiplyScalar(B.x),A.copy(w.binormals[dt]).multiplyScalar(B.y),I.copy(M[dt]).add(R).add(A),gt(I.x,I.y,I.z)):gt(B.x,B.y,l/u*dt)}for(let dt=m-1;dt>=0;dt--){let D=dt/m,B=f*Math.cos(D*Math.PI/2),V=_*Math.sin(D*Math.PI/2)+g;for(let X=0,K=ot.length;X<K;X++){let et=it(ot[X],wt[X],V);gt(et.x,et.y,l+B)}for(let X=0,K=P.length;X<K;X++){let et=P[X];Ot=Ct[X];for(let vt=0,xt=et.length;vt<xt;vt++){let T=it(et[vt],Ot[vt],V);x?gt(T.x,T.y+M[u-1].y,M[u-1].x+B):gt(T.x,T.y,l+B)}}}F(),k();function F(){let dt=s.length/3;if(p){let D=0,B=mt*D;for(let V=0;V<j;V++){let X=G[V];ft(X[2]+B,X[1]+B,X[0]+B)}D=u+m*2,B=mt*D;for(let V=0;V<j;V++){let X=G[V];ft(X[0]+B,X[1]+B,X[2]+B)}}else{for(let D=0;D<j;D++){let B=G[D];ft(B[2],B[1],B[0])}for(let D=0;D<j;D++){let B=G[D];ft(B[0]+mt*u,B[1]+mt*u,B[2]+mt*u)}}n.addGroup(dt,s.length/3-dt,0)}function k(){let dt=s.length/3,D=0;tt(ot,D),D+=ot.length;for(let B=0,V=P.length;B<V;B++){let X=P[B];tt(X,D),D+=X.length}n.addGroup(dt,s.length/3-dt,1)}function tt(dt,D){let B=dt.length;for(;--B>=0;){let V=B,X=B-1;X<0&&(X=dt.length-1);for(let K=0,et=u+m*2;K<et;K++){let vt=mt*K,xt=mt*(K+1),T=D+V+vt,v=D+X+vt,O=D+X+xt,z=D+V+xt;Nt(T,v,O,z)}}}function gt(dt,D,B){c.push(dt),c.push(D),c.push(B)}function ft(dt,D,B){Pt(dt),Pt(D),Pt(B);let V=s.length/3,X=y.generateTopUV(n,s,V-3,V-2,V-1);C(X[0]),C(X[1]),C(X[2])}function Nt(dt,D,B,V){Pt(dt),Pt(D),Pt(V),Pt(D),Pt(B),Pt(V);let X=s.length/3,K=y.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);C(K[0]),C(K[1]),C(K[3]),C(K[1]),C(K[2]),C(K[3])}function Pt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function C(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new go[s.type]().fromJSON(s)),new i(n,t.options)}},Id={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new At(r,o),new At(a,c),new At(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],l=t[n*3+2],p=t[s*3],f=t[s*3+1],_=t[s*3+2],g=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new At(o,1-c),new At(h,1-l),new At(p,1-_),new At(g,1-d)]:[new At(a,1-c),new At(u,1-l),new At(f,1-_),new At(m,1-d)]}};function Pd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gr=class i extends Te{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],u=1/e,l=new L,p=new At,f=new L,_=new L,g=new L,m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(_)}for(let y=0;y<=e;y++){let M=n+y*u*s,x=Math.sin(M),w=Math.cos(M);for(let A=0;A<=t.length-1;A++){l.x=t[A].x*x,l.y=t[A].y,l.z=t[A].x*w,o.push(l.x,l.y,l.z),p.x=y/e,p.y=A/(t.length-1),a.push(p.x,p.y);let R=c[3*A+0]*x,I=c[3*A+1],b=c[3*A+0]*w;h.push(R,I,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let x=M+y*t.length,w=x,A=x+t.length,R=x+t.length+1,I=x+1;r.push(w,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ri=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,u=c+1,l=t/a,p=e/c,f=[],_=[],g=[],m=[];for(let d=0;d<u;d++){let y=d*p-o;for(let M=0;M<h;M++){let x=M*l-r;_.push(x,-y,0),g.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let M=y+h*d,x=y+h*(d+1),w=y+1+h*(d+1),A=y+1+h*d;f.push(M,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var zn=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,u=[],l=new L,p=new L,f=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){let y=[],M=d/n,x=0;d===0&&o===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){let A=w/e;l.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),l.y=t*Math.cos(o+M*a),l.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(l.x,l.y,l.z),p.copy(l).normalize(),g.push(p.x,p.y,p.z),m.push(A+x,1-M),y.push(h++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let M=u[d][y+1],x=u[d][y],w=u[d+1][y],A=u[d+1][y+1];(d!==0||o>0)&&f.push(M,x,A),(d!==n-1||c<Math.PI)&&f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],h=[],u=new L,l=new L,p=new L;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let g=_/s*r,m=f/n*Math.PI*2;l.x=(t+e*Math.cos(m))*Math.cos(g),l.y=(t+e*Math.cos(m))*Math.sin(g),l.z=e*Math.sin(m),a.push(l.x,l.y,l.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),p.subVectors(l,u).normalize(),c.push(p.x,p.y,p.z),h.push(_/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,y=(s+1)*f+_;o.push(g,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var kn=class i extends Te{constructor(t=new hr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,h=new At,u=new L,l=[],p=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(f,2));function g(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),d()}function m(M){u=t.getPointAt(M/e,u);let x=o.normals[M],w=o.binormals[M];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,I=Math.sin(R),b=-Math.cos(R);c.x=b*x.x+I*w.x,c.y=b*x.y+I*w.y,c.z=b*x.z+I*w.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,l.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let w=(s+1)*(M-1)+(x-1),A=(s+1)*M+(x-1),R=(s+1)*M+x,I=(s+1)*(M-1)+x;_.push(w,A,I),_.push(A,R,I)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)h.x=M/e,h.y=x/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _r=class extends An{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var fn=class extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xr=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xo=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yo=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function eo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vo=class extends Ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dl:r=t,a=2*e-n;break;case fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dl:o=t,c=2*n-e;break;case fl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=this._offsetPrev,l=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,d=-p*m+2*p*g-p*_,y=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let w=0;w!==a;++w)r[w]=d*o[u+w]+y*o[h+w]+M*o[c+w]+x*o[l+w];return r}},Mo=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=(n-e)/(s-e),l=1-u;for(let p=0;p!==a;++p)r[p]=o[h+p]*l+o[c+p]*u;return r}},So=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dd(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===no,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)c=!0;else{let l=a*n,p=l-n,f=l+n;for(let _=0;_!==n;++_){let g=e[l+_];if(g!==e[p+_]||g!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let l=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[l+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=oo;var ai=class extends on{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Xs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="color";var Eo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="number";var wo=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)xn.slerpFlat(r,0,o,h-a,o,h,c);return r}},yr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends on{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Xs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};To.prototype.ValueTypeName="vector";var Ao=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){let l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,p=h.length;l<p;l+=2){let f=h[l],_=h[l+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nh=new Ao,Ro=class{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cl=new ae,Bc=new L,zc=new L,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var kc=new ae,zs=new L,hl=new L,yl=class extends Co{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),hl.copy(n.position),hl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hl),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc,n.coordinateSystem,n.reversedDepth)}},Mr=class extends gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ci=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vl=class extends Co{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Io=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hl="\\[\\]\\.:\\/",Ld=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",Ud="[^"+Hl.replace("\\.","")+"]",Fd=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Nd=/(WCOD+)?/.source.replace("WCOD",Ud),Od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),zd=new RegExp("^"+Fd+Nd+Od+Bd+"$"),kd=["material","materials","bones","map"],Ml=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(t){let e=zd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ml;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);var Vc=new ae,Pi=class{constructor(t,e,n=0,s=1/0){this.ray=new $s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return Sl(t,this,n,e),n.sort(Hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sl(t[s],this,n,e);return n.sort(Hc),n}};function Hc(i,t){return i.distance-t.distance}function Sl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Sl(r[o],t,e,!0)}}function Wl(i,t,e,n){let s=Vd(n);switch(e){case Ll:return i*t;case qo:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Zo:return i*t*2/s.components*s.byteLength;case Ul:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case Jo:return i*t*4/s.components*s.byteLength;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:case jo:return Math.max(i,16)*Math.max(t,8)/4;case $o:case Qo:return Math.max(i,8)*Math.max(t,8)/2;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _a:case xa:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case va:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sa:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vd(i){switch(i){case Mn:case Cl:return{byteLength:1,components:1};case xs:case Il:case ys:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case ci:case Go:case Sn:return{byteLength:4,components:1};case Pl:case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){let t=new WeakMap;function e(a,c){let h=a.array,u=a.usage,l=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,h){let u=c.array,l=c.updateRanges;if(i.bindBuffer(h,a),l.length===0)i.bufferSubData(h,0,u);else{l.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<l.length;f++){let _=l[p],g=l[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,l[p]=g)}l.length=p+1;for(let f=0,_=l.length;f<_;f++){let g=l[f];i.bufferSubData(h,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,xm=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:$d,aomap_pars_fragment:Kd,batching_pars_vertex:Qd,batching_vertex:jd,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:vf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:bf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:If,fog_pars_fragment:Pf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Lf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Nf,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:$f,map_fragment:Kf,map_pars_fragment:Qf,map_particle_fragment:jf,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:vp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:bp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Ip,skinning_pars_vertex:Pp,skinning_vertex:Dp,skinnormal_vertex:Lp,specularmap_fragment:Up,specularmap_pars_fragment:Fp,tonemapping_fragment:Np,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Vp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:Jp,depth_vert:$p,depth_frag:Kp,distanceRGBA_vert:Qp,distanceRGBA_frag:jp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:xm,points_frag:ym,shadow_vert:vm,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:bm},Ut={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},In={basic:{uniforms:ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ke([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ke([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ke([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ke([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ke([Ut.points,Ut.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ke([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ke([Ut.common,Ut.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ke([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ke([Ut.sprite,Ut.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ke([Ut.common,Ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ke([Ut.lights,Ut.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};In.physical={uniforms:ke([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var wa={r:0,b:0,g:0},Ni=new un,Em=new ae;function wm(i,t,e,n,s,r,o){let a=new Xt(0),c=r===!0?0:1,h,u,l=null,p=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1,w=_(M);w===null?d(a,c):w&&w.isColor&&(d(w,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){let w=_(x);w&&(w.isCubeTexture||w.mapping===Sr)?(u===void 0&&(u=new se(new ii(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Fi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(x.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Ni)),u.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,(l!==w||p!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,p=w.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new se(new ri(2,2),new yn({name:"BackgroundMaterial",uniforms:Fi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||p!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=w,p=w.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function d(M,x){M.getRGB(wa,kl(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:g,addToRenderList:m,dispose:y}}function Tm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(S,P,U,W,Q){let ot=!1,it=l(W,U,P);r!==it&&(r=it,h(r.object)),ot=f(S,W,U,Q),ot&&_(S,W,U,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,x(S,P,U,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function l(S,P,U){let W=U.wireframe===!0,Q=n[S.id];Q===void 0&&(Q={},n[S.id]=Q);let ot=Q[P.id];ot===void 0&&(ot={},Q[P.id]=ot);let it=ot[W];return it===void 0&&(it=p(c()),ot[W]=it),it}function p(S){let P=[],U=[],W=[];for(let Q=0;Q<e;Q++)P[Q]=0,U[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,P,U,W){let Q=r.attributes,ot=P.attributes,it=0,mt=U.getAttributes();for(let at in mt)if(mt[at].location>=0){let Ct=Q[at],Ot=ot[at];if(Ot===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(Ot=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(Ot=S.instanceColor)),Ct===void 0||Ct.attribute!==Ot||Ot&&Ct.data!==Ot.data)return!0;it++}return r.attributesNum!==it||r.index!==W}function _(S,P,U,W){let Q={},ot=P.attributes,it=0,mt=U.getAttributes();for(let at in mt)if(mt[at].location>=0){let Ct=ot[at];Ct===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor));let Ot={};Ot.attribute=Ct,Ct&&Ct.data&&(Ot.data=Ct.data),Q[at]=Ot,it++}r.attributes=Q,r.attributesNum=it,r.index=W}function g(){let S=r.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){let U=r.newAttributes,W=r.enabledAttributes,Q=r.attributeDivisors;U[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),Q[S]!==P&&(i.vertexAttribDivisor(S,P),Q[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let U=0,W=P.length;U<W;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function M(S,P,U,W,Q,ot,it){it===!0?i.vertexAttribIPointer(S,P,U,Q,ot):i.vertexAttribPointer(S,P,U,W,Q,ot)}function x(S,P,U,W){g();let Q=W.attributes,ot=U.getAttributes(),it=P.defaultAttributeValues;for(let mt in ot){let at=ot[mt];if(at.location>=0){let wt=Q[mt];if(wt===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),wt!==void 0){let Ct=wt.normalized,Ot=wt.itemSize,lt=t.get(wt);if(lt===void 0)continue;let G=lt.buffer,j=lt.type,ht=lt.bytesPerElement,F=j===i.INT||j===i.UNSIGNED_INT||wt.gpuType===Go;if(wt.isInterleavedBufferAttribute){let k=wt.data,tt=k.stride,gt=wt.offset;if(k.isInstancedInterleavedBuffer){for(let ft=0;ft<at.locationSize;ft++)d(at.location+ft,k.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ft=0;ft<at.locationSize;ft++)m(at.location+ft);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ft=0;ft<at.locationSize;ft++)M(at.location+ft,Ot/at.locationSize,j,Ct,tt*ht,(gt+Ot/at.locationSize*ft)*ht,F)}else{if(wt.isInstancedBufferAttribute){for(let k=0;k<at.locationSize;k++)d(at.location+k,wt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let k=0;k<at.locationSize;k++)m(at.location+k);i.bindBuffer(i.ARRAY_BUFFER,G);for(let k=0;k<at.locationSize;k++)M(at.location+k,Ot/at.locationSize,j,Ct,Ot*ht,Ot/at.locationSize*k*ht,F)}}else if(it!==void 0){let Ct=it[mt];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(at.location,Ct);break;case 3:i.vertexAttrib3fv(at.location,Ct);break;case 4:i.vertexAttrib4fv(at.location,Ct);break;default:i.vertexAttrib1fv(at.location,Ct)}}}}y()}function w(){I();for(let S in n){let P=n[S];for(let U in P){let W=P[U];for(let Q in W)u(W[Q].object),delete W[Q];delete P[U]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let U in P){let W=P[U];for(let Q in W)u(W[Q].object),delete W[Q];delete P[U]}delete n[S.id]}function R(S){for(let P in n){let U=n[P];if(U[S.id]===void 0)continue;let W=U[S.id];for(let Q in W)u(W[Q].object),delete W[Q];delete U[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Am(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,l){l!==0&&(i.drawArraysInstanced(n,h,u,l),e.update(u,n,l))}function a(h,u,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,l);let f=0;for(let _=0;_<l;_++)f+=u[_];e.update(f,n,1)}function c(h,u,l,p){if(l===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h.length;_++)o(h[_],u[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,l);let _=0;for(let g=0;g<l;g++)_+=u[g]*p[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Ke&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let l=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:l,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function Cm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,p){let f=l.length!==0||p||n!==0||s;return s=p,n=l.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,p){e=u(l,p,0)},this.setState=function(l,p,f){let _=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,d=i.get(l);if(!s||_===null||_.length===0||r&&!m)r?u(null):h();else{let y=r?0:n,M=y*4,x=d.clippingState||null;c.value=x,x=u(_,p,M,f);for(let w=0;w!==M;++w)x[w]=e[w];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,p,f,_){let g=l!==null?l.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let d=f+g*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,x=f;M!==g;++M,x+=4)o.copy(l[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Im(i){let t=new WeakMap;function e(o,a){return a===ko?o.mapping=Di:a===Vo&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ko||a===Vo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new uo(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bs=4,Oh=[.125,.215,.35,.446,.526,.582],zi=20,Xl=new Ci,Bh=new Xt,ql=null,Yl=0,Zl=0,Jl=!1,Bi=(1+Math.sqrt(5))/2,Ss=1/Bi,zh=[new L(-Bi,Ss,0),new L(Bi,Ss,0),new L(-Ss,0,Bi),new L(Ss,0,Bi),new L(0,Bi,-Ss),new L(0,Bi,Ss),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Pm=new L,ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Pm}=r;ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,Yl,Zl),this._renderer.xr.enabled=Jl,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ys,format:Ke,colorSpace:Si,depthBuffer:!1},s=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Xl)}_sceneToCubeUV(t,e,n,s,r){let c=new We(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,p=l.autoClear,f=l.toneMapping;l.getClearColor(Bh),l.toneMapping=Hn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let g=new bi({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new se(new ii,g),d=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,d=!0):(g.color.copy(Bh),d=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):x===1?(c.up.set(0,0,h[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let w=this._cubeSize;Ta(s,x*w,M>2?w:0,w,w),l.setRenderTarget(s),d&&l.render(m,c),l.render(t,c)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=f,l.autoClear=p,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Di||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new se(this._lodPlanes[s],h),p=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let d=[],y=0;for(let R=0;R<zi;++R){let I=R/g,b=Math.exp(-I*I/2);d.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;let x=this._sizeLods[s],w=3*x*(s>M-bs?s-M+bs:0),A=4*(this._cubeSize-x);Ta(e,w,A,3*x,2*x),c.setRenderTarget(e),c.render(l,Xl)}};function Dm(i){let t=[],e=[],n=[],s=i,r=i-bs+1+Oh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-bs?c=Oh[o-i+bs-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),u=-h,l=1+h,p=[u,u,l,u,l,l,u,u,l,l,u,l],f=6,_=6,g=3,m=2,d=1,y=new Float32Array(g*_*f),M=new Float32Array(m*_*f),x=new Float32Array(d*_*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,I=A>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(b,g*_*A),M.set(p,m*_*A);let S=[A,A,A,A,A,A];x.set(S,d*_*A)}let w=new Te;w.setAttribute("position",new Ze(y,g)),w.setAttribute("uv",new Ze(M,m)),w.setAttribute("faceIndex",new Ze(x,d)),t.push(w),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){let n=new Tn(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){let n=new Float32Array(zi),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Vh(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hh(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Um(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===ko||c===Vo,u=c===Di||c===Li;if(h||u){let l=t.get(a),p=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ws(i)),l=h?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{let f=a.image;return h&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new ws(i)),l=h?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){let s={},r=new WeakMap;function o(l){let p=l.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(l,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(l){let p=l.attributes;for(let f in p)t.update(p[f],i.ARRAY_BUFFER)}function h(l){let p=[],f=l.index,_=l.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let M=0,x=y.length;M<x;M+=3){let w=y[M+0],A=y[M+1],R=y[M+2];p.push(w,A,A,R,R,w)}}else if(_!==void 0){let y=_.array;g=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let w=M+0,A=M+1,R=M+2;p.push(w,A,A,R,R,w)}}else return;let m=new(zl(p)?Qs:Ks)(p,1);m.version=g;let d=r.get(l);d&&t.remove(d),r.set(l,m)}function u(l){let p=r.get(l);if(p){let f=l.index;f!==null&&p.version<f.version&&h(l)}else h(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:u}}function Om(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function h(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*o,_),e.update(f,n,_))}function u(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];e.update(m,n,1)}function l(p,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)h(p[d]/o,f[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,g,0,_);let d=0;for(let y=0;y<_;y++)d+=f[y]*g[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function Bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){let n=new WeakMap,s=new re;function r(o,a,c){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==l){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*w*4*l),R=new Js(A,x,w,l);R.type=Sn,R.needsUpdate=!0;let I=M*4;for(let S=0;S<l;S++){let P=m[S],U=d[S],W=y[S],Q=x*w*4*S;for(let ot=0;ot<P.count;ot++){let it=ot*I;f===!0&&(s.fromBufferAttribute(P,ot),A[Q+it+0]=s.x,A[Q+it+1]=s.y,A[Q+it+2]=s.z,A[Q+it+3]=0),_===!0&&(s.fromBufferAttribute(U,ot),A[Q+it+4]=s.x,A[Q+it+5]=s.y,A[Q+it+6]=s.z,A[Q+it+7]=0),g===!0&&(s.fromBufferAttribute(W,ot),A[Q+it+8]=s.x,A[Q+it+9]=s.y,A[Q+it+10]=s.z,A[Q+it+11]=W.itemSize===4?s.w:1)}}p={count:l,texture:R,size:new At(x,w)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,l=t.get(c,u);if(s.get(l)!==h&&(t.update(l),s.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return l}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var au=new $e,Gh=new nr(1,1),lu=new Js,cu=new co,hu=new tr,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function Ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Ie(e,n)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Ie(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),Ie(e,n)}}function Zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=Nl,r=Gh):r=au,e.setTexture2D(t||r,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function og(i){switch(i){case 5126:return Vm;case 35664:return Hm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return jm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){let e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){let e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){let e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){let e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){let e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fg(i,t){let e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||au,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cu,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hu,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lu,r[o])}function Tg(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=og(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Jh(i,t){i.seq.push(t),i.map[t.id]=t}function Ag(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),o=$l.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){Jh(e,h===void 0?new Kl(a,i,t):new Ql(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new jl(a),Jh(e,l)),e=l}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ag(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $h(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rg=37297,Cg=0;function Ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Kh=new Yt;function Pg(i){te._getMatrix(Kh,te.workingColorSpace,i);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ig(i.getShaderSource(t),a)}else return r}function Dg(i,t){let e=Pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lg(i,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="Cineon";break;case ph:e="ACESFilmic";break;case gh:e="AgX";break;case _s:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Aa=new L;function Ug(){te.getLuminanceCoefficients(Aa);let i=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Ng(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cr(i){return i!==""}function jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(Bg,kg)}var zg=new Map;function kg(i,t){let e=$t[t];if(e===void 0){let n=zg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}var Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(Vg,Hg)}function Hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Gg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Li:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(t="ENVMAP_MODE_REFRACTION"),t}function qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case ch:t="ENVMAP_BLENDING_MIX";break;case hh:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Gg(e),h=Wg(e),u=Xg(e),l=qg(e),p=Yg(e),f=Fg(e),_=Ng(r),g=s.createProgram(),m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),d.length>0&&(d+=`
`)):(m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),d=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=tc(o),o=jh(o,e),o=tu(o,e),a=tc(a),a=jh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=y+m+o,x=y+d+a,w=$h(s,s.VERTEX_SHADER,M),A=$h(s,s.FRAGMENT_SHADER,x);s.attachShader(g,w),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",W=s.getShaderInfoLog(w)||"",Q=s.getShaderInfoLog(A)||"",ot=U.trim(),it=W.trim(),mt=Q.trim(),at=!0,wt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,A);else{let Ct=Qh(s,w,"vertex"),Ot=Qh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ot+`
`+Ct+`
`+Ot)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(it===""||mt==="")&&(wt=!1);wt&&(P.diagnostics={runnable:at,programLog:ot,vertexShader:{log:it,prefix:m},fragmentShader:{log:mt,prefix:d}})}s.deleteShader(w),s.deleteShader(A),I=new Es(s,g),b=Og(s,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,Rg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}var Jg=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function $g(i,t,e,n,s,r,o){let a=new hs,c=new ec,h=new Set,u=[],l=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,U,W){let Q=U.fog,ot=W.geometry,it=b.isMeshStandardMaterial?U.environment:null,mt=(b.isMeshStandardMaterial?e:t).get(b.envMap||it),at=mt&&mt.mapping===Sr?mt.image.height:null,wt=_[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let Ct=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ot=Ct!==void 0?Ct.length:0,lt=0;ot.morphAttributes.position!==void 0&&(lt=1),ot.morphAttributes.normal!==void 0&&(lt=2),ot.morphAttributes.color!==void 0&&(lt=3);let G,j,ht,F;if(wt){let Kt=In[wt];G=Kt.vertexShader,j=Kt.fragmentShader}else G=b.vertexShader,j=b.fragmentShader,c.update(b),ht=c.getVertexShaderID(b),F=c.getFragmentShaderID(b);let k=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),gt=W.isInstancedMesh===!0,ft=W.isBatchedMesh===!0,Nt=!!b.map,Pt=!!b.matcap,C=!!mt,dt=!!b.aoMap,D=!!b.lightMap,B=!!b.bumpMap,V=!!b.normalMap,X=!!b.displacementMap,K=!!b.emissiveMap,et=!!b.metalnessMap,vt=!!b.roughnessMap,xt=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,O=b.iridescence>0,z=b.sheen>0,st=b.transmission>0,q=xt&&!!b.anisotropyMap,Rt=T&&!!b.clearcoatMap,_t=T&&!!b.clearcoatNormalMap,$=T&&!!b.clearcoatRoughnessMap,Y=O&&!!b.iridescenceMap,J=O&&!!b.iridescenceThicknessMap,ut=z&&!!b.sheenColorMap,bt=z&&!!b.sheenRoughnessMap,Mt=!!b.specularMap,ct=!!b.specularColorMap,It=!!b.specularIntensityMap,N=st&&!!b.transmissionMap,yt=st&&!!b.thicknessMap,Tt=!!b.gradientMap,Dt=!!b.alphaMap,St=b.alphaTest>0,pt=!!b.alphaHash,Bt=!!b.extensions,Ht=Hn;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let jt={shaderID:wt,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:j,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:F,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ft,batchingColor:ft&&W._colorsTexture!==null,instancing:gt,instancingColor:gt&&W.instanceColor!==null,instancingMorph:gt&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Si,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:Pt,envMap:C,envMapMode:C&&mt.mapping,envMapCubeUVHeight:at,aoMap:dt,lightMap:D,bumpMap:B,normalMap:V,displacementMap:p&&X,emissiveMap:K,normalMapObjectSpace:V&&b.normalMapType===vh,normalMapTangentSpace:V&&b.normalMapType===Ea,metalnessMap:et,roughnessMap:vt,anisotropy:xt,anisotropyMap:q,clearcoat:T,clearcoatMap:Rt,clearcoatNormalMap:_t,clearcoatRoughnessMap:$,dispersion:v,iridescence:O,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:z,sheenColorMap:ut,sheenRoughnessMap:bt,specularMap:Mt,specularColorMap:ct,specularIntensityMap:It,transmission:st,transmissionMap:N,thicknessMap:yt,gradientMap:Tt,opaque:b.transparent===!1&&b.blending===vi&&b.alphaToCoverage===!1,alphaMap:Dt,alphaTest:St,alphaHash:pt,combine:b.combine,mapUv:Nt&&g(b.map.channel),aoMapUv:dt&&g(b.aoMap.channel),lightMapUv:D&&g(b.lightMap.channel),bumpMapUv:B&&g(b.bumpMap.channel),normalMapUv:V&&g(b.normalMap.channel),displacementMapUv:X&&g(b.displacementMap.channel),emissiveMapUv:K&&g(b.emissiveMap.channel),metalnessMapUv:et&&g(b.metalnessMap.channel),roughnessMapUv:vt&&g(b.roughnessMap.channel),anisotropyMapUv:q&&g(b.anisotropyMap.channel),clearcoatMapUv:Rt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(b.sheenRoughnessMap.channel),specularMapUv:Mt&&g(b.specularMap.channel),specularColorMapUv:ct&&g(b.specularColorMap.channel),specularIntensityMapUv:It&&g(b.specularIntensityMap.channel),transmissionMapUv:N&&g(b.transmissionMap.channel),thicknessMapUv:yt&&g(b.thicknessMap.channel),alphaMapUv:Dt&&g(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(V||xt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ot.attributes.uv&&(Nt||Dt),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:tt,skinning:W.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:K&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xe,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=h.has(1),jt.vertexUv2s=h.has(2),jt.vertexUv3s=h.has(3),h.clear(),jt}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let S=_[b.type],P;if(S){let U=In[S];P=Ph.clone(U.uniforms)}else P=b.uniforms;return P}function w(b,S){let P;for(let U=0,W=u.length;U<W;U++){let Q=u[U];if(Q.cacheKey===S){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new Zg(i,S,b,r),u.push(P)),P}function A(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:I}}function Kg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,p,f,_,g,m){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:p,material:f,groupOrder:_,renderOrder:l.renderOrder,z:g,group:m},i[t]=d):(d.id=l.id,d.object=l,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=l.renderOrder,d.z=g,d.group=m),t++,d}function a(l,p,f,_,g,m){let d=o(l,p,f,_,g,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(l,p,f,_,g,m){let d=o(l,p,f,_,g,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function h(l,p){e.length>1&&e.sort(l||Qg),n.length>1&&n.sort(p||iu),s.length>1&&s.sort(p||iu)}function u(){for(let l=t,p=i.length;l<p;l++){let f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:h}}function jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function t0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function e0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var n0=0;function i0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s0(i){let t=new t0,e=e0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let s=new L,r=new ae,o=new ae;function a(h){let u=0,l=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,g=0,m=0,d=0,y=0,M=0,x=0,w=0,A=0,R=0;h.sort(i0);for(let b=0,S=h.length;b<S;b++){let P=h[b],U=P.color,W=P.intensity,Q=P.distance,ot=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*W,l+=U.g*W,p+=U.b*W;else if(P.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(P.sh.coefficients[it],W);R++}else if(P.isDirectionalLight){let it=t.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let mt=P.shadow,at=e.get(P);at.shadowIntensity=mt.intensity,at.shadowBias=mt.bias,at.shadowNormalBias=mt.normalBias,at.shadowRadius=mt.radius,at.shadowMapSize=mt.mapSize,n.directionalShadow[f]=at,n.directionalShadowMap[f]=ot,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=it,f++}else if(P.isSpotLight){let it=t.get(P);it.position.setFromMatrixPosition(P.matrixWorld),it.color.copy(U).multiplyScalar(W),it.distance=Q,it.coneCos=Math.cos(P.angle),it.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),it.decay=P.decay,n.spot[g]=it;let mt=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,mt.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=mt.matrix,P.castShadow){let at=e.get(P);at.shadowIntensity=mt.intensity,at.shadowBias=mt.bias,at.shadowNormalBias=mt.normalBias,at.shadowRadius=mt.radius,at.shadowMapSize=mt.mapSize,n.spotShadow[g]=at,n.spotShadowMap[g]=ot,x++}g++}else if(P.isRectAreaLight){let it=t.get(P);it.color.copy(U).multiplyScalar(W),it.halfWidth.set(P.width*.5,0,0),it.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=it,m++}else if(P.isPointLight){let it=t.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity),it.distance=P.distance,it.decay=P.decay,P.castShadow){let mt=P.shadow,at=e.get(P);at.shadowIntensity=mt.intensity,at.shadowBias=mt.bias,at.shadowNormalBias=mt.normalBias,at.shadowRadius=mt.radius,at.shadowMapSize=mt.mapSize,at.shadowCameraNear=mt.camera.near,at.shadowCameraFar=mt.camera.far,n.pointShadow[_]=at,n.pointShadowMap[_]=ot,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=it,_++}else if(P.isHemisphereLight){let it=t.get(P);it.skyColor.copy(P.color).multiplyScalar(W),it.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[d]=it,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=R,n.version=n0++)}function c(h,u){let l=0,p=0,f=0,_=0,g=0,m=u.matrixWorldInverse;for(let d=0,y=h.length;d<y;d++){let M=h[d];if(M.isDirectionalLight){let x=n.directional[l];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),l++}else if(M.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function ru(i){let t=new s0(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function r0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ru(i),t.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
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
}`;function l0(i,t,e){let n=new ds,s=new At,r=new At,o=new re,a=new xo({depthPacking:yh}),c=new yo,h={},u=e.maxTextureSize,l={[On]:Ne,[Ne]:On,[Xe]:Xe},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:o0,fragmentShader:a0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new Te;_.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new se(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let d=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let W=d!==Rn&&this.type===Rn,Q=d===Rn&&this.type!==Rn;for(let ot=0,it=A.length;ot<it;ot++){let mt=A[ot],at=mt.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);let wt=at.getFrameExtents();if(s.multiply(wt),r.copy(at.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/wt.x),s.x=r.x*wt.x,at.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/wt.y),s.y=r.y*wt.y,at.mapSize.y=r.y)),at.map===null||W===!0||Q===!0){let Ot=this.type!==Rn?{minFilter:Je,magFilter:Je}:{};at.map!==null&&at.map.dispose(),at.map=new Tn(s.x,s.y,Ot),at.map.texture.name=mt.name+".shadowMap",at.camera.updateProjectionMatrix()}i.setRenderTarget(at.map),i.clear();let Ct=at.getViewportCount();for(let Ot=0;Ot<Ct;Ot++){let lt=at.getViewport(Ot);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),U.viewport(o),at.updateMatrices(mt,Ot),n=at.getFrustum(),x(R,I,at.camera,mt,this.type)}at.isPointLightShadow!==!0&&this.type===Rn&&y(at,I),at.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function y(A,R){let I=t.update(g);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,p,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,f,g,null)}function M(A,R,I,b){let S=null,P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=S.uuid,W=R.uuid,Q=h[U];Q===void 0&&(Q={},h[U]=Q);let ot=Q[W];ot===void 0&&(ot=S.clone(),Q[W]=ot,R.addEventListener("dispose",w)),S=ot}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Rn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:l[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let U=i.properties.get(S);U.light=I}return S}function x(A,R,I,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let W=t.update(A),Q=A.material;if(Array.isArray(Q)){let ot=W.groups;for(let it=0,mt=ot.length;it<mt;it++){let at=ot[it],wt=Q[at.materialIndex];if(wt&&wt.visible){let Ct=M(A,wt,b,S);A.onBeforeShadow(i,A,R,I,W,Ct,at),i.renderBufferDirect(I,null,W,Ct,A,at),A.onAfterShadow(i,A,R,I,W,Ct,at)}}}else if(Q.visible){let ot=M(A,Q,b,S);A.onBeforeShadow(i,A,R,I,W,ot,null),i.renderBufferDirect(I,null,W,ot,A,null),A.onAfterShadow(i,A,R,I,W,ot,null)}}let U=A.children;for(let W=0,Q=U.length;W<Q;W++)x(U[W],R,I,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(let I in h){let b=h[I],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var c0={[Do]:Lo,[Uo]:Oo,[Fo]:Bo,[Mi]:No,[Lo]:Do,[Oo]:Uo,[Bo]:Fo,[No]:Mi};function h0(i,t){function e(){let N=!1,yt=new re,Tt=null,Dt=new re(0,0,0,0);return{setMask:function(St){Tt!==St&&!N&&(i.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){N=St},setClear:function(St,pt,Bt,Ht,jt){jt===!0&&(St*=Ht,pt*=Ht,Bt*=Ht),yt.set(St,pt,Bt,Ht),Dt.equals(yt)===!1&&(i.clearColor(St,pt,Bt,Ht),Dt.copy(yt))},reset:function(){N=!1,Tt=null,Dt.set(-1,0,0,0)}}}function n(){let N=!1,yt=!1,Tt=null,Dt=null,St=null;return{setReversed:function(pt){if(yt!==pt){let Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),yt=pt;let Ht=St;St=null,this.setClear(Ht)}},getReversed:function(){return yt},setTest:function(pt){pt?k(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(pt){Tt!==pt&&!N&&(i.depthMask(pt),Tt=pt)},setFunc:function(pt){if(yt&&(pt=c0[pt]),Dt!==pt){switch(pt){case Do:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Oo:i.depthFunc(i.GREATER);break;case Bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=pt}},setLocked:function(pt){N=pt},setClear:function(pt){St!==pt&&(yt&&(pt=1-pt),i.clearDepth(pt),St=pt)},reset:function(){N=!1,Tt=null,Dt=null,St=null,yt=!1}}}function s(){let N=!1,yt=null,Tt=null,Dt=null,St=null,pt=null,Bt=null,Ht=null,jt=null;return{setTest:function(Kt){N||(Kt?k(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Kt){yt!==Kt&&!N&&(i.stencilMask(Kt),yt=Kt)},setFunc:function(Kt,be,ve){(Tt!==Kt||Dt!==be||St!==ve)&&(i.stencilFunc(Kt,be,ve),Tt=Kt,Dt=be,St=ve)},setOp:function(Kt,be,ve){(pt!==Kt||Bt!==be||Ht!==ve)&&(i.stencilOp(Kt,be,ve),pt=Kt,Bt=be,Ht=ve)},setLocked:function(Kt){N=Kt},setClear:function(Kt){jt!==Kt&&(i.clearStencil(Kt),jt=Kt)},reset:function(){N=!1,yt=null,Tt=null,Dt=null,St=null,pt=null,Bt=null,Ht=null,jt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap,u={},l={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,y=null,M=null,x=null,w=null,A=null,R=new Xt(0,0,0),I=0,b=!1,S=null,P=null,U=null,W=null,Q=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,mt=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(at)[1]),it=mt>=1):at.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),it=mt>=2);let wt=null,Ct={},Ot=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),G=new re().fromArray(Ot),j=new re().fromArray(lt);function ht(N,yt,Tt,Dt){let St=new Uint8Array(4),pt=i.createTexture();i.bindTexture(N,pt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Tt;Bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(yt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return pt}let F={};F[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(Mi),B(!1),V(bl),k(i.CULL_FACE),dt(Vn);function k(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function tt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function gt(N,yt){return l[N]!==yt?(i.bindFramebuffer(N,yt),l[N]=yt,N===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=yt),N===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ft(N,yt){let Tt=f,Dt=!1;if(N){Tt=p.get(yt),Tt===void 0&&(Tt=[],p.set(yt,Tt));let St=N.textures;if(Tt.length!==St.length||Tt[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Bt=St.length;pt<Bt;pt++)Tt[pt]=i.COLOR_ATTACHMENT0+pt;Tt.length=St.length,Dt=!0}}else Tt[0]!==i.BACK&&(Tt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Tt)}function Nt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let Pt={[ei]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};Pt[Zc]=i.MIN,Pt[Jc]=i.MAX;let C={[$c]:i.ZERO,[Kc]:i.ONE,[Qc]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[th]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(N,yt,Tt,Dt,St,pt,Bt,Ht,jt,Kt){if(N===Vn){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),N!==Xc){if(N!==m||Kt!==b){if((d!==ei||x!==ei)&&(i.blendEquation(i.FUNC_ADD),d=ei,x=ei),Kt)switch(N){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,w=null,A=null,R.set(0,0,0),I=0,m=N,b=Kt}return}St=St||yt,pt=pt||Tt,Bt=Bt||Dt,(yt!==d||St!==x)&&(i.blendEquationSeparate(Pt[yt],Pt[St]),d=yt,x=St),(Tt!==y||Dt!==M||pt!==w||Bt!==A)&&(i.blendFuncSeparate(C[Tt],C[Dt],C[pt],C[Bt]),y=Tt,M=Dt,w=pt,A=Bt),(Ht.equals(R)===!1||jt!==I)&&(i.blendColor(Ht.r,Ht.g,Ht.b,jt),R.copy(Ht),I=jt),m=N,b=!1}function D(N,yt){N.side===Xe?tt(i.CULL_FACE):k(i.CULL_FACE);let Tt=N.side===Ne;yt&&(Tt=!Tt),B(Tt),N.blending===vi&&N.transparent===!1?dt(Vn):dt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Dt=N.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),K(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function B(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function V(N){N!==Gc?(k(i.CULL_FACE),N!==P&&(N===bl?i.cullFace(i.BACK):N===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),P=N}function X(N){N!==U&&(it&&i.lineWidth(N),U=N)}function K(N,yt,Tt){N?(k(i.POLYGON_OFFSET_FILL),(W!==yt||Q!==Tt)&&(i.polygonOffset(yt,Tt),W=yt,Q=Tt)):tt(i.POLYGON_OFFSET_FILL)}function et(N){N?k(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function vt(N){N===void 0&&(N=i.TEXTURE0+ot-1),wt!==N&&(i.activeTexture(N),wt=N)}function xt(N,yt,Tt){Tt===void 0&&(wt===null?Tt=i.TEXTURE0+ot-1:Tt=wt);let Dt=Ct[Tt];Dt===void 0&&(Dt={type:void 0,texture:void 0},Ct[Tt]=Dt),(Dt.type!==N||Dt.texture!==yt)&&(wt!==Tt&&(i.activeTexture(Tt),wt=Tt),i.bindTexture(N,yt||F[N]),Dt.type=N,Dt.texture=yt)}function T(){let N=Ct[wt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(N){G.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),G.copy(N))}function bt(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Mt(N,yt){let Tt=h.get(yt);Tt===void 0&&(Tt=new WeakMap,h.set(yt,Tt));let Dt=Tt.get(N);Dt===void 0&&(Dt=i.getUniformBlockIndex(yt,N.name),Tt.set(N,Dt))}function ct(N,yt){let Dt=h.get(yt).get(N);c.get(yt)!==Dt&&(i.uniformBlockBinding(yt,Dt,N.__bindingPointIndex),c.set(yt,Dt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},wt=null,Ct={},l={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,y=null,M=null,x=null,w=null,A=null,R=new Xt(0,0,0),I=0,b=!1,S=null,P=null,U=null,W=null,Q=null,G.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:tt,bindFramebuffer:gt,drawBuffers:ft,useProgram:Nt,setBlending:dt,setMaterial:D,setFlipSided:B,setCullFace:V,setLineWidth:X,setPolygonOffset:K,setScissorTest:et,activeTexture:vt,bindTexture:xt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Y,texImage3D:J,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:_t,texStorage3D:$,texSubImage2D:z,texSubImage3D:st,compressedTexSubImage2D:q,compressedTexSubImage3D:Rt,scissor:ut,viewport:bt,reset:It}}function u0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,u=new WeakMap,l,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return f?new OffscreenCanvas(T,v):Zs("canvas")}function g(T,v,O){let z=1,st=xt(T);if((st.width>O||st.height>O)&&(z=O/Math.max(st.width,st.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(z*st.width),Rt=Math.floor(z*st.height);l===void 0&&(l=_(q,Rt));let _t=v?_(q,Rt):l;return _t.width=q,_t.height=Rt,_t.getContext("2d").drawImage(T,0,0,q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+q+"x"+Rt+")."),_t}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,v,O,z,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){let Rt=st?qs:te.getTransfer(z);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Rt===oe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(T,v){let O;return T?v===null||v===ci||v===vs?O=i.DEPTH24_STENCIL8:v===Sn?O=i.DEPTH32F_STENCIL8:v===xs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===vs?O=i.DEPTH_COMPONENT24:v===Sn?O=i.DEPTH_COMPONENT32F:v===xs&&(O=i.DEPTH_COMPONENT16),O}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){let v=T.target;v.removeEventListener("dispose",A),I(v),v.isVideoTexture&&u.delete(v)}function R(T){let v=T.target;v.removeEventListener("dispose",R),S(v)}function I(T){let v=n.get(T);if(v.__webglInit===void 0)return;let O=T.source,z=p.get(O);if(z){let st=z[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(T),Object.keys(z).length===0&&p.delete(O)}n.remove(T)}function b(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let O=T.source,z=p.get(O);delete z[v.__cacheKey],o.memory.textures--}function S(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let st=0;st<v.__webglFramebuffer[z].length;st++)i.deleteFramebuffer(v.__webglFramebuffer[z][st]);else i.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)i.deleteFramebuffer(v.__webglFramebuffer[z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=T.textures;for(let z=0,st=O.length;z<st;z++){let q=n.get(O[z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[z])}n.remove(T)}let P=0;function U(){P=0}function W(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function Q(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ot(T,v){let O=n.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function it(T,v){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){F(O,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function mt(T,v){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){F(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function at(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){k(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let wt={[rs]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},Ct={[Je]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Ot={[Mh]:i.NEVER,[Ah]:i.ALWAYS,[Sh]:i.LESS,[Nl]:i.LEQUAL,[bh]:i.EQUAL,[Th]:i.GEQUAL,[Eh]:i.GREATER,[wh]:i.NOTEQUAL};function lt(T,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Ho||v.magFilter===br||v.magFilter===Cn||v.minFilter===sn||v.minFilter===Ho||v.minFilter===br||v.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,wt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,wt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,wt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ct[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==br&&v.minFilter!==Cn||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function G(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let z=v.source,st=p.get(z);st===void 0&&(st={},p.set(z,st));let q=Q(v);if(q!==T.__cacheKey){st[q]===void 0&&(st[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),st[q].usedTimes++;let Rt=st[T.__cacheKey];Rt!==void 0&&(st[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(v)),T.__cacheKey=q,T.__webglTexture=st[q].texture}return O}function j(T,v,O){return Math.floor(Math.floor(T/O)/v)}function ht(T,v,O,z){let q=T.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,z,v.data);else{q.sort((J,ut)=>J.start-ut.start);let Rt=0;for(let J=1;J<q.length;J++){let ut=q[Rt],bt=q[J],Mt=ut.start+ut.count,ct=j(bt.start,v.width,4),It=j(ut.start,v.width,4);bt.start<=Mt+1&&ct===It&&j(bt.start+bt.count-1,v.width,4)===ct?ut.count=Math.max(ut.count,bt.start+bt.count-ut.start):(++Rt,q[Rt]=bt)}q.length=Rt+1;let _t=i.getParameter(i.UNPACK_ROW_LENGTH),$=i.getParameter(i.UNPACK_SKIP_PIXELS),Y=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let J=0,ut=q.length;J<ut;J++){let bt=q[J],Mt=Math.floor(bt.start/4),ct=Math.ceil(bt.count/4),It=Mt%v.width,N=Math.floor(Mt/v.width),yt=ct,Tt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,It,N,yt,Tt,O,z,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,$),i.pixelStorei(i.UNPACK_SKIP_ROWS,Y)}}function F(T,v,O){let z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=i.TEXTURE_3D);let st=G(T,v),q=v.source;e.bindTexture(z,T.__webglTexture,i.TEXTURE0+O);let Rt=n.get(q);if(q.version!==Rt.__version||st===!0){e.activeTexture(i.TEXTURE0+O);let _t=te.getPrimaries(te.workingColorSpace),$=v.colorSpace===Gn?null:te.getPrimaries(v.colorSpace),Y=v.colorSpace===Gn||_t===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let J=g(v.image,!1,s.maxTextureSize);J=vt(v,J);let ut=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),Mt=M(v.internalFormat,ut,bt,v.colorSpace,v.isVideoTexture);lt(z,v);let ct,It=v.mipmaps,N=v.isVideoTexture!==!0,yt=Rt.__version===void 0||st===!0,Tt=q.dataReady,Dt=w(v,J);if(v.isDepthTexture)Mt=x(v.format===Ms,v.type),yt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Mt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Mt,J.width,J.height,0,ut,bt,null));else if(v.isDataTexture)if(It.length>0){N&&yt&&e.texStorage2D(i.TEXTURE_2D,Dt,Mt,It[0].width,It[0].height);for(let St=0,pt=It.length;St<pt;St++)ct=It[St],N?Tt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,ct.width,ct.height,ut,bt,ct.data):e.texImage2D(i.TEXTURE_2D,St,Mt,ct.width,ct.height,0,ut,bt,ct.data);v.generateMipmaps=!1}else N?(yt&&e.texStorage2D(i.TEXTURE_2D,Dt,Mt,J.width,J.height),Tt&&ht(v,J,ut,bt)):e.texImage2D(i.TEXTURE_2D,0,Mt,J.width,J.height,0,ut,bt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Mt,It[0].width,It[0].height,J.depth);for(let St=0,pt=It.length;St<pt;St++)if(ct=It[St],v.format!==Ke)if(ut!==null)if(N){if(Tt)if(v.layerUpdates.size>0){let Bt=Wl(ct.width,ct.height,v.format,v.type);for(let Ht of v.layerUpdates){let jt=ct.data.subarray(Ht*Bt/ct.data.BYTES_PER_ELEMENT,(Ht+1)*Bt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Ht,ct.width,ct.height,1,ut,jt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,ct.width,ct.height,J.depth,ut,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Mt,ct.width,ct.height,J.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,ct.width,ct.height,J.depth,ut,bt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Mt,ct.width,ct.height,J.depth,0,ut,bt,ct.data)}else{N&&yt&&e.texStorage2D(i.TEXTURE_2D,Dt,Mt,It[0].width,It[0].height);for(let St=0,pt=It.length;St<pt;St++)ct=It[St],v.format!==Ke?ut!==null?N?Tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Tt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,ct.width,ct.height,ut,bt,ct.data):e.texImage2D(i.TEXTURE_2D,St,Mt,ct.width,ct.height,0,ut,bt,ct.data)}else if(v.isDataArrayTexture)if(N){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Mt,J.width,J.height,J.depth),Tt)if(v.layerUpdates.size>0){let St=Wl(J.width,J.height,v.format,v.type);for(let pt of v.layerUpdates){let Bt=J.data.subarray(pt*St/J.data.BYTES_PER_ELEMENT,(pt+1)*St/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,J.width,J.height,1,ut,bt,Bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,J.width,J.height,J.depth,0,ut,bt,J.data);else if(v.isData3DTexture)N?(yt&&e.texStorage3D(i.TEXTURE_3D,Dt,Mt,J.width,J.height,J.depth),Tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,J.width,J.height,J.depth,0,ut,bt,J.data);else if(v.isFramebufferTexture){if(yt)if(N)e.texStorage2D(i.TEXTURE_2D,Dt,Mt,J.width,J.height);else{let St=J.width,pt=J.height;for(let Bt=0;Bt<Dt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Mt,St,pt,0,ut,bt,null),St>>=1,pt>>=1}}else if(It.length>0){if(N&&yt){let St=xt(It[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Mt,St.width,St.height)}for(let St=0,pt=It.length;St<pt;St++)ct=It[St],N?Tt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,ut,bt,ct):e.texImage2D(i.TEXTURE_2D,St,Mt,ut,bt,ct);v.generateMipmaps=!1}else if(N){if(yt){let St=xt(J);e.texStorage2D(i.TEXTURE_2D,Dt,Mt,St.width,St.height)}Tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ut,bt,J);m(v)&&d(z),Rt.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function k(T,v,O){if(v.image.length!==6)return;let z=G(T,v),st=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let q=n.get(st);if(st.version!==q.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let Rt=te.getPrimaries(te.workingColorSpace),_t=v.colorSpace===Gn?null:te.getPrimaries(v.colorSpace),$=v.colorSpace===Gn||Rt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let Y=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let pt=0;pt<6;pt++)!Y&&!J?ut[pt]=g(v.image[pt],!0,s.maxCubemapSize):ut[pt]=J?v.image[pt].image:v.image[pt],ut[pt]=vt(v,ut[pt]);let bt=ut[0],Mt=r.convert(v.format,v.colorSpace),ct=r.convert(v.type),It=M(v.internalFormat,Mt,ct,v.colorSpace),N=v.isVideoTexture!==!0,yt=q.__version===void 0||z===!0,Tt=st.dataReady,Dt=w(v,bt);lt(i.TEXTURE_CUBE_MAP,v);let St;if(Y){N&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,It,bt.width,bt.height);for(let pt=0;pt<6;pt++){St=ut[pt].mipmaps;for(let Bt=0;Bt<St.length;Bt++){let Ht=St[Bt];v.format!==Ke?Mt!==null?N?Tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,Ht.width,Ht.height,Mt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,It,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,Ht.width,Ht.height,Mt,ct,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,It,Ht.width,Ht.height,0,Mt,ct,Ht.data)}}}else{if(St=v.mipmaps,N&&yt){St.length>0&&Dt++;let pt=xt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,It,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(J){N?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ut[pt].width,ut[pt].height,Mt,ct,ut[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,It,ut[pt].width,ut[pt].height,0,Mt,ct,ut[pt].data);for(let Bt=0;Bt<St.length;Bt++){let jt=St[Bt].image[pt].image;N?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,jt.width,jt.height,Mt,ct,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,It,jt.width,jt.height,0,Mt,ct,jt.data)}}else{N?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt,ct,ut[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,It,Mt,ct,ut[pt]);for(let Bt=0;Bt<St.length;Bt++){let Ht=St[Bt];N?Tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,Mt,ct,Ht.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,It,Mt,ct,Ht.image[pt])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),q.__version=st.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,O,z,st,q){let Rt=r.convert(O.format,O.colorSpace),_t=r.convert(O.type),$=M(O.internalFormat,Rt,_t,O.colorSpace),Y=n.get(v),J=n.get(O);if(J.__renderTarget=v,!Y.__hasExternalTextures){let ut=Math.max(1,v.width>>q),bt=Math.max(1,v.height>>q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,q,$,ut,bt,v.depth,0,Rt,_t,null):e.texImage2D(st,q,$,ut,bt,0,Rt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),K(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,st,J.__webglTexture,0,X(v)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,st,J.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let z=v.depthTexture,st=z&&z.isDepthTexture?z.type:null,q=x(v.stencilBuffer,st),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=X(v);K(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,T)}else{let z=v.textures;for(let st=0;st<z.length;st++){let q=z[st],Rt=r.convert(q.format,q.colorSpace),_t=r.convert(q.type),$=M(q.internalFormat,Rt,_t,q.colorSpace),Y=X(v);O&&K(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,$,v.width,v.height):K(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ot(v.depthTexture,0);let st=z.__webglTexture,q=X(v);if(v.depthTexture.format===os)K(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(v.depthTexture.format===Ms)K(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Nt(T){let v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",st)};z.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let z=T.texture.mipmaps;z&&z.length>0?ft(v.__webglFramebuffer[0],T):ft(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=i.createRenderbuffer(),gt(v.__webglDepthbuffer[z],T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,q)}}else{let z=T.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),gt(v.__webglDepthbuffer,T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(T,v,O){let z=n.get(T);v!==void 0&&tt(z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(T)}function C(T){let v=T.texture,O=n.get(T),z=n.get(v);T.addEventListener("dispose",R);let st=T.textures,q=T.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[_t]=[];for(let $=0;$<v.mipmaps.length;$++)O.__webglFramebuffer[_t][$]=i.createFramebuffer()}else O.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let _t=0;_t<v.mipmaps.length;_t++)O.__webglFramebuffer[_t]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let _t=0,$=st.length;_t<$;_t++){let Y=n.get(st[_t]);Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&K(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){let $=st[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);let Y=r.convert($.format,$.colorSpace),J=r.convert($.type),ut=M($.internalFormat,Y,J,$.colorSpace,T.isXRRenderTarget===!0),bt=X(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),lt(i.TEXTURE_CUBE_MAP,v);for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)tt(O.__webglFramebuffer[_t][$],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$);else tt(O.__webglFramebuffer[_t],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let _t=0,$=st.length;_t<$;_t++){let Y=st[_t],J=n.get(Y),ut=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),lt(ut,Y),tt(O.__webglFramebuffer,T,Y,i.COLOR_ATTACHMENT0+_t,ut,0),m(Y)&&d(ut)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,z.__webglTexture),lt(_t,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)tt(O.__webglFramebuffer[$],T,v,i.COLOR_ATTACHMENT0,_t,$);else tt(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,_t,0);m(v)&&d(_t),e.unbindTexture()}T.depthBuffer&&Nt(T)}function dt(T){let v=T.textures;for(let O=0,z=v.length;O<z;O++){let st=v[O];if(m(st)){let q=y(T),Rt=n.get(st).__webglTexture;e.bindTexture(q,Rt),d(q),e.unbindTexture()}}}let D=[],B=[];function V(T){if(T.samples>0){if(K(T)===!1){let v=T.textures,O=T.width,z=T.height,st=i.COLOR_BUFFER_BIT,q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(T),_t=v.length>1;if(_t)for(let Y=0;Y<v.length;Y++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let $=T.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Y=0;Y<v.length;Y++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Y]);let J=n.get(v[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,st,i.NEAREST),c===!0&&(D.length=0,B.length=0,D.push(i.COLOR_ATTACHMENT0+Y),T.depthBuffer&&T.resolveDepthBuffer===!1&&(D.push(q),B.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Y=0;Y<v.length;Y++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Y]);let J=n.get(v[Y]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,J,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function X(T){return Math.min(s.maxSamples,T.samples)}function K(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(T){let v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function vt(T,v){let O=T.colorSpace,z=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Si&&O!==Gn&&(te.getTransfer(O)===oe?(z!==Ke||st!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.setTexture2D=ot,this.setTexture2DArray=it,this.setTexture3D=mt,this.setTextureCube=at,this.rebindTextures=Pt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=K}function d0(i,t){function e(n,s=Gn){let r,o=te.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Il)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Ul)return i.RGB;if(n===Ke)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Fl)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Er||n===wr||n===Tr||n===Ar)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Ko||n===Qo||n===jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===xa||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===Ma||n===Sa||n===ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:f0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,u=null,l=null,p=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new ic,d={},y=e.getContextAttributes(),M=null,x=null,w=[],A=[],R=new At,I=null,b=new We;b.viewport=new re;let S=new We;S.viewport=new re;let P=[b,S],U=new Io,W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=w[F];return k===void 0&&(k=new us,w[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=w[F];return k===void 0&&(k=new us,w[F]=k),k.getGripSpace()},this.getHand=function(F){let k=w[F];return k===void 0&&(k=new us,w[F]=k),k.getHandSpace()};function ot(F){let k=A.indexOf(F.inputSource);if(k===-1)return;let tt=w[k];tt!==void 0&&(tt.update(F.inputSource,F.frame,h||o),tt.dispatchEvent({type:F.type,data:F.inputSource}))}function it(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",mt);for(let F=0;F<w.length;F++){let k=A[F];k!==null&&(A[F]=null,w[F].disconnect(k))}W=null,Q=null,m.reset();for(let F in d)delete d[F];t.setRenderTarget(M),f=null,p=null,l=null,s=null,x=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(F){h=F},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return l===null&&g&&(l=new XRWebGLBinding(s,e)),l},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",it),s.addEventListener("inputsourceschange",mt),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,gt=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=y.stencil?Ms:os,gt=y.stencil?vs:ci);let Nt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};l=this.getBinding(),p=l.createProjectionLayer(Nt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Tn(p.textureWidth,p.textureHeight,{format:Ke,type:Mn,depthTexture:new nr(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Tn(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(F){for(let k=0;k<F.removed.length;k++){let tt=F.removed[k],gt=A.indexOf(tt);gt>=0&&(A[gt]=null,w[gt].disconnect(tt))}for(let k=0;k<F.added.length;k++){let tt=F.added[k],gt=A.indexOf(tt);if(gt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=A.length){A.push(tt),gt=Nt;break}else if(A[Nt]===null){A[Nt]=tt,gt=Nt;break}if(gt===-1)break}let ft=w[gt];ft&&ft.connect(tt)}}let at=new L,wt=new L;function Ct(F,k,tt){at.setFromMatrixPosition(k.matrixWorld),wt.setFromMatrixPosition(tt.matrixWorld);let gt=at.distanceTo(wt),ft=k.projectionMatrix.elements,Nt=tt.projectionMatrix.elements,Pt=ft[14]/(ft[10]-1),C=ft[14]/(ft[10]+1),dt=(ft[9]+1)/ft[5],D=(ft[9]-1)/ft[5],B=(ft[8]-1)/ft[0],V=(Nt[8]+1)/Nt[0],X=Pt*B,K=Pt*V,et=gt/(-B+V),vt=et*-B;if(k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(vt),F.translateZ(et),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ft[10]===-1)F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let xt=Pt+et,T=C+et,v=X-vt,O=K+(gt-vt),z=dt*C/T*xt,st=D*C/T*xt;F.projectionMatrix.makePerspective(v,O,z,st,xt,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Ot(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let k=F.near,tt=F.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(tt=m.depthFar)),U.near=S.near=b.near=k,U.far=S.far=b.far=tt,(W!==U.near||Q!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,Q=U.far),U.layers.mask=F.layers.mask|6,b.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;let gt=F.parent,ft=U.cameras;Ot(U,gt);for(let Nt=0;Nt<ft.length;Nt++)Ot(ft[Nt],gt);ft.length===2?Ct(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),lt(F,U,gt)};function lt(F,k,tt){tt===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy(tt.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=as*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(F){c=F,p!==null&&(p.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(F){return d[F]};let G=null;function j(F,k){if(u=k.getViewerPose(h||o),_=k,u!==null){let tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let gt=!1;tt.length!==U.cameras.length&&(U.cameras.length=0,gt=!0);for(let C=0;C<tt.length;C++){let dt=tt[C],D=null;if(f!==null)D=f.getViewport(dt);else{let V=l.getViewSubImage(p,dt);D=V.viewport,C===0&&(t.setRenderTargetTextures(x,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(x))}let B=P[C];B===void 0&&(B=new We,B.layers.enable(C),B.viewport=new re,P[C]=B),B.matrix.fromArray(dt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(dt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(D.x,D.y,D.width,D.height),C===0&&(U.matrix.copy(B.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),gt===!0&&U.cameras.push(B)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){l=n.getBinding();let C=l.getDepthInformation(tt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(ft&&ft.includes("camera-access")&&g){t.state.unbindTexture(),l=n.getBinding();for(let C=0;C<tt.length;C++){let dt=tt[C].camera;if(dt){let D=d[dt];D||(D=new ir,d[dt]=D);let B=l.getCameraImage(dt);D.sourceTexture=B}}}}for(let tt=0;tt<w.length;tt++){let gt=A[tt],ft=w[tt];gt!==null&&ft!==void 0&&ft.update(gt,k,h||o)}G&&G(F,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let ht=new ou;ht.setAnimationLoop(j),this.setAnimationLoop=function(F){G=F},this.dispose=function(){}}},Oi=new un,m0=new ae;function g0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,kl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),l(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,M):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=t.get(d),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(Oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let x=M.program;n.uniformBlockBinding(y,x)}function h(y,M){let x=s[y.id];x===void 0&&(_(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(y,w);let A=t.render.frame;r[y.id]!==A&&(p(y),r[y.id]=A)}function u(y){let M=l();y.__bindingPointIndex=M;let x=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function l(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let M=s[y.id],x=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=x.length;A<R;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=I.length;b<S;b++){let P=I[b];if(f(P,A,b,w)===!0){let U=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],Q=0;for(let ot=0;ot<W.length;ot++){let it=W[ot],mt=g(it);typeof it=="number"||typeof it=="boolean"?(P.__data[0]=it,i.bufferSubData(i.UNIFORM_BUFFER,U+Q,P.__data)):it.isMatrix3?(P.__data[0]=it.elements[0],P.__data[1]=it.elements[1],P.__data[2]=it.elements[2],P.__data[3]=0,P.__data[4]=it.elements[3],P.__data[5]=it.elements[4],P.__data[6]=it.elements[5],P.__data[7]=0,P.__data[8]=it.elements[6],P.__data[9]=it.elements[7],P.__data[10]=it.elements[8],P.__data[11]=0):(it.toArray(P.__data,Q),Q+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,x,w){let A=y.value,R=M+"_"+x;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{let I=w[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return w[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(y){let M=y.uniforms,x=0,w=16;for(let R=0,I=M.length;R<I;R++){let b=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,P=b.length;S<P;S++){let U=b[S],W=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,ot=W.length;Q<ot;Q++){let it=W[Q],mt=g(it),at=x%w,wt=at%mt.boundary,Ct=at+wt;x+=wt,Ct!==0&&w-Ct<mt.storage&&(x+=w-Ct),U.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=mt.storage}}}let A=x%w;return A>0&&(x+=w-A),y.__size=x,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:h,dispose:d}}var Ra=class{constructor(t={}){let{canvas:e=Rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,d=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Ge;let A=0,R=0,I=null,b=-1,S=null,P=new re,U=new re,W=null,Q=new Xt(0),ot=0,it=e.width,mt=e.height,at=1,wt=null,Ct=null,Ot=new re(0,0,it,mt),lt=new re(0,0,it,mt),G=!1,j=new ds,ht=!1,F=!1,k=new ae,tt=new L,gt=new re,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Pt(){return I===null?at:1}let C=n;function dt(E,H){return e.getContext(E,H)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",St,!1),C===null){let H="webgl2";if(C=dt(H,E),C===null)throw dt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let D,B,V,X,K,et,vt,xt,T,v,O,z,st,q,Rt,_t,$,Y,J,ut,bt,Mt,ct,It;function N(){D=new Fm(C),D.init(),Mt=new d0(C,D),B=new Rm(C,D,t,Mt),V=new h0(C,D),B.reversedDepthBuffer&&p&&V.buffers.depth.setReversed(!0),X=new Bm(C),K=new Kg,et=new u0(C,D,V,K,B,Mt,X),vt=new Im(x),xt=new Um(x),T=new Gd(C),ct=new Tm(C,T),v=new Nm(C,T,X,ct),O=new km(C,v,T,X),J=new zm(C,B,et),_t=new Cm(K),z=new $g(x,vt,xt,D,B,ct,_t),st=new g0(x,K),q=new jg,Rt=new r0(D),Y=new wm(x,vt,xt,V,O,f,c),$=new l0(x,O,B),It=new _0(C,X,B,V),ut=new Am(C,D,X),bt=new Om(C,D,X),X.programs=z.programs,x.capabilities=B,x.extensions=D,x.properties=K,x.renderLists=q,x.shadowMap=$,x.state=V,x.info=X}N();let yt=new sc(x,C);this.xr=yt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=D.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=D.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(it,mt,!1))},this.getSize=function(E){return E.set(it,mt)},this.setSize=function(E,H,nt=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=E,mt=H,e.width=Math.floor(E*at),e.height=Math.floor(H*at),nt===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(it*at,mt*at).floor()},this.setDrawingBufferSize=function(E,H,nt){it=E,mt=H,at=nt,e.width=Math.floor(E*nt),e.height=Math.floor(H*nt),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Ot)},this.setViewport=function(E,H,nt,rt){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,H,nt,rt),V.viewport(P.copy(Ot).multiplyScalar(at).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,H,nt,rt){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,H,nt,rt),V.scissor(U.copy(lt).multiplyScalar(at).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(E){V.setScissorTest(G=E)},this.setOpaqueSort=function(E){wt=E},this.setTransparentSort=function(E){Ct=E},this.getClearColor=function(E){return E.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,nt=!0){let rt=0;if(E){let Z=!1;if(I!==null){let Et=I.texture.format;Z=Et===Jo||Et===Zo||Et===Yo}if(Z){let Et=I.texture.type,Lt=Et===Mn||Et===ci||Et===xs||Et===vs||Et===Wo||Et===Xo,zt=Y.getClearColor(),Ft=Y.getClearAlpha(),kt=zt.r,Gt=zt.g,Vt=zt.b;Lt?(_[0]=kt,_[1]=Gt,_[2]=Vt,_[3]=Ft,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=kt,g[1]=Gt,g[2]=Vt,g[3]=Ft,C.clearBufferiv(C.COLOR,0,g))}else rt|=C.COLOR_BUFFER_BIT}H&&(rt|=C.DEPTH_BUFFER_BIT),nt&&(rt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Y.dispose(),q.dispose(),Rt.dispose(),K.dispose(),vt.dispose(),xt.dispose(),O.dispose(),ct.dispose(),It.dispose(),z.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",ve),yt.removeEventListener("sessionend",ce),qt.stop()};function Tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=X.autoReset,H=$.enabled,nt=$.autoUpdate,rt=$.needsUpdate,Z=$.type;N(),X.autoReset=E,$.enabled=H,$.autoUpdate=nt,$.needsUpdate=rt,$.type=Z}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){let H=E.target;H.removeEventListener("dispose",pt),Bt(H)}function Bt(E){Ht(E),K.remove(E)}function Ht(E){let H=K.get(E).programs;H!==void 0&&(H.forEach(function(nt){z.releaseProgram(nt)}),E.isShaderMaterial&&z.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,nt,rt,Z,Et){H===null&&(H=ft);let Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=qn(E,H,nt,rt,Z);V.setMaterial(rt,Lt);let Ft=nt.index,kt=1;if(rt.wireframe===!0){if(Ft=v.getWireframeAttribute(nt),Ft===void 0)return;kt=2}let Gt=nt.drawRange,Vt=nt.attributes.position,Jt=Gt.start*kt,ne=(Gt.start+Gt.count)*kt;Et!==null&&(Jt=Math.max(Jt,Et.start*kt),ne=Math.min(ne,(Et.start+Et.count)*kt)),Ft!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Ft.count)):Vt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Vt.count));let xe=ne-Jt;if(xe<0||xe===1/0)return;ct.setup(Z,rt,zt,nt,Ft);let he,le=ut;if(Ft!==null&&(he=T.get(Ft),le=bt,le.setIndex(he)),Z.isMesh)rt.wireframe===!0?(V.setLineWidth(rt.wireframeLinewidth*Pt()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(Z.isLine){let Wt=rt.linewidth;Wt===void 0&&(Wt=1),V.setLineWidth(Wt*Pt()),Z.isLineSegments?le.setMode(C.LINES):Z.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else Z.isPoints?le.setMode(C.POINTS):Z.isSprite&&le.setMode(C.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(D.get("WEBGL_multi_draw"))le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Wt=Z._multiDrawStarts,fe=Z._multiDrawCounts,ie=Z._multiDrawCount,je=Ft?T.get(Ft).bytesPerElement:1,Gi=K.get(rt).currentProgram.getUniforms();for(let tn=0;tn<ie;tn++)Gi.setValue(C,"_gl_DrawID",tn),le.render(Wt[tn]/je,fe[tn])}else if(Z.isInstancedMesh)le.renderInstances(Jt,xe,Z.count);else if(nt.isInstancedBufferGeometry){let Wt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,fe=Math.min(nt.instanceCount,Wt);le.renderInstances(Jt,xe,fe)}else le.render(Jt,xe)};function jt(E,H,nt){E.transparent===!0&&E.side===Xe&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,Me(E,H,nt),E.side=On,E.needsUpdate=!0,Me(E,H,nt),E.side=Xe):Me(E,H,nt)}this.compile=function(E,H,nt=null){nt===null&&(nt=E),d=Rt.get(nt),d.init(H),M.push(d),nt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),E!==nt&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),d.setupLights();let rt=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){let zt=Et[Lt];jt(zt,nt,Z),rt.add(zt)}else jt(Et,nt,Z),rt.add(Et)}),d=M.pop(),rt},this.compileAsync=function(E,H,nt=null){let rt=this.compile(E,H,nt);return new Promise(Z=>{function Et(){if(rt.forEach(function(Lt){K.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){Z(E);return}setTimeout(Et,10)}D.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Kt=null;function be(E){Kt&&Kt(E)}function ve(){qt.stop()}function ce(){qt.start()}let qt=new ou;qt.setAnimationLoop(be),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(E){Kt=E,yt.setAnimationLoop(E),E===null?qt.stop():qt.start()},yt.addEventListener("sessionstart",ve),yt.addEventListener("sessionend",ce),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(H),H=yt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,I),d=Rt.get(E,M.length),d.init(H),M.push(d),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(k,_n,H.reversedDepth),F=this.localClippingEnabled,ht=_t.init(this.clippingPlanes,F),m=q.get(E,y.length),m.init(),y.push(m),yt.enabled===!0&&yt.isPresenting===!0){let Et=x.xr.getDepthSensingMesh();Et!==null&&ee(Et,H,-1/0,x.sortObjects)}ee(E,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(wt,Ct),Nt=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Nt&&Y.addToRenderList(m,E),this.info.render.frame++,ht===!0&&_t.beginShadows();let nt=d.state.shadowsArray;$.render(nt,E,H),ht===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let rt=m.opaque,Z=m.transmissive;if(d.setupLights(),H.isArrayCamera){let Et=H.cameras;if(Z.length>0)for(let Lt=0,zt=Et.length;Lt<zt;Lt++){let Ft=Et[Lt];de(rt,Z,E,Ft)}Nt&&Y.render(E);for(let Lt=0,zt=Et.length;Lt<zt;Lt++){let Ft=Et[Lt];Ae(m,E,Ft,Ft.viewport)}}else Z.length>0&&de(rt,Z,E,H),Nt&&Y.render(E),Ae(m,E,H);I!==null&&R===0&&(et.updateMultisampleRenderTarget(I),et.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,H),ct.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],ht===!0&&_t.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ee(E,H,nt,rt){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)nt=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){rt&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);let Lt=O.update(E),zt=E.material;zt.visible&&m.push(E,Lt,zt,nt,gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){let Lt=O.update(E),zt=E.material;if(rt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),gt.copy(Lt.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(k)),Array.isArray(zt)){let Ft=Lt.groups;for(let kt=0,Gt=Ft.length;kt<Gt;kt++){let Vt=Ft[kt],Jt=zt[Vt.materialIndex];Jt&&Jt.visible&&m.push(E,Lt,Jt,nt,gt.z,Vt)}}else zt.visible&&m.push(E,Lt,zt,nt,gt.z,null)}}let Et=E.children;for(let Lt=0,zt=Et.length;Lt<zt;Lt++)ee(Et[Lt],H,nt,rt)}function Ae(E,H,nt,rt){let Z=E.opaque,Et=E.transmissive,Lt=E.transparent;d.setupLightsView(nt),ht===!0&&_t.setGlobalState(x.clippingPlanes,nt),rt&&V.viewport(P.copy(rt)),Z.length>0&&Re(Z,H,nt),Et.length>0&&Re(Et,H,nt),Lt.length>0&&Re(Lt,H,nt),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function de(E,H,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[rt.id]===void 0&&(d.state.transmissionRenderTarget[rt.id]=new Tn(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?ys:Mn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let Et=d.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||P;Et.setSize(Lt.z*x.transmissionResolutionScale,Lt.w*x.transmissionResolutionScale);let zt=x.getRenderTarget(),Ft=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(Et),x.getClearColor(Q),ot=x.getClearAlpha(),ot<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&Y.render(nt);let Gt=x.toneMapping;x.toneMapping=Hn;let Vt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),d.setupLightsView(rt),ht===!0&&_t.setGlobalState(x.clippingPlanes,rt),Re(E,nt,rt),et.updateMultisampleRenderTarget(Et),et.updateRenderTargetMipmap(Et),D.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ne=0,xe=H.length;ne<xe;ne++){let he=H[ne],le=he.object,Wt=he.geometry,fe=he.material,ie=he.group;if(fe.side===Xe&&le.layers.test(rt.layers)){let je=fe.side;fe.side=Ne,fe.needsUpdate=!0,De(le,nt,rt,Wt,fe,ie),fe.side=je,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(et.updateMultisampleRenderTarget(Et),et.updateRenderTargetMipmap(Et))}x.setRenderTarget(zt,Ft,kt),x.setClearColor(Q,ot),Vt!==void 0&&(rt.viewport=Vt),x.toneMapping=Gt}function Re(E,H,nt){let rt=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Et=E.length;Z<Et;Z++){let Lt=E[Z],zt=Lt.object,Ft=Lt.geometry,kt=Lt.group,Gt=Lt.material;Gt.allowOverride===!0&&rt!==null&&(Gt=rt),zt.layers.test(nt.layers)&&De(zt,H,nt,Ft,Gt,kt)}}function De(E,H,nt,rt,Z,Et){E.onBeforeRender(x,H,nt,rt,Z,Et),E.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(x,H,nt,rt,E,Et),Z.transparent===!0&&Z.side===Xe&&Z.forceSinglePass===!1?(Z.side=Ne,Z.needsUpdate=!0,x.renderBufferDirect(nt,H,rt,Z,E,Et),Z.side=On,Z.needsUpdate=!0,x.renderBufferDirect(nt,H,rt,Z,E,Et),Z.side=Xe):x.renderBufferDirect(nt,H,rt,Z,E,Et),E.onAfterRender(x,H,nt,rt,Z,Et)}function Me(E,H,nt){H.isScene!==!0&&(H=ft);let rt=K.get(E),Z=d.state.lights,Et=d.state.shadowsArray,Lt=Z.state.version,zt=z.getParameters(E,Z.state,Et,H,nt),Ft=z.getProgramCacheKey(zt),kt=rt.programs;rt.environment=E.isMeshStandardMaterial?H.environment:null,rt.fog=H.fog,rt.envMap=(E.isMeshStandardMaterial?xt:vt).get(E.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",pt),kt=new Map,rt.programs=kt);let Gt=kt.get(Ft);if(Gt!==void 0){if(rt.currentProgram===Gt&&rt.lightsStateVersion===Lt)return Fe(E,zt),Gt}else zt.uniforms=z.getUniforms(E),E.onBeforeCompile(zt,x),Gt=z.acquireProgram(zt,Ft),kt.set(Ft,Gt),rt.uniforms=zt.uniforms;let Vt=rt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=_t.uniform),Fe(E,zt),rt.needsLights=ui(E),rt.lightsStateVersion=Lt,rt.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Gt,rt.uniformsList=null,Gt}function Le(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Es.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Fe(E,H){let nt=K.get(E);nt.outputColorSpace=H.outputColorSpace,nt.batching=H.batching,nt.batchingColor=H.batchingColor,nt.instancing=H.instancing,nt.instancingColor=H.instancingColor,nt.instancingMorph=H.instancingMorph,nt.skinning=H.skinning,nt.morphTargets=H.morphTargets,nt.morphNormals=H.morphNormals,nt.morphColors=H.morphColors,nt.morphTargetsCount=H.morphTargetsCount,nt.numClippingPlanes=H.numClippingPlanes,nt.numIntersection=H.numClipIntersection,nt.vertexAlphas=H.vertexAlphas,nt.vertexTangents=H.vertexTangents,nt.toneMapping=H.toneMapping}function qn(E,H,nt,rt,Z){H.isScene!==!0&&(H=ft),et.resetTextureUnits();let Et=H.fog,Lt=rt.isMeshStandardMaterial?H.environment:null,zt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Si,Ft=(rt.isMeshStandardMaterial?xt:vt).get(rt.envMap||Lt),kt=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Gt=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Vt=!!nt.morphAttributes.position,Jt=!!nt.morphAttributes.normal,ne=!!nt.morphAttributes.color,xe=Hn;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=x.toneMapping);let he=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,le=he!==void 0?he.length:0,Wt=K.get(rt),fe=d.state.lights;if(ht===!0&&(F===!0||E!==S)){let Ve=E===S&&rt.id===b;_t.setState(rt,E,Ve)}let ie=!1;rt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==fe.state.version||Wt.outputColorSpace!==zt||Z.isBatchedMesh&&Wt.batching===!1||!Z.isBatchedMesh&&Wt.batching===!0||Z.isBatchedMesh&&Wt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Wt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Z.isInstancedMesh&&Wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Wt.instancingMorph===!1&&Z.morphTexture!==null||Wt.envMap!==Ft||rt.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==kt||Wt.vertexTangents!==Gt||Wt.morphTargets!==Vt||Wt.morphNormals!==Jt||Wt.morphColors!==ne||Wt.toneMapping!==xe||Wt.morphTargetsCount!==le)&&(ie=!0):(ie=!0,Wt.__version=rt.version);let je=Wt.currentProgram;ie===!0&&(je=Me(rt,H,Z));let Gi=!1,tn=!1,Ds=!1,pe=je.getUniforms(),ln=Wt.uniforms;if(V.useProgram(je.program)&&(Gi=!0,tn=!0,Ds=!0),rt.id!==b&&(b=rt.id,tn=!0),Gi||S!==E){V.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pe.setValue(C,"projectionMatrix",E.projectionMatrix),pe.setValue(C,"viewMatrix",E.matrixWorldInverse);let Ye=pe.map.cameraPosition;Ye!==void 0&&Ye.setValue(C,tt.setFromMatrixPosition(E.matrixWorld)),B.logarithmicDepthBuffer&&pe.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&pe.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,tn=!0,Ds=!0)}if(Z.isSkinnedMesh){pe.setOptional(C,Z,"bindMatrix"),pe.setOptional(C,Z,"bindMatrixInverse");let Ve=Z.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),pe.setValue(C,"boneTexture",Ve.boneTexture,et))}Z.isBatchedMesh&&(pe.setOptional(C,Z,"batchingTexture"),pe.setValue(C,"batchingTexture",Z._matricesTexture,et),pe.setOptional(C,Z,"batchingIdTexture"),pe.setValue(C,"batchingIdTexture",Z._indirectTexture,et),pe.setOptional(C,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pe.setValue(C,"batchingColorTexture",Z._colorsTexture,et));let cn=nt.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&J.update(Z,nt,je),(tn||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,pe.setValue(C,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(ln.envMap.value=Ft,ln.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&H.environment!==null&&(ln.envMapIntensity.value=H.environmentIntensity),tn&&(pe.setValue(C,"toneMappingExposure",x.toneMappingExposure),Wt.needsLights&&Is(ln,Ds),Et&&rt.fog===!0&&st.refreshFogUniforms(ln,Et),st.refreshMaterialUniforms(ln,rt,at,mt,d.state.transmissionRenderTarget[E.id]),Es.upload(C,Le(Wt),ln,et)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Es.upload(C,Le(Wt),ln,et),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&pe.setValue(C,"center",Z.center),pe.setValue(C,"modelViewMatrix",Z.modelViewMatrix),pe.setValue(C,"normalMatrix",Z.normalMatrix),pe.setValue(C,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let Ve=rt.uniformsGroups;for(let Ye=0,Ba=Ve.length;Ye<Ba;Ye++){let fi=Ve[Ye];It.update(fi,je),It.bind(fi,je)}}return je}function Is(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function ui(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,H,nt){let rt=K.get(E);rt.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=H,K.get(E.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:nt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let nt=K.get(E);nt.__webglFramebuffer=H,nt.__useDefaultFramebuffer=H===void 0};let Yn=C.createFramebuffer();this.setRenderTarget=function(E,H=0,nt=0){I=E,A=H,R=nt;let rt=!0,Z=null,Et=!1,Lt=!1;if(E){let Ft=K.get(E);if(Ft.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(C.FRAMEBUFFER,null),rt=!1;else if(Ft.__webglFramebuffer===void 0)et.setupRenderTarget(E);else if(Ft.__hasExternalTextures)et.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Vt=E.depthTexture;if(Ft.__boundDepthTexture!==Vt){if(Vt!==null&&K.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(E)}}let kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Lt=!0);let Gt=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[H])?Z=Gt[H][nt]:Z=Gt[H],Et=!0):E.samples>0&&et.useMultisampledRTT(E)===!1?Z=K.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?Z=Gt[nt]:Z=Gt,P.copy(E.viewport),U.copy(E.scissor),W=E.scissorTest}else P.copy(Ot).multiplyScalar(at).floor(),U.copy(lt).multiplyScalar(at).floor(),W=G;if(nt!==0&&(Z=Yn),V.bindFramebuffer(C.FRAMEBUFFER,Z)&&rt&&V.drawBuffers(E,Z),V.viewport(P),V.scissor(U),V.setScissorTest(W),Et){let Ft=K.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ft.__webglTexture,nt)}else if(Lt){let Ft=H;for(let kt=0;kt<E.textures.length;kt++){let Gt=K.get(E.textures[kt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,nt,Ft)}}else if(E!==null&&nt!==0){let Ft=K.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ft.__webglTexture,nt)}b=-1},this.readRenderTargetPixels=function(E,H,nt,rt,Z,Et,Lt,zt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){V.bindFramebuffer(C.FRAMEBUFFER,Ft);try{let kt=E.textures[zt],Gt=kt.format,Vt=kt.type;if(!B.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-rt&&nt>=0&&nt<=E.height-Z&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+zt),C.readPixels(H,nt,rt,Z,Mt.convert(Gt),Mt.convert(Vt),Et))}finally{let kt=I!==null?K.get(I).__webglFramebuffer:null;V.bindFramebuffer(C.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,H,nt,rt,Z,Et,Lt,zt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(H>=0&&H<=E.width-rt&&nt>=0&&nt<=E.height-Z){V.bindFramebuffer(C.FRAMEBUFFER,Ft);let kt=E.textures[zt],Gt=kt.format,Vt=kt.type;if(!B.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.bufferData(C.PIXEL_PACK_BUFFER,Et.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+zt),C.readPixels(H,nt,rt,Z,Mt.convert(Gt),Mt.convert(Vt),0);let ne=I!==null?K.get(I).__webglFramebuffer:null;V.bindFramebuffer(C.FRAMEBUFFER,ne);let xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ch(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Et),C.deleteBuffer(Jt),C.deleteSync(xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,nt=0){let rt=Math.pow(2,-nt),Z=Math.floor(E.image.width*rt),Et=Math.floor(E.image.height*rt),Lt=H!==null?H.x:0,zt=H!==null?H.y:0;et.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,nt,0,0,Lt,zt,Z,Et),V.unbindTexture()};let di=C.createFramebuffer(),Ps=C.createFramebuffer();this.copyTextureToTexture=function(E,H,nt=null,rt=null,Z=0,Et=null){Et===null&&(Z!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Z,Z=0):Et=0);let Lt,zt,Ft,kt,Gt,Vt,Jt,ne,xe,he=E.isCompressedTexture?E.mipmaps[Et]:E.image;if(nt!==null)Lt=nt.max.x-nt.min.x,zt=nt.max.y-nt.min.y,Ft=nt.isBox3?nt.max.z-nt.min.z:1,kt=nt.min.x,Gt=nt.min.y,Vt=nt.isBox3?nt.min.z:0;else{let cn=Math.pow(2,-Z);Lt=Math.floor(he.width*cn),zt=Math.floor(he.height*cn),E.isDataArrayTexture?Ft=he.depth:E.isData3DTexture?Ft=Math.floor(he.depth*cn):Ft=1,kt=0,Gt=0,Vt=0}rt!==null?(Jt=rt.x,ne=rt.y,xe=rt.z):(Jt=0,ne=0,xe=0);let le=Mt.convert(H.format),Wt=Mt.convert(H.type),fe;H.isData3DTexture?(et.setTexture3D(H,0),fe=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),fe=C.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),fe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let ie=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Gi=C.getParameter(C.UNPACK_SKIP_PIXELS),tn=C.getParameter(C.UNPACK_SKIP_ROWS),Ds=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,he.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Vt);let pe=E.isDataArrayTexture||E.isData3DTexture,ln=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let cn=K.get(E),Ve=K.get(H),Ye=K.get(cn.__renderTarget),Ba=K.get(Ve.__renderTarget);V.bindFramebuffer(C.READ_FRAMEBUFFER,Ye.__webglFramebuffer),V.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let fi=0;fi<Ft;fi++)pe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,K.get(E).__webglTexture,Z,Vt+fi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,K.get(H).__webglTexture,Et,xe+fi)),C.blitFramebuffer(kt,Gt,Lt,zt,Jt,ne,Lt,zt,C.DEPTH_BUFFER_BIT,C.NEAREST);V.bindFramebuffer(C.READ_FRAMEBUFFER,null),V.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||K.has(E)){let cn=K.get(E),Ve=K.get(H);V.bindFramebuffer(C.READ_FRAMEBUFFER,di),V.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ps);for(let Ye=0;Ye<Ft;Ye++)pe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,cn.__webglTexture,Z,Vt+Ye):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,cn.__webglTexture,Z),ln?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ve.__webglTexture,Et,xe+Ye):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ve.__webglTexture,Et),Z!==0?C.blitFramebuffer(kt,Gt,Lt,zt,Jt,ne,Lt,zt,C.COLOR_BUFFER_BIT,C.NEAREST):ln?C.copyTexSubImage3D(fe,Et,Jt,ne,xe+Ye,kt,Gt,Lt,zt):C.copyTexSubImage2D(fe,Et,Jt,ne,kt,Gt,Lt,zt);V.bindFramebuffer(C.READ_FRAMEBUFFER,null),V.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ln?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(fe,Et,Jt,ne,xe,Lt,zt,Ft,le,Wt,he.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(fe,Et,Jt,ne,xe,Lt,zt,Ft,le,he.data):C.texSubImage3D(fe,Et,Jt,ne,xe,Lt,zt,Ft,le,Wt,he):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Et,Jt,ne,Lt,zt,le,Wt,he.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Et,Jt,ne,he.width,he.height,le,he.data):C.texSubImage2D(C.TEXTURE_2D,Et,Jt,ne,Lt,zt,le,Wt,he);C.pixelStorei(C.UNPACK_ROW_LENGTH,ie),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Gi),C.pixelStorei(C.UNPACK_SKIP_ROWS,tn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ds),Et===0&&H.generateMipmaps&&C.generateMipmap(fe),V.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&et.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?et.setTextureCube(E,0):E.isData3DTexture?et.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?et.setTexture2DArray(E,0):et.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,V.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ia=class extends Ei{constructor(){super();let t=new ii;t.deleteAttribute("uv");let e=new fn({side:Ne}),n=new fn,s=new Mr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new se(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wi(t,n,6),a=new we;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new se(t,As(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new se(t,As(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new se(t,As(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let l=new se(t,As(43));l.position.set(-.462,8.89,14.52),l.scale.set(4.38,5.441,.088),this.add(l);let p=new se(t,As(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let f=new se(t,As(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function As(i){return new xr({color:0,emissive:16777215,emissiveIntensity:i})}var _e=new wn,Pa=new L,uu=new At,du=new At,fu=new At,Da=class{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){let t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let c=0;c<s;c++){let h=1,u=3*c,l=3*c+1,p=3*c+2;t&&(u=t.getX(u),l=t.getX(l),p=t.getX(p)),n&&(h=n.getX(u)+n.getX(l)+n.getX(p)),_e.a.fromBufferAttribute(e,u),_e.b.fromBufferAttribute(e,l),_e.c.fromBufferAttribute(e,p),h*=_e.getArea(),r[c]=h}let o=new Float32Array(s),a=0;for(let c=0;c<s;c++)a+=r[c],o[c]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){let r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){let t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){let e=this.distribution,n=0,s=e.length-1,r=-1;for(;n<=s;){let o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let c=this.indexAttribute,h=t*3,u=t*3+1,l=t*3+2;return c&&(h=c.getX(h),u=c.getX(u),l=c.getX(l)),_e.a.fromBufferAttribute(this.positionAttribute,h),_e.b.fromBufferAttribute(this.positionAttribute,u),_e.c.fromBufferAttribute(this.positionAttribute,l),e.set(0,0,0).addScaledVector(_e.a,o).addScaledVector(_e.b,a).addScaledVector(_e.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(_e.a.fromBufferAttribute(this.normalAttribute,h),_e.b.fromBufferAttribute(this.normalAttribute,u),_e.c.fromBufferAttribute(this.normalAttribute,l),n.set(0,0,0).addScaledVector(_e.a,o).addScaledVector(_e.b,a).addScaledVector(_e.c,1-(o+a)).normalize()):_e.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(_e.a.fromBufferAttribute(this.colorAttribute,h),_e.b.fromBufferAttribute(this.colorAttribute,u),_e.c.fromBufferAttribute(this.colorAttribute,l),Pa.set(0,0,0).addScaledVector(_e.a,o).addScaledVector(_e.b,a).addScaledVector(_e.c,1-(o+a)),s.r=Pa.x,s.g=Pa.y,s.b=Pa.z),r!==void 0&&this.uvAttribute!==void 0&&(uu.fromBufferAttribute(this.uvAttribute,h),du.fromBufferAttribute(this.uvAttribute,u),fu.fromBufferAttribute(this.uvAttribute,l),r.set(0,0).addScaledVector(uu,o).addScaledVector(du,a).addScaledVector(fu,1-(o+a))),this}};var bn=Math.PI*2,x0=new L(0,1,0),ac=new Set(["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"]),lc=new Map,Pr=(i,t,e)=>Math.max(t,Math.min(e,i)),Ir=i=>new L(...i),ki=(i,t)=>new Xt(i).multiplyScalar(t),an=(i,t,e)=>new Xt(i).lerp(new Xt(t),e),Se=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function cc(i){let t=[],e=[],n=[],s=[];for(let o of i){let a=o,c=t.length/3;if(t.push(...a.attributes.position.array),e.push(...a.attributes.normal.array),a.attributes.uv&&n.push(...a.attributes.uv.array),a.index)for(let h of a.index.array)s.push(h+c);else for(let h=0;h<a.attributes.position.count;h++)s.push(c+h);o.dispose()}let r=new Te;return r.setAttribute("position",new Zt(t,3)),r.setAttribute("normal",new Zt(e,3)),n.length===t.length/3*2&&r.setAttribute("uv",new Zt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function y0(i,t,e=.72,n=.78){let s=i+":"+e+":"+n;if(lc.has(s))return lc.get(s).clone();let r=t.map(([g,m])=>new L(g,m,0));r.reduce((g,m,d)=>g+m.x*r[(d+1)%r.length].y-r[(d+1)%r.length].x*m.y,0)<0&&r.reverse();let a=new vn(r,!0,"catmullrom",.35),c=96,h=40,u=[],l=[],p=[];for(let g=0;g<=h;g++){let m=g/h*Math.PI,d=Math.pow(Math.sin(m),n);for(let y=0;y<=c;y++){let M=a.getPoint(y/c);if(u.push(M.x*d,M.y*d,e*Math.cos(m)),l.push(y/c,g/h),y<c&&g<h){let x=g*(c+1)+y,w=x+c+1;p.push(x,w,x+1,w,w+1,x+1)}}}let f=new Te;f.setAttribute("position",new Zt(u,3)),f.setAttribute("uv",new Zt(l,2)),f.setIndex(p),f.computeVertexNormals();let _=f.attributes.normal;for(let g=0;g<=h;g++){let m=g*(c+1),d=m+c;if(g===0||g===h)for(let y=m;y<=d;y++)_.setXYZ(y,0,0,g===0?1:-1);else{let y=new L().fromBufferAttribute(_,m).add(new L().fromBufferAttribute(_,d)).normalize();_.setXYZ(m,y.x,y.y,y.z),_.setXYZ(d,y.x,y.y,y.z)}}return f.computeBoundingBox(),f.computeBoundingSphere(),lc.set(s,f),f.clone()}function hc(i){let t=(s=1,r=16)=>Array.from({length:r},(o,a)=>{let c=a/r*bn,h=Math.cos(c),u=Math.sin(c);return[Math.sign(h)*Math.abs(h)**s,Math.sign(u)*Math.abs(u)**s]}),e=s=>Array.from({length:s},(r,o)=>[Math.sin(o/s*bn),Math.cos(o/s*bn)]),n={dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.6,-.94],[0,-.98],[.66,-.94],[1.09,-.6],[1.17,-.08],[.93,.63],[.51,.95]],bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.3,.39],[.28,.87]],cloud:[[-1,-.58],[-1.28,-.05],[-1.04,.45],[-.62,.43],[-.47,.85],[0,1],[.52,.7],[.57,.34],[.97,.42],[1.28,-.05],[1.02,-.65],[.43,-.83],[-.36,-.82]],drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.5,.55],[.22,1.02]],arch:[[0,1],[-.65,.92],[-.96,.52],[-1,-.12],[-.99,-.71],[-.75,-.97],[-.36,-.94],[0,-.79],[.36,-.94],[.75,-.97],[.99,-.71],[1,-.12],[.96,.52],[.65,.92]],capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.5],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.5],[.75,.49],[.57,.97]],pebble:[[0,1],[-.66,.87],[-1.11,.23],[-1,-.49],[-.37,-.91],[.45,-.95],[1.08,-.45],[1.03,.27],[.55,.84]],triangle:[[0,1.04],[-.32,.76],[-.97,-.43],[-1,-.78],[-.78,-.94],[.76,-.94],[1,-.79],[.97,-.43],[.32,.76]],heart:[[0,.52],[-.42,.94],[-.86,.87],[-1,.42],[-.75,-.12],[0,-1],[.75,-.12],[1,.42],[.86,.87],[.42,.94]],ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.8],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],diamond:[[0,1.12],[-.28,.84],[-1,.11],[-.92,-.16],[0,-1.12],[.92,-.16],[1,.11],[.28,.84]],star:Array.from({length:10},(s,r)=>{let o=r/10*bn,a=r%2?.56:1.13;return[Math.sin(o)*a,Math.cos(o)*a]}),hexagon:e(6),roundedcube:t(.36),sphere:t(),sprout:t(),frog:t(),twin:t()};return n[i]||n.dumpling}function v0(i){let e=new Uint8Array(65536);for(let s=0;s<128;s++)for(let r=0;r<128;r++){let o=Se(r+s*128),a=i==="knit",c=i==="fabric",h=a?Math.sin(r*.72+Math.sin(s*.33)*1.8)*Math.cos(s*.33):c?Math.sin(r*1.57)*Math.sin(s*1.57):0,u=Pr(128+(o-.5)*(a?23:34)+h*(a?66:c?37:0),0,255),l=(s*128+r)*4;e[l]=e[l+1]=e[l+2]=u,e[l+3]=255}let n=new si(e,128,128,Ke);return n.needsUpdate=!0,n.wrapS=n.wrapT=rs,n.magFilter=sn,n.minFilter=Cn,n.generateMipmaps=!0,n.repeat.set(i==="knit"?3:5,i==="knit"?3:5),n}function pu(i={}){let t={shape:"dumpling",material:"plush",eyes:"softOval",expression:"calm",brows:"none",mouth:"none",eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:"auto",hair:"short-curly",...i};t.colors={body:"#299CF3",secondary:"#FFF0D5",eyes:"#172131",skin:"#EBC4A6",hair:"#523729",clothing:"#2C8D82",...i.colors};let e=new ge,n=new ge,s=new ge,r=new ge;e.name="avatar-body",n.name="head",s.name="torso",r.name="face",e.add(s,n),n.add(r);let o=[],a=[],c=[],h=[],u=new Map,l=new Map,p=new Map,f=Pr(Number(t.headScale)||1,.65,1.5),_=Pr(Number(t.bodyWidth)||1,.65,1.5),g=null,m=[],d={eyeX:.3,eyeY:.15,mouthY:-.21,size:1},y=[],M=(D,B)=>(u.has(D)||u.set(D,B()),u.get(D)),x=()=>M("sphere",()=>new zn(1,40,28));function w(D,B=t.material){let V=new Xt(D).getHexString(),X=V+":"+B;if(l.has(X))return l.get(X);let K={rubber:.71,plush:.97,micro:.93,clay:.89,skin:.8,hair:.74,fiber:.9,knit:.99,fabric:.95,eye:.26,nose:.48},et=new fn({color:D,roughness:K[B]??.88,metalness:0});return et.name=B,["eye","nose","hair"].includes(B)||(p.has(B)||p.set(B,v0(B)),et.bumpMap=p.get(B),et.bumpScale={rubber:.002,skin:.0017,micro:.004,plush:.0055,clay:.003,knit:.013,fabric:.005,fiber:.004}[B]??.003),l.set(X,et),et}let A=w(t.colors.body),R=w(t.colors.secondary),I=w(ki(t.colors.body,.24)),b=w(t.colors.eyes,t.eyes==="capsule"?"rubber":"eye"),S=w(ki(t.colors.eyes,.88),"nose");function P(D,B,V,X=[0,0,0],K=[1,1,1],et=!1,vt=""){let xt=new se(B,V);return xt.position.set(...X),xt.scale.set(...K),xt.castShadow=!0,xt.receiveShadow=!0,xt.name=vt,D.add(xt),et&&(xt.userData.surfaceMaterial=V.name,xt.userData.furLength=V.name==="micro"?.011:.024,o.push(xt)),xt}let U=(D,B,V,X=A,K=!0,et="")=>P(D,x(),X,B,V,K,et);function W(D,B,V,X,K=24,et=!1,vt=""){let xt=new vn(B.map(Ir),et,"catmullrom",.35);return P(D,new kn(xt,K,V,7,et),X,[0,0,0],[1,1,1],!1,vt)}function Q(D,B,V,X,K,et,vt=A,xt=!0){return P(D,M(B+":"+X,()=>y0(B,V,X)),vt,K,et,xt,B)}function ot(D,B,V,X,K=A,et=K,vt="paw"){let xt=new ge;xt.name=D<0?"arm-left":"arm-right",xt.position.set(...B),e.add(xt);let T=[D*.06,-V,.065];return U(xt,[D*.035,-V*.43,.015],[X,V*.64,X*.93],K,!0,"upper-arm"),U(xt,T,[X*1.05,X*.82,X*1.1],et,!0,vt),vt==="hand"&&U(xt,[-D*X*.79,-V+.025,.108],[X*.35,X*.49,X*.39],et,!1,"thumb"),a.push(xt),y.push(Ir(T).add(Ir(B))),xt}function it(D,B,V,X,K,et=A){let vt=new ge;return vt.name=D<0?"leg-left":"leg-right",vt.position.set(B,V,X),e.add(vt),U(vt,[0,0,0],K,et,!0,"hind-paw"),c.push(vt),vt}function mt(D,B,V,X,K=A,et=null){let vt=new ge;if(vt.position.set(...V),vt.rotation.z=-D*(B==="long"?.07:.12),n.add(vt),B==="round"||B==="long")U(vt,[0,0,0],X,K,!0,"outer-ear"),et&&U(vt,[0,0,X[2]*.75],[X[0]*.61,X[1]*.68,X[2]*.28],w(et,"skin"),!1,"inner-ear");else{let xt=[[0,1],[-.7,-.55],[-.52,-.9],[.55,-.85],[.72,-.51]];Q(vt,"tri-ear",xt,.36,[0,0,0],X,K,!0),et&&Q(vt,"tri-ear-inner",xt,.16,[0,-X[1]*.05,X[2]*.3],[X[0]*.56,X[1]*.64,X[2]*.37],w(et,"skin"),!1)}return vt}function at(D,B,V=A){g=new ge,g.name="tail",e.add(g);let X=W(g,D,B,V,36);return o.push(X),X.userData.surfaceMaterial=V.name,g}function wt(D,B,V=R){let X=U(n,D,B,V,!0,"muzzle");return m.push(X),X}t.shape==="human"?gt():ac.has(t.shape)?Nt(t.shape):tt(t.shape),t.shape==="human"||ac.has(t.shape)?n.scale.setScalar(f):n.scale.set(1,f,1),dt(),e.updateMatrixWorld(!0);let Ct=new ze().setFromObject(e),Ot=new ze().setFromObject(n),lt=D=>n.localToWorld(Ir(D)).toArray(),G={headTop:[n.position.x,Ot.max.y,n.position.z],face:lt([0,d.eyeY,Pt(0,d.eyeY)+.035]),neck:lt([0,d.neckY??-.58,.05]),handL:y[0]?.toArray()??[-.9,.65,.55],handR:y[1]?.toArray()??[.9,.65,.55],shoulderL:a[0]?.position.toArray()??[-1,.9,0],shoulderR:a[1]?.position.toArray()??[1,.9,0]},ht=new Pi(new L(n.position.x,Ct.max.y+2,n.position.z),new L(0,-1,0)).intersectObject(n,!0)[0];G.crown=ht?ht.point.toArray():G.headTop.slice(),G.mouth=lt([0,d.mouthY,Pt(0,d.mouthY)+.042]);let k=new Pi(new L(0,G.neck[1],Ct.max.z+2),new L(0,0,-1)).intersectObject(e,!0)[0];return G.neckFront=k?[0,G.neck[1],k.point.z+.022]:lt([0,d.neckY??-.58,Pt(0,d.neckY??-.58)+.025]),e.userData.anatomy=t.shape==="human"?"human":ac.has(t.shape)?"animal":"blob",e.userData.material=t.material,e.userData.restHeadPosition=n.position.clone(),{root:e,head:n,torso:s,face:r,eyeGroups:h,arms:a,legs:c,tail:g,anchors:G,height:Ct.max.y,width:Ct.max.x-Ct.min.x,surfaces:o};function tt(D){let V={cloud:[1,.96,.79],capsule:[1.03,.91,.85],sphere:[1.04,1.04,.96],roundedcube:[1.05,1.02,1.03],triangle:[1.15,1.07,.98],star:[1.11,1.06,.96],heart:[1.16,1.04,1],sprout:[1.01,.95,1],frog:[1.08,.79,.96],twin:[.88,.98,.95]}[D]||[1.05,1.03,1];V[0]*=_;let X=Q(n,"blob-"+D,hc(D),.75,[0,0,0],V,A,!0);m=[X],X.geometry.computeBoundingBox();let K=X.geometry.boundingBox.min.y*V[1],et=["feet","both"].includes(t.limbs);if(n.position.y=-K*f+(et?.22:.035),d={eyeX:.3*_,eyeY:D==="cloud"?.02:.13,mouthY:-.23,size:1,neckY:K*.47},["hands","both"].includes(t.limbs)||t.accessories?.prop&&t.accessories.prop!=="none"||["work","flowers","magic","camera","drink","read","wave"].includes(t.action))for(let xt of[-1,1])ot(xt,[xt*1.03*_,n.position.y-.1,.1],.4,.15,A,A,"mitten");if(et)for(let xt of[-1,1])it(xt,xt*.46*_,.13,.12,[.21,.13,.28]);if(D==="sprout"){W(n,[[0,.88,0],[0,1.16,.015],[.03,1.26,0]],.026,w(ki(t.colors.body,.67)),16);for(let xt of[-1,1]){let T=U(n,[xt*.24,1.22,0],[.29,.12,.09],w(an(t.colors.body,"#8CB966",.46)),!0,"leaf");T.rotation.z=xt*.35}}if(D==="frog"){for(let xt of[-1,1])m.push(U(n,[xt*.43*_,.72,.03],[.265,.3,.29],A,!0,"frog-eye-mound"));d={eyeX:.43*_,eyeY:.78,mouthY:.08,size:1.15,neckY:-.4}}if(D==="twin")for(let xt of[-1,1]){let T=U(n,[xt*.16,1.075,-.045],[.225,.285,.22],A,!0,"twin-top-lobe");T.rotation.z=-xt*.3}}function gt(){let D=t.skinMaterial==="fabric"?"fabric":t.skinMaterial==="matte"?"skin":["plush","micro"].includes(t.material)?"fabric":"skin",B=w(t.colors.skin,D),V=w(t.colors.clothing,t.clothMaterial==="fabricCloth"?"fabric":"knit"),X=w(ki(t.colors.clothing,.52),"fabric"),K=w("#EEE8DF","rubber");s.position.set(0,.86,0),n.position.set(0,1.98,.015),U(s,[0,0,0],[.52*_,.66,.36],V,!0,"sweater-body"),U(s,[0,.51,0],[.21,.24,.21],B,!1,"neck");let et=t.faceShape||"round",vt=et==="soft-square"?"roundedcube":"sphere",xt=et==="oval"?[.58,.72,.7]:et==="soft-square"?[.59,.64,.7]:[.63,.67,.71];m=[Q(n,"human-"+et,hc(vt),.75,[0,0,0],xt,B,D==="fabric")];for(let q of[-1,1])mt(q,"round",[q*.605,-.035,.02],[.105,.15,.093],B,an(t.colors.skin,"#B96762",.19)),ot(q,[q*.47*_,1.29,.015],.65,.14,V,B,"hand"),it(q,q*.215*_,.16,.07,[.195,.16,.27],K),U(s,[q*.22,-.44,0],[.19,.36,.205],X,!1,"trouser-leg");let v=w(ki(t.colors.clothing,.9),V.name),O=new oi(.211,.048,9,48),z=P(s,O,v,[0,.53,.005],[1,1,1]);z.rotation.x=Math.PI/2;let st=t.outfit||"sweater";if(st==="hoodie"){let q=U(s,[0,.44,-.18],[.35,.31,.21],V,!0,"hood");for(let Rt of[-1,1])W(s,[[Rt*.13,.49,.225],[Rt*.16,.23,.354],[Rt*.145,.05,.363]],.011,w("#DAD6CC","fabric"),14);W(s,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,v,18)}else if(st==="cardigan"||st==="shirt"){W(s,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,v,20);for(let q=0;q<4;q++)U(s,[.03,.27-q*.18,.36-Math.abs(.1-q*.13)*.1],[.025,.025,.013],w("#D5C9B3","rubber"),!1,"button");for(let q of[-1,1]){let Rt=U(s,[q*.15,.44,.25],[.095,.15,.036],v,!1,"collar");Rt.rotation.z=q*.55}}else for(let q of[-.43,-.47,-.51])W(s,[[-.34,q,.22],[0,q-.025,.301],[.34,q,.22]],.012,v,24);d={eyeX:.235,eyeY:.055,mouthY:-.245,size:.89,neckY:-.7},ft()}function ft(){let D=t.hair||"short-curly",B=t.hairMaterial==="fiber"||t.hairMaterial==="auto"&&["plush","micro"].includes(t.material),V=[w(ki(t.colors.hair,.78),B?"fiber":"hair"),w(t.colors.hair,B?"fiber":"hair"),w(an(t.colors.hair,"#C9AB8D",.075),B?"fiber":"hair")],X=[],K=[],et=[],vt=["bob","long","wavy","braids"].includes(D),xt=($,Y,J=0)=>new L(Math.sin($)*Math.sin(Y)*(.655+J),Math.cos($)*(.71+J)+.035,Math.sin($)*Math.cos(Y)*(.567+J)),T=$=>1.15+(1-Math.cos($))*.52,v=22,O=64;for(let $=0;$<=v;$++)for(let Y=0;Y<=O;Y++){let J=Y/O*bn,ut=xt($/v*T(J),J);if(X.push(ut.x,ut.y,ut.z),K.push(Y/O,$/v),$<v&&Y<O){let bt=$*(O+1)+Y,Mt=bt+O+1;et.push(bt,Mt,bt+1,bt+1,Mt,Mt+1)}}let z=new Te;z.setAttribute("position",new Zt(X,3)),z.setAttribute("uv",new Zt(K,2)),z.setIndex(et),z.computeVertexNormals(),P(n,z,V[0],[0,0,0],[1,1,1],!1,"hair-foundation");let st=[[],[],[]],q=[[],[],[]],Rt=0,_t=($,Y=.006,J=null)=>{let ut=new vn($,!1,"catmullrom",.4);st[J??Rt++%3].push(new kn(ut,Math.max(10,$.length),Y,4,!1))};if(D==="short-curly"){let $=(Y,J,ut,bt,Mt,ct,It=!1)=>{let N=[],yt=Mt*(.22+Se(ct+81)*.045),Tt=Se(ct+23)*1.4-.7,Dt=Se(ct+12)>.5?1:-1,St=Mt*(.27+Se(ct+33)*.13);for(let qt=0;qt<=16;qt++){let ee=qt/16,Ae=(ee-.5)*Mt,de=Dt*Math.sin(ee*bn*.86+Tt)*Mt*.245,Re=.015+Math.sin(ee*Math.PI)*St;N.push(Y.clone().addScaledVector(ut,Ae).addScaledVector(bt,de).addScaledVector(J,Re).add(new L(0,It?-ee*ee*.035:0,0)))}let pt=new vn(N,!1,"catmullrom",.38),Bt=18,Ht=new kn(pt,Bt,yt,8,!1),jt=Ht.attributes.position,Kt=qt=>(.28+.75*Math.pow(Math.sin(Math.PI*qt),.55))*(1-.35*qt);for(let qt=0;qt<=Bt;qt++){let ee=qt/Bt,Ae=pt.getPointAt(ee),de=Kt(ee);for(let Re=0;Re<=8;Re++){let De=qt*9+Re;jt.setXYZ(De,Ae.x+(jt.getX(De)-Ae.x)*de,Ae.y+(jt.getY(De)-Ae.y)*de,Ae.z+(jt.getZ(De)-Ae.z)*de)}}Ht.computeVertexNormals(),q[ct%7===0?0:ct%3===0?2:1].push(Ht);let be=new zn(1,12,8),ve=new ae().makeBasis(ut,bt,J);be.scale(Mt*.44,Mt*.27,Mt*.255),be.applyMatrix4(ve);let ce=Y.clone().addScaledVector(J,Mt*.04);be.translate(ce.x,ce.y,ce.z),q[ct%4===0?0:1].push(be);for(let qt=0;qt<4;qt++){let ee=[],Ae=(qt-1.5)*.32+(Se(ct+qt)*.12-.06);for(let de=0;de<=12;de++){let Re=.08+de/12*(.83+Se(ct+qt+40)*.055),De=pt.getPointAt(Re),Me=pt.getTangentAt(Re),Le=J.clone().addScaledVector(Me,-J.dot(Me)).normalize(),Fe=new L().crossVectors(Me,Le).normalize(),qn=yt*Kt(Re)+.0013;ee.push(De.addScaledVector(Le,Math.cos(Ae)*qn).addScaledVector(Fe,Math.sin(Ae)*qn))}_t(ee,.0017+Se(ct+qt+17)*8e-4,qt===1?2:1)}if(ct%13===0){let qt=N.slice(7,15).map((ee,Ae)=>ee.clone().addScaledVector(J,yt*.7+Math.sin(Ae/7*Math.PI)*.018));_t(qt,.0016,1)}};for(let Y=0;Y<136;Y++){let J=Y*2.399963+(Se(Y+5)-.5)*.16,ut=Math.acos(1-(Y+.5)/136*1.59);if(ut>T(J)+.035)continue;let bt=xt(ut,J,.014+Se(Y+18)*.02),Mt=new L(bt.x/.655**2,(bt.y-.035)/.71**2,bt.z/.567**2).normalize(),ct=new L(Math.cos(J),0,-Math.sin(J)).normalize(),It=new L().crossVectors(Mt,ct).normalize(),N=(Se(Y+47)-.5)*2.5,yt=ct.clone().multiplyScalar(Math.cos(N)).addScaledVector(It,Math.sin(N)).normalize(),Tt=new L().crossVectors(Mt,yt).normalize();$(bt,Mt,yt,Tt,.235+Se(Y+26)*.1,Y)}for(let Y=0;Y<7;Y++){let J=(Y-3)*.126,ut=.345+Math.abs(J)*.22+Se(Y+201)*.035,bt=new L(J,ut,.505-Math.abs(J)*.19),Mt=new L(J*.7,.32,1).normalize(),ct=new L(.93,-.2+Y%3*.15,-J*.4).normalize(),It=new L().crossVectors(Mt,ct).normalize();$(bt,Mt,ct,It,.235+Se(Y+222)*.04,160+Y,!0)}}else for(let $=0;$<250;$++){let Y=$*2.399963,J=.08+Se($)*1.03,ut=Math.min(T(Y),J+.43+Se($+9)*.55),bt=[];for(let Mt=0;Mt<12;Mt++){let ct=Mt/11,It=Rr.lerp(J,ut,ct),N=(1-ct)*.2*(Math.cos(Y)+.4);bt.push(xt(It,Y+N,.015+Math.sin(ct*Math.PI)*.016))}_t(bt,.0042+Se($+17)*.0024)}if(vt){let $=D==="bob"?.48:1.02;for(let Y of[-1,1])U(n,[Y*.49,-.38-$*.22,-.105],[.2,$*.6,.28],V[0],!1,"hair-side-foundation");U(n,[0,-.37-$*.27,-.37],[.48,$*.57,.16],V[0],!1,"hair-back-foundation");for(let Y=0;Y<170;Y++){let J=.8+Se(Y)*4.68,ut=xt(1.05+Se(Y+5)*.58,J,.027),bt=[];for(let Mt=0;Mt<16;Mt++){let ct=Mt/15,It=D==="wavy"?Math.sin(ct*bn*1.7+Y*.71)*.055:Math.sin(ct*Math.PI)*.025;bt.push(new L(ut.x*(1-ct*.1)+Math.sin(J)*It,ut.y-ct*($+.08),ut.z-Math.sin(ct*Math.PI)*.03+Math.cos(J)*It))}_t(bt,.0045+Se(Y+11)*.0022)}}if(D==="ponytail"||D==="bun"){let $=D==="bun",Y=new L($?0:.19,$?.61:.03,$?-.3:-.62);$?U(n,Y.toArray(),[.26,.25,.25],V[0],!1,"bun-foundation"):W(n,[[0,.43,-.39],[.17,.28,-.66],[.21,-.16,-.72],[.41,-.66,-.52]],.13,V[0],28);for(let J=0;J<85;J++){let ut=J/85*bn,bt=[];for(let Mt=0;Mt<18;Mt++){let ct=Mt/17;if($){let It=ct*bn*1.08;bt.push(Y.clone().add(new L(Math.cos(It)*Math.sin(ut)*.27,Math.sin(It)*.25,Math.cos(It)*Math.cos(ut)*.26)))}else bt.push(new L(.03+ct*.35+Math.sin(ut)*(.12*(1-ct)+.025),.42-ct*1.07,-.42-Math.sin(ct*Math.PI)*.28+Math.cos(ut)*(.12*(1-ct)+.025)))}_t(bt,.0065)}}if(D==="braids")for(let $ of[-1,1]){for(let Y=0;Y<27;Y++){let J=[],ut=Y/27*bn;for(let bt=0;bt<32;bt++){let Mt=bt/31,ct=Mt*bn*3.8+ut;J.push(new L($*(.51+.04*Math.sin(Mt*Math.PI))+Math.cos(ct)*.065,-.18-Mt*.93,.07+Math.sin(ct)*.057))}_t(J,.0075)}U(n,[$*.51,-1.1,.07],[.1,.045,.085],w(an(t.colors.clothing,"#C8B390",.25),"fabric"),!1,"braid-tie")}q.forEach(($,Y)=>{$.length&&P(n,cc($),V[Y],[0,0,0],[1,1,1],!1,"hair-curl-volume")}),st.forEach(($,Y)=>{$.length&&P(n,cc($),V[Y],[0,0,0],[1,1,1],!1,"hair-strands")})}function Nt(D){let B={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.6,.49,.5,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.7,.5,1.61],bear:[.63,.57,.54,.6,.68,.52,1.6],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.6,.67,.44,1.53],hedgehog:[.48,.4,.49,.68,.6,.57,1.26]},[V,X,K,et,vt,xt,T]=B[D],v={shiba:.78,cat:.78,rabbit:.74,fox:.8,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[D],O=(1-v)*1.2;s.position.set(0,vt*v+.12,-.11),n.position.set(0,T-O,.12);let z=D==="penguin"?I:A;U(s,[0,0,0],[et*_,vt*v,xt],z,!0,"animal-torso"),m=[D==="capybara"?Q(n,"capybara-skull",hc("roundedcube"),.75,[0,0,0],[V,X,K/.75],A,!0):U(n,[0,0,0],[V,X,K],z,!0,"animal-head")],["axolotl","capybara","hedgehog"].includes(D)||U(s,[0,-.05,xt*.73],[et*.69*_,vt*.71*v,xt*.3],R,!0,"chest-marking"),d={eyeX:V*.46,eyeY:.07,mouthY:-X*.48,size:.85,neckY:-X*.85};let q=K*.78,Rt=an(t.colors.secondary,"#D98E95",.35);if(["shiba","cat","rabbit","panda","bear","otter","fox","hedgehog"].includes(D)){let $=D==="fox"?[.19,.16,.3]:D==="hedgehog"?[.25,.18,.32]:D==="shiba"?[.235,.215,.24]:D==="bear"?[.25,.21,.2]:[.19,.145,.18];for(let J of[-1,1])wt([J*$[0]*.62,-X*.33,q],$);let Y=q+$[2]*.89;if(U(n,[0,-X*.26,Y],[D==="rabbit"?.05:.083,.057,.054],D==="rabbit"?w(Rt,"nose"):S,!1,"nose"),D==="cat")for(let J of[-1,1])for(let ut=0;ut<3;ut++)W(n,[[J*.2,-.2+ut*.025,q+.14],[J*.42,-.21+ut*.05,q+.13],[J*.62,-.23+ut*.083,q+.02]],.0045,w(an(t.colors.eyes,t.colors.secondary,.42),"rubber"),12)}if(["shiba","cat","fox"].includes(D))for(let $ of[-1,1])mt($,"triangle",[$*V*.69,X*.72,-.025],[D==="fox"?.3:.265,D==="fox"?.4:.33,.43],A,Rt);else if(D==="rabbit")for(let $ of[-1,1])mt($,"long",[$*.25,.65,-.04],[.145,.55,.105],A,Rt);else if(["panda","bear","otter","capybara"].includes(D))for(let $ of[-1,1])mt($,"round",[$*V*.74,X*.72,-.035],D==="otter"?[.105,.12,.09]:D==="capybara"?[.13,.135,.095]:[.205,.205,.13],D==="panda"?I:A,Rt);if(D==="panda")for(let $ of[-1,1]){let Y=U(n,[$*.285,.07,K*.86],[.16,.2,.06],I,!1,"eye-patch");Y.rotation.z=-$*.24,m.push(Y)}if(D==="capybara"){wt([0,-.16,.38],[.43,.28,.4],A),d={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};for(let $ of[-1,1])U(n,[$*.125,-.145,.768],[.038,.027,.013],S,!1,"nostril")}if(D==="axolotl"){let $=w(an(t.colors.body,"#DD7695",.58));for(let Y of[-1,1])for(let J=0;J<3;J++){let ut=[Y*.62,.18-J*.15,-.06],bt=[Y*(1+(J===1?.09:0)),.45-J*.35,-.08];W(n,[ut,[Y*.85,(ut[1]+bt[1])*.5,.02],bt],.041,$,18);for(let Mt=0;Mt<4;Mt++){let ct=.37+Mt*.17,It=Rr.lerp(ut[0],bt[0],ct),N=Rr.lerp(ut[1],bt[1],ct);for(let yt of[-1,1])W(n,[[It,N,-.055],[It+Y*.055,N+yt*.085,.01],[It+Y*.06,N+yt*.105,-.018]],.018,$,8)}}d={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35}}let _t=["penguin","owl"].includes(D);for(let $ of[-1,1]){if(_t){let Y=ot($,[$*et*.79*_,1.13,-.02],.59,.14,z,z,"wing-tip");Y.rotation.z=$*.23,y[$<0?0:1]=Ir([$*(et*.79*_+.19),.56,.025])}else ot($,[$*et*.62*_,Math.min(1.02,T-O-.46),.22],D==="axolotl"?.49:.68,D==="rabbit"?.12:.145,D==="panda"?I:A,D==="shiba"?R:A);if(it($,$*et*(_t?.69:.9)*_,.13,_t?.2:.01,[_t?.22:.25,.13,_t?.27:.32],_t?w("#D8A34D","rubber"):D==="panda"?I:A),!_t)for(let Y=0;Y<2;Y++)W(c[c.length-1],[[-.075+Y*.11,.013,.304],[-.075+Y*.11,.059,.28]],.006,w(an(t.colors.body,t.colors.eyes,.2)),6)}if(D==="shiba")at([[.36,.4,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.5,.66,-.19],[.65,.65,-.18]],.115),U(g,[.65,.65,-.18],[.125,.115,.12],R,!0,"tail-tip");else if(D==="cat")at([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.5,-.13]],.098);else if(D==="fox"){at([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.2]],.23);let $=U(g,[1.14,.9,-.15],[.2,.32,.21],R,!0,"white-tail-tip");$.rotation.z=-.36}else if(D==="rabbit")g=new ge,e.add(g),U(g,[.46,.41,-.41],[.24,.24,.23],R,!0,"cotton-tail");else if(["otter","axolotl","hedgehog"].includes(D)){if(at([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],D==="axolotl"?.13:.14),D==="axolotl"){let $=U(g,[.78,.31,-.6],[.41,.23,.055],w(an(t.colors.body,t.colors.secondary,.28)),!0,"tail-fin");$.rotation.y=-.7}}else g=new ge,e.add(g),U(g,[.45,.4,-.43],[.135,.14,.13],z,!0,"short-tail");if(_t){if(D==="owl")for(let Y of[-1,1]){let J=U(n,[Y*.235,.055,.38],[.255,.3,.11],R,!0,"facial-disc");m.push(J),mt(Y,"triangle",[Y*.39,.43,-.055],[.2,.23,.29],A,null)}let $=Q(n,"bird-beak",[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.8,[0,-.15,.49],[D==="penguin"?.155:.09,.115,.12],w("#D8A34D","rubber"),!1);m.push($),d.mouthY=-.26,d.size=D==="owl"?1.05:.85}if(D==="hedgehog"){let $=[];for(let Y=0;Y<110;Y++){let J=Y*2.399963,ut=.15+Se(Y)*.93,bt=Math.sqrt(Math.max(0,1-ut*ut)),Mt=new L(Math.sin(J)*bt,ut,Math.cos(J)*bt);if(Mt.z>.32)continue;let ct=new L(Mt.x*.69*_,Mt.y*.61+.71,Mt.z*.58-.13),It=new or(.041,.22,6,1);It.translate(0,.075,0),It.applyQuaternion(new xn().setFromUnitVectors(x0,Mt)),It.translate(ct.x,ct.y,ct.z),$.push(It)}P(e,cc($),w(ki(t.colors.body,.61),"clay"),[0,0,0],[1,1,1],!1,"soft-quills")}}function Pt(D,B){let V=new Pi(new L(D,B,4),new L(0,0,-1)),X=-1/0;for(let K of m){K.updateMatrix();let et=new se(K.geometry,K.material);et.matrixWorld.copy(K.matrix);let vt=V.intersectObject(et,!1);vt.length&&(X=Math.max(X,vt[0].point.z))}return Number.isFinite(X)?X:.4}function C(D,B,V=b,X="face-line"){return W(r,D.map(([K,et])=>[K,et,Pt(K,et)+.022]),B,V,24,!1,X)}function dt(){let D=t.expression,B=Pr(Number(t.eyeScale)||1,.45,1.8)*d.size,V=Pr(Number(t.eyeSpacing)||1,.6,1.6),X=d.eyeX*V,K={softOval:[.074,.115],capsule:[.07,.19],round:[.086,.086],sparkle:[.088,.119],oval:[.109,.13]},[et,vt]=K[t.eyes]||K.softOval,xt=D==="closed",T={sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[D]??1;for(let z of[-1,1]){let st=z*X,q=d.eyeY+(["curious","skeptical"].includes(D)&&z>0?.025:0),Rt=Pt(st,q)+.021,_t=xt||D==="wink"&&z>0||D==="delighted",$=T*(D==="skeptical"&&z<0?.52:1),Y=new ge;if(Y.name=z<0?"eye-left":"eye-right",Y.position.set(st,q,Rt),r.add(Y),h.push(Y),Y.userData.restScaleY=1,Y.rotation.y=z*(t.shape==="human"?.065:.09),Y.rotation.z=["sad","shy","worried"].includes(D)?z*.15:D==="angry"?-z*.24:D==="happy"?z*.06:D==="focused"?-z*.09:D==="proud"?z*.09:0,_t)W(Y,[[-et*B,0,0],[0,(D==="delighted"?.043:-.021)*B,.01],[et*B,0,0]],.013*B,b,18,!1,D==="delighted"?"delighted-lid":"closed-lid");else if(t.shape==="frog"&&U(Y,[0,0,-.045],[et*B*1.66,vt*B*1.23,.055],w("#F8FFE8","rubber"),!1,"frog-eye-white"),t.eyes==="capsule"?P(Y,M("capsule-eye",()=>new sr(1,2.8,6,20)),b,[0,0,0],[et*B,vt*B*$/2.4,.028],!1,"eye"):U(Y,[0,0,0],[et*B,vt*B*$,.028],t.eyes==="oval"?w("#FFF8EC","eye"):b,!1,"eye"),t.eyes==="oval"&&U(Y,[D==="thinking"?.022:0,D==="proud"?.021:.002,.027],[et*.58*B,vt*.7*B*$,.022],b,!1,"pupil"),["sparkle","softOval","oval"].includes(t.eyes)){let J=U(Y,[-et*.25*B,vt*.37*B*$,.049],[.019*B,.024*B,.008],w("#FFFFFF","eye"),!1,"catchlight");t.eyes==="softOval"&&J.scale.multiplyScalar(.57)}if(t.brows!=="none"){let J=q+vt*B*$+.073,ut=(t.brows==="curious"||D==="skeptical")&&z>0?.047:0,bt=D==="angry"?-z*.048:D==="worried"||t.brows==="angled"?z*.045:t.brows==="straight"?0:t.brows==="curious"?z*.014:.006;C([[st-.09*B,J+ut-bt],[st,J+ut+(t.brows==="straight"?0:.025)],[st+.09*B,J+ut+bt]],.01*B,w(t.shape==="human"?an(t.colors.hair,t.colors.eyes,.24):an(t.colors.eyes,t.colors.body,.1),"rubber"),"brow")}}let v=d.mouthY,O=.103*d.size;if(t.mouth==="smile"){let z=["sad","worried","angry"].includes(D),st=["skeptical","confident","proud"].includes(D),q=Array.from({length:13},(Rt,_t)=>{let $=_t/12,Y=($*2-1)*O,J=(z?-.031:.039)*(2*$-1)**2;return[Y,v+(z?.023:-.027)+J+(st?$*.024:0)]});C(q,.01,b,z?"frown":"smile")}else if(t.mouth==="pout")C([[-O*.68,v-.014],[0,v+.02],[O*.68,v-.014]],.013,b,"pout");else if(t.mouth==="tiny"||t.mouth==="laugh"){let z=t.mouth==="laugh";U(r,[0,v,Pt(0,v)+.019],[O*(z?1.16:.42),O*(z?.93:.51),.024],b,!1,"mouth"),z&&U(r,[0,v-.043,Pt(0,v)+.041],[O*.62,.032,.012],w("#D98C91","skin"),!1,"tongue")}if(t.shape==="human"&&U(r,[0,-.095,Pt(0,-.095)+.016],[.055,.067,.055],w(an(t.colors.skin,"#C29076",.12),"skin"),!1,"nose"),["shy","happy","excited"].includes(D)||t.shape==="human")for(let z of[-1,1]){let st=z*X*1.32,q=d.eyeY-.17,Rt=w(an(t.shape==="human"?t.colors.skin:t.colors.body,"#D98791",.25),"skin");U(r,[st,q,Pt(st,q)+.008],[.085*d.size,.033*d.size,.009],Rt,!1,"cheek")}}}var Cs=i=>new L(...i),uc=(i,t,e)=>Math.max(t,Math.min(e,i)),ye=(i,t={})=>new fn({color:i,roughness:.78,...t});function Qe(i,t,e,n=[0,0,0]){let s=new se(t,e);return s.position.fromArray(n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Vi(i,t,e=[0,0,0]){let n=new ge;return n.name=t,n.position.fromArray(e),i.add(n),n}function Pe(i,t,e,n=[0,0,0]){let s=Qe(i,new zn(1,24,16),e,n);return s.scale.fromArray(t),s}function gu(i,t,e){let n=new Ti,s=-i/2,r=-t/2;return e=Math.min(e,i/2,t/2),n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n.closePath(),n}function qe(i,t,e,n=[0,0,0],s=.025){let[r,o,a]=t,c=Math.min(s*.35,a*.25,o*.15),h=new ms(gu(r-c*2,o-c*2,s),{depth:Math.max(.001,a-c*2),bevelEnabled:!0,bevelSize:c,bevelThickness:c,bevelSegments:3,curveSegments:8,steps:1});return h.translate(0,0,-(a-c*2)/2),Qe(i,h,e,n)}function Wn(i,t,e,n,s=!1){let r=new vn(t.map(Cs),s,"centripetal");return Qe(i,new kn(r,Math.max(20,t.length*4),e,8,s),n)}function dc(i,t,e,n,s){let r=Cs(t),o=Cs(e),a=o.clone().sub(r),c=Qe(i,new dn(n,n,a.length(),16),s);return c.position.copy(r.add(o).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),c}function Rs(i,t,e,n,s,r){return Wn(i,Array.from({length:48},(o,a)=>{let c=a/48*Math.PI*2;return[Math.cos(c)*t,n,Math.sin(c)*e]}),s,r,!0)}function La(i,t,e,n=[0,0,0],s=.025){let r=new Ti;for(let a=0;a<10;a++){let c=Math.PI/2+a*Math.PI/5,h=t*(a%2?.46:1);a?r.lineTo(Math.cos(c)*h,Math.sin(c)*h):r.moveTo(Math.cos(c)*h,Math.sin(c)*h)}r.closePath();let o=new ms(r,{depth:s,bevelEnabled:!0,bevelSegments:3,bevelSize:t*.07,bevelThickness:t*.07,steps:1});return o.translate(0,0,-s/2),Qe(i,o,e,n)}function mu(i,t,e,n,s=[0,0,0]){let r=Vi(i,"flower",s);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Pe(r,[t*.47,t*.69,t*.23],e,[Math.sin(a)*t*.64,Math.cos(a)*t*.64,0]);c.rotation.z=-a}return Pe(r,[t*.4,t*.4,t*.3],n,[0,0,t*.15]),r}function _u(i,t){let e=i.root,n=i.anchors||{},s=t.colors||{},r=["shiba","cat","rabbit","fox","panda","bear","otter","capybara","axolotl","penguin","owl","hedgehog"],o=t.shape==="human",a=e.userData.anatomy==="animal"||r.includes(t.shape),c=a&&["penguin","owl"].includes(t.shape),h=i.height||(o?2.8:a?2.5:2.1),u=i.width||2.3,l=uc(Math.min(u/(o?1.5:a?1.8:2.3),h/(o?2.8:a?2.5:2.1)),.7,1.3),p=n.crown||n.headTop||[0,h,0],f=n.face||[0,h*.58,u*.3],_=n.neck||[0,h*(o?.49:.34),f[2]*.82],g=t.accessories||{},m=t.action||"idle",d=[],y=[],M=ye(s.accessory||"#33465a"),x=ye(s.secondary||"#f6ead9"),w=ye("#23272d",{roughness:.58}),A=ye("#e7bc72",{metalness:.24,roughness:.4}),I=(o?e.getObjectByName("hand")?.material:c?e.getObjectByName("wing-tip")?.material:null)||ye(o?s.skin||"#e9bea2":s.body||"#319ceb"),b=o||c?e.getObjectByName("upper-arm")?.material||ye(s.clothing||s.body||"#338c81"):I,S=ye(new Xt(s.accessory||"#33465a").lerp(new Xt("#ffffff"),.22)),P=(lt,G)=>{let j=Vi(e,lt,G);return d.push(j),j},U=(lt,G)=>Cs(G).applyMatrix4(lt.matrix).toArray(),W=null,Q=m==="sleep"?"none":g.prop||"none",ot={work:"macbook",flowers:"flowers",magic:"wand",drink:"tea",camera:"camera",read:"book"};ot[m]&&(Q=ot[m]);let it=f[2]+.16*l,mt=m==="listen"?"headphones":g.head||"none";if(mt!=="none"){let lt=P("head-"+mt,[p[0],p[1]-.11*l,p[2]]);if(mt==="beret")lt.rotation.z=-.16,lt.position.x-=.08*l,Pe(lt,[.56*l,.14*l,.45*l],M,[0,.105*l,0]),Rs(lt,.425*l,.36*l,0,.035*l,M),Wn(lt,[[.035*l,.225*l,0],[.045*l,.29*l,0],[.1*l,.305*l,.015*l]],.027*l,M);else if(mt==="beanie"||mt==="cap"){let G=mt==="cap",j=(G?.48:.5)*l,ht=Qe(lt,new zn(j,36,24,0,Math.PI*2,0,Math.PI/2),M);ht.scale.y=G?.65:.78,Rs(lt,j,j*.96,.015*l,(G?.025:.055)*l,S);let F=G?6:22;for(let k=0;k<F;k++){let tt=k*Math.PI*2/F,gt=[];for(let ft=0;ft<=12;ft++){let Nt=.05+ft/12*1.49;gt.push([Math.sin(Nt)*Math.cos(tt)*(j+.004),Math.cos(Nt)*j*ht.scale.y,Math.sin(Nt)*Math.sin(tt)*(j+.004)])}Wn(lt,gt,(G?.007:.005)*l,S)}G&&(Pe(lt,[.44*l,.035*l,.3*l],M,[0,-.015*l,.4*l]),Pe(lt,[.045*l,.02*l,.045*l],S,[0,.32*l,0]))}else if(mt==="flower"){lt.position.set(p[0]-u*.24,p[1]-.17*l,p[2]+.24*l),mu(lt,.18*l,x,A),lt.rotation.z=-.2;let G=Pe(lt,[.055*l,.14*l,.025*l],ye("#678b62"),[.13*l,-.07*l,-.025*l]);G.rotation.z=-.8}else if(mt==="wizard"){Rs(lt,.42*l,.36*l,.01*l,.065*l,M);let G=[[.33,0],[.3,.1],[.235,.27],[.16,.43],[.075,.58],[.02,.65],[0,.66]],j=new gr(G.map(F=>new At(F[0]*l,F[1]*l)),40),ht=j.attributes.position;for(let F=0;F<ht.count;F++)ht.setX(F,ht.getX(F)+.15*l*(ht.getY(F)/(.66*l))**2);j.computeVertexNormals(),Qe(lt,j,M),Rs(lt,.307*l,.307*l,.1*l,.034*l,x),La(lt,.068*l,A,[.03*l,.28*l,.225*l],.012*l),La(lt,.035*l,A,[-.13*l,.16*l,.27*l],.01*l)}else if(mt==="headphones"){lt.position.set(0,0,0);let G=Math.min(p[1]-.32*l,f[1]+.05*l),j=u*.5+.025*l,ht=p[1]-G+.12*l,F=p[2]-.14*l,k=[];for(let tt=0;tt<=36;tt++){let gt=tt/36*Math.PI;k.push([p[0]+Math.cos(gt)*j,G+Math.sin(gt)*ht,F])}Wn(lt,k,.052*l,M);for(let tt of[-1,1])Pe(lt,[.1*l,.22*l,.18*l],w,[p[0]+tt*(j-.02*l),G,F]),Pe(lt,[.075*l,.2*l,.172*l],M,[p[0]+tt*(j+.06*l),G,F]),dc(lt,[tt*j,G+.1*l,F],[tt*j,G+.24*l,F],.024*l,A)}}if(g.face&&g.face!=="none"){e.updateMatrixWorld(!0);let lt=i.eyeGroups?.length>=2?i.eyeGroups.map(tt=>e.worldToLocal(tt.getWorldPosition(new L)).toArray()):[[-u*.13,f[1],f[2]],[u*.13,f[1],f[2]]];lt.sort((tt,gt)=>tt[0]-gt[0]);let G=P("face-"+g.face),j=g.face==="sunglasses",ht=g.face!=="round",F=uc(Math.abs(lt[1][0]-lt[0][0])*.43,.135*l,.225*l),k=ye(j?"#172331":"#d6eef5",{transparent:!0,opacity:j?.97:.1,roughness:j?.26:.13,metalness:.12,depthWrite:j,side:Xe});lt.forEach((tt,gt)=>{let ft=Vi(G,"lens-"+gt,[tt[0],tt[1],tt[2]+.085*l]);if(ht){let Pt=gu(F*2.12,F*1.75,F*.32).getPoints(10).map(C=>[C.x,C.y,0]);Pt.pop(),Wn(ft,Pt,(j?.024:.015)*l,M,!0),qe(ft,[F*1.98,F*1.63,.014*l],k,[0,0,0],F*.29)}else Qe(ft,new oi(F,.014*l,8,48),M),Qe(ft,new rr(F-.009*l,40),k);let Nt=gt?1:-1;Wn(G,[[tt[0]+Nt*F,tt[1],tt[2]+.085*l],[Nt*Math.max(u*.39,Math.abs(tt[0])+F+.06*l),tt[1],tt[2]-.09*l],[Nt*u*.43,tt[1]-.035*l,tt[2]-.28*l]],.013*l,M)}),Wn(G,[[lt[0][0]+F,lt[0][1],lt[0][2]+.085*l],[0,(lt[0][1]+lt[1][1])/2+.035*l,Math.max(lt[0][2],lt[1][2])+.1*l],[lt[1][0]-F,lt[1][1],lt[1][2]+.085*l]],.014*l,M)}if(g.neck&&g.neck!=="none"){let lt=o||a?_[1]:Math.max(_[1],h*.27),G=P("neck-"+g.neck,[0,lt,0]),j=o?.32*l:a?.46*l:u*.46,ht=Math.max(o?.25*l:.34*l,n.neckFront?.[2]||f[2]*.86);if(g.neck==="bow"){for(let F of[-1,1]){let k=Pe(G,[.15*l,.115*l,.055*l],M,[F*.13*l,0,ht+.06*l]);k.rotation.z=F*.3}Pe(G,[.07*l,.075*l,.065*l],S,[0,0,ht+.09*l])}else if(Rs(G,j,ht,0,(g.neck==="scarf"?.085:.044)*l,M),g.neck==="scarf")for(let[F,k,tt]of[[-.12,.36,-.13],[.04,.27,.13]]){let gt=Vi(G,"scarf-end",[F*l,-.075*l,ht+.02*l]);gt.rotation.z=tt,qe(gt,[.135*l,k*l,.065*l],M,[0,-k*l/2,0],.04*l);for(let ft=0;ft<5;ft++)qe(gt,[.105*l,.006*l,.005*l],S,[0,(-k+.03+ft*.027)*l,.035*l],.002*l);y.push(ft=>{gt.rotation.z=tt+Math.sin(ft*1.3+F)*.016})}else Pe(G,[.068*l,.081*l,.025*l],A,[0,-.085*l,ht+.043*l])}if(Q==="macbook"){let lt=Math.min(h*.28,f[1]-.6*l),G=P("prop-macbook",[0,Math.max(.28*l,lt),it]),j=1.17*l,ht=.69*l,F=uc(f[1]-G.position.y-.22*l,.32*l,.51*l),k=ye("#bdc3ca",{metalness:.7,roughness:.31}),tt=ye("#4a5058",{roughness:.62});qe(G,[j,.043*l,ht],k,[0,0,0],.045*l);for(let Pt=0;Pt<3;Pt++)for(let C=0;C<10;C++)qe(G,[.078*l,.009*l,.055*l],tt,[(C-4.5)*.098*l,.026*l,(Pt*.079-.06)*l],.014*l);qe(G,[.32*l,.004*l,.135*l],S,[0,.024*l,-.225*l],.018*l);let gt=Vi(G,"laptop-lid",[0,.025*l,ht*.45]);gt.rotation.x=.2,qe(gt,[j,F,.039*l],k,[0,F/2,0],.043*l);let ft=ye("#203943",{roughness:.42,emissive:"#214c58",emissiveIntensity:.23});qe(gt,[j-.07*l,F-.055*l,.005*l],ft,[0,F/2,-.024*l],.027*l);let Nt=ye("#8daea7",{emissive:"#618c83",emissiveIntensity:.15});for(let Pt=0;Pt<3;Pt++)qe(gt,[(Pt?.38:.63)*l,.012*l,.004*l],Nt,[-.11*l,F*.67-Pt*.05*l,-.028*l],.003*l);Pe(gt,[.009*l,.009*l,.004*l],w,[0,F-.018*l,-.025*l]),G.updateMatrix(),W=[[-.28*l,.06*l,-.055*l],[.28*l,.06*l,-.055*l]].map(Pt=>U(G,Pt))}else if(Q==="flowers"){let lt=Math.min(h*.33,f[1]-.6*l),G=P("prop-flowers",[0,lt,it+.03*l]);G.rotation.z=-.08;let j=ye("#6c8d64"),ht=ye("#e1c7ac",{side:Xe});Qe(G,new dn(.25*l,.065*l,.36*l,32,1,!0),ht,[0,.02*l,0]);let F=[[-.18,.36,.02],[.16,.39,0],[0,.47,-.03],[-.07,.28,.14],[.13,.27,.15]],k=[ye("#f0bbbd"),x,ye("#dda375"),ye("#d4b5ce"),x];F.forEach((gt,ft)=>{dc(G,[0,-.25*l,0],gt.map(Pt=>Pt*l),.014*l,j);let Nt=mu(G,.12*l,k[ft],A,gt.map(Pt=>Pt*l));Nt.rotation.x=-.18});let tt=Pe(G,[.065*l,.16*l,.027*l],j,[.22*l,.2*l,-.02*l]);tt.rotation.z=-.7,Rs(G,.077*l,.075*l,-.12*l,.018*l,M),G.updateMatrix(),W=[[-.105*l,-.11*l,.025*l],[.105*l,-.07*l,.025*l]].map(gt=>U(G,gt))}else if(Q==="wand"){let lt=P("prop-wand",[u*.48,h*.43,it]);lt.rotation.z=-.12,dc(lt,[0,-.2*l,0],[0,.48*l,0],.029*l,A),La(lt,.16*l,x,[0,.56*l,0],.04*l);let G=[[-.19,.65,0],[.21,.48,.015],[.15,.78,-.02]].map((j,ht)=>La(lt,(.03+ht*.008)*l,A,j.map(F=>F*l),.009*l));y.push(j=>G.forEach((ht,F)=>{ht.rotation.z=Math.sin(j*.8+F)*.2,ht.scale.setScalar(.84+Math.sin(j*1.4+F)*.16)})),lt.updateMatrix(),W=[null,U(lt,[0,0,0])]}else if(Q==="tea"){let lt=t.mouth!=="none"&&m==="drink",G=Math.min(h*(lt?.49:.34),f[1]-(lt?.58:.53)*l),j=P("prop-tea",[u*.13,G,it+.05*l]),ht=ye("#cba981");Qe(j,new dn(.165*l,.128*l,.35*l,36),ht),Qe(j,new dn(.175*l,.175*l,.032*l,36),x,[0,.185*l,0]);let F=n.mouth||[f[0],f[1]-.25*l,f[2]],k=lt?[F[0]-j.position.x,F[1]-G,F[2]+.025*l-j.position.z]:[.04*l,.48*l,-.05*l];Wn(j,[[.04*l,.18*l,-.02*l],[.04*l,.18*l+(k[1]-.18*l)*.64,-.025*l],k],.019*l,M);for(let tt=0;tt<6;tt++){let gt=tt*1.83;Pe(j,[.019*l,.019*l,.013*l],w,[Math.sin(gt)*.08*l,(-.125+tt%2*.03)*l,.121*l])}j.updateMatrix(),W=[[-.095*l,-.17*l,0],[.16*l,0,0]].map(tt=>U(j,tt))}else if(Q==="camera"){let lt=P("prop-camera",[0,Math.min(f[1]-.28*l,h*.61),it+.04*l]);qe(lt,[.65*l,.36*l,.25*l],M,[0,0,0],.06*l),qe(lt,[.15*l,.09*l,.18*l],w,[0,.205*l,-.015*l],.025*l);let G=Qe(lt,new dn(.148*l,.153*l,.19*l,40),w,[.03*l,0,.19*l]);G.rotation.x=Math.PI/2;let j=Qe(lt,new oi(.124*l,.014*l,8,40),A,[.03*l,0,.29*l]),ht=ye("#203b4c",{metalness:.35,roughness:.15});Pe(lt,[.12*l,.12*l,.018*l],ht,[.03*l,0,.287*l]),qe(lt,[.115*l,.061*l,.015*l],x,[-.2*l,.105*l,.135*l],.014*l),Pe(lt,[.045*l,.02*l,.04*l],w,[.22*l,.194*l,.015*l]),lt.updateMatrix(),W=[[-.31*l,-.045*l,.015*l],[.31*l,.015*l,.015*l]].map(F=>U(lt,F))}else if(Q==="book"){let lt=P("prop-book",[0,Math.min(h*.34,f[1]-.47*l),it+.07*l]),G=ye("#f5eddd"),j=ye("#bcc0b1");lt.rotation.x=.12;for(let ht of[-1,1]){let F=Vi(lt,"book-half");F.rotation.z=ht*.16,qe(F,[.48*l,.029*l,.59*l],M,[ht*.238*l,0,0],.018*l);for(let k=0;k<3;k++)qe(F,[.45*l,.013*l,.55*l],G,[ht*.227*l,(.022+k*.014)*l,0],.013*l);for(let k=0;k<5;k++)qe(F,[(.25-k%2*.04)*l,.003*l,.007*l],j,[ht*.245*l,.059*l,(k-2)*.068*l],.002*l)}lt.updateMatrix(),W=[[-.39*l,.03*l,.035*l],[.39*l,.03*l,.035*l]].map(ht=>U(lt,ht))}let wt=o||a||Q!=="none"||["wave","thinking","dance","celebrate","love"].includes(m)||t.pose==="chin"||["hands","both"].includes(t.limbs),Ct=[],Ot=[];if((i.arms||[]).forEach(lt=>{lt.visible=!1}),wt){let lt=o?h*.22:a&&!c?.13:a?h*.17:h*.32,G=[n.shoulderL||[-u*.4,h*.46,0],n.shoulderR||[u*.4,h*.46,0]],j=G.map((ht,F)=>[a&&!c?ht[0]*.84:(F?1:-1)*u*(a?.3:.39),lt,a&&!c?Math.max(.48,f[2]*.78):f[2]*.73]);if(W&&W.forEach((ht,F)=>{ht&&(j[F]=ht)}),!W){if(m==="wave"&&(j[1]=[u*.57,f[1]+.27*l,f[2]*.67]),(m==="thinking"||t.pose==="chin")&&(j[1]=[u*.2,f[1]-.25*l,f[2]+.07*l]),m==="dance"&&(j[0]=[-u*.58,h*.44,f[2]*.6],j[1]=[u*.56,h*.64,f[2]*.67]),m==="celebrate")for(let ht=0;ht<2;ht++)j[ht]=[(ht?1:-1)*u*.53,f[1]+.31*l,f[2]*.7];if(m==="love")for(let ht=0;ht<2;ht++)j[ht]=[(ht?1:-1)*.12*l,f[1]-.39*l,it]}for(let ht=0;ht<2;ht++){let F=ht?1:-1,k=Cs(G[ht]),tt=Cs(j[ht]),gt=tt.clone().sub(k),ft=P("posed-arm-"+ht,G[ht]),Nt=(o?.078:a?.115:.102)*l,Pt=gt.clone().multiplyScalar(.48);Pt.x+=F*(a&&!c&&!W?.035:.11)*l,Pt.y-=.11*l,Pt.z+=.05*l;let C=gt.clone().multiplyScalar(.85);C.z+=.013*l;let dt=Wn(ft,[[0,0,0],Pt.toArray(),C.toArray(),gt.toArray()],Nt,b);if(c){let X=dt.geometry,K=X.attributes.position,{path:et,tubularSegments:vt,radialSegments:xt}=X.parameters;for(let T=0;T<=vt;T++){let v=T/vt,O=et.getPointAt(v),z=.85+Math.sin(v*Math.PI)*.64;for(let st=0;st<=xt;st++){let q=T*(xt+1)+st;K.setXYZ(q,O.x+(K.getX(q)-O.x)*z,O.y+(K.getY(q)-O.y)*z,O.z+(K.getZ(q)-O.z)*.4)}}X.computeVertexNormals()}dt.userData.region=o?"clothing":"body",dt.userData.surfaceMaterial=o?b.name||"knit":t.material||"plush",dt.userData.furLength=t.material==="micro"?.011:.024;let D=Vi(ft,(c?"wing-tip-":"hand-")+ht,gt.toArray()),B=(o?.102:a?.128:.115)*l,V=Pe(D,[B,B*(c?1.1:o?1.05:.83),B*(c?.4:.82)],I);if(V.userData.region=o?"skin":"body",V.userData.surfaceMaterial=o?I.name||"skin":t.material||"plush",V.userData.furLength=t.material==="micro"?.011:.024,o){D.rotation.x=Q==="macbook"?Math.PI*.4:-.22;for(let K=0;K<4;K++)Pe(D,[.023*l,(.065-Math.abs(K-1.5)*.008)*l,.025*l],I,[(K-1.5)*.043*l,.067*l,.018*l]);let X=Pe(D,[.039*l,.059*l,.035*l],I,[-F*.09*l,.006*l,.035*l]);X.rotation.z=F*.42}Ct.push(ft),Ot.push(D),Array.isArray(i.surfaces)&&i.surfaces.push(dt,V),!W&&(m==="wave"&&ht===1||m==="celebrate")&&y.push(X=>{ft.rotation.z=Math.sin(X*3.2+ht*.6)*.075}),!W&&m==="dance"&&y.push(X=>{ft.rotation.z=Math.sin(X*3+ht*1.1)*.065}),Q==="macbook"&&y.push(X=>{D.rotation.z=Math.sin(X*4.2+ht*1.7)*.022})}}i.arms=Ct,e.updateMatrixWorld(!0);for(let lt of d)i.head&&(lt.name.startsWith("head-")||lt.name.startsWith("face-"))?i.head.attach(lt):o&&i.torso&&lt.name.startsWith("neck-")&&i.torso.attach(lt);return e.updateMatrixWorld(!0),{parts:d,constraintNotes:[],tick(lt){for(let G of y)G(Number.isFinite(lt)?lt:0)}}}var Hi=(i,t=[1,1,1])=>i?.isColor?[i.r,i.g,i.b]:t;function xu(i,t){let e=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n*4+s]=i[s]*t[n*4]+i[4+s]*t[n*4+1]+i[8+s]*t[n*4+2]+i[12+s]*t[n*4+3];return e}function Ua(i,t){if(!i)return null;if(!i.isInterleavedBufferAttribute&&i.itemSize===t&&!i.normalized)return new Float32Array(i.array);let e=new Float32Array(i.count*t),n=["getX","getY","getZ","getW"];for(let s=0;s<i.count;s++)for(let r=0;r<t;r++)e[s*t+r]=i[n[r]](s);return e}function fc(){let i=new Map,t=new Map,e=new Map,n,s,r,o,a=0,c=0,h=(y,M,x)=>Math.max(M,Math.min(x,y)),u=(y,M,x)=>{let w=1/Math.max(1e-12,Math.hypot(y,M,x));return[y*w,M*w,x*w]},l=new Uint8ClampedArray(4097),p=new Float32Array(256);for(let y=0;y<l.length;y++){let M=y/4096;l[y]=Math.round((M<=.0031308?12.92*M:1.055*Math.pow(M,1/2.4)-.055)*255)}for(let y=0;y<256;y++){let M=y/255;p[y]=M<=.04045?M/12.92:Math.pow((M+.055)/1.055,2.4)}let f=(y,M)=>{let x=new Float32Array(16);for(let w=0;w<4;w++)for(let A=0;A<4;A++)x[w*4+A]=y[A]*M[w*4]+y[4+A]*M[w*4+1]+y[8+A]*M[w*4+2]+y[12+A]*M[w*4+3];return x};function _(y){let M=y[0],x=y[4],w=y[8],A=y[1],R=y[5],I=y[9],b=y[2],S=y[6],P=y[10],U=[R*P-I*S,I*b-A*P,A*S-R*b,w*S-x*P,M*P-w*b,x*b-M*S,x*I-w*R,w*A-M*I,M*R-x*A],W=M*U[0]+x*U[1]+w*U[2],Q=1/(Math.abs(W)<1e-12?1:W);return U.map(ot=>ot*Q)}function g(y){if(!y.normals){let M=new Float32Array(y.positions.length),x=y.positions,w=y.indices,A=w?w.length:x.length/3;for(let R=0;R<A;R+=3){let I=(w?w[R]:R)*3,b=(w?w[R+1]:R+1)*3,S=(w?w[R+2]:R+2)*3,P=x[b]-x[I],U=x[b+1]-x[I+1],W=x[b+2]-x[I+2],Q=x[S]-x[I],ot=x[S+1]-x[I+1],it=x[S+2]-x[I+2],mt=U*it-W*ot,at=W*Q-P*it,wt=P*ot-U*Q;for(let Ct of[I,b,S])M[Ct]+=mt,M[Ct+1]+=at,M[Ct+2]+=wt}for(let R=0;R<M.length;R+=3){let I=1/Math.max(1e-10,Math.hypot(M[R],M[R+1],M[R+2]));M[R]*=I,M[R+1]*=I,M[R+2]*=I}y.normals=M}i.set(y.id,y)}function m(y,M,x,w){if(!y){w[0]=w[1]=w[2]=w[3]=1;return}M=M*y.repeat[0]+y.offset[0],x=x*y.repeat[1]+y.offset[1],M=y.wrapS===1e3?M-Math.floor(M):h(M,0,.999999),x=y.wrapT===1e3?x-Math.floor(x):h(x,0,.999999),y.flipY&&(x=1-x);let A=h(Math.floor(M*y.width),0,y.width-1),R=h(Math.floor(x*y.height),0,y.height-1),I=(R*y.width+A)*y.channels,b=y.data,S=b[I]||0,P=y.channels>1?b[I+1]:S,U=y.channels>2?b[I+2]:S;w[0]=y.srgb?p[S]:S/255,w[1]=y.srgb?p[P]:P/255,w[2]=y.srgb?p[U]:U/255,w[3]=y.channels===4?b[I+3]/255:1}function d(y){let M=performance.now();for(let G of y.geometries||[])g(G);for(let G of y.textures||[])t.set(G.id,G);let x=new Set(y.geometryIds),w=new Set(y.textureIds),A=new Set(y.meshes.map(G=>G.id));for(let G of i.keys())x.has(G)||i.delete(G);for(let G of t.keys())w.has(G)||t.delete(G);for(let G of e.keys())A.has(G)||e.delete(G);(a!==y.width||c!==y.height)&&(a=y.width,c=y.height,n=new Float32Array(a*c),o=new Float32Array(a*c*4),r=new Int32Array(a*c)),s=new Uint8ClampedArray(a*c*4),n.fill(1/0),r.fill(-1);let R=y.background||[0,0,0,0];for(let G=0;G<o.length;G+=4)o[G]=R[0]*R[3],o[G+1]=R[1]*R[3],o[G+2]=R[2]*R[3],o[G+3]=R[3];let I=new Float32Array(4097),b=y.exposure||1;for(let G=0;G<I.length;G++){let j=G/512*b;I[G]=y.toneMapping?h(j*(2.51*j+.03)/(j*(2.43*j+.59)+.14),0,1):h(j,0,1)}let S=y.lights||[],P=y.ambient||[.18,.18,.18],U=y.sky||[.24,.24,.24],W=y.ground||[.13,.14,.16],Q=u(y.cameraWorld[8],y.cameraWorld[9],y.cameraWorld[10]);for(let G of S)G.half=u(G.direction[0]+Q[0],G.direction[1]+Q[1],G.direction[2]+Q[2]);let ot=[],it=[],mt=0,at=0;for(let G=0;G<y.meshes.length;G++){let j=y.meshes[G],ht=i.get(j.geometry);if(!ht)continue;let F=j.material,k=f(y.viewProjection,j.matrix),tt=_(j.matrix),gt=ht.positions.length/3,ft=e.get(j.id);(!ft||ft.length!==gt*9)&&(ft=new Float32Array(gt*9),e.set(j.id,ft));let Nt=ht.positions,Pt=ht.normals,C=ht.uv,dt=0;for(let B=0;B<gt;B++){let V=B*3,X=B*9,K=Nt[V],et=Nt[V+1],vt=Nt[V+2],xt=k[3]*K+k[7]*et+k[11]*vt+k[15],T=xt>1e-6?1/xt:0,v=tt[0]*Pt[V]+tt[1]*Pt[V+1]+tt[2]*Pt[V+2],O=tt[3]*Pt[V]+tt[4]*Pt[V+1]+tt[5]*Pt[V+2],z=tt[6]*Pt[V]+tt[7]*Pt[V+1]+tt[8]*Pt[V+2],st=T/Math.max(1e-9,Math.hypot(v,O,z));ft[X]=((k[0]*K+k[4]*et+k[8]*vt+k[12])*T*.5+.5)*a,ft[X+1]=(.5-(k[1]*K+k[5]*et+k[9]*vt+k[13])*T*.5)*c,ft[X+2]=(k[2]*K+k[6]*et+k[10]*vt+k[14])*T,ft[X+3]=T,ft[X+4]=v*st,ft[X+5]=O*st,ft[X+6]=z*st,ft[X+7]=C?C[B*2]*T:0,ft[X+8]=C?C[B*2+1]*T:0,dt+=ft[X+2]}let D={mesh:j,g:ht,tr:ft,index:G,z:dt/gt};(F.transparent||F.opacity<.999?it:ot).push(D)}ot.sort((G,j)=>G.mesh.order-j.mesh.order||G.z-j.z),it.sort((G,j)=>G.mesh.order-j.mesh.order||j.z-G.z);let wt=new Float32Array(4),Ct=new Float32Array(4);function Ot(G,j){let{mesh:ht,g:F,tr:k}=G,tt=ht.material,gt=F.indices,ft=gt?gt.length:F.positions.length/3,Nt=ht.start||0,Pt=Math.min(ft,Number.isFinite(ht.count)?Nt+ht.count:ft),C=t.get(tt.map),dt=t.get(tt.bump),D=tt.roughness,B=tt.unlit?0:.045+(1-D)*(1-D)*.19,V=8+(1-D)*(1-D)*115,X=tt.color,K=tt.emissive||[0,0,0],et=Math.min(.15,(tt.bumpScale||0)*13);for(let vt=Nt;vt+2<Pt;vt+=3){let xt=gt?gt[vt]:vt,T=gt?gt[vt+1]:vt+1,v=gt?gt[vt+2]:vt+2,O=xt*9,z=T*9,st=v*9;if(k[O+3]===0||k[z+3]===0||k[st+3]===0)continue;let q=k[O],Rt=k[O+1],_t=k[z],$=k[z+1],Y=k[st],J=k[st+1],ut=k[O+2],bt=k[z+2],Mt=k[st+2];if(Math.min(ut,bt,Mt)>1||Math.max(ut,bt,Mt)<-1)continue;let ct=(_t-q)*(J-Rt)-($-Rt)*(Y-q);if(Math.abs(ct)<.016||tt.side===0&&ct>0||tt.side===1&&ct<0)continue;let It=Math.max(0,Math.floor(Math.min(q,_t,Y))),N=Math.min(a-1,Math.ceil(Math.max(q,_t,Y))),yt=Math.max(0,Math.floor(Math.min(Rt,$,J))),Tt=Math.min(c-1,Math.ceil(Math.max(Rt,$,J)));if(It>N||yt>Tt)continue;mt++;let Dt=1/ct,St=($-J)*Dt,pt=(Y-_t)*Dt,Bt=(J-Rt)*Dt,Ht=(q-Y)*Dt,jt=((_t-(It+.5))*(J-(yt+.5))-($-(yt+.5))*(Y-(It+.5)))*Dt,Kt=((Y-(It+.5))*(Rt-(yt+.5))-(J-(yt+.5))*(q-(It+.5)))*Dt,be=ct>0?-1:1;for(let ve=yt;ve<=Tt;ve++){let ce=jt+(ve-yt)*pt,qt=Kt+(ve-yt)*Ht,ee=ve*a+It;for(let Ae=It;Ae<=N;Ae++,ee++,ce+=St,qt+=Bt){let de=1-ce-qt;if(ce<-1e-6||qt<-1e-6||de<-1e-6)continue;let Re=ce*ut+qt*bt+de*Mt;if(Re<-1||Re>1||tt.depthTest&&Re>=n[ee]-2e-7)continue;let De=tt.opacity,Me=X[0],Le=X[1],Fe=X[2],qn=0,Is=0;if(C||dt){let H=ce*k[O+3]+qt*k[z+3]+de*k[st+3];qn=(ce*k[O+7]+qt*k[z+7]+de*k[st+7])/H,Is=(ce*k[O+8]+qt*k[z+8]+de*k[st+8])/H}if(C&&(m(C,qn,Is,wt),Me*=wt[0],Le*=wt[1],Fe*=wt[2],De*=wt[3]),De<=Math.max(.002,tt.alphaTest||0))continue;let ui=ce*k[O+4]+qt*k[z+4]+de*k[st+4],Yn=ce*k[O+5]+qt*k[z+5]+de*k[st+5],di=ce*k[O+6]+qt*k[z+6]+de*k[st+6],Ps=be/Math.max(1e-9,Math.sqrt(ui*ui+Yn*Yn+di*di));if(ui*=Ps,Yn*=Ps,di*=Ps,!tt.unlit){let H=Yn*.5+.5,nt=P[0]+W[0]+(U[0]-W[0])*H,rt=P[1]+W[1]+(U[1]-W[1])*H,Z=P[2]+W[2]+(U[2]-W[2])*H,Et=0,Lt=0,zt=0;for(let kt of S){let Gt=kt.direction,Vt=Math.max(0,(ui*Gt[0]+Yn*Gt[1]+di*Gt[2]+.08)/1.08)*kt.intensity,Jt=kt.half,ne=B*Math.pow(Math.max(0,ui*Jt[0]+Yn*Jt[1]+di*Jt[2]),V)*kt.intensity;nt+=kt.color[0]*Vt,rt+=kt.color[1]*Vt,Z+=kt.color[2]*Vt,Et+=kt.color[0]*ne,Lt+=kt.color[1]*ne,zt+=kt.color[2]*ne}if(dt){m(dt,qn,Is,Ct);let kt=1+(Ct[0]-.5)*et;nt*=kt,rt*=kt,Z*=kt}let Ft=tt.metalness||0;Me=Me*nt+Et*(1-Ft+Ft*Me),Le=Le*rt+Lt*(1-Ft+Ft*Le),Fe=Fe*Z+zt*(1-Ft+Ft*Fe)}if(F.colors&&tt.vertexColors&&(Me*=ce*F.colors[xt*3]+qt*F.colors[T*3]+de*F.colors[v*3],Le*=ce*F.colors[xt*3+1]+qt*F.colors[T*3+1]+de*F.colors[v*3+1],Fe*=ce*F.colors[xt*3+2]+qt*F.colors[T*3+2]+de*F.colors[v*3+2]),Me+=K[0],Le+=K[1],Fe+=K[2],tt.toneMapped&&!tt.unlit)if(y.neutral){let H=Math.max(Me,Le,Fe,1e-6),nt=I[h(Math.round(H*512),0,4096)]/H;Me*=nt,Le*=nt,Fe*=nt}else Me=I[h(Math.round(Me*512),0,4096)],Le=I[h(Math.round(Le*512),0,4096)],Fe=I[h(Math.round(Fe*512),0,4096)];let E=ee*4;if(De>=.999)o[E]=Me,o[E+1]=Le,o[E+2]=Fe,o[E+3]=1;else{let H=1-De;o[E]=Me*De+o[E]*H,o[E+1]=Le*De+o[E+1]*H,o[E+2]=Fe*De+o[E+2]*H,o[E+3]=De+o[E+3]*H}!j&&tt.depthWrite&&(n[ee]=Re,r[ee]=G.index),at++}}}}for(let G of ot)Ot(G,!1);if(y.ambientOcclusion&&a>180){let G=Math.max(2,Math.round(a/140)),j=[[-G,0],[G,0],[0,-G],[0,G],[-G*2,-G],[G*2,-G]];for(let ht=G*2;ht<c-G*2;ht++)for(let F=G*2;F<a-G*2;F++){let k=ht*a+F,tt=n[k];if(!Number.isFinite(tt))continue;let gt=0;for(let[ft,Nt]of j){let Pt=k+Nt*a+ft,C=tt-n[Pt];r[Pt]!==r[k]&&C>.0015&&C<.035&&(gt+=1-C/.045)}if(gt>0){let ft=1-gt*.027,Nt=k*4;o[Nt]*=ft,o[Nt+1]*=ft,o[Nt+2]*=ft}}}let lt=0;for(let G of y.fibers||[]){let j=f(y.viewProjection,G.matrix),ht=G.segments,F=G.matrix,k=G.color;for(let tt=0;tt<ht.length;tt+=7){let gt=ht[tt],ft=ht[tt+1],Nt=ht[tt+2],Pt=ht[tt+3],C=ht[tt+4],dt=ht[tt+5],D=j[3]*gt+j[7]*ft+j[11]*Nt+j[15],B=j[3]*Pt+j[7]*C+j[11]*dt+j[15];if(D<1e-6||B<1e-6)continue;let V=((j[0]*gt+j[4]*ft+j[8]*Nt+j[12])/D*.5+.5)*a,X=(.5-(j[1]*gt+j[5]*ft+j[9]*Nt+j[13])/D*.5)*c,K=(j[2]*gt+j[6]*ft+j[10]*Nt+j[14])/D-1e-5,et=((j[0]*Pt+j[4]*C+j[8]*dt+j[12])/B*.5+.5)*a,vt=(.5-(j[1]*Pt+j[5]*C+j[9]*dt+j[13])/B*.5)*c,xt=(j[2]*Pt+j[6]*C+j[10]*dt+j[14])/B-1e-5;if(Math.max(V,et)<0||Math.min(V,et)>=a||Math.max(X,vt)<0||Math.min(X,vt)>=c)continue;let T=Pt-gt,v=C-ft,O=dt-Nt,z=u(F[0]*T+F[4]*v+F[8]*O,F[1]*T+F[5]*v+F[9]*O,F[2]*T+F[6]*v+F[10]*O),st=z[1]*.5+.5,q=P[0]+W[0]+(U[0]-W[0])*st,Rt=P[1]+W[1]+(U[1]-W[1])*st,_t=P[2]+W[2]+(U[2]-W[2])*st;for(let ct of S){let It=ct.direction,N=Math.max(0,(z[0]*It[0]+z[1]*It[1]+z[2]*It[2]+.12)/1.12)*ct.intensity;q+=ct.color[0]*N,Rt+=ct.color[1]*N,_t+=ct.color[2]*N}let $=ht[tt+6],Y=k[0]*q*$,J=k[1]*Rt*$,ut=k[2]*_t*$;if(y.neutral){let ct=Math.max(Y,J,ut,1e-6),It=I[h(Math.round(ct*512),0,4096)]/ct;Y*=It,J*=It,ut*=It}else Y=I[h(Math.round(Y*512),0,4096)],J=I[h(Math.round(J*512),0,4096)],ut=I[h(Math.round(ut*512),0,4096)];let bt=Math.max(1,Math.ceil(Math.hypot(et-V,vt-X)*1.3)),Mt=G.opacity;lt++;for(let ct=0;ct<=bt;ct++){let It=ct/bt,N=V+(et-V)*It,yt=X+(vt-X)*It,Tt=K+(xt-K)*It,Dt=Math.floor(N),St=Math.floor(yt),pt=N-Dt,Bt=yt-St;for(let Ht=0;Ht<2;Ht++)for(let jt=0;jt<2;jt++){let Kt=Dt+jt,be=St+Ht;if(Kt<0||Kt>=a||be<0||be>=c)continue;let ve=be*a+Kt;if(Tt>n[ve]+25e-6||Tt<-1||Tt>1)continue;let ce=(jt?pt:1-pt)*(Ht?Bt:1-Bt)*Mt*(1-It*.32),qt=1-ce,ee=ve*4;o[ee]=Y*ce+o[ee]*qt,o[ee+1]=J*ce+o[ee+1]*qt,o[ee+2]=ut*ce+o[ee+2]*qt,o[ee+3]=ce+o[ee+3]*qt}}}}for(let G of it)Ot(G,!0);for(let G=0;G<s.length;G+=4){let j=h(o[G+3],0,1),ht=j>1e-5?1/j:0;s[G]=l[h(Math.round(o[G]*ht*4096),0,4096)],s[G+1]=l[h(Math.round(o[G+1]*ht*4096),0,4096)],s[G+2]=l[h(Math.round(o[G+2]*ht*4096),0,4096)],s[G+3]=Math.round(j*255)}return{id:y.id,version:y.version,width:a,height:c,pixels:s.buffer,stats:{ms:performance.now()-M,triangles:mt,pixels:at,fibers:lt,calls:ot.length+it.length}}}return{draw:d}}var Fa=class{constructor(t){if(this.domElement=t,this.isSoftwareRenderer=!0,this.type="SoftwareRenderer",this.shadowMap={enabled:!1},this.outputColorSpace="srgb",this.toneMapping=4,this.toneMappingExposure=1,this.capabilities={isWebGL2:!1,maxTextureSize:1024},this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}},this._ctx=t.getContext("2d",{alpha:!0}),!this._ctx)throw new Error("Canvas2D is unavailable.");this._ratio=1,this._width=t.width||512,this._height=t.height||512,this._version=0,this._sequence=0,this._painted=0,this._busy=!1,this._pending=null,this._waiters=[],this._knownGeometry=new Set,this._knownTextures=new Set,this._lastDispatch=-1/0,this._adaptive=1,this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512,this.captureLimit=1024,this.highQuality=!1,this.frameInterval=110,this.ambientOcclusion=!0,this.renderFibers=!0;try{if(typeof Worker!="function")throw new Error("Worker unavailable");let e=`const kernel=(${fc.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;this._workerUrl=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),this._worker=new Worker(this._workerUrl),this._worker.onmessage=n=>n.data.error?this._recover(n.data.error):this._receive(n.data),this._worker.onerror=n=>{n.preventDefault?.(),this._recover(n.message)}}catch{this._kernel=fc()}}setPixelRatio(t=1){return this._ratio=Math.max(.25,Number(t)||1),this.setSize(this._width,this._height,!1),this}getPixelRatio(){return this._ratio}get busy(){return this._busy||!!this._pending}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e));let s=Math.max(1,Math.round(this._width*this._ratio)),r=Math.max(1,Math.round(this._height*this._ratio));return(this.domElement.width!==s||this.domElement.height!==r)&&(this.domElement.width=s,this.domElement.height=r,this._version++),n&&this.domElement.style&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px"),this}getSize(t){return t?.set?t.set(this._width,this._height):{width:this._width,height:this._height}}getDrawingBufferSize(t){return t?.set?t.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height}}setClearColor(t,e=1){return this._clear=Hi(t,[0,0,0]).concat(e),this}setClearAlpha(t){return this._clear=this._clear||[0,0,0,0],this._clear[3]=t,this}clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height)}render(t,e){this._disposed||(this._pending={scene:t,camera:e,id:++this._sequence},this._lastRequest=this._pending,this._schedule())}flush(){if(this._disposed)return Promise.reject(new Error("Renderer disposed."));let t=this._sequence;return this._painted>=t?Promise.resolve():new Promise((e,n)=>{this._waiters.push({target:t,resolve:e,reject:n}),this._schedule(!0)})}_schedule(t=!1){if(this._disposed||this._busy||!this._pending)return;this._timer&&(clearTimeout(this._timer),this._timer=null);let e=t||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);if(e>1){this._timer=setTimeout(()=>{this._timer=null,this._schedule()},e);return}let n=this._pending;this._pending=null,this._busy=!0,this._lastDispatch=performance.now();try{let s=this._collect(n);if(this._worker){let r=[];for(let o of s.geometries)for(let a of["positions","normals","indices","uv","colors"])o[a]&&r.push(o[a].buffer);for(let o of s.textures)r.push(o.data.buffer);for(let o of s.fibers)r.push(o.segments.buffer);this._worker.postMessage(s,r)}else setTimeout(()=>{try{this._receive(this._kernel.draw(s))}catch(r){this._busy=!1;for(let o of this._waiters.splice(0))o.reject(r)}},0)}catch(s){this._busy=!1;for(let r of this._waiters.splice(0))r.reject(s);console.error("SoftwareRenderer:",s)}}_collect({scene:t,camera:e,id:n}){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let s=this.highQuality||Math.max(this._width,this._height)>=1e3,r=this.highQuality?1600:s?this.captureLimit:Math.round(this.previewLimit*this._adaptive),o=Math.min(1,r/Math.max(this.domElement.width,this.domElement.height)),a={id:n,version:this._version,width:Math.max(1,Math.round(this.domElement.width*o)),height:Math.max(1,Math.round(this.domElement.height*o)),viewProjection:xu(e.projectionMatrix.elements,e.matrixWorldInverse.elements),cameraWorld:Array.from(e.matrixWorld.elements),background:t.background?.isColor?Hi(t.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===_s,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.1,.1,.1],sky:[.08,.08,.08],ground:[.06,.065,.075]},c=new Set,h=new Set,u=0;t.traverseVisible?.(g=>{g.isInstancedMesh&&g.name==="surface-fibers"&&(u+=g.count)});let l=Math.max(1,Math.ceil(u/(s?11e3:6e3))),p=g=>{if(!g)return null;let m=(g.uuid||g.id)+":"+(g.version||0);if(h.has(m))return m;let d=g.image||g.source?.data,y=d?.data,M=d?.width,x=d?.height;if(!y&&d?.getContext)try{y=d.getContext("2d")?.getImageData(0,0,M,x)?.data}catch{}return!y||!M||!x?null:(h.add(m),this._knownTextures.has(m)||a.textures.push({id:m,width:M,height:x,data:new Uint8Array(y),channels:Math.round(y.length/(M*x)),repeat:[g.repeat?.x??1,g.repeat?.y??1],offset:[g.offset?.x||0,g.offset?.y||0],wrapS:g.wrapS,wrapT:g.wrapT,flipY:!!g.flipY,srgb:g.colorSpace==="srgb"}),m)},f=(g,m,d="")=>{let y=g.geometry,M=y?.attributes?.position;if(!M||g.isSkinnedMesh)return;let x=y.uuid+":"+(M.version||0)+":"+(y.attributes.normal?.version||0);c.has(x)||(c.add(x),this._knownGeometry.has(x)||a.geometries.push({id:x,positions:Ua(M,3),normals:Ua(y.attributes.normal,3),uv:Ua(y.attributes.uv,2),colors:Ua(y.attributes.color,3),indices:y.index?new Uint32Array(y.index.array):null}));let w=Array.isArray(g.material)?y.groups:[{start:y.drawRange?.start||0,count:y.drawRange?.count??1/0,materialIndex:0}];for(let A=0;A<w.length;A++){let R=w[A],I=Array.isArray(g.material)?g.material[R.materialIndex]:g.material;!I||I.visible===!1||I.isShadowMaterial||(I.opacity??1)<.002||a.meshes.push({id:g.uuid+d+":"+A,geometry:x,matrix:Array.from(m),start:R.start,count:R.count,order:g.renderOrder||0,material:{color:Hi(I.color),emissive:Hi(I.emissive,[0,0,0]).map(b=>b*(I.emissiveIntensity??1)),opacity:I.opacity??1,transparent:!!I.transparent,side:I.side??0,roughness:I.roughness??.75,metalness:I.metalness||0,depthTest:I.depthTest!==!1,depthWrite:I.depthWrite!==!1,alphaTest:I.alphaTest||0,unlit:!!I.isMeshBasicMaterial,toneMapped:I.toneMapped!==!1,map:p(I.map),bump:p(I.bumpMap),bumpScale:I.bumpScale||0,vertexColors:!!I.vertexColors}})}},_=g=>{if(g.visible!==!1){if(g.isLight){let m=Hi(g.color),d=g.intensity??1;if(g.isHemisphereLight){let y=Hi(g.groundColor);for(let M=0;M<3;M++)a.sky[M]+=m[M]*d*.22,a.ground[M]+=y[M]*d*.2}else if(g.isAmbientLight)for(let y=0;y<3;y++)a.ambient[y]+=m[y]*d*.3;else if(g.isDirectionalLight||g.isPointLight||g.isSpotLight){g.target?.updateMatrixWorld(!0);let y=g.matrixWorld.elements,M=g.target?.matrixWorld.elements,x=y[12]-(M?.[12]||0),w=y[13]-(M?.[13]||0),A=y[14]-(M?.[14]||0),R=Math.hypot(x,w,A)||1;a.lights.push({direction:[x/R,w/R,A/R],color:m,intensity:d/Math.PI})}}if(g.isMesh&&(!e.layers||e.layers.test(g.layers)))if(g.isInstancedMesh){if(g.name==="surface-fibers"&&this.renderFibers){g.geometry.computeBoundingBox();let m=g.geometry.boundingBox.max.y,d=g.instanceMatrix.array,y=g.instanceColor?.array,M=new Float32Array(Math.ceil(g.count/l)*7),x=0;for(let A=0;A<g.count;A+=l){let R=A*16;M[x++]=d[R+12],M[x++]=d[R+13],M[x++]=d[R+14],M[x++]=d[R+12]+d[R+4]*m,M[x++]=d[R+13]+d[R+5]*m,M[x++]=d[R+14]+d[R+6]*m,M[x++]=y?(y[A*3]+y[A*3+1]+y[A*3+2])/3:1}let w=g.parent?.userData.surfaceMaterial||g.parent?.material?.name;a.fibers.push({matrix:Array.from(g.matrixWorld.elements),segments:M,color:Hi(g.material.color),opacity:["fabric","knit"].includes(w)?.34:.56})}else if(g.name!=="surface-fibers"&&g.count<=256)for(let m=0;m<g.count;m++)f(g,xu(g.matrixWorld.elements,g.instanceMatrix.array.subarray(m*16,m*16+16)),":"+m)}else g.material?.isShadowMaterial||f(g,g.matrixWorld.elements);for(let m of g.children||[])_(m)}};return _(t),a.lights.length||a.lights.push({direction:[-.4,.71,.58],color:[1,.965,.91],intensity:.87}),a.lights=a.lights.slice(0,4),a.geometryIds=[...c],a.textureIds=[...h],this._knownGeometry=c,this._knownTextures=h,this.info.memory={geometries:c.size,textures:h.size},a}_receive(t){if(this._disposed)return;if(this._busy=!1,t.version===this._version){let n=new ImageData(new Uint8ClampedArray(t.pixels),t.width,t.height);if(t.width===this.domElement.width&&t.height===this.domElement.height)this._ctx.putImageData(n,0,0);else{this._bufferCanvas||(this._bufferCanvas=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t.width,t.height):this.domElement.ownerDocument.createElement("canvas"));let s=this._bufferCanvas;s.width!==t.width&&(s.width=t.width),s.height!==t.height&&(s.height=t.height),s.getContext("2d").putImageData(n,0,0),this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height),this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality="high",this._ctx.drawImage(s,0,0,this.domElement.width,this.domElement.height)}this._painted=Math.max(this._painted,t.id),this.info.render={...t.stats,frame:(this.info.render.frame||0)+1},this.domElement.dataset&&(this.domElement.dataset.renderedFrame=String(t.id),this.domElement.dataset.renderMs=t.stats.ms.toFixed(1),this.domElement.dataset.renderedWidth=String(t.width),this.domElement.dataset.renderedHeight=String(t.height),this.domElement.dataset.renderedFibers=String(t.stats.fibers||0),this.domElement.dataset.renderer="software"),Math.max(this._width,this._height)<1e3&&(t.stats.ms>155?this._adaptive=Math.max(.62,this._adaptive*.88):t.stats.ms<65&&(this._adaptive=Math.min(1,this._adaptive+.025)))}let e=[];for(let n of this._waiters)this._painted>=n.target?n.resolve():e.push(n);this._waiters=e,this._schedule()}_recover(t){this._disposed||(this._worker?.terminate(),this._worker=null,this._kernel=fc(),this._knownGeometry.clear(),this._knownTextures.clear(),this._busy=!1,this._pending=this._pending||this._lastRequest,console.warn("SoftwareRenderer is using the local CPU fallback:",t),this._schedule(!0))}dispose(){this._disposed=!0,this._worker?.terminate(),this._workerUrl&&URL.revokeObjectURL(this._workerUrl),this._timer&&clearTimeout(this._timer),this._pending=null,this._kernel=null,this._bufferCanvas=null;for(let t of this._waiters.splice(0))t.reject(new Error("Renderer disposed."));this._knownGeometry.clear(),this._knownTextures.clear()}};var M0=new L(0,1,0),Na=null,Dr=i=>i?.action==="bounce"?.45:i?.action==="blink"?.17:i?.action==="listen"?.4:i?.action==="wave"?.35:0;function Mu(i){let t={...i};for(let e of["name","notes","reference","presetId","version","rendererVersion","palette","output","eyeColorManual"])delete t[e];return JSON.stringify(t)}var S0=i=>{let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)};function Oa(i){let t=new Set,e=new Set,n=new Set;i?.traverse(s=>{s.geometry&&t.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){e.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function b0(i,t,e=1){let n=i.surfaces.filter(o=>{let a=o.userData.surfaceMaterial||o.material.name||t.material,c=!0;for(let h=o;h;h=h.parent)h.visible||(c=!1);return["plush","micro","fabric","knit"].includes(a)&&c}),s=0,r=n.map(o=>{o.geometry.computeBoundingBox();let a=o.geometry.boundingBox.getSize(new L).multiply(o.scale),c=Math.max(.02,2*(a.x*a.y+a.x*a.z+a.y*a.z));return s+=c,c});n.forEach((o,a)=>{let c=o.userData.surfaceMaterial||o.material.name||t.material,h=["knit","fabric"].includes(c),u=c==="micro",l=Math.max(120,Math.round((h?13e3:38e3)*e*r[a]/s)),p=h?.009:u?.012:.027,f=new dn(3e-4,h?.001:.00135,p,3,1);f.translate(0,p/2,0);let _=new fn({color:o.material.color,roughness:1,metalness:0,side:Xe}),g=new wi(f,_,l);g.name="surface-fibers",g.castShadow=!1,g.receiveShadow=!0;let m=S0((t.randomSeed||"dot")+o.name+a),d=new Da(o).setRandomGenerator(m).build(),y=new L,M=new L,x=new we,w=new Xt;for(let A=0;A<l;A++)d.sample(y,M),x.position.copy(y),M.x+=(m()-.5)*.15,M.y-=.12,M.normalize(),x.quaternion.setFromUnitVectors(M0,M),x.scale.set(1,.62+m()*.75,1),x.updateMatrix(),g.setMatrixAt(A,x.matrix),w.setRGB(1,1,1).multiplyScalar(.78+m()*.31),g.setColorAt(A,w);g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.frustumCulled=!1,o.add(g)})}function E0(i,t){let e=t.shape==="human",n=i.root.userData.anatomy==="animal";if(t.action==="sleep"){for(let[r,o]of i.arms.entries())o.rotation.z=(r?1:-1)*.62,o.rotation.x=-.62;for(let[r,o]of i.legs.entries())o.position.y+=.1,o.position.z+=.1,o.rotation.z=(r?1:-1)*.22;e||n?(i.head.rotation.z=.14,i.head.rotation.x=.08,i.head.position.y-=e?.16:.28,i.torso.scale.y=n?.92:1,i.root.rotation.z=e?-.78:-1.05,i.root.rotation.y=-.1):(i.root.scale.y=.85,i.root.scale.x=1.05,i.root.rotation.z=-.12)}else if(t.pose==="sit"&&(e||n)){i.torso.scale.y=.86,i.head.position.y-=.17;for(let r of i.arms)r.position.y-=.17;for(let r of i.legs)r.position.z+=.24,r.scale.z=1.18}else t.pose==="sit"?i.root.scale.set(1.06,.87,1.03):t.pose==="chin"&&(i.head.rotation.z=.1);["work","read"].includes(t.action)&&(i.head.rotation.x=.11,i.head.position.z+=.025),t.action==="magic"&&(i.head.rotation.y=.16,i.head.rotation.x=-.035),t.action==="camera"&&(i.head.rotation.x=.035),i.root.updateMatrixWorld(!0);let s=new ze().setFromObject(i.root);i.root.position.y-=s.min.y,i.root.userData.restY=i.root.position.y,i.root.userData.restRotation=i.root.rotation.clone(),i.root.userData.restScale=i.root.scale.clone()}var Lr=class{constructor(t,{thumbnail:e=!1}={}){this.thumbnail=e;let n={alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"},s=null;if(Na!=="software")try{s=t.getContext("webgl2",n)}catch{}if(s?(Na="webgl",this.renderer=new Ra({canvas:t,context:s,...n})):(Na="software",this.renderer=new Fa(t)),t.dataset.renderMode=Na,this.renderer.setPixelRatio(e?1:Math.min(window.devicePixelRatio||1,1.7)),this.renderer.isSoftwareRenderer&&(this.renderer.previewLimit=e?240:640),this.renderer.outputColorSpace=Ge,this.renderer.toneMapping=_s,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!e,this.renderer.shadowMap.type=Po,this.scene=new Ei,this.camera=new Ci(-2,2,2,-2,.1,40),!this.renderer.isSoftwareRenderer){let l=new ws(this.renderer),p=new Ia;this.environment=l.fromScene(p,.055),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.65,p.dispose(),l.dispose()}this.scene.add(new vr("#ffffff","#b8c1d0",1.45));let r=new Ii("#fff8ee",2.5);r.position.set(-3.5,6,5),r.castShadow=!e,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20}),r.shadow.bias=-3e-4,r.shadow.normalBias=.018,r.shadow.radius=4,this.scene.add(r);let o=new Ii("#dceaff",.6);o.position.set(4,2,2),this.scene.add(o);let a=new Ii("#ffffff",1.1);a.position.set(1,4,-3),this.scene.add(a),this.floor=new se(new ri(200,200),new _r({color:"#68718a",opacity:.16})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-.016,this.floor.receiveShadow=!0,this.scene.add(this.floor);let c=128,h=new Uint8Array(c*c*4);for(let l=0;l<c;l++)for(let p=0;p<c;p++){let f=((p-c/2)/(c/2))**2+((l-c/2)/(c/2))**2,_=(l*c+p)*4;h[_]=88,h[_+1]=103,h[_+2]=125,h[_+3]=Math.round(Math.exp(-f*5)*28)}let u=new si(h,c,c);u.needsUpdate=!0,this.contact=new se(new ri(3.3,2.2),new bi({map:u,transparent:!0,depthWrite:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=.002,this.scene.add(this.contact),this.turn=new ge,this.scene.add(this.turn),this.frame={width:512,height:512}}update(t){this.avatar&&(this.turn.remove(this.avatar.root),Oa(this.avatar.root)),this.config=structuredClone(t),this.avatar=pu(t),this.props=_u(this.avatar,t),E0(this.avatar,t),b0(this.avatar,t,this.thumbnail?.23:1),this.turn.add(this.avatar.root),this.turn.rotation.y=t.camera==="side"?Math.PI*.43:t.camera==="threeQuarter"?.33:t.pose==="side"?.3:0,this.turn.updateMatrixWorld(!0);let e=new ze().setFromObject(this.turn);this.center=e.getCenter(new L),this.bounds=e.getSize(new L),this.floor.visible=this.contact.visible=t.background!=="transparent",this.scene.background=t.background==="solid"?new Xt(t.colors.background):t.background==="studio"?new Xt("#f8fafc"):null,this.fit(this.frame.width,this.frame.height),this.render(Dr(t))}fit(t,e){if(!t||!e||(this.frame={width:t,height:e},this.renderer.setSize(t,e,!1),!this.avatar))return;let n=this.config,s=t/e,r=Math.max(this.bounds.y*1.28,this.bounds.x*1.28/s)*(72/n.scale),o=r,a=this.center.clone();if(n.framing!=="full"&&!["sleep"].includes(n.action)){let c=n.accessories.prop!=="none";(n.shape==="human"||this.avatar.root.userData.anatomy==="animal")&&(o=r*(c?.9:n.framing==="portrait"?.53:.67),a.y+=this.bounds.y*(c?.04:n.framing==="portrait"?.205:.16))}this.camera.left=-o*s/2,this.camera.right=o*s/2,this.camera.top=o/2,this.camera.bottom=-o/2,this.camera.position.set(a.x,a.y+.12,8),this.camera.lookAt(a.x,a.y,0),this.camera.updateProjectionMatrix()}render(t=0){if(!this.avatar)return;let e=this.avatar,n=this.config,s=e.root.userData;if(e.root.position.y=s.restY,e.root.scale.copy(s.restScale),e.root.rotation.copy(s.restRotation),n.action==="bounce"){let a=Math.max(0,Math.sin(t*3.1));e.root.position.y+=a*.24,e.root.scale.y=s.restScale.y*(1+a*.05),e.root.scale.x=s.restScale.x*(1-a*.025)}else{let a=Math.sin(t*(n.action==="sleep"?1.3:1.8));e.root.scale.y=s.restScale.y*(1+a*.008),n.action==="listen"&&(e.root.rotation.z+=Math.sin(t*2)*.035),(n.expression==="curious"||n.expression==="skeptical")&&(e.root.rotation.z+=.055),n.expression==="shy"&&(e.root.rotation.y+=.11)}let r=t%(n.action==="blink"?2.3:5.5),o=Math.abs(r-.17)<.16?Math.max(.07,Math.abs(r-.17)/.16):1;for(let a of e.eyeGroups)a.scale.y=n.expression==="closed"||n.expression==="wink"||n.expression==="delighted"||n.action==="sleep"?1:o;e.tail&&n.action!=="sleep"&&(e.tail.rotation.y=Math.sin(t*2.5)*.035),this.props?.tick(t),this.renderer.render(this.scene,this.camera)}dispose(){this.avatar&&Oa(this.avatar.root),Oa(this.floor),Oa(this.contact),this.environment?.dispose(),this.renderer.dispose()}},yu=class{constructor(t,{onError:e=()=>{},onReady:n=()=>{}}={}){this.container=t,this.onError=e,this.onReady=n,this.canvas=document.createElement("canvas"),this.canvas.className="character-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","\u5F53\u524D\u914D\u7F6E\u7684\u5B9E\u65F6\u4E09\u7EF4\u89D2\u8272"),t.append(this.canvas),this.world=new Lr(this.canvas),this.start=performance.now(),this.playing=!matchMedia("(prefers-reduced-motion: reduce)").matches,this.visible=!0,this.lastFrame=0,this.revision=0,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.intersection=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting}),this.intersection.observe(t),this.contextLost=s=>{s.preventDefault(),this.onError("\u5B9E\u65F6\u9884\u89C8\u6682\u65F6\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u3002\u4F60\u7684\u914D\u7F6E\u4ECD\u7136\u4FDD\u7559\u3002")},this.canvas.addEventListener("webglcontextlost",this.contextLost),this.loop=s=>{this.raf=requestAnimationFrame(this.loop),!(!this.visible||document.hidden||!this.playing||this.capturing||this.world.renderer._busy||s-this.lastFrame<(this.world.renderer.isSoftwareRenderer?115:40))&&(this.lastFrame=s,this.world.render((s-this.start)/1e3))},this.raf=requestAnimationFrame(this.loop)}update(t){let e=Mu(t);this.updateKey!==e&&(this.updateKey=e,this.pending=t,!this.updateFrame&&(this.updateFrame=requestAnimationFrame(()=>{this.updateFrame=0;try{this.world.update(this.pending),this.revision++,this.canvas.dataset.revision=String(this.revision),this.canvas.dataset.shape=this.pending.shape,this.canvas.dataset.material=this.pending.material,this.canvas.dataset.action=this.pending.action,this.resize(),this.onReady()}catch(n){console.error("Character preview:",n),this.onError("\u8FD9\u4E2A\u89D2\u8272\u6682\u65F6\u672A\u80FD\u663E\u793A\uFF0C\u8BF7\u5207\u6362\u89D2\u8272\u540E\u91CD\u8BD5\u3002")}})))}resize(){let t=this.pending||this.world.config;if(!t)return;let[e,n]=t.aspect.split(":").map(Number),s=this.container.getBoundingClientRect(),r=e/n,o=Math.max(1,s.width),a=o/r;a>s.height&&(a=s.height,o=a*r),this.canvas.style.width=o+"px",this.canvas.style.height=a+"px",this.world.fit(Math.round(o),Math.round(a)),this.world.render(Dr(this.world.config))}setPlaying(t){this.playing=t,!t&&this.world.config&&this.world.render(Dr(this.world.config))}capture(t=1400,e=this.pending||this.world.config){let n=structuredClone(e),s=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{let r;this.capturing=!0;try{if(!n)throw Error("\u89D2\u8272\u5C1A\u672A\u51C6\u5907\u597D");let[o,a]=n.aspect.split(":").map(Number),c=o>=a?t:Math.round(t*o/a),h=a>=o?t:Math.round(t*a/o),u=document.createElement("canvas");r=new Lr(u),r.renderer.highQuality=!0,r.renderer.captureLimit=t,r.renderer.setPixelRatio(1),r.frame={width:c,height:h},r.update(n),r.render(Dr(n)),await r.renderer.flush?.();let l=await new Promise(p=>u.toBlob(p,"image/png"));if(!l)throw Error("PNG \u5BFC\u51FA\u5931\u8D25");return l}finally{r?.dispose(),this.capturing=!1}});return this.captureQueue=s,s}dispose(){cancelAnimationFrame(this.raf),cancelAnimationFrame(this.updateFrame),this.resizeObserver.disconnect(),this.intersection.disconnect(),this.world.dispose(),this.canvas.remove()}},hi,vu=Promise.resolve(),Xn=new Map;function By(i,t=220){let e={...structuredClone(i),framing:"full",aspect:"1:1",scale:74,background:"transparent",camera:"front"},n=Mu(e)+t;if(Xn.has(n))return Promise.resolve(Xn.get(n));let s=vu.then(async()=>{if(Xn.has(n))return Xn.get(n);hi||(hi=new Lr(document.createElement("canvas"),{thumbnail:!0})),hi.frame={width:t,height:t},hi.update(e),hi.fit(t,t),hi.render(Dr(e)),await hi.renderer.flush?.();let r=await new Promise(a=>hi.renderer.domElement.toBlob(a,"image/webp",.84));if(!r)throw Error("\u7F29\u7565\u56FE\u672A\u80FD\u751F\u6210");let o=URL.createObjectURL(r);if(Xn.set(n,o),Xn.size>200){let a=Xn.keys().next().value;URL.revokeObjectURL(Xn.get(a)),Xn.delete(a)}return o});return vu=s.catch(()=>{}),s}export{yu as CharacterPreview,By as characterThumbnail};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
