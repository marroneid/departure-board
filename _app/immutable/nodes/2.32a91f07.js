import{s as z,n as M,o as B,f as $}from"../chunks/scheduler.b108d059.js";import{S as U,i as F,g,h as C,j as T,f as v,k as b,a as y,x as _,y as q,s as j,c as E,z as G,m as V,n as k,o as w}from"../chunks/index.70a5cc05.js";function L(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function O(r,t,n){const a=r.slice();return a[5]=t[n],a}function H(r){let t,n="Loading...";return{c(){t=g("p"),t.textContent=n},l(a){t=C(a,"P",{"data-svelte-h":!0}),q(t)!=="svelte-qdsr2u"&&(t.textContent=n)},m(a,d){y(a,t,d)},p:M,d(a){a&&v(t)}}}function K(r){let t,n,a="Linje",d,l,s="Retning",u,f,D="Tid til avgang",h,m,I="Plattform",P,x=L(r[0]),i=[];for(let o=0;o<x.length;o+=1)i[o]=R(O(r,x,o));return{c(){t=g("div"),n=g("div"),n.textContent=a,d=j(),l=g("div"),l.textContent=s,u=j(),f=g("div"),f.textContent=D,h=j(),m=g("div"),m.textContent=I,P=j();for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){t=C(o,"DIV",{class:!0});var c=T(t);n=C(c,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-151ljig"&&(n.textContent=a),d=E(c),l=C(c,"DIV",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-tgaznt"&&(l.textContent=s),u=E(c),f=C(c,"DIV",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-113lt40"&&(f.textContent=D),h=E(c),m=C(c,"DIV",{class:!0,"data-svelte-h":!0}),q(m)!=="svelte-adi2nl"&&(m.textContent=I),P=E(c);for(let e=0;e<i.length;e+=1)i[e].l(c);c.forEach(v),this.h()},h(){b(n,"class","font-black"),b(l,"class","font-black"),b(f,"class","font-black"),b(m,"class","font-black"),b(t,"class","grid grid-rows-6 grid-cols-4 gap-4")},m(o,c){y(o,t,c),_(t,n),_(t,d),_(t,l),_(t,u),_(t,f),_(t,h),_(t,m),_(t,P);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)},p(o,c){if(c&1){x=L(o[0]);let e;for(e=0;e<x.length;e+=1){const p=O(o,x,e);i[e]?i[e].p(p,c):(i[e]=R(p),i[e].c(),i[e].m(t,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=x.length}},d(o){o&&v(t),G(i,o)}}}function R(r){let t,n,a=r[5].serviceJourney.journeyPattern.line.publicCode+"",d,l,s,u=r[5].destinationDisplay.frontText+"",f,D,h,m=r[5].diffInMinutes+"",I,P,x,i,o=r[5].quay.publicCode+"",c;return{c(){t=g("div"),n=g("span"),d=V(a),l=j(),s=g("div"),f=V(u),D=j(),h=g("div"),I=V(m),P=V(" min"),x=j(),i=g("div"),c=V(o),this.h()},l(e){t=C(e,"DIV",{});var p=T(t);n=C(p,"SPAN",{class:!0});var S=T(n);d=k(S,a),S.forEach(v),p.forEach(v),l=E(e),s=C(e,"DIV",{class:!0});var N=T(s);f=k(N,u),N.forEach(v),D=E(e),h=C(e,"DIV",{class:!0});var A=T(h);I=k(A,m),P=k(A," min"),A.forEach(v),x=E(e),i=C(e,"DIV",{class:!0});var J=T(i);c=k(J,o),J.forEach(v),this.h()},h(){b(n,"class","inline-flex items-center rounded-md bg-ruter-orange px-3 py-0 text-sm font-sans font-medium text-white ring-1 ring-inset ring-red-600/10"),b(s,"class",""),b(h,"class",""),b(i,"class","")},m(e,p){y(e,t,p),_(t,n),_(n,d),y(e,l,p),y(e,s,p),_(s,f),y(e,D,p),y(e,h,p),_(h,I),_(h,P),y(e,x,p),y(e,i,p),_(i,c)},p(e,p){p&1&&a!==(a=e[5].serviceJourney.journeyPattern.line.publicCode+"")&&w(d,a),p&1&&u!==(u=e[5].destinationDisplay.frontText+"")&&w(f,u),p&1&&m!==(m=e[5].diffInMinutes+"")&&w(I,m),p&1&&o!==(o=e[5].quay.publicCode+"")&&w(c,o)},d(e){e&&(v(t),v(l),v(s),v(D),v(h),v(x),v(i))}}}function Q(r){let t,n;function a(s,u){return s[0].length>0?K:H}let d=a(r),l=d(r);return{c(){t=g("main"),n=g("ul"),l.c(),this.h()},l(s){t=C(s,"MAIN",{});var u=T(t);n=C(u,"UL",{class:!0});var f=T(n);l.l(f),f.forEach(v),u.forEach(v),this.h()},h(){b(n,"class","svelte-lkpbwx")},m(s,u){y(s,t,u),_(t,n),l.m(n,null)},p(s,[u]){d===(d=a(s))&&l?l.p(s,u):(l.d(1),l=d(s),l&&(l.c(),l.m(n,null)))},i:M,o:M,d(s){s&&v(t),l.d()}}}function W(r,t,n){let a=[],d=[],l={query:`{
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
            `};async function s(){try{const f=await fetch("https://api.entur.io/journey-planner/v3/graphql",{method:"POST",headers:{"Content-Type":"application/json","ET-Client-Name":"mroneid/personal-test-app"},body:JSON.stringify(l)});n(0,a=await f.json()),d=a.data.stopPlace.estimatedCalls;const D=new Date;n(0,a=d.map(h=>{const m=new Date(h.expectedDepartureTime),I=Math.floor((m-D)/(1e3*60));return{...h,diffInMinutes:I}})),console.log(d)}catch(f){console.error(f)}}B(s);const u=setInterval(s,6e4);return $(()=>{clearInterval(u)}),[a]}class Z extends U{constructor(t){super(),F(this,t,W,Q,z,{})}}export{Z as component};
