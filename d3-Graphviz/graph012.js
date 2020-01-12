var dotIndex = 0;
var graphviz = d3.select("#graph2").graphviz()
    .transition(function () {
        return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(3000);
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
            'label = "設計"',
                'node [shape = planetext,fontcolor="",label="改札機を通る時に\n「運賃」よりICカードの「残高」が小さければ\n改札機を通れないようにする"];s1;',
                'node [shape = planetext,fontcolor="White",label="「運賃」より「残高」が小さければ\nエラーにする"];s2;',
                'node [shape = planetext,fontcolor="White",label="「運賃」の変数名を\n「unchin」とする"];s3;',
                'node [shape = planetext,fontcolor="White",label="「残高」の変数名を\n「zandaka」とする"];s4;',
                's1 -> s2 [dir = none,color = "",fontcolor="White",label = "プログラムでやりたいことを\n日本語で書く"];',
                's2 -> s3 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                's2 -> s4 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                             '}',
/*
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
*/

        '}',

     ]
    ,
    //グラフ002
     ['digraph{',
       'rankdir = "TB";',
        'subgraph cluster_1 {',
            'label = "設計"',
                'node [shape = planetext,fontcolor="",label="改札機を通る時に\n「運賃」よりICカードの「残高」が小さければ\n改札機を通れないようにする"];s1;',
                'node [shape = planetext,fontcolor="White",label="「運賃」より「残高」が小さければ\nエラーにする"];s2;',
                'node [shape = planetext,fontcolor="White",label="「運賃」の変数名を\n「unchin」とする"];s3;',
                'node [shape = planetext,fontcolor="White",label="「残高」の変数名を\n「zandaka」とする"];s4;',
                's1 -> s2 [dir = "foword",color = "red",fontcolor="red",label = "プログラムでやりたいことを\n日本語で書く"];',
                's2 -> s3 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                's2 -> s4 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                             '}',
/*
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
*/
        '}',

     ]
         ,
    //グラフ003
     ['digraph{',
       'rankdir = "TB";',
        'subgraph cluster_1 {',
            'label = "設計"',
                'node [shape = planetext,fontcolor="",label="改札機を通る時に\n「運賃」よりICカードの「残高」が小さければ\n改札機を通れないようにする"];s1;',
                'node [shape = planetext,fontcolor="red",label="「運賃」より「残高」が小さければ\nエラーにする"];s2;',
                'node [shape = planetext,fontcolor="White",label="「運賃」の変数名を\n「unchin」とする"];s3;',
                'node [shape = planetext,fontcolor="White",label="「残高」の変数名を\n「zandaka」とする"];s4;',
                's1 -> s2 [dir = "foword",color = "",fontcolor="",label = "プログラムでやりたいことを\n日本語で書く"];',
                's2 -> s3 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                's2 -> s4 [dir = none,color = "",fontcolor="White",label = "変数名を決める"];',
                             '}',
/*
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
*/
        '}',

     ]
         ,
    //グラフ004
     ['digraph{',
       'rankdir = "TB";',
        'subgraph cluster_1 {',
            'label = "設計"',
                'node [shape = planetext,fontcolor="",label="改札機を通る時に\n「運賃」よりICカードの「残高」が小さければ\n改札機を通れないようにする"];s1;',
                'node [shape = planetext,fontcolor="",label="「運賃」より「残高」が小さければ\nエラーにする"];s2;',
                'node [shape = planetext,fontcolor="White",label="「運賃」の変数名を\n「unchin」とする"];s3;',
                'node [shape = planetext,fontcolor="White",label="「残高」の変数名を\n「zandaka」とする"];s4;',
                's1 -> s2 [dir = "",color = "",fontcolor="",label = "プログラムでやりたいことを\n日本語で書く"];',
                's2 -> s3 [dir = "foword",color = "red",fontcolor="red",label = "変数名を決める"];',
                's2 -> s4 [dir = "foword",color = "red",fontcolor="White",label = "変数名を決める"];',
                             '}',
/*
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
*/
        '}',

     ]
         ,
    //グラフ005
     ['digraph{',
       'rankdir = "TB";',
        'subgraph cluster_1 {',
            'label = "設計"',
                'node [shape = planetext,fontcolor="",label="改札機を通る時に\n「運賃」よりICカードの「残高」が小さければ\n改札機を通れないようにする"];s1;',
                'node [shape = planetext,fontcolor="",label="「運賃」より「残高」が小さければ\nエラーにする"];s2;',
                'node [shape = planetext,fontcolor="red",label="「運賃」の変数名を\n「unchin」とする"];s3;',
                'node [shape = planetext,fontcolor="red",label="「残高」の変数名を\n「zandaka」とする"];s4;',
                's1 -> s2 [dir = "",color = "",fontcolor="",label = "プログラムでやりたいことを\n日本語で書く"];',
                's2 -> s3 [dir = "foword",color = "",fontcolor="",label = "変数名を決める"];',
                's2 -> s4 [dir = "foword",color = "",fontcolor="White",label = "変数名を決める"];',
                             '}',
/*
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
*/
        '}',

     ]
         ,



];//var dots ここまで

