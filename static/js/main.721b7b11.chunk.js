(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c,r=n(11),s=n.n(r),a=n(6),o=n(18),u=n(10),i=n(5),l=n(15);!function(e){e.SET_TODOS="SET_TODOS",e.ADD_TODO="ADD_TODO",e.SET_USER="SET_USER"}(c||(c={}));var d=function(e){return{type:c.SET_TODOS,payload:e}},j=function(e){return{type:c.SET_USER,payload:e}},b={todos:[],user:null},p=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_TODOS:return Object(i.a)(Object(i.a)({},e),{},{todos:Object(u.a)(t.payload)});case c.ADD_TODO:return Object(i.a)(Object(i.a)({},e),{},{todos:[].concat(Object(u.a)(e.todos),[t.payload])});case c.SET_USER:return Object(i.a)(Object(i.a)({},e),{},{user:t.payload});default:return e}})),O=(n(26),n(7)),f=n(4),h=n(3),x=n.n(h),m=(n(28),n(16)),v=n.n(m),_=n(0),T=n(17),y="https://mate.academy/students-api",S=function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/todos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"/users/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(y,"/todos/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return e.todos},w=function(e){return e.user},D=n(1),C=function(){var e=Object(_.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(_.useState)(""),s=Object(f.a)(r,2),o=s[0],i=s[1],l=Object(_.useState)("all"),b=Object(f.a)(l,2),p=b[0],h=b[1],m=Object(a.b)(),y=Object(a.c)(E);console.log("render TodoList"),Object(_.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,m(d(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w,C,g=(w=y,"completed"===(C=p)?w.filter((function(e){return e.completed})):"active"===C?w.filter((function(e){return!e.completed})):w),L=Object(_.useCallback)(Object(T.debounce)(i,1e3),[]),U=Object(_.useMemo)((function(){return console.log("filtering todos",o),g.filter((function(e){return e.title.includes(o)}))}),[g,o]),A=function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.id);case 2:return e.next=4,S();case 4:n=e.sent,m(d(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:n=e.sent,m(j(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{className:"TodoList",children:[Object(D.jsx)("h2",{children:"Todos:"}),Object(D.jsxs)("div",{className:"TodoList__list-container",children:[Object(D.jsx)("input",{type:"text",placeholder:"filter todos",value:n,onChange:function(e){L(e.target.value),c(e.target.value)},"data-cy":"filterByTitle"}),Object(D.jsxs)("select",{value:p,onChange:function(e){h(e.target.value)},children:[Object(D.jsx)("option",{value:"all",children:"All"}),Object(D.jsx)("option",{value:"active",children:"Active"}),Object(D.jsx)("option",{value:"completed",children:"Completed"})]}),Object(D.jsx)("button",{type:"button",className:"button",onClick:function(){m(d(Object(u.a)(y).map((function(e){return{todo:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.todo}))))},children:"Random"}),Object(D.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:U.map((function(e){return Object(D.jsxs)("li",{className:v()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(D.jsxs)("label",{children:[Object(D.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(D.jsx)("p",{children:e.title})]}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsxs)("button",{type:"button",onClick:function(){R(e.userId)},className:"button TodoList__user-button TodoList__user-button--selected","data-cy":"userButton",children:["User\xa0#",e.userId]}),Object(D.jsx)("button",{type:"button",onClick:function(){A(e)},className:"button TodoList__user-button TodoList__delete-button--selected",children:"Delete"})]})]},e.id)}))})]})]})},g=(n(32),function(){var e=Object(a.c)(w),t=Object(a.b)();return Object(D.jsx)("div",{className:"CurrentUser",children:e?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{className:"CurrentUser__title",children:Object(D.jsxs)("span",{children:["Selected user:",e.id]})}),Object(D.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:e.name}),Object(D.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(D.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(D.jsx)("button",{type:"button",className:"button",onClick:function(){t(j(null))},children:"Clear"})]}):"User is not found"})}),L=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("div",{className:"App__sidebar",children:Object(D.jsx)(C,{})}),Object(D.jsx)("div",{className:"App__content",children:Object(D.jsx)("div",{className:"App__content-container",children:Object(D.jsx)(g,{})})})]})},U=function(){return Object(D.jsx)(a.a,{store:p,children:Object(D.jsx)(o.a,{children:Object(D.jsx)(L,{})})})};s.a.render(Object(D.jsx)(U,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.721b7b11.chunk.js.map