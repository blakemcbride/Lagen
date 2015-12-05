
'use strict';

var Heading = function(level, text) {
    GlobalAttributes.call(this);
    this.level = level;
    this.text = text;
    this.alignment = null;
};
Heading.prototype = Object.create(GlobalAttributes.prototype);

Heading.prototype.getHTML = function () {
    var out = '<h' + this.level;
    if (this.alignment)
        out += ' align="' + this.alignment + '"';
    out += this.getGlobalAttributes();
    out += '>' + this.text + '</h' + this.level + '>';
    return out;
};

Heading.prototype.align = function (a) {
    this.alignment = a;
    return this;
};
