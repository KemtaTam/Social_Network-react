"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[506],{4506:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var s=n(885),t=n(2791),i=n(3504),a=n(8660),l=n(1631),o=n(2757),u="UserItem_userItemWrapper__sjKgP",c="UserItem_line__-wDCR",d="UserItem_userItem__ejwq0",f="UserItem_ava__Dx-eq",g="UserItem_userInfo__XWXxu",m="UserItem_name__v-XtS",_="UserItem_status__VMc56",p="UserItem_writeMessage__wxBCA",h="UserItem_bIsFollow__KoGGB",x=n(184),j=function(e){var r=e.user,n=e.followingInProgress,s=(0,a.T)();return(0,x.jsxs)("div",{className:u,children:[(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("div",{className:f,children:(0,x.jsx)(i.OL,{to:"/profile/"+r.id,children:(0,x.jsx)("img",{src:null===r.photos.small?o:r.photos.small,alt:"ava"})})}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)(i.OL,{to:"/profile/"+r.id,children:(0,x.jsx)("div",{className:m,children:r.name})}),(0,x.jsx)("div",{className:_,children:r.status}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("a",{href:"/",children:"Write message"})," "]})]}),(0,x.jsx)("button",{className:h,onClick:function(){return s((0,l.c2)(r.id,r.followed))},disabled:n.some((function(e){return e===r.id})),children:r.followed?"Unfollow":"Follow"})]}),(0,x.jsx)("div",{className:c})]})},v=n(5705),b={wrapper:"Users_wrapper__vgxcL",userWrapper:"Users_userWrapper__bGpbT",bShowMore:"Users_bShowMore__OgCDC"},P=t.memo((function(e){var r=e.onFilterChanged,n=(0,i.lr)(),t=(0,s.Z)(n,1)[0],a=t.get("friend"),l=t.get("term")||"";return(0,x.jsx)(v.J9,{enableReinitialize:!0,initialValues:{term:l,friend:a},onSubmit:function(e,n){var s=n.setSubmitting,t=null;"null"!==e.friend&&(t="true"===e.friend),r({term:e.term,friend:t}),s(!1)},children:function(e){var r=e.isSubmitting;return(0,x.jsxs)(v.l0,{children:[(0,x.jsx)(v.gN,{name:"term",placeholder:"Search..."}),(0,x.jsxs)(v.gN,{as:"select",name:"friend",children:[(0,x.jsx)("option",{value:"null",children:"All"}),(0,x.jsx)("option",{value:"true",children:"Friends"}),(0,x.jsx)("option",{value:"false",children:"Not friends"})]}),(0,x.jsx)("button",{className:b.bSend,type:"submit",disabled:r,children:"Search"})]})}})})),N="Paginator_pages__NBgHW",w="Paginator_selected__xPuxZ",C="Paginator_bLeft__c5snT",I="Paginator_bRight__Bk84f",S=function(e){for(var r=e.portionSize,n=e.totalItemsCount,s=e.pageSize,t=e.beginPage,i=e.endPage,l=e.currentPage,o=e.setBeginEndPage,u=e.setCurrentPage,c=(0,a.T)(),d=Math.ceil(n/s),f=[],g=t;g<=i&&(f.push(g),g!==d);g++);var m=f.map((function(e){return(0,x.jsx)("div",{className:l===e?w:void 0,onClick:function(){return u(e)},children:e},e)}));return(0,x.jsxs)("div",{className:N,children:[t>1?(0,x.jsx)("button",{className:C,onClick:function(){var e=t-r;c(o(e,i-r)),u(e)},children:"left"}):null,t>1?"...":null,m,i<d?"...":null,i<d?(0,x.jsx)("button",{className:I,onClick:function(){var e=t+r;c(o(e,i+r)),u(e)},children:"right"}):null]})},U=n(3328),k=function(){var e=(0,a.C)((function(e){return e.usersPage})),r=e.totalItemsCount,n=e.pageSize,o=e.beginPage,u=e.endPage,c=e.currentPage,d=e.usersData,f=e.followingInProgress,g=e.isFetching,m=e.filter,_=(0,a.T)(),p=(0,i.lr)(),h=(0,s.Z)(p,2),v=h[0],N=h[1];(0,t.useEffect)((function(){var e={};m.term&&(e.term=m.term),console.log("filter.friend: ",m.friend),null!==m.friend&&(m.friend?e.friend="true":e.friend="false"),1!==c&&(e.page=String(c)),N(e)}),[m,c]),(0,t.useEffect)((function(){var e=v.get("page")||c,r=v.get("term")||m.term,s=m.friend;v.get("friend")&&(s="null"===v.get("friend")?null:"true"===v.get("friend")),_((0,l.Rf)(e,n,{term:r,friend:s}))}),[]);var w=d.map((function(e){return(0,x.jsx)(j,{user:e,followingInProgress:f},e.id)}));return(0,x.jsxs)("div",{className:b.wrapper,children:[(0,x.jsx)(P,{onFilterChanged:function(e){_((0,l.Rf)(1,n,e))}}),(0,x.jsx)(S,{totalItemsCount:r,pageSize:n,beginPage:o,endPage:u,currentPage:c,setBeginEndPage:l.Nw.setBeginEndPage,setCurrentPage:function(e){_(l.Nw.setCurrentPage(e)),_((0,l.Rf)(e,n,m))},portionSize:10}),g?(0,x.jsx)(U.Z,{}):(0,x.jsx)("div",{className:b.userWrapper,children:w})]})}},2757:function(e,r,n){e.exports=n.p+"static/media/default.b8d16cb48a7cbc6e9d27.png"}}]);
//# sourceMappingURL=506.6359cef3.chunk.js.map