(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a187c6b"],{"0798":function(e,t,r){"use strict";var s=r("5530"),n=r("ade3"),o=(r("caad"),r("0c18"),r("10d2")),i=r("afdd"),a=r("9d26"),l=r("f2e7"),c=r("7560"),u=r("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r("58df"),p=r("d9bd");t["a"]=Object(h["a"])(o["a"],l["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(a["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},afdd:function(e,t,r){"use strict";var s=r("8336");t["a"]=s["a"]},dc29:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"unicycler"},[r("v-card",{attrs:{elevation:"12","min-height":"750"}},[r("v-card-title",[e._v("Unicycler")]),r("v-card-subtitle",[e._v("Resolving bacterial genome assemblies from short and long sequencing reads.")]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-card",{staticClass:"pa-3",attrs:{color:"grey lighten-4"}},[r("v-form",{ref:"form",model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[r("v-text-field",{attrs:{counter:15,label:"Project Name",rules:[e.rules.required,e.rules.length]},model:{value:e.input.name,callback:function(t){e.$set(e.input,"name",t)},expression:"input.name"}}),r("v-select",{attrs:{items:e.fastqFiles,"item-text":"filename","item-value":"path",label:"Forward reads","menu-props":{top:!0,offsetY:!0},hint:"FASTQ file of first short reads in each pair",rules:[e.rules.required]},model:{value:e.input.fq1,callback:function(t){e.$set(e.input,"fq1",t)},expression:"input.fq1"}}),r("v-select",{attrs:{items:e.fastqFiles,"item-text":"filename","item-value":"path",label:"Reverse reads","menu-props":{top:!0,offsetY:!0},hint:"FASTQ file of second short reads in each pair",rules:[e.rules.required]},model:{value:e.input.fq2,callback:function(t){e.$set(e.input,"fq2",t)},expression:"input.fq2"}}),r("v-select",{attrs:{items:e.modes,label:"Bridging mode.","menu-props":{top:!0,offsetY:!0},rules:[e.rules.required]},model:{value:e.input.mode,callback:function(t){e.$set(e.input,"mode",t)},expression:"input.mode"}}),r("v-text-field",{attrs:{label:"Min fasta length",hint:"Exclude contigs from the FASTA file which are shorter than this length",rules:[e.rules.required]},model:{value:e.input.length,callback:function(t){e.$set(e.input,"length",t)},expression:"input.length"}})],1),r("v-card-actions",[r("v-btn",{staticClass:"white--text",attrs:{disabled:!e.form,color:"deep-purple accent-4"},on:{click:e.runUnicycler}},[e._v(" Run Unicycler ")])],1)],1)],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-card",{staticClass:"pa-3"},[r("p",[e._v("Unicycler is an assembly pipeline for bacterial genomes. It can assemble Illumina-only read sets where it functions as a SPAdes-optimiser. Can be run in three modes: "),r("strong",[e._v("conservative, normal (the default) and bold")]),e._v(", set with the --mode option. Conservative mode is least likely to produce a complete assembly but has a very low risk of misassembly. Bold mode is most likely to produce a complete assembly but carries greater risk of misassembly. Normal mode is intermediate regarding both completeness and misassembly risk.")]),r("p",[e._v("If the structural accuracy of your assembly is paramount to your research, conservative mode is recommended. If you want a completed genome, even if it contains a mistake or two, then use bold mode.")]),e.loaded?r("div",[r("v-alert",{attrs:{outlined:"",type:"success",text:""}},[e._v(" "+e._s(e.result)+" ")])],1):e._e()])],1)],1)],1)],1),r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}}),r("p",{staticClass:"text-center"},[r("b",[e._v("Runing Unicycler"),r("br"),e._v("Please wait...")])])],1)],1)},n=[],o=r("1da1"),i=r("5530"),a=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("2f62")),l={name:"Unicycler",data:function(){return{form:!1,overlay:!1,loaded:!1,input:{name:"A1M01",fq1:null,fq2:null,mode:"normal",length:500,user:this.$store.state.user},modes:["conservative","normal","bold"],rules:{upper:function(e){return/^[A-Z]*$/.test(e)||"Only Uppercase"},length:function(e){return e&&e.length<=15||"Name must be less than 15 characters"},required:function(e){return!!e||"This field is required"}},result:""}},computed:Object(i["a"])({},Object(a["c"])(["fastqFiles"])),methods:{runUnicycler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loaded=!1,e.overlay=!0,t.next=5,e.axios.post("/biotools/unicycler",e.input);case 5:r=t.sent,e.result=r.data.msg,e.overlay=!1,e.loaded=!0,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),e.result=t.t0.response.data,e.overlay=!1,e.loaded=!0;case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},download:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/storage/download/".concat(e.result.unicycler._id),{responseType:"blob"});case 3:r=t.sent,s=window.URL.createObjectURL(new Blob([r.data])),n=document.createElement("a"),n.href=s,n.setAttribute("download","".concat(e.result.unicycler.filename)),document.body.appendChild(n),n.click(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}},c=l,u=r("2877"),d=r("6544"),h=r.n(d),p=r("0798"),m=r("8336"),f=r("b0af"),v=r("99d9"),b=r("62ad"),g=r("4bd4"),y=r("a797"),_=r("490a"),x=r("0fd9"),C=r("b974"),w=r("8654"),k=Object(u["a"])(c,s,n,!1,null,null,null);t["default"]=k.exports;h()(k,{VAlert:p["a"],VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:b["a"],VForm:g["a"],VOverlay:y["a"],VProgressCircular:_["a"],VRow:x["a"],VSelect:C["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-0a187c6b.866cc44d.js.map