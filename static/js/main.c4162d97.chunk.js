(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(4),a=n.n(o),i=(n(13),n(5)),h=n(6),u=n(8),l=n(7),d=(n(14),n(3)),j=(n(15),n(16),function(e){var t=e.monster;return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster"}),Object(r.jsx)("h2",{children:t.name}),Object(r.jsx)("p",{children:t.email})]})}),f=function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(j,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleSearchChange;return Object(r.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:function(e){return n(e.target.value)}})}),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleSearchChange=function(t){e.setState({search:t})},e.filterMonsters=function(t){var n=e.state.search.toLowerCase(),r=t.name.toLowerCase(),s=t.email.toLowerCase();return r.includes(n)||s.includes(n)},e.state={search:"",monsters:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state.monsters.filter(this.filterMonsters);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monsters Rolodex"}),Object(r.jsx)(m,{placeholder:"search monsters",handleSearchChange:this.handleSearchChange}),Object(r.jsx)(f,{monsters:e})]})}}]),n}(d.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.c4162d97.chunk.js.map