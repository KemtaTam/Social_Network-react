"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[842],{3842:function(e,r,s){s.r(r),s.d(r,{default:function(){return j}});var i=s(8683),n=s(5671),o=s(3144),a=s(136),t=s(3668),m=s(2791),l=s(8687),c=s(7781),u=s(1114),d=s(5705),p=s(132),g={formWrapper:"Login_formWrapper__MreUS",elemForm:"Login_elemForm__9UWf6",bLogin:"Login_bLogin__Ya74R",errorMes:"Login_errorMes__rxoLk",rememberMe:"Login_rememberMe__oPCgI",error:"Login_error__qu8M5",errorText:"Login_errorText__kchxR"},h=s(6871),x=s(184),_=function(e){return(0,x.jsx)(d.J9,{initialValues:{email:"",password:"",rememberToggle:!1},validationSchema:p.Ry({email:p.Z_().email("Invalid email address").required("Required"),password:p.Z_().min(4,"Must be 4 characters or more").required("Required")}),onSubmit:function(r,s){var i=s.setSubmitting,n=s.setStatus;console.log(JSON.stringify(r,null,2)),e.login(r,n),r.password="",i(!1)},children:function(e){var r=e.isSubmitting,s=e.status;return(0,x.jsx)(d.l0,{className:g.form,children:(0,x.jsxs)("div",{className:"".concat(g.formWrapper," ").concat(s&&g.error),children:[(0,x.jsx)("div",{className:g.errorText,children:s}),(0,x.jsxs)("div",{children:[(0,x.jsx)(d.gN,{className:g.elemForm,type:"email",name:"email",placeholder:"Email"}),(0,x.jsx)(d.Bc,{className:g.errorMes,name:"email",component:"div"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(d.gN,{className:g.elemForm,type:"password",name:"password",placeholder:"Password"}),(0,x.jsx)(d.Bc,{className:g.errorMes,name:"password",component:"div"})]}),(0,x.jsxs)("div",{className:g.rememberMe,children:[(0,x.jsx)(d.gN,{type:"checkbox",name:"rememberToggle"}),"Remember me"]}),(0,x.jsx)("button",{className:g.bLogin,type:"submit",disabled:r,children:"Login"})]})})}})},f=function(e){return e.isAuth?(0,x.jsx)(h.Fg,{to:"/profile"}):(0,x.jsx)("div",{children:(0,x.jsx)(_,(0,i.Z)({},e))})},b=function(e){(0,a.Z)(s,e);var r=(0,t.Z)(s);function s(){return(0,n.Z)(this,s),r.apply(this,arguments)}return(0,o.Z)(s,[{key:"render",value:function(){return(0,x.jsx)("span",{children:(0,x.jsx)(f,(0,i.Z)({},this.props))})}}]),s}(m.Component),j=(0,c.qC)((0,l.$j)((function(e){return{isFetching:e.usersPage.isFetching,isAuth:e.auth.isAuth}}),{login:u.x4,logout:u.kS}))(b)}}]);
//# sourceMappingURL=842.c1f6894c.chunk.js.map