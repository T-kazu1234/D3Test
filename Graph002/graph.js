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
        .addImage("https://scrapbox.io/api/pages/Tanakake-memo/がんばるぞい/icon", "400px", "300px")
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", "400px", "300px")
    	.addImage("https://scrapbox.io/api/pages/Tanakake-memo/ごろごろ～/icon", "400px", "300px")
        .renderDot(dot)
        .on("end", function () {
            dotIndex = (dotIndex + 1) % dots.length;
            render();
        });
}

var dots = [
     [  'digraph{',
 /*       '	subgraph cluster_0 {',
		'   style=filled',
        '   color=lightgrey',
        '   node [style=filled,color=white]',
        '   a0 -> a1 -> a2 -> a3',
        'label = "process #1"',
      '   }',
*/
//      '    subgraph cluster_1 {',
        '       node [style=filled]',
        '    b0 [labelloc=b,fontsize = 18,image="https://scrapbox.io/api/pages/Tanakake-memo/ScrapBox/icon", label=" ScrapBox", shape=plaintext,href="https://scrapbox.io/pages/T-kazu-Note/ごろごろ～"]',
        '    b0 -> b1 -> b2 -> b3 -> b0',
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
     ['digraph{',
 /*       '	subgraph cluster_0 {',
		'   style=filled',
        '   color=lightgrey',
        '   node [style=filled,color=white]',
        '   a0 -> a1 -> a2 -> a3',
        'label = "process #1"',
      '   }',
*/
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
/*,
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