(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{521:function(n,t,e){"use strict";var i=e(0),o=e.n(i);t.a=function(n,t){void 0===n&&(n=6e4),void 0===t&&(t=1e3);var e=o.a.useState(0),i=e[0],r=e[1],a=o.a.useRef({}),l=function n(e){a.current.started||(a.current.started=e,a.current.lastInterval=e);var i=Math.min(t,a.current.timeLeft||1/0);e-a.current.lastInterval>=i&&(a.current.lastInterval+=i,r((function(n){return a.current.timeLeft=n-i,a.current.timeLeft}))),e-a.current.started<a.current.timeToCount?a.current.requestId=window.requestAnimationFrame(n):(a.current={},r(0))},c=o.a.useCallback((function(t){window.cancelAnimationFrame(a.current.requestId);var e=void 0!==t?t:n;a.current.started=null,a.current.lastInterval=null,a.current.timeToCount=e,a.current.requestId=window.requestAnimationFrame(l),r(e)}),[]),s=o.a.useCallback((function(){window.cancelAnimationFrame(a.current.requestId),a.current.started=null,a.current.lastInterval=null,a.current.timeToCount=a.current.timeLeft}),[]),u=o.a.useCallback((function(){!a.current.started&&a.current.timeLeft>0&&(window.cancelAnimationFrame(a.current.requestId),a.current.requestId=window.requestAnimationFrame(l))}),[]),d=o.a.useCallback((function(){a.current.timeLeft&&(window.cancelAnimationFrame(a.current.requestId),a.current={},r(0))}),[]),g=o.a.useMemo((function(){return{start:c,pause:s,resume:u,reset:d}}),[]);return o.a.useEffect((function(){return d}),[]),[i,g]}},631:function(n,t,e){"use strict";var i=e(456),o=e.n(i)()((function(n){return n[1]}));o.push([n.i,".quiz_backimg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n}\n\n.quiz_icons {\n    display: inline-flex;\n    width: 40%;\n    vertical-align: top;\n    margin-top: -5%;\n    margin-right: 0%;\n}\n\n.quiz_logoposition {\n    display: inline-flex;\n    width: 60%;\n}\n\n.quiz_icon {\n    text-align: center;\n    width: 8vw;\n    height: 8vh;\n    object-fit: contain;\n}\n\n.quiz_logoicon {\n    text-align: center;\n    width: 20vw;\n    height: 20vh;\n    object-fit: contain;\n    margin-top: 10px;\n    margin-left: 40px;\n}\n\n.quiz_iconset {\n    text-align: center;\n    margin: 10px;\n}\n\n.quiz_iconText {\n    color: white;\n    font-size: 2vh;\n    text-align: center;\n}\n\n.quiz_TextTitle {\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    text-decoration-line: underline;\n    text-decoration-color: rgb(255, 166, 0);\n    text-decoration-thickness: 4px;\n}\n\n.quiz_Text {\n    display: block;\n    color: #01003c;\n    font-size: 2.5vh;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 5%;\n    width: 80%;\n    margin-left: 10%;\n}\n\n.quiz_container {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.quiz_actioncontainer {\n    text-align: -webkit-center;\n    position: relative;\n    margin-top: 4%;\n    height: 32vh;\n}\n\n.quiz_orgr1 {\n    height: 8vh;\n    text-align: -webkit-center;\n    position: relative;\n}\n\n.quiz_orgr1_tab {\n    background-color: #f7941d;\n    width: 65%;\n    position: absolute;\n    left: 13.5%;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    padding: 4%;\n}\n\n.quiz_gr1_tab {\n    background-color: #72c84c;\n    width: 65%;\n    position: absolute;\n    left: 13.5%;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    padding: 4%;\n}\n\n@media(min-width:400px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 4%;\n        margin-left: 5%;\n        width: 90vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: -webkit-center;\n        position: relative;\n    }\n}\n\n@media(min-width:490px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 4%;\n        margin-left: 10%;\n        width: 80vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: -webkit-center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n}\n\n@media(min-width:590px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 4%;\n        margin-left: 20%;\n        width: 60vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_logoicon {\n        text-align: center;\n        width: 16vw;\n        height: 16vh;\n        object-fit: contain;\n        margin-top: 20px;\n        margin-left: 40px;\n    }\n    .quiz_Text {\n        display: block;\n        color: #01003c;\n        font-size: 3.5vh;\n        text-align: center;\n        font-weight: bold;\n        margin-top: 3%;\n        width: 80%;\n        margin-left: 10%;\n    }\n    .quiz_TextTitle {\n        display: block;\n        color: #01003c;\n        font-size: 4vh;\n        text-align: center;\n        font-weight: bold;\n        text-decoration-line: underline;\n        text-decoration-color: rgb(255, 166, 0);\n        text-decoration-thickness: 4px;\n    }\n}\n\n@media(min-width:673px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 2%;\n        margin-left: 20%;\n        width: 60vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 4vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_logoicon {\n        text-align: center;\n        width: 16vw;\n        height: 16vh;\n        object-fit: contain;\n        margin-top: 20px;\n        margin-left: 40px;\n    }\n    .quiz_Text {\n        display: block;\n        color: #01003c;\n        font-size: 3.5vh;\n        text-align: center;\n        font-weight: bold;\n        margin-top: 3%;\n        width: 80%;\n        margin-left: 10%;\n    }\n    .quiz_TextTitle {\n        display: block;\n        color: #01003c;\n        font-size: 4vh;\n        text-align: center;\n        font-weight: bold;\n        text-decoration-line: underline;\n        text-decoration-color: rgb(255, 166, 0);\n        text-decoration-thickness: 4px;\n    }\n}\n\n@media(min-width:730px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 2%;\n        margin-left: 20%;\n        width: 60vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_logoicon {\n        text-align: center;\n        width: 16vw;\n        height: 16vh;\n        object-fit: contain;\n        margin-top: 20px;\n        margin-left: 40px;\n    }\n    .quiz_Text {\n        display: block;\n        color: #01003c;\n        font-size: 3.5vh;\n        text-align: center;\n        font-weight: bold;\n        margin-top: 3%;\n        width: 80%;\n        margin-left: 10%;\n    }\n    .quiz_TextTitle {\n        display: block;\n        color: #01003c;\n        font-size: 4vh;\n        text-align: center;\n        font-weight: bold;\n        text-decoration-line: underline;\n        text-decoration-color: rgb(255, 166, 0);\n        text-decoration-thickness: 4px;\n    }\n}\n\n@media(min-width:805px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 2%;\n        margin-left: 25%;\n        width: 50vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_logoicon {\n        text-align: center;\n        width: 16vw;\n        height: 16vh;\n        object-fit: contain;\n        margin-top: 20px;\n        margin-left: 40px;\n    }\n    .quiz_Text {\n        display: block;\n        color: #01003c;\n        font-size: 3.5vh;\n        text-align: center;\n        font-weight: bold;\n        margin-top: 3%;\n        width: 80%;\n        margin-left: 10%;\n    }\n    .quiz_TextTitle {\n        display: block;\n        color: #01003c;\n        font-size: 4vh;\n        text-align: center;\n        font-weight: bold;\n        text-decoration-line: underline;\n        text-decoration-color: rgb(255, 166, 0);\n        text-decoration-thickness: 4px;\n        margin-top: -4%;\n    }\n}\n\n@media(min-width:1024px) {\n    .quiz_actioncontainer {\n        text-align: -webkit-center;\n        position: relative;\n        margin-top: 2%;\n        margin-left: 30%;\n        width: 40vw;\n    }\n    .quiz_orgr1 {\n        height: 10vh;\n        text-align: center;\n        position: relative;\n    }\n    .quiz_gr1_tab {\n        background-color: #72c84c;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_orgr1_tab {\n        background-color: #f7941d;\n        width: 65%;\n        position: absolute;\n        left: 13.5%;\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2.2vw;\n        font-weight: bold;\n        padding: 4%;\n    }\n    .quiz_logoicon {\n        text-align: center;\n        width: 14vw;\n        height: 14vh;\n        object-fit: contain;\n        margin-top: 20px;\n        margin-left: 40px;\n    }\n    .quiz_Text {\n        display: block;\n        color: #01003c;\n        font-size: 3.5vh;\n        text-align: center;\n        font-weight: bold;\n        margin-top: 3%;\n        width: 80%;\n        margin-left: 10%;\n    }\n    .quiz_TextTitle {\n        display: block;\n        color: #01003c;\n        font-size: 4vh;\n        text-align: center;\n        font-weight: bold;\n        text-decoration-line: underline;\n        text-decoration-color: rgb(255, 166, 0);\n        text-decoration-thickness: 4px;\n        margin-top: -4%;\n        margin-left: 0%;\n    }\n}\n",""]),t.a=o},793:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i),r=e(455),a=e.n(r),l=e(631),c={insert:"head",singleton:!1},s=(a()(l.a,c),l.a.locals,e(472)),u=e(465),d=e(14),g=e(521),f=e(478);function h(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,o=!1,r=void 0;try{for(var a,l=n[Symbol.iterator]();!(i=(a=l.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(n){o=!0,r=n}finally{try{i||null==l.return||l.return()}finally{if(o)throw r}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var b=[{Title:"CHALLENGE",desc:"How many times can you climb the steps in 1 Minute?"}];t.default=function(){var n=h(Object(g.a)(6e4,1e3),2),t=(n[0],n[1]),e=(t.start,t.pause,t.resume,t.reset,h(Object(i.useState)(b[0]),2)),r=e[0],a=e[1],l=h(Object(i.useState)(!1),2),c=(l[0],l[1],Object(d.h)());Object(d.g)();return Object(i.useEffect)((function(){a(b[Number(c.id)-1]),console.log("===================>",c.id)}),[]),o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("img",{className:"quiz_backimg",src:s})),o.a.createElement("div",{className:"quiz_logoposition"},o.a.createElement("img",{className:"quiz_logoicon",src:u})),o.a.createElement(f.a,null),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"quiz_container"},o.a.createElement("div",{className:"quiz_TextTitle"},r.Title),o.a.createElement("div",{className:"quiz_Text"},r.desc)),o.a.createElement("div",{className:"quiz_actioncontainer"},o.a.createElement("div",{className:"quiz_orgr1"},o.a.createElement("div",{className:"quiz_gr1_tab"},"option 1")),o.a.createElement("div",{className:"quiz_orgr1"},o.a.createElement("div",{className:"quiz_orgr1_tab"},"option 1")),o.a.createElement("div",{className:"quiz_orgr1"},o.a.createElement("div",{className:"quiz_orgr1_tab"},"option 1")),o.a.createElement("div",{className:"quiz_orgr1"},o.a.createElement("div",{className:"quiz_gr1_tab"},"option 1")))))}}}]);