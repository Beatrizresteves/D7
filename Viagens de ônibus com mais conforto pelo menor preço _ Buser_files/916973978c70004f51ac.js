(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1043:function(t,e,o){},1044:function(t,e,o){},1045:function(t,e,o){},1136:function(t,e,o){},1141:function(t,e,o){},157:function(t,e,o){"use strict";o.r(e);var r=o(348);e.default=r.default},158:function(t,e,o){"use strict";o.r(e);var r=o(349);e.default=r.default},159:function(t,e,o){"use strict";o.r(e);var r=o(350);e.default=r.default},1793:function(t,e,o){"use strict";o(1043)},1794:function(t,e,o){"use strict";o(1044)},1795:function(t,e,o){"use strict";o(1045)},1924:function(t,e,o){"use strict";o(1136)},1931:function(t,e,o){"use strict";o(1141)},1973:function(t,e,o){"use strict";o.r(e);var r={name:"motivos-para-viajar",serverCacheKey:function(t){return"".concat(t.dark)},props:{dark:Boolean}},n=(o(1924),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"motivos-para-viajar",class:{"mpv-dark":this.dark}},[o("div",{staticClass:"mpv-container"},[o("h4",{staticClass:"mpvc-text title-1 mb-3"},[o("fa",{staticClass:"mpv-icon title-3 p-0 mr-2",attrs:{icon:["fal","piggy-bank"]}}),t._v("\n      Mais barato\n    ")],1),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"mpv-container"},[o("h4",{staticClass:"mpvc-text title-1 mb-3"},[o("fa",{staticClass:"mpv-icon title-3 p-0 mr-2",attrs:{icon:["fal","shield-check"]}}),t._v("\n      Mais seguro\n    ")],1),t._v(" "),t._m(1)]),t._v(" "),o("div",{staticClass:"mpv-container"},[o("h4",{staticClass:"mpvc-text title-1 mb-3"},[o("fa",{staticClass:"mpv-icon title-3 p-0 mr-2",attrs:{icon:["fal","laptop-mobile"]}}),t._v("\n      Mais prático\n    ")],1),t._v(" "),t._m(2)]),t._v(" "),o("div",{staticClass:"mpv-container"},[o("h4",{staticClass:"mpvc-text title-1 mb-3"},[o("fa",{staticClass:"mpv-icon title-3 p-0 mr-2",attrs:{icon:["fal","bed-front"]}}),t._v("\n      Mais qualidade\n    ")],1),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text"},[t._v("\n      Viagens de ônibus por "),o("strong",{staticClass:"fw-bold"},[t._v("até menos da metade do preço das passagens de rodoviária")]),t._v(".\n      Sem taxas de serviços ou surpresas no pagamento. É inovação a serviço do consumidor, com qualidade e preço\n      justo.\n    ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text"},[o("strong",{staticClass:"fw-bold"},[t._v("Empresas de ônibus e motoristas certificados pela ANTT")]),t._v(". Seguro de vida grátis e\n      ônibus com tecnologias de segurança exclusivas: câmeras de fadiga, telemetria e sensores de cinto de segurança.\n    ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text"},[t._v("\n      Você escolhe embarcar na rodoviária ou em um ponto exclusivo da Buser. Nos exclusivos, você precisa apenas de\n      um documento com foto para viajar. É só reservar pelo site ou app e não precisa imprimir nada.\n      "),o("strong",{staticClass:"fw-bold"},[t._v("Sem filas, sem burocracias")]),t._v(".\n    ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text"},[t._v("\n      Os ônibus das empresas parceiras passam por testes de qualidade e os passageiros também avaliam as viagens.\n      Além disso, temos "),o("strong",{staticClass:"fw-bold"},[t._v("diversas opções de ônibus e poltronas pra você escolher")]),t._v("\n      a mais confortável para a sua viagem.\n    ")])}],!1,null,"49295eb4",null);e.default=component.exports},1977:function(t,e,o){"use strict";o.r(e);o(12),o(13),o(16),o(20),o(21);var r=o(7),n=o(19);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"banner-cupons-disponiveis",components:{popupUsarCupom:o(1166).a},data:function(){return{popupUserCupomVisible:!1}},computed:l(l({},Object(n.mapGetters)({loggedIn:"auth/loggedIn",cupons:"reservation/getCuponsDisponiveis"})),{},{cupomCount:function(){return this.cupons&&this.cupons.length||0}})},m=(o(1931),o(4)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.cupomCount>0&&t.loggedIn?o("ada-card",{staticClass:"banner-cupons-disponiveis",attrs:{outlined:"",rounded:""}},[o("p",{staticClass:"fg-1 text-2 fw-bold"},[o("fa",{staticClass:"text-gray mr-1",attrs:{icon:["fal","badge-percent"],size:"lg"}}),t._v("\n    "+t._s(t._f("pluralize")(t.cupomCount,"cupom disponível","cupons disponíveis"))+"\n  ")],1),t._v(" "),o("ada-button",{staticClass:"bcd-button",attrs:{transparent:""},on:{click:function(e){t.popupUserCupomVisible=!0}}},[t._v("\n    Ver cupons\n    "),o("fa",{staticClass:"ml-1",attrs:{icon:["fas","chevron-right"],size:"lg"}})],1),t._v(" "),o("popup-usar-cupom",{attrs:{visible:t.popupUserCupomVisible,cupons:t.cupons,"hide-new-cupom":""},on:{close:function(e){t.popupUserCupomVisible=!1}}})],1):t._e()}),[],!1,null,"a1968cb8",null);e.default=component.exports},348:function(t,e,o){"use strict";o.r(e);o(12),o(13),o(16),o(20),o(21);var r=o(7),n=o(2),c=(o(10),o(356),o(17),o(150)),l=o(28),d=o(64),m=o(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,o){var r,n,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 10,t.prev=1,t.next=4,m.a.everyone.listBestPontosTuristicosWithCategories(e,o,10);case 4:d=t.sent,r=d.best_pontos,n=d.pontos,c=d.category,l=d.subcategory,t.next=16;break;case 11:t.prev=11,t.t0=t.catch(1),r=[],n=[],c={name:"",slug:e};case 16:return t.abrupt("return",{bestPontosTuristicos:r,pontosTuristicos:n,category:c,subcategory:l});case 17:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,o){return t.apply(this,arguments)}}(),y={name:"pontosTuristicosCategoriaNacional",layout:"andromeda",components:{bestPontosTuristicos:c.a},data:function(){return{articlesLimit:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,l,d,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.route,r=o.params,n=r.categorySlug,c=r.subcategorySlug,e.next=4,v(n,c);case 4:return l=e.sent,d=l.bestPontosTuristicos,m=l.pontosTuristicos,f=l.category,h=l.subcategory,e.abrupt("return",{bestPontosTuristicos:d,pontosTuristicos:m,category:f,subcategory:h});case 10:case"end":return e.stop()}}),e)})))()},computed:{categoriaWithParent:function(){return this.subcategory?h(h({},this.subcategory),{},{parent:this.category}):this.category},categoriaLowerCase:function(){var t;return((null===(t=this.subcategory)||void 0===t?void 0:t.name)||this.category.name).toLowerCase()},title:function(){return Object(d.h)(this.categoriaLowerCase,void 0,this.articlesLimit)},subtitle:function(){return Object(d.g)(this.bestPontosTuristicos,this.categoriaLowerCase,void 0,3)},notFoundMessage:function(){return this.category?"Não encontramos ".concat(this.categoriaLowerCase,"."):"Categoria de ponto turístico inválida"},breadcrumbs:function(){var t=[{route:{name:"home"},text:"Home"},{route:{name:"destinos"},text:"Destinos"},{route:{name:"pontosTuristicos"},text:"Pontos turísticos"},{text:this.category.name}];return this.subcategory&&t.push({text:this.subcategory.name}),t},hasPontosTuristicos:function(){return!!this.bestPontosTuristicos.length||!!this.pontosTuristicos.length}},methods:{onArticlesLimit:function(t){this.articlesLimit=t.value}},head:function(t){var title,e,o,r=t.$route;if(this.hasPontosTuristicos){var n=Object(d.b)(this.allPontosTuristicos||this.bestPontosTuristicos),c=n.firstPontoTuristico,m=n.formattedDescription,f=n.formattedTitle;title="".concat(f," ").concat(this.categoriaLowerCase," - Brasil"),e="".concat(c," ").concat(m," ").concat(this.categoriaLowerCase," no Brasil com fotos, dicas de viagem, preços e horários de ônibus para o destino.")}else title=this.notFoundMessage,o="noindex, nofollow",e="Viaje de ônibus por todo o Brasil. Conheça os pontos turísticos de destinos oferecidos pela Buser e reserve a sua viagem de ônibus agora, online, sem filas e sem taxas.";var v="https://www.buser.com.br/destinos/pontos-turisticos/".concat(this.category.slug);return this.subcategory&&!r.path.endsWith("/".concat(this.category.slug,"/").concat(this.subcategory.slug))&&(v="https://www.buser.com.br/destinos/pontos-turisticos/".concat(this.category.slug,"/").concat(this.subcategory.slug),o="noindex, nofollow"),h({link:[{rel:"canonical",href:v}]},l.a.generateMetaTags({title:title,description:e,robots:o}))}},O=(o(1793),o(4)),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("best-pontos-turisticos",{staticClass:"ptce-best-pontos-turisticos",attrs:{"best-pontos-turisticos":t.bestPontosTuristicos,"pontos-turisticos":t.pontosTuristicos,category:t.categoriaWithParent,notFoundMessage:t.notFoundMessage,title:t.title,subtitle:t.subtitle,breadcrumbs:t.breadcrumbs},on:{"articles-limit":t.onArticlesLimit}})}),[],!1,null,"2652a595",null);e.default=component.exports},349:function(t,e,o){"use strict";o.r(e);var r=o(7),n=o(2),c=(o(10),o(12),o(13),o(16),o(20),o(21),o(17),o(150)),l=o(28),d=o(64),m=o(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var h={name:"pontosTuristicosCidade",layout:"andromeda",components:{bestPontosTuristicos:c.a},data:function(){return{articlesLimit:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,l,d,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.route,r=o.params,n=r.uf,c=r.cidadeSlug,e.prev=2,e.next=5,m.a.everyone.listPontosTuristicosFromCidade("".concat(c,"-").concat(n));case 5:f=e.sent,h=f.pontos,d=h.splice(0,10),l=h,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),l=[];case 14:return e.abrupt("return",{bestPontosTuristicos:d,pontosTuristicos:l,uf:n,cidadeSlug:c});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()},computed:{estadoUpperCase:function(){return this.uf.toUpperCase()},cidade:function(){var t,e;return null===(t=this.bestPontosTuristicos[0])||void 0===t||null===(e=t.city)||void 0===e?void 0:e.name},cidadeEstado:function(){return"".concat(this.cidade," - ").concat(this.estadoUpperCase)},title:function(){return Object(d.h)(void 0,this.cidadeEstado,this.articlesLimit)},subtitle:function(){return Object(d.g)(this.bestPontosTuristicos,void 0,this.cidadeEstado,3)},notFoundMessage:function(){return"Não encontramos pontos turísticos nessa cidade."},breadcrumbs:function(){return[{route:{name:"home"},text:"Home"},{route:{name:"destinos"},text:"Destinos"},{route:{name:"pontosTuristicos"},text:"Pontos turísticos"},{route:{name:"pontosTuristicosEstado",params:{uf:this.uf}},text:this.uf.toUpperCase()},{route:{name:"pontosTuristicosCidade",params:{cidadeSlug:this.cidadeSlug,uf:this.uf}},text:this.cidade}]},hasPontosTuristicos:function(){return!!this.bestPontosTuristicos.length||!!this.pontosTuristicos.length}},methods:{onArticlesLimit:function(t){this.articlesLimit=t.value}},head:function(){var title,t,e;if(this.hasPontosTuristicos){var o=Object(d.b)(this.allPontosTuristicos||this.bestPontosTuristicos),n=o.firstPontoTuristico,c=o.formattedDescription,m=o.formattedTitle;title=Object(d.e)("".concat(m," pontos turísticos - ").concat(this.cidade," - ").concat(this.estadoUpperCase)),t=Object(d.d)("".concat(n,"Conheça ").concat(c," pontos turísticos em ").concat(this.cidade," - ").concat(this.estadoUpperCase," com fotos, dicas de viagem, preços e horários de ônibus para o destino."))}else title="Pontos turísticos não encontrados",e="noindex, nofollow",t="Viaje de ônibus por todo o Brasil. Conheça os pontos turísticos de destinos oferecidos pela Buser e reserve a sua viagem de ônibus agora, online, sem filas e sem taxas.";return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({link:[{rel:"canonical",href:"https://www.buser.com.br/destinos/pontos-turisticos/".concat(this.uf,"/").concat(this.cidadeSlug)}]},l.a.generateMetaTags({title:title,description:t,robots:e}))}},v=h,y=(o(1794),o(4)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("best-pontos-turisticos",{attrs:{"best-pontos-turisticos":t.bestPontosTuristicos,"pontos-turisticos":t.pontosTuristicos,notFoundMessage:t.notFoundMessage,locationString:t.cidadeEstado,title:t.title,subtitle:t.subtitle,breadcrumbs:t.breadcrumbs},on:{"articles-limit":t.onArticlesLimit}})}),[],!1,null,"76e4b398",null);e.default=component.exports},350:function(t,e,o){"use strict";o.r(e);var r=o(7),n=o(2),c=(o(10),o(12),o(13),o(16),o(20),o(21),o(17),o(150)),l=o(28),d=o(64);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var f={name:"pontosTuristicosSubcategoriaCidade",layout:"andromeda",components:{bestPontosTuristicos:c.a},data:function(){return{articlesLimit:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,l,d,m,f,h,v,y,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.route,r=t.store,n=o.params,c=n.categorySlug,l=n.subcategorySlug,d=n.uf,m=n.cidadeSlug,e.next=4,r.dispatch("blog/getBestPontosTuristicos",{categorySlug:c,subcategorySlug:l,cidadeSlug:"".concat(m,"-").concat(d)});case 4:return f=e.sent,h=f.bestPontosTuristicos,v=f.pontosTuristicos,y=f.category,O=f.subcategory,e.abrupt("return",{bestPontosTuristicos:h,pontosTuristicos:v,category:O,parentCategory:y,uf:d,cidadeSlug:m});case 10:case"end":return e.stop()}}),e)})))()},computed:{estadoUpperCase:function(){return this.uf.toUpperCase()},cidade:function(){var t,e;return null===(t=this.bestPontosTuristicos[0])||void 0===t||null===(e=t.city)||void 0===e?void 0:e.name},cidadeEstado:function(){return"".concat(this.cidade," - ").concat(this.estadoUpperCase)},categoriaLowerCase:function(){return this.category.name.toLowerCase()},title:function(){return Object(d.h)(this.categoriaLowerCase,this.cidadeEstado,this.articlesLimit)},subtitle:function(){return Object(d.g)(this.bestPontosTuristicos,this.categoriaLowerCase,this.cidadeEstado,3)},notFoundMessage:function(){return this.category?"Não encontramos ".concat(this.categoriaLowerCase," nessa cidade."):"Categoria de ponto turístico inválida"},breadcrumbs:function(){return[{route:{name:"home"},text:"Home"},{route:{name:"destinos"},text:"Destinos"},{route:{name:"pontosTuristicos"},text:"Pontos turísticos"},{route:{name:"pontosTuristicosCategoriaNacional",params:{categorySlug:this.parentCategory.slug}},text:this.parentCategory.name},{route:{name:"pontosTuristicosSubcategoriaNacional",params:{categorySlug:this.parentCategory.slug,subcategorySlug:this.category.slug}},text:this.category.name},{route:{name:"pontosTuristicosSubcategoriaEstado",params:{subcategorySlug:this.category.slug,uf:this.uf}},text:this.estadoUpperCase},{text:this.cidade}]},hasPontosTuristicos:function(){return!!this.bestPontosTuristicos.length||!!this.pontosTuristicos.length}},methods:{onArticlesLimit:function(t){this.articlesLimit=t.value}},head:function(){var title,t,e;if(this.hasPontosTuristicos){var o=Object(d.b)(this.allPontosTuristicos||this.bestPontosTuristicos),n=o.firstPontoTuristico,c=o.formattedDescription,f=o.formattedTitle;title=Object(d.e)("".concat(f," ").concat(this.category.name," - ").concat(this.cidade," - ").concat(this.estadoUpperCase)),t=Object(d.d)("".concat(n,"Conheça ").concat(c," ").concat(this.category.name," em ").concat(this.cidade," - ").concat(this.estadoUpperCase," com fotos, dicas de viagem, preços e horários de ônibus para o destino."))}else title=this.notFoundMessage,e="noindex, nofollow",t="Viaje de ônibus por todo o Brasil. Conheça os pontos turísticos de destinos oferecidos pela Buser e reserve a sua viagem de ônibus agora, online, sem filas e sem taxas.";return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({link:[{rel:"canonical",href:"https://www.buser.com.br/destinos/pontos-turisticos/".concat(this.parentCategory.slug,"/").concat(this.category.slug,"/").concat(this.uf,"/").concat(this.cidadeSlug)}]},l.a.generateMetaTags({title:title,description:t,robots:e}))}},h=f,v=(o(1795),o(4)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("best-pontos-turisticos",{staticClass:"ptsc-best-pontos-turisticos",attrs:{"best-pontos-turisticos":t.bestPontosTuristicos,"pontos-turisticos":t.pontosTuristicos,category:t.category,locationString:t.cidadeEstado,notFoundMessage:t.notFoundMessage,title:t.title,subtitle:t.subtitle,breadcrumbs:t.breadcrumbs},on:{"articles-limit":t.onArticlesLimit}})}),[],!1,null,"d3183966",null);e.default=component.exports}}]);