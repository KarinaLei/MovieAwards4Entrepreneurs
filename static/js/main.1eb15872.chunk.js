(this.webpackJsonpmovie4etpnrs=this.webpackJsonpmovie4etpnrs||[]).push([[0],{17:function(e,s,t){},26:function(e,s,t){},27:function(e,s,t){},50:function(e,s,t){},51:function(e,s,t){"use strict";t.r(s);var a=t(0),n=t(2),c=t.n(n),r=t(18),i=t.n(r),l=(t(26),t(3)),o=t(4),d=t(7),h=t(6),j=(t(27),t(19)),m=t.n(j),b=t(5),u=(t(17),function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).onClick=function(e){var s=a.state.imdbID,t=a.state.title,n=a.state.yor;a.state.action(s,t,n)},a.state={action:a.props.action,nominees:a.props.nominees,imdbID:a.props.imdbID,title:a.props.title,yor:a.props.yor},a.state.action=a.state.action.bind(Object(b.a)(a)),a}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsx)("button",{disabled:this.state.nominees.has(this.props.imdbID),className:this.state.nominees.has(this.props.imdbID)?"inactive button":"active button",onClick:this.onClick,children:" Nominate "})}}]),t}(c.a.Component)),O=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).onClick=function(e){var s=a.props.imdbID;a.state.action(s)},a.state={action:a.props.action,imdbID:a.props.imdbID,title:a.props.title,yor:a.props.yor},a.state.action=a.state.action.bind(Object(b.a)(a)),a}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsx)("button",{className:"button",onClick:this.onClick,children:" Remove "})}}]),t}(c.a.Component),p=t(20),x=t.n(p),v=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=s.call(this,e)).renderBanner=function(){if(n.state.nominees.size>=5)return Object(a.jsx)(x.a,{title:"Congratulations! You've selected your top 5 movies! \ud83c\udfa5",css:n.bannerCss,visibleTime:3e3})},n.renderNominees=function(){var e=n.state.nominees,s=Array.from(e.keys()),t=Array.from(e.values());return e.size?Object(a.jsxs)("div",{className:"nominee-container",children:[Object(a.jsx)("div",{className:"header-container nominee-header",children:Object(a.jsx)("h1",{children:"Nominees"})}),Object(a.jsxs)("div",{className:"row-header",children:[Object(a.jsx)("span",{className:"result-header left",children:"Title"}),Object(a.jsx)("span",{className:"result-header middleRight",children:"Year of Released"}),Object(a.jsx)("span",{className:"result-header right",children:"Action"})]},"row-header"),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"nominee",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"result-row",children:[Object(a.jsx)("span",{className:"result-title left",children:e.title}),Object(a.jsx)("span",{className:"result-year middle",children:e.yor}),Object(a.jsx)(O,{action:n.remove,imdbID:s[t],title:e.title,yor:e.yor})]},s[t])}))})]}):Object(a.jsxs)("div",{className:"nominee-container",children:[Object(a.jsx)("div",{className:"header-container nominee-header",children:Object(a.jsx)("h1",{children:"Nominees"})}),Object(a.jsxs)("div",{className:"row-header",children:[Object(a.jsx)("span",{className:"result-header left",children:"Title"}),Object(a.jsx)("span",{className:"result-header middleRight",children:"Year of Released"}),Object(a.jsx)("span",{className:"result-header right",children:"Action"})]},"row-header"),Object(a.jsx)("div",{className:"nominee"})]})},n.renderSearchResults=function(){var e=n.state.results,s=n.state.lastQuery;return!n.state.message.length&&Object.keys(e)&&e.length?Object(a.jsxs)("div",{className:"result-container",children:[Object(a.jsx)("div",{className:"header-container result-header",children:Object(a.jsxs)("h1",{className:"msg",children:[e.length,' results for "',s,'"']})}),Object(a.jsxs)("div",{className:"result",children:[Object(a.jsxs)("div",{className:"row-header",children:[Object(a.jsx)("span",{className:"result-header left",children:"Title"}),Object(a.jsx)("span",{className:"result-header middle",children:"Year of Released"}),Object(a.jsx)("span",{className:"result-header right",children:"Action"})]},"row-header"),Object(a.jsx)("hr",{}),e.map((function(e){return Object(a.jsxs)("div",{className:"result-row",children:[Object(a.jsx)("span",{className:"result-title left",children:e.Title}),Object(a.jsx)("span",{className:"result-year middle",children:e.Year}),Object(a.jsx)(u,{action:n.toggleSearch,nominees:n.state.nominees,imdbID:e.imdbID,title:e.Title,yor:e.Year,active:!n.state.nominees.has(e.imdbID)})]},e.imdbID)}))]})]}):n.state.message.length?Object(a.jsxs)("div",{className:"result-container",children:[Object(a.jsx)("div",{className:"header-container",children:Object(a.jsx)("h1",{className:"msg",children:"Search Result"})}),Object(a.jsxs)("div",{className:"row-header",children:[Object(a.jsx)("span",{className:"result-header left",children:"Title"}),Object(a.jsx)("span",{className:"result-header middle",children:"Year of Released"}),Object(a.jsx)("span",{className:"result-header right",children:"Action"})]},"row-header"),Object(a.jsx)("h1",{className:"msg red",children:n.state.message})]}):Object(a.jsxs)("div",{className:"result-container",children:[Object(a.jsx)("div",{className:"header-container",children:Object(a.jsx)("h1",{className:"msg",children:"Search Result"})}),Object(a.jsxs)("div",{className:"row-header",children:[Object(a.jsx)("span",{className:"result-header left",children:"Title"}),Object(a.jsx)("span",{className:"result-header middle",children:"Year of Released"}),Object(a.jsx)("span",{className:"result-header right",children:"Action"})]},"row-header")]})},n.toggleSearch=function(e,s,t){if(n.state.nominees.has(e))n.state.nominees.delete(e),n.setState({nominees:n.state.nominees});else if(n.state.nominees.size<5){var a={title:s,yor:t};n.state.nominees.set(e,a),n.setState({nominees:n.state.nominees})}},n.remove=function(e){n.state.nominees.has(e)&&(n.state.nominees.delete(e),n.setState({nominees:n.state.nominees}))},n.fetchSearchResult=function(){var e=n.state.query;if(n.setState({lastQuery:e}),e.length){var s="http://www.omdbapi.com/?apikey=7353c7c5&s=".concat(e);m.a.get(s).then((function(e){e.data.Search?n.setState({results:e.data.Search,message:""}):n.setState({results:{},message:"Movie not found."})})).catch((function(e){e&&n.setState({results:{},message:"Failed to fetch data. Check your network connection."})}))}else n.setState({results:{},message:"Movie name cannot be empty."})},n.inputOnChangeHandler=function(e){var s=e.target.value;n.setState({query:s,message:""})},n.state={query:"",lastQuery:"",results:{},message:"",nominees:new Map},n.bannerCss={color:"#42474c",backgroundColor:"white",position:"fixed",top:"0",width:"100%",height:"32px"},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.query;return Object(a.jsxs)("div",{className:"page-container",children:[Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsxs)("h1",{className:"header",children:[Object(a.jsx)("span",{id:"shoppies1",children:"The Shoppies:"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{id:"shoppies2",children:"Movie Awards for Entrepreneurs"})]}),Object(a.jsx)("h2",{className:"note",children:"Nominate Your Top 5 Favorite Movies!"})]}),Object(a.jsx)("div",{className:"search-container",children:Object(a.jsxs)("div",{className:"label-container",children:[Object(a.jsx)("p",{className:"title",children:"Search Movie by Title"}),Object(a.jsxs)("label",{className:"search-label",htmlFor:"search-input",children:[Object(a.jsx)("i",{className:"fas fa-search icon"}),Object(a.jsx)("span",{children:Object(a.jsx)("input",{type:"text",name:"query",value:e,id:"search-input",placeholder:"Movie Title (e.g. Titanic)",onChange:this.inputOnChangeHandler})}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:this.fetchSearchResult,className:"button",id:"search",children:"Search"})})]})]})}),Object(a.jsxs)("div",{className:"search-nominee-results",children:[Object(a.jsx)("span",{className:"search-result",children:this.renderSearchResults()}),Object(a.jsx)("span",{className:"nominee-result",children:this.renderNominees()})]}),this.renderBanner()]})}}]),t}(c.a.Component);t(50);var N=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,c=s.getLCP,r=s.getTTFB;t(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),f()}},[[51,1,2]]]);
//# sourceMappingURL=main.1eb15872.chunk.js.map