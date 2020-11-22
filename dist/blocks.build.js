!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";function a(){d=!1}function r(e){if(!e)return void(m!==f&&(m=f,a()));if(e!==m){if(e.length!==f.length)throw new Error("Custom alphabet for shortid must be "+f.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+f.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,a()}}function l(e){return r(e),m}function o(e){g.seed(e),p!==e&&(a(),p=e)}function i(){m||r(f);for(var e,t=m.split(""),n=[],a=g.nextValue();t.length>0;)a=g.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}function s(){return d||(d=i())}function c(e){return s()[e]}function u(){return m||f}var m,p,d,g=n(16),f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={get:u,characters:l,seed:o,lookup:c,shuffled:s}},function(e,t){e.exports=[{name:"Primary",color:"#11b0a3"},{name:"Secondary",color:"#1a6070"},{name:"Tertiary",color:"#253e53"},{name:"Accent",color:"#dfb544"},{name:"Light",color:"#fefefe"}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5),n(8),n(10),n(11),n(13)},function(e,t,n){"use strict";var a=n(6),r=(n.n(a),n(7)),l=(n.n(r),n(0)),o=(n.n(l),n(1)),__=(n.n(o),wp.i18n.__),i=wp.blocks.registerBlockType,s=wp.data.withSelect,c=function(e){var t=function(t){e.setAttributes({headerTxt:t})},n=function(t){e.setAttributes({buttonTxt:t})},a=function(t){e.setAttributes({descTxt:t})},r=function(t){e.setAttributes({imageObj:t})},i=function(t){e.setAttributes({destinationURL:t})};return wp.element.createElement("div",{className:"atf-hero",style:{"--bg-img":"url("+(e.attributes.imageObj?e.attributes.imageObj.url:void 0)+")"}},wp.element.createElement(l.InspectorControls,null,wp.element.createElement(o.Panel,{title:"Page Header Settings"},wp.element.createElement(o.PanelBody,{title:"Settings",icon:"admin-settings",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement(l.MediaUploadCheck,{fallback:"You do not have permissions to make changes to the media."},wp.element.createElement(l.MediaUpload,{title:__("Background image","image-selector"),allowedTypes:["image"],value:e.attributes.imageObj,onSelect:r,render:function(t){var n=t.open;return wp.element.createElement(o.Button,{className:"editor-post-featured-image__toggle image-selector-btn",style:{backgroundImage:"linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('"+(e.attributes.imageObj?e.attributes.imageObj.url:"")+"')"},onClick:n},__("Choose background image","image-selector"))}}))),e.attributes.imageObj&&wp.element.createElement(o.PanelRow,null,wp.element.createElement(o.Button,{onClick:function(){return r(0)},isDestructive:!0},"Remove Image")),wp.element.createElement(o.PanelRow,null,wp.element.createElement(o.TextControl,{label:"Button Destination URL",value:e.attributes.destinationURL,onChange:i}))))),wp.element.createElement("div",{className:"atf-hero-content"},wp.element.createElement("div",{className:"container h-100"},wp.element.createElement("div",{className:"row h-100"},wp.element.createElement("div",{className:"col-12 col-md-8 col-lg-6 align-self-center"},wp.element.createElement(l.RichText,{className:"cta-title text-primary",tagName:"h1",placeholder:"Main Heading",value:e.attributes.headerTxt,onChange:t}),wp.element.createElement(l.RichText,{tagName:"div",className:"cta-desc",placeholder:"Short Description",value:e.attributes.descTxt,onChange:a}),wp.element.createElement("div",null,wp.element.createElement(l.RichText,{tagName:"a",className:"cta-btn",placeholder:"Action Button",value:e.attributes.buttonTxt,onChange:n})))))))},u=s(function(e,t){var n=t.attributes.bgImageId;return{imageObj:n?e("core").getMedia(n):null}});i("abhinash/header",{title:__("Page Header"),icon:"welcome-view-site",category:"asag-blocks",keywords:[__("page header"),__("hero"),__("atf")],selector:"div",attributes:{buttonTxt:{type:"string"},headerTxt:{type:"string"},descTxt:{type:"string"},imageObj:{type:"object"},destinationURL:{type:"string"},align:{type:"string",default:"full"}},supports:{align:["full"]},edit:u(c),save:function(e){return wp.element.createElement("div",{className:"atf-hero",style:{"--bg-img":"url("+(e.attributes.imageObj?e.attributes.imageObj.url:void 0)+")"}},wp.element.createElement("div",{className:"container h-100"},wp.element.createElement("div",{className:"row h-100"},wp.element.createElement("div",{className:"col-12 col-md-8 col-lg-6 align-self-center"},wp.element.createElement("h1",{className:"atf-hero-content text-primary"},e.attributes.headerTxt),wp.element.createElement("div",{class:"lead my-3 py-1"},e.attributes.descTxt),wp.element.createElement("div",null,wp.element.createElement("a",{href:e.attributes.destinationURL,className:"btn btn-accent btn-lg text-white text-uppercase font-weight-bold"},e.attributes.buttonTxt))))))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(9),r=(n.n(a),n(0)),l=(n.n(r),n(1)),o=(n.n(l),n(3)),i=n.n(o),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("abhinash/container",{title:__("Layout Container"),icon:"align-center",category:"asag-blocks",keywords:[__("container"),__("wrapper"),__("width")],selector:"div",attributes:{bgColor:{type:"string"},textColor:{type:"string"},align:{type:"string",default:"full"}},supports:{align:["full"]},edit:function(e){var t=function(t){e.setAttributes({textColor:t})},n=function(t){e.setAttributes({bgColor:t})};return wp.element.createElement("div",null,wp.element.createElement(r.InspectorControls,null,wp.element.createElement(l.Panel,{title:"Layout Container Settings"},wp.element.createElement(l.PanelBody,{title:"Options",icon:"admin-settings",initialOpen:!0},wp.element.createElement(l.PanelRow,null,"Text color"),wp.element.createElement(l.PanelRow,null,wp.element.createElement(l.ColorPalette,{colors:i.a,value:e.attributes.textColor,onChange:t})),wp.element.createElement(l.PanelRow,null,"Background color"),wp.element.createElement(l.PanelRow,null,wp.element.createElement(l.ColorPalette,{colors:i.a,value:e.attributes.bgColor,onChange:n})))))," ",wp.element.createElement("div",{className:e.className+" container-wrapper",style:{backgroundColor:e.attributes.bgColor,color:e.attributes.textColor}},wp.element.createElement("div",{className:"editor-container-display"},wp.element.createElement(r.InnerBlocks,null))))},save:function(e){return wp.element.createElement("div",{className:e.className,style:{backgroundColor:e.attributes.bgColor,color:e.attributes.textColor}},wp.element.createElement("div",{className:"container"},wp.element.createElement(r.InnerBlocks.Content,null)))}})},function(e,t){},function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(1)),l=(n.n(r),n(3)),o=n.n(l),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("abhinash/cta-btn",{title:__("Click-To-Action Button"),icon:"button",category:"asag-blocks",keywords:[__("cta"),__("button"),__("btn")],selector:"div",attributes:{bgColor:{type:"string"},textColor:{type:"string"},btnTxt:{type:"string"},url:{type:"string"},align:{type:"string",default:"left"}},supports:{align:["left","center","right"]},edit:function(e){var t=function(t){e.setAttributes({url:t})},n=function(t){e.setAttributes({textColor:t})},l=function(t){e.setAttributes({bgColor:t})},i=function(t){e.setAttributes({btnTxt:t})};return wp.element.createElement("div",{className:"text-"+e.attributes.align},wp.element.createElement(a.InspectorControls,null,wp.element.createElement(r.Panel,{title:"Button Settings"},wp.element.createElement(r.PanelBody,{title:"Options",icon:"admin-settings",initialOpen:!0},wp.element.createElement(r.PanelRow,null,"Text color"),wp.element.createElement(r.PanelRow,null,wp.element.createElement(r.ColorPalette,{colors:o.a,value:e.attributes.textColor,onChange:n})),wp.element.createElement(r.PanelRow,null,"Background color"),wp.element.createElement(r.PanelRow,null,wp.element.createElement(r.ColorPalette,{colors:o.a,value:e.attributes.bgColor,onChange:l})),wp.element.createElement(r.PanelRow,null,wp.element.createElement(r.TextControl,{label:"Destination URL",value:e.attributes.url,onChange:t}))))),wp.element.createElement(a.RichText,{className:"cta-btn",tagName:"a",value:e.attributes.btnTxt,placeholder:"Button text",onChange:i}))},save:function(e){return wp.element.createElement("div",{className:e.className+" text-"+e.attributes.align},wp.element.createElement("a",{href:e.attributes.url,class:"btn btn-lg btn-accent text-white font-weight-bold text-uppercase",style:{backgroundColor:e.attributes.bgColor,color:e.attributes.textColor}},e.attributes.btnTxt))}})},function(e,t,n){"use strict";var a=n(12),r=(n.n(a),n(0)),l=(n.n(r),n(1)),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("abhinash/alert",{title:__("Alert Box"),icon:"info",category:"asag-blocks",keywords:[__("alert"),__("info"),__("box")],selector:"div",attributes:{alertType:{type:"string",default:"primary"}},edit:function(e){var t=function(t){e.setAttributes({alertType:t})},n=[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Accent",value:"accent"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}];return wp.element.createElement("div",null,wp.element.createElement(r.InspectorControls,null,wp.element.createElement(l.Panel,{title:"Alert Blocks Settings"},wp.element.createElement(l.PanelBody,{initialOpen:!0,title:"Options",icon:"admin-settings"},wp.element.createElement(l.PanelRow,null,wp.element.createElement(l.SelectControl,{value:e.attributes.alertType,options:n,label:"Alert Type",onChange:t}))))),wp.element.createElement("div",{className:"editor-alert editor-alert-type-"+e.attributes.alertType},wp.element.createElement(r.InnerBlocks,null)))},save:function(e){return wp.element.createElement("div",{className:"alert alert-"+e.attributes.alertType},wp.element.createElement(r.InnerBlocks.Content,null))}})},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=n(14),l=n.n(r),o=n(0),i=(n.n(o),n(1)),s=(n.n(i),n(23)),__=(n.n(s),wp.i18n.__),c=wp.blocks.registerBlockType;l.a.characters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-"),c("abhinash/faqs",{title:__("FAQs"),icon:"editor-help",category:"asag-blocks",keywords:[__("faqs"),__("frequent"),__("questions"),__("query")],selector:"div",attributes:{questions:{type:"array",default:[]},schema:{type:"string"},containerId:{type:"string"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=function(e){if(n({containerId:"container-"+l.a.generate()}),t.questions.length<=e)for(;t.questions.length<=e;){var a=t.questions,r="q-"+l.a.generate();a.push({q:"",a:"",id:r}),n({questions:a})}if(t.questions.length>e)for(;t.questions.length>e;){var o=t.questions;o.pop(),n({questions:o})}},s=function(){var e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[]},a=function(e,t){return{"@type":"Question",name:e,acceptedAnswer:{"@type":"Answer",text:t}}};t.questions.forEach(function(t){e.mainEntity.push(a(t.q,t.a))}),n({schema:JSON.stringify(e)})},c=function(e,r){var l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=[].concat(a(t.questions));l?o[e].a=r:o[e].q=r,n({questions:o}),s()};return wp.element.createElement("div",null,wp.element.createElement(o.InspectorControls,null,wp.element.createElement(i.Panel,{title:"FAQs Settings"},wp.element.createElement(i.PanelBody,{title:"Settings",icon:"admin-settings",initialOpen:!0},wp.element.createElement(i.PanelRow,null,wp.element.createElement(i.__experimentalNumberControl,{label:"No. of Questions",value:t.questions.length,onChange:r}))))),t.questions.length<1&&wp.element.createElement("div",{className:"editor-placeholder-text"},"Start adding FAQs by setting the value for number of questions through the sidebar ",wp.element.createElement("b",null,"Settings"),"."),wp.element.createElement("div",{className:"editor-faqs-list"},t.questions.length>0&&t.questions.map(function(e,t){return wp.element.createElement("div",{className:"editor-faq-item"},wp.element.createElement("div",{className:"editor-faq-header"},wp.element.createElement(o.RichText,{value:e.q,onChange:function(e){return c(t,e)},placeholder:"Type question here..."})),wp.element.createElement("div",{className:"editor-faq-expand-item"},wp.element.createElement(o.RichText,{value:e.a,onChange:function(e){return c(t,e,!0)},placeholder:"Type answer here...",selector:"p"})))})))},save:function(e){var t=e.attributes;return wp.element.createElement("div",null,wp.element.createElement("script",{type:"application/ld+json"},t.schema),wp.element.createElement("div",{className:"accordion my-3",id:t.containerId},t.questions.map(function(e){var n=e.q,a=e.a,r=e.id;return wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"card-header text-left",id:"heading-"+r},wp.element.createElement("h2",{className:"mb-0"},wp.element.createElement("button",{className:"btn btn-link text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#"+r,"aria-expanded":"false","aria-controls":r},n))),wp.element.createElement("div",{id:r,className:"hide collapse","aria-labelledby":"heading-"+r,"data-parent":"#"+t.containerId},wp.element.createElement("div",{className:"card-body text-dark",dangerouslySetInnerHTML:{__html:a}})))})))}})},function(e,t,n){"use strict";e.exports=n(15)},function(e,t,n){"use strict";function a(t){return i.seed(t),e.exports}function r(t){return u=t,e.exports}function l(e){return void 0!==e&&i.characters(e),i.shuffled()}function o(){return s(u)}var i=n(2),s=n(17),c=n(21),u=n(22)||0;e.exports=o,e.exports.generate=o,e.exports.seed=a,e.exports.worker=r,e.exports.characters=l,e.exports.isValid=c},function(e,t,n){"use strict";function a(){return(l=(9301*l+49297)%233280)/233280}function r(e){l=e}var l=1;e.exports={nextValue:a,seed:r}},function(e,t,n){"use strict";function a(e){var t="",n=Math.floor(.001*(Date.now()-i));return n===l?r++:(r=0,l=n),t+=o(s),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}var r,l,o=n(18),i=(n(2),1567752802062),s=7;e.exports=a},function(e,t,n){"use strict";function a(e){for(var t,n=0,a="";!t;)a+=o(l,r.get(),1),t=e<Math.pow(16,n+1),n++;return a}var r=n(2),l=n(19),o=n(20);e.exports=a},function(e,t,n){"use strict";var a,r="object"===typeof window&&(window.crypto||window.msCrypto);a=r&&r.getRandomValues?function(e){return r.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=a},function(e,t){e.exports=function(e,t,n){for(var a=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*a*n/t.length),l="";;)for(var o=e(r),i=r;i--;)if(l+=t[o[i]&a]||"",l.length===+n)return l}},function(e,t,n){"use strict";function a(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}var r=n(2);e.exports=a},function(e,t,n){"use strict";e.exports=0},function(e,t){}]);