(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{457:function(n,e,t){n.exports=t.p+"486855111f7240cd5da98b5a63113571.jpg"},462:function(n,e,t){"use strict";var i=t(0),a=t.n(i),o=t(455),c=t.n(o),l=t(463),r={insert:"head",singleton:!1},s=(c()(l.a,r),l.a.locals,t(464)),f=t(465),m=t(466),u=t(781),d=t(782),p=t(783),g=t(784),h=t(785),b=t(786),v=t(457);function x(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],i=!0,a=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done)&&(t.push(c.value),!e||t.length!==e);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}e.a=function(){var n=x(Object(i.useState)(!1),2),e=n[0],t=n[1],o=x(Object(i.useState)(!1),2),c=o[0],l=o[1];return a.a.createElement(a.a.Fragment,null,e?a.a.createElement("div",{className:"popupfullscreen"},a.a.createElement("img",{className:"popupfullscreen",src:v}),c?a.a.createElement("div",{className:"mainwindow"},a.a.createElement("div",{className:"activity_container"},a.a.createElement("div",{className:"activity_TextTitle"},"CHALLENGE")),a.a.createElement("div",{className:"fb"},a.a.createElement("div",{className:"fb1"},a.a.createElement(u.a,{url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(d.a,{size:36}))),a.a.createElement("div",{className:"fb2main"},a.a.createElement("div",{className:"fb2"},a.a.createElement(p.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(g.a,{size:36}))),a.a.createElement("div",{className:"fb2"},a.a.createElement(h.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(b.a,{size:36})))),a.a.createElement("div",{className:"fb3"},a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:m}))),a.a.createElement("div",{className:"activity_timercontainer3_overlap"},a.a.createElement("div",{className:"activity_result"},"Your Result "))):a.a.createElement("div",{className:"fb"},a.a.createElement("div",null,a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:m})))):null,a.a.createElement("div",{className:"taskicons"},a.a.createElement("div",{className:"taskiconset",onClick:function(){t(!e||!c),l(!0)}},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement("img",{className:"taskicon",src:s})),a.a.createElement("div",{className:"taskiconText"},"SHARE")),a.a.createElement("div",{className:"taskiconset",onClick:function(){t(!(e&&!c)),l(!1)}},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement("img",{className:"taskicon",src:f})),a.a.createElement("div",{className:"taskiconText"},"SETTINGS"))))}},463:function(n,e,t){"use strict";var i=t(456),a=t.n(i)()((function(n){return n[1]}));a.push([n.i,".mainwindow {\n    text-align: center;\n    margin-top: 45%;\n}\n\n.fb {\n    padding: 6px;\n    position: relative;\n    z-index: 120;\n    margin-top: 25%;\n}\n\n.fb1 {}\n\n.fb2main {\n    width: 100%;\n}\n\n.fb2 {\n    display: inline-block;\n    width: 35%;\n}\n\n.fb3 {}\n\n.activity_timercontainer3_overlap {\n    margin: 18px;\n}\n\n.activity_result {\n    z-index: 120;\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 5.5vw;\n    text-align: center;\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 6%;\n}\n\n.instaicon {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n}\n\n.activity_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    text-decoration-line: underline;\n    text-decoration-color: #f7941d;\n    text-decoration-thickness: 4px;\n}\n\n.activity_container {\n    z-index: 120;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.taskicons {\n    display: inline-flex;\n    float: right;\n    width: 30%;\n    padding-top: 5vh;\n    padding-left: 5%;\n    z-index: 130;\n    position: absolute;\n}\n\n.taskicon {\n    text-align: center;\n    object-fit: contain;\n    width: 4vw;\n    height: 4vh;\n}\n\n.taskiconset {\n    text-align: center;\n    margin: 10px;\n}\n\n.taskiconText {\n    color: white;\n    font-size: 2vw;\n    text-align: center;\n}\n\n.popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n}",""]),e.a=a},464:function(n,e,t){n.exports=t.p+"1bf2872b69850617dc2fa66534a5ba7d.png"},465:function(n,e,t){n.exports=t.p+"d9ebc6e9a68f37640c0f75274ca41f1f.png"},466:function(n,e,t){n.exports=t.p+"8290266a5fb402a34b96f890bbdb2d60.png"},513:function(n,e,t){n.exports=t.p+"cf8fc6d8cb69f89f404cc965ed83b14d.png"},514:function(n,e,t){n.exports=t.p+"2093ad5de05f79d8effb2a71133c4b19.png"},515:function(n,e,t){n.exports=t.p+"69f307da7da5820e70917a32fc9bb928.png"},516:function(n,e,t){n.exports=t.p+"f34a8f7d0b220bcebf115aff5f6d3b89.png"},517:function(n,e,t){n.exports=t.p+"18adff74657e66f5e39e2925de3cb4c0.png"},518:function(n,e,t){n.exports=t.p+"0d1ca58017847924f0d5c4e1857323de.png"},519:function(n,e,t){n.exports=t.p+"486e4fb3a4e17afd7d153cc4861394a3.png"},520:function(n,e,t){n.exports=t.p+"432ce5f5df51bd0193f8e43d7f4cc88b.png"},616:function(n,e,t){"use strict";var i=t(456),a=t.n(i)()((function(n){return n[1]}));a.push([n.i,".cluebackimg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -100;\n}\n\n.clueicons {\n    display: inline-flex;\n    width: 40%;\n    vertical-align: top;\n    margin-top: 5vh;\n}\n\n.cluelogoposition {\n    display: inline-flex;\n    width: 60%;\n}\n\n.clueicon {\n    text-align: center;\n    width: 8vw;\n    height: 8vh;\n    object-fit: contain;\n}\n\n.cluelogoicon {\n    text-align: center;\n    width: 15vw;\n    height: 15vh;\n    object-fit: contain;\n    margin-top: 10px;\n    margin-left: 10px;\n}\n\n.clueiconset {\n    text-align: center;\n    margin: 10px;\n}\n\n.clueiconText {\n    color: white;\n    font-size: 2vh;\n    text-align: center;\n}\n\n.clueimg {\n    display: block;\n}\n\n.clue {\n    width: 40vw;\n    height: 40vh;\n    object-fit: contain;\n}\n\n.cluecontainer {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    position: absolute;\n    left: 10%;\n    bottom: 20%;\n    font-weight: bold;\n    width: 80%;\n    text-align: center;\n    max-height: 30%;\n}\n\n.cluecontainerbefore {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 20px;\n}\n\n.startscannercamera {\n    object-fit: contain;\n    position: absolute;\n    left: 17%;\n    bottom: 27%;\n}\n\n\n/* share-popup */\n\n.fb {\n    padding: 10px;\n}\n\n.modal {\n    font-size: 12px;\n    background-color: white;\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 5%;\n}\n\n\n/* @media (min-width: 600px) and (max-width:767px) {\n    .cluebackimg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -100;\n    }\n    .clueicons {\n        display: inline-flex;\n        width: 40%;\n        vertical-align: top;\n        margin-top: 5vh;\n    }\n    .cluelogoposition {\n        display: inline-flex;\n        width: 60%;\n    }\n    .clueicon {\n        text-align: center;\n        width: 8vw;\n        height: 8vh;\n        object-fit: contain;\n    }\n    .cluelogoicon {\n        text-align: center;\n        width: 15vw;\n        height: 15vh;\n        object-fit: contain;\n        margin-top: 10px;\n        margin-left: 10px;\n    }\n    .clueiconset1 {\n        text-align: center;\n        margin: 10px;\n    }\n    .clueiconset2 {\n        text-align: center;\n        margin: 10px;\n    }\n    .clueiconText {\n        color: white;\n        font-size: 2vh;\n        text-align: center;\n    }\n    .cluecluecontainer {\n        font-family: 'Trebuchet MS', sans-serif;\n        position: relative;\n        text-align: center;\n        margin-top: 20px;\n    }\n    .clueclueTexttop {\n        display: block;\n        color: #01003c;\n        font-size: 5vh;\n        font-weight: bold;\n    }\n    .clueclue {\n        width: 40vw;\n        height: 40vh;\n        object-fit: contain;\n    }\n    .clueclueText {\n        display: block;\n        color: #01003c;\n        font-size: 3vh;\n        text-align: center;\n        font-weight: bold;\n    }\n    .clueclueimg {\n        display: block;\n    }\n} */\n\n\n/* Medium devices (landscape tablets, 1024px and up) */\n\n@media (min-width: 768px) and (max-width:1024px) {\n    .cluebackimg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -100;\n    }\n    .clueicons {\n        display: inline-flex;\n        width: 40%;\n        vertical-align: top;\n        margin-left: 75%;\n        margin-top: -8%;\n    }\n    .cluelogoposition {\n        display: inline-flex;\n        width: 60%;\n        margin-left: 10%;\n        margin-top: 5%;\n    }\n    .clueicon {\n        text-align: center;\n        width: 8vw;\n        height: 4vh;\n        object-fit: contain;\n    }\n    .cluelogoicon {\n        text-align: center;\n        width: 15vw;\n        height: 15vh;\n        object-fit: contain;\n        margin-top: 10px;\n        margin-left: 10px;\n    }\n    .clueiconset1 {\n        text-align: center;\n        margin: 10px;\n        margin-left: 15%;\n    }\n    .clueiconset2 {\n        text-align: center;\n        margin: 10px;\n        margin-left: 3%;\n    }\n    .clueiconText {\n        color: white;\n        font-size: 2vh;\n        text-align: center;\n    }\n    .cluecontainer {\n        font-family: 'Trebuchet MS', sans-serif;\n        position: relative;\n        text-align: center;\n        margin-top: 20px;\n    }\n    .clueTexttop {\n        display: block;\n        color: #01003c;\n        font-size: 5vh;\n        font-weight: bold;\n    }\n    .clue {\n        width: 40vw;\n        height: 40vh;\n        object-fit: contain;\n    }\n    .clueText {\n        display: block;\n        color: #01003c;\n        font-size: 3vh;\n        text-align: center;\n        font-weight: bold;\n    }\n    .clueimg {\n        display: block;\n    }\n}\n\n\n/* Extra large devices (large laptops and desktops, 1024px and up)- */\n\n@media (min-width: 1024px) {\n    .cluebackimg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -100;\n    }\n    .clueicons {\n        display: inline-flex;\n        width: 40%;\n        vertical-align: top;\n        margin-left: 80%;\n        margin-top: -8%;\n    }\n    .cluelogoposition {\n        display: inline-flex;\n        width: 60%;\n    }\n    .clueicon {\n        text-align: center;\n        width: 8vw;\n        height: 4vh;\n        object-fit: contain;\n    }\n    .cluelogoicon {\n        text-align: center;\n        width: 15vw;\n        height: 15vh;\n        object-fit: contain;\n        margin-left: 10%;\n        margin-top: 5%;\n    }\n    .clueiconset1 {\n        text-align: center;\n        margin: 10px;\n    }\n    .clueiconset2 {\n        text-align: center;\n        margin: 10px;\n        margin-left: -5%;\n    }\n    .clueiconText {\n        color: white;\n        font-size: 2vh;\n        text-align: center;\n    }\n    .cluecontainer {\n        font-family: 'Trebuchet MS', sans-serif;\n        position: relative;\n        text-align: center;\n        margin-top: 20px;\n    }\n    .clueTexttop {\n        display: block;\n        color: #01003c;\n        font-size: 5vh;\n        font-weight: bold;\n    }\n    .clue {\n        width: 40vw;\n        height: 40vh;\n        object-fit: contain;\n    }\n    .clueText {\n        display: block;\n        color: #01003c;\n        font-size: 3vh;\n        text-align: center;\n        font-weight: bold;\n    }\n    .clueimg {\n        display: block;\n    }\n}",""]),e.a=a},617:function(n,e,t){n.exports=t.p+"9c88e432e26d5c6e39614a8ddaa7d66c.png"},791:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(455),c=t.n(o),l=t(616),r={insert:"head",singleton:!1},s=(c()(l.a,r),l.a.locals,t(457)),f=t(617),m=t(513),u=t(514),d=t(515),p=t(516),g=t(517),h=t(518),b=t(519),v=t(520),x=t(582),w=t(14),y=t(462);function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],i=!0,a=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done)&&(t.push(c.value),!e||t.length!==e);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var N=[{Level_name:"Level - 1",image:m,Location:"Nike Store"},{Level_name:"Level - 2",image:u,Location:"Church Street entrance of MG Road Metro Station"},{Level_name:"Level - 3",image:d,Location:"Cycle stand"},{Level_name:"Level - 4",image:p,Location:"Entertainment Store"},{Level_name:"Level - 5",image:g,Location:"Bookstores (Blossoms, Goobes, Bookworm)"},{Level_name:"Level - 6",image:h,Location:"Rooster Guitars"},{Level_name:"Level - 7",image:b,Location:"Coffee shops"},{Level_name:"Level - 8",image:v,Location:"KSPCB Office"}];e.default=function(){var n=E(Object(i.useState)(N[0]),2),e=n[0],t=n[1],o=E(Object(i.useState)(""),2),c=(o[0],o[1]),l=E(Object(i.useState)(1),2),r=(l[0],l[1]),m=E(Object(i.useState)(!1),2),u=m[0],d=m[1],p=Object(w.h)(),g=Object(w.g)();return Object(i.useEffect)((function(){t(N[Number(p.id)-1]),console.log("===================>",p.id),window.addEventListener("scroll",(function(n){r(window.scrollY),window.scrollY>70?c("top"):c("")}))}),[]),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("img",{className:"cluebackimg",src:s})),a.a.createElement("div",{className:"cluelogoposition"},a.a.createElement("img",{className:"cluelogoicon",src:f})),a.a.createElement(y.a,null),u?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"startscannercamera"},a.a.createElement(x.a,{onScan:function(n){null!==n&&(d(!1),console.log(n),g.replace(n))},style:{height:"50%",width:"83%",Option:"rear"},onError:function(n){console.log(n)}})),a.a.createElement("div",{className:"cluecontainer"},a.a.createElement("div",{className:"clueText"},"Find this Location and QR SCAN"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"cluecontainerbefore"},a.a.createElement("div",{className:"clueTexttop"},e.Location),a.a.createElement("div",{className:"clueimg"},a.a.createElement("img",{onClick:function(){d(!0),console.log("hello++++++")},className:"clue",src:e.image})),a.a.createElement("div",{className:"clueText"},"Find this Location and QR SCAN"))))}}}]);