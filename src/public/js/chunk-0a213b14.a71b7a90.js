(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a213b14"],{"0798":function(t,e,i){"use strict";var r=i("5530"),o=i("ade3"),s=(i("caad"),i("0c18"),i("10d2")),n=i("afdd"),a=i("9d26"),c=i("f2e7"),l=i("7560"),d=i("2b0e"),u=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=i("58df"),p=i("d9bd");e["a"]=Object(h["a"])(s["a"],c["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},afdd:function(t,e,i){"use strict";var r=i("8336");e["a"]=r["a"]},f88c:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"augustus"},[i("v-card",{attrs:{elevation:"12","min-height":"750"}},[i("v-card-title",[t._v("Augustus")]),i("v-card-subtitle",[t._v(" A program that predicts genes in eukaryotic genomic sequences. ")]),i("v-card-text",[i("p",[t._v("AUGUSTUS is a software tool for gene prediction in eukaryotes based on a Generalized Hidden Markov Model, a probabilistic model of a sequence and its gene structure. Like most existing gene finders, the first version of AUGUSTUS returned one transcript per predicted gene and ignored the phenomenon of alternative splicing. ")]),i("v-alert",{attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" En desarrollo de interfaz web ")]),i("iframe",{staticStyle:{display:"block",width:"100%",height:"100vh"},attrs:{src:"http://bioinf.uni-greifswald.de/webaugustus/"}})],1)],1)],1)},o=[],s={name:"Augustus",data:function(){return{}}},n=s,a=i("2877"),c=i("6544"),l=i.n(c),d=i("0798"),u=i("b0af"),h=i("99d9"),p=Object(a["a"])(n,r,o,!1,null,null,null);e["default"]=p.exports;l()(p,{VAlert:d["a"],VCard:u["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"]})}}]);
//# sourceMappingURL=chunk-0a213b14.a71b7a90.js.map