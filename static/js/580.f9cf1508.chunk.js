"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[580],{47580:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var a=r(29439),t=r(39846),i=r(42413),s=r(72791),o=r(16871),l=r(2612),c=r(98799),d=r(95702),p=r(67405),u=r(61266),m=r(68843),h=r(31628),x=r(59496),Z=r(286),g=r(26900),v=r(7324),y=r(68190),f=r(33248),j=r(79112),b=r(58997),w=r(3036),k=r(43115),M=r(22020),T=r(43504),P=r(76687),C=r(10607),z=r(40580),I=r(80184),L=[{icon:j.Z,key:"admin.drawer.menu.home",path:"/admin"},{icon:v.Z,key:"admin.drawer.menu.dashboard",path:"/admin/dashboard"},{icon:b.Z,key:"admin.drawer.menu.userManagement",path:"/admin/user-management"},{icon:y.Z,key:"admin.drawer.menu.calendar",path:"/admin/calendar"},{icon:g.Z,key:"admin.drawer.menu.projects",path:"/admin/projects"},{icon:f.Z,key:"admin.drawer.menu.help",path:"/admin/help"}],V=function(e){var n=e.collapsed,r=e.mobileOpen,a=e.onDrawerToggle,i=e.onSettingsToggle,s=(0,P.aC)().userInfo,o=(0,M.$)().t,l=n?z.E:z.R,c=(0,I.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"},children:[(0,I.jsx)(C.Z,{sx:{display:"flex",p:4}}),(0,I.jsx)(m.Z,{component:"nav",sx:{px:2},children:L.map((function(e){return(0,I.jsxs)(h.ZP,{button:!0,component:T.OL,activeClassName:"Mui-selected",end:!0,to:"/".concat("/react-gh-pages").concat(e.path),children:[(0,I.jsx)(x.Z,{children:(0,I.jsx)(p.Z,{sx:{color:"inherit",bgcolor:"transparent"},children:(0,I.jsx)(e.icon,{})})}),(0,I.jsx)(Z.Z,{primary:o(e.key),sx:{display:n?"none":"block"}})]},e.path)}))}),(0,I.jsx)(t.Z,{sx:{flexGrow:1}}),(0,I.jsxs)(m.Z,{component:"nav",sx:{p:2},children:[(0,I.jsxs)(h.ZP,{button:!0,component:T.OL,to:"/".concat("/react-gh-pages","/admin/profile"),children:[(0,I.jsx)(x.Z,{children:(0,I.jsx)(p.Z,{children:(0,I.jsx)(w.Z,{})})}),s&&(0,I.jsx)(Z.Z,{primary:"".concat(s.firstName," ").concat(s.lastName),sx:{display:n?"none":"block"}})]}),(0,I.jsxs)(h.ZP,{button:!0,onClick:i,children:[(0,I.jsx)(x.Z,{children:(0,I.jsx)(p.Z,{children:(0,I.jsx)(k.Z,{})})}),(0,I.jsx)(Z.Z,{primary:o("admin.drawer.menu.settings"),sx:{display:n?"none":"block"}})]})]})]});return(0,I.jsxs)(t.Z,{"aria-label":"Admin drawer",component:"nav",sx:{width:{lg:l},flexShrink:{lg:0}},children:[(0,I.jsx)(u.ZP,{variant:"temporary",open:r,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",lg:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:l}},children:c}),(0,I.jsx)(u.ZP,{variant:"permanent",open:!0,sx:{display:{xs:"none",lg:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:l}},children:c})]})},H=function(){var e=(0,s.useState)(!1),n=(0,a.Z)(e,2),r=n[0],p=n[1],u=(0,d.rV)(),m=u.collapsed,h=u.open,x=u.toggleDrawer,Z=function(){p(!r)};return(0,I.jsxs)(t.Z,{sx:{display:"flex"},children:[(0,I.jsx)(V,{collapsed:m,mobileOpen:h,onDrawerToggle:x,onSettingsToggle:Z}),(0,I.jsx)(c.Z,{onDrawerToggle:Z,open:r}),(0,I.jsxs)(t.Z,{component:"main",sx:{flexGrow:1,pb:3,px:{xs:3,sm:6}},children:[(0,I.jsx)(i.Z,{}),(0,I.jsx)(l.Z,{children:(0,I.jsx)(o.j3,{})})]})]})}},98799:function(e,n,r){var a=r(39846),t=r(61266),i=r(5068),s=r(31517),o=r(71217),l=r(58614),c=r(1573),d=r(18860),p=r(36030),u=r(55477),m=r(30014),h=r(22020),x=r(40580),Z=r(95702),g=r(80184);n.Z=function(e){var n=e.onDrawerToggle,r=e.open,v=(0,Z.rV)(),y=v.changeCollapsed,f=v.changeDirection,j=v.changeMode,b=v.collapsed,w=v.direction,k=v.mode,M=(0,h.$)(),T=M.i18n,P=M.t;return(0,g.jsxs)(t.ZP,{anchor:"left",open:r,onClose:n,sx:{"& .MuiDrawer-paper":{width:x.R}},variant:"temporary",children:[(0,g.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[(0,g.jsx)(u.Z,{variant:"h5",children:P("settings.drawer.title")}),(0,g.jsx)(o.Z,{color:"inherit",onClick:n,edge:"end",children:(0,g.jsx)(m.Z,{})})]}),(0,g.jsxs)(a.Z,{sx:{pl:2,pr:2},children:[(0,g.jsx)(u.Z,{gutterBottom:!0,id:"settings-language",marginTop:3,variant:"h6",children:P("settings.drawer.language.label")}),(0,g.jsx)(i.Z,{children:(0,g.jsxs)(c.Z,{"aria-label":"language",name:"language-radio-group",onChange:function(e){T.changeLanguage(e.target.value)},value:T.language,children:[(0,g.jsx)(s.Z,{value:"en",control:(0,g.jsx)(l.Z,{}),label:P("settings.drawer.language.options.en")}),(0,g.jsx)(s.Z,{value:"fr",control:(0,g.jsx)(l.Z,{}),label:P("settings.drawer.language.options.fr")})]})}),(0,g.jsx)(u.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:P("settings.drawer.mode.label")}),(0,g.jsxs)(p.Z,{color:"primary",value:k,exclusive:!0,fullWidth:!0,onChange:function(e,n){j(n)},children:[(0,g.jsx)(d.Z,{value:"light",children:P("settings.drawer.mode.options.light")}),(0,g.jsx)(d.Z,{value:"dark",children:P("settings.drawer.mode.options.dark")})]}),(0,g.jsx)(u.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:P("settings.drawer.direction.label")}),(0,g.jsxs)(p.Z,{color:"primary",value:w,exclusive:!0,fullWidth:!0,onChange:function(e,n){f(n)},children:[(0,g.jsx)(d.Z,{value:"ltr",children:P("settings.drawer.direction.options.ltr")}),(0,g.jsx)(d.Z,{value:"rtl",children:P("settings.drawer.direction.options.rtl")})]}),(0,g.jsx)(u.Z,{gutterBottom:!0,id:"settings-sidebar",marginTop:3,variant:"h6",children:P("settings.drawer.sidebar.label")}),(0,g.jsxs)(p.Z,{color:"primary",value:b,exclusive:!0,fullWidth:!0,onChange:function(e,n){y(n)},children:[(0,g.jsx)(d.Z,{value:!0,children:P("settings.drawer.sidebar.options.collapsed")}),(0,g.jsx)(d.Z,{value:!1,children:P("settings.drawer.sidebar.options.full")})]})]})]})}},40580:function(e,n,r){r.d(n,{E:function(){return a},R:function(){return t}});var a=104,t=280},59496:function(e,n,r){r.d(n,{Z:function(){return x}});var a=r(63366),t=r(87462),i=r(72791),s=r(28182),o=r(80163),l=r(99373),c=r(67538),d=r(58333),p=r(34923);function u(e){return(0,p.Z)("MuiListItemAvatar",e)}(0,r(50782).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var m=r(80184),h=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,n){var r=e.styleProps;return(0,t.Z)({},n.root,"flex-start"===r.alignItems&&n.alignItemsFlexStart)}})((function(e){var n=e.styleProps;return(0,t.Z)({minWidth:56,flexShrink:0},"flex-start"===n.alignItems&&{marginTop:8})})),x=i.forwardRef((function(e,n){var r=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),c=r.className,p=(0,a.Z)(r,["className"]),x=i.useContext(l.Z),Z=(0,t.Z)({},r,{alignItems:x.alignItems}),g=function(e){var n=e.alignItems,r=e.classes,a={root:["root","flex-start"===n&&"alignItemsFlexStart"]};return(0,o.Z)(a,u,r)}(Z);return(0,m.jsx)(h,(0,t.Z)({className:(0,s.Z)(g.root,c),styleProps:Z,ref:n},p))}))},286:function(e,n,r){r.d(n,{Z:function(){return v}});var a=r(4942),t=r(63366),i=r(87462),s=r(72791),o=r(28182),l=r(80163),c=r(55477),d=r(99373),p=r(58333),u=r(67538),m=r(34923);function h(e){return(0,m.Z)("MuiListItemText",e)}var x=(0,r(50782).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Z=r(80184),g=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,n){var r,t=e.styleProps;return(0,i.Z)((r={},(0,a.Z)(r,"& .".concat(x.primary),n.primary),(0,a.Z)(r,"& .".concat(x.secondary),n.secondary),r),n.root,t.inset&&n.inset,t.primary&&t.secondary&&n.multiline,t.dense&&n.dense)}})((function(e){var n=e.styleProps;return(0,i.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},n.primary&&n.secondary&&{marginTop:6,marginBottom:6},n.inset&&{paddingLeft:56})})),v=s.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiListItemText"}),a=r.children,u=r.className,m=r.disableTypography,x=void 0!==m&&m,v=r.inset,y=void 0!==v&&v,f=r.primary,j=r.primaryTypographyProps,b=r.secondary,w=r.secondaryTypographyProps,k=(0,t.Z)(r,["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),M=s.useContext(d.Z).dense,T=null!=f?f:a,P=b,C=(0,i.Z)({},r,{disableTypography:x,inset:y,primary:!!T,secondary:!!P,dense:M}),z=function(e){var n=e.classes,r=e.inset,a=e.primary,t=e.secondary,i={root:["root",r&&"inset",e.dense&&"dense",a&&t&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,l.Z)(i,h,n)}(C);return null==T||T.type===c.Z||x||(T=(0,Z.jsx)(c.Z,(0,i.Z)({variant:M?"body2":"body1",className:z.primary,component:"span",display:"block"},j,{children:T}))),null==P||P.type===c.Z||x||(P=(0,Z.jsx)(c.Z,(0,i.Z)({variant:"body2",className:z.secondary,color:"text.secondary",display:"block"},w,{children:P}))),(0,Z.jsxs)(g,(0,i.Z)({className:(0,o.Z)(z.root,u),styleProps:C,ref:n},k,{children:[T,P]}))}))},26900:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");n.Z=s},7324:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"}),"BarChart");n.Z=s},68190:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");n.Z=s},33248:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.99 15c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26zm3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.16.29-.22.48-.22 1.41h-1.82c0-.49-.08-1.29.31-1.98.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-1.06 0-1.58.8-1.8 1.48l-1.65-.7C9.01 7.15 10.22 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08z"}),"HelpCenter");n.Z=s},79112:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");n.Z=s},58997:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");n.Z=s},3036:function(e,n,r){var a=r(64836);n.Z=void 0;var t=a(r(44894)),i=r(80184),s=(0,t.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.Z=s}}]);
//# sourceMappingURL=580.f9cf1508.chunk.js.map