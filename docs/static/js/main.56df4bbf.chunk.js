(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=n(1),l=(n(9),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},l=function(){c(r+1)},i=function(){c(r-1)};return{counter:r,increment:l,decrement:i,reset:o}}(1),t=e.counter,n=e.increment,c=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({data:null,loading:!0,error:null}),r=Object(u.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&o({loading:!1,error:null,data:e})}))}),[e]),c}("https://www.breakingbadapi.com/api/quotes/".concat(t)),o=c.loading,l=c.data,i=!!l&&l[0],s=i.author,f=i.quote;return r.a.createElement("div",null,r.a.createElement("h1",null,"BreakingBad Quotes"),r.a.createElement("hr",null),o?r.a.createElement("div",{className:"alert alert-info text-center"},"Loading..."):r.a.createElement("blockquote",{className:"blockquote text-right"},r.a.createElement("p",{className:"mb-0"}," ",f," "),r.a.createElement("footer",{className:"blockquote-footer"}," ",s," ")),r.a.createElement("button",{className:"btn btn-primary",onClick:n},"Siguiente"))});o.a.render(r.a.createElement(l,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.56df4bbf.chunk.js.map