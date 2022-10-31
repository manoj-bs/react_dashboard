"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[685],{38685:function(e,o,r){r.r(o),r.d(o,{default:function(){return y}});var t=r(74165),n=r(15861),i=r(39846),a=r(14872),s=r(47044),l=r(55477),c=r(22263),d=r(55705),u=r(22020),p=r(16871),h=r(43504),m=r(77942),g=r(93669),x=r(61028),f=r(74569),Z=r.n(f),v=r(91933),j=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(o){var r,n,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.email,e.next=3,Z().post("/api/forgot-password",{email:r});case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}();function b(){var e=(0,v.useMutation)(j);return{isLoading:e.isLoading,forgotPassword:e.mutateAsync}}var w=r(80184),y=function(){var e=(0,p.s0)(),o=(0,x.Ds)(),r=(0,u.$)().t,f=b(),Z=f.forgotPassword,v=f.isLoading,j=(0,d.TA)({initialValues:{email:""},validationSchema:m.Ry({email:m.Z_().email(r("common.validations.email")).required(r("common.validations.required"))}),onSubmit:function(e){var o=e.email;return y(o)}}),y=function(){var i=(0,n.Z)((0,t.Z)().mark((function n(i){return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Z({email:i}).then((function(){o.success(r("auth.forgotPassword.notifications.success")),e("/".concat("/react_dashboard","/forgot-password-submit"))})).catch((function(){o.error(r("common.errors.unexpected.subTitle"))}));case 1:case"end":return t.stop()}}),n)})));return function(e){return i.apply(this,arguments)}}();return(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(l.Z,{component:"h1",variant:"h5",children:r("auth.forgotPassword.title")}),(0,w.jsx)(l.Z,{marginTop:3,children:r("auth.forgotPassword.subTitle")}),(0,w.jsxs)(i.Z,{component:"form",marginTop:3,noValidate:!0,onSubmit:j.handleSubmit,children:[(0,w.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:r("auth.forgotPassword.form.email.label"),name:"email",autoComplete:"email",autoFocus:!0,disabled:v,value:j.values.email,onChange:j.handleChange,error:j.touched.email&&Boolean(j.errors.email),helperText:j.touched.email&&j.errors.email}),(0,w.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:v,loading:v,sx:{mt:2},children:r("auth.forgotPassword.form.action")}),(0,w.jsx)(a.Z,{component:h.rU,to:"/".concat("/react_dashboard","/login"),color:"primary",fullWidth:!0,sx:{mt:2},children:r("auth.forgotPassword.form.back")})]})]})}},93669:function(e,o,r){var t=r(29439),n=r(72336),i=r(39846),a=r(99300),s=r(13814),l=r(71217),c=r(44807),d=r(42413),u=r(43115),p=r(72791),h=r(10607),m=r(98799),g=r(80184);o.Z=function(e){var o=e.children,r=(0,c.Z)(),x=(0,p.useState)(!1),f=(0,t.Z)(x,2),Z=f[0],v=f[1],j=function(){v(!Z)};return(0,g.jsxs)(p.Fragment,{children:[(0,g.jsx)(s.Z,{styles:{body:{backgroundColor:r.palette.background.paper}}}),(0,g.jsx)(n.Z,{color:"transparent",position:"relative",children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(i.Z,{sx:{flexGrow:1}}),(0,g.jsx)(l.Z,{"aria-label":"settings",component:"span",onClick:j,children:(0,g.jsx)(u.Z,{})})]})}),(0,g.jsx)(a.Z,{component:"main",maxWidth:"xs",sx:{mt:6},children:(0,g.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(h.Z,{sx:{mb:2}}),o,(0,g.jsx)(i.Z,{children:(0,g.jsx)(m.Z,{onDrawerToggle:j,open:Z})})]})})]})}},98799:function(e,o,r){var t=r(39846),n=r(61266),i=r(5068),a=r(31517),s=r(71217),l=r(58614),c=r(1573),d=r(18860),u=r(36030),p=r(55477),h=r(30014),m=r(22020),g=r(40580),x=r(95702),f=r(80184);o.Z=function(e){var o=e.onDrawerToggle,r=e.open,Z=(0,x.rV)(),v=Z.changeCollapsed,j=Z.changeDirection,b=Z.changeMode,w=Z.collapsed,y=Z.direction,k=Z.mode,C=(0,m.$)(),T=C.i18n,P=C.t;return(0,f.jsxs)(n.ZP,{anchor:"left",open:r,onClose:o,sx:{"& .MuiDrawer-paper":{width:g.R}},variant:"temporary",children:[(0,f.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[(0,f.jsx)(p.Z,{variant:"h5",children:P("settings.drawer.title")}),(0,f.jsx)(s.Z,{color:"inherit",onClick:o,edge:"end",children:(0,f.jsx)(h.Z,{})})]}),(0,f.jsxs)(t.Z,{sx:{pl:2,pr:2},children:[(0,f.jsx)(p.Z,{gutterBottom:!0,id:"settings-language",marginTop:3,variant:"h6",children:P("settings.drawer.language.label")}),(0,f.jsx)(i.Z,{children:(0,f.jsxs)(c.Z,{"aria-label":"language",name:"language-radio-group",onChange:function(e){T.changeLanguage(e.target.value)},value:T.language,children:[(0,f.jsx)(a.Z,{value:"en",control:(0,f.jsx)(l.Z,{}),label:P("settings.drawer.language.options.en")}),(0,f.jsx)(a.Z,{value:"fr",control:(0,f.jsx)(l.Z,{}),label:P("settings.drawer.language.options.fr")})]})}),(0,f.jsx)(p.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:P("settings.drawer.mode.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:k,exclusive:!0,fullWidth:!0,onChange:function(e,o){b(o)},children:[(0,f.jsx)(d.Z,{value:"light",children:P("settings.drawer.mode.options.light")}),(0,f.jsx)(d.Z,{value:"dark",children:P("settings.drawer.mode.options.dark")})]}),(0,f.jsx)(p.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:P("settings.drawer.direction.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:y,exclusive:!0,fullWidth:!0,onChange:function(e,o){j(o)},children:[(0,f.jsx)(d.Z,{value:"ltr",children:P("settings.drawer.direction.options.ltr")}),(0,f.jsx)(d.Z,{value:"rtl",children:P("settings.drawer.direction.options.rtl")})]}),(0,f.jsx)(p.Z,{gutterBottom:!0,id:"settings-sidebar",marginTop:3,variant:"h6",children:P("settings.drawer.sidebar.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:w,exclusive:!0,fullWidth:!0,onChange:function(e,o){v(o)},children:[(0,f.jsx)(d.Z,{value:!0,children:P("settings.drawer.sidebar.options.collapsed")}),(0,f.jsx)(d.Z,{value:!1,children:P("settings.drawer.sidebar.options.full")})]})]})]})}},40580:function(e,o,r){r.d(o,{E:function(){return t},R:function(){return n}});var t=104,n=280},72336:function(e,o,r){r.d(o,{Z:function(){return x}});var t=r(63366),n=r(87462),i=r(72791),a=r(28182),s=r(80163),l=r(67538),c=r(58333),d=r(43234),u=r(93383),p=r(34923);function h(e){return(0,p.Z)("MuiAppBar",e)}(0,r(50782).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var m=r(80184),g=(0,l.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,o){var r=e.styleProps;return(0,n.Z)({},o.root,o["position".concat((0,d.Z)(r.position))],o["color".concat((0,d.Z)(r.color))])}})((function(e){var o=e.theme,r=e.styleProps,t="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},"default"===r.color&&{backgroundColor:t,color:o.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:o.palette[r.color].main,color:o.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"transparent"===r.color&&{backgroundColor:"transparent",color:"inherit"})})),x=i.forwardRef((function(e,o){var r=(0,c.Z)({props:e,name:"MuiAppBar"}),i=r.className,l=r.color,u=void 0===l?"primary":l,p=r.position,x=void 0===p?"fixed":p,f=(0,t.Z)(r,["className","color","position"]),Z=(0,n.Z)({},r,{color:u,position:x}),v=function(e){var o=e.color,r=e.position,t=e.classes,n={root:["root","color".concat((0,d.Z)(o)),"position".concat((0,d.Z)(r))]};return(0,s.Z)(n,h,t)}(Z);return(0,m.jsx)(g,(0,n.Z)({square:!0,component:"header",styleProps:Z,elevation:4,className:(0,a.Z)(v.root,i,"fixed"===x&&"mui-fixed"),ref:o},f))}))}}]);
//# sourceMappingURL=685.a807277d.chunk.js.map