define('app',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  App.prototype.configureRouter = function configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{ route: ['', 'aurelia-accordion'], name: 'aurelia-accordion', moduleId: './views/aurelia-accordion/aurelia-accordion', nav: false, title: 'Aurelia Accordion Sample' }]);

    this.router = router;
  };

  return App;
}();
});

define('environment',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.default = {
  debug: true,
  testing: true
};
});

define('main',['require','exports','module','./environment'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.configure = configure;

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

function configure(aurelia) {
  aurelia.use.standardConfiguration().feature('resources');

  if (_environment2.default.debug) {
    aurelia.use.developmentLogging();
  }

  if (_environment2.default.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}
});

define('resources/index',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.configure = configure;
function configure(config) {
  config.globalResources(['resources/elements/accordion']);
}
});

define('views/aurelia-accordion/aurelia-accordion',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AureliaAccordion = exports.AureliaAccordion = function AureliaAccordion() {
  _classCallCheck(this, AureliaAccordion);

  this.message = 'Hello World!';
  this.views = [{ title: "Panel 1", viewUrl: "views/aurelia-accordion/viewOne.html" }, { title: "Panel 2", viewUrl: "views/aurelia-accordion/viewTwo.html" }, { title: "Panel 3", viewUrl: "views/aurelia-accordion/viewThree.html" }];

  this.otherViews = [{ title: "Panel 1", viewUrl: "views/aurelia-accordion/viewOne.html" }, { title: "Panel 2", viewUrl: "views/aurelia-accordion/viewTwo.html" }, { title: "Panel 3", viewUrl: "views/aurelia-accordion/viewThree.html" }];

  this.message = "Gregor Samsa";
};
});

define('resources/attributes/allowexpendmultiple',['require','exports','module','aurelia-framework'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.AllowExpendMultipleCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AllowExpendMultipleCustomAttribute = exports.AllowExpendMultipleCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
  function AllowExpendMultipleCustomAttribute(element) {
    _classCallCheck(this, AllowExpendMultipleCustomAttribute);

    this.element = element;
    this.element.AllowExpendMultiple = true;
  }

  AllowExpendMultipleCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

  return AllowExpendMultipleCustomAttribute;
}()) || _class);
});

define('resources/elements/accordion',['require','exports','module','aurelia-framework'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Accordion = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _aureliaFramework = require("aurelia-framework");

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Accordion = exports.Accordion = (_class = function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    _initDefineProp(this, "panels", _descriptor, this);

    _initDefineProp(this, "allowExpendMultiple", _descriptor2, this);

    _initDefineProp(this, "vm", _descriptor3, this);

    _initDefineProp(this, "styles", _descriptor4, this);
  }

  Accordion.prototype.bind = function bind() {
    if (!this.allowExpendMultiple) {
      this.allowExpendMultiple = false;
    }

    if (this.panels) {
      this.panels.forEach(function (panel) {
        panel.active = false;
      });
    } else {
      throw new Error("Panels are not bound!");
    }
  };

  Accordion.prototype.toggle = function toggle(index) {
    this.panels[index].active = !this.panels[index].active;
    if (!this.allowExpendMultiple) {
      for (var counter = 0; counter < this.panels.length; counter++) {
        if (counter !== index) {
          this.panels[counter].active = false;
        }
      }
    }
  };

  return Accordion;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "panels", [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "allowExpendMultiple", [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "vm", [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "styles", [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class);
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <ul>\n      <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n        <a href.bind=\"row.href\">${row.title}</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!appStyles.css', ['module'], function(module) { module.exports = ".aurelia-accordion-panel-header {\r\n    /*background: lightblue;*/\r\n}\r\n\r\n.aurelia-accordion-sample-div {\r\n    width: 300px;\r\n}\r\n\r\n.underline  {\r\n    text-decoration: underline;\r\n    color: red; \r\n}"; });
define('text!resources/elements/accordion.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles.css\"></require>\n  <div class=\"aurelia-accordion\">\n    <div id=\"panel-${$index}\" class=\"aurelia-accordion-panel\" repeat.for=\"panel of panels\">\n      <div id=\"panel-header-${$index}\" class=\"aurelia-accordion-panel-header\" click.delegate=\"toggle($index)\">${panel.title}</div>\n      <div id=\"panel-body-${$index}\" class=\"${panel.active ? 'aurelia-accordion-panel-body-active' : 'aurelia-accordion-panel-body-inactive'}\">\n        <compose view=\"${panel.viewUrl}\"></compose>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!resources/elements/styles.css', ['module'], function(module) { module.exports = ".aurelia-accordion-panel-header {\r\n    cursor: pointer;\r\n    background: lightgray;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;   \r\n    padding: 2px 5px; \r\n}\r\n\r\n::-moz-selection { /* Code for Firefox */\r\n    opacity: 0;\r\n}\r\n\r\n::selection {\r\n    opacity: 0;\r\n}\r\n\r\n.aurelia-accordion-panel-body-inactive {\r\n\tmax-height: 0;\r\n\toverflow: hidden;\r\n\r\n\t-webkit-transition: max-height 0.1s;\r\n\t-moz-transition: max-height 0.1s;\r\n\ttransition: max-height 0.1s;\r\n}\r\n\r\n.aurelia-accordion-panel-body-active {\r\n    max-height: 1000px;\r\n\r\n    -webkit-transition: max-height 0.3s;\r\n\t-moz-transition: max-height 0.3s;\r\n\ttransition: max-height 0.3s;\r\n}\r\n\r\n.aurelia-accordion-panel {\r\n    border: 1px solid lightgrey;\r\n    border-radius: 3px;\r\n}\r\n\r\n.aurelia-accordion {\r\n\r\n}\r\n\r\n.aurelia-accordion > :not(:last-child) {\r\n    margin-bottom: 5px;\r\n}"; });
define('text!views/aurelia-accordion/aurelia-accordion.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"../../appStyles.css\"></require>\r\n\r\n    <h3>Expend <span class=\"underline\">one</span> panel at a time</h3>\r\n    <div class=\"aurelia-accordion-sample-div\">\r\n        <accordion panels.two-way=\"views\"\r\n                   vm.two-way=\"$this\"></accordion>    \r\n    </div>\r\n\r\n    <h3>Expend <span class=\"underline\">multiple</span> panels at a time</h3>\r\n    <div class=\"aurelia-accordion-sample-div\">\r\n        <accordion allow-expend-multiple=\"true\"\r\n                   panels.two-way=\"otherViews\"\r\n                   vm.two-way=\"$this\"></accordion>    \r\n    </div>\r\n</template>"; });
define('text!views/aurelia-accordion/viewOne.html', ['module'], function(module) { module.exports = "<template>\r\n    <p>\r\n    Hello, ${vm.message}.\r\n    <br>\r\n    <br>\r\n    You can see your name in the second panel as well\r\n    </p>\r\n    <br>\r\n    <input value.two-way=\"vm.message\" />\r\n</template>\r\n"; });
define('text!views/aurelia-accordion/viewThree.html', ['module'], function(module) { module.exports = "<template>\r\n    Well... <br>\r\n    Well... <br>\r\n    Well... <br>\r\n    Well... <br>\r\n    Well... <br>\r\n    Well... <br>\r\n</template>"; });
define('text!views/aurelia-accordion/viewTwo.html', ['module'], function(module) { module.exports = "<template>\r\n    Hi\r\n    ${vm.message}\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map