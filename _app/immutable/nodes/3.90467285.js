import{s as z,n as S,o as B,f as $}from"../chunks/scheduler.b108d059.js";import{S as U,i as F,g,h as y,j as T,f as p,k as b,a as x,x as _,y as q,s as P,c as j,z as G,m as E,n as V,o as w}from"../chunks/index.70a5cc05.js";import{e as L}from"../chunks/each.e59479a4.js";function O(v,t,l){const a=v.slice();return a[5]=t[l],a}function H(v){let t,l="Loading...";return{c(){t=g("p"),t.textContent=l},l(a){t=y(a,"P",{"data-svelte-h":!0}),q(t)!=="svelte-qdsr2u"&&(t.textContent=l)},m(a,c){x(a,t,c)},p:S,d(a){a&&p(t)}}}function K(v){let t,l,a="Linje",c,n,s="Retning",d,u,D="Tid til avgang",m,h,I="Plattform",k,C=L(v[0]),i=[];for(let r=0;r<C.length;r+=1)i[r]=R(O(v,C,r));return{c(){t=g("div"),l=g("div"),l.textContent=a,c=P(),n=g("div"),n.textContent=s,d=P(),u=g("div"),u.textContent=D,m=P(),h=g("div"),h.textContent=I,k=P();for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){t=y(r,"DIV",{class:!0});var o=T(t);l=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-151ljig"&&(l.textContent=a),c=j(o),n=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-tgaznt"&&(n.textContent=s),d=j(o),u=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-113lt40"&&(u.textContent=D),m=j(o),h=y(o,"DIV",{class:!0,"data-svelte-h":!0}),q(h)!=="svelte-adi2nl"&&(h.textContent=I),k=j(o);for(let e=0;e<i.length;e+=1)i[e].l(o);o.forEach(p),this.h()},h(){b(l,"class","font-black"),b(n,"class","font-black"),b(u,"class","font-black"),b(h,"class","font-black"),b(t,"class","grid grid-rows-6 grid-cols-4 gap-4")},m(r,o){x(r,t,o),_(t,l),_(t,c),_(t,n),_(t,d),_(t,u),_(t,m),_(t,h),_(t,k);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)},p(r,o){if(o&1){C=L(r[0]);let e;for(e=0;e<C.length;e+=1){const f=O(r,C,e);i[e]?i[e].p(f,o):(i[e]=R(f),i[e].c(),i[e].m(t,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=C.length}},d(r){r&&p(t),G(i,r)}}}function R(v){let t,l,a=v[5].serviceJourney.journeyPattern.line.publicCode+"",c,n,s,d=v[5].destinationDisplay.frontText+"",u,D,m,h=v[5].diffInMinutes+"",I,k,C,i,r=v[5].quay.publicCode+"",o;return{c(){t=g("div"),l=g("span"),c=E(a),n=P(),s=g("div"),u=E(d),D=P(),m=g("div"),I=E(h),k=E(" min"),C=P(),i=g("div"),o=E(r),this.h()},l(e){t=y(e,"DIV",{});var f=T(t);l=y(f,"SPAN",{class:!0});var A=T(l);c=V(A,a),A.forEach(p),f.forEach(p),n=j(e),s=y(e,"DIV",{class:!0});var N=T(s);u=V(N,d),N.forEach(p),D=j(e),m=y(e,"DIV",{class:!0});var M=T(m);I=V(M,h),k=V(M," min"),M.forEach(p),C=j(e),i=y(e,"DIV",{class:!0});var J=T(i);o=V(J,r),J.forEach(p),this.h()},h(){b(l,"class","inline-flex items-center rounded-md bg-ruter-orange px-3 py-0 text-sm font-sans font-medium text-white ring-1 ring-inset ring-red-600/10"),b(s,"class",""),b(m,"class",""),b(i,"class","")},m(e,f){x(e,t,f),_(t,l),_(l,c),x(e,n,f),x(e,s,f),_(s,u),x(e,D,f),x(e,m,f),_(m,I),_(m,k),x(e,C,f),x(e,i,f),_(i,o)},p(e,f){f&1&&a!==(a=e[5].serviceJourney.journeyPattern.line.publicCode+"")&&w(c,a),f&1&&d!==(d=e[5].destinationDisplay.frontText+"")&&w(u,d),f&1&&h!==(h=e[5].diffInMinutes+"")&&w(I,h),f&1&&r!==(r=e[5].quay.publicCode+"")&&w(o,r)},d(e){e&&(p(t),p(n),p(s),p(D),p(m),p(C),p(i))}}}function Q(v){let t,l;function a(s,d){return s[0].length>0?K:H}let c=a(v),n=c(v);return{c(){t=g("main"),l=g("ul"),n.c(),this.h()},l(s){t=y(s,"MAIN",{});var d=T(t);l=y(d,"UL",{class:!0});var u=T(l);n.l(u),u.forEach(p),d.forEach(p),this.h()},h(){b(l,"class","svelte-lkpbwx")},m(s,d){x(s,t,d),_(t,l),n.m(l,null)},p(s,[d]){c===(c=a(s))&&n?n.p(s,d):(n.d(1),n=c(s),n&&(n.c(),n.m(l,null)))},i:S,o:S,d(s){s&&p(t),n.d()}}}function W(v,t,l){let a=[],c=[],n={query:`{
                stopPlace(id: "NSR:StopPlace:5947") {
                id
                name
                estimatedCalls(timeRange: 72100, numberOfDepartures: 5) {
                    realtime
                    aimedArrivalTime
                    aimedDepartureTime
                    expectedArrivalTime
                    expectedDepartureTime
                    actualArrivalTime
                    actualDepartureTime
                    date
                    forBoarding
                    forAlighting
                    destinationDisplay {
                    frontText
                    }
                    quay {
                    id
                    publicCode
                    name

                    }
                    serviceJourney {
                    journeyPattern {
                        line {
                            id
                            name
                            transportMode
                            publicCode
                            presentation {
                                colour
                                textColour
                            }
                        }
                    }
                    }
                }
                }
            }
            `};async function s(){try{const u=await fetch("https://api.entur.io/journey-planner/v3/graphql",{method:"POST",headers:{"Content-Type":"application/json","ET-Client-Name":"mroneid/personal-test-app"},body:JSON.stringify(n)});l(0,a=await u.json()),c=a.data.stopPlace.estimatedCalls;const D=new Date;l(0,a=c.map(m=>{const h=new Date(m.expectedDepartureTime),I=Math.floor((h-D)/(1e3*60));return{...m,diffInMinutes:I}})),console.log(c)}catch(u){console.error(u)}}B(s);const d=setInterval(s,6e4);return $(()=>{clearInterval(d)}),[a]}class ee extends U{constructor(t){super(),F(this,t,W,Q,z,{})}}export{ee as component};
