(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),i=a.n(l),s=(a(77),a(23)),c=a(24),m=a(27),o=a(25),u=a(28),y=(a(78),a(79),a(9)),p=a(115),h=a(61),f=a(114),E=a(116),v=(a(80),a(120)),w=a(121),d=a(119),b=a(112),g=a(113);function k(e){var t=e.firstPlayer?"\u26aa\ufe0f":"\u26ab\ufe0f",a=e.firstPlayer?"\u26ab\ufe0f":"\u26aa\ufe0f",r=e.firstPlayer?e.isBlack?"":"-active":e.isBlack?"-active":"",l="-active"===r?"":"-active",i=e.firstPlayer?e.player2:e.player1;return e.nameEntered?n.a.createElement(h.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(v.a,{className:"normalCards"},n.a.createElement(v.a.Header,null,"PLAYERS",n.a.createElement(_,{key_:"right",value:"Click to decide who go first!",onClick:function(){return e.switchPlayer()},name:"Switch Player",variant:"switch"}),n.a.createElement(_,{key_:"right",value:"Click to change the names!",onClick:function(){return e.resetNames()},name:"Reset Names",variant:"switch"}))),n.a.createElement(v.a,{className:"normalCards"},n.a.createElement(v.a.Text,null,n.a.createElement("br",null),n.a.createElement("strong",null,i)," go first"),n.a.createElement(w.a,{variant:"flush"},n.a.createElement(w.a.Item,{className:"listItems"+r},e.player1,n.a.createElement("br",null)," ",t),n.a.createElement(w.a.Item,{className:"listItems"+l},e.player2,n.a.createElement("br",null)," ",a)))):n.a.createElement(h.a,{className:"bottonContainer-left",lg:"auto"},n.a.createElement(P,{setPlayer1Name:e.setPlayer1Name,setPlayer2Name:e.setPlayer2Name,player1:e.player1,player2:e.player2,submitNames:e.submitNames}),n.a.createElement("a",{style:{marginTop:"50px"},href:"https://ruihuasui.github.io/react-simple2048/"},"Try ",n.a.createElement("strong",null,"Simple 2048")," Here"))}function N(e){var t=n.a.createElement("p",null,"Click to ",n.a.createElement("strong",null,"Start a new Game!"),n.a.createElement("br",null),"(please set the players before starting)."),a=n.a.createElement("p",null,"Click to go back 1 step");return e.nameEntered?n.a.createElement(h.a,{className:"bottonContainer-right",md:"auto"},n.a.createElement(_,{key_:"left",value:"Sorry the Computer vs. User mode is in-progress.",onClick:function(){return 1},name:"Mode",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(_,{key_:"left",value:t,onClick:function(){return e.newGame()},name:"New Game",class_:"normalButtons",variant:"flat",size:"xxl"}),n.a.createElement(_,{key_:"left",value:a,onClick:function(){return e.goBack()},name:n.a.createElement("p",null,"Go Back",n.a.createElement("br",null),"One Step"),class_:"normalButtons",variant:"flat",size:"xxl"})):n.a.createElement("div",null)}function _(e){return n.a.createElement(d.a,{key:e.key_,placement:e.key_,overlay:n.a.createElement(b.a,{id:"tooltip-".concat(e.key_)},e.value)},n.a.createElement(g.a,{className:e.class_,variant:e.variant,size:e.size,onClick:e.onClick},e.name))}a(104);function x(e){return e.gameOver?n.a.createElement("div",{className:"gameOverWrapper"},n.a.createElement(f.a,{className:"textArea"},n.a.createElement("h1",null,"The Winner is",n.a.createElement("br",null),n.a.createElement("strong",null,e.winner),"!"),n.a.createElement("p",null,"- Please Start A New Game to Continue -"))):n.a.createElement("div",null)}function P(e){var t=n.a.createElement("p",null,"Click to submit the names and ",n.a.createElement("strong",null,"Begin the Game!"));return n.a.createElement(E.a,null,n.a.createElement(E.a.Text,null,n.a.createElement("h1",{className:"icon"},"Gobang")),n.a.createElement(E.a.Text,{className:"text-muted"},"You can replace the default names with your prefered names!"),n.a.createElement(E.a.Group,null,n.a.createElement(E.a.Label,null,"Player 1"),n.a.createElement(E.a.Control,{placeholder:"Enter the name of player1",defaultValue:e.player1,onChange:e.setPlayer1Name})),n.a.createElement(E.a.Group,null,n.a.createElement(E.a.Label,null,"Player 2"),n.a.createElement(E.a.Control,{placeholder:"Enter the name of player2",defaultValue:e.player2,onChange:e.setPlayer2Name})),n.a.createElement(_,{key_:"bottom",value:t,onClick:function(){return e.submitNames()},name:"Set Names and Begin!",class_:"normalButtons",variant:"flat"}))}a(105);function O(e){var t="box"+e.type,a=e.matrix,r=e.position.x,l=e.position.y,i=a[r][l]?a[r][l]:"";return n.a.createElement(h.a,{className:t,onClick:function(){return e.updateMatrix(r,l)}},n.a.createElement("div",{className:"piece"},i))}function C(e){var t=parseInt(e.row),a=2===t||7===t||12===t?"-center":"";return n.a.createElement(p.a,{className:"board-row"},[{y:0,type:"-left"+e.type},{y:1,type:e.type},{y:2,type:a+e.type},{y:3,type:e.type},{y:4,type:e.type},{y:5,type:e.type},{y:6,type:e.type},{y:7,type:a+e.type},{y:8,type:e.type},{y:9,type:e.type},{y:10,type:e.type},{y:11,type:e.type},{y:12,type:a+e.type},{y:13,type:e.type},{y:14,type:"-right"+e.type}].map(function(a){return n.a.createElement(O,{matrix:e.matrix,position:{x:t,y:a.y},updateMatrix:e.updateMatrix,type:a.type})}))}var S=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{className:"board",md:"auto"},n.a.createElement(x,{gameOver:this.props.gameOver,winner:this.props.winner}),[{type:"-top",row:"0"},{type:"",row:"1"},{type:"",row:"2"},{type:"",row:"3"},{type:"",row:"4"},{type:"",row:"5"},{type:"",row:"6"},{type:"",row:"7"},{type:"",row:"8"},{type:"",row:"9"},{type:"",row:"10"},{type:"",row:"11"},{type:"",row:"12"},{type:"",row:"13"},{type:"-bottom",row:"14"}].map(function(t){return n.a.createElement(C,{matrix:e.props.matrix,updateMatrix:e.props.updateMatrix,type:t.type,row:t.row})}))}}]),t}(n.a.Component);function B(e,t,a){for(var r=Array(e),n=0;n<e;n++)r[n]=Array(t).fill(a);return r}function j(e,t,a){for(var r=B(e,t,0),n=0;n<e;n++)for(var l=0;l<t;l++)r[n][l]=a[n][l];return r}function G(e,t,a){if(a<2||a>12)return{win:!1,value:0};for(var r=a-2;r<a+3;r++)if(0===e[t][r]||e[t][r]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function M(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a+2;r<t+3;r++,n--)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function L(e,t,a){if(t<2||t>12)return{win:!1,value:0};for(var r=t-2;r<t+3;r++)if(0===e[r][a]||e[r][a]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}function T(e,t,a){if(a<2||a>12||t<2||t>12)return{win:!1,value:0};for(var r=t-2,n=a-2;r<t+3;r++,n++)if(0===e[r][n]||e[r][n]!==e[t][a])return{win:!1,value:0};return{win:!0,value:e[t][a]}}a(106);var I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={matrix:B(15,15,0),isBlack:!0,firstPlayer:0,history:[{matrix:B(15,15,0)}],currStep:0,player1:"Player 1",player2:"Player 2",nameEntered:!1},a.gameOver=!1,a.winner="",a._startGame=a._startGame.bind(Object(y.a)(a)),a._resetNames=a._resetNames.bind(Object(y.a)(a)),a._setPlayer1Name=a._setPlayer1Name.bind(Object(y.a)(a)),a._setPlayer2Name=a._setPlayer2Name.bind(Object(y.a)(a)),a._updateMatrix=a._updateMatrix.bind(Object(y.a)(a)),a._switchPlayer=a._switchPlayer.bind(Object(y.a)(a)),a._newGame=a._newGame.bind(Object(y.a)(a)),a._goBack=a._goBack.bind(Object(y.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"_startGame",value:function(){this.setState({nameEntered:!0})}},{key:"_setPlayer1Name",value:function(e){this.setState({player1:e.target.value})}},{key:"_setPlayer2Name",value:function(e){this.setState({player2:e.target.value})}},{key:"_updateMatrix",value:function(e,t){var a=j(15,15,this.state.matrix),r=this.state.currStep+1,n=this.state.history.slice(0,r),l=this.state.isBlack;a[e][t]||(a[e][t]=l?"\u26ab\ufe0f":"\u26aa\ufe0f",this.setState({matrix:a,isBlack:!l,history:n.concat([{matrix:a}]),currStep:r}))}},{key:"_switchPlayer",value:function(){var e=this.state.firstPlayer?0:1;this.setState({firstPlayer:e})}},{key:"_newGame",value:function(){this.setState({matrix:B(15,15,0),isBlack:!0,history:[{matrix:B(15,15,0)}],currStep:0}),this.gameOver=!1,this.winner=""}},{key:"_resetNames",value:function(){this.setState({nameEntered:!1})}},{key:"_goBack",value:function(){var e=this.state.currStep-1;if(!(e<=0)){var t=!this.state.isBlack,a=this.state.history.slice(0,e),r=j(15,15,a[e-1].matrix);this.setState({currStep:e,history:a,matrix:r,isBlack:t})}}},{key:"render",value:function(){if(function(e){for(var t=0;t<15;t++)for(var a=0;a<15;a++){var r;if((r=G(e,t,a)).win)return r;if((r=L(e,t,a)).win)return r;if((r=T(e,t,a)).win)return r;if((r=M(e,t,a)).win)return r}return{win:!1,value:0}}(this.state.matrix).win){this.gameOver=!0;var e=this.state.firstPlayer?this.state.player2:this.state.player1,t=this.state.firstPlayer?this.state.player1:this.state.player2;this.winner=this.state.currStep%2===1?e:t}return n.a.createElement(p.a,{className:"gameContainer"},n.a.createElement(k,{switchPlayer:this._switchPlayer,firstPlayer:this.state.firstPlayer,isBlack:this.state.isBlack,player1:this.state.player1,player2:this.state.player2,nameEntered:this.state.nameEntered,setPlayer1Name:this._setPlayer1Name,setPlayer2Name:this._setPlayer2Name,submitNames:this._startGame,resetNames:this._resetNames}),n.a.createElement(S,{matrix:this.state.matrix,updateMatrix:this._updateMatrix,gameOver:this.gameOver,winner:this.winner}),n.a.createElement(N,{nameEntered:this.state.nameEntered,newGame:this._newGame,goBack:this._goBack}))}}]),t}(r.Component);function z(){return n.a.createElement(f.a,{className:"mobilePage_",fluid:!0},n.a.createElement("h3",null,"Dear Mobile User,",n.a.createElement("br",null)),n.a.createElement("p",null,"Please play ",n.a.createElement("strong",null,"Gobang")," on a Computer or Laptop."),n.a.createElement("a",{className:"simple2048Link",href:"https://ruihuasui.github.io/react-simple2048/"},"Try ",n.a.createElement("strong",null,"Simple 2048")," Here"))}function A(){return window.innerWidth<=520?n.a.createElement(z,null):n.a.createElement(h.a,null,n.a.createElement(I,null))}var W=a(117),H=a(118),J=a(67),R=a(68),U=a(21),V=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(R.a,null,n.a.createElement("div",null,n.a.createElement(W.a,{bg:"light",variant:"light"},n.a.createElement(W.a.Brand,{href:"/"},"Gobang"),n.a.createElement(H.a,{className:"mr-auto"},n.a.createElement(H.a.Link,{href:"/gobang"},"Gobang"),n.a.createElement(H.a.Link,{href:"https://ruihuasui.github.io/react-simple2048/"},"Simple 2048")),n.a.createElement(E.a,{inline:!0},n.a.createElement(J.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(g.a,{variant:"outline-info"},"Search"))),n.a.createElement(U.a,{exact:!0,path:"/",component:A}),n.a.createElement(U.a,{exact:!0,path:"/gobang",component:A})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(110)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.c84cdc18.chunk.js.map