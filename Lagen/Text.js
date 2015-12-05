
'use strict';

var Text = function(str) {
    GlobalAttributes.call(this);
    this.text = str ? str : '';
    this.size = null;
    this.color = null;
};
Text.prototype = Object.create(GlobalAttributes.prototype);

Text.prototype.getHTML = function() {
    var out;
    if (this.size || this.color) {
        out = '<font';
	if (this.size)
	    out += ' size="' + this.size + '"';
	if (this.color)
	    out += ' color="' + this.color + '"';
	out += this.getGlobalAttributes();
	out += '>' + this.text + '</font>';
    } else
        out = this.text;
    return out;
};

Text.prototype.setSize = function(n) {
    this.size = n;
    return this;
};

Text.prototype.setColor = function(n) {
    this.color = n;
    return this;
};

Text.prototype.par = function() {
    this.text += '<p>';
    return this;
};

Text.prototype.add = function(txt) {
    this.text += txt;
    return this;
};
