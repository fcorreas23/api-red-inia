(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0748efc1"],{"0798":function(t,e,r){"use strict";var i=r("5530"),o=r("ade3"),s=(r("caad"),r("0c18"),r("10d2")),n=r("afdd"),a=r("9d26"),c=r("f2e7"),l=r("7560"),d=r("2b0e"),h=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=r("58df"),p=r("d9bd");e["a"]=Object(u["a"])(s["a"],c["a"],h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},"1a55":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"masurca"},[r("v-card",{attrs:{elevation:"12","min-height":"750"}},[r("v-card-title",[t._v("MaSuRCA")]),r("v-card-subtitle",[r("i",[t._v("Zimin AV, Marçais G, Puiu D, Roberts M, Salzberg SL, Yorke JA.")]),t._v(" "),r("b",[t._v("The MaSuRCA genome assembler")]),t._v(". Bioinformatics. 2013;29(21):2669-2677. "),r("a",{attrs:{href:"https://doi.org/10.1093/bioinformatics/btt476",target:"_blank"}},[t._v("doi:10.1093/bioinformatics/btt476")])]),r("v-card-text",[r("p",[t._v("The MaSuRCA assembler combines the benefits of deBruijn graph and Overlap-Layout-Consensus assembly approaches. Since version 3.2.1 it supports hybrid assembly with short Illumina reads and long high error PacBio/MinION data.")]),r("v-alert",{attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" En desarrollo de interfaz web y backend ")])],1)],1)],1)},o=[],s={name:"Masurca",data:function(){return{}}},n=s,a=r("2877"),c=r("6544"),l=r.n(c),d=r("0798"),h=r("b0af"),u=r("99d9"),p=Object(a["a"])(n,i,o,!1,null,null,null);e["default"]=p.exports;l()(p,{VAlert:d["a"],VCard:h["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"]})},afdd:function(t,e,r){"use strict";var i=r("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-0748efc1.22fdbb03.js.map