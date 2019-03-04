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
            'subgraph cluster_1 {',
                '     node [style=filled];',
                'label = "ハードウェア"',
                'hard01[label="iPhone",shape=plaintext]',//ノード
                'hard02[label="MacBook",shape=plaintext,fontcolor="blue",href = "https://scrapbox.io/Tanakake-memo/MacBook"]',
                'hard03[label="デジカメ",shape=plaintext,color=""]',
                '{rank = same; hard01;hard02;hard03}',//ランク

                'subgraph cluster_1_1_1 {',
                    'node [style=filled];',
                    'label = "記録媒体"',
                    'hard_memory01[label="USBメモリ",shape=plaintext]',
                    'hard_memory02[label="SDカード",shape=plaintext]',
                           '{rank = same; hard_memory01;hard_memory02;}',

                    'subgraph cluster_1_2 {',
                        'node [style=filled];',
                        'label = "データ"',
                        'subgraph cluster_1_2_1 {',
                            'node [style=filled];',
                            'label = "ファイル"',
                            'data01[label="写真ファイル",shape=plaintext,color="green"]',
                            'data02[label="音声ファイル",shape=plaintext]',
                           '}',
                     'subgraph cluster_1_2_2 {',
                            'node [style=filled];',
                            'label = "拡張子"',
                            'kakucyoushi01[label="jpeg",shape=plaintext,color="green"]',
                            'kakucyoushi02[label="mp3",shape=plaintext]',
                        '}',

            '}',

            '}',
//              'S32->S33 [dir = forward,label="受信"]',
            '}',
            'subgraph cluster_2 {',
                '     node [style=filled];',
                'label = "ソフトウェア（プログラム）"',
                'soft01[label="LINE",shape=plaintext]',
                'soft02[label="Gmail",shape=plaintext]',
                'soft03[label="写真ビューワツール",shape=plaintext]',
            '}',
            'subgraph cluster_5 {',
                'node [style=filled];',
                'label = "WEBサービス"',
                'webService01[label="Line",shape=plaintext]',
                'webService02[label="Gmail",shape=plaintext]',
            '}',
            'subgraph cluster_6 {',
                'node [style=filled];',
                'label = "企業"',
                'Company01[label="Google",shape=plaintext]',
                'Company02[label="LINE株式会社",shape=plaintext,color=""]',
            '}',
//ノード
                'hard03->hard_memory02 [dir = none,label="01"]',
                'hard_memory02->hard02 [dir = none,label="02",color="",href = "https://scrapbox.io/Tanakake-memo/MacbookSDカードスロット"]',
//              'hard02->soft03 [dir = forward,label="データ書込み"]',
//              'hard_memory02->data01->kakucyoushi01 [dir = none,label=""]',

//              'kakucyoushi02->data02 [dir = none,label=""]',
//              'kakucyoushi01->soft03 [dir = none,label=""]',
                'Company02->webService01->soft01->{hard01,hard02}[dir = none,label=""]',
                'Company01->webService02->soft02[dir = none,label=""]',

                


        '}',
     ]
        ,
//グラフ002
     ['digraph{',
            'subgraph cluster_1 {',
                '     node [style=filled];',
                'label = "ハードウェア"',
                'hard01[label="iPhone",shape=plaintext]',//ノード
                'hard02[label="MacBook",shape=plaintext,fontcolor="blue",href = "https://scrapbox.io/Tanakake-memo/MacBook"]',
                'hard03[label="デジカメ",shape=plaintext,color="green"]',
                '{rank = same; hard01;hard02;hard03}',//ランク

                'subgraph cluster_1_1_1 {',
                    'node [style=filled];',
                    'label = "記録媒体"',
                    'hard_memory01[label="USBメモリ",shape=plaintext]',
                    'hard_memory02[label="SDカード",shape=plaintext]',
                           '{rank = same; hard_memory01;hard_memory02;}',

                    'subgraph cluster_1_2 {',
                        'node [style=filled];',
                        'label = "データ"',
                        'subgraph cluster_1_2_1 {',
                            'node [style=filled];',
                            'label = "ファイル"',
                            'data01[label="写真ファイル",shape=plaintext,color="green"]',
                            'data02[label="音声ファイル",shape=plaintext]',
                           '}',
                     'subgraph cluster_1_2_2 {',
                            'node [style=filled];',
                            'label = "拡張子"',
                            'kakucyoushi01[label="jpeg",shape=plaintext,color="green"]',
                            'kakucyoushi02[label="mp3",shape=plaintext]',
                        '}',

                '}',

                '}',
            '}',
            'subgraph cluster_2 {',
                '     node [style=filled];',
                'label = "ソフトウェア（プログラム）"',
                'soft01[label="LINE",shape=plaintext]',
                'soft02[label="Gmail",shape=plaintext]',
                'soft03[label="写真ビューワツール",shape=plaintext]',
            '}',
            'subgraph cluster_5 {',
                'node [style=filled];',
                'label = "WEBサービス"',
                'webService01[label="Line",shape=plaintext]',
                'webService02[label="Gmail",shape=plaintext]',
            '}',
            'subgraph cluster_6 {',
                'node [style=filled];',
                'label = "企業"',
                'Company01[label="Google",shape=plaintext]',
                'Company02[label="LINE株式会社",shape=plaintext,color=""]',
            '}',
//ノード
                'hard03->hard_memory02 [dir = none,label="01",color=""]',
                'hard_memory02->hard02 [dir = none,label="02",color="",href = "https://scrapbox.io/Tanakake-memo/MacbookSDカードスロット"]',
//              'hard02->soft03 [dir = forward,label="データ書込み"]',
//              'hard_memory02->data01->kakucyoushi01 [dir = none,label=""]',

//              'kakucyoushi02->data02 [dir = none,label=""]',
//              'kakucyoushi01->soft03 [dir = none,label=""]',
                'Company02->webService01->soft01->{hard01,hard02}[dir = none,label=""]',
                'Company01->webService02->soft02[dir = none,label=""]',




        '}',
     ]
        ,
//グラフ003
             ['digraph{',
            'subgraph cluster_1 {',
                '     node [style=filled];',
                'label = "ハードウェア"',
                'hard01[label="iPhone",shape=plaintext]',//ノード
                'hard02[label="MacBook",shape=plaintext,fontcolor="blue",href = "https://scrapbox.io/Tanakake-memo/MacBook"]',
                'hard03[label="デジカメ",shape=plaintext,color=""]',
                '{rank = same; hard01;hard02;hard03}',//ランク

                'subgraph cluster_1_1_1 {',
                    'node [style=filled];',
                    'label = "記録媒体"',
                    'hard_memory01[label="USBメモリ",shape=plaintext]',
                    'hard_memory02[label="SDカード",shape=plaintext,color="green"]',
                           '{rank = same; hard_memory01;hard_memory02;}',

                    'subgraph cluster_1_2 {',
                        'node [style=filled];',
                        'label = "データ"',
                        'subgraph cluster_1_2_1 {',
                            'node [style=filled];',
                            'label = "ファイル"',
                            'data01[label="写真ファイル",shape=plaintext,color="green"]',
                            'data02[label="音声ファイル",shape=plaintext]',
                           '}',
                     'subgraph cluster_1_2_2 {',
                            'node [style=filled];',
                            'label = "拡張子"',
                            'kakucyoushi01[label="jpeg",shape=plaintext,color="green"]',
                            'kakucyoushi02[label="mp3",shape=plaintext]',
                        '}',

            '}',

            '}',
//              'S32->S33 [dir = forward,label="受信"]',
            '}',
            'subgraph cluster_2 {',
                '     node [style=filled];',
                'label = "ソフトウェア（プログラム）"',
                'soft01[label="LINE",shape=plaintext]',
                'soft02[label="Gmail",shape=plaintext]',
                'soft03[label="写真ビューワツール",shape=plaintext]',
            '}',
            'subgraph cluster_5 {',
                'node [style=filled];',
                'label = "WEBサービス"',
                'webService01[label="Line",shape=plaintext]',
                'webService02[label="Gmail",shape=plaintext]',
            '}',
            'subgraph cluster_6 {',
                'node [style=filled];',
                'label = "企業"',
                'Company01[label="Google",shape=plaintext]',
                'Company02[label="LINE株式会社",shape=plaintext,color=""]',
            '}',
//ノード
                'hard03->hard_memory02 [dir = forward,label="01",color="green"]',
                'hard_memory02->hard02 [dir = none,label="02",color="",href = "https://scrapbox.io/Tanakake-memo/MacbookSDカードスロット"]',
//              'hard02->soft03 [dir = forward,label="データ書込み"]',
//              'hard_memory02->data01->kakucyoushi01 [dir = none,label=""]',

//              'kakucyoushi02->data02 [dir = none,label=""]',
//              'kakucyoushi01->soft03 [dir = none,label=""]',
                'Company02->webService01->soft01->{hard01,hard02}[dir = none,label=""]',
                'Company01->webService02->soft02[dir = none,label=""]',
        '}',
             ]
        ,
//グラフ004
             ['digraph{',
            'subgraph cluster_1 {',
                '     node [style=filled];',
                'label = "ハードウェア"',
                'hard01[label="iPhone",shape=plaintext]',//ノード
                'hard02[label="MacBook",shape=plaintext,shape=plaintext,color="green",fontcolor="blue",href = "https://scrapbox.io/Tanakake-memo/MacBook"]',
                'hard03[label="デジカメ",shape=plaintext,color=""]',
                '{rank = same; hard01;hard02;hard03}',//ランク

                'subgraph cluster_1_1_1 {',
                    'node [style=filled];',
                    'label = "記録媒体"',
                    'hard_memory01[label="USBメモリ",shape=plaintext]',
                    'hard_memory02[label="SDカード",shape=plaintext,color=""]',
                           '{rank = same; hard_memory01;hard_memory02;}',

                    'subgraph cluster_1_2 {',
                        'node [style=filled];',
                        'label = "データ"',
                        'subgraph cluster_1_2_1 {',
                            'node [style=filled];',
                            'label = "ファイル"',
                            'data01[label="写真ファイル",shape=plaintext,color="green"]',
                            'data02[label="音声ファイル",shape=plaintext]',
                           '}',
                     'subgraph cluster_1_2_2 {',
                            'node [style=filled];',
                            'label = "拡張子"',
                            'kakucyoushi01[label="jpeg",shape=plaintext,color="green"]',
                            'kakucyoushi02[label="mp3",shape=plaintext]',
                        '}',

            '}',

            '}',
//              'S32->S33 [dir = forward,label="受信"]',
            '}',
            'subgraph cluster_2 {',
                '     node [style=filled];',
                'label = "ソフトウェア（プログラム）"',
                'soft01[label="LINE",shape=plaintext]',
                'soft02[label="Gmail",shape=plaintext]',
                'soft03[label="写真ビューワツール",shape=plaintext]',
            '}',
            'subgraph cluster_5 {',
                'node [style=filled];',
                'label = "WEBサービス"',
                'webService01[label="Line",shape=plaintext]',
                'webService02[label="Gmail",shape=plaintext]',
            '}',
            'subgraph cluster_6 {',
                'node [style=filled];',
                'label = "企業"',
                'Company01[label="Google",shape=plaintext]',
                'Company02[label="LINE株式会社",shape=plaintext,color=""]',
            '}',
//ノード
                'hard03->hard_memory02 [dir = none,label="01",color=""]',
                'hard_memory02->hard02 [dir = forward,label="02",color="green", href = "https://scrapbox.io/Tanakake-memo/MacbookSDカードスロット"]',

//              'hard02->soft03 [dir = forward,label="データ書込み"]',
//              'hard_memory02->data01->kakucyoushi01 [dir = none,label=""]',

//              'kakucyoushi02->data02 [dir = none,label=""]',
//              'kakucyoushi01->soft03 [dir = none,label=""]',
                'Company02->webService01->soft01->{hard01,hard02}[dir = none,label=""]',
                'Company01->webService02->soft02[dir = none,label=""]',
        '}',
             ]
        ,
];