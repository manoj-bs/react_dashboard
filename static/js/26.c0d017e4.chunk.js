(this["webpackJsonpreact-material-admin"]=this["webpackJsonpreact-material-admin"]||[]).push([[26],{294:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=104,o=280},314:function(e,t,n){"use strict";var r=n(247),o=n(410),a=n(770),i=n(367),c=n(289),s=n(844),l=n(854),d=n(412),u=n(411),b=n(287),p=n(311),j=n.n(p),h=n(183),m=n(294),g=n(125),O=n(1);t.a=function(e){var t=e.onDrawerToggle,n=e.open,p=Object(g.b)(),x=p.changeCollapsed,f=p.changeDirection,v=p.changeMode,y=p.collapsed,w=p.direction,k=p.mode,C=Object(h.a)(),B=C.i18n,R=C.t;return Object(O.jsxs)(o.a,{anchor:"left",open:n,onClose:t,sx:{"& .MuiDrawer-paper":{width:m.b}},variant:"temporary",children:[Object(O.jsxs)(r.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[Object(O.jsx)(b.a,{variant:"h5",children:R("settings.drawer.title")}),Object(O.jsx)(c.a,{color:"inherit",onClick:t,edge:"end",children:Object(O.jsx)(j.a,{})})]}),Object(O.jsxs)(r.a,{sx:{pl:2,pr:2},children:[Object(O.jsx)(b.a,{gutterBottom:!0,id:"settings-language",marginTop:3,variant:"h6",children:R("settings.drawer.language.label")}),Object(O.jsx)(a.a,{children:Object(O.jsxs)(l.a,{"aria-label":"language",name:"language-radio-group",onChange:function(e){B.changeLanguage(e.target.value)},value:B.language,children:[Object(O.jsx)(i.a,{value:"en",control:Object(O.jsx)(s.a,{}),label:R("settings.drawer.language.options.en")}),Object(O.jsx)(i.a,{value:"fr",control:Object(O.jsx)(s.a,{}),label:R("settings.drawer.language.options.fr")})]})}),Object(O.jsx)(b.a,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:R("settings.drawer.mode.label")}),Object(O.jsxs)(u.a,{color:"primary",value:k,exclusive:!0,fullWidth:!0,onChange:function(e,t){v(t)},children:[Object(O.jsx)(d.a,{value:"light",children:R("settings.drawer.mode.options.light")}),Object(O.jsx)(d.a,{value:"dark",children:R("settings.drawer.mode.options.dark")})]}),Object(O.jsx)(b.a,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:R("settings.drawer.direction.label")}),Object(O.jsxs)(u.a,{color:"primary",value:w,exclusive:!0,fullWidth:!0,onChange:function(e,t){f(t)},children:[Object(O.jsx)(d.a,{value:"ltr",children:R("settings.drawer.direction.options.ltr")}),Object(O.jsx)(d.a,{value:"rtl",children:R("settings.drawer.direction.options.rtl")})]}),Object(O.jsx)(b.a,{gutterBottom:!0,id:"settings-sidebar",marginTop:3,variant:"h6",children:R("settings.drawer.sidebar.label")}),Object(O.jsxs)(u.a,{color:"primary",value:y,exclusive:!0,fullWidth:!0,onChange:function(e,t){x(t)},children:[Object(O.jsx)(d.a,{value:!0,children:R("settings.drawer.sidebar.options.collapsed")}),Object(O.jsx)(d.a,{value:!1,children:R("settings.drawer.sidebar.options.full")})]})]})]})}},336:function(e,t,n){"use strict";var r=n(8),o=n(2),a=n(0),i=(n(19),n(13)),c=n(272),s=n(14),l=n(20),d=n(10),u=n(288),b=n(233),p=n(273);function j(e){return Object(b.a)("MuiAppBar",e)}Object(p.a)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var h=n(1),m=Object(s.a)(u.a,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps;return Object(o.a)({},t.root,t["position".concat(Object(d.a)(n.position))],t["color".concat(Object(d.a)(n.color))])}})((function(e){var t=e.theme,n=e.styleProps,r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return Object(o.a)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===n.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===n.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===n.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===n.position&&{position:"static"},"relative"===n.position&&{position:"relative"},"default"===n.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},n.color&&"default"!==n.color&&"inherit"!==n.color&&"transparent"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},"inherit"===n.color&&{color:"inherit"},"transparent"===n.color&&{backgroundColor:"transparent",color:"inherit"})})),g=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiAppBar"}),a=n.className,s=n.color,u=void 0===s?"primary":s,b=n.position,p=void 0===b?"fixed":b,g=Object(r.a)(n,["className","color","position"]),O=Object(o.a)({},n,{color:u,position:p}),x=function(e){var t=e.color,n=e.position,r=e.classes,o={root:["root","color".concat(Object(d.a)(t)),"position".concat(Object(d.a)(n))]};return Object(c.a)(o,j,r)}(O);return Object(h.jsx)(m,Object(o.a)({square:!0,component:"header",styleProps:O,elevation:4,className:Object(i.a)(x.root,a,"fixed"===p&&"mui-fixed"),ref:t},g))}));t.a=g},454:function(e,t,n){"use strict";var r=n(111);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(112)),a=n(1),i=(0,o.default)((0,a.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.default=i},537:function(e,t,n){"use strict";var r=n(18),o=n(12),a=n(8),i=n(2),c=n(0),s=(n(19),n(13)),l=n(272),d=n(10),u=n(14),b=n(20),p=n(93),j=n(42),h=n(287),m=n(233),g=n(273);function O(e){return Object(m.a)("MuiLink",e)}var x=Object(g.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),f=n(1),v=Object(u.a)(h.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps;return Object(i.a)({},t.root,t["underline".concat(Object(d.a)(n.underline))],"button"===n.component&&t.button)}})((function(e){var t=e.styleProps;return Object(i.a)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline"},"button"===t.component&&Object(o.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.focusVisible),{outline:"auto"}))})),y=c.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiLink"}),o=n.className,u=n.color,h=void 0===u?"primary":u,m=n.component,g=void 0===m?"a":m,x=n.onBlur,y=n.onFocus,w=n.TypographyClasses,k=n.underline,C=void 0===k?"hover":k,B=n.variant,R=void 0===B?"inherit":B,M=Object(a.a)(n,["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),T=Object(p.a)(),A=T.isFocusVisibleRef,S=T.onBlur,D=T.onFocus,P=T.ref,I=c.useState(!1),z=Object(r.a)(I,2),W=z[0],L=z[1],F=Object(j.a)(t,P),N=Object(i.a)({},n,{color:h,component:g,focusVisible:W,underline:C,variant:R}),V=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat(Object(d.a)(o)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(a,O,t)}(N);return Object(f.jsx)(v,Object(i.a)({className:Object(s.a)(V.root,o),classes:w,color:h,component:g,onBlur:function(e){S(e),!1===A.current&&L(!1),x&&x(e)},onFocus:function(e){D(e),!0===A.current&&L(!0),y&&y(e)},ref:F,styleProps:N,variant:R},M))}));t.a=y},849:function(e,t,n){"use strict";n.r(t);var r=n(465),o=n(247),a=n(245),i=n(286),c=n(771),s=n(536),l=n(866),d=n(867),u=n(12),b=n(8),p=n(2),j=n(0),h=(n(19),n(31)),m=n(36),g=n(271),O=n(181),x=n(14),f=n(20),v=n(1);function y(e,t){var n=j.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(j.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}function w(e){var t,n=e.values,r=e.base,o=Object.keys(r);return 0===o.length?n:o.reduce((function(e,r){return e[r]="object"===typeof n?null!=n[r]?n[r]:n[t]:n,t=r,e}),{})}var k=Object(x.a)("div",{name:"Stack"})((function(e){var t=e.styleProps,n=e.theme,r=Object(p.a)({display:"flex"},Object(h.b)({theme:n},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var o=Object(m.a)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),i=w({values:t.direction,base:a}),c=w({values:t.spacing,base:a});r=Object(O.a)(r,Object(h.b)({theme:n},c,(function(e,n){return{"& > :not(style) + :not(style)":Object(u.a)({margin:0},"margin".concat((r=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),Object(m.d)(o,e))};var r})))}return r})),C=j.forwardRef((function(e,t){var n=Object(f.a)({props:e,name:"MuiStack"}),r=Object(g.a)(n),o=r.component,a=void 0===o?"div":o,i=r.direction,c=void 0===i?"column":i,s=r.spacing,l=void 0===s?0:s,d=r.divider,u=r.children,j=Object(b.a)(r,["component","direction","spacing","divider","children"]),h={direction:c,spacing:l};return Object(v.jsx)(k,Object(p.a)({as:a,styleProps:h,ref:t},j,{children:d?y(u,d):u}))})),B=n(47),R=n(287),M=n(454),T=n.n(M),A=n(183),S=n(88),D=n(92),P=n(18),I=n(336),z=n(289),W=n(288),L=n(335),F=n(319),N=n.n(F),V=n(537),_=function(){return Object(v.jsx)(o.a,{sx:{p:6},component:"footer",children:Object(v.jsxs)(R.a,{variant:"body2",color:"text.secondary",align:"center",children:["\xa9 ",Object(v.jsx)(V.a,{color:"inherit",component:S.b,to:"/".concat("/react-gh-pages","/"),children:"React Admin (Prod)"})," ",(new Date).getFullYear(),"."]})})},q=n(131),H=n(314),J=function(e){var t=e.children,n=Object(j.useState)(!1),r=Object(P.a)(n,2),o=r[0],a=r[1],i=function(){a(!o)};return Object(v.jsxs)(W.a,{square:!0,children:[Object(v.jsx)(I.a,{color:"transparent",position:"relative",children:Object(v.jsxs)(L.a,{children:[Object(v.jsx)(q.a,{size:24,sx:{mr:2}}),Object(v.jsx)(R.a,{variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"React Admin (Prod)"}),Object(v.jsx)(z.a,{color:"default","aria-label":"settings",component:"span",onClick:i,children:Object(v.jsx)(N.a,{})}),Object(v.jsx)(H.a,{onDrawerToggle:i,open:o})]})}),Object(v.jsx)("main",{children:t}),Object(v.jsx)(_,{})]})},E=[{name:"Bootstraped with Create React App"},{name:"Components & Themes built on top of Material-UI"},{name:"Data Fetching with React Query"},{name:"Written in TypeScript"},{name:"Real-world examples"},{name:"Best Practices"},{name:"MIT License"}];t.default=function(){var e=Object(D.b)().userInfo,t=Object(B.a)(),n=Object(A.a)().t;return Object(v.jsx)(J,{children:Object(v.jsxs)("main",{children:[Object(v.jsx)(o.a,{sx:{py:6},children:Object(v.jsxs)(i.a,{maxWidth:"sm",children:[Object(v.jsx)(R.a,{variant:"h1",align:"center",color:"text.primary",marginBottom:4,children:n("landing.title")}),Object(v.jsxs)(C,{sx:{pt:3},direction:"row",spacing:2,justifyContent:"center",children:[Object(v.jsx)(a.a,{component:"a",href:"https://github.com/manoj-bs/react_dashboard",rel:"noopener noreferrer",target:"_blank",variant:"outlined",children:n("landing.cta.secondary")}),e?Object(v.jsx)(a.a,{component:S.b,to:"/".concat("/react-gh-pages","/admin"),variant:"contained",children:n("landing.cta.mainAuth",{name:e.firstName})}):Object(v.jsx)(a.a,{component:S.b,to:"/".concat("/react-gh-pages","/login"),variant:"contained",children:n("landing.cta.main")})]})]})}),Object(v.jsx)(i.a,{sx:{py:6},maxWidth:"md",children:Object(v.jsx)("img",{alt:"Application demo",src:"img/template-".concat(t.palette.mode,".png"),style:{borderRadius:24,borderStyle:"solid",borderWidth:4,borderColor:t.palette.background.default,width:"100%"}})}),Object(v.jsx)(i.a,{sx:{py:8},maxWidth:"md",children:Object(v.jsxs)(C,{alignItems:"center",children:[Object(v.jsx)(R.a,{variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:n("landing.features.title")}),Object(v.jsx)(c.a,{sx:{pt:3},children:E.map((function(e,t){return Object(v.jsxs)(s.b,{children:[Object(v.jsx)(l.a,{children:Object(v.jsx)(r.a,{children:Object(v.jsx)(T.a,{})})}),Object(v.jsx)(d.a,{primary:e.name})]},t)}))}),Object(v.jsx)(a.a,{component:"a",href:"https://github.com/manoj-bs/react_dashboard",rel:"noopener noreferrer",target:"_blank",sx:{mt:3},variant:"outlined",children:n("landing.features.more")})]})})]})})}}}]);
//# sourceMappingURL=26.c0d017e4.chunk.js.map