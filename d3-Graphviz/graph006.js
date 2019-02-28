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
                'Node_0001[label="N1_",shape=plaintext]',

                'Node_0013[label="N13_Sprite",shape=plaintext]',
                'Node_0014[label="N14_Group",shape=plaintext]',
                'Node_0015[label="N15_Scene",shape=plaintext]',

        'subgraph cluster_1 {',
            'label = "図解思考"',
                'Node_0003[label="N3_要素",shape=plaintext]',
                'Node_0005[label="N5_結びつき",shape=plaintext]',
                '{rank = same; Node_0003;Node_0005;}',

            '}',
        'subgraph cluster_2 {',
           'label = "ドット言語"',
                'Node_0004[label="N4_ノード",shape=plaintext]',
                'Node_0006[label="N6エッジ",shape=plaintext]',
                '{rank = same; Node_0004;Node_0006;}',

            '}',
        'subgraph cluster_3 {',
           'label = "文章"',
                'Node_0002[label="N2_主語",shape=plaintext]',

            '}',
        'Node_0001->Node_0002->Node_0003->Node_0004 [dir = none,label="",color = "red"]',
        'Node_0005->Node_0006 [dir = none,label="",color = "red"]',
        'Node_0003->Node_0005 [dir = none,label="",color = "red"]',

        'subgraph cluster_4 {',
           'label = "ツール"',
                'Node_0008[label="N8_Graphviz",shape=plaintext]',

            '}',
        'subgraph cluster_5 {',
           'label = "プログラミング"',
                'Node_0007[label="N7_アルゴリズム",shape=plaintext]',
                            'subgraph cluster_5_1 {',
                            'label = "言語"',
                            'Node_0009[label="N9_javascript",shape=plaintext]',
                            '}',
                                                        'subgraph cluster_5_2 {',
                                                        'label = "Library"',
                                                        'Node_0010[label="N10_Viz.js",shape=plaintext]',
                                                        'Node_0011[label="N11_D3.js",shape=plaintext]',
                                                        'Node_0012[label="N12_d3-graphviz.js",shape=plaintext]',
                                                        '{rank = same; Node_0010;Node_0011;Node_0012;}',
                                                        '}',


            '}',


        '}',
     ]
        ,
        //[dir = forward,label="",color = "red"]',
        //[dir = back,label="",color = "red"]',
//**************************************************************************************
//グラフ002
/*上り通信**************************************************************************************
     ['digraph{',
        '     node [style=filled];',
        'label = "enchant"',
        'subgraph cluster_1 {',

        'S31[label="光コンセント",shape=plaintext]',
        'S32[label="光モデム",shape=plaintext]',
        'S31->S32 [dir = back,label="送信",color = "red"]',
        'S32->S33 [dir = back,label="送信",color = "red"]',
            'subgraph cluster_1_1 {',
            'label="接続機器の通信管理"',
            'S33[label = "{ルーター|{無線管理|{<WiFi_001>WiFi_001|<WiFi_002>WiFi_002 |<WiFi_003>WiFi_003} }}", shape = record]',
            'S34[label = "iPhone", shape = record]',
            'S35[label = "MacBook", shape = record]',
            'S36[label = "RecBox", shape = record]',
            'S33:WiFi_001->S34 [ailport = e, headport = w,dir = back,label="",color = "red",style=dotted]',
            'S33:WiFi_002->S35 [ailport = e, headport = w,dir = back,label="",color = "red",style=dotted]',
            'S33:WiFi_003->S36 [ailport = e, headport = w,dir = back,label="",color = "red",style=dotted]',
            'rank = same; S33;S34;S35;S36;',
            '}',
        '}',
        'subgraph cluster_2 {',
        '     node [style=filled];',
        'label = "家の外"',
        'S41[label="電柱",shape=plaintext]',
        'S42[label="モバイル通信網\n(携帯基地局)",shape=plaintext]',
        'S41->S31 [dir = back,label="通信ケーブル\n(光ファイバー)",color = "red"]',
        'S42->S34:WiFi_002 [dir = back,label="無線\n(LTE)",color = "red",style=dotted]',
        '}',
        '}',
     ],
*/
//**************************************************************************************
/*

//tailport = e, headport = w,

        ,    //グラフ003
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
,
    //グラフ003
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    //グラフ004
     [  'digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
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
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
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
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
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
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
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
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a5 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Line/icon", label="LINE", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
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
    //グラフ009
     ['digraph{',
        '       node [style=filled]',
        '    a0 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ScrapBox/icon", label="ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a1 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/HOME/icon", label="Tanakake-memo", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a2 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/アライさん/icon", label=" user", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a3 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Google/icon", label="【企業】Google", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a4 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", label="【サービス】GoogleAppsScript", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a5 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Line/icon", label="LINE", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
        '    a6 [labelloc=b,fontsize = 50,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/tanakafamily/icon", label="LINE", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/アライさん/"]',
//      '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "プロジェクト", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "書込みする", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a2 -> a1[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a1 -> a0[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a3 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a0 -> a4[fontname = ダミー,fontsize = 25,label = "【更新されていたら】通知する", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a0 -> a4[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
//      '    a4 -> a5[fontname = ダミー,fontsize = 25,label = "通知された内容をLINEへ送信", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a4 -> a5[fontname = ダミー,fontsize = 25,label = "", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '    a5 -> a6[fontname = ダミー,fontsize = 25,label = "LineNotifyからtanaka familyのトークルームに投稿", href="http://ja.wikipedia.org/wiki/師弟" ]',
        '}',
     ]
         ,
    

//*
     ['digraph{',
        '	subgraph cluster_0 {',
		'   style=filled',
        '   color=lightgrey',
        '   node [style=filled,color=white]',
        '   a0 -> a1 -> a2 -> a3',
        'label = "process #1"',
      '   }',
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