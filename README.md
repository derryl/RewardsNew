RewardsNew
==========

New version of Rewards, running an entirely different front-end. The new application consists of the following:

###General Structure
* __index.html__ - a simple HTML file with a container object
* JS application that provides all functionality. Usually cached. When element(s) of it are not cached, it will be provided piece-meal by the server. We only download as much as is necessary.
* All application data (offers, etc.) are provided by the server as JSON.
* More details to come (on caching, inlining, application structure, etc.)

###Javascript
* __Zepto.js__ - DOM manipulation + AJAX handlers
* __Underscore.js__ - JS functions + Backbone support
* __Backbone.js__ - Data models, event binding, and general structure
* __ICanHaz.js__ - Improved, cleaner version of Mustache.js
