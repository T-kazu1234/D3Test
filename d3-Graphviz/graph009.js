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
    'empty [label = "" shape = plaintext];',
    'node [shape = box,label="LINEトークルーム"];s0;',
    'node [shape = box,label="function doPost(e)",fontcolor="blue",href = "https://t-kazu1234.github.io/D3Test/d3-Graphviz/Graphviz_0_ver10.html"];s1;',
    'node [shape = box,label="function reply()"];s2;',
    'node [shape = box,label="function Debug()"];s3;',
    'node [shape = box,label="function Receive()"];s4;',
    'node [shape = box,label="function send()"];s5;',
        'empty -> s0 [label = "ボス！"];',
        's0 -> s1 [label = "Webhookイベントオブジェクト",fontcolor="blue",href = "https://developers.line.biz/ja/reference/messaging-api/#common-properties"];',
        's5 -> s2 [label = "text,LINE_replyToken"];',
        's2 -> s0 [label = "return UrlFetchApp.fetch()"];',
        's1 -> s4 [label = "引数"];',
        's4 -> s5 [label = "引数"];',
        '}',
     ],
    //グラフ001クリア
    // ['digraph{','}',],
    //グラフ002
     ['digraph{',
    'empty [label = "" shape = plaintext];',
    'node [shape = box, color = "orange" label="LINEトークルーム"];s0;',
    'node [shape = box,label="function doPost(e)",fontcolor="blue",href = "https://t-kazu1234.github.io/D3Test/d3-Graphviz/Graphviz_0_ver10.html"];s1;',
    'node [shape = box,label="function reply()"];s2;',
    'node [shape = box,label="function Debug()"];s3;',
    'node [shape = box,label="function Receive()"];s4;',
    'node [shape = box,label="function send()"];s5;',
        'empty -> s0 [label = "ボス！"];',
        's0 -> s1 [label = "Webhookイベントオブジェクト",fontcolor="blue",href = "https://developers.line.biz/ja/reference/messaging-api/#common-properties"];',
        's5 -> s2 [label = "text,LINE_replyToken"];',
        's2 -> s0 [label = "return UrlFetchApp.fetch()"];',
        's1 -> s4 [label = "引数"];',
        's4 -> s5 [label = "引数"];',
        '}',
     ]

];//var dots ここまで