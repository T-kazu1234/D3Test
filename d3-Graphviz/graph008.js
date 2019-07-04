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
        '     node [style=filled];',
                'Node_0001[label="N01_頭の中の『気になっていること』全て",shape=plaintext]',
                'Node_0002[label="Q01",shape=Mdiamond]',
                'Node_0003[label="N02_Inbox",shape=box3d]',
                'Node_0004[label="N03_ゴミ箱",shape=box3d]',
                'Node_0005[label="N05_資料",shape=folder, style = "solid,filled",fontcolor="blue",color="black",fillcolor = "orange",href = "https://docs.google.com/spreadsheets/d/1MmKx5M1M3PdZTgt6Ol0oY1xCQkCVnM2TeFI0QoIOTgs/edit#gid=0"]',
                'Node_0006[label="N06_\nいつかやる/\nたぶんやるリスト",shape=note,style = "solid,filled",color="black",fillcolor = "white"]',
                'Node_0007[label="Q02",shape=Mdiamond]',
                'Node_0008[label="N08_プロジェクトリスト",shape=note,style = "solid,filled",color="black",fillcolor = "white"]',
                'Node_0009[label="N09_プロジェクトの参考情報",shape=folder, style = "solid,filled",fontcolor="blue",color="black",fillcolor = "orange",href = "https://docs.google.com/spreadsheets/d/1Jby2feuurpzWmN2iePCO9nIqciyVwoOi2gC9HVNti64/edit#gid=527991011"]',
                'Node_0010[label="N10_tanakake-memo",shape=plaintext]',
                'Node_0011[label="N11_tanakake-memo",shape=note]',

                       'Node_0001->Node_0003->Node_0002 [dir = none,label="",color = "red"]',
                       'Node_0002->Node_0004 [dir = none,label="",color = "red",tailport = e, headport = w]',
                       'Node_0002->Node_0005 [dir = none,label="",color = "red",tailport = e, headport = w]',
                       'Node_0002->Node_0006 [dir = none,label="",color = "red",tailport = e, headport = w]',
                       'Node_0002->Node_0007 [dir = none,label="",color = "red",tailport = s, headport = n]',
                        ' {rank = same; Node_0004; Node_0005; Node_0006;}',
        '}',
     ],


];