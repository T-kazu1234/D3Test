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
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/GoogleAppsScript/icon", "300px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/Aterm_WG1200HS/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/MacBook/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/ホームゲートウェイ/icon", "400px", "300px")//アイコンページ名xx
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo-icons/光コンセント/icon", "400px", "300px")//アイコンページ名xx
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
        'subgraph cluster_1 {',
        '     node [style=filled];',
        'label = "家の中"',
        'S31[label="光コンセント",shape=plaintext,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/光コンセント/icon"]',
        'S32[label="光モデム",shape=plaintext,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ホームゲートウェイ/icon"]',
        'S31->S32 [dir = forward,label="受信"]',
        'S32->S33 [dir = forward,label="受信"]',
            'subgraph cluster_1_1 {',
            'label="接続機器の通信管理"',
            'S33image[label = "ルーター画像",image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Aterm_WG1200HS/icon",shape=plaintext]',
            'S33[label = "{ルーター|{無線管理|{<WiFi_001>WiFi_001|<WiFi_002>WiFi_002 |<WiFi_003>WiFi_003} }}", shape = record]',
            'S34[label = "iPhone", shape = record]',
            'S35[label = "MacBook",image="https://scrapbox.io/api/pages/Tanakake-memo-icons/MacBook/icon",shape=plaintext]',
            'S36[label = "RecBox", shape = record]',
            'S33:WiFi_001->S34 [ailport = e, headport = w,dir = forward,label="",style=dotted]',
            'S33:WiFi_002->S35 [ailport = e, headport = w,dir = forward,label="",style=dotted]',
            'S33:WiFi_003->S36 [ailport = e, headport = w,dir = forward,label="",style=dotted]',
            'rank = same; S34;',
            'rank = same; S35;',
            'rank = same; S36;',
            '}',
        '}',
        'subgraph cluster_2 {',
        '     node [style=filled];',
        'label = "家の外"',
        'S41[label="電柱",shape=plaintext]',
        'S42[label="モバイル通信網\n(携帯基地局)",shape=plaintext]',
        'S41->S31 [dir = forward,label="通信ケーブル\n(光ファイバー)"]',
        'S42->S34:WiFi_002 [dir = forward,label="無線\n(LTE)",style=dotted]',
/*ランク付けを試す
   {rank = same; 1550; b1; b2; b3; b4;}
   {rank = same; 1560; b5; b6; b7; b8;}
   {rank = same; 1570; b9; b10; b14; b15; b16; b17; b18;}
   {rank = same; 1580; b20; b21; b22; b23; b24; b25; b27; b28; b29;}
   {rank = same; 1590; b30; b31; b32;}
   {rank = same; 1600; b33;}
*/

        '}',
        '}',
     ]
        ,
//**************************************************************************************
//グラフ002
//上り通信**************************************************************************************
     ['digraph{',
        'subgraph cluster_1 {',
        '     node [style=filled];',
        'label = "家の中"',
        'S31[label="光コンセント",shape=plaintext,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/光コンセント/icon"]',
        'S32[label="光モデム",shape=plaintext,image="https://scrapbox.io/api/pages/Tanakake-memo-icons/ホームゲートウェイ/icon"]',
        'S31->S32 [dir = back,label="送信",color = "red"]',
        'S32->S33 [dir = back,label="送信",color = "red"]',
            'subgraph cluster_1_1 {',
            'label="接続機器の通信管理"',
            'S33image[label = "ルーター画像",image="https://scrapbox.io/api/pages/Tanakake-memo-icons/Aterm_WG1200HS/icon",shape=plaintext]',
            'S33[label = "{ルーター|{無線管理|{<WiFi_001>WiFi_001|<WiFi_002>WiFi_002 |<WiFi_003>WiFi_003} }}", shape = record]',
            'S34[label = "iPhone", shape = record]',
            'S35[label = "MacBook",image="https://scrapbox.io/api/pages/Tanakake-memo-icons/MacBook/icon",shape=plaintext]',
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