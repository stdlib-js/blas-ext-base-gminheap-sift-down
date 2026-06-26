"use strict";var h=function(c,r){return function(){try{return r||c((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var b=h(function(C,y){
function D(c,r,v,a,i,n){var u,t,s,e,p,q,o;for(u=a.data,t=a.accessors[0],s=a.accessors[1],e=n+r*i,o=r*2+1;o<c&&(p=n+o*i,q=t(u,p),o+1<c&&t(u,n+(o+1)*i)<q&&(o+=1,p=n+o*i,q=t(u,p)),!(q>=v));)s(u,e,q),r=o,e=p,o=r*2+1;return s(u,e,v),a}y.exports=D
});var w=h(function(E,g){
var S=require('@stdlib/array-base-arraylike2object/dist'),l=b();function f(c,r,v,a,i,n){var u,t,s,e;if(c<=0)return a;if(s=S(a),s.accessorProtocol)return l(c,r,v,s,i,n),a;for(u=n+r*i,e=r*2+1;e<c&&(t=n+e*i,e+1<c&&a[n+(e+1)*i]<a[t]&&(e+=1,t=n+e*i),!(a[t]>=v));)a[u]=a[t],r=e,u=t,e=r*2+1;return a[u]=v,a}g.exports=f
});var j=h(function(F,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=w();function R(c,r,v,a,i){return P(c,r,v,a,i,O(c,i))}m.exports=R
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),A=w();z(k,"ndarray",A);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
