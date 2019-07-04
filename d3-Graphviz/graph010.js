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
      'rankdir = "LR";',
        'subgraph cluster_1 {',
            'label = "doPost(e)"',
                'node [shape = box3d,label="LINE_message_type"];s1;',
                'node [shape = box3d,label="LINE_message_text"];s2;',
                'node [shape = box3d,label="LINE_message_StickerID"];s3;',
                'node [shape = box3d,label="LINE_source_userId"];s4;',
                'node [shape = box3d,label="LINE_source_type"];s5;',
                'node [shape = box3d,label="LINE_replyToken"];s6;',
                'node [shape = box3d,label="LINE_item"];s7;',
                's1 -> s7 [dir = none,label = "配列[0]に値を代入"];',
                's2 -> s7 [dir = none,label = "配列[1]に値を代入"];',
                's3 -> s7 [dir = none,label = "配列[2]に値を代入"];',
                's4 -> s7 [dir = none,label = "配列[3]に値を代入"];',
                's5 -> s7 [dir = none,label = "配列[4]に値を代入"];',
                's6 -> s7 [dir = none,label = "配列[5]に値を代入"];',
                             '}',
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
        '}',
     ]
    //
    ,
    //グラフ002
     ['digraph{',
      'rankdir = "LR";',
        'subgraph cluster_1 {',
            'label = "doPost(e)"',
                'node [shape = box3d,     color = "orange",label="LINE_message_type"];s1;',
                'node [shape = box3d,     color = "orange",label="LINE_message_text"];s2;',
                'node [shape = box3d,     color = "orange",label="LINE_message_StickerID"];s3;',
                'node [shape = box3d,     color = "orange",label="LINE_source_userId"];s4;',
                'node [shape = box3d,     color = "orange",label="LINE_source_type"];s5;',
                'node [shape = box3d,     color = "orange",label="LINE_replyToken"];s6;',
                'node [shape = box3d,     color = "",label="LINE_item"];s7;',
                's1 -> s7 [dir = none, label = "配列[0]に値を代入"];',
                's2 -> s7 [dir = none, label = "配列[1]に値を代入"];',
                's3 -> s7 [dir = none, label = "配列[2]に値を代入"];',
                's4 -> s7 [dir = none, label = "配列[3]に値を代入"];',
                's5 -> s7 [dir = none, label = "配列[4]に値を代入"];',
                's6 -> s7 [dir = none, label = "配列[5]に値を代入"];',
                             '}',
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
        '}',
     ]
         ,
    //グラフ003
     ['digraph{',
      'rankdir = "LR";',
        'subgraph cluster_1 {',
            'label = "doPost(e)"',
                'node [shape = box3d,     color = "",label="LINE_message_type"];s1;',
                'node [shape = box3d,     color = "",label="LINE_message_text"];s2;',
                'node [shape = box3d,     color = "",label="LINE_message_StickerID"];s3;',
                'node [shape = box3d,     color = "",label="LINE_source_userId"];s4;',
                'node [shape = box3d,     color = "",label="LINE_source_type"];s5;',
                'node [shape = box3d,     color = "",label="LINE_replyToken"];s6;',
                'node [shape = box3d,     color = "",label="LINE_item"];s7;',
                's1 -> s7 [dir = "foword",color = "orange", label = "配列[0]に値を代入"];',
                's2 -> s7 [dir = "foword",color = "orange", label = "配列[1]に値を代入"];',
                's3 -> s7 [dir = "foword",color = "orange", label = "配列[2]に値を代入"];',
                's4 -> s7 [dir = "foword",color = "orange", label = "配列[3]に値を代入"];',
                's5 -> s7 [dir = "foword",color = "orange", label = "配列[4]に値を代入"];',
                's6 -> s7 [dir = "foword",color = "orange", label = "配列[5]に値を代入"];',
                             '}',
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
        '}',
     ]
         ,
    //グラフ004
     ['digraph{',
      'rankdir = "LR";',
        'subgraph cluster_1 {',
            'label = "doPost(e)"',
                'node [shape = box3d,     color = "",label="LINE_message_type"];s1;',
                'node [shape = box3d,     color = "",label="LINE_message_text"];s2;',
                'node [shape = box3d,     color = "",label="LINE_message_StickerID"];s3;',
                'node [shape = box3d,     color = "",label="LINE_source_userId"];s4;',
                'node [shape = box3d,     color = "",label="LINE_source_type"];s5;',
                'node [shape = box3d,     color = "",label="LINE_replyToken"];s6;',
                'node [shape = box3d,     color = "orange",label="LINE_item"];s7;',
                's1 -> s7 [dir = "foword",color = "",label = "配列[0]に値を代入"];',
                's2 -> s7 [dir = "foword",color = "",label = "配列[1]に値を代入"];',
                's3 -> s7 [dir = "foword",color = "",label = "配列[2]に値を代入"];',
                's4 -> s7 [dir = "foword",color = "",label = "配列[3]に値を代入"];',
                's5 -> s7 [dir = "foword",color = "",label = "配列[4]に値を代入"];',
                's6 -> s7 [dir = "foword",color = "",label = "配列[5]に値を代入"];',
                             '}',
        'subgraph cluster_2 {',
            'label = "Receive(LINE_item)"',
                'node [shape = box3d,label="LINE_item"];s8;',
                's7 -> s8 [label = "関数に引数として配列を渡す"];',
                            '}',
        '}',
     ]

];//var dots ここまで

