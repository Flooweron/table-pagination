(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(6),c=a.n(r),i=a(4),l=a.n(i),o=a(7),d=a(8),u=a(9),h=a(13),j=a(11),b=a(10),m=a.n(b),x=(a(19),a(0)),p=function(){return Object(x.jsx)("div",{className:"lds-dual-ring"})},g=function(e){return Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsxs)("th",{onClick:e.onSort.bind(null,"id"),children:["ID ","id"===e.sortField?Object(x.jsx)("small",{children:e.sort}):null]}),Object(x.jsxs)("th",{onClick:e.onSort.bind(null,"firstName"),children:["First Name ","firstName"===e.sortField?Object(x.jsx)("small",{children:e.sort}):null]}),Object(x.jsxs)("th",{onClick:e.onSort.bind(null,"lastName"),children:["Last Name ","lastName"===e.sortField?Object(x.jsx)("small",{children:e.sort}):null]})]})}),Object(x.jsx)("tbody",{children:e.data.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.id}),Object(x.jsx)("td",{children:e.firstName}),Object(x.jsx)("td",{children:e.lastName})]})}))})]})},f=function(e){return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"50px 0"},children:Object(x.jsx)("button",{onClick:function(){return e.onSelect("https://www.filltext.com/?rows=250&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-danger",children:"250 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"})})},O=a(12),N=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),s=a[0],r=a[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return e.onSearch(s)},children:"Search"})}),Object(x.jsx)("input",{type:"text",className:"form-control",onChange:function(e){r(e.target.value)},value:s})]}),Object(x.jsx)("p",{className:"text-center",children:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430!"}),Object(x.jsx)("p",{className:"text-center",children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})]})},v=a(2),C=a.n(v),S=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isModeSelected:!1,isLoading:!1,data:[],search:"",sort:"asc",sortField:"id",row:null,currentPage:0},e.onSort=function(t){var a=e.state.data.concat(),n="asc"===e.state.sort?"desc":"asc",s=C.a.orderBy(a,t,n);e.setState({data:s,sort:n,sortField:t})},e.modeSelectHandler=function(t){e.setState({isModeSelected:!0,isLoading:!0}),e.fetchData(t)},e.onRowSelect=function(t){return e.setState({row:t})},e.pageChangeHandler=function(t){var a=t.selected;return e.setState({currentPage:a})},e.searchHandler=function(t){e.setState({search:t,currentPage:0})},e}return Object(u.a)(a,[{key:"fetchData",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,this.setState({isLoading:!1,data:C.a.orderBy(n,this.state.sortField,this.state.sort)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(){var e=this.state,t=e.data,a=e.search;if(!a)return t;var n=t.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())}));return n.length||(n=this.state.data),n}},{key:"render",value:function(){if(!this.state.isModeSelected)return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(f,{onSelect:this.modeSelectHandler})});var e=this.getFilteredData(),t=Math.ceil(e.length/50),a=C.a.chunk(e,50)[this.state.currentPage];return Object(x.jsxs)("div",{className:"container",children:[this.state.isLoading?Object(x.jsx)(p,{}):Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)(N,{onSearch:this.searchHandler}),Object(x.jsx)(g,{data:a,onSort:this.onSort,sort:this.state.sort,sortField:this.state.sortField,onRowSelect:this.onRowSelect})]}),this.state.data.length>50?Object(x.jsx)(m.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageChangeHandler,containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",forcePage:this.state.currentPage}):null]})}}]),a}(n.Component);c.a.render(Object(x.jsx)(S,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bddd9fbf.chunk.js.map