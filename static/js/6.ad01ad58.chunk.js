(this.webpackJsonpHolmes=this.webpackJsonpHolmes||[]).push([[6],{51:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(52),o=n(47),i=n(48),s=n(50),r=n(49),l=n(0),c=n.n(l),h=(n(51),n(54)),m=Math.max,u=Math.min,p=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).topLine=void 0,a.bottomLine=void 0,a.topLine=c.a.createRef(),a.bottomLine=c.a.createRef(),a}return Object(i.a)(n,[{key:"render",value:function(){var e,t="sticky",n="".concat(this.props.top,"%"),a="".concat(this.props.bottom,"%"),o=999999999999;this.props.container instanceof Window&&(t="fixed"),!0===this.props.vision&&(e=1),!1===this.props.vision&&(e=0,o=-999999999999),this.props.bottom>50&&(a="50%"),this.props.bottom<0&&(a="0%"),this.props.top>100&&(n="100%"),this.props.top<50&&(n="50%");return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:this.topLine,style:{position:t,bottom:n,left:"0px",right:"0px",height:"1px",opacity:e,backgroundColor:"red",pointerEvents:"none",zIndex:o},id:"rosinanteTopElement"}),c.a.createElement("div",{ref:this.bottomLine,style:{position:t,bottom:a,left:"0px",right:"0px",height:"1px",opacity:e,backgroundColor:"red",pointerEvents:"none",zIndex:o},id:"rosinanteBottomElement"}))}}]),n}(l.Component),f=function(){function e(t){var n=t.scrollContainer,a=t.topLine,i=t.bottomLine,s=t.scrollItem,r=t.scrollTarget,l=t.once,c=t.visible,h=t.notVisible,m=t.throttle,u=t.responsiveBreakPoint,p=t.elementPieceTopSmall,f=t.elementPieceBottomSmall,d=t.elementPieceTopLarge,b=t.elementPieceBottomLarge;Object(o.a)(this,e),this.Rosinante=void 0,this.debounce_c=void 0,this.throttle_c=void 0,this.throttledHeart=void 0,this.Rosinante={scrollContainer:n,scrollItem:s,scrollTarget:r,once:l,visible:c,notVisible:h,throttle:m,responsiveBreakPoint:u,elementPieceTopSmall:p,elementPieceBottomSmall:f,elementPieceTopLarge:d,elementPieceBottomLarge:b,topLine:a,bottomLine:i},this.callRosinante=this.callRosinante.bind(this),this.removeRosinante=this.removeRosinante.bind(this),this.isVisible=this.isVisible.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.throttle_c=this.throttle.bind(this),this.debounce_c=this.debounce.bind(this),this.rosinanteHeart=this.rosinanteHeart.bind(this),this.throttledHeart=this.throttle(this.rosinanteHeart,m,{})}return Object(i.a)(e,[{key:"callRosinante",value:function(){var e=this;this.Rosinante.scrollContainer.addEventListener("scroll",this.throttledHeart),setTimeout((function(){e.rosinanteHeart()}),1)}},{key:"removeRosinante",value:function(){this.Rosinante.scrollContainer.removeEventListener("scroll",this.throttledHeart)}},{key:"rosinanteHeart",value:function(){var e=this;this.onVisibilityChange(this.Rosinante.scrollTarget,(function(){!0===e.Rosinante.once&&e.Rosinante.scrollContainer.removeEventListener("scroll",e.throttledHeart),e.Rosinante.visible()}),(function(){e.Rosinante.notVisible()}))}},{key:"isVisible",value:function(e){var t,n,a=e.getBoundingClientRect();if(this.Rosinante.topLine&&this.Rosinante.bottomLine&&(t=this.Rosinante.topLine.getBoundingClientRect().y,n=this.Rosinante.bottomLine.getBoundingClientRect().y),(window.innerWidth||document.documentElement.clientWidth)<=this.Rosinante.responsiveBreakPoint){var o=a.y+this.Rosinante.elementPieceTopSmall,i=a.y+this.Rosinante.elementPieceBottomSmall;return!(t>o)&&!(n<i)}if((window.innerWidth||document.documentElement.clientWidth)>this.Rosinante.responsiveBreakPoint){var s=a.y+this.Rosinante.elementPieceTopLarge,r=a.y+this.Rosinante.elementPieceBottomLarge;return!(t>s)&&!(n<r)}}},{key:"onVisibilityChange",value:function(e,t,n){var a=this.isVisible(e);!0===a&&"function"==typeof t&&t(),!1===a&&"function"==typeof t&&n()}},{key:"debounce",value:function(e,t,n){var a,o,i,s,r,l,c=this,h=0,p=!1,f=!1,d=!0;if("function"!==typeof e)throw new TypeError("NOT A FUNCTION");function b(t){var n=a,i=o;return a=o=void 0,h=t,s=e.apply(i,n)}function v(e){return h=e,r=setTimeout(y,t),p?b(e):s}function g(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-h>=i}function y(){var e=Date.now();if(g(e))return E(e);r=setTimeout(y,function(e){var n=t-(e-l);return f?u(n,i-(e-h)):n}(e))}function E(e){return r=void 0,d&&a?b(e):(a=o=void 0,s)}t=Number(t)||0,"object"===typeof n&&(p=!!n.leading,i=(f="maxWait"in n)?m(Number(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d);var R=function(){for(var e=Date.now(),n=g(e),i=arguments.length,h=new Array(i),m=0;m<i;m++)h[m]=arguments[m];if(a=h,o=c,l=e,n){if(void 0===r)return v(l);if(f)return r=setTimeout(y,t),b(l)}return void 0===r&&(r=setTimeout(y,t)),s};return R.cancel=function(){void 0!==r&&clearTimeout(r),h=0,a=l=o=r=void 0},R.flush=function(){return void 0===r?s:E(Date.now())},R}},{key:"throttle",value:function(e,t,n){var a=!0,o=!0;if("function"!==typeof e)throw new TypeError("NOT A FUNCTION");return"object"===typeof n&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),this.debounce(e,t,{leading:a,maxWait:t,trailing:o})}}]),e}(),d=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).constantFrame=void 0,a.image=void 0,a.constantFrame={WebkitClipPath:"polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)",ClipPath:"polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)",WillChange:"clip-path",transition:"clip-path 500ms ease 0s; -webkit-clip-path 500ms ease 0s"},a.state={keyFrameSet:!1,shape:{},Rosinante:!1,changed:!1},a.image=c.a.createRef(),a.generateKeyframe=a.generateKeyframe.bind(Object(h.a)(a)),a.itemVisible=a.itemVisible.bind(Object(h.a)(a)),a.itemNotVisible=a.itemNotVisible.bind(Object(h.a)(a)),a.getRandomNumber=a.getRandomNumber.bind(Object(h.a)(a)),a}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.state.Rosinante.removeRosinante()}},{key:"itemVisible",value:function(){this.image.current.style.webkitClipPath=this.constantFrame.WebkitClipPath,this.setState({keyFrameSet:!1,changed:!1})}},{key:"itemNotVisible",value:function(){if(!this.state.keyFrameSet){var e=this.generateKeyframe();this.image.current.style.webkitClipPath=e.WebkitClipPath,this.setState({keyFrameSet:!0})}}},{key:"componentDidUpdate",value:function(e,t){this.state.changed!==t.changed&&this.state.Rosinante.callRosinante(),this.state.Rosinante.Rosinante&&t.Rosinante.Rosinante&&(this.state.Rosinante.Rosinante.once===t.Rosinante.Rosinante.once&&this.state.Rosinante.Rosinante.throttle===t.Rosinante.Rosinante.throttle&&this.state.Rosinante.Rosinante.responsiveBreaKPoint===t.Rosinante.Rosinante.responsiveBreakPoint&&this.state.Rosinante.Rosinante.elementPieceTopSmall===t.Rosinante.Rosinante.elementPieceTopSmall&&this.state.Rosinante.Rosinante.elementPieceBottomSmall===t.Rosinante.Rosinante.elementPieceBottomSmall&&this.state.Rosinante.Rosinante.elementPieceTopLarge===t.Rosinante.Rosinante.elementPieceTopLarge&&this.state.Rosinante.Rosinante.elementPieceBottomLarge===t.Rosinante.Rosinante.elementPieceBottomLarge||!this.state.changed||(t.Rosinante.removeRosinante(),this.state.Rosinante.callRosinante())),e.changed!==this.props.changed&&this.props.changed&&this.props.topLine&&this.props.bottomLine&&this.setState({shape:this.constantFrame,Rosinante:new f({scrollContainer:window,topLine:this.props.topLine.current,bottomLine:this.props.bottomLine.current,scrollItem:this.image.current,scrollTarget:this.image.current,once:this.props.once,visible:this.itemVisible,notVisible:this.itemNotVisible,throttle:this.props.throttle,responsiveBreakPoint:this.props.responsiveBreakPoint,elementPieceTopSmall:this.props.EPTS,elementPieceBottomSmall:this.props.EPBS,elementPieceTopLarge:this.props.EPTL,elementPieceBottomLarge:this.props.EPBL}),changed:!0})}},{key:"componentDidMount",value:function(){}},{key:"generateKeyframe",value:function(){var e=Math.floor(this.getRandomNumber(0,40)),t=Math.floor(this.getRandomNumber(60,100)),n=Math.floor(this.getRandomNumber(0,40)),a=Math.floor(this.getRandomNumber(60,100)),o=Math.floor(this.getRandomNumber(60,100)),i=Math.floor(this.getRandomNumber(0,40)),s=Math.floor(this.getRandomNumber(60,100)),r=Math.floor(this.getRandomNumber(0,40)),l=Math.floor(this.getRandomNumber(0,40));return{WebkitClipPath:"polygon(".concat(50,"% ").concat(e,"%, ").concat(t,"% ").concat(n,"%, ").concat(a,"% ").concat(o,"%, ").concat(i,"% ").concat(s,"%, ").concat(r,"% ").concat(l,"%)"),ClipPath:"polygon(".concat(50,"% ").concat(e,"%, ").concat(t,"% ").concat(n,"%, ").concat(a,"% ").concat(o,"%, ").concat(i,"% ").concat(s,"%, ").concat(r,"% ").concat(l,"%)")}}},{key:"getRandomNumber",value:function(e,t){return Math.random()*(t-e)+e}},{key:"render",value:function(){var e=c.a.createElement("img",{alt:"alt",ref:this.image,className:"imageTransition",src:this.props.picture}),t=c.a.createElement("div",null);return this.props.index%2===0&&(e=c.a.createElement("div",null),t=c.a.createElement("img",{alt:"img",ref:this.image,className:"imageTransition",src:this.props.picture})),c.a.createElement("div",{className:"scrollTest"},e,t)}}]),n}(l.Component),b=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).ref=void 0,a.state={pictures:["/rosinante/0.jpeg","/rosinante/1.jpeg","/rosinante/2.jpeg","/rosinante/3.jpeg","/rosinante/4.jpeg"],changed:!1,form:{bottomLine:20,topLine:78,once:!1,visible:!0,throttle:400,responsiveBreakPoint:800,EPTS:140,EPBS:40,EPTL:350,EPBL:100},current:!1},a.change=a.change.bind(Object(h.a)(a)),a.ref=c.a.createRef(),a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"change",value:function(e){var t=this,n=e.target;if("once"===n.name){var o=n.checked;this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{once:o})})}if("visible"===n.name){var i=n.checked;this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{visible:i})})}if("throttle"===n.name){var s=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{throttle:s})})}if("responsiveBreakPoint"===n.name){var r=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{responsiveBreakPoint:r})})}if("EPTS"===n.name){var l=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{EPTS:l})})}if("EPBS"===n.name){var c=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{EPBS:c})})}if("EPTL"===n.name){var h=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{EPTL:h})})}if("EPBL"===n.name){var m=parseInt(n.value);this.setState({changed:!0,form:Object(a.a)(Object(a.a)({},this.state.form),{},{EPBL:m})})}if("topLine"===n.name){var u=parseInt(n.value);n.value>100&&(u=100),n.value<50&&(u=50),this.setState({form:Object(a.a)(Object(a.a)({},this.state.form),{},{topLine:u})})}if("bottomLine"===n.name){var p=parseInt(n.value);n.value>50&&(p=50),n.value<0&&(p=0),this.setState({form:Object(a.a)(Object(a.a)({},this.state.form),{},{bottomLine:p})})}setTimeout((function(){t.setState({changed:!1})}),1)}},{key:"componentDidMount",value:function(){var e=this;this.ref.current&&(this.setState({current:this.ref.current,changed:!0}),setTimeout((function(){e.setState({changed:!1})}),1))}},{key:"render",value:function(){var e,t,n=this,a=this.state.current;return a&&(e=a.topLine,t=a.bottomLine),c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{ref:this.ref,vision:this.state.form.visible,container:window,top:this.state.form.topLine,bottom:this.state.form.bottomLine}),c.a.createElement("div",{className:"rosinante-form-explaination"},c.a.createElement("form",{className:"rosinante-form"},c.a.createElement("label",null,"Top Line"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"topLine",defaultValue:this.state.form.topLine}),c.a.createElement("label",null,"Bottom Line"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"bottomLine",defaultValue:this.state.form.bottomLine}),c.a.createElement("label",null,"Fire Only Once"),c.a.createElement("input",{onChange:this.change,type:"checkbox",name:"once"}),c.a.createElement("label",null,"Lines Visible"),c.a.createElement("input",{onChange:this.change,checked:this.state.form.visible,type:"checkbox",name:"visible"}),c.a.createElement("label",null,"Throttle"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"throttle",defaultValue:this.state.form.throttle}),c.a.createElement("label",null,"Responsive Break Point"),c.a.createElement("input",{type:"text",name:"responsiveBreakPoint",defaultValue:this.state.form.responsiveBreakPoint}),c.a.createElement("label",null,"Element Piece = 0 (top of the element)"),c.a.createElement("label",null,"Element Piece Top (Small Screen)"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"EPTS",defaultValue:this.state.form.EPTS}),c.a.createElement("label",null,"Element Piece Bottom (Small Screen)"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"EPBS",defaultValue:this.state.form.EPBS}),c.a.createElement("label",null,"Element Piece Top (Large Screen)"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"EPTL",defaultValue:this.state.form.EPTL}),c.a.createElement("label",null,"Element Piece Bottom (Large Screen)"),c.a.createElement("input",{onKeyUp:this.change,type:"text",name:"EPBL",defaultValue:this.state.form.EPBL})),c.a.createElement("div",{className:"rosinante-info"}," ")),this.state.pictures.map((function(a,o){return c.a.createElement(d,{once:n.state.form.once,throttle:n.state.form.throttle,responsiveBreakPoint:n.state.form.responsiveBreakPoint,EPTS:n.state.form.EPTS,EPBS:n.state.form.EPBS,EPTL:n.state.form.EPTL,EPBL:n.state.form.EPBL,changed:n.state.changed,topLine:e,bottomLine:t,picture:a,key:a,index:o})})))}}]),n}(l.Component),v=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"rosinante-docs-container"},c.a.createElement("div",{className:"rosinante-docs"},c.a.createElement("p",null,"The library is divided into two parts, one is a React Component (called Vision) that returns two reference lines and the other is the main part of the library (called Rosinante), that takes care of the basic functions needed for the whole system to work. The reason for the decoupling (at the beginning, they were tightly bound together) is to allow for some freedom and to make it possible to pass a reference of the same two lines to multiple components. That way the lines won't be rendered multiple times, depending on how much components are on the screen. The lines are the result of my frustration with the lack of visualisation in the conventional way of doing this. You guessed it, I wrote a library to avoid having to type in some numbers and not having any visual representation on the screen. I could have learned it, mastered the system, but where is the fun in that?"),c.a.createElement("p",null,"Disclaimer: if you are looking for a library that has some built in fancy animations and cool effects that will save you time and probably money, I need to disappoint you, that's not the problem we are solving here."),c.a.createElement("h1",null,"Vision"),c.a.createElement("iframe",{height:"250",style:{width:"100%"},scrolling:"no",title:"Rosinante / Vision",src:"//codepen.io/rosinant3/embed/rRBboW/?height=265&theme-id=0&default-tab=js",frameBorder:"no",allowFullScreen:!0},"See the Pen ",c.a.createElement("a",{href:"https://codepen.io/rosinant3/pen/rRBboW/"},"Rosinante / Vision")," by rosinant3 (",c.a.createElement("a",{href:"https://codepen.io/rosinant3"},"@rosinant3"),") on ",c.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."),c.a.createElement("p",null,'Like already demonstrated, the Vision component takes in a couple of props. One of them is the "vision" prop, which is supposed to be of boolean type and, if set to true, the lines will be visible (for working purposes), if set to false, the lines will get an opacity of zero and a z-index of -999999999999, which brings us to another prop. The zIndex prop will allow you to change the z-index according to your needs. It works only if visible is true and is relly optional. The container prop lets you set the container. If the container is of type Window, the lines will get the position "fixed", if it\'s an element, they\'ll get the position sticky (but watch out with this one if you are aiming for browser compatibility). The last two props, top and bottom, are required. The "top" prop accepts values between 100 and 50, if you type in a value that is below 50 and above 100, it will lock you down to the maximum allowed value. The "bottom" prop accepts values between 0 and 50. Important thing to note is, that the values 0 to 100 represent the percentage of the screen/container.'),c.a.createElement("p",null,'Now comes the fun part. If you create a ref for the "Vision" component, you will be granted access to the two lines, which you can pass down, in form of props, to whichever component you desire.'),c.a.createElement("h1",null,"Rosinante"),c.a.createElement("p",null,"It's time to call the horse."),c.a.createElement("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Rosinante",src:"//codepen.io/rosinant3/embed/KEKPOX/?height=265&theme-id=0&default-tab=js",frameBorder:"no",allowFullScreen:!0},"See the Pen ",c.a.createElement("a",{href:"https://codepen.io/rosinant3/pen/KEKPOX/"},"Rosinante")," by rosinant3 (",c.a.createElement("a",{href:"https://codepen.io/rosinant3"},"@rosinant3"),") on ",c.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."),c.a.createElement("p",null,'The "Rosinante" class takes quite a lot of in. The first parameter is the container, to which we will apply the scroll event listener. It can be a div or the window.'),c.a.createElement("p",null,"The second and third parameter are the lines, that we have passed in the form of props to the component we want to change."),c.a.createElement("p",null,"The fourth parameter is the item that gets affected by the scroll event. The fifth parameter, can be the same item, but it can also be another target if the item is currently off screen due to your setup."),c.a.createElement("p",null,"The sixth parameter defines whether or not you want the event to fire once or multiple times. The seventh and eight parameter are two function, that you will code yourself and pass to the class. One function defines the look of your item when it's detected to be between the two lines (on screen), the other function defines the look of your item when it's off screen. I think you can set one of them to false, because the function that handles them checks whether or not the argument is a function or not. But you shouldn't skip one entirely."),c.a.createElement("p",null,"The ninth parameter is the throttle value. The class uses the \"lodash.throttle/debounce\" functions, so don't worry, I didn't code that one myself."),c.a.createElement("p",null,"The tenth parameter is the width value, which breaks down the application into two parts. Why? It's explained in the next paragraph."),c.a.createElement("p",null,"The last four parameters define the element pieces. The simplest explanation is the following. If you set the element piece to zero, it means that the event will trigger when the top or bottom line (EPT/EPB) passes the top point of the element. It's prefered that the value for Element Piece Bottom is smaller than the value for Element Piece Top, because you are defining when the element is on/off screen."),c.a.createElement("p",null,"That's all I have for now. You can test the library in the preview section or get the file, it's in the GitHub repository of this page on my profile. If you have any constructive or unconstructive criticism, do not hold back! Have a nice day and don't forget to live the code!")))}}]),n}(l.Component),g=n(8),y=n(74),E=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={loading:!0,location:"home"},a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),1)}},{key:"render",value:function(){var e,t,n,o,i,s=this;return"home"===this.state.location&&(n=c.a.createElement(g.b,{className:"active-link",to:"/"},"Home"),o=c.a.createElement(g.b,{to:"/docs",onClick:function(e){e.preventDefault(),s.setState(Object(a.a)(Object(a.a)({},s.state),{},{location:"docs"}))}},"Docs")),"docs"===this.state.location&&(n=c.a.createElement(g.b,{to:"/",onClick:function(e){e.preventDefault(),s.setState(Object(a.a)(Object(a.a)({},s.state),{},{location:"home"}))}},"Home"),o=c.a.createElement(g.b,{className:"active-link",to:"/docs"},"Docs")),this.state.loading&&(e=c.a.createElement("div",{className:"loadingScreen"})),this.state.loading||("home"===this.state.location&&(i=c.a.createElement(b,null)),"docs"===this.state.location&&(i=c.a.createElement(v,null)),t=c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"rosinante-presentation"},c.a.createElement("div",{className:"rosinante-name"},c.a.createElement("div",null,"Rosinante"),c.a.createElement("div",{style:{fontSize:"1rem"}},"Scroll Event Library for React.js"),c.a.createElement("span",null,c.a.createElement("a",{style:{textDecoration:"none",color:"white"},title:"https://github.com/rosinant3",href:"https://github.com/rosinant3/rosinant3.github.io/tree/master/rosinante",target:"_blank",rel:"noopener noreferrer",className:"github"},"/rosinant3.github.io/tree/master/rosinante")))),c.a.createElement("nav",null,n,o),i)),c.a.createElement(c.a.Fragment,null,c.a.createElement(y.Helmet,null),e,t)}}]),n}(l.Component);t.default=E}}]);
//# sourceMappingURL=6.ad01ad58.chunk.js.map