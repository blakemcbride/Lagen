
'use strict';

var Div = function () {
    GlobalAttributes.call(this);
    EventAttributes.call(this);
    this.children = [];
};
Div.prototype = Object.create(GlobalAttributes.prototype);
$.extend(Div.prototype, EventAttributes.prototype);

Div.prototype.add = function (x) {
    this.children.push(x);
    return this;
};

Div.prototype.getHTML = function () {
    var i, out = '<div';
    out += this.getGlobalAttributes()
    out += '>';
    for (i=0 ; i < this.children.length ; i++)
        out += this.children[i].getHTML();
    out += '</div>'
    return out;
};
