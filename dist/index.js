"use strict";var h=function(c,r){return function(){return r||c((r={exports:{}}).exports,r),r.exports}};var b=h(function(C,y){
function D(c,r,o,a,i,v){var u,t,s,e,p,q,n;for(u=a.data,t=a.accessors[0],s=a.accessors[1],e=v+r*i,n=r*2+1;n<c&&(p=v+n*i,q=t(u,p),n+1<c&&t(u,v+(n+1)*i)<q&&(n+=1,p=v+n*i,q=t(u,p)),!(q>=o));)s(u,e,q),r=n,e=p,n=r*2+1;return s(u,e,o),a}y.exports=D
});var w=h(function(E,g){
var S=require('@stdlib/array-base-arraylike2object/dist'),l=b();function f(c,r,o,a,i,v){var u,t,s,e;if(c<=0)return a;if(s=S(a),s.accessorProtocol)return l(c,r,o,s,i,v),a;for(u=v+r*i,e=r*2+1;e<c&&(t=v+e*i,e+1<c&&a[v+(e+1)*i]<a[t]&&(e+=1,t=v+e*i),!(a[t]>=o));)a[u]=a[t],r=e,u=t,e=r*2+1;return a[u]=o,a}g.exports=f
});var j=h(function(F,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=w();function R(c,r,o,a,i){return P(c,r,o,a,i,O(c,i))}m.exports=R
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),A=w();z(k,"ndarray",A);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
