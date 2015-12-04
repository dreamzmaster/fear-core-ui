'use strict';

var lint = require('./tasks/lint'),
    sass = require('./tasks/sass'),
    sprites = require('./tasks/sprites');

lint();
sass();
sprites();
