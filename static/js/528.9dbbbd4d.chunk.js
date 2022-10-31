"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[528],{37298:function(e,a,r){var t=r(72336),i=r(40580),n=r(95702),s=r(80184);a.Z=function(e){var a=e.children,r=(0,n.rV)().collapsed?i.E:i.R;return(0,s.jsx)(t.Z,{color:"default",position:"fixed",sx:{width:{lg:"calc(100% - ".concat(r,"px)")},marginLeft:{lg:r}},children:a})}},22446:function(e,a,r){var t=r(71217),i=r(42413),n=r(55477),s=r(68336),l=r(95702),d=r(80184);a.Z=function(e){var a=e.children,r=e.title,o=(0,l.rV)().toggleDrawer;return(0,d.jsxs)(i.Z,{sx:{px:{xs:3,sm:6}},children:[(0,d.jsx)(t.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:o,sx:{display:{lg:"none"},marginRight:2},children:(0,d.jsx)(s.Z,{})}),(0,d.jsx)(n.Z,{variant:"h2",component:"h1",sx:{flexGrow:1},children:r}),a]})}},4528:function(e,a,r){r.r(a),r.d(a,{default:function(){return he}});var t=r(89426),i=r(76082),n=r(46208),s=r(43630),l=r(72791),d=r(22020),o=r(37298),c=r(22446),x=r(46087),h=r(51233),u=r(11579),m=r(44807),j=r(19913),p=r(82165),g=r(90466),v=r(35667),Z=r(62066),b=r(80184),f=[{name:"Jan",pv:2400},{name:"Feb",pv:1398},{name:"Mar",pv:9800},{name:"Apr",pv:3908},{name:"May",pv:4800},{name:"Jun",pv:3800},{name:"Jul",pv:4300}],y=function(){var e=(0,d.$)().t,a=(0,m.Z)();return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:e("dashboard.activity.title")}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.h,{width:"99%",height:244,children:(0,b.jsxs)(p.w,{width:500,height:300,data:f,margin:{top:5,right:16,left:16,bottom:5},children:[(0,b.jsx)(g.K,{axisLine:!1,tick:{fill:a.palette.text.secondary,fontSize:12},tickLine:!1,dataKey:"name"}),(0,b.jsx)(v.u,{contentStyle:{borderRadius:16,boxShadow:a.shadows[3],backgroundColor:a.palette.background.paper,borderColor:a.palette.background.paper}}),(0,b.jsx)(Z.x,{name:"Value",type:"monotone",dataKey:"pv",stroke:a.palette.primary.main,strokeWidth:6,activeDot:{r:8}})]})})})]})},w=r(64621),k=r(87997),S=r(5618),A=[{subject:"Marketing",A:110},{subject:"Research",A:98},{subject:"Sales",A:86},{subject:"Ops",A:99},{subject:"HR",A:85},{subject:"Dev",A:65}],R=function(){var e=(0,d.$)().t,a=(0,m.Z)();return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:e("dashboard.budget.title")}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.h,{width:"99%",height:244,children:(0,b.jsxs)(w.H,{cx:"50%",cy:"50%",outerRadius:"80%",data:A,children:[(0,b.jsx)(k.I,{dataKey:"subject",tick:{fill:a.palette.text.secondary,fontSize:14}}),(0,b.jsx)(S.F,{name:e("dashboard.budget.legend.unit"),dataKey:"A",stroke:a.palette.primary.main,strokeWidth:8,fill:a.palette.primary.main}),(0,b.jsx)(v.u,{contentStyle:{borderRadius:16,boxShadow:a.shadows[3],backgroundColor:a.palette.background.paper,borderColor:a.palette.background.paper}})]})})})]})},C=r(85772),K=r(55477),W=function(e){var a=e.description,r=e.title;return(0,b.jsx)(x.Z,{children:(0,b.jsxs)(h.Z,{sx:{textAlign:"center"},children:[(0,b.jsx)(K.Z,{gutterBottom:!0,component:"div",variant:"h3",children:r}),(0,b.jsx)(K.Z,{variant:"body2",color:"textSecondary",component:"p",children:a})]})})},M=r(67405),$=r(39846),z=r(15539),B=function(e){var a=e.avatar,r=e.mb,t=void 0===r?0:r,i=e.title,n=e.value;return(0,b.jsx)(x.Z,{sx:{mb:t},children:(0,b.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(M.Z,{sx:{mr:2},children:a}),(0,b.jsxs)($.Z,{sx:{flexGrow:1},children:[(0,b.jsxs)($.Z,{sx:{display:"flex",mb:1},children:[(0,b.jsx)(K.Z,{component:"div",variant:"h6",children:i}),(0,b.jsx)($.Z,{sx:{flexGrow:1}}),(0,b.jsx)(K.Z,{component:"div",color:"textSecondary",children:"".concat(n,"%")})]}),(0,b.jsx)(z.Z,{"aria-label":"".concat(i," progress"),sx:{height:8},variant:"determinate",value:n})]})]})})},G=r(54875),I=r(40557),N=r(24296),T=function(){var e=(0,d.$)().t,a=(0,m.Z)(),r=[{name:"18-39",uv:30,fill:a.palette.text.secondary},{name:"40-59",uv:45,fill:a.palette.error.main},{name:"60-79",uv:60,fill:a.palette.warning.main},{name:"80+",uv:75,fill:a.palette.primary.main}];return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:e("dashboard.salesByAge.title")}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.h,{width:"99%",height:244,children:(0,b.jsxs)(G.B,{barGap:1,innerRadius:"15%",outerRadius:"100%",barSize:16,data:r,children:[(0,b.jsx)(k.I,{type:"number",domain:[0,100],dataKey:"value",angleAxisId:0,tick:!1}),(0,b.jsx)(I.G,{background:{fill:a.palette.background.default},cornerRadius:16,label:{position:"insideStart",fill:"#fff",fontWeight:700},dataKey:"uv"}),(0,b.jsx)(N.D,{align:"right",wrapperStyle:{fontWeight:700},iconSize:16,layout:"vertical",verticalAlign:"middle"})]})})})]})},D=r(42),F=r(21041),J=function(){var e=(0,d.$)().t,a=(0,m.Z)(),r=[{name:e("dashboard.salesByCategory.legend.books"),fill:a.palette.primary.main,value:400},{name:e("dashboard.salesByCategory.legend.movies"),fill:a.palette.warning.main,value:300},{name:e("dashboard.salesByCategory.legend.software"),fill:a.palette.error.main,value:300}];return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:e("dashboard.salesByCategory.title")}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.h,{width:"99%",height:244,children:(0,b.jsxs)(D.u,{width:244,height:244,children:[(0,b.jsx)(F.b,{dataKey:"value",isAnimationActive:!1,data:r,cx:"50%",cy:"50%",outerRadius:80,stroke:a.palette.background.paper,strokeWidth:8}),(0,b.jsx)(v.u,{contentStyle:{borderRadius:16,boxShadow:a.shadows[3],backgroundColor:a.palette.background.paper,borderColor:a.palette.background.paper},itemStyle:{color:a.palette.text.primary}}),(0,b.jsx)(N.D,{wrapperStyle:{fontSize:14}})]})})})]})},P=r(95300),H=r(38725),L=r(57702),_=function(e){var a=e.value,r=(0,d.$)().t,t=(0,m.Z)();return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:r("dashboard.salesHistory.title")}),(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(j.h,{width:"99%",height:124,children:(0,b.jsx)(H.v,{width:150,height:40,data:[{name:"Mon",uv:4e3},{name:"Tue",uv:3e3},{name:"Wed",uv:2e3},{name:"Thu",uv:2780},{name:"Fri",uv:1890},{name:"Sat",uv:2390}],margin:{right:0,left:0},children:(0,b.jsx)(L.$,{dataKey:"uv",fill:t.palette.primary.main,radius:[50,50,50,50]})})}),(0,b.jsxs)($.Z,{sx:{display:"flex",alignItems:"center",mt:3},children:[(0,b.jsxs)($.Z,{sx:{flexGrow:1},children:[(0,b.jsx)(K.Z,{variant:"h2",component:"div",marginBottom:1,children:a}),(0,b.jsx)(K.Z,{variant:"body2",color:"textSecondary",component:"div",children:r("dashboard.salesHistory.unit")})]}),(0,b.jsx)(P.Z,{sx:{color:"text.secondary"}})]})]})]})},V=r(64938),E=r(91684),O=r(86143),U=r(80045),q=r(91135),Q=r(39236),X=[{id:"1",color:"primary.main",name:"Marketing Team",progress:75,value:122},{id:"2",color:"warning.main",name:"Operations Team",progress:50,value:82},{id:"3",color:"error.main",name:"Sales Team",progress:25,value:39},{id:"4",color:"text.secondary",name:"Research Team",progress:10,value:9}],Y=function(){var e=(0,d.$)().t;return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:e("dashboard.teams.title")}),(0,b.jsx)(h.Z,{sx:{px:2},children:(0,b.jsx)(U.Z,{children:(0,b.jsxs)(V.Z,{"aria-label":"team progress table",size:"small",sx:{"& td, & th":{border:0}},children:[(0,b.jsx)(q.Z,{children:(0,b.jsxs)(Q.Z,{children:[(0,b.jsx)(O.Z,{children:e("dashboard.teams.columns.team")}),(0,b.jsx)(O.Z,{children:e("dashboard.teams.columns.progress")}),(0,b.jsx)(O.Z,{align:"center",children:e("dashboard.teams.columns.value")})]})}),(0,b.jsx)(E.Z,{children:X.map((function(e){return(0,b.jsxs)(Q.Z,{children:[(0,b.jsx)(O.Z,{children:(0,b.jsx)(K.Z,{color:"text.secondary",component:"div",children:e.name})}),(0,b.jsx)(O.Z,{children:(0,b.jsxs)($.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)($.Z,{sx:{width:"100%",mr:3},children:(0,b.jsx)(z.Z,{"aria-label":"".concat(e.name," progress"),color:"inherit",sx:{color:e.color},value:e.progress,variant:"determinate"})}),(0,b.jsx)($.Z,{sx:{minWidth:35},children:(0,b.jsx)(K.Z,{component:"span",variant:"h6",color:e.color,children:"".concat(e.progress,"%")})})]})}),(0,b.jsx)(O.Z,{align:"center",children:e.value})]},e.id)}))})]})})})]})},ee=r(71217),ae=r(68843),re=r(31628),te=r(59496),ie=r(16e3),ne=r(286),se=r(60745),le=r(3036),de=r(43504),oe=[{id:"1",firstName:"Rhys",gender:"M",lastName:"Arriaga",role:"Admin"},{id:"2",firstName:"Laura",gender:"F",lastName:"Core",role:"Member"},{id:"3",firstName:"Joshua",gender:"M",lastName:"Jagger",role:"Member"}],ce=function(){var e=(0,m.Z)(),a=(0,d.$)().t;return(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(u.Z,{title:a("dashboard.users.title")}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(ae.Z,{children:oe.map((function(a){return(0,b.jsxs)(re.ZP,{disableGutters:!0,children:[(0,b.jsx)(te.Z,{children:(0,b.jsx)(M.Z,{children:(0,b.jsx)(le.Z,{})})}),(0,b.jsx)(ne.Z,{primary:"".concat(a.lastName," ").concat(a.firstName),primaryTypographyProps:{fontWeight:e.typography.fontWeightMedium},secondary:a.role}),(0,b.jsx)(ie.Z,{children:(0,b.jsx)(ee.Z,{"aria-label":"Go to user details",component:de.rU,edge:"end",to:"/".concat("/react-gh-pages","/admin/user-management"),children:(0,b.jsx)(se.Z,{})})})]},a.id)}))})})]})},xe=[{unit:"dashboard.overview.visits",value:"20 700"},{unit:"dashboard.overview.sales",value:"$ 1 550"},{unit:"dashboard.overview.orders",value:"149"},{unit:"dashboard.overview.users",value:"657"}],he=function(){var e=(0,d.$)().t;return(0,b.jsxs)(l.Fragment,{children:[(0,b.jsx)(o.Z,{children:(0,b.jsx)(c.Z,{title:e("dashboard.title")})}),(0,b.jsxs)(t.Z,{container:!0,spacing:2,children:[xe.map((function(a,r){return(0,b.jsx)(t.Z,{item:!0,xs:6,md:3,children:(0,b.jsx)(W,{description:e(a.unit),title:a.value})},r)})),(0,b.jsx)(t.Z,{item:!0,xs:12,md:8,children:(0,b.jsx)(y,{})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:4,children:(0,b.jsx)(R,{})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:4,children:(0,b.jsx)(_,{value:567})}),(0,b.jsxs)(t.Z,{item:!0,xs:12,md:4,children:[(0,b.jsx)(B,{avatar:(0,b.jsx)(s.Z,{}),mb:2,title:e("dashboard.visitProgress.title"),value:75}),(0,b.jsx)(B,{avatar:(0,b.jsx)(n.Z,{}),mb:2,title:e("dashboard.orderProgress.title"),value:50}),(0,b.jsx)(B,{avatar:(0,b.jsx)(i.Z,{}),title:e("dashboard.salesProgress.title"),value:25})]}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:4,children:(0,b.jsx)(C.Z,{height:204,title:e("dashboard.progress.title"),value:75})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:4,children:(0,b.jsx)(ce,{})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:8,children:(0,b.jsx)(Y,{})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:4,children:(0,b.jsx)(J,{})}),(0,b.jsx)(t.Z,{item:!0,xs:12,md:8,children:(0,b.jsx)(T,{})})]})]})}},85772:function(e,a,r){var t=r(46087),i=r(51233),n=r(11579),s=r(44807),l=r(19913),d=r(54875),o=r(87997),c=r(40557),x=r(80184);a.Z=function(e){var a=e.height,r=void 0===a?120:a,h=e.title,u=e.value,m=(0,s.Z)();return(0,x.jsxs)(t.Z,{children:[(0,x.jsx)(n.Z,{title:h}),(0,x.jsx)(i.Z,{children:(0,x.jsx)(l.h,{width:"99%",height:r,children:(0,x.jsxs)(d.B,{innerRadius:"85%",outerRadius:"85%",barSize:32,data:[{fill:m.palette.primary.main,value:u}],startAngle:90,endAngle:-270,children:[(0,x.jsx)(o.I,{type:"number",domain:[0,100],dataKey:"value",angleAxisId:0,tick:!1}),(0,x.jsx)(c.G,{cornerRadius:16,label:{fill:m.palette.text.primary,fontSize:m.typography.h1.fontSize,fontWeight:m.typography.h1.fontWeight,position:"center"},background:{fill:m.palette.background.default},dataKey:"value"})]})})})]})}},40580:function(e,a,r){r.d(a,{E:function(){return t},R:function(){return i}});var t=104,i=280}}]);
//# sourceMappingURL=528.9dbbbd4d.chunk.js.map