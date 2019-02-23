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
    graphviz
//        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/ホームゲートウェイ%2Fひかり電話ルータ_(PR-500KI)/icon", "400px", "300px")
//        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/Aterm_WG1200HS/icon", "400px", "300px")
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/MacBook/icon", "400px", "300px")
//        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/エプソン_PX-S160T_エコタンク搭載プリンター_ブラック/icon", "400px", "300px")

        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}

var dots = [
    [
        'digraph  {',
        '    node [style="filled"]',
//        '    A[labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/ホームゲートウェイ%2Fひかり電話ルータ_(PR-500KI)/icon", label="光モデム", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/ホームゲートウェイ%2Fひかり電話ルータ_(PR-500KI)]',
//        '    B[labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/Aterm_WG1200HS/icon", label="ルーター", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/Aterm_WG1200HS]',
        '    C[labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/MacBook/icon", label="Macbook", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/MacBook]',
//        '    D[labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/エプソン_PX-S160T_エコタンク搭載プリンター_ブラック/icon", label="プリンター【EPSON】", shape=plaintext,href="https://scrapbox.io/pages/Tanakake-memo/エプソン_PX-S160T_エコタンク搭載プリンター_ブラック]',
//        '    A -> B -> C',
//        '    B -> D',
        '}'
    ],
/*   [
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