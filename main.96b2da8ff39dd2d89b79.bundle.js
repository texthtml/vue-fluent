(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return generateBundles});__webpack_require__(436),__webpack_require__(437),__webpack_require__(205),__webpack_require__(1396);var fluent_compat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(730),fluent_langneg_compat__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(731),_marked=regeneratorRuntime.mark(generateBundles),MESSAGES_ALL={"fr-FR":'\ntitle = Bonjour, monde !\ninput =\n  .placeholder = Jean Dupont\ngreetings = Bonjour, { $name } !\nchildren = Bonjour, <em l10n="name">monde<em/> !\nprop =\n  .text = Bonjour, monde!\nvoid =\n  .alt = pas d\'image\n  ',"en-US":'\ntitle = Hello, world!\ninput =\n  .placeholder = John Doe\ngreetings = Hello, { $name }!\nchildren = Hello, <em l10n="name">world</em>!\nprop =\n  .text = Hello, world!\nvoid =\n  .alt = no image\n  '};function generateBundles(userLocales){var currentLocales,_iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,locale,bundle;return regeneratorRuntime.wrap(function generateBundles$(_context){for(;;)switch(_context.prev=_context.next){case 0:currentLocales=Object(fluent_langneg_compat__WEBPACK_IMPORTED_MODULE_5__.negotiateLanguages)(userLocales,["en-US","fr-FR"],{defaultLocale:"fr-FR"}),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0,_context.prev=4,_iterator=currentLocales[Symbol.iterator]();case 6:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context.next=15;break}return locale=_step.value,(bundle=new fluent_compat__WEBPACK_IMPORTED_MODULE_4__.FluentBundle(locale)).addMessages(MESSAGES_ALL[locale]),_context.next=12,bundle;case 12:_iteratorNormalCompletion=!0,_context.next=6;break;case 15:_context.next=21;break;case 17:_context.prev=17,_context.t0=_context.catch(4),_didIteratorError=!0,_iteratorError=_context.t0;case 21:_context.prev=21,_context.prev=22,_iteratorNormalCompletion||null==_iterator.return||_iterator.return();case 24:if(_context.prev=24,!_didIteratorError){_context.next=27;break}throw _iteratorError;case 27:return _context.finish(24);case 28:return _context.finish(21);case 29:case"end":return _context.stop()}},_marked,null,[[4,17,21,29],[22,,24,28]])}},112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1361),__webpack_require__(436),__webpack_require__(437),__webpack_require__(1362);var cachedParseMarkup,slicedToArray=__webpack_require__(304),LocalizationProvider=(__webpack_require__(205),__webpack_require__(1392),__webpack_require__(86));__webpack_require__(709),__webpack_require__(1394);var components_Localizedvue_type_script_lang_js_={name:"Localized",props:{id:{type:String,required:!0},attrs:{type:Object,default:null},props:{type:Object,default:null}},inject:{l10n:LocalizationProvider.b},mounted:function mounted(){this.l10n.subscribe(this)},beforeDestroy:function beforeDestroy(){this.l10n.unsubscribe(this)},methods:{relocalize:function relocalize(){this.$forceUpdate()}},render:function render($createElement){var slots=this.$scopedSlots.default({});if(1!==slots.length)throw new Error("<Localized/> expected to receive a single slot");var elem=slots[0];if(void 0===elem.tag)throw new Error("<Localized/> expected to receive a single node element");var tag=elem.componentOptions?elem.componentOptions.Ctor:elem.tag,bundle=this.l10n.getBundle(this.id);if(null===bundle)return elem;var msg=bundle.getMessage(this.id),args=function toArguments(props){for(var args={},_i=0,_Object$entries=Object.entries(props);_i<_Object$entries.length;_i++){var _Object$entries$_i=Object(slicedToArray.a)(_Object$entries[_i],2),propname=_Object$entries$_i[0],propval=_Object$entries$_i[1];propname.startsWith("_")&&(args[propname.substr(1)]=propval)}return args}(this.$attrs),elems={};if(void 0!==elem.children){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=elem.children.filter(function(_ref){var data=_ref.data;return data&&data.attrs&&data.attrs.l10n})[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var child=_step.value;elems[child.data.attrs.l10n]=child}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}var data=elem.data||{};if(msg.attrs){if(this.attrs){void 0===data.attrs&&(data.attrs={});for(var _i2=0,_Object$entries2=Object.entries(this.attrs);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=Object(slicedToArray.a)(_Object$entries2[_i2],2),name=_Object$entries2$_i[0];_Object$entries2$_i[1]&&msg.attrs.hasOwnProperty(name)&&(data.attrs[name]=bundle.format(msg.attrs[name],args))}}if(this.props){void 0===data.props&&(data.props={});for(var _i3=0,_Object$entries3=Object.entries(this.props);_i3<_Object$entries3.length;_i3++){var _Object$entries3$_i=Object(slicedToArray.a)(_Object$entries3[_i3],2);name=_Object$entries3$_i[0];_Object$entries3$_i[1]&&msg.attrs.hasOwnProperty(name)&&(data.props[name]=bundle.format(msg.attrs[name],args))}}}var messageValue=bundle.format(msg,args);if(void 0!==elem.children&&0===elem.children.filter(function(child){return void 0!==child.tag}).length)return $createElement(tag,data,[messageValue]);var translatedChildren=function createParseMarkup(){if(void 0===document)throw new Error('\n      document" is undefined. Without it, translations cannot\n      be safely sanitized. Consult the documentation at\n      https://github.com/projectfluent/fluent.js/wiki/React-Overlays.\n    ');if(!cachedParseMarkup){var template=document.createElement("template");cachedParseMarkup=function parseMarkup(str){return template.innerHTML=str,Array.from(template.content.childNodes)}}return cachedParseMarkup}()(messageValue).map(function(childNode){if(childNode.nodeType===childNode.TEXT_NODE)return childNode.textContent;if(!childNode.attributes||!childNode.attributes.hasOwnProperty("l10n")||!elems[childNode.attributes.getNamedItem("l10n").value])return childNode.textContent;var sourceChild=elems[childNode.attributes.getNamedItem("l10n").value];return $createElement(sourceChild.tag,sourceChild.data,childNode.textContent)});return $createElement(tag,data,translatedChildren)}},componentNormalizer=__webpack_require__(303),component=Object(componentNormalizer.a)(components_Localizedvue_type_script_lang_js_,void 0,void 0,!1,null,null,null);__webpack_exports__.a=component.exports},1292:function(module,exports,__webpack_require__){var map={"./index.stories.js":1293};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1292},1293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(301),_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(86),_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(112),_l10n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(111),_SmallCaps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(444),withStorySource=__webpack_require__(1294).withStorySource,__STORY__='import { storiesOf } from \'@storybook/vue\';\nimport LocalizationProvider from \'../src/components/LocalizationProvider.vue\';\nimport Localized from \'../src/components/Localized.vue\';\nimport { generateBundles } from \'./l10n\';\nimport SmallCaps from \'./SmallCaps\';\n\nstoriesOf(\'Fluent\', module)\n  .add(\'simple text\', () => ({\n    components: { LocalizationProvider, Localized },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="title">\n          <h1>Hello, world!</h1>\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }))\n  .add(\'html attribute\', () => ({\n    components: { LocalizationProvider, Localized },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="input" :attrs="{ placeholder: true }">\n          <input placeholder="John Doe"/>\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }))\n  .add(\'argument\', () => ({\n    components: { LocalizationProvider, Localized },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="greetings" _name="World"> \x3c!-- @todo: knob --\x3e\n          <h1>Hello, $name!</h1>\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }))\n  .add(\'children\', () => ({\n    components: { LocalizationProvider, Localized },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="children">\n          <h1>Hello, <em style="color: red" l10n="name">World!</em></h1>\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }))\n  .add(\'prop\', () => ({\n    components: { LocalizationProvider, Localized, SmallCaps },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="prop" :props="{text: true}">\n          <SmallCaps />\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }))\n  .add(\'void element\', () => ({\n    components: { LocalizationProvider, Localized, SmallCaps },\n    template: `\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="void" :attrs="{alt: true}">\n          <img alt="xxx" />\n        </Localized>\n      </LocalizationProvider>`,\n    methods: { generateBundles: () => generateBundles([\'fr\']) }, // @todo: knob\n  }));\n\n// @todo:\n// - change language\n',__ADDS_MAP__={"fluent--void-element":{startLoc:{col:7,line:58},endLoc:{col:4,line:67}},"fluent--prop":{startLoc:{col:7,line:48},endLoc:{col:4,line:57}},"fluent--children":{startLoc:{col:7,line:38},endLoc:{col:4,line:47}},"fluent--argument":{startLoc:{col:7,line:28},endLoc:{col:4,line:37}},"fluent--html-attribute":{startLoc:{col:7,line:18},endLoc:{col:4,line:27}},"fluent--simple-text":{startLoc:{col:7,line:8},endLoc:{col:4,line:17}}};Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Fluent",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("simple text",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="title">\n          <h1>Hello, world!</h1>\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}}).add("html attribute",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="input" :attrs="{ placeholder: true }">\n          <input placeholder="John Doe"/>\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}}).add("argument",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="greetings" _name="World"> \x3c!-- @todo: knob --\x3e\n          <h1>Hello, $name!</h1>\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}}).add("children",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="children">\n          <h1>Hello, <em style="color: red" l10n="name">World!</em></h1>\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}}).add("prop",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a,SmallCaps:_SmallCaps__WEBPACK_IMPORTED_MODULE_4__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="prop" :props="{text: true}">\n          <SmallCaps />\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}}).add("void element",function(){return{components:{LocalizationProvider:_src_components_LocalizationProvider_vue__WEBPACK_IMPORTED_MODULE_1__.a,Localized:_src_components_Localized_vue__WEBPACK_IMPORTED_MODULE_2__.a,SmallCaps:_SmallCaps__WEBPACK_IMPORTED_MODULE_4__.a},template:'\n      <LocalizationProvider :bundles="generateBundles()">\n        <Localized id="void" :attrs="{alt: true}">\n          <img alt="xxx" />\n        </Localized>\n      </LocalizationProvider>',methods:{generateBundles:function generateBundles(){return Object(_l10n__WEBPACK_IMPORTED_MODULE_3__.a)(["fr"])}}}})}.call(this,__webpack_require__(481)(module))},444:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"SmallCaps",props:{text:{type:String,default:"♥"}},template:'<span style="font-variant: small-caps" title="test">{{ text }}</span>'}},733:function(module,exports,__webpack_require__){__webpack_require__(734),__webpack_require__(850),module.exports=__webpack_require__(851)},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(205);var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(301),req=__webpack_require__(1292);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(481)(module))},86:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(725),classCallCheck=(__webpack_require__(436),__webpack_require__(437),__webpack_require__(205),__webpack_require__(709),__webpack_require__(1354),__webpack_require__(726)),createClass=__webpack_require__(727),src=__webpack_require__(732),cached_iterable_src=__webpack_require__(445),localization_VueLocalization=function(){function VueLocalization(bundles){Object(classCallCheck.a)(this,VueLocalization),this.bundles=cached_iterable_src.a.from(bundles),this.subs=new Set}return Object(createClass.a)(VueLocalization,[{key:"subscribe",value:function subscribe(comp){this.subs.add(comp)}},{key:"unsubscribe",value:function unsubscribe(comp){this.subs.delete(comp)}},{key:"setBundles",value:function setBundles(bundles){this.bundles=cached_iterable_src.a.from(bundles),this.subs.forEach(function(comp){return comp.relocalize()})}},{key:"getBundle",value:function getBundle(id){return Object(src.a)(this.bundles,id)}},{key:"getString",value:function getString(id,args,fallback){var bundle=this.getBundle(id);if(null===bundle)return fallback||id;var msg=bundle.getMessage(id);return bundle.format(msg,args)}}]),VueLocalization}(),l10n=Symbol("l10n"),components_LocalizationProvidervue_type_script_lang_js_={name:"LocalizationProvider",props:{bundles:{required:!0}},provide:function provide(){return Object(defineProperty.a)({},l10n,new localization_VueLocalization(this.bundles))},render:function render(){return this.$scopedSlots.default({})}},componentNormalizer=__webpack_require__(303);__webpack_require__.d(__webpack_exports__,"b",function(){return l10n});var component=Object(componentNormalizer.a)(components_LocalizationProvidervue_type_script_lang_js_,void 0,void 0,!1,null,null,null);__webpack_exports__.a=component.exports}},[[733,1,2]]]);
//# sourceMappingURL=main.96b2da8ff39dd2d89b79.bundle.js.map