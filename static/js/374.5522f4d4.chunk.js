"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[374],{37298:function(e,n,t){var r=t(72336),a=t(40580),i=t(95702),l=t(80184);n.Z=function(e){var n=e.children,t=(0,i.rV)().collapsed?a.E:a.R;return(0,l.jsx)(r.Z,{color:"default",position:"fixed",sx:{width:{lg:"calc(100% - ".concat(t,"px)")},marginLeft:{lg:t}},children:n})}},22446:function(e,n,t){var r=t(71217),a=t(42413),i=t(55477),l=t(68336),o=t(95702),c=t(80184);n.Z=function(e){var n=e.children,t=e.title,s=(0,o.rV)().toggleDrawer;return(0,c.jsxs)(a.Z,{sx:{px:{xs:3,sm:6}},children:[(0,c.jsx)(r.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,sx:{display:{lg:"none"},marginRight:2},children:(0,c.jsx)(l.Z,{})}),(0,c.jsx)(i.Z,{variant:"h2",component:"h1",sx:{flexGrow:1},children:t}),n]})}},14374:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(74165),a=t(15861),i=t(29439),l=t(46087),o=t(37176),c=t(63459),s=t(72791),d=t(22020),u=t(37298),f=t(22446),p=t(74569),m=t.n(p),h=t(91933),v=t(70155),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().post("/api/events",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function x(){var e=(0,h.useQueryClient)(),n=(0,h.useMutation)(Z,{onSuccess:function(n){e.setQueryData(["events"],(function(e){return(0,v.vC)(e,n)}))}});return{isAdding:n.isLoading,addEvent:n.mutateAsync}}var g=t(52349),y=t(61028),b=t(1413),j=t(45987),w=t(27805),C=t(85747),E=t(39846),M=t(14872),k=t(71217),S=t(67538),A=t(64996),D=t(44807),T=t(55477),O=t(34066),_=t(81921),F=t(68190),L=["primary","warning","error","success"],W=t(80184),q=["events","onEventClick"],N=(0,S.ZP)("div")((function(e){var n=e.theme;return"\n  .fc-theme-standard .fc-scrollgrid {\n    border-color: ".concat(n.palette.divider,";\n  }\n\n  .fc th {\n    border-right: none;\n    border-left: none;\n    padding: 10px 0;\n  }\n\n  .fc-theme-standard .fc-scrollgrid {\n    border-right: none;\n    border-left: none;\n    border-bottom: none;\n  }\n\n  .fc-theme-standard td, .fc-theme-standard th {\n    border-right: none;\n  }\n\n  .fc-theme-standard td, .fc-theme-standard th {\n    border-color: ").concat(n.palette.divider,";\n  }\n\n  .fc .fc-daygrid-day-number {\n    color: ").concat(n.palette.text.secondary,";\n    font-size: 14px;\n    font-weight: ").concat(n.typography.fontWeightBold,";\n    padding: 12px;\n  }\n\n  .fc .fc-daygrid-day.fc-day-today {\n    background-color: ").concat((0,A.Fq)(n.palette.primary.main,.1),";\n  }\n")})),V=function(e){var n=e.events,t=e.onEventClick,r=(0,j.Z)(e,q),a=(0,D.Z)(),l=(0,d.$)(),o=l.i18n,c=l.t,u=(0,s.useState)(""),f=(0,i.Z)(u,2),p=f[0],m=f[1],h=(0,s.useState)(null),v=(0,i.Z)(h,2),Z=v[0],x=v[1],g=(0,s.useCallback)((function(e){null!==e&&x(e)}),[]);(0,s.useEffect)((function(){Z&&m(Z.getApi().getCurrentData().viewTitle)}),[Z,o.language]);var y=(0,s.useMemo)((function(){return n.map((function(e){return e.color&&L.includes(e.color)?(0,b.Z)((0,b.Z)({},e),{},{color:a.palette[e.color].main}):e}))}),[n,a]);return(0,W.jsxs)(s.Fragment,{children:[(0,W.jsxs)(E.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",px:3,py:2},children:[(0,W.jsxs)(T.Z,{sx:{display:"inline-flex"},variant:"h5",children:[(0,W.jsx)(F.Z,{sx:{mr:2}}),p]}),(0,W.jsxs)(E.Z,{children:[(0,W.jsx)(k.Z,{"aria-label":"previous",component:"span",onClick:function(){Z&&(Z.getApi().prev(),m(Z.getApi().getCurrentData().viewTitle))},children:(0,W.jsx)(O.Z,{})}),(0,W.jsx)(M.Z,{onClick:function(){Z&&(Z.getApi().today(),m(Z.getApi().getCurrentData().viewTitle))},children:c("common.today")}),(0,W.jsx)(k.Z,{"aria-label":"next",component:"span",edge:"end",onClick:function(){Z&&(Z.getApi().next(),m(Z.getApi().getCurrentData().viewTitle))},children:(0,W.jsx)(_.Z,{})})]})]}),(0,W.jsx)(N,{children:(0,W.jsx)(w.ZPm,(0,b.Z)({headerToolbar:!1,plugins:[C.ZP],initialView:"dayGridMonth",locale:o.language,ref:g,events:y,eventClick:function(e){if(t){var r=n.find((function(n){return n.id===e.event.id}));t(r)}},eventTimeFormat:{hour:"numeric",minute:"2-digit",meridiem:!1}},r))})]})},Q=t(76762),I=t(37653),P=t(79266),B=t(76454),R=t(5068),z=t(94327),U=t(58614),$=t(1573),G=t(47044),H=t(57407),J=t(22263),K=t(52698),X=t(64460),Y=t(55705),ee=t(77942),ne=function(e){var n=e.onAdd,t=e.onClose,r=e.onDelete,a=e.onUpdate,i=e.open,l=e.processing,o=e.event,c=(0,d.$)().t,s=Boolean(o&&o.id),u=(0,Y.TA)({initialValues:{title:o?o.title:"",description:o?o.description:void 0,start:o?new Date(o.start):new Date,end:o?new Date(o.end):new Date,color:o?o.color:"primary"},validationSchema:ee.Ry({title:ee.Z_().max(30,c("common.validations.max",{size:30})).required(c("common.validations.required")),description:ee.Z_().max(100,c("common.validations.max",{size:100})),start:ee.hT().required(c("common.validations.required")),end:ee.hT().required(c("common.validations.required")),color:ee.Z_()}),onSubmit:function(e){var t=function(e){return(0,b.Z)((0,b.Z)({},e),{},{start:(0,X.Z)(e.start),end:(0,X.Z)(e.end)})}(e);o&&o.id?a((0,b.Z)((0,b.Z)({},t),{},{id:o.id})):n(t)}});return(0,W.jsx)(Q.Z,{open:i,onClose:t,"aria-labelledby":"event-dialog-title",children:(0,W.jsxs)("form",{onSubmit:u.handleSubmit,noValidate:!0,children:[(0,W.jsx)(B.Z,{id:"event-dialog-title",children:c(s?"calendar.modal.edit.title":"calendar.modal.add.title")}),(0,W.jsxs)(P.Z,{children:[(0,W.jsx)(G.Z,{margin:"normal",required:!0,fullWidth:!0,id:"title",label:c("calendar.form.title.label"),name:"title",autoFocus:!0,disabled:l,value:u.values.title,onChange:u.handleChange,error:u.touched.title&&Boolean(u.errors.title),helperText:u.touched.title&&u.errors.title}),(0,W.jsx)(G.Z,{margin:"normal",fullWidth:!0,id:"description",label:c("calendar.form.description.label"),name:"description",disabled:l,value:u.values.description,onChange:u.handleChange,error:u.touched.description&&Boolean(u.errors.description),helperText:u.touched.description&&u.errors.description}),(0,W.jsx)(K.Z,{label:c("calendar.form.start.label"),inputFormat:"dd/MM/yyyy H:mm",value:u.values.start,onChange:function(e){return u.setFieldValue("start",e)},renderInput:function(e){return(0,W.jsx)(G.Z,(0,b.Z)((0,b.Z)({},e),{},{id:"start",disabled:l,fullWidth:!0,margin:"normal",name:"start"}))}}),(0,W.jsx)(K.Z,{label:c("calendar.form.end.label"),inputFormat:"dd/MM/yyyy H:mm",value:u.values.end,onChange:function(e){return u.setFieldValue("end",e)},renderInput:function(e){return(0,W.jsx)(G.Z,(0,b.Z)((0,b.Z)({},e),{},{id:"end",disabled:l,fullWidth:!0,margin:"normal",name:"end"}))}}),(0,W.jsxs)(R.Z,{component:"fieldset",margin:"normal",children:[(0,W.jsx)(z.Z,{component:"legend",children:c("calendar.form.color.label")}),(0,W.jsx)($.Z,{row:!0,"aria-label":"color",name:"color",value:u.values.color,onChange:u.handleChange,children:L.map((function(e){return(0,W.jsx)(U.Z,{disabled:l,sx:{color:"".concat(e,".main"),"&.Mui-checked":{color:"".concat(e,".main")}},value:e},e)}))})]})]}),(0,W.jsxs)(I.Z,{children:[o&&o.id&&(0,W.jsx)(k.Z,{"aria-label":"delete event",onClick:function(){return r(o.id)},disabled:l,children:(0,W.jsx)(H.Z,{})}),(0,W.jsx)(E.Z,{sx:{flexGrow:1}}),(0,W.jsx)(M.Z,{onClick:t,children:c("common.cancel")}),(0,W.jsx)(J.Z,{loading:l,type:"submit",variant:"contained",children:c(s?"calendar.modal.edit.action":"calendar.modal.add.action")})]})]})})},te=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().delete("/api/events",{data:n});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function re(){var e=(0,h.useQueryClient)(),n=(0,h.useMutation)(te,{onSuccess:function(n){e.setQueryData(["events"],(function(e){return(0,v.Cg)(e,n)}))}});return{isDeleting:n.isLoading,deleteEvent:n.mutateAsync}}var ae=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().get("/api/events");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var ie=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().put("/api/events",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function le(){var e=(0,h.useQueryClient)(),n=(0,h.useMutation)(ie,{onSuccess:function(n){e.setQueryData(["events"],(function(e){return(0,v.Wo)(e,n)}))}});return{isUpdating:n.isLoading,updateEvent:n.mutateAsync}}var oe=function(){var e=(0,y.Ds)(),n=(0,d.$)().t,t=(0,s.useState)(void 0),p=(0,i.Z)(t,2),m=p[0],v=p[1],Z=(0,s.useState)(void 0),b=(0,i.Z)(Z,2),j=b[0],w=b[1],C=(0,s.useState)(!1),E=(0,i.Z)(C,2),M=E[0],k=E[1],S=(0,s.useState)(!1),A=(0,i.Z)(S,2),D=A[0],T=A[1],O=x(),_=O.addEvent,F=O.isAdding,L=re(),q=L.deleteEvent,N=L.isDeleting,Q=(0,h.useQuery)("events",(function(){return ae()})).data,I=le(),P=I.isUpdating,B=I.updateEvent,R=F||N||P,z=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(a).then((function(){e.success(n("calendar.notifications.addSuccess",{event:a.title})),T(!1)})).catch((function(){e.error(n("common.errors.unexpected.subTitle"))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m&&q(m).then((function(){e.success(n("calendar.notifications.deleteSuccess")),k(!1),T(!1)})).catch((function(){e.error(n("common.errors.unexpected.subTitle"))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(a).then((function(){e.success(n("calendar.notifications.updateSuccess",{event:a.title})),T(!1)})).catch((function(){e.error(n("common.errors.unexpected.subTitle"))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(e){w(e),T(!0)};return(0,W.jsxs)(s.Fragment,{children:[(0,W.jsx)(u.Z,{children:(0,W.jsx)(f.Z,{title:n("calendar.title"),children:(0,W.jsx)(o.Z,{"aria-label":"add event",color:"primary",onClick:function(){return G()},size:"small",children:(0,W.jsx)(c.Z,{})})})}),(0,W.jsx)(l.Z,{children:(0,W.jsx)(V,{contentHeight:720,events:Q||[],onEventClick:G})}),(0,W.jsx)(g.Z,{description:n("calendar.confirmations.delete"),pending:R,onClose:function(){k(!1)},onConfirm:U,open:M,title:n("common.confirmation")}),D&&(0,W.jsx)(ne,{onAdd:z,onClose:function(){w(void 0),T(!1)},onDelete:function(e){v(e),k(!0)},onUpdate:$,open:D,processing:R,event:j})]})}},52349:function(e,n,t){t.d(n,{Z:function(){return U}});var r,a,i,l,o,c,s,d,u,f,p,m,h,v,Z,x,g,y,b,j,w,C,E,M,k,S,A,D=t(14872),T=t(76762),O=t(37653),_=t(79266),F=t(94693),L=t(76454),W=t(22263),q=t(22020),N=t(72791),V=["title","titleId"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q.apply(this,arguments)}function I(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function P(e,n){var t=e.title,D=e.titleId,T=I(e,V);return N.createElement("svg",Q({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 300",width:406,height:306,className:"illustration styles_illustrationTablet__1DWOa",ref:n,"aria-labelledby":D},T),t?N.createElement("title",{id:D},t):null,r||(r=N.createElement("path",{d:"M192.65,152.79s-14.78-4.54-17.82,5.21,11.78,8.44,11.78,8.44Z",fill:"#24285b"})),a||(a=N.createElement("path",{d:"M161.28,95.66l-12.65,39.13a4.47,4.47,0,0,1-6.56,2.46L121.14,124.7l-3.8,6.83s24.76,24,34.67,21.26,22.82-27.08,22.82-27.08Z",fill:"#68e1fd",className:"fill-primary"})),i||(i=N.createElement("path",{d:"M161.28,95.66l-12.65,39.13a4.47,4.47,0,0,1-6.56,2.46L121.14,124.7l-3.8,6.83s24.76,24,34.67,21.26,22.82-27.08,22.82-27.08Z",opacity:.08})),l||(l=N.createElement("polygon",{points:"160.67 63.83 172.56 79.52 165.43 90.95 158.46 71.65 160.67 63.83",fill:"#f4a28c"})),o||(o=N.createElement("path",{d:"M159.42,74.72a7.12,7.12,0,0,0,2.11-3.51s1.56,3.25-.25,8.25Z",fill:"#ce8172",opacity:.31})),c||(c=N.createElement("path",{d:"M152.21,66.54s1.58,5.8,3.9,9.18a3,3,0,0,0,4.21.76,6.64,6.64,0,0,0,3.15-6.5l-.13-5.54a5.4,5.4,0,0,0-4.23-4.58C155.1,58.74,151.06,63.06,152.21,66.54Z",fill:"#f4a28c"})),s||(s=N.createElement("path",{d:"M153.39,70.14l-.77,2.75a1,1,0,0,0,1.09,1.21l2.3-.39Z",fill:"#f4a28c"})),d||(d=N.createElement("path",{d:"M166,70.07l-1.72-8s3.71-2.75,1.15-4.79-3.3.55-4.91-2.46-4.39-2.38-5.28.22-1.28-.2-3.63.58-2.44,2-1.65,3.74-3.26,1.52-3,4,1.18,4.62,6.79,2.2S157.69,69.65,166,70.07Z",fill:"#ffd200",className:"fill-warning"})),u||(u=N.createElement("path",{d:"M160,69.16s-.76-2.19.94-2.62,2.8,2.71.7,3.82Z",fill:"#f4a28c"})),f||(f=N.createElement("path",{d:"M226.31,213.24l9.31,7.42A48.68,48.68,0,0,0,270.68,231l10.47-1a2,2,0,0,0,1.3-3.35l-17-18.76Z",fill:"#a8a8a8"})),p||(p=N.createElement("path",{d:"M226.31,161.15l9.31-7.42a48.63,48.63,0,0,1,35.06-10.37l10.47,1a2,2,0,0,1,1.3,3.35l-17,18.76Z",fill:"#a8a8a8"})),m||(m=N.createElement("path",{d:"M87.75,187.17S131.68,242,265.42,207.89V166.44C131.68,132.35,87.75,187.17,87.75,187.17Z",fill:"#e6e6e6"})),h||(h=N.createElement("path",{d:"M176.11,155.43s-12.92,9.11-10.6,22.28,19.37,31.07,19.37,31.07-3.88,11.31,6.92,5.4l1.95-5.57-8.53-21.44-2.37-18.75,6.88-13.15Z",opacity:.08})),v||(v=N.createElement("path",{d:"M165.43,91l7.13-11.44s24.83-2.27,34,17.61,13.33,45.17,13.33,45.17l-27.23,10.5S142.64,133.62,165.43,91Z",fill:"#68e1fd",className:"fill-primary"})),Z||(Z=N.createElement("path",{d:"M219.88,142.29s10.25,21.81-3.7,24.21a112.32,112.32,0,0,0-21,6.11,7.59,7.59,0,0,0-4.6,8.83l5,20.75-5.81,4.63L178,183.53a18.35,18.35,0,0,1,4.55-22.19l10.06-8.55Z",fill:"#24285b"})),x||(x=N.createElement("path",{d:"M184.23,109s-3.4,15.16,4.36,23.94,15,15.58,15,15.58l-11,4.24S179.1,147.21,171,138.4,176.15,106.36,184.23,109Z",opacity:.08})),g||(g=N.createElement("path",{d:"M187.07,94.49c-.69-12.42-17.42-15.86-23.3-4.9A29,29,0,0,0,160.4,100c-1.59,13.77-16.49,70.85-16.49,70.85l8.82,2.58S176.7,130.06,185,107A32,32,0,0,0,187.07,94.49Z",fill:"#68e1fd",className:"fill-primary"})),y||(y=N.createElement("rect",{x:131.84,y:177,width:27.64,height:6.52,rx:3.26,fill:"#878787",opacity:.19})),b||(b=N.createElement("path",{d:"M187.07,94.49c-.69-12.42-17.42-15.86-23.3-4.9A29,29,0,0,0,160.4,100c-1.59,13.77-16.49,70.85-16.49,70.85l8.82,2.58S176.7,130.06,185,107A32,32,0,0,0,187.07,94.49Z",fill:"#fff",opacity:.36})),j||(j=N.createElement("path",{d:"M145.36,171.29s-8.12,6.61-2.5,9.09,9.87-6.93,9.87-6.93Z",fill:"#f4a28c"})),w||(w=N.createElement("rect",{x:265.42,y:166.44,width:5.79,height:41.44,fill:"#a8a8a8"})),C||(C=N.createElement("path",{d:"M271.21,172.55s50.68-.94,63.57,11-63.57,16.12-63.57,16.12Z",fill:"#ffd200",className:"fill-warning"})),E||(E=N.createElement("path",{d:"M271.21,180.26s39-1.31,41.23,3.26-41.23,9.23-41.23,9.23Z",fill:"#fff",opacity:.33})),M||(M=N.createElement("path",{d:"M118.55,129.36s-9.48-3.14-5.43-9.39,8,4.73,8,4.73Z",fill:"#f4a28c"})),k||(k=N.createElement("rect",{x:111.52,y:106.97,width:9.96,height:15.7,transform:"translate(-30.65 43.39) rotate(-18.69)",fill:"#ffd200",className:"fill-warning"})),S||(S=N.createElement("path",{d:"M191.07,205.71s1.38,5.94-1.39,7.63c0,0,.94,4.22,5,1.85s3-8.37,3-8.37L194.47,203Z",fill:"#68e1fd",className:"fill-primary"})),A||(A=N.createElement("path",{d:"M123.44,165.08v44.17s-22-6-35.69-22.08C87.75,187.17,99.48,172.88,123.44,165.08Z",fill:"#a8a8a8"})))}var B=N.forwardRef(P),R=(t.p,t(89900)),z=t(80184),U=function(e){var n=e.description,t=e.onClose,r=e.onConfirm,a=e.open,i=e.pending,l=e.title,o=(0,q.$)().t;return(0,z.jsxs)(T.Z,{open:a,onClose:t,"aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[(0,z.jsxs)(_.Z,{sx:{textAlign:"center"},children:[(0,z.jsx)(R.Z,{children:(0,z.jsx)(B,{style:{maxWidth:280,width:"100%"}})}),(0,z.jsx)(L.Z,{id:"confirm-dialog-title",sx:{pb:1,pt:0},children:l}),n&&(0,z.jsx)(F.Z,{id:"confirm-dialog-description",children:n})]}),(0,z.jsxs)(O.Z,{children:[(0,z.jsx)(D.Z,{onClick:t,children:o("common.cancel")}),(0,z.jsx)(W.Z,{autoFocus:!0,onClick:r,loading:i,variant:"contained",children:o("common.confirm")})]})]})}},40580:function(e,n,t){t.d(n,{E:function(){return r},R:function(){return a}});var r=104,a=280},70155:function(e,n,t){t.d(n,{CS:function(){return l},Cg:function(){return i},Wo:function(){return o},vC:function(){return a}});var r=t(93433);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return[].concat((0,r.Z)(e),[n])}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return e.id!==n}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return!n.includes(e.id)}))}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.map((function(e){return e.id===n.id?n:e}))}}}]);
//# sourceMappingURL=374.5522f4d4.chunk.js.map