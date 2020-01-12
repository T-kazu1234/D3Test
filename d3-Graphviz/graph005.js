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
//**************************************************************************************
     ['digraph{',
        '     node [style=filled];',

        'subgraph cluster_1 {',
            'label = "enchant"',
                'Node_0102[label="EventTarget",shape=plaintext]',
                'Node_0103[label="Game",shape=plaintext]',
                'Node_0104[label="Node",shape=plaintext]',
                'Node_0105[label="Entity",shape=plaintext]',
                'Node_0106[label="Sprite",shape=plaintext]',
                'Node_0107[label="Group",shape=plaintext]',
                'Node_0108[label="Scene",shape=plaintext]',
            '}',

        'subgraph cluster_2 {',
           'label = "enchant.nineleap"',
                'Node_0201[label="SprashScene",shape=plaintext]',
                'Node_0202[label="Game",shape=plaintext]',
                            '}',
        'subgraph cluster_3 {',
           'label = "HTMLObject"',
                'Node_0301[label="select",shape=plaintext]',
                'Node_0302[label="option",shape=plaintext]',
            '}',
        'subgraph cluster_4 {',
           'label = "Vue"',
                'Node_0401[label="data",shape=plaintext]',
                'Node_0402[label="aaa",shape=plaintext]',
            '}',
        'subgraph cluster_5 {',
           'label = "GoogleAppScript"',
                'Node_0501[label="main.gs",shape=plaintext]',
                'Node_0502[label="～.exe",shape=plaintext]',
            '}',
        'subgraph cluster_6 {',
           'label = "GoogleSpreadSheet"',
                'Node_0601[label="ブック名～",shape=plaintext]',
                'Node_0602[label="シート名",shape=plaintext]',
            '}',

        'Node_0102->Node_0104->Node_0105->Node_0106 [dir = back,label="",color = "red"]',
        'Node_0102->Node_0103->Node_0202 [dir = back,label="",color = "red"]',
        'Node_0104->Node_0107->Node_0108->Node_0201 [dir = back,label="",color = "red"]',
        'Node_0105->Node_0301->Node_0302 [dir = back,label="addchild",color = "red"]',
        'Node_0502->Node_0108 [dir = back,label="fetch",color = "red"]',
        'Node_0501->Node_0502 [dir = back,label="doPost(e)",color = "red"]',
        'Node_0502->Node_0501 [dir = back,label="return",color = ""]',
        'Node_0108->Node_0502 [dir = back,label="result",color = ""]',
        'Node_0501->Node_0601 [dir = back,label="コンテナバインド",color = ""]',
        'Node_0601->Node_0501 [dir = back,label="コンテナバインド",color = "red"]',

        '}',
     ]
        //[dir = forward,label="",color = "red"]',
        //[dir = back,label="",color = "red"]',
//**************************************************************************************
//グラフ002
//**************************************************************************************
];