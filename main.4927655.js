(()=>{"use strict";var e={6002:(e,t,r)=>{var n={};r.r(n),r.d(n,{resetTimer:()=>A,resize:()=>M,setTick:()=>F,setTimer:()=>q,startTimer:()=>B,stopTimer:()=>N});var o=r(7378),i=r(1542),c=r(8036),a=r(5106);r(9724),r(3938),r(5699),r(2410);function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={workingTime:25,smallBreakTime:5,bigBreakTime:20,pomodorosInRound:4,pomodorosInDay:10,chceckedSoundCheckboxes:[]},d=function(e,t,r){if(1===e[r]&&"DECREASE"===t||60===e[r]&&"INCREASE"===t)return e;var n=1;return"DECREASE"===t&&(n=-1),f(f({},e),{},p({},r,e[r]+n))},y=function(e,t){var r=e.chceckedSoundCheckboxes.findIndex((function(e){return e===t}));return-1!==r?[].concat(u(e.chceckedSoundCheckboxes.slice(0,r)),u(e.chceckedSoundCheckboxes.slice(r+1))):[].concat(u(e.chceckedSoundCheckboxes),[t])};const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"INCREASE":case"DECREASE":return d(e,r,n);case"TOGGLE_SOUND_CHECKBOXES":return f(f({},e),{},{chceckedSoundCheckboxes:y(e,n)});default:return e}};r(5623),r(1514);var h=2*Math.PI*150;const g="assets/sounds/rose.7a65146.mp3";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E={title:"Let`s get to work!",mode:"stopped",isStarted:!1,completedPomodoros:0,timeLeft:1500,step:h/1500,dashOffset:h,circumference:h,radius:150},S=function(e,t){var r=2*Math.PI*e.radius;return k(k({},E),{},{timeLeft:60*t,step:r/(60*t),dashOffset:r,circumference:r,radius:e.radius})},w=function(e,t,r,n){var o=n.workingTime;return"bigBreak"===t?o=n.bigBreakTime:"smallBreak"===t&&(o=n.smallBreakTime),k(k({},e),{},{mode:t,title:r,step:2*Math.PI*e.radius/(60*o),timeLeft:60*o,dashOffset:2*Math.PI*e.radius,completedPomodoros:"working"===t?e.completedPomodoros:e.completedPomodoros+1})},T=function(e,t,r){e.includes(t)&&new Audio(r).play()},j=function(e,t){if("working"===e.mode&&0===e.timeLeft){var r=e.completedPomodoros+1;return r===t.pomodorosInDay?(T(t.chceckedSoundCheckboxes,"soundFinishWork",g),S(e,t.workingTime)):r===t.pomodorosInRound?(T(t.chceckedSoundCheckboxes,"soundBigBreak","assets/sounds/bell.6d2ecb9.mp3"),w(e,"bigBreak","Big break, warm up!",t)):(T(t.chceckedSoundCheckboxes,"soundSmallBreak","assets/sounds/ship-bell.5693f1e.mp3"),w(e,"smallBreak","Take a small break and carry on!",t))}return"smallBreak"!==e.mode&&"bigBreak"!==e.mode||0!==e.timeLeft?k(k({},e),{},{timeLeft:e.timeLeft-1,dashOffset:e.dashOffset-e.step}):e.completedPomodoros===t.pomodorosInDay?S(e,t.workingTime):(T(t.chceckedSoundCheckboxes,"soundStarthWork",g),w(e,"working","Stay focused for the rest of your time.",t))};const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"START_TIMER":return k(k({},e),{},{isStarted:!0,mode:"working",title:"Stay focused for the rest of your time."});case"STOP_TIMER":return k(k({},e),{},{isStarted:!1,mode:"stopped",title:"Keep going!"});case"RESET_TIMER":return S(e,n);case"SET_TIMER":return k(k({},e),{},{timeLeft:60*n,dashOffset:2*Math.PI*e.radius,step:e.circumference/(60*n)});case"SET_TICK":return j(e,n);case"RESIZE":var o=2*Math.PI*n.radius,i=o/(60*n.workingTime);return k(k({},e),{},{step:i,dashOffset:o-i*(60*n.workingTime-e.timeLeft),circumference:o,radius:n.radius});default:return e}};const R=(0,a.UY)({settings:b,timer:P});window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.qC;var C=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(e){return}}(),_=(0,a.MT)(R,C);_.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(e){}}({settings:_.getState().settings})}));const I=_;var x=r(3615),D=r.n(x),B=(r(2274),function(){return{type:"START_TIMER"}}),N=function(){return{type:"STOP_TIMER"}},A=function(e){return{type:"RESET_TIMER",payload:e}},q=function(e){return{type:"SET_TIMER",payload:e}},F=function(e){return{type:"SET_TICK",payload:e}},M=function(e){return{type:"RESIZE",payload:e}};const L="_39LJaJz2hOmR2BGfPT-lPz",z="GQYGTUi0DK6MCnU64took",U="_2kFhJPCPvvQ2XZ52T-C5-u";function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=W(e);if(t){var o=W(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?V(e):t}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(c,e);var t,r,n,i=K(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={clicked:""},t.handleClick=t.handleClick.bind(V(t)),t}return t=c,(r=[{key:"handleClick",value:function(e){var t=e.currentTarget.id;this.setState({clicked:t})}},{key:"ToggleFirstBtn",value:function(){switch(this.state.clicked){case"one":case"two":case"three":return z;case"four":default:return U}}},{key:"ToggleSecondBtn",value:function(){switch(this.state.clicked){case"one":return U;case"two":return z;case"three":return U;case"four":default:return z}}},{key:"ToggleThirdFourthBtn",value:function(){switch(this.state.clicked){case"one":return z;case"two":return U;case"three":case"four":default:return z}}},{key:"render",value:function(){var e=this,t=this.props,r=t.start,n=t.pause,i=t.reset;return o.createElement("div",{className:L},o.createElement("button",{id:"one",type:"button",className:this.ToggleFirstBtn(),onClick:function(t){e.handleClick(t),r(t)},"aria-label":"Start"},"Start"),o.createElement("button",{id:"two",type:"button",className:this.ToggleSecondBtn(),onClick:function(t){e.handleClick(t),n(t)},"aria-label":"Pause"},"Pause"),o.createElement("button",{id:"three",type:"button",className:this.ToggleThirdFourthBtn(),onClick:function(t){e.handleClick(t),r(t)},"aria-label":"Start"},"Continue"),o.createElement("button",{id:"four",type:"button",className:this.ToggleThirdFourthBtn(),onClick:function(t){e.handleClick(t),i(t)},"aria-label":"Reset"},"Stop"))}}])&&Q(t.prototype,r),n&&Q(t,n),c}(o.Component);X.propTypes={start:D().func.isRequired,pause:D().func.isRequired,reset:D().func.isRequired};const J=(0,c.$j)((function(e){return{isStarted:e.timer.isStarted}}),(function(e,t){var r=t.time;return{start:function(){return e(B())},pause:function(){return e(N())},reset:function(){return e(A(r))}}}))(X);r(3238),r(895),r(2228);var $={working:"Work",smallBreak:"Small Break",bigBreak:"Big Break",stopped:"Stopped"},Y=document.querySelector("title"),ee=document.querySelector("body");const te=function(e,t){var r=(0,o.useRef)(),n=e.minutes,i=e.seconds;(0,o.useEffect)((function(){r.current=Y.textContent}),[]),(0,o.useEffect)((function(){Y.textContent="stopped"!==t?"".concat($[t]," - ").concat(n,":").concat(i):r.current}),[n,t,i]),"stopped"===t||"working"===t?ee.style.background="linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%), #FFFFFF":"bigBreak"!==t&&"smallBreak"!==t||(ee.style.background="linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)")};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const oe=function(){var e=re((0,o.useState)(0),2),t=e[0],r=e[1];return(0,o.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t},ie="_2n2VjFU0kb9AKJanl29ww",ce="mXQifvfpaG1kNafH4LQFS";var ae=function(e){var t=e.minutes,r=e.seconds;return o.createElement("div",{className:ie},o.createElement("div",{className:ce},o.createElement("span",null,t),o.createElement("span",null,":"),o.createElement("span",null,r)))};ae.propTypes={minutes:D().string.isRequired,seconds:D().string.isRequired};const ue=ae,se="_3CvinvcfRUs_rN30Ll13X";var le=o.memo((function(e){var t=e.radius,r=e.circumference,n=e.dashOffset;return o.createElement("svg",{className:se},o.createElement("circle",{r:t,cx:t+5,cy:t+5,fill:"none",strokeDasharray:r}),o.createElement("circle",{r:t,cx:t+5,cy:t+5,fill:"none",strokeDasharray:r,strokeDashoffset:n,strokeLinecap:"round",transform:"rotate(-90,".concat(t+5,",").concat(t+5,")")}))}));le.propTypes={radius:D().number.isRequired,circumference:D().number.isRequired,dashOffset:D().number.isRequired};const fe=le,pe="_8-DGmlklw3nXRggCUqyl8";var me=function(e){return e.toString().padStart(2,"0")},de=function(e){var t=e.settings,r=e.timer,n=e.updateTick,i=e.updateTimer,c=e.updateOnResize,a=t.workingTime,u=t.pomodorosInDay,s=r.isStarted,l=r.dashOffset,f=r.timeLeft,p=r.completedPomodoros,m=r.radius,d=r.circumference,y=r.mode,b=me(Math.floor(f/60)),h=me(f-60*b),g=oe();return te({minutes:b,seconds:h},y),(0,o.useEffect)((function(){c({radius:145,workingTime:a})}),[c,g,a]),(0,o.useEffect)((function(){var e;return s&&(e=setInterval((function(){n(t)}),1e3)),function(){return clearInterval(e)}}),[t,s,n]),(0,o.useEffect)((function(){i(a)}),[i,a]),o.createElement("div",{className:pe},o.createElement(fe,{radius:m,circumference:d,dashOffset:l}),o.createElement(ue,{timeLeft:f,minutes:b,seconds:h,completedPomodoros:p,pomodorosInDay:u}))};de.propTypes={settings:D().shape({workingTime:D().number,pomodorosInDay:D().number,bigBreakTime:D().number,smallBreakTime:D().number,pomodorosInRound:D().number,chceckedSoundCheckboxes:D().arrayOf(D().string).isRequired}).isRequired,timer:D().shape({isStarted:D().bool,dashOffset:D().number,timeLeft:D().number,completedPomodoros:D().number,circumference:D().number,radius:D().number,mode:D().string.isRequired}).isRequired,updateTick:D().func.isRequired,updateTimer:D().func.isRequired,updateOnResize:D().func.isRequired};const ye=(0,c.$j)((function(e){return{settings:e.settings,timer:e.timer}}),(function(e){var t=(0,a.DE)(n,e),r=t.setTimer,o=t.setTick,i=t.resize;return{updateTick:function(e){return o(e)},updateTimer:function(e){return r(e)},updateOnResize:function(e){return i(e)}}}))(de),be="_1bd8YT5WaROAQPN7CBDww4";const he=function(){return o.createElement("div",{className:be},"Error!")};function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Te(e);if(t){var o=Te(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Se(this,r)}}function Se(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?we(e):t}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(c,e);var t,r,n,i=Ee(c);function c(){var e;ve(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return je(we(e=i.call.apply(i,[this].concat(r))),"state",{hasError:!1}),e}return t=c,(r=[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?o.createElement(he,null):t}}])&&ke(t.prototype,r),n&&ke(t,n),c}(o.Component);Pe.propTypes={children:D().element.isRequired};const Re=Pe,Ce="Cv4kjRT9cogKQZ6t5dBut";var _e=function(e){var t=e.workingTime;return o.createElement(o.Fragment,null,o.createElement("main",{className:Ce},o.createElement(Re,null,o.createElement(ye,null)),o.createElement(J,{time:t})))};_e.propTypes={workingTime:D().number},_e.defaultProps={workingTime:25};const Ie=(0,c.$j)((function(e){return{workingTime:e.settings.workingTime}}))(_e);r(1013),r(2571),r(7471);function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const Be=function(e){e.styles;var t=De(e,["styles"]);return o.createElement("svg",xe({width:"36",height:"36",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M16.87 30.083h-2.755a2.45 2.45 0 01-2.45-2.45v-1.59a.495.495 0 00-.321-.422.554.554 0 00-.598 0l-1.08 1.167a2.435 2.435 0 01-3.456 0l-1.997-1.955a2.421 2.421 0 01-.73-1.735c.001-.661.263-1.296.73-1.765l1.079-1.079a.496.496 0 000-.54c-.088-.218-.234-.378-.438-.378H3.367a2.465 2.465 0 01-2.45-2.465v-2.756a2.45 2.45 0 012.45-2.45h1.59a.496.496 0 00.422-.321.554.554 0 000-.598l-1.166-1.08a2.435 2.435 0 010-3.456l1.954-1.997a2.406 2.406 0 011.72-.73 2.509 2.509 0 011.78.73l1.079 1.079a.496.496 0 00.54 0c.218-.088.379-.234.379-.438V3.367a2.465 2.465 0 012.464-2.45h2.83a2.45 2.45 0 012.45 2.45v1.59a.496.496 0 00.32.422.554.554 0 00.598 0l1.006-1.166a2.435 2.435 0 013.457 0l1.998 1.954a2.434 2.434 0 01.729 1.735 2.378 2.378 0 01-.73 1.765l-1.079 1.079a.496.496 0 000 .54c.088.218.234.379.438.379h1.59a2.464 2.464 0 012.347 2.464v2.83a2.45 2.45 0 01-2.45 2.45h-1.59a.496.496 0 00-.422.32.496.496 0 000 .54l1.123 1.123a2.436 2.436 0 010 3.456l-1.91 1.94a2.41 2.41 0 01-1.721.729 2.508 2.508 0 01-1.736-.73l-1.123-1.079a.496.496 0 00-.54 0c-.218.088-.379.234-.379.438v1.59a2.465 2.465 0 01-2.464 2.347zm-2.289-2.916h1.838v-1.123a3.398 3.398 0 012.129-3.121 3.442 3.442 0 013.777.685l.788.788 1.283-1.283-.788-.802a3.412 3.412 0 01-.7-3.734 3.398 3.398 0 013.121-2.114h1.138V14.58h-1.123a3.398 3.398 0 01-3.121-2.129 3.443 3.443 0 01.685-3.777l.788-.787-1.284-1.284-.802.788a3.485 3.485 0 01-5.833-2.436V3.833h-1.896v1.123a3.398 3.398 0 01-2.129 3.121 3.442 3.442 0 01-3.777-.685l-.787-.788-1.284 1.284.788.802a3.485 3.485 0 01-2.436 5.833H3.833v1.837h1.123a3.397 3.397 0 013.121 2.13 3.441 3.441 0 01-.685 3.777l-.788.787 1.284 1.284.802-.788a3.485 3.485 0 015.833 2.435l.058 1.182z",fill:"#FAFAFA",fillOpacity:".7"}),o.createElement("path",{d:"M15.5 20.604a5.104 5.104 0 110-10.209 5.104 5.104 0 010 10.21zm0-7.292a2.187 2.187 0 100 4.374 2.187 2.187 0 000-4.374z",fill:"#FAFAFA",fillOpacity:".7"}))};function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const qe=function(e){e.styles;var t=Ae(e,["styles"]);return o.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 255 255"},t),o.createElement("path",{d:"M0 191.25l127.5-127.5L255 191.25z"}))};function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const Le=function(e){e.styles;var t=Me(e,["styles"]);return o.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 255 255"},t),o.createElement("path",{d:"M0 63.75l127.5 127.5L255 63.75z"}))},ze="_3dk7kT21p7tVHysK3Sjqdz";var Ue=function(e){var t=e.icon,r=e.onClick;return o.createElement("button",{type:"button",onClick:r,className:ze},t)};Ue.propTypes={icon:D().element.isRequired,onClick:D().func.isRequired};const Ge=Ue,Qe="_2_mNRmisWTPEK7kjZhp2r7";var He=function(e){var t=e.value,r=e.isTime,n=e.onDecrease,i=e.onIncrease;return o.createElement("div",null,r?o.createElement("span",{className:Qe},t," ",o.createElement("div",null,o.createElement(Ge,{icon:o.createElement(qe,null),onClick:i}),o.createElement(Ge,{icon:o.createElement(Le,null),onClick:n}))):o.createElement("span",{className:Qe},t," ",o.createElement("div",null,o.createElement(Ge,{className:"plus",icon:o.createElement(qe,null),onClick:i}),o.createElement(Ge,{icon:o.createElement(Le,null),onClick:n}))))};He.propTypes={value:D().number,isTime:D().bool,onDecrease:D().func.isRequired,onIncrease:D().func.isRequired},He.defaultProps={value:0,isTime:!1};const Ke=He,Ze="_1EFS0_VJVGVHMrU1e24UNb",Ve="_1myD14maRgQnrdco-lWzUb";var We=function(e){var t=e.title,r=e.value,n=e.isTime,i=e.onDecrease,c=e.onIncrease;return o.createElement("div",{className:Ze},o.createElement("span",{className:Ve},t),o.createElement(Ke,{value:r,isTime:n,onDecrease:i,onIncrease:c}))};We.propTypes={title:D().string,value:D().number,isTime:D().bool,onDecrease:D().func.isRequired,onIncrease:D().func.isRequired},We.defaultProps={title:"Hello!",value:0,isTime:!1};const Xe=We,Je={SettingsPanel:"_1_-KO2AzNUND0CWC9LRCNb",CloseBtn:"_3cUaQHOMXzj8mHgwf0pxqQ",AppHeader:"_1A2eA87L76FCRrYZTsvZ5c",SettingsBtn:"_3ws5jNoNGaBOa1OnQ_wBho",CloseSettings:"_2OzMfmz8_9bRB9vIUDZ4A_",open:"_3tPNL9aD2tZNwqxixMSwt3",hide:"_3i0S7xZbfjafaQF2emao9S"};function $e(e){return($e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function tt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ot(e);if(t){var o=ot(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return rt(this,r)}}function rt(e,t){return!t||"object"!==$e(t)&&"function"!=typeof t?nt(e):t}function nt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ot(e){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var it={timerGroup:[{settingName:"workingTime",title:"Pomodoro",isTime:!0},{settingName:"smallBreakTime",title:"Short break",isTime:!0},{settingName:"bigBreakTime",title:"Long break",isTime:!0}],countGroup:[{settingName:"pomodorosInRound",title:"Number of pomodoro between break",isTime:!1}]},ct=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(c,e);var t,r,n,i=tt(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={clicked:""},t.handleClick=t.handleClick.bind(nt(t)),t}return t=c,(r=[{key:"handleClick",value:function(e){var t=e.currentTarget.id;this.setState({clicked:t})}},{key:"ToggleSettings",value:function(){switch(this.state.clicked){case"openSettings":return Je.open;case"closeSettings":default:return Je.hide}}},{key:"render",value:function(){var e=this,t=this.props,r=t.settings,n=t.onDecrease,i=t.onIncrease;return o.createElement("div",{className:Je.AppHeader},o.createElement("button",{id:"openSettings",type:"button",className:Je.SettingsBtn,onClick:function(t){return e.handleClick(t)},"aria-label":"Settings"},o.createElement(Be,null)),o.createElement("div",{id:this.ToggleSettings(),className:Je.SettingsPanel},Object.keys(it).map((function(e){return o.createElement("div",{className:Je.Group,key:e},it[e].map((function(e){var t=e.settingName,c=e.title,a=e.isTime,u=e.isSound;return o.createElement(Xe,{key:t,id:t,title:c,value:r[t],isTime:a,isSound:u,onDecrease:function(){return n(t)},onIncrease:function(){return i(t)}})})))})),o.createElement("button",{id:"closeSettings",type:"button",onClick:function(t){return e.handleClick(t)},className:Je.CloseSettings},"Close")))}}])&&Ye(t.prototype,r),n&&Ye(t,n),c}(o.Component);ct.propTypes={settings:D().shape({workingTime:D().number,pomodorosInDay:D().number,bigBreakTime:D().number,smallBreakTime:D().number,pomodorosInRound:D().number,chceckedSoundCheckboxes:D().arrayOf(D().string).isRequired}).isRequired,onDecrease:D().func.isRequired,onIncrease:D().func.isRequired};const at=(0,c.$j)((function(e){return{settings:e.settings}}),(function(e){return{onIncrease:function(t){return e(function(e){return{type:"INCREASE",payload:e}}(t))},onDecrease:function(t){return e(function(e){return{type:"DECREASE",payload:e}}(t))}}}))(ct),ut="_3dFQPd8p6zzATxuk-sPp5q";const st=function(){return o.createElement("div",{className:ut},o.createElement(at,null),o.createElement(Ie,null))};i.render(o.createElement(c.zt,{store:I},o.createElement(st,null)),document.getElementById("root"))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0},t=[[6002,177]],n=e=>{},o=(o,i)=>{for(var c,a,[u,s,l,f]=i,p=0,m=[];p<u.length;p++)a=u[p],r.o(e,a)&&e[a]&&m.push(e[a][0]),e[a]=0;for(c in s)r.o(s,c)&&(r.m[c]=s[c]);for(l&&l(r),o&&o(i);m.length;)m.shift()();return f&&t.push.apply(t,f),n()},i=self.webpackChunk=self.webpackChunk||[];function c(){for(var n,o=0;o<t.length;o++){for(var i=t[o],c=!0,a=1;a<i.length;a++){var u=i[a];0!==e[u]&&(c=!1)}c&&(t.splice(o--,1),n=r(r.s=i[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var a=r.x;r.x=()=>(r.x=a||(e=>{}),(n=c)())})(),r.x()})();