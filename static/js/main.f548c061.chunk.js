(this["webpackJsonpmind-salad-bar"]=this["webpackJsonpmind-salad-bar"]||[]).push([[0],{115:function(e,t,a){e.exports={bar:"ToolsBar_bar__21wrZ",multi:"ToolsBar_multi__jICmK",sortBy:"ToolsBar_sortBy__3z5lw"}},116:function(e,t,a){e.exports={active:"Salads_active__3ojxp",newBtn:"Salads_newBtn__3X1vF",items:"Salads_items__lTZ-S"}},117:function(e,t,a){e.exports={grid:"SaladForm_grid__249Ys",ingredientsLabel:"SaladForm_ingredientsLabel__1LYJ_",checkList:"SaladForm_checkList__2LaRW"}},160:function(e,t,a){e.exports={formButtons:"FormButtons_formButtons__10yIN",saveBtn:"FormButtons_saveBtn__1EZgD"}},161:function(e,t,a){e.exports={newBtn:"Ingredients_newBtn__JuKBA",items:"Ingredients_items__38DGd"}},243:function(e,t,a){e.exports={button:"DeletePopup_button__1YBw-"}},244:function(e,t,a){e.exports={item:"SaladIngredientsList_item__1Td5M"}},245:function(e,t,a){e.exports=a.p+"static/media/salad1.87450046.png"},246:function(e,t,a){e.exports=a.p+"static/media/salad2.f1c18255.png"},248:function(e,t,a){e.exports={loader:"Loader_loader__1H3_c"}},250:function(e,t,a){e.exports={topBar:"TopBar_topBar__2jtQK"}},251:function(e,t,a){e.exports={grid:"FormInfo_grid__qp6NJ"}},252:function(e,t,a){e.exports={imageColumn:"CheckListItem_imageColumn__BBamS"}},253:function(e,t,a){e.exports={form:"IngredientsForm_form__2LC4A"}},254:function(e,t,a){e.exports=a.p+"static/media/veg.49f5403f.png"},268:function(e,t,a){e.exports=a(541)},51:function(e,t,a){e.exports={grid:"Layout_grid__3spY8",firstRow:"Layout_firstRow__2blcQ",topSecondColumn:"Layout_topSecondColumn__7B2rN",topFirstColumn:"Layout_topFirstColumn__2hApE",secondRow:"Layout_secondRow__1P3r0",bottomLeftColumn:"Layout_bottomLeftColumn__aqtxU",bottom:"Layout_bottom__ARrpT"}},540:function(e,t,a){},541:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),o=a.n(c),l=a(27),i=a.n(l),u=a(110),s=a(71),m=a(19),d=a(113),f=a.n(d),p=a(9),b=a.n(p),g=a(16),v=a(8),E=a(12),h=a(33),j=a.n(h),O=a(70),_=a.n(O),w=a(31),C=a.n(w),x=a(59),k=a.n(x),y=a(44),N=a.n(y),S=a(114),I=a.n(S);var L=function(){var e=Object(n.useRef)(!1);return Object(n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),function(t,a){e.current&&t(a)}};var B=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r=L(),c=Object(n.useState)(!1),o=Object(v.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(!1),s=Object(v.a)(u,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){function n(){return(n=Object(g.a)(b.a.mark((function n(){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!l){n.next=13;break}if(n.prev=1,d(!0),c=null,!a()){n.next=8;break}return n.next=7,e();case 7:c=n.sent;case 8:c&&t();case 9:return n.prev=9,r(d,!1),r(i,!1),n.finish(9);case 13:case"end":return n.stop()}}),n,null,[[1,,9,13]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l]),[m,i.bind(null,!0)]},P=a(243),F=a.n(P),D=function(e){var t=e.children,a=e.onDelete,c=Object(n.useState)(!1),o=Object(v.a)(c,2),l=o[0],i=o[1],u=function(){return i(!1)},s=B(a,u),m=Object(v.a)(s,2),d=m[0],f=m[1];return r.a.createElement(r.a.Fragment,null,Object(n.cloneElement)(t,{onClick:function(){return i(!0)}}),r.a.createElement(I.a,{size:"mini",closeIcon:!0,open:l,onClose:u},r.a.createElement(I.a.Content,null,"Are you sure?"),r.a.createElement(I.a.Actions,null,r.a.createElement(C.a,{onClick:f,className:F.a.button,loading:d},"Delete"))))},R=a(50),T=a(85),M=a.n(T),q=function(e){var t=e.num,a=Object(R.a)(e,["num"]);return r.a.createElement(M.a,a,r.a.createElement(M.a.Value,null,t),r.a.createElement(M.a.Label,null,"Calories"))},A=a(73),z=a.n(A),J=function(e,t){var a=z.a.item,n=t||"",r=e&&!n?z.a.hover:"";return"".concat(a," ").concat(n," ").concat(r)},H=function(e){var t=e.onClick,a=e.activeClassName,n=e.onMouseEnter,c=e.onMouseLeave,o=e.image,l=e.title,i=e.description,u=e.statistic,s=e.tags,m=e.hovered,d=e.onEdit,f=e.onDelete;return r.a.createElement(j.a,{onClick:t,className:J(m,a),onMouseEnter:n,onMouseLeave:c},r.a.createElement(j.a.Image,{src:o,className:z.a.image}),r.a.createElement(j.a.Content,null,r.a.createElement(j.a.Header,null,l),i&&r.a.createElement(j.a.Description,null,i),r.a.createElement(j.a.Extra,null,r.a.createElement(q,{num:u,floated:"right"}),s.map((function(e){return r.a.createElement(N.a,{key:e},e)})))),m&&r.a.createElement("div",{className:z.a.icons},r.a.createElement(k.a,{name:"pencil",size:"large",onClick:d}),r.a.createElement(D,{onDelete:f},r.a.createElement(k.a,{name:"trash alternate",size:"large",className:z.a.deleteIcon}))))};H.defaultProps={onClick:void 0,activeClassName:null,description:null,onDelete:void 0};var Y=H,G=a(60),K=a.n(G),Z=a(68),V=a.n(Z),Q=a(244),U=a.n(Q),W=function(e){var t=e.activeSalad;return r.a.createElement(K.a,{ordered:!0},t.ingredients.map((function(e){var t=e.id,a=e.name,n=e.calories,c=e.image,o=e.tags;return r.a.createElement(K.a.Item,{key:t,className:U.a.item},r.a.createElement(V.a,{avatar:!0,src:c}),r.a.createElement(K.a.Content,null,r.a.createElement(K.a.Header,null,a),r.a.createElement(K.a.Description,null,o.map((function(e){return r.a.createElement(N.a,{key:e,size:"mini"},e)})))),r.a.createElement(K.a.Content,null,r.a.createElement(q,{num:n,size:"mini"})))})))},X=a(153),$=a.n(X),ee=a(112),te=a.n(ee),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=Object(n.useState)(e),r=Object(v.a)(a,2),c=r[0],o=r[1];Object(n.useEffect)((function(){[null,void 0].includes(t)||o(t)}),[t]);var l=function(e,t){var a=t.value;return o(a)};return[c,l,o]},ne="asc",re=a(115),ce=a.n(re),oe=function(e){var t=e.data,a=e.storeFilteredData,c=e.filterFn,o=ae(),l=Object(v.a)(o,2),i=l[0],u=l[1],s=ae(),m=Object(v.a)(s,2),d=m[0],f=m[1],p=Object(n.useMemo)((function(){var e=[];return t&&t.length&&(e=t.reduce((function(e,t){return e.concat(t.tags)}),[])),Object(E.uniq)(e)}),[t]),b=ae("calories"),g=Object(v.a)(b,2),h=g[0],j=g[1],O=Object(n.useState)("desc"),_=Object(v.a)(O,2),w=_[0],x=_[1];Object(n.useEffect)((function(){a(t)}),[t]),Object(n.useEffect)((function(){t&&t.length&&a(c(t,{searchTerm:i,tagFilter:d,filterBy:h,sortType:w}))}),[i,d,h,w]);return r.a.createElement("div",{className:ce.a.bar},r.a.createElement($.a,{placeholder:"Search by name...",icon:"search",value:i,onChange:u}),r.a.createElement(te.a,{placeholder:"Filter by tag...",selection:!0,options:p.map((function(e){return{key:e,text:e,value:e}})),value:d,onChange:f,disabled:!p.length,clearable:!0}),r.a.createElement("div",{className:ce.a.multi},r.a.createElement("div",{className:ce.a.sortBy},"Sort by"),r.a.createElement(te.a,{inline:!0,options:[{key:"calories",text:"calories",value:"calories"},{key:"name",text:"name",value:"name"}],value:h,onChange:j}),r.a.createElement(C.a,{icon:"sort ".concat("calories"===h?"numeric":"alphabet"," ").concat(w===ne?"down":"up"),circular:!0,onClick:function(){return x("desc"===w?ne:"desc")}})))};oe.defaultProps={data:null};var le=oe,ie=function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://5fca00983c1c220016441782.mockapi.io/api/v1/salads");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("https://5fca00983c1c220016441782.mockapi.io/api/v1/salads",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=Object(R.a)(t,["id"]),e.next=3,i.a.put("https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/".concat(a),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=a(10),pe=a.n(fe),be=a(51),ge=a.n(be),ve=function(e){var t=e.title,a=e.tools,n=e.bottomLeft,c=e.bottomRight,o=e.bottom;return r.a.createElement(pe.a,{celled:!0,className:ge.a.grid},r.a.createElement(pe.a.Row,{className:ge.a.firstRow},r.a.createElement(pe.a.Column,{width:11,className:ge.a.topFirstColumn},t),r.a.createElement(pe.a.Column,{width:16,className:ge.a.topSecondColumn},a)),r.a.createElement(pe.a.Row,{className:ge.a.secondRow},o?r.a.createElement(pe.a.Column,{className:ge.a.bottom},o):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a.Column,{width:11,className:ge.a.bottomLeftColumn},n),r.a.createElement(pe.a.Column,{width:5},c))))};ve.defaultProps={bottomLeft:null,bottomRight:null,bottom:null,tools:null};var Ee=ve,he=a(245),je=a.n(he),Oe=a(246),_e=a.n(Oe),we=a(116),Ce=a.n(we),xe=function(e){return e.reduce((function(e,t){return e+t.calories}),0)},ke=function(e,t){var a=t.searchTerm,n=t.tagFilter,r=t.filterBy,c=t.sortType;return e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).filter((function(e){var t=e.tags;return!n||t.includes(n)})).sort((function(e,t){var a=0;if("calories"===r){var n=xe(e.ingredients),o=xe(t.ingredients);a=c===ne?n-o:o-n}else{var l=e.name.toLowerCase(),i=t.name.toLowerCase();a=c===ne?l.localeCompare(i):i.localeCompare(l)}return a}))};var ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=L(),r=Object(n.useState)(!t),c=Object(v.a)(r,2),o=c[0],l=c[1],i=Object(n.useState)(null),u=Object(v.a)(i,2),s=u[0],d=u[1],f=Object(n.useState)(!0),p=Object(v.a)(f,2),h=p[0],j=p[1],O=Object(n.useState)(!t),_=Object(v.a)(O,2),w=_[0],C=_[1],x=Object(m.g)(),k=function(e){a(j,!!e),a(l,!0)};return Object(n.useEffect)((function(){function t(){return(t=Object(g.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=17;break}return t.prev=1,h&&C(!0),t.next=5,e();case 5:n=t.sent,a(d,n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),404===Object(E.get)(t.t0,"response.status")&&x.push("/salads");case 12:return t.prev=12,a(C,!1),a(l,!1),a(j,!0),t.finish(12);case 17:case"end":return t.stop()}}),t,null,[[1,9,12,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[o]),[s,w,k,d]};var Ne=function(){var e=Object(n.useState)(null),t=Object(v.a)(e,2),a=t[0],r=t[1];return[a,function(e){return function(){return r(e)}},function(){return r(null)}]},Se=a(152),Ie=a.n(Se),Le=a(249),Be=a.n(Le),Pe=a(248),Fe=a.n(Pe),De=function(){return r.a.createElement(Ie.a,{active:!0,inverted:!0},r.a.createElement(Be.a,{size:"large",className:Fe.a.loader}))},Re=a(46),Te=a.n(Re),Me=function(e){var t=e.filteredData,a=e.data,n=e.itemName;return r.a.createElement(r.a.Fragment,null,!Object(E.get)(a,"length")&&r.a.createElement(Te.a,null,"Create new ".concat(n.toLowerCase())),0===t.length&&Object(E.get)(a,"length")>0&&r.a.createElement(Te.a,null,"No results found"))};Me.defaultProps={data:null};var qe=Me,Ae=a(250),ze=a.n(Ae),Je=function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:ze.a.topBar},t,a)},He=function(e){var t=e.history,a=ye(ie),c=Object(v.a)(a,3),o=c[0],l=c[1],i=c[2],u=Object(n.useState)(null),s=Object(v.a)(u,2),m=s[0],d=s[1],f=Object(n.useMemo)((function(){return Object(E.find)(o,["id",m])}),[m]),p=Object(n.useState)(o||[]),h=Object(v.a)(p,2),O=h[0],w=h[1],x=Ne(),k=Object(v.a)(x,3),y=k[0],N=k[1],S=k[2];Object(n.useEffect)((function(){Object(E.find)(O,["id",m])||d(null)}),[O]);var I=function(e){return function(){return d(m===e?null:e)}},L=function(e){return function(){return t.push("/salads/".concat(e))}},B=function(e){return Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:t.sent&&i();case 4:case"end":return t.stop()}}),t)})))};return r.a.createElement(Ee,{title:"SALADS",tools:r.a.createElement(Je,{left:r.a.createElement("div",{className:Ce.a.newBtn},r.a.createElement(C.a,{icon:"add",label:{basic:!0,content:"New salad"},labelPosition:"right",onClick:function(){return t.push("/salads/new")}})),right:r.a.createElement(le,{data:o,storeFilteredData:w,filterFn:ke})}),bottomLeft:l?r.a.createElement(De,null):r.a.createElement("div",{className:Ce.a.items},O&&O.length?r.a.createElement(j.a.Group,{divided:!0},O.map((function(e,t){var a=e.id,n=e.name,c=e.ingredients,o=e.tags;return r.a.createElement(Y,{key:a,title:n,tags:o,onClick:I(a),activeClassName:m===a?Ce.a.active:"",onMouseEnter:N(a),onMouseLeave:S,image:[je.a,_e.a][t%2],description:c.length?"Ingredients: ".concat(c.map((function(e){return e.name})).join(", ")):"No ingredients",statistic:c.reduce((function(e,t){return e+t.calories}),0),hovered:y===a,onEdit:L(a),onDelete:B(a)})}))):r.a.createElement(qe,{filteredData:O,data:o,itemName:"salad"})),bottomRight:f&&r.a.createElement("div",null,r.a.createElement(_.a,null,f.name),f.ingredients.length?r.a.createElement(W,{activeSalad:f}):r.a.createElement("div",null,"No ingredients"))})},Ye=a(28),Ge=a.n(Ye),Ke=function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(g.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),We=a(256),Xe=a(72),$e=function(e,t){return Object(E.find)(t,["id",e])};var et=function(e,t){var a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],o=r[1];Object(n.useEffect)((function(){t&&o(t)}),[t]);var l=function(e){return!!$e(e,c)};return[c,l,function(t){return function(){var a=Object(Xe.a)(c.map((function(e){return Object(We.a)({},e)}))),n=$e(t,e);l(t)?Object(E.remove)(a,(function(e){return e.id===t})):a.push(n),o(a)}}]},tt=function(e,t){var a=t.searchTerm,n=t.tagFilter,r=t.filterBy,c=t.sortType;return e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).filter((function(e){var t=e.tags;return!n||t.includes(n)})).sort((function(e,t){var a=0;if("calories"===r)a=c===ne?e.calories-t.calories:t.calories-e.calories;else{var n=e.name.toLowerCase(),o=t.name.toLowerCase();a=c===ne?n.localeCompare(o):o.localeCompare(n)}return a}))},at=a(160),nt=a.n(at),rt=function(e){var t=e.backBtnText,a=e.onBack,n=e.onSave,c=e.saving,o=e.saveDisabled;return r.a.createElement("div",{className:nt.a.formButtons},r.a.createElement(C.a,{icon:"arrow left",label:{basic:!0,content:t},labelPosition:"right",onClick:a}),r.a.createElement(C.a,{icon:"save outline",disabled:o,label:{basic:!0,content:"Save"},onClick:n,loading:c,labelPosition:"left",className:nt.a.saveBtn}))},ct=a(251),ot=a.n(ct),lt=function(e){var t=e.infoPieces;return r.a.createElement(pe.a,{columns:1,className:ot.a.grid},t.map((function(e){return r.a.createElement(pe.a.Row,{key:e.textParts.join()},r.a.createElement(pe.a.Column,null,r.a.createElement(Te.a,{basic:!0},e.textParts.map((function(t,a){var c=t;return a===e.accentPart&&(c=r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",null,t)," ")),r.a.createElement(n.Fragment,{key:t},c)})))))})))},it=a(154),ut=a.n(it),st=a(252),mt=a.n(st),dt=function(e){var t=e.checkboxDisabled,a=e.checked,n=e.onChange,c=e.image,o=e.name,l=e.tags,i=e.calories;return r.a.createElement(Te.a,null,r.a.createElement(pe.a,{columns:"equal"},r.a.createElement(pe.a.Column,{width:1,textAlign:"center",verticalAlign:"middle"},r.a.createElement(ut.a,{disabled:t,checked:a,onChange:n})),r.a.createElement(pe.a.Column,{width:1,className:mt.a.imageColumn},r.a.createElement(V.a,{src:c,rounded:!0})),r.a.createElement(pe.a.Column,null,r.a.createElement(pe.a.Row,null,r.a.createElement(_.a,null,o)),r.a.createElement(pe.a.Row,null,l.map((function(e){return r.a.createElement(N.a,{key:e},e)})))),r.a.createElement(pe.a.Column,{textAlign:"right",verticalAlign:"middle"},r.a.createElement(q,{size:"mini",num:i}))))};dt.defaultProps={checkboxDisabled:!1};var ft=dt,pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=Object(n.useState)(t),c=Object(v.a)(r,2),o=c[0],l=c[1],i=Object(n.useState)(e),u=Object(v.a)(i,2),s=u[0],m=u[1];Object(n.useEffect)((function(){[null,void 0].includes(a)||(l([].concat(Object(Xe.a)(a.map((function(e){return{key:e,value:e,text:e}}))),Object(Xe.a)(o))),m(a))}),[a]);var d=function(e,t){var a=t.value;return l([{text:a,value:a}].concat(Object(Xe.a)(o)))},f=function(e,t){var a=t.value;return m(a)};return[s,f,o,d]};var bt=function(e,t){var a=Object(n.useState)(!1),r=Object(v.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){o(Object(E.isEqual)(t,e))}),[t,e]),c},gt=a(255);var vt=function(e){var t=Object(n.useState)({}),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(gt.a)((function(){Object(E.isEmpty)(r)||c({})}),[e]),[r,function(){var t=!0,a={};return Object.keys(e).forEach((function(n){e[n]||(a[n]=!0,t=!1)})),c(a),t}]},Et=a(117),ht=a.n(Et),jt=function(e){var t=e.history,a=e.mode,c=e.data,o=e.loading,l=ye(Ke),i=Object(v.a)(l,2),u=i[0],s=i[1],m=Object(n.useState)(u||[]),d=Object(v.a)(m,2),f=d[0],p=d[1],h=ae("",Object(E.get)(c,"name")),j=Object(v.a)(h,2),O=j[0],_=j[1],w=pt([],[{key:"1",text:"gluten-free",value:"gluten-free"}],Object(E.get)(c,"tags")),C=Object(v.a)(w,4),x=C[0],k=C[1],y=C[2],N=C[3],S=et(u,Object(E.get)(c,"ingredients")),I=Object(v.a)(S,3),L=I[0],P=I[1],F=I[2],D=bt({name:Object(E.get)(c,"name",""),tags:Object(E.get)(c,"tags",[]),ingredients:Object(E.get)(c,"ingredients",[])},{name:O,tags:x,ingredients:L}),R=vt({name:O}),T=Object(v.a)(R,2),M=T[0],q=T[1],A=function(){return t.push("/salads")},z=B(Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se({name:O,tags:x,ingredients:L}));case 1:case"end":return e.stop()}}),e)}))),A,q),J=Object(v.a)(z,2),H=J[0],Y=J[1],G=B(Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me({id:c.id,name:O,tags:x,ingredients:L}));case 1:case"end":return e.stop()}}),e)}))),A,q),K=Object(v.a)(G,2),Z=K[0],V=K[1],Q=function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","edit"===a?V():Y());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Ee,{title:"create"===a?"New salad":"Edit salad",tools:r.a.createElement(rt,{backBtnText:"Salads",onBack:A,onSave:Q,saving:H||Z,saveDisabled:D}),bottomRight:r.a.createElement(lt,{infoPieces:[{accentPart:1,textParts:["Multiple","name","is required. It doesn't have to be unique. It's required"]},{accentPart:1,textParts:["Multiple custom","tags","can be added and/or removed. Salads can be filtered by them. They are not required."]},{accentPart:0,textParts:["Ingrediens","can be added by clicking on a checkbox. They can be removed by unchecking. They are not required."]}]}),bottomLeft:r.a.createElement(pe.a,{columns:1,className:ht.a.grid},r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Input,{label:"Name",required:!0,value:O,onChange:_,loading:o,disabled:o,error:M.name})))),r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Select,{loading:o,disabled:o,label:"Tags",value:x,options:y,search:!0,selection:!0,multiple:!0,allowAdditions:!0,onAddItem:N,onChange:k})))),r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Je,{left:r.a.createElement("div",{className:ht.a.ingredientsLabel},"Ingredients"),right:r.a.createElement(le,{data:u,storeFilteredData:p,filterFn:tt})}),r.a.createElement(Te.a.Group,{className:ht.a.checkList},s?r.a.createElement(De,null):r.a.createElement(r.a.Fragment,null,f.length?f.map((function(e){var t=e.id,a=e.name,n=e.image,c=e.tags,l=e.calories;return r.a.createElement(ft,{key:t,checkboxDisabled:o,checked:P(t),onChange:F(t),image:n,name:a,tags:c,calories:l})})):r.a.createElement(qe,{filteredData:f,data:Object(E.get)(c,"ingredients",[]),itemName:"ingredient"}))))))})};jt.defaultProps={data:null,loading:null};var Ot=jt,_t=function(e){return r.a.createElement(Ot,Object.assign({mode:"create"},e))},wt=function(e){var t=e.match,a=Object(R.a)(e,["match"]),n=ye(ue.bind(null,t.params.id)),c=Object(v.a)(n,2),o=c[0],l=c[1];return r.a.createElement(Ot,Object.assign({mode:"edit",loading:l,data:o},a))},Ct=a(161),xt=a.n(Ct),kt=function(e){var t=e.history,a=ye(Ke),c=Object(v.a)(a,3),o=c[0],l=c[1],i=c[2],u=Object(n.useState)(o||[]),s=Object(v.a)(u,2),m=s[0],d=s[1],f=Ne(),p=Object(v.a)(f,3),E=p[0],h=p[1],O=p[2],_=function(e){return function(){return t.push("/ingredients/".concat(e))}},w=function(e){return Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ue(e);case 2:t.sent&&i();case 4:case"end":return t.stop()}}),t)})))};return r.a.createElement(Ee,{title:"Ingredients",tools:r.a.createElement(Je,{left:r.a.createElement("div",{className:xt.a.newBtn},r.a.createElement(C.a,{icon:"add",label:{basic:!0,content:"New ingredient"},labelPosition:"right",onClick:function(){return t.push("/ingredients/new")}})),right:r.a.createElement(le,{data:o,storeFilteredData:d,filterFn:tt})}),bottom:l?r.a.createElement(De,null):r.a.createElement("div",{className:xt.a.items},m&&m.length?r.a.createElement(j.a.Group,{divided:!0},m.map((function(e){var t=e.id,a=e.name,n=e.image,c=e.tags,o=e.calories;return r.a.createElement(Y,{key:t,onMouseEnter:h(t),onMouseLeave:O,image:n,title:a,statistic:o,tags:c,hovered:E===t,onEdit:_(t),onDelete:w(t)})}))):r.a.createElement(qe,{filteredData:m,data:o,itemName:"ingredient"}))})},yt=a(253),Nt=a.n(yt),St=function(e){var t=e.history,a=e.mode,n=e.data,c=e.loading,o=ae("",Object(E.get)(n,"name")),l=Object(v.a)(o,2),i=l[0],u=l[1],s=pt([],[{key:"1",text:"gluten-free",value:"gluten-free"}],Object(E.get)(n,"tags")),m=Object(v.a)(s,4),d=m[0],f=m[1],p=m[2],h=m[3],j=ae("",Object(E.get)(n,"image")),O=Object(v.a)(j,2),_=O[0],w=O[1],C=ae("",Object(E.get)(n,"calories")),x=Object(v.a)(C,2),k=x[0],y=x[1],N=vt({name:i,image:_,calories:k}),S=Object(v.a)(N,2),I=S[0],L=S[1],P=bt({name:Object(E.get)(n,"name",""),tags:Object(E.get)(n,"tags",[]),image:Object(E.get)(n,"image",""),calories:Object(E.get)(n,"calories","")},{name:i,tags:d,image:_,calories:parseInt(k,10)||0===parseInt(k,10)?parseInt(k,10):""}),F=function(){return t.push("/ingredients")},D=B(Object(g.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,r={name:i,tags:d,image:_,calories:parseInt(k,10)},"edit"!==a||!n){e.next=8;break}return e.next=5,Qe(n.id,r);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Ve(r);case 10:t=e.sent;case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)}))),F,L),R=Object(v.a)(D,2),T=R[0],M=R[1];return r.a.createElement(Ee,{title:"create"===a?"New ingredient":"Edit ingredient",tools:r.a.createElement(rt,{backBtnText:"Ingredients",onBack:F,onSave:M,saving:T,saveDisabled:P}),bottomRight:r.a.createElement(lt,{infoPieces:[{accentPart:1,textParts:["Ingredient","name","is required. It doesn't have to be unique. It's required"]},{accentPart:1,textParts:["Multiple custom","tags","can be added and/or removed. Ingredients can be filtered by them. They are not required."]},{accentPart:1,textParts:["Link to the ingredient","image","is required."]},{accentPart:1,textParts:["Ingredient","calories","is required. Only numbers are acceptable."]}]}),bottomLeft:r.a.createElement(pe.a,{columns:1,className:Nt.a.form},r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Input,{label:"Name",required:!0,value:i,onChange:u,loading:c,disabled:c,error:I.name})))),r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Select,{loading:c,disabled:c,label:"Tags",value:d,options:p,search:!0,selection:!0,multiple:!0,allowAdditions:!0,onAddItem:h,onChange:f})))),r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Input,{required:!0,label:"Image (link)",value:_,onChange:w,loading:c,disabled:c,error:I.image})))),r.a.createElement(pe.a.Row,null,r.a.createElement(pe.a.Column,null,r.a.createElement(Ge.a,null,r.a.createElement(Ge.a.Input,{required:!0,label:"Calories",type:"number",value:k,onChange:y,loading:c,disabled:c,error:I.calories})))))})};St.defaultProps={data:null,loading:null};var It=St,Lt=function(e){return r.a.createElement(It,Object.assign({mode:"create"},e))},Bt=function(e){var t=e.match,a=Object(R.a)(e,["match"]),n=ye(Ze.bind(null,t.params.id)),c=Object(v.a)(n,2),o=c[0],l=c[1];return r.a.createElement(It,Object.assign({mode:"edit",loading:l,data:o},a))},Pt=a(75),Ft=a.n(Pt),Dt=a(254),Rt=a.n(Dt),Tt=a(74),Mt=a.n(Tt),qt=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundImage:"url(".concat(Rt.a,")")},className:Mt.a.topTapeImage}),r.a.createElement(f.a,null,r.a.createElement(Ft.a,{secondary:!0,className:Mt.a.menubar},r.a.createElement(Ft.a.Item,null,r.a.createElement(_.a,{as:"h3"},r.a.createElement("span",{className:Mt.a.firstColor},"Mind"),r.a.createElement("span",{className:Mt.a.secondColor},"salad"),r.a.createElement("span",{className:Mt.a.thirdColor},"bar"))),r.a.createElement(Ft.a.Menu,{position:"right"},r.a.createElement(Ft.a.Item,{as:s.b,to:"/salads"},"Salads"),r.a.createElement(Ft.a.Item,{as:s.b,to:"/ingredients"},"Ingredients")))))},At=function(){return r.a.createElement(s.a,null,r.a.createElement(qt,null),r.a.createElement("main",null,r.a.createElement(f.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/salads/new",component:_t}),r.a.createElement(m.b,{exact:!0,path:"/salads/:id",component:wt}),r.a.createElement(m.b,{exact:!0,path:"/salads",component:He}),r.a.createElement(m.b,{exact:!0,path:"/ingredients/new",component:Lt}),r.a.createElement(m.b,{exact:!0,path:"/ingredients/:id",component:Bt}),r.a.createElement(m.b,{exact:!0,path:"/ingredients",component:kt}),r.a.createElement(m.a,{from:"/",to:"/salads"})))))},zt=function(){var e=Object(n.useRef)(!1),t=Object(n.useState)(null),a=Object(v.a)(t,2),r=a[0],c=a[1],o=function(){e.current=!1,c(null)};Object(n.useEffect)((function(){r&&!e.current&&(e.current=!0,Object(u.toast)(function(e){switch(e){case"error":return{type:"error",title:"Error",description:"Unknown server error",animation:"fly left",time:0,onClose:o};case"create":return{type:"success",title:"Success",description:"Successfully added",animation:"fly right",time:2e3,onClose:o};case"edit":return{type:"success",title:"Success",description:"Successfully updated",animation:"fly right",time:2e3,onClose:o};case"not-found":return{type:"error",title:"Not found",description:"Page not found",animation:"fly right",time:2e3,onClose:o};default:return null}}(r)),c(null))}),[r]);return function(e){return c(e)}},Jt=(a(538),function(){var e=zt();return Object(n.useEffect)((function(){i.a.interceptors.response.use((function(t){return"put"===t.config.method&&200===t.status&&e("edit"),201===t.status&&e("create"),t}),(function(){return e("error")}))}),[]),r.a.createElement("div",null,r.a.createElement(At,null),r.a.createElement(u.SemanticToastContainer,{position:"bottom-left"}))});a(539),a(540);o.a.render(r.a.createElement(Jt,null),document.getElementById("root"))},73:function(e,t,a){e.exports={hover:"ListItem_hover__17vtS",image:"ListItem_image__V61bt",item:"ListItem_item__3Or1b",icons:"ListItem_icons__3prku",deleteIcon:"ListItem_deleteIcon__iKOhj"}},74:function(e,t,a){e.exports={menubar:"MenuBar_menubar__1YbMF",topTapeImage:"MenuBar_topTapeImage__mSvVH",firstColor:"MenuBar_firstColor__3ZE-c",secondColor:"MenuBar_secondColor__JJnH8",thirdColor:"MenuBar_thirdColor__W1pwl"}}},[[268,1,2]]]);
//# sourceMappingURL=main.f548c061.chunk.js.map