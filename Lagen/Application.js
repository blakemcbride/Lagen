
'use strict';

var Application = function (fun) {
    $(document).ready(fun);
};

Application.setTabText = function(arg)
{
    $('head').append('<title>' + arg + '</title>');
    return this;
};
