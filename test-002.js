
'use strict';


new Application(function(){

    Application.setTabText('tab text');
    var body = new Body();

    var div = new Div();
    div.bgColor('black').color('white');
    div.textAlign('center').padding(5);
    div.height(100);

    var txt = new Text('City Gallery');
    txt.setSize(4).topPadding(10);
    div.add(txt);

    body.add(div);

    div = new Div();
    div.left();
    div.height(300).width(100).padding(5);
    div.bgColor('#eeeeee');

    txt = new Text('London Paris Tokyo');
    txt.setSize(1.5).topPadding(20);
    div.add(txt);

    body.add(div);

    div = new Div();
    div.left().leftPadding(20).width(350);

    txt = new Text('London');
    txt.setSize(2).topPadding(50);
    div.add(txt);

    txt = new Text('London is the capital city of England. It is the most ');
    txt.append('populous city in the United Kingdom, with a ');
    txt.append('metropolitan area of over 13 million inhabitants.');
    txt.topPadding(20);
    div.add(txt);

    txt = new Text('Standing on the River Thames, London has been a ');
    txt.append('major settlement for two millennia, its history going ');
    txt.append('back to its founding by the Romans, who named it ');
    txt.append('Londinium.');
    txt.topPadding(20);
    div.add(txt);

    body.add(div);

    div = new Div().wholeRow();
    div.bgColor('black').color('white');

    txt = new Text('This is the footer.');

    div.add(txt);

    body.add(div);

});
