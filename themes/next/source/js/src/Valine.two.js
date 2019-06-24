(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("Valine", [], factory);
  else if (typeof exports === 'object')
    exports["Valine"] = factory();
  else
    root["Valine"] = factory();
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ 		// Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/      i: moduleId,
        /******/      l: false,
        /******/      exports: {}
        /******/
      };
      /******/
      /******/ 		// Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/
      return module.exports;
      /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function (value) {
      return value;
    };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          /******/        configurable: false,
          /******/        enumerable: true,
          /******/        get: getter
          /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/      function getDefault() {
          return module['default'];
        } :
        /******/      function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "/dist/";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 10);
    /******/
  })
  /************************************************************************/
  /******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * cssfilter
       *
       * @author 老雷<leizongmin@gmail.com>
       */

      var DEFAULT = __webpack_require__(2);
      var FilterCSS = __webpack_require__(13);


      /**
       * XSS过滤
       *
       * @param {String} css 要过滤的CSS代码
       * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
       * @return {String}
       */
      function filterCSS(html, options) {
        var xss = new FilterCSS(options);
        return xss.process(html);
      }


// 输出
      exports = module.exports = filterCSS;
      exports.FilterCSS = FilterCSS;
      for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
      if (typeof window !== 'undefined') {
        window.filterCSS = module.exports;
      }


      /***/
    }),
    /* 1 */
    /***/ (function (module, exports) {

      module.exports = {
        indexOf: function (arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function (arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function (str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function (str) {
          var reg = /\s|\n|\t/;
          var match = reg.exec(str);
          return match ? match.index : -1;
        }
      };


      /***/
    }),
    /* 2 */
    /***/ (function (module, exports) {

      /**
       * cssfilter
       *
       * @author 老雷<leizongmin@gmail.com>
       */

      function getDefaultWhiteList() {
        // 白名单值说明：
        // true: 允许该属性
        // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
        // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
        // 除上面列出的值外均表示不允许
        var whiteList = {};

        whiteList['align-content'] = false; // default: auto
        whiteList['align-items'] = false; // default: auto
        whiteList['align-self'] = false; // default: auto
        whiteList['alignment-adjust'] = false; // default: auto
        whiteList['alignment-baseline'] = false; // default: baseline
        whiteList['all'] = false; // default: depending on individual properties
        whiteList['anchor-point'] = false; // default: none
        whiteList['animation'] = false; // default: depending on individual properties
        whiteList['animation-delay'] = false; // default: 0
        whiteList['animation-direction'] = false; // default: normal
        whiteList['animation-duration'] = false; // default: 0
        whiteList['animation-fill-mode'] = false; // default: none
        whiteList['animation-iteration-count'] = false; // default: 1
        whiteList['animation-name'] = false; // default: none
        whiteList['animation-play-state'] = false; // default: running
        whiteList['animation-timing-function'] = false; // default: ease
        whiteList['azimuth'] = false; // default: center
        whiteList['backface-visibility'] = false; // default: visible
        whiteList['background'] = true; // default: depending on individual properties
        whiteList['background-attachment'] = true; // default: scroll
        whiteList['background-clip'] = true; // default: border-box
        whiteList['background-color'] = true; // default: transparent
        whiteList['background-image'] = true; // default: none
        whiteList['background-origin'] = true; // default: padding-box
        whiteList['background-position'] = true; // default: 0% 0%
        whiteList['background-repeat'] = true; // default: repeat
        whiteList['background-size'] = true; // default: auto
        whiteList['baseline-shift'] = false; // default: baseline
        whiteList['binding'] = false; // default: none
        whiteList['bleed'] = false; // default: 6pt
        whiteList['bookmark-label'] = false; // default: content()
        whiteList['bookmark-level'] = false; // default: none
        whiteList['bookmark-state'] = false; // default: open
        whiteList['border'] = true; // default: depending on individual properties
        whiteList['border-bottom'] = true; // default: depending on individual properties
        whiteList['border-bottom-color'] = true; // default: current color
        whiteList['border-bottom-left-radius'] = true; // default: 0
        whiteList['border-bottom-right-radius'] = true; // default: 0
        whiteList['border-bottom-style'] = true; // default: none
        whiteList['border-bottom-width'] = true; // default: medium
        whiteList['border-collapse'] = true; // default: separate
        whiteList['border-color'] = true; // default: depending on individual properties
        whiteList['border-image'] = true; // default: none
        whiteList['border-image-outset'] = true; // default: 0
        whiteList['border-image-repeat'] = true; // default: stretch
        whiteList['border-image-slice'] = true; // default: 100%
        whiteList['border-image-source'] = true; // default: none
        whiteList['border-image-width'] = true; // default: 1
        whiteList['border-left'] = true; // default: depending on individual properties
        whiteList['border-left-color'] = true; // default: current color
        whiteList['border-left-style'] = true; // default: none
        whiteList['border-left-width'] = true; // default: medium
        whiteList['border-radius'] = true; // default: 0
        whiteList['border-right'] = true; // default: depending on individual properties
        whiteList['border-right-color'] = true; // default: current color
        whiteList['border-right-style'] = true; // default: none
        whiteList['border-right-width'] = true; // default: medium
        whiteList['border-spacing'] = true; // default: 0
        whiteList['border-style'] = true; // default: depending on individual properties
        whiteList['border-top'] = true; // default: depending on individual properties
        whiteList['border-top-color'] = true; // default: current color
        whiteList['border-top-left-radius'] = true; // default: 0
        whiteList['border-top-right-radius'] = true; // default: 0
        whiteList['border-top-style'] = true; // default: none
        whiteList['border-top-width'] = true; // default: medium
        whiteList['border-width'] = true; // default: depending on individual properties
        whiteList['bottom'] = false; // default: auto
        whiteList['box-decoration-break'] = true; // default: slice
        whiteList['box-shadow'] = true; // default: none
        whiteList['box-sizing'] = true; // default: content-box
        whiteList['box-snap'] = true; // default: none
        whiteList['box-suppress'] = true; // default: show
        whiteList['break-after'] = true; // default: auto
        whiteList['break-before'] = true; // default: auto
        whiteList['break-inside'] = true; // default: auto
        whiteList['caption-side'] = false; // default: top
        whiteList['chains'] = false; // default: none
        whiteList['clear'] = true; // default: none
        whiteList['clip'] = false; // default: auto
        whiteList['clip-path'] = false; // default: none
        whiteList['clip-rule'] = false; // default: nonzero
        whiteList['color'] = true; // default: implementation dependent
        whiteList['color-interpolation-filters'] = true; // default: auto
        whiteList['column-count'] = false; // default: auto
        whiteList['column-fill'] = false; // default: balance
        whiteList['column-gap'] = false; // default: normal
        whiteList['column-rule'] = false; // default: depending on individual properties
        whiteList['column-rule-color'] = false; // default: current color
        whiteList['column-rule-style'] = false; // default: medium
        whiteList['column-rule-width'] = false; // default: medium
        whiteList['column-span'] = false; // default: none
        whiteList['column-width'] = false; // default: auto
        whiteList['columns'] = false; // default: depending on individual properties
        whiteList['contain'] = false; // default: none
        whiteList['content'] = false; // default: normal
        whiteList['counter-increment'] = false; // default: none
        whiteList['counter-reset'] = false; // default: none
        whiteList['counter-set'] = false; // default: none
        whiteList['crop'] = false; // default: auto
        whiteList['cue'] = false; // default: depending on individual properties
        whiteList['cue-after'] = false; // default: none
        whiteList['cue-before'] = false; // default: none
        whiteList['cursor'] = false; // default: auto
        whiteList['direction'] = false; // default: ltr
        whiteList['display'] = true; // default: depending on individual properties
        whiteList['display-inside'] = true; // default: auto
        whiteList['display-list'] = true; // default: none
        whiteList['display-outside'] = true; // default: inline-level
        whiteList['dominant-baseline'] = false; // default: auto
        whiteList['elevation'] = false; // default: level
        whiteList['empty-cells'] = false; // default: show
        whiteList['filter'] = false; // default: none
        whiteList['flex'] = false; // default: depending on individual properties
        whiteList['flex-basis'] = false; // default: auto
        whiteList['flex-direction'] = false; // default: row
        whiteList['flex-flow'] = false; // default: depending on individual properties
        whiteList['flex-grow'] = false; // default: 0
        whiteList['flex-shrink'] = false; // default: 1
        whiteList['flex-wrap'] = false; // default: nowrap
        whiteList['float'] = false; // default: none
        whiteList['float-offset'] = false; // default: 0 0
        whiteList['flood-color'] = false; // default: black
        whiteList['flood-opacity'] = false; // default: 1
        whiteList['flow-from'] = false; // default: none
        whiteList['flow-into'] = false; // default: none
        whiteList['font'] = true; // default: depending on individual properties
        whiteList['font-family'] = true; // default: implementation dependent
        whiteList['font-feature-settings'] = true; // default: normal
        whiteList['font-kerning'] = true; // default: auto
        whiteList['font-language-override'] = true; // default: normal
        whiteList['font-size'] = true; // default: medium
        whiteList['font-size-adjust'] = true; // default: none
        whiteList['font-stretch'] = true; // default: normal
        whiteList['font-style'] = true; // default: normal
        whiteList['font-synthesis'] = true; // default: weight style
        whiteList['font-variant'] = true; // default: normal
        whiteList['font-variant-alternates'] = true; // default: normal
        whiteList['font-variant-caps'] = true; // default: normal
        whiteList['font-variant-east-asian'] = true; // default: normal
        whiteList['font-variant-ligatures'] = true; // default: normal
        whiteList['font-variant-numeric'] = true; // default: normal
        whiteList['font-variant-position'] = true; // default: normal
        whiteList['font-weight'] = true; // default: normal
        whiteList['grid'] = false; // default: depending on individual properties
        whiteList['grid-area'] = false; // default: depending on individual properties
        whiteList['grid-auto-columns'] = false; // default: auto
        whiteList['grid-auto-flow'] = false; // default: none
        whiteList['grid-auto-rows'] = false; // default: auto
        whiteList['grid-column'] = false; // default: depending on individual properties
        whiteList['grid-column-end'] = false; // default: auto
        whiteList['grid-column-start'] = false; // default: auto
        whiteList['grid-row'] = false; // default: depending on individual properties
        whiteList['grid-row-end'] = false; // default: auto
        whiteList['grid-row-start'] = false; // default: auto
        whiteList['grid-template'] = false; // default: depending on individual properties
        whiteList['grid-template-areas'] = false; // default: none
        whiteList['grid-template-columns'] = false; // default: none
        whiteList['grid-template-rows'] = false; // default: none
        whiteList['hanging-punctuation'] = false; // default: none
        whiteList['height'] = true; // default: auto
        whiteList['hyphens'] = false; // default: manual
        whiteList['icon'] = false; // default: auto
        whiteList['image-orientation'] = false; // default: auto
        whiteList['image-resolution'] = false; // default: normal
        whiteList['ime-mode'] = false; // default: auto
        whiteList['initial-letters'] = false; // default: normal
        whiteList['inline-box-align'] = false; // default: last
        whiteList['justify-content'] = false; // default: auto
        whiteList['justify-items'] = false; // default: auto
        whiteList['justify-self'] = false; // default: auto
        whiteList['left'] = false; // default: auto
        whiteList['letter-spacing'] = true; // default: normal
        whiteList['lighting-color'] = true; // default: white
        whiteList['line-box-contain'] = false; // default: block inline replaced
        whiteList['line-break'] = false; // default: auto
        whiteList['line-grid'] = false; // default: match-parent
        whiteList['line-height'] = false; // default: normal
        whiteList['line-snap'] = false; // default: none
        whiteList['line-stacking'] = false; // default: depending on individual properties
        whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
        whiteList['line-stacking-shift'] = false; // default: consider-shifts
        whiteList['line-stacking-strategy'] = false; // default: inline-line-height
        whiteList['list-style'] = true; // default: depending on individual properties
        whiteList['list-style-image'] = true; // default: none
        whiteList['list-style-position'] = true; // default: outside
        whiteList['list-style-type'] = true; // default: disc
        whiteList['margin'] = true; // default: depending on individual properties
        whiteList['margin-bottom'] = true; // default: 0
        whiteList['margin-left'] = true; // default: 0
        whiteList['margin-right'] = true; // default: 0
        whiteList['margin-top'] = true; // default: 0
        whiteList['marker-offset'] = false; // default: auto
        whiteList['marker-side'] = false; // default: list-item
        whiteList['marks'] = false; // default: none
        whiteList['mask'] = false; // default: border-box
        whiteList['mask-box'] = false; // default: see individual properties
        whiteList['mask-box-outset'] = false; // default: 0
        whiteList['mask-box-repeat'] = false; // default: stretch
        whiteList['mask-box-slice'] = false; // default: 0 fill
        whiteList['mask-box-source'] = false; // default: none
        whiteList['mask-box-width'] = false; // default: auto
        whiteList['mask-clip'] = false; // default: border-box
        whiteList['mask-image'] = false; // default: none
        whiteList['mask-origin'] = false; // default: border-box
        whiteList['mask-position'] = false; // default: center
        whiteList['mask-repeat'] = false; // default: no-repeat
        whiteList['mask-size'] = false; // default: border-box
        whiteList['mask-source-type'] = false; // default: auto
        whiteList['mask-type'] = false; // default: luminance
        whiteList['max-height'] = true; // default: none
        whiteList['max-lines'] = false; // default: none
        whiteList['max-width'] = true; // default: none
        whiteList['min-height'] = true; // default: 0
        whiteList['min-width'] = true; // default: 0
        whiteList['move-to'] = false; // default: normal
        whiteList['nav-down'] = false; // default: auto
        whiteList['nav-index'] = false; // default: auto
        whiteList['nav-left'] = false; // default: auto
        whiteList['nav-right'] = false; // default: auto
        whiteList['nav-up'] = false; // default: auto
        whiteList['object-fit'] = false; // default: fill
        whiteList['object-position'] = false; // default: 50% 50%
        whiteList['opacity'] = false; // default: 1
        whiteList['order'] = false; // default: 0
        whiteList['orphans'] = false; // default: 2
        whiteList['outline'] = false; // default: depending on individual properties
        whiteList['outline-color'] = false; // default: invert
        whiteList['outline-offset'] = false; // default: 0
        whiteList['outline-style'] = false; // default: none
        whiteList['outline-width'] = false; // default: medium
        whiteList['overflow'] = false; // default: depending on individual properties
        whiteList['overflow-wrap'] = false; // default: normal
        whiteList['overflow-x'] = false; // default: visible
        whiteList['overflow-y'] = false; // default: visible
        whiteList['padding'] = true; // default: depending on individual properties
        whiteList['padding-bottom'] = true; // default: 0
        whiteList['padding-left'] = true; // default: 0
        whiteList['padding-right'] = true; // default: 0
        whiteList['padding-top'] = true; // default: 0
        whiteList['page'] = false; // default: auto
        whiteList['page-break-after'] = false; // default: auto
        whiteList['page-break-before'] = false; // default: auto
        whiteList['page-break-inside'] = false; // default: auto
        whiteList['page-policy'] = false; // default: start
        whiteList['pause'] = false; // default: implementation dependent
        whiteList['pause-after'] = false; // default: implementation dependent
        whiteList['pause-before'] = false; // default: implementation dependent
        whiteList['perspective'] = false; // default: none
        whiteList['perspective-origin'] = false; // default: 50% 50%
        whiteList['pitch'] = false; // default: medium
        whiteList['pitch-range'] = false; // default: 50
        whiteList['play-during'] = false; // default: auto
        whiteList['position'] = false; // default: static
        whiteList['presentation-level'] = false; // default: 0
        whiteList['quotes'] = false; // default: text
        whiteList['region-fragment'] = false; // default: auto
        whiteList['resize'] = false; // default: none
        whiteList['rest'] = false; // default: depending on individual properties
        whiteList['rest-after'] = false; // default: none
        whiteList['rest-before'] = false; // default: none
        whiteList['richness'] = false; // default: 50
        whiteList['right'] = false; // default: auto
        whiteList['rotation'] = false; // default: 0
        whiteList['rotation-point'] = false; // default: 50% 50%
        whiteList['ruby-align'] = false; // default: auto
        whiteList['ruby-merge'] = false; // default: separate
        whiteList['ruby-position'] = false; // default: before
        whiteList['shape-image-threshold'] = false; // default: 0.0
        whiteList['shape-outside'] = false; // default: none
        whiteList['shape-margin'] = false; // default: 0
        whiteList['size'] = false; // default: auto
        whiteList['speak'] = false; // default: auto
        whiteList['speak-as'] = false; // default: normal
        whiteList['speak-header'] = false; // default: once
        whiteList['speak-numeral'] = false; // default: continuous
        whiteList['speak-punctuation'] = false; // default: none
        whiteList['speech-rate'] = false; // default: medium
        whiteList['stress'] = false; // default: 50
        whiteList['string-set'] = false; // default: none
        whiteList['tab-size'] = false; // default: 8
        whiteList['table-layout'] = false; // default: auto
        whiteList['text-align'] = true; // default: start
        whiteList['text-align-last'] = true; // default: auto
        whiteList['text-combine-upright'] = true; // default: none
        whiteList['text-decoration'] = true; // default: none
        whiteList['text-decoration-color'] = true; // default: currentColor
        whiteList['text-decoration-line'] = true; // default: none
        whiteList['text-decoration-skip'] = true; // default: objects
        whiteList['text-decoration-style'] = true; // default: solid
        whiteList['text-emphasis'] = true; // default: depending on individual properties
        whiteList['text-emphasis-color'] = true; // default: currentColor
        whiteList['text-emphasis-position'] = true; // default: over right
        whiteList['text-emphasis-style'] = true; // default: none
        whiteList['text-height'] = true; // default: auto
        whiteList['text-indent'] = true; // default: 0
        whiteList['text-justify'] = true; // default: auto
        whiteList['text-orientation'] = true; // default: mixed
        whiteList['text-overflow'] = true; // default: clip
        whiteList['text-shadow'] = true; // default: none
        whiteList['text-space-collapse'] = true; // default: collapse
        whiteList['text-transform'] = true; // default: none
        whiteList['text-underline-position'] = true; // default: auto
        whiteList['text-wrap'] = true; // default: normal
        whiteList['top'] = false; // default: auto
        whiteList['transform'] = false; // default: none
        whiteList['transform-origin'] = false; // default: 50% 50% 0
        whiteList['transform-style'] = false; // default: flat
        whiteList['transition'] = false; // default: depending on individual properties
        whiteList['transition-delay'] = false; // default: 0s
        whiteList['transition-duration'] = false; // default: 0s
        whiteList['transition-property'] = false; // default: all
        whiteList['transition-timing-function'] = false; // default: ease
        whiteList['unicode-bidi'] = false; // default: normal
        whiteList['vertical-align'] = false; // default: baseline
        whiteList['visibility'] = false; // default: visible
        whiteList['voice-balance'] = false; // default: center
        whiteList['voice-duration'] = false; // default: auto
        whiteList['voice-family'] = false; // default: implementation dependent
        whiteList['voice-pitch'] = false; // default: medium
        whiteList['voice-range'] = false; // default: medium
        whiteList['voice-rate'] = false; // default: normal
        whiteList['voice-stress'] = false; // default: normal
        whiteList['voice-volume'] = false; // default: medium
        whiteList['volume'] = false; // default: medium
        whiteList['white-space'] = false; // default: normal
        whiteList['widows'] = false; // default: 2
        whiteList['width'] = true; // default: auto
        whiteList['will-change'] = false; // default: auto
        whiteList['word-break'] = true; // default: normal
        whiteList['word-spacing'] = true; // default: normal
        whiteList['word-wrap'] = true; // default: normal
        whiteList['wrap-flow'] = false; // default: auto
        whiteList['wrap-through'] = false; // default: wrap
        whiteList['writing-mode'] = false; // default: horizontal-tb
        whiteList['z-index'] = false; // default: auto

        return whiteList;
      }


      /**
       * 匹配到白名单上的一个属性时
       *
       * @param {String} name
       * @param {String} value
       * @param {Object} options
       * @return {String}
       */
      function onAttr(name, value, options) {
        // do nothing
      }

      /**
       * 匹配到不在白名单上的一个属性时
       *
       * @param {String} name
       * @param {String} value
       * @param {Object} options
       * @return {String}
       */
      function onIgnoreAttr(name, value, options) {
        // do nothing
      }

      var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

      /**
       * 过滤属性值
       *
       * @param {String} name
       * @param {String} value
       * @return {String}
       */
      function safeAttrValue(name, value) {
        if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
        return value;
      }


      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onAttr = onAttr;
      exports.onIgnoreAttr = onIgnoreAttr;
      exports.safeAttrValue = safeAttrValue;


      /***/
    }),
    /* 3 */
    /***/ (function (module, exports) {

      module.exports = {
        indexOf: function (arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function (arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function (str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        trimRight: function (str) {
          if (String.prototype.trimRight) {
            return str.trimRight();
          }
          return str.replace(/(\s*$)/g, '');
        }
      };


      /***/
    }),
    /* 4 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * default settings
       *
       * @author Zongmin Lei<leizongmin@gmail.com>
       */

      var FilterCSS = __webpack_require__(0).FilterCSS;
      var getDefaultCSSWhiteList = __webpack_require__(0).getDefaultWhiteList;
      var _ = __webpack_require__(1);

      function getDefaultWhiteList() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: ["autoplay", "controls", "loop", "preload", "src"],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
        };
      }

      var defaultCSSFilter = new FilterCSS();

      /**
       * default onTag function
       *
       * @param {String} tag
       * @param {String} html
       * @param {Object} options
       * @return {String}
       */
      function onTag(tag, html, options) {
        // do nothing
      }

      /**
       * default onIgnoreTag function
       *
       * @param {String} tag
       * @param {String} html
       * @param {Object} options
       * @return {String}
       */
      function onIgnoreTag(tag, html, options) {
        // do nothing
      }

      /**
       * default onTagAttr function
       *
       * @param {String} tag
       * @param {String} name
       * @param {String} value
       * @return {String}
       */
      function onTagAttr(tag, name, value) {
        // do nothing
      }

      /**
       * default onIgnoreTagAttr function
       *
       * @param {String} tag
       * @param {String} name
       * @param {String} value
       * @return {String}
       */
      function onIgnoreTagAttr(tag, name, value) {
        // do nothing
      }

      /**
       * default escapeHtml function
       *
       * @param {String} html
       */
      function escapeHtml(html) {
        return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
      }

      /**
       * default safeAttrValue function
       *
       * @param {String} tag
       * @param {String} name
       * @param {String} value
       * @param {Object} cssFilter
       * @return {String}
       */
      function safeAttrValue(tag, name, value, cssFilter) {
        // unescape attribute value firstly
        value = friendlyAttrValue(value);

        if (name === "href" || name === "src") {
          // filter `href` and `src` attribute
          // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
          value = _.trim(value);
          if (value === "#") return "#";
          if (
            !(
              value.substr(0, 7) === "http://" ||
              value.substr(0, 8) === "https://" ||
              value.substr(0, 7) === "mailto:" ||
              value.substr(0, 4) === "tel:" ||
              value[0] === "#" ||
              value[0] === "/"
            )
          ) {
            return "";
          }
        } else if (name === "background") {
          // filter `background` attribute (maybe no use)
          // `javascript:`
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        } else if (name === "style") {
          // `expression()`
          REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
            return "";
          }
          // `url()`
          REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
            REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
              return "";
            }
          }
          if (cssFilter !== false) {
            cssFilter = cssFilter || defaultCSSFilter;
            value = cssFilter.process(value);
          }
        }

        // escape `<>"` before returns
        value = escapeAttrValue(value);
        return value;
      }

// RegExp list
      var REGEXP_LT = /</g;
      var REGEXP_GT = />/g;
      var REGEXP_QUOTE = /"/g;
      var REGEXP_QUOTE_2 = /&quot;/g;
      var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
      var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
      var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
      var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
      var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

      /**
       * escape doube quote
       *
       * @param {String} str
       * @return {String} str
       */
      function escapeQuote(str) {
        return str.replace(REGEXP_QUOTE, "&quot;");
      }

      /**
       * unescape double quote
       *
       * @param {String} str
       * @return {String} str
       */
      function unescapeQuote(str) {
        return str.replace(REGEXP_QUOTE_2, '"');
      }

      /**
       * escape html entities
       *
       * @param {String} str
       * @return {String}
       */
      function escapeHtmlEntities(str) {
        return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
          return code[0] === "x" || code[0] === "X"
            ? String.fromCharCode(parseInt(code.substr(1), 16))
            : String.fromCharCode(parseInt(code, 10));
        });
      }

      /**
       * escape html5 new danger entities
       *
       * @param {String} str
       * @return {String}
       */
      function escapeDangerHtml5Entities(str) {
        return str
          .replace(REGEXP_ATTR_VALUE_COLON, ":")
          .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
      }

      /**
       * clear nonprintable characters
       *
       * @param {String} str
       * @return {String}
       */
      function clearNonPrintableCharacter(str) {
        var str2 = "";
        for (var i = 0, len = str.length; i < len; i++) {
          str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
        }
        return _.trim(str2);
      }

      /**
       * get friendly attribute value
       *
       * @param {String} str
       * @return {String}
       */
      function friendlyAttrValue(str) {
        str = unescapeQuote(str);
        str = escapeHtmlEntities(str);
        str = escapeDangerHtml5Entities(str);
        str = clearNonPrintableCharacter(str);
        return str;
      }

      /**
       * unescape attribute value
       *
       * @param {String} str
       * @return {String}
       */
      function escapeAttrValue(str) {
        str = escapeQuote(str);
        str = escapeHtml(str);
        return str;
      }

      /**
       * `onIgnoreTag` function for removing all the tags that are not in whitelist
       */
      function onIgnoreTagStripAll() {
        return "";
      }

      /**
       * remove tag body
       * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
       *
       * @param {array} tags
       * @param {function} next
       */
      function StripTagBody(tags, next) {
        if (typeof next !== "function") {
          next = function () {
          };
        }

        var isRemoveAllTag = !Array.isArray(tags);

        function isRemoveTag(tag) {
          if (isRemoveAllTag) return true;
          return _.indexOf(tags, tag) !== -1;
        }

        var removeList = [];
        var posStart = false;

        return {
          onIgnoreTag: function (tag, html, options) {
            if (isRemoveTag(tag)) {
              if (options.isClosing) {
                var ret = "[/removed]";
                var end = options.position + ret.length;
                removeList.push([
                  posStart !== false ? posStart : options.position,
                  end
                ]);
                posStart = false;
                return ret;
              } else {
                if (!posStart) {
                  posStart = options.position;
                }
                return "[removed]";
              }
            } else {
              return next(tag, html, options);
            }
          },
          remove: function (html) {
            var rethtml = "";
            var lastPos = 0;
            _.forEach(removeList, function (pos) {
              rethtml += html.slice(lastPos, pos[0]);
              lastPos = pos[1];
            });
            rethtml += html.slice(lastPos);
            return rethtml;
          }
        };
      }

      /**
       * remove html comments
       *
       * @param {String} html
       * @return {String}
       */
      function stripCommentTag(html) {
        return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
      }

      var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

      /**
       * remove invisible characters
       *
       * @param {String} html
       * @return {String}
       */
      function stripBlankChar(html) {
        var chars = html.split("");
        chars = chars.filter(function (char) {
          var c = char.charCodeAt(0);
          if (c === 127) return false;
          if (c <= 31) {
            if (c === 10 || c === 13) return true;
            return false;
          }
          return true;
        });
        return chars.join("");
      }

      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onTag = onTag;
      exports.onIgnoreTag = onIgnoreTag;
      exports.onTagAttr = onTagAttr;
      exports.onIgnoreTagAttr = onIgnoreTagAttr;
      exports.safeAttrValue = safeAttrValue;
      exports.escapeHtml = escapeHtml;
      exports.escapeQuote = escapeQuote;
      exports.unescapeQuote = unescapeQuote;
      exports.escapeHtmlEntities = escapeHtmlEntities;
      exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
      exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
      exports.friendlyAttrValue = friendlyAttrValue;
      exports.escapeAttrValue = escapeAttrValue;
      exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
      exports.StripTagBody = StripTagBody;
      exports.stripCommentTag = stripCommentTag;
      exports.stripBlankChar = stripBlankChar;
      exports.cssFilter = defaultCSSFilter;
      exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;


      /***/
    }),
    /* 5 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * Simple HTML Parser
       *
       * @author Zongmin Lei<leizongmin@gmail.com>
       */

      var _ = __webpack_require__(1);

      /**
       * get tag name
       *
       * @param {String} html e.g. '<a hef="#">'
       * @return {String}
       */
      function getTagName(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          var tagName = html.slice(1, -1);
        } else {
          var tagName = html.slice(1, i + 1);
        }
        tagName = _.trim(tagName).toLowerCase();
        if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
        if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
        return tagName;
      }

      /**
       * is close tag?
       *
       * @param {String} html 如：'<a hef="#">'
       * @return {Boolean}
       */
      function isClosing(html) {
        return html.slice(0, 2) === "</";
      }

      /**
       * parse input html and returns processed html
       *
       * @param {String} html
       * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
       * @param {Function} escapeHtml
       * @return {String}
       */
      function parseTag(html, onTag, escapeHtml) {
        "user strict";

        var rethtml = "";
        var lastPos = 0;
        var tagStart = false;
        var quoteStart = false;
        var currentPos = 0;
        var len = html.length;
        var currentTagName = "";
        var currentHtml = "";

        for (currentPos = 0; currentPos < len; currentPos++) {
          var c = html.charAt(currentPos);
          if (tagStart === false) {
            if (c === "<") {
              tagStart = currentPos;
              continue;
            }
          } else {
            if (quoteStart === false) {
              if (c === "<") {
                rethtml += escapeHtml(html.slice(lastPos, currentPos));
                tagStart = currentPos;
                lastPos = currentPos;
                continue;
              }
              if (c === ">") {
                rethtml += escapeHtml(html.slice(lastPos, tagStart));
                currentHtml = html.slice(tagStart, currentPos + 1);
                currentTagName = getTagName(currentHtml);
                rethtml += onTag(
                  tagStart,
                  rethtml.length,
                  currentTagName,
                  currentHtml,
                  isClosing(currentHtml)
                );
                lastPos = currentPos + 1;
                tagStart = false;
                continue;
              }
              if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
                quoteStart = c;
                continue;
              }
            } else {
              if (c === quoteStart) {
                quoteStart = false;
                continue;
              }
            }
          }
        }
        if (lastPos < html.length) {
          rethtml += escapeHtml(html.substr(lastPos));
        }

        return rethtml;
      }

      var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

      /**
       * parse input attributes and returns processed attributes
       *
       * @param {String} html e.g. `href="#" target="_blank"`
       * @param {Function} onAttr e.g. `function (name, value)`
       * @return {String}
       */
      function parseAttr(html, onAttr) {
        "user strict";

        var lastPos = 0;
        var retAttrs = [];
        var tmpName = false;
        var len = html.length;

        function addAttr(name, value) {
          name = _.trim(name);
          name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
          if (name.length < 1) return;
          var ret = onAttr(name, value || "");
          if (ret) retAttrs.push(ret);
        }

        // 逐个分析字符
        for (var i = 0; i < len; i++) {
          var c = html.charAt(i);
          var v, j;
          if (tmpName === false && c === "=") {
            tmpName = html.slice(lastPos, i);
            lastPos = i + 1;
            continue;
          }
          if (tmpName !== false) {
            if (
              i === lastPos &&
              (c === '"' || c === "'") &&
              html.charAt(i - 1) === "="
            ) {
              j = html.indexOf(c, i + 1);
              if (j === -1) {
                break;
              } else {
                v = _.trim(html.slice(lastPos + 1, j));
                addAttr(tmpName, v);
                tmpName = false;
                i = j;
                lastPos = i + 1;
                continue;
              }
            }
          }
          if (/\s|\n|\t/.test(c)) {
            html = html.replace(/\s|\n|\t/g, " ");
            if (tmpName === false) {
              j = findNextEqual(html, i);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                addAttr(v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                i = j - 1;
                continue;
              }
            } else {
              j = findBeforeEqual(html, i - 1);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                v = stripQuoteWrap(v);
                addAttr(tmpName, v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                continue;
              }
            }
          }
        }

        if (lastPos < html.length) {
          if (tmpName === false) {
            addAttr(html.slice(lastPos));
          } else {
            addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
          }
        }

        return _.trim(retAttrs.join(" "));
      }

      function findNextEqual(str, i) {
        for (; i < str.length; i++) {
          var c = str[i];
          if (c === " ") continue;
          if (c === "=") return i;
          return -1;
        }
      }

      function findBeforeEqual(str, i) {
        for (; i > 0; i--) {
          var c = str[i];
          if (c === " ") continue;
          if (c === "=") return i;
          return -1;
        }
      }

      function isQuoteWrapString(text) {
        if (
          (text[0] === '"' && text[text.length - 1] === '"') ||
          (text[0] === "'" && text[text.length - 1] === "'")
        ) {
          return true;
        } else {
          return false;
        }
      }

      function stripQuoteWrap(text) {
        if (isQuoteWrapString(text)) {
          return text.substr(1, text.length - 2);
        } else {
          return text;
        }
      }

      exports.parseTag = parseTag;
      exports.parseAttr = parseAttr;


      /***/
    }),
    /* 6 */
    /***/ (function (module, exports, __webpack_require__) {

      var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

      /* global define */

      ;(function ($) {
        'use strict'

        /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
        function safeAdd(x, y) {
          var lsw = (x & 0xffff) + (y & 0xffff)
          var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
          return (msw << 16) | (lsw & 0xffff)
        }

        /*
  * Bitwise rotate a 32-bit number to the left.
  */
        function bitRotateLeft(num, cnt) {
          return (num << cnt) | (num >>> (32 - cnt))
        }

        /*
  * These functions implement the four basic operations the algorithm uses.
  */
        function md5cmn(q, a, b, x, s, t) {
          return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
        }

        function md5ff(a, b, c, d, x, s, t) {
          return md5cmn((b & c) | (~b & d), a, b, x, s, t)
        }

        function md5gg(a, b, c, d, x, s, t) {
          return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
        }

        function md5hh(a, b, c, d, x, s, t) {
          return md5cmn(b ^ c ^ d, a, b, x, s, t)
        }

        function md5ii(a, b, c, d, x, s, t) {
          return md5cmn(c ^ (b | ~d), a, b, x, s, t)
        }

        /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
        function binlMD5(x, len) {
          /* append padding */
          x[len >> 5] |= 0x80 << (len % 32)
          x[((len + 64) >>> 9 << 4) + 14] = len

          var i
          var olda
          var oldb
          var oldc
          var oldd
          var a = 1732584193
          var b = -271733879
          var c = -1732584194
          var d = 271733878

          for (i = 0; i < x.length; i += 16) {
            olda = a
            oldb = b
            oldc = c
            oldd = d

            a = md5ff(a, b, c, d, x[i], 7, -680876936)
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
            b = md5gg(b, c, d, a, x[i], 20, -373897302)
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

            a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
            d = md5hh(d, a, b, c, x[i], 11, -358537222)
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

            a = md5ii(a, b, c, d, x[i], 6, -198630844)
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

            a = safeAdd(a, olda)
            b = safeAdd(b, oldb)
            c = safeAdd(c, oldc)
            d = safeAdd(d, oldd)
          }
          return [a, b, c, d]
        }

        /*
  * Convert an array of little-endian words to a string
  */
        function binl2rstr(input) {
          var i
          var output = ''
          var length32 = input.length * 32
          for (i = 0; i < length32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
          }
          return output
        }

        /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
        function rstr2binl(input) {
          var i
          var output = []
          output[(input.length >> 2) - 1] = undefined
          for (i = 0; i < output.length; i += 1) {
            output[i] = 0
          }
          var length8 = input.length * 8
          for (i = 0; i < length8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
          }
          return output
        }

        /*
  * Calculate the MD5 of a raw string
  */
        function rstrMD5(s) {
          return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
        }

        /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
        function rstrHMACMD5(key, data) {
          var i
          var bkey = rstr2binl(key)
          var ipad = []
          var opad = []
          var hash
          ipad[15] = opad[15] = undefined
          if (bkey.length > 16) {
            bkey = binlMD5(bkey, key.length * 8)
          }
          for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636
            opad[i] = bkey[i] ^ 0x5c5c5c5c
          }
          hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
          return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
        }

        /*
  * Convert a raw string to a hex string
  */
        function rstr2hex(input) {
          var hexTab = '0123456789abcdef'
          var output = ''
          var x
          var i
          for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i)
            output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
          }
          return output
        }

        /*
  * Encode a string as utf-8
  */
        function str2rstrUTF8(input) {
          return unescape(encodeURIComponent(input))
        }

        /*
  * Take string arguments and return either raw or hex encoded strings
  */
        function rawMD5(s) {
          return rstrMD5(str2rstrUTF8(s))
        }

        function hexMD5(s) {
          return rstr2hex(rawMD5(s))
        }

        function rawHMACMD5(k, d) {
          return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
        }

        function hexHMACMD5(k, d) {
          return rstr2hex(rawHMACMD5(k, d))
        }

        function md5(string, key, raw) {
          if (!key) {
            if (!raw) {
              return hexMD5(string)
            }
            return rawMD5(string)
          }
          if (!raw) {
            return hexHMACMD5(key, string)
          }
          return rawHMACMD5(key, string)
        }

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return md5
          }.call(exports, __webpack_require__, exports, module),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else if (typeof module === 'object' && module.exports) {
          module.exports = md5
        } else {
          $.md5 = md5
        }
      })(this)


      /***/
    }),
    /* 7 */
    /***/ (function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */
      (function (global) {/**
       * marked - a markdown parser
       * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/markedjs/marked
       */

        ;(function (root) {
          'use strict';

          /**
           * Block-Level Grammar
           */

          var block = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: noop,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            nptable: noop,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: '^ {0,3}(?:' // optional indentation
              + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
              + '|comment[^\\n]*(\\n+|$)' // (2)
              + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
              + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
              + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
              + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
              + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
              + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
              + ')',
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: noop,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
            text: /^[^\n]+/
          };

          block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
          block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
          block.def = edit(block.def)
            .replace('label', block._label)
            .replace('title', block._title)
            .getRegex();

          block.bullet = /(?:[*+-]|\d{1,9}\.)/;
          block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
          block.item = edit(block.item, 'gm')
            .replace(/bull/g, block.bullet)
            .getRegex();

          block.list = edit(block.list)
            .replace(/bull/g, block.bullet)
            .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
            .replace('def', '\\n+(?=' + block.def.source + ')')
            .getRegex();

          block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
            + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
            + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
            + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
            + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
            + '|track|ul';
          block._comment = /<!--(?!-?>)[\s\S]*?-->/;
          block.html = edit(block.html, 'i')
            .replace('comment', block._comment)
            .replace('tag', block._tag)
            .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
            .getRegex();

          block.paragraph = edit(block.paragraph)
            .replace('hr', block.hr)
            .replace('heading', block.heading)
            .replace('lheading', block.lheading)
            .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
            .getRegex();

          block.blockquote = edit(block.blockquote)
            .replace('paragraph', block.paragraph)
            .getRegex();

          /**
           * Normal Block Grammar
           */

          block.normal = merge({}, block);

          /**
           * GFM Block Grammar
           */

          block.gfm = merge({}, block.normal, {
            fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
          });

          block.gfm.paragraph = edit(block.paragraph)
            .replace('(?!', '(?!'
              + block.gfm.fences.source.replace('\\1', '\\2') + '|'
              + block.list.source.replace('\\1', '\\3') + '|')
            .getRegex();

          /**
           * GFM + Tables Block Grammar
           */

          block.tables = merge({}, block.gfm, {
            nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
          });

          /**
           * Pedantic grammar
           */

          block.pedantic = merge({}, block.normal, {
            html: edit(
              '^ *(?:comment *(?:\\n|\\s*$)'
              + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
              + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
              .replace('comment', block._comment)
              .replace(/tag/g, '(?!(?:'
                + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
                + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
                + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
          });

          /**
           * Block Lexer
           */

          function Lexer(options) {
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || marked.defaults;
            this.rules = block.normal;

            if (this.options.pedantic) {
              this.rules = block.pedantic;
            } else if (this.options.gfm) {
              if (this.options.tables) {
                this.rules = block.tables;
              } else {
                this.rules = block.gfm;
              }
            }
          }

          /**
           * Expose Block Rules
           */

          Lexer.rules = block;

          /**
           * Static Lex Method
           */

          Lexer.lex = function (src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
          };

          /**
           * Preprocessing
           */

          Lexer.prototype.lex = function (src) {
            src = src
              .replace(/\r\n|\r/g, '\n')
              .replace(/\t/g, '    ')
              .replace(/\u00a0/g, ' ')
              .replace(/\u2424/g, '\n');

            return this.token(src, true);
          };

          /**
           * Lexing
           */

          Lexer.prototype.token = function (src, top) {
            src = src.replace(/^ +$/gm, '');
            var next,
              loose,
              cap,
              bull,
              b,
              item,
              listStart,
              listItems,
              t,
              space,
              i,
              tag,
              l,
              isordered,
              istask,
              ischecked;

            while (src) {
              // newline
              if (cap = this.rules.newline.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[0].length > 1) {
                  this.tokens.push({
                    type: 'space'
                  });
                }
              }

              // code
              if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                cap = cap[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                  type: 'code',
                  text: !this.options.pedantic
                    ? rtrim(cap, '\n')
                    : cap
                });
                continue;
              }

              // fences (gfm)
              if (cap = this.rules.fences.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'code',
                  lang: cap[2] ? cap[2].trim() : cap[2],
                  text: cap[3] || ''
                });
                continue;
              }

              // heading
              if (cap = this.rules.heading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'heading',
                  depth: cap[1].length,
                  text: cap[2]
                });
                continue;
              }

              // table no leading pipe (gfm)
              if (top && (cap = this.rules.nptable.exec(src))) {
                item = {
                  type: 'table',
                  header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
                  align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
                };

                if (item.header.length === item.align.length) {
                  src = src.substring(cap[0].length);

                  for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                      item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                      item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                      item.align[i] = 'left';
                    } else {
                      item.align[i] = null;
                    }
                  }

                  for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = splitCells(item.cells[i], item.header.length);
                  }

                  this.tokens.push(item);

                  continue;
                }
              }

              // hr
              if (cap = this.rules.hr.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'hr'
                });
                continue;
              }

              // blockquote
              if (cap = this.rules.blockquote.exec(src)) {
                src = src.substring(cap[0].length);

                this.tokens.push({
                  type: 'blockquote_start'
                });

                cap = cap[0].replace(/^ *> ?/gm, '');

                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.token(cap, top);

                this.tokens.push({
                  type: 'blockquote_end'
                });

                continue;
              }

              // list
              if (cap = this.rules.list.exec(src)) {
                src = src.substring(cap[0].length);
                bull = cap[2];
                isordered = bull.length > 1;

                listStart = {
                  type: 'list_start',
                  ordered: isordered,
                  start: isordered ? +bull : '',
                  loose: false
                };

                this.tokens.push(listStart);

                // Get each top-level item.
                cap = cap[0].match(this.rules.item);

                listItems = [];
                next = false;
                l = cap.length;
                i = 0;

                for (; i < l; i++) {
                  item = cap[i];

                  // Remove the list item's bullet
                  // so it is seen as the next token.
                  space = item.length;
                  item = item.replace(/^ *([*+-]|\d+\.) */, '');

                  // Outdent whatever the
                  // list item contains. Hacky.
                  if (~item.indexOf('\n ')) {
                    space -= item.length;
                    item = !this.options.pedantic
                      ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                      : item.replace(/^ {1,4}/gm, '');
                  }

                  // Determine whether the next list item belongs here.
                  // Backpedal if it does not belong in this list.
                  if (i !== l - 1) {
                    b = block.bullet.exec(cap[i + 1])[0];
                    if (bull.length > 1 ? b.length === 1
                      : (b.length > 1 || (this.options.smartLists && b !== bull))) {
                      src = cap.slice(i + 1).join('\n') + src;
                      i = l - 1;
                    }
                  }

                  // Determine whether item is loose or not.
                  // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                  // for discount behavior.
                  loose = next || /\n\n(?!\s*$)/.test(item);
                  if (i !== l - 1) {
                    next = item.charAt(item.length - 1) === '\n';
                    if (!loose) loose = next;
                  }

                  if (loose) {
                    listStart.loose = true;
                  }

                  // Check for task list items
                  istask = /^\[[ xX]\] /.test(item);
                  ischecked = undefined;
                  if (istask) {
                    ischecked = item[1] !== ' ';
                    item = item.replace(/^\[[ xX]\] +/, '');
                  }

                  t = {
                    type: 'list_item_start',
                    task: istask,
                    checked: ischecked,
                    loose: loose
                  };

                  listItems.push(t);
                  this.tokens.push(t);

                  // Recurse.
                  this.token(item, false);

                  this.tokens.push({
                    type: 'list_item_end'
                  });
                }

                if (listStart.loose) {
                  l = listItems.length;
                  i = 0;
                  for (; i < l; i++) {
                    listItems[i].loose = true;
                  }
                }

                this.tokens.push({
                  type: 'list_end'
                });

                continue;
              }

              // html
              if (cap = this.rules.html.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: this.options.sanitize
                    ? 'paragraph'
                    : 'html',
                  pre: !this.options.sanitizer
                    && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                  text: cap[0]
                });
                continue;
              }

              // def
              if (top && (cap = this.rules.def.exec(src))) {
                src = src.substring(cap[0].length);
                if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
                tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
                if (!this.tokens.links[tag]) {
                  this.tokens.links[tag] = {
                    href: cap[2],
                    title: cap[3]
                  };
                }
                continue;
              }

              // table (gfm)
              if (top && (cap = this.rules.table.exec(src))) {
                item = {
                  type: 'table',
                  header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
                  align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: cap[3] ? cap[3].replace(/(?: *\| *)?\n$/, '').split('\n') : []
                };

                if (item.header.length === item.align.length) {
                  src = src.substring(cap[0].length);

                  for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                      item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                      item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                      item.align[i] = 'left';
                    } else {
                      item.align[i] = null;
                    }
                  }

                  for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = splitCells(
                      item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
                      item.header.length);
                  }

                  this.tokens.push(item);

                  continue;
                }
              }

              // lheading
              if (cap = this.rules.lheading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'heading',
                  depth: cap[2] === '=' ? 1 : 2,
                  text: cap[1]
                });
                continue;
              }

              // top-level paragraph
              if (top && (cap = this.rules.paragraph.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'paragraph',
                  text: cap[1].charAt(cap[1].length - 1) === '\n'
                    ? cap[1].slice(0, -1)
                    : cap[1]
                });
                continue;
              }

              // text
              if (cap = this.rules.text.exec(src)) {
                // Top-level should never reach here.
                src = src.substring(cap[0].length);
                this.tokens.push({
                  type: 'text',
                  text: cap[0]
                });
                continue;
              }

              if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
              }
            }

            return this.tokens;
          };

          /**
           * Inline-Level Grammar
           */

          var inline = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: noop,
            tag: '^comment'
              + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
              + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
              + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
              + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
              + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
            link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
            em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: noop,
            text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
          };

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
          inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
          inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

          inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

          inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
          inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
          inline.autolink = edit(inline.autolink)
            .replace('scheme', inline._scheme)
            .replace('email', inline._email)
            .getRegex();

          inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

          inline.tag = edit(inline.tag)
            .replace('comment', block._comment)
            .replace('attribute', inline._attribute)
            .getRegex();

          inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
          inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
          inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

          inline.link = edit(inline.link)
            .replace('label', inline._label)
            .replace('href', inline._href)
            .replace('title', inline._title)
            .getRegex();

          inline.reflink = edit(inline.reflink)
            .replace('label', inline._label)
            .getRegex();

          /**
           * Normal Inline Grammar
           */

          inline.normal = merge({}, inline);

          /**
           * Pedantic Inline Grammar
           */

          inline.pedantic = merge({}, inline.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            link: edit(/^!?\[(label)\]\((.*?)\)/)
              .replace('label', inline._label)
              .getRegex(),
            reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace('label', inline._label)
              .getRegex()
          });

          /**
           * GFM Inline Grammar
           */

          inline.gfm = merge({}, inline.normal, {
            escape: edit(inline.escape).replace('])', '~|])').getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^~+(?=\S)([\s\S]*?\S)~+/,
            text: edit(inline.text)
              .replace(']|', '~]|')
              .replace('|$', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|$')
              .getRegex()
          });

          inline.gfm.url = edit(inline.gfm.url, 'i')
            .replace('email', inline.gfm._extended_email)
            .getRegex();
          /**
           * GFM + Line Breaks Inline Grammar
           */

          inline.breaks = merge({}, inline.gfm, {
            br: edit(inline.br).replace('{2,}', '*').getRegex(),
            text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
          });

          /**
           * Inline Lexer & Compiler
           */

          function InlineLexer(links, options) {
            this.options = options || marked.defaults;
            this.links = links;
            this.rules = inline.normal;
            this.renderer = this.options.renderer || new Renderer();
            this.renderer.options = this.options;

            if (!this.links) {
              throw new Error('Tokens array requires a `links` property.');
            }

            if (this.options.pedantic) {
              this.rules = inline.pedantic;
            } else if (this.options.gfm) {
              if (this.options.breaks) {
                this.rules = inline.breaks;
              } else {
                this.rules = inline.gfm;
              }
            }
          }

          /**
           * Expose Inline Rules
           */

          InlineLexer.rules = inline;

          /**
           * Static Lexing/Compiling Method
           */

          InlineLexer.output = function (src, links, options) {
            var inline = new InlineLexer(links, options);
            return inline.output(src);
          };

          /**
           * Lexing/Compiling
           */

          InlineLexer.prototype.output = function (src) {
            var out = '',
              link,
              text,
              href,
              title,
              cap,
              prevCapZero;

            while (src) {
              // escape
              if (cap = this.rules.escape.exec(src)) {
                src = src.substring(cap[0].length);
                out += escape(cap[1]);
                continue;
              }

              // tag
              if (cap = this.rules.tag.exec(src)) {
                if (!this.inLink && /^<a /i.test(cap[0])) {
                  this.inLink = true;
                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                  this.inLink = false;
                }
                if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                  this.inRawBlock = true;
                } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                  this.inRawBlock = false;
                }

                src = src.substring(cap[0].length);
                out += this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(cap[0])
                    : escape(cap[0])
                  : cap[0];
                continue;
              }

              // link
              if (cap = this.rules.link.exec(src)) {
                var lastParenIndex = findClosingBracket(cap[2], '()');
                if (lastParenIndex > -1) {
                  var removeChars = cap[2].length - lastParenIndex;
                  cap[2] = cap[2].substring(0, lastParenIndex);
                  cap[0] = cap[0].substring(0, cap[0].length - removeChars);
                }
                src = src.substring(cap[0].length);
                this.inLink = true;
                href = cap[2];
                if (this.options.pedantic) {
                  link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

                  if (link) {
                    href = link[1];
                    title = link[3];
                  } else {
                    title = '';
                  }
                } else {
                  title = cap[3] ? cap[3].slice(1, -1) : '';
                }
                href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
                out += this.outputLink(cap, {
                  href: InlineLexer.escapes(href),
                  title: InlineLexer.escapes(title)
                });
                this.inLink = false;
                continue;
              }

              // reflink, nolink
              if ((cap = this.rules.reflink.exec(src))
                || (cap = this.rules.nolink.exec(src))) {
                src = src.substring(cap[0].length);
                link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = this.links[link.toLowerCase()];
                if (!link || !link.href) {
                  out += cap[0].charAt(0);
                  src = cap[0].substring(1) + src;
                  continue;
                }
                this.inLink = true;
                out += this.outputLink(cap, link);
                this.inLink = false;
                continue;
              }

              // strong
              if (cap = this.rules.strong.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
                continue;
              }

              // em
              if (cap = this.rules.em.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
                continue;
              }

              // code
              if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.codespan(escape(cap[2].trim(), true));
                continue;
              }

              // br
              if (cap = this.rules.br.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.br();
                continue;
              }

              // del (gfm)
              if (cap = this.rules.del.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.del(this.output(cap[1]));
                continue;
              }

              // autolink
              if (cap = this.rules.autolink.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[2] === '@') {
                  text = escape(this.mangle(cap[1]));
                  href = 'mailto:' + text;
                } else {
                  text = escape(cap[1]);
                  href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
              }

              // url (gfm)
              if (!this.inLink && (cap = this.rules.url.exec(src))) {
                if (cap[2] === '@') {
                  text = escape(cap[0]);
                  href = 'mailto:' + text;
                } else {
                  // do extended autolink path validation
                  do {
                    prevCapZero = cap[0];
                    cap[0] = this.rules._backpedal.exec(cap[0])[0];
                  } while (prevCapZero !== cap[0]);
                  text = escape(cap[0]);
                  if (cap[1] === 'www.') {
                    href = 'http://' + text;
                  } else {
                    href = text;
                  }
                }
                src = src.substring(cap[0].length);
                out += this.renderer.link(href, null, text);
                continue;
              }

              // text
              if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                if (this.inRawBlock) {
                  out += this.renderer.text(cap[0]);
                } else {
                  out += this.renderer.text(escape(this.smartypants(cap[0])));
                }
                continue;
              }

              if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
              }
            }

            return out;
          };

          InlineLexer.escapes = function (text) {
            return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
          };

          /**
           * Compile Link
           */

          InlineLexer.prototype.outputLink = function (cap, link) {
            var href = link.href,
              title = link.title ? escape(link.title) : null;

            return cap[0].charAt(0) !== '!'
              ? this.renderer.link(href, title, this.output(cap[1]))
              : this.renderer.image(href, title, escape(cap[1]));
          };

          /**
           * Smartypants Transformations
           */

          InlineLexer.prototype.smartypants = function (text) {
            if (!this.options.smartypants) return text;
            return text
            // em-dashes
              .replace(/---/g, '\u2014')
              // en-dashes
              .replace(/--/g, '\u2013')
              // opening singles
              .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
              // closing singles & apostrophes
              .replace(/'/g, '\u2019')
              // opening doubles
              .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
              // closing doubles
              .replace(/"/g, '\u201d')
              // ellipses
              .replace(/\.{3}/g, '\u2026');
          };

          /**
           * Mangle Links
           */

          InlineLexer.prototype.mangle = function (text) {
            if (!this.options.mangle) return text;
            var out = '',
              l = text.length,
              i = 0,
              ch;

            for (; i < l; i++) {
              ch = text.charCodeAt(i);
              if (Math.random() > 0.5) {
                ch = 'x' + ch.toString(16);
              }
              out += '&#' + ch + ';';
            }

            return out;
          };

          /**
           * Renderer
           */

          function Renderer(options) {
            this.options = options || marked.defaults;
          }

          Renderer.prototype.code = function (code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
              var out = this.options.highlight(code, lang);
              if (out != null && out !== code) {
                escaped = true;
                code = out;
              }
            }

            if (!lang) {
              return '<pre><code>'
                + (escaped ? code : escape(code, true))
                + '</code></pre>';
            }

            return '<pre><code class="'
              + this.options.langPrefix
              + escape(lang, true)
              + '">'
              + (escaped ? code : escape(code, true))
              + '</code></pre>\n';
          };

          Renderer.prototype.blockquote = function (quote) {
            return '<blockquote>\n' + quote + '</blockquote>\n';
          };

          Renderer.prototype.html = function (html) {
            return html;
          };

          Renderer.prototype.heading = function (text, level, raw, slugger) {
            if (this.options.headerIds) {
              return '<h'
                + level
                + ' id="'
                + this.options.headerPrefix
                + slugger.slug(raw)
                + '">'
                + text
                + '</h'
                + level
                + '>\n';
            }
            // ignore IDs
            return '<h' + level + '>' + text + '</h' + level + '>\n';
          };

          Renderer.prototype.hr = function () {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          };

          Renderer.prototype.list = function (body, ordered, start) {
            var type = ordered ? 'ol' : 'ul',
              startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
            return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
          };

          Renderer.prototype.listitem = function (text) {
            return '<li>' + text + '</li>\n';
          };

          Renderer.prototype.checkbox = function (checked) {
            return '<input '
              + (checked ? 'checked="" ' : '')
              + 'disabled="" type="checkbox"'
              + (this.options.xhtml ? ' /' : '')
              + '> ';
          };

          Renderer.prototype.paragraph = function (text) {
            return '<p>' + text + '</p>\n';
          };

          Renderer.prototype.table = function (header, body) {
            if (body) body = '<tbody>' + body + '</tbody>';

            return '<table>\n'
              + '<thead>\n'
              + header
              + '</thead>\n'
              + body
              + '</table>\n';
          };

          Renderer.prototype.tablerow = function (content) {
            return '<tr>\n' + content + '</tr>\n';
          };

          Renderer.prototype.tablecell = function (content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = flags.align
              ? '<' + type + ' align="' + flags.align + '">'
              : '<' + type + '>';
            return tag + content + '</' + type + '>\n';
          };

// span level renderer
          Renderer.prototype.strong = function (text) {
            return '<strong>' + text + '</strong>';
          };

          Renderer.prototype.em = function (text) {
            return '<em>' + text + '</em>';
          };

          Renderer.prototype.codespan = function (text) {
            return '<code>' + text + '</code>';
          };

          Renderer.prototype.br = function () {
            return this.options.xhtml ? '<br/>' : '<br>';
          };

          Renderer.prototype.del = function (text) {
            return '<del>' + text + '</del>';
          };

          Renderer.prototype.link = function (href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) {
              return text;
            }
            var out = '<a href="' + escape(href) + '"';
            if (title) {
              out += ' title="' + title + '"';
            }
            out += '>' + text + '</a>';
            return out;
          };

          Renderer.prototype.image = function (href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) {
              return text;
            }

            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) {
              out += ' title="' + title + '"';
            }
            out += this.options.xhtml ? '/>' : '>';
            return out;
          };

          Renderer.prototype.text = function (text) {
            return text;
          };

          /**
           * TextRenderer
           * returns only the textual part of the token
           */

          function TextRenderer() {
          }

// no need for block level renderers

          TextRenderer.prototype.strong =
            TextRenderer.prototype.em =
              TextRenderer.prototype.codespan =
                TextRenderer.prototype.del =
                  TextRenderer.prototype.text = function (text) {
                    return text;
                  };

          TextRenderer.prototype.link =
            TextRenderer.prototype.image = function (href, title, text) {
              return '' + text;
            };

          TextRenderer.prototype.br = function () {
            return '';
          };

          /**
           * Parsing & Compiling
           */

          function Parser(options) {
            this.tokens = [];
            this.token = null;
            this.options = options || marked.defaults;
            this.options.renderer = this.options.renderer || new Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.slugger = new Slugger();
          }

          /**
           * Static Parse Method
           */

          Parser.parse = function (src, options) {
            var parser = new Parser(options);
            return parser.parse(src);
          };

          /**
           * Parse Loop
           */

          Parser.prototype.parse = function (src) {
            this.inline = new InlineLexer(src.links, this.options);
            // use an InlineLexer with a TextRenderer to extract pure text
            this.inlineText = new InlineLexer(
              src.links,
              merge({}, this.options, {renderer: new TextRenderer()})
            );
            this.tokens = src.reverse();

            var out = '';
            while (this.next()) {
              out += this.tok();
            }

            return out;
          };

          /**
           * Next Token
           */

          Parser.prototype.next = function () {
            return this.token = this.tokens.pop();
          };

          /**
           * Preview Next Token
           */

          Parser.prototype.peek = function () {
            return this.tokens[this.tokens.length - 1] || 0;
          };

          /**
           * Parse Text Tokens
           */

          Parser.prototype.parseText = function () {
            var body = this.token.text;

            while (this.peek().type === 'text') {
              body += '\n' + this.next().text;
            }

            return this.inline.output(body);
          };

          /**
           * Parse Current Token
           */

          Parser.prototype.tok = function () {
            switch (this.token.type) {
              case 'space': {
                return '';
              }
              case 'hr': {
                return this.renderer.hr();
              }
              case 'heading': {
                return this.renderer.heading(
                  this.inline.output(this.token.text),
                  this.token.depth,
                  unescape(this.inlineText.output(this.token.text)),
                  this.slugger);
              }
              case 'code': {
                return this.renderer.code(this.token.text,
                  this.token.lang,
                  this.token.escaped);
              }
              case 'table': {
                var header = '',
                  body = '',
                  i,
                  row,
                  cell,
                  j;

                // header
                cell = '';
                for (i = 0; i < this.token.header.length; i++) {
                  cell += this.renderer.tablecell(
                    this.inline.output(this.token.header[i]),
                    {header: true, align: this.token.align[i]}
                  );
                }
                header += this.renderer.tablerow(cell);

                for (i = 0; i < this.token.cells.length; i++) {
                  row = this.token.cells[i];

                  cell = '';
                  for (j = 0; j < row.length; j++) {
                    cell += this.renderer.tablecell(
                      this.inline.output(row[j]),
                      {header: false, align: this.token.align[j]}
                    );
                  }

                  body += this.renderer.tablerow(cell);
                }
                return this.renderer.table(header, body);
              }
              case 'blockquote_start': {
                body = '';

                while (this.next().type !== 'blockquote_end') {
                  body += this.tok();
                }

                return this.renderer.blockquote(body);
              }
              case 'list_start': {
                body = '';
                var ordered = this.token.ordered,
                  start = this.token.start;

                while (this.next().type !== 'list_end') {
                  body += this.tok();
                }

                return this.renderer.list(body, ordered, start);
              }
              case 'list_item_start': {
                body = '';
                var loose = this.token.loose;

                if (this.token.task) {
                  body += this.renderer.checkbox(this.token.checked);
                }

                while (this.next().type !== 'list_item_end') {
                  body += !loose && this.token.type === 'text'
                    ? this.parseText()
                    : this.tok();
                }

                return this.renderer.listitem(body);
              }
              case 'html': {
                // TODO parse inline content if parameter markdown=1
                return this.renderer.html(this.token.text);
              }
              case 'paragraph': {
                return this.renderer.paragraph(this.inline.output(this.token.text));
              }
              case 'text': {
                return this.renderer.paragraph(this.parseText());
              }
              default: {
                var errMsg = 'Token with "' + this.token.type + '" type was not found.';
                if (this.options.silent) {
                  console.log(errMsg);
                } else {
                  throw new Error(errMsg);
                }
              }
            }
          };

          /**
           * Slugger generates header id
           */

          function Slugger() {
            this.seen = {};
          }

          /**
           * Convert string to unique id
           */

          Slugger.prototype.slug = function (value) {
            var slug = value
              .toLowerCase()
              .trim()
              .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
              .replace(/\s/g, '-');

            if (this.seen.hasOwnProperty(slug)) {
              var originalSlug = slug;
              do {
                this.seen[originalSlug]++;
                slug = originalSlug + '-' + this.seen[originalSlug];
              } while (this.seen.hasOwnProperty(slug));
            }
            this.seen[slug] = 0;

            return slug;
          };

          /**
           * Helpers
           */

          function escape(html, encode) {
            if (encode) {
              if (escape.escapeTest.test(html)) {
                return html.replace(escape.escapeReplace, function (ch) {
                  return escape.replacements[ch];
                });
              }
            } else {
              if (escape.escapeTestNoEncode.test(html)) {
                return html.replace(escape.escapeReplaceNoEncode, function (ch) {
                  return escape.replacements[ch];
                });
              }
            }

            return html;
          }

          escape.escapeTest = /[&<>"']/;
          escape.escapeReplace = /[&<>"']/g;
          escape.replacements = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
          };

          escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
          escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

          function unescape(html) {
            // explicitly match decimal, hex, and named HTML entities
            return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
              n = n.toLowerCase();
              if (n === 'colon') return ':';
              if (n.charAt(0) === '#') {
                return n.charAt(1) === 'x'
                  ? String.fromCharCode(parseInt(n.substring(2), 16))
                  : String.fromCharCode(+n.substring(1));
              }
              return '';
            });
          }

          function edit(regex, opt) {
            regex = regex.source || regex;
            opt = opt || '';
            return {
              replace: function (name, val) {
                val = val.source || val;
                val = val.replace(/(^|[^\[])\^/g, '$1');
                regex = regex.replace(name, val);
                return this;
              },
              getRegex: function () {
                return new RegExp(regex, opt);
              }
            };
          }

          function cleanUrl(sanitize, base, href) {
            if (sanitize) {
              try {
                var prot = decodeURIComponent(unescape(href))
                  .replace(/[^\w:]/g, '')
                  .toLowerCase();
              } catch (e) {
                return null;
              }
              if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
                return null;
              }
            }
            if (base && !originIndependentUrl.test(href)) {
              href = resolveUrl(base, href);
            }
            try {
              href = encodeURI(href).replace(/%25/g, '%');
            } catch (e) {
              return null;
            }
            return href;
          }

          function resolveUrl(base, href) {
            if (!baseUrls[' ' + base]) {
              // we can ignore everything in base after the last slash of its path component,
              // but we might need to add _that_
              // https://tools.ietf.org/html/rfc3986#section-3
              if (/^[^:]+:\/*[^/]*$/.test(base)) {
                baseUrls[' ' + base] = base + '/';
              } else {
                baseUrls[' ' + base] = rtrim(base, '/', true);
              }
            }
            base = baseUrls[' ' + base];

            if (href.slice(0, 2) === '//') {
              return base.replace(/:[\s\S]*/, ':') + href;
            } else if (href.charAt(0) === '/') {
              return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
            } else {
              return base + href;
            }
          }

          var baseUrls = {};
          var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

          function noop() {
          }

          noop.exec = noop;

          function merge(obj) {
            var i = 1,
              target,
              key;

            for (; i < arguments.length; i++) {
              target = arguments[i];
              for (key in target) {
                if (Object.prototype.hasOwnProperty.call(target, key)) {
                  obj[key] = target[key];
                }
              }
            }

            return obj;
          }

          function splitCells(tableRow, count) {
            // ensure that every cell-delimiting pipe has a space
            // before it to distinguish it from an escaped pipe
            var row = tableRow.replace(/\|/g, function (match, offset, str) {
                var escaped = false,
                  curr = offset;
                while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
                if (escaped) {
                  // odd number of slashes means | is escaped
                  // so we leave it alone
                  return '|';
                } else {
                  // add space before unescaped |
                  return ' |';
                }
              }),
              cells = row.split(/ \|/),
              i = 0;

            if (cells.length > count) {
              cells.splice(count);
            } else {
              while (cells.length < count) cells.push('');
            }

            for (; i < cells.length; i++) {
              // leading or trailing whitespace is ignored per the gfm spec
              cells[i] = cells[i].trim().replace(/\\\|/g, '|');
            }
            return cells;
          }

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
          function rtrim(str, c, invert) {
            if (str.length === 0) {
              return '';
            }

            // Length of suffix matching the invert condition.
            var suffLen = 0;

            // Step left until we fail to match the invert condition.
            while (suffLen < str.length) {
              var currChar = str.charAt(str.length - suffLen - 1);
              if (currChar === c && !invert) {
                suffLen++;
              } else if (currChar !== c && invert) {
                suffLen++;
              } else {
                break;
              }
            }

            return str.substr(0, str.length - suffLen);
          }

          function findClosingBracket(str, b) {
            if (str.indexOf(b[1]) === -1) {
              return -1;
            }
            var level = 0;
            for (var i = 0; i < str.length; i++) {
              if (str[i] === '\\') {
                i++;
              } else if (str[i] === b[0]) {
                level++;
              } else if (str[i] === b[1]) {
                level--;
                if (level < 0) {
                  return i;
                }
              }
            }
            return -1;
          }

          /**
           * Marked
           */

          function marked(src, opt, callback) {
            // throw error in case of non string input
            if (typeof src === 'undefined' || src === null) {
              throw new Error('marked(): input parameter is undefined or null');
            }
            if (typeof src !== 'string') {
              throw new Error('marked(): input parameter is of type '
                + Object.prototype.toString.call(src) + ', string expected');
            }

            if (callback || typeof opt === 'function') {
              if (!callback) {
                callback = opt;
                opt = null;
              }

              opt = merge({}, marked.defaults, opt || {});

              var highlight = opt.highlight,
                tokens,
                pending,
                i = 0;

              try {
                tokens = Lexer.lex(src, opt);
              } catch (e) {
                return callback(e);
              }

              pending = tokens.length;

              var done = function (err) {
                if (err) {
                  opt.highlight = highlight;
                  return callback(err);
                }

                var out;

                try {
                  out = Parser.parse(tokens, opt);
                } catch (e) {
                  err = e;
                }

                opt.highlight = highlight;

                return err
                  ? callback(err)
                  : callback(null, out);
              };

              if (!highlight || highlight.length < 3) {
                return done();
              }

              delete opt.highlight;

              if (!pending) return done();

              for (; i < tokens.length; i++) {
                (function (token) {
                  if (token.type !== 'code') {
                    return --pending || done();
                  }
                  return highlight(token.text, token.lang, function (err, code) {
                    if (err) return done(err);
                    if (code == null || code === token.text) {
                      return --pending || done();
                    }
                    token.text = code;
                    token.escaped = true;
                    --pending || done();
                  });
                })(tokens[i]);
              }

              return;
            }
            try {
              if (opt) opt = merge({}, marked.defaults, opt);
              return Parser.parse(Lexer.lex(src, opt), opt);
            } catch (e) {
              e.message += '\nPlease report this to https://github.com/markedjs/marked.';
              if ((opt || marked.defaults).silent) {
                return '<p>An error occurred:</p><pre>'
                  + escape(e.message + '', true)
                  + '</pre>';
              }
              throw e;
            }
          }

          /**
           * Options
           */

          marked.options =
            marked.setOptions = function (opt) {
              merge(marked.defaults, opt);
              return marked;
            };

          marked.getDefaults = function () {
            return {
              baseUrl: null,
              breaks: false,
              gfm: true,
              headerIds: true,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: true,
              pedantic: false,
              renderer: new Renderer(),
              sanitize: false,
              sanitizer: null,
              silent: false,
              smartLists: false,
              smartypants: false,
              tables: true,
              xhtml: false
            };
          };

          marked.defaults = marked.getDefaults();

          /**
           * Expose
           */

          marked.Parser = Parser;
          marked.parser = Parser.parse;

          marked.Renderer = Renderer;
          marked.TextRenderer = TextRenderer;

          marked.Lexer = Lexer;
          marked.lexer = Lexer.lex;

          marked.InlineLexer = InlineLexer;
          marked.inlineLexer = InlineLexer.output;

          marked.Slugger = Slugger;

          marked.parse = marked;

          if (true) {
            module.exports = marked;
          } else if (typeof define === 'function' && define.amd) {
            define(function () {
              return marked;
            });
          } else {
            root.marked = marked;
          }
        })(this || (typeof window !== 'undefined' ? window : global));

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(17)))

      /***/
    }),
    /* 8 */
    /***/ (function (module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
      var content = __webpack_require__(11);
      if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
      var transform;

      var options = {}
      options.transform = transform
// add the styles to the DOM
      var update = __webpack_require__(15)(content, options);
      if (content.locals) module.exports = content.locals;
// Hot Module Replacement
      if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
          module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./Valine.scss", function () {
            var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./Valine.scss");
            if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
            update(newContent);
          });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function () {
          update();
        });
      }

      /***/
    }),
    /* 9 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * xss
       *
       * @author Zongmin Lei<leizongmin@gmail.com>
       */

      var DEFAULT = __webpack_require__(4);
      var parser = __webpack_require__(5);
      var FilterXSS = __webpack_require__(18);

      /**
       * filter xss function
       *
       * @param {String} html
       * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
       * @return {String}
       */
      function filterXSS(html, options) {
        var xss = new FilterXSS(options);
        return xss.process(html);
      }

      exports = module.exports = filterXSS;
      exports.FilterXSS = FilterXSS;
      for (var i in DEFAULT) exports[i] = DEFAULT[i];
      for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
      if (typeof window !== "undefined") {
        window.filterXSS = module.exports;
      }

// using `xss` on the WebWorker, output `filterXSS` to the globals
      function isWorkerEnv() {
        return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
      }

      if (isWorkerEnv()) {
        self.filterXSS = module.exports;
      }


      /***/
    }),
    /* 10 */
    /***/ (function (module, exports, __webpack_require__) {

      "use strict";


      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      __webpack_require__(8);
      var md = __webpack_require__(7);
      var xss = __webpack_require__(9);
      var crypto = __webpack_require__(6);

      var GRAVATAR_BASE_URL = 'https://gravatar.loli.net/avatar/';
      var DEFAULT_EMAIL_HASH = '9e63c80900d106cbbec5a9f4ea433a3e';

      var defaultComment = {
        ip: '',
        comment: '',
        rid: '',
        at: '',
        nick: '',
        mail: '',
        link: '',
        ua: navigator.userAgent,
        url: location.pathname,
        pin: 0
      };

      var disable_av_init = false;

      var toString = {}.toString;
      var store = localStorage;

      var Valine = function () {
        /**
         * Valine constructor function
         * @param {Object} option
         * @constructor
         */
        function Valine(option) {
          _classCallCheck(this, Valine);

          var _root = this;
          // version
          _root.version = '1.1.8';
          getIp();
          // Valine init
          !!option && _root.init(option);
        }

        /**
         * Valine Init
         * @param {Object} option
         */


        _createClass(Valine, [{
          key: 'init',
          value: function init(option) {
            var _root = this;
            var av = option.av || AV;
            // disable_av_init = option.disable_av_init || false;
            defaultComment['url'] = option.pathname || location.pathname.replace(/\/$/, '');
            try {
              var el = toString.call(option.el) === "[object HTMLDivElement]" ? option.el : document.querySelectorAll(option.el)[0];
              if (toString.call(el) != '[object HTMLDivElement]') {
                throw 'The target element was not found.';
              }
              _root.el = el;
              _root.el.classList.add('valine');
              var placeholder = option.placeholder || '';
              var eleHTML = '<div class="vwrap">\n                                <div class="textarea-wrapper">\n                                    <div class="comment_trigger">\n                                        <div class="avatar"><img class="visitor_avatar" src="' + (GRAVATAR_BASE_URL + DEFAULT_EMAIL_HASH + '?size=80') + '"></div>\n                                        <div class="trigger_title">' + placeholder + '</div>\n                                    </div>\n                                    <div class="veditor-area">\n                                        <textarea placeholder="" class="veditor"></textarea>\n                                        <div class="btn-wrap">\n                                            <div class="vpreview-btn vfunction-btn" title="\u9884\u89C8"><svg t="1551146416896" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2051" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M862.516 161.07l44.62 44.38-286.303 288.866-45.668-45.615L862.516 161.07z m1.233 1.233" p-id="2052"></path><path d="M832.162 959.558H128.025V191.784h512.099v64.169H192.037V895.64h576.112V512.127h64.012v447.431z m0.833 0.533" p-id="2053"></path><path d="M256.05 703.994h384.075v63.919H256.05v-63.919z m0-127.769l320.062-0.069v63.919H256.05v-63.85z m0-128.317h192.037v63.891l-192.037 0.028v-63.919z m0 0" p-id="2054"></path></svg></div>\n                                            <div class="vemoji-btn vfunction-btn" title="\u8868\u60C5"><svg t="1551146424708" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2169" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M513.028 63.766c-247.628 0-448.369 200.319-448.369 447.426S265.4 958.617 513.028 958.617s448.369-200.319 448.369-447.426S760.655 63.766 513.028 63.766z m-0.203 823.563c-207.318 0-375.382-167.71-375.382-374.592s168.064-374.592 375.382-374.592 375.382 167.71 375.382 374.592-168.064 374.592-375.382 374.592z" p-id="2170"></path><path d="M514.029 767.816c-99.337 0-188.031-54.286-251.889-146.146-10.647-16.703-7.1-33.399 7.094-45.93 14.192-12.529 28.384-8.349 39.025 8.349 49.67 75.164 124.174 116.92 205.77 116.92s163.199-45.93 209.316-125.268c10.647-16.703 24.833-16.703 39.025-8.349 14.194 12.524 14.194 29.227 7.094 45.93-60.312 96.035-152.553 154.494-255.435 154.494zM464.292 402.959l-45.151-45.151-0.05 0.05-90.45-90.45-45.15 45.15 90.45 90.45-90.45 90.451 45.15 45.15 90.45-90.45 0.05 0.05 45.151-45.151-0.05-0.05zM556.611 402.959l45.151-45.151 0.05 0.05 90.45-90.45 45.15 45.15-90.45 90.45 90.45 90.451-45.15 45.15-90.45-90.45-0.05 0.05-45.151-45.151 0.05-0.05z" p-id="2171"></path></svg></div>\n                                        </div>\n                                    </div>\n                                    <div class="vextra-area">\n                                        <div class="vsmile-icons" style="display:none"></div>\n                                        <div class="vpreview-text" style="display:none"></div>\n                                    </div>\n                                </div>\n                                <section class="auth-section" style="display:none;">\n                                    <div class="input-wrapper"><input type="text" name="author" class="vnick" placeholder="\u6635\u79F0" value=""></div>\n                                    <div class="input-wrapper"><input type="email" name="email" class="vmail" placeholder="\u90AE\u7BB1" value=""></div>\n                                    <div class="input-wrapper"><input type="text" name="website" class="vlink" placeholder="\u7F51\u7AD9 (\u53EF\u9009)" value=""></div>\n                                    <div class="post-action"><button type="button" class="vsubmit">\u63D0\u4EA4</button></div>\n                                </section>\n                                <div style="display:none;" class="vmark"></div>\n                           </div>\n                           <div class="info">\n                                <div class="col">\u5DF2\u6709 <span class="count">0</span> \u6761\u8BC4\u8BBA</div>\n                                <div class="col power float-right">\n                                    <a href="https://segmentfault.com/markdown" target="_blank"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a>\n                                </div>\n                           </div>\n                           <div class="vsubmitting" style="display:none;"></div>\n                           <ul class="vlist"><li class="vempty"></li></ul>\n                           <div class="vloading"></div>\n                           <div class="vpage txt-center"></div>';
              _root.el.innerHTML = eleHTML;
              // Empty Data
              var vempty = _root.el.querySelector('.vempty');
              _root.nodata = {
                show: function show(txt) {
                  vempty.innerHTML = txt || '\u8FD8\u6CA1\u6709\u8BC4\u8BBA\u54E6\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1\u5427!';
                  vempty.setAttribute('style', 'display:block;');
                },
                hide: function hide() {
                  vempty.setAttribute('style', 'display:none;');
                }
              };
              _root.nodata.show();

              // load smiles image
              var _smile_wrapper = _root.el.querySelector('.vsmile-icons');
              var smile_names = option.emoticon_list || [];
              for (var i in smile_names) {
                var img = document.createElement('img');
                img.setAttribute('src', option.emoticon_url + '/' + smile_names[i]);
                _smile_wrapper.appendChild(img);
              }
              if (!disable_av_init) {
                av.init({
                  appId: option.app_id || option.appId,
                  appKey: option.app_key || option.appKey
                });
                disable_av_init = true;
              }
              _root.v = av;
            } catch (ex) {
              var issue = 'https://github.com/xjianr/xjianr.github.io/issues';
              if (_root.el) _root.nodata.show('<pre style="color:red;text-align:left;">' + ex + '<br>Valine:<b>' + _root.version + '</b><br>\u53CD\u9988\uFF1A' + issue + '</pre>'); else console && console.log('%c' + ex + '\n%cValine%c' + _root.version + ' ' + issue, 'color:red;', 'background:#000;padding:5px;line-height:30px;color:#fff;', 'background:#456;line-height:30px;padding:5px;color:#fff;');
              return;
            }

            // loading
            var _spinner = '<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>';
            var vloading = _root.el.querySelector('.vloading');
            vloading.innerHTML = _spinner;
            // loading control
            _root.loading = {
              show: function show() {
                vloading.setAttribute('style', 'display:block;');
                _root.nodata.hide();
              },
              hide: function hide() {
                vloading.setAttribute('style', 'display:none;');
                _root.el.querySelectorAll('.vcard').length === 0 && _root.nodata.show();
              }
            };

            var vsubmitting = _root.el.querySelector('.vsubmitting');
            vsubmitting.innerHTML = _spinner;
            _root.submitting = {
              show: function show() {
                vsubmitting.setAttribute('style', 'display:block;');
              },
              hide: function hide() {
                vsubmitting.setAttribute('style', 'display:none;');
                _root.nodata.hide();
              }
            };

            var _mark = _root.el.querySelector('.vmark');
            // alert
            _root.alert = {
              /**
               * {
               *  type:0/1,
               *  text:'',
               *  ctxt:'',
               *  otxt:'',
               *  cb:fn
               * }
               *
               * @param {Object} o
               */
              show: function show(o) {
                _mark.innerHTML = '<div class="valert txt-center"><div class="vtext">' + o.text + '</div><div class="vbtns"></div></div>';
                var _vbtns = _mark.querySelector('.vbtns');
                var _cBtn = '<button class="vcancel vbtn">' + (o && o.ctxt || '我再看看') + '</button>';
                var _oBtn = '<button class="vsure vbtn">' + (o && o.otxt || '继续提交') + '</button>';
                _vbtns.innerHTML = '' + _cBtn + (o.type && _oBtn);
                _mark.querySelector('.vcancel').addEventListener('click', function (e) {
                  _root.alert.hide();
                });
                _mark.setAttribute('style', 'display:block;');
                if (o && o.type) {
                  var _ok = _mark.querySelector('.vsure');
                  Event.on('click', _ok, function (e) {
                    _root.alert.hide();
                    o.cb && o.cb();
                  });
                }
              },
              hide: function hide() {
                _mark.setAttribute('style', 'display:none;');
              }
            };

            _root.loading.show();
            var query1 = new _root.v.Query('Comment');
            query1.equalTo('url', defaultComment['url']);
            var query2 = new _root.v.Query('Comment');
            query2.equalTo('url', defaultComment['url'] + '/');
            var query = AV.Query.or(query1, query2);
            query.count().then(function (count) {
              _root.el.querySelector('.count').innerHTML = '' + count;
              _root.bind(option);
            }, function (error) {
              console.log(error);
            });
          }

          /**
           * Bind Event
           */

        }, {
          key: 'bind',
          value: function bind(option) {
            var _root = this;
            // Smile pictures
            var vsmiles = _root.el.querySelector('.vsmile-icons');
            Event.on('click', vsmiles, function (e) {
              var textField = _root.el.querySelector('.veditor');
              var imgSrc = e.target.src;
              if (typeof imgSrc == 'undefined') return;
              // var tag = " ![](/" + imgSrc.replace(/^.*\/(.*\.gif)$/, '$1') + ") ";
              var tag = "!(:" + decodeURI(imgSrc).replace(/^.*\/(.*)$/, '$1') + ":)";
              if (document.selection) {
                textField.focus();
                sel = document.selection.createRange();
                sel.text = tag;
                textField.focus();
              } else if (textField.selectionStart || textField.selectionStart == '0') {
                var startPos = textField.selectionStart;
                var endPos = textField.selectionEnd;
                var cursorPos = endPos;
                textField.value = textField.value.substring(0, startPos) + tag + textField.value.substring(endPos, textField.value.length);
                cursorPos += tag.length;
                textField.focus();
                textField.selectionStart = cursorPos;
                textField.selectionEnd = cursorPos;
              } else {
                textField.value += tag;
                textField.focus();
              }
              defaultComment["comment"] = textField.value;
              var submitBtn = _root.el.querySelector('.vsubmit');
              if (submitBtn.getAttribute('disabled')) submitBtn.removeAttribute('disabled');
            });
            var comment_trigger = _root.el.querySelector('.comment_trigger');
            Event.on('click', comment_trigger, function (e) {
              comment_trigger.setAttribute('style', 'display:none');
              _root.el.querySelector('.auth-section').removeAttribute('style');
              _root.el.querySelector('.veditor').focus();
            });

            // Query && show comment list

            var expandEvt = function expandEvt(el) {
              if (el.offsetHeight > 180) {
                el.classList.add('expand');
                Event.on('click', el, function (e) {
                  el.setAttribute('class', 'vcomment');
                });
              }
            };

            var commonQuery = function commonQuery() {
              var query1 = new _root.v.Query('Comment');
              query1.equalTo('url', defaultComment['url']);
              var query2 = new _root.v.Query('Comment');
              query2.equalTo('url', defaultComment['url'] + '/');
              var query = AV.Query.or(query1, query2);
              query.notEqualTo('isSpam', true);
              query.select(['nick', 'comment', 'link', 'rid', 'emailHash']);
              query.addDescending('createdAt');
              return query;
            };

            var num = 1;
            var query = function query() {
              var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

              _root.loading.show();
              var size = 10;
              var count = Number(_root.el.querySelector('.count').innerText);
              var cq = commonQuery();
              cq.limit(size);
              cq.skip((n - 1) * size);
              cq.find().then(function (rets) {
                var len = rets.length;
                if (len) {
                  // _root.el.querySelector('.vlist').innerHTML = '';
                  for (var i = 0; i < len; i++) {
                    insertComment(rets[i], false);
                  }
                  var _vpage = _root.el.querySelector('.vpage');
                  _vpage.innerHTML = size * n < count ? '<div id="vmore" class="more">\u52A0\u8F7D\u66F4\u591A\u8BC4\u8BBA\uFF08\u5269\u4F59' + (count - size * n) + '/' + count + '\u6761\uFF09</div>' : '';
                  var _vmore = _vpage.querySelector('#vmore');
                  if (_vmore) {
                    Event.on('click', _vmore, function (e) {
                      _vpage.innerHTML = '';
                      query(++num);
                    });
                  }
                }
                _root.loading.hide();
              }).catch(function (ex) {
                console.log(ex);
                _root.loading.hide();
              });
            };
            query();

            var insertComment = function insertComment(ret) {
              var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              var _vcard = document.createElement('li');
              _vcard.setAttribute('class', 'vcard');
              _vcard.setAttribute('id', ret.id);
              var emailHash = ret.get('emailHash');
              var gravatar_url = GRAVATAR_BASE_URL + emailHash + '?size=80&d=https%3a%2f%2fgravatar.loli.net%2favatar%2f9e63c80900d106cbbec5a9f4ea433a3e.jpg%3fsize%3d80';
              // language=HTML
              _vcard.innerHTML = '<div class="vhead" >\n                                    <img class="vavatar" src="' + gravatar_url + '"/>\n                                    <a rid=\'' + ret.id + '\' at=\'@' + ret.get('nick') + '\' class="vat">\u56DE\u590D</a>\n                                    <div class="vmeta-info"> <div>\n                                    ' + (ret.get('link') ? '<a class="vname" href="' + ret.get('link') + '" target="_blank" rel="nofollow" > ' + ret.get("nick") + '</a>' : '<span class="vname">' + ret.get("nick") + '</span>') + '\n                                    </div><div class="vtime">' + timeAgo(ret.createdAt) + '</div>\n                                    </div>\n                                </div>\n                                <section class="text-wrapper">\n                                    <div class="vcomment">' + ret.get('comment') + '</div>\n                                </section>\n                                        ';
              var _vlist = _root.el.querySelector('.vlist');
              var _vlis = _vlist.querySelectorAll('li');
              var _vat = _vcard.querySelector('.vat');
              var _as = _vcard.querySelectorAll('a');
              for (var i = 0, len = _as.length; i < len; i++) {
                var item = _as[i];
                if (item && item.getAttribute('class') != 'at') {
                  item.setAttribute('target', '_blank');
                  item.setAttribute('rel', 'nofollow');
                }
              }
              if (!top) _vlist.appendChild(_vcard); else _vlist.insertBefore(_vcard, _vlis[0]);
              var _vcontent = _vcard.querySelector('.vcomment');
              expandEvt(_vcontent);
              bindAtEvt(_vat);
            };

            var mapping = {
              veditor: "comment",
              vnick: "nick",
              vlink: "link",
              vmail: 'mail'
            };
            var inputs = {};
            for (var i in mapping) {
              if (mapping.hasOwnProperty(i)) {
                (function () {
                  var _v = mapping[i];
                  var _el = _root.el.querySelector('.' + i);
                  inputs[_v] = _el;
                  Event.on('input', _el, function (e) {
                    // defaultComment[_v] = HtmlUtil.encode(_el.value.replace(/(^\s*)|(\s*$)/g, ""));
                    defaultComment[_v] = _el.value;
                  });
                })();
              }
            }

            // cache
            var getCache = function getCache() {
              var s = store && store.getItem('ValineCache');
              if (!!s) {
                s = JSON.parse(s);
                var m = ['nick', 'link', 'mail'];
                for (var _i in m) {
                  var k = m[_i];
                  _root.el.querySelector('.v' + k).value = s[k];
                  defaultComment[k] = s[k];
                }
                if (s['mail'] != '') {
                  var el = _root.el.querySelector('.visitor_avatar');
                  el.setAttribute('src', GRAVATAR_BASE_URL + crypto(s['mail'].toLowerCase().trim()) + '?size=80&d=https%3a%2f%2fgravatar.loli.net%2favatar%2f9e63c80900d106cbbec5a9f4ea433a3e.jpg%3fsize%3d80');
                }
              }
            };
            getCache();

            // reset form
            _root.reset = function () {
              for (var _i2 in mapping) {
                if (mapping.hasOwnProperty(_i2)) {
                  var _v = mapping[_i2];
                  var _el = _root.el.querySelector('.' + _i2);
                  _el.value = "";
                  defaultComment[_v] = "";
                }
              }
              defaultComment['rid'] = '';
              defaultComment['nick'] = '';
              getCache();
              if (smile_icons.getAttribute('triggered')) {
                smile_icons.setAttribute('style', 'display:none;');
                smile_icons.removeAttribute('triggered');
              }
              if (preview_text.getAttribute('triggered')) {
                preview_text.setAttribute('style', 'display:none;');
                preview_text.removeAttribute('triggered');
              }
            };

            // submit
            var submitBtn = _root.el.querySelector('.vsubmit');
            var submitEvt = function submitEvt(e) {
              if (submitBtn.getAttribute('disabled')) {
                _root.alert.show({
                  type: 0,
                  text: '再等等，评论正在提交中ヾ(๑╹◡╹)ﾉ"',
                  ctxt: '好的'
                });
                return;
              }
              if (defaultComment.comment == '') {
                inputs['comment'].focus();
                return;
              }
              if (defaultComment.nick == '') {
                // inputs['nick'].focus();
                // return;
                defaultComment['nick'] = '神秘游客';
              }
              // render markdown
              defaultComment.comment = xss(md(defaultComment.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + option.emoticon_url + '/$1" alt="$1" class="vemoticon-img">')), {
                onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value, isWhiteAttr) {
                  if (name === 'class') {
                    return name + '="' + xss.escapeAttrValue(value) + '"';
                  }
                }
              });
              var idx = defaultComment.comment.indexOf(defaultComment.at);
              if (idx > -1 && defaultComment.at != '') {
                var at = '<a class="at" href=\'#' + defaultComment.rid + '\'>' + defaultComment.at + '</a>';
                defaultComment.comment = defaultComment.comment.replace(defaultComment.at, at);
              }
              // veirfy
              var mailRet = check.mail(defaultComment.mail);
              var linkRet = check.link(defaultComment.link);
              defaultComment['mail'] = mailRet.k ? mailRet.v : '';
              defaultComment['link'] = linkRet.k ? linkRet.v : '';

              if (!mailRet.k && !linkRet.k) {
                _root.alert.show({
                  type: 0,
                  text: '您的网址和邮箱格式不正确，请修正后提交！留下您的邮箱可收到回复提醒~'
                });
              } else if (!mailRet.k) {
                _root.alert.show({
                  type: 1,
                  text: '留下您的邮箱地址,可以收到回复提醒~',
                  cb: function () {
                    commitEvt()
                  }
                });
              } else if (!linkRet.k) {
                _root.alert.show({
                  type: 0,
                  text: '您的网址格式不正确，请修正后提交！'
                });
              } else {
                commitEvt();
              }
            };

            var smile_btn = _root.el.querySelector('.vemoji-btn');
            var smile_icons = _root.el.querySelector('.vsmile-icons');
            Event.on('click', smile_btn, function (e) {
              if (preview_text.getAttribute('triggered')) {
                preview_text.setAttribute('style', 'display:none;');
                preview_text.removeAttribute('triggered');
              }
              if (smile_icons.getAttribute('triggered')) {
                smile_icons.setAttribute('style', 'display:none;');
                smile_icons.removeAttribute('triggered');
              } else {
                smile_icons.removeAttribute('style');
                smile_icons.setAttribute('triggered', 1);
              }
            });

            var preview_btn = _root.el.querySelector('.vpreview-btn');
            var preview_text = _root.el.querySelector('.vpreview-text');
            Event.on('click', preview_btn, function (e) {
              if (smile_icons.getAttribute('triggered')) {
                smile_icons.setAttribute('style', 'display:none;');
                smile_icons.removeAttribute('triggered');
              }
              if (preview_text.getAttribute('triggered')) {
                preview_text.setAttribute('style', 'display:none;');
                preview_text.removeAttribute('triggered');
              } else {
                if (defaultComment.comment == '') {
                  inputs['comment'].focus();
                  return;
                }
                // render markdown
                preview_text.innerHTML = xss(md(defaultComment.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + option.emoticon_url + '/$1" alt="$1" class="vemoticon-img">')), {
                  onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value, isWhiteAttr) {
                    if (name === 'class') {
                      return name + '="' + xss.escapeAttrValue(value) + '"';
                    }
                  }
                });
                preview_text.removeAttribute('style');
                preview_text.setAttribute('triggered', 1);
              }
            });

            // setting access
            var getAcl = function getAcl() {
              var acl = new _root.v.ACL();
              acl.setPublicReadAccess(true);
              acl.setPublicWriteAccess(false);
              return acl;
            };

            var commitEvt = function commitEvt() {
              submitBtn.setAttribute('disabled', true);
              _root.submitting.show();
              // 声明类型
              var Ct = _root.v.Object.extend('Comment');
              // 新建对象
              var comment = new Ct();
              for (var _i3 in defaultComment) {
                if (defaultComment.hasOwnProperty(_i3)) {
                  if (_i3 === 'at') continue;
                  var _v = defaultComment[_i3];
                  comment.set(_i3, _v);
                }
              }
              comment.set('emailHash', crypto(defaultComment.mail.toLowerCase().trim()));
              comment.setACL(getAcl());
              comment.save().then(function (commentItem) {
                store && store.setItem('ValineCache', JSON.stringify({
                  nick: defaultComment['nick'],
                  link: defaultComment['link'],
                  mail: defaultComment['mail']
                }));
                var _count = _root.el.querySelector('.count');
                _count.innerText = Number(_count.innerText) + 1;
                insertComment(commentItem, true);
                submitBtn.removeAttribute('disabled');
                _root.submitting.hide();
                _root.nodata.hide();
                _root.reset();
              }).catch(function (ex) {
                _root.submitting.hide();
              });
            };

            // at event
            var bindAtEvt = function bindAtEvt(el) {
              Event.on('click', el, function (e) {
                var at = el.getAttribute('at');
                var rid = el.getAttribute('rid');
                defaultComment['rid'] = rid;
                defaultComment['at'] = at;
                inputs['comment'].value = at + ' \uFF0C' + inputs['comment'].value;
                inputs['comment'].focus();
                // remove comment trigger
                _root.el.querySelector('.comment_trigger').setAttribute('style', 'display:none');
                _root.el.querySelector('.auth-section').removeAttribute('style');
                _root.el.querySelector('.veditor').focus();
              });
            };

            Event.off('click', submitBtn, submitEvt);
            Event.on('click', submitBtn, submitEvt);
          }
        }]);

        return Valine;
      }();

      var Event = {
        on: function on(type, el, handler, capture) {
          if (el.addEventListener) el.addEventListener(type, handler, capture || false); else if (el.attachEvent) el.attachEvent('on' + type, handler); else el['on' + type] = handler;
        },
        off: function off(type, el, handler, capture) {
          if (el.removeEventListener) el.removeEventListener(type, handler, capture || false); else if (el.detachEvent) el.detachEvent('on' + type, handler); else el['on' + type] = null;
        }
      };

      var check = {
        mail: function mail(m) {
          return {
            k: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(m),
            v: m
          };
        },
        link: function link(l) {
          if (l.length > 0) {
            l = /^(http|https)/.test(l) ? l : 'http://' + l;
          }
          return {
            k: l.length > 0 ? /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(l) : true,
            v: l
          };
        }
      };

      var HtmlUtil = {

        // /**
        //  *
        //  * 将str中的链接转换成a标签形式
        //  * @param {String} str
        //  * @returns
        //  */
        // transUrl(str) {
        //     let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        //     return str.replace(reg, '<a target="_blank" href="$1$2">$1$2</a>');
        // },
        /**
         * HTML转码
         * @param {String} str
         * @return {String} result
         */
        encode: function encode(str) {
          return !!str ? str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : '';
        },

        /**
         * HTML解码
         * @param {String} str
         * @return {String} result
         */
        decode: function decode(str) {
          return !!str ? str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "\'").replace(/&quot;/g, "\"") : '';
        }
      };

      var dateFormat = function dateFormat(date) {
        var vDay = padWithZeros(date.getDate(), 2);
        var vMonth = padWithZeros(date.getMonth() + 1, 2);
        var vYear = padWithZeros(date.getFullYear(), 2);
        // var vHour = padWithZeros(date.getHours(), 2);
        // var vMinute = padWithZeros(date.getMinutes(), 2);
        // var vSecond = padWithZeros(date.getSeconds(), 2);
        return vYear + '-' + vMonth + '-' + vDay;
        // return `${vYear}-${vMonth}-${vDay} ${vHour}:${vMinute}:${vSecond}`;
      };

      var timeAgo = function timeAgo(date) {
        try {
          var oldTime = date.getTime();
          var currTime = new Date().getTime();
          var diffValue = currTime - oldTime;

          var days = Math.floor(diffValue / (24 * 3600 * 1000));
          if (days === 0) {
            //计算相差小时数
            var leave1 = diffValue % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000));
            if (hours === 0) {
              //计算相差分钟数
              var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
              var minutes = Math.floor(leave2 / (60 * 1000));
              if (minutes === 0) {
                //计算相差秒数
                var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
                var seconds = Math.round(leave3 / 1000);
                return seconds + ' 秒前';
              }
              return minutes + ' 分钟前';
            }
            return hours + ' 小时前';
          }
          if (days < 0) return '刚刚'; else if (days < 30) return days + ' 天前'; else if (days < 365) return Math.floor(days / 30) + ' 月前'; else return Math.floor(days / 365) + ' 年前';
          return dateFormat(date);
        } catch (error) {
          console.log(error);
        }
      };

      var padWithZeros = function padWithZeros(vNumber, width) {
        var numAsString = vNumber.toString();
        while (numAsString.length < width) {
          numAsString = '0' + numAsString;
        }
        return numAsString;
      };

      var loadJS = function loadJS(url, success) {
        var domScript = document.createElement('script');
        domScript.src = url;
        success = success || function () {
        };
        domScript.onload = domScript.onreadystatechange = function () {
          if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
            success();
            this.onload = this.onreadystatechange = null;
            // this.parentNode.removeChild(this);
          }
        };
        document.getElementsByTagName('head')[0].appendChild(domScript);
      };

      var getIp = function getIp() {
        $.getJSON("https://api.ipify.org/?format=json", function (json) {
          defaultComment['ip'] = json.ip;
        });
      };

      module.exports = Valine;

      /***/
    }),
    /* 11 */
    /***/ (function (module, exports, __webpack_require__) {

      exports = module.exports = __webpack_require__(12)(false);
// imports


// module
      exports.push([module.i, "@charset \"UTF-8\";\n.valine {\n  /************ Loading ************/ }\n  .valine * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #3c484e;\n    margin: initial;\n    padding: initial; }\n  .valine .vemoticon-img {\n    display: inline-block;\n    max-height: 48px;\n    margin: 0 2px; }\n  .valine .vwrap {\n    overflow: hidden;\n    position: relative;\n    border: 1px solid #ededed; }\n    .valine .vwrap .veditor-area {\n      position: inherit; }\n    .valine .vwrap .btn-wrap {\n      position: absolute !important;\n      right: 1.5em;\n      bottom: 0; }\n      .valine .vwrap .btn-wrap .vfunction-btn {\n        display: inline-block; }\n        .valine .vwrap .btn-wrap .vfunction-btn svg {\n          fill: #bbb;\n          cursor: pointer; }\n          .valine .vwrap .btn-wrap .vfunction-btn svg:hover {\n            fill: #777777; }\n          .valine .vwrap .btn-wrap .vfunction-btn svg:active {\n            fill: #777777; }\n    .valine .vwrap .vextra-area {\n      margin: .4em 0 .4em .5em; }\n      .valine .vwrap .vextra-area .vsmile-icons {\n        padding: .2em 0;\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        margin: .3em 0;\n        overflow: auto; }\n        .valine .vwrap .vextra-area .vsmile-icons img {\n          display: inline-block;\n          width: auto !important;\n          height: 48px !important;\n          margin-right: 4px;\n          cursor: pointer; }\n      .valine .vwrap .vextra-area .vpreview-text {\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        padding: .5em .5em;\n        margin: .3em 0;\n        max-height: 10em;\n        overflow: auto; }\n    .valine .vwrap .textarea-wrapper {\n      color: #4b5b62;\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      position: relative;\n      border-radius: 0; }\n      .valine .vwrap .textarea-wrapper .comment_trigger {\n        position: absolute;\n        z-index: 9;\n        width: 100%;\n        height: 100%;\n        background-color: #fff;\n        padding: 0 0 0 1.5em; }\n        .valine .vwrap .textarea-wrapper .comment_trigger .avatar {\n          position: absolute;\n          width: 36px;\n          height: 36px;\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n          .valine .vwrap .textarea-wrapper .comment_trigger .avatar img {\n            border-radius: 100%;\n            width: 36px;\n            height: 36px; }\n        .valine .vwrap .textarea-wrapper .comment_trigger .trigger_title {\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: #aaa;\n          font-size: 1.4em;\n          margin-left: 3.5em; }\n      .valine .vwrap .textarea-wrapper textarea {\n        padding: 1em 1em 0;\n        color: #4b5b62;\n        width: 100%;\n        background: #fff;\n        border: none;\n        resize: none;\n        min-height: 6em;\n        margin: 0; }\n        .valine .vwrap .textarea-wrapper textarea:focus {\n          border-color: #c4c8cb;\n          outline: 0; }\n    .valine .vwrap .trigger-section {\n      display: none; }\n    .valine .vwrap .auth-section {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox;\n      background: #fbfbfb;\n      padding: .3em .6em; }\n      .valine .vwrap .auth-section .input-wrapper {\n        -ms-flex: 1 1 27%;\n        -webkit-box-flex: 1;\n                flex: 1 1 27%;\n        width: 27%; }\n        .valine .vwrap .auth-section .input-wrapper input {\n          color: #4b5b62;\n          background: #fafafa;\n          border: none;\n          border-radius: 0;\n          padding: .6em;\n          margin: 0;\n          line-height: 2;\n          font-size: 1em !important; }\n          .valine .vwrap .auth-section .input-wrapper input:focus {\n            border-color: #c4c8cb;\n            outline: 0; }\n      .valine .vwrap .auth-section input {\n        width: 100%; }\n      .valine .vwrap .auth-section .post-action {\n        -ms-flex: 1 1 19%;\n        -webkit-box-flex: 1;\n                flex: 1 1 19%;\n        width: 19%;\n        margin: 0;\n        padding: 2px 0 0; }\n        .valine .vwrap .auth-section .post-action button {\n          color: #fff;\n          width: 100%;\n          line-height: 2;\n          font-weight: bolder;\n          border-radius: 30px;\n          border: 1px solid #e9eff3;\n          background-color: #111;\n          padding: .4em .5em;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          font-size: 1em !important; }\n        .valine .vwrap .auth-section .post-action button:hover {\n          background-color: #444; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .auth-section {\n          display: block; }\n          .valine .vwrap .auth-section .input-wrapper, .valine .vwrap .auth-section .post-action {\n            -ms-flex: 1 1 100%;\n            -webkit-box-flex: 1;\n                    flex: 1 1 100%;\n            padding-right: 0;\n            width: 100%; } }\n    .valine .vwrap .vmark {\n      position: absolute;\n      background: rgba(0, 0, 0, 0.65);\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0; }\n      .valine .vwrap .vmark .valert {\n        padding: 2em 0 0 0; }\n        .valine .vwrap .vmark .valert .vtext {\n          color: #fff;\n          padding: 15px; }\n        .valine .vwrap .vmark .valert .vcode {\n          width: 75px;\n          border-radius: 5px;\n          background: #dedede; }\n          .valine .vwrap .vmark .valert .vcode:focus {\n            border-color: #3090e4;\n            background-color: #fff; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .vmark .valert {\n          padding: 8em 0; }\n          .valine .vwrap .vmark .valert .vtext {\n            color: #fff;\n            padding: 10px; } }\n  .valine .info {\n    padding: 5px;\n    margin: .5em 0; }\n    .valine .info .col {\n      display: inline-block;\n      vertical-align: middle; }\n    .valine .info svg {\n      margin-right: 2px;\n      overflow: hidden;\n      fill: currentColor; }\n  .valine .power {\n    color: #999;\n    font-size: 0.625em !important;\n    position: relative; }\n  .valine a {\n    text-decoration: none;\n    color: #3eb0ef;\n    border: none; }\n  .valine .txt-center {\n    text-align: center; }\n  .valine .float-right {\n    float: right !important; }\n  .valine .pd5 {\n    padding: 5px; }\n  .valine .pd10 {\n    padding: 10px; }\n  .valine .vbtn {\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: 1px solid #e9eff3;\n    background-color: #333;\n    border-radius: .1em;\n    color: #fff;\n    padding: .5em 1.5em;\n    cursor: pointer;\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none;\n    min-width: 60px;\n    max-width: 100%;\n    margin: 0 1em; }\n  .valine .vbtn:active,\n  .valine .vbtn:hover {\n    border-color: #666; }\n  .valine .vpage {\n    margin: 1.5em 0; }\n    .valine .vpage .more {\n      width: 100%;\n      height: 2.5em;\n      line-height: 2.5em;\n      text-align: center;\n      cursor: pointer;\n      color: #666;\n      background: #fafafa;\n      border-radius: 1.25em; }\n  .valine .vlist {\n    width: 100%;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .valine .vlist .vcard {\n      padding: 2em 1.5em 2em;\n      border: 1px solid rgba(150, 150, 150, 0.18);\n      margin: 2em 0 0;\n      list-style: none;\n      border-radius: 5px;\n      word-break: break-all; }\n      .valine .vlist .vcard:hover {\n        border: 1px solid rgba(150, 150, 150, 0.25); }\n      .valine .vlist .vcard:hover .vat {\n        background: #400 !important; }\n      .valine .vlist .vcard .vat {\n        margin: -2.1em 0 0;\n        float: right;\n        background: transparent;\n        color: #ffffff;\n        padding: .2em 1em;\n        line-height: 1.2;\n        cursor: pointer;\n        word-break: keep-all;\n        white-space: nowrap;\n        text-transform: uppercase; }\n      .valine .vlist .vcard .vavatar {\n        margin-right: 1em;\n        margin-top: 0.1em;\n        display: inline-block;\n        display: inline-block;\n        height: 36px;\n        width: 36px;\n        position: absolute;\n        top: 0;\n        border-radius: 50%; }\n      .valine .vlist .vcard .vhead {\n        line-height: 1;\n        display: block;\n        margin-bottom: 1em;\n        position: relative; }\n        .valine .vlist .vcard .vhead .vmeta-info {\n          margin: 0 0 0 48px; }\n        .valine .vlist .vcard .vhead .vname {\n          font-weight: bolder;\n          font-size: 1em;\n          color: rgba(0, 0, 0, 0.7); }\n        .valine .vlist .vcard .vhead .spacer {\n          color: #ccc;\n          margin-left: 0.3em;\n          margin-right: 0.3em; }\n        .valine .vlist .vcard .vhead .vtime {\n          color: #a9a4a4;\n          display: inline-block;\n          font-weight: normal;\n          font-size: 90%; }\n      .valine .vlist .vcard .text-wrapper {\n        overflow: hidden;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 100%; }\n        .valine .vlist .vcard .text-wrapper .vcomment {\n          position: relative;\n          padding: .2em;\n          overflow: auto; }\n          .valine .vlist .vcard .text-wrapper .vcomment blockquote p {\n            padding-left: 12px; }\n          .valine .vlist .vcard .text-wrapper .vcomment p {\n            word-wrap: break-word;\n            white-space: pre-wrap;\n            word-break: break-all;\n            text-align: justify;\n            line-height: 1.8; }\n          .valine .vlist .vcard .text-wrapper .vcomment pre {\n            overflow: auto;\n            padding: 6px 10px;\n            word-wrap: break-word;\n            color: #555;\n            background: #f5f2f2;\n            border-radius: 3px;\n            font-size: .875rem;\n            margin: 5px 0; }\n          .valine .vlist .vcard .text-wrapper .vcomment.expand {\n            cursor: pointer;\n            max-height: 11.25rem;\n            overflow: hidden; }\n            .valine .vlist .vcard .text-wrapper .vcomment.expand:before {\n              display: block;\n              content: \"\";\n              position: absolute;\n              width: 100%;\n              left: 0;\n              top: 0;\n              bottom: 3.15rem;\n              pointer-events: none;\n              background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.8)));\n              background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)); }\n            .valine .vlist .vcard .text-wrapper .vcomment.expand:after {\n              display: block;\n              content: \"\\5C55\\5F00         \";\n              text-align: center;\n              color: #828586;\n              position: absolute;\n              width: 100%;\n              height: 3.15rem;\n              line-height: 3.15rem;\n              left: 0;\n              bottom: 0;\n              pointer-events: none;\n              background: rgba(255, 255, 255, 0.9); }\n    .valine .vlist .vempty {\n      padding: 20px;\n      text-align: center;\n      color: #999; }\n  .valine .spinner {\n    margin: 10px auto;\n    width: 50px;\n    height: 30px;\n    text-align: center;\n    font-size: 10px; }\n  .valine .spinner > div {\n    background-color: #9c9c9c;\n    height: 100%;\n    width: 6px;\n    margin-right: 3px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .valine .spinner .r2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .valine .spinner .r3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  .valine .spinner .r4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .valine .spinner .r5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


      /***/
    }),
    /* 12 */
    /***/ (function (module, exports) {

      /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return "@media " + item[2] + "{" + content + "}";
            } else {
              return content;
            }
          }).join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
          if (typeof modules === "string")
            modules = [[null, modules, ""]];
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number")
              alreadyImportedModules[id] = true;
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
              }
              list.push(item);
            }
          }
        };
        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
          });

          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      }

// Adapted from convert-source-map (MIT)
      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

        return '/*# ' + data + ' */';
      }


      /***/
    }),
    /* 13 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * cssfilter
       *
       * @author 老雷<leizongmin@gmail.com>
       */

      var DEFAULT = __webpack_require__(2);
      var parseStyle = __webpack_require__(14);
      var _ = __webpack_require__(3);


      /**
       * 返回值是否为空
       *
       * @param {Object} obj
       * @return {Boolean}
       */
      function isNull(obj) {
        return (obj === undefined || obj === null);
      }

      /**
       * 浅拷贝对象
       *
       * @param {Object} obj
       * @return {Object}
       */
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }

      /**
       * 创建CSS过滤器
       *
       * @param {Object} options
       *   - {Object} whiteList
       *   - {Function} onAttr
       *   - {Function} onIgnoreAttr
       *   - {Function} safeAttrValue
       */
      function FilterCSS(options) {
        options = shallowCopyObject(options || {});
        options.whiteList = options.whiteList || DEFAULT.whiteList;
        options.onAttr = options.onAttr || DEFAULT.onAttr;
        options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        this.options = options;
      }

      FilterCSS.prototype.process = function (css) {
        // 兼容各种奇葩输入
        css = css || '';
        css = css.toString();
        if (!css) return '';

        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onAttr = options.onAttr;
        var onIgnoreAttr = options.onIgnoreAttr;
        var safeAttrValue = options.safeAttrValue;

        var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

          var check = whiteList[name];
          var isWhite = false;
          if (check === true) isWhite = check;
          else if (typeof check === 'function') isWhite = check(value);
          else if (check instanceof RegExp) isWhite = check.test(value);
          if (isWhite !== true) isWhite = false;

          // 如果过滤后 value 为空则直接忽略
          value = safeAttrValue(name, value);
          if (!value) return;

          var opts = {
            position: position,
            sourcePosition: sourcePosition,
            source: source,
            isWhite: isWhite
          };

          if (isWhite) {

            var ret = onAttr(name, value, opts);
            if (isNull(ret)) {
              return name + ':' + value;
            } else {
              return ret;
            }

          } else {

            var ret = onIgnoreAttr(name, value, opts);
            if (!isNull(ret)) {
              return ret;
            }

          }
        });

        return retCSS;
      };


      module.exports = FilterCSS;


      /***/
    }),
    /* 14 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * cssfilter
       *
       * @author 老雷<leizongmin@gmail.com>
       */

      var _ = __webpack_require__(3);


      /**
       * 解析style
       *
       * @param {String} css
       * @param {Function} onAttr 处理属性的函数
       *   参数格式： function (sourcePosition, position, name, value, source)
       * @return {String}
       */
      function parseStyle(css, onAttr) {
        css = _.trimRight(css);
        if (css[css.length - 1] !== ';') css += ';';
        var cssLength = css.length;
        var isParenthesisOpen = false;
        var lastPos = 0;
        var i = 0;
        var retCSS = '';

        function addNewAttr() {
          // 如果没有正常的闭合圆括号，则直接忽略当前属性
          if (!isParenthesisOpen) {
            var source = _.trim(css.slice(lastPos, i));
            var j = source.indexOf(':');
            if (j !== -1) {
              var name = _.trim(source.slice(0, j));
              var value = _.trim(source.slice(j + 1));
              // 必须有属性名称
              if (name) {
                var ret = onAttr(lastPos, retCSS.length, name, value, source);
                if (ret) retCSS += ret + '; ';
              }
            }
          }
          lastPos = i + 1;
        }

        for (; i < cssLength; i++) {
          var c = css[i];
          if (c === '/' && css[i + 1] === '*') {
            // 备注开始
            var j = css.indexOf('*/', i + 2);
            // 如果没有正常的备注结束，则后面的部分全部跳过
            if (j === -1) break;
            // 直接将当前位置调到备注结尾，并且初始化状态
            i = j + 1;
            lastPos = i + 1;
            isParenthesisOpen = false;
          } else if (c === '(') {
            isParenthesisOpen = true;
          } else if (c === ')') {
            isParenthesisOpen = false;
          } else if (c === ';') {
            if (isParenthesisOpen) {
              // 在圆括号里面，忽略
            } else {
              addNewAttr();
            }
          } else if (c === '\n') {
            addNewAttr();
          }
        }

        return _.trim(retCSS);
      }

      module.exports = parseStyle;


      /***/
    }),
    /* 15 */
    /***/ (function (module, exports, __webpack_require__) {

      /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

      var stylesInDom = {};

      var memoize = function (fn) {
        var memo;

        return function () {
          if (typeof memo === "undefined") memo = fn.apply(this, arguments);
          return memo;
        };
      };

      var isOldIE = memoize(function () {
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
        return window && document && document.all && !window.atob;
      });

      var getElement = (function (fn) {
        var memo = {};

        return function (selector) {
          if (typeof memo[selector] === "undefined") {
            memo[selector] = fn.call(this, selector);
          }

          return memo[selector]
        };
      })(function (target) {
        return document.querySelector(target)
      });

      var singleton = null;
      var singletonCounter = 0;
      var stylesInsertedAtTop = [];

      var fixUrls = __webpack_require__(16);

      module.exports = function (list, options) {
        if (typeof DEBUG !== "undefined" && DEBUG) {
          if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }

        options = options || {};

        options.attrs = typeof options.attrs === "object" ? options.attrs : {};

        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (!options.singleton) options.singleton = isOldIE();

        // By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

        // By default, add <style> tags to the bottom of the target
        if (!options.insertAt) options.insertAt = "bottom";

        var styles = listToStyles(list, options);

        addStylesToDom(styles, options);

        return function update(newList) {
          var mayRemove = [];

          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            domStyle.refs--;
            mayRemove.push(domStyle);
          }

          if (newList) {
            var newStyles = listToStyles(newList, options);
            addStylesToDom(newStyles, options);
          }

          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];

            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

              delete stylesInDom[domStyle.id];
            }
          }
        };
      };

      function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs++;

            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }

            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j], options));
            }
          } else {
            var parts = [];

            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j], options));
            }

            stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
          }
        }
      }

      function listToStyles(list, options) {
        var styles = [];
        var newStyles = {};

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {css: css, media: media, sourceMap: sourceMap};

          if (!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
          else newStyles[id].parts.push(part);
        }

        return styles;
      }

      function insertStyleElement(options, style) {
        var target = getElement(options.insertInto)

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        }

        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

        if (options.insertAt === "top") {
          if (!lastStyleElementInsertedAtTop) {
            target.insertBefore(style, target.firstChild);
          } else if (lastStyleElementInsertedAtTop.nextSibling) {
            target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
          } else {
            target.appendChild(style);
          }
          stylesInsertedAtTop.push(style);
        } else if (options.insertAt === "bottom") {
          target.appendChild(style);
        } else {
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
      }

      function removeStyleElement(style) {
        if (style.parentNode === null) return false;
        style.parentNode.removeChild(style);

        var idx = stylesInsertedAtTop.indexOf(style);
        if (idx >= 0) {
          stylesInsertedAtTop.splice(idx, 1);
        }
      }

      function createStyleElement(options) {
        var style = document.createElement("style");

        options.attrs.type = "text/css";

        addAttrs(style, options.attrs);
        insertStyleElement(options, style);

        return style;
      }

      function createLinkElement(options) {
        var link = document.createElement("link");

        options.attrs.type = "text/css";
        options.attrs.rel = "stylesheet";

        addAttrs(link, options.attrs);
        insertStyleElement(options, link);

        return link;
      }

      function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function (key) {
          el.setAttribute(key, attrs[key]);
        });
      }

      function addStyle(obj, options) {
        var style, update, remove, result;

        // If a transform function was defined, run it on the css
        if (options.transform && obj.css) {
          result = options.transform(obj.css);

          if (result) {
            // If transform returns a value, use that instead of the original css.
            // This allows running runtime transformations on the css.
            obj.css = result;
          } else {
            // If the transform function returns a falsy value, don't add this css.
            // This allows conditional loading of css
            return function () {
              // noop
            };
          }
        }

        if (options.singleton) {
          var styleIndex = singletonCounter++;

          style = singleton || (singleton = createStyleElement(options));

          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);

        } else if (
          obj.sourceMap &&
          typeof URL === "function" &&
          typeof URL.createObjectURL === "function" &&
          typeof URL.revokeObjectURL === "function" &&
          typeof Blob === "function" &&
          typeof btoa === "function"
        ) {
          style = createLinkElement(options);
          update = updateLink.bind(null, style, options);
          remove = function () {
            removeStyleElement(style);

            if (style.href) URL.revokeObjectURL(style.href);
          };
        } else {
          style = createStyleElement(options);
          update = applyToTag.bind(null, style);
          remove = function () {
            removeStyleElement(style);
          };
        }

        update(obj);

        return function updateStyle(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap
            ) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      var replaceText = (function () {
        var textStore = [];

        return function (index, replacement) {
          textStore[index] = replacement;

          return textStore.filter(Boolean).join('\n');
        };
      })();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) style.removeChild(childNodes[index]);

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, obj) {
        var css = obj.css;
        var media = obj.media;

        if (media) {
          style.setAttribute("media", media)
        }

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      function updateLink(link, options, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;

        /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
        var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

        if (options.convertToAbsoluteUrls || autoFixUrls) {
          css = fixUrls(css);
        }

        if (sourceMap) {
          // http://stackoverflow.com/a/26603875
          css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }

        var blob = new Blob([css], {type: "text/css"});

        var oldSrc = link.href;

        link.href = URL.createObjectURL(blob);

        if (oldSrc) URL.revokeObjectURL(oldSrc);
      }


      /***/
    }),
    /* 16 */
    /***/ (function (module, exports) {


      /**
       * When source maps are enabled, `style-loader` uses a link element with a data-uri to
       * embed the css on the page. This breaks all relative urls because now they are relative to a
       * bundle instead of the current page.
       *
       * One solution is to only use full urls, but that may be impossible.
       *
       * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
       *
       * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
       *
       */

      module.exports = function (css) {
        // get current location
        var location = typeof window !== "undefined" && window.location;

        if (!location) {
          throw new Error("fixUrls requires window.location");
        }

        // blank or null?
        if (!css || typeof css !== "string") {
          return css;
        }

        var baseUrl = location.protocol + "//" + location.host;
        var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

        // convert each url(...)
        /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
        var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
          // strip quotes (if they exist)
          var unquotedOrigUrl = origUrl
            .trim()
            .replace(/^"(.*)"$/, function (o, $1) {
              return $1;
            })
            .replace(/^'(.*)'$/, function (o, $1) {
              return $1;
            });

          // already a full url? no change
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
            return fullMatch;
          }

          // convert the url to a full url
          var newUrl;

          if (unquotedOrigUrl.indexOf("//") === 0) {
            //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
          } else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
          } else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
          }

          // send back the fixed url(...)
          return "url(" + JSON.stringify(newUrl) + ")";
        });

        // send back the fixed css
        return fixedCss;
      };


      /***/
    }),
    /* 17 */
    /***/ (function (module, exports) {

      var g;

// This works in non-strict mode
      g = (function () {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object")
          g = window;
      }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

      module.exports = g;


      /***/
    }),
    /* 18 */
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * filter xss
       *
       * @author Zongmin Lei<leizongmin@gmail.com>
       */

      var FilterCSS = __webpack_require__(0).FilterCSS;
      var DEFAULT = __webpack_require__(4);
      var parser = __webpack_require__(5);
      var parseTag = parser.parseTag;
      var parseAttr = parser.parseAttr;
      var _ = __webpack_require__(1);

      /**
       * returns `true` if the input value is `undefined` or `null`
       *
       * @param {Object} obj
       * @return {Boolean}
       */
      function isNull(obj) {
        return obj === undefined || obj === null;
      }

      /**
       * get attributes for a tag
       *
       * @param {String} html
       * @return {Object}
       *   - {String} html
       *   - {Boolean} closing
       */
      function getAttrs(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          return {
            html: "",
            closing: html[html.length - 2] === "/"
          };
        }
        html = _.trim(html.slice(i + 1, -1));
        var isClosing = html[html.length - 1] === "/";
        if (isClosing) html = _.trim(html.slice(0, -1));
        return {
          html: html,
          closing: isClosing
        };
      }

      /**
       * shallow copy
       *
       * @param {Object} obj
       * @return {Object}
       */
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }

      /**
       * FilterXSS class
       *
       * @param {Object} options
       *        whiteList, onTag, onTagAttr, onIgnoreTag,
       *        onIgnoreTagAttr, safeAttrValue, escapeHtml
       *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
       *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
       */
      function FilterXSS(options) {
        options = shallowCopyObject(options || {});

        if (options.stripIgnoreTag) {
          if (options.onIgnoreTag) {
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
            );
          }
          options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
        }

        options.whiteList = options.whiteList || DEFAULT.whiteList;
        options.onTag = options.onTag || DEFAULT.onTag;
        options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
        options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
        options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
        this.options = options;

        if (options.css === false) {
          this.cssFilter = false;
        } else {
          options.css = options.css || {};
          this.cssFilter = new FilterCSS(options.css);
        }
      }

      /**
       * start process and returns result
       *
       * @param {String} html
       * @return {String}
       */
      FilterXSS.prototype.process = function (html) {
        // compatible with the input
        html = html || "";
        html = html.toString();
        if (!html) return "";

        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onTag = options.onTag;
        var onIgnoreTag = options.onIgnoreTag;
        var onTagAttr = options.onTagAttr;
        var onIgnoreTagAttr = options.onIgnoreTagAttr;
        var safeAttrValue = options.safeAttrValue;
        var escapeHtml = options.escapeHtml;
        var cssFilter = me.cssFilter;

        // remove invisible characters
        if (options.stripBlankChar) {
          html = DEFAULT.stripBlankChar(html);
        }

        // remove html comments
        if (!options.allowCommentTag) {
          html = DEFAULT.stripCommentTag(html);
        }

        // if enable stripIgnoreTagBody
        var stripIgnoreTagBody = false;
        if (options.stripIgnoreTagBody) {
          var stripIgnoreTagBody = DEFAULT.StripTagBody(
            options.stripIgnoreTagBody,
            onIgnoreTag
          );
          onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
        }

        var retHtml = parseTag(
          html,
          function (sourcePosition, position, tag, html, isClosing) {
            var info = {
              sourcePosition: sourcePosition,
              position: position,
              isClosing: isClosing,
              isWhite: whiteList.hasOwnProperty(tag)
            };

            // call `onTag()`
            var ret = onTag(tag, html, info);
            if (!isNull(ret)) return ret;

            if (info.isWhite) {
              if (info.isClosing) {
                return "</" + tag + ">";
              }

              var attrs = getAttrs(html);
              var whiteAttrList = whiteList[tag];
              var attrsHtml = parseAttr(attrs.html, function (name, value) {
                // call `onTagAttr()`
                var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
                var ret = onTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret)) return ret;

                if (isWhiteAttr) {
                  // call `safeAttrValue()`
                  value = safeAttrValue(tag, name, value, cssFilter);
                  if (value) {
                    return name + '="' + value + '"';
                  } else {
                    return name;
                  }
                } else {
                  // call `onIgnoreTagAttr()`
                  var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                  if (!isNull(ret)) return ret;
                  return;
                }
              });

              // build new tag html
              var html = "<" + tag;
              if (attrsHtml) html += " " + attrsHtml;
              if (attrs.closing) html += " /";
              html += ">";
              return html;
            } else {
              // call `onIgnoreTag()`
              var ret = onIgnoreTag(tag, html, info);
              if (!isNull(ret)) return ret;
              return escapeHtml(html);
            }
          },
          escapeHtml
        );

        // if enable stripIgnoreTagBody
        if (stripIgnoreTagBody) {
          retHtml = stripIgnoreTagBody.remove(retHtml);
        }

        return retHtml;
      };

      module.exports = FilterXSS;


      /***/
    })
    /******/]);
});


// WEBPACK FOOTER //
// Valine.min.js
