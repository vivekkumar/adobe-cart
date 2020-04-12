(this["webpackJsonpadobe-cart"]=this["webpackJsonpadobe-cart"]||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(37),a(6)),i=a(4),s=a(2),m=a(9),u=function(e){var t=e.cartItemCount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{icon:s.e,size:"2x",color:"#fff"}),t>0&&r.a.createElement("span",{className:"badge font-weight-normal badge-danger rounded-pill position-absolute ml-n2 mt-n2 cart-icon"},t))},d=function(e){return function(t){t({type:"SET_SEARCH_QUERY",payload:e})}},p=Object(o.b)((function(e){return{query:e.searchQuery}}),null)((function(e){var t=e.query,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"bg-transparent border border-top-0 border-left-0 border-right-0 border-bottom-1 border-light",value:t,onChange:function(e){a(d(e.target.value))}}),r.a.createElement(i.a,{icon:s.d,size:"2x",color:"#fff"}))}));var E=Object(o.b)((function(e){return{cartItemCount:e.cart.length}}))((function(e){var t=e.cartItemCount;return r.a.createElement("div",{className:"row bg-primary py-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement(m.b,{to:"/"},r.a.createElement(i.a,{icon:s.g,size:"3x",color:"#fff",className:"text-warning"}))),r.a.createElement("div",{className:"col-11 text-right pt-2"},r.a.createElement(p,null),r.a.createElement(m.b,{to:"/cart",className:"mx-3"},r.a.createElement(u,{cartItemCount:t}))))})),f=a(17),v=a(18),h=a(20),b=a(21),g=[{text:"Price -- High Low",value:0},{text:"Price -- Low High",value:1},{text:"Discount",value:2}],N=[{type:"PriceRange",range:[100,1e4],subType:"MinMaxRange"}],y=function(){return e="https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380",new Promise((function(t,a){fetch(e).then((function(e){t(e.json())})).catch((function(e){a(e)}))}));var e},C=function(e,t){console.log("error",t),e({type:"SHOPPING_LIST_FETCHING",payload:!1}),e({type:"SHOPPING_LIST_FAILURE",payload:t})},S=function(){return function(e){e({type:"SHOPPING_LIST_FETCHING",payload:!0}),y().then((function(t){t.message?C(e,t.message):function(e,t){console.log("success",t),e({type:"SHOPPING_LIST_FETCHING",payload:!1}),e({type:"SHOPPING_LIST_SUCCESS",payload:t.items})}(e,t)})).catch((function(t){C(e,t.message)}))}};function w(e){return function(t){t({type:"ADD_ITEM_TO_CART",payload:e})}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){a(t?{type:"REMOVE_ITEM_GROUP_FROM_CART",payload:e}:{type:"REMOVE_ITEM_FROM_CART",payload:e})}}var I=function(e){var t=e.item,a=e.addToCart,n=t.name,c=t.price,l=t.discount;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-fluid",src:"https://picsum.photos/200/250",alt:n})),r.a.createElement("p",null,n),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 pr-0"},r.a.createElement("span",{className:"font-weight-bold"},"\u20b9",c.actual),"   ",r.a.createElement("del",{className:"text-muted"},"\u20b9",c.display)),r.a.createElement("div",{className:"col-6 pl-0 font-weight-bold text-success text-right font"},"".concat(l,"% off"))),r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement("button",{className:"btn btn-large btn-warning rounded-pill font-weight-bold",onClick:function(){return a(t)}},"Add to Cart")))},T=a(10),_=function(e){var t=e.sortOptions,a=e.handleSelection,c=e.onCancel,l=e.onApply,o=e.activeValue,i=t.find((function(e){return e.value===o})),s=Object(n.useState)(i),m=Object(T.a)(s,2),u=m[0],d=m[1],p=function(e){var a=t.find((function(t){return t.value===parseInt(e.target.value,10)}));d(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement("nav",{className:"nav pt-2"},r.a.createElement("strong",{className:"pt-2"},"Sort by: "),t&&t.map((function(e,t){return r.a.createElement("a",{className:"nav-link ".concat(o===e.value?"active":""),key:t,onClick:function(){return a(e),!1},href:"#"},e.text)})))),r.a.createElement("div",{className:"d-md-none"},r.a.createElement("h5",{className:"border-bottom pb-3 mb-3"},"Sort Options"),t&&t.map((function(e,t){return r.a.createElement("div",{key:t,className:"p-2"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",value:e.value,checked:e.value===u.value,onChange:p}),"\xa0\xa0",e.text))})),r.a.createElement("div",{className:"row text-center border"},r.a.createElement("div",{className:"col-6 border-right"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){c()}},"Cancel")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return l(i)}},"Apply")))))},x=function(e){var t=e.range,a=e.min,c=e.max,l=e.onApply,o=e.onCancel,i=t[0],s=t[1],m=Object(n.useState)(a),u=Object(T.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(c),f=Object(T.a)(E,2),v=f[0],h=f[1],b=Object(n.useCallback)((function(e){var t=parseInt(e.target.value,10);t>v||p(t)}),[d,v]),g=Object(n.useCallback)((function(e){var t=parseInt(e.target.value,10);h(t<d?d:t)}),[d,v]);return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"mb-1 pb-3"},r.a.createElement("strong",{className:"float-left "},"\u20b9",i),r.a.createElement("strong",{className:"float-right"},"\u20b9",s)),r.a.createElement("div",{className:"mt-4"},r.a.createElement("strong",null,"Min:")),r.a.createElement("div",{className:"px-2"},r.a.createElement("input",{type:"range",min:i,max:s,value:d,onChange:b,className:"w-100 mb-4"}),r.a.createElement("div",null,r.a.createElement("strong",null,"Max:")),r.a.createElement("input",{type:"range",min:i,max:s,value:v,onChange:g,className:"w-100 mb-4"})),r.a.createElement("div",{className:"font-weight-bold text-center mb-4"},"Price: \u20b9",d," - \u20b9",v),r.a.createElement("div",{className:"row text-center border"},r.a.createElement("div",{className:"col-6 border-right"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){p(t[0]),h(t[1]),o([d,v])}},"Cancel")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return l([d,v])}},"Apply"))))},R=function(e){var t=e.children,a=e.show,c=e.id,l=e.onHide,o=Object(n.useState)(a),i=Object(T.a)(o,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){m(a)}),[a]),r.a.createElement("div",{id:c,className:"modal d-md-none ".concat(s?"show fade d-block":"d-none"),onClick:function(e){e.target.id===c&&(m(!1),l())}},r.a.createElement("div",{className:"content mx-a w-40"},t))},M=function(e,t){var a=t.searchQuery,n=t.sort,r=t.filter,c=e.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>-1})),l=j(c,r.priceRange);return P(l,n)},j=function(e,t){return e.filter((function(e){return e.price.actual>=t[0]&&e.price.actual<=t[1]}))},k=function(e){for(var t={},a=0;a<e.length;a++){var n=e[a].name;t[n]||(t[n]={item:e[a],count:0}),t[n].count++}return Object.values(t)},P=function(e,t){return e.sort((function(e,a){var n,r;return 2!==t.value?(n=e.price.actual,r=a.price.actual,0===t.value?n-r:r-n):(n=e.discount)-(r=a.discount)}))},A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).addToCart=function(e){n.props.addToCart(e)},n.handleSort=function(e){n.props.setSortOption(e),n.handleModelHide()},n.handleFilter=function(e){n.props.setPriceRange(e),n.handleModelHide()},n.resetFilter=function(){n.props.setPriceRange(N[0].range)},n.handleModelHide=function(){n.setState({filterModalShow:!1}),n.setState({sortModalShow:!1})},n.showFilterModal=function(){n.setState({filterModalShow:!0})},n.showSortModal=function(){n.setState({sortModalShow:!0})},n.state={filterModalShow:!1,sortModalShow:!1},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.getShpopingItems(),this.props.resetSearch()}},{key:"componentWillMount",value:function(){this.props.resetSearch()}},{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.error,c=t.loading,l=t.sort,o=t.filter,m=this.state,u=m.filterModalShow,d=m.sortModalShow,p=N[0].range,E=o.priceRange;return r.a.createElement("div",{className:"min-vh-100"},r.a.createElement("div",{className:"row text-center d-md-none"},r.a.createElement("div",{className:"col-6 border-right py-2"},r.a.createElement("h4",{onClick:this.showSortModal},r.a.createElement(i.a,{icon:s.f,className:"mr-1"}),r.a.createElement("small",null,"Sort"))),r.a.createElement("div",{className:"col-6 py-2"},r.a.createElement("h4",{onClick:this.showFilterModal},r.a.createElement(i.a,{icon:s.a,size:"xs",className:"mr-1"}),r.a.createElement("small",null,"Filter")))),r.a.createElement("div",{className:"row border-right border-bottom"},r.a.createElement("div",{className:"col-md-3 col-lg-2 d-none d-md-block"},r.a.createElement("div",{className:"mt-4"},r.a.createElement("strong",{className:"font-weight-bold"},"Filter")),r.a.createElement(x,{range:p,min:E[0],max:E[1],onApply:this.handleFilter,onCancel:this.resetFilter})),r.a.createElement("div",{className:"col-md-9 col-lg-10 h-100 bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-none d-md-block border-right py-2"},r.a.createElement(_,{sortOptions:g,activeValue:l.value,handleSelection:this.handleSort})),a&&a.map((function(t,a){return r.a.createElement("div",{className:"col-6 col-md-4 col-xl-2 border-top border-left pt-3",key:a},r.a.createElement(I,{item:t,addToCart:e.addToCart}))}))),0===a.length&&!c&&r.a.createElement("h2",{className:"text-center w-100 bg-transparent"},"No items found!"),n&&r.a.createElement("div",{className:"col-12 color-red"},n),c&&r.a.createElement("div",{className:"col-12"},c)),r.a.createElement(R,{show:u,id:"modal-filter",onHide:this.handleModelHide},r.a.createElement("h5",{className:"border-bottom pb-3 mb-4"},"Filter Options"),r.a.createElement(x,{range:p,min:E[0],max:E[1],onApply:this.handleFilter,onCancel:this.handleModelHide})),r.a.createElement(R,{show:d,id:"model-sort",onHide:this.handleModelHide},r.a.createElement(_,{sortOptions:g,activeValue:l.value,handleSelection:this.handleSort,onCancel:this.handleModelHide,onApply:this.handleSort}))))}}]),a}(r.a.Component),F=Object(o.b)((function(e){var t=e.shoppingList,a=e.searchQuery,n=e.sort,r=e.filter,c=t.items,l=t.error,o=t.loading;return{items:M(c,{searchQuery:a,sort:n,filter:r}),error:l,loading:o,searchQuery:a,sort:n,filter:r}}),(function(e){return{addToCart:function(t){return e(w(t))},getShpopingItems:function(){return e(S())},resetSearch:function(){return e(d(""))},setSortOption:function(t){return e((a=t,function(e){e({type:"SET_SORT",payload:a})}));var a},setPriceRange:function(t){return e(function(e){return function(t){t({type:"SET_PRICE_RANGE_FILTER",payload:e})}}(t))}}}))(A),H=function(e){var t=e.itemGroup,a=e.onRemoveAll,n=e.onCountChange,c=t.item,l=t.count,o=c.name,m=c.price,u=c.discount,d=function(e){var a=l+e;a>0&&n(t,a)};return r.a.createElement("div",{className:"col card"},r.a.createElement("div",{className:"row py-3"},r.a.createElement("img",{className:"col-5 col-md-2 img-fluid",src:"https://picsum.photos/200/250",alt:o}),r.a.createElement("div",{className:"col-7 col-md-10"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",null,o),r.a.createElement("div",{className:"mt-1"},r.a.createElement("strong",null,"\u20b9",m.actual),"\xa0\xa0",r.a.createElement("del",{className:"text-muted"},"\u20b9",m.display),"\xa0\xa0",r.a.createElement("strong",{className:"text-success"},"".concat(u,"% off")))),r.a.createElement("div",{className:"col-md-4 mt-3"},r.a.createElement("div",{className:"input-group",style:{width:"120px"}},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",onClick:function(){return d(-1)}},r.a.createElement(i.a,{icon:s.b}))),r.a.createElement("input",{type:"text",className:"form-control text-center bg-transparent",value:l,disabled:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text cursor-pointer",onClick:function(){return d(1)}},r.a.createElement(i.a,{icon:s.c}))))),r.a.createElement("div",{className:"col-md-4 mt-4"},r.a.createElement("h5",{className:"font-weight-bold",onClick:function(){return a(c)}},"REMOVE"))))))},G=function(e){var t=e.itemGroup,a=function(e){for(var t,a=0,n=0,r=0;r<e.length;r++){var c=e[r].count,l=e[r].item;a+=l.price.actual*c,n+=l.price.display*c}return{totalDisplay:n,totalDiscount:t=n-a,amountPayable:n-t}}(t),n=a.totalDiscount,c=a.totalDisplay,l=a.amountPayable;return r.a.createElement("div",null,r.a.createElement("h5",{className:"border-bottom py-2 font-weight-bold text-muted"},"PRICE DETAILS"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Price (",t.length," item)"),r.a.createElement("div",{className:"col-6"},c)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Discount"),r.a.createElement("div",{className:"col-6"},n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},"Total Payable"),r.a.createElement("div",{className:"col-6"},l)))},L=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).removeItemFromCart=function(t){e.props.removeItem(t)},e.removeAll=function(t){e.props.removeGroup(t)},e.addItemToCart=function(t){e.props.addToCart(t)},e.updateCount=function(t,a){console.log(t,a),t.count<a?e.addItemToCart(t.item):t.count>a&&e.removeItemFromCart(t.item)},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this,t=this.props.itemGroup;return r.a.createElement("div",{className:"container mt-2 min-vh-100"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},t&&t.map((function(t,a){return r.a.createElement("div",{className:"row mb-2",key:a},r.a.createElement(H,{itemGroup:t,onRemoveAll:e.removeAll,onCountChange:e.updateCount}))})),0===t.length&&r.a.createElement("div",{className:"col text-center p-4"},r.a.createElement("h2",{className:""},"No Items found!"),r.a.createElement(m.b,{to:"/"},"Keep Shopping"))),0!==t.length&&r.a.createElement("div",{className:"col-md-4"},r.a.createElement(G,{itemGroup:t}))))}}]),a}(r.a.Component),D=Object(o.b)((function(e){return{itemGroup:k(e.cart)}}),(function(e){return{addToCart:function(t){return e(w(t))},removeItem:function(t){return e(O(t))},removeGroup:function(t){return e(O(t,!0))}}}))(L),Q=function(){return r.a.createElement("div",{className:"row text-center mt-4 p-2 bg-primary text-light"},r.a.createElement("div",{className:"col"},"\xa9Copyright"))},U=a(7);var V=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(m.a,null,r.a.createElement(E,null),r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/cart"},r.a.createElement(D,null)),r.a.createElement(U.a,{path:"/"},r.a.createElement(F,null)))),r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(8),W=a(31),q=a(11),B={items:[],loading:!1,error:null},J=a(22),Y={priceRange:N[0].range},K=Object(z.c)({shoppingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOPPING_LIST_SUCCESS":return Object(q.a)({},e,{items:t.payload,error:null});case"SHOPPING_LIST_FAILURE":return Object(q.a)({},e,{items:[],error:t.payload});case"SHOPPING_LIST_FETCHING":return Object(q.a)({},e,{loading:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_TO_CART":return[].concat(Object(J.a)(e),[t.payload]);case"REMOVE_ITEM_FROM_CART":var a=Object(J.a)(e),n=a.findIndex((function(e){return e.name===t.payload.name}));return a.splice(n,1),a;case"REMOVE_ITEM_GROUP_FROM_CART":return Object(J.a)(e).filter((function(e){return e.name!==t.payload.name}));default:return e}},searchQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_QUERY":return t.payload;default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT":return t.payload;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRICE_RANGE_FILTER":return Object(q.a)({},e,{priceRange:t.payload});default:return e}}}),$=Object(z.d)(K,Object(z.a)(W.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:$},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5b156174.chunk.js.map