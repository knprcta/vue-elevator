(function(){"use strict";var e={8688:function(e,t,l){var n=l(9242),o=(l(6699),l(3396)),r=l(4870);const s=(0,o._)("span",{class:"text-lg font-semibold text-white"},"Настройки",-1),a=[s],i=["onClick"],u={class:"w-auto m-4 transition-transform duration-300 bg-white rounded-md ease-out-default modal-container sm:max-w-lg sm:mx-auto sm:my-10"},c={class:"flex flex-col"},v=(0,o._)("h5",{class:"text-xl font-medium"},"Настройки",-1),d=(0,o._)("span",{class:"text-2xl leading-none text-gray-400 transition-colors group-hover:text-black"},"×",-1),p=[d],f={class:"flex flex-col items-center gap-2 p-4"},b={class:"flex flex-col items-center gap-1"},m=(0,o._)("label",{for:"levels"},"Количество этажей",-1),x={class:"flex"},g=["disabled"],w=(0,o._)("span",{class:"text-2xl font-bold leading-none"},"-",-1),_=[w],y=["disabled"],h=(0,o._)("span",{class:"text-2xl font-bold leading-none"},"+",-1),I=[h],T={class:"flex flex-col items-center gap-1"},k=(0,o._)("label",{for:"elevators"},"Количество лифтов",-1),L={class:"flex"},O=["disabled"],q=(0,o._)("span",{class:"text-2xl font-bold leading-none"},"-",-1),S=[q],M=["disabled"],j=(0,o._)("span",{class:"text-2xl font-bold leading-none"},"+",-1),C=[j],U={key:0,class:"p-1 text-sm text-center text-red-500"},D={class:"flex justify-end gap-3 p-4 border-t"},N=(0,o._)("span",{class:"font-medium text-white"},"Отмена",-1),Y=[N],$=["disabled"],K=(0,o._)("span",{class:"font-medium text-white"},"Принять",-1),P=[K];var R={__name:"TheSettings",props:{elevatorsTotal:Number,levelsTotal:Number},emits:["submit"],setup(e,{emit:t}){const l=e,s=(0,r.qj)({isOpen:!1,elevatorsInput:"",levelsInput:""}),d=(0,o.Fl)((()=>s.elevatorsInput!==l.elevatorsTotal||s.levelsInput!==l.levelsTotal));function w(){s.isOpen=!0}function h(){s.isOpen=!1}function q(e){27===e.keyCode&&h()}function j(){t("submit",s.levelsInput,s.elevatorsInput),h()}return(0,o.m0)((()=>{s.isOpen?(document.addEventListener("keydown",q),s.elevatorsInput=l.elevatorsTotal,s.levelsInput=l.levelsTotal):document.removeEventListener("keydown",q)})),(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{onClick:w,class:"px-3 py-2 mx-auto my-5 bg-blue-500 border-current rounded hover:bg-blue-600 !ring-blue-500/50"},a),((0,o.wg)(),(0,o.j4)(o.lR,{to:"#app"},[(0,o.Wm)(n.uT,{name:"modal"},{default:(0,o.w5)((()=>[s.isOpen?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:(0,n.iM)(h,["self"]),class:"fixed inset-0 z-50 transition-opacity ease-linear bg-black/50"},[(0,o._)("div",u,[(0,o._)("div",c,[(0,o._)("div",{class:"flex items-start justify-between p-4 border-b"},[v,(0,o._)("button",{onClick:h,class:"p-4 -m-4 border-0 group hover:ring-0"},p)]),(0,o._)("div",f,[(0,o._)("div",b,[m,(0,o._)("div",x,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>s.levelsInput--),disabled:s.levelsInput<=2,class:"z-50 w-10 py-2 border rounded-l"},_,8,g),(0,o.wy)((0,o._)("input",{id:"levels",class:"w-20 -mx-px text-lg font-semibold text-center border rounded-none",type:"number",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>s.levelsInput=e),disabled:""},null,512),[[n.nr,s.levelsInput,void 0,{number:!0}]]),(0,o._)("button",{onClick:t[2]||(t[2]=e=>s.levelsInput++),disabled:s.levelsInput>=10,class:"w-10 py-2 border rounded-r"},I,8,y)])]),(0,o._)("div",T,[k,(0,o._)("div",L,[(0,o._)("button",{onClick:t[3]||(t[3]=e=>s.elevatorsInput--),disabled:s.elevatorsInput<=1,class:"z-50 w-10 py-2 border rounded-l"},S,8,O),(0,o.wy)((0,o._)("input",{id:"elevators",class:"w-20 -mx-px text-lg font-semibold text-center border rounded-none",type:"number",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>s.elevatorsInput=e),disabled:""},null,512),[[n.nr,s.elevatorsInput,void 0,{number:!0}]]),(0,o._)("button",{onClick:t[5]||(t[5]=e=>s.elevatorsInput++),disabled:s.elevatorsInput>=10,class:"w-10 py-2 border rounded-r"},C,8,M)])]),(0,r.SU)(d)?((0,o.wg)(),(0,o.iD)("p",U," После принятия изменений состояния лифтов будут сброшены, очередь очищена, а страница перезагружена! ")):(0,o.kq)("",!0)]),(0,o._)("div",D,[(0,o._)("button",{onClick:h,class:"px-3 py-2 bg-gray-500 rounded hover:bg-gray-600 !ring-gray-500/50"},Y),(0,o._)("button",{disabled:!(0,r.SU)(d),onClick:j,class:"px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 !ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"},P,8,$)])])])],8,i)):(0,o.kq)("",!0)])),_:1})]))],64))}};const F=R;var H=F,J=l(7139);const z={class:"relative flex flex-col h-full bg-gray-200 max-w-[8rem] w-full"},B={class:"text-lg font-semibold"};var E={__name:"TheElevator",props:{number:Number,levelsTotal:Number},emits:["stop"],setup(e,{expose:t,emit:l}){const n=e,s=(0,r.qj)({currentLevel:1,nextLevel:1,timer:3,isIdle:!0,isMoving:!1,isMovingUp:!1,isOpen:!1,isLocal:!1});function a(){s.isIdle=!1,s.isMovingUp=s.currentLevel<s.nextLevel,s.isMoving=!0}async function i(){l("stop",s.currentLevel),s.isMoving=!1,s.isOpen=!0;while(s.timer>0)s.timer--,await u(1e3);s.isOpen=!1,s.isIdle=!0,s.timer=3}function u(e){return new Promise((t=>setTimeout(t,e)))}async function c(){if(a(),s.isMovingUp)for(let e=10*s.currentLevel,t=10*s.nextLevel;e<t;await u(100))e++,s.currentLevel=e/10;if(!s.isMovingUp)for(let e=10*s.currentLevel,t=10*s.nextLevel;e>t;await u(100))e--,s.currentLevel=e/10;i()}(0,o.YP)((()=>s.nextLevel),(()=>{s.nextLevel!==s.currentLevel&&c()}));const v=(0,o.Fl)((()=>({height:1/n.levelsTotal*100+"%",transform:`translateY(-${100*(s.currentLevel-1)}%)`})));return(0,o.YP)(s,(()=>{localStorage.setItem(`elevator-${n.number}`,JSON.stringify(s))})),(0,o.wF)((()=>{if(localStorage[`elevator-${n.number}`]){const e=JSON.parse(localStorage.getItem(`elevator-${n.number}`));s.currentLevel=e.currentLevel,s.timer=e.timer,s.isMoving=e.isMoving,s.isMovingUp=e.isMovingUp,s.isIdle=e.isIdle,s.isOpen=e.isOpen,s.nextLevel=e.nextLevel,1===s.nextLevel&&s.isMoving&&c(),(s.currentLevel===s.nextLevel&&!s.isIdle||s.isOpen)&&setTimeout((()=>{i()}),100)}})),t({...(0,r.BK)(n),...(0,r.BK)(s)}),(t,l)=>((0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",{style:(0,J.j5)((0,r.SU)(v)),class:(0,J.C_)([{"animate-push":s.isOpen},{"flex-col-reverse":!s.isMovingUp},"absolute bottom-0 flex flex-col items-center justify-center w-full text-white ease-linear bg-black border-2 border-white transition-transform duration-100"])},[s.isMoving?((0,o.wg)(),(0,o.iD)("span",{key:0,class:(0,J.C_)([{"rotate-180":!s.isMovingUp},"text-xl md:text-3xl"])}," ↑ ",2)):(0,o.kq)("",!0),(0,o._)("span",B,(0,J.zw)(s.nextLevel),1)],6),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.levelsTotal,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"flex-grow w-full border-2 border-white"})))),128))]))}};const V=E;var W=V;const A={class:"flex flex-col items-start justify-center flex-grow px-3 bg-gray-300 border-2 border-white md:px-6 flex-2"},G={class:"flex items-center gap-4"},Q=(0,o._)("span",{class:"w-3 h-3 bg-current rounded-full"},null,-1),X=[Q],Z={class:"text-lg font-semibold"};var ee={__name:"TheLevel",props:{number:Number},setup(e,{expose:t}){const l=e,n=(0,r.qj)({isRequested:!1});return(0,o.YP)(n,(()=>{localStorage.setItem(`level-${l.number}`,JSON.stringify(n))})),(0,o.wF)((()=>{if(localStorage[`level-${l.number}`]){const e=JSON.parse(localStorage.getItem(`level-${l.number}`));n.isRequested=e.isRequested}})),t({...(0,r.BK)(l),...(0,r.BK)(n)}),(t,l)=>((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("div",G,[(0,o._)("button",{onClick:l[0]||(l[0]=l=>t.$emit("call",e.number)),class:(0,J.C_)([n.isRequested?"text-blue-500 border-blue-500 ring-blue-500/50 animate-push scale-90 cursor-wait":"text-black border-black hover:bg-gray-400 ring-black/50","flex p-2.5 border-2 rounded-full"])},X,2),(0,o._)("span",Z,(0,J.zw)(e.number),1)])]))}};const te=ee;var le=te;const ne={class:"flex flex-col w-full h-[85vh] px-3 md:pb-8 md:px-8 xl:px-20 xl:pb-20 xl:pt-5 md:h-screen"},oe={class:"flex flex-row h-full"},re={class:"flex flex-col-reverse flex-grow"};var se={__name:"App",setup(e){const t=(0,r.iH)([]),l=(0,r.iH)([]),n=(0,r.qj)({elevatorsTotal:3,levelsTotal:7,queue:[]});function s(e,t){localStorage.clear(),n.levelsTotal=e,n.elevatorsTotal=t,n.queue.length=0,setTimeout((()=>{window.location.reload()}),100)}function a(e){if(!t.value.some((t=>t.currentLevel===e&&t.isIdle))&&!t.value.some((t=>t.nextLevel===e))&&!n.queue.includes(e)){const t=l.value.findIndex((t=>t.number===e));l.value[t].isRequested=!0,n.queue.push(e)}}function i(e){const t=l.value.findIndex((t=>t.number===e));l.value[t].isRequested=!1}function u(){const e=t.value.filter((e=>e.isIdle)),l=e.map((e=>e.currentLevel)).sort(((e,t)=>t-e)),o=l.reduce(((e,t)=>Math.abs(t-n.queue[0])<Math.abs(e-n.queue[0])?t:e)),r=t.value.findIndex((e=>e.currentLevel===o&&e.isIdle));t.value[r].nextLevel=n.queue.shift()}return(0,o.m0)((()=>{n.queue.length&&t.value.some((e=>e.isIdle))&&u()})),(0,o.YP)(n,(()=>{localStorage.setItem("app_state",JSON.stringify(n))})),(0,o.wF)((()=>{if(localStorage.app_state){const e=JSON.parse(localStorage.getItem("app_state"));n.elevatorsTotal=e.elevatorsTotal,n.levelsTotal=e.levelsTotal,n.queue=e.queue}})),(e,r)=>((0,o.wg)(),(0,o.iD)("div",ne,[(0,o.Wm)(H,{levelsTotal:n.levelsTotal,elevatorsTotal:n.elevatorsTotal,onSubmit:s},null,8,["levelsTotal","elevatorsTotal"]),(0,o._)("div",oe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.elevatorsTotal,(e=>((0,o.wg)(),(0,o.j4)(W,{ref_for:!0,ref_key:"elevatorList",ref:t,key:e,number:e,levelsTotal:n.levelsTotal,onStop:i},null,8,["number","levelsTotal"])))),128)),(0,o._)("div",re,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.levelsTotal,(e=>((0,o.wg)(),(0,o.j4)(le,{ref_for:!0,ref_key:"levelList",ref:l,key:e,number:e,onCall:a},null,8,["number"])))),128))])])]))}};const ae=se;var ie=ae;(0,n.ri)(ie).mount("#app")}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,l),r.exports}l.m=e,function(){var e=[];l.O=function(t,n,o,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],a=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(i)var c=i(l)}for(t&&t(n);u<s.length;u++)r=s[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(c)},n=self["webpackChunkvue_elevator"]=self["webpackChunkvue_elevator"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(8688)}));n=l.O(n)})();
//# sourceMappingURL=app.d0a52f8b.js.map