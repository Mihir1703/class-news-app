(this["webpackJsonpclass-news-app"]=this["webpackJsonpclass-news-app"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),s=a.n(r),i=(a(14),a(2)),l=a(3),o=a(5),d=a(4),b=a(0),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light px-2",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"News Today"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"/about",children:"About"})})]})})]})})}}]),a}(n.PureComponent),u=a(7),p=a.n(u),h=a(9),m=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageUrl,c=e.newsUrl;return Object(b.jsxs)("div",{className:"card my-3",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:n,alt:"img"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:[t,"..."]}),Object(b.jsxs)("p",{className:"card-text",children:[a,"..."]}),Object(b.jsx)("a",{href:c,target:"_blank",className:"btn btn-sm btn-primary",children:"Read More"})]})]})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={articles:[],loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a855a0f476ac4aedbeaad30ed365ac91",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a855a0f476ac4aedbeaad30ed365ac91");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({articles:a.articles});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h2",{children:"News-Today - Top Headlines only for You!"}),Object(b.jsx)("div",{className:"row",children:this.state.articles.map((function(e){if(e.urlToImage)return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(m,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage?e.urlToImage:"https://img.icons8.com/nolan/64/no-image.png",newsUrl:e.url})},e.url)}))})]})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(v,{})]})}}]),a}(n.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.f85bfa4e.chunk.js.map