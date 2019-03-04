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
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/がんばるぞい/icon", "400px", "300px")//がんばるぞい
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", "300px", "300px")//Scrapbox
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", "300px", "300px")//アライさん
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", "300px", "300px")//HOME
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", "400px", "300px")//Google
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/Line/icon", "300px", "300px")//LINE
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/tanakafamily/icon", "300px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", "300px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/マーゲイ/icon", "300px", "300px")//マーゲイ
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/例のポーズ/icon", "400px", "300px")//例のポーズ
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/かばんちゃん/icon", "300px", "300px")//かばんちゃん
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ごろごろ～/icon", "400px", "300px")//アイコンページ名xx
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
//**************************************************************************************
//グラフ001
//下り通信**************************************************************************************
     ['digraph{',
        '     node [style=filled];',

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

/*

                '{rank = same; Node_0004;Node_0006;}',

        
        'Node_0002->Node_0003->Node_0004 [dir = none,label="",color = "red"]',
        'Node_0005->Node_0006 [dir = none,label="",color = "red"]',
        'Node_0003->Node_0005 [dir = none,label="",color = "red"]',

            '}',
*/


        '}',
     ]
        ,

];