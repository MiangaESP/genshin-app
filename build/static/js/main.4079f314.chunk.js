(this["webpackJsonpgenshin-app"]=this["webpackJsonpgenshin-app"]||[]).push([[0],{146:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(116),i=a.n(r),s=(a(146),a(6)),l=(a(88),a(19)),o=a(14),j=(a(147),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){c(!0),fetch("https://genshin-api-tau.vercel.app/armas").then((function(e){return e.json()})).then((function(e){c(!1),o(e)}))}),[]),{weapons:l,loadingWea:a}}),d=a(248),b=function(){var e=j().weapons,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({tipo:"Todos",rareza:"Todos",stat_secundario:"Todos"}),l=Object(s.a)(i,2),o=l[0],d=l[1],b=Object(n.useState)(e),h=Object(s.a)(b,2),u=h[0],x=h[1];return{filteredWeapons:u,nothingFound:c,newFilter:function(t){var a=o;"rareza"===t.target.name&&"Todos"!==t.target.value?a[t.target.name]=parseInt(t.target.value):a[t.target.name]=t.target.value,d(a);var n=null===e||void 0===e?void 0:e.filter((function(e){return function(e){var t={},a=!0;return Object.keys(o).forEach((function(e){"Todos"!==o[e]&&(t[e]=o[e])})),Object.keys(t).forEach((function(t){e[t]!==o[t]&&(a=!1)})),a}(e)}));x(n),0===n.length?r(!0):r(!1)}}},h=a(228),u=a(226),x=a(123),O=a(247),m=a(0),p=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),f=Object(x.a)({typography:{fontFamily:"RobotoCondensed-Regular",fontSize:16}}),g={border:"2px solid black",borderRadius:"20px 0 0 20px"},v={border:"2px solid black"},y=function(e){var t=e.weapon,a=e.index,n=Object(u.a)("(min-width:600px)");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"centerCharacter ".concat(n?"characterParent":"characterParentMobile"),children:[Object(m.jsx)("div",{style:g,name:"characterImage",children:Object(m.jsx)("img",{height:"250px",width:n?"250":"320",src:"".concat(t.img),alt:"imagen de ".concat(t.nombre," ")})},t.key),Object(m.jsx)("div",{className:"keysParent",children:Object.keys(t).map((function(e,a){return"img"!==e?Object(m.jsxs)("div",{className:"keyParent",children:[Object(m.jsx)("div",{style:v,className:"keyWea centerText",children:Object(m.jsx)(O.a,{theme:p,children:Object(m.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:(n=e,n.charAt(0).toUpperCase()+n.slice(1))})})}),Object(m.jsx)("div",{style:v,className:0===a?" valueUp value centerText":a===Object.keys(t).length-1?"valueDown value centerText":"value centerText",children:Object(m.jsx)(O.a,{theme:f,children:Object(m.jsx)(d.a,{variant:"body1",gutterBottom:!0,children:t[e]})})},t[e])]},e):null;var n}))},0)]},a),Object(m.jsx)(h.a,{sx:{border:"1px solid black",marginLeft:"5%",marginRight:"5%",marginBottom:"20px"}})]})},S=a(238),C=a(241),T=a(240),w=a(253),z=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),k=function(e){var t=e.newFilter;return Object(m.jsx)("div",{name:"Filtro",className:"filterContainer",children:Object(m.jsxs)(O.a,{theme:z,children:[Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Tipo"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Arma",onChange:t,name:"tipo",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"Arco",children:"Arco"}),Object(m.jsx)(T.a,{value:"Catalizador",children:"Catalizador"}),Object(m.jsx)(T.a,{value:"Espada",children:"Espada"}),Object(m.jsx)(T.a,{value:"Mandoble",children:"Mandoble"}),Object(m.jsx)(T.a,{value:"Lanza",children:"Lanza"})]})]})}),Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Rareza"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Rareza",onChange:t,name:"rareza",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"4",children:"4*"}),Object(m.jsx)(T.a,{value:"5",children:"5*"})]})]})}),Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Stat Secundario"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Region",onChange:t,name:"stat_secundario",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"ATQPER",children:"ATQ%"}),Object(m.jsx)(T.a,{value:"DEFPER",children:"DEF%"}),Object(m.jsx)(T.a,{value:"HPPER",children:"HP%"}),Object(m.jsx)(T.a,{value:"PhDMG",children:"Phisical Damage"}),Object(m.jsx)(T.a,{value:"Crit DMG",children:"Crit DMG"}),Object(m.jsx)(T.a,{value:"Crit Rate",children:"Crit Rate"}),Object(m.jsx)(T.a,{value:"ERPER",children:"ER"}),Object(m.jsx)(T.a,{value:"EM",children:"EM"})]})]})})]})})},N=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),R=Object(x.a)({typography:{fontFamily:"RobotoSlab-Bold",fontSize:20}}),E=function(){var e=j(),t=e.weapons,a=e.loadingWea,n=b(),c=n.filteredWeapons,r=n.nothingFound,i=n.newFilter;return Object(m.jsxs)("div",{className:"Parent",style:{marginTop:"40px"},children:[Object(m.jsx)(O.a,{theme:N,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h2",gutterBottom:!0,children:"Armas"})}),a?Object(m.jsx)(O.a,{theme:N,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Cargando..."})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{className:"center",newFilter:i}),r?Object(m.jsxs)(O.a,{theme:R,children:[Object(m.jsx)(d.a,{className:"center centerText",variant:"body1",gutterBottom:!0,children:"No se ha encontrado ningun arma que cumpla con estos filtros"})," "]}):0===c.length?t.map((function(e,t){return Object(m.jsx)(y,{weapon:e,index:t},t)})):c.map((function(e,t){return Object(m.jsx)(y,{weapon:e,index:t},t)}))]})]})},A=a(235),F=a(243),P=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),W=Object(x.a)({typography:{fontFamily:"RobotoCondensed-Regular",fontSize:16}}),D={border:"2px solid black",borderRadius:"20px 0 0 20px"},B={border:"2px solid black"},M=function(e){var t=e.character,a=e.habilities;return Object(m.jsx)("div",{children:t[a].map((function(e,t){return Object.keys(e).map((function(a){return"nombre"===a?Object(m.jsx)("div",{className:"keyParent",children:Object(m.jsx)("div",{className:"keyParent",children:Object(m.jsx)(O.a,{theme:W,children:Object(m.jsx)(d.a,{variant:"body1",gutterBottom:!0,children:"Habilidad ".concat(t+1,": ").concat(e[a]," \n                                                | Descripcion: \n                                                ").concat(e[Object.keys(e)[Object.keys(e).indexOf(a)+1]])})})},e)},t):null}))}))},a)},q=function(e){var t=e.character,a=e.index,c=Object(n.useState)(null),r=Object(s.a)(c,2),i=r[0],l=r[1],o=function(e){l(e.currentTarget)},j=function(){l(null)},b=Boolean(i),x=b?"simple-popover":void 0,p=Object(u.a)("(min-width:600px)");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"centerCharacter ".concat(p?"characterParent":"characterParentMobile"),children:[Object(m.jsx)("div",{style:D,name:"characterImage",children:Object(m.jsx)("img",{className:"imageParent",height:"500px",width:p?"250":"320",src:"".concat(t.img),alt:"imagen de ".concat(t.nombre," ")})},t.key),Object(m.jsx)("div",{className:"keysParent",children:Object.keys(t).map((function(e,a){return"img"!==e&&"habilidades"!==e?Object(m.jsxs)("div",{className:"keyParent",children:[Object(m.jsx)("div",{style:B,className:"keyChar centerText",children:Object(m.jsx)(O.a,{theme:P,children:Object(m.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:(n=e,n.charAt(0).toUpperCase()+n.slice(1))})})}),Object(m.jsx)("div",{style:B,className:0===a?" valueUp value centerText":"value centerText",children:Object(m.jsx)(O.a,{theme:W,children:Object(m.jsx)(d.a,{variant:"body1",gutterBottom:!0,children:t[e]})})},t[e])]},e):"habilidades"===e?Object(m.jsxs)("div",{className:"keyParent",children:[Object(m.jsx)("div",{style:B,className:"keyChar centerText",children:Object(m.jsx)(O.a,{theme:W,children:Object(m.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Habilidades"})})}),Object(m.jsxs)("div",{style:B,className:"centerHabilities ",children:[Object(m.jsx)(O.a,{theme:W,children:Object(m.jsx)(F.a,{"aria-describedby":x,variant:"outlined",onClick:o,children:"Ver habilidades"})}),Object(m.jsx)(A.a,{id:x,open:b,anchorEl:i,onClose:j,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(m.jsx)(M,{character:t,habilities:e},e)})]},e)]},e):null;var n}))},0)]},a),Object(m.jsx)(h.a,{sx:{border:"1px solid black",marginLeft:"5%",marginRight:"5%",marginBottom:"20px"}})]})},H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){o(!0),fetch("https://genshin-api-tau.vercel.app/personajes").then((function(e){return e.json()})).then((function(e){c(e),o(!1)}))}),[]),{characters:a,loadingChar:l}},L=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),G=function(e){var t=e.newFilter;return Object(m.jsx)("div",{name:"Filtro",className:"filterContainer",children:Object(m.jsxs)(O.a,{theme:L,children:[Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Elemento"}),Object(m.jsxs)(S.a,{style:{backgroundColor:"white"},defaultValue:"Todos",label:"Elemento",onChange:t,name:"elemento",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"Pyro",children:"Pyro"}),Object(m.jsx)(T.a,{value:"Hydro",children:"Hydro"}),Object(m.jsx)(T.a,{value:"Cryo",children:"Cryo"}),Object(m.jsx)(T.a,{value:"Electro",children:"Electro"}),Object(m.jsx)(T.a,{value:"Anemo",children:"Anemo"}),Object(m.jsx)(T.a,{value:"Geo",children:"Geo"})]})]})}),Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Arma"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Arma",onChange:t,name:"arma",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"Arco",children:"Arco"}),Object(m.jsx)(T.a,{value:"Catalizador",children:"Catalizador"}),Object(m.jsx)(T.a,{value:"Espada",children:"Espada"}),Object(m.jsx)(T.a,{value:"Mandoble",children:"Mandoble"}),Object(m.jsx)(T.a,{value:"Lanza",children:"Lanza"})]})]})}),Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Rareza"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Rareza",onChange:t,name:"rareza",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"4",children:"4*"}),Object(m.jsx)(T.a,{value:"5",children:"5*"})]})]})}),Object(m.jsx)("div",{className:"filterContainerChild",children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Region"}),Object(m.jsxs)(S.a,{defaultValue:"Todos",label:"Region",onChange:t,name:"region",children:[Object(m.jsx)(T.a,{value:"Todos",children:"Todos"}),Object(m.jsx)(T.a,{value:"Mondstadt",children:"Mondstadt"}),Object(m.jsx)(T.a,{value:"Liyue",children:"Liyue"}),Object(m.jsx)(T.a,{value:"Inazuma",children:"Inazuma"})]})]})})]})})},I=function(){var e=H().characters,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({elemento:"Todos",arma:"Todos",rareza:"Todos",region:"Todos"}),l=Object(s.a)(i,2),o=l[0],j=l[1],d=Object(n.useState)(e),b=Object(s.a)(d,2),h=b[0],u=b[1];return{filteredCharacters:h,nothingFound:c,newFilter:function(t){var a=o;"rareza"===t.target.name&&"Todos"!==t.target.value?a[t.target.name]=parseInt(t.target.value):a[t.target.name]=t.target.value,j(a);var n=null===e||void 0===e?void 0:e.filter((function(e){return function(e){var t={},a=!0;return Object.keys(o).forEach((function(e){"Todos"!==o[e]&&(t[e]=o[e])})),Object.keys(t).forEach((function(t){e[t]!==o[t]&&(a=!1)})),a}(e)}));u(n),0===n.length?r(!0):r(!1)}}},V=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),U=Object(x.a)({typography:{fontFamily:"RobotoSlab-Bold",fontSize:20}}),K=function(){var e=H(),t=e.characters,a=e.loadingChar,n=I(),c=n.filteredCharacters,r=n.nothingFound,i=n.newFilter;return Object(m.jsxs)("div",{className:"Parent",style:{marginTop:"40px"},children:[Object(m.jsx)(O.a,{theme:V,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h2",gutterBottom:!0,children:"Personajes"})}),a?Object(m.jsx)(O.a,{theme:V,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Cargando..."})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(G,{className:"center",newFilter:i}),r?Object(m.jsx)(O.a,{theme:U,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"body1",gutterBottom:!0,children:"No se ha encontrado ningun personaje que cumpla con estos filtros"})}):0===c.length?t.map((function(e,t){return Object(m.jsx)(q,{character:e,index:t},t)})):c.map((function(e,t){return Object(m.jsx)(q,{character:e,index:t},t)}))]})]})},_=a(30),J=a(41),Q=a(66),X=a(242),Y=a(259),Z=a(260),$=a(246),ee=a(237),te=a(257),ae=a(234),ne=a(258),ce=a(47),re=a(42),ie=a.n(re),se="uroboros";a(91).config();var le=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),oe=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),je=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Arma"}),Object(m.jsxs)(S.a,{defaultValue:"Arco",label:"Arma",name:"arma",children:[Object(m.jsx)(T.a,{value:"Arco",children:"Arco"}),Object(m.jsx)(T.a,{value:"Catalizador",children:"Catalizador"}),Object(m.jsx)(T.a,{value:"Espada",children:"Espada"}),Object(m.jsx)(T.a,{value:"Mandoble",children:"Mandoble"}),Object(m.jsx)(T.a,{value:"Lanza",children:"Lanza"})]})]})},de=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Rareza"}),Object(m.jsxs)(S.a,{defaultValue:"4",label:"Rareza",name:"rareza",children:[Object(m.jsx)(T.a,{value:"4",children:"4"}),Object(m.jsx)(T.a,{value:"5",children:"5"})]})]})},be=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Elemento"}),Object(m.jsxs)(S.a,{defaultValue:"Pyro",label:"Elemento",name:"elemento",children:[Object(m.jsx)(T.a,{value:"Pyro",children:"Pyro"}),Object(m.jsx)(T.a,{value:"Hydro",children:"Hydro"}),Object(m.jsx)(T.a,{value:"Cryo",children:"Cryo"}),Object(m.jsx)(T.a,{value:"Electro",children:"Electro"}),Object(m.jsx)(T.a,{value:"Anemo",children:"Anemo"}),Object(m.jsx)(T.a,{value:"Geo",children:"Geo"})]})]})},he=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Region"}),Object(m.jsxs)(S.a,{defaultValue:"Mondstadt",label:"Region",name:"region",children:[Object(m.jsx)(T.a,{value:"Mondstadt",children:"Mondstadt"}),Object(m.jsx)(T.a,{value:"Liyue",children:"Liyue"}),Object(m.jsx)(T.a,{value:"Inazuma",children:"Inazuma"})]})]})},ue=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],o=i[1],j=Object(n.useState)(!1),d=Object(s.a)(j,2),b=d[0],h=d[1],u=Object(n.useState)(!1),x=Object(s.a)(u,2),O=x[0],p=x[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),v=g[0],y=g[1],S=Object(n.useState)(""),C=Object(s.a)(S,2),T=C[0],w=C[1],z=Object(n.useState)(""),k=Object(s.a)(z,2),N=k[0],R=k[1],E=Object(Q.a)({},O&&{bgcolor:ce.a[500],"&:hover":{bgcolor:ce.a[700]}}),A=Object(Q.a)({},b&&{bgcolor:ce.a[200],"&:hover":{bgcolor:ce.a[300]}}),P=function(){var e=Object(J.a)(Object(_.a)().mark((function e(t){var n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData(t.target),console.log(se),""===l){e.next=22;break}return p(!1),y(!0),n.append("token",se),n.append("file",a),n.append("fileName",l),console.log(n),e.prev=10,e.next=13,ie.a.post("https://genshin-api-tau.vercel.app/personajes",n);case 13:R("El personaje se ha guardado correctamente"),w(""),p(!0),y(!1),setTimeout((function(){R(""),p(!1)}),5e3),window.location.replace("/?created=true"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),c=e.t0,w(c.response.data.error),h(!1),y(!1),setTimeout((function(){w("")}),5e3);case 20:e.next=24;break;case 22:w("Por favor, sube una imagen"),setTimeout((function(){w("")}),5e3);case 24:case"end":return e.stop()}var c}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("form",{onSubmit:P,children:Object(m.jsxs)($.a,{container:!0,spacing:1,children:[Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Nombre",name:"nombre",placeholder:"Nombre",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:8,item:!0,children:Object(m.jsx)(je,{})}),Object(m.jsx)($.a,{xs:12,md:4,item:!0,children:Object(m.jsx)(de,{})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(be,{})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(he,{})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Descripcion",name:"descripcion",placeholder:"Descripcion del personaje",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Habilidad1",name:"habilidad1",placeholder:"Nombre Habilidad 1",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Descripcion1",name:"descripcion1",placeholder:"Descripcion Habilidad 1",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Habilidad2",name:"habilidad2",placeholder:"Nombre Habilidad 2",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Descripcion2",name:"descripcion2",placeholder:"Descripcion Habilidad 2",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Habilidad3",name:"habilidad3",placeholder:"Nombre Habilidad 3",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:6,item:!0,children:Object(m.jsx)(X.a,{label:"Descripcion3",name:"descripcion3",placeholder:"Descripcion Habilidad 3",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsxs)(F.a,{fullWidth:!0,variant:"outlined",component:"label",sx:A,children:["Subir Imagen ",Object(m.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0]),console.log(e.target.files[0]),o(e.target.files[0].name),h(!0)},name:"myFile",accept:"image/png, image/jpg, image/jpeg",hidden:!0})]})}),""!==T?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"error",onClose:function(){w("")},children:[Object(m.jsx)(te.a,{children:"Error"}),T]})})}):null,""!==N?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"success",onClose:function(){R("")},children:[Object(m.jsx)(te.a,{children:"Conseguido"}),N]})})}):null,Object(m.jsxs)($.a,{xs:12,item:!0,children:[Object(m.jsx)(F.a,{fullWidth:!0,type:"submit",variant:"contained",sx:E,disabled:v,children:"Enviar"}),v&&Object(m.jsx)(ne.a,{size:24,sx:{color:ce.a[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})})},xe=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{theme:oe,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Formulario del personaje"})}),Object(m.jsx)(Y.a,{style:{maxWidth:600,margin:"0 auto",padding:"20px 5px"},children:Object(m.jsx)(O.a,{theme:le,children:Object(m.jsx)(Z.a,{children:Object(m.jsx)(ue,{})})})})]})};a(91).config();var Oe=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),me=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),pe=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Tipo"}),Object(m.jsxs)(S.a,{defaultValue:"Arco",label:"Tipo",name:"tipo",children:[Object(m.jsx)(T.a,{value:"Arco",children:"Arco"}),Object(m.jsx)(T.a,{value:"Catalizador",children:"Catalizador"}),Object(m.jsx)(T.a,{value:"Espada",children:"Espada"}),Object(m.jsx)(T.a,{value:"Mandoble",children:"Mandoble"}),Object(m.jsx)(T.a,{value:"Lanza",children:"Lanza"})]})]})},fe=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Rareza"}),Object(m.jsxs)(S.a,{defaultValue:"4",label:"Rareza",name:"rareza",children:[Object(m.jsx)(T.a,{value:"4",children:"4"}),Object(m.jsx)(T.a,{value:"5",children:"5"})]})]})},ge=function(){return Object(m.jsxs)(w.a,{fullWidth:!0,children:[Object(m.jsx)(C.a,{children:"Stat Secundario"}),Object(m.jsxs)(S.a,{defaultValue:"ATQPER",label:"Stat Secundario",name:"stat_secundario",children:[Object(m.jsx)(T.a,{value:"ATQPER",children:"ATQ%"}),Object(m.jsx)(T.a,{value:"DEFPER",children:"DEF%"}),Object(m.jsx)(T.a,{value:"HPPER",children:"HP%"}),Object(m.jsx)(T.a,{value:"PhDMG",children:"Phisical Damage"}),Object(m.jsx)(T.a,{value:"Crit DMG",children:"Crit DMG"}),Object(m.jsx)(T.a,{value:"Crit Rate",children:"Crit Rate"}),Object(m.jsx)(T.a,{value:"ERPER",children:"ER"}),Object(m.jsx)(T.a,{value:"EM",children:"EM"})]})]})},ve=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],o=i[1],j=Object(n.useState)(!1),d=Object(s.a)(j,2),b=d[0],h=d[1],u=Object(n.useState)(!1),x=Object(s.a)(u,2),O=x[0],p=x[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),v=g[0],y=g[1],S=Object(n.useState)(""),C=Object(s.a)(S,2),T=C[0],w=C[1],z=Object(Q.a)({},b&&{bgcolor:ce.a[500],"&:hover":{bgcolor:ce.a[700]}}),k=function(){var e=Object(J.a)(Object(_.a)().mark((function e(t){var n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData(t.target),""===l){e.next=28;break}return h(!1),p(!0),n.append("token","uroboros"),n.append("file",a),n.append("fileName",l),console.log(JSON.stringify(Object.fromEntries(n))),e.prev=9,e.next=12,ie.a.post("https://genshin-api-tau.vercel.app/armas",n);case 12:w("El arma se ha guardado correctamente"),y(""),h(!0),p(!1),window.location.replace("/?created=true"),setTimeout((function(){w(""),h(!1)}),5e3),e.next=26;break;case 20:e.prev=20,e.t0=e.catch(9),console.log(e.t0.response.data),y(e.t0.response.data.error),p(!1),setTimeout((function(){y("")}),5e3);case 26:e.next=30;break;case 28:y("Por favor, sube una imagen"),setTimeout((function(){y("")}),5e3);case 30:case"end":return e.stop()}}),e,null,[[9,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("form",{onSubmit:k,children:Object(m.jsxs)($.a,{container:!0,spacing:1,children:[Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Nombre",name:"nombre",placeholder:"Nombre",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:8,item:!0,children:Object(m.jsx)(pe,{})}),Object(m.jsx)($.a,{xs:12,md:4,item:!0,children:Object(m.jsx)(fe,{})}),Object(m.jsx)($.a,{xs:12,md:8,item:!0,children:Object(m.jsx)(X.a,{label:"Ataque b\xe1sico",name:"ataque_basico",placeholder:"Ataque basico",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,md:4,item:!0,children:Object(m.jsx)(ge,{})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Descripcion",name:"descripcion",placeholder:"Descripcion del arma",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Efecto pasivo",name:"efecto_pasivo",placeholder:"Nombre del efecto pasivo",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsxs)(F.a,{fullWidth:!0,variant:"outlined",component:"label",children:["Subir Imagen ",Object(m.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0]),console.log(e.target.files[0]),o(e.target.files[0].name)},name:"myFile",accept:"image/png, image/jpg, image/jpeg",hidden:!0})]})}),""!==v?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"error",children:[Object(m.jsx)(te.a,{children:"Error"}),v]})})}):null,""!==T?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"success",children:[Object(m.jsx)(te.a,{children:"Conseguido"}),T]})})}):null,Object(m.jsxs)($.a,{xs:12,item:!0,children:[Object(m.jsx)(F.a,{fullWidth:!0,type:"submit",variant:"contained",sx:z,disabled:O,children:"Enviar"}),O&&Object(m.jsx)(ne.a,{size:24,sx:{color:ce.a[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})})},ye=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{theme:me,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Formulario de arma"})}),Object(m.jsx)(Y.a,{style:{maxWidth:600,margin:"0 auto",padding:"20px 5px"},children:Object(m.jsx)(O.a,{theme:Oe,children:Object(m.jsx)(Z.a,{children:Object(m.jsx)(ve,{})})})})]})},Se=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],o=i[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedGenshinAppUser");if(e){var t=JSON.parse(e);c(t)}}),[]);var j=function(){var e=Object(J.a)(Object(_.a)().mark((function e(t){var a,n,r;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.username.value,n=t.target.password.value,e.prev=3,e.next=6,ie.a.post("https://genshin-api-tau.vercel.app/login",{username:a,password:n});case 6:r=e.sent,window.localStorage.setItem("loggedGenshinAppUser",JSON.stringify(r.data)),c(r.data),o("logged"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),o("Credenciales incorrectas"),setTimeout((function(){o("")}),5e3);case 17:t.target.username.value="",t.target.password.value="";case 19:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return{user:a,message:l,handleLogout:function(){c(null),window.localStorage.removeItem("loggedGenshinAppUser"),window.location.replace("/")},handleLogin:j,setMessage:o}},Ce=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),Te=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),we=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Se().user;return r?r.canCreate?Object(m.jsxs)("div",{className:"Parent",children:[Object(m.jsx)(O.a,{theme:Ce,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h2",gutterBottom:!0,children:"A\xf1ade un personaje o arma"})}),Object(m.jsx)("div",{name:"Filtro",className:"filterContainer",children:Object(m.jsx)(O.a,{theme:Te,children:Object(m.jsxs)(w.a,{sx:{m:1,minWidth:140},children:[Object(m.jsx)(C.a,{children:"Crear"}),Object(m.jsxs)(S.a,{defaultValue:"Personaje",onChange:function(e){"Personaje"===e.target.value?c(!0):c(!1)},label:"crear",name:"crear",children:[Object(m.jsx)(T.a,{value:"Personaje",children:"Personaje"}),Object(m.jsx)(T.a,{value:"Arma",children:"Arma"})]})]})})}),a?Object(m.jsx)(xe,{}):Object(m.jsx)(ye,{})]}):Object(m.jsx)(O.a,{theme:Ce,children:Object(m.jsx)(d.a,{style:{marginTop:"150px"},className:"center centerText",variant:"h2",gutterBottom:!0,children:"Tienes que ser un usuario con capacidad para crear para acceder a este contenido"})}):Object(m.jsx)(O.a,{theme:Ce,children:Object(m.jsx)(d.a,{style:{marginTop:"200px"},className:"center centerText",variant:"h2",gutterBottom:!0,children:"Tienes que iniciar sesi\xf3n para acceder a este contenido"})})},ze=a(250),ke=a(252),Ne=a(251),Re=a(249),Ee=a(124),Ae=a(122),Fe=a.n(Ae),Pe=a(244),We=a(239),De=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),Be=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),Me=Object(x.a)({typography:{fontFamily:"RobotoCondensed-Regular",fontSize:16}}),qe=function(){var e=Se(),t=e.message,a=e.handleLogin,c=e.setErrorMessage;return Object(n.useEffect)((function(){"logged"===t&&window.location.replace("/")}),[t]),Object(m.jsx)("form",{onSubmit:a,children:Object(m.jsxs)($.a,{container:!0,spacing:1,children:[Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Usuario",name:"username",placeholder:"Usuario",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Contrase\xf1a",name:"password",type:"password",placeholder:"Contrase\xf1a",variant:"outlined",fullWidth:!0,required:!0})}),""!==t&&"logged"!==t?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"error",onClose:function(){c("")},children:[Object(m.jsx)(te.a,{children:"Error"}),t]})})}):null,Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(F.a,{fullWidth:!0,type:"submit",variant:"contained",children:"Iniciar Sesion"})})]})})},He=function(){var e=Object(l.d)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1];Object(n.useEffect)((function(){a.get("registered")&&(j(!0),a.delete("registered"),c(a))}),[a,c]);var b=function(e,t){"clickaway"!==t&&j(!1)};return Object(m.jsxs)("div",{style:{marginTop:"70px"},children:[Object(m.jsx)(O.a,{theme:Be,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Inicia sesion"})}),Object(m.jsx)(Y.a,{style:{maxWidth:600,margin:"0 auto",padding:"20px 5px"},children:Object(m.jsx)(O.a,{theme:De,children:Object(m.jsx)(Z.a,{children:Object(m.jsx)(qe,{})})})}),Object(m.jsx)("div",{className:"center centerText",children:Object(m.jsxs)(O.a,{theme:Me,children:[Object(m.jsx)(d.a,{style:{marginTop:"5px"},variant:"body1",gutterBottom:!0,children:"Aun no estas registrado?"}),Object(m.jsx)(F.a,{className:"center centerText",component:l.b,to:"/register",children:"Registrate aqu\xed"})]})}),Object(m.jsx)(We.a,{open:o,autoHideDuration:6e3,onClose:b,children:Object(m.jsx)(ee.a,{onClose:b,severity:"success",sx:{width:"100%"},children:"Te has registrado correctamente"})})]})},Le=Object(x.a)({typography:{fontFamily:"RobotoSlab-Regular",fontSize:16}}),Ge=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),Ie=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),j=i[0],d=i[1],b=Object(o.f)();Object(n.useEffect)((function(){j&&b({pathname:"/login",search:Object(l.c)({registered:"true"}).toString()})}),[j,b]);var h=function(){var e=Object(J.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,ie.a.post("https://genshin-api-tau.vercel.app/usuarios",{username:t.target.username.value,password:t.target.password.value,token:"uroboros"});case 4:d(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a=e.t0,c(a.response.data.error),setTimeout((function(){c("")}),5e3);case 10:case"end":return e.stop()}var a}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("form",{onSubmit:h,children:Object(m.jsxs)($.a,{container:!0,spacing:1,children:[Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Usuario",name:"username",placeholder:"Usuario",variant:"outlined",fullWidth:!0,required:!0})}),Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(X.a,{label:"Contrase\xf1a",name:"password",type:"password",placeholder:"Contrase\xf1a",variant:"outlined",fullWidth:!0,required:!0})}),""!==a?Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(ae.a,{children:Object(m.jsxs)(ee.a,{severity:"error",onClose:function(){c("")},children:[Object(m.jsx)(te.a,{children:"Error"}),a]})})}):null,Object(m.jsx)($.a,{xs:12,item:!0,children:Object(m.jsx)(F.a,{fullWidth:!0,type:"submit",variant:"contained",children:"Registrarse"})})]})}),Object(m.jsx)("div",{})]})},Ve=function(){return Object(m.jsxs)("div",{style:{marginTop:"70px"},children:[Object(m.jsx)(O.a,{theme:Ge,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Registrate"})}),Object(m.jsx)(Y.a,{style:{maxWidth:600,margin:"0 auto",padding:"20px 5px"},children:Object(m.jsx)(O.a,{theme:Le,children:Object(m.jsx)(Z.a,{children:Object(m.jsx)(Ie,{})})})})]})},Ue=Object(x.a)({typography:{fontFamily:"RobotoCondensed-Regular",fontSize:16}}),Ke=function(){return Object(m.jsxs)("div",{className:"centerAbout",children:[Object(m.jsx)(O.a,{theme:Ue,children:Object(m.jsx)(d.a,{className:"center centerText",variant:"h4",gutterBottom:!0,children:"Creado por: Miguel Angel Garcia Vich"})}),Object(m.jsxs)("div",{className:"centerAboutLogos",children:[Object(m.jsx)("div",{className:"centerAboutSeparation",children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/miguel-%C3%A1ngel-garc%C3%ADa-vich/",children:Object(m.jsx)("img",{width:100,height:100,src:"/icons/linkedin.svg",alt:"Linkedin svg"})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/MiangaESP",children:Object(m.jsx)("img",{width:100,height:100,src:"/icons/github.svg",alt:"Github svg"})})})]})]})};a(91).config();var _e=Object(x.a)({typography:{fontFamily:"Rubik-Bold",fontSize:24}}),Je=Object(x.a)({typography:{fontFamily:"Kanit-Bold",fontSize:20}}),Qe=function(){var e=Object(l.d)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1];Object(n.useEffect)((function(){a.get("created")&&(j(!0),a.delete("created"),c(a))}),[a,c]);var b=function(e,t){"clickaway"!==t&&j(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{theme:Je,children:Object(m.jsx)(d.a,{style:{marginTop:"200px"},className:"centerText",variant:"h1",gutterBottom:!0,children:"Genshin APP"})}),Object(m.jsx)(We.a,{open:o,autoHideDuration:6e3,onClose:b,children:Object(m.jsx)(ee.a,{onClose:b,severity:"success",sx:{width:"100%"},children:"El personaje o arma se ha creado correctamente"})})]})};var Xe=function(){var e=Se(),t=e.user,a=e.handleLogout,c=n.useState(null),r=Object(s.a)(c,2),i=r[0],j=r[1],b=function(e){j(e.currentTarget)},h=function(){j(null)},u=function(){return Object(m.jsx)(O.a,{theme:_e,children:Object(m.jsx)(ze.a,{position:"static",style:{backgroundColor:"#000000"},children:Object(m.jsx)(Pe.a,{maxWidth:"x2",children:Object(m.jsxs)(Ne.a,{disableGutters:!0,children:[Object(m.jsxs)(ke.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(m.jsx)(Re.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:b,color:"inherit",children:Object(m.jsx)(Fe.a,{})}),Object(m.jsxs)(Ee.a,{id:"menu-appbar",anchorEl:i,anchororigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(i),onClose:h,sx:{display:{xs:"block",md:"none"}},children:[Object(m.jsx)(T.a,{component:l.b,to:"/",onClick:h,children:Object(m.jsx)(d.a,{textAlign:"center",children:"Home"})},"home"),Object(m.jsx)(T.a,{onClick:h,component:l.b,to:"/personajes",children:Object(m.jsx)(d.a,{textAlign:"center",children:"Personajes"})},"personajes"),Object(m.jsx)(T.a,{onClick:h,component:l.b,to:"/armas",children:Object(m.jsx)(d.a,{textAlign:"center",children:"Armas"})},"armas"),Object(m.jsx)(T.a,{onClick:h,component:l.b,to:"/crear",children:Object(m.jsx)(d.a,{textAlign:"center",children:"Crear"})},"crear"),Object(m.jsx)(T.a,{onClick:h,component:l.b,to:"/about",children:Object(m.jsx)(d.a,{textAlign:"center",children:"Acerca de"})},"about"),Object(m.jsx)(T.a,{onClick:a,children:Object(m.jsx)(d.a,{textAlign:"center",children:"Cerrar Sesion"})},"logout")]})]}),Object(m.jsxs)(ke.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/",sx:{fontSize:20,my:1,color:"white",display:"block"},style:{textDecoration:"none"},children:"Home"})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/personajes",sx:{fontSize:20,my:1,color:"white",display:"block"},style:{textDecoration:"none"},children:"Personajes"})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/armas",sx:{fontSize:20,my:1,color:"white",display:"block"},style:{textDecoration:"none"},children:"Armas"})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/crear",sx:{fontSize:20,my:1,color:"white",display:"block"},style:{textDecoration:"none"},children:"Crear"})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/about",sx:{fontSize:20,my:1,color:"white",display:"block"},style:{textDecoration:"none"},children:"Acerca de"})})]}),Object(m.jsx)(ke.a,{sx:{flexGrow:0,display:{xs:"none",md:"flex"}},children:t?Object(m.jsxs)("div",{className:"center",children:[Object(m.jsx)(d.a,{fontSize:20,textAlign:"center",children:null===t||void 0===t?void 0:t.username}),Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{onClick:a,sx:{fontSize:20,my:1,color:"white",display:"block"},anchororigin:{vertical:"top",horizontal:"right"},style:{textDecoration:"none"},children:"Cerrar Sesion"})})]}):Object(m.jsx)(T.a,{children:Object(m.jsx)(F.a,{component:l.b,to:"/login",sx:{fontSize:20,my:1,color:"white",display:"block"},anchororigin:{vertical:"top",horizontal:"right"},style:{textDecoration:"none"},children:"Iniciar Sesion"})})})]})})})})};return Object(m.jsxs)(l.a,{children:[Object(m.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(m.jsx)("div",{className:"App ",children:Object(m.jsxs)("div",{className:" centerItems ",children:[Object(m.jsx)(u,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/about",element:Object(m.jsx)(Ke,{})}),Object(m.jsx)(o.a,{path:"/register",element:Object(m.jsx)(Ve,{})}),Object(m.jsx)(o.a,{path:"/login",element:Object(m.jsx)(He,{})}),Object(m.jsx)(o.a,{path:"/crear",element:Object(m.jsx)(we,{})}),Object(m.jsx)(o.a,{path:"/personajes",element:Object(m.jsx)(K,{})}),Object(m.jsx)(o.a,{path:"/armas",element:Object(m.jsx)(E,{})}),Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(Qe,{})})]})]})})]})};i.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Xe,{})}))},88:function(e,t,a){}},[[179,1,2]]]);
//# sourceMappingURL=main.4079f314.chunk.js.map