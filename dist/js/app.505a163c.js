(function(t){function e(e){for(var o,s,a=e[0],c=e[1],u=e[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0fae":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"kiri"},[t._m(0),n("div",{staticClass:"frame-notes"},[n("button",{staticClass:"bg-success btn btn-new-note",on:{click:t.newNote}},[t._v(" + Note Baru ")]),n("ListNotes",{attrs:{propNotes:t.notes}})],1)]),n("div",{staticClass:"kanan"},[n("FormNotes",{attrs:{propSaveNote:t.saveNote}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://wegodev.com"}},[n("h2",[t._v("IYAW")]),n("span",[t._v("Notes")])])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listNotes"},t._l(t.propNotes,(function(e,o){return n("li",{key:o},[n("button",{staticClass:"btn-note",on:{click:function(n){return t.idNote(e.id)}}},[n("label",[t._v(" "+t._s(e.title))]),n("span",[t._v(" "+t._s(e.description))])])])})),0)},a=[],c={name:"listNotes",data:function(){return{}},props:{propNotes:{type:Array},methods:{idNote:function(t){console.log(t)}}}},u=c,l=(n("f535"),n("2877")),p=Object(l["a"])(u,s,a,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formNotes"},[n("form",{on:{submit:t.submitNote}},[t._m(0),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"text textarea",attrs:{placeholder:"Tuliskan rencana kamu...."},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("button",{staticClass:"bg-danger btn btn-delete",attrs:{type:"button"}},[t._v("Delete")]),n("button",{staticClass:"bg-success btn",attrs:{type:"submit"}},[t._v("Save")])])}],m=(n("a4d3"),n("e01a"),{name:"formNotes",props:{propSaveNote:{type:Function}},data:function(){return{title:"",description:""}},methods:{submitNote:function(t){t.preventDefault(),this.propSaveNote(this.title,this.description)}}}),b=m,h=(n("7422"),Object(l["a"])(b,d,v,!1,null,"a18d1ed8",null)),y=h.exports,_={name:"app",data:function(){return{notes:[{id:1,title:"Iyaw",description:"Ini isi iyaw"},{id:2,title:"Renaldhy",description:"Ini isi renaldhy"}]}},components:{ListNotes:f,FormNotes:y},methods:{newNote:function(){},saveNote:function(t,e){var n={title:t,description:e};this.notes.push(n)}}},N=_,g=(n("034f"),Object(l["a"])(N,r,i,!1,null,null,null)),w=g.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)}}).$mount("#app")},6874:function(t,e,n){},7422:function(t,e,n){"use strict";var o=n("0fae"),r=n.n(o);r.a},"85ec":function(t,e,n){},f535:function(t,e,n){"use strict";var o=n("6874"),r=n.n(o);r.a}});
//# sourceMappingURL=app.505a163c.js.map