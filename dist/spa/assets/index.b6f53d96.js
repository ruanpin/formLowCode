import{c as D,aC as rt,aD as Vt,a as ot,r as $,i as Tt,w as te,n as Ue,h,T as oe,f as $t,g as lt,j as E,A as Ft,a5 as At,aq as Et,aa as Oe,a9 as Nt,af as Bt,ar as Je,as as Zt,aB as We,au as Ge,a8 as le,a7 as me,F as Qt}from"./index.9c00928c.js";import{e as Lt,u as Pt,a as Rt,F as zt,f as Xt,Q as Ut,d as Jt}from"./QCard.e91703c3.js";import{p as x,u as Wt,a as Gt,Q as Kt,C as ea}from"./IndexPage.97a76b35.js";import{u as ta}from"./ConditionalRender.7a73cd4d.js";import{u as aa}from"./elementCSS.d07d7387.js";import"./scroll.8cd30674.js";import"./index.cfa0e9ad.js";function na(){let e=Object.create(null);return{getCache:(r,u)=>e[r]===void 0?e[r]=typeof u=="function"?u():u:e[r],setCache(r,u){e[r]=u},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const P=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ra(e,r,u){return Object.prototype.toString.call(e)==="[object Date]"&&(u=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),sa(Ve(e,r,u))}function Ke(e,r,u){return st(ua(e,r,u))}function oa(e){return la(e)===0}function ge(e,r){return r<=6?31:r<=11||oa(e)?30:29}function la(e){const r=P.length;let u=P[0],i,d,o,y,l;if(e<u||e>=P[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(i=P[l],d=i-u,!(e<i));l+=1)u=i;return y=e-u,d-y<6&&(y=y-d+C(d+4,33)*33),o=V(V(y+1,33)-1,4),o===-1&&(o=4),o}function ut(e,r){const u=P.length,i=e+621;let d=-14,o=P[0],y,l,v,Y,f;if(e<o||e>=P[u-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<u&&(y=P[f],l=y-o,!(e<y));f+=1)d=d+C(l,33)*8+C(V(l,33),4),o=y;Y=e-o,d=d+C(Y,33)*8+C(V(Y,33)+3,4),V(l,33)===4&&l-Y===4&&(d+=1);const b=C(i,4)-C((C(i,100)+1)*3,4)-150,F=20+d-b;return r||(l-Y<6&&(Y=Y-l+C(l+4,33)*33),v=V(V(Y+1,33)-1,4),v===-1&&(v=4)),{leap:v,gy:i,march:F}}function ua(e,r,u){const i=ut(e,!0);return Ve(i.gy,3,i.march)+(r-1)*31-C(r,7)*(r-7)+u-1}function sa(e){const r=st(e).gy;let u=r-621,i,d,o;const y=ut(u,!1),l=Ve(r,3,y.march);if(o=e-l,o>=0){if(o<=185)return d=1+C(o,31),i=V(o,31)+1,{jy:u,jm:d,jd:i};o-=186}else u-=1,o+=179,y.leap===1&&(o+=1);return d=7+C(o,30),i=V(o,30)+1,{jy:u,jm:d,jd:i}}function Ve(e,r,u){let i=C((e+C(r-8,6)+100100)*1461,4)+C(153*V(r+9,12)+2,5)+u-34840408;return i=i-C(C(e+100100+C(r-8,6),100)*3,4)+752,i}function st(e){let r=4*e+139361631;r=r+C(C(4*e+183187720,146097)*3,4)*4-3908;const u=C(V(r,1461),4)*5+308,i=C(V(u,153),5)+1,d=V(C(u,153),12)+1;return{gy:C(r,1461)-100100+C(8-d,6),gm:d,gd:i}}function C(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const ia=["gregorian","persian"],et={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>ia.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},ca=["update:modelValue"];function Q(e){return e.year+"/"+x(e.month)+"/"+x(e.day)}function da(e,r){const u=D(()=>e.disable!==!0&&e.readonly!==!0),i=D(()=>u.value===!0?0:-1),d=D(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(l){const v=new Date,Y=l===!0?null:0;if(e.calendar==="persian"){const f=ra(v);return{year:f.jy,month:f.jm,day:f.jd}}return{year:v.getFullYear(),month:v.getMonth()+1,day:v.getDate(),hour:Y,minute:Y,second:Y,millisecond:Y}}return{editable:u,tabindex:i,headerClass:d,getLocale:o,getCurrentDate:y}}const it=864e5,va=36e5,pe=6e4,ct="YYYY-MM-DDTHH:mm:ss.SSSZ",fa=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ma=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,qe={};function ha(e,r){const u="("+r.days.join("|")+")",i=e+u;if(qe[i]!==void 0)return qe[i];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",l={};let v=0;const Y=e.replace(ma,b=>{switch(v++,b){case"YY":return l.YY=v,"(-?\\d{1,2})";case"YYYY":return l.YYYY=v,"(-?\\d{1,4})";case"M":return l.M=v,"(\\d{1,2})";case"Mo":return l.M=v++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return l.M=v,"(\\d{2})";case"MMM":return l.MMM=v,y;case"MMMM":return l.MMMM=v,o;case"D":return l.D=v,"(\\d{1,2})";case"Do":return l.D=v++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=v,"(\\d{2})";case"H":return l.H=v,"(\\d{1,2})";case"HH":return l.H=v,"(\\d{2})";case"h":return l.h=v,"(\\d{1,2})";case"hh":return l.h=v,"(\\d{2})";case"m":return l.m=v,"(\\d{1,2})";case"mm":return l.m=v,"(\\d{2})";case"s":return l.s=v,"(\\d{1,2})";case"ss":return l.s=v,"(\\d{2})";case"S":return l.S=v,"(\\d{1})";case"SS":return l.S=v,"(\\d{2})";case"SSS":return l.S=v,"(\\d{3})";case"A":return l.A=v,"(AM|PM)";case"a":return l.a=v,"(am|pm)";case"aa":return l.aa=v,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return u;case"Q":case"d":case"E":return"(\\d{1})";case"do":return v++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return v++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return v++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return l.Z=v,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=v,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=v,"(-?\\d+)";case"x":return l.x=v,"(-?\\d{4,})";default:return v--,b[0]==="["&&(b=b.substring(1,b.length-1)),b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:l,regex:new RegExp("^"+Y)};return qe[i]=f,f}function dt(e,r){return e!==void 0?e:r!==void 0?r.date:Vt.date}function tt(e,r=""){const u=e>0?"-":"+",i=Math.abs(e),d=Math.floor(i/60),o=i%60;return u+x(d)+r+x(o)}function ga(e,r,u,i,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=ct);const y=dt(u,rt.props),l=y.months,v=y.monthsShort,{regex:Y,map:f}=ha(r,y),b=e.match(Y);if(b===null)return o;let F="";if(f.X!==void 0||f.x!==void 0){const k=parseInt(b[f.X!==void 0?f.X:f.x],10);if(isNaN(k)===!0||k<0)return o;const I=new Date(k*(f.X!==void 0?1e3:1));o.year=I.getFullYear(),o.month=I.getMonth()+1,o.day=I.getDate(),o.hour=I.getHours(),o.minute=I.getMinutes(),o.second=I.getSeconds(),o.millisecond=I.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(b[f.YYYY],10);else if(f.YY!==void 0){const k=parseInt(b[f.YY],10);o.year=k<0?k:2e3+k}if(f.M!==void 0){if(o.month=parseInt(b[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=v.indexOf(b[f.MMM])+1:f.MMMM!==void 0&&(o.month=l.indexOf(b[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(b[f.D],10),o.year===null||o.month===null||o.day<1)return o;const k=i!=="persian"?new Date(o.year,o.month,0).getDate():ge(o.year,o.month);if(o.day>k)return o}f.H!==void 0?o.hour=parseInt(b[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(b[f.h],10)%12,(f.A&&b[f.A]==="PM"||f.a&&b[f.a]==="pm"||f.aa&&b[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(b[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(b[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(b[f.S],10)*10**(3-b[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(F=f.Z!==void 0?b[f.Z].replace(":",""):b[f.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=x(o.year,6)+"/"+x(o.month)+"/"+x(o.day),o.timeHash=x(o.hour)+":"+x(o.minute)+":"+x(o.second)+F,o}function je(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const u=new Date(r.getFullYear(),0,4);u.setDate(u.getDate()-(u.getDay()+6)%7+3);const i=r.getTimezoneOffset()-u.getTimezoneOffset();r.setHours(r.getHours()-i);const d=(r-u)/(it*7);return 1+Math.floor(d)}function B(e,r,u){const i=new Date(e),d=`set${u===!0?"UTC":""}`;switch(r){case"year":case"years":i[`${d}Month`](0);case"month":case"months":i[`${d}Date`](1);case"day":case"days":case"date":i[`${d}Hours`](0);case"hour":case"hours":i[`${d}Minutes`](0);case"minute":case"minutes":i[`${d}Seconds`](0);case"second":case"seconds":i[`${d}Milliseconds`](0)}return i}function he(e,r,u){return(e.getTime()-e.getTimezoneOffset()*pe-(r.getTime()-r.getTimezoneOffset()*pe))/u}function vt(e,r,u="days"){const i=new Date(e),d=new Date(r);switch(u){case"years":case"year":return i.getFullYear()-d.getFullYear();case"months":case"month":return(i.getFullYear()-d.getFullYear())*12+i.getMonth()-d.getMonth();case"days":case"day":case"date":return he(B(i,"day"),B(d,"day"),it);case"hours":case"hour":return he(B(i,"hour"),B(d,"hour"),va);case"minutes":case"minute":return he(B(i,"minute"),B(d,"minute"),pe);case"seconds":case"second":return he(B(i,"second"),B(d,"second"),1e3)}}function ke(e){return vt(e,B(e,"year"),"days")+1}function K(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const at={YY(e,r,u){const i=this.YYYY(e,r,u)%100;return i>=0?x(i):"-"+x(Math.abs(i))},YYYY(e,r,u){return u!=null?u:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return K(e.getMonth()+1)},MM(e){return x(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return K(this.Q(e))},D(e){return e.getDate()},Do(e){return K(e.getDate())},DD(e){return x(e.getDate())},DDD(e){return ke(e)},DDDo(e){return K(ke(e))},DDDD(e){return x(ke(e),3)},d(e){return e.getDay()},do(e){return K(e.getDay())},dd(e,r){return r.days[e.getDay()].slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return je(e)},wo(e){return K(je(e))},ww(e){return x(je(e))},H(e){return e.getHours()},HH(e){return x(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return x(this.h(e))},m(e){return e.getMinutes()},mm(e){return x(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return x(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return x(Math.floor(e.getMilliseconds()/10))},SSS(e){return x(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,r,u,i){const d=i==null?e.getTimezoneOffset():i;return tt(d,":")},ZZ(e,r,u,i){const d=i==null?e.getTimezoneOffset():i;return tt(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ya(e,r,u,i,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=ct);const y=dt(u,rt.props);return r.replace(fa,(l,v)=>l in at?at[l](o,y,i,d):v===void 0?l:v.split("\\]").join("]"))}const X=20,Ma=["Calendar","Years","Months"],nt=e=>Ma.includes(e),Ie=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function L(e){return e.year+"/"+x(e.month)}var Da=ot({name:"QDate",props:{...et,...Lt,...Pt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...et.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ie},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ie},navigationMaxYearMonth:{type:String,validator:Ie},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:nt}},emits:[...ca,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:u}){const{proxy:i}=lt(),{$q:d}=i,o=Rt(e,d),{getCache:y}=na(),{tabindex:l,headerClass:v,getLocale:Y,getCurrentDate:f}=da(e,d);let b;const F=zt(e),k=Xt(F),I=$(null),S=$(Ze()),H=$(Y()),ft=D(()=>Ze()),mt=D(()=>Y()),N=D(()=>f()),g=$(Qe(S.value,H.value)),p=$(e.defaultView),Te=D(()=>d.lang.rtl===!0?"right":"left"),ue=$(Te.value),ye=$(Te.value),Me=g.value.year,se=$(Me-Me%X-(Me<0?X:0)),j=$(null),ht=D(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),R=D(()=>e.color||"primary"),U=D(()=>e.textColor||"white"),ie=D(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),De=D(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),A=D(()=>De.value.filter(t=>typeof t=="string").map(t=>xe(t,S.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),J=D(()=>{const t=a=>xe(a,S.value,H.value);return De.value.filter(a=>Tt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ce=D(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Ke(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),be=D(()=>e.calendar==="persian"?Q:(t,a,n)=>ya(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),ae=D(()=>A.value.length+J.value.reduce((t,a)=>t+1+vt(ce.value(a.to),ce.value(a.from)),0)),$e=D(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(j.value!==null){const n=j.value.init,s=ce.value(n);return H.value.daysShort[s.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(ae.value===0)return ee;if(ae.value>1)return`${ae.value} ${H.value.pluralDay}`;const t=A.value[0],a=ce.value(t);return isNaN(a.valueOf())===!0?ee:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),gt=D(()=>A.value.concat(J.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),yt=D(()=>A.value.concat(J.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Fe=D(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ae.value===0)return ee;if(ae.value>1){const t=gt.value,a=yt.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return A.value[0].year}),de=D(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Ae=D(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),Mt=D(()=>{const t=H.value.daysShort,a=Ae.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=D(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ge(t.year,t.month)}),Dt=D(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),O=D(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=D(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),we=D(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return O.value!==null&&O.value.year>=g.value.year&&(t.year.prev=!1,O.value.year===g.value.year&&O.value.month>=g.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=g.value.year&&(t.year.next=!1,q.value.year===g.value.year&&q.value.month<=g.value.month&&(t.month.next=!1)),t}),ve=D(()=>{const t={};return A.value.forEach(a=>{const n=L(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ee=D(()=>{const t={};return J.value.forEach(a=>{const n=L(a.from),s=L(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===s?a.to.day:void 0,range:a}),n<s){let c;const{year:w,month:m}=a.from,M=m<12?{year:w,month:m+1}:{year:w+1,month:1};for(;(c=L(M))<=s;)t[c]===void 0&&(t[c]=[]),t[c].push({from:void 0,to:c===s?a.to.day:void 0,range:a}),M.month++,M.month>12&&(M.year++,M.month=1)}}),t}),ne=D(()=>{if(j.value===null)return;const{init:t,initHash:a,final:n,finalHash:s}=j.value,[c,w]=a<=s?[t,n]:[n,t],m=L(c),M=L(w);if(m!==T.value&&M!==T.value)return;const _={};return m===T.value?(_.from=c.day,_.includeFrom=!0):_.from=1,M===T.value?(_.to=w.day,_.includeTo=!0):_.to=Z.value,_}),T=D(()=>L(g.value)),bt=D(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Z.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Z.value;n++){const s=T.value+"/"+x(n);t[n]=a(s)}return t}),wt=D(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Z.value;n++){const s=T.value+"/"+x(n);t[n]=a(s)===!0&&Dt.value(s)}}return t}),Yt=D(()=>{let t,a;const{year:n,month:s}=g.value;if(e.calendar!=="persian")t=new Date(n,s-1,1),a=new Date(n,s-1,0).getDate();else{const c=Ke(n,s,1);t=new Date(c.gy,c.gm-1,c.gd);let w=s-1,m=n;w===0&&(w=12,m--),a=ge(m,w)}return{days:t.getDay()-Ae.value-1,endDay:a}}),Ne=D(()=>{const t=[],{days:a,endDay:n}=Yt.value,s=a<0?a+7:a;if(s<6)for(let m=n-s;m<=n;m++)t.push({i:m,fill:!0});const c=t.length;for(let m=1;m<=Z.value;m++){const M={i:m,event:wt.value[m],classes:[]};bt.value[m]===!0&&(M.in=!0,M.flat=!0),t.push(M)}if(ve.value[T.value]!==void 0&&ve.value[T.value].forEach(m=>{const M=c+m-1;Object.assign(t[M],{selected:!0,unelevated:!0,flat:!1,color:R.value,textColor:U.value})}),Ee.value[T.value]!==void 0&&Ee.value[T.value].forEach(m=>{if(m.from!==void 0){const M=c+m.from-1,_=c+(m.to||Z.value)-1;for(let re=M;re<=_;re++)Object.assign(t[re],{range:m.range,unelevated:!0,color:R.value,textColor:U.value});Object.assign(t[M],{rangeFrom:!0,flat:!1}),m.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(m.to!==void 0){const M=c+m.to-1;for(let _=c;_<=M;_++)Object.assign(t[_],{range:m.range,unelevated:!0,color:R.value,textColor:U.value});Object.assign(t[M],{flat:!1,rangeTo:!0})}else{const M=c+Z.value-1;for(let _=c;_<=M;_++)Object.assign(t[_],{range:m.range,unelevated:!0,color:R.value,textColor:U.value})}}),ne.value!==void 0){const m=c+ne.value.from-1,M=c+ne.value.to-1;for(let _=m;_<=M;_++)t[_].color=R.value,t[_].editRange=!0;ne.value.includeFrom===!0&&(t[m].editRangeFrom=!0),ne.value.includeTo===!0&&(t[M].editRangeTo=!0)}g.value.year===N.value.year&&g.value.month===N.value.month&&(t[c+N.value.day-1].today=!0);const w=t.length%7;if(w>0){const m=7-w;for(let M=1;M<=m;M++)t.push({i:M,fill:!0})}return t.forEach(m=>{let M="q-date__calendar-item ";m.fill===!0?M+="q-date__calendar-item--fill":(M+=`q-date__calendar-item--${m.in===!0?"in":"out"}`,m.range!==void 0&&(M+=` q-date__range${m.rangeTo===!0?"-to":m.rangeFrom===!0?"-from":""}`),m.editRange===!0&&(M+=` q-date__edit-range${m.editRangeFrom===!0?"-from":""}${m.editRangeTo===!0?"-to":""}`),(m.range!==void 0||m.editRange===!0)&&(M+=` text-${m.color}`)),m.classes=M}),t}),xt=D(()=>e.disable===!0?{"aria-disabled":"true"}:{});te(()=>e.modelValue,t=>{if(b===t)b=0;else{const a=Qe(S.value,H.value);W(a.year,a.month,a)}}),te(p,()=>{I.value!==null&&i.$el.contains(document.activeElement)===!0&&I.value.focus()}),te(()=>g.value.year+"|"+g.value.month,()=>{u("navigation",{year:g.value.year,month:g.value.month})}),te(ft,t=>{Xe(t,H.value,"mask"),S.value=t}),te(mt,t=>{Xe(S.value,t,"locale"),H.value=t});function Be(){const{year:t,month:a,day:n}=N.value,s={...g.value,year:t,month:a,day:n},c=ve.value[L(s)];(c===void 0||c.includes(s.day)===!1)&&Ce(s),Ye(s.year,s.month)}function _t(t){nt(t)===!0&&(p.value=t)}function Ct(t,a){["month","year"].includes(t)&&(t==="month"?Pe:_e)(a===!0?-1:1)}function Ye(t,a){p.value="Calendar",W(t,a)}function St(t,a){if(e.range===!1||!t){j.value=null;return}const n=Object.assign({...g.value},t),s=a!==void 0?Object.assign({...g.value},a):n;j.value={init:n,initHash:Q(n),final:s,finalHash:Q(s)},Ye(n.year,n.month)}function Ze(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function xe(t,a,n){return ga(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Qe(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Le();const s=n[n.length-1],c=xe(s.from!==void 0?s.from:s,t,a);return c.dateHash===null?Le():c}function Le(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=N.value!==void 0?N.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+x(a)+"/01"}}function Pe(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),W(a,n),ie.value===!0&&fe("month")}function _e(t){const a=Number(g.value.year)+t;W(a,g.value.month),ie.value===!0&&fe("year")}function Ht(t){W(t,g.value.month),p.value=e.defaultView==="Years"?"Months":"Calendar",ie.value===!0&&fe("year")}function Ot(t){W(g.value.year,t),p.value="Calendar",ie.value===!0&&fe("month")}function qt(t,a){const n=ve.value[a];(n!==void 0&&n.includes(t.day)===!0?Se:Ce)(t)}function z(t){return{year:t.year,month:t.month,day:t.day}}function W(t,a,n){if(O.value!==null&&t<=O.value.year&&((a<O.value.month||t<O.value.year)&&(a=O.value.month),t=O.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),n!==void 0){const{hour:c,minute:w,second:m,millisecond:M,timezoneOffset:_,timeHash:re}=n;Object.assign(g.value,{hour:c,minute:w,second:m,millisecond:M,timezoneOffset:_,timeHash:re})}const s=t+"/"+x(a)+"/01";s!==g.value.dateHash&&(ue.value=g.value.dateHash<s==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(ye.value=ue.value),Ue(()=>{se.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:s})}))}function Re(t,a,n){const s=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;b=s;const{reason:c,details:w}=ze(a,n);u("update:modelValue",s,c,w)}function fe(t){const a=A.value[0]!==void 0&&A.value[0].dateHash!==null?{...A.value[0]}:{...g.value};Ue(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ge(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const s=G(a);b=s;const{details:c}=ze("",a);u("update:modelValue",s,t,c)})}function ze(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...z(a.target),from:z(a.from),to:z(a.to)}}:{reason:`${t}-day`,details:z(a)}}function G(t,a,n){return t.from!==void 0?{from:be.value(t.from,a,n),to:be.value(t.to,a,n)}:be.value(t,a,n)}function Ce(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=Q(t.from),s=Q(t.to),c=A.value.filter(m=>m.dateHash<n||m.dateHash>s),w=J.value.filter(({from:m,to:M})=>M.dateHash<n||m.dateHash>s);a=c.concat(w).concat(t).map(m=>G(m))}else{const n=De.value.slice();n.push(G(t)),a=n}else a=G(t);Re(a,"add",t)}function Se(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(s=>s.from!==void 0?s.from!==n.from&&s.to!==n.to:!0):a=e.modelValue.filter(s=>s!==n),a.length===0&&(a=null)}Re(a,"remove",t)}function Xe(t,a,n){const s=A.value.concat(J.value).map(c=>G(c,t,a)).filter(c=>c.from!==void 0?c.from.dateHash!==null&&c.to.dateHash!==null:c.dateHash!==null);u("update:modelValue",(e.multiple===!0?s:s[0])||null,n)}function jt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+v.value},[h("div",{class:"relative-position"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Fe.value,class:"q-date__header-subtitle q-date__header-link "+(p.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vY",{onClick(){p.value="Years"},onKeyup(t){t.keyCode===13&&(p.value="Years")}})},[Fe.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+$e.value,class:"q-date__header-title-label q-date__header-link "+(p.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vC",{onClick(){p.value="Calendar"},onKeyup(t){t.keyCode===13&&(p.value="Calendar")}})},[$e.value]))]),e.todayBtn===!0?h(E,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:Be}):null])])}function He({label:t,type:a,key:n,dir:s,goTo:c,boundaries:w,cls:m}){return[h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[0],tabindex:l.value,disable:w.prev===!1,...y("go-#"+a,{onClick(){c(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+m},[h(oe,{name:"q-transition--jump-"+s},()=>h("div",{key:n},[h(E,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...y("view#"+a,{onClick:()=>{p.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(E,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[1],tabindex:l.value,disable:w.next===!1,...y("go+#"+a,{onClick(){c(1)}})})])]}const kt={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},He({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:ue.value,goTo:Pe,boundaries:we.value.month,cls:" col"}).concat(He({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:_e,boundaries:we.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Mt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(oe,{name:"q-transition--slide-"+ue.value},()=>h("div",{key:T.value,class:"q-date__calendar-days fit"},Ne.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(E,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...y("day#"+t.i,{onClick:()=>{It(t.i)},onMouseover:()=>{pt(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===N.value.year,a=s=>O.value!==null&&g.value.year===O.value.year&&O.value.month>s||q.value!==null&&g.value.year===q.value.year&&q.value.month<s,n=H.value.monthsShort.map((s,c)=>{const w=g.value.month===c+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(E,{class:t===!0&&N.value.month===c+1?"q-date__today":null,flat:w!==!0,label:s,unelevated:w,color:w===!0?R.value:null,textColor:w===!0?U.value:null,tabindex:l.value,disable:a(c+1),...y("month#"+c,{onClick:()=>{Ot(c+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[He({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:_e,boundaries:we.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=se.value,a=t+X,n=[],s=c=>O.value!==null&&O.value.year>c||q.value!==null&&q.value.year<c;for(let c=t;c<=a;c++){const w=g.value.year===c;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(E,{key:"yr"+c,class:N.value.year===c?"q-date__today":null,flat:!w,label:c,dense:!0,unelevated:w,color:w===!0?R.value:null,textColor:w===!0?U.value:null,tabindex:l.value,disable:s(c),...y("yr#"+c,{onClick:()=>{Ht(c)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:de.value[0],tabindex:l.value,disable:s(t),...y("y-",{onClick:()=>{se.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(E,{round:!0,dense:!0,flat:!0,icon:de.value[1],tabindex:l.value,disable:s(a),...y("y+",{onClick:()=>{se.value+=X}})})])])}};function It(t){const a={...g.value,day:t};if(e.range===!1){qt(a,T.value);return}if(j.value===null){const n=Ne.value.find(c=>c.fill!==!0&&c.i===t);if(e.noUnset!==!0&&n.range!==void 0){Se({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Se(a);return}const s=Q(a);j.value={init:a,initHash:s,final:a,finalHash:s},u("rangeStart",z(a))}else{const n=j.value.initHash,s=Q(a),c=n<=s?{from:j.value.init,to:a}:{from:a,to:j.value.init};j.value=null,Ce(n===s?a:{target:a,...c}),u("rangeEnd",{from:z(c.from),to:z(c.to)})}}function pt(t){if(j.value!==null){const a={...g.value,day:t};Object.assign(j.value,{final:a,finalHash:Q(a)})}}return Object.assign(i,{setToday:Be,setView:_t,offsetCalendar:Ct,setCalendarTo:Ye,setEditingRange:St}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(oe,{name:"q-transition--fade"},kt[p.value])])],a=$t(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&k(t,"push"),h("div",{class:ht.value,...xt.value},[jt(),h("div",{ref:I,class:"q-date__main col column",tabindex:-1},t)])}}}),ba=ot({name:"QPopupProxy",props:{...Wt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:u,attrs:i}){const{proxy:d}=lt(),{$q:o}=d,y=$(!1),l=$(null),v=D(()=>parseInt(e.breakpoint,10)),{canShow:Y}=Gt({showing:y});function f(){return o.screen.width<v.value||o.screen.height<v.value?"dialog":"menu"}const b=$(f()),F=D(()=>b.value==="menu"?{maxHeight:"99vh"}:{});te(()=>f(),S=>{y.value!==!0&&(b.value=S)});function k(S){y.value=!0,u("show",S)}function I(S){y.value=!1,b.value=f(),u("hide",S)}return Object.assign(d,{show(S){Y(S)===!0&&l.value.show(S)},hide(S){l.value.hide(S)},toggle(S){l.value.toggle(S)}}),Ft(d,"currentComponent",()=>({type:b.value,ref:l.value})),()=>{const S={ref:l,...F.value,...i,onShow:k,onHide:I};let H;return b.value==="dialog"?H=Ut:(H=Kt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(H,S,r.default)}}});const wa={style:{color:"#CC0100"}},Ya={class:"row items-center justify-end"},ja=Object.assign({name:"DateComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},emits:["updateCrObjectToRenderList"],setup(e,{emit:r}){const u=e,i=r;function d(l){ta({CRList:u.renderObject.cr_List,renderObject:u.renderObject,emits:i,newValue:l})}const{rootClass:o,titleClass:y}=aa({renderObject:u.renderObject});return(l,v)=>(At(),Et("div",{class:We(["q-py-sm",Ge(o)])},[Oe("div",{class:We(["f700 q-mb-xs fz14 wordBreakAll",Ge(y)])},[Nt(Bt(e.renderObject.label),1),Je(Oe("span",wa,"*",512),[[Zt,e.renderObject.required]])],2),le(Jt,{class:"col",outlined:"",dense:"",modelValue:e.renderObject.value,"onUpdate:modelValue":[v[2]||(v[2]=Y=>e.renderObject.value=Y),v[3]||(v[3]=Y=>{d(Y)})],mask:"date"},{append:me(()=>[le(Qt,{name:"event",class:"cursor-pointer"},{default:me(()=>[le(ba,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:me(()=>[le(Da,{minimal:"",modelValue:e.renderObject.value,"onUpdate:modelValue":[v[0]||(v[0]=Y=>e.renderObject.value=Y),v[1]||(v[1]=Y=>{d(Y)})]},{default:me(()=>[Oe("div",Ya,[Je(le(E,{label:"Close",color:"primary",flat:""},null,512),[[ea]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],2))}});export{ja as default};
