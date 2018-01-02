import React from 'react';
import stripIndent from 'strip-indent';

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  return setPreBodyComponents([
    (<script
      key={`gatsby-plugin-facebook-sdk`}
      dangerouslySetInnerHTML={{
        __html: stripIndent`
          fbAsyncInit = function() {
            FB.init(${JSON.stringify(pluginOptions)});
          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}}
      />),
  ]);
};