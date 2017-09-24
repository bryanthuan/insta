## To Start

### Code Use

You are welcome to use this code in your own applications. If you would like to use it for training purposes, please shoot me a message first to make sure it's okay.


# Frequently Asked Questions

#### :question: Where are folders `2`, `3`, and `5`?
Not all the videos have significant enough code changes to warrant an entire folder. Although you should be coding them all yourself, the code is available in the next video's folder.

#### :question: I tried installing the Babel syntax highlighter but it didn't work!

There are a few possible options:

* If you are on Sublime Text 2, you should Upgrade to Sublime Text 3.
* Some users have reported restarting works
* You can try the [JavaScript Next](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax) syntax highlighter instead

#### :question: I can't set Babel as the default syntax highlighter!

Make sure you are in a file with the extension of `.js` before you do this step - you can't set the default for a file without having a file open!

#### :question: I can't see the React tab in my dev tools

Restart your dev tools or your chrome browser entirely. They will only show up when you are viewing a React app - so make sure you test it on Facebook or another website that is running React. It won't work on your empty `main.js` file until you `import React from 'react'`.

#### :question: `npm start` doesn't update the app on file save, or doesn't run correctly.

There may be a few different causes for this:
 - Webpack currently can't handle folder/file names that contain parentheses.
 - Webpack also has problems running inside folders for Dropbox/Google Drive type services. Git is recommended for keeping your files in sync across multiple computers.
