(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c.n(o),a=c(7),s=c.n(a),r=(c(13),c(4)),i=c(6),d=c(8),l=c(1);var u=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),c=e[0],n=e[1],a=Object(o.useState)(""),s=Object(i.a)(a,2),u=s[0],j=s[1];return Object(o.useEffect)((function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&n(e)}),[]),Object(o.useEffect)((function(){var t=JSON.stringify(c);localStorage.setItem("todos",t)}),[c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"todo__title",children:"My to-do list"}),c.map((function(t){return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("input",{className:"todo__checkbox",type:"checkbox",onChange:function(){return function(t){var e=Object(r.a)(c).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));n(e)}(t.id)},checked:t.completed}),Object(l.jsx)("div",{className:"todo__text ".concat(t.completed?"completed":""),children:t.text}),Object(l.jsx)("button",{className:"todo__btn",onClick:function(){return function(t){var e=Object(r.a)(c).filter((function(e){return e.id!==t}));n(e)}(t.id)},children:Object(l.jsx)("i",{children:Object(l.jsx)(d.a,{className:"todo__btn__icon"})})})]},t.id)})),Object(l.jsxs)("form",{className:"todo__form",onSubmit:function(t){t.preventDefault();var e={id:1e3*Math.random(),text:u,completed:!1};n(Object(r.a)(c).concat(e)),j("")},children:[Object(l.jsx)("button",{className:"todo__form__btn",type:"submit"}),Object(l.jsx)("input",{className:"todo__form__input",type:"text",placeholder:"Add task",onChange:function(t){return j(t.target.value)},value:u})]})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9a753ae1.chunk.js.map