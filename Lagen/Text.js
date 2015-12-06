
'use strict';

var Text = function(str) {
    GlobalAttributes.call(this);
    this.text = str ? str : '';
    this.style = '';
};
Text.prototype = Object.create(GlobalAttributes.prototype);

Text.prototype.getHTML = function() {
    var out = '<div';
    if (this.style)
        out += ' style="' + this.style + '"';
	out += this.getGlobalAttributes();
	out += '>' + this.text + '</div>';
    return out;
};

Text.prototype.setSize = function(n) {
    if (typeof n === 'number')
        n = n + 'em';
    this.style += 'font-size:' + n + ';';
    return this;
};

Text.prototype.setColor = function(n) {
    this.style += 'color:' + n + ';';
    return this;
};

Text.prototype.break = function() {
    this.text += '<br/>';
    return this;
};

Text.prototype.add = function(txt) {
    this.text += txt;
    return this;
};

Text.prototype.append = function(txt) {
    this.text += txt;
    return this;
};

Text.prototype.padding = function(n) {
    if (typeof n === 'number')
        n = n + 'px';
    this.style += 'padding:' + n + ';';
    return this;
};

Text.prototype.topPadding = function(n) {
    if (typeof n === 'number')
        n = n + 'px';
    this.style += 'padding-top:' + n + ';';
    return this;
};

Text.prototype.leftPadding = function(n) {
    if (typeof n === 'number')
        n = n + 'px';
    this.style += 'padding-left:' + n + ';';
    return this;
};
