(this.webpackJsonpprojectxadmin1=this.webpackJsonpprojectxadmin1||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(17),s=a.n(n),o=(a(42),a(43),a(11)),l=a(8),i=a(6),j=a(64),b=a(66),d=(a(44),a(1)),u=Object(r.createContext)(),h=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(d.jsx)(u.Provider,{value:Object(r.useReducer)(t,a),children:c})},O=function(){return Object(r.useContext)(u)};var x=function(){var e=O(),t=Object(i.a)(e,2),a=t[0].user,r=t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)(j.a.Brand,{children:"Smart City"})}),Object(d.jsx)(j.a.Brand,{className:"nav-style1",children:a}),Object(d.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsx)("div",{className:"navstyle",children:Object(d.jsxs)(b.a,{className:"mr-auto",children:[Object(d.jsxs)(o.b,{className:"link",to:"/",children:[" ",Object(d.jsx)(b.a.Link,{href:"/",children:"Home"})]}),"Guset User"===a&&Object(d.jsx)(o.b,{className:"link",to:"/signup",children:Object(d.jsx)(b.a.Link,{href:"/signup",children:"Signup"})}),"Guset User"===a&&Object(d.jsx)(o.b,{className:"link",to:"/login",children:Object(d.jsx)(b.a.Link,{href:"/login",children:"Login"})}),"Guset User"!==a&&Object(d.jsx)(o.b,{className:"link",to:"/upload",children:Object(d.jsx)(b.a.Link,{href:"/details",children:"Upload"})}),"Guset User"!==a&&Object(d.jsx)(o.b,{className:"link",to:"/",children:Object(d.jsx)(b.a.Link,{onClick:function(){r({type:"REMOVEUSER",user:"Guset User"})},href:"/login",children:"Logout"})})]})})})]})})};a(52);var p=function(){return Object(d.jsxs)("div",{className:"main-style",children:[Object(d.jsx)("h1",{className:"head-style",children:"Smart City"}),Object(d.jsx)("div",{className:"body-style",children:Object(d.jsx)("p",{children:"Smart Cities Mission is to drive economic growth and improve the quality of life of people by enabling local area development and harnessing technology, especially technology that leads to Smart outcomes."})})]})},m=(a(53),a(15)),f=a.n(m),g=a(19),v=(a(30),a(7)),y=a(65),k=a(63),S=(a(55),function(e){return Object(d.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(d.jsx)("div",{className:"lds-dual-ring"})})});a(56);var N=function(){var e=Object(l.g)(),t=O(),a=Object(i.a)(t,2)[1],n=Object(r.useState)(""),s=Object(i.a)(n,2),o=s[0],j=s[1],b=Object(r.useState)(""),u=Object(i.a)(b,2),h=u[0],x=u[1],p=Object(r.useState)(!1),m=Object(i.a)(p,2),N=m[0],C=m[1],w=function(){var t=Object(g.a)(f.a.mark((function t(r){var c,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),""!==o&&0!==o.length){t.next=5;break}v.b.error("please enter valid email"),t.next=29;break;case 5:if(""!==h&&0!==h.length){t.next=9;break}v.b.error("please enter valid password"),t.next=29;break;case 9:return t.prev=9,C(!0),t.next=13,fetch("http://localhost:5001/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:h})});case 13:return c=t.sent,t.next=16,c.json();case 16:if(n=t.sent,c.ok){t.next=19;break}throw new Error(n.message);case 19:C(!1),v.b.success("You are successfully Loggedin"),a({type:"SETUSER",user:o,token:n.token}),e.push("/"),t.next=29;break;case 25:t.prev=25,t.t0=t.catch(9),C(!1),v.b.error("Something Went Wrong");case 29:case"end":return t.stop()}}),t,null,[[9,25]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(v.a,{}),N&&Object(d.jsx)(S,{asOverlay:!0}),!N&&Object(d.jsx)("div",{className:"main-background1",children:Object(d.jsx)("div",{className:"background-style1",children:Object(d.jsx)("div",{className:"form-style1",children:Object(d.jsxs)(y.a,{onSubmit:w,children:[Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Email"}),Object(d.jsx)(y.a.Control,{type:"email",placeholder:"Enter Email",onChange:function(e){j(e.target.value),console.log(o)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Password"}),Object(d.jsx)(y.a.Control,{type:"password",placeholder:"password",onChange:function(e){x(e.target.value),console.log(h)}})]}),Object(d.jsx)(y.a.Group,{controlId:"formBasicCheckbox",children:Object(d.jsx)(y.a.Check,{className:"tcolor",type:"checkbox",label:"Keep logged in"})}),Object(d.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})};var C=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[!a&&Object(d.jsx)("div",{className:"background1",children:Object(d.jsx)("input",{className:"input-style1",onClick:function(){r(!a)},type:"button",value:"LOGIN"})}),a&&Object(d.jsx)(N,{})]})};a(57),a(58);var w=function(){var e=O(),t=Object(i.a)(e,2)[1],a=Object(l.g)(),n=Object(r.useState)(""),s=Object(i.a)(n,2),o=s[0],j=s[1],b=Object(r.useState)(""),u=Object(i.a)(b,2),h=u[0],x=u[1],p=Object(r.useState)(""),m=Object(i.a)(p,2),N=m[0],C=m[1],w=Object(r.useState)(!1),E=Object(i.a)(w,2),P=E[0],L=E[1],G=Object(r.useState)(),I=Object(i.a)(G,2),B=I[0],T=I[1],U=function(){var e=Object(g.a)(f.a.mark((function e(r){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==o&&0!==o.length){e.next=5;break}v.b.error("please enter a name"),e.next=37;break;case 5:if(""!==h&&0!==h.length){e.next=9;break}v.b.error("please enter a valid email"),e.next=37;break;case 9:if(!(B.length>10||B.length<9)){e.next=13;break}v.b.error("Please enter a valid phone Number"),e.next=37;break;case 13:if(""!==N&&0!==N.length){e.next=17;break}v.b.error("please enter a password"),e.next=37;break;case 17:return e.prev=17,L(!0),e.next=21,fetch("http://localhost:5001/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,email:h,phno:B,password:N})});case 21:return c=e.sent,e.next=24,c.json();case 24:if(n=e.sent,c.ok){e.next=27;break}throw new Error(n.message);case 27:L(!1),v.b.success("Successfully Signed up"),t({type:"SETUSER",user:h,token:n.token}),a.push("/"),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(17),L(!1),v.b.error(e.t0.message||"Something Went wrong");case 37:case"end":return e.stop()}}),e,null,[[17,33]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(v.a,{}),P&&Object(d.jsx)(S,{asOverlay:!0}),!P&&Object(d.jsx)("div",{className:"main-background",children:Object(d.jsx)("div",{className:"background-style",children:Object(d.jsx)("div",{className:"form-style",children:Object(d.jsxs)(y.a,{onSubmit:U,children:[Object(d.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Name"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Name",onChange:function(e){j(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Email"}),Object(d.jsx)(y.a.Control,{type:"email",placeholder:"Enter Email",onChange:function(e){x(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Phone No"}),Object(d.jsx)(y.a.Control,{type:"number",placeholder:"Enter Phno",onChange:function(e){T(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Password"}),Object(d.jsx)(y.a.Control,{type:"password",placeholder:"password",onChange:function(e){C(e.target.value)}})]}),Object(d.jsx)(y.a.Group,{controlId:"formBasicCheckbox",children:Object(d.jsx)(y.a.Check,{className:"tcolor",type:"checkbox",label:"Keep logged in"})}),Object(d.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})};var E=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[!a&&Object(d.jsx)("div",{className:"background",children:Object(d.jsx)("input",{className:"input-style",onClick:function(){r(!a)},type:"button",value:"SIGNUP"})}),a&&Object(d.jsx)(w,{})]})},P=a(20),L={user:"Guset User",token:""},G=function(e,t){switch(t.type){case"SETUSER":return localStorage.setItem("rajesh",JSON.stringify({token:t.token})),Object(P.a)(Object(P.a)({},e),{},{user:t.user,token:t.token});case"REMOVEUSER":return localStorage.removeItem("rajesh"),Object(P.a)(Object(P.a)({},e),{},{user:t.user,token:""});default:return e}};a(59);var I=function(){Object(l.g)();var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),j=o[0],b=o[1],u=Object(r.useState)(""),h=Object(i.a)(u,2),O=h[0],x=h[1],p=Object(r.useState)(""),m=Object(i.a)(p,2),N=m[0],C=m[1],w=Object(r.useState)(""),E=Object(i.a)(w,2),P=E[0],L=E[1],G=Object(r.useState)(""),I=Object(i.a)(G,2),B=I[0],T=I[1],U=Object(r.useState)(""),R=Object(i.a)(U,2),F=R[0],J=R[1],W=Object(r.useState)(!1),D=Object(i.a)(W,2),H=D[0],M=D[1],K=function(){var e=Object(g.a)(f.a.mark((function e(t){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==a.length){e.next=5;break}v.b.error("plaese enter city name"),e.next=47;break;case 5:if(0!==j.length){e.next=9;break}v.b.error("plaese enter Electricity details"),e.next=47;break;case 9:if(0!==O.length){e.next=13;break}v.b.error("please enter power details"),e.next=47;break;case 13:if(0!==N.length){e.next=17;break}v.b.error("please enter water details"),e.next=47;break;case 17:if(0!==P.length){e.next=21;break}v.b.error("please enter transport details"),e.next=47;break;case 21:if(0!==B.length){e.next=25;break}v.b.error("please provide education details"),e.next=47;break;case 25:if(0!==F.length){e.next=29;break}v.b.error("please provide hospitals details"),e.next=47;break;case 29:return e.prev=29,M(!0),e.next=33,fetch("http://localhost:5001/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({City:a,Electricity:j,Power:O,Water:N,Transportation:P,Education:B,Hospitals:F})});case 33:return r=e.sent,e.next=36,r.json();case 36:if(c=e.sent,r.ok){e.next=39;break}throw new Error(c.message);case 39:v.b.success(c.message),M(!1),e.next=47;break;case 43:e.prev=43,e.t0=e.catch(29),M(!1),v.b.error(e.t0.message||"Smething went wrong");case 47:case"end":return e.stop()}}),e,null,[[29,43]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(v.a,{}),H&&Object(d.jsx)(S,{asOverlay:!0}),!H&&Object(d.jsx)("div",{className:"outer-style",children:Object(d.jsx)("div",{className:"inner-style",children:Object(d.jsxs)(y.a,{onSubmit:K,children:[Object(d.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"City"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter City Name",onChange:function(e){n(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Electricity"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Electricity details",onChange:function(e){b(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Power"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Power details",onChange:function(e){x(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Water"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter water details",onChange:function(e){C(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Transport"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Trasport details",onChange:function(e){L(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Education"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Education details",onChange:function(e){T(e.target.value)}})]}),Object(d.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(y.a.Label,{className:"tcolor",children:"Hospitals"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Enter Hospital details",onChange:function(e){J(e.target.value)}})]}),Object(d.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})})]})};var B=function(){return Object(d.jsx)(h,{initialState:L,reducer:G,children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsxs)(l.b,{path:"/",exact:!0,children:[Object(d.jsx)(x,{}),Object(d.jsx)(p,{})]}),Object(d.jsxs)(l.b,{path:"/signup",exact:!0,children:[Object(d.jsx)(x,{}),Object(d.jsx)(E,{})]}),Object(d.jsxs)(l.b,{path:"/login",exact:!0,children:[Object(d.jsx)(x,{}),Object(d.jsx)(C,{})]}),Object(d.jsxs)(l.b,{path:"/upload",exact:!0,children:[Object(d.jsx)(x,{}),Object(d.jsx)(I,{})]}),Object(d.jsx)(l.a,{to:"/"})]})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};a(60);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),T()}},[[61,1,2]]]);
//# sourceMappingURL=main.b48c6b73.chunk.js.map