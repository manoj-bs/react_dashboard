"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[127],{76762:function(e,r,o){var t=o(4942),a=o(63366),n=o(87462),i=o(72791),l=o(28182),s=o(80163),c=o(43234),d=o(47842),p=o(29108),u=o(38807),v=o(93383),f=o(58333),Z=o(67538),m=o(2730),h=o(44138),g=o(80184),x=(0,Z.ZP)(h.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,r){return r.backdrop}})({zIndex:-1}),b=(0,Z.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,r){return r.root}})({"@media print":{position:"absolute !important"}}),y=(0,Z.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,r){var o=e.styleProps;return(0,n.Z)({},r.container,r["scroll".concat((0,c.Z)(o.scroll))])}})((function(e){var r=e.styleProps;return(0,n.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),P=(0,Z.ZP)(v.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,r){var o=e.styleProps;return(0,n.Z)({},r.paper,r["scrollPaper".concat((0,c.Z)(o.scroll))],r["paperWidth".concat((0,c.Z)(String(o.maxWidth)),")")],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen)}})((function(e){var r=e.theme,o=e.styleProps;return(0,n.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&(0,t.Z)({maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):"".concat(r.breakpoints.values.xs).concat(r.breakpoints.unit)},"&.".concat(m.Z.paperScrollBody),(0,t.Z)({},r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==o.maxWidth&&(0,t.Z)({maxWidth:"".concat(r.breakpoints.values[o.maxWidth]).concat(r.breakpoints.unit)},"&.".concat(m.Z.paperScrollBody),(0,t.Z)({},r.breakpoints.down(r.breakpoints.values[o.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&(0,t.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(m.Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),M={enter:u.x9.enteringScreen,exit:u.x9.leavingScreen},D=i.forwardRef((function(e,r){var o=(0,f.Z)({props:e,name:"MuiDialog"}),t=o["aria-describedby"],d=o["aria-labelledby"],u=o.BackdropComponent,Z=o.BackdropProps,h=o.children,D=o.className,W=o.disableEscapeKeyDown,k=void 0!==W&&W,S=o.fullScreen,C=void 0!==S&&S,w=o.fullWidth,R=void 0!==w&&w,T=o.maxWidth,N=void 0===T?"sm":T,B=o.onBackdropClick,j=o.onClose,A=o.open,F=o.PaperComponent,H=void 0===F?v.Z:F,z=o.PaperProps,G=void 0===z?{}:z,E=o.scroll,I=void 0===E?"paper":E,K=o.TransitionComponent,L=void 0===K?p.Z:K,V=o.transitionDuration,Y=void 0===V?M:V,_=o.TransitionProps,X=(0,a.Z)(o,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),O=(0,n.Z)({},o,{disableEscapeKeyDown:k,fullScreen:C,fullWidth:R,maxWidth:N,scroll:I}),q=function(e){var r=e.classes,o=e.scroll,t=e.maxWidth,a=e.fullWidth,n=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,c.Z)(o))],paper:["paper","paperScroll".concat((0,c.Z)(o)),"paperWidth".concat((0,c.Z)(String(t))),a&&"paperFullWidth",n&&"paperFullScreen"]};return(0,s.Z)(i,m.D,r)}(O),J=i.useRef();return(0,g.jsx)(b,(0,n.Z)({className:(0,l.Z)(q.root,D),BackdropProps:(0,n.Z)({transitionDuration:Y,as:u},Z),closeAfterTransition:!0,BackdropComponent:x,disableEscapeKeyDown:k,onClose:j,open:A,ref:r,onClick:function(e){J.current&&(J.current=null,B&&B(e),j&&j(e,"backdropClick"))},styleProps:O},X,{children:(0,g.jsx)(L,(0,n.Z)({appear:!0,in:A,timeout:Y,role:"presentation"},_,{children:(0,g.jsx)(y,{className:(0,l.Z)(q.container),onMouseDown:function(e){J.current=e.target===e.currentTarget},styleProps:O,children:(0,g.jsx)(P,(0,n.Z)({as:H,elevation:24,role:"dialog","aria-describedby":t,"aria-labelledby":d},G,{className:(0,l.Z)(q.paper,G.className),styleProps:O,children:h}))})}))}))}));r.Z=D},2730:function(e,r,o){o.d(r,{D:function(){return a}});var t=o(34923);function a(e){return(0,t.Z)("MuiDialog",e)}var n=(0,o(50782).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);r.Z=n},37653:function(e,r,o){o.d(r,{Z:function(){return f}});var t=o(63366),a=o(87462),n=o(72791),i=o(28182),l=o(80163),s=o(67538),c=o(58333),d=o(34923);function p(e){return(0,d.Z)("MuiDialogActions",e)}(0,o(50782).Z)("MuiDialogActions",["root","spacing"]);var u=o(80184),v=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var o=e.styleProps;return(0,a.Z)({},r.root,!o.disableSpacing&&r.spacing)}})((function(e){var r=e.styleProps;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=n.forwardRef((function(e,r){var o=(0,c.Z)({props:e,name:"MuiDialogActions"}),n=o.className,s=o.disableSpacing,d=void 0!==s&&s,f=(0,t.Z)(o,["className","disableSpacing"]),Z=(0,a.Z)({},o,{disableSpacing:d}),m=function(e){var r=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(o,p,r)}(Z);return(0,u.jsx)(v,(0,a.Z)({className:(0,i.Z)(m.root,n),styleProps:Z,ref:r},f))}))},79266:function(e,r,o){o.d(r,{Z:function(){return f}});var t=o(63366),a=o(87462),n=o(72791),i=o(28182),l=o(80163),s=o(67538),c=o(58333),d=o(34923);function p(e){return(0,d.Z)("MuiDialogContent",e)}(0,o(50782).Z)("MuiDialogContent",["root","dividers"]);var u=o(80184),v=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var o=e.styleProps;return(0,a.Z)({},r.root,o.dividers&&r.dividers)}})((function(e){var r=e.theme,o=e.styleProps;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-of-type":{paddingTop:20}},o.dividers&&{padding:"16px 24px",borderTop:"1px solid ".concat(r.palette.divider),borderBottom:"1px solid ".concat(r.palette.divider)})})),f=n.forwardRef((function(e,r){var o=(0,c.Z)({props:e,name:"MuiDialogContent"}),n=o.className,s=o.dividers,d=void 0!==s&&s,f=(0,t.Z)(o,["className","dividers"]),Z=(0,a.Z)({},o,{dividers:d}),m=function(e){var r=e.classes,o={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(o,p,r)}(Z);return(0,u.jsx)(v,(0,a.Z)({className:(0,i.Z)(m.root,n),styleProps:Z,ref:r},f))}))},94693:function(e,r,o){o.d(r,{Z:function(){return f}});var t=o(63366),a=o(87462),n=o(72791),i=o(80163),l=o(67538),s=o(58333),c=o(55477),d=o(34923);function p(e){return(0,d.Z)("MuiDialogContentText",e)}(0,o(50782).Z)("MuiDialogContentText",["root"]);var u=o(80184),v=(0,l.ZP)(c.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,r){return r.root}})({marginBottom:12}),f=n.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiDialogContentText"}),n=(0,t.Z)(o,["children"]),l=function(e){var r=e.classes,o=(0,i.Z)({root:["root"]},p,r);return(0,a.Z)({},r,o)}(n);return(0,u.jsx)(v,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,styleProps:n},o,{classes:l}))}))},76454:function(e,r,o){o.d(r,{Z:function(){return Z}});var t=o(87462),a=o(63366),n=o(72791),i=o(28182),l=o(80163),s=o(55477),c=o(67538),d=o(58333),p=o(34923);function u(e){return(0,p.Z)("MuiDialogTitle",e)}(0,o(50782).Z)("MuiDialogTitle",["root"]);var v=o(80184),f=(0,c.ZP)("div",{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{margin:0,padding:"16px 24px",flex:"0 0 auto"}})),Z=n.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiDialogTitle"}),n=o.children,c=o.className,p=o.disableTypography,Z=void 0!==p&&p,m=(0,a.Z)(o,["children","className","disableTypography"]),h=(0,t.Z)({},o,{disableTypography:Z}),g=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},u,r)}(h);return(0,v.jsx)(f,(0,t.Z)({className:(0,i.Z)(g.root,c),styleProps:h,ref:r},m,{children:Z?n:(0,v.jsx)(s.Z,{component:"h2",variant:"h6",children:n})}))}))},42413:function(e,r,o){o.d(r,{Z:function(){return Z}});var t=o(4942),a=o(63366),n=o(87462),i=o(72791),l=o(28182),s=o(80163),c=o(58333),d=o(67538),p=o(34923);function u(e){return(0,p.Z)("MuiToolbar",e)}(0,o(50782).Z)("MuiToolbar",["root","gutters","regular","dense"]);var v=o(80184),f=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,r){var o=e.styleProps;return(0,n.Z)({},r.root,!o.disableGutters&&r.gutters,r[o.variant])}})((function(e){var r=e.theme,o=e.styleProps;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,t.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var r=e.theme;return"regular"===e.styleProps.variant&&r.mixins.toolbar})),Z=i.forwardRef((function(e,r){var o=(0,c.Z)({props:e,name:"MuiToolbar"}),t=o.className,i=o.component,d=void 0===i?"div":i,p=o.disableGutters,Z=void 0!==p&&p,m=o.variant,h=void 0===m?"regular":m,g=(0,a.Z)(o,["className","component","disableGutters","variant"]),x=(0,n.Z)({},o,{component:d,disableGutters:Z,variant:h}),b=function(e){var r=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,s.Z)(o,u,r)}(x);return(0,v.jsx)(f,(0,n.Z)({as:d,className:(0,l.Z)(b.root,t),ref:r,styleProps:x},g))}))},63459:function(e,r,o){var t=o(64836);r.Z=void 0;var a=t(o(44894)),n=o(80184),i=(0,a.default)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");r.Z=i},57407:function(e,r,o){var t=o(64836);r.Z=void 0;var a=t(o(44894)),n=o(80184),i=(0,a.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=i},68336:function(e,r,o){var t=o(64836);r.Z=void 0;var a=t(o(44894)),n=o(80184),i=(0,a.default)((0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");r.Z=i}}]);
//# sourceMappingURL=127.5b13b008.chunk.js.map