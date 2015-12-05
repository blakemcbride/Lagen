
'use strict';

var GlobalAttributes = function () {
    this.cls = null;
    this.hidden = null;
    this.id = null;
    this.style = null;
    this.title = null;
};

GlobalAttributes.prototype.getGlobalAttributes = function () {
    var out = '';
    if (this.cls)
        out += ' class="' + this.cls + '"';
    if (this.hidden)
        out += ' hidden';
    if (this.id)
        out += ' id="' + this.id + '"';
    if (this.style)
        out += ' style="' + this.style + '"';
    if (this.title)
        out += ' title="' + this.title + '"';
    return out;
};

GlobalAttributes.prototype.setClass = function (cls) {
    this.cls = cls;
    return this;
};
