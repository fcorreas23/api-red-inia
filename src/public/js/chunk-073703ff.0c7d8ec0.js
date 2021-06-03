(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073703ff"],{"0798":function(t,e,o){"use strict";var i=o("5530"),s=o("ade3"),r=(o("caad"),o("0c18"),o("10d2")),n=o("afdd"),a=o("9d26"),l=o("f2e7"),c=o("7560"),d=o("2b0e"),h=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=o("58df"),p=o("d9bd");e["a"]=Object(u["a"])(r["a"],l["a"],h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,o){},"18f1":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"platanus"},[o("v-card",{attrs:{elevation:"12","min-height":"750"}},[o("v-card-title",[t._v("Platanus-allee")]),o("v-card-subtitle",[o("i",[t._v("Kajitani R, Yoshimura D, Okuno M, Minakuchi Y, Kagoshima H, Fujiyama A, Kubokawa K, Kohara Y, Toyoda A, Itoh T")]),t._v(", "),o("b",[t._v("“Platanus-allee is a de novo haplotype assembler enabling a comprehensive access to divergent heterozygous regions”.")]),t._v(" Nature Communications 10 Article number: 1702 (2019). "),o("a",{attrs:{href:"https://rdcu.be/bwkPI",target:"_blank"}},[t._v("doi: 10.1038/s41467-019-09575-2")])]),o("v-card-text",[o("p",[t._v("Platanus-allee is a de novo haplotype assembler (phasing tool), which assembles each haplotype sequence in a diploid genome. Compared to the read mapping-based haplotype phasing tools, Platanus-allee is especially useful to analyze highly divergent (heterozygous) regions in which haplotypes extremely differ.")]),o("v-alert",{attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" En desarrollo de interfaz web ")])],1)],1)],1)},s=[],r={name:"Platanus",data:function(){return{}}},n=r,a=o("2877"),l=o("6544"),c=o.n(l),d=o("0798"),h=o("b0af"),u=o("99d9"),p=Object(a["a"])(n,i,s,!1,null,null,null);e["default"]=p.exports;c()(p,{VAlert:d["a"],VCard:h["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"]})},afdd:function(t,e,o){"use strict";var i=o("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-073703ff.0c7d8ec0.js.map