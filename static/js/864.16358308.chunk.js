(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[864],{4864:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return E}});var n=a(2791),t=a(6871),i="DialogItem_dialogs_li__5m9Vr",r="DialogItem_item__5EQYC",u="DialogItem_active__jqze1",o=a(3504),l=a(184),c=function(e){return e.isActive?u:r},m=function(e){var s=e.id,a=e.name,n="/dialogs/"+s;return(0,l.jsx)("li",{className:i,children:(0,l.jsx)(o.OL,{to:n,className:c,children:a})})},d=a(8660),f=a(2757),g=a(4959),_={message_item:"MessageItem_message_item__KGLEN",name:"MessageItem_name__hBNmP",message:"MessageItem_message__+UYqm",ava:"MessageItem_ava__jBxbi"},h=function(e){var s=e.message,a=e.photo,t=e.userName,i=e.userId,r=(0,d.C)((function(e){return e.auth})).userId,u=(0,d.T)();return(0,n.useEffect)((function(){r&&u((0,g.et)(r))}),[r]),(0,l.jsxs)("li",{className:_.message_item,children:[(0,l.jsx)("img",{className:_.ava,src:a||f,alt:"ava"}),(0,l.jsxs)("div",{className:_.name_and_message,children:[(0,l.jsx)("div",{className:_.name,children:(0,l.jsx)("a",{href:"https://kemtatam.github.io/Social_Network-react/#/profile/"+i,children:t})}),(0,l.jsx)("div",{className:_.message,children:s})]})]})},v=a(970),p=a(2292),x=a(5705),b=a(9417),N=a(7205),j=a(1686),Z="Dialogs_wrapper__a3jfb",I="Dialogs_dialogs__fixwd",C="Dialogs_messages__mKrlG",D="Dialogs_dialogs_ul__GalbR",w="Dialogs_messageWrapper__UZ47Q",M="Dialogs_sendMessage__pq6uI",S="Dialogs_bSend__p5grP",k=function(e){var s=e.addMessage,a=e.dialogId,n=e.wsChannel,t=(0,d.T)(),i=(0,d.C)((function(e){return e.profilePage})).usersData,r=(0,x.TA)({initialValues:{message:""},validationSchema:p.Ry({message:p.Z_().required("")}),onSubmit:function(e,r){var u=r.setSubmitting;e.message.trim()&&(1!==a?t(s(e.message,a,(null===i||void 0===i?void 0:i.photos.small)||"",(null===i||void 0===i?void 0:i.fullName)||"Name")):n.send(e.message),e.message=""),u(!1)}}),u=new Set;return(0,l.jsx)("form",{onSubmit:r.handleSubmit,children:(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)(b.Z,{label:"Write a message...",onKeyDown:function(e){u.add(e.key),u.has("Shift")||"Enter"!==e.key?u.has("Enter")&&u.has("Shift")&&(r.values.message+="\n"):(e.preventDefault(),r.values.message.trim()&&(1!==a?t(s(r.values.message,a,(null===i||void 0===i?void 0:i.photos.small)||"",(null===i||void 0===i?void 0:i.fullName)||"Name")):n.send(r.values.message)),r.values.message="",u.clear())},value:r.values.message,onChange:r.handleChange,multiline:!0,variant:"filled",fullWidth:!0,name:"message",sx:{bgcolor:"#38393AFF"}}),(0,l.jsx)(N.Z,{className:S,type:"submit",variant:"text",size:"small",disabled:r.isSubmitting,children:(0,l.jsx)(j.Z,{})})]})})},y=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),E=function(){var e,s=(0,d.T)();(0,n.useEffect)((function(){y.addEventListener("message",(function(e){s(v.N.setMessageData(JSON.parse(e.data)))}))}),[]);var a=(0,d.C)((function(e){return e.dialogPage})).dialogsData,i=(0,d.C)((function(e){return e.auth})).isAuth,r=function(e){for(var s,a=e.length-1;a>0;a--)"/"===e[a]&&(s=+e.slice(a+1,e.length));return s||0}((0,t.TH)().pathname),u=a.map((function(e){return(0,l.jsx)(m,{id:e.id,name:e.name},e.id)})),o=0!==r&&(null===(e=a[r-1])||void 0===e?void 0:e.messagesData.map((function(e){return(0,l.jsx)(h,{message:e.message,photo:e.photo,userName:e.userName,userId:e.userId},e.userId+e.message+Math.random())})));return i?(0,l.jsxs)("div",{className:Z,children:[(0,l.jsx)("div",{className:I,children:(0,l.jsx)("ul",{className:D,children:u})}),(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)("ul",{className:C,children:o}),(0,l.jsx)(k,{addMessage:v.N.addMessage,dialogId:r,wsChannel:y})]})]}):(0,l.jsx)(t.Fg,{to:"/login"})}},1686:function(e,s,a){"use strict";var n=a(4836);s.Z=void 0;var t=n(a(5649)),i=a(184),r=(0,t.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.Z=r},5649:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=a(3219)},3219:function(e,s,a){"use strict";a.r(s),a.d(s,{capitalize:function(){return t.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return r.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return N},unstable_useEnhancedEffect:function(){return g.Z},unstable_useId:function(){return _},unsupportedProp:function(){return h},useControlled:function(){return v.Z},useEventCallback:function(){return p.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var n=a(7167),t=a(9853),i=a(2055).Z,r=a(1245),u=a(2977);var o=function(e,s){return function(){return null}},l=a(6359),c=a(5783),m=a(8195);a(7462);var d=function(e,s){return function(){return null}},f=a(4450).Z,g=a(3026),_=a(6996).Z;var h=function(e,s,a,n,t){return null},v=a(5178),p=a(9511),x=a(7933),b=a(4347),N={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},2757:function(e,s,a){"use strict";e.exports=a.p+"static/media/default.b8d16cb48a7cbc6e9d27.png"},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=864.16358308.chunk.js.map