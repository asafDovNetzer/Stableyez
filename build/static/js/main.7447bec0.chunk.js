(this["webpackJsonpself-track"]=this["webpackJsonpself-track"]||[]).push([[0],{108:function(e,t,n){e.exports={Modal:"ErrorModal_Modal__B1EBu",ErrorMessage:"ErrorModal_ErrorMessage__2-hfU",ButtonPanel:"ErrorModal_ButtonPanel__3BPBt",Backdrop:"ErrorModal_Backdrop__3h9td"}},116:function(e,t,n){"use strict";n(1);var o=n(235),a=n.n(o),r=n(9);t.a=function(){return Object(r.jsx)("div",{className:a.a.Loader,children:"Loading..."})}},152:function(e,t,n){e.exports={Modal:"Modal_Modal__2ePhi",Backdrop:"Modal_Backdrop__34CEZ",Button:"Modal_Button__324n4"}},153:function(e,t,n){e.exports={UserWide:"AuthModal_UserWide__1wJnu",UserNarrow:"AuthModal_UserNarrow__2DQLw",SlideBoard:"AuthModal_SlideBoard__1_Ghg"}},154:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__10G_9",Content:"SideDrawer_Content__2z6r6",Backdrop:"SideDrawer_Backdrop__3X_3a"}},175:function(e,t,n){"use strict";var o=n(1),a=n.n(o).a.createContext(null);t.a=a},176:function(e,t,n){"use strict";var o=n(1),a=n.n(o).a.createContext(null);t.a=a},181:function(e,t,n){"use strict";var o=n(82),a=n(152),r=n.n(a),i=n(9);t.a=function(e){return Object(i.jsx)("div",{style:{display:e.show?"unset":"none"},onClick:function(t){t.target.closest(".modalclass")||e.onHide()},className:r.a.Backdrop,children:Object(i.jsxs)("div",{className:"".concat(r.a.Modal,"     modalclass"),children:[Object(i.jsx)("button",{className:r.a.Button,onClick:function(){return e.onHide()},children:Object(i.jsx)("svg",{width:"24",height:"24",fill:"currentColor",children:Object(i.jsx)("use",{href:"".concat(o.a,"#x")})})}),e.children]})})}},219:function(e,t,n){"use strict";n(1);var o=n(236),a=n.n(o),r=n(9);t.a=function(){return Object(r.jsx)("div",{className:a.a.Footer,children:Object(r.jsx)("p",{children:"\xa9 All copyrights belong to Asaf Dov Netzer"})})}},220:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(e){var t=new Date(e),n=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0");return"".concat(n,":").concat(o,":").concat(a)},a=function(e,t,n,o){var a=new Date(o);return new Date(a.getFullYear(),a.getMonth(),a.getDate(),e,t,n).getTime()},r=function(){var e=new Date(Date.now()),t=e.getFullYear(),n=e.getMonth(),o=e.getDate()+1;return new Date(t,n,o).getTime()}},221:function(e,t,n){"use strict";var o=n(18),a=n(1),r=n.n(a),i=n(153),c=n.n(i),s=n(34),u=n(31),l=n(76),d=n.n(l),h=n(23),j=n.n(h),f=n(38),b=n(87),m=n(46),p=n(402),w=n(33),O=n(9),v={onSignUpGoogle:function(){return f.g()},setUserName:function(e){return f.m(e)},sendEmail:function(){return f.j(!1)}},g=Object(s.b)(null,v)((function(e){var t=Object(b.d)({initialValues:{name:"",email:"",password:"",passwordConfirmation:""},validationSchema:m.b({name:m.d().max(20,"Name is too long").required("Must have a name"),email:m.d().email("Enter a valid email").required("Email is required"),password:m.d().min(8,"Password should be of minimum 8 characters length").required("Password is required"),passwordConfirmation:m.d().oneOf([m.c("password"),null],"Passwords must match").required("Confirmation password is required")}),onSubmit:function(t){var n=t.name.slice(0,1).toUpperCase()+t.name.slice(1).toLowerCase();e.setUserName(n),u.a.createUserWithEmailAndPassword(t.email,t.password).then((function(t){var o=t.user;console.log("created"),e.sendEmail(),Object(w.j)(o,{displayName:n}).then((function(){console.log(n)})),console.log(o,"signup")})).catch((function(e){e.code,console.log(e.code)}))}});return Object(O.jsxs)("div",{style:{width:"500px"},className:j.a.Modal,children:[Object(O.jsxs)("form",{className:j.a.Form,onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)(p.a,{inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},variant:"outlined",id:"name",name:"name",label:"Name",value:t.values.name,onChange:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)(p.a,{inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},variant:"outlined",id:"email-signup",name:"email",label:"Email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)(p.a,{inputProps:{autoComplete:"new-password",form:{autoComplete:"off"}},variant:"outlined",id:"password-signup",name:"password",label:"Password",type:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)(p.a,{id:"passwordConfirmation",name:"passwordConfirmation",label:"Password Confirmation",type:"password",variant:"outlined",value:t.values.passwordConfirmation,onChange:t.handleChange,error:t.touched.passwordConfirmation&&Boolean(t.errors.passwordConfirmation),helperText:t.touched.passwordConfirmation&&t.errors.passwordConfirmation})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)("button",{className:j.a.AuthButton,type:"submit",children:"Sign Up"})})]}),Object(O.jsx)("div",{className:j.a.field,children:Object(O.jsxs)("p",{children:["Already signed up?",Object(O.jsx)("button",{onClick:function(){e.onSwitch()},className:d.a.BackgroundlessButton,children:"Log in"})]})})]})})),x=n(82),_={onLogin:function(e){return f.e(e)},onLoginGoogle:function(){return f.g()},onLoginFacebook:function(){return f.f()}},M=Object(s.b)(null,_)((function(e){var t=Object(b.d)({initialValues:{email:"",password:""},validationSchema:m.b({email:m.d().email("Enter a valid email").required("Email is required"),password:m.d().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),onSubmit:function(t){e.onLogin({email:t.email,password:t.password})}});return Object(O.jsxs)("div",{style:{width:"500px"},className:j.a.Modal,children:[Object(O.jsx)("div",{className:j.a.field,children:Object(O.jsxs)("button",{className:j.a.GoogleButton,onClick:function(){e.onLoginGoogle()},children:[Object(O.jsx)("svg",{style:{marginRight:"8px"},width:"20",height:"20",fill:"currentColor",children:Object(O.jsx)("use",{href:"".concat(x.a,"#google")})}),"Continue with Google"]})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)("p",{children:"OR"})}),Object(O.jsxs)("form",{className:j.a.Form,onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{className:j.a.InputField,children:Object(O.jsx)(p.a,{id:"emailLogin",name:"email",label:"Email",variant:"outlined",fullWidth:!0,value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email})}),Object(O.jsx)("div",{className:j.a.InputField,children:Object(O.jsx)(p.a,{id:"passwordLogin",name:"password",label:"Password",type:"password",variant:"outlined",fullWidth:!0,value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)("button",{className:j.a.AuthButton,type:"submit",children:"Login"})})]}),Object(O.jsx)("div",{className:j.a.field,children:Object(O.jsxs)("p",{children:["Forgot your password?",Object(O.jsx)("button",{onClick:function(){e.onRecover()},className:d.a.BackgroundlessButton,children:"Recover it"})]})}),Object(O.jsx)("div",{className:j.a.field,children:Object(O.jsxs)("p",{children:["Don't have an account?",Object(O.jsx)("button",{onClick:function(){e.onSwitch()},className:d.a.BackgroundlessButton,children:"Sign up"})]})})]})})),S=n(116),N=Object(s.b)((function(e){return{user:e.user}}))((function(e){var t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],c=r.a.useState(""),s=Object(o.a)(c,2),u=s[0],l=s[1],h=Object(b.d)({initialValues:{email:""},validationSchema:m.b({email:m.d().email("Enter a valid email").required("Email is required")}),onSubmit:function(e){l(e.email),i(void 0);var t=Object(w.d)();Object(w.f)(t,e.email).then((function(){i(!0)})).catch((function(e){var t=e.code;console.log(t)}))}});return Object(O.jsxs)("div",{style:{width:"500px"},className:j.a.Modal,children:[Object(O.jsxs)("form",{className:j.a.Form,onSubmit:h.handleSubmit,children:[Object(O.jsx)("div",{className:j.a.InputField,children:Object(O.jsx)(p.a,{id:"email",name:"email",label:"Email",variant:"outlined",fullWidth:!0,value:h.values.email,onChange:h.handleChange,error:h.touched.email&&Boolean(h.errors.email),helperText:h.touched.email&&h.errors.email})}),Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)("button",{className:j.a.AuthButton,type:"submit",children:"Send Email"})})]}),a?Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsxs)("p",{children:["A password recovery email was sent to ",Object(O.jsx)("mark",{children:u})]})}):null,void 0===a?Object(O.jsx)(S.a,{}):null,Object(O.jsx)("div",{className:j.a.Field,children:Object(O.jsx)("button",{onClick:function(){e.onSwitch()},className:d.a.BackgroundlessButton,children:"Back to Login"})})]})}));t.a=function(e){var t=Object(a.useState)(0),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){i(e.slide)}),[e]),Object(O.jsx)("div",{className:c.a.UserWide,children:Object(O.jsx)("div",{className:c.a.UserNarrow,children:Object(O.jsxs)("div",{className:c.a.SlideBoard,style:{transform:"translateX(-".concat(r,"px)")},children:[Object(O.jsx)(g,{onSwitch:function(){return i(500)}}),Object(O.jsx)(M,{onSwitch:function(){return i(0)},onRecover:function(){return i(1e3)}}),Object(O.jsx)(N,{onSwitch:function(){return i(500)}})]})})})}},23:function(e,t,n){e.exports={GoogleButton:"ModalContent_GoogleButton__FvE_-",AuthButton:"ModalContent_AuthButton__1-hQb",Modal:"ModalContent_Modal__3Ifhp",Form:"ModalContent_Form__CuvMM",Control:"ModalContent_Control__1Qv-K",InputField:"ModalContent_InputField__1L800",Field:"ModalContent_Field__23ojU"}},235:function(e,t,n){e.exports={Loader:"Spinner_Loader__3QyOO",load2:"Spinner_load2__1ANmD"}},236:function(e,t,n){e.exports={Footer:"Footer_Footer__2yi8k"}},267:function(e,t,n){},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var o=n(151),a=(n(358),n(270),n(33));o.a.initializeApp({apiKey:"AIzaSyCkfEb7hWwjUsl_2sevK0Ei4H6Pl06w6jE",authDomain:"self-track-44917.firebaseapp.com",databaseURL:"https://self-track-44917-default-rtdb.firebaseio.com",projectId:"self-track-44917",storageBucket:"self-track-44917.appspot.com",messagingSenderId:"967880243135",appId:"1:967880243135:web:7c45542716be3d45a9930a",measurementId:"G-LN5V5DPKRF"});var r=o.a.auth(),i=new a.b,c=new a.a,s=o.a.firestore()},357:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(26),i=n.n(r),c=n(225),s=n(34),u=n(148),l=n(226),d=(n(267),n(268),n(65)),h=n(18),j=n(82),f=n(73),b=n.n(f),m=n(38),p=n(33),w=n(9),O={onSignout:function(){return m.i()},onSelect:function(e){return m.d(e)}},v=Object(s.b)((function(e){return{user:e.user,selectedView:e.selectedView}}),O)((function(e){var t=a.a.useState(!1),n=Object(h.a)(t,2),o=n[0],r=n[1];a.a.useEffect((function(){!e.user&&o&&(window.location.href="/")}),[o,e.user]);var i=function(t){e.onCloseSidedrawer(),e.onSelect(t)};return Object(w.jsxs)(d.a,{children:[Object(w.jsx)("button",{onClick:function(){window.location.href="/"},className:b.a.Header,children:"Stableyez"}),e.user&&"/app"===window.location.pathname&&Object(w.jsxs)(d.a,{children:[Object(w.jsx)("button",{onClick:function(){return i("trackers")},className:"".concat(b.a.MenuItem," ").concat("trackers"===e.selectedView?b.a.Active:""),children:"Trackers"}),Object(w.jsx)("button",{onClick:function(){return i("data")},className:"".concat(b.a.MenuItem," ").concat("data"===e.selectedView?b.a.Active:""),children:"Data"})]}),e.user?Object(w.jsx)("button",{onClick:function(){e.onSignout();var t=Object(p.d)();Object(p.i)(t).then((function(){r(!0)}))},className:b.a.MenuItem,children:"Sign out"}):Object(w.jsx)("button",{onClick:function(){e.onSignup()},className:b.a.MenuItem,children:"Sign up"})]})})),g=n(62),x=n.n(g),_=n(181),M=n(221),S=n(219),N=n(154),k=n.n(N),C=function(e){return Object(w.jsxs)(d.a,{children:[Object(w.jsx)("div",{className:k.a.Backdrop,style:{display:e.show?"unset":"none"},onClick:function(t){t.target.closest(".sideDrawerclass")||e.onHide()}}),Object(w.jsxs)("div",{className:"".concat(k.a.SideDrawer,"     sideDrawerclass"),style:{transform:e.show?"unset":"translateX(-100%)"},children:[Object(w.jsx)("div",{className:k.a.Content,children:e.children}),Object(w.jsx)(S.a,{})]})]})},y=Object(s.b)((function(e){return{user:e.user}}))((function(e){var t,n=a.a.useState(!1),o=Object(h.a)(n,2),r=o[0],i=o[1],c=a.a.useState(!1),s=Object(h.a)(c,2),u=s[0],l=s[1],d=a.a.useState(500),f=Object(h.a)(d,2),b=f[0],m=f[1];a.a.useEffect((function(){var e=document.querySelector(".toolbar"),t=document.querySelector(".header");if(e&&t){new IntersectionObserver((function(t){Object(h.a)(t,1)[0].isIntersecting?e.classList.remove(x.a.Sticky):e.classList.add(x.a.Sticky)}),{root:null,threshold:0,rootMargin:"-56px"}).observe(t)}}),[]);var p=function(){window.innerWidth>500?(m(0),i(!0)):window.location.href="/signup"};return Object(w.jsx)("div",{className:"".concat(x.a.Header," header"),children:Object(w.jsxs)("div",{className:"".concat(x.a.Toolbar," toolbar"),children:[Object(w.jsx)("div",{className:x.a.MenuButton,onClick:function(){return l(!0)},children:Object(w.jsx)("svg",{width:"30",height:"30",fill:"currentColor",children:Object(w.jsx)("use",{href:"".concat(j.a,"#list")})})}),Object(w.jsx)("div",{className:x.a.Menu,children:Object(w.jsx)(v,{onCloseSidedrawer:function(){},onSignup:p})}),Object(w.jsxs)("div",{children:[(null===(t=e.user)||void 0===t?void 0:t.emailVerified)&&"/app"!==window.location.pathname?Object(w.jsx)("button",{className:x.a.MainButton,onClick:function(){window.location.href="/app"},children:"App"}):null,e.user||"/"!==window.location.pathname?null:Object(w.jsx)("button",{onClick:function(){window.innerWidth>500?(m(500),i(!0)):window.location.href="/login"},className:x.a.MainButton,children:"Login"})]}),Object(w.jsx)(_.a,{show:r&&!e.user,onHide:function(){return i(!1)},children:Object(w.jsx)(M.a,{slide:b})}),Object(w.jsx)(C,{show:u,onHide:function(){return l(!1)},children:Object(w.jsx)(v,{onCloseSidedrawer:function(){return l(!1)},onSignup:p})})]})})})),B=n(108),E=n.n(B),F={clearError:function(){return m.k(null,(function(){}))}},D=Object(s.b)((function(e){return{errorMessage:e.errorMessage,errorModalFunc:e.errorModalFunc}}),F)((function(e){if(!e.errorMessage)return null;return Object(w.jsx)("div",{className:E.a.Backdrop,children:Object(w.jsxs)("div",{className:E.a.Modal,children:[Object(w.jsx)("div",{className:E.a.ErrorMessage,children:Object(w.jsx)("p",{children:e.errorMessage})}),Object(w.jsx)("div",{className:E.a.ButtonPanel,children:Object(w.jsx)("button",{onClick:function(){e.errorModalFunc(),e.clearError()},children:"Ok"})})]})})})),T=function(e){return Object(w.jsxs)(d.a,{children:[Object(w.jsx)(y,{}),Object(w.jsx)("main",{children:e.children}),Object(w.jsx)(D,{})]})},A=n(27),I=n(116),U=a.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,628))})),P=a.a.lazy((function(){return Promise.all([n.e(9),n.e(5)]).then(n.bind(null,637))})),z=a.a.lazy((function(){return n.e(6).then(n.bind(null,624))})),L=a.a.lazy((function(){return n.e(8).then(n.bind(null,625))})),q=a.a.lazy((function(){return n.e(7).then(n.bind(null,626))})),G=Object(s.b)((function(e){return{user:e.user}}))((function(e){return a.a.useEffect((function(){e.user&&!e.user.emailVerified&&"/validate"!==window.location.pathname&&(window.location.href="/validate")}),[e]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(T,{children:Object(w.jsx)(o.Suspense,{fallback:Object(w.jsx)(I.a,{}),children:Object(w.jsxs)(A.c,{children:[Object(w.jsx)(A.a,{path:"/app",component:U,exact:!0}),Object(w.jsx)(A.a,{path:"/signup",component:L}),Object(w.jsx)(A.a,{path:"/login",component:L}),Object(w.jsx)(A.a,{path:"/validate",component:z,exact:!0}),Object(w.jsx)(A.a,{path:"/complete-signup",component:q,exact:!0}),Object(w.jsx)(A.a,{path:"/",component:P,exact:!0})]})})})})})),W=n(49),H=n(41),V={user:null,userName:"",errorMessage:null,submitionState:"await",selectedView:"trackers",errorModalFunc:function(){}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.b:return Object(W.a)(Object(W.a)({},e),{},{user:t.user});case H.e:return Object(W.a)(Object(W.a)({},e),{},{submitionState:t.state});case H.a:return Object(W.a)(Object(W.a)({},e),{},{selectedView:t.selected});case H.d:return Object(W.a)(Object(W.a)({},e),{},{errorMessage:t.error,errorModalFunc:t.continueFunc});case H.c:return Object(W.a)(Object(W.a)({},e),{},{user:!1});case H.f:return Object(W.a)(Object(W.a)({},e),{},{userName:t.userName});default:return e}},Q=n(175),X=n(31),Y={activeUser:function(e){return m.h(e)},noActiveUser:function(){return m.i()}},J=Object(s.b)(null,Y)((function(e){var t=Object(o.useState)(null),n=Object(h.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){return X.a.onAuthStateChanged((function(t){if(t){console.log(t);var n=X.b.collection("users").doc(t.uid);r(n),e.activeUser(t)}else e.noActiveUser()}))}),[e]),Object(w.jsx)(Q.a.Provider,{value:a,children:e.children})})),K=n(176),Z=n(220),$=function(e){var t=e.children,n=Object(o.useState)(new Date(new Date(Date.now()).getFullYear(),new Date(Date.now()).getMonth(),new Date(Date.now()).getDate())),a=Object(h.a)(n,2),r=a[0],i=a[1];return Object(o.useEffect)((function(){var e=Object(Z.a)()-Date.now();setTimeout((function(){i(new Date(new Date(Date.now()).getFullYear(),new Date(Date.now()).getMonth(),new Date(Date.now()).getDate()))}),e)}),[r]),Object(w.jsx)(K.a.Provider,{value:r,children:t})},ee=n(171),te=n(179),ne=n(399),oe=Object(te.b)(),ae=Object(u.createStore)(R,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(c.a)));i.a.render(Object(w.jsx)(s.a,{store:ae,children:Object(w.jsx)(J,{children:Object(w.jsx)($,{children:Object(w.jsx)(ee.a,{children:Object(w.jsx)(ne.a,{theme:oe,children:Object(w.jsx)(G,{})})})})})}),document.getElementById("root"))},38:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"m",(function(){return h})),n.d(t,"k",(function(){return j})),n.d(t,"d",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"a",(function(){return C})),n.d(t,"n",(function(){return k})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return E}));var o=n(31),a=n(41),r=n(33),i=function(e){return function(t){o.a.signInWithEmailAndPassword(e.email,e.password).then((function(e){window.location.href="/app"})).catch((function(e){var n;console.log(e.code),n="auth/wrong-password"===e.code?"The password you entered is invalid, please try again or recover password":"auth/too-many-requests"===e.code?"Too many requests, the account is tempereraly locked, please try again later":"auth/network-request-failed"===e.code?"Network error, make sure you're connected to the internet":"The email address you entered isn't registered",t(j(n,(function(){})))}))}},c=function(){return function(e){window.innerWidth>500&&Object(r.g)(o.a,o.d).then((function(e){window.location.href="/app"})).catch((function(t){console.log(t.code),"auth/popup-closed-by-user"!==t.code&&e(j("Network error, make sure you're connected to the internet",(function(){})))})),window.innerWidth<=500&&Object(r.h)(o.a,o.d)}};Object(r.e)(o.a).then((function(e){var t=e.user;console.log("redirected google",t),t&&(window.location.href="/app")})).catch((function(e){}));var s=function(){return function(e){window.innerWidth>500&&Object(r.g)(o.a,o.c).then((function(e){})).catch((function(e){console.log(e)})),window.innerWidth<=500&&Object(r.h)(o.a,o.c)}},u=function(e){return function(t){var n={url:"https://www.stableyez.com/?email="+o.a.currentUser.email,handleCodeInApp:!0};o.a.currentUser.sendEmailVerification(n).then((function(){console.log("sent"),e&&t(j("Email sent",(function(){})))}))}},l=function(e){return{type:a.b,user:e}},d=function(){return{type:a.c}},h=function(e){return{type:a.f,userName:e}},j=function(e,t){return console.log(e),{type:a.d,error:e,continueFunc:t}},f=function(e){return{type:a.a,selected:e}},b=function(e){return{type:a.e,state:e}},m=n(0),p=n.n(m),w=n(3),O=n(6),v=n(2),g=n(109),x=function e(t,n,o,a){Object(v.a)(this,e),this.name=void 0,this.description=void 0,this.color=void 0,this.id=void 0,this.type=void 0,this.size=void 0,this.name=t,this.description=n,this.color=o,this.type="stopwatch",this.id=a||Object(g.a)(),this.size=0},_=function e(t,n,o,a){Object(v.a)(this,e),this.name=void 0,this.description=void 0,this.color=void 0,this.id=void 0,this.type=void 0,this.size=void 0,this.name=t,this.description=n,this.color=o,this.id=a||Object(g.a)(),this.type="checker",this.size=0},M=function e(t,n,o,a,r){Object(v.a)(this,e),this.name=void 0,this.description=void 0,this.color=void 0,this.id=void 0,this.type=void 0,this.size=void 0,this.name=t,this.description=n,this.color=o,this.id=r||Object(g.a)(),this.type="counter",this.size=a},S=function e(t,n,o,a){Object(v.a)(this,e),this.name=void 0,this.description=void 0,this.color=void 0,this.id=void 0,this.type=void 0,this.size=void 0,this.name=t,this.description=n,this.color=o,this.id=a||Object(g.a)(),this.type="rater",this.size=0},N={toFirestore:function(e){return{name:e.name,description:e.description,color:e.color,id:e.id,type:e.type,size:e.size}},fromFirestore:function(e){var t,n=e.data();switch(n.type){case"stopwatch":t=new x(n.name,n.description,n.color,n.id);break;case"rater":t=new S(n.name,n.description,n.color,n.id);break;case"counter":t=new M(n.name,n.description,n.color,n.size,n.id);break;default:t=new _(n.name,n.description,n.color,n.id)}return t}},k=function(e,t,n,o){return function(a){e.collection("trackers").doc(t).update(Object(O.a)({},n,"size"===n?+o:o)).then((function(){var e=n.slice(0,1).toUpperCase()+n.slice(1);a(j("".concat(e," successfully updated"),(function(){})))})).catch((function(e){a(j("Something went wrong... please try again",(function(){})))}))}},C=function(e,t,n,o,a,r){return function(i){var c;switch(t){case"stopwatch":c=new x(n,o,a);break;case"checker":c=new _(n,o,a);break;case"counter":c=new M(n,o,a,r);break;default:c=new S(n,o,a)}e.collection("trackers").doc(c.id).withConverter(N).set(c).then((function(){i(b(!0))})).catch((function(e){console.log(e),i(b(!1))}))}},y=function(e,t){return function(n){e.collection("trackers").doc(t).delete().then((function(){})).catch((function(e){}))}},B=function(){var e=Object(w.a)(p.a.mark((function e(t,n){var o,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],n.forEach((function(e){var n=t.collection("entries").doc(e).delete();o.push(n)})),e.next=4,Promise.all(o);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(e,t){return function(n){e.collection("entries").where("trackerId","==",t).get().then((function(t){var n=[];t.forEach((function(e){n.push(e.id)})),B(e,n).then((function(){})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return s}));var o="LOGIN",a="LOGOUT",r="SET_USER_NAME",i="SET_ERROR",c="GO_TO",s="SET_SUBMITION_STATE"},62:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1Lnqz",Header:"Toolbar_Header__3N-uk",Sticky:"Toolbar_Sticky__30tIa",MainButton:"Toolbar_MainButton__23jPQ",MenuButton:"Toolbar_MenuButton__10UhJ",Menu:"Toolbar_Menu___Svh7"}},65:function(e,t,n){"use strict";t.a=function(e){return e.children}},73:function(e,t,n){e.exports={MainMenu:"MainMenu_MainMenu__2_ibR",Menu:"MainMenu_Menu__3Mt12",Header:"MainMenu_Header__1g4XT",MenuItem:"MainMenu_MenuItem__1gxWz",Active:"MainMenu_Active__3N1u4"}},76:function(e,t,n){e.exports={BackgroundlessButton:"General_BackgroundlessButton__2AN7i",Background:"General_Background__2ZYr5",FloatingButton:"General_FloatingButton__2X1wc",Button:"General_Button__1wSim"}}},[[357,1,2]]]);
//# sourceMappingURL=main.7447bec0.chunk.js.map