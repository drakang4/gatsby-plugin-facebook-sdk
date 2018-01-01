'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPreBodyComponents = _ref.setPreBodyComponents;

  return setPreBodyComponents([_react2.default.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: '\n          fbAsyncInit = function() {\n            FB.init(' + pluginOptions + ');\n          };\n\n          (function(d, s, id){\n            var js, fjs = d.getElementsByTagName(s)[0];\n            if (d.getElementById(id)) {return;}\n            js = d.createElement(s); js.id = id;\n            js.src = "https://connect.facebook.net/en_US/sdk.js";\n            fjs.parentNode.insertBefore(js, fjs);\n          }(document, \'script\', \'facebook-jssdk\'));\n        ' }
  })]);
};