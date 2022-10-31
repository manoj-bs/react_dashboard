"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[105],{33105:function(e,r,t){t.r(r),t.d(r,{default:function(){return q}});var n=t(74165),a=t(15861),o=t(39846),i=t(14872),l=t(5068),s=t(31517),c=t(94327),d=t(58614),u=t(1573),m=t(47044),p=t(55477),h=t(22263),g=t(55705),x=t(22020),f=t(16871),Z=t(43504),v=t(77942),b=t(93669),j=t(61028),y=t(74569),w=t.n(y),C=t(91933),N=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w().post("/api/register",r);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();function k(){var e=(0,C.useMutation)(N);return{isRegistering:e.isLoading,register:e.mutateAsync}}var T=t(80184),B=[{label:"auth.register.form.gender.options.f",value:"F"},{label:"auth.register.form.gender.options.m",value:"M"},{label:"auth.register.form.gender.options.n",value:"NC"}],q=function(){var e=(0,f.s0)(),r=(0,j.Ds)(),t=(0,x.$)().t,y=k(),w=y.isRegistering,C=y.register,N=(0,g.TA)({initialValues:{email:"",firstName:"",gender:"F",lastName:""},validationSchema:v.Ry({email:v.Z_().email("Invalid email address").required(t("common.validations.required")),firstName:v.Z_().max(20,t("common.validations.max",{size:20})).required(t("common.validations.required")),lastName:v.Z_().max(30,t("common.validations.max",{size:30})).required(t("common.validations.required"))}),onSubmit:function(e){return q(e)}}),q=function(){var o=(0,a.Z)((0,n.Z)().mark((function a(o){return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C(o).then((function(){r.success(t("auth.register.notifications.success")),e("/".concat("/react_dashboard","/login"))})).catch((function(){r.error(t("common.errors.unexpected.subTitle"))}));case 1:case"end":return n.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}();return(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(p.Z,{component:"h1",variant:"h5",children:t("auth.register.title")}),(0,T.jsxs)(o.Z,{component:"form",marginTop:3,noValidate:!0,onSubmit:N.handleSubmit,children:[(0,T.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:t("auth.register.form.lastName.label"),name:"lastName",autoComplete:"family-name",autoFocus:!0,disabled:w,value:N.values.lastName,onChange:N.handleChange,error:N.touched.lastName&&Boolean(N.errors.lastName),helperText:N.touched.lastName&&N.errors.lastName}),(0,T.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:t("auth.register.form.firstName.label"),name:"firstName",autoComplete:"given-name",disabled:w,value:N.values.firstName,onChange:N.handleChange,error:N.touched.firstName&&Boolean(N.errors.firstName),helperText:N.touched.firstName&&N.errors.firstName}),(0,T.jsxs)(l.Z,{component:"fieldset",margin:"normal",children:[(0,T.jsx)(c.Z,{component:"legend",children:t("auth.register.form.gender.label")}),(0,T.jsx)(u.Z,{row:!0,"aria-label":"gender",name:"gender",value:N.values.gender,onChange:N.handleChange,children:B.map((function(e){return(0,T.jsx)(s.Z,{control:(0,T.jsx)(d.Z,{}),disabled:w,label:t(e.label),value:e.value},e.value)}))})]}),(0,T.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:t("auth.register.form.email.label"),name:"email",autoComplete:"email",disabled:w,value:N.values.email,onChange:N.handleChange,error:N.touched.email&&Boolean(N.errors.email),helperText:N.touched.email&&N.errors.email}),(0,T.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:w,loading:w,sx:{mt:2},children:t("auth.register.submit")}),(0,T.jsx)(i.Z,{component:Z.rU,to:"/".concat("/react_dashboard","/login"),color:"primary",fullWidth:!0,sx:{mt:2},children:t("auth.register.back")})]})]})}},93669:function(e,r,t){var n=t(29439),a=t(72336),o=t(39846),i=t(99300),l=t(13814),s=t(71217),c=t(44807),d=t(42413),u=t(43115),m=t(72791),p=t(10607),h=t(98799),g=t(80184);r.Z=function(e){var r=e.children,t=(0,c.Z)(),x=(0,m.useState)(!1),f=(0,n.Z)(x,2),Z=f[0],v=f[1],b=function(){v(!Z)};return(0,g.jsxs)(m.Fragment,{children:[(0,g.jsx)(l.Z,{styles:{body:{backgroundColor:t.palette.background.paper}}}),(0,g.jsx)(a.Z,{color:"transparent",position:"relative",children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(o.Z,{sx:{flexGrow:1}}),(0,g.jsx)(s.Z,{"aria-label":"settings",component:"span",onClick:b,children:(0,g.jsx)(u.Z,{})})]})}),(0,g.jsx)(i.Z,{component:"main",maxWidth:"xs",sx:{mt:6},children:(0,g.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(p.Z,{sx:{mb:2}}),r,(0,g.jsx)(o.Z,{children:(0,g.jsx)(h.Z,{onDrawerToggle:b,open:Z})})]})})]})}},98799:function(e,r,t){var n=t(39846),a=t(61266),o=t(5068),i=t(31517),l=t(71217),s=t(58614),c=t(1573),d=t(18860),u=t(36030),m=t(55477),p=t(30014),h=t(22020),g=t(40580),x=t(95702),f=t(80184);r.Z=function(e){var r=e.onDrawerToggle,t=e.open,Z=(0,x.rV)(),v=Z.changeCollapsed,b=Z.changeDirection,j=Z.changeMode,y=Z.collapsed,w=Z.direction,C=Z.mode,N=(0,h.$)(),k=N.i18n,T=N.t;return(0,f.jsxs)(a.ZP,{anchor:"left",open:t,onClose:r,sx:{"& .MuiDrawer-paper":{width:g.R}},variant:"temporary",children:[(0,f.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[(0,f.jsx)(m.Z,{variant:"h5",children:T("settings.drawer.title")}),(0,f.jsx)(l.Z,{color:"inherit",onClick:r,edge:"end",children:(0,f.jsx)(p.Z,{})})]}),(0,f.jsxs)(n.Z,{sx:{pl:2,pr:2},children:[(0,f.jsx)(m.Z,{gutterBottom:!0,id:"settings-language",marginTop:3,variant:"h6",children:T("settings.drawer.language.label")}),(0,f.jsx)(o.Z,{children:(0,f.jsxs)(c.Z,{"aria-label":"language",name:"language-radio-group",onChange:function(e){k.changeLanguage(e.target.value)},value:k.language,children:[(0,f.jsx)(i.Z,{value:"en",control:(0,f.jsx)(s.Z,{}),label:T("settings.drawer.language.options.en")}),(0,f.jsx)(i.Z,{value:"fr",control:(0,f.jsx)(s.Z,{}),label:T("settings.drawer.language.options.fr")})]})}),(0,f.jsx)(m.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:T("settings.drawer.mode.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:C,exclusive:!0,fullWidth:!0,onChange:function(e,r){j(r)},children:[(0,f.jsx)(d.Z,{value:"light",children:T("settings.drawer.mode.options.light")}),(0,f.jsx)(d.Z,{value:"dark",children:T("settings.drawer.mode.options.dark")})]}),(0,f.jsx)(m.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:T("settings.drawer.direction.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:w,exclusive:!0,fullWidth:!0,onChange:function(e,r){b(r)},children:[(0,f.jsx)(d.Z,{value:"ltr",children:T("settings.drawer.direction.options.ltr")}),(0,f.jsx)(d.Z,{value:"rtl",children:T("settings.drawer.direction.options.rtl")})]}),(0,f.jsx)(m.Z,{gutterBottom:!0,id:"settings-sidebar",marginTop:3,variant:"h6",children:T("settings.drawer.sidebar.label")}),(0,f.jsxs)(u.Z,{color:"primary",value:y,exclusive:!0,fullWidth:!0,onChange:function(e,r){v(r)},children:[(0,f.jsx)(d.Z,{value:!0,children:T("settings.drawer.sidebar.options.collapsed")}),(0,f.jsx)(d.Z,{value:!1,children:T("settings.drawer.sidebar.options.full")})]})]})]})}},40580:function(e,r,t){t.d(r,{E:function(){return n},R:function(){return a}});var n=104,a=280},72336:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(63366),a=t(87462),o=t(72791),i=t(28182),l=t(80163),s=t(67538),c=t(58333),d=t(43234),u=t(93383),m=t(34923);function p(e){return(0,m.Z)("MuiAppBar",e)}(0,t(50782).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var h=t(80184),g=(0,s.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,r){var t=e.styleProps;return(0,a.Z)({},r.root,r["position".concat((0,d.Z)(t.position))],r["color".concat((0,d.Z)(t.color))])}})((function(e){var r=e.theme,t=e.styleProps,n="light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:r.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:r.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:r.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:r.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:r.palette[t.color].main,color:r.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"transparent"===t.color&&{backgroundColor:"transparent",color:"inherit"})})),x=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiAppBar"}),o=t.className,s=t.color,u=void 0===s?"primary":s,m=t.position,x=void 0===m?"fixed":m,f=(0,n.Z)(t,["className","color","position"]),Z=(0,a.Z)({},t,{color:u,position:x}),v=function(e){var r=e.color,t=e.position,n=e.classes,a={root:["root","color".concat((0,d.Z)(r)),"position".concat((0,d.Z)(t))]};return(0,l.Z)(a,p,n)}(Z);return(0,h.jsx)(g,(0,a.Z)({square:!0,component:"header",styleProps:Z,elevation:4,className:(0,i.Z)(v.root,o,"fixed"===x&&"mui-fixed"),ref:r},f))}))}}]);
//# sourceMappingURL=105.a614fa50.chunk.js.map