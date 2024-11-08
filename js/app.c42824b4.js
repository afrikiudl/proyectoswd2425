(function(){"use strict";var t={4244:function(t,e,a){a(7461),a(2708);var i=a(5471),r=a(6429),n=a(2630),s=a(1273);r.Yv.add(n.X7I),i["default"].component("font-awesome-icon",s.gc);var o=a(8292);a(9313);i["default"].use(o.Ay$);var c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-container",{attrs:{fluid:""}},[e("Menu"),t._v(" "),e("b-breadcrumb",{attrs:{items:t.items}}),e("router-view"),e("Footer")],1)],1)},l=[],d=function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"secondary"}},[e("b-navbar-brand",{staticClass:"mt-0",attrs:{to:"/home"}},[e("b-avatar",{attrs:{src:"https://www.udl.cat/export/sites/universitat-lleida/ca/serveis/ori/.galleries/images/galeria_img_ori/UdL_nou_petit.jpg"}}),e("h1",[t._v(" Web Dinámica ")]),e("h1",[t._v(" 2024/25 ")])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-container",{staticClass:"mt-5 ml-4"},[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("Home")]),e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/practica1"}},[t._v("Práctica1")]),e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/practica2"}},[t._v("Práctica2")])],1)],1)],1)],1)},u=[],v=a(1656),p={},f=(0,v.A)(p,d,u,!1,null,"04e99a51",null),m=f.exports,b=function(){var t=this,e=t._self._c;return e("b-alert",{attrs:{variant:"danger",show:""}},[e("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" || "),e("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(". ")],1)},g=[],h={},w=h,y=(0,v.A)(w,b,g,!1,null,"582dab08",null),_=y.exports,C={name:"App",components:{Menu:m,Footer:_},data(){return{items:[{text:"Home",href:"/home",to:"/home"},{text:"Página actual",active:!0}]}}},k=C,x=(0,v.A)(k,c,l,!1,null,null,null),P=x.exports,j=a(173),A=function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"about"},[e("div",{staticClass:"mt-5 mb-5"},[e("h2",[t._v("Prácticas de la asignatura "),e("b-link",{attrs:{href:"https://guiadocent.udl.cat/pdf/es/102183"}},[t._v("Web Dinámica")]),t._v(" del "),e("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" de la "),e("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")])],1),e("h2",[t._v("Curso 2024/25")]),e("p",{staticClass:"mt-5 mb-5 px-5 s"},[t._v("En este sitio web se encuentran las "),e("strong",[t._v(" prácticas de los alumnos ")]),t._v(" de la asignatura de Web Dinámica del "),e("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" del "),e("strong",[t._v(" curso 2024/2025")]),t._v(" de la "),e("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(". ")],1)]),e("div",{staticClass:"mt-5 mb-5"},[e("Diapos")],1),e("div",{staticClass:"row mt-5 mb-4"},[e("div",{staticClass:"col-sm-6 mb-3 mb-sm-0"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[e("strong",[t._v("Práctica 1")])]),e("p",{staticClass:"card-text"},[t._v("Desarrollar una página web con HTML5 y CSS3, y elementos de diseño web.")]),e("b-button",{attrs:{to:"/practica1",variant:"primary"}},[t._v("Accede a las prácticas "),e("strong",[t._v("1")])])],1)])]),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[e("strong",[t._v("Práctica 2")])]),e("p",{staticClass:"card-text"},[t._v("Construye un sitio web, utilizando "),e("b-link",{attrs:{href:"https://bootstrap-vue.org/"}},[t._v("Boostrap-vue")]),t._v(", que combina el Framework CSS (Boostrap) y el Framework JS (VUE.js).")],1),e("b-button",{attrs:{to:"/practica2",variant:"primary"}},[t._v("Accede a las prácticas "),e("strong",[t._v("2")])])],1)])])])])])},O=[],S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"diapos"},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:1e4,controls:"",fade:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[e("b-carousel-slide",{attrs:{"content-visible-up":"sm",caption:"Información del Grado Diseño Digital y Tecnologías Creativas de la Universitat de Lleida","img-src":a(303),"img-alt":"Grau en disseny digital y tecnologies creatives",width:"1024",height:"600",html:"https://graudissenydigitalitec.udl.cat/ca/"}}),e("b-carousel-slide",{attrs:{"content-visible-up":"sm",caption:"Sala Ordenadores MAC","img-src":a(2195),"img-alt":"Vista de la sala de ordenadores del grado de diseño",width:"1024",height:"600",html:"https://graudissenydigitalitec.udl.cat/ca/"}})],1)],1)},D=[],T={},E=(0,v.A)(T,S,D,!1,null,null,null),L=E.exports,H={name:"Home",components:{Diapos:L}},F=H,M=(0,v.A)(F,A,O,!1,null,null,null),U=M.exports;i["default"].use(j.Ay);const G=[{path:"/",name:"Home",component:U},{path:"/Home",name:"Home",component:U},{path:"/Practica1",name:"Practica1",component:()=>a.e(501).then(a.bind(a,7809))},{path:"/Practica2",name:"Practica2",component:()=>a.e(894).then(a.bind(a,4361))}],B=new j.Ay({mode:"history",base:"/proyectoswd2425/",routes:G});var N=B;i["default"].config.productionTip=!1,new i["default"]({router:N,render:t=>t(P)}).$mount("#app")},303:function(t,e,a){t.exports=a.p+"img/graudiseny.6ef55c0b.jpg"},2195:function(t,e,a){t.exports=a.p+"img/salaPCs.ef0de473.jpg"}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,n){if(!i){var s=1/0;for(d=0;d<t.length;d++){i=t[d][0],r=t[d][1],n=t[d][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<s&&(s=n));if(o){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,r,n]}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+{501:"practica1",894:"practica2"}[t]+"."+{501:"7687c069",894:"ccc22955"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="proyectoswd2425:";a.l=function(i,r,n,s){if(t[i])t[i].push(r);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+n){o=u;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+n),o.src=i),t[i]=[r];var v=function(e,a){o.onerror=o.onload=null,clearTimeout(p);var r=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=v.bind(null,o.onerror),o.onload=v.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/proyectoswd2425/"}(),function(){var t={524:0};a.f.j=function(e,i){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise((function(a,i){r=t[e]=[a,i]}));i.push(r[2]=n);var s=a.p+a.u(e),o=new Error,c=function(i){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",o.name="ChunkLoadError",o.type=n,o.request=s,r[1](o)}};a.l(s,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,n,s=i[0],o=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(c)var d=c(a)}for(e&&e(i);l<s.length;l++)n=s[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},i=self["webpackChunkproyectoswd2425"]=self["webpackChunkproyectoswd2425"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(4244)}));i=a.O(i)})();
//# sourceMappingURL=app.c42824b4.js.map