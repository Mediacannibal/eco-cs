(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{457:function(n,t,e){n.exports=e.p+"486855111f7240cd5da98b5a63113571.jpg"},462:function(n,t,e){"use strict";var i=e(0),a=e.n(i),o=e(455),l=e.n(o),s=e(463),c={insert:"head",singleton:!1},m=(l()(s.a,c),s.a.locals,e(464)),r=e(465),d=e(466),b=e(781),p=e(782),h=e(783),f=e(784),g=e(785),v=e(786),k=e(457);function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,a=!1,o=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done)&&(e.push(l.value),!t||e.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}t.a=function(){var n=u(Object(i.useState)(!1),2),t=n[0],e=n[1],o=u(Object(i.useState)(!1),2),l=o[0],s=o[1];return a.a.createElement(a.a.Fragment,null,t?a.a.createElement("div",{className:"popupfullscreen"},a.a.createElement("img",{className:"popupfullscreen",src:k}),l?a.a.createElement("div",{className:"mainwindow"},a.a.createElement("div",{className:"activity_container"},a.a.createElement("div",{className:"activity_TextTitle"},"CHALLENGE")),a.a.createElement("div",{className:"fb"},a.a.createElement("div",{className:"fb1"},a.a.createElement(b.a,{url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(p.a,{size:36}))),a.a.createElement("div",{className:"fb2main"},a.a.createElement("div",{className:"fb2"},a.a.createElement(h.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(f.a,{size:36}))),a.a.createElement("div",{className:"fb2"},a.a.createElement(g.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},a.a.createElement(v.a,{size:36})))),a.a.createElement("div",{className:"fb3"},a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:d}))),a.a.createElement("div",{className:"activity_timercontainer3_overlap"},a.a.createElement("div",{className:"activity_result"},"Your Result "))):a.a.createElement("div",{className:"fb"},a.a.createElement("div",null,a.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:d})))):null,a.a.createElement("div",{className:"taskicons"},a.a.createElement("div",{className:"taskiconset",onClick:function(){e(!t||!l),s(!0)}},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement("img",{className:"taskicon",src:m})),a.a.createElement("div",{className:"taskiconText"},"SHARE")),a.a.createElement("div",{className:"taskiconset",onClick:function(){e(!(t&&!l)),s(!1)}},a.a.createElement("div",{className:"taskshrsettimg"},a.a.createElement("img",{className:"taskicon",src:r})),a.a.createElement("div",{className:"taskiconText"},"SETTINGS"))))}},463:function(n,t,e){"use strict";var i=e(456),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,".mainwindow {\n    text-align: center;\n    margin-top: 45%;\n}\n\n.fb {\n    padding: 6px;\n    position: relative;\n    z-index: 120;\n    margin-top: 25%;\n}\n\n.fb1 {}\n\n.fb2main {\n    width: 100%;\n}\n\n.fb2 {\n    display: inline-block;\n    width: 35%;\n}\n\n.fb3 {}\n\n.activity_timercontainer3_overlap {\n    margin: 18px;\n}\n\n.activity_result {\n    z-index: 120;\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 5.5vw;\n    text-align: center;\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 6%;\n}\n\n.instaicon {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n}\n\n.activity_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    text-decoration-line: underline;\n    text-decoration-color: #f7941d;\n    text-decoration-thickness: 4px;\n}\n\n.activity_container {\n    z-index: 120;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.taskicons {\n    display: inline-flex;\n    float: right;\n    width: 30%;\n    padding-top: 5vh;\n    padding-left: 5%;\n    z-index: 130;\n    position: absolute;\n}\n\n.taskicon {\n    text-align: center;\n    object-fit: contain;\n    width: 4vw;\n    height: 4vh;\n}\n\n.taskiconset {\n    text-align: center;\n    margin: 10px;\n}\n\n.taskiconText {\n    color: white;\n    font-size: 2vw;\n    text-align: center;\n}\n\n.popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n}",""]),t.a=a},464:function(n,t,e){n.exports=e.p+"1bf2872b69850617dc2fa66534a5ba7d.png"},465:function(n,t,e){n.exports=e.p+"d9ebc6e9a68f37640c0f75274ca41f1f.png"},466:function(n,t,e){n.exports=e.p+"8290266a5fb402a34b96f890bbdb2d60.png"},467:function(n,t,e){n.exports=e.p+"529f2f9cbed9cc2fe9621242cd21c7d4.png"},488:function(n,t,e){n.exports=e.p+"e836fe8dd71d43b20877536d359b7e54.png"},503:function(n,t,e){n.exports=e.p+"8dc15166eb7cea6b18e7a1758831438f.png"},504:function(n,t,e){n.exports=e.p+"8b95697c965462cb65f931368ca9e96d.png"},505:function(n,t,e){n.exports=e.p+"2af44e656ff6ded17503a866adcc6659.png"},506:function(n,t,e){n.exports=e.p+"487b19288667de5b858c30b1b8dbcff7.png"},507:function(n,t,e){n.exports=e.p+"02e4a2dda1ecf718f0b8f56fb562a4fb.png"},508:function(n,t,e){n.exports=e.p+"6335fef51c89df7c061366a6d52aad16.png"},509:function(n,t,e){n.exports=e.p+"4cacd7e9556553a292488845355643e1.png"},663:function(n,t,e){"use strict";var i=e(456),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,".fb {\n    padding: 6px;\n}\n\n.modal {\n    background-color: rgb(255, 255, 255);\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 6%;\n}\n\n.instaicon {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n}\n\n.taskslist_scannerpopup_main {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 50%;\n}\n\n.taskslist_scannerpopup {\n    position: absolute;\n    bottom: 10%;\n    height: 70%;\n    width: 88%;\n    margin-top: -12%;\n    text-align: center;\n    z-index: 100;\n    background-color: aliceblue;\n    margin: 20px;\n    opacity: 200% !important;\n}\n\n.startscannercamera {\n    object-fit: contain;\n    position: absolute;\n    left: 15%;\n    top: 10%;\n    display: block;\n}\n\n.tasklist_scannertext {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    margin-top: 70%;\n    display: block;\n}\n\n.cluelist_col {\n    position: absolute;\n    bottom: 25%;\n}\n\n.task_scanback {\n    position: relative;\n    width: 32vw;\n    height: 22vh;\n}\n\n.cluelist_tickmain {\n    position: absolute;\n    top: 22%;\n    left: 32%;\n    z-index: 30;\n}\n\n.task_scanlsqr {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n    display: grid;\n    z-index: 10;\n}\n\n.taskslist_closemain {\n    position: absolute;\n    top: 10%;\n    right: 4%;\n    background-color: white;\n    border-radius: 30px;\n}\n\n.taskslist_close {\n    width: 4vw;\n    height: 4vw;\n    object-fit: fill;\n    margin: 5px;\n    vertical-align: text-top;\n}\n\n@media (max-width:350px) {\n    h1,\n    p {\n        font-family: Lato;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .taskbg {\n        z-index: -100;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        object-fit: fill;\n    }\n    .tasktopcontainer {\n        width: 100vw;\n        position: relative;\n    }\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 60%;\n        padding-left: 25vw;\n        padding-top: 5vh;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 40%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 6vw;\n        height: 6vh;\n    }\n    .tasklogoicon {\n        width: 22vw;\n        height: 22vh;\n        object-fit: contain;\n        margin-top: 15%;\n        margin-left: 25%;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2.5vw;\n        text-align: center;\n    }\n    .tasklevelimageExsmall {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: block;\n    }\n    .tasklevelimagemedium {\n        height: 15vh;\n        width: 15vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimagesmall {\n        height: 10vh;\n        width: 10vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimageExsmalldisabled {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: block;\n        opacity: 40%;\n    }\n    .tasklevelimagemediumdisabled {\n        height: 15vh;\n        width: 15vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .tasklevelimagesmalldisabled {\n        height: 10vh;\n        width: 10vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .taskslist {\n        position: absolute;\n        bottom: 10%;\n        height: 70%;\n        width: 100%;\n        margin-top: -12%;\n        text-align: center;\n    }\n    .tasklslogo {\n        width: 90%;\n        max-height: 60vh;\n        object-fit: contain;\n        bottom: 0%;\n        margin-top: 10%;\n        margin-left: 10%;\n    }\n    .tasklevelscontainer {\n        position: relative;\n    }\n    .taskicon1 {\n        position: absolute;\n        bottom: 5%;\n        left: 18%;\n    }\n    .taskicon2 {\n        position: absolute;\n        bottom: 16%;\n        left: 30%;\n    }\n    .taskicon3 {\n        position: absolute;\n        bottom: 30%;\n        left: 35%;\n    }\n    .taskicon4 {\n        position: absolute;\n        bottom: 44%;\n        left: 28%;\n    }\n    .taskicon5 {\n        position: absolute;\n        bottom: 62%;\n        left: 68%;\n    }\n    .taskicon6 {\n        position: absolute;\n        bottom: 76%;\n        left: 72%\n    }\n    .taskicon7 {\n        position: absolute;\n        bottom: 58%;\n        left: 22%;\n    }\n    .taskicon8 {\n        position: absolute;\n        bottom: 82%;\n        left: 66%;\n    }\n    .taskicon9 {\n        position: absolute;\n        bottom: 72%;\n        left: 22%;\n    }\n    .taskicon10 {\n        position: absolute;\n        bottom: 81%;\n        left: 34%;\n    }\n    .taskicon11 {\n        position: absolute;\n        bottom: 84%;\n        left: 50%;\n    }\n    /* share-popup */\n}\n\n@media (min-width:351px) and (max-width:450px) {\n    h1,\n    p {\n        font-family: Lato;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .taskbg {\n        z-index: -100;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        object-fit: fill;\n    }\n    .tasktopcontainer {\n        width: 100vw;\n        position: relative;\n    }\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 30%;\n        padding-top: 5vh;\n        padding-left: 5%;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 70%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .tasklogoicon {\n        width: 18vw;\n        height: 18vh;\n        object-fit: contain;\n        margin-top: 5%;\n        margin-left: 10%;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2vw;\n        text-align: center;\n    }\n    .tasklevelimageExsmall {\n        height: 5vh;\n        width: 5vw;\n        object-fit: contain;\n        display: block;\n    }\n    .tasklevelimagemedium {\n        height: 12vh;\n        width: 12vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimagesmall {\n        height: 8vh;\n        width: 8vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimageExsmalldisabled {\n        height: 5vh;\n        width: 5vw;\n        object-fit: contain;\n        display: block;\n        opacity: 40%;\n    }\n    .tasklevelimagemediumdisabled {\n        height: 12vh;\n        width: 12vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .tasklevelimagesmalldisabled {\n        height: 8vh;\n        width: 8vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .taskslist {\n        position: absolute;\n        bottom: 10%;\n        height: 70%;\n        width: 100%;\n        margin-top: -12%;\n        text-align: center;\n    }\n    .tasklslogo {\n        width: 90%;\n        max-height: 60vh;\n        object-fit: contain;\n        bottom: 0%;\n        margin-top: 10%;\n        margin-left: 10%;\n    }\n    .tasklevelscontainer {\n        position: relative;\n    }\n    .taskicon1 {\n        position: absolute;\n        bottom: 5%;\n        left: 18%;\n    }\n    .taskicon2 {\n        position: absolute;\n        bottom: 16%;\n        left: 30%;\n    }\n    .taskicon3 {\n        position: absolute;\n        bottom: 30%;\n        left: 35%;\n    }\n    .taskicon4 {\n        position: absolute;\n        bottom: 44%;\n        left: 28%;\n    }\n    .taskicon5 {\n        position: absolute;\n        bottom: 62%;\n        left: 68%;\n    }\n    .taskicon6 {\n        position: absolute;\n        bottom: 76%;\n        left: 72%\n    }\n    .taskicon7 {\n        position: absolute;\n        bottom: 58%;\n        left: 22%;\n    }\n    .taskicon8 {\n        position: absolute;\n        bottom: 82%;\n        left: 66%;\n    }\n    .taskicon9 {\n        position: absolute;\n        bottom: 72%;\n        left: 22%;\n    }\n    .taskicon10 {\n        position: absolute;\n        bottom: 81%;\n        left: 34%;\n    }\n    .taskicon11 {\n        position: absolute;\n        bottom: 84%;\n        left: 50%;\n    }\n}\n\n@media (min-width:451px) and (max-width:767px) {\n    h1,\n    p {\n        font-family: Lato;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .taskbg {\n        z-index: -100;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        object-fit: fill;\n    }\n    .tasktopcontainer {\n        width: 100vw;\n        position: relative;\n    }\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 30%;\n        padding-top: 5vh;\n        padding-left: 5%;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 70%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .tasklogoicon {\n        width: 18vw;\n        height: 18vh;\n        object-fit: contain;\n        margin-top: 5%;\n        margin-left: 10%;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2vw;\n        text-align: center;\n    }\n    .tasklevelimageExsmall {\n        height: 4vh;\n        width: 4vw;\n        object-fit: contain;\n        display: block;\n    }\n    .tasklevelimagemedium {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimagesmall {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimageExsmalldisabled {\n        height: 4vh;\n        width: 4vw;\n        object-fit: contain;\n        display: block;\n        opacity: 40%;\n    }\n    .tasklevelimagemediumdisabled {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .tasklevelimagesmalldisabled {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .taskslist {\n        position: absolute;\n        bottom: 10%;\n        height: 70%;\n        width: 100%;\n        margin-top: -12%;\n        text-align: center;\n    }\n    .tasklslogo {\n        width: 90%;\n        max-height: 60vh;\n        object-fit: contain;\n        bottom: 0%;\n        margin-top: 10%;\n        margin-left: 10%;\n    }\n    .tasklevelscontainer {\n        position: relative;\n    }\n    .taskicon1 {\n        position: absolute;\n        bottom: 5%;\n        left: 38%;\n    }\n    .taskicon2 {\n        position: absolute;\n        bottom: 16%;\n        left: 43%;\n    }\n    .taskicon3 {\n        position: absolute;\n        bottom: 30%;\n        left: 44%;\n    }\n    .taskicon4 {\n        position: absolute;\n        bottom: 44%;\n        left: 40%;\n    }\n    .taskicon5 {\n        position: absolute;\n        bottom: 60%;\n        left: 63%;\n    }\n    .taskicon6 {\n        position: absolute;\n        bottom: 72%;\n        left: 66%\n    }\n    .taskicon7 {\n        position: absolute;\n        bottom: 58%;\n        left: 36%;\n    }\n    .taskicon8 {\n        position: absolute;\n        bottom: 80%;\n        left: 64%;\n    }\n    .taskicon9 {\n        position: absolute;\n        bottom: 73%;\n        left: 37%;\n    }\n    .taskicon10 {\n        position: absolute;\n        bottom: 83%;\n        left: 45%;\n    }\n    .taskicon11 {\n        position: absolute;\n        bottom: 84%;\n        left: 55%;\n    }\n}\n\n@media (min-width:768px) {\n    h1,\n    p {\n        font-family: Lato;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .taskbg {\n        z-index: -100;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        object-fit: fill;\n    }\n    .tasktopcontainer {\n        width: 100vw;\n        position: relative;\n    }\n    .taskicons {\n        display: inline-block;\n        width: 25%;\n        padding-top: 5vh;\n        padding-left: 10%;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 60%;\n    }\n    .taskshrsettimg {\n        display: block;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .tasklogoicon {\n        width: 15vw;\n        height: 15vh;\n        object-fit: contain;\n        margin-top: 6%;\n        margin-left: 15%;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n        width: 50%;\n        display: table-cell;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 1vw;\n        text-align: center;\n    }\n    .tasklevelimageExsmall {\n        height: 3vh;\n        width: 3vw;\n        object-fit: contain;\n        display: block;\n    }\n    .tasklevelimagemedium {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimagesmall {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimageExsmalldisabled {\n        height: 3vh;\n        width: 3vw;\n        object-fit: contain;\n        display: block;\n        opacity: 40%;\n    }\n    .tasklevelimagemediumdisabled {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .tasklevelimagesmalldisabled {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .taskslist {\n        position: absolute;\n        bottom: 10%;\n        height: 70%;\n        width: 100%;\n        margin-top: -12%;\n        text-align: center;\n    }\n    .tasklslogo {\n        width: 90%;\n        max-height: 65vh;\n        object-fit: contain;\n        margin-top: 3%;\n        margin-left: 10%;\n    }\n    .tasklevelscontainer {\n        position: relative;\n    }\n    .taskicon1 {\n        position: absolute;\n        bottom: 5%;\n        left: 40%;\n    }\n    .taskicon2 {\n        position: absolute;\n        bottom: 18%;\n        left: 45%;\n    }\n    .taskicon3 {\n        position: absolute;\n        bottom: 33%;\n        left: 48%;\n    }\n    .taskicon4 {\n        position: absolute;\n        bottom: 48%;\n        left: 45%;\n    }\n    .taskicon5 {\n        position: absolute;\n        bottom: 64%;\n        left: 62%;\n    }\n    .taskicon6 {\n        position: absolute;\n        bottom: 77%;\n        left: 64%\n    }\n    .taskicon7 {\n        position: absolute;\n        bottom: 62%;\n        left: 40%;\n    }\n    .taskicon8 {\n        position: absolute;\n        bottom: 84%;\n        left: 61%;\n    }\n    .taskicon9 {\n        position: absolute;\n        bottom: 76%;\n        left: 39%;\n    }\n    .taskicon10 {\n        position: absolute;\n        bottom: 86%;\n        left: 45%;\n    }\n    .taskicon11 {\n        position: absolute;\n        bottom: 88%;\n        left: 53%;\n    }\n}\n\n@media (min-width:1024px) {\n    h1,\n    p {\n        font-family: Lato;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .task_scanback {\n        position: relative;\n        width: 15vw;\n        height: 20vh;\n    }\n    .task_scanlsqr {\n        width: 10vw;\n        height: 10vh;\n        object-fit: contain;\n        display: grid;\n        z-index: 10;\n    }\n    .taskbg {\n        z-index: -100;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        object-fit: fill;\n    }\n    .tasktopcontainer {\n        width: 100vw;\n        position: relative;\n    }\n    .taskicons {\n        display: inline-block;\n        width: 25%;\n        padding-top: 5vh;\n        padding-left: 10%;\n    }\n    .tasklogoposition {\n        display: inline-flex;\n        width: 60%;\n    }\n    .taskshrsettimg {\n        display: block;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .tasklogoicon {\n        width: 15vw;\n        height: 15vh;\n        object-fit: contain;\n        margin-top: 3%;\n        margin-left: 15%;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n        width: 50%;\n        display: table-cell;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 1.5vw;\n        text-align: center;\n    }\n    .tasklevelimageExsmall {\n        height: 3vh;\n        width: 3vw;\n        object-fit: contain;\n        display: block;\n    }\n    .tasklevelimagemedium {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimagesmall {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n    }\n    .tasklevelimageExsmalldisabled {\n        height: 3vh;\n        width: 3vw;\n        object-fit: contain;\n        display: block;\n        opacity: 40%;\n    }\n    .tasklevelimagemediumdisabled {\n        height: 9vh;\n        width: 9vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .tasklevelimagesmalldisabled {\n        height: 6vh;\n        width: 6vw;\n        object-fit: contain;\n        display: inline-block;\n        opacity: 40%;\n    }\n    .taskslist {\n        position: absolute;\n        bottom: 10%;\n        height: 70%;\n        width: 100%;\n        margin-top: -12%;\n        text-align: center;\n    }\n    .tasklslogo {\n        width: 90%;\n        max-height: 65vh;\n        object-fit: contain;\n        margin-top: 3%;\n        margin-left: 10%;\n    }\n    .tasklevelscontainer {\n        position: relative;\n    }\n    .taskicon1 {\n        position: absolute;\n        bottom: 5%;\n        left: 40%;\n    }\n    .taskicon2 {\n        position: absolute;\n        bottom: 18%;\n        left: 45%;\n    }\n    .taskicon3 {\n        position: absolute;\n        bottom: 33%;\n        left: 48%;\n    }\n    .taskicon4 {\n        position: absolute;\n        bottom: 48%;\n        left: 45%;\n    }\n    .taskicon5 {\n        position: absolute;\n        bottom: 64%;\n        left: 62%;\n    }\n    .taskicon6 {\n        position: absolute;\n        bottom: 77%;\n        left: 64%\n    }\n    .taskicon7 {\n        position: absolute;\n        bottom: 62%;\n        left: 40%;\n    }\n    .taskicon8 {\n        position: absolute;\n        bottom: 84%;\n        left: 61%;\n    }\n    .taskicon9 {\n        position: absolute;\n        bottom: 76%;\n        left: 39%;\n    }\n    .taskicon10 {\n        position: absolute;\n        bottom: 86%;\n        left: 45%;\n    }\n    .taskicon11 {\n        position: absolute;\n        bottom: 88%;\n        left: 53%;\n    }\n}",""]),t.a=a},664:function(n,t,e){n.exports=e.p+"1a40c392e826b50c947056d6b6d9efa0.png"},665:function(n,t,e){n.exports=e.p+"a874accaf0bd51c56793fee87b7aa60b.png"},666:function(n,t,e){n.exports=e.p+"a40692455d6a120635de8b0f61b70951.png"},667:function(n,t,e){n.exports=e.p+"2a423a26150094132702fc21383640c1.png"},668:function(n,t,e){n.exports=e.p+"e67e93bb9865db2dc6fc76d7f80d0570.png"},669:function(n,t,e){n.exports=e.p+"2931c48627c93b4d229e6ef606d7f62f.png"},670:function(n,t,e){n.exports=e.p+"ee7e361e1c2e3d536270378c5b5de28d.png"},798:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),o=e(455),l=e.n(o),s=e(663),c={insert:"head",singleton:!1},m=(l()(s.a,c),s.a.locals,e(457)),r=e(664),d=e(467),b=e(665),p=e(666),h=e(667),f=e(488),g=e(503),v=e(504),k=e(505),u=e(506),w=e(507),x=e(508),y=e(509),E=e(668),N=e(669),j=e(670),z=e(582),T=e(14),_=e(462);function S(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,a=!1,o=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done)&&(e.push(l.value),!t||e.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return C(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var L=[{TaskLevel:"1",active:!0},{TaskLevel:"2",active:!0},{TaskLevel:"3",active:!1},{TaskLevel:"4",active:!1},{TaskLevel:"5",active:!0},{TaskLevel:"6",active:!1},{TaskLevel:"7",active:!1},{TaskLevel:"8",active:!1},{TaskLevel:"9",active:!1}];t.default=function(){var n=S(Object(i.useState)(L),2),t=n[0],e=(n[1],Object(T.g)()),o=S(Object(i.useState)(!1),2),l=(o[0],o[1]),s=S(Object(i.useState)(!1),2),c=s[0],C=s[1],A=function(n){e.replace("/TaskScreen/"+n)};return Object(i.useEffect)((function(){}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("img",{className:"taskbg",src:m})),a.a.createElement("div",{className:"tasktopcontainer"},a.a.createElement("div",{className:"tasklogoposition"},a.a.createElement("img",{className:"tasklogoicon",src:d})),a.a.createElement(_.a,null)),a.a.createElement("div",{className:"cluelist_col"},a.a.createElement("img",{className:"task_scanback",src:p}),a.a.createElement("div",{onClick:function(){C(!0)},className:"cluelist_tickmain"},a.a.createElement("img",{className:"task_scanlsqr",src:h}))),a.a.createElement("div",{className:"taskslist"},a.a.createElement("img",{className:"tasklslogo",src:r}),t[7].active?a.a.createElement("div",{className:"taskicon11",onClick:function(){A(8)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:y})):a.a.createElement("div",{className:"taskicon11"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:y})),t[6].active?a.a.createElement("div",{className:"taskicon10",onClick:function(){A(7)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:x})):a.a.createElement("div",{className:"taskicon10"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:x})),t[5].active?a.a.createElement("div",{className:"taskicon9",onClick:function(){A(6)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:w})):a.a.createElement("div",{className:"taskicon9"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:w})),a.a.createElement("div",{className:"taskicon8"},a.a.createElement("img",{className:"tasklevelimagesmalldisabled",src:E})),t[4].active?a.a.createElement("div",{className:"taskicon7",onClick:function(){A(5)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:u})):a.a.createElement("div",{className:"taskicon7"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:u})),a.a.createElement("div",{className:"taskicon6"},a.a.createElement("img",{className:"tasklevelimageExsmalldisabled",src:N})),a.a.createElement("div",{className:"taskicon5"},a.a.createElement("img",{className:"tasklevelimagesmalldisabled",src:j})),t[3].active?a.a.createElement("div",{className:"taskicon4",onClick:function(){A(4)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:k})):a.a.createElement("div",{className:"taskicon4"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:k})),t[2].active?a.a.createElement("div",{className:"taskicon3",onClick:function(){A(3)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:v})):a.a.createElement("div",{className:"taskicon3"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:v})),t[1].active?a.a.createElement("div",{className:"taskicon2",onClick:function(){A(2)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:g})):a.a.createElement("div",{className:"taskicon2"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:g})),t[0].active?a.a.createElement("div",{className:"taskicon1",onClick:function(){A(1)}},a.a.createElement("img",{className:"tasklevelimagemedium",src:f})):a.a.createElement("div",{className:"taskicon1"},a.a.createElement("img",{className:"tasklevelimagemediumdisabled",src:f})))),c?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"taskslist_scannerpopup_main"}),a.a.createElement("div",{className:"taskslist_scannerpopup"},a.a.createElement("div",{className:"startscannercamera"},a.a.createElement(z.a,{onScan:function(n){null!==n&&(l(!1),console.log(n),e.replace(n))},style:{height:"50%",width:"83%",Option:"rear"},onError:function(n){console.log(n)}})),a.a.createElement("div",{className:"tasklist_scannertext"},a.a.createElement("div",null,"Scan the QR code."),a.a.createElement("div",null,"Unlock the Task/Clues."))),a.a.createElement("div",{onClick:function(){C(!1)},className:"taskslist_closemain"},a.a.createElement("img",{className:"taskslist_close",src:b}))):null)}}}]);