## npm start or yarn start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

## npm test or yarn test
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

Read more about testing.

## npm run build or yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.


## Sentry (https://sentry.io)

yarn add @sentry/browser 

Changed **SENTRY_CLIENT_DSN** for Sentry init in index.js

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "SENTRY_CLIENT_DSN"
});
 
Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
                scope.setExtra('userId', Math.random()*1000);
            });
            Sentry.captureException(error);
});
 

## LogRocket (https://logrocket.com)

yarn add logrocket 

Changed **LOGROCKET_ORGANIZATION_INFO** for LogRocket init in App.js and index.js

import LogRocket from 'logrocket';

LogRocket.init('LOGROCKET_ORGANIZATION_INFO');

## Firebase

yarn add firebase-tools

firebase login

firebase init
	hosting
	build

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File build/index.html already exists. Overwrite? (y/N) N

firebase deploy


This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
