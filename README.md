# gatsby-plugin-facebook-sdk

Gatsby plugin to integrate [Facebook Javascript SDK](https://developers.facebook.com/docs/javascript) on your project.

## Install

`npm install --save gatsby-plugin-facebook-sdk` or `yarn add gatsby-plugin-facebook-sdk`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-facebook-sdk`,
    options: {
      appId: 'your-app-id',
      ...
    },
  },
];
```

### Configuration

You can find all initialization options in [official Facebook SDK reference](https://developers.facebook.com/docs/javascript/reference/FB.init)
