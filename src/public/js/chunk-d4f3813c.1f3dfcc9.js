(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4f3813c"],{"1f4f":function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("8b37"),a("80d2")),o=a("7560"),n=a("58df");e["a"]=Object(n["a"])(o["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"43d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fastqc"},[a("v-card",{attrs:{elevation:"12","min-height":"750"}},[a("v-card-title",[t._v("Fastqc")]),a("v-card-subtitle",[t._v("A quality control tool for high throughput sequence data")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"2"}},[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-card-text",[a("v-form",{ref:"form",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("v-select",{attrs:{items:t.fastqFiles,"item-text":"filename","item-value":"path",label:"Fastq file",rules:[t.rules.required]},model:{value:t.input.fastq,callback:function(e){t.$set(t.input,"fastq",e)},expression:"input.fastq"}})],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.form,color:"deep-purple accent-4"},on:{click:t.runFastqc}},[t._v(" Run FastQC ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-card",[a("v-card-text",[a("p",[t._v("FastQC permite realizar controles de calidad en archivos de secuencias obtenidos de métodos de secuenciación. Aporta un conjunto de análisis que te pueden dar una idea general rápida de si los datos tienen algún problema antes de proseguir con el análisis o si por el contrario cumplen los estándares de calidad aportados por el sistema.")]),a("p",[t._v("Una vez analizadas las muestras podemos definir si deseamos descartar lecturas de mala calidad para trabajar sólo con aquellas que cumplen un cierto requisito de calidad mínima.")]),t.show?a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:function(e){return t.download(t.result.report)}}},[t._v(" Download Full Report "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-cloud-download")])],1)],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-card",[a("v-card-title",[t._v("Summary")]),a("v-card-text",t._l(t.result.summary,(function(e){return a("div",{key:e.module},[a("p",[a("v-chip",{attrs:{link:"",small:"",color:t.getColor(e.status),dark:""}},[t._v(" "+t._s(e.status)+" ")]),t._v(" "+t._s(e.module)+" ")],1)])})),0)],1)],1),a("v-col",{attrs:{cols:"12",md:"9"}},[a("v-card",[a("v-card-title",[t._v("Basic Statistics")]),a("v-card-text",[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Measure")]),a("th",{staticClass:"text-left"},[t._v("Value")])])]),a("tbody",t._l(t.result.basic,(function(e){return a("tr",{key:e.measure},[a("td",[t._v(t._s(e.measure))]),a("td",[t._v(t._s(e.value))])])})),0)]},proxy:!0}],null,!1,1615428460)})],1)],1)],1)],1)],1):t._e()])],1)],1)],1)],1)],1),a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",size:"64"}}),a("p",{staticClass:"text-center"},[a("b",[t._v("Runing FastQC"),a("br"),t._v("Please wait...")])])],1)],1)},r=[],o=a("1da1"),n=a("5530"),l=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("2f62")),i={name:"Fastqc",data:function(){return{form:!1,overlay:!1,show:!1,dialog:!1,input:{fastq:"",user:this.$store.state.user},rules:{required:function(t){return!!t||"This field is required"}},result:""}},computed:Object(n["a"])({},Object(l["c"])(["fastqFiles"])),methods:{runFastqc:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.overlay=!0,t.show=!1,e.next=5,t.axios.post("/biotools/fastqc",t.input);case 5:a=e.sent,t.result=a.data.result,t.overlay=!1,t.show=!0,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},download:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.post("/storage/download",{report:t},{responseType:"blob"});case 3:s=a.sent,r=window.URL.createObjectURL(new Blob([s.data])),o=document.createElement("a"),o.href=r,o.setAttribute("download","fastqc_report.zip"),document.body.appendChild(o),o.click(),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},getColor:function(t){return"FAIL"===t?"red":"WARN"===t?"orange":"PASS"===t?"green":void 0}}},c=i,d=a("2877"),u=a("6544"),v=a.n(u),p=a("8336"),m=a("b0af"),f=a("99d9"),h=a("cc20"),b=a("62ad"),g=a("4bd4"),w=a("132d"),x=a("a797"),_=a("490a"),C=a("0fd9"),q=a("b974"),y=a("1f4f"),k=Object(d["a"])(c,s,r,!1,null,null,null);e["default"]=k.exports;v()(k,{VBtn:p["a"],VCard:m["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VChip:h["a"],VCol:b["a"],VForm:g["a"],VIcon:w["a"],VOverlay:x["a"],VProgressCircular:_["a"],VRow:C["a"],VSelect:q["a"],VSimpleTable:y["a"]})},"8b37":function(t,e,a){}}]);
//# sourceMappingURL=chunk-d4f3813c.1f3dfcc9.js.map