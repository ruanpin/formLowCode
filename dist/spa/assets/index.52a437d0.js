import{c as M,aD as at,aE as It,a as nt,r as $,i as Vt,w as te,n as Ue,h,A as oe,m as pt,g as rt,e as E,y as Tt,ae as $t,av as Ft,aj as Oe,ai as At,ao as Et,a8 as Je,aw as Nt,ah as le,ag as me,L as Zt}from"./index.e49acdf2.js";import{u as Bt,a as Qt}from"./use-timeout.4148a4da.js";import{u as Pt,A as Rt,e as zt,Q as Lt,c as Xt}from"./QInput.59e62fce.js";import{p as Y}from"./format.86fdfed8.js";import{u as Ut,a as Jt,Q as Wt,C as Gt}from"./IndexPage.abbe1bc9.js";import"./index.7f3d6576.js";function Kt(){let e=Object.create(null);return{getCache:(r,l)=>e[r]===void 0?e[r]=typeof l=="function"?l():l:e[r],setCache(r,l){e[r]=l},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ea(e,r,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),ra(pe(e,r,l))}function We(e,r,l){return lt(na(e,r,l))}function ta(e){return aa(e)===0}function ge(e,r){return r<=6?31:r<=11||ta(e)?30:29}function aa(e){const r=R.length;let l=R[0],u,d,o,D,s;if(e<l||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<r&&(u=R[s],d=u-l,!(e<u));s+=1)l=u;return D=e-l,d-D<6&&(D=D-d+x(d+4,33)*33),o=p(p(D+1,33)-1,4),o===-1&&(o=4),o}function ot(e,r){const l=R.length,u=e+621;let d=-14,o=R[0],D,s,m,H,v;if(e<o||e>=R[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(D=R[v],s=D-o,!(e<D));v+=1)d=d+x(s,33)*8+x(p(s,33),4),o=D;H=e-o,d=d+x(H,33)*8+x(p(H,33)+3,4),p(s,33)===4&&s-H===4&&(d+=1);const b=x(u,4)-x((x(u,100)+1)*3,4)-150,F=20+d-b;return r||(s-H<6&&(H=H-s+x(s+4,33)*33),m=p(p(H+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:F}}function na(e,r,l){const u=ot(e,!0);return pe(u.gy,3,u.march)+(r-1)*31-x(r,7)*(r-7)+l-1}function ra(e){const r=lt(e).gy;let l=r-621,u,d,o;const D=ot(l,!1),s=pe(r,3,D.march);if(o=e-s,o>=0){if(o<=185)return d=1+x(o,31),u=p(o,31)+1,{jy:l,jm:d,jd:u};o-=186}else l-=1,o+=179,D.leap===1&&(o+=1);return d=7+x(o,30),u=p(o,30)+1,{jy:l,jm:d,jd:u}}function pe(e,r,l){let u=x((e+x(r-8,6)+100100)*1461,4)+x(153*p(r+9,12)+2,5)+l-34840408;return u=u-x(x(e+100100+x(r-8,6),100)*3,4)+752,u}function lt(e){let r=4*e+139361631;r=r+x(x(4*e+183187720,146097)*3,4)*4-3908;const l=x(p(r,1461),4)*5+308,u=x(p(l,153),5)+1,d=p(x(l,153),12)+1;return{gy:x(r,1461)-100100+x(8-d,6),gm:d,gd:u}}function x(e,r){return~~(e/r)}function p(e,r){return e-~~(e/r)*r}const oa=["gregorian","persian"],Ge={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>oa.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},la=["update:modelValue"];function Q(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function ua(e,r){const l=M(()=>e.disable!==!0&&e.readonly!==!0),u=M(()=>l.value===!0?0:-1),d=M(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(s){const m=new Date,H=s===!0?null:0;if(e.calendar==="persian"){const v=ea(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:H,minute:H,second:H,millisecond:H}}return{editable:l,tabindex:u,headerClass:d,getLocale:o,getCurrentDate:D}}const ut=864e5,sa=36e5,Ve=6e4,st="YYYY-MM-DDTHH:mm:ss.SSSZ",ia=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ca=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,qe={};function da(e,r){const l="("+r.days.join("|")+")",u=e+l;if(qe[u]!==void 0)return qe[u];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",s={};let m=0;const H=e.replace(ca,b=>{switch(m++,b){case"YY":return s.YY=m,"(-?\\d{1,2})";case"YYYY":return s.YYYY=m,"(-?\\d{1,4})";case"M":return s.M=m,"(\\d{1,2})";case"Mo":return s.M=m++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return s.M=m,"(\\d{2})";case"MMM":return s.MMM=m,D;case"MMMM":return s.MMMM=m,o;case"D":return s.D=m,"(\\d{1,2})";case"Do":return s.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=m,"(\\d{2})";case"H":return s.H=m,"(\\d{1,2})";case"HH":return s.H=m,"(\\d{2})";case"h":return s.h=m,"(\\d{1,2})";case"hh":return s.h=m,"(\\d{2})";case"m":return s.m=m,"(\\d{1,2})";case"mm":return s.m=m,"(\\d{2})";case"s":return s.s=m,"(\\d{1,2})";case"ss":return s.s=m,"(\\d{2})";case"S":return s.S=m,"(\\d{1})";case"SS":return s.S=m,"(\\d{2})";case"SSS":return s.S=m,"(\\d{3})";case"A":return s.A=m,"(AM|PM)";case"a":return s.a=m,"(am|pm)";case"aa":return s.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"do":return m++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return m++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return m++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return s.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=m,"(-?\\d+)";case"x":return s.x=m,"(-?\\d{4,})";default:return m--,b[0]==="["&&(b=b.substring(1,b.length-1)),b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:s,regex:new RegExp("^"+H)};return qe[u]=v,v}function it(e,r){return e!==void 0?e:r!==void 0?r.date:It.date}function Ke(e,r=""){const l=e>0?"-":"+",u=Math.abs(e),d=Math.floor(u/60),o=u%60;return l+Y(d)+r+Y(o)}function va(e,r,l,u,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=st);const D=it(l,at.props),s=D.months,m=D.monthsShort,{regex:H,map:v}=da(r,D),b=e.match(H);if(b===null)return o;let F="";if(v.X!==void 0||v.x!==void 0){const j=parseInt(b[v.X!==void 0?v.X:v.x],10);if(isNaN(j)===!0||j<0)return o;const I=new Date(j*(v.X!==void 0?1e3:1));o.year=I.getFullYear(),o.month=I.getMonth()+1,o.day=I.getDate(),o.hour=I.getHours(),o.minute=I.getMinutes(),o.second=I.getSeconds(),o.millisecond=I.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(b[v.YYYY],10);else if(v.YY!==void 0){const j=parseInt(b[v.YY],10);o.year=j<0?j:2e3+j}if(v.M!==void 0){if(o.month=parseInt(b[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(b[v.MMM])+1:v.MMMM!==void 0&&(o.month=s.indexOf(b[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(b[v.D],10),o.year===null||o.month===null||o.day<1)return o;const j=u!=="persian"?new Date(o.year,o.month,0).getDate():ge(o.year,o.month);if(o.day>j)return o}v.H!==void 0?o.hour=parseInt(b[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(b[v.h],10)%12,(v.A&&b[v.A]==="PM"||v.a&&b[v.a]==="pm"||v.aa&&b[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(b[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(b[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(b[v.S],10)*10**(3-b[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(F=v.Z!==void 0?b[v.Z].replace(":",""):b[v.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+F,o}function ke(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const l=new Date(r.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const u=r.getTimezoneOffset()-l.getTimezoneOffset();r.setHours(r.getHours()-u);const d=(r-l)/(ut*7);return 1+Math.floor(d)}function Z(e,r,l){const u=new Date(e),d=`set${l===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${d}Month`](0);case"month":case"months":u[`${d}Date`](1);case"day":case"days":case"date":u[`${d}Hours`](0);case"hour":case"hours":u[`${d}Minutes`](0);case"minute":case"minutes":u[`${d}Seconds`](0);case"second":case"seconds":u[`${d}Milliseconds`](0)}return u}function he(e,r,l){return(e.getTime()-e.getTimezoneOffset()*Ve-(r.getTime()-r.getTimezoneOffset()*Ve))/l}function ct(e,r,l="days"){const u=new Date(e),d=new Date(r);switch(l){case"years":case"year":return u.getFullYear()-d.getFullYear();case"months":case"month":return(u.getFullYear()-d.getFullYear())*12+u.getMonth()-d.getMonth();case"days":case"day":case"date":return he(Z(u,"day"),Z(d,"day"),ut);case"hours":case"hour":return he(Z(u,"hour"),Z(d,"hour"),sa);case"minutes":case"minute":return he(Z(u,"minute"),Z(d,"minute"),Ve);case"seconds":case"second":return he(Z(u,"second"),Z(d,"second"),1e3)}}function je(e){return ct(e,Z(e,"year"),"days")+1}function K(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const et={YY(e,r,l){const u=this.YYYY(e,r,l)%100;return u>=0?Y(u):"-"+Y(Math.abs(u))},YYYY(e,r,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return K(e.getMonth()+1)},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return K(this.Q(e))},D(e){return e.getDate()},Do(e){return K(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return je(e)},DDDo(e){return K(je(e))},DDDD(e){return Y(je(e),3)},d(e){return e.getDay()},do(e){return K(e.getDay())},dd(e,r){return r.days[e.getDay()].slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ke(e)},wo(e){return K(ke(e))},ww(e){return Y(ke(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,r,l,u){const d=u==null?e.getTimezoneOffset():u;return Ke(d,":")},ZZ(e,r,l,u){const d=u==null?e.getTimezoneOffset():u;return Ke(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function fa(e,r,l,u,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=st);const D=it(l,at.props);return r.replace(ia,(s,m)=>s in et?et[s](o,D,u,d):m===void 0?s:m.split("\\]").join("]"))}const X=20,ma=["Calendar","Years","Months"],tt=e=>ma.includes(e),Ie=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function P(e){return e.year+"/"+Y(e.month)}var ha=nt({name:"QDate",props:{...Ge,...Pt,...Bt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Ge.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ie},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ie},navigationMaxYearMonth:{type:String,validator:Ie},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:tt}},emits:[...la,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:l}){const{proxy:u}=rt(),{$q:d}=u,o=Qt(e,d),{getCache:D}=Kt(),{tabindex:s,headerClass:m,getLocale:H,getCurrentDate:v}=ua(e,d);let b;const F=Rt(e),j=zt(F),I=$(null),S=$(Be()),C=$(H()),dt=M(()=>Be()),vt=M(()=>H()),N=M(()=>v()),g=$(Qe(S.value,C.value)),V=$(e.defaultView),Te=M(()=>d.lang.rtl===!0?"right":"left"),ue=$(Te.value),ye=$(Te.value),Me=g.value.year,se=$(Me-Me%X-(Me<0?X:0)),k=$(null),ft=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),z=M(()=>e.color||"primary"),U=M(()=>e.textColor||"white"),ie=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),De=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),A=M(()=>De.value.filter(t=>typeof t=="string").map(t=>_e(t,S.value,C.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),J=M(()=>{const t=a=>_e(a,S.value,C.value);return De.value.filter(a=>Vt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ce=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=We(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),be=M(()=>e.calendar==="persian"?Q:(t,a,n)=>fa(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,n===void 0?C.value:n,t.year,t.timezoneOffset)),ae=M(()=>A.value.length+J.value.reduce((t,a)=>t+1+ct(ce.value(a.to),ce.value(a.from)),0)),$e=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(k.value!==null){const n=k.value.init,i=ce.value(n);return C.value.daysShort[i.getDay()]+", "+C.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(ae.value===0)return ee;if(ae.value>1)return`${ae.value} ${C.value.pluralDay}`;const t=A.value[0],a=ce.value(t);return isNaN(a.valueOf())===!0?ee:C.value.headerTitle!==void 0?C.value.headerTitle(a,t):C.value.daysShort[a.getDay()]+", "+C.value.monthsShort[t.month-1]+" "+t.day}),mt=M(()=>A.value.concat(J.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),ht=M(()=>A.value.concat(J.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Fe=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ae.value===0)return ee;if(ae.value>1){const t=mt.value,a=ht.value,n=C.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return A.value[0].year}),de=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Ae=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):C.value.firstDayOfWeek),gt=M(()=>{const t=C.value.daysShort,a=Ae.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ge(t.year,t.month)}),yt=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),O=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),we=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return O.value!==null&&O.value.year>=g.value.year&&(t.year.prev=!1,O.value.year===g.value.year&&O.value.month>=g.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=g.value.year&&(t.year.next=!1,q.value.year===g.value.year&&q.value.month<=g.value.month&&(t.month.next=!1)),t}),ve=M(()=>{const t={};return A.value.forEach(a=>{const n=P(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ee=M(()=>{const t={};return J.value.forEach(a=>{const n=P(a.from),i=P(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===i?a.to.day:void 0,range:a}),n<i){let c;const{year:w,month:f}=a.from,y=f<12?{year:w,month:f+1}:{year:w+1,month:1};for(;(c=P(y))<=i;)t[c]===void 0&&(t[c]=[]),t[c].push({from:void 0,to:c===i?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ne=M(()=>{if(k.value===null)return;const{init:t,initHash:a,final:n,finalHash:i}=k.value,[c,w]=a<=i?[t,n]:[n,t],f=P(c),y=P(w);if(f!==T.value&&y!==T.value)return;const _={};return f===T.value?(_.from=c.day,_.includeFrom=!0):_.from=1,y===T.value?(_.to=w.day,_.includeTo=!0):_.to=B.value,_}),T=M(()=>P(g.value)),Mt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const i=T.value+"/"+Y(n);t[n]=a(i)}return t}),Dt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const i=T.value+"/"+Y(n);t[n]=a(i)===!0&&yt.value(i)}}return t}),bt=M(()=>{let t,a;const{year:n,month:i}=g.value;if(e.calendar!=="persian")t=new Date(n,i-1,1),a=new Date(n,i-1,0).getDate();else{const c=We(n,i,1);t=new Date(c.gy,c.gm-1,c.gd);let w=i-1,f=n;w===0&&(w=12,f--),a=ge(f,w)}return{days:t.getDay()-Ae.value-1,endDay:a}}),Ne=M(()=>{const t=[],{days:a,endDay:n}=bt.value,i=a<0?a+7:a;if(i<6)for(let f=n-i;f<=n;f++)t.push({i:f,fill:!0});const c=t.length;for(let f=1;f<=B.value;f++){const y={i:f,event:Dt.value[f],classes:[]};Mt.value[f]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ve.value[T.value]!==void 0&&ve.value[T.value].forEach(f=>{const y=c+f-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:z.value,textColor:U.value})}),Ee.value[T.value]!==void 0&&Ee.value[T.value].forEach(f=>{if(f.from!==void 0){const y=c+f.from-1,_=c+(f.to||B.value)-1;for(let re=y;re<=_;re++)Object.assign(t[re],{range:f.range,unelevated:!0,color:z.value,textColor:U.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const y=c+f.to-1;for(let _=c;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:z.value,textColor:U.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=c+B.value-1;for(let _=c;_<=y;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:z.value,textColor:U.value})}}),ne.value!==void 0){const f=c+ne.value.from-1,y=c+ne.value.to-1;for(let _=f;_<=y;_++)t[_].color=z.value,t[_].editRange=!0;ne.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ne.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===N.value.year&&g.value.month===N.value.month&&(t[c+N.value.day-1].today=!0);const w=t.length%7;if(w>0){const f=7-w;for(let y=1;y<=f;y++)t.push({i:y,fill:!0})}return t.forEach(f=>{let y="q-date__calendar-item ";f.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(y+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(y+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(y+=` text-${f.color}`)),f.classes=y}),t}),wt=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});te(()=>e.modelValue,t=>{if(b===t)b=0;else{const a=Qe(S.value,C.value);W(a.year,a.month,a)}}),te(V,()=>{I.value!==null&&u.$el.contains(document.activeElement)===!0&&I.value.focus()}),te(()=>g.value.year+"|"+g.value.month,()=>{l("navigation",{year:g.value.year,month:g.value.month})}),te(dt,t=>{Xe(t,C.value,"mask"),S.value=t}),te(vt,t=>{Xe(S.value,t,"locale"),C.value=t});function Ze(){const{year:t,month:a,day:n}=N.value,i={...g.value,year:t,month:a,day:n},c=ve.value[P(i)];(c===void 0||c.includes(i.day)===!1)&&Se(i),Ye(i.year,i.month)}function Yt(t){tt(t)===!0&&(V.value=t)}function _t(t,a){["month","year"].includes(t)&&(t==="month"?Re:xe)(a===!0?-1:1)}function Ye(t,a){V.value="Calendar",W(t,a)}function xt(t,a){if(e.range===!1||!t){k.value=null;return}const n=Object.assign({...g.value},t),i=a!==void 0?Object.assign({...g.value},a):n;k.value={init:n,initHash:Q(n),final:i,finalHash:Q(i)},Ye(n.year,n.month)}function Be(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function _e(t,a,n){return va(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Qe(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Pe();const i=n[n.length-1],c=_e(i.from!==void 0?i.from:i,t,a);return c.dateHash===null?Pe():c}function Pe(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=N.value!==void 0?N.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function Re(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),W(a,n),ie.value===!0&&fe("month")}function xe(t){const a=Number(g.value.year)+t;W(a,g.value.month),ie.value===!0&&fe("year")}function St(t){W(t,g.value.month),V.value=e.defaultView==="Years"?"Months":"Calendar",ie.value===!0&&fe("year")}function Ct(t){W(g.value.year,t),V.value="Calendar",ie.value===!0&&fe("month")}function Ht(t,a){const n=ve.value[a];(n!==void 0&&n.includes(t.day)===!0?Ce:Se)(t)}function L(t){return{year:t.year,month:t.month,day:t.day}}function W(t,a,n){if(O.value!==null&&t<=O.value.year&&((a<O.value.month||t<O.value.year)&&(a=O.value.month),t=O.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),n!==void 0){const{hour:c,minute:w,second:f,millisecond:y,timezoneOffset:_,timeHash:re}=n;Object.assign(g.value,{hour:c,minute:w,second:f,millisecond:y,timezoneOffset:_,timeHash:re})}const i=t+"/"+Y(a)+"/01";i!==g.value.dateHash&&(ue.value=g.value.dateHash<i==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(ye.value=ue.value),Ue(()=>{se.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:i})}))}function ze(t,a,n){const i=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;b=i;const{reason:c,details:w}=Le(a,n);l("update:modelValue",i,c,w)}function fe(t){const a=A.value[0]!==void 0&&A.value[0].dateHash!==null?{...A.value[0]}:{...g.value};Ue(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ge(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const i=G(a);b=i;const{details:c}=Le("",a);l("update:modelValue",i,t,c)})}function Le(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...L(a.target),from:L(a.from),to:L(a.to)}}:{reason:`${t}-day`,details:L(a)}}function G(t,a,n){return t.from!==void 0?{from:be.value(t.from,a,n),to:be.value(t.to,a,n)}:be.value(t,a,n)}function Se(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=Q(t.from),i=Q(t.to),c=A.value.filter(f=>f.dateHash<n||f.dateHash>i),w=J.value.filter(({from:f,to:y})=>y.dateHash<n||f.dateHash>i);a=c.concat(w).concat(t).map(f=>G(f))}else{const n=De.value.slice();n.push(G(t)),a=n}else a=G(t);ze(a,"add",t)}function Ce(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(i=>i.from!==void 0?i.from!==n.from&&i.to!==n.to:!0):a=e.modelValue.filter(i=>i!==n),a.length===0&&(a=null)}ze(a,"remove",t)}function Xe(t,a,n){const i=A.value.concat(J.value).map(c=>G(c,t,a)).filter(c=>c.from!==void 0?c.from.dateHash!==null&&c.to.dateHash!==null:c.dateHash!==null);l("update:modelValue",(e.multiple===!0?i:i[0])||null,n)}function Ot(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Fe.value,class:"q-date__header-subtitle q-date__header-link "+(V.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vY",{onClick(){V.value="Years"},onKeyup(t){t.keyCode===13&&(V.value="Years")}})},[Fe.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+$e.value,class:"q-date__header-title-label q-date__header-link "+(V.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...D("vC",{onClick(){V.value="Calendar"},onKeyup(t){t.keyCode===13&&(V.value="Calendar")}})},[$e.value]))]),e.todayBtn===!0?h(E,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:Ze}):null])])}function He({label:t,type:a,key:n,dir:i,goTo:c,boundaries:w,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[0],tabindex:s.value,disable:w.prev===!1,...D("go-#"+a,{onClick(){c(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(oe,{name:"q-transition--jump-"+i},()=>h("div",{key:n},[h(E,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:s.value,...D("view#"+a,{onClick:()=>{V.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[1],tabindex:s.value,disable:w.next===!1,...D("go+#"+a,{onClick(){c(1)}})})])]}const qt={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},He({label:C.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:ue.value,goTo:Re,boundaries:we.value.month,cls:" col"}).concat(He({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:xe,boundaries:we.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},gt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(oe,{name:"q-transition--slide-"+ue.value},()=>h("div",{key:T.value,class:"q-date__calendar-days fit"},Ne.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(E,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:s.value,...D("day#"+t.i,{onClick:()=>{kt(t.i)},onMouseover:()=>{jt(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===N.value.year,a=i=>O.value!==null&&g.value.year===O.value.year&&O.value.month>i||q.value!==null&&g.value.year===q.value.year&&q.value.month<i,n=C.value.monthsShort.map((i,c)=>{const w=g.value.month===c+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(E,{class:t===!0&&N.value.month===c+1?"q-date__today":null,flat:w!==!0,label:i,unelevated:w,color:w===!0?z.value:null,textColor:w===!0?U.value:null,tabindex:s.value,disable:a(c+1),...D("month#"+c,{onClick:()=>{Ct(c+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[He({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:xe,boundaries:we.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=se.value,a=t+X,n=[],i=c=>O.value!==null&&O.value.year>c||q.value!==null&&q.value.year<c;for(let c=t;c<=a;c++){const w=g.value.year===c;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(E,{key:"yr"+c,class:N.value.year===c?"q-date__today":null,flat:!w,label:c,dense:!0,unelevated:w,color:w===!0?z.value:null,textColor:w===!0?U.value:null,tabindex:s.value,disable:i(c),...D("yr#"+c,{onClick:()=>{St(c)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:de.value[0],tabindex:s.value,disable:i(t),...D("y-",{onClick:()=>{se.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:de.value[1],tabindex:s.value,disable:i(a),...D("y+",{onClick:()=>{se.value+=X}})})])])}};function kt(t){const a={...g.value,day:t};if(e.range===!1){Ht(a,T.value);return}if(k.value===null){const n=Ne.value.find(c=>c.fill!==!0&&c.i===t);if(e.noUnset!==!0&&n.range!==void 0){Ce({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Ce(a);return}const i=Q(a);k.value={init:a,initHash:i,final:a,finalHash:i},l("rangeStart",L(a))}else{const n=k.value.initHash,i=Q(a),c=n<=i?{from:k.value.init,to:a}:{from:a,to:k.value.init};k.value=null,Se(n===i?a:{target:a,...c}),l("rangeEnd",{from:L(c.from),to:L(c.to)})}}function jt(t){if(k.value!==null){const a={...g.value,day:t};Object.assign(k.value,{final:a,finalHash:Q(a)})}}return Object.assign(u,{setToday:Ze,setView:Yt,offsetCalendar:_t,setCalendarTo:Ye,setEditingRange:xt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(oe,{name:"q-transition--fade"},qt[V.value])])],a=pt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&j(t,"push"),h("div",{class:ft.value,...wt.value},[Ot(),h("div",{ref:I,class:"q-date__main col column",tabindex:-1},t)])}}}),ga=nt({name:"QPopupProxy",props:{...Ut,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:l,attrs:u}){const{proxy:d}=rt(),{$q:o}=d,D=$(!1),s=$(null),m=M(()=>parseInt(e.breakpoint,10)),{canShow:H}=Jt({showing:D});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const b=$(v()),F=M(()=>b.value==="menu"?{maxHeight:"99vh"}:{});te(()=>v(),S=>{D.value!==!0&&(b.value=S)});function j(S){D.value=!0,l("show",S)}function I(S){D.value=!1,b.value=v(),l("hide",S)}return Object.assign(d,{show(S){H(S)===!0&&s.value.show(S)},hide(S){s.value.hide(S)},toggle(S){s.value.toggle(S)}}),Tt(d,"currentComponent",()=>({type:b.value,ref:s.value})),()=>{const S={ref:s,...F.value,...u,onShow:j,onHide:I};let C;return b.value==="dialog"?C=Lt:(C=Wt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(C,S,r.default)}}});const ya={class:"q-py-sm"},Ma={class:"f700 q-mb-xs fz14"},Da={style:{color:"#CC0100"}},ba={class:"row items-center justify-end"},Ha=Object.assign({name:"DateComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){return(r,l)=>($t(),Ft("div",ya,[Oe("div",Ma,[At(Et(e.renderObject.label),1),Je(Oe("span",Da,"*",512),[[Nt,e.renderObject.required]])]),le(Xt,{class:"col",outlined:"",dense:"",modelValue:e.renderObject.value,"onUpdate:modelValue":l[1]||(l[1]=u=>e.renderObject.value=u),mask:"date"},{append:me(()=>[le(Zt,{name:"event",class:"cursor-pointer"},{default:me(()=>[le(ga,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:me(()=>[le(ha,{minimal:"",modelValue:e.renderObject.value,"onUpdate:modelValue":l[0]||(l[0]=u=>e.renderObject.value=u)},{default:me(()=>[Oe("div",ba,[Je(le(E,{label:"Close",color:"primary",flat:""},null,512),[[Gt]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});export{Ha as default};