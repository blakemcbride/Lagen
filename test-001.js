
'use strict';

new Application(function(){

    Application.setTabText('Tab Text');
    var body = new Body();
    var h = new Heading(1, "My Heading");
    h.align('center');
    body.add(h);

    var txt = new Text('Line 1');
    txt.setSize(4);
    body.add(txt);

    txt = new Text('Line 2');
    txt.setSize(2);
    txt.setColor('red');
    body.add(txt);

});


