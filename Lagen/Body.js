
'use strict';

var Body = function () {
    this.body = $('body');
};

Body.prototype.add = function (elm) {
    this.body.append(elm.getHTML());
    return this;
};
