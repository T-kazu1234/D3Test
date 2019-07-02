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
//**************************************************************************************
//グラフ001
//**************************************************************************************
     ['digraph{',
//      'rankdir = "LR";',
    'empty [label = "" shape = plaintext];',
    'node [shape = box,label="LINEトークルーム"];s0;',
    'node [shape = box,label="function doPost(e)",fontcolor="blue",href = "https://t-kazu1234.github.io/D3Test/d3-Graphviz/Graphviz_0_ver10.html"];s1;',
    'node [shape = box,label="function reply()"];s2;',
    'node [shape = box,label="function Debug()"];s3;',
    'node [shape = box,label="function Receive()"];s4;',
    'node [shape = box,label="function send()"];s5;',
    
//    'node [shape = doublecircle]; e1 e2;',
    'empty -> s0 [label = "ボス！"];',
    's0 -> s1 [label = "Webhookイベントオブジェクト",fontcolor="blue",href = "https://developers.line.biz/ja/reference/messaging-api/#common-properties"];',
    's5 -> s2 [label = "text,LINE_replyToken"];',
//    's1 -> s3 [label = "引数",fontcolor="blue",href = "https://docs.google.com/spreadsheets/d/1Jby2feuurpzWmN2iePCO9nIqciyVwoOi2gC9HVNti64/edit#gid=527991011"];',
    's2 -> s0 [label = "return UrlFetchApp.fetch()"];',
    's1 -> s4 [label = "引数"];',
    's4 -> s5 [label = "引数"];',



//    's1 -> s3 [label = "Debug_FunctionName,Debug_Value1,Debug_Value2,Debug_Value3,Debug_Value4,Debug_Value5,Debug_Value6,Debug_Value7,Debug_Value8,Debug_Value9"];',
//    's3 -> s2 [label = "2/d"];',
//    's3 -> e2 [label = "4"];',
//    's2 -> e1 [label = "0"];',
//    's2 -> s2 [label = "2"]; ',
        '}',
     ]
        ,
/*
//**************************************************************************************
//グラフ001
//下り通信**************************************************************************************
     ['digraph{',
        '     node [style=filled];',
                'Node_0001[label="N01_頭の中の『気になっていること』全て",shape=plaintext]',
                'Node_0002[label="Q01",shape=Mdiamond]',
                'Node_0003[label="N02_Inbox",shape=box3d]',
                'Node_0004[label="N03_ゴミ箱",shape=box3d]',
                'Node_0005[label="N05_資料",shape=folder, style = "solid,filled",fontcolor="blue",color="black",fillcolor = "orange",href = "https://docs.google.com/spreadsheets/d/1MmKx5M1M3PdZTgt6Ol0oY1xCQkCVnM2TeFI0QoIOTgs/edit#gid=0"]',
                'Node_0006[label="N06_\nいつかやる/\nたぶんやるリスト",shape=note,style = "solid,filled",color="black",fillcolor = "white"]',
                'Node_0007[label="Q02",shape=Mdiamond]',
                'Node_0008[label="N8_tanakake-memo",shape=plaintext]',
                'Node_0009[label="N9_tanakake-memo",shape=plaintext]',
                'Node_0010[label="N10_tanakake-memo",shape=plaintext]',
                'Node_0011[label="N11_プロジェクトの資料",shape=note, style = "solid,filled",fontcolor="blue",color="black",fillcolor = "white",href = "https://docs.google.com/spreadsheets/d/1Jby2feuurpzWmN2iePCO9nIqciyVwoOi2gC9HVNti64/edit#gid=527991011"]',

       'Node_0001->Node_0003->Node_0002 [dir = none,label="",color = "red"]',
       'Node_0002->Node_0004 [dir = none,label="",color = "red",tailport = e, headport = w]',
       'Node_0002->Node_0005 [dir = none,label="",color = "red",tailport = e, headport = w]',
       'Node_0002->Node_0006 [dir = none,label="",color = "red",tailport = e, headport = w]',
        ' {rank = same; Node_0004; Node_0005; Node_0006;}',
/*
        'subgraph cluster_1 {',
            'label = "ScrapBox"',
                'subgraph cluster_1_1 {',
                    'label = "Project"',
                'Node_0001[label="N1_tanakake-memo",shape=plaintext]',
                '}',
                'subgraph cluster_1_2 {',
                    'label = "Settings"',
                'Node_0002[label="N2_SettingsMenu01",shape=plaintext]',
                '}',


            '}',

        'subgraph cluster_2 {',
           'label = "GoogleAppScripts(GAS)"',
           'href = "https://scrapbox.io/T-kazu-Note/Google_Apps_Script"',
                'Node_0003[label="\nN3_LINEへの自動投稿テスト\n￣￣￣￣￣￣￣￣￣￣￣￣￣",shape=plaintext, fontcolor = blue, decolate = true, href = "https://script.google.com/d/136OgXNLSXagbTgPMUqopZa3ghFfw34f8d0wauR1QEsdAQ3NibMPLMwia/edit"]',
                
            '}',

        'subgraph cluster_3 {',
           'label = "LINE"',
                'Node_0004[label="N4_",shape=plaintext]',
                'subgraph cluster_3_1 {',
                    'label = "LINE_Notify"',

                'Node_0005[label="N5_チャットボット用アカウント",shape=plaintext]',
                '}',
                'subgraph cluster_3_2 {',
                    'label = "talk_room"',
                'Node_0006[label="N6_tanakafamily",shape=plaintext]',
                'Node_0007[label="N7_ScrapBox通知",shape=plaintext]',

                '}',

            '}',



                '{rank = same; Node_0004;Node_0006;}',

        
        'Node_0005->Node_0006 [dir = none,label="",color = "red"]',
        'Node_0003->Node_0005 [dir = none,label="",color = "red"]',

            '}',


        '}',
     ]
        ,
*/

]
//];//var dots ここまで