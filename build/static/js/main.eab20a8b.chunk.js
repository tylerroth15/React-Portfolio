(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),c=(a(78),a(6)),o=a(10),s=a(9),m=a(8),u=a(27),d=a(5),h=a(19),p=a(30),b=a(71),f=(a(79),a(24)),g=a(16);var y=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"border-top justify-content-between p-3"},r.a.createElement(g.a,{className:"p-0",md:3,sm:12},"Tyler Roth"),r.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Tyler Roth"))))},k=a(53);var E=function(e){return r.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-center py-5"},r.a.createElement(g.a,{md:8,sm:12},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},v=a(18),w=a(26);var N=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return r.a.createElement(w.a.div,{className:"t-hcard-info",style:t},r.a.createElement("p",{className:"t-hcard-title"},e.title),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Link"))};var S=function(e){return r.a.createElement("div",{className:"d-inline-block t-hcard",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"t-hcard-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(N,{title:e.item.title,link:e.item.link}))},j=a(54),C=a.n(j),x=a(55),L=a.n(x),T=a(56),I=a.n(T),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(S,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Connect with Me on LinkedIn",link:"https://www.linkedin.com/in/tyler-roth/",imgSrc:L.a,selected:!1},{id:1,title:"Check Out My Work",imgSrc:I.a,link:"https://github.com/tylerroth15",selected:!1},{id:2,title:"About Me",imgSrc:C.a,link:"/about",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var A=function(e){return r.a.createElement("div",null,r.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(O,null))};var H=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return r.a.createElement(w.a.div,{className:"t-card-info",style:t},r.a.createElement("p",{className:"t-card-title"},e.title),r.a.createElement("p",{className:"t-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.gitHubLink,target:"_blank",rel:"noopener noreferrer"},"GitHub Repo Link"),r.a.createElement("a",{href:e.deployedLink,target:"_blank"},"Application Link"))};var W=function(e){return r.a.createElement("div",{className:"d-inline-block t-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"t-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(H,{title:e.item.title,subTitle:e.item.subTitle,gitHubLink:e.item.gitHubLink,deployedLink:e.item.deployedLink}))},P=a(57),F=a.n(P),M=a(58),D=a.n(M),G=a(59),R=a.n(G),B=a(60),J=a.n(B),_=a(61),q=a.n(_),z=a(62),U=a.n(z),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(W,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Weather Dashboard",subTitle:"Mobile Friendly Weather App",imgSrc:F.a,gitHubLink:"https://github.com/tylerroth15/Weather-Dashboard",deployedLink:"https://tylerroth15.github.io/Weather-Dashboard/",selected:!1},{id:1,title:"Work Day Schedule",subTitle:"How to stay on task and on time",imgSrc:D.a,gitHubLink:"https://github.com/tylerroth15/Daily-Work-Schedule",deployedLink:"https://tylerroth15.github.io/Daily-Work-Schedule/",selected:!1},{id:2,title:"SCF Arcade",subTitle:"Take a break and play a game with us",imgSrc:R.a,gitHubLink:"https://github.com/tylerroth15/Salty-Cloud-Frogs-Project-1",deployedLink:"https://tylerroth15.github.io/Salty-Cloud-Frogs-Project-1/",selected:!1},{id:3,title:"Note Taker",subTitle:"Never miss an important idea or task again",imgSrc:J.a,gitHubLink:"https://github.com/tylerroth15/note-taker",deployedLink:"https://tylers-note-taker.herokuapp.com/",selected:!1},{id:4,title:"Hamburger Builder",subTitle:"Lettuce Make You the Perfect Hamburger",imgSrc:q.a,gitHubLink:"https://github.com/tylerroth15/Node-Express-Handlebars",deployedLink:"https://hamburger-builder-node-express.herokuapp.com/burgers",selected:!1},{id:5,title:"Workout Tracker",subTitle:"Never miss a PR with our fitness tracker",imgSrc:U.a,gitHubLink:"https://github.com/tylerroth15/Workout-Tracker",deployedLink:"https://tylerroth15.github.io/Weather-Dashboard/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var $=function(e){return r.a.createElement(Y,null,r.a.createElement(Y.Item,null))};var K=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:8},e.children)))};var Q=function(e){return r.a.createElement("div",null,r.a.createElement(E,{title:e.title}),r.a.createElement(K,null,r.a.createElement("p",null,"My name is Tyler Roth. I was born and raised in Indianapolis, Indiana with my two sisters. I lived in Indiana until summer of 2007 when I joined the Air Force and went to school at the Air Force Academy in Colorado Springs. While at the Academy, I played D1 volleyball as well as, club softball and lacrosse. I graduated from the Academy in May of 2011 with a Bachelor's of Science with a concentration in Engineering and English. Unfortunately, I ended up having 10 knee surgeries on my right knee over the course of 5 years and was medically discharged just shy of two months prior to pilot training."),r.a.createElement("p",null," After leaving the Air Force, I started my engineering career in the Aerospace Engineering Industry. I began this career with Rolls Royce and was able to transfer to Savannah when my husband was based here with the 1/75th Army Ranger Battalion at Hunter Army Air Field. "),r.a.createElement("p",null,"In Janurary 2019, my husband and I started our own Digital Marketing company. This is where I discovered my love for programming. I started teaching myself basic HTML and CSS and quickly realized this was my passion and wanted to fully pursue this new career. "),r.a.createElement("p",null," I now work for a marketing agency as a digital strategist and my main focus is web development. As I continue to grow at work and through the Coding Bootcamp, I am finding out that I have never been more excited about work in my life. ")))},V=a(23),X=a(14),Z=a(64),ee=a(63),te=a.n(ee),ae=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;n.setState(Object(V.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),te.a.post("http://localhost:3000/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{title:this.props.title}),r.a.createElement(K,null,r.a.createElement(X.a,{onSubmit:this.handleSubmit},r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,{htmlFor:"full-name"},"Full Name "),r.a.createElement(X.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,{htmlFor:"email"},"Email "),r.a.createElement(X.a.Control,{id:"email",name:"email",type:"email",value:this.state.email})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,{htmlFor:"message"},"Message "),r.a.createElement(X.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message})),r.a.createElement(Z.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&r.a.createElement("p",{className:"d-inline success-msg"},"Email Sent Successfully"),!1===this.state.emailSent&&r.a.createElement("p",{className:"d-inline err-msg"},"Email Could Not Be Sent"))))}}]),a}(r.a.Component),ne=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Tyler Roth",headerLinks:[{title:"Home",path:"/"},{title:"Portfolio",path:"/portfolio"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Dream Bigger",subTitle:"New to the game, but here to stay",text:"Checkout my progress"},portfolio:{title:"Portfolio"},about:{title:"About Me"},contact:{title:"Let's Connect"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"p-0",fluid:!0},r.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(p.a.Brand,null,"Tyler Roth"),r.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(p.a.Collapse,{id:"navbar-toggle"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home "),r.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"Portfolio "),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(d.a,{path:"/",exact:!0,render:function(){return r.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(d.a,{path:"/portfolio",exact:!0,render:function(){return r.a.createElement($,{title:e.state.portfolio.title})}}),r.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return r.a.createElement(Q,{title:e.state.about.title})}}),r.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return r.a.createElement(ae,{title:e.state.contact.title})}}),r.a.createElement(y,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/tyheadshot.7e0fa1f0.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/tylaugh.9a94344e.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/tycomp.d3ddfeb7.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/weatherdash.fe637def.PNG"},58:function(e,t,a){e.exports=a.p+"static/media/workschedule.f6394f4e.PNG"},59:function(e,t,a){e.exports=a.p+"static/media/project1.567ef3d4.PNG"},60:function(e,t,a){e.exports=a.p+"static/media/note1.4a12dbfc.PNG"},61:function(e,t,a){e.exports=a.p+"static/media/burgerapp.f76ce806.PNG"},62:function(e,t,a){e.exports=a.p+"static/media/workoutmobile.59cc74aa.PNG"},73:function(e,t,a){e.exports=a(104)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.eab20a8b.chunk.js.map