(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{458:function(n,t,e){"use strict";var i=e(456),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,".fb {\n    padding: 6px;\n}\n\n.modal {\n    background-color: rgb(255, 255, 255);\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 6%;\n}\n\n.instaicon {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n}\n\n@media (max-width:350px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 30%;\n        padding-top: 5vh;\n        padding-left: 5%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 6vw;\n        height: 6vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2.5vw;\n        text-align: center;\n    }\n    /* share-popup */\n}\n\n@media (min-width:351px) and (max-width:450px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 30%;\n        padding-top: 5vh;\n        padding-left: 5%;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 70%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2vw;\n        text-align: center;\n    }\n}\n\n@media (min-width:451px) and (max-width:767px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 30%;\n        padding-top: 5vh;\n        padding-left: 5%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2vw;\n        text-align: center;\n    }\n}\n\n@media (min-width:768px) {\n    .taskicons {\n        display: inline-block;\n        width: 25%;\n        padding-top: 5vh;\n        padding-left: 10%;\n    }\n    .taskshrsettimg {\n        display: block;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n        width: 50%;\n        display: table-cell;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 1.5vw;\n        text-align: center;\n    }\n}",""]),t.a=a},459:function(n,t,e){n.exports=e.p+"1bf2872b69850617dc2fa66534a5ba7d.png"},460:function(n,t,e){n.exports=e.p+"d9ebc6e9a68f37640c0f75274ca41f1f.png"},461:function(n,t,e){n.exports=e.p+"8290266a5fb402a34b96f890bbdb2d60.png"},464:function(n,t,e){"use strict";var i=e(0),a=e.n(i),r=e(455),c=e.n(r),o=e(458),l={insert:"head",singleton:!1},s=(c()(o.a,l),o.a.locals,e(459)),u=e(460),d=e(461),m=e(478),f=e(780),g=e(781),h=e(782),p=e(783),b=e(784),w=e(785);t.a=function(){return a.a.createElement("div",{className:"taskicons"},a.a.createElement("div",{className:"taskiconset"},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement(m.a,{trigger:a.a.createElement("img",{className:"taskicon",src:s})},a.a.createElement("div",{className:"modal"},a.a.createElement("div",{className:"fb"},a.a.createElement(f.a,{url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(g.a,{size:36})),a.a.createElement(h.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(p.a,{size:36})),a.a.createElement(b.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(w.a,{size:36})),a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:d}))))),a.a.createElement("div",{className:"taskiconText"},"SHARE")),a.a.createElement("div",{className:"taskiconset"},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement("img",{className:"taskicon",src:u})),a.a.createElement("div",{className:"taskiconText"},"SETTINGS")))}},466:function(n,t,e){n.exports=e.p+"486855111f7240cd5da98b5a63113571.jpg"},467:function(n,t,e){n.exports=e.p+"529f2f9cbed9cc2fe9621242cd21c7d4.png"},525:function(n,t,e){"use strict";var i=e(0),a=e.n(i);t.a=function(n,t){void 0===n&&(n=6e4),void 0===t&&(t=1e3);var e=a.a.useState(0),i=e[0],r=e[1],c=a.a.useRef({}),o=function n(e){c.current.started||(c.current.started=e,c.current.lastInterval=e);var i=Math.min(t,c.current.timeLeft||1/0);e-c.current.lastInterval>=i&&(c.current.lastInterval+=i,r((function(n){return c.current.timeLeft=n-i,c.current.timeLeft}))),e-c.current.started<c.current.timeToCount?c.current.requestId=window.requestAnimationFrame(n):(c.current={},r(0))},l=a.a.useCallback((function(t){window.cancelAnimationFrame(c.current.requestId);var e=void 0!==t?t:n;c.current.started=null,c.current.lastInterval=null,c.current.timeToCount=e,c.current.requestId=window.requestAnimationFrame(o),r(e)}),[]),s=a.a.useCallback((function(){window.cancelAnimationFrame(c.current.requestId),c.current.started=null,c.current.lastInterval=null,c.current.timeToCount=c.current.timeLeft}),[]),u=a.a.useCallback((function(){!c.current.started&&c.current.timeLeft>0&&(window.cancelAnimationFrame(c.current.requestId),c.current.requestId=window.requestAnimationFrame(o))}),[]),d=a.a.useCallback((function(){c.current.timeLeft&&(window.cancelAnimationFrame(c.current.requestId),c.current={},r(0))}),[]),m=a.a.useMemo((function(){return{start:l,pause:s,resume:u,reset:d}}),[]);return a.a.useEffect((function(){return d}),[]),[i,m]}},632:function(n,t,e){"use strict";var i=e(456),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,".quiz_backimg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n}\n\n.quiz_icons {\n    display: inline-flex;\n    width: 40%;\n    vertical-align: top;\n    margin-top: 5vh;\n}\n\n.quiz_logoposition {\n    display: inline-flex;\n    width: 60%;\n}\n\n.quiz_icon {\n    text-align: center;\n    width: 8vw;\n    height: 8vh;\n    object-fit: contain;\n}\n\n.quiz_logoicon {\n    text-align: center;\n    width: 20vw;\n    height: 20vh;\n    object-fit: contain;\n    margin-top: 10px;\n    margin-left: 40px;\n}\n\n.quiz_iconset {\n    text-align: center;\n    margin: 10px;\n}\n\n.quiz_iconText {\n    color: white;\n    font-size: 2vh;\n    text-align: center;\n}\n\n.quiz_TextTitle {\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    text-decoration-line: underline;\n    text-decoration-color: rgb(255, 166, 0);\n    text-decoration-thickness: 4px;\n}\n\n.quiz_Text {\n    display: block;\n    color: #01003c;\n    font-size: 2.5vh;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 5%;\n    width: 80%;\n    margin-left: 10%;\n}\n\n.quiz_container {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.quiz_actioncontainer {\n    text-align: -webkit-center;\n    position: relative;\n    margin-top: 4%;\n    height: 32vh;\n}\n\n.quiz_orgr1 {\n    height: 8vh;\n    text-align: -webkit-center;\n    position: relative;\n}\n\n.quiz_orgr1_tab {\n    background-color: #f7941d;\n    width: 65%;\n    position: absolute;\n    left: 13.5%;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    padding: 4%;\n}\n\n.quiz_gr1_tab {\n    background-color: #72c84c;\n    width: 65%;\n    position: absolute;\n    left: 13.5%;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    padding: 4%;\n}",""]),t.a=a},792:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(455),c=e.n(r),o=e(632),l={insert:"head",singleton:!1},s=(c()(o.a,l),o.a.locals,e(466)),u=e(467),d=e(14),m=e(525),f=e(464);function g(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,a=!1,r=void 0;try{for(var c,o=n[Symbol.iterator]();!(i=(c=o.next()).done)&&(e.push(c.value),!t||e.length!==t);i=!0);}catch(n){a=!0,r=n}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var p=[{Title:"CHALLENGE",desc:"How many times can you climb the steps in 1 Minute?"}];t.default=function(){var n=g(Object(m.a)(6e4,1e3),2),t=(n[0],n[1]),e=(t.start,t.pause,t.resume,t.reset,g(Object(i.useState)(p[0]),2)),r=e[0],c=e[1],o=g(Object(i.useState)(!1),2),l=(o[0],o[1],Object(d.h)());Object(d.g)();return Object(i.useEffect)((function(){c(p[Number(l.id)-1]),console.log("===================>",l.id)}),[]),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("img",{className:"quiz_backimg",src:s})),a.a.createElement("div",{className:"quiz_logoposition"},a.a.createElement("img",{className:"quiz_logoicon",src:u})),a.a.createElement(f.a,null),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"quiz_container"},a.a.createElement("div",{className:"quiz_TextTitle"},r.Title),a.a.createElement("div",{className:"quiz_Text"},r.desc)),a.a.createElement("div",{className:"quiz_actioncontainer"},a.a.createElement("div",{className:"quiz_orgr1"},a.a.createElement("div",{className:"quiz_gr1_tab"},"option 1")),a.a.createElement("div",{className:"quiz_orgr1"},a.a.createElement("div",{className:"quiz_orgr1_tab"},"option 1")),a.a.createElement("div",{className:"quiz_orgr1"},a.a.createElement("div",{className:"quiz_orgr1_tab"},"option 1")),a.a.createElement("div",{className:"quiz_orgr1"},a.a.createElement("div",{className:"quiz_gr1_tab"},"option 1")))))}}}]);