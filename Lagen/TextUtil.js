
'use strict';

var TextUtil = function(str) {
    GlobalAttributes.call(this);
    this.text = str ? str : '';
    this.size = null;
    this.color = null;
};
TextUtil.prototype = Object.create(GlobalAttributes.prototype);

TextUtil.prototype.getHTML = function() {
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
}

TextUtil.prototype.setSize = function(n) {
    this.size = n;
    return this;
};

TextUtil.prototype.setColor = function(n) {
    this.color = n;
    return this;
};

TextUtil.prototype.par = function() {
    this.text += '<p>';
    return this;
};

TextUtil.prototype.add = function(txt) {
    this.text += txt;
    return this;
};
