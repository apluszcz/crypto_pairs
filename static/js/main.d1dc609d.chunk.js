(this.webpackJsonpcurrencies=this.webpackJsonpcurrencies||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/main-bg.ebc94bc1.png"},13:function(e,t,a){e.exports=a(35)},18:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),o=a(5),n=a.n(o),s=(a(18),a(1)),c={colorBackgroundMain:"#ffffff",colorFontFirst:"#2b2d38",colorFontSecond:"#71778e",colorGradient:"linear-gradient(45deg, #d350db, #57438a 70%, #d350db)",colorGradientInvert:"linear-gradient(45deg, #57438a, #d350db, #57438a)",closeButtonGradient:"linear-gradient(to bottom, #d5b8e2 0%, #8b48ac 50%, #a18daa 100%)",colorNoteBackgroundWarning:"rgba(240, 199, 40, .9)",colorNoteBackgroundError:"rgba(243, 102, 48, .9)",colorNoteBackgroundSuccess:"rgba(139, 195, 74, .8)",colorNoteTextWarning:"#543e19",colorNoteTextError:"#7d1d1d",colorNoteTextSuccess:"rgb(61, 136, 64)",deepBlue:"#b9b9b9",green:"#008080",white:"#ffffff",red:"#d350db",trueRed:"#ff2b2b",gay:"#d6d6d6",lightGay:"#dedede82",extraSmallFont:"1em",smallFont:"1.3em",middleFont:"1.5em",largeFont:"2em",extraLargeFont:"2.5em",widthContainerLarge:"1220px",widthContainerSmall:"757px",paddingSmall:"1em",paddingMiddle:"1.5em",paddingLarge:"2em",lineHeight:"1.7em",lineHeightMiddle:"1.2em",borderRadius:"4px",boxShadow:"0 0 40px 0px rgba(199,199,199,.9)",boxShadowSmall:"0 0 3px 3px #d2d1d1e6",boxShadowXSmall:"0 2px 3px 2px #d2d1d182",boxShadowSmallInvert:"0 0 3px 0 #c7c7c7e6"},l={main:{width:"100%",color:c.colorFontSecond,maxWidth:c.widthContainerLarge,padding:"".concat(c.paddingMiddle," ").concat(c.paddingSmall),textAlign:"center",lineHeight:c.lineHeight},logo:{width:"100px",height:"100px"},mainDesktop:{fontSize:"22px"},mainMobile:{fontSize:"14px"}},d=a(9),h=a.n(d),p=({deviceType:e})=>r.a.createElement("header",{style:Object(s.a)(Object(s.a)({},l.main),l["main".concat(e)])},r.a.createElement("img",{style:l.logo,src:h.a,alt:"Currency exchange"}),r.a.createElement("h1",null,"Exchange rate for BTC / LTC and etc."));p.defaultName="Header",p.defaultProps={deviceType:"Desktop"};var u=p,m={isDev:window&&window.location&&window.location.hostname&&"localhost"===window.location.hostname,apiUrl:"https://api.cryptonator.com/api",affiliateLink:{name:"cryptonator.com",link:"https://www.cryptonator.com/"},breakpoint:768,currencies:{fiat:[{shortName:"USD",code:"USD",name:"US Dollar"},{shortName:"EUR",code:"EUR",name:"Euro"},{shortName:"PLN",code:"PLN",name:"Polish zlotys"},{shortName:"RUB",code:"RUR",name:"Ruble"}],crypto:[{shortName:"BTC",code:"BTC",name:"Bitcoin"},{shortName:"ETH",code:"ETH",name:"Ethereum"},{shortName:"LTC",code:"LTC",name:"Litecoin"},{shortName:"BCH",code:"BCH",name:"Bitcoin cash"},{shortName:"XRP",code:"XRP",name:"Ripple"},{shortName:"DASH",code:"DASH",name:"Dash"},{shortName:"XMR",code:"XMR",name:"Monero"}]}},g=e=>{var t=Math.floor(268435456*(1+Math.random())).toString(16);return e?"".concat(e,"-").concat(t):t};var b=new class{constructor(){this.apiUrl=m.apiUrl}_changeUpDetection(e){return e<0}_countPercentage(e,t){var a=e/(t/100),i="";return i=a<1?(i=a.toString().replace("-",""))<1?"< 1":(+i).toFixed(2):a.toFixed(2)}_prettyPriceFormat(e){var t=e;if(t>1){var a=(t=(t=(t=(+t).toFixed(4)).toString()).split("."))[0];(a=(a=(a=(a=a.split("").reverse().join("")).match(/.{1,3}/g)).map(e=>e+",")).join("").split("").reverse()).shift(),t="".concat(a.join(""),".").concat(t[1])}return t}get getBaseCurrenciesList(){return[...m.currencies.crypto]}get getTargetCurrenciesList(){return[...m.currencies.fiat,...m.currencies.crypto]}get getAffiliateLink(){return Object(s.a)({},m.affiliateLink)}currencyRate(e,t){var a=e.toLowerCase(),i=t.toLowerCase();return fetch("".concat(this.apiUrl,"/ticker/").concat(a,"-").concat(i),{method:"GET"}).then(e=>e.json()).then(e=>e.ticker).then(e=>({id:g("api"),base:e.base,target:e.target,price:this._prettyPriceFormat(e.price),change:e.change,changePercents:this._countPercentage(e.change,e.price),changeUp:!this._changeUpDetection(e.change)}))}},S={footer:{width:"100%",maxWidth:c.widthContainerLarge,padding:"".concat(c.paddingLarge," ").concat(c.paddingSmall),textAlign:"center"},text:{color:c.colorFontSecond,fontSize:"15px"},link:{color:c.colorFontSecond,fontWeight:"500"}},f=b.getAffiliateLink,v=f.name,y=f.link,x=({deviceType:e})=>r.a.createElement("footer",{style:S.footer},r.a.createElement("p",{style:Object(s.a)(Object(s.a)({},S.text),S["text".concat(e)])},"Currency rate information provided by \xa0",r.a.createElement("a",{target:"_blank",style:S.link,href:y,rel:"noopener noreferrer"},v)));x.defaultName="Footer",x.defaultProps={deviceType:"Desktop"};var w=x,C=a(12),k=a(2),E=a.n(k),T={textCenter:{textAlign:"center"}},B={row:{lineHeight:"3.2em"},titleLarge:{verticalAlign:"middle"},titleLargeDesktop:{fontSize:c.largeFont},titleLargeMobile:{fontSize:c.middleFont},text:{fontWeight:"300",verticalAlign:"middle"},textDesktop:{fontSize:c.largeFont},textMobile:{fontSize:c.middleFont},smallText:{fontWeight:"300",paddingLeft:"10px"},smallTextDesktop:{fontSize:c.middleFont},smallTextMobile:{fontSize:c.smallFont},arrow:{fontSize:c.extraLargeFont,position:"relative"},changeMobile:{display:"none"},closeButton:{fontSize:c.middleFont,padding:0,margin:0,border:0,verticalAlign:"middle",lineHeight:1,cursor:"pointer",position:"relative",top:"-2px",opacity:".4",background:"transparent"}};class I extends r.a.Component{constructor(e){super(e),this.mountStyle=()=>{this.setState(e=>({animateStyle:Object(s.a)(Object(s.a)({},e.animateStyle),{},{opacity:1})}))},this.unMountStyle=()=>{this.setState(e=>({animateStyle:Object(s.a)(Object(s.a)({},e.animateStyle),{},{opacity:0})}))},this.removeCurrenciesPair=(e,t=!1)=>{t||(this.unMountStyle(),setTimeout(()=>e(),this.animationDuration+20))},this.animationDuration=300,this.state={animateStyle:{transition:"all ".concat(this.animationDuration,"ms ease"),opacity:0}}}componentWillMount(){setTimeout(()=>this.mountStyle(),10)}render(){var e=this.props,t=e.base,a=e.target,i=e.price,o=e.change,n=e.changeUp,l=e.changePercents,d=e.hideRemoveButton,h=e.removeCurrenciesPair,p=e.deviceType,u={color:n?c.green:c.red,icon:n?"angle-up":"angle-down",styles:n?{top:"3px"}:{top:"5px"}};return r.a.createElement("tr",{style:Object(s.a)(Object(s.a)({},this.state.animateStyle),B.row)},r.a.createElement("td",null,r.a.createElement("span",{style:Object(s.a)(Object(s.a)({},B.text),B["text".concat(p)])},t," / ",a)),r.a.createElement("td",null,r.a.createElement("span",{style:Object(s.a)(Object(s.a)({},B.titleLarge),B["titleLarge".concat(p)])},i)),r.a.createElement("td",{style:T.textCenter},r.a.createElement("span",{style:B.text},r.a.createElement(E.a,{style:Object(s.a)(Object(s.a)(Object(s.a)({},B.arrow),u.styles),{},{color:u.color}),name:u.icon}))),r.a.createElement("td",null,r.a.createElement("span",{style:Object(s.a)(Object(s.a)(Object(s.a)({color:u.color},B.smallText),B["smallText".concat(p)]),B["change".concat(p)])},o),r.a.createElement("span",{style:Object(s.a)(Object(s.a)(Object(s.a)({},B.smallText),B["smallText".concat(p)]),{},{color:u.color})},"(",l,"%)")),r.a.createElement("td",null,r.a.createElement("button",{style:Object(s.a)({visibility:d&&"hidden"},B.closeButton),onClick:e=>this.removeCurrenciesPair(h,d)},r.a.createElement(E.a,{name:"times-circle"}))))}}I.defaultName="CurrencyRow",I.defaultProps={base:"BTC",target:"USD",hideRemoveButton:!0,deviceType:"Desktop"};var P=I,j={table:{minWidth:"450px",width:"100%"},spinnerWrapper:{textAlign:"center",lineHeight:"3.4em"},spinner:{verticalAlign:"middle",fontSize:c.middleFont},tableWrapperDesktop:{},tableWrapperMobile:{border:"1px solid ".concat(c.gay),padding:"0 1em",overflowX:"auto",boxSizing:"border-box",borderRadius:c.borderRadius},errorMsg:{color:c.trueRed,fontWeight:"100",textAlign:"center"}},N=({showThrobber:e,currenciesPairs:t,removeCurrenciesPair:a,deviceType:i,hasError:o})=>r.a.createElement("div",{style:Object(s.a)({},j["tableWrapper".concat(i)])},r.a.createElement("table",{style:j.table},r.a.createElement("tbody",null,t.map(e=>r.a.createElement(P,{deviceType:i,key:e.id,change:e.change,changeUp:e.changeUp,changePercents:e.changePercents,base:e.base,target:e.target,price:e.price,hideRemoveButton:1===t.length,removeCurrenciesPair:()=>a(e.id)})),(e||o)&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",style:j.spinnerWrapper},o&&r.a.createElement("h2",{style:j.errorMsg},"Sorry, some server error. Try again later."),e&&!o&&r.a.createElement(E.a,{style:j.spinner,name:"spinner",spin:!0}))))));N.defaultName="CurrenciesPairs",N.defaultProps={showThrobber:!1,deviceType:"Desktop",hasError:!1};var O=N,L={gradientMiddle:{color:c.white,boxShadow:c.boxShadowSmall,cursor:"pointer",backgroundImage:c.colorGradient,backgroundPosition:"0 0",backgroundSize:"300% 300%",fontSize:"17px",fontWeight:300,padding:"13px 23px",border:"none",borderRadius:"30px",textTransform:"uppercase"}},D={list:{margin:0,padding:0,position:"absolute",background:c.white,boxShadow:c.boxShadowXSmall,borderBottomRightRadius:c.borderRadius,borderBottomLeftRadius:c.borderRadius,overflowY:"auto",left:"10%",width:"80%",zIndex:1},listDesktop:{maxHeight:"230px"},listMobile:{maxHeight:"160px"},item:{padding:"0.5em 0.7em"},itemPointer:{cursor:"pointer",padding:"0.5em 0.7em"}};class M extends r.a.Component{constructor(e){super(e),this.setActiveItemState=e=>{this.setState({activeItem:e},()=>this.setHoverStyle(this.state.activeItem))},this.setHoverStyle=()=>{this.listItems.length&&this.listItems.forEach((e,t)=>{null!==e&&(e.style.backgroundColor=this.state.activeItem===t?c.lightGay:c.white)})},this.calcList=(e,t)=>{var a=new RegExp(t.toLocaleLowerCase()),i=e.filter(e=>a.test(e.shortName.toLocaleLowerCase())||a.test(e.name.toLocaleLowerCase()));t.search("-")+1||this.setState({itemsForShowing:i})},this.selectItemInCoinList=e=>{var t=0;if(e){if("ArrowUp"===e)t=this.state.activeItem<=0?0:this.state.activeItem-1;else if("ArrowDown"===e)t=this.state.activeItem+1>=this.listItems.length?this.state.activeItem:this.state.activeItem+1;else if("Enter"===e){this.listItems[this.state.activeItem].click()}this.setActiveItemState(t)}},this.state={itemsForShowing:[],activeItem:0,showSuggestBox:!1},this.listItems=[]}componentWillReceiveProps(e){this.calcList(this.props.items,e.inputValue),e.showSuggestBox?setTimeout(()=>this.setHoverStyle(),10):this.setActiveItemState(0),this.setState({showSuggestBox:e.showSuggestBox}),this.state.showSuggestBox===e.showSuggestBox&&"Enter"===e.keyboardButtonsActive||this.selectItemInCoinList(e.keyboardButtonsActive)}render(){var e=this.props,t=e.setSelectedItem,a=e.deviceType;return r.a.createElement("ul",{style:Object(s.a)(Object(s.a)(Object(s.a)({},D.list),D["list".concat(a)]),{},{display:this.state.showSuggestBox?"block":"none"})},this.state.itemsForShowing.map((e,a)=>r.a.createElement("li",{style:D.itemPointer,key:e.code,ref:e=>this.listItems[a]=e,onMouseEnter:()=>this.setActiveItemState(a),onClick:()=>t(e.code,"".concat(e.code," - ").concat(e.name))},e.code," - ",e.name)),0===this.state.itemsForShowing.length&&r.a.createElement("li",{style:D.item},"No results"))}}M.defaultName="SearchInputSuggestBox",M.defaultProps={keyboardButtonsActive:"",inputValue:"",items:[],deviceType:"Desktop"};var R=M,F={fieldSet:{margin:0,padding:0,border:"none",position:"relative"},input:{border:"1px solid ".concat(c.gay),fontSize:"17px",width:"100%",fontWeight:300,padding:"13px 23px",borderRadius:"30px",position:"relative"}};class A extends r.a.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({inputValue:e.target.value})},this.handleKeyboard=e=>{this.setState({keyboardButtonsActive:e.key}),"Enter"===e.key&&(e.preventDefault(),this.setState(e=>({showSuggestBox:!e.showSuggestBox})))},this.focusInputStatus=e=>{this.state.clearInput&&this.setState({inputValue:"",keyboardButtonsActive:""}),this.setState({showSuggestBox:e,clearInput:!0})},this.setSelectedItem=(e,t)=>{this.setState({inputValue:t,clearInput:!1,showSuggestBox:!1}),this.props.setValue(e)},this.state={inputValue:"",showSuggestBox:!1,clearInput:!0,keyboardButtonsActive:""}}componentWillReceiveProps(e){e.clearInput&&this.setState({inputValue:""})}render(){var e=this.props,t=e.items,a=e.label,i=e.deviceType;return r.a.createElement("fieldset",{style:F.fieldSet},r.a.createElement("input",{style:F.input,placeholder:a,onClick:()=>this.focusInputStatus(!0),onChange:this.handleChange,onKeyDown:this.handleKeyboard,value:this.state.inputValue,type:"text"}),r.a.createElement(R,{deviceType:i,showSuggestBox:this.state.showSuggestBox,setSelectedItem:this.setSelectedItem,inputValue:this.state.inputValue,keyboardButtonsActive:this.state.keyboardButtonsActive,items:t}))}}A.defaultName="SearchInput",A.defaultProps={items:[],label:"",deviceType:"Desktop"};var W=A,z={formMobile:{display:"block"},formDesktop:{display:"flex"},form:{margin:"".concat(c.paddingMiddle," 0")},fieldSet:{flexGrow:1,border:"none",padding:0},fieldSetMobile:{marginBottom:"1em"},fieldSetDesktop:{marginRight:"1em"},buttonMobile:{width:"100%"},buttonDesktop:{}};class H extends r.a.Component{constructor(e){super(e),this.addNewCurrenciesPair=e=>{this.props.addNewCurrenciesPair(e),this.setState({clearInput:!0}),setTimeout(()=>this.setState({clearInput:!1}),10)},this.state={clearInput:!1}}buttonAnimation(e,t,a){var i,r=e.target,o={easing:"ease-in-out",iterations:"1",fill:"forwards"};switch(t){case"click":var n;n=a?[c.boxShadowSmall,c.boxShadowSmallInvert]:[c.boxShadowSmallInvert,c.boxShadowSmall],o.duration=100,i={boxShadow:n};break;case"hover":var l;l=a?["0 0","100% 0"]:["100% 0","0 0"],o.duration=800,i={backgroundPosition:l}}r.animate(Object(s.a)({},i),o)}render(){var e=this.props,t=e.setCoin,a=e.baseCurrencies,i=e.targetCurrencies,o=e.deviceType;return r.a.createElement("form",{style:Object(s.a)(Object(s.a)({},z.form),z["form".concat(o)])},r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},z.fieldSet),z["fieldSet".concat(o)])},r.a.createElement(W,{deviceType:o,label:"Base coin",clearInput:this.state.clearInput,items:a,setValue:(e,a=!0)=>{t(e,a)}})),r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},z.fieldSet),z["fieldSet".concat(o)])},r.a.createElement(W,{deviceType:o,label:"Target coin",clearInput:this.state.clearInput,items:i,setValue:(e,a=!1)=>{t(e,a)}})),r.a.createElement("button",{style:Object(s.a)(Object(s.a)({},L.gradientMiddle),z["button".concat(o)]),onMouseOver:e=>this.buttonAnimation(e,"hover",!0),onMouseLeave:e=>this.buttonAnimation(e,"hover",!1),onMouseDown:e=>this.buttonAnimation(e,"click",!0),onMouseUp:e=>this.buttonAnimation(e,"click",!1),onClick:this.addNewCurrenciesPair},"add pair +"))}}var U=H,V={wrapper:{overflow:"hidden",display:"flex",justifyContent:"center"},container:{height:"70px",display:"flex",alignItems:"center",position:"relative",justifyContent:"center",padding:"".concat(c.paddingSmall," ").concat(c.paddingLarge),verticalAlign:"middle",borderRadius:c.borderRadius,fontSize:c.extraSmallFont,fontWeight:"400",lineHeight:c.lineHeightMiddle,marginBottom:c.paddingSmall},warningType:{color:c.colorNoteTextWarning,backgroundColor:c.colorNoteBackgroundWarning},errorType:{color:c.colorNoteTextError,backgroundColor:c.colorNoteBackgroundError},successType:{color:c.colorNoteTextSuccess,backgroundColor:c.colorNoteBackgroundSuccess},warningSign:{color:"#a58613"},errorSign:{color:"9e0b0b"},sign:{transform:"translateX(-0.8em)"},closeButton:{cursor:"pointer",fontSize:"1.2em",position:"absolute",top:"-3px",right:"0",border:"none",backgroundColor:"transparent"}};class G extends r.a.Component{constructor(e){super(e),this.dismissTimeout=3e3}componentDidMount(){setTimeout(()=>this.props.dismiss(null,this.props.id),this.dismissTimeout)}render(){var e=this.props,t=e.id,a=e.content,i=e.type,o=e.dismiss;return r.a.createElement("div",{style:V.wrapper},r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},V["".concat(i,"Type")]),V.container)},r.a.createElement("button",{onClick:e=>o(e,t),style:V.closeButton},"\xd7"),r.a.createElement(E.a,{name:"warning"===i?"exclamation-triangle":"exclamation-circle",style:Object(s.a)(Object(s.a)({},V.sign),V["".concat(i,"Sign")])}),a))}}G.defaultName="Notification";var X=G,_=a(10),J=a.n(_),Y={maxWidth:"100vw",width:"400px",position:"fixed",padding:"0 ".concat(c.paddingSmall),bottom:0,left:"50%",zIndex:4,transform:"translateX(-50%)"},K=(a(33),({notifications:e,dismiss:t})=>r.a.createElement("div",{style:Y},r.a.createElement(J.a,{transitionName:"animation",transitionEnterTimeout:300,transitionLeaveTimeout:300},e.map(e=>r.a.createElement(X,Object.assign({key:e.id,dismiss:t},e))))));K.defaultName="NotificationList",K.defaultProps={notifications:[]};var q=K,Q={success:{id:null,type:"success",content:null},warning:{id:null,type:"warning",content:null},error:{id:null,type:"error",content:null}},Z={container:{flexGrow:1,width:"100%",maxWidth:c.widthContainerSmall,backgroundColor:c.white,borderRadius:c.borderRadius,boxShadow:c.boxShadow},saveButton:{background:c.white,fontSize:"30px",width:"60px",height:"60px",borderRadius:"60px",cursor:"pointer",border:"1px solid ".concat(c.gay)},buttonWrapper:{display:"flex",justifyContent:"center"},containerDesktop:{padding:c.paddingLarge},containerMobile:{padding:c.paddingSmall}};class $ extends r.a.Component{constructor(e){super(e),this.addNewCurrenciesPair=(e,t=this.state.baseCoin,a=this.state.targetCoin)=>(e&&e.preventDefault(),t&&a?this.hasSamePair({base:t,target:a},this.state.currenciesPairs)?(this.showNotification("You already have ".concat(t,"/").concat(a," pair"),"warning"),void this.setState({baseCoin:"",targetCoin:""})):t===a?(this.showNotification("You can't set same coin for both inputs","warning"),void this.setState({baseCoin:"",targetCoin:""})):(this.setState({showThrobber:!0}),void b.currencyRate(t,a).then(e=>{this.setState(t=>({currenciesPairs:[...t.currenciesPairs,e],showThrobber:!1,baseCoin:"",targetCoin:""}))}).catch(()=>{this.setState({hasError:!0})})):(this.showNotification("Please, provide correct Base and Target coins","error"),void this.setState({baseCoin:"",targetCoin:""}))),this.hasSamePair=(e,t)=>{var a,i=Object(C.a)(t);try{for(i.s();!(a=i.n()).done;){var r=a.value;if(r.base===e.base&&r.target===e.target)return!0}}catch(o){i.e(o)}finally{i.f()}},this.removeCurrenciesPair=e=>{this.setState(t=>({currenciesPairs:t.currenciesPairs.filter(t=>t.id!==e)}))},this.setCoin=(e,t)=>{t?this.setState({baseCoin:e}):this.setState({targetCoin:e})},this.dismissNotification=(e,t)=>{e&&e.preventDefault(),this.setState(e=>({notifications:e.notifications.filter(e=>e.id!==t)}))},this.handleClickSaveButton=e=>{e.preventDefault(),localStorage.setItem("pairs",JSON.stringify(this.state.currenciesPairs)),this.showNotification("You pairs successfully saved","success")},this.setStartedCurrencies=(e,t)=>{var a=localStorage.getItem("pairs");a?(a=JSON.parse(a)).forEach(e=>{this.addNewCurrenciesPair(null,e.base,e.target)}):this.addNewCurrenciesPair(null,e,t)},this.state={currenciesPairs:[],baseCurrencies:[],targetCurrencies:[],baseCoin:"",targetCoin:"",notifications:[],showThrobber:!0,hasError:!1}}showNotification(e,t){var a;switch(t){case"success":a=Q.success;break;case"error":a=Q.error;break;default:a=Q.warning}var i=Object(s.a)(Object(s.a)({},a),{},{id:g("main"),content:e});this.setState(e=>{var t=e.notifications;return t.length>3&&t.shift(),{notifications:[...t,Object(s.a)({},i)]}})}componentDidMount(){var e=b.getBaseCurrenciesList,t=b.getTargetCurrenciesList;this.setState(a=>({baseCurrencies:[...e],targetCurrencies:[...t]})),this.setStartedCurrencies(e[0].code,t[0].code)}render(){var e=this.props.deviceType;return r.a.createElement("main",{style:Object(s.a)(Object(s.a)({},Z.container),Z["container".concat(e)])},r.a.createElement(O,{hasError:this.state.hasError,deviceType:e,currenciesPairs:this.state.currenciesPairs,showThrobber:this.state.showThrobber,removeCurrenciesPair:this.removeCurrenciesPair}),r.a.createElement(U,{deviceType:e,baseCurrencies:this.state.baseCurrencies,targetCurrencies:this.state.targetCurrencies,addNewCurrenciesPair:this.addNewCurrenciesPair,setCoin:this.setCoin}),localStorage&&r.a.createElement("div",{style:Z.buttonWrapper},r.a.createElement("button",{style:Z.saveButton,onClick:this.handleClickSaveButton},r.a.createElement(E.a,{name:"save"}))),r.a.createElement(q,{dismiss:this.dismissNotification,notifications:this.state.notifications}))}}$.defaultName="Main",$.defaultProps={deviceType:"Desktop"};var ee=$,te=a(11),ae=a.n(te),ie={display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",padding:"0 ".concat(c.paddingSmall),backgroundColor:c.colorBackgroundMain,backgroundImage:"url(".concat(ae.a,")"),backgroundSize:"250px",color:c.colorFontFirst,fontFamily:"Roboto, sans-serif",fontWeight:"300"};a(34);class re extends r.a.Component{constructor(e){super(e),this.getDeviceType=()=>{var e=window.innerWidth<m.breakpoint?"Mobile":"Desktop";this.setState({deviceType:e})},this.state={windowWidth:0}}componentDidMount(){this.getDeviceType(),window.addEventListener("resize",this.getDeviceType)}render(){return r.a.createElement("section",{style:ie},r.a.createElement(u,{deviceType:this.state.deviceType}),r.a.createElement(ee,{deviceType:this.state.deviceType}),r.a.createElement(w,{deviceType:this.state.deviceType}))}}var oe=re;n.a.render(r.a.createElement(oe,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.53155019.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.d1dc609d.chunk.js.map