(this["webpackJsonptypetype-playground"] = this["webpackJsonptypetype-playground"] || []).push([[0],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(65);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js + 1 modules
var mergeStyleSets = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./src/component/Header.tsx
function Header(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classNames.container,children:"TypeType Playground"});}var classNames=Object(mergeStyleSets["a" /* mergeStyleSets */])({container:{backgroundColor:"#3178c6",border:"0px",padding:"10px",boxShadow:"3px 3px 5px rgba(0, 0, 0, 0.25)",color:"white",font:"normal 24px -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n        \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif"}});
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/lib/es/index.js + 27 modules
var es = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/@mistlog/typetype/build/index.js
var build = __webpack_require__(150);

// CONCATENATED MODULE: ./src/component/Editor.tsx
es["b" /* monaco */].init().then(function(monaco){monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:true,noSyntaxValidation:true});}).catch(function(error){return console.error('An error occurred during initialization of Monaco: ',error);});function Editor(props){var defaultCode=props.defaultCode;var editorRef=Object(react["useRef"])();var _useState=Object(react["useState"])(""),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),output=_useState2[0],setOutput=_useState2[1];function run(){var code=editorRef.current.getValue();try{var result=Object(build["transform"])(code).code;setOutput(result);}catch(error){delete error.stack;setOutput(JSON.stringify(error,null,4));}}function handleEditorDidMount(_,editor){editorRef.current=editor;run();editorRef.current.onDidChangeModelContent(lodash_debounce(function(event){run();},1000));}var options={minimap:{enabled:false},scrollbar:{useShadows:false}};return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:Editor_classNames.container,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(es["a" /* default */],{height:"100%",width:"50%",language:"typescript",options:options,editorDidMount:handleEditorDidMount,value:defaultCode}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{width:"50%"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(es["a" /* default */],{height:"100%",width:"100%",language:"typescript",options:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},options),{},{readOnly:true}),value:output})})]});}/**
 * 
 */var Editor_classNames=Object(mergeStyleSets["a" /* mergeStyleSets */])({container:{height:"100%",display:"flex"}});
// EXTERNAL MODULE: ./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.js + 110 modules
var Nav = __webpack_require__(402);

// EXTERNAL MODULE: ./src/component/examples/url-parser.json
var url_parser = __webpack_require__(68);

// CONCATENATED MODULE: ./src/component/ExampleNav.tsx
var examples=new Map([["Examples",[{name:"url-parser",code:url_parser.code}]]]);function ExampleNav(props){var onSelectExample=props.onSelectExample;var groups=CreateGroupsFromExamples(examples);var _useState=Object(react["useState"])(examples.get("Examples")[0].name),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),selected=_useState2[0],setSelected=_useState2[1];return/*#__PURE__*/Object(jsx_runtime["jsx"])(Nav["a" /* Nav */],{selectedKey:selected,groups:groups,styles:{root:{width:200,marginTop:-20}},onLinkClick:function onLinkClick(_,item){var name=item.key;if(name){onSelectExample({name:name,code:examples.get("Examples").find(function(example){return example.name===name;}).code});setSelected(name);}}});}/**
 * 
 */function CreateGroupsFromExamples(examples){//
var links=[];examples.forEach(function(examples,group_name){var link={name:group_name,url:"",isExpanded:true,links:examples.map(function(example){return{name:example.name,url:"",key:example.name};})};links.push(link);});//
var groups=[{links:links}];return groups;}
// CONCATENATED MODULE: ./src/App.tsx
function App(){var _useState=Object(react["useState"])(url_parser.code),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),exampleCode=_useState2[0],setExampleCode=_useState2[1];return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:App_classNames.container,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:App_classNames.header,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Header,{})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:App_classNames.main,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:App_classNames.nav,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ExampleNav,{onSelectExample:function onSelectExample(_ref){var name=_ref.name,code=_ref.code;setExampleCode(code);}})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:App_classNames.editor,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Editor,{defaultCode:exampleCode})})]})]});}var App_classNames=Object(mergeStyleSets["a" /* mergeStyleSets */])({container:{height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"},header:{height:"60px"},main:{display:"flex",flexDirection:"row",marginTop:16},nav:{height:"100vh",marginTop:16},editor:{height:"100vh",width:"100%",marginTop:16}});
// CONCATENATED MODULE: ./src/serviceWorker.ts
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/typetype-playground",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("/typetype-playground","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// EXTERNAL MODULE: ./node_modules/@uifabric/icons/lib/index.js + 21 modules
var lib = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/@fluentui/merge-styles/lib/mergeStyles.js
var mergeStyles = __webpack_require__(401);

// CONCATENATED MODULE: ./src/index.tsx
Object(lib["a" /* initializeIcons */])();// Inject some global styles
Object(mergeStyles["a" /* mergeStyles */])({selectors:{':global(body), :global(html), :global(#root)':{margin:0,padding:0,height:'100vh',overflow:"auto"}}});react_dom_default.a.render(/*#__PURE__*/Object(jsx_runtime["jsx"])(App,{}),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ }),

/***/ 68:
/***/ (function(module) {

module.exports = JSON.parse("{\"code\":\"export type function parseURL = (text) => ^{\\r\\n    if (parseProtocol<text> extends [infer protocol, infer rest]) {\\r\\n        return {\\r\\n            protocol,\\r\\n            rest\\r\\n        }\\r\\n    } else {\\r\\n        return never\\r\\n    }\\r\\n}\\r\\n\\r\\ntype function parseProtocol = (text) => ^{\\r\\n    if(text extends `${infer protocol}://${infer rest}`) {\\r\\n        return [\\r\\n            { protocol },\\r\\n            rest\\r\\n        ]\\r\\n    } else {\\r\\n        return never\\r\\n    }\\r\\n}\\r\\n\\r\\ntype function parseUserInfo = (text) => ^{\\r\\n    if(text extends `${infer username}:${infer password}`) {\\r\\n        return { username, password }\\r\\n    } else {\\r\\n        return { username: text }\\r\\n    }\\r\\n}\\r\\n\\r\\nexport type function parseAuthority = (text) => ^{\\r\\n    if(text extends `${infer authority}@${infer rest}`) {\\r\\n        return {\\r\\n            authority: parseUserInfo<authority>,\\r\\n            rest\\r\\n        }\\r\\n    } else { \\r\\n        return {\\r\\n            authority: null,\\r\\n            rest: text\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\nexport type function parseHost = (text) => ^{\\r\\n    if(text extends `${infer name}:${infer port}`) {\\r\\n        return ^{\\r\\n            if(parsePort<port> extends never) {\\r\\n                return never\\r\\n            } else {\\r\\n                return { name, port }\\r\\n            }\\r\\n        }\\r\\n    } else {\\r\\n        return { name: text }\\r\\n    }\\r\\n}\\r\\n\\r\\ntype function parsePort = (text) => ^{\\r\\n    if(isNumberString<text> extends true) {\\r\\n        return text\\r\\n    } else {\\r\\n        return never\\r\\n    }\\r\\n}\\r\\n\\r\\ntype function isNumberString = (text) => ^{\\r\\n    if(text extends \\\"\\\") {\\r\\n        return never\\r\\n    } else {\\r\\n        return _isNumberString<text>\\r\\n    }\\r\\n}\\r\\n\\r\\ntype function _isNumberString = (text) => ^{\\r\\n    /* the end of recursion: each char of text is digit, no more chars to inspect */\\r\\n    if(text extends \\\"\\\") {\\r\\n        return true\\r\\n    } else if(text extends `${infer digit}${infer rest}`) {\\r\\n        return ^{\\r\\n            if(digit extends Digit) {\\r\\n                return _isNumberString<rest>\\r\\n            } else {\\r\\n                return false\\r\\n            }\\r\\n        }\\r\\n    } else {\\r\\n        return false\\r\\n    }\\r\\n}\\r\\n\\r\\ntype Digit = union [\\\"0\\\" , \\\"1\\\" , \\\"2\\\" , \\\"3\\\" , \\\"4\\\" , \\\"5\\\" , \\\"6\\\" , \\\"7\\\" , \\\"8\\\" , \\\"9\\\"]\"}");

/***/ })

},[[372,1,2]]]);
//# sourceMappingURL=main.ab465dea.chunk.js.map