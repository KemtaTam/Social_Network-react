(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[864],{4864:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return k}});var a=n(885),t=n(2791),r=n(6871),i="DialogItem_dialogs_li__5m9Vr",u="DialogItem_item__5EQYC",o="DialogItem_active__jqze1",l=n(3504),c=n(184),m=function(e){return e.isActive?o:u},d=function(e){var s=e.id,n=e.name,a="/dialogs/"+s;return(0,c.jsx)("li",{className:i,children:(0,c.jsx)(l.OL,{to:a,className:m,children:n})})},f=n(2757),g={message_item:"MessageItem_message_item__KGLEN",name:"MessageItem_name__hBNmP",message:"MessageItem_message__+UYqm",ava:"MessageItem_ava__jBxbi"},_=t.memo((function(e){var s=e.message,n=e.photo,a=e.userName,t=e.userId;return(0,c.jsxs)("li",{className:g.message_item,children:[(0,c.jsx)("img",{className:g.ava,src:n||f,alt:"ava"}),(0,c.jsxs)("div",{className:g.name_and_message,children:[(0,c.jsx)("div",{className:g.name,children:(0,c.jsx)(l.rU,{to:"/Social_Network-react/#/profile/"+t,children:a})}),(0,c.jsx)("div",{className:g.message,children:s})]})]})})),v=n(2292),h=n(5705),p=n(9417),x=n(7205),b=n(1686),j=n(8660),N=n(2333),I="Dialogs_wrapper__a3jfb",Z="Dialogs_dialogs__fixwd",D="Dialogs_messages__mKrlG",S="Dialogs_dialogs_ul__GalbR",C="Dialogs_messageWrapper__UZ47Q",M="Dialogs_sendMessage__pq6uI",w="Dialogs_bSend__p5grP",y="Dialogs_error__aRHHD",E=function(e){var s=e.addMessage,n=e.dialogId,a=e.setAutoScrollIsActive,t=(0,j.T)(),r=(0,j.C)((function(e){return e.profilePage})).usersData,i=(0,j.C)((function(e){return e.dialogPage})).status,u=(0,h.TA)({initialValues:{message:""},validationSchema:v.Ry({message:v.Z_().required("")}),onSubmit:function(e,i){var u=i.setSubmitting;e.message.trim()&&(t(1!==n?s(e.message,n,(null===r||void 0===r?void 0:r.photos.small)||"",(null===r||void 0===r?void 0:r.fullName)||"Name"):(0,N.bG)(e.message)),e.message="",a(!0)),u(!1)}}),o=new Set;return(0,c.jsx)("form",{onSubmit:u.handleSubmit,children:(0,c.jsxs)("div",{className:M,children:[(0,c.jsx)(p.Z,{onChange:u.handleChange,onKeyDown:function(e){o.add(e.key),o.has("Shift")||"Enter"!==e.key?o.has("Enter")&&o.has("Shift")&&(u.values.message+="\n"):(e.preventDefault(),u.values.message.trim()&&(1!==n?t(s(u.values.message,n,(null===r||void 0===r?void 0:r.photos.small)||"",(null===r||void 0===r?void 0:r.fullName)||"Name")):"ready"===i&&t((0,N.bG)(u.values.message))),u.values.message="",a(!0),o.clear())},value:u.values.message,name:"message",label:"Write a message...",variant:"filled",sx:{bgcolor:"#38393AFF"},multiline:!0,fullWidth:!0}),(0,c.jsx)(x.Z,{className:w,disabled:u.isSubmitting||"ready"!==i,type:"submit",variant:"text",size:"small",children:(0,c.jsx)(b.Z,{})})]})})},P=n(4959),k=t.memo((function(){var e,s=(0,j.C)((function(e){return e.auth})),n=s.userId,i=s.isAuth,u=(0,j.C)((function(e){return e.dialogPage})),o=u.status,l=u.dialogsData,m=(0,t.useState)(!1),f=(0,a.Z)(m,2),g=f[0],v=f[1],h=(0,j.T)(),p=function(e){for(var s,n=e.length-1;n>0;n--)"/"===e[n]&&(s=+e.slice(n+1,e.length));return s||0}((0,r.TH)().pathname),x=(0,t.useRef)(null);(0,t.useEffect)((function(){return n&&h((0,P.et)(n)),h((0,N.WE)()),function(){h((0,N.R7)())}}),[]),(0,t.useEffect)((function(){var e;g&&(null===(e=x.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[l]);var b=l.map((function(e){return(0,c.jsx)(d,{id:e.id,name:e.name},e.id)})),M=0!==p&&(null===(e=l[p-1])||void 0===e?void 0:e.messagesData.map((function(e){return(0,c.jsx)(_,{message:e.message,photo:e.photo,userName:e.userName,userId:e.userId},Math.random()*Date.now()+"")})));return i?(0,c.jsxs)(c.Fragment,{children:["error"===o&&(0,c.jsx)("p",{className:y,children:"Internet connection error"}),(0,c.jsxs)("div",{className:I,children:[(0,c.jsx)("div",{className:Z,children:(0,c.jsx)("ul",{className:S,children:b})}),(0,c.jsxs)("div",{className:C,children:[(0,c.jsxs)("ul",{className:D,onScroll:function(e){var s=e.currentTarget;s.scrollHeight-s.scrollTop===s.clientHeight?v(!0):v(!1)},children:[M,(0,c.jsx)("div",{ref:x})]}),(0,c.jsx)(E,{addMessage:N.Nw.addMessage,dialogId:p,setAutoScrollIsActive:v})]})]})]}):(0,c.jsx)(r.Fg,{to:"/login"})}))},1686:function(e,s,n){"use strict";var a=n(4836);s.Z=void 0;var t=a(n(5649)),r=n(184),i=(0,t.default)((0,r.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.Z=i},5649:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(3219)},3219:function(e,s,n){"use strict";n.r(s),n.d(s,{capitalize:function(){return t.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return i.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return g.Z},unstable_useId:function(){return _},unsupportedProp:function(){return v},useControlled:function(){return h.Z},useEventCallback:function(){return p.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var a=n(7167),t=n(9853),r=n(2055).Z,i=n(1245),u=n(2977);var o=function(e,s){return function(){return null}},l=n(6359),c=n(5783),m=n(8195);n(7462);var d=function(e,s){return function(){return null}},f=n(4450).Z,g=n(3026),_=n(6996).Z;var v=function(e,s,n,a,t){return null},h=n(5178),p=n(9511),x=n(7933),b=n(4347),j={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}},2757:function(e,s,n){"use strict";e.exports=n.p+"static/media/default.b8d16cb48a7cbc6e9d27.png"},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=864.bedeb327.chunk.js.map