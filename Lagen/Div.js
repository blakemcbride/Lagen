
'use strict';

var Div = function () {
    GlobalAttributes.call(this);
    EventAttributes.call(this);
    this.children = [];
    this.style = '';
};
Div.prototype = Object.create(GlobalAttributes.prototype);
$.extend(Div.prototype, EventAttributes.prototype);

Div.prototype.add = function (x) {
    this.children.push(x);
    return this;
};

Div.prototype.getHTML = function () {
    var i, out = '<div';
    out += this.getGlobalAttributes();
    if (this.style)
        out += ' style="' + this.style + '"';
    out += '>';
    for (i=0 ; i < this.children.length ; i++)
        out += this.children[i].getHTML();
    out += '</div>';
    return out;
};

Div.prototype.getStyle = function () {
    return this.style;
};

Div.prototype.left = function () {
    this.style += 'float:left;';
    return this;
};

Div.prototype.height = function (h) {
    if (typeof h === 'number')
        h = h + 'px';
    this.style += 'height:' + h + ';';
    return this;
};

Div.prototype.width = function (w) {
    if (typeof w === 'number')
        w = w + 'px';
    this.style += 'width:' + w + ';';
    return this;
};

Div.prototype.bgColor = function (c) {
    this.style += 'background-color:' + c + ';';
    return this;
};

Div.prototype.color = function (c) {
    this.style += 'color:' + c + ';';
    return this;
};

Div.prototype.textAlign = function (a) {
    this.style += 'text-align:' + a + ';';
    return this;
};

Div.prototype.padding = function (p) {
    if (typeof p === 'number')
        p = p + 'px';
    this.style += 'padding:' + p + ';';
    return this;
};

Div.prototype.leftPadding = function (p) {
    if (typeof p === 'number')
        p = p + 'px';
    this.style += 'padding-left:' + p + ';';
    return this;
};

Div.prototype.lineHeight = function (p) {
    if (typeof p === 'number')
        p = p + 'px';
    this.style += 'line-height:' + p + ';';
    return this;
};

/**
 * Take up the whole row, nothing to the left or right of this div
 *
 * @returns {Div}
 */
Div.prototype.wholeRow = function () {
    this.style += 'clear:both;';
    return this;
};
