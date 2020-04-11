(this["webpackJsonpadobe-cart"]=this["webpackJsonpadobe-cart"]||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(37),a(6)),i=a(4),s=a(2),m=a(9),u=function(e){var t=e.cartItemCount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{icon:s.e,size:"2x",color:"#fff"}),t>0&&r.a.createElement("span",{className:"badge font-weight-normal badge-danger rounded-pill position-absolute ml-n2 mt-n2 cart-icon"},t))},d=function(e){return function(t){t({type:"SET_SEARCH_QUERY",payload:e})}},p=Object(o.b)((function(e){return{query:e.searchQuery}}),null)((function(e){var t=e.query,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"bg-transparent border border-top-0 border-left-0 border-right-0 border-bottom-1 border-light",value:t,onChange:function(e){a(d(e.target.value))}}),r.a.createElement(i.a,{icon:s.d,size:"2x",color:"#fff"}))}));var E=Object(o.b)((function(e){return{cartItemCount:e.cart.length}}))((function(e){var t=e.cartItemCount;return r.a.createElement("div",{className:"row bg-primary py-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement(m.b,{to:"/"},r.a.createElement(i.a,{icon:s.g,size:"3x",color:"#fff",className:"text-warning"}))),r.a.createElement("div",{className:"col-11 text-right pt-2"},r.a.createElement(p,null),r.a.createElement(m.b,{to:"/cart",className:"mx-3"},r.a.createElement(u,{cartItemCount:t}))))})),v=a(16),f=a(17),g=a(19),h=a(20),b=[{text:"Price -- High Low",value:0},{text:"Price -- Low High",value:1},{text:"Discount",value:2}],N=[{type:"PriceRange",range:[100,1e4],subType:"MinMaxRange"}],y=function(){return e="https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d",new Promise((function(t,a){fetch(e).then((function(e){t(e.json())})).catch((function(e){a(e)}))}));var e},C=function(e,t){console.log("error",t),e({type:"SHOPPING_LIST_FETCHING",payload:!1}),e({type:"SHOPPING_LIST_FAILURE",payload:t})},O=function(){return function(e){e({type:"SHOPPING_LIST_FETCHING",payload:!0}),y().then((function(t){t.message?C(e,t.message):function(e,t){console.log("success",t),e({type:"SHOPPING_LIST_FETCHING",payload:!1}),e({type:"SHOPPING_LIST_SUCCESS",payload:t.items})}(e,t)})).catch((function(t){C(e,t.message)}))}};function I(e){return function(t){t({type:"ADD_ITEM_TO_CART",payload:e})}}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){a(t?{type:"REMOVE_ITEM_GROUP_FROM_CART",payload:e}:{type:"REMOVE_ITEM_FROM_CART",payload:e})}}var T=function(e){var t=e.item,a=e.addToCart,n=t.name,c=t.price,l=t.discount;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-fluid",src:"https://picsum.photos/200/250",alt:n})),r.a.createElement("p",null,n),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 pr-0"},r.a.createElement("span",{className:"font-weight-bold"},"\u20b9",c.actual),"   ",r.a.createElement("del",{className:"text-muted"},"\u20b9",c.display)),r.a.createElement("div",{className:"col-6 pl-0 font-weight-bold text-success text-right font"},"".concat(l,"% off"))),r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement("button",{className:"btn btn-large btn-warning rounded-pill font-weight-bold",onClick:function(){return a(t)}},"Add to Cart")))},_=function(e){var t=e.sortOptions,a=e.handleSelection,n=e.activeValue;return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav pt-2"},r.a.createElement("strong",{className:"pt-2"},"Sort by: "),t&&t.map((function(e,t){return r.a.createElement("a",{className:"nav-link ".concat(n===e.value?"active":""),key:t,onClick:function(){return a(e),!1},href:"#"},e.text)}))))},w=a(27),R=function(e){var t=e.range,a=e.min,c=e.max,l=e.onApply,o=e.onCancel,i=t[0],s=t[1],m=Object(n.useState)(a),u=Object(w.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(c),v=Object(w.a)(E,2),f=v[0],g=v[1],h=Object(n.useCallback)((function(e){var t=parseInt(e.target.value,10);t>f||p(t)}),[d,f]),b=Object(n.useCallback)((function(e){var t=parseInt(e.target.value,10);g(t<d?d:t)}),[d,f]);return r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"mb-1 pb-3"},r.a.createElement("strong",{className:"float-left "},"\u20b9",i),r.a.createElement("strong",{className:"float-right"},"\u20b9",s)),r.a.createElement("div",{className:"mt-4"},r.a.createElement("strong",null,"Min:")),r.a.createElement("div",{className:"px-2"},r.a.createElement("input",{type:"range",min:i,max:s,value:d,onChange:h,className:"w-100 mb-4"}),r.a.createElement("div",null,r.a.createElement("strong",null,"Max:")),r.a.createElement("input",{type:"range",min:i,max:s,value:f,onChange:b,className:"w-100 mb-4"})),r.a.createElement("div",{className:"font-weight-bold text-center mb-4"},"Price: \u20b9",d," - \u20b9",f),r.a.createElement("div",{className:"row text-center border"},r.a.createElement("div",{className:"col-6 border-right"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){p(t[0]),g(t[1]),o([d,f])}},"Cancel")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return l([d,f])}},"Apply"))))},x=function(e,t){var a=t.searchQuery,n=t.sort,r=e.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>-1}));return j(r,n)},P=function(e){for(var t={},a=0;a<e.length;a++){var n=e[a].name;t[n]||(t[n]={item:e[a],count:0}),t[n].count++}return Object.values(t)},j=function(e,t){return e.sort((function(e,a){var n,r;return 2!==t.value?(n=e.price.actual,r=a.price.actual,0===t.value?n-r:r-n):(n=e.discount)-(r=a.discount)}))},k=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addToCart=function(t){e.props.addToCart(t)},e.handleSort=function(t){e.props.setSortOption(t)},e.handleFilter=function(t){e.props.setPriceRange(t)},e.resetFilter=function(){e.props.setPriceRange(N[0].range)},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.props.getShpopingItems(),this.props.resetSearch()}},{key:"componentWillMount",value:function(){this.props.resetSearch()}},{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.error,c=t.loading,l=t.sort,o=t.filter,m=N[0].range,u=o.priceRange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row text-center d-md-none"},r.a.createElement("div",{className:"col-6 border-right py-2"},r.a.createElement("h4",null,r.a.createElement(i.a,{icon:s.f,className:"mr-1"}),r.a.createElement("small",null,"Sort"))),r.a.createElement("div",{className:"col-6 py-2"},r.a.createElement("h4",null,r.a.createElement(i.a,{icon:s.a,size:"xs",className:"mr-1"}),r.a.createElement("small",null,"Filter")))),r.a.createElement("div",{className:"row border-right border-bottom"},r.a.createElement("div",{className:"col-md-3 col-lg-2 d-none d-md-block"},r.a.createElement("div",{className:"mt-4"},r.a.createElement("strong",{className:"font-weight-bold"},"Filter")),r.a.createElement(R,{range:m,min:u[0],max:u[1],onApply:this.handleFilter,onCancel:this.resetFilter})),r.a.createElement("div",{className:"col-md-9 col-lg-10 h-100 bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-none d-md-block border-right py-2"},r.a.createElement(_,{sortOptions:b,activeValue:l.value,handleSelection:this.handleSort})),a&&a.map((function(t,a){return r.a.createElement("div",{className:"col-6 col-md-4 col-xl-2 border-top border-left pt-3",key:a},r.a.createElement(T,{item:t,addToCart:e.addToCart}))}))),n&&r.a.createElement("div",{className:"col-12 color-red"},n),c&&r.a.createElement("div",{className:"col-12"},c))))}}]),a}(r.a.Component),A=Object(o.b)((function(e){var t=e.shoppingList,a=t.items,n=t.error,r=t.loading,c=e.searchQuery,l=e.sort,o=e.filter;return console.log(o),{items:x(a,{searchQuery:c,sort:l}),error:n,loading:r,searchQuery:c,sort:l,filter:o}}),(function(e){return{addToCart:function(t){return e(I(t))},getShpopingItems:function(){return e(O())},resetSearch:function(){return e(d(""))},setSortOption:function(t){return e((a=t,function(e){e({type:"SET_SORT",payload:a})}));var a},setPriceRange:function(t){return e(function(e){return function(t){t({type:"SET_PRICE_RANGE_FILTER",payload:e})}}(t))}}}))(k),G=function(e){var t=e.itemGroup,a=e.onRemoveAll,n=e.onCountChange,c=t.item,l=t.count,o=c.name,m=c.price,u=c.discount,d=function(e){var a=l+e;a>0&&n(t,a)};return r.a.createElement("div",{className:"col card"},r.a.createElement("div",{className:"row py-3"},r.a.createElement("img",{className:"col-5 col-md-2 img-fluid",src:"https://picsum.photos/200/250",alt:o}),r.a.createElement("div",{className:"col-7 col-md-10"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",null,o),r.a.createElement("div",{className:"mt-1"},r.a.createElement("strong",null,"\u20b9",m.actual),"\xa0\xa0",r.a.createElement("del",{className:"text-muted"},"\u20b9",m.display),"\xa0\xa0",r.a.createElement("strong",{className:"text-success"},"".concat(u,"% off")))),r.a.createElement("div",{className:"col-md-4 mt-3"},r.a.createElement("div",{className:"input-group",style:{width:"120px"}},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",onClick:function(){return d(-1)}},r.a.createElement(i.a,{icon:s.b}))),r.a.createElement("input",{type:"text",className:"form-control text-center bg-transparent",value:l,disabled:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text cursor-pointer",onClick:function(){return d(1)}},r.a.createElement(i.a,{icon:s.c}))))),r.a.createElement("div",{className:"col-md-4 mt-4"},r.a.createElement("h5",{className:"font-weight-bold",onClick:function(){return a(c)}},"REMOVE"))))))},F=function(e){var t=e.itemGroup,a=function(e){for(var t,a=0,n=0,r=0;r<e.length;r++){var c=e[r].count,l=e[r].item;a+=l.price.actual*c,n+=l.price.display*c}return{totalDisplay:n,totalDiscount:t=n-a,amountPayable:n-t}}(t),n=a.totalDiscount,c=a.totalDisplay,l=a.amountPayable;return r.a.createElement("div",null,r.a.createElement("h5",{className:"border-bottom py-2 font-weight-bold text-muted"},"PRICE DETAILS"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Price (",t.length," item)"),r.a.createElement("div",{className:"col-6"},c)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Discount"),r.a.createElement("div",{className:"col-6"},n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Total Payable"),r.a.createElement("div",{className:"col-6"},l)))},M=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).removeItemFromCart=function(t){e.props.removeItem(t)},e.removeAll=function(t){e.props.removeGroup(t)},e.addItemToCart=function(t){e.props.addToCart(t)},e.updateCount=function(t,a){console.log(t,a),t.count<a?e.addItemToCart(t.item):t.count>a&&e.removeItemFromCart(t.item)},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=this.props.itemGroup;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},t&&t.map((function(t,a){return r.a.createElement("div",{className:"row mb-2",key:a},r.a.createElement(G,{itemGroup:t,onRemoveAll:e.removeAll,onCountChange:e.updateCount}))})),0===t.length&&r.a.createElement("div",{className:"col text-center p-4"},r.a.createElement("h2",{className:""},"No Items found!"),r.a.createElement(m.b,{to:"/"},"Keep Shopping"))),0!==t.length&&r.a.createElement("div",{className:"col-md-4"},r.a.createElement(F,{itemGroup:t}))))}}]),a}(r.a.Component),L=Object(o.b)((function(e){return{itemGroup:P(e.cart)}}),(function(e){return{addToCart:function(t){return e(I(t))},removeItem:function(t){return e(S(t))},removeGroup:function(t){return e(S(t,!0))}}}))(M),H=a(7);var D=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(m.a,null,r.a.createElement(E,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/cart"},r.a.createElement(L,null)),r.a.createElement(H.a,{path:"/"},r.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(8),U=a(31),V=a(10),z={items:[],loading:!1,error:null},W=a(21),q={priceRange:N[0].range},B=Object(Q.c)({shoppingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOPPING_LIST_SUCCESS":return Object(V.a)({},e,{items:t.payload,error:null});case"SHOPPING_LIST_FAILURE":return Object(V.a)({},e,{items:[],error:t.payload});case"SHOPPING_LIST_FETCHING":return Object(V.a)({},e,{loading:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_TO_CART":return[].concat(Object(W.a)(e),[t.payload]);case"REMOVE_ITEM_FROM_CART":var a=Object(W.a)(e),n=a.findIndex((function(e){return e.name===t.payload.name}));return a.splice(n,1),a;case"REMOVE_ITEM_GROUP_FROM_CART":return Object(W.a)(e).filter((function(e){return e.name!==t.payload.name}));default:return e}},searchQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_QUERY":return t.payload;default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT":return t.payload;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRICE_RANGE_FILTER":return Object(V.a)({},e,{priceRange:t.payload});default:return e}}}),J=Object(Q.d)(B,Object(Q.a)(U.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:J},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.07ce0f6a.chunk.js.map