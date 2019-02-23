var dotIndex = 0;
var graphviz = d3.select("#graph2").graphviz()
    .transition(function () {
        return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(1500);
    })
    .logEvents(true)
    .on("initEnd", render);

function render() {
    var dotLines = dots[dotIndex];
    var dot = dotLines.join('');
    //.addImage("画像として使用したいScrapBOXのアイコンページを指定"),"サイズ"
    graphviz
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/がんばるぞい/icon", "400px", "300px")//がんばるぞい
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", "300px", "300px")//Scrapbox
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", "300px", "300px")//アライさん
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", "300px", "300px")//HOME
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/Google/icon", "400px", "300px")//Google
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/Line/icon", "300px", "300px")//LINE
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx

        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}

var dots = [
    //グラフ001
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '}',
     ]
         ,
    //グラフ002
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
,
    //グラフ003
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
,
    //グラフ003
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ004
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "更新をチェック", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ005
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ006
     ['digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a3 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ007
     ['digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a3 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a4[fontname = ダミー,fontsize = 25,label = "【更新されていたら】通知する", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ008
     ['digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a5 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo/Line/icon", label="LINE", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a3 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a0 -> a4[fontname = ダミー,fontsize = 25,label = "【更新されていたら】通知する", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a4 -> a5[fontname = ダミー,fontsize = 25,label = "通知された内容をLINEへ送信", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,


     ['digraph{',
 /*       '	subgraph cluster_0 {',
		'   style=filled',
        '   color=lightgrey',
        '   node [style=filled,color=white]',
        '   a0 -> a1 -> a2 -> a3',
        'label = "process #1"',
      '   }',
*/
//      '    subgraph cluster_1 {',
        '       node [style=filled]',
        '    b3 [labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/がんばるぞい/icon", label=" 友希あいね", shape=plaintext,href="https://scrapbox.io/pages/T-kazu-Note/ごろごろ～"]',
        '    b0 -> b1 -> b2 -> b3',
        '    label = "process #2"',
        '    color=blue',
//      '    }',
        '    start -> a0',
        '    start -> b0',
        ' a1 -> b3',
        ' b2 -> a3',
        ' a3 -> a0',
        ' a3 -> end',
        ' b3 -> end',
        ' start [shape=Mdiamond]',
        '  end [shape=Msquare]',
        '}',
    ]
,
/*,
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon", label=" 友希あいね", shape=plaintext,href="https://scrapbox.io/pages/T-kazu-Note/ごろごろ～"]',
        '    b [fillcolor="#1f77b4"]',
        '    a -> b',
        '}'
    ],
//*   [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728"]',
        '    c [fillcolor="#2ca02c"]',
        '    b [fillcolor="#1f77b4"]',
        '    a -> b',
        '    a -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728"]',
        '    b [fillcolor="#1f77b4"]',
        '    c [fillcolor="#2ca02c"]',
        '    a -> b',
        '    a -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728", shape="box"]',
        '    b [fillcolor="#1f77b4", shape="parallelogram"]',
        '    c [fillcolor="#2ca02c", shape="pentagon"]',
        '    a -> b',
        '    a -> c',
        '    b -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="yellow", shape="star"]',
        '    b [fillcolor="yellow", shape="star"]',
        '    c [fillcolor="yellow", shape="star"]',
        '    a -> b',
        '    a -> c',
        '    b -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728", shape="triangle"]',
        '    b [fillcolor="#1f77b4", shape="diamond"]',
        '    c [fillcolor="#2ca02c", shape="trapezium"]',
        '    a -> b',
        '    a -> c',
        '    b -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728", shape="box"]',
        '    b [fillcolor="#1f77b4", shape="parallelogram"]',
        '    c [fillcolor="#2ca02c", shape="pentagon"]',
        '    a -> b',
        '    a -> c',
        '    b -> c',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    a [fillcolor="#d62728"]',
        '    b [fillcolor="#1f77b4"]',
        '    c [fillcolor="#2ca02c"]',
        '    a -> b',
        '    a -> c',
        '    c -> b',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    b [fillcolor="#1f77b4"]',
        '    c [fillcolor="#2ca02c"]',
        '    c -> b',
        '}'
    ],
    [
        'digraph  {',
        '    node [style="filled"]',
        '    b [fillcolor="#1f77b4"]',
        '}'
    ],
*/
];