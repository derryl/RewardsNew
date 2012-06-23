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


-------

###Instructions
* `git clone https://github.com/derrylwc/RewardsNew.git`
* `cd RewardsNew`
* `python run.py`

Tune your browser to http://0.0.0.0:7000, and enjoy. Although there's only one HTML file, Backbone's AppRouter will display different Views depending on your URL string. 

* `/` displays the Offer Wall.
* `/#offer/id` will display a single Offer, using the Offer ID specified in `feeds/offers.json`