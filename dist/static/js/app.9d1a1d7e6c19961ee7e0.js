webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";var s=a(52),i=a(85),n=a(88),o=a(91);e.a={name:"Sessions",components:{Preloader:o.a,SessionListItem:n.a,ChooseTeam:i.a,ChooseSessionDate:s.a},data:function(){return{images:{sample:a(95)},items:[{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connorss",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{action:"2 hr",headline:"Summer BBQs",title:"me, Scrott, Jennifers",subtitle:"Wish I could come, but I'm out of town this weekend."},{action:"6 hr",headline:"Oui oui",title:"Sandra Adamss",subtitle:"Do you have Paris recommendations? Have you ever been?"},{action:"12 hr",headline:"Birthday gift",title:"Trevor Hansens",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{action:"18hr",headline:"Recipe to try",title:"Britta Holts",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."},{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{action:"2 hr",headline:"Summer BBQ",title:"me, Scrott, Jennifer",subtitle:"Wish I could come, but I'm out of town this weekend."},{action:"6 hr",headline:"Oui oui",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{action:"12 hr",headline:"Birthday gift",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{action:"18hr",headline:"Recipe to try",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}}}},function(t,e,a){"use strict";var s=a(54),i=a.n(s);e.a={name:"ChooseSessionDate",data:function(t){return{date:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),menu1:!1,menu2:!1,items:["Session History","Bar","Fizz","Buzz"]}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=i()(e,3),s=a[0];return a[1]+"/"+a[2]+"/"+s},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=i()(e,3),s=a[0],n=a[1];return a[2]+"-"+s.padStart(2,"0")+"-"+n.padStart(2,"0")}}}},,,,,,,,,,,,,,function(t,e,a){"use strict";e.a={name:"ChooseTeam",data:function(){return{states:["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Bobcats","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","LA Clippers","LA Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Hornets","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia Sixers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"]}}}},function(t,e,a){"use strict";e.a={name:"SessionListItem",props:["sessionList"],data:function(){return{dialog:!1}},methods:{}}},function(t,e,a){"use strict";e.a={name:"Preloader",data:function(){return{loading:!0}},created:function(){var t=this;setTimeout(function(){t.loading=!1},2e3)}}},function(t,e,a){"use strict";e.a={name:"Session",data:function(){return{btnToggle:"Team",items:["Session Type 1","Session Type 2","Session Type 3"],dialogComment:!1,dialogAddTag:!1,frequentTypes:["Frequent type 2","Frequent type 6"],loading:!1}}}},function(t,e,a){"use strict";var s=a(102);e.a={name:"Session",components:{PlayersListItem:s.a},data:function(){return{items:["NBA Forwards","NBA Middlefilders","NBA Deffenders"],players:[{number:"#11",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",action:"15 min",headline:"Brunch this weekend?",title:"Ali Connorss",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{number:"#12",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",action:"2 hr",headline:"Summer BBQs",title:"me, Scrott, Jennifers",subtitle:"Wish I could come, but I'm out of town this weekend."},{number:"#22",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",action:"6 hr",headline:"Oui oui",title:"Sandra Adamss",subtitle:"Do you have Paris recommendations? Have you ever been?"},{number:"#43",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",action:"12 hr",headline:"Birthday gift",title:"Trevor Hansens",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{number:"#11",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",action:"15 min",headline:"Brunch this weekend?",title:"Ali Connorss",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{number:"#12",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",action:"2 hr",headline:"Summer BBQs",title:"me, Scrott, Jennifers",subtitle:"Wish I could come, but I'm out of town this weekend."},{number:"#22",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",action:"6 hr",headline:"Oui oui",title:"Sandra Adamss",subtitle:"Do you have Paris recommendations? Have you ever been?"},{number:"#43",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",action:"12 hr",headline:"Birthday gift",title:"Trevor Hansens",subtitle:"Have any ideas about what we should get Heidi for her birthday?"}]}}}},function(t,e,a){"use strict";e.a={name:"PlayersListItem",props:["players"],data:function(){return{}}}},function(t,e,a){"use strict";e.a={name:"SetCategories"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),i=a(44),n=a(48),o=a(109),r=a.n(o),l=a(110);a.n(l);s.default.use(r.a,{theme:{primary:"#ff7043",secondary:"#207fb5"}}),s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},,,,function(t,e,a){"use strict";function s(t){a(45)}var i=a(17),n=a(47),o=a(0),r=s,l=o(i.a,n.a,!1,r,null,null);e.a=l.exports},function(t,e){},,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-flex",{attrs:{xl4:"","offset-xl4":""}},[a("router-view")],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var s=a(9),i=a(49),n=a(50),o=a(97),r=a(100),l=a(106);s.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Sessions",component:n.a},{path:"/session",name:"Session",component:o.a},{path:"/log-individuals",name:"LogIndividuals",component:r.a},{path:"/set-categories",name:"SetCategories",component:l.a}]})},,function(t,e,a){"use strict";function s(t){a(51)}var i=a(18),n=a(96),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-e8b77496",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";function s(t){a(53)}var i=a(19),n=a(84),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-1cd8ca13",null);e.a=l.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pb-0",attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"From","persistent-hint":"","prepend-icon":"event",dark:""},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},s))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"To","persistent-hint":"","prepend-icon":"event",readonly:"",dark:""},model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}},s))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("v-flex",{staticClass:"align-center justify-center d-flex",attrs:{xs2:""}},[a("v-btn",{staticClass:"ma-0",attrs:{flat:"",icon:"",color:"white"}},[a("v-icon",[t._v("filter_list")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{items:t.items,label:"Session History",solo:"",light:""}})],1)],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(86)}var i=a(33),n=a(87),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-d94939b6",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{staticClass:"ma-0 pa-0",attrs:{items:t.states,"menu-props":"auto",label:"Select a team","hide-details":"","prepend-icon":"group","single-line":""}})},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(89)}var i=a(34),n=a(90),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-2a3382df",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.sessionList,function(e,s){return a("div",[a("v-list",{staticClass:"ma-0 pa-0",attrs:{"two-line":""}},[a("v-list-tile",{key:e.title,staticClass:"py-2"},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),a("v-list-tile-sub-title",{staticClass:"text--primary"},[t._v(t._s(e.headline))]),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),a("v-list-tile-action",[a("v-btn",{staticClass:"mb-2",attrs:{icon:"",flat:"",to:{name:"Session"}}},[a("v-icon",[t._v("edit")])],1),t._v(" "),a("v-btn",{attrs:{icon:"",flat:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("comment")])],1)],1)],1),t._v(" "),s+1<t.sessionList.length?a("v-divider",{key:s}):t._e()],1)],1)}),t._v(" "),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("\n        Comments\n      ")]),t._v(" "),a("v-card-text",[a("p",[a("b",[t._v("1.")]),t._v(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")]),t._v(" "),a("p",[a("b",[t._v("2.")]),t._v(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")]),t._v(" "),a("p",[a("b",[t._v("3.")]),t._v(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(92)}var i=a(35),n=a(93),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-7d281862",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"custom-loader"},[s("v-flex",{staticClass:"text-xs-center"},[s("img",{attrs:{src:a(94),alt:"Luceo Sports"}}),t._v(" "),s("div"),t._v(" "),s("v-progress-circular",{staticClass:"mt-5",attrs:{size:80,color:"deep-orange lighten-2",indeterminate:""}})],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,a){t.exports=a.p+"static/img/lakers_promo.44fe86c.jpg"},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 fill-height"},[a("Preloader"),t._v(" "),a("v-layout",{attrs:{wrap:""}},[a("v-toolbar",{attrs:{color:"secondary"}},[a("v-flex",{staticClass:"pa-2",attrs:{xs9:""}},[a("ChooseTeam")],1),t._v(" "),a("v-flex",{staticClass:"text-xs-right pt-2 pb-2 pr-0",attrs:{xs3:""}},[a("v-btn",{staticClass:"ma-0",attrs:{flat:"",icon:"",color:"white"}},[a("v-icon",[t._v("settings")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-img",{attrs:{src:t.images.sample}})],1),t._v(" "),a("v-flex",{staticClass:"pt-3",attrs:{xs12:""}},[a("h4",{staticClass:"title font-weight-medium text-uppercase text-xs-center white--text"},[t._v("Session insights")]),t._v(" "),a("ChooseSessionDate")],1),t._v(" "),a("v-flex",{attrs:{xs12:"","justify-end":""}},[a("SessionListItem",{attrs:{sessionList:t.items}}),t._v(" "),a("div",{staticStyle:{height:"90px"}}),t._v(" "),a("v-fab-transition",[a("v-btn",{attrs:{color:"deep-orange lighten-1",dark:"",fixed:"",bottom:"",right:"",fab:"",to:{name:"Session"}}},[a("v-icon",{staticClass:"d-flex"},[t._v("add")])],1)],1)],1)],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(98)}var i=a(36),n=a(99),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-337bbdbe",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("v-layout",{attrs:{wrap:""}},[a("v-toolbar",{attrs:{color:"secondary"}},[a("v-btn",{staticClass:"mb-2",attrs:{icon:"",flat:"",to:{name:"Sessions"}}},[a("v-icon",[t._v("navigate_before")])],1),t._v(" "),a("v-toolbar-title",{staticClass:"ml-1"},[t._v("View Session")])],1),t._v(" "),a("v-flex",{staticClass:"pa-3",attrs:{xs12:""}},[a("v-btn-toggle",{staticClass:"d-flex custom-btn-toggle",attrs:{mandatory:""},model:{value:t.btnToggle,callback:function(e){t.btnToggle=e},expression:"btnToggle"}},[a("v-btn",{attrs:{flat:"",value:"Team"}},[t._v("\n          Team\n        ")]),t._v(" "),a("v-btn",{attrs:{flat:"",value:"Group"}},[t._v("\n          Group\n        ")]),t._v(" "),a("v-btn",{attrs:{flat:"",value:"Solo"}},[t._v("\n          Solo\n        ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 1",value:"Frequent type 1"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}}),t._v(" "),a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 2",value:"Frequent type 2"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}}),t._v(" "),a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 3",value:"Frequent type 3"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}})],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 4",value:"Frequent type 4"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}}),t._v(" "),a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 5",value:"Frequent type 5"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}}),t._v(" "),a("v-switch",{staticClass:"align-center justify-center",attrs:{color:"primary",label:"Frequent type 6",value:"Frequent type 6"},model:{value:t.frequentTypes,callback:function(e){t.frequentTypes=e},expression:"frequentTypes"}})],1),t._v(" "),a("v-flex",{staticClass:"pt-3 px-3",attrs:{xs12:""}},[a("v-select",{attrs:{items:t.items,label:"Session Type",solo:""}})],1),t._v(" "),a("v-flex",{staticClass:"pl-3",attrs:{xs6:""}},[a("v-chip",{staticClass:"d-block pa-2 ml-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 1\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 ml-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 3\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 ml-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 5\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 ml-0",attrs:{label:"",color:"secondary darken-2","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 7\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"pr-3",attrs:{xs6:""}},[a("v-chip",{staticClass:"d-block pa-2 mr-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 2\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 mr-0",attrs:{label:"",color:"secondary darken-2","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 4\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 mr-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 6\n      ")],1),t._v(" "),a("v-chip",{staticClass:"d-block pa-2 mr-0",attrs:{label:"",color:"secondary","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Frequent Tag 8\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"px-3",attrs:{xs12:""}},[a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"primary",block:"",large:""},on:{click:function(e){t.dialogAddTag=!0}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("add")]),t._v(" Add Tag")],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("div",{staticStyle:{height:"90px"}}),t._v(" "),a("v-fab-transition",[a("v-btn",{attrs:{color:"deep-orange lighten-1",dark:"",fixed:"",bottom:"",left:"",fab:""},on:{click:function(e){t.dialogComment=!0}}},[a("v-icon",{staticClass:"d-flex"},[t._v("comment")])],1)],1),t._v(" "),a("v-fab-transition",[a("v-btn",{attrs:{color:"deep-orange lighten-1",dark:"",fixed:"",bottom:"",right:"",fab:"",to:{name:"LogIndividuals"}}},[a("v-icon",{staticClass:"d-flex"},[t._v("navigate_next")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogComment,callback:function(e){t.dialogComment=e},expression:"dialogComment"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("\n          Add Comment\n        ")]),t._v(" "),a("v-card-text",[a("v-textarea",{attrs:{placeholder:"Please, add comment..."}})],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:function(e){t.dialogComment=!1}}},[t._v("Save")]),t._v(" "),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialogComment=!1}}},[t._v("Close")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogAddTag,callback:function(e){t.dialogAddTag=e},expression:"dialogAddTag"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("\n          Add Tag\n        ")]),t._v(" "),a("v-card-text",[a("v-text-field",{attrs:{placeholder:"Please, add tag..."}})],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:function(e){t.dialogAddTag=!1}}},[t._v("Save")]),t._v(" "),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialogAddTag=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(101)}var i=a(37),n=a(105),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-75548a20",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";function s(t){a(103)}var i=a(38),n=a(104),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-4d420ffa",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.players,function(e,s){return a("div",[a("v-list",{staticClass:"ma-0 pa-0",attrs:{"two-line":""}},[a("v-list-tile",{key:e.title,staticClass:"py-2"},[a("v-list-tile-avatar",{staticClass:"d-flex column",attrs:{size:"55"}},[a("img",{attrs:{src:e.avatar}})]),t._v(" "),a("v-list-tile-content",{staticClass:"ml-4"},[a("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),a("v-list-tile-sub-title",{staticClass:"text--primary"},[a("v-btn",{staticClass:"mb-2 secondary",attrs:{icon:"",flat:""}},[a("v-icon",[t._v("local_hotel")])],1),t._v(" "),a("v-btn",{staticClass:"mb-2 secondary",attrs:{icon:"",flat:""}},[a("v-icon",[t._v("local_hospital")])],1),t._v(" "),a("v-btn",{staticClass:"mb-2 secondary",attrs:{icon:"",flat:""}},[a("v-icon",[t._v("comment")])],1),t._v(" "),a("v-btn",{staticClass:"mb-2 secondary",attrs:{icon:"",flat:""}},[a("v-icon",[t._v("local_offer")])],1)],1)],1),t._v(" "),a("v-list-tile-action",{staticClass:"font-weight-bold"},[t._v("\n          "+t._s(e.number)+"\n        ")])],1),t._v(" "),s+1<t.players.length?a("v-divider",{key:s}):t._e()],1)],1)}),0)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("v-layout",{attrs:{wrap:""}},[a("v-toolbar",{attrs:{color:"secondary"}},[a("v-btn",{staticClass:"mb-2",attrs:{icon:"",flat:"",to:{name:"Session"}}},[a("v-icon",[t._v("navigate_before")])],1),t._v(" "),a("v-toolbar-title",{staticClass:"ml-1"},[t._v("Log Individuals")])],1),t._v(" "),a("v-flex",{staticClass:"pt-3",attrs:{xs12:""}},[a("h4",{staticClass:"title font-weight-medium text-uppercase text-xs-center white--text"},[t._v("Coaches")])]),t._v(" "),a("v-flex",{staticClass:"pt-3 text-xs-center",attrs:{xs4:""}},[a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Alex Ranee\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        George Ranee\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Ranee\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"pt-3 text-xs-center",attrs:{xs4:""}},[a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Alex Clare\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Mark O'neal\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"secondary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Ranee\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"pt-3 text-xs-center",attrs:{xs4:""}},[a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Max Koval\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Andrew\n      ")],1),t._v(" "),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n        Gelik Jem\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"pt-3",attrs:{xs12:""}},[a("v-flex",{staticClass:"pt-3 px-3",attrs:{xs12:""}},[a("v-select",{attrs:{items:t.items,label:"NBA Players",solo:""}})],1),t._v(" "),a("PlayersListItem",{attrs:{players:t.players}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("div",{staticStyle:{height:"90px"}}),t._v(" "),a("v-fab-transition",[a("v-btn",{attrs:{color:"deep-orange lighten-1",dark:"",fixed:"",bottom:"",right:"",fab:"",to:{name:"Sessions"}}},[a("v-icon",{staticClass:"d-flex"},[t._v("navigate_next")])],1)],1)],1)],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(t){a(107)}var i=a(39),n=a(108),o=a(0),r=s,l=o(i.a,n.a,!1,r,"data-v-3b91aec1",null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("SetCategories")]),t._v(" "),a("v-btn",{attrs:{small:"",to:{name:"Home"}}},[t._v("Finish!")])],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},,function(t,e){}],[40]);
//# sourceMappingURL=app.9d1a1d7e6c19961ee7e0.js.map