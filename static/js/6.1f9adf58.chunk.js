(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(292),n(54)),i=n(60),l=n(61),c=function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundImage:"url('./asset/aboutus/headerbg.png')",backgroundSize:"cover",backgroundPosition:"center center",backgroundColor:"#f8fafc"}})},s=n(38),u=Object(s.withStyles)({root:{display:"flex",flexDirection:"column",width:"60%",alignItems:"center",position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)","& > *":{marginBottom:"30px"}},"@media screen and (max-width: 700px)":{root:{width:"80%"}},text1:{color:"#fff",textAlign:"center",fontSize:"28px",letterSpacing:"0.7px",fontWeight:"500"},text2:{color:"#fff",textAlign:"center",fontSize:"14px",fontWeight:"400",opacity:"0.92",letterSpacing:"0.4px"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("h1",{className:t.text1},"\u5173\u4e8e\u6211\u4eec"),r.a.createElement("p",{className:t.text2},"\u200bFLAG Dream\u81f4\u529b\u4e8e\u4e3a\u672a\u6765\u79d1\u6280\u4ece\u4e1a\u8005\u63d0\u4f9b\u5b8c\u6574\u7684\u5b66\u4e60\u4e0e\u6c42\u804c\u89e3\u51b3\u65b9\u6848\uff0c\u6253\u9020\u4e00\u6d41\u4e00\u7ad9\u5f0f\u5b66\u4e60\u6c42\u804c\u5e73\u53f0\u3002\u6bcf\u5e74\uff0cFLAG Dream\u901a\u8fc7\u9ad8\u8d28\u91cf\u7684\u8bfe\u7a0b\u548c\u9876\u7ea7\u7684\u5c31\u4e1a\u670d\u52a1\u8854\u63a5\u5de5\u4e1a\u754c\u548c\u5b66\u754c\uff0c\u5c06\u6570\u767e\u4f4d\u5b66\u5458\u9001\u5165\u7845\u8c37\u548c\u5168\u7403\u7684\u9876\u7ea7\u516c\u53f8\u3002"),r.a.createElement("p",{className:t.text2},"\u8eab\u5904\u7845\u8c37\uff0c\u6211\u4eec\u76f8\u4fe1\uff0c\u6bcf\u4e00\u4f4d\u613f\u610f\u5b66\u4e60\u3001\u4e50\u4e8e\u62e5\u62b1\u53d8\u5316\u7684\u4eba\u90fd\u80fd\u5728\u5f53\u4eca\u65f6\u4ee3\u4e2d\u5bfb\u627e\u5230\u5408\u9002\u81ea\u5df1\u7684\u5c97\u4f4d\u3002FLAG Dream\u5c06\u7528\u6700\u4f18\u8d28\u7684\u8d44\u6e90\uff0c\u5e2e\u52a9\u4e0b\u4e00\u4ee3\u79d1\u6280\u4ece\u4e1a\u8005\u5b9e\u73b0\u6c42\u804c\u68a6\u60f3\u3002"))}),p=function(){return r.a.createElement("header",{style:{height:"395px",position:"relative"}},r.a.createElement(c,null),r.a.createElement(u,null))},m=n(55),d=Object(s.withStyles)({root:{width:"164px",height:"65px",backgroundSize:"80%",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundColor:"#f6f6f6",margin:"10px"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root,style:{backgroundImage:e.logo}})}),f=Object(s.withStyles)({logoGroup:{maxWidth:"920px",display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"0 auto"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.logoGroup},Object(m.a)(Array(25)).map(function(e,t){return r.a.createElement(d,{key:t,logo:'url("./asset/aboutus/partner'.concat(t+1,'.png")')})}))}),x=Object(s.withStyles)({root:{marginTop:"60px"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("h2",{style:{textAlign:"center"}},"\u5408\u4f5c\u4f01\u4e1a"),r.a.createElement(f,null))});t.default=function(e){var t=Object(o.b)();return r.a.createElement("div",{className:"aboutus"},r.a.createElement(i.a,{windowScroll:t}),r.a.createElement(p,null),r.a.createElement(x,null),r.a.createElement(l.a,null))}},54:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var a=n(42),r=n(0);var o=function(){var e=window,t=document,n=t.documentElement,a=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||a.clientWidth},i=function(){var e=Array.from(document.querySelectorAll(".roots"));return e=e.map(function(e){return e.offsetTop})},l=function(){return window.scrollY};function c(){var e=Object(r.useState)(o()),t=Object(a.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)([]),s=Object(a.a)(c,2),u=s[0],p=s[1];return Object(r.useEffect)(function(){p(i());var e=function(e){var t;return function(){t&&clearTimeout(t),t=setTimeout(function(){e()},100)}}(function(){l(o()),p(i())});return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),{windowWidth:n,offsetTops:u}}function s(){var e=Object(r.useState)(l()),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(function(){var e=function(){o(l())};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),n}function u(e){var t=window.matchMedia(e),n=Object(r.useState)(t.matches),o=Object(a.a)(n,2),i=o[0],l=o[1];return Object(r.useEffect)(function(){var e=function(e){e.matches?l(!0):l(!1)};return t.addListener(e),function(){t.removeListener(e)}},[t]),i}},59:function(e,t,n){},60:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=function(e){var t=e.windowScroll;return e.mobile?r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{width:"100px",src:"./asset/homepage/logo.png",alt:"flage dream logo"})):r.a.createElement(o.b,{to:"/",style:{padding:"12px 30px 8px"}},r.a.createElement("img",{width:"100px",src:t>100?"./asset/homepage/logo.png":"./asset/homepage/logo-white.png",alt:"flage dream logo"}))},l=n(38),c=n(54),s=n(55),u=n(42),p=n(57),m=n.n(p),d=n(49),f=n.n(d),x=Object(l.withStyles)({root:{position:"relative","&:hover":{backgroundColor:"transparent"}},navItem:{display:"flex",alignItems:"center"},arrow:{width:"0px",height:"0px",marginLeft:"6px",borderTop:"4px solid",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",transition:"all 150ms ease-in"},down:{transform:"rotate(180deg)"},displayNone:{display:"none"},dropdown:{position:"absolute",left:"-60px",top:"45px",width:"200px",borderRadius:"3px",boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.26)",backgroundColor:"#fff",padding:"12px 6px","& li":{borderRadius:"2px",transition:"all 150ms linear","& a":{display:"inline-block",padding:"12px 20px 12px 20px",color:"#404040"},"&:hover":{boxShadow:"0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)",backgroundColor:"#1f74d4","& a":{color:"#fff"}}}}})(function(e){var t=e.dropdownOpens,n=e.itemKey,o=e.openStatus,i=e.setDropdownOpens,l=e.rootUrl,c=e.secondLevel,s=e.classes,p=Object(a.useState)(!1),d=Object(u.a)(p,2),x=d[0],b=d[1];return Object(a.useEffect)(function(){b(o)},[o]),r.a.createElement(f.a,{size:"medium",style:{color:"var(--whiteFont)"},className:"".concat(s.root," topNavItem"),onClick:function(){b(!x);var e=t.map(function(e,t){return t===n});i(e)}},r.a.createElement("div",{className:s.navItem},e.topLevel,r.a.createElement("b",{id:"testNav",className:x?s.arrow+" "+s.down:s.arrow,style:{borderTopColor:"var(--whiteFont)"}})),r.a.createElement(m.a,{transitionName:"navDropdown",transitionEnterTimeout:300,transitionLeaveTimeout:200},x&&r.a.createElement("div",{className:s.dropdown},r.a.createElement("ul",null,c.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"./#".concat(l,"/course").concat(t+1)},e))})))))}),b=Object(l.withStyles)({root:{width:"100%",maxWidth:"400px",height:"67px",position:"relative"},nav:{marginTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:"40px","& li":{fontSize:"14px"},"& ul > *":{cursor:"pointer"}},fontColor:{color:"#fff"}})(function(e){var t=e.classes,n=Object(a.useState)([!1,!1]),o=Object(u.a)(n,2),i=o[0],l=o[1];return Object(a.useEffect)(function(){var e=Object(s.a)(document.getElementsByClassName("topNavItem")),t=function(t){(function(t){var n=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;if(l===t||l.contains(t))return!1}}catch(c){a=!0,r=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return!0})(t.target)&&l([!1,!1])};return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}}),r.a.createElement("div",{className:t.root,id:"nav"},r.a.createElement("ul",{className:t.nav},r.a.createElement(x,{dropdownOpens:i,setDropdownOpens:l,openStatus:i[0],itemKey:0,rootUrl:"/courses",topLevel:"\u65d7\u8230\u8bfe\u7a0b",secondLevel:["\u7a0b\u5e8f\u5458\u7b97\u6cd5\u9762\u8bd5\u8bfe","\u7a0b\u5e8f\u5458\u5168\u6808\u5f00\u53d1\u5b9e\u6218\u8bfe","\u6570\u636e\u79d1\u5b66\u6c42\u804c\u5b9e\u6218\u8bfe"]}),r.a.createElement(x,{dropdownOpens:i,setDropdownOpens:l,openStatus:i[1],itemKey:1,rootUrl:"/resources",topLevel:"\u514d\u8d39\u8d44\u6e90",secondLevel:["\u6700\u65b0\u6d3b\u52a8","\u6280\u672f\u535a\u5ba2"]}),r.a.createElement(f.a,{size:"medium"},r.a.createElement("a",{style:{color:"var(--whiteFont)"},href:"./#/aboutus"},"\u5173\u4e8e\u6211\u4eec")),r.a.createElement(f.a,{size:"medium"},r.a.createElement("a",{style:{color:"var(--whiteFont)"},href:"./#/login"},"\u767b\u9646"))))}),v=n(58),g=n.n(v),w=n(73),h=n.n(w),E=n(64),y=n.n(E),O=n(75),S=n.n(O),j=Object(l.withStyles)({root:{position:"relative","&:hover":{backgroundColor:"transparent"}},navItem:{display:"flex",flexDirection:"column"},navTitle:{display:"flex",alignItems:"center",fontSize:"16px"},arrow:{width:"0px",height:"0px",marginLeft:"6px",borderTop:"4px solid",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",transition:"all 150ms ease-in"},down:{transform:"rotate(180deg)"},dropdown:{width:"200px",borderRadius:"3px",backgroundColor:"#fff",padding:"12px 6px 10px 16px","& li":{textAlign:"left",padding:"2px 6px",borderRadius:"2px",transition:"all 150ms linear","& a":{display:"inline-block",color:"#404040"},"&:hover":{boxShadow:"0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)",backgroundColor:"#1f74d4","& a":{color:"#fff"}}}}})(function(e){var t=e.dropdownOpens,n=e.itemKey,o=e.openStatus,i=e.setDropdownOpens,l=e.rootUrl,c=e.secondLevel,s=e.getNavItems,p=e.classes,m=Object(a.useState)(!1),d=Object(u.a)(m,2),x=d[0],b=d[1];return Object(a.useEffect)(function(){b(o)},[o]),Object(a.useEffect)(function(){1===n&&s(document.getElementsByClassName("sideNavItem"))},[]),r.a.createElement(f.a,{size:"medium",className:"".concat(p.root," sideNavItem"),onClick:function(){b(!x);var e=t.map(function(e,t){return t===n});i(e)}},r.a.createElement("div",{className:p.navItem},r.a.createElement("div",{className:p.navTitle},e.topLevel,r.a.createElement("b",{className:x?p.arrow+" "+p.down:p.arrow})),x&&r.a.createElement("div",{className:p.dropdown},r.a.createElement("ul",null,c.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"./#".concat(l,"/course").concat(t+1)},e))})))))}),N=Object(l.withStyles)(function(e){return{root:{position:"absolute",right:"0",top:"8px"},nav:{marginTop:"65px",width:"60vw",display:"flex",flexDirection:"column",justifyContent:"space-between","& a":{fontSize:"16px"},"& > li":{width:"80%",margin:"6px auto",borderBottom:"1px solid #e5e5e5"}},logo:{position:"absolute",top:"40px",left:"50%",transform:"translateX(-50%)"},button:{"&:hover":{backgroundColor:"transparent"}}}})(function(e){var t=e.classes,n=Object(a.useState)(!1),o=Object(u.a)(n,2),l=o[0],c=o[1],p=Object(a.useState)([!1,!1]),m=Object(u.a)(p,2),d=m[0],x=m[1],b=Object(a.useState)([]),v=Object(u.a)(b,2),w=v[0],E=v[1];return Object(a.useEffect)(function(){var e=Object(s.a)(w),t=function(t){(function(t){var n=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;if(l===t||l.contains(t))return!1}}catch(c){a=!0,r=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return!0})(t.target)&&x([!1,!1])};return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}}),r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{"aria-label":"NavMenu",onClick:function(){return c(!0)}},r.a.createElement(h.a,{style:{color:"var(--whiteFont)"},fontSize:"large"})),r.a.createElement(S.a,{anchor:"right",open:l,id:"outnav",onClose:function(){c(!1),x([!1,!1])}},r.a.createElement("div",{tabIndex:0,role:"button"},r.a.createElement(g.a,{"aria-label":"NavMenu",onClick:function(){c(!1),x([!1,!1])}},r.a.createElement(y.a,null)),r.a.createElement("div",{className:t.logo},r.a.createElement(i,{mobile:!0})),r.a.createElement("ul",{className:t.nav},r.a.createElement("li",null,r.a.createElement(j,{dropdownOpens:d,setDropdownOpens:x,openStatus:d[0],itemKey:0,rootUrl:"/courses",topLevel:"\u65d7\u8230\u8bfe\u7a0b",secondLevel:["\u7a0b\u5e8f\u5458\u7b97\u6cd5\u9762\u8bd5\u8bfe","\u7a0b\u5e8f\u5458\u5168\u6808\u5f00\u53d1\u5b9e\u6218\u8bfe","\u6570\u636e\u79d1\u5b66\u6c42\u804c\u5b9e\u6218\u8bfe"]})),r.a.createElement("li",null,r.a.createElement(j,{dropdownOpens:d,setDropdownOpens:x,openStatus:d[1],itemKey:1,rootUrl:"/resources",topLevel:"\u514d\u8d39\u8d44\u6e90",secondLevel:["\u6700\u65b0\u6d3b\u52a8","\u6280\u672f\u535a\u5ba2"],getNavItems:E})),r.a.createElement("li",null,r.a.createElement(f.a,{size:"medium",className:t.button},r.a.createElement("a",{href:"./#/aboutus"},"\u5173\u4e8e\u6211\u4eec"))),r.a.createElement("li",null,r.a.createElement(f.a,{size:"medium",className:t.button},r.a.createElement("a",{href:"./#/login"},"\u767b\u9646")))))))}),k=Object(l.withStyles)({root:{width:"400px",height:"67px",position:"relative"}})(function(e){var t=e.classes,n=Object(c.a)("(max-width:700px)");return r.a.createElement("div",{className:t.root},n?r.a.createElement(N,null):r.a.createElement(b,null))});n(59),t.a=Object(l.withStyles)({root:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100vw",height:"80px",position:"fixed",top:"0",transition:"backgroundColor .3s cubic-bezier(.4,0,.6,1)",backgroundColor:"transparent",zIndex:10}})(function(e){var t=e.windowScroll,n=e.windowWidth,o=e.classes;return Object(a.useEffect)(function(){var e=document.getElementById("nav");t<100?e.style.setProperty("--whiteFont","#fff"):e.style.setProperty("--whiteFont","#404040")},[t]),r.a.createElement("nav",{className:o.root,id:"nav",style:t<100?{opacity:"1",transform:"translateY(0)",transition:"backgroundColor.3s cubic-bezier(.4,0,.2,1) .3s"}:{padding:"30px 0",backgroundColor:"#fff",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"}},r.a.createElement(i,{windowScroll:t}),r.a.createElement(k,{windowWidth:n}))})},61:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(38),i=Object(o.withStyles)(function(e){return{section:{color:"#404040",fontSize:"18px",letterSpacing:"1.2px",fontWeight:"normal",margin:"20px 0"},item:{color:"#5e5e5e",fontSize:"14px",letterSpacing:"0.9px",margin:"8px 0"},"@media screen and (max-width: 500px)":{section:{fontSize:"16px"},item:{fontSize:"12px"}}}})(function(e){var t=e.classes;return r.a.createElement("ul",{className:t.ul},r.a.createElement("h5",{className:t.section},e.title),e.content.map(function(e){return r.a.createElement("li",{className:t.item,key:e},e)}))}),l=function(){return r.a.createElement("p",{style:{width:"100%",height:"72px",backgroundColor:"#f5f5f5",display:"flex",alignItems:"center",justifyContent:"center",color:"#5e5e5e",fontSize:"14px",letterSpacing:"0.9px"}},"\xa9 All rights reserved. 2019 FLAGDream ")};t.a=Object(o.withStyles)({root:{display:"flex",justifyContent:"space-around",padding:"20px"},"@media screen and (max-width: 500px)":{root:{padding:"20px 10px"}}})(function(e){var t=e.classes;return r.a.createElement("footer",{style:{width:"100%"}},r.a.createElement("section",{className:t.root},r.a.createElement(i,{title:"\u65d7\u8230\u8bfe\u7a0b",content:["\u7a0b\u5e8f\u5458\u7b97\u6cd5\u9762\u8bd5\u8bfe","\u7a0b\u5e8f\u5458\u9879\u76ee\u5b9e\u6218\u8bfe\u200b","\u6570\u636e\u79d1\u5b66\u6c42\u804c\u5b9e\u6218\u8bfe"]}),r.a.createElement(i,{title:"\u65b0\u95fb&\u8d44\u6e90",content:["\u6700\u65b0\u6d3b\u52a8","\u6280\u672f\u535a\u5ba2"]}),r.a.createElement(i,{title:"\u5173\u4e8e\u6211\u4eec",content:["\u516c\u53f8\u4ecb\u7ecd","\u4f7f\u7528\u6761\u6b3e","Careers"]})),r.a.createElement(l,null))})}}]);
//# sourceMappingURL=6.1f9adf58.chunk.js.map