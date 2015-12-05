
'use strict';

new Application(function(){

    Application.setTabText('tab text');
    var body = new Body();
    var h = new Heading(1, "My Heading");
    h.align('center');
    body.add(h);
    
    var txt = new TextUtil('hello there');
    txt.setSize(4);
    txt.par();
    body.add(txt);
    
    txt = new TextUtil('way fair');
    txt.setSize(2).setClass('yyy');
    txt.setColor('red');
    body.add(txt);

});

