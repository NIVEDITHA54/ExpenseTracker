(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(8),l=a.n(n),r=(a(16),a(17),a(2)),i=a(6),d=a(3),j=a(20),b=a(0),o=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(d.a)(Object(d.a)({},e),{},{expenses:[].concat(Object(i.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(d.a)(Object(d.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"SET_BUDGET":return Object(d.a)(Object(d.a)({},e),{},{budget:t.payload});default:return e}},u={budget:2e3,expenses:[{id:Object(j.a)(),name:"Shopping",cost:50,date:new Date(2020,7,14)},{id:Object(j.a)(),name:"Holiday",cost:300,date:new Date(2021,4,14)},{id:Object(j.a)(),name:"Transportation",cost:70,date:new Date(2020,9,18)},{id:Object(j.a)(),name:"Fuel",cost:40,date:new Date(2021,9,10)},{id:Object(j.a)(),name:"Child Care",cost:500,date:new Date(2019,8,10)}]},x=Object(c.createContext)(),m=function(e){var t=Object(c.useReducer)(o,u),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(b.jsx)(x.Provider,{value:{expenses:s.expenses,budget:s.budget,dispatch:n},children:e.children})},O=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:"fw-bold",children:["Budget: \xa3",e.budget]}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:e.handleEditClick,children:"Edit"})]})},h=function(e){var t=Object(c.useState)(e.budget),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{required:"required",type:"number",className:"form-control mr-3",id:"name",value:s,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.handleSaveClick(s)},children:"Save"})]})},v=function(){var e=Object(c.useContext)(x),t=e.budget,a=e.dispatch,s=Object(c.useState)(!1),n=Object(r.a)(s,2),l=n[0],i=n[1];return Object(b.jsx)("div",{className:"alert alert-secondary p-3 d-flex align-items-center justify-content-between",children:l?Object(b.jsx)(h,{handleSaveClick:function(e){a({type:"SET_BUDGET",payload:e}),i(!1)},budget:t}):Object(b.jsx)(O,{handleEditClick:function(){i(!0)},budget:t})})},p=function(){var e=Object(c.useContext)(x).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(b.jsx)("div",{className:"alert alert-primary p-4",children:Object(b.jsxs)("span",{className:"fw-bold",children:["Total Expense: \xa3",e]})})},f=a(9),N=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(b.jsxs)("div",{className:"chart-bar",children:[Object(b.jsx)("div",{className:"chart-bar__inner",children:Object(b.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(b.jsx)("div",{className:"chart-bar__label",children:e.label})]})},g=function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(i.a)(t));return Object(b.jsx)("div",{className:"chart bg-light text-dark",children:e.dataPoints.map((function(e){return Object(b.jsx)(N,{value:e.value,maxValue:a,label:e.label},e.label)}))})},y=function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(f.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var s=t.value;a[s.date.getMonth()].value+=s.cost}}catch(n){c.e(n)}finally{c.f()}return Object(b.jsx)(g,{dataPoints:a})},E=a(10),w=function(e){var t=e.date.toLocaleString(void 0,{month:"long"}),a=e.date.toLocaleString(void 0,{day:"2-digit"}),c=e.date.getFullYear();return Object(b.jsxs)("div",{className:"expense-date",children:[Object(b.jsx)("div",{className:"expense-date__month",children:t}),Object(b.jsx)("div",{className:"expense-date__year",children:c}),Object(b.jsx)("div",{className:"expense-date__day",children:a})]})},C=function(e){var t=Object(c.useContext)(x).dispatch;return Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center fw-bold",children:[Object(b.jsx)(w,{date:e.date}),e.name,Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{className:"badge rounded-pill bg-danger mr-5 p-2",children:["$",e.cost]}),Object(b.jsx)(E.a,{size:"2em",onClick:function(){t({type:"DELETE_EXPENSE",payload:e.id})}})]})]})},S=function(e){return 0===e.expenses.length?Object(b.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(b.jsx)("ul",{className:"list-group mb-3",children:e.expenses.map((function(e){return Object(b.jsx)(C,{name:e.name,cost:e.cost,date:e.date},e.id)}))})},_=function(){var e=Object(c.useContext)(x).expenses,t=Object(c.useState)("2020"),a=Object(r.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(e||[]),i=Object(r.a)(l,2),d=i[0],j=i[1];Object(c.useEffect)((function(){j(e)}),[e]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm-6",children:[Object(b.jsx)("label",{children:"Filter by year"}),Object(b.jsxs)("select",{className:"form-control",value:s,onChange:function(t){n(t.target.value);var a=e.filter((function(e){return e.date.getFullYear().toString()===t.target.value}));j(a)},children:[Object(b.jsx)("option",{value:"2022",children:"2022"}),Object(b.jsx)("option",{value:"2021",children:"2021"}),Object(b.jsx)("option",{value:"2020",children:"2020"}),Object(b.jsx)("option",{value:"2019",children:"2019"})]})]}),Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("input",{type:"text",className:"form-control mb-2 mt-4",placeholder:"Type Expense name to search...",onChange:function(t){var a=e.filter((function(e){return e.name.toLowerCase().includes(t.target.value)}));j(a)}})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-sm p-5",children:Object(b.jsx)(y,{expenses:d})})}),Object(b.jsx)(S,{expenses:d})]})})},D=function(e){var t=Object(c.useContext)(x).dispatch,a=Object(c.useState)(""),s=Object(r.a)(a,2),n=s[0],l=s[1],i=Object(c.useState)(""),d=Object(r.a)(i,2),o=d[0],u=d[1],m=Object(c.useState)(""),O=Object(r.a)(m,2),h=O[0],v=O[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={id:Object(j.a)(),name:n,cost:parseInt(o),date:new Date(h)};t({type:"ADD_EXPENSE",payload:a}),l(""),u(""),v("")},children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)("div",{className:"card text-dark bg-light mb-3",children:Object(b.jsxs)("div",{className:"card-body p-5",children:[Object(b.jsx)("h2",{children:"Add Expense"}),Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsxs)("div",{className:"col-sm",children:[Object(b.jsx)("label",{htmlFor:"name",className:"fw-bold",children:"Name"}),Object(b.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:n,onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)("div",{className:"col-sm",children:[Object(b.jsx)("label",{htmlFor:"cost",className:"fw-bold",children:"Cost"}),Object(b.jsx)("input",{required:"required",type:"number",className:"form-control",id:"cost",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:"col-sm",children:[Object(b.jsx)("label",{htmlFor:"date",className:"fw-bold",children:"Date"}),Object(b.jsx)("input",{className:"form-control",type:"date",min:"2019-01-01",max:"2022-12-31",value:h,onChange:function(e){return v(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"d-grid gap-2 col-4 mx-auto mt-5",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Save"})})]})})})})})},k=function(){var e=Object(c.useContext)(x),t=e.expenses,a=e.budget,s=t.reduce((function(e,t){return e+t.cost}),0),n=s>a?"alert-danger":"alert-success";return Object(b.jsx)("div",{className:"alert p-4 ".concat(n),children:Object(b.jsxs)("span",{className:"fw-bold",children:["Balance amount: \xa3",a-s]})})},F=function(){return Object(b.jsx)(m,{children:Object(b.jsxs)("div",{className:"text-center bg-dark bg-gradient text-white",children:[Object(b.jsx)("h1",{className:"p-5",children:"Expense Tracker"}),Object(b.jsxs)("div",{className:"row p-5",children:[Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(k,{})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(p,{})})]}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(D,{})})}),Object(b.jsx)("div",{className:"row mt-5 justify-content-center",children:Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)(_,{})})})]})})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7e4e90fa.chunk.js.map