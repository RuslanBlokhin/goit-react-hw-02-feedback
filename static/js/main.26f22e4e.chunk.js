(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),o=(n(15),n(4)),i=n(5),b=n(6),j=n(10),u=n(9),l=n(7),d=n.n(l),h=n(0),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:Object.keys(t).map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:n,className:d.a.btn,children:e.toUpperCase()},e)}))})},O=function(e){var t=e.children,n=e.title;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:n.toUpperCase()}),t]})},x=function(e){var t=e.message;return Object(h.jsx)("h3",{children:t})},f=function(e){var t=e.options,n=e.total,c=e.positivePercentage;return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[e.toUpperCase(),": ",t[e]]})},e)}))}),Object(h.jsxs)("p",{children:["Total:",n]}),Object(h.jsxs)("p",{children:["Positive feedback:",c,"%"]})]}):Object(h.jsx)(x,{message:"No feedback given"})})},v=n(8),m=n.n(v),k=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedBack=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedBack()*100},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedBack(),t=this.countPositiveFeedbackPercentage(),n=this.handleIncrement;return Object(h.jsxs)("div",{className:m.a.box,children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(p,{options:this.state,onLeaveFeedback:n})}),Object(h.jsx)(O,{title:"Statistics",children:Object(h.jsx)(f,{options:this.state,total:e,positivePercentage:t})})]})}}]),n}(a.a.Component),g=function(){return Object(h.jsx)(k,{})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__ZmGVT"}},8:function(e,t,n){e.exports={box:"Feedback_box__1Z6me"}}},[[17,1,2]]]);
//# sourceMappingURL=main.26f22e4e.chunk.js.map