/******/ var __webpack_modules__ = ({

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host{display:inline-block;border:solid 8px #bdbdbd;max-width:100%;font-size:0;white-space:nowrap}*,*::after,*::before{-webkit-box-sizing:border-box;box-sizing:border-box}.svg-container{height:0;width:0;overflow:hidden;display:inline-block}.sweeper-container{display:-webkit-box;display:-ms-flexbox;display:flex;border:3px solid;border-color:#7b7b7b #fff #fff #7b7b7b;background-color:#bdbdbd;overflow-x:auto}.sweeper-container:not(.show-hover-elements) .sweeper-field>*:nth-child(2),.sweeper-container.show-hover-elements .sweeper-field:not(:hover)>*:nth-child(2){display:none}.sweeper-box{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;place-items:center;place-content:center}.sweeper-row{display:inline-block}.sweeper-field{display:inline-block;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-touch-callout:none;height:40px;width:40px;overflow:hidden;position:relative;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;cursor:pointer}.sweeper-field.unselectable{cursor:default}.sweeper-field>*{position:absolute;inset:0}.sweeper-field>*:nth-child(2){opacity:.25}", "",{"version":3,"sources":["webpack://./src/minesweeper.scss"],"names":[],"mappings":"AAAA,MACE,oBAAA,CACA,wBAAA,CACA,cAAA,CAGA,WAAA,CACA,kBAAA,CAGF,qBAGE,6BAAA,CAAA,qBAAA,CAGF,eACE,QAAA,CACA,OAAA,CACA,eAAA,CACA,oBAAA,CAGF,mBACE,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,gBAAA,CACA,sCAAA,CACA,wBAAA,CACA,eAAA,CAIE,4JACE,YAAA,CAKN,aACE,0BAAA,CAAA,0BAAA,CAAA,mBAAA,CACA,2BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,qBAAA,CACA,kBAAA,CACA,oBAAA,CAGF,aACE,oBAAA,CAGF,eACE,oBAAA,CACA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CACA,yCAAA,CACA,wBAAA,CACA,0BAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,yBAAA,CAAA,sBAAA,CACA,mBAAA,CAAA,gBAAA,CACA,cAAA,CAEA,4BACE,cAAA,CAGF,iBACE,iBAAA,CACA,OAAA,CAEA,8BACE,WAAA","sourcesContent":[":host {\n  display: inline-block;\n  border: solid 8px #bdbdbd;\n  max-width: 100%;\n\n  // Fontsize of 0 to remove white space between inline-block childs\n  font-size: 0;\n  white-space: nowrap;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.svg-container {\n  height: 0;\n  width: 0;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.sweeper-container {\n  display: flex;\n  border: 3px solid;\n  border-color: rgb(123 123 123) white white rgb(123 123 123);\n  background-color: #bdbdbd;\n  overflow-x: auto;\n\n  &:not(.show-hover-elements) .sweeper-field,\n  &.show-hover-elements .sweeper-field:not(:hover) {\n    > *:nth-child(2) {\n      display: none;\n    }\n  }\n}\n\n.sweeper-box {\n  display: inline-flex;\n  flex-direction: column;\n  place-items: center;\n  place-content: center;\n}\n\n.sweeper-row {\n  display: inline-block;\n}\n\n.sweeper-field {\n  display: inline-block;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; /* for removing the highlight */\n  -webkit-user-select: none; /* disable selection/Copy of UIWebView */\n  -webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */\n  height: 40px;\n  width: 40px;\n  overflow: hidden;\n  position: relative;\n  object-position: center;\n  object-fit: cover;\n  cursor: pointer;\n\n  &.unselectable {\n    cursor: default;\n  }\n\n  > * {\n    position: absolute;\n    inset: 0;\n\n    &:nth-child(2) {\n      opacity: 0.25;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 537:
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 528:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><defs><path d=\"M2 74L2 2L74 2L74 74L74 74L2 74Z\" id=\"e1cjUtGijV\"></path><mask id=\"maske5Vz1Zki6\" x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" maskUnits=\"userSpaceOnUse\"><rect x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" fill=\"white\"></rect><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill=\"black\"></use></mask></defs><g id=\"bomb-explode\"><g><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill=\"#ff0000\" fill-opacity=\"1\"></use><g mask=\"url(#maske5Vz1Zki6)\"><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#757575\" stroke-width=\"4\" stroke-opacity=\"1\"></use></g></g><use xlink:href=\"#bomb-element\"></use></g></svg>"

/***/ }),

/***/ 726:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><defs><path d=\"M2 74L2 2L74 2L74 74L74 74L2 74Z\" id=\"e2iiwvZd6v\"></path><mask id=\"maskaXtlGt3qy\" x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" maskUnits=\"userSpaceOnUse\"><rect x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" fill=\"white\"></rect><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill=\"black\"></use></mask><path d=\"M35.6 6.8L40.4 6.8L40.4 69.2L35.6 69.2L35.6 6.8Z\" id=\"c9eN9knBh\"></path><clipPath id=\"clipd1zPYXGAwy\"><use xlink:href=\"#c9eN9knBh\" opacity=\"1\"></use></clipPath><path d=\"M40.4 16.4L50 16.4L50 59.6L40.4 59.6L40.4 16.4Z\" id=\"gx4drqHvY\"></path><clipPath id=\"clipa2yM9RkR6\"><use xlink:href=\"#gx4drqHvY\" opacity=\"1\"></use></clipPath><path d=\"M50 21.2L54.8 21.2L54.8 54.8L50 54.8L50 21.2Z\" id=\"fgtYUnw8A\"></path><clipPath id=\"clipk32QKT1MaU\"><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\"></use></clipPath><path d=\"M54.8 26L59.6 26L59.6 50L54.8 50L54.8 26Z\" id=\"cgzxabwz1\"></path><clipPath id=\"cliph2KpOi7P9O\"><use xlink:href=\"#cgzxabwz1\" opacity=\"1\"></use></clipPath><path d=\"M59.6 35.6L69.2 35.6L69.2 40.4L59.6 40.4L59.6 35.6Z\" id=\"b3gPwqEoX\"></path><clipPath id=\"clipe23gtVrUJ\"><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\"></use></clipPath><path d=\"M26 16.4L35.6 16.4L35.6 59.6L26 59.6L26 16.4Z\" id=\"ad99VAl8I\"></path><clipPath id=\"clipd1v1rV6sj4\"><use xlink:href=\"#ad99VAl8I\" opacity=\"1\"></use></clipPath><path d=\"M21.2 21.2L26 21.2L26 54.8L21.2 54.8L21.2 21.2Z\" id=\"c13ZaXjO2p\"></path><clipPath id=\"cliph399Xr21VH\"><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\"></use></clipPath><path d=\"M16.4 26L21.2 26L21.2 50L16.4 50L16.4 26Z\" id=\"b2SwHVIyUf\"></path><clipPath id=\"clipbgmy6Y3Gb\"><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\"></use></clipPath><path d=\"M6.8 35.6L16.4 35.6L16.4 40.4L6.8 40.4L6.8 35.6Z\" id=\"g3CI8RzO6L\"></path><clipPath id=\"clipb4iPMKkLd9\"><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\"></use></clipPath><path d=\"M54.8 16.4L59.6 16.4L59.6 21.2L54.8 21.2L54.8 16.4Z\" id=\"bVu929Gr\"></path><clipPath id=\"clipb5eim9AY4T\"><use xlink:href=\"#bVu929Gr\" opacity=\"1\"></use></clipPath><path d=\"M16.4 16.4L21.2 16.4L21.2 21.2L16.4 21.2L16.4 16.4Z\" id=\"bbmkl5w40\"></path><clipPath id=\"clipdILmNb1DZ\"><use xlink:href=\"#bbmkl5w40\" opacity=\"1\"></use></clipPath><path d=\"M54.8 54.8L59.6 54.8L59.6 59.6L54.8 59.6L54.8 54.8Z\" id=\"afRzpmA7F\"></path><clipPath id=\"clipa1MHsUZSGO\"><use xlink:href=\"#afRzpmA7F\" opacity=\"1\"></use></clipPath><path d=\"M16.4 54.8L21.2 54.8L21.2 59.6L16.4 59.6L16.4 54.8Z\" id=\"f34Z0Cg2H2\"></path><clipPath id=\"clipaiMYuA5gL\"><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\"></use></clipPath><path d=\"M26 26L35.6 26L35.6 35.6L26 35.6L26 26Z\" id=\"a7XCqe2jKp\"></path></defs><g id=\"bomb\"><g id=\"bomb-background\"><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill=\"#b9b9b9\" fill-opacity=\"1\"></use><g mask=\"url(#maskaXtlGt3qy)\"><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#757575\" stroke-width=\"4\" stroke-opacity=\"1\"></use></g></g><g id=\"bomb-element\"><g><use xlink:href=\"#c9eN9knBh\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipd1zPYXGAwy)\"><use xlink:href=\"#c9eN9knBh\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#gx4drqHvY\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipa2yM9RkR6)\"><use xlink:href=\"#gx4drqHvY\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipk32QKT1MaU)\"><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#cgzxabwz1\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#cliph2KpOi7P9O)\"><use xlink:href=\"#cgzxabwz1\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipe23gtVrUJ)\"><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#ad99VAl8I\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipd1v1rV6sj4)\"><use xlink:href=\"#ad99VAl8I\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#cliph399Xr21VH)\"><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipbgmy6Y3Gb)\"><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipb4iPMKkLd9)\"><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#bVu929Gr\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipb5eim9AY4T)\"><use xlink:href=\"#bVu929Gr\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#bbmkl5w40\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipdILmNb1DZ)\"><use xlink:href=\"#bbmkl5w40\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#afRzpmA7F\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipa1MHsUZSGO)\"><use xlink:href=\"#afRzpmA7F\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipaiMYuA5gL)\"><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#a7XCqe2jKp\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\"></use></g></g></g></svg>"

/***/ }),

/***/ 202:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"flag-missed\"><use href=\"#bomb\"></use><line stroke-width=\"4\" stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" id=\"svg_78\" y2=\"72\" x2=\"72\" y1=\"4\" x1=\"4\" stroke=\"#ff0000\" fill=\"none\"></line><line stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" id=\"svg_79\" y2=\"72\" x2=\"4\" y1=\"4\" x1=\"72\" stroke-width=\"4\" stroke=\"#ff0000\" fill=\"none\"></line></g></svg>"

/***/ }),

/***/ 379:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"flag\"><use href=\"#unopened-square\"></use><g><polygon points=\"35.999,55.5 35.999,16.5 40,16.5 40,55.5 35.999,55.5 \"></polygon><polygon fill=\"#FF0000\" points=\"40,13.875 19.375,27 40,40.125 \"></polygon><rect x=\"28.571\" y=\"51.625\" width=\"18.857\" height=\"5.5\"></rect><rect x=\"20.222\" y=\"56.459\" width=\"35.555\" height=\"7.041\"></rect></g></g></svg>"

/***/ }),

/***/ 885:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"blank\"><polygon fill=\"#B9B9B9\" points=\"75.001,75.001 1,75.001 1,1 75.001,1 75.001,75.001 \"></polygon><path fill=\"#757575\" d=\"M75.991,0C75.996,0,76,0.004,76,0.009V75.99c0,0.006-0.004,0.01-0.009,0.01H0.009 C0.004,76,0,75.996,0,75.99V0.009C0,0.004,0.004,0,0.009,0H75.991 M74,2H2v72h72V2L74,2z\"></path></g></svg>"

/***/ }),

/***/ 113:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-1\"><use href=\"#blank\"></use><polygon fill=\"#0000FF\" points=\"40.857,8.928 18,26.071 18,31.785 32.286,31.785 32.286,54.644 18,54.644 18,66.071 58,66.071 58,54.644 46.571,54.644 46.571,8.928 \"></polygon></g></svg>"

/***/ }),

/***/ 877:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-2\"><use href=\"#blank\"></use><path fill=\"#008200\" d=\"M51.256,26.134v-4.545c0-1.545-1.293-2.796-2.892-2.796H27.393c-1.593,0-2.892,1.251-2.892,2.796v4.545 H8.593v-5.942C8.593,14.011,13.778,9,20.163,9h35.433c6.388,0,11.569,5.011,11.569,11.191c0,4.064,1.287,8.448-2.521,11.417 c-2.649,2.062-5.948,3.822-8.757,5.743c-6.993,4.777-14.083,9.431-21.093,14.188c-0.91,0.621-3.707,3.276-4.87,3.276 c0.012,0,37.602,0,37.602,0V66H8.774c0-4.529-1.605-9.863,2.609-13.253c2.949-2.372,6.773-4.315,9.932-6.502 c8-5.557,16.259-10.779,24.287-16.306C46.188,29.535,51.256,26.874,51.256,26.134z\"></path></g></svg>"

/***/ }),

/***/ 389:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-3\"><use href=\"#blank\"></use><path fill=\"#FF0000\" d=\"M66.322,20.4c0-6.295-5.104-11.4-11.4-11.4H9.678v10.688H48.51c1.575,0,2.85,1.275,2.85,2.85v6.413 c0,1.569-1.274,2.85-2.85,2.85H26.778v12.825H48.51c1.575,0,2.85,1.274,2.85,2.85v6.413c0,1.569-1.274,2.85-2.85,2.85H9.678V66 h45.244c6.296,0,11.4-5.11,11.4-11.4V43.912c0-2.376-0.729-4.586-1.977-6.412c1.247-1.832,1.977-4.036,1.977-6.413V20.4z\"></path></g></svg>"

/***/ }),

/***/ 527:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-4\"><use href=\"#blank\"></use><polygon fill=\"#000084\" points=\"25.8,9 6.922,42.765 47.584,42.765 47.584,66 63.559,65.637 63.559,42.765 69.078,42.765 69.078,31.873 63.559,31.873 63.559,9 47.584,9 47.584,32.236 29.192,32.236 41.774,9 \"></polygon></g></svg>"

/***/ }),

/***/ 434:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-5\"><use href=\"#blank\"></use><path fill=\"#840000\" d=\"M60.78,32.065c1.765,0.757,3.006,1.726,3.869,2.922c1.324,1.837,1.736,4.211,1.736,7.139 c0,0.012,0,10.689,0,10.689c0,6.291-2.494,12.48-11.401,13.182H9.497V54.953h39.074c1.576,0,2.851-1.279,2.851-2.85v-6.412 c0-1.57-1.274-2.852-2.851-2.852L9.497,42.852V9.001l57.006,0v11.396H26.031v11.668\"></path></g></svg>"

/***/ }),

/***/ 287:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-6\"><use href=\"#blank\"></use><path fill=\"#008284\" d=\"M66.856,23.967v-3.565c0-6.296-5.109-11.4-11.399-11.4H20.544c-6.29,0-11.4,5.104-11.4,11.4v34.197 c0,6.29,5.11,11.4,11.4,11.4h34.913c6.29,0,11.399-5.11,11.399-11.4V43.911c0-4.984-4.921-12.11-11.405-12.11H27.669 c-1.569,0-2.85-1.28-2.85-2.85v-6.412c0-1.575,1.28-2.851,2.85-2.851h20.663c1.569,0,2.85,1.275,2.85,2.851v1.005L66.856,23.967z M25.531,47.474c0-1.569,1.28-2.85,2.851-2.85h20.662c1.57,0,2.851,1.28,2.851,2.85v6.412c0,1.57-1.28,2.851-2.851,2.851H28.382 c-1.57,0-2.851-1.28-2.851-2.851V47.474z\"></path></g></svg>"

/***/ }),

/***/ 312:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-7\"><use href=\"#blank\"></use><polygon fill=\"#840084\" points=\"10.363,9.001 10.363,21.783 44.834,21.78 10.018,65.999 30.464,65.999 65.291,21.78 65.982,9.001 \"></polygon></g></svg>"

/***/ }),

/***/ 835:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-8\"><use href=\"#blank\"></use><path fill=\"#757575\" d=\"M66.856,31.087c0,2.377-0.729,4.581-1.977,6.413c1.247,1.826,1.977,4.036,1.977,6.412V54.6 c0,6.29-5.104,11.4-11.4,11.4H20.544c-6.29,0-11.4-5.11-11.4-11.4V43.912c0-2.376,0.729-4.586,1.982-6.412 c-1.252-1.832-1.982-4.036-1.982-6.413V20.4c0-6.295,5.11-11.4,11.4-11.4h34.912c6.296,0,11.4,5.104,11.4,11.4V31.087z M51.182,22.538c0-1.575-1.275-2.85-2.851-2.85H27.669c-1.57,0-2.851,1.275-2.851,2.85v6.413c0,1.569,1.28,2.85,2.851,2.85h20.662 c1.575,0,2.851-1.28,2.851-2.85V22.538z M51.182,46.05c0-1.575-1.275-2.85-2.851-2.85H27.669c-1.57,0-2.851,1.274-2.851,2.85v6.413 c0,1.569,1.28,2.85,2.851,2.85h20.662c1.575,0,2.851-1.28,2.851-2.85V46.05z\"></path></g></svg>"

/***/ }),

/***/ 177:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"question-mark\"><use href=\"#unopened-square\"></use><path d=\"M24.684,28.694c0-4.57,1.569-8.347,4.716-11.338c2.219-2.109,5.175-3.164,8.877-3.164c4.065,0,7.213,1.055,9.433,3.164 c2.4,2.285,3.606,5.186,3.606,8.701c0,2.991-1.109,5.537-3.329,7.646c-1.295,1.23-3.052,2.9-5.271,5.01 c-1.664,1.582-2.497,3.955-2.497,7.119h-4.993c0-3.864,0.647-6.765,1.942-8.701c0.924-1.406,2.678-3.337,5.271-5.801 c1.479-1.406,2.22-3.073,2.22-5.01c0-2.461-0.65-4.307-1.942-5.537c-1.109-1.055-2.681-1.582-4.716-1.582 c-1.665,0-3.052,0.527-4.161,1.582c-1.85,1.758-2.774,4.395-2.774,7.91H24.684z M34.671,53.479h6.104v6.328h-6.104V53.479z\"></path></g></svg>"

/***/ }),

/***/ 100:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"unopened-square\"><path id=\"rect1313_65_\" fill=\"#FDFCFD\" d=\"M0.009,0h75.982C75.996,0,76,0.004,76,0.009V75.99c0,0.006-0.004,0.01-0.009,0.01H0.009 C0.004,76,0,75.996,0,75.99V0.009C0,0.004,0.004,0,0.009,0z\"></path><path id=\"path1341_65_\" fill=\"#757575\" d=\"M75.99,0C75.995,0,76,0.005,76,0.01v75.981C76,75.996,75.995,76,75.99,76H0.009 C0.004,76,0,75.996,0,75.991L75.99,0z\"></path><polygon id=\"rect1311_65_\" fill=\"#B9B9B9\" points=\"8.508,8.5 67.492,8.5 67.5,8.508 67.5,67.491 67.492,67.5 8.508,67.5 8.5,67.491 8.5,8.508 \"></polygon></g></svg>"

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ !function() {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ MinesweeperGame; },
  "Z": function() { return /* binding */ src_MinesweeperGame; }
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,css_tag_e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class css_tag_o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(css_tag_e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new css_tag_o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new css_tag_o(n,t,s)},S=(s,n)=>{css_tag_e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=css_tag_e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:d}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.6.0");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o="$lit$",lit_html_n=`lit$${(Math.random()+"").slice(9)}$`,lit_html_l="?"+lit_html_n,lit_html_h=`<${lit_html_l}>`,lit_html_r=document,lit_html_d=()=>lit_html_r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_c=Array.isArray,v=t=>lit_html_c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),lit_html_a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${lit_html_a}(?:([^\\s"'>=/]+)(${lit_html_a}*=${lit_html_a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+lit_html_h:v>=0?(l.push(e),s.slice(0,v)+lit_html_o+s.slice(v)+lit_html_n+w):s+lit_html_n+(-2===v?(l.push(void 0),i):w)}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(lit_html_o)||i.startsWith(lit_html_n)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+lit_html_o).split(lit_html_n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(lit_html_n),i=t.length-1;if(i>0){h.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],lit_html_d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],lit_html_d())}}}else if(8===h.nodeType)if(h.data===lit_html_l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(lit_html_n,t+1));)v.push({type:7,index:r}),t+=lit_html_n.length-1}r++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class lit_html_S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h]}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++)}return o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(lit_html_r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new lit_html_S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){lit_html_c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(lit_html_d()),this.k(lit_html_d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const H=lit_html_s?lit_html_s.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z={O:lit_html_o,P:lit_html_n,A:lit_html_l,C:1,M:P,L:lit_html_S,D:v,R:N,I:M,V:R,H:I,N:L,U:k,F:z},j=lit_html_i.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.7.3");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(lit_html_d(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.3.2");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function property_e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):property_i(e,n)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_t(t){return property_e({...t,state:!0})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/base.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const base_e=(e,t,o)=>{Object.defineProperty(t,o,e)},base_t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),base_o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/event-options.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function event_options_e(e){return base_o({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var query_assigned_elements_n;const query_assigned_elements_e=null!=(null===(query_assigned_elements_n=window.HTMLSlotElement)||void 0===query_assigned_elements_n?void 0:query_assigned_elements_n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function query_assigned_elements_l(n){const{slot:l,selector:t}=null!=n?n:{};return o({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?query_assigned_elements_e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_assigned_nodes_o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?t({slot:s,flatten:n,selector:r}):e({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive_i{constructor(i){if(super(i),this.et=A,i.type!==directive_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this.ft=void 0,this.et=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=directive_e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-svg.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_svg_t extends unsafe_html_e{}unsafe_svg_t.directiveName="unsafeSVG",unsafe_svg_t.resultType=2;const unsafe_svg_o=directive_e(unsafe_svg_t);
//# sourceMappingURL=unsafe-svg.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-svg.js

//# sourceMappingURL=unsafe-svg.js.map

;// CONCATENATED MODULE: ./src/types/index.ts
var FieldInteractionType;
(function (FieldInteractionType) {
    FieldInteractionType["Unveiled"] = "UNVEILED";
    FieldInteractionType["FlagAction"] = "FLAG_ACTION";
    FieldInteractionType["QuestionMarkAction"] = "QUESTION_MARK_ACTION";
})(FieldInteractionType || (FieldInteractionType = {}));
var ActionType;
(function (ActionType) {
    ActionType["Placed"] = "PLACED";
    ActionType["Removed"] = "REMOVED";
    ActionType["NoChange"] = "NO_CHANGE";
})(ActionType || (ActionType = {}));
var FieldKey;
(function (FieldKey) {
    FieldKey["FLAG"] = "FLAG";
    FieldKey["QUESTION_MARK"] = "QUESTION_MARK";
    FieldKey["BOMB"] = "BOMB";
    FieldKey["BOMB_EXPLODE"] = "BOMB_EXPLODE";
})(FieldKey || (FieldKey = {}));

;// CONCATENATED MODULE: ./src/engine/MinesweeperBoard.ts
var _MinesweeperBoard_positions, _MinesweeperBoard_flags, _MinesweeperBoard_flagCounter, _MinesweeperBoard_questionMarks, _MinesweeperBoard_revealedFields;


class MinesweeperBoard {
    constructor(gameModeConfiguration) {
        _MinesweeperBoard_positions.set(this, void 0);
        _MinesweeperBoard_flags.set(this, void 0);
        _MinesweeperBoard_flagCounter.set(this, 0);
        _MinesweeperBoard_questionMarks.set(this, void 0);
        _MinesweeperBoard_revealedFields.set(this, void 0);
        this.gameModeConfiguration = gameModeConfiguration;
        // First: Generate 2d field
        __classPrivateFieldSet(this, _MinesweeperBoard_positions, this.generate2dFields(0), "f");
        __classPrivateFieldSet(this, _MinesweeperBoard_flags, this.generate2dFields(false), "f");
        __classPrivateFieldSet(this, _MinesweeperBoard_questionMarks, this.generate2dFields(false), "f");
        __classPrivateFieldSet(this, _MinesweeperBoard_revealedFields, this.generate2dFields(false), "f");
        // Second: Place the bombs on the field
        this.placeBombs();
        // Third: Calculate the fields number, based on neighbor bombs
        this.applyFieldNumbers();
    }
    get rows() {
        return this.gameModeConfiguration.rows;
    }
    get columns() {
        return this.gameModeConfiguration.columns;
    }
    get bombs() {
        return this.gameModeConfiguration.bombs;
    }
    get positions() {
        return __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f");
    }
    get flags() {
        return __classPrivateFieldGet(this, _MinesweeperBoard_flags, "f");
    }
    get flagCounter() {
        return __classPrivateFieldGet(this, _MinesweeperBoard_flagCounter, "f");
    }
    get questionMarks() {
        return __classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f");
    }
    get revealedFields() {
        return __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f");
    }
    generate2dFields(value) {
        return Array.from({ length: this.rows })
            .fill([value])
            .map(() => Array.from({ length: this.columns }).fill(value));
    }
    placeBombs() {
        const bombIndices = this.calculateRandomBombIndices();
        let fieldIndex = 0;
        for (let row = 0; row < this.rows; row += 1) {
            for (let column = 0; column < this.columns; column += 1) {
                if (bombIndices.includes(fieldIndex)) {
                    __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] = FieldKey.BOMB;
                }
                fieldIndex += 1;
            }
        }
    }
    /**
     * Calculates a random set of indices where bombs are located on the field
     * @returns List of indices of bomb #positions
     */
    calculateRandomBombIndices() {
        const result = [];
        const size = this.rows * this.columns;
        const desiredBombAmount = Math.min(this.bombs, size);
        while (result.length !== desiredBombAmount) {
            const newBombPosition = Math.floor(Math.random() * size);
            if (!result.includes(newBombPosition)) {
                result.push(newBombPosition);
            }
        }
        return result;
    }
    /**
     * Calculates for every field, except the fields with bombs, how many neighbor bombs are present.
     */
    applyFieldNumbers() {
        for (let row = 0; row < this.rows; row += 1) {
            for (let column = 0; column < this.columns; column += 1) {
                if (__classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] !== FieldKey.BOMB) {
                    const bombCounter = this.getNeighbors(row, column).filter((neighbor) => __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[neighbor[0]][neighbor[1]] === FieldKey.BOMB).length;
                    __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] = bombCounter;
                }
            }
        }
    }
    revealField(row, column) {
        if (__classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[row][column]) {
            return FieldKey.FLAG;
        }
        if (__classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[row][column]) {
            __classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[row][column] = false;
        }
        const field = __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column];
        if (field === FieldKey.BOMB) {
            // position contains bomb
            __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] = FieldKey.BOMB_EXPLODE;
        }
        else if (field === 0) {
            // position contains no bomb and has no neighbor-bombs
            this.expand(row, column);
        }
        else {
            // position contains no bomb but neighbor-bombs
            __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f")[row][column] = true;
        }
        return field;
    }
    expand(row, column) {
        const field = __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column];
        if (field === FieldKey.BOMB || __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f")[row][column]) {
            return;
        }
        __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f")[row][column] = true;
        if (__classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[row][column]) {
            this.removeFlag(row, column);
        }
        if (__classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[row][column]) {
            this.removeQuestionMark(row, column);
        }
        if (field === 0) {
            const neighbors = this.getNeighbors(row, column);
            for (const neighbor of neighbors) {
                this.expand(neighbor[0], neighbor[1]);
            }
        }
    }
    /**
     * @returns List of Neighbors, every entry contains a row and a column index
     */
    getNeighbors(currentRow, currentColumn) {
        const neighbors = [];
        /** xoo
         *  oxo
         *  ooo
         */
        if (currentRow > 0 && currentColumn > 0) {
            neighbors.push([currentRow - 1, currentColumn - 1]);
        }
        /** oxo
         *  oxo
         *  ooo
         */
        if (currentRow > 0) {
            neighbors.push([currentRow - 1, currentColumn]);
        }
        /** oox
         *  oxo
         *  ooo
         */
        if (currentRow > 0 && currentColumn < this.columns - 1) {
            neighbors.push([currentRow - 1, currentColumn + 1]);
        }
        /** ooo
         *  oxx
         *  ooo
         */
        if (currentColumn < this.columns - 1) {
            neighbors.push([currentRow, currentColumn + 1]);
        }
        /** ooo
         *  oxo
         *  oox
         */
        if (currentRow < this.rows - 1 && currentColumn < this.columns - 1) {
            neighbors.push([currentRow + 1, currentColumn + 1]);
        }
        /** ooo
         *  oxo
         *  oxo
         */
        if (currentRow < this.rows - 1) {
            neighbors.push([currentRow + 1, currentColumn]);
        }
        /** ooo
         *  oxo
         *  xoo
         */
        if (currentRow < this.rows - 1 && currentColumn > 0) {
            neighbors.push([currentRow + 1, currentColumn - 1]);
        }
        /** ooo
         *  xxo
         *  ooo
         */
        if (currentColumn > 0) {
            neighbors.push([currentRow, currentColumn - 1]);
        }
        return neighbors;
    }
    addFlag(selectedRow, selectedColumn) {
        if (!__classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[selectedRow][selectedColumn]) {
            __classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[selectedRow][selectedColumn] = true;
            __classPrivateFieldSet(this, _MinesweeperBoard_flagCounter, __classPrivateFieldGet(this, _MinesweeperBoard_flagCounter, "f") + 1, "f");
            this.removeQuestionMark(selectedRow, selectedColumn);
        }
    }
    removeFlag(selectedRow, selectedColumn) {
        if (__classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[selectedRow][selectedColumn]) {
            __classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[selectedRow][selectedColumn] = false;
            __classPrivateFieldSet(this, _MinesweeperBoard_flagCounter, __classPrivateFieldGet(this, _MinesweeperBoard_flagCounter, "f") - 1, "f");
        }
    }
    addQuestionMark(selectedRow, selectedColumn) {
        if (!__classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[selectedRow][selectedColumn]) {
            __classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[selectedRow][selectedColumn] = true;
            this.removeFlag(selectedRow, selectedColumn);
        }
    }
    removeQuestionMark(selectedRow, selectedColumn) {
        if (__classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[selectedRow][selectedColumn]) {
            __classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[selectedRow][selectedColumn] = false;
        }
    }
    revealBombs(bombsAsFlags = false) {
        for (let row = 0; row < this.rows; row += 1) {
            for (let column = 0; column < this.columns; column += 1) {
                if (__classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] === FieldKey.BOMB) {
                    __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f")[row][column] = true;
                    if (bombsAsFlags) {
                        this.addFlag(row, column);
                    }
                    else if (__classPrivateFieldGet(this, _MinesweeperBoard_questionMarks, "f")[row][column]) {
                        this.removeQuestionMark(row, column);
                    }
                }
                if (__classPrivateFieldGet(this, _MinesweeperBoard_flags, "f")[row][column] || __classPrivateFieldGet(this, _MinesweeperBoard_positions, "f")[row][column] === FieldKey.BOMB_EXPLODE) {
                    __classPrivateFieldGet(this, _MinesweeperBoard_revealedFields, "f")[row][column] = true;
                }
            }
        }
    }
}
_MinesweeperBoard_positions = new WeakMap(), _MinesweeperBoard_flags = new WeakMap(), _MinesweeperBoard_flagCounter = new WeakMap(), _MinesweeperBoard_questionMarks = new WeakMap(), _MinesweeperBoard_revealedFields = new WeakMap();

;// CONCATENATED MODULE: ./src/engine/MinesweeperEngine.ts
var _MinesweeperEngine_board;



class MinesweeperEngine {
    constructor(onWinCallback = () => { }, onLoseCallback = () => { }) {
        _MinesweeperEngine_board.set(this, void 0);
        this.isGameOver = true;
        this.onWinCallback = onWinCallback;
        this.onLoseCallback = onLoseCallback;
    }
    get board() {
        return __classPrivateFieldGet(this, _MinesweeperEngine_board, "f");
    }
    createBoard(columns = 9, rows = 9, bombs = 10) {
        this.gameModeConfiguration = {
            columns,
            rows,
            bombs,
        };
        this.restart();
    }
    restart() {
        __classPrivateFieldSet(this, _MinesweeperEngine_board, new MinesweeperBoard(this.gameModeConfiguration), "f");
        this.isGameOver = false;
    }
    /**
     * @returns Delta of the amount of flags
     */
    toggleFlag(selectedRow, selectedColumn) {
        if (__classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealedFields[selectedRow][selectedColumn]) {
            return 0;
        }
        if (__classPrivateFieldGet(this, _MinesweeperEngine_board, "f").flags[selectedRow][selectedColumn]) {
            // removing a flag is always possible
            __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").removeFlag(selectedRow, selectedColumn);
            return -1;
        }
        if (__classPrivateFieldGet(this, _MinesweeperEngine_board, "f").flagCounter < __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").bombs) {
            // it should not be possible to place more flags than bombs
            __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").addFlag(selectedRow, selectedColumn);
            return 1;
        }
        return 0;
    }
    /**
     * @returns {number} Delta of the amount of question marks
     */
    toggleQuestionMark(selectedRow, selectedColumn) {
        if (__classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealedFields[selectedRow][selectedColumn]) {
            return 0;
        }
        if (__classPrivateFieldGet(this, _MinesweeperEngine_board, "f").questionMarks[selectedRow][selectedColumn]) {
            __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").removeQuestionMark(selectedRow, selectedColumn);
            return -1;
        }
        __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").addQuestionMark(selectedRow, selectedColumn);
        return 1;
    }
    selectField(selectedRow, selectedColumn) {
        const field = __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealField(selectedRow, selectedColumn);
        if (field === FieldKey.BOMB) {
            __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealBombs();
            this.onLoseCallback();
            this.isGameOver = true;
            return field;
        }
        // flatten the 2d boolean array and count false values
        const unrevealedFieldsAmount = __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealedFields
            .flat()
            .filter((revealedField) => !revealedField).length;
        if (unrevealedFieldsAmount === __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").bombs) {
            __classPrivateFieldGet(this, _MinesweeperEngine_board, "f").revealBombs(true);
            this.onWinCallback();
            this.isGameOver = true;
        }
        return field;
    }
}
_MinesweeperEngine_board = new WeakMap();

;// CONCATENATED MODULE: ./src/engine/index.ts



// EXTERNAL MODULE: ./src/assets/icons/bomb.svg
var bomb = __webpack_require__(726);
var bomb_default = /*#__PURE__*/__webpack_require__.n(bomb);
// EXTERNAL MODULE: ./src/assets/icons/bomb-explode.svg
var bomb_explode = __webpack_require__(528);
var bomb_explode_default = /*#__PURE__*/__webpack_require__.n(bomb_explode);
// EXTERNAL MODULE: ./src/assets/icons/flag.svg
var flag = __webpack_require__(379);
var flag_default = /*#__PURE__*/__webpack_require__.n(flag);
// EXTERNAL MODULE: ./src/assets/icons/flag-missed.svg
var flag_missed = __webpack_require__(202);
var flag_missed_default = /*#__PURE__*/__webpack_require__.n(flag_missed);
// EXTERNAL MODULE: ./src/assets/icons/question-mark.svg
var question_mark = __webpack_require__(177);
var question_mark_default = /*#__PURE__*/__webpack_require__.n(question_mark);
// EXTERNAL MODULE: ./src/assets/icons/unopened-square.svg
var unopened_square = __webpack_require__(100);
var unopened_square_default = /*#__PURE__*/__webpack_require__.n(unopened_square);
// EXTERNAL MODULE: ./src/assets/icons/number-0.svg
var number_0 = __webpack_require__(885);
var number_0_default = /*#__PURE__*/__webpack_require__.n(number_0);
// EXTERNAL MODULE: ./src/assets/icons/number-1.svg
var number_1 = __webpack_require__(113);
var number_1_default = /*#__PURE__*/__webpack_require__.n(number_1);
// EXTERNAL MODULE: ./src/assets/icons/number-2.svg
var number_2 = __webpack_require__(877);
var number_2_default = /*#__PURE__*/__webpack_require__.n(number_2);
// EXTERNAL MODULE: ./src/assets/icons/number-3.svg
var number_3 = __webpack_require__(389);
var number_3_default = /*#__PURE__*/__webpack_require__.n(number_3);
// EXTERNAL MODULE: ./src/assets/icons/number-4.svg
var number_4 = __webpack_require__(527);
var number_4_default = /*#__PURE__*/__webpack_require__.n(number_4);
// EXTERNAL MODULE: ./src/assets/icons/number-5.svg
var number_5 = __webpack_require__(434);
var number_5_default = /*#__PURE__*/__webpack_require__.n(number_5);
// EXTERNAL MODULE: ./src/assets/icons/number-6.svg
var number_6 = __webpack_require__(287);
var number_6_default = /*#__PURE__*/__webpack_require__.n(number_6);
// EXTERNAL MODULE: ./src/assets/icons/number-7.svg
var number_7 = __webpack_require__(312);
var number_7_default = /*#__PURE__*/__webpack_require__.n(number_7);
// EXTERNAL MODULE: ./src/assets/icons/number-8.svg
var number_8 = __webpack_require__(835);
var number_8_default = /*#__PURE__*/__webpack_require__.n(number_8);
;// CONCATENATED MODULE: ./src/config/Icons.ts















// @ Alias is currently not supported due to tsc or tsc-alias
/* harmony default export */ var Icons = ({
    Bomb: (bomb_default()),
    BombExplode: (bomb_explode_default()),
    Flag: (flag_default()),
    FlagMissed: (flag_missed_default()),
    QuestionMark: (question_mark_default()),
    UnopenedSquare: (unopened_square_default()),
    Number0: (number_0_default()),
    Number1: (number_1_default()),
    Number2: (number_2_default()),
    Number3: (number_3_default()),
    Number4: (number_4_default()),
    Number5: (number_5_default()),
    Number6: (number_6_default()),
    Number7: (number_7_default()),
    Number8: (number_8_default()),
});

;// CONCATENATED MODULE: ./src/config/index.ts


;// CONCATENATED MODULE: ./src/utils/index.ts

function getSVGReference(id) {
    // eslint-disable-next-line no-secrets/no-secrets
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" preserveAspectRatio="xMidYMid meet" enable-background="new 0 0 76 76"><use href="#${id}" /></svg>`;
}
function deltaToActionType(number) {
    if (number > 0) {
        return ActionType.Placed;
    }
    if (number < 0) {
        return ActionType.Removed;
    }
    return ActionType.NoChange;
}
function deepCopy(object) {
    if (Array.isArray(object)) {
        // @ts-expect-error: Unsafe type
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return object.map((item) => deepCopy(item));
    }
    if (object instanceof Date) {
        // @ts-expect-error: Unsafe type
        return new Date(object.getTime());
    }
    if (object && typeof object === 'object') {
        const getters = Object.entries(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(object)))
            .filter(([key, descriptor]) => typeof descriptor.get === 'function' && key !== '__proto__')
            .map(([key]) => key);
        const copy = {};
        for (const key of [...Object.keys(object), ...getters]) {
            // @ts-expect-error: Unsafe type
            copy[key] = deepCopy(object[key]);
        }
        // @ts-expect-error: Unsafe type
        return copy;
    }
    return object;
}

;// CONCATENATED MODULE: ./src/events/minesweeper-event.ts

class MinesweeperEvent extends CustomEvent {
    constructor(type, board, eventInitDict = {}) {
        const { detail, ...eventInitDictWithoutDetail } = eventInitDict;
        super(`minesweeper:${type}`, {
            detail: {
                board: deepCopy(board),
                ...detail,
            },
            bubbles: true,
            composed: true,
            cancelable: false,
            ...eventInitDictWithoutDetail,
        });
    }
}

;// CONCATENATED MODULE: ./src/events/field-click-event.ts

class FieldClickEvent extends MinesweeperEvent {
    constructor(board, target, field) {
        super('field-click', board, {
            cancelable: true,
            detail: {
                target,
                field,
            },
        });
    }
}

;// CONCATENATED MODULE: ./src/events/field-interaction-event.ts

class FieldInteractionEvent extends MinesweeperEvent {
    constructor(board, target, interaction) {
        super('field-interaction', board, {
            detail: {
                target,
                interaction,
            },
        });
    }
}

;// CONCATENATED MODULE: ./src/events/field-long-press-event.ts

class FieldLongPressEvent extends MinesweeperEvent {
    constructor(board, target, field) {
        super('field-long-press', board, {
            cancelable: true,
            detail: {
                target,
                field,
            },
        });
    }
}

;// CONCATENATED MODULE: ./src/events/game-lost-event.ts

class GameLostEvent extends MinesweeperEvent {
    constructor(board) {
        super('game-lost', board);
    }
}

;// CONCATENATED MODULE: ./src/events/game-won-event.ts

class GameWonEvent extends MinesweeperEvent {
    constructor(board) {
        super('game-won', board);
    }
}

;// CONCATENATED MODULE: ./src/events/index.ts







// EXTERNAL MODULE: ./src/minesweeper.scss
var minesweeper = __webpack_require__(637);
;// CONCATENATED MODULE: ./src/MinesweeperGame.ts

/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable lit-a11y/click-events-have-key-events */









const IconsReferences = {
    BOMB: getSVGReference('bomb'),
    BOMB_EXPLODE: getSVGReference('bomb-explode'),
    FLAG: getSVGReference('flag'),
    FLAG_MISSED: getSVGReference('flag-missed'),
    QUESTION_MARK: getSVGReference('question-mark'),
    UNOPENED_SQUARE: getSVGReference('unopened-square'),
    NUMBER_0: getSVGReference('blank'),
    NUMBER_1: getSVGReference('number-1'),
    NUMBER_2: getSVGReference('number-2'),
    NUMBER_3: getSVGReference('number-3'),
    NUMBER_4: getSVGReference('number-4'),
    NUMBER_5: getSVGReference('number-5'),
    NUMBER_6: getSVGReference('number-6'),
    NUMBER_7: getSVGReference('number-7'),
    NUMBER_8: getSVGReference('number-8'),
};
/**
 * @fires {GameWonEvent} minesweeper:game-won - User just won the game
 * @fires {GameLostEvent} minesweeper:game-lost - User just lost the game
 * @fires {FieldClickEvent} minesweeper:field-click - User clicked a field
 * @fires {FieldLongPressEvent} minesweeper:field-long-press - User long pressed a field
 * @fires {FieldInteractionEvent} minesweeper:field-interaction - Game state change occurred
 */
class MinesweeperGame extends lit_element_s {
    static get styles() {
        return r(minesweeper/* default */.Z);
    }
    constructor() {
        super();
        this.flagPlacementMode = false;
        this.disableQuestionMarks = false;
        this.longPressThreshold = 500;
        this.columns = 9;
        this.rows = 9;
        this.bombs = 10;
        this.isPressingFlagKey = false;
        this.engine = new MinesweeperEngine(this.gameWonCallback.bind(this), this.gameLostCallback.bind(this));
    }
    connectedCallback() {
        // @ts-expect-error: super.connectedCallback always defined
        if (super.connectedCallback) {
            super.connectedCallback();
        }
        if (this.restartSelector) {
            const restartElements = document.querySelectorAll(this.restartSelector);
            restartElements.forEach((restartElement) => {
                restartElement.addEventListener('click', this.restartGame.bind(this));
            });
        }
        this.createGameBoard();
        this.handleDocumentKeydown = this.handleDocumentKeydown.bind(this);
        this.handleDocumentKeyup = this.handleDocumentKeyup.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        document.addEventListener('keydown', this.handleDocumentKeydown);
        document.addEventListener('keyup', this.handleDocumentKeyup);
        document.addEventListener('scroll', this.handleScroll);
    }
    disconnectedCallback() {
        // @ts-expect-error: super.disconnectedCallback always defined
        if (super.disconnectedCallback) {
            super.disconnectedCallback();
        }
        document.removeEventListener('keydown', this.handleDocumentKeydown);
        document.removeEventListener('keyup', this.handleDocumentKeyup);
        document.removeEventListener('scroll', this.handleScroll);
    }
    handleDocumentKeydown(event) {
        this.isPressingFlagKey = event.ctrlKey || event.altKey || event.metaKey;
    }
    handleDocumentKeyup() {
        this.isPressingFlagKey = false;
    }
    handleSweeperContainerMouseMove(event) {
        this.isPressingFlagKey = event.ctrlKey || event.altKey || event.metaKey;
    }
    createGameBoard() {
        if (this.engine) {
            this.engine.createBoard(this.columns, this.rows, this.bombs);
            this.requestUpdate();
        }
    }
    gameWonCallback() {
        this.dispatchEvent(new GameWonEvent(this.engine.board));
    }
    gameLostCallback() {
        this.dispatchEvent(new GameLostEvent(this.engine.board));
    }
    setGameModeConfiguration(gameModeConfiguration) {
        this.columns = gameModeConfiguration.columns;
        this.rows = gameModeConfiguration.rows;
        this.bombs = gameModeConfiguration.bombs;
        this.createGameBoard();
    }
    restartGame() {
        if (this.engine) {
            this.engine.restart();
            this.requestUpdate();
        }
    }
    get isLongPressDisabled() {
        return !this.longPressThreshold || this.longPressThreshold <= 0;
    }
    resetLongPressStates() {
        if (!this.isLongPressDisabled) {
            window.clearTimeout(this.longPressTimerId);
        }
    }
    handleScroll() {
        this.resetLongPressStates();
    }
    handleLongPress(sweeperField) {
        const { row, column } = sweeperField.dataset;
        if (!row || !column) {
            console.error(new Error('Provided sweeper field does not contain the "row" and "column" data attribute.'));
            return;
        }
        const selectedRow = Number.parseInt(row, 10);
        const selectedColumn = Number.parseInt(column, 10);
        const allowed = this.dispatchEvent(new FieldLongPressEvent(this.engine.board, {
            row: selectedRow,
            column: selectedColumn,
        }, sweeperField));
        if (!allowed) {
            return;
        }
        let animationIntervalId;
        const flagSvg = sweeperField.querySelector('svg');
        if (!flagSvg) {
            console.error(new Error('Svg child of the provided sweeper field not found.'));
            return;
        }
        let currentScale = 1;
        const scale = () => {
            if (currentScale >= 1.25) {
                window.clearInterval(animationIntervalId);
                flagSvg.style.transform = 'none';
                this.triggerSecondActionClick(selectedRow, selectedColumn);
                this.requestUpdate();
            }
            else {
                currentScale += 0.01;
                flagSvg.style.transform = `scale(${currentScale})`;
            }
        };
        animationIntervalId = window.setInterval(scale, 2);
        if (typeof window.navigator.vibrate === 'function') {
            window.navigator.vibrate(100);
        }
    }
    handleFieldClickStart(event) {
        if (window.ontouchstart !== undefined && event.type === 'mousedown') {
            this.resetLongPressStates();
            return;
        }
        const currentSweeperField = event.currentTarget;
        this.pressStartSweeperField = currentSweeperField;
        if (this.isLongPressDisabled) {
            return;
        }
        this.pressStartTimestamp = event.timeStamp;
        if (this.engine && this.engine.board && !this.engine.isGameOver) {
            this.longPressTimerId = window.setTimeout(() => this.handleLongPress(currentSweeperField), this.longPressThreshold);
        }
    }
    handleFieldClickLeave() {
        this.resetLongPressStates();
    }
    handleFieldClickEnd(event) {
        const currentSweeperField = event.currentTarget;
        const wasLongPress = !this.isLongPressDisabled &&
            event.timeStamp - (this.pressStartTimestamp || event.timeStamp) > this.longPressThreshold;
        const stillSameSweeperField = this.pressStartSweeperField === currentSweeperField;
        this.resetLongPressStates();
        if (!this.engine ||
            !this.engine.board ||
            this.engine.isGameOver ||
            !stillSameSweeperField ||
            wasLongPress) {
            return;
        }
        const { row, column } = currentSweeperField.dataset;
        if (!row || !column) {
            console.error(new Error('Provided sweeper field does not contain the "row" and "column" data attribute.'));
            return;
        }
        const selectedRow = Number.parseInt(row, 10);
        const selectedColumn = Number.parseInt(column, 10);
        const allowed = this.dispatchEvent(new FieldClickEvent(this.engine.board, {
            row: selectedRow,
            column: selectedColumn,
        }, currentSweeperField));
        if (!allowed) {
            return;
        }
        const { flags } = this.engine.board;
        const hasFlag = flags[selectedRow][selectedColumn];
        if (event.ctrlKey || event.altKey || event.metaKey || this.flagPlacementMode) {
            this.triggerSecondActionClick(selectedRow, selectedColumn);
        }
        else if (!hasFlag) {
            // if user performs a regular click on a field with a flag on it cancel it
            const fieldValue = this.engine.selectField(selectedRow, selectedColumn);
            this.dispatchEvent(new FieldInteractionEvent(this.engine.board, {
                row: selectedRow,
                column: selectedColumn,
            }, {
                type: FieldInteractionType.Unveiled,
                value: fieldValue,
            }));
        }
        this.requestUpdate();
    }
    triggerSecondActionClick(selectedRow, selectedColumn) {
        const { flags, questionMarks } = this.engine.board;
        const hasFlag = flags[selectedRow][selectedColumn];
        const hasQuestionMark = questionMarks[selectedRow][selectedColumn];
        const fieldTarget = {
            row: selectedRow,
            column: selectedColumn,
        };
        if (!this.flagPlacementMode && !this.disableQuestionMarks && (hasQuestionMark || hasFlag)) {
            const questionMarksDelta = this.engine.toggleQuestionMark(selectedRow, selectedColumn);
            if (hasFlag && questionMarksDelta === 1) {
                this.dispatchEvent(new FieldInteractionEvent(this.engine.board, fieldTarget, {
                    type: FieldInteractionType.FlagAction,
                    action: deltaToActionType(-1),
                }));
            }
            this.dispatchEvent(new FieldInteractionEvent(this.engine.board, fieldTarget, {
                type: FieldInteractionType.QuestionMarkAction,
                action: deltaToActionType(questionMarksDelta),
            }));
        }
        else {
            const flagsDelta = this.engine.toggleFlag(selectedRow, selectedColumn);
            this.dispatchEvent(new FieldInteractionEvent(this.engine.board, fieldTarget, {
                type: FieldInteractionType.FlagAction,
                action: deltaToActionType(flagsDelta),
            }));
        }
    }
    render() {
        var _a;
        if (!((_a = this.engine) === null || _a === void 0 ? void 0 : _a.board)) {
            return x `No Board :(`;
        }
        const { bombs, flagCounter, positions } = this.engine.board;
        if (this.bombCounterSelector) {
            const bombCounterElements = document.querySelectorAll(this.bombCounterSelector);
            bombCounterElements.forEach((element) => {
                // eslint-disable-next-line no-param-reassign
                element.textContent = `${bombs - flagCounter}`;
            });
        }
        return x `
      <div
        class="sweeper-container${this.flagPlacementMode || this.isPressingFlagKey
            ? ' show-hover-elements'
            : ''}"
        @mousemove="${this.handleSweeperContainerMouseMove}"
        @scroll="${this.handleScroll}"
      >
        <div class="sweeper-box" @click="${(event) => event.preventDefault()}">
          ${positions.map((row, rowIndex) => x `
                <div class="sweeper-row">
                  ${row.map((field, columnIndex) => this.getSweeperFieldHtml(rowIndex, columnIndex))}
                </div>
              `)}
        </div>
        <div class="svg-container">
          ${Object.values(Icons).map((element) => unsafe_svg_o(element))}
        </div>
      </div>
    `;
    }
    getSweeperFieldSvg(rowIndex, columnIndex) {
        const { revealedFields, questionMarks, flags, positions } = this.engine.board;
        const isRevealed = revealedFields[rowIndex][columnIndex];
        const hasQuestionMark = questionMarks[rowIndex][columnIndex];
        const hasFlag = flags[rowIndex][columnIndex];
        let sweeperFieldSvg = IconsReferences.UNOPENED_SQUARE;
        if (isRevealed) {
            const fieldValue = positions[rowIndex][columnIndex];
            if (fieldValue === FieldKey.BOMB) {
                sweeperFieldSvg = hasFlag ? IconsReferences.FLAG : IconsReferences.BOMB;
            }
            else if (fieldValue === FieldKey.BOMB_EXPLODE) {
                sweeperFieldSvg = IconsReferences.BOMB_EXPLODE;
            }
            else if (hasFlag) {
                sweeperFieldSvg = IconsReferences.FLAG_MISSED;
            }
            else {
                const numberKey = `NUMBER_${fieldValue}`;
                sweeperFieldSvg = IconsReferences[numberKey];
            }
        }
        else if (hasQuestionMark) {
            sweeperFieldSvg = IconsReferences.QUESTION_MARK;
        }
        else if (hasFlag) {
            sweeperFieldSvg = IconsReferences.FLAG;
        }
        return sweeperFieldSvg;
    }
    getHoverSweeperFieldSvg(mainSweeperFieldSvg) {
        switch (mainSweeperFieldSvg) {
            case IconsReferences.FLAG: {
                return this.disableQuestionMarks || this.flagPlacementMode
                    ? IconsReferences.UNOPENED_SQUARE
                    : IconsReferences.QUESTION_MARK;
            }
            case IconsReferences.QUESTION_MARK: {
                return IconsReferences.UNOPENED_SQUARE;
            }
            case IconsReferences.UNOPENED_SQUARE: {
                return IconsReferences.FLAG;
            }
            default: {
                return mainSweeperFieldSvg;
            }
        }
    }
    getSweeperFieldHtml(rowIndex, columnIndex) {
        const { isGameOver, board: { revealedFields, flags }, } = this.engine;
        const isRevealed = revealedFields[rowIndex][columnIndex];
        const hasFlag = flags[rowIndex][columnIndex];
        const sweeperFieldSvg = this.getSweeperFieldSvg(rowIndex, columnIndex);
        const sweeperFieldClass = isRevealed || (hasFlag && !(this.flagPlacementMode || this.isPressingFlagKey)) || isGameOver
            ? ' unselectable'
            : '';
        const attachEventListener = !isRevealed && !isGameOver;
        if (attachEventListener) {
            return x `
        <div
          class="sweeper-field${sweeperFieldClass}"
          @touchstart="${this.handleFieldClickStart}"
          @touchend="${this.handleFieldClickLeave}"
          @touchcancel="${this.handleFieldClickLeave}"
          @mousedown="${this.handleFieldClickStart}"
          @mouseup="${this.handleFieldClickLeave}"
          @mouseleave="${this.handleFieldClickLeave}"
          @click="${this.handleFieldClickEnd}"
          data-row="${rowIndex}"
          data-column="${columnIndex}"
        >
          ${unsafe_svg_o(sweeperFieldSvg)} ${unsafe_svg_o(this.getHoverSweeperFieldSvg(sweeperFieldSvg))}
        </div>
      `;
        }
        // game is over or field already revealed
        return x `
      <div
        class="sweeper-field${sweeperFieldClass}"
        data-row="${rowIndex}"
        data-column="${columnIndex}"
      >
        ${unsafe_svg_o(sweeperFieldSvg)}
      </div>
    `;
    }
}
__decorate([
    property_e({
        attribute: 'restart-selector',
        type: String,
    })
], MinesweeperGame.prototype, "restartSelector", void 0);
__decorate([
    property_e({
        attribute: 'bomb-counter-selector',
        type: String,
    })
], MinesweeperGame.prototype, "bombCounterSelector", void 0);
__decorate([
    property_e({
        attribute: 'flag-placement-mode',
        type: Boolean,
        reflect: true,
    })
], MinesweeperGame.prototype, "flagPlacementMode", void 0);
__decorate([
    property_e({
        attribute: 'disable-question-marks',
        type: Boolean,
    })
], MinesweeperGame.prototype, "disableQuestionMarks", void 0);
__decorate([
    property_e({
        attribute: 'long-press-threshold',
        type: Number,
    })
], MinesweeperGame.prototype, "longPressThreshold", void 0);
__decorate([
    property_e({
        type: Number,
    })
], MinesweeperGame.prototype, "columns", void 0);
__decorate([
    property_e({
        type: Number,
    })
], MinesweeperGame.prototype, "rows", void 0);
__decorate([
    property_e({
        type: Number,
    })
], MinesweeperGame.prototype, "bombs", void 0);
__decorate([
    state_t({})
], MinesweeperGame.prototype, "engine", void 0);
__decorate([
    state_t({})
], MinesweeperGame.prototype, "pressStartTimestamp", void 0);
__decorate([
    state_t({})
], MinesweeperGame.prototype, "pressStartSweeperField", void 0);
__decorate([
    state_t({})
], MinesweeperGame.prototype, "longPressTimerId", void 0);
__decorate([
    state_t({})
], MinesweeperGame.prototype, "isPressingFlagKey", void 0);
__decorate([
    event_options_e({ passive: true })
], MinesweeperGame.prototype, "handleFieldClickStart", null);
__decorate([
    event_options_e({ passive: true })
], MinesweeperGame.prototype, "handleFieldClickLeave", null);
/* harmony default export */ var src_MinesweeperGame = (MinesweeperGame);

}();
var __webpack_exports__MinesweeperGame = __webpack_exports__.A;
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__MinesweeperGame as MinesweeperGame, __webpack_exports__default as default };

//# sourceMappingURL=minesweeper-game.js.map