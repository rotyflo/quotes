(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),i=n(4),s=n.n(i),a=(n(9),n(10),n(0));var u=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{id:"title",children:"Random Quote Machine"})}),Object(a.jsxs)("main",{children:[Object(a.jsx)("p",{id:"quote"}),Object(a.jsx)("p",{id:"author"}),Object(a.jsx)("button",{id:"get-quote",class:"btn btn-default",children:"Get Quote"}),Object(a.jsx)("button",{id:"tweet",class:"btn btn-primary",children:"Tweet"})]})]})},r=n(1),h=n.n(r);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),h()((function(){function t(){h()("#quote").html("<i class='fa fa-cog fa-spin'></i> Loading..."),fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){var e,n=(e=t.length,Math.round(Math.random()*e));h()("#quote").html('"'.concat(t[n].text,'"')),h()("#author").html("<i>- ".concat(t[n].author,"</i>"))}))}t(),h()("#get-quote").on("click",(function(){t()})),h()("#tweet").on("click",(function(){var t=h()("#quote").text();window.open("https://twitter.com/intent/tweet?text=".concat(t))}))}))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a7d683da.chunk.js.map