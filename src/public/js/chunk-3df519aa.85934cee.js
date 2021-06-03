(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3df519aa"],{"56d2":function(e,t,s){"use strict";s("74cf")},"74cf":function(e,t,s){},d199:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"quast"},[s("v-card",{attrs:{elevation:"12","min-height":"750"}},[s("v-card-title",[e._v("Quast")]),s("v-card-subtitle",[e._v("Quality Assessment Tool for Genome Assemblies")]),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-card",{attrs:{color:"grey lighten-4"}},[s("v-card-text",[s("v-form",{ref:"form",model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Project name",type:"text",rules:[e.rules.required]},model:{value:e.input.name,callback:function(t){e.$set(e.input,"name",t)},expression:"input.name"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Thresholds",type:"text",hint:"Comma-separated list of contig length thresholds","persistent-hint":"",rules:[e.rules.required]},model:{value:e.input.thresholds,callback:function(t){e.$set(e.input,"thresholds",t)},expression:"input.thresholds"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{items:e.fastaFiles,"item-text":"filename","item-value":"path",label:"Assembly",hint:"Select an assembly",rules:[e.rules.required]},model:{value:e.input.assembly,callback:function(t){e.$set(e.input,"assembly",t)},expression:"input.assembly"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{items:e.references,"item-text":"name","item-value":"short_name",label:"Reference Genome",rules:[e.rules.required]},model:{value:e.input.reference,callback:function(t){e.$set(e.input,"reference",t)},expression:"input.reference"}})],1)],1)],1)],1),s("v-card-actions",[s("v-btn",{staticClass:"white--text",attrs:{disabled:!e.form,color:"deep-purple accent-4"},on:{click:e.runQuast}},[e._v(" Run QUAST ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"9"}},[s("v-card",[s("v-card-text",[s("p",[e._v("QUAST stands for QUality ASsessment Tool. The tool evaluates genome assemblies by computing various metrics. This document provides instructions for the general QUAST tool for genome assemblies")]),e.show?s("div",[s("v-btn",{staticClass:"my-3 white--text",attrs:{color:"blue-grey"},on:{click:function(t){return e.download()}}},[e._v(" Download Full Report "),s("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-cloud-download")])],1),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[s("span",{staticClass:"titulo"},[e._v(" Statistics whit reference")]),s("table",{staticClass:"styled-table"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.result.report[13].item))]),s("th",[e._v(e._s(e.result.report[14].item))]),s("th",[e._v(e._s(e.result.report[15].item))]),s("th",[e._v(e._s(e.result.report[16].item))]),s("th",[e._v(e._s(e.result.report[36].item))]),s("th",[e._v(e._s(e.result.report[34].item))])])]),s("tbody",[s("tr",[s("td",[e._v(e._s(e.result.report[13].value))]),s("td",[e._v(e._s(e.result.report[14].value))]),s("td",[e._v(e._s(e.result.report[15].value))]),s("td",[e._v(e._s(e.result.report[16].value))]),s("td",[e._v(e._s(e.result.report[36].value))]),s("td",[e._v(e._s(e.result.report[34].value))])])])]),s("p",[s("span",{staticClass:"metric-name"},[e._v("# contigs")]),e._v(" is the total number of contigs in the assembly.")]),s("p",[s("span",{staticClass:"metric-name"},[e._v("Largest contig")]),e._v(" is the length of the longest contig in the assembly.")]),s("p",[s("span",{staticClass:"metric-name"},[e._v("Total length")]),e._v(" is the total number of bases in the assembly.")]),s("p",[s("span",{staticClass:"metric-name"},[e._v("Reference length")]),e._v(" is the total number of bases in the reference genome.")]),s("p",[s("span",{staticClass:"metric-name"},[e._v("Genome fraction (%)")]),e._v(" is the percentage of aligned bases in the reference genome. A base in the reference genome is aligned if there is at least one contig with at least one alignment to this base. Contigs from repetitive regions may map to multiple places, and thus may be counted multiple times.")]),s("p",[s("span",{staticClass:"metric-name"},[e._v("# unaligned contigs")]),e._v(' is the number of contigs that have no alignment to the reference sequence. The value "X'),s("span",{staticClass:"rhs"}),e._v("+"),s("span",{staticClass:"rhs"}),e._v('Y part" means X totally unaligned contigs plus Y partially unaligned contigs.')])]),s("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[s("span",{staticClass:"titulo"},[e._v("Statistics without reference")]),s("table",{staticClass:"styled-table"},[s("thead",[s("tr",[s("th",[e._v("Item")]),s("th",[e._v("Value")])])]),s("tbody",[e._l(13,(function(t,r){return s("tr",{key:r},[s("td",[e._v(e._s(e.result.report[r].item))]),s("td",[e._v(e._s(e.result.report[r].value))])])})),e._l(8,(function(t,r){return s("tr",{key:r},[s("td",[e._v(e._s(e.result.report[r+19].item))]),s("td",[e._v(e._s(e.result.report[r+19].value))])])}))],2)])])],1)],1):e._e()])],1)],1)],1)],1)],1),s("v-overlay",{attrs:{value:e.overlay}},[s("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",size:"64"}}),s("p",{staticClass:"text-center"},[s("b",[e._v("Runing Quast"),s("br"),e._v("Please wait...")])])],1)],1)},a=[],n=s("1da1"),l=s("5530"),o=(s("2b3d"),s("d3b7"),s("3ca3"),s("ddb0"),s("96cf"),s("2f62")),i={name:"Quast",data:function(){return{form:!1,overlay:!1,show:!1,input:{name:"quast",thresholds:"0,1000,5000,10000,25000,50000",assembly:"",reference:"",user:this.$store.state.user},references:[],rules:{required:function(e){return!!e||"This field is required"},length:function(e){return e&&e.length<=15||"Name must be less than 10 characters"}},result:""}},created:function(){this.species()},computed:Object(l["a"])({},Object(o["c"])(["fastaFiles"])),methods:{species:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/specie/list");case 3:s=t.sent,e.references=s.data.result,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},runQuast:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.overlay=!0,e.show=!1,t.next=5,e.axios.post("/biotools/quast",e.input);case 5:s=t.sent,e.result=s.data.result,e.show=!0,e.overlay=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},download:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s={headers:{token:e.$store.state.token}},t.next=4,e.axios.get("/storage/download/".concat(e.result.quast._id),s,{responseType:"blob"});case 4:r=t.sent,a=window.URL.createObjectURL(new Blob([r.data])),n=document.createElement("a"),n.href=a,n.setAttribute("download","".concat(e.result.quast.filename)),document.body.appendChild(n),n.click(),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},c=i,u=(s("56d2"),s("2877")),d=s("6544"),v=s.n(d),m=s("8336"),p=s("b0af"),h=s("99d9"),f=s("62ad"),b=s("4bd4"),_=s("132d"),g=s("a797"),w=s("490a"),y=s("0fd9"),x=s("b974"),C=s("8654"),k=Object(u["a"])(c,r,a,!1,null,"72e15058",null);t["default"]=k.exports;v()(k,{VBtn:m["a"],VCard:p["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:f["a"],VForm:b["a"],VIcon:_["a"],VOverlay:g["a"],VProgressCircular:w["a"],VRow:y["a"],VSelect:x["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-3df519aa.85934cee.js.map