var dotIndex = 0;
var graphviz = d3.select("#graph2").graphviz()
    .transition(function () {
        return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(10)
            .duration(10);
    })
    .logEvents(true)
    .on("initEnd", render);

function render() {
    var dotLines = dots[dotIndex];
    var dot = dotLines.join('');
    //.addImage("画像として使用したいScrapBOXのアイコンページを指定"),"サイズ"
    graphviz
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx

        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}

var dots = [
    //グラフ001
     ['digraph{',
      'rankdir = "TB";',
        'subgraph cluster_1 {',
            'label = "移行シート"',
                'node [shape = planetext,fontcolor="",label="最初"];move1;',
                             '}',
                            
        'subgraph cluster_2 {',
            'label = "メインシート"',
                'node [shape = box3d,label="スタート"];main1;',
                'node [shape = box3d,label="シーン1"];main2;',
                'node [shape = box3d,label="ブランク"];main3;',
                'move1 -> main1 [label = "暗転あり"];',
                'main1 -> main2 [label = "次"];',
                'main1 -> main3 [label = "次次"];',
                            '}',

        '}',
     ]
         ,



];//var dots ここまで

