import{s as A,n as D,o as E}from"../chunks/scheduler.b108d059.js";import{S as J,i as N,g as x,m as v,s as b,h as C,j as P,n as y,f as h,c as j,y as w,k as H,a as g,x as f,o as T,z as O}from"../chunks/index.70a5cc05.js";import{e as S}from"../chunks/each.e59479a4.js";function k(p,l,a){const s=p.slice();return s[3]=l[a],s}function q(p){let l,a,s,c=p[3].serviceJourney.journeyPattern.line.publicCode+"",r,o,u=p[3].destinationDisplay.frontText+"",m,n,e=p[3].expectedDepartureTime+"",i;return{c(){l=x("div"),a=x("p"),s=v("["),r=v(c),o=v("] "),m=v(u),n=v(" - "),i=v(e)},l(t){l=C(t,"DIV",{});var d=P(l);a=C(d,"P",{});var _=P(a);s=y(_,"["),r=y(_,c),o=y(_,"] "),m=y(_,u),n=y(_," - "),i=y(_,e),_.forEach(h),d.forEach(h)},m(t,d){g(t,l,d),f(l,a),f(a,s),f(a,r),f(a,o),f(a,m),f(a,n),f(a,i)},p(t,d){d&1&&c!==(c=t[3].serviceJourney.journeyPattern.line.publicCode+"")&&T(r,c),d&1&&u!==(u=t[3].destinationDisplay.frontText+"")&&T(m,u),d&1&&e!==(e=t[3].expectedDepartureTime+"")&&T(i,e)},d(t){t&&h(l)}}}function M(p){let l,a=p[1].name+"",s,c,r,o,u="Hello world!",m=S(p[0]),n=[];for(let e=0;e<m.length;e+=1)n[e]=q(k(p,m,e));return{c(){l=x("h1"),s=v(a),c=b();for(let e=0;e<n.length;e+=1)n[e].c();r=b(),o=x("h1"),o.textContent=u,this.h()},l(e){l=C(e,"H1",{});var i=P(l);s=y(i,a),i.forEach(h),c=j(e);for(let t=0;t<n.length;t+=1)n[t].l(e);r=j(e),o=C(e,"H1",{class:!0,"data-svelte-h":!0}),w(o)!=="svelte-unad2a"&&(o.textContent=u),this.h()},h(){H(o,"class","text-3xl font-bold underline")},m(e,i){g(e,l,i),f(l,s),g(e,c,i);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,i);g(e,r,i),g(e,o,i)},p(e,[i]){if(i&2&&a!==(a=e[1].name+"")&&T(s,a),i&1){m=S(e[0]);let t;for(t=0;t<m.length;t+=1){const d=k(e,m,t);n[t]?n[t].p(d,i):(n[t]=q(d),n[t].c(),n[t].m(r.parentNode,r))}for(;t<n.length;t+=1)n[t].d(1);n.length=m.length}},i:D,o:D,d(e){e&&(h(l),h(c),h(r),h(o)),O(n,e)}}}function R(p,l,a){let s=[],c=[];E(async function(){const u=await(await fetch("https://api.entur.io/journey-planner/v3/graphql",{method:"POST",headers:{"Content-Type":"application/json","ET-Client-Name":"mroneid/personal-test-app"},body:JSON.stringify({query:`{
                stopPlace(id: "NSR:StopPlace:5947") {
                id
                name
                estimatedCalls(timeRange: 72100, numberOfDepartures: 10) {
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
            `})})).json();a(1,c=u.data.stopPlace),a(0,s=u.data.stopPlace.estimatedCalls),console.log(s)});let{name:r}=l;return p.$$set=o=>{"name"in o&&a(2,r=o.name)},[s,c,r]}class V extends J{constructor(l){super(),N(this,l,R,M,A,{name:2})}}export{V as component};
